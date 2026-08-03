"use client";

import { useEffect, useRef, useState } from "react";
import { registerGSAP, gsap, EASE, DUR } from "@/lib/motion/gsap-system";

interface OARCBrandSectionProps {
  videoSrc?: string;
}

export default function OARCBrandSection({ videoSrc }: OARCBrandSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Existing IntersectionObserver for video lazy-loading (preserved)
  useEffect(() => {
    if (!videoSrc) return;
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [videoSrc]);

  // GSAP ScrollTrigger entrance animations
  useEffect(() => {
    registerGSAP();
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current!;

      // Subtle section fade-in (don't hide the video fully)
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: DUR.slow,
          ease: EASE.soft,
          scrollTrigger: { trigger, start: "top 85%" },
        }
      );

      // Video wrapper subtle scale entrance
      if (videoWrapperRef.current) {
        gsap.fromTo(
          videoWrapperRef.current,
          { scale: 1.04 },
          {
            scale: 1,
            duration: DUR.slow,
            ease: EASE.out,
            scrollTrigger: { trigger, start: "top 85%" },
          }
        );
      }
    }, sectionRef.current!);

    return () => ctx.revert();
  }, []);

  const isMov = Boolean(videoSrc?.toLowerCase().endsWith(".mov"));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[50vh] md:min-h-[65vh] overflow-hidden"
      style={{ background: "#0a0a0a", touchAction: "pan-y", opacity: 0.3 }}
      data-testid="oarc-brand-section"
    >
      {videoSrc && shouldLoad && (
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 z-0"
          style={{ pointerEvents: "none" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            style={{ opacity: 0.92, pointerEvents: "none" }}
          >
            <source
              src={videoSrc}
              type={isMov ? "video/quicktime" : "video/mp4"}
            />
          </video>
        </div>
      )}
    </section>
  );
}
