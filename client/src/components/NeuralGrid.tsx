import { useEffect, useRef, useCallback } from 'react';

interface GridNode {
  screenX: number;
  screenY: number;
  pulse: number;
  pulseSpeed: number;
  active: boolean;
  brightness: number;
}

export default function NeuralGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const nodesRef = useRef<GridNode[]>([]);
  const timeRef = useRef(0);
  const staticCanvasRef = useRef<OffscreenCanvas | HTMLCanvasElement | null>(null);
  const isVisibleRef = useRef(true);
  const lastFrameRef = useRef(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const GRID_COLS = typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 28;
  const GRID_ROWS = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 16;
  const GRID_SPACING = 1.2;
  const VANISH_X = 0.35;
  const VANISH_Y = 0.32;
  const PROJECT_Y = 0.42;
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;
  const MOUSE_RADIUS = 180;
  const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

  const GREEN_R = 180, GREEN_G = 255, GREEN_B = 80;
  const TEAL_R = 80, TEAL_G = 220, TEAL_B = 200;

  const projectPoint = useCallback((worldX: number, worldZ: number, w: number, h: number) => {
    const depth = Math.max(0.1, worldZ * 0.12 + 1);
    const perspectiveX = VANISH_X * w + (worldX - VANISH_X * w * 0.3) / depth;
    const perspectiveY = VANISH_Y * h + (worldZ * GRID_SPACING * 40) / depth;
    const adjustedY = h * PROJECT_Y + (perspectiveY - h * PROJECT_Y) * 0.8;
    return { x: perspectiveX, y: adjustedY };
  }, []);

  const initNodes = useCallback((w: number, h: number, cols: number, rows: number) => {
    const nodes: GridNode[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const worldX = (col - cols / 2) * GRID_SPACING * 50;
        const worldZ = row * GRID_SPACING;
        const { x, y } = projectPoint(worldX, worldZ, w, h);
        nodes.push({
          screenX: x, screenY: y,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.025,
          active: Math.random() < 0.12,
          brightness: 0,
        });
      }
    }
    nodesRef.current = nodes;
  }, [projectPoint]);

  const buildStaticGrid = useCallback((w: number, h: number, dpr: number, cols: number, rows: number) => {
    let oc: OffscreenCanvas | HTMLCanvasElement;
    if (typeof OffscreenCanvas !== 'undefined') {
      oc = new OffscreenCanvas(w * dpr, h * dpr);
    } else {
      oc = document.createElement('canvas');
      oc.width = w * dpr;
      oc.height = h * dpr;
    }
    const ctx = oc.getContext('2d') as CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null;
    if (!ctx) return null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const nodes = nodesRef.current;

    ctx.lineWidth = 0.5;
    for (let row = 0; row < rows; row++) {
      const depthFade = Math.max(0, 1 - row / rows) * 0.05;
      if (depthFade < 0.003) continue;
      const alpha = depthFade.toFixed(4);

      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.beginPath();
      for (let col = 0; col < cols - 1; col++) {
        const idx = row * cols + col;
        const n1 = nodes[idx];
        const n2 = nodes[idx + 1];
        if (!n1 || !n2) continue;
        ctx.moveTo(n1.screenX, n1.screenY);
        ctx.lineTo(n2.screenX, n2.screenY);
      }
      ctx.stroke();

      if (row < rows - 1) {
        ctx.beginPath();
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          const belowIdx = (row + 1) * cols + col;
          const n1 = nodes[idx];
          const n2 = nodes[belowIdx];
          if (!n1 || !n2) continue;
          ctx.moveTo(n1.screenX, n1.screenY);
          ctx.lineTo(n2.screenX, n2.screenY);
        }
        ctx.stroke();
      }
    }
    return oc;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const cols = isMobile ? 16 : 28;
    const rows = isMobile ? 10 : 16;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
      initNodes(w, h, cols, rows);
      staticCanvasRef.current = buildStaticGrid(w, h, dpr, cols, rows);
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
      if (isVisibleRef.current && !prefersReducedMotion) {
        lastFrameRef.current = performance.now();
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    if (prefersReducedMotion) {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);
      if (staticCanvasRef.current) {
        ctx.drawImage(staticCanvasRef.current, 0, 0, w, h);
      }
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('visibilitychange', handleVisibility);
      };
    }

    const animate = (timestamp: number) => {
      if (!isVisibleRef.current) return;

      const elapsed = timestamp - lastFrameRef.current;
      if (elapsed < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameRef.current = timestamp - (elapsed % FRAME_INTERVAL);

      timeRef.current += 1;
      const t = timeRef.current;
      const { w, h } = dimensionsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      if (staticCanvasRef.current) {
        ctx.drawImage(staticCanvasRef.current, 0, 0, w, h);
      }

      const nodes = nodesRef.current;
      const activeNodes: GridNode[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulse += node.pulseSpeed;

        const dx = mx - node.screenX;
        const dy = my - node.screenY;
        const distSq = dx * dx + dy * dy;

        if (distSq < MOUSE_RADIUS_SQ) {
          const dist = Math.sqrt(distSq);
          const mouseInfluence = (1 - dist / MOUSE_RADIUS) * 0.7;
          node.brightness = mouseInfluence;
          activeNodes.push(node);
        } else if (node.active) {
          const pulseVal = Math.sin(node.pulse) * 0.5 + 0.5;
          node.brightness = pulseVal * 0.3;
          if (node.brightness > 0.08) activeNodes.push(node);
        } else {
          node.brightness = 0;
        }

        if (Math.random() < 0.0008) node.active = !node.active;
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const idx = row * cols + col;
          const n1 = nodes[idx];
          const n2 = nodes[idx + 1];
          if (!n1 || !n2) continue;
          const brightBoost = (n1.brightness + n2.brightness) * 0.12;
          if (brightBoost < 0.008) continue;

          const depthFade = Math.max(0, 1 - row / rows);
          const waveOffset = Math.sin(t * 0.008 + col * 0.15 + row * 0.1) * 0.02;
          const opacity = Math.min(depthFade * (0.04 + waveOffset) + brightBoost, 0.3);

          ctx.beginPath();
          ctx.moveTo(n1.screenX, n1.screenY);
          ctx.lineTo(n2.screenX, n2.screenY);
          ctx.strokeStyle = `rgba(${GREEN_R},${GREEN_G},${GREEN_B},${opacity * 0.6})`;
          ctx.lineWidth = depthFade * 0.8 + 0.3;
          ctx.stroke();
        }

        if (row < rows - 1) {
          for (let col = 0; col < cols; col++) {
            const idx = row * cols + col;
            const n1 = nodes[idx];
            const n2 = nodes[(row + 1) * cols + col];
            if (!n1 || !n2) continue;
            const brightBoost = (n1.brightness + n2.brightness) * 0.1;
            if (brightBoost < 0.008) continue;

            const depthFade = Math.max(0, 1 - row / rows);
            const waveOffset = Math.sin(t * 0.006 + col * 0.2 + row * 0.15) * 0.015;
            const opacity = Math.min(depthFade * (0.03 + waveOffset) + brightBoost, 0.25);

            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);
            ctx.strokeStyle = `rgba(${GREEN_R},${GREEN_G},${GREEN_B},${opacity * 0.5})`;
            ctx.lineWidth = depthFade * 0.6 + 0.2;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < activeNodes.length; i++) {
        const node = activeNodes[i];
        const glowSize = 2 + node.brightness * 7;
        const alpha = node.brightness * 0.8;

        const isStrong = node.brightness > 0.15;
        const r = isStrong ? GREEN_R : TEAL_R;
        const g = isStrong ? GREEN_G : TEAL_G;
        const b = isStrong ? GREEN_B : TEAL_B;

        const gradient = ctx.createRadialGradient(
          node.screenX, node.screenY, 0,
          node.screenX, node.screenY, glowSize * 3.5
        );
        gradient.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.6})`);
        gradient.addColorStop(0.35, `rgba(${r},${g},${b},${alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, glowSize * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, glowSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initNodes, buildStaticGrid, projectPoint]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none motion-reduce:hidden"
      style={{ zIndex: 45, willChange: 'transform', mixBlendMode: 'screen' }}
      data-testid="neural-grid-canvas"
    />
  );
}