"use client";

import { useEffect, useRef } from "react";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";

/**
 * Muted inline hero film for phones.
 *
 * - Single H.264 MP4 (960x540, faststart). VP9 WebM was listed first before,
 *   and iOS Safari could pick it, show a frame, then stall on black until a
 *   refresh served it from cache.
 * - The poster is also the container background, so a slow network or a
 *   blocked autoplay shows the film still, never a black box.
 * - If playback pauses or stalls (network hiccup, tab switch, scroll back
 *   into view), it retries instead of staying frozen.
 */
export default function MobileHeroCustomersVideo() {
  const { width, height } = HERO_CUSTOMERS_VIDEO;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    let stallTimer: ReturnType<typeof setTimeout> | undefined;

    const startPlayback = () => {
      if (document.visibilityState !== "visible") return;
      if (!video.paused && !video.ended) return;
      void video.play().catch(() => {
        // Autoplay blocked (e.g. iOS Low Power Mode): the poster stays visible.
      });
    };

    // A stall longer than 3s: nudge the decoder by reloading from the current point.
    const onStall = () => {
      clearTimeout(stallTimer);
      stallTimer = setTimeout(() => {
        if (video.readyState < 3) {
          const t = video.currentTime;
          video.load();
          video.currentTime = t;
        }
        startPlayback();
      }, 3000);
    };
    const onPlaying = () => clearTimeout(stallTimer);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) startPlayback();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);

    startPlayback();
    video.addEventListener("canplay", startPlayback);
    video.addEventListener("pause", startPlayback);
    video.addEventListener("waiting", onStall);
    video.addEventListener("stalled", onStall);
    video.addEventListener("playing", onPlaying);
    document.addEventListener("visibilitychange", startPlayback);
    window.addEventListener("pageshow", startPlayback);
    return () => {
      clearTimeout(stallTimer);
      observer.disconnect();
      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("pause", startPlayback);
      video.removeEventListener("waiting", onStall);
      video.removeEventListener("stalled", onStall);
      video.removeEventListener("playing", onPlaying);
      document.removeEventListener("visibilitychange", startPlayback);
      window.removeEventListener("pageshow", startPlayback);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_CUSTOMERS_VIDEO.posterJpg})` }}
      data-testid="hero-mobile-customers-video"
    >
      <video
        ref={videoRef}
        aria-label="Customers? — OARC Digital homepage film"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={width}
        height={height}
        poster={HERO_CUSTOMERS_VIDEO.posterJpg}
        src={HERO_CUSTOMERS_VIDEO.mobileMp4}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />
    </div>
  );
}
