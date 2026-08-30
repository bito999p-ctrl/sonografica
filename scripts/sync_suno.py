import urllib.request
import json
import re
import sys

def fetch_suno_playlist(playlist_url_or_id):
    match = re.search(r'([a-f0-9\-]{36})', playlist_url_or_id)
    if not match:
        raise ValueError(f"Invalid Suno playlist ID/URL: {playlist_url_or_id}")
    playlist_id = match.group(1)
    
    api_url = f"https://studio-api.prod.suno.com/api/playlist/{playlist_id}"
    req = urllib.request.Request(api_url, headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    })
    
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        
    title = data.get("name", "Untitled Playlist")
    clips_data = data.get("playlist_clips", [])
    
    tracks = []
    for item in clips_data:
        clip = item.get("clip", {})
        song_id = clip.get("id")
        song_title = clip.get("title", "Untitled Track").strip()
        image_url = clip.get("image_url")
        if song_id and song_title:
            tracks.append({
                "id": song_id,
                "title": song_title,
                "image": image_url
            })
            
    return {
        "id": playlist_id,
        "title": title,
        "tracks": tracks
    }

if __name__ == "__main__":
    test_id = sys.argv[1] if len(sys.argv) > 1 else "c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb"
    result = fetch_suno_playlist(test_id)
    print(json.dumps(result, ensure_ascii=False, indent=2))
