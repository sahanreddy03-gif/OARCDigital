"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  r: number;
  g: number;
  b: number;
  life: number;
  maxLife: number;
}

const PALETTE = [
  [255, 100, 40],
  [255, 160, 30],
  [255, 60,  90],
  [180, 80, 255],
  [255, 200, 80],
  [80,  200, 255],
];

export default function HeroATCard() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const animRef    = useRef<number>(0);
  const ptcls      = useRef<Particle[]>([]);
  const frameRef   = useRef(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  /* ── particle canvas ─────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const spawn = () => {
      const W = canvas.width;
      const H = canvas.height;

      /* card lives in centre 80% × 80% of wrap */
      const cx0 = W * 0.10, cx1 = W * 0.90;
      const cy0 = H * 0.10, cy1 = H * 0.90;

      const edge = Math.floor(Math.random() * 4);
      let sx: number, sy: number;
      switch (edge) {
        case 0: sx = cx0 + Math.random() * (cx1 - cx0); sy = cy0; break;
        case 1: sx = cx0 + Math.random() * (cx1 - cx0); sy = cy1; break;
        case 2: sx = cx0; sy = cy0 + Math.random() * (cy1 - cy0); break;
        default: sx = cx1; sy = cy0 + Math.random() * (cy1 - cy0);
      }

      const angle = Math.atan2(sy - H / 2, sx - W / 2) + (Math.random() - 0.5) * 1.2;
      const spd   = 0.4 + Math.random() * 1.1;
      const ml    = 90 + Math.random() * 160;
      const col   = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      ptcls.current.push({
        x: sx, y: sy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        size:    1 + Math.random() * 4,
        alpha:   0,
        r: col[0], g: col[1], b: col[2],
        life: 0, maxLife: ml,
      });
    };

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      if (frameRef.current % 2 === 0 && ptcls.current.length < 120) {
        spawn();
        if (Math.random() < 0.4) spawn();
      }

      ptcls.current = ptcls.current.filter(p => p.life < p.maxLife);

      for (const p of ptcls.current) {
        p.life++;
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy -= 0.003;
        p.vx *= 0.998;

        const t = p.life / p.maxLife;
        p.alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;

        /* glow */
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
        grd.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${p.alpha * 0.85})`);
        grd.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        /* core dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.9})`;
        ctx.fill();
      }

      frameRef.current++;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  /* ── 3-D tilt ─────────────────────────────────────────────── */
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
    const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
    setTilt({ x: -dy * 10, y: dx * 10 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    /* wrap is bigger than the card so canvas particles can spill outside */
    <div
      ref={wrapRef}
      className="relative w-full"
      style={{ padding: "56px 0 48px" }}
    >
      {/* particle layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* card centred inside wrap */}
      <div className="relative flex justify-center" style={{ zIndex: 2 }}>
        <Link
          href="/creative"
          data-testid="card-hero-creative"
          style={{ display: "block", width: "min(720px, 84vw)" }}
        >
          <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onMouseLeave}
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "16 / 9",
              border: "1px solid rgba(255,100,40,0.35)",
              boxShadow: hovered
                ? "0 0 0 1px rgba(255,255,255,0.07) inset, 0 30px 100px rgba(255,90,30,0.35), 0 6px 30px rgba(0,0,0,0.7)"
                : "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 70px rgba(255,90,30,0.18), 0 4px 20px rgba(0,0,0,0.6)",
              transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.025 : 1})`,
              transition:
                tilt.x === 0 && tilt.y === 0
                  ? "transform 0.9s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s ease"
                  : "transform 0.12s ease-out, box-shadow 0.4s ease",
              cursor: "pointer",
            }}
          >
            {/* video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            >
              <source src="/media/2026-01-07_01_1767825976557.mp4" type="video/mp4" />
            </video>

            {/* bottom gradient — text legibility */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 1,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.08) 100%)",
              }}
            />

            {/* top-edge glass sheen */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                zIndex: 2,
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.3) 50%, transparent 95%)",
              }}
            />

            {/* left-edge sheen */}
            <div
              className="absolute inset-y-0 left-0 w-px"
              style={{
                zIndex: 2,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              }}
            />

            {/* content */}
            <div
              className="absolute inset-0 flex flex-col justify-between"
              style={{ zIndex: 3, padding: "clamp(1.2rem,3vw,2rem)" }}
            >
              {/* top row */}
              <div className="flex items-center justify-between">
                <span
                  className="font-bold uppercase tracking-[0.25em]"
                  style={{
                    fontSize: "clamp(0.6rem,1.1vw,0.75rem)",
                    color: "#fb923c",
                    letterSpacing: "0.25em",
                  }}
                  data-testid="text-tag-card-hero-creative"
                >
                  Creative Studio
                </span>

                {/* arrow circle */}
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    transform: hovered ? "translate(3px,-3px)" : "translate(0,0)",
                    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* bottom — headline + sub */}
              <div>
                <h2
                  className="text-white font-black leading-none mb-2"
                  style={{
                    fontSize: "clamp(1.8rem,5.5vw,3.6rem)",
                    letterSpacing: "-0.03em",
                    textShadow: "0 4px 32px rgba(0,0,0,0.8)",
                  }}
                  data-testid="text-headline-card-hero-creative"
                >
                  Media.<br />Brand.<br />Content.
                </h2>
                <p
                  className="text-white/50 leading-snug"
                  style={{ fontSize: "clamp(0.7rem,1.5vw,0.875rem)" }}
                >
                  Design-led creative for brands that demand attention
                </p>
              </div>
            </div>

            {/* scan-line grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                zIndex: 4,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E\")",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
