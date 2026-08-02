"use client";

import { useEffect, useRef } from "react";

/**
 * One film cut into three little frames on a Superman-wing arc.
 * Tight seams so it reads as ONE slide; gentle cylinder so sides recede.
 */
const FRAMES = [
  { key: "L", objectPosition: "16.5% center", rotateY: -34 },
  { key: "C", objectPosition: "50% center", rotateY: 0 },
  { key: "R", objectPosition: "83.5% center", rotateY: 34 },
] as const;

const PANEL_W = 66;
const PANEL_H = 96;
const RADIUS = 120;

export default function MobileHeroCylindricalVideo() {
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      stage.style.transform = `rotateY(${Math.sin(t * 0.28) * 4}deg)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const centre = videoRefs.current[1];
    if (!centre) return;
    const sync = () => {
      const t = centre.currentTime;
      for (let i = 0; i < videoRefs.current.length; i++) {
        if (i === 1) continue;
        const v = videoRefs.current[i];
        if (v && Math.abs(v.currentTime - t) > 0.12) v.currentTime = t;
      }
    };
    centre.addEventListener("timeupdate", sync);
    return () => centre.removeEventListener("timeupdate", sync);
  }, []);

  return (
    <div
      className="relative mx-auto w-full"
      style={{
        perspective: "760px",
        perspectiveOrigin: "50% 48%",
        height: 122,
      }}
      data-testid="hero-mobile-video-shell"
    >
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
            const rad = (frame.rotateY * Math.PI) / 180;
            const x = Math.sin(rad) * RADIUS;
            const z = Math.cos(rad) * RADIUS;
            const isCentre = frame.key === "C";
            return (
              <div
                key={frame.key}
                className="absolute overflow-hidden rounded-[10px] border border-white/30"
                style={{
                  width: PANEL_W,
                  height: PANEL_H,
                  marginLeft: -PANEL_W / 2,
                  marginTop: -PANEL_H / 2,
                  transform: `translate3d(${x}px, 0, ${z}px) rotateY(${frame.rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  boxShadow:
                    "0 14px 26px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.16)",
                  background: "#09090b",
                  zIndex: isCentre ? 3 : 1,
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
                      "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)",
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
