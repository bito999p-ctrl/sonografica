/**
 * ==========================================
 * Sonografica — Core Interaction & Waveform Engine
 * ==========================================
 */

const artists = [
    {
        id: "bito",
        name: "Bito",
        catalog: "CAT. #01",
        links: [
            { type: "twitter", url: "https://x.com/BitoCraftedTune", label: "X" },
            { type: "tiktok", url: "https://www.tiktok.com/@bito_craft", label: "TikTok" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5PDksV2zctE689I1uOLO2o?si=0d0RFSu7SLaUEGpSITbAdw", label: "Spotify" },
            { type: "youtube", url: "https://www.youtube.com/@bito_craft", label: "YouTube" },
            { type: "suno", url: "https://suno.com/@bito999", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/bito", label: "AISA RADIO" }
        ],
        spotifyUrls: [
            "https://open.spotify.com/intl-ja/artist/5PDksV2zctE689I1uOLO2o?si=0d0RFSu7SLaUEGpSITbAdw"
        ],
        youtubeUrls: [
            "https://youtu.be/H-DCHJTbr44?si=TbG4GPmlYwSXVY5l"
        ]
    },
    {
        id: "pophoper",
        name: "pophoper",
        catalog: "CAT. #02",
        links: [
            { type: "twitter", url: "", label: "X" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5fejGOb2AqHlneXYKJVwF7?si=X175bF7MTsO5obPIIs_oEA", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/0635e884-f792-47ac-91c4-c334b605ba0a", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/pophoper", label: "AISA RADIO" }
        ],
        spotifyUrls: [
            "https://open.spotify.com/intl-ja/artist/5fejGOb2AqHlneXYKJVwF7?si=X175bF7MTsO5obPIIs_oEA"
        ],
        youtubeUrls: [
            "https://youtube.com/playlist?list=PLxpRgysXp3GnP710vJ5DwL8BC9KyG0AlN&si=B3S3Y9AdjN69LqUV"
        ]
    },
    {
        id: "hizumi",
        name: "歪み歪み -hizumi yugami-",
        catalog: "CAT. #03",
        links: [
            { type: "twitter", url: "", label: "X" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/3tj9sPIAEwZbTk4SyAtT10", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/20aa266e-cde7-4115-9795-30e75c164d01", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/hizumiyugami", label: "AISA RADIO" }
        ],
        spotifyUrls: [
            "https://open.spotify.com/intl-ja/artist/3tj9sPIAEwZbTk4SyAtT10"
        ],
        youtubeUrls: [
            "https://youtube.com/playlist?list=PLxpRgysXp3Gm6OgQmHL3bSaAfFxF-DK7d&si=H9atE_w5lqlmEo6c"
        ]
    },
    {
        id: "stray",
        name: "Stray Glitch Monkeys",
        catalog: "CAT. #04",
        links: [
            { type: "twitter", url: "", label: "X" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/280n7G2T6dmFkCRs8JFMeX?si=v1hsCKO3TauIOwhjwdT6ng", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/99f6ddfd-d458-40cc-92e5-65141503e6df", label: "Suno" },
            { type: "aisa", url: "", label: "AISA RADIO" }
        ],
        spotifyUrls: [
            "https://open.spotify.com/intl-ja/artist/280n7G2T6dmFkCRs8JFMeX?si=v1hsCKO3TauIOwhjwdT6ng"
        ],
        youtubeUrls: [
            "https://youtube.com/playlist?list=PLxpRgysXp3GlaHKI8Wz0WWATs5SZFC6o4&si=3ffy2M9F2ouSJg32"
        ]
    },
    {
        id: "metropolitans",
        name: "THE METROPOLITANS",
        catalog: "CAT. #05",
        links: [
            { type: "twitter", url: "", label: "X" },
            { type: "spotify", url: "https://open.spotify.com/intl-ja/artist/5lSsV9mEnzTwpDzOSWqPiQ", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/f59d229a-79fc-4b48-b36a-1efbac94175f", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/the-metropolitans", label: "AISA RADIO" }
        ],
        spotifyUrls: [
            "https://open.spotify.com/intl-ja/artist/5lSsV9mEnzTwpDzOSWqPiQ"
        ],
        youtubeUrls: [
            "https://youtube.com/playlist?list=PLxpRgysXp3GnkxK3lm_cwHLD_alvdc_3t&si=d-KLo6zSzbX7Y4VP"
        ]
    },
    {
        id: "rupture",
        name: "RUPTURE",
        catalog: "CAT. #06",
        links: [
            { type: "twitter", url: "", label: "X" },
            { type: "spotify", url: "", label: "Spotify" },
            { type: "youtube", url: "https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV", label: "YouTube" },
            { type: "suno", url: "https://suno.com/playlist/bf788bfc-318f-4e1b-849f-aae04e0055c6", label: "Suno" },
            { type: "aisa", url: "https://aisa.radioalps.com/music/artist/rupture", label: "AISA RADIO" }
        ],
        spotifyUrls: [],
        youtubeUrls: [
            "https://youtube.com/playlist?list=PLxpRgysXp3Gmw6VX82wfxnStZ8lGeuNp9&si=mujfGGlFHVWnC_kV"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    try {
        artists.forEach(artist => {
            renderArtistLinks(artist);
            renderSpotify(artist);
            renderYouTube(artist);
        });

        setupMobileNav();
        setupScrollAnimation();
        setupMagneticButtons();
        setupSonograficaCanvas();
    } catch (e) {
        console.error('Sonografica Initialization Error:', e);
    }
});

/* ==========================================
   Generative Sonografica Soundwave Canvas
   ========================================== */
function setupSonograficaCanvas() {
    const canvas = document.getElementById('sono-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;
    const mouse = { x: null, y: null, targetX: null, targetY: null };

    // Floating harmonic paper debris particles (matching Collage Resti)
    const particles = [];
    const particleCount = 45;

    class HarmonicDebris {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = initial ? Math.random() * width : Math.random() * width;
            this.y = initial ? Math.random() * height : height + 20;
            this.size = Math.random() * 4 + 1.5;
            this.rotation = Math.random() * Math.PI * 2;
            this.vRot = (Math.random() - 0.5) * 0.02;
            this.vy = -(Math.random() * 0.4 + 0.2);
            this.vx = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.35 + 0.1;
            this.color = Math.random() > 0.6 ? '#df5b7a' : (Math.random() > 0.3 ? '#3cb8aa' : '#dbaa5c');
            this.isSquare = Math.random() > 0.4;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.vRot;

            if (this.y < -30 || this.x < -30 || this.x > width + 30) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;

            if (this.isSquare) {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new HarmonicDebris());
        }
    }

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.targetX = null;
        mouse.targetY = null;
    });

    function drawWave(yOffset, amplitude, frequency, speed, color, alpha, strokeWidth = 1) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = strokeWidth;

        const points = [];
        const step = 6;

        for (let x = 0; x <= width; x += step) {
            // Wave equation with multi-harmonic frequencies
            let wave = Math.sin(x * frequency + time * speed) * amplitude;
            wave += Math.cos(x * frequency * 0.5 - time * speed * 0.7) * (amplitude * 0.4);

            // Cursor magnetic wave displacement
            if (mouse.x !== null && mouse.y !== null) {
                const dx = x - mouse.x;
                const dy = (yOffset + wave) - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;
                if (dist < maxDist) {
                    const factor = (1 - dist / maxDist) * 25;
                    wave += Math.sin(dist * 0.05 - time * 2) * factor;
                }
            }

            const y = yOffset + wave;
            points.push({ x, y });
        }

        // Draw smooth curve through harmonic points
        if (points.length > 0) {
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }
        }

        ctx.stroke();
        ctx.restore();
    }

    function animate() {
        time += 0.015;

        // Smooth mouse interpolation
        if (mouse.targetX !== null) {
            mouse.x += (mouse.targetX - (mouse.x || mouse.targetX)) * 0.05;
            mouse.y += (mouse.targetY - (mouse.y || mouse.targetY)) * 0.05;
        }

        ctx.clearRect(0, 0, width, height);

        // Draw delicate acoustic soundwave layers (Sonografica visual signature)
        const midY = height * 0.52;
        drawWave(midY, 35, 0.0035, 0.8, '#df5b7a', 0.18, 1);
        drawWave(midY + 15, 45, 0.0028, -0.6, '#3cb8aa', 0.15, 1.2);
        drawWave(midY - 20, 25, 0.005, 1.1, '#dbaa5c', 0.14, 0.8);
        drawWave(midY + 40, 20, 0.004, -0.9, '#f4efe6', 0.08, 0.6);

        // Top ambient fine harmonic lines
        drawWave(height * 0.18, 12, 0.002, 0.5, '#f4efe6', 0.04, 0.5);
        drawWave(height * 0.85, 18, 0.0025, -0.4, '#3cb8aa', 0.06, 0.8);

        // Draw and update floating harmonic debris
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================
   Mobile Navigation Drawer
   ========================================== */
function setupMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    if (navToggle && navContainer) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navContainer.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Auto close drawer when link is clicked
        const links = navContainer.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

/* ==========================================
   Magnetic Hover Interactions
   ========================================== */
function setupMagneticButtons() {
    const targets = document.querySelectorAll('.icon-link, .mastering-tool-btn, .aether-player-btn, .thanks-link, .tool-card');

    targets.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

/* ==========================================
   Scroll Reveal Animation
   ========================================== */
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* ==========================================
   Render Artist Media & Links
   ========================================== */
function renderArtistLinks(artist) {
    const container = document.getElementById(`links-${artist.id}`);
    if (!container) return;

    artist.links.forEach(link => {
        if (!link.url) return;

        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = `icon-link brand-${link.type}`;
        a.setAttribute('aria-label', link.label);

        let iconHtml = '';
        if (link.type === 'twitter') {
            iconHtml = '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>';
        } else if (link.type === 'tiktok') {
            iconHtml = '<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>';
        } else if (link.type === 'spotify') {
            iconHtml = '<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.439-1.5 9.839-.84 13.561 1.44.419.24.6.78.18 1.38zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.6 1.44.539.3.719.96.42 1.5-.239.479-.84.6-1.38.3z"/></svg>';
        } else if (link.type === 'youtube') {
            iconHtml = '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
        } else if (link.type === 'suno') {
            iconHtml = '<img src="suno.jpeg" alt="Suno" loading="lazy">';
        } else if (link.type === 'aisa') {
            iconHtml = '<span style="font-size:10px; font-weight:700; font-family:var(--font-mono);">AISA</span>';
        }

        a.innerHTML = iconHtml;
        container.appendChild(a);
    });
}

function renderSpotify(artist) {
    const container = document.getElementById(`spotify-${artist.id}`);
    if (!container) return;

    if (!artist.spotifyUrls || artist.spotifyUrls.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'empty-frame';
        placeholder.innerHTML = '<span>Spotify Archive In Preparation</span>';
        container.appendChild(placeholder);
        return;
    }

    artist.spotifyUrls.forEach(urlStr => {
        try {
            const url = new URL(urlStr);
            let cleanPath = url.pathname.replace(/^\/intl-[a-z]+\//, '/').replace(/\/$/, "");
            const embedSrc = `https://open.spotify.com/embed${cleanPath}?utm_source=generator&theme=0`;

            const iframe = document.createElement('iframe');
            iframe.src = embedSrc;
            iframe.width = "100%";
            iframe.height = "352";
            iframe.style.border = "none";
            iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            iframe.loading = "lazy";

            container.appendChild(iframe);
        } catch (e) {
            console.error('Invalid Spotify URL:', urlStr);
        }
    });
}

function renderYouTube(artist) {
    const container = document.getElementById(`youtube-${artist.id}`);
    if (!container) return;

    if (!artist.youtubeUrls || artist.youtubeUrls.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'empty-frame';
        placeholder.innerHTML = '<span>Visual Archive In Preparation</span>';
        container.appendChild(placeholder);
        return;
    }

    artist.youtubeUrls.forEach(urlStr => {
        const item = document.createElement('div');
        item.className = 'youtube-item';

        try {
            const { id, isPlaylist } = getYouTubeEmbedInfo(urlStr);
            const embedUrl = isPlaylist
                ? `https://www.youtube.com/embed/videoseries?list=${id}`
                : `https://www.youtube.com/embed/${id}`;

            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.title = "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;

            item.appendChild(iframe);
        } catch (e) {
            console.error('Invalid YouTube URL:', urlStr);
            const placeholder = document.createElement('div');
            placeholder.className = 'empty-frame';
            placeholder.textContent = 'Invalid Video Archive';
            container.appendChild(placeholder);
        }

        container.appendChild(item);
    });
}

function getYouTubeEmbedInfo(input) {
    if (!input) return { id: '', isPlaylist: false };
    if (!input.includes('/') && !input.includes('.')) {
        return { id: input, isPlaylist: input.startsWith('PL') };
    }

    const url = new URL(input);
    if (url.searchParams.has('list')) {
        return { id: url.searchParams.get('list'), isPlaylist: true };
    }
    if (url.searchParams.has('v')) {
        return { id: url.searchParams.get('v'), isPlaylist: false };
    }
    const pathParts = url.pathname.split('/').filter(Boolean);
    return { id: pathParts[pathParts.length - 1], isPlaylist: false };
}
