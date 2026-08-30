import urllib.request, re
url = 'https://suno.com/embed/ada853d2-1625-43b6-ab1f-8f4205d8394b'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=5) as resp:
    html = resp.read().decode('utf-8')
    m = re.findall(r'h-\[[^\]]+\]|min-h-[^\s\"\'>]+|height:[^;]+', html)
    print("Found:", m[:15])
