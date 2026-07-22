"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

export default function HeroATCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080808);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const pt = new THREE.PointLight(0xffffff, 0.8);
    pt.position.set(5, 5, 5);
    scene.add(pt);

    // Card — PlaneGeometry with ShaderMaterial
    // Rounded corners via SDF in fragment shader, subtle wave in vertex shader
    const cardGeometry = new THREE.PlaneGeometry(3.2, 1.8);
    const cardMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        tMap: { value: new THREE.Texture() },
        uAlpha: { value: 1.0 },
        uTime: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(uv.x * 3.14159 + uTime * 0.5) * 0.018;
          pos.z += sin(uv.y * 3.14159 + uTime * 0.3) * 0.018;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tMap;
        uniform float uAlpha;
        void main() {
          vec2 p = vUv - 0.5;
          float r = 0.12;
          float d = length(max(abs(p) - (0.5 - r), 0.0)) - r;
          float mask = smoothstep(0.01, -0.01, d);
          vec4 tex = texture2D(tMap, vUv);
          float vignette = 1.0 - length(p) * 0.28;
          gl_FragColor = vec4(tex.rgb * vignette, tex.a * mask * uAlpha);
        }
      `,
    });

    const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial);
    scene.add(cardMesh);

    // Video texture
    const video = document.createElement("video");
    video.src = "/media/2026-01-07_01_1767825976557.mp4";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.play().catch(() => {});

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    cardMaterial.uniforms.tMap.value = videoTexture;

    // Ambient particles — 100 slow cyan dots
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.007;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.007;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x8ecfd1,
      size: 0.04,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse → smooth lerp rotation on card
    const mouse = { x: 0, y: 0 };
    const rot   = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener("resize", onResize);

    let rafId: number;
    let time = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      time += 0.016;

      cardMaterial.uniforms.uTime.value = time;

      // Lerp rotation toward mouse
      rot.x += (mouse.y * 0.35 - rot.x) * 0.08;
      rot.y += (mouse.x * 0.35 - rot.y) * 0.08;
      cardMesh.rotation.x = rot.x;
      cardMesh.rotation.y = rot.y;

      // Drift particles
      const posAttr = particles.geometry.getAttribute("position");
      const pos = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3]     += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];
        if (Math.abs(pos[i * 3])     > 5)   velocities[i * 3]     *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 5)   velocities[i * 3 + 1] *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 2.5) velocities[i * 3 + 2] *= -1;
      }
      posAttr.needsUpdate = true;
      particles.rotation.z += 0.00008;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cardGeometry.dispose();
      cardMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      videoTexture.dispose();
      video.pause();
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-sm"
      style={{ aspectRatio: "16/9" }}
    >
      {/* WebGL canvas mount point */}
      <div
        ref={containerRef}
        className="absolute inset-0 rounded-xl overflow-hidden"
      />

      {/* HTML text overlay — pointer-events-none keeps mouse events on canvas */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 pointer-events-none select-none">
        <p className="text-[10px] tracking-[0.25em] uppercase text-cyan-300/80 mb-1 font-light">
          Creative Studio
        </p>
        <h3 className="text-white font-semibold text-base leading-tight mb-3">
          Media. Brand. Content.
        </h3>
        <Link
          href="/creative"
          className="pointer-events-auto inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-200 w-fit"
        >
          <span>Explore</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
