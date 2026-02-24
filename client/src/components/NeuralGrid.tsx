import { useEffect, useRef, useCallback } from 'react';

interface GridNode {
  screenX: number;
  screenY: number;
  worldX: number;
  worldZ: number;
  pulse: number;
  pulseSpeed: number;
  active: boolean;
  brightness: number;
}

interface DataFlow {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  active: boolean;
  color: string;
}

export default function NeuralGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<GridNode[]>([]);
  const flowsRef = useRef<DataFlow[]>([]);
  const timeRef = useRef(0);

  const PROJECT_Y = 0.42;
  const GRID_COLS = 28;
  const GRID_ROWS = 16;
  const GRID_SPACING = 1.2;
  const VANISH_X = 0.35;
  const VANISH_Y = 0.32;

  const ACCENT_GREEN = { r: 180, g: 255, b: 80 };
  const ACCENT_TEAL = { r: 80, g: 220, b: 200 };
  const GRID_WHITE = { r: 255, g: 255, b: 255 };

  const projectPoint = useCallback((worldX: number, worldZ: number, w: number, h: number) => {
    const depth = Math.max(0.1, worldZ * 0.12 + 1);
    const perspectiveX = VANISH_X * w + (worldX - VANISH_X * w * 0.3) / depth;
    const perspectiveY = VANISH_Y * h + (worldZ * GRID_SPACING * 40) / depth;
    const adjustedY = h * PROJECT_Y + (perspectiveY - h * PROJECT_Y) * 0.8;
    return { x: perspectiveX, y: adjustedY, depth };
  }, []);

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: GridNode[] = [];
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        const worldX = (col - GRID_COLS / 2) * GRID_SPACING * 50;
        const worldZ = row * GRID_SPACING;
        const { x, y } = projectPoint(worldX, worldZ, w, h);
        nodes.push({
          screenX: x,
          screenY: y,
          worldX,
          worldZ,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.025,
          active: Math.random() < 0.12,
          brightness: 0,
        });
      }
    }
    nodesRef.current = nodes;
  }, [projectPoint]);

  const initFlows = useCallback(() => {
    const flows: DataFlow[] = [];
    const nodes = nodesRef.current;
    const colors = [
      `rgba(${ACCENT_GREEN.r},${ACCENT_GREEN.g},${ACCENT_GREEN.b}`,
      `rgba(${ACCENT_TEAL.r},${ACCENT_TEAL.g},${ACCENT_TEAL.b}`,
    ];

    for (let i = 0; i < 18; i++) {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      let toIdx = fromIdx + 1 + Math.floor(Math.random() * GRID_COLS);
      if (toIdx >= nodes.length) toIdx = Math.floor(Math.random() * nodes.length);
      flows.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.006,
        active: true,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    flowsRef.current = flows;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes(window.innerWidth, window.innerHeight);
      initFlows();
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS - 1; col++) {
          const idx = row * GRID_COLS + col;
          const nextIdx = idx + 1;
          const n1 = nodesRef.current[idx];
          const n2 = nodesRef.current[nextIdx];
          if (!n1 || !n2) continue;
          const depthFade = Math.max(0, 1 - row / GRID_ROWS) * 0.06;
          ctx.beginPath();
          ctx.moveTo(n1.screenX, n1.screenY);
          ctx.lineTo(n2.screenX, n2.screenY);
          ctx.strokeStyle = `rgba(255,255,255,${depthFade})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        if (row < GRID_ROWS - 1) {
          for (let col = 0; col < GRID_COLS; col++) {
            const idx = row * GRID_COLS + col;
            const belowIdx = (row + 1) * GRID_COLS + col;
            const n1 = nodesRef.current[idx];
            const n2 = nodesRef.current[belowIdx];
            if (!n1 || !n2) continue;
            const depthFade = Math.max(0, 1 - row / GRID_ROWS) * 0.06;
            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);
            ctx.strokeStyle = `rgba(255,255,255,${depthFade})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    const animate = () => {
      timeRef.current += 1;
      const t = timeRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const flows = flowsRef.current;

      nodes.forEach((node, i) => {
        node.pulse += node.pulseSpeed;
        const pulseVal = Math.sin(node.pulse) * 0.5 + 0.5;

        const dx = mx - node.screenX;
        const dy = my - node.screenY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = Math.max(0, 1 - dist / 200) * 0.6;

        node.brightness = mouseInfluence + (node.active ? pulseVal * 0.4 : 0);

        if (Math.random() < 0.0008) {
          node.active = !node.active;
        }
      });

      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS - 1; col++) {
          const idx = row * GRID_COLS + col;
          const nextIdx = idx + 1;
          const n1 = nodes[idx];
          const n2 = nodes[nextIdx];
          if (!n1 || !n2) continue;

          const depthFade = Math.max(0, 1 - row / GRID_ROWS);
          const waveOffset = Math.sin(t * 0.008 + col * 0.15 + row * 0.1) * 0.02;
          const baseOpacity = depthFade * (0.04 + waveOffset);
          const brightBoost = (n1.brightness + n2.brightness) * 0.12;
          const opacity = Math.min(baseOpacity + brightBoost, 0.25);

          ctx.beginPath();
          ctx.moveTo(n1.screenX, n1.screenY);
          ctx.lineTo(n2.screenX, n2.screenY);

          if (brightBoost > 0.02) {
            ctx.strokeStyle = `rgba(${ACCENT_GREEN.r},${ACCENT_GREEN.g},${ACCENT_GREEN.b},${opacity * 0.6})`;
          } else {
            ctx.strokeStyle = `rgba(${GRID_WHITE.r},${GRID_WHITE.g},${GRID_WHITE.b},${opacity})`;
          }
          ctx.lineWidth = depthFade * 0.8 + 0.2;
          ctx.stroke();
        }

        if (row < GRID_ROWS - 1) {
          for (let col = 0; col < GRID_COLS; col++) {
            const idx = row * GRID_COLS + col;
            const belowIdx = (row + 1) * GRID_COLS + col;
            const n1 = nodes[idx];
            const n2 = nodes[belowIdx];
            if (!n1 || !n2) continue;

            const depthFade = Math.max(0, 1 - row / GRID_ROWS);
            const waveOffset = Math.sin(t * 0.006 + col * 0.2 + row * 0.15) * 0.015;
            const baseOpacity = depthFade * (0.03 + waveOffset);
            const brightBoost = (n1.brightness + n2.brightness) * 0.1;
            const opacity = Math.min(baseOpacity + brightBoost, 0.2);

            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);

            if (brightBoost > 0.02) {
              ctx.strokeStyle = `rgba(${ACCENT_GREEN.r},${ACCENT_GREEN.g},${ACCENT_GREEN.b},${opacity * 0.5})`;
            } else {
              ctx.strokeStyle = `rgba(${GRID_WHITE.r},${GRID_WHITE.g},${GRID_WHITE.b},${opacity})`;
            }
            ctx.lineWidth = depthFade * 0.6 + 0.2;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        if (node.brightness < 0.05) return;

        const glowSize = 2 + node.brightness * 6;
        const alpha = node.brightness * 0.7;

        const isGreen = node.brightness > 0.15;
        const color = isGreen ? ACCENT_GREEN : ACCENT_TEAL;

        const gradient = ctx.createRadialGradient(
          node.screenX, node.screenY, 0,
          node.screenX, node.screenY, glowSize * 3
        );
        gradient.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${alpha * 0.5})`);
        gradient.addColorStop(0.4, `rgba(${color.r},${color.g},${color.b},${alpha * 0.15})`);
        gradient.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, glowSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, glowSize * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${alpha})`;
        ctx.fill();
      });

      flows.forEach((flow) => {
        flow.progress += flow.speed;
        if (flow.progress > 1) {
          flow.progress = 0;
          flow.fromNode = Math.floor(Math.random() * nodes.length);
          let toIdx = flow.fromNode + 1 + Math.floor(Math.random() * GRID_COLS);
          if (toIdx >= nodes.length) toIdx = Math.floor(Math.random() * nodes.length);
          flow.toNode = toIdx;
        }

        const from = nodes[flow.fromNode];
        const to = nodes[flow.toNode];
        if (!from || !to) return;

        const px = from.screenX + (to.screenX - from.screenX) * flow.progress;
        const py = from.screenY + (to.screenY - from.screenY) * flow.progress;

        const fadeIn = flow.progress < 0.15 ? flow.progress / 0.15 : 1;
        const fadeOut = flow.progress > 0.85 ? (1 - flow.progress) / 0.15 : 1;
        const alpha = fadeIn * fadeOut * 0.6;

        const trailLength = 0.15;
        const trailStart = Math.max(0, flow.progress - trailLength);
        const tx = from.screenX + (to.screenX - from.screenX) * trailStart;
        const ty = from.screenY + (to.screenY - from.screenY) * trailStart;

        const gradient = ctx.createLinearGradient(tx, ty, px, py);
        gradient.addColorStop(0, `${flow.color},0)`);
        gradient.addColorStop(1, `${flow.color},${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const dotGrad = ctx.createRadialGradient(px, py, 0, px, py, 4);
        dotGrad.addColorStop(0, `${flow.color},${alpha})`);
        dotGrad.addColorStop(1, `${flow.color},0)`);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = dotGrad;
        ctx.fill();
      });

      const horizonY = h * VANISH_Y;
      const horizonGrad = ctx.createRadialGradient(
        w * VANISH_X, horizonY, 0,
        w * VANISH_X, horizonY, w * 0.5
      );
      horizonGrad.addColorStop(0, `rgba(${ACCENT_GREEN.r},${ACCENT_GREEN.g},${ACCENT_GREEN.b},0.04)`);
      horizonGrad.addColorStop(0.3, `rgba(${ACCENT_GREEN.r},${ACCENT_GREEN.g},${ACCENT_GREEN.b},0.015)`);
      horizonGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, 0, w, h);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initNodes, initFlows, projectPoint]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 motion-reduce:hidden"
      data-testid="neural-grid-canvas"
    />
  );
}