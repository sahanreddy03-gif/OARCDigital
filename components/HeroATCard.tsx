"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const CARDS = [
  {
    id: "creative",
    href: "/creative",
    label: "OARC DIGITAL",
    title: "CREATIVE",
    tagline: "Art Direction & Design",
    pos: "top" as const,
    video: "/media/cards/creative.mp4",
  },
  {
    id: "ai-agents",
    href: "/ai-agents",
    label: "OARC DIGITAL",
    title: "AI AGENTS",
    tagline: "Intelligent Automation",
    pos: "left" as const,
    video: "/media/cards/ai-agents.mp4",
  },
  {
    id: "ascend",
    href: "/solutions",
    label: "OARC DIGITAL",
    title: "ASCEND",
    tagline: "Full AI Systems",
    pos: "right" as const,
    video: "/media/cards/ascend.mp4",
  },
];

function ATCard({ card }: { card: (typeof CARDS)[number] }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  /* Lazy-load: only play when card enters viewport */
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
      { threshold: 0.1 }
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
    setTilt({ rx: -y * 12, ry: x * 12 });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  }

  const posStyle: React.CSSProperties =
    card.pos === "top"
      ? { top: 0, left: "calc(var(--at-s) + var(--at-g))" }
      : card.pos === "left"
      ? { top: "calc(var(--at-s) / 2)", left: 0 }
      : { top: "calc(var(--at-s) / 2)", left: "calc(2 * (var(--at-s) + var(--at-g)))" };

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
        borderRadius: "clamp(14px, 1.6vw, 20px)",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(9px, 1.1vw, 14px) clamp(8px, 1vw, 12px)",
        textDecoration: "none",
        transform: `perspective(700px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovered ? 1.04 : 1})`,
        transition: hovered
          ? "transform 0.08s linear"
          : "transform 0.55s cubic-bezier(0.23,1,0.32,1)",
        willChange: "transform",
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Minimal dark scrim — video stays crystal clear */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.18)",
          zIndex: 1,
        }}
      />

      {/* Top specular highlight */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "35%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(5px, 0.6vw, 7px)",
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 300,
          whiteSpace: "nowrap",
        }}
      >
        {card.label}
      </span>

      {/* Title — Active Theory style: thin weight, wide tracking */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(10px, 1.3vw, 15px)",
          letterSpacing: "0.28em",
          color: "#ffffff",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 200,
          textAlign: "center",
          lineHeight: 1.2,
          textShadow: "0 1px 16px rgba(0,0,0,0.8)",
        }}
      >
        {card.title}
      </span>

      {/* Tagline */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(4.5px, 0.55vw, 6.5px)",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 300,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {card.tagline}
      </span>
    </Link>
  );
}

export default function HeroATCard() {
  return (
    <div
      style={
        {
          "--at-s": "clamp(100px, 22vw, 158px)",
          "--at-g": "10px",
          position: "relative",
          width: "calc(3 * var(--at-s) + 2 * var(--at-g))",
          height: "calc(var(--at-s) * 1.5 + var(--at-g) * 0.5)",
          margin: "0 auto",
        } as React.CSSProperties
      }
    >
      {CARDS.map((card) => (
        <ATCard key={card.id} card={card} />
      ))}
    </div>
  );
}
