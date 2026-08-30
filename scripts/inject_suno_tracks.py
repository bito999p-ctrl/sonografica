import json, re

with open("scripts/suno_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

with open("script.js", "r", encoding="utf-8") as f:
    js = f.read()

# For bito, let bito use sonografica catalog tracks
catalog["bito"] = catalog.get("sonografica-artist", {"tracks": []})

for aid, cdata in catalog.items():
    tracks = cdata.get("tracks", [])
    if not tracks:
        continue
    tracks_json = json.dumps(tracks, ensure_ascii=False, indent=8)
    
    if f'id: "{aid}"' in js:
        if re.search(r'id:\s*"' + aid + r'"[^}]*?sunoTracks:', js, re.DOTALL):
            js = re.sub(
                r'(id:\s*"' + aid + r'"[^}]*?sunoTracks:\s*)\[.*?\]',
                r'\g<1>' + json.dumps(tracks, ensure_ascii=False, indent=8),
                js,
                flags=re.DOTALL
            )
        else:
            js = re.sub(
                r'(id:\s*"' + aid + r'"[^}]*?youtubeUrls:\s*\[.*?\])',
                r'\g<1>,\n        sunoTracks: ' + json.dumps(tracks, ensure_ascii=False, indent=8),
                js,
                flags=re.DOTALL
            )

# Clear all spotifyUrls to []
js = re.sub(r'spotifyUrls:\s*\[.*?\]', 'spotifyUrls: []', js)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Updated script.js with all Suno tracks and cleared spotifyUrls successfully!")
