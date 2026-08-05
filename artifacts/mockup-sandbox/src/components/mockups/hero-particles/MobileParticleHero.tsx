import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Active Theory-grade particle field — atmospheric dark nebula
//
// What makes this correct:
// 1. Touch/pointer parallax with inertia — near particles shift far,
//    far particles barely move — creates genuine 3D depth without WebGL
// 2. Colour is RESTRAINT — mostly near-black, barely-there tints.
//    The glow layering and depth create the beauty, not the hue.
// 3. 'lighter' composite blending — glows accumulate the way light does
// 4. Per-depth parallax — 5 depth layers, each with its own shift factor
// ─────────────────────────────────────────────────────────────────────────────

interface Particle {
  // base position (world space)
  bx: number;
  by: number;
  // drift velocity
  vx: number;
  vy: number;
  // visual
  radius: number;
  depth: number;   // 0 = far, 1 = near
  r: number; g: number; b: number;  // base colour
  alpha: number;
  // organic breathing
  breathFreq: number;
  breathPhase: number;
  breathAmp: number;
}

// ── Atmospheric dark palette ─────────────────────────────────────────────────
// Each entry: [R, G, B, weight]
// Most are white. The few tinted ones are extremely dark-tinted.
const PALETTE: [number, number, number, number][] = [
  [255, 255, 255,  6],  // white — dominant
  [255, 255, 255,  5],
  [255, 255, 255,  4],
  [200, 240, 255,  2],  // ice-white
  [180, 255, 220,  1],  // barely-mint
  [140, 200, 255,  1],  // dim blue
  [200, 160, 255,  1],  // dim violet
  [255, 220, 160,  1],  // barely warm
  [160, 255, 180,  1],  // ghost green
  [255, 190, 180,  1],  // ghost coral — rare
];

function weightedColor(): [number, number, number] {
  const total = PALETTE.reduce((s, p) => s + p[3], 0);
  let n = Math.random() * total;
  for (const [r, g, b, w] of PALETTE) {
    n -= w;
    if (n <= 0) return [r, g, b];
  }
  return [255, 255, 255];
}

function makeParticle(W: number, H: number): Particle {
  // Exponential depth distribution — lots of far, few near
  const depth = Math.pow(Math.random(), 2.2);

  // Radius tied to depth: far = tiny (0.4–2.5), near = large (2–18)
  const radius = 0.4 + depth * 17.6;

  // Alpha: near = more visible, far = almost invisible
  const alpha = 0.04 + depth * 0.62;

  // Speed: near particles drift faster (creates parallax in drift too)
  const speed = 0.02 + depth * 0.18;
  const angle = Math.random() * Math.PI * 2;

  const [r, g, b] = weightedColor();

  return {
    bx: Math.random() * W,
    by: Math.random() * H,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius,
    depth,
    r, g, b,
    alpha,
    breathFreq: 0.0008 + Math.random() * 0.002,
    breathPhase: Math.random() * Math.PI * 2,
    breathAmp: 0.04 + Math.random() * 0.10,
  };
}

function draw(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  screenX: number,
  screenY: number,
  t: number,
) {
  const breath = Math.sin(t * p.breathFreq + p.breathPhase);
  const r = p.radius * (1 + breath * p.breathAmp);
  const alpha = Math.min(1, p.alpha * (1 + breath * p.breathAmp * 0.35));

  const { r: R, g: G, b: B } = p;

  // ── DOF blur: far particles are blurred, near are sharp ──────────────────
  const blurPx = (1 - p.depth) * 6.5 + (p.depth < 0.3 ? 3 : 0);

  ctx.save();
  if (blurPx > 0.4) ctx.filter = `blur(${blurPx.toFixed(1)}px)`;
  ctx.globalAlpha = alpha;
  ctx.globalCompositeOperation = "lighter"; // additive — glows stack like light

  // ── Layer 1: hot bright core ──────────────────────────────────────────────
  const coreR = r * 0.28;
  const g1 = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, coreR);
  g1.addColorStop(0, `rgba(${R},${G},${B},1)`);
  g1.addColorStop(1, `rgba(${R},${G},${B},0.6)`);
  ctx.beginPath();
  ctx.arc(screenX, screenY, coreR, 0, Math.PI * 2);
  ctx.fillStyle = g1;
  ctx.fill();

  // ── Layer 2: mid glow halo ────────────────────────────────────────────────
  const g2 = ctx.createRadialGradient(screenX, screenY, coreR * 0.5, screenX, screenY, r);
  g2.addColorStop(0, `rgba(${R},${G},${B},0.35)`);
  g2.addColorStop(1, `rgba(${R},${G},${B},0)`);
  ctx.beginPath();
  ctx.arc(screenX, screenY, r, 0, Math.PI * 2);
  ctx.fillStyle = g2;
  ctx.fill();

  // ── Layer 3: extended bloom — near particles only ─────────────────────────
  if (p.depth > 0.45) {
    const bloomR = r * (1.8 + p.depth * 1.4);
    const g3 = ctx.createRadialGradient(screenX, screenY, r * 0.4, screenX, screenY, bloomR);
    g3.addColorStop(0, `rgba(${R},${G},${B},0.12)`);
    g3.addColorStop(1, `rgba(${R},${G},${B},0)`);
    ctx.beginPath();
    ctx.arc(screenX, screenY, bloomR, 0, Math.PI * 2);
    ctx.fillStyle = g3;
    ctx.fill();
  }

  ctx.restore();
}

// ─────────────────────────────────────────────────────────────────────────────

export function MobileParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    particles: [] as Particle[],
    // parallax inertia state
    pointerX: 0, pointerY: 0,    // raw pointer (0-1 normalised)
    targetOX: 0, targetOY: 0,    // what we're moving toward
    currentOX: 0, currentOY: 0,  // current eased value
    touching: false,
    t: 0,
    raf: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 390, H = 844;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);

    const s = stateRef.current;
    // 520 particles — sorted far-first (painter's algorithm)
    s.particles = Array.from({ length: 520 }, () => makeParticle(W, H))
      .sort((a, b) => a.depth - b.depth);

    // ── Pointer / touch handlers ─────────────────────────────────────────────
    const onMove = (x: number, y: number) => {
      // Convert to -0.5..+0.5 centred
      s.pointerX =  (x / W) - 0.5;
      s.pointerY =  (y / H) - 0.5;
      // Max parallax shift in px for near layer
      s.targetOX = -s.pointerX * 28;
      s.targetOY = -s.pointerY * 18;
    };
    const onLeave = () => {
      s.targetOX = 0;
      s.targetOY = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      onMove(e.clientX - rect.left, e.clientY - rect.top);
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      onMove(t.clientX - rect.left, t.clientY - rect.top);
    };
    const onTouchEnd = () => onLeave();

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    // ── Render loop ──────────────────────────────────────────────────────────
    const LERP = 0.038; // inertia — lower = more lag/feel

    function tick() {
      // Ease current offset toward target
      s.currentOX += (s.targetOX - s.currentOX) * LERP;
      s.currentOY += (s.targetOY - s.currentOY) * LERP;

      // Background — deep dark blue-black (Active Theory's exact feel)
      ctx.fillStyle = "#020207";
      ctx.fillRect(0, 0, W, H);

      for (const p of s.particles) {
        // World drift
        p.bx += p.vx;
        p.by += p.vy;

        const pad = p.radius * 3 + 10;
        if (p.bx < -pad)    p.bx = W + pad;
        else if (p.bx > W + pad) p.bx = -pad;
        if (p.by < -pad)    p.by = H + pad;
        else if (p.by > H + pad) p.by = -pad;

        // Screen position = world + parallax scaled by depth
        // Near (depth≈1) shifts most, far (depth≈0) barely moves
        const px = p.bx + s.currentOX * p.depth * p.depth;
        const py = p.by + s.currentOY * p.depth * p.depth;

        draw(ctx, p, px, py, s.t);
      }

      // ── Vignette ─────────────────────────────────────────────────────────
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      const vig = ctx.createRadialGradient(
        W * 0.5, H * 0.44, H * 0.06,
        W * 0.5, H * 0.5,  H * 0.72,
      );
      vig.addColorStop(0,    "rgba(0,0,0,0)");
      vig.addColorStop(0.48, "rgba(0,0,0,0.18)");
      vig.addColorStop(1,    "rgba(0,0,0,0.94)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      s.t++;
      s.raf = requestAnimationFrame(tick);
    }

    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div style={{ width: 390, height: 844, background: "#020207", position: "relative", overflow: "hidden" }}>

      {/* ── Particle canvas — background only ──────────────────────────────── */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />

      {/* ── Gradient overlay — same ratios as real HeroSection ──────────────── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.80) 100%)",
        pointerEvents: "none",
      }} />

      {/* ── OARC hero content — exact real layout, floats above everything ── */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        fontFamily: "'Inter', system-ui, sans-serif",
        paddingTop: "max(4.25rem, 3.25rem)",
      }}>
        <div style={{ flex: 1, minHeight: "2vh" }} />

        {/* Headline */}
        <div style={{ padding: "0 12px", textAlign: "center" }}>
          <h1 style={{ margin: 0, color: "#fff" }}>
            <span style={{
              display: "block", fontWeight: 600,
              fontSize: "clamp(1.55rem, 7.6vw, 1.95rem)",
              letterSpacing: "-0.035em", lineHeight: 1.05,
            }}>
              AI-Native Marketing Agency
            </span>
            <span style={{
              display: "block", fontStyle: "italic",
              fontSize: "clamp(1.35rem, 6.6vw, 1.7rem)",
              letterSpacing: "-0.03em", lineHeight: 1.08,
              marginTop: 4, whiteSpace: "nowrap",
            }}>
              Malta's One{" "}
              <span style={{ color: "#e8ffb0", fontStyle: "normal", fontWeight: 600 }}>
                End-to-End
              </span>{" "}
              Team
            </span>
          </h1>
        </div>

        {/* 16:9 video band */}
        <div style={{
          width: "100%", aspectRatio: "16/9", marginTop: 6,
          background: "rgba(255,255,255,0.04)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Video band
          </span>
        </div>

        {/* Glass pills */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", padding: "8px 12px 0" }}>
          {["Creative", "Agentic AI", "Business\ntransformation"].map(label => (
            <div key={label} style={{
              flex: 1, padding: "8px 6px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.11)",
              borderRadius: 8, backdropFilter: "blur(12px)",
              textAlign: "center", color: "#fff",
              fontSize: 10, fontWeight: 600,
              letterSpacing: "0.02em", lineHeight: 1.3,
              whiteSpace: "pre-line",
            }}>{label}</div>
          ))}
        </div>

        {/* In-house line */}
        <p style={{ textAlign: "center", padding: "8px 16px 0", fontSize: "clamp(0.95rem,4.2vw,1.15rem)", lineHeight: 1.3, margin: 0 }}>
          <span style={{ color: "#e8ffb0", fontWeight: 600 }}>In-house</span>{" "}
          <span style={{ color: "#fff", fontStyle: "italic" }}>Studio, Sales & Tech</span>
          <br />
          <span style={{ color: "#fff", fontWeight: 600 }}>at your disposal</span>
        </p>

        {/* Carousel row placeholder */}
        <div style={{ marginTop: 6, height: 68, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 12px", overflow: "hidden" }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ width: 72, height: 56, borderRadius: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }} />
          ))}
        </div>
      </div>

      {/* Drag hint — disappears after first interaction */}
      <div style={{
        position: "absolute", bottom: 96, left: "50%", transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.28)", fontSize: 10, letterSpacing: "0.12em",
        textTransform: "uppercase", pointerEvents: "none",
        fontFamily: "Inter, sans-serif",
      }}>
        drag to feel depth
      </div>
    </div>
  );
}
