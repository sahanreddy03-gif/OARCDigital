"use client";

import { useRef, useState } from "react";
import Link from "next/link";

function CreativeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="19" r="11" stroke="white" strokeWidth="1.5" opacity="0.85"/>
      <circle cx="30" cy="19" r="11" stroke="white" strokeWidth="1.5" opacity="0.85"/>
      <circle cx="24" cy="29" r="11" stroke="white" strokeWidth="1.5" opacity="0.85"/>
    </svg>
  );
}

function AIAgentsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="4.5" fill="white" opacity="0.9"/>
      <circle cx="24" cy="9"  r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <circle cx="37" cy="16.5" r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <circle cx="37" cy="31.5" r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <circle cx="24" cy="39" r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <circle cx="11" cy="31.5" r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <circle cx="11" cy="16.5" r="2.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <line x1="24" y1="19.5" x2="24" y2="11.5"   stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="27.9" y1="21.8" x2="34.5" y2="18" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="27.9" y1="26.2" x2="34.5" y2="30" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="24" y1="28.5" x2="24" y2="36.5"   stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="20.1" y1="26.2" x2="13.5" y2="30" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="20.1" y1="21.8" x2="13.5" y2="18" stroke="white" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polyline
        points="5,38 15,26 25,31 42,11"
        stroke="white" strokeWidth="2"
        strokeLinejoin="round" strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="42" cy="11" r="3"  fill="white" opacity="0.9"/>
      <circle cx="15" cy="26" r="2"  fill="white" opacity="0.6"/>
      <circle cx="25" cy="31" r="2"  fill="white" opacity="0.6"/>
    </svg>
  );
}

const CARDS = [
  { id: "creative",       href: "/creative",   label: ["CREATIVE", "STUDIO"],  Icon: CreativeIcon  },
  { id: "ai-agents",      href: "/ai-agents",  label: ["AI", "AGENTS"],        Icon: AIAgentsIcon  },
  { id: "growth-systems", href: "/solutions",  label: ["GROWTH", "SYSTEMS"],   Icon: GrowthIcon    },
];

function ATCard({ card }: { card: (typeof CARDS)[number] }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = linkRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 8 });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  }

  const pad = "clamp(12px, 1.4vw, 18px)";

  return (
    <Link
      ref={linkRef}
      href={card.href}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      aria-label={card.label.join(" ")}
      style={{
        flexShrink: 0,
        width: "var(--at-s)",
        height: "var(--at-s)",
        borderRadius: "clamp(16px, 2vw, 22px)",
        overflow: "hidden",
        background: "#0a0a0a",
        border: `1px solid rgba(255,255,255,${hovered ? 0.32 : 0.2})`,
        boxShadow: hovered
          ? "inset 0 1px 0 rgba(255,255,255,0.22), 0 24px 60px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.05)"
          : "inset 0 1px 0 rgba(255,255,255,0.14), 0 20px 50px rgba(0,0,0,0.7)",
        display: "block",
        textDecoration: "none",
        position: "relative",
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovered ? 1.04 : 1})`,
        transition: hovered
          ? "transform 0.06s linear, border-color 0.2s, box-shadow 0.2s"
          : "transform 0.55s cubic-bezier(0.23,1,0.32,1), border-color 0.4s, box-shadow 0.4s",
        willChange: "transform",
      }}
    >
      {/* Glass highlight top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.09) 0%, transparent 55%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Icon — top left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: pad,
          left: pad,
          width: "38%",
          zIndex: 2,
        }}
      >
        <card.Icon />
      </div>

      {/* Title — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: pad,
          left: pad,
          zIndex: 2,
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "clamp(7px, 0.82vw, 10px)",
          letterSpacing: "0.13em",
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.45,
          textTransform: "uppercase" as const,
          fontWeight: 400,
        }}
      >
        {card.label.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      {/* Arrow — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: pad,
          right: pad,
          zIndex: 2,
          color: `rgba(255,255,255,${hovered ? 0.85 : 0.45})`,
          fontSize: "clamp(10px, 1.1vw, 14px)",
          lineHeight: 1,
          transition: "color 0.2s",
        }}
      >
        →
      </div>
    </Link>
  );
}

export default function HeroATCard() {
  return (
    <div
      className="at-row"
      style={{
        display: "flex",
        gap: "var(--at-g)",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {CARDS.map((card) => (
        <ATCard key={card.id} card={card} />
      ))}
    </div>
  );
}
