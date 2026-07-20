"use client";

/**
 * Chrome-dust ambient layer.
 *
 * The particles the Beat 00 shatter dissolves into. Listens for the
 * `oarc:shatter` event fired by IntroOverlay to burst, then settles into a
 * slow ambient drift over the hero — the handoff point for the Monolith's
 * fluid dust field in the next build step. Fades out across the first
 * viewport of scroll and fully stops its rAF loop once invisible.
 *
 * Particle counts follow the fps governor's quality tier; the whole layer
 * is skipped for prefers-reduced-motion.
 */

import { useEffect, useRef } from "react";
import {
  getQualityTier,
  onQualityTierChange,
  type QualityTier,
} from "@/lib/motion/fpsGovernor";

const AMBIENT_COUNT: Record<QualityTier, number> = {
  high: 170,
  medium: 100,
  low: 50,
  static: 0,
};

type Dust = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  base: number; // base alpha
  tw: number; // twinkle speed
  ph: number; // twinkle phase
  life: number; // frames left; Infinity = ambient
  maxLife: number;
};

function makeAmbient(w: number, h: number): Dust {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -0.06 - Math.random() * 0.16, // dust drifts gently upward
    r: 0.5 + Math.random() * 1.1,
    base: 0.12 + Math.random() * 0.3,
    tw: 0.008 + Math.random() * 0.02,
    ph: Math.random() * Math.PI * 2,
    life: Infinity,
    maxLife: Infinity,
  };
}

export default function ChromeDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvas.style.display = "none";
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;
    let tier = getQualityTier();
    let particles: Dust[] = [];
    let rafId: number | null = null;
    let time = 0;
    let disposed = false;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const seed = () => {
      const target = AMBIENT_COUNT[tier];
      const ambient = particles.filter((p) => p.life === Infinity);
      if (ambient.length < target) {
        for (let i = ambient.length; i < target; i++)
          particles.push(makeAmbient(w, h));
      } else if (ambient.length > target) {
        let excess = ambient.length - target;
        particles = particles.filter((p) => {
          if (p.life === Infinity && excess > 0) {
            excess--;
            return false;
          }
          return true;
        });
      }
    };
    seed();

    const veilOpacity = () =>
      Math.max(0, Math.min(1, 1 - window.scrollY / (h * 1.1)));

    const frame = () => {
      rafId = requestAnimationFrame(frame);
      if (document.hidden) return;
      const op = veilOpacity();
      canvas.style.opacity = String(op);
      if (op <= 0 || tier === "static") {
        // Nothing visible — park the loop until the user scrolls back up
        stop();
        window.addEventListener("scroll", resumeOnce, { passive: true });
        return;
      }
      time++;
      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time * 0.004 + p.ph) * 0.08;
        p.y += p.vy;
        if (p.life !== Infinity) {
          // Burst particles decelerate into the ambient drift, then die
          p.vx *= 0.965;
          p.vy = p.vy * 0.965 - 0.004;
          p.life--;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
        }
        // Wrap ambient particles at edges
        if (p.x < -4) p.x = w + 4;
        else if (p.x > w + 4) p.x = -4;
        if (p.y < -4) p.y = h + 4;
        else if (p.y > h + 4) p.y = -4;

        const fade =
          p.life === Infinity ? 1 : Math.min(1, p.life / (p.maxLife * 0.4));
        const a =
          p.base * (0.75 + 0.25 * Math.sin(time * p.tw + p.ph)) * fade;
        // Chrome tint — cool silver-white
        ctx.fillStyle = `rgba(216, 224, 236, ${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const start = () => {
      if (rafId === null && !disposed) rafId = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
    const resumeOnce = () => {
      if (veilOpacity() > 0 && tier !== "static") {
        window.removeEventListener("scroll", resumeOnce);
        start();
      }
    };

    const onShatter = () => {
      if (tier === "static") return;
      const burst = tier === "high" ? 150 : tier === "medium" ? 90 : 45;
      for (let i = 0; i < burst; i++) {
        const p = makeAmbient(w, h);
        const ang = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 5;
        p.vx = Math.cos(ang) * speed;
        p.vy = Math.sin(ang) * speed * 0.7 + 1.2; // biased downward like debris
        p.base = 0.25 + Math.random() * 0.4;
        p.maxLife = 140 + Math.random() * 120;
        p.life = p.maxLife;
        particles.push(p);
      }
      start();
    };

    const unsubTier = onQualityTierChange((t) => {
      tier = t;
      seed();
      if (t === "static") {
        stop();
        canvas.style.display = "none";
      }
    });

    window.addEventListener("resize", resize);
    window.addEventListener("oarc:shatter", onShatter);
    start();

    return () => {
      disposed = true;
      stop();
      unsubTier();
      window.removeEventListener("resize", resize);
      window.removeEventListener("oarc:shatter", onShatter);
      window.removeEventListener("scroll", resumeOnce);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20"
      aria-hidden="true"
      data-testid="canvas-chrome-dust"
    />
  );
}
