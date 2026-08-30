import json, re, urllib.request

playlists = {
    "valotoa": "c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb",
    "hizumi": "20aa266e-cde7-4115-9795-30e75c164d01",
    "pophoper": "0635e884-f792-47ac-91c4-c334b605ba0a",
    "stray": "99f6ddfd-d458-40cc-92e5-65141503e6df",
    "dayendnight": "c685d560-7182-4a81-b430-b4bf33bcfd4f",
    "asymptote": "c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb",
    "rupture": "bf788bfc-318f-4e1b-849f-aae04e0055c6",
    "sonografica-artist": "6e89b45f-0ade-423e-9acd-cec8b0303665",
    "metropolitans": "f59d229a-79fc-4b48-b36a-1efbac94175f"
}

results = {}
for name, pid in playlists.items():
    api_url = f"https://studio-api.prod.suno.com/api/playlist/{pid}"
    req = urllib.request.Request(api_url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode('utf-8'))
            title = data.get("name")
            clips = data.get("playlist_clips", [])
            tracks = []
            for c in clips:
                clip = c.get("clip", {})
                sid = clip.get("id")
                stitle = clip.get("title", "").strip()
                if sid and stitle:
                    tracks.append({"id": sid, "title": stitle})
            results[name] = {"title": title, "tracks": tracks}
    except Exception as e:
        print(f"[{name}] Error: {e}")

with open("scripts/suno_catalog.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

for k, v in results.items():
    print(k, "count:", len(v["tracks"]))
