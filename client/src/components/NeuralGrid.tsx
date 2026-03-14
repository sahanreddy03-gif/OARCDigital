import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  brightness: number;
  isHub: boolean;
}

interface Signal {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}

const C_LIME  = [196, 255,  77] as const;
const C_TEAL  = [ 80, 230, 200] as const;
const C_WHITE = [255, 255, 240] as const;

const CONNECTION_DIST    = 165;
const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
const MOUSE_RADIUS       = 230;
const MOUSE_RADIUS_SQ    = MOUSE_RADIUS * MOUSE_RADIUS;
const ATTRACT_STRENGTH   = 0.022;
const RETURN_STRENGTH    = 0.008;
const DAMPING            = 0.82;
const MAX_SIGNALS        = 10;
const TARGET_FPS         = 30;
const FRAME_MS           = 1000 / TARGET_FPS;

export default function NeuralGrid() {
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const animRef       = useRef<number>(0);
  const mouseRef      = useRef({ x: -9999, y: -9999 });
  const particlesRef  = useRef<Particle[]>([]);
  const signalsRef    = useRef<Signal[]>([]);
  const isVisibleRef  = useRef(true);
  const lastFrameRef  = useRef(0);
  const timeRef       = useRef(0);
  const dimRef        = useRef({ w: 0, h: 0 });

  const initParticles = useCallback((w: number, h: number, count: number) => {
    const hubCount = Math.floor(count * 0.1);
    const ps: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const isHub = i < hubCount;
      ps.push({
        x, y,
        homeX: x, homeY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isHub ? 2.8 : 1 + Math.random() * 1.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.007 + Math.random() * 0.016,
        brightness: 0,
        isHub,
      });
    }
    particlesRef.current = ps;
    signalsRef.current   = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 55 : 140;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w   = window.innerWidth;
      const h   = window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimRef.current = { w, h };
      initParticles(w, h, PARTICLE_COUNT);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onVisibility = () => {
      isVisibleRef.current = !document.hidden;
      if (isVisibleRef.current && !prefersReducedMotion) {
        lastFrameRef.current = performance.now();
        animRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const spawnSignal = () => {
      const ps = particlesRef.current;
      if (signalsRef.current.length >= MAX_SIGNALS || ps.length < 2) return;
      const fromIdx = Math.floor(Math.random() * ps.length);
      const from = ps[fromIdx];
      let bestSq = Infinity, bestIdx = -1;
      for (let i = 0; i < ps.length; i++) {
        if (i === fromIdx) continue;
        const dx = ps[i].x - from.x;
        const dy = ps[i].y - from.y;
        const d = dx * dx + dy * dy;
        if (d < CONNECTION_DIST_SQ && d < bestSq) { bestSq = d; bestIdx = i; }
      }
      if (bestIdx === -1) return;
      signalsRef.current.push({ fromIdx, toIdx: bestIdx, t: 0, speed: 0.018 + Math.random() * 0.028 });
    };

    const animate = (timestamp: number) => {
      if (!isVisibleRef.current) return;

      const elapsed = timestamp - lastFrameRef.current;
      if (elapsed < FRAME_MS) { animRef.current = requestAnimationFrame(animate); return; }
      lastFrameRef.current = timestamp - (elapsed % FRAME_MS);
      timeRef.current += 1;
      const tick = timeRef.current;

      const { w, h } = dimRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const ps = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      // ── Cursor ambient halo ──────────────────────────────────────────────
      if (mx > -100 && mx < w + 100) {
        const haloR = MOUSE_RADIUS * 1.4;
        const halo  = ctx.createRadialGradient(mx, my, 0, mx, my, haloR);
        halo.addColorStop(0,   `rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0.055)`);
        halo.addColorStop(0.35,`rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0.018)`);
        halo.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(mx, my, haloR, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Update particles ────────────────────────────────────────────────
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.pulse += p.pulseSpeed;

        const dx = mx - p.x;
        const dy = my - p.y;
        const dSq = dx * dx + dy * dy;

        if (dSq < MOUSE_RADIUS_SQ) {
          const dist = Math.sqrt(dSq);
          const inf  = 1 - dist / MOUSE_RADIUS;
          p.vx += (dx / dist) * ATTRACT_STRENGTH * inf * inf;
          p.vy += (dy / dist) * ATTRACT_STRENGTH * inf * inf;
          p.brightness = Math.min(1, p.brightness + inf * 0.18);
        } else {
          // Drift back home gently
          p.vx += (p.homeX - p.x) * RETURN_STRENGTH * 0.08;
          p.vy += (p.homeY - p.y) * RETURN_STRENGTH * 0.08;
          // Tiny organic noise
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
          p.brightness = Math.max(0, p.brightness - 0.025);
        }

        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x  += p.vx;
        p.y  += p.vy;

        // Soft wall bounce
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy); }
      }

      // ── Update & spawn signals ──────────────────────────────────────────
      const sigs = signalsRef.current;
      for (let i = sigs.length - 1; i >= 0; i--) {
        sigs[i].t += sigs[i].speed;
        if (sigs[i].t > 1) sigs.splice(i, 1);
      }
      if (tick % 10 === 0) spawnSignal();

      // ── Draw connections ────────────────────────────────────────────────
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx  = ps[j].x - ps[i].x;
          const dy  = ps[j].y - ps[i].y;
          const dSq = dx * dx + dy * dy;
          if (dSq > CONNECTION_DIST_SQ) continue;

          const dist       = Math.sqrt(dSq);
          const distFade   = 1 - dist / CONNECTION_DIST;
          const brightBoost = (ps[i].brightness + ps[j].brightness) * 0.5;
          const wave       = Math.sin(tick * 0.018 + i * 0.28 + j * 0.14) * 0.012;

          const alpha = Math.min(distFade * distFade * 0.09 + brightBoost * 0.30 + wave, 0.60);
          if (alpha < 0.004) continue;

          const useHub = ps[i].isHub || ps[j].isHub;
          const [r, g, b] = brightBoost > 0.25 ? C_LIME : (useHub ? C_TEAL : C_LIME);

          ctx.beginPath();
          ctx.moveTo(ps[i].x, ps[i].y);
          ctx.lineTo(ps[j].x, ps[j].y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.lineWidth   = 0.4 + brightBoost * 1.1 + distFade * 0.3;
          ctx.stroke();
        }
      }

      // ── Draw traveling signals ──────────────────────────────────────────
      for (const sig of sigs) {
        const from = ps[sig.fromIdx];
        const to   = ps[sig.toIdx];
        if (!from || !to) continue;

        const sx = from.x + (to.x - from.x) * sig.t;
        const sy = from.y + (to.y - from.y) * sig.t;

        // Trail gradient
        const trailT = Math.max(0, sig.t - 0.18);
        const tx = from.x + (to.x - from.x) * trailT;
        const ty = from.y + (to.y - from.y) * trailT;
        const trailLen = Math.sqrt((sx - tx) ** 2 + (sy - ty) ** 2);
        if (trailLen > 0.5) {
          const trail = ctx.createLinearGradient(tx, ty, sx, sy);
          trail.addColorStop(0, `rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0)`);
          trail.addColorStop(1, `rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0.75)`);
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = trail;
          ctx.lineWidth   = 1.8;
          ctx.stroke();
        }

        // Signal core glow
        const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 10);
        sg.addColorStop(0,   `rgba(${C_WHITE[0]},${C_WHITE[1]},${C_WHITE[2]},0.95)`);
        sg.addColorStop(0.3, `rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0.50)`);
        sg.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(sx, sy, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Draw particles ──────────────────────────────────────────────────
      for (let i = 0; i < ps.length; i++) {
        const p        = ps[i];
        const pulseVal = Math.sin(p.pulse) * 0.5 + 0.5;
        const baseBr   = p.isHub ? 0.40 + pulseVal * 0.25 : 0.18 + pulseVal * 0.12;
        const totalBr  = Math.min(1, baseBr + p.brightness * 0.65);

        const [r, g, b] = p.brightness > 0.45 ? C_WHITE : (p.isHub ? C_TEAL : C_LIME);

        // Outer glow ring
        const glowR = p.radius * (p.isHub ? 6 : 4) + p.brightness * 14 + pulseVal * 2;
        const glow  = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        glow.addColorStop(0,   `rgba(${r},${g},${b},${totalBr * 0.55})`);
        glow.addColorStop(0.35,`rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},${totalBr * 0.18})`);
        glow.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Inner core dot
        const coreR = p.radius * (0.7 + pulseVal * 0.4) + p.brightness * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, coreR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, totalBr * 1.3)})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      const { w, h } = dimRef.current;
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current;
      for (const p of ps) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${C_LIME[0]},${C_LIME[1]},${C_LIME[2]},0.2)`;
        ctx.fill();
      }
    } else {
      animRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(animRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none motion-reduce:hidden"
      style={{ zIndex: 45, willChange: 'transform', mixBlendMode: 'screen' }}
      data-testid="neural-grid-canvas"
    />
  );
}
