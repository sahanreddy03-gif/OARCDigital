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
    /* Forge — molten iron cooling: deep crimson core bleeding into charred copper and smoky violet */
    bg: [
      "radial-gradient(ellipse at 38% 62%, rgba(180,55,18,0.95) 0%, transparent 50%)",
      "radial-gradient(ellipse at 72% 30%, rgba(140,40,10,0.8) 0%, transparent 44%)",
      "radial-gradient(ellipse at 15% 20%, rgba(200,110,30,0.55) 0%, transparent 38%)",
      "radial-gradient(ellipse at 60% 88%, rgba(90,18,35,0.7) 0%, transparent 48%)",
      "radial-gradient(ellipse at 85% 70%, rgba(55,12,25,0.5) 0%, transparent 42%)",
      "linear-gradient(152deg, #0c0200 0%, #1e0602 40%, #130210 100%)",
    ].join(","),
  },
  {
    id: "ai-agents",
    href: "/ai-agents",
    label: "OARC DIGITAL",
    title: "AI AGENTS",
    tagline: "Intelligent Automation",
    pos: "left" as const,
    /* Aurora Chrome — iridescent magenta-violet shifting through cold pewter and near-black */
    bg: [
      "radial-gradient(ellipse at 30% 65%, rgba(140,30,120,0.9) 0%, transparent 50%)",
      "radial-gradient(ellipse at 70% 28%, rgba(80,10,100,0.75) 0%, transparent 45%)",
      "radial-gradient(ellipse at 80% 72%, rgba(160,80,140,0.5) 0%, transparent 44%)",
      "radial-gradient(ellipse at 14% 18%, rgba(60,15,80,0.6) 0%, transparent 38%)",
      "radial-gradient(ellipse at 50% 50%, rgba(30,5,50,0.4) 0%, transparent 55%)",
      "linear-gradient(152deg, #06000e 0%, #110218 40%, #080014 100%)",
    ].join(","),
  },
  {
    id: "solutions",
    href: "/solutions",
    label: "OARC DIGITAL",
    title: "SOLUTIONS",
    tagline: "Revenue & Growth",
    pos: "right" as const,
    /* Obsidian Amber — polished dark resin with deep cognac light bleeding through from within */
    bg: [
      "radial-gradient(ellipse at 40% 60%, rgba(175,90,10,0.9) 0%, transparent 50%)",
      "radial-gradient(ellipse at 68% 24%, rgba(140,65,5,0.7) 0%, transparent 44%)",
      "radial-gradient(ellipse at 18% 75%, rgba(110,45,8,0.6) 0%, transparent 45%)",
      "radial-gradient(ellipse at 82% 78%, rgba(60,22,4,0.55) 0%, transparent 42%)",
      "radial-gradient(ellipse at 50% 50%, rgba(30,10,2,0.4) 0%, transparent 55%)",
      "linear-gradient(152deg, #080300 0%, #160800 40%, #0e0500 100%)",
    ].join(","),
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
        background: card.bg,
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
      {/* Vignette */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 28%, rgba(0,0,0,0.72) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Top/bottom darkening bands */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, transparent 32%, transparent 68%, rgba(0,0,0,0.38) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Inner border shine */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.13)",
          pointerEvents: "none",
          zIndex: 2,
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
