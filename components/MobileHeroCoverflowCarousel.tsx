"use client";

import { useEffect, useRef } from "react";

/** Same retina chips as FloatingChipCarousel — 3D coverflow on mobile only. */
const CHIP = (name: string) => `/attached_assets/carousel-chips/${name}-chip.webp`;

const services = [
  { text: "Digital Marketing", image: CHIP("digital-marketing-optimized") },
  { text: "Social Media", image: CHIP("social-media-management-optimized") },
  { text: "AI Video", image: CHIP("ai-video-production-optimized") },
  { text: "Branding", image: CHIP("branding-services-optimized") },
  { text: "Paid Ads", image: CHIP("paid-advertising-optimized") },
  { text: "Website Design", image: CHIP("website-design-optimized") },
  { text: "Lead Gen", image: CHIP("lead-generation-optimized") },
  { text: "Creative Ads", image: CHIP("creative-ad-campaigns-optimized") },
  { text: "Funnels", image: CHIP("funnel-automation-optimized") },
  { text: "Sales AI", image: CHIP("sales-ai-employee-optimized") },
  { text: "Support AI", image: CHIP("support-ai-employee-optimized") },
  { text: "Mobile Apps", image: CHIP("mobile-apps-robot-optimized") },
  { text: "Web Apps", image: CHIP("web-applications-optimized") },
  { text: "Custom AI", image: CHIP("custom-ai-solutions-robots-optimized") },
  { text: "AI Consulting", image: CHIP("ai-consulting-presentation-optimized") },
  { text: "MVP Build", image: CHIP("custom-ai-solutions-robots-optimized") },
];

const CARD_W = 118;
const CARD_H = 148;
const RADIUS = 190;
const THETA = 360 / services.length;

/**
 * 3D cylindrical coverflow — centre faces you, sides rotate/recede.
 * Drag / swipe with momentum; slow auto-spin when idle.
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
        // Friction + gentle auto drift
        velocityRef.current *= 0.94;
        if (Math.abs(velocityRef.current) < 0.02) {
          velocityRef.current = -0.08; // slow continuous flow
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
      // Horizontal drag → yaw the cylinder
      const delta = dx * 0.28;
      rotationRef.current += delta;
      velocityRef.current = (delta / dt) * 16;
      lastXRef.current = e.clientX;
      lastTRef.current = now;
      apply();
    };

    const onPointerUp = () => {
      draggingRef.current = false;
      // Clamp leftover velocity for a clean fling
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
        perspective: "1000px",
        height: "22svh",
        minHeight: 150,
        maxHeight: 180,
        touchAction: "pan-y",
      }}
      data-testid="hero-mobile-coverflow"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.55), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
        style={{
          background: "linear-gradient(270deg, rgba(0,0,0,0.55), transparent)",
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
                className="absolute overflow-hidden rounded-2xl border border-white/25 bg-zinc-950/80"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  left: -CARD_W / 2,
                  top: -CARD_H / 2,
                  transform: `rotateY(${rotateY}deg) translateZ(${RADIUS}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 16px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
                data-testid={`coverflow-card-${i}`}
              >
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <p className="text-[11px] font-semibold leading-tight text-white tracking-tight">
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
