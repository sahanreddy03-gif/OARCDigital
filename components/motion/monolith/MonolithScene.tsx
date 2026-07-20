"use client";

/**
 * MonolithScene — the logo-mark as a WebGL sculpture.
 *
 * A green-chrome ring (24 individual segments, so the clockwork state gets
 * its gears for free) wrapped around a dark sphere, floating in a charcoal
 * room lit by one key light. Hovering the hero's verb tabs transmutes the
 * material:
 *
 *   create → molten chrome  (warm emissive swell, light warms)
 *   deploy → particle swarm (the sculpture dissolves into orbiting points)
 *   build  → clockwork      (the ring splits into counter-rotating gears)
 *
 * Clicking a tab sets `diving` and the camera flies into the material while
 * the DOM veil fades to charcoal — the page transition itself.
 *
 * Budget: one WebGL context, DPR ≤ 2, rAF parked when offscreen or the tab
 * is hidden, point counts and pixel ratio follow the fps governor. This
 * component is only mounted on md+ / motion-allowed / non-static tiers
 * (HeroSection owns that decision).
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  getQualityTier,
  onQualityTierChange,
  type QualityTier,
} from "@/lib/motion/fpsGovernor";

export type Vertical = "idle" | "create" | "deploy" | "build";

interface MonolithSceneProps {
  vertical: Vertical;
  diving: boolean;
  onContextFail?: () => void;
}

const SEGMENTS = 24;
const POINT_COUNT: Record<QualityTier, number> = {
  high: 5000,
  medium: 2600,
  low: 1200,
  static: 0,
};

// Per-state targets: light color + the three transmutation weights
const STATES: Record<
  Vertical,
  { light: number; molten: number; scatter: number; gear: number }
> = {
  idle: { light: 0xd8e0ec, molten: 0, scatter: 0, gear: 0 },
  create: { light: 0xffb37a, molten: 1, scatter: 0, gear: 0 },
  deploy: { light: 0x7ab8ff, molten: 0, scatter: 1, gear: 0 },
  build: { light: 0xeef4ff, molten: 0, scatter: 0, gear: 1 },
};

const SWARM_VERTEX = /* glsl */ `
  attribute vec4 aRand;
  uniform float uTime;
  uniform float uProgress;
  uniform float uSize;
  varying float vA;
  void main() {
    float ang = aRand.x * 6.28318 + uTime * (0.25 + 0.5 * aRand.y);
    float rad = 1.45 + 1.5 * aRand.z;
    float yy = (aRand.w - 0.5) * 3.0 + 0.3 * sin(uTime * 1.6 + aRand.x * 12.0);
    vec3 orbit = vec3(cos(ang) * rad, yy, sin(ang) * rad);
    vec3 p = mix(position, orbit, uProgress);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uSize * (0.5 + aRand.z) * (120.0 / max(0.5, -mv.z));
    vA = 0.35 + 0.65 * aRand.y;
    gl_Position = projectionMatrix * mv;
  }
`;

const SWARM_FRAGMENT = /* glsl */ `
  precision mediump float;
  uniform float uOpacity;
  varying float vA;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.05, length(c)) * vA * uOpacity;
    if (a < 0.004) discard;
    gl_FragColor = vec4(0.78, 0.94, 0.55, a);
  }
`;

export default function MonolithScene({
  vertical,
  diving,
  onContextFail,
}: MonolithSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalRef = useRef<Vertical>(vertical);
  const divingRef = useRef(diving);
  const failRef = useRef(onContextFail);

  verticalRef.current = vertical;
  divingRef.current = diving;
  failRef.current = onContextFail;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.setAttribute("aria-hidden", "true");
    canvas.setAttribute("data-testid", "canvas-monolith");
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      failRef.current?.();
      return;
    }
    container.appendChild(canvas);

    let tier = getQualityTier();
    const applyPixelRatio = () =>
      renderer.setPixelRatio(
        tier === "low" ? 1 : Math.min(window.devicePixelRatio || 1, 2),
      );
    applyPixelRatio();
    renderer.setClearColor(0x000000, 0); // the CSS charcoal room shows through
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 50);
    camera.position.set(0, 0.1, 7.2);

    // ── Lights: one key (the "volumetric" source), a cool rim, low ambient ──
    const key = new THREE.DirectionalLight(0xd8e0ec, 2.4);
    key.position.set(3, 5, 4);
    const rim = new THREE.PointLight(0x8fb0d8, 30, 20, 1.8);
    rim.position.set(-3, 1.5, 3);
    const ambient = new THREE.AmbientLight(0x272a33, 1.2);
    scene.add(key, rim, ambient);

    // ── The Monolith ──
    const monolith = new THREE.Group();
    scene.add(monolith);

    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0x94d63c, // the mark's green, read as chrome via the env map
      metalness: 0.95,
      roughness: 0.16,
      envMapIntensity: 1.1,
      emissive: 0xff6a1f,
      emissiveIntensity: 0,
      transparent: true,
    });
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x15161a,
      metalness: 0.7,
      roughness: 0.32,
      envMapIntensity: 0.8,
      transparent: true,
    });

    // Ring built from SEGMENTS arc pieces — at rest it reads as one solid
    // torus; the pieces are the clockwork.
    const ringGroup = new THREE.Group();
    ringGroup.rotation.set(0.45, -0.55, 0.15); // echo the mark's tilt
    const arc = ((Math.PI * 2) / SEGMENTS) * 1.06;
    const segGeo = new THREE.TorusGeometry(1.32, 0.24, 12, 5, arc);
    const segments: THREE.Mesh[] = [];
    const segBase: number[] = [];
    for (let i = 0; i < SEGMENTS; i++) {
      const seg = new THREE.Mesh(segGeo, ringMat);
      const base = (i / SEGMENTS) * Math.PI * 2;
      seg.rotation.z = base;
      segBase.push(base);
      ringGroup.add(seg);
      segments.push(seg);
    }
    monolith.add(ringGroup);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.82, 48, 32),
      sphereMat,
    );
    sphere.position.x = 0.12;
    monolith.add(sphere);

    // ── Swarm points, sampled once from the full torus surface ──
    const maxPoints = POINT_COUNT.high;
    const sampleGeo = new THREE.TorusGeometry(1.32, 0.24, 24, 96);
    const sampler = new MeshSurfaceSampler(
      new THREE.Mesh(sampleGeo, ringMat),
    ).build();
    const positions = new Float32Array(maxPoints * 3);
    const rands = new Float32Array(maxPoints * 4);
    const v = new THREE.Vector3();
    for (let i = 0; i < maxPoints; i++) {
      sampler.sample(v);
      positions.set([v.x, v.y, v.z], i * 3);
      rands.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
    }
    sampleGeo.dispose();
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("aRand", new THREE.BufferAttribute(rands, 4));
    pointsGeo.setDrawRange(0, POINT_COUNT[tier] || POINT_COUNT.low);
    const pointsMat = new THREE.ShaderMaterial({
      vertexShader: SWARM_VERTEX,
      fragmentShader: SWARM_FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uOpacity: { value: 0 },
        uSize: { value: 3.2 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    points.visible = false;
    ringGroup.add(points); // inherits the ring's tilt

    // ── Layout: keep the sculpture right-of-center at any aspect ──
    const layout = () => {
      const wpx = container.clientWidth || 1;
      const hpx = container.clientHeight || 1;
      renderer.setSize(wpx, hpx, false);
      camera.aspect = wpx / hpx;
      camera.updateProjectionMatrix();
      const halfW =
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) *
        camera.position.z *
        camera.aspect;
      monolith.position.x = THREE.MathUtils.clamp(halfW * 0.52, 1.2, 3.4);
    };
    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(container);

    // ── State lerp + render loop ──
    const cur = { molten: 0, scatter: 0, gear: 0 };
    const lightCur = new THREE.Color(STATES.idle.light);
    const lightTarget = new THREE.Color(STATES.idle.light);
    const clock = new THREE.Clock();
    let gearAngle = 0;
    let rafId: number | null = null;
    let inView = true;
    let disposed = false;
    let faded = false;

    const frame = () => {
      rafId = null;
      if (disposed) return;
      if (inView && !document.hidden) rafId = requestAnimationFrame(frame);
      const dt = Math.min(clock.getDelta(), 0.1);
      const t = clock.elapsedTime;
      const k = 1 - Math.exp(-4.5 * dt); // frame-rate-independent lerp

      const state = STATES[verticalRef.current] ?? STATES.idle;
      cur.molten += (state.molten - cur.molten) * k;
      cur.scatter += (state.scatter - cur.scatter) * k;
      cur.gear += (state.gear - cur.gear) * k;
      lightTarget.setHex(state.light);
      lightCur.lerp(lightTarget, k);
      key.color.copy(lightCur);
      rim.color.copy(lightCur);

      // Idle float
      monolith.position.y = 0.35 + Math.sin(t * 0.7) * 0.08;
      monolith.rotation.y = Math.sin(t * 0.12) * 0.1;

      // Molten: warm emissive swell + breathing pulse
      ringMat.emissiveIntensity = cur.molten * 0.6;
      ringMat.envMapIntensity = 1.1 + cur.molten * 1.0;
      const pulse = 1 + cur.molten * 0.025 * Math.sin(t * 3.0);
      monolith.scale.setScalar(pulse);
      key.intensity = 2.4 + cur.molten * 0.8;

      // Clockwork: the ring splits into two counter-rotating gear trains
      gearAngle += dt * cur.gear * 0.9;
      for (let i = 0; i < SEGMENTS; i++) {
        const dir = i % 2 === 0 ? 1 : -1;
        segments[i].rotation.z = segBase[i] + dir * gearAngle;
        segments[i].position.z = dir * cur.gear * 0.18;
      }

      // Swarm: the solid dissolves, points take over
      const solidOpacity = 1 - cur.scatter * 0.88;
      ringMat.opacity = solidOpacity;
      sphereMat.opacity = solidOpacity;
      const solidScale = 1 - cur.scatter * 0.22;
      ringGroup.scale.setScalar(solidScale);
      sphere.scale.setScalar(solidScale);
      points.visible = cur.scatter > 0.02;
      pointsMat.uniforms.uTime.value = t;
      pointsMat.uniforms.uProgress.value = cur.scatter;
      pointsMat.uniforms.uOpacity.value = cur.scatter;

      // Dive: fly the camera into the material
      if (divingRef.current) {
        const dk = 1 - Math.exp(-6 * dt);
        camera.position.x += (monolith.position.x * 0.85 - camera.position.x) * dk;
        camera.position.y += (monolith.position.y - camera.position.y) * dk;
        camera.position.z += (1.05 - camera.position.z) * dk;
      }

      renderer.render(scene, camera);

      if (!faded) {
        faded = true;
        container.style.opacity = "1"; // fade in after the first real frame
      }
    };
    const start = () => {
      if (rafId === null && !disposed && inView) rafId = requestAnimationFrame(frame);
    };

    container.style.opacity = "0";
    container.style.transition = "opacity 600ms ease";
    start();

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
      },
      { threshold: 0.02 },
    );
    io.observe(container);
    const onVisibility = () => {
      if (!document.hidden) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const unsubTier = onQualityTierChange((t) => {
      tier = t;
      if (t === "static") return; // HeroSection unmounts us
      applyPixelRatio();
      pointsGeo.setDrawRange(0, POINT_COUNT[t] || POINT_COUNT.low);
    });

    const onContextLost = (e: Event) => {
      e.preventDefault();
      failRef.current?.();
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    return () => {
      disposed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      io.disconnect();
      ro.disconnect();
      unsubTier();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      segGeo.dispose();
      sphere.geometry.dispose();
      pointsGeo.dispose();
      ringMat.dispose();
      sphereMat.dispose();
      pointsMat.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
