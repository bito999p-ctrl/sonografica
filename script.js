/**
 * Sonografica — Modern Interaction Layer
 * Smooth Canvas, Scroll Reveals, Dynamic Artists
 */

const artists = [
    {
        id: "bito", name: "Bito",
        links: [
            { type: "twitter", url: "https://x.com/BitoCraftedTune", label: "X" },
            { type: "tiktok", url: "https://www.tiktok.com/@bito_craft", label: "TikTok" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5PDksV2zctE689I1uOLO2o?si=0d0RFSu7SLaUEGpSITbAdw", label: "Spotify" },
            { type: "youtube", url: "https://www.youtube.com/@bito_craft", label: "YouTube" },
            { type: "suno", url: "https://suno.com/@bito999", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/bito", label: "AISA RADIO" }
        ],
        spotifyUrls: ["https://open.spotify.com/intl-ja/artist/5PDksV2zctE689I1uOLO2o?si=0d0RFSu7SLaUEGpSITbAdw"],
        youtubeUrls: ["https://youtu.be/H-DCHJTbr44?si=TbG4GPmlYwSXVY5l"]
    },
    {
        id: "pophoper", name: "pophoper",
        links: [
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5fejGOb2AqHlneXYKJVwF7?si=X175bF7MTsO5obPIIs_oEA", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/0635e884-f792-47ac-91c4-c334b605ba0a", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/pophoper", label: "AISA RADIO" }
        ],
        spotifyUrls: ["https://open.spotify.com/intl-ja/artist/5fejGOb2AqHlneXYKJVwF7?si=X175bF7MTsO5obPIIs_oEA"],
        youtubeUrls: ["https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV"]
    },
    {
        id: "hizumi", name: "歪み歪み -hizumi yugami-",
        links: [
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/3tj9sPIAEwZbTk4SyAtT10", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/20aa266e-cde7-4115-9795-30e75c164d01", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/hizumiyugami", label: "AISA RADIO" }
        ],
        spotifyUrls: ["https://open.spotify.com/intl-ja/artist/3tj9sPIAEwZbTk4SyAtT10"],
        youtubeUrls: ["https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c"]
    },
    {
        id: "stray", name: "Stray Glitch Monkeys",
        links: [
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/280n7G2T6dmFkCRs8JFMeX?si=v1hsCKO3TauIOwhjwdT6ng", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/99f6ddfd-d458-40cc-92e5-65141503e6df", label: "Suno" }
        ],
        spotifyUrls: ["https://open.spotify.com/intl-ja/artist/280n7G2T6dmFkCRs8JFMeX?si=v1hsCKO3TauIOwhjwdT6ng"],
        youtubeUrls: ["https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32"]
    },
    {
        id: "metropolitans", name: "THE METROPOLITANS",
        links: [
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5lSsV9mEnzTwpDzOSWqPiQ", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/f59d229a-79fc-4b48-b36a-1efbac94175f", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/the-metropolitans", label: "AISA RADIO" }
        ],
        spotifyUrls: ["https://open.spotify.com/intl-ja/artist/5lSsV9mEnzTwpDzOSWqPiQ"],
        youtubeUrls: ["https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP"]
    },
    {
        id: "rupture", name: "RUPTURE",
        links: [
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/bf788bfc-318f-4e1b-849f-aae04e0055c6", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/rupture", label: "AISA RADIO" }
        ],
        spotifyUrls: [],
        youtubeUrls: ["https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    artists.forEach(a => { renderLinks(a); renderSpotify(a); renderYouTube(a); });
    setupNav();
    setupReveal();
    setupCanvas();
});

/* ── Smooth Nav ── */
function setupNav() {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.nav-container');

    // Scroll state
    let lastY = 0;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Mobile toggle
    if (toggle && drawer) {
        toggle.addEventListener('click', e => {
            e.preventDefault();
            toggle.classList.toggle('active');
            drawer.classList.toggle('active');
        });
        drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            toggle.classList.remove('active');
            drawer.classList.remove('active');
        }));
    }
}

/* ── Scroll Reveal (staggered) ── */
function setupReveal() {
    const items = document.querySelectorAll('.reveal-on-scroll');
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
}

/* ── Generative Canvas — Pencil/Watercolor waveforms ── */
function setupCanvas() {
    const c = document.getElementById('sono-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    let w, h, t = 0;
    const mouse = { x: null, y: null, tx: null, ty: null };

    // Floating debris
    const debris = [];
    class Debris {
        constructor(init) {
            this.reset(init);
        }
        reset(init) {
            this.x = Math.random() * w;
            this.y = init ? Math.random() * h : h + 20;
            this.s = Math.random() * 3.5 + 1.2;
            this.r = Math.random() * Math.PI * 2;
            this.vr = (Math.random() - .5) * .012;
            this.vy = -(Math.random() * .3 + .12);
            this.vx = (Math.random() - .5) * .2;
            this.a = Math.random() * .2 + .06;
            const pick = Math.random();
            this.color = pick > .65 ? '#c94263' : pick > .3 ? '#1e8c7e' : '#b38222';
            this.sq = Math.random() > .5;
        }
        tick() {
            this.x += this.vx; this.y += this.vy; this.r += this.vr;
            if (this.y < -20 || this.x < -20 || this.x > w + 20) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.r);
            ctx.globalAlpha = this.a;
            ctx.fillStyle = this.color;
            if (this.sq) ctx.fillRect(-this.s/2, -this.s/2, this.s, this.s);
            else { ctx.beginPath(); ctx.arc(0, 0, this.s/2, 0, Math.PI*2); ctx.fill(); }
            ctx.restore();
        }
    }

    function resize() {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
        debris.length = 0;
        for (let i = 0; i < 35; i++) debris.push(new Debris(true));
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', e => { mouse.tx = e.clientX; mouse.ty = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.tx = null; mouse.ty = null; });

    function wave(yOff, amp, freq, spd, col, alpha, lw) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = col;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lw || 1;
        const pts = [];
        for (let x = 0; x <= w; x += 5) {
            let y = Math.sin(x * freq + t * spd) * amp
                  + Math.cos(x * freq * .5 - t * spd * .7) * amp * .35;
            if (mouse.x != null) {
                const dx = x - mouse.x, dy = (yOff + y) - mouse.y;
                const d = Math.sqrt(dx*dx + dy*dy);
                if (d < 200) y += Math.sin(d * .05 - t * 2) * (1 - d/200) * 20;
            }
            pts.push({ x, y: yOff + y });
        }
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length - 1; i++) {
            const xc = (pts[i].x + pts[i+1].x) / 2;
            const yc = (pts[i].y + pts[i+1].y) / 2;
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
        }
        ctx.stroke();
        ctx.restore();
    }

    function frame() {
        t += .014;
        if (mouse.tx != null) {
            mouse.x = (mouse.x || mouse.tx) + (mouse.tx - (mouse.x || mouse.tx)) * .06;
            mouse.y = (mouse.y || mouse.ty) + (mouse.ty - (mouse.y || mouse.ty)) * .06;
        }
        ctx.clearRect(0, 0, w, h);
        const mid = h * .52;
        wave(mid, 28, .0032, .75, '#c94263', .18, 1);
        wave(mid + 14, 38, .0026, -.55, '#1e8c7e', .16, 1.1);
        wave(mid - 18, 20, .0048, 1, '#b38222', .16, .8);
        wave(mid + 32, 15, .0038, -.85, 'rgba(26,24,22,.2)', .12, .7);
        wave(h * .2, 10, .002, .45, 'rgba(26,24,22,.12)', .08, .5);
        wave(h * .84, 14, .0024, -.38, '#1e8c7e', .10, .7);
        debris.forEach(d => { d.tick(); d.draw(); });
        requestAnimationFrame(frame);
    }
    frame();
}

/* ── Render Links ── */
function renderLinks(artist) {
    const el = document.getElementById(`links-${artist.id}`);
    if (!el) return;
    artist.links.forEach(link => {
        if (!link.url) return;
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = `icon-link brand-${link.type}`;
        a.setAttribute('aria-label', link.label);

        const icons = {
            twitter: '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
            tiktok: '<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
            spotify: '<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.439-1.5 9.839-.84 13.561 1.44.419.24.6.78.18 1.38zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.6 1.44.539.3.719.96.42 1.5-.239.479-.84.6-1.38.3z"/></svg>',
            youtube: '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
            suno: '<img src="suno.jpeg" alt="Suno" loading="lazy">',
            aisa: '<span style="font-size:10px;font-weight:700;font-family:var(--font-mono)">AISA</span>'
        };
        a.innerHTML = icons[link.type] || link.label;
        el.appendChild(a);
    });
}

function renderSpotify(artist) {
    const el = document.getElementById(`spotify-${artist.id}`);
    if (!el) return;
    if (!artist.spotifyUrls?.length) {
        el.innerHTML = '<div class="empty-frame">Coming Soon</div>';
        return;
    }
    artist.spotifyUrls.forEach(u => {
        try {
            const url = new URL(u);
            const path = url.pathname.replace(/^\/intl-[a-z]+\//, '/').replace(/\/$/, '');
            const iframe = document.createElement('iframe');
            iframe.src = `https://open.spotify.com/embed${path}?utm_source=generator&theme=0`;
            iframe.width = '100%'; iframe.height = '352';
            iframe.style.border = 'none'; iframe.loading = 'lazy';
            iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
            el.appendChild(iframe);
        } catch (e) { console.error('Spotify URL error:', u); }
    });
}

function renderYouTube(artist) {
    const el = document.getElementById(`youtube-${artist.id}`);
    if (!el) return;
    if (!artist.youtubeUrls?.length) {
        el.innerHTML = '<div class="empty-frame">Coming Soon</div>';
        return;
    }
    artist.youtubeUrls.forEach(u => {
        const wrap = document.createElement('div');
        wrap.className = 'youtube-item';
        try {
            const info = ytInfo(u);
            const src = info.pl
                ? `https://www.youtube.com/embed/videoseries?list=${info.id}`
                : `https://www.youtube.com/embed/${info.id}`;
            const iframe = document.createElement('iframe');
            iframe.src = src; iframe.title = 'YouTube'; iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            wrap.appendChild(iframe);
        } catch (e) {
            wrap.innerHTML = '<div class="empty-frame">—</div>';
        }
        el.appendChild(wrap);
    });
}

function ytInfo(s) {
    if (!s) return { id: '', pl: false };
    if (!s.includes('/') && !s.includes('.')) return { id: s, pl: s.startsWith('PL') };
    const u = new URL(s);
    if (u.searchParams.has('list')) return { id: u.searchParams.get('list'), pl: true };
    if (u.searchParams.has('v')) return { id: u.searchParams.get('v'), pl: false };
    const p = u.pathname.split('/').filter(Boolean);
    return { id: p[p.length - 1], pl: false };
}
