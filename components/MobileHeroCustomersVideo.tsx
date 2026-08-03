"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Exact CUSTOMERS frame replacement: poster paints first (AVIF → JPEG),
 * then muted looping video with preload="none" so the MP4 never blocks LCP.
 * Edge-to-edge in the band (object-cover) — same fill as the locked still.
 */
export default function MobileHeroCustomersVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS/Safari: property must be set for muted autoplay to stick
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

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
      video.muted = true;
      const play = video.play();
      if (play) play.catch(() => {});
    };

    const onPlaying = () => revealAndPlay();
    const onCanPlay = () => revealAndPlay();

    video.addEventListener("playing", onPlaying, { once: true });
    video.addEventListener("canplay", onCanPlay, { once: true });

    const kick = window.setTimeout(() => {
      const play = video.play();
      if (play) play.then(revealAndPlay).catch(() => {});
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(kick);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", onCanPlay);
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
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300"
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
