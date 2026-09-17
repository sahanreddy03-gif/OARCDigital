"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  poster?: string;
};

export default function AutoplayVideo({ src, className = "video-cover", poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.loop = true;
    el.autoplay = true;
    el.setAttribute("muted", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    const play = () => {
      el.muted = true;
      const p = el.play();
      if (p) void p.catch(() => undefined);
    };

    play();
    el.addEventListener("loadeddata", play);
    el.addEventListener("canplay", play);
    el.addEventListener("canplaythrough", play);
    el.addEventListener("loadedmetadata", play);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) play();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);

    const onVis = () => {
      if (document.visibilityState === "visible") play();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      el.removeEventListener("loadeddata", play);
      el.removeEventListener("canplay", play);
      el.removeEventListener("canplaythrough", play);
      el.removeEventListener("loadedmetadata", play);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
    />
  );
}
