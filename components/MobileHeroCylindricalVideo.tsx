"use client";

import { useEffect, useRef } from "react";

/**
 * One hero film, cut into three frames on a Superman-wing / concave arc.
 * Left / centre / right show thirds of the same slide — not a wall of stills.
 */
const FRAMES = [
  { offset: -1, objectPosition: "16.5% center" },
  { offset: 0, objectPosition: "50% center" },
  { offset: 1, objectPosition: "83.5% center" },
] as const;

const THETA_DEG = 26;
const RADIUS_PX = 168;
const PANEL_W = 118;
const PANEL_H = 168; // tall frames so the three strips read as one cut slide

export default function MobileHeroCylindricalVideo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
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
      // Soft wing sway — keeps the three frames reading as one piece
      stage.style.transform = `rotateY(${Math.sin(t * 0.32) * 6}deg)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Keep the three strip videos locked to the centre clock
  useEffect(() => {
    const centre = videoRefs.current[1];
    if (!centre) return;

    const sync = () => {
      const t = centre.currentTime;
      for (let i = 0; i < videoRefs.current.length; i++) {
        if (i === 1) continue;
        const v = videoRefs.current[i];
        if (!v) continue;
        if (Math.abs(v.currentTime - t) > 0.12) v.currentTime = t;
      }
    };

    centre.addEventListener("timeupdate", sync);
    return () => centre.removeEventListener("timeupdate", sync);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ perspective: "920px", height: "24svh", minHeight: 176, maxHeight: 200 }}
      data-testid="hero-mobile-video-shell"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.4), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10"
        style={{
          background: "linear-gradient(270deg, rgba(0,0,0,0.4), transparent)",
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
          {FRAMES.map((frame, i) => {
            const rotateY = frame.offset * THETA_DEG;
            const isCentre = frame.offset === 0;

            return (
              <div
                key={frame.offset}
                className="absolute overflow-hidden rounded-xl border border-white/25"
                style={{
                  width: PANEL_W,
                  height: PANEL_H,
                  left: -PANEL_W / 2,
                  top: -PANEL_H / 2,
                  transform: `rotateY(${rotateY}deg) translateZ(${RADIUS_PX}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 16px 30px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.14)",
                  background: "rgba(9,9,11,0.85)",
                }}
                aria-hidden={!isCentre}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={isCentre ? "metadata" : "auto"}
                  aria-label={isCentre ? "OARC hero film" : undefined}
                  data-testid={isCentre ? "hero-mobile-video" : undefined}
                  style={{ objectPosition: frame.objectPosition }}
                >
                  <source src="/media/oarc-hero-sonly-web.mp4" type="video/mp4" />
                </video>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 35%, rgba(0,0,0,0.28) 100%)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
