"""
Sonografica — bake Suno playlists into index.html.
Reads each artist's Suno playlist URL from the ARTISTS array in index.html,
fetches every track, and rewrites the inline SUNO data block so the page
needs no API call at runtime. Run by .github/workflows/sync_suno.yml.
"""
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, "index.html")
API = "https://studio-api.prod.suno.com/api/playlist/{}?page={}"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"}
BLOCK = re.compile(r"(/\*SUNO:START\*/).*?(/\*SUNO:END\*/)", re.DOTALL)


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=20) as r:
        return json.loads(r.read().decode("utf-8"))


def fetch(pid):
    tracks, page = [], 1
    while True:
        d = get(API.format(pid, page))
        clips = d.get("playlist_clips") or []
        for c in clips:
            clip = c.get("clip") or {}
            if not clip.get("id") or not (clip.get("title") or "").strip():
                continue
            tracks.append({
                "id": clip["id"],
                "t": clip["title"].strip(),
                "img": clip.get("image_url") or clip.get("image_large_url") or "",
                "at": (clip.get("created_at") or "")[:10],
            })
        if not clips or len(tracks) >= (d.get("num_total_results") or 0) or page >= 20:
            return tracks
        page += 1


def main():
    html = open(INDEX, encoding="utf-8").read()
    old = BLOCK.search(html)
    old_data = json.loads(html[old.end(1):old.start(2)].strip().removeprefix("window.SUNO =").rstrip(";").strip() or "{}")

    artists = re.findall(r'\{ id: "([\w-]+)"[^\n]*?suno: "https://suno\.com/playlist/([0-9a-f-]+)', html)
    data, failed = {}, 0
    for aid, pid in artists:
        try:
            data[aid] = fetch(pid)
            print(f"[OK]   {aid}: {len(data[aid])} tracks")
        except Exception as e:
            failed += 1
            data[aid] = old_data.get(aid, [])  # keep the last good copy
            print(f"[FAIL] {aid}: {e} (kept {len(data[aid])} cached)")
    if failed == len(artists):
        sys.exit("Suno API unreachable; index.html left untouched")

    blob = "window.SUNO = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";"
    new = html[:old.end(1)] + blob + html[old.start(2):]
    if new == html:
        print("No changes.")
        return
    open(INDEX, "w", encoding="utf-8", newline="\n").write(new)
    print("index.html updated.")


if __name__ == "__main__":
    main()
