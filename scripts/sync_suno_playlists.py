"""
Sonografica — Automatic Suno Playlist Sync
Fetches tracklists from public Suno playlist APIs and updates script.js and suno_catalog.json.
"""
import json
import re
import urllib.request
import sys
import os

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PLAYLISTS = {
    "bito": "fc5d3e91-f654-470b-9522-95743e595374",
    "valotoa": "33ac32e8-9114-4a06-9da9-d5ec5d6de21b",
    "hizumi": "20aa266e-cde7-4115-9795-30e75c164d01",
    "pophoper": "0635e884-f792-47ac-91c4-c334b605ba0a",
    "stray": "99f6ddfd-d458-40cc-92e5-65141503e6df",
    "dayendnight": "c685d560-7182-4a81-b430-b4bf33bcfd4f",
    "asymptote": "c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb",
    "rupture": "bf788bfc-318f-4e1b-849f-aae04e0055c6",
    "sonografica-artist": "6e89b45f-0ade-423e-9acd-cec8b0303665",
    "metropolitans": "f59d229a-79fc-4b48-b36a-1efbac94175f"
}

def fetch_playlist_tracks(pid):
    url = f"https://studio-api.prod.suno.com/api/playlist/{pid}"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        name = data.get("name", "")
        clips = data.get("playlist_clips", [])
        tracks = []
        for c in clips:
            clip = c.get("clip", {})
            sid = clip.get("id")
            title = clip.get("title", "").strip()
            img = clip.get("image_large_url") or clip.get("image_url")
            vid = clip.get("video_url")
            if sid and title:
                tracks.append({
                    "id": sid,
                    "title": title,
                    "image": img,
                    "stream": vid or f"https://cdn1.suno.ai/{sid}.mp4"
                })
        return name, tracks

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    script_js_path = os.path.join(root_dir, "script.js")
    catalog_path = os.path.join(root_dir, "scripts", "suno_catalog.json")

    print("[1/3] Fetching latest playlists from Suno API...")
    catalog = {}
    for aid, pid in PLAYLISTS.items():
        try:
            name, tracks = fetch_playlist_tracks(pid)
            catalog[aid] = {"title": name, "tracks": tracks}
            print(f"  [OK] {aid}: {len(tracks)} tracks")
        except Exception as e:
            print(f"  [FAIL] {aid}: {e}")

    # Save catalog
    with open(catalog_path, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)
    print(f"[2/3] Saved catalog to {catalog_path}")

    # Update script.js
    print("[3/3] Checking script.js...")
    with open(script_js_path, "r", encoding="utf-8") as f:
        js = f.read()

    # Find the const artists array
    m = re.search(r'const artists = (\[.*?\]);', js, re.DOTALL)
    if not m:
        print("Error: Could not find 'const artists' array in script.js")
        sys.exit(1)

    artists_data = json.loads(m.group(1))

    updated_count = 0
    for artist in artists_data:
        aid = artist.get("id")
        if aid in catalog and catalog[aid].get("tracks"):
            old_tracks = artist.get("sunoTracks", [])
            new_tracks = catalog[aid]["tracks"]
            if old_tracks != new_tracks:
                artist["sunoTracks"] = new_tracks
                updated_count += 1

    if updated_count > 0:
        new_artists_js = json.dumps(artists_data, ensure_ascii=False, indent=4)
        new_js = js[:m.start(1)] + new_artists_js + js[m.end(1):]
        with open(script_js_path, "w", encoding="utf-8") as f:
            f.write(new_js)
        print(f"Successfully updated script.js with {updated_count} changed playlists.")
    else:
        print("All playlists in script.js are already up-to-date.")

if __name__ == "__main__":
    main()
