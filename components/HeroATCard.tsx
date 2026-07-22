"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const CARDS = [
  {
    id: "creative",
    href: "/creative",
    label: "OARC DIGITAL",
    title: "CREATIVE",
    tagline: "Art Direction & Design",
    pos: "top" as const,
  },
  {
    id: "ai-agents",
    href: "/ai-agents",
    label: "OARC DIGITAL",
    title: "AI AGENTS",
    tagline: "Intelligent Automation",
    pos: "left" as const,
  },
  {
    id: "solutions",
    href: "/solutions",
    label: "OARC DIGITAL",
    title: "SOLUTIONS",
    tagline: "Revenue & Growth",
    pos: "right" as const,
  },
];

function ATCard({ card }: { card: (typeof CARDS)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 14, ry: x * 14 });
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
      ref={ref}
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
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px) saturate(1.4)",
        WebkitBackdropFilter: "blur(18px) saturate(1.4)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
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
      {/* Glass top highlight */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Label */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(5.5px, 0.65vw, 7.5px)",
          letterSpacing: "0.22em",
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {card.label}
      </span>
      {/* Title */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(11px, 1.4vw, 16px)",
          letterSpacing: "0.18em",
          color: "#ffffff",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.15,
          textShadow: "0 1px 12px rgba(0,0,0,0.6)",
        }}
      >
        {card.title}
      </span>
      {/* Tagline */}
      <span
        style={{
          position: "relative",
          zIndex: 3,
          fontSize: "clamp(5px, 0.6vw, 7px)",
          letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          fontFamily: "var(--font-montserrat, Montserrat, 'Helvetica Neue', sans-serif)",
          fontWeight: 400,
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
