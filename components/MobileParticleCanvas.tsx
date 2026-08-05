"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Active Theory-grade particle field — mobile hero background only
//
// • Atmospheric dark nebula — subtle colour, restraint is the point
// • Touch/cursor parallax with inertia — near particles dance, far ones drift
// • Additive 'lighter' blending — glows accumulate like real light
// • 5 depth layers — exponential distribution (many far, few near)
// • Replaces ONLY the blurred poster background on mobile
//   All hero content (headline, video, pills, carousel) sits above untouched
// ─────────────────────────────────────────────────────────────────────────────

interface P {
  bx: number; by: number;
  vx: number; vy: number;
  radius: number;
  depth: number;        // 0 = far, 1 = near
  r: number; g: number; b: number;
  alpha: number;
  bf: number; bp: number; ba: number; // breath freq / phase / amp
}

// Weighted palette — mostly ice-white, rare colour hints
const PAL: [number, number, number, number][] = [
  [255, 255, 255, 7],
  [255, 255, 255, 5],
  [210, 240, 255, 3],  // cool ice-white
  [185, 255, 225, 2],  // ghost mint
  [150, 205, 255, 2],  // pale blue
  [205, 165, 255, 1],  // dim violet
  [255, 225, 165, 1],  // barely warm
  [165, 255, 185, 1],  // ghost green
  [255, 195, 185, 1],  // ghost coral — rare
];

function pickColor(): [number, number, number] {
  const total = PAL.reduce((s, p) => s + p[3], 0);
  let n = Math.random() * total;
  for (const [r, g, b, w] of PAL) { n -= w; if (n <= 0) return [r, g, b]; }
  return [255, 255, 255];
}

function makeParticle(W: number, H: number): P {
  const depth = Math.pow(Math.random(), 2.2); // exponential — lots of far
  const radius = 0.4 + depth * 18;
  const alpha  = 0.03 + depth * 0.65;
  const speed  = 0.015 + depth * 0.20;
  const angle  = Math.random() * Math.PI * 2;
  const [r, g, b] = pickColor();
  return {
    bx: Math.random() * W, by: Math.random() * H,
    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    radius, depth, r, g, b, alpha,
    bf: 0.0008 + Math.random() * 0.002,
    bp: Math.random() * Math.PI * 2,
    ba: 0.04 + Math.random() * 0.10,
  };
}

function drawP(ctx: CanvasRenderingContext2D, p: P, sx: number, sy: number, t: number) {
  const breath = Math.sin(t * p.bf + p.bp);
  const r      = p.radius * (1 + breath * p.ba);
  const alpha  = Math.min(1, p.alpha * (1 + breath * p.ba * 0.35));
  const blur   = (1 - p.depth) * 7 + (p.depth < 0.3 ? 3 : 0);

  ctx.save();
  if (blur > 0.4) ctx.filter = `blur(${blur.toFixed(1)}px)`;
  ctx.globalAlpha = alpha;
  ctx.globalCompositeOperation = "lighter";

  // Core
  const cR = r * 0.28;
  const g1 = ctx.createRadialGradient(sx, sy, 0, sx, sy, cR);
  g1.addColorStop(0, `rgba(${p.r},${p.g},${p.b},1)`);
  g1.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0.55)`);
  ctx.beginPath(); ctx.arc(sx, sy, cR, 0, Math.PI * 2);
  ctx.fillStyle = g1; ctx.fill();

  // Mid halo
  const g2 = ctx.createRadialGradient(sx, sy, cR * 0.5, sx, sy, r);
  g2.addColorStop(0, `rgba(${p.r},${p.g},${p.b},0.32)`);
  g2.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
  ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2);
  ctx.fillStyle = g2; ctx.fill();

  // Extended bloom — near particles only
  if (p.depth > 0.45) {
    const bR = r * (1.8 + p.depth * 1.5);
    const g3 = ctx.createRadialGradient(sx, sy, r * 0.4, sx, sy, bR);
    g3.addColorStop(0, `rgba(${p.r},${p.g},${p.b},0.10)`);
    g3.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
    ctx.beginPath(); ctx.arc(sx, sy, bR, 0, Math.PI * 2);
    ctx.fillStyle = g3; ctx.fill();
  }

  ctx.restore();
}

export default function MobileParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      ctx.fillStyle = "#020207";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.offsetWidth  || 390;
    const H = canvas.offsetHeight || 844;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // 520 particles, sorted far→near (painter's algorithm)
    const particles: P[] = Array.from({ length: 520 }, () => makeParticle(W, H))
      .sort((a, b) => a.depth - b.depth);

    // Parallax inertia state
    let targetOX = 0, targetOY = 0;
    let currentOX = 0, currentOY = 0;
    let t = 0, raf = 0;

    const LERP = 0.038; // inertia — low = heavy, physical feel

    const onMove = (x: number, y: number) => {
      targetOX = -((x / W) - 0.5) * 32;
      targetOY = -((y / H) - 0.5) * 22;
    };
    const onLeave = () => { targetOX = 0; targetOY = 0; };

    const onMouseMove  = (e: MouseEvent)  => {
      const rect = canvas.getBoundingClientRect();
      onMove(e.clientX - rect.left, e.clientY - rect.top);
    };
    const onTouchMove  = (e: TouchEvent)  => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      onMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    };
    const onTouchEnd   = () => onLeave();
    const onMouseLeave = () => onLeave();

    canvas.addEventListener("mousemove",  onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove",  onTouchMove, { passive: false });
    canvas.addEventListener("touchend",   onTouchEnd);

    function tick() {
      currentOX += (targetOX - currentOX) * LERP;
      currentOY += (targetOY - currentOY) * LERP;

      // Deep dark blue-black — Active Theory's base
      ctx.fillStyle = "#020207";
      ctx.fillRect(0, 0, W, H);

      for (const p of particles) {
        p.bx += p.vx;
        p.by += p.vy;
        const pad = p.radius * 3 + 10;
        if (p.bx < -pad) p.bx = W + pad;
        else if (p.bx > W + pad) p.bx = -pad;
        if (p.by < -pad) p.by = H + pad;
        else if (p.by > H + pad) p.by = -pad;

        // Parallax: near (depth≈1) shifts most, far (depth≈0) barely moves
        const sx = p.bx + currentOX * p.depth * p.depth;
        const sy = p.by + currentOY * p.depth * p.depth;
        drawP(ctx, p, sx, sy, t);
      }

      // Vignette
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      const vig = ctx.createRadialGradient(W * 0.5, H * 0.44, H * 0.06, W * 0.5, H * 0.5, H * 0.72);
      vig.addColorStop(0,    "rgba(0,0,0,0)");
      vig.addColorStop(0.48, "rgba(0,0,0,0.20)");
      vig.addColorStop(1,    "rgba(0,0,0,0.94)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      t++;
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove",  onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove",  onTouchMove);
      canvas.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
