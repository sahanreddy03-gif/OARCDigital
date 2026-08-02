"use client";

import { useEffect, useRef } from "react";

/** Same retina chips as FloatingChipCarousel — 3D coverflow, chip-sized like before. */
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

/** Match FloatingChipCarousel mobile chip footprint (~56px thumb + label). */
const CARD_W = 196;
const CARD_H = 72;
const THUMB = 56;
const RADIUS = 240;
const THETA = 360 / services.length;

/**
 * 3D cylindrical coverflow — same chip size as the old flat marquee.
 * Centre faces you; sides rotate/recede; drag with momentum.
 */
export default function MobileHeroCoverflowCarousel() {
  const hitRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);
  const rafRef = useRef(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    const hit = hitRef.current;
    const stage = stageRef.current;
    if (!hit || !stage) return;

    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const apply = () => {
      stage.style.transform = `rotateY(${rotationRef.current}deg)`;
    };

    const tick = () => {
      if (!draggingRef.current && !reducedRef.current) {
        velocityRef.current *= 0.94;
        if (Math.abs(velocityRef.current) < 0.02) {
          velocityRef.current = -0.08;
        }
        rotationRef.current += velocityRef.current;
        apply();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    if (!reducedRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      apply();
    }

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
      const delta = dx * 0.28;
      rotationRef.current += delta;
      velocityRef.current = (delta / dt) * 16;
      lastXRef.current = e.clientX;
      lastTRef.current = now;
      apply();
    };

    const onPointerUp = () => {
      draggingRef.current = false;
      velocityRef.current = Math.max(-2.8, Math.min(2.8, velocityRef.current));
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
      className="relative w-full select-none cursor-grab active:cursor-grabbing"
      style={{
        perspective: "900px",
        height: 88,
        touchAction: "pan-y",
      }}
      data-testid="hero-mobile-coverflow"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.45), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8"
        style={{
          background: "linear-gradient(270deg, rgba(0,0,0,0.45), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={stageRef}
          className="relative"
          style={{
            width: 1,
            height: 1,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {services.map((service, i) => {
            const rotateY = i * THETA;
            return (
              <div
                key={`${service.text}-${i}`}
                className="absolute flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/20 bg-white px-2.5 py-2 shadow-lg"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  left: -CARD_W / 2,
                  top: -CARD_H / 2,
                  transform: `rotateY(${rotateY}deg) translateZ(${RADIUS}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 10px 22px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
                data-testid={`coverflow-card-${i}`}
              >
                <div
                  className="shrink-0 overflow-hidden rounded-lg bg-zinc-100 ring-1 ring-black/5"
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
                <span className="pr-1 text-xs font-bold leading-tight text-gray-900 whitespace-normal">
                  {service.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
