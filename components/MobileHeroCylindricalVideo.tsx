"use client";

import { useEffect, useRef } from "react";

/**
 * Immersive concave cylindrical video wall for mobile hero.
 * Panels sit on a cylinder arc around the viewer — not a flat tilted rectangle.
 */
const PANEL_COUNT = 9;
const THETA_DEG = 22; // angle between panels
const RADIUS_PX = 220;

const SIDE_FRAMES = [
  "/attached_assets/carousel-chips/ai-video-production-optimized-chip.webp",
  "/attached_assets/carousel-chips/creative-ad-campaigns-optimized-chip.webp",
  "/attached_assets/carousel-chips/branding-services-optimized-chip.webp",
  "/attached_assets/carousel-chips/social-media-management-optimized-chip.webp",
  "/attached_assets/carousel-chips/digital-marketing-optimized-chip.webp",
  "/attached_assets/carousel-chips/paid-advertising-optimized-chip.webp",
  "/attached_assets/carousel-chips/website-design-optimized-chip.webp",
  "/attached_assets/carousel-chips/custom-ai-solutions-robots-optimized-chip.webp",
];

export default function MobileHeroCylindricalVideo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      stage.style.transform = "rotateY(0deg)";
      return;
    }

    let start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      // Slow idle sway — wall breathes, never a full spin that loses the film
      angleRef.current = Math.sin(t * 0.35) * 10;
      stage.style.transform = `rotateY(${angleRef.current}deg)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const center = Math.floor(PANEL_COUNT / 2);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ perspective: "900px", height: "28svh", minHeight: 168, maxHeight: 220 }}
      data-testid="hero-mobile-video-shell"
    >
      {/* Soft vignette so the cylinder edges fall into the hero art */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
        }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center"
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
          {Array.from({ length: PANEL_COUNT }).map((_, i) => {
            const offset = i - center;
            const rotateY = offset * THETA_DEG;
            const isVideo = offset === 0;
            const isNear = Math.abs(offset) === 1;
            const frame = SIDE_FRAMES[(i + SIDE_FRAMES.length) % SIDE_FRAMES.length];
            const width = isVideo ? 148 : isNear ? 118 : 102;
            const height = isVideo ? 84 : isNear ? 68 : 58;

            return (
              <div
                key={i}
                className="absolute overflow-hidden rounded-xl border border-white/20"
                style={{
                  width,
                  height,
                  left: -width / 2,
                  top: -height / 2,
                  transform: `rotateY(${rotateY}deg) translateZ(${RADIUS_PX}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 14px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)",
                  background: "rgba(9,9,11,0.75)",
                }}
                aria-hidden={!isVideo}
              >
                {isVideo ? (
                  <>
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label="OARC hero film"
                      data-testid="hero-mobile-video"
                    >
                      <source src="/media/oarc-hero-sonly-web.mp4" type="video/mp4" />
                    </video>
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(255,255,255,0.10) 0%, transparent 70%)",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={frame}
                      alt=""
                      aria-hidden="true"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                      style={{
                        filter: isNear
                          ? "brightness(0.78) saturate(0.95)"
                          : "brightness(0.62) saturate(0.85)",
                      }}
                    />
                    <div className={`absolute inset-0 ${isNear ? "bg-black/25" : "bg-black/40"}`} />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(0,0,0,0.35) 100%)",
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
