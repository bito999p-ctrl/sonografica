import json, re

with open("scripts/suno_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

# Use sonografica catalog for bito as fallback if needed
catalog["bito"] = catalog.get("sonografica-artist", {"tracks": []})

artists_data = [
    {
        "id": "bito",
        "name": "Bito",
        "links": [
            { "type": "twitter", "url": "https://x.com/BitoCraftedTune", "label": "X" },
            { "type": "tiktok", "url": "https://www.tiktok.com/@bito_craft", "label": "TikTok" },
            { "type": "spotify", "url": "https://open.spotify.com/intl-ja/artist/5PDksV2zctE689I1uOLO2o?si=0d0RFSu7SLaUEGpSITbAdw", "label": "Spotify" },
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GlUaHN7GwWZheqxz5XCbdzL&si=YVcTUFljO9vOOcwF", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/@bito999", "label": "Suno" },
            { "type": "aisa", "url": "https://aisa.radioalps.com/music/artist/bito", "label": "AISA RADIO" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GlUaHN7GwWZheqxz5XCbdzL&si=YVcTUFljO9vOOcwF"],
        "sunoTracks": catalog.get("bito", {}).get("tracks", [])
    },
    {
        "id": "valotoa",
        "name": "valotoa",
        "links": [
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLOb7KvIzm6NE&si=2InPpcagbd-i9dKD", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb", "label": "Suno" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLOb7KvIzm6NE&si=2InPpcagbd-i9dKD"],
        "sunoTracks": catalog.get("valotoa", {}).get("tracks", [])
    },
    {
        "id": "hizumi",
        "name": "歪み歪み -hizumi yugami-",
        "links": [
            { "type": "spotify", "url": "https://open.spotify.com/intl-ja/artist/3tj9sPIAEwZbTk4SyAtT10", "label": "Spotify" },
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/20aa266e-cde7-4115-9795-30e75c164d01", "label": "Suno" },
            { "type": "aisa", "url": "https://aisa.radioalps.com/music/artist/hizumiyugami", "label": "AISA RADIO" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c"],
        "sunoTracks": catalog.get("hizumi", {}).get("tracks", [])
    },
    {
        "id": "pophoper",
        "name": "pophoper",
        "links": [
            { "type": "spotify", "url": "https://open.spotify.com/intl-ja/artist/5fejGOb2AqHlneXYKJVwF7?si=X175bF7MTsO5obPIIs_oEA", "label": "Spotify" },
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/0635e884-f792-47ac-91c4-c334b605ba0a", "label": "Suno" },
            { "type": "aisa", "url": "https://aisa.radioalps.com/music/artist/pophoper", "label": "AISA RADIO" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV"],
        "sunoTracks": catalog.get("pophoper", {}).get("tracks", [])
    },
    {
        "id": "stray",
        "name": "Stray Glitch Monkeys",
        "links": [
            { "type": "spotify", "url": "https://open.spotify.com/intl-ja/artist/280n7G2T6dmFkCRs8JFMeX?si=v1hsCKO3TauIOwhjwdT6ng", "label": "Spotify" },
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/99f6ddfd-d458-40cc-92e5-65141503e6df", "label": "Suno" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32"],
        "sunoTracks": catalog.get("stray", {}).get("tracks", [])
    },
    {
        "id": "dayendnight",
        "name": "day end night",
        "links": [
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GmFmY4eSMSeAcFM3qjNN4gE&si=3TtpYPlWD63gZ2B3i", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/c685d560-7182-4a81-b430-b4bf33bcfd4f", "label": "Suno" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GmFmY4eSMSeAcFM3qjNN4gE&si=3TtpYPlWD63gZ2B3i"],
        "sunoTracks": catalog.get("dayendnight", {}).get("tracks", [])
    },
    {
        "id": "asymptote",
        "name": "Asymptote",
        "links": [
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GlPvzX5hzWu4YxyPXrnriyM&si=OeHh87ijcXOVcxWi", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/c95d6dd3-c6ee-41a8-9a9c-8213e6b07dcb", "label": "Suno" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GlPvzX5hzWu4YxyPXrnriyM&si=OeHh87ijcXOVcxWi"],
        "sunoTracks": catalog.get("asymptote", {}).get("tracks", [])
    },
    {
        "id": "rupture",
        "name": "RUPTURE",
        "links": [
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/bf788bfc-318f-4e1b-849f-aae04e0055c6", "label": "Suno" },
            { "type": "aisa", "url": "https://aisa.radioalps.com/music/artist/rupture", "label": "AISA RADIO" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV"],
        "sunoTracks": catalog.get("rupture", {}).get("tracks", [])
    },
    {
        "id": "sonografica-artist",
        "name": "Sonografica",
        "links": [
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLLOIHKwdVqbE&si=k-m1OGcNYQMMIxkj", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/6e89b45f-0ade-423e-9acd-cec8b0303665", "label": "Suno" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLLOIHKwdVqbE&si=k-m1OGcNYQMMIxkj"],
        "sunoTracks": catalog.get("sonografica-artist", {}).get("tracks", [])
    },
    {
        "id": "metropolitans",
        "name": "THE METROPOLITANS",
        "links": [
            { "type": "spotify", "url": "https://open.spotify.com/intl-ja/artist/5lSsV9mEnzTwpDzOSWqPiQ", "label": "Spotify" },
            { "type": "youtube", "url": "https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP", "label": "YouTube" },
            { "type": "suno", "url": "https://suno.com/playlist/f59d229a-79fc-4b48-b36a-1efbac94175f", "label": "Suno" },
            { "type": "aisa", "url": "https://aisa.radioalps.com/music/artist/the-metropolitans", "label": "AISA RADIO" }
        ],
        "spotifyUrls": [],
        "youtubeUrls": ["https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP"],
        "sunoTracks": catalog.get("metropolitans", {}).get("tracks", [])
    }
]

with open("script.js", "r", encoding="utf-8") as f:
    js = f.read()

# Replace the const artists = [ ... ]; block
artists_js = "const artists = " + json.dumps(artists_data, ensure_ascii=False, indent=4) + ";"
new_js = re.sub(r'const artists = \[.*?\];', artists_js, js, flags=re.DOTALL)

with open("script.js", "w", encoding="utf-8") as f:
    f.write(new_js)

print("Replaced artists array with all Suno playlists and removed Spotify URLs!")
