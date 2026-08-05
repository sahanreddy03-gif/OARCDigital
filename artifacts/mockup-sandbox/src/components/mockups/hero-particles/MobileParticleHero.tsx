import { useEffect, useRef } from "react";

// Galaxy multicolour particle bokeh — Active Theory style
// Mobile hero background prototype for OARC Digital

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  blur: number;
  vx: number;
  vy: number;
  pulseSpeed: number;
  pulsePhase: number;
}

// Galaxy colour palette — multicolour, dramatic
const COLORS = [
  "#ffffff", // white (most common)
  "#ffffff",
  "#ffffff",
  "#c4ff4d", // lime
  "#c4ff4d",
  "#7fff6e", // soft green
  "#a8edea", // aqua
  "#d4a8f5", // soft purple
  "#f5a8d4", // soft pink
  "#f5c842", // gold
  "#f57f42", // warm orange
  "#42b8f5", // ice blue
  "#6e42f5", // indigo
  "#f54242", // red accent
  "#42f5b8", // teal
];

function initParticles(w: number, h: number, count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const radius = Math.random() < 0.7
      ? 2 + Math.random() * 6   // small — far away
      : 8 + Math.random() * 22; // large — close

    // Small particles = more blurred (far), large = less blurred (near)
    const blur = radius < 8
      ? 4 + Math.random() * 10
      : 0.5 + Math.random() * 3;

    return {
      x: Math.random() * w,
      y: Math.random() * h,
      radius,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.15 + Math.random() * 0.7,
      blur,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      pulseSpeed: 0.003 + Math.random() * 0.008,
      pulsePhase: Math.random() * Math.PI * 2,
    };
  });
}

function drawParticle(ctx: CanvasRenderingContext2D, p: Particle, t: number) {
  const pulse = Math.sin(t * p.pulseSpeed + p.pulsePhase) * 0.15;
  const alpha = Math.min(1, Math.max(0, p.alpha + pulse));
  const r = p.radius + Math.sin(t * p.pulseSpeed * 0.7 + p.pulsePhase) * p.radius * 0.08;

  ctx.save();
  ctx.filter = `blur(${p.blur}px)`;
  ctx.globalAlpha = alpha;

  const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
  grad.addColorStop(0, p.color);
  grad.addColorStop(0.4, p.color + "bb");
  grad.addColorStop(1, p.color + "00");

  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

export function MobileParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    particlesRef.current = initParticles(W, H, 340);

    let t = 0;

    function tick() {
      ctx!.clearRect(0, 0, W, H);

      // Deep space base — very dark, slight warmth
      ctx!.fillStyle = "#050508";
      ctx!.fillRect(0, 0, W, H);

      // Draw particles back to front (small = back)
      const sorted = [...particlesRef.current].sort((a, b) => a.radius - b.radius);
      for (const p of sorted) {
        drawParticle(ctx!, p, t);

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges with a small margin so particles don't pop
        const margin = p.radius + p.blur + 2;
        if (p.x < -margin) p.x = W + margin;
        if (p.x > W + margin) p.x = -margin;
        if (p.y < -margin) p.y = H + margin;
        if (p.y > H + margin) p.y = -margin;
      }

      // Vignette — heavy edges to focus center
      const vig = ctx!.createRadialGradient(W / 2, H / 2, H * 0.15, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(0.6, "rgba(0,0,0,0.2)");
      vig.addColorStop(1, "rgba(0,0,0,0.88)");
      ctx!.fillStyle = vig;
      ctx!.fillRect(0, 0, W, H);

      t += 1;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        width: 390,
        height: 844,
        background: "#050508",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        width={390}
        height={844}
        style={{ position: "absolute", inset: 0 }}
      />

      {/* Hero text overlay — showing how it sits on the background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 28px",
          gap: 16,
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c4ff4d",
            opacity: 0.9,
          }}
        >
          AI-Powered Agency
        </span>

        {/* Headline */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          We Build
          <br />
          Revenue
          <br />
          Machines.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            maxWidth: 280,
          }}
        >
          AI employees, automation systems, and content engines that replace entire teams.
        </p>

        {/* CTA */}
        <button
          style={{
            marginTop: 8,
            padding: "14px 28px",
            background: "#c4ff4d",
            color: "#050508",
            border: "none",
            borderRadius: 4,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}
