"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Exact CUSTOMERS frame replacement: poster paints first (AVIF → JPEG),
 * then muted looping video with preload="none" so the MP4 never blocks LCP.
 * Whole frame visible via object-fit: contain (no crop).
 */
export default function MobileHeroCustomersVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    let cancelled = false;

    const revealAndPlay = () => {
      if (cancelled) return;
      setShowVideo(true);
      const play = video.play();
      if (play) play.catch(() => {});
    };

    // Prefer a buffered start so the loop doesn't hitch on first frames.
    const onCanPlayThrough = () => revealAndPlay();
    const onLoadedData = () => {
      // Fallback if canplaythrough is slow/skipped on some mobiles
      if (video.readyState >= 2) revealAndPlay();
    };

    video.addEventListener("canplaythrough", onCanPlayThrough, { once: true });
    video.addEventListener("loadeddata", onLoadedData, { once: true });

    // preload="none" + autoplay: explicitly kick load after paint
    const kick = window.setTimeout(() => {
      try {
        video.load();
      } catch {
        /* ignore */
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(kick);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  const { width, height } = HERO_CUSTOMERS_VIDEO;

  return (
    <div className="absolute inset-0 bg-black" data-testid="hero-mobile-customers-video">
      {/* Poster always under the film — instant paint, no layout shift */}
      <picture>
        <source srcSet={HERO_CUSTOMERS_VIDEO.posterAvif} type="image/avif" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_CUSTOMERS_VIDEO.posterJpg}
          alt="Customers?"
          width={width}
          height={height}
          className="absolute inset-0 h-full w-full object-contain object-center"
          draggable={false}
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-300"
        style={{ opacity: showVideo ? 1 : 0 }}
        width={width}
        height={height}
        poster={HERO_CUSTOMERS_VIDEO.posterJpg}
        preload="none"
        muted
        loop
        playsInline
        autoPlay
        aria-label={HERO_CUSTOMERS_VIDEO.name}
        data-testid="hero-mobile-customers-video-el"
      >
        <source src={HERO_CUSTOMERS_VIDEO.mp4} type="video/mp4" />
      </video>
    </div>
  );
}
