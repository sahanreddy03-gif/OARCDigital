"use client";

import { useEffect, useRef } from "react";

/** Chip assets — coverflow keeps OLD chip footprint, stronger 3D depth. */
const CHIP = (name: string) => `/attached_assets/carousel-chips/${name}-chip.webp`;

const services = [
  { text: "Digital Marketing", image: CHIP("digital-marketing-optimized") },
  { text: "Social Media Management", image: CHIP("social-media-management-optimized") },
  { text: "AI Video Production", image: CHIP("ai-video-production-optimized") },
  { text: "Branding Services", image: CHIP("branding-services-optimized") },
  { text: "Paid Advertising", image: CHIP("paid-advertising-optimized") },
  { text: "Website Design", image: CHIP("website-design-optimized") },
  { text: "Lead Generation", image: CHIP("lead-generation-optimized") },
  { text: "Creative Ad Campaigns", image: CHIP("creative-ad-campaigns-optimized") },
  { text: "Funnel Automation", image: CHIP("funnel-automation-optimized") },
  { text: "Sales AI Employees", image: CHIP("sales-ai-employee-optimized") },
  { text: "Support AI Employees", image: CHIP("support-ai-employee-optimized") },
  { text: "Mobile Applications", image: CHIP("mobile-apps-robot-optimized") },
  { text: "Web Applications", image: CHIP("web-applications-optimized") },
  { text: "Custom AI Solutions", image: CHIP("custom-ai-solutions-robots-optimized") },
  { text: "AI Consulting", image: CHIP("ai-consulting-presentation-optimized") },
  { text: "MVP Development", image: CHIP("custom-ai-solutions-robots-optimized") },
];

const CARD_W = 168;
const CARD_H = 62;
const THUMB = 48;
/** Wide step so chips read as separate coverflow cards, not one white bar */
const STEP = 150;
const MAX_TILT = 62;
const VISIBLE = 1;

export default function MobileHeroCoverflowCarousel() {
  const hitRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);
  const rafRef = useRef(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    const hit = hitRef.current;
    const track = trackRef.current;
    if (!hit || !stageReady(track)) return;

    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = services.length;

    const render = () => {
      const cards = track!.children;
      const base = ((indexRef.current % n) + n) % n;

      for (let i = 0; i < cards.length; i++) {
        const el = cards[i] as HTMLElement;
        let d = i - base;
        if (d > n / 2) d -= n;
        if (d < -n / 2) d += n;

        const abs = Math.abs(d);
        const hide = abs > VISIBLE + 0.4;
        const x = d * STEP;
        const rot = Math.max(-MAX_TILT, Math.min(MAX_TILT, d * 34));
        // Keep z <= 0 so cards never project upward over the video wing
        const z = -Math.abs(d) * 48;
        const scale = hide ? 0.72 : 1 - abs * 0.08;
        const opacity = hide ? 0 : Math.max(0.3, 1 - abs * 0.28);

        el.style.opacity = String(opacity);
        el.style.visibility = hide ? "hidden" : "visible";
        el.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-rot}deg) scale(${scale})`;
        el.style.zIndex = String(200 - Math.round(abs * 20));
      }
    };

    const tick = () => {
      if (!draggingRef.current && !reducedRef.current) {
        velocityRef.current *= 0.9;
        if (Math.abs(velocityRef.current) < 0.0015) velocityRef.current = -0.014;
        indexRef.current += velocityRef.current;
        render();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    render();
    if (!reducedRef.current) rafRef.current = requestAnimationFrame(tick);

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      velocityRef.current = 0;
      lastXRef.current = e.clientX;
      lastTRef.current = performance.now();
      hit.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const now = performance.now();
      const dx = e.clientX - lastXRef.current;
      const dt = Math.max(16, now - lastTRef.current);
      const delta = -dx / STEP;
      indexRef.current += delta;
      velocityRef.current = (delta / dt) * 16;
      lastXRef.current = e.clientX;
      lastTRef.current = now;
      render();
    };
    const onPointerUp = () => {
      draggingRef.current = false;
      velocityRef.current = Math.max(-0.2, Math.min(0.2, velocityRef.current));
    };

    hit.addEventListener("pointerdown", onPointerDown);
    hit.addEventListener("pointermove", onPointerMove);
    hit.addEventListener("pointerup", onPointerUp);
    hit.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      hit.removeEventListener("pointerdown", onPointerDown);
      hit.removeEventListener("pointermove", onPointerMove);
      hit.removeEventListener("pointerup", onPointerUp);
      hit.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={hitRef}
      className="relative mx-auto w-full select-none cursor-grab active:cursor-grabbing"
      style={{
        perspective: "740px",
        perspectiveOrigin: "50% 50%",
        height: 78,
        touchAction: "pan-y",
      }}
      data-testid="hero-mobile-coverflow"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-30 w-14"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.55), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-30 w-14"
        style={{ background: "linear-gradient(270deg, rgba(0,0,0,0.55), transparent)" }}
      />

      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={trackRef}
          className="absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0, transformStyle: "preserve-3d" }}
        >
          {services.map((service, i) => (
            <div
              key={`${service.text}-${i}`}
              className="absolute flex items-center gap-2 overflow-hidden rounded-xl border border-black/10 bg-white px-2 py-1.5"
              style={{
                width: CARD_W,
                height: CARD_H,
                left: 0,
                top: 0,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.32)",
              }}
              data-testid={`coverflow-card-${i}`}
            >
              <div
                className="shrink-0 overflow-hidden rounded-lg bg-zinc-100"
                style={{ width: THUMB, height: THUMB }}
              >
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="pr-0.5 text-[11px] font-bold leading-tight text-gray-900">
                {service.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function stageReady(track: HTMLDivElement | null): track is HTMLDivElement {
  return !!track;
}
