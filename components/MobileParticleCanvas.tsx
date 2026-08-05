"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Active Theory-grade 3D particle field
//
// Camera sits at origin (0,0,0). ~3 000 particles surround it in a sphere.
// Touch/mouse rotates the camera in 3D with inertia — you feel inside the cloud.
// Custom GLSL shader: per-particle variable size + soft bokeh disc + bright core.
// AdditiveBlending — glows accumulate like real light.
// Auto slow-rotation when idle.
// ─────────────────────────────────────────────────────────────────────────────

const VERT = `
attribute float aSize;
attribute vec3  aColor;
attribute float aAlpha;

varying vec3  vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // Perspective size — particles get larger as they approach
  gl_PointSize = aSize * (300.0 / -mv.z);
  // Clamp so very-near particles don't blow up to 200px
  gl_PointSize = clamp(gl_PointSize, 0.5, 120.0);
  // Fade near particles gently so they don't clip hard
  float dist = length(mv.xyz);
  vAlpha = aAlpha * clamp(dist / 4.0, 0.0, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = `
varying vec3  vColor;
varying float vAlpha;

void main() {
  // gl_PointCoord goes 0→1; map to -1→+1
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(uv, uv);
  if (r2 > 1.0) discard;

  // Bright core + wide soft glow — Active Theory bokeh shape
  float core = exp(-r2 * 9.0);
  float glow = exp(-r2 * 2.2);
  float bloom= exp(-r2 * 0.7);

  vec3  col   = vColor * (core * 2.0 + glow * 0.6 + bloom * 0.15);
  float alpha = vAlpha * (core * 0.95 + glow * 0.38 + bloom * 0.08);

  gl_FragColor = vec4(col, alpha);
}
`;

// ── Atmospheric palette ───────────────────────────────────────────────────────
// Each: [R,G,B, weight] — values 0-1. White dominates; colour is a whisper.
const PAL: [number, number, number, number][] = [
  [1.00, 1.00, 1.00, 8],  // white
  [1.00, 1.00, 1.00, 6],
  [0.82, 0.94, 1.00, 3],  // ice-white
  [0.70, 1.00, 0.87, 2],  // ghost mint
  [0.58, 0.80, 1.00, 2],  // dim cobalt
  [0.80, 0.64, 1.00, 1],  // dim violet
  [1.00, 0.87, 0.64, 1],  // barely warm amber
  [0.64, 1.00, 0.73, 1],  // ghost green
  [1.00, 0.76, 0.72, 1],  // ghost coral — rare
];

function pickColor(): [number, number, number] {
  const total = PAL.reduce((s, p) => s + p[3], 0);
  let n = Math.random() * total;
  for (const [r, g, b, w] of PAL) { n -= w; if (n <= 0) return [r, g, b]; }
  return [1, 1, 1];
}

export default function MobileParticleCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Reduced-motion: skip canvas entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const W = el.offsetWidth  || 390;
    const H = el.offsetHeight || window.innerHeight;

    let raf = 0;
    let renderer: import("three").WebGLRenderer;

    import("three").then((THREE) => {
      // ── Renderer ──────────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x020207, 1);
      el.appendChild(renderer.domElement);

      // ── Scene / Camera ────────────────────────────────────────────────────
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(72, W / H, 0.1, 200);
      // Camera at origin — particles surround it
      camera.position.set(0, 0, 0);

      // ── Particles ─────────────────────────────────────────────────────────
      const COUNT = 3200;
      const pos    = new Float32Array(COUNT * 3);
      const col    = new Float32Array(COUNT * 3);
      const sizes  = new Float32Array(COUNT);
      const alphas = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        // Distribute in sphere around camera, radius 3–45
        // Exponential bias: more particles at larger radii (like real nebula)
        const r     = 3 + Math.pow(Math.random(), 0.6) * 42;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);

        pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);

        // Closer = larger in world-space (shader multiplies by perspective)
        const nearness = 1 - r / 45;
        sizes[i]  = 0.04 + nearness * nearness * 0.38;
        alphas[i] = 0.08 + nearness * 0.75;

        // Near particles get colour; far ones stay white
        const useColor = Math.random() < (nearness * 0.65);
        const [cr, cg, cb] = useColor ? pickColor() : [1, 1, 1];
        col[i * 3]     = cr;
        col[i * 3 + 1] = cg;
        col[i * 3 + 2] = cb;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos,    3));
      geo.setAttribute("aColor",   new THREE.BufferAttribute(col,    3));
      geo.setAttribute("aSize",    new THREE.BufferAttribute(sizes,  1));
      geo.setAttribute("aAlpha",   new THREE.BufferAttribute(alphas, 1));

      const mat = new THREE.ShaderMaterial({
        vertexShader:   VERT,
        fragmentShader: FRAG,
        transparent:    true,
        depthWrite:     false,
        blending:       THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // ── Rotation inertia state ─────────────────────────────────────────────
      let targetX  = 0,  targetY  = 0;
      let currentX = 0,  currentY = 0;
      let autoY    = 0;
      let lastTX   = 0,  lastTY   = 0;
      let dragging = false;

      const LERP = 0.042; // inertia — lower = heavier, more physical
      const AUTO = 0.00018; // slow idle auto-rotation speed

      // Touch
      const onTouchStart = (e: TouchEvent) => {
        dragging = true;
        lastTX = e.touches[0].clientX;
        lastTY = e.touches[0].clientY;
      };
      const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const dx = e.touches[0].clientX - lastTX;
        const dy = e.touches[0].clientY - lastTY;
        targetY += dx * 0.004;
        targetX += dy * 0.004;
        // Clamp vertical tilt so it doesn't flip
        targetX = Math.max(-0.7, Math.min(0.7, targetX));
        lastTX = e.touches[0].clientX;
        lastTY = e.touches[0].clientY;
      };
      const onTouchEnd = () => { dragging = false; };

      // Mouse — position-based, not delta-based (like AT)
      const onMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / W - 0.5);
        const ny = ((e.clientY - rect.top)  / H - 0.5);
        targetY = nx * 0.55;
        targetX = ny * 0.30;
      };
      const onMouseLeave = () => {
        // Drift back to centre slowly — handled by LERP targeting 0
        targetX = 0;
        targetY = 0;
      };

      el.addEventListener("touchstart",  onTouchStart, { passive: true });
      el.addEventListener("touchmove",   onTouchMove,  { passive: false });
      el.addEventListener("touchend",    onTouchEnd);
      el.addEventListener("mousemove",   onMouseMove);
      el.addEventListener("mouseleave",  onMouseLeave);

      // ── Render loop ────────────────────────────────────────────────────────
      function tick() {
        raf = requestAnimationFrame(tick);

        currentX += (targetX - currentX) * LERP;
        currentY += (targetY - currentY) * LERP;
        autoY    += AUTO;

        // Rotate the point cloud (keeps camera clean for future additions)
        points.rotation.x =  currentX;
        points.rotation.y =  currentY + autoY;

        renderer.render(scene, camera);
      }

      raf = requestAnimationFrame(tick);

      // Store cleanup refs
      (el as any).__threeCleanup = () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("touchstart",  onTouchStart);
        el.removeEventListener("touchmove",   onTouchMove);
        el.removeEventListener("touchend",    onTouchEnd);
        el.removeEventListener("mousemove",   onMouseMove);
        el.removeEventListener("mouseleave",  onMouseLeave);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === el) {
          el.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      (el as any).__threeCleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ touchAction: "none" }}
    />
  );
}
