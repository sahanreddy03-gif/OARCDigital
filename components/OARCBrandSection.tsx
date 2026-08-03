"use client";

import { useEffect, useRef, useState } from "react";

interface OARCBrandSectionProps {
  videoSrc?: string;
}

export default function OARCBrandSection({ videoSrc }: OARCBrandSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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

  const isMov = Boolean(videoSrc?.toLowerCase().endsWith(".mov"));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[50vh] md:min-h-[65vh] overflow-hidden"
      style={{ background: "#0a0a0a", touchAction: "pan-y" }}
      data-testid="oarc-brand-section"
    >
      {videoSrc && shouldLoad && (
        <div
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
