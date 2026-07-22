"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const CARDS = [
  {
    id: "creative",
    href: "/creative",
    title: "CREATIVE",
    pos: "top" as const,
    video: "/media/cards/creative.mp4",
  },
  {
    id: "ai-agents",
    href: "/ai-agents",
    title: "AI AGENTS",
    pos: "left" as const,
    video: "/media/cards/ai-agents.mp4",
  },
  {
    id: "growth-systems",
    href: "/solutions",
    title: "GROWTH SYSTEMS",
    pos: "right" as const,
    video: "/media/cards/growth-systems.mp4",
  },
];

function ATCard({ card }: { card: (typeof CARDS)[number] }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  /* Play immediately when card enters viewport */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = linkRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 10 });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  }

  const posStyle: React.CSSProperties =
    card.pos === "top"
      ? { top: 0, left: "calc(var(--at-s) + var(--at-g))" }
      : card.pos === "left"
      ? { top: "calc(var(--at-s) / 2 + var(--at-g) / 2)", left: 0 }
      : {
          top: "calc(var(--at-s) / 2 + var(--at-g) / 2)",
          left: "calc(2 * (var(--at-s) + var(--at-g)))",
        };

  return (
    <Link
      ref={linkRef}
      href={card.href}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        position: "absolute",
        ...posStyle,
        width: "var(--at-s)",
        height: "var(--at-s)",
        borderRadius: "clamp(12px, 1.4vw, 18px)",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow:
          "0 12px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.12)",
        display: "block",
        textDecoration: "none",
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovered ? 1.04 : 1})`,
        transition: hovered
          ? "transform 0.06s linear"
          : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
        willChange: "transform",
      }}
    >
      {/* Full-bleed HD video — zero overlay */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          display: "block",
        }}
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Vertical title — right side, reading top→bottom */}
      <span
        aria-label={card.title}
        style={{
          position: "absolute",
          right: "clamp(7px, 0.8vw, 11px)",
          top: "50%",
          transform: "translateY(-50%)",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          zIndex: 3,
          fontSize: "clamp(7px, 0.85vw, 11px)",
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.92)",
          textTransform: "uppercase",
          fontFamily:
            "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 200,
          whiteSpace: "nowrap",
          textShadow:
            "0 0 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)",
          pointerEvents: "none",
        }}
      >
        {card.title}
      </span>
    </Link>
  );
}

export default function HeroATCard() {
  return (
    <>
      <style>{`
        /* Mobile: triangle fits centered below text */
        .at-wrap { --at-s: clamp(90px, 26vw, 130px); --at-g: 7px; }

        /* md 768px+: two-column — right col ≈46% vw, cards use 12vw each */
        @media (min-width: 768px)  { .at-wrap { --at-s: clamp(100px, 12vw, 145px); --at-g: 9px; } }

        /* lg 1024px+: more room */
        @media (min-width: 1024px) { .at-wrap { --at-s: clamp(130px, 12.5vw, 165px); --at-g: 10px; } }

        /* xl 1280px+ */
        @media (min-width: 1280px) { .at-wrap { --at-s: clamp(150px, 13vw, 195px); --at-g: 12px; } }

        /* 2xl 1536px+ */
        @media (min-width: 1536px) { .at-wrap { --at-s: clamp(170px, 13vw, 210px); --at-g: 13px; } }
      `}</style>
      <div
        className="at-wrap"
        style={{
          position: "relative",
          width: "calc(3 * var(--at-s) + 2 * var(--at-g))",
          height: "calc(var(--at-s) * 1.55)",
        }}
      >
        {CARDS.map((card) => (
          <ATCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}
