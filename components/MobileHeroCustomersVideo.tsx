"use client";

import { useEffect, useRef } from "react";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Muted inline film with a poster-first paint. The explicit play attempt
 * handles mobile browsers that defer autoplay until after hydration.
 */
export default function MobileHeroCustomersVideo() {
  const { width, height } = HERO_CUSTOMERS_VIDEO;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const startPlayback = () => {
      void video.play().catch(() => {
        // The poster remains visible if a browser or OS explicitly blocks media.
      });
    };

    startPlayback();
    document.addEventListener("visibilitychange", startPlayback);
    window.addEventListener("pageshow", startPlayback);
    return () => {
      document.removeEventListener("visibilitychange", startPlayback);
      window.removeEventListener("pageshow", startPlayback);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" data-testid="hero-mobile-customers-video">
      <video
        ref={videoRef}
        aria-label="Customers? — OARC Digital homepage film"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={width}
        height={height}
        poster={HERO_CUSTOMERS_VIDEO.posterJpg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src={HERO_CUSTOMERS_VIDEO.webm} type="video/webm" />
        <source src={HERO_CUSTOMERS_VIDEO.mp4} type="video/mp4" />
      </video>
    </div>
  );
}
