"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const styles = `
  @keyframes gradCreative {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes gradAI {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
  @keyframes gradGrowth {
    0%   { background-position: 50% 0%; }
    50%  { background-position: 50% 100%; }
    100% { background-position: 50% 0%; }
  }
  @keyframes hvcFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hvc-card {
    animation: hvcFadeUp 0.7s ease-out both;
    will-change: transform;
  }
  .hvc-card:nth-child(1) { animation-delay: 0.05s; }
  .hvc-card:nth-child(2) { animation-delay: 0.20s; }
  .hvc-card:nth-child(3) { animation-delay: 0.35s; }

  /* Mobile: fixed 76vw so snap-scroll works */
  .hvc-card { min-width: 76vw; scroll-snap-align: start; }
  /* Desktop: let flex-1 take over, no min-width forcing overflow */
  @media (min-width: 768px) { .hvc-card { min-width: 0; scroll-snap-align: none; } }

  .hvc-grad-creative {
    background: linear-gradient(135deg, #c2410c, #f97316, #be185d, #9333ea, #f97316);
    background-size: 300% 300%;
    animation: gradCreative 9s ease infinite;
  }
  .hvc-grad-ai {
    background: linear-gradient(135deg, #312e81, #4f46e5, #0891b2, #7c3aed, #1d4ed8);
    background-size: 300% 300%;
    animation: gradAI 11s ease infinite;
  }
  .hvc-grad-growth {
    background: linear-gradient(135deg, #14532d, #16a34a, #c4ff4d, #059669, #c4ff4d);
    background-size: 300% 300%;
    animation: gradGrowth 10s ease infinite;
  }

  .hvc-inner {
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1),
                border-color 0.4s ease;
  }
  @media (hover: hover) {
    .hvc-inner:hover {
      transform: translateY(-8px);
    }
    .hvc-inner:hover .hvc-arrow {
      transform: translate(3px, -3px);
    }
    .hvc-inner:hover .hvc-grad-overlay {
      opacity: 0.52;
    }
    .hvc-inner:hover .hvc-bg {
      transform: scale(1.04);
    }
  }
  .hvc-arrow {
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .hvc-grad-overlay {
    opacity: 0.68;
    transition: opacity 0.45s ease;
  }
  .hvc-bg {
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

interface CardDef {
  tag: string;
  headline: string;
  sub: string;
  href: string;
  gradClass: string;
  borderColor: string;
  glowColor: string;
  tagColor: string;
  testId: string;
  video?: string;
}

const CARDS: CardDef[] = [
  {
    tag: "Creative Studio",
    headline: "Media.\nBrand.\nContent.",
    sub: "Design-led creative for brands that demand attention",
    href: "/creative",
    gradClass: "hvc-grad-creative",
    borderColor: "rgba(249,115,22,0.30)",
    glowColor: "rgba(249,115,22,0.14)",
    tagColor: "#fb923c",
    testId: "card-hero-creative",
  },
  {
    tag: "Autonomous AI",
    headline: "AI Agents.\nBuilt for\nYou.",
    sub: "Prospect, support, and close — 24/7, without hiring",
    href: "/ai-agents",
    gradClass: "hvc-grad-ai",
    borderColor: "rgba(99,102,241,0.35)",
    glowColor: "rgba(99,102,241,0.16)",
    tagColor: "#818cf8",
    testId: "card-hero-ai",
  },
  {
    tag: "Revenue Engine",
    headline: "Scale.\nAutomate.\nWin.",
    sub: "30% ROI guaranteed or your money back",
    href: "/solutions",
    gradClass: "hvc-grad-growth",
    borderColor: "rgba(196,255,77,0.30)",
    glowColor: "rgba(140,220,40,0.14)",
    tagColor: "#c4ff4d",
    testId: "card-hero-growth",
  },
];

export default function HeroVideoCards() {
  return (
    <>
      <style>{styles}</style>

      {/* Mobile: horizontal snap-scroll / Desktop: 3-col row */}
      <div
        className="w-full flex gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-0.5 md:pb-0"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="hvc-card flex-none md:flex-1"
            data-testid={card.testId}
          >
            <div
              className="hvc-inner relative rounded-2xl overflow-hidden h-full"
              style={{
                height: "clamp(200px, 24vw, 272px)",
                border: `1px solid ${card.borderColor}`,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset,
                            0 10px 40px ${card.glowColor},
                            0 2px 10px rgba(0,0,0,0.45)`,
              }}
            >
              {/* Animated gradient bg */}
              <div className={`hvc-bg absolute inset-0 ${card.gradClass}`} />

              {/* Video slot — drop a src here when videos are ready */}
              {card.video && (
                <video
                  src={card.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hvc-bg absolute inset-0 w-full h-full object-cover"
                  style={{ zIndex: 1 }}
                />
              )}

              {/* Subtle film-grain texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: 2,
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")",
                  opacity: 0.5,
                }}
              />

              {/* Gradient wash — keeps text readable */}
              <div
                className="hvc-grad-overlay absolute inset-0"
                style={{
                  zIndex: 3,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.42) 48%, rgba(0,0,0,0.05) 100%)",
                }}
              />

              {/* Top-edge glass sheen */}
              <div
                className="absolute inset-x-0 top-0 h-px pointer-events-none"
                style={{
                  zIndex: 4,
                  background:
                    "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.22) 50%, transparent 95%)",
                }}
              />

              {/* Card content */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-4 md:p-5"
                style={{ zIndex: 5 }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: card.tagColor }}
                    data-testid={`text-tag-${card.testId}`}
                  >
                    {card.tag}
                  </span>

                  <span
                    className="hvc-arrow flex items-center justify-center rounded-full"
                    style={{
                      width: 28,
                      height: 28,
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
                  </span>
                </div>

                {/* Bottom — headline + sub */}
                <div>
                  <h3
                    className="text-white font-bold leading-[1.07] mb-1.5 whitespace-pre-line"
                    style={{
                      fontSize: "clamp(1.2rem, 3vw, 1.55rem)",
                      textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {card.headline}
                  </h3>
                  <p
                    className="text-white/50 leading-snug"
                    style={{ fontSize: "clamp(0.63rem, 1.4vw, 0.75rem)" }}
                  >
                    {card.sub}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
