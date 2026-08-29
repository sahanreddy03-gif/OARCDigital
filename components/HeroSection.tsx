"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { Palette, Bot, Rocket } from "lucide-react";
import FloatingChipCarousel from "./FloatingChipCarousel";
import MobileHeroMasonryGrid from "./MobileHeroMasonryGrid";
const heroBackground = "/attached_assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif";

/** Superside headline pair — Inter Tight (sans) + Instrument Serif (italic accent). */
const heroSans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const heroSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const HERO_PLACEHOLDER = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAANACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERAgMSIv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABcRAQEBAQAAAAAAAAAAAAAAAAARAQL/2gAMAwEAAhEDEQA/AOUODgIwlnPNZsz85MnNwu9uB2nnUQ7ugLToEq//2Q==';

function SnowfallEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const isMobile =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    // Phone: skip canvas snow — frees the main thread for hero paint + scroll.
    if (isMobile) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      baseOpacity: number;
      wobbleOffset: number;
      wobbleSpeed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      sprite: HTMLCanvasElement;
      spriteHalf: number;
    }

    const makeSprite = (radius: number, withGlow: boolean) => {
      const glowSize = radius * 2.5;
      const half = withGlow ? Math.ceil(glowSize) + 1 : Math.ceil(radius) + 1;
      const sprite = document.createElement("canvas");
      sprite.width = half * 2;
      sprite.height = half * 2;
      const sctx = sprite.getContext("2d")!;
      sctx.beginPath();
      sctx.arc(half, half, radius, 0, Math.PI * 2);
      sctx.fillStyle = "rgba(255, 255, 255, 1)";
      sctx.fill();
      if (withGlow) {
        const gradient = sctx.createRadialGradient(half, half, 0, half, half, glowSize);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.35)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        sctx.beginPath();
        sctx.arc(half, half, glowSize, 0, Math.PI * 2);
        sctx.fillStyle = gradient;
        sctx.fill();
      }
      return { sprite, spriteHalf: half };
    };

    const snowflakeCount = 80;
    const withGlow = true;
    const snowflakes: Snowflake[] = [];

    for (let i = 0; i < snowflakeCount; i++) {
      const layer = Math.random();
      const isFar = layer < 0.4;
      const isMid = layer >= 0.4 && layer < 0.75;
      const radius = isFar
        ? Math.random() * 1 + 0.5
        : isMid
          ? Math.random() * 1.5 + 1
          : Math.random() * 2 + 1.5;
      const { sprite, spriteHalf } = makeSprite(radius, withGlow);

      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        speed: isFar
          ? Math.random() * 0.4 + 0.2
          : isMid
            ? Math.random() * 0.6 + 0.4
            : Math.random() * 0.8 + 0.6,
        baseOpacity: isFar
          ? Math.random() * 0.2 + 0.35
          : isMid
            ? Math.random() * 0.25 + 0.5
            : Math.random() * 0.2 + 0.7,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        twinkleSpeed: Math.random() * 0.03 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        sprite,
        spriteHalf,
      });
    }

    let animationId = 0;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      for (let i = 0; i < snowflakes.length; i++) {
        const flake = snowflakes[i];
        flake.y += flake.speed;

        const wobble = Math.sin(time * flake.wobbleSpeed + flake.wobbleOffset) * 0.4;
        let displayX = flake.x + wobble;
        displayX = Math.max(0, Math.min(width, displayX));

        const twinkle = Math.sin(time * flake.twinkleSpeed + flake.twinkleOffset) * 0.12 + 1;
        const currentOpacity = Math.min(flake.baseOpacity * twinkle, 1);

        if (flake.y > height + 10) {
          flake.y = -10 - Math.random() * 20;
          flake.x = Math.random() * width;
          flake.wobbleOffset = Math.random() * Math.PI * 2;
          flake.twinkleOffset = Math.random() * Math.PI * 2;
        }

        ctx.globalAlpha = currentOpacity;
        ctx.drawImage(flake.sprite, displayX - flake.spriteHalf, flake.y - flake.spriteHalf);
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    const start = () => {
      animationId = requestAnimationFrame(animate);
    };

    if (typeof requestIdleCallback !== "undefined") {
      const idleId = requestIdleCallback(start, { timeout: 500 });
      return () => {
        cancelIdleCallback(idleId);
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationId);
      };
    }

    start();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 motion-reduce:hidden hidden md:block"
      style={{ opacity: 0.9 }}
    />
  );
}

const MobileGlassCard = ({ icon: Icon, label, href, testId }: { icon: typeof Palette; label: string; href: string; testId: string }) => (
  <Link href={href}>
    <div 
      className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10"
      data-testid={testId}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm md:text-base font-bold text-white tracking-wide">{label}</span>
    </div>
  </Link>
);

/**
 * Figma node 1:2 glass pills — 118×72, fill white@10%, stroke white@25%, r=12.
 * Text only (Inter Semi Bold 11).
 */
const CompactMobileGlassCard = ({
  label,
  href,
  testId,
}: {
  label: string;
  href: string;
  testId: string;
}) => (
  <Link href={href} className="block" style={{ width: "calc(118 / 390 * 100%)" }}>
    <div
      className="flex items-center justify-center rounded-xl border backdrop-blur-md"
      style={{
        height: "calc(72 / 844 * 100svh)",
        background: "rgba(255,255,255,0.10)",
        borderColor: "rgba(255,255,255,0.25)",
      }}
      data-testid={testId}
    >
      <span
        className="font-semibold text-white text-center leading-tight whitespace-pre-line"
        style={{ fontSize: "calc(11 / 390 * 100vw)", letterSpacing: 0 }}
      >
        {label}
      </span>
    </div>
  </Link>
);

/**
 * Sales / Marketing / Operations as graphics (not word labels, not the path icons below).
 * aria-label carries the meaning for accessibility.
 */
function DisciplineGraphic({
  kind,
  size = "md",
}: {
  kind: "sales" | "marketing" | "operations";
  size?: "md" | "lg";
}) {
  const label =
    kind === "sales" ? "Sales" : kind === "marketing" ? "Marketing" : "Operations";
  const wh = size === "lg" ? { w: 46, h: 34 } : { w: 32, h: 24 };

  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="inline-flex align-middle mx-0.5"
      data-testid={`discipline-graphic-${kind}`}
    >
      <svg
        width={wh.w}
        height={wh.h}
        viewBox="0 0 36 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(232,255,176,0.22)]"
      >
        <rect
          x="0.75"
          y="0.75"
          width="34.5"
          height="26.5"
          rx="7"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="1.5"
        />
        {kind === "sales" && (
          <>
            <path d="M8 19V14.5" stroke="#e8ffb0" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M14 19V11" stroke="#e8ffb0" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M20 19V8.5" stroke="#e8ffb0" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M26 19V12.5" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M7.5 20.5h21" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" />
          </>
        )}
        {kind === "marketing" && (
          <>
            <circle cx="14" cy="14" r="3.2" fill="#e8ffb0" />
            <path
              d="M19.5 9.5c2.2 1.4 3.5 3.5 3.5 4.5s-1.3 3.1-3.5 4.5"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M23.2 7c3 2 4.8 4.6 4.8 7s-1.8 5-4.8 7"
              stroke="rgba(232,255,176,0.75)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path d="M9.5 12.2 7 10.4v7.2l2.5-1.8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinejoin="round" />
          </>
        )}
        {kind === "operations" && (
          <>
            <circle cx="10" cy="14" r="2.6" stroke="#e8ffb0" strokeWidth="1.7" />
            <circle cx="18" cy="10.5" r="2.6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.7" />
            <circle cx="26" cy="15.5" r="2.6" stroke="#e8ffb0" strokeWidth="1.7" />
            <path d="M12.4 13.2 15.6 11.3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
            <path d="M20.4 11.6 23.6 14.2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function HeroSection() {
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-60px) translateX(30px); opacity: 0.8; }
    }
    @keyframes lightSweep {
      0% { transform: translateX(-100%) rotate(-15deg); }
      100% { transform: translateX(200%) rotate(-15deg); }
    }
    @keyframes scanHorizontal1 {
      0% { transform: translateX(-100%); opacity: 0; }
      10% { opacity: 0.4; }
      90% { opacity: 0.4; }
      100% { transform: translateX(100vw); opacity: 0; }
    }
    @keyframes scanHorizontal2 {
      0% { transform: translateX(-100%); opacity: 0; }
      10% { opacity: 0.3; }
      90% { opacity: 0.3; }
      100% { transform: translateX(100vw); opacity: 0; }
    }
    @keyframes gridPulse {
      0%, 100% { opacity: 0.25; }
      50% { opacity: 0.45; }
    }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      @keyframes fadeSlideUp {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    }
  `;
  
  return (
    <>
      <style>{styles}</style>
      <section
        className="relative min-h-[100svh] md:min-h-screen flex flex-col overflow-hidden bg-black"
        style={{ isolation: "isolate" }}
      >
        
        {/* ========== MOBILE LAYOUT ========== */}
        {/* Lightweight colour field — no animated canvas or autoplay video above the H1. */}
        <div className="md:hidden absolute inset-0 bg-[#0b1013]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 12% 20%, rgba(255,126,72,0.38), transparent 31%), radial-gradient(circle at 92% 34%, rgba(75,185,188,0.32), transparent 35%), radial-gradient(circle at 48% 78%, rgba(190,218,82,0.2), transparent 38%), linear-gradient(145deg, #21131a 0%, #11161c 52%, #0a1718 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
        </div>

        {/* ========== DESKTOP LAYOUT ========== */}
        {/* Desktop instant placeholder - blurred, loads immediately */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${HERO_PLACEHOLDER})`,
            backgroundPosition: '35% center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
        {/* Desktop real background - always visible */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: '35% center',
            filter: 'brightness(1.12) saturate(1.18) contrast(1.03)',
          }}
        />
        {/* Desktop gradient overlays - always visible for text readability */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/68 via-black/20 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/24 via-transparent to-black/36" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/45" />
        
        {/* Desktop animations - always show immediately */}
        <>
          {/* Christmas Snowfall Effect */}
          <SnowfallEffect />
          {/* Light Sweep Effect */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute w-1/3 h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_15s_ease-in-out_infinite] motion-reduce:hidden"
              style={{ animationDelay: '2s', willChange: 'transform', transform: 'translateZ(0)' }} 
            />
          </div>
        </>
        
        {/* ========== CONTENT ========== */}
        {/* MOBILE — static, lightweight opening. Carousel stays pinned at bottom. */}
        <div
          className={`md:hidden relative h-[100svh] flex flex-col overflow-hidden ${heroSans.className}`}
          style={{
            paddingTop: "max(6.25rem, calc(env(safe-area-inset-top) + 5.25rem))",
            paddingBottom: "max(0.2rem, env(safe-area-inset-bottom))",
          }}
        >
          <div className="shrink-0 px-3 text-center">
            <h1 className="text-white" data-testid="text-hero-headline" data-speakable>
              <span
                className={`${heroSans.className} block font-semibold tracking-[-0.035em] leading-[1.05]`}
                style={{ fontSize: "clamp(1.55rem, 7.6vw, 1.95rem)" }}
              >
                AI-Native Marketing Agency
              </span>
              <span
                className={`${heroSerif.className} block italic tracking-[-0.03em] leading-[1.08] mt-1 whitespace-nowrap`}
                style={{ fontSize: "clamp(1.35rem, 6.6vw, 1.7rem)" }}
              >
                Malta&apos;s One{" "}
                <span className={`${heroSans.className} text-[#e8ffb0] font-semibold not-italic`}>
                  End-to-End
                </span>{" "}
                Team
              </span>
            </h1>
          </div>

          <div className="shrink-0 w-full px-3 mt-2 flex gap-2 justify-center">
            <CompactMobileGlassCard label="Creative" href="/creative" testId="button-nav-creative" />
            <CompactMobileGlassCard label="Agentic AI" href="/ai-agents" testId="button-nav-ai" />
            <CompactMobileGlassCard
              label={"Invention"}
              href="/solutions"
              testId="button-nav-growth"
            />
          </div>

          <p
            className="shrink-0 mt-2 px-3 text-center leading-none whitespace-nowrap tracking-[-0.018em]"
            style={{ fontSize: "clamp(0.76rem, 3.35vw, 1.08rem)" }}
            data-testid="text-hero-inhouse-line"
            data-speakable
          >
            <span className={`${heroSans.className} text-[#e8ffb0] font-semibold not-italic`}>
              In-house
            </span>{" "}
            <span className={`${heroSerif.className} italic text-white`}>
              Studio, Sales &amp; Tech
            </span>{" "}
            <span className={`${heroSans.className} text-white font-semibold`}>
              at your disposal
            </span>
          </p>

          {/* Keep the proof carousel anchored to the lower edge without media above the H1. */}
          <div className="flex-1 min-h-6" aria-hidden="true" />
          <div className="shrink-0 isolate mt-1.5" data-testid="hero-mobile-carousel-wrap">
            <MobileHeroMasonryGrid />
          </div>
        </div>

        {/* DESKTOP — unchanged from checkpoint structure */}
        <div className="hidden md:flex relative flex-1 flex-col justify-end pt-16 lg:pt-20 pb-6">
          <div className="w-full">
            <div className="w-full pl-8 lg:pl-12 pr-0">
              <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl text-left">
                <div className="relative">
                  <h1
                    className="mb-6 lg:mb-8 text-white"
                    data-testid="text-hero-headline-desktop"
                    data-speakable
                  >
                    <span
                      className="block tracking-tight leading-[1.05] text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[clamp(2.5rem,4.8vw,4rem)]"
                      style={{ fontFamily: "var(--font-swarsh)" }}
                    >
                      AI-Native Marketing Agency
                    </span>
                    <span className="block font-extralight italic font-serif tracking-[-0.04em] leading-[1.05] mt-2 whitespace-nowrap text-[clamp(2.2rem,4.7vw,3.85rem)] lg:text-[clamp(2.3rem,4.1vw,3.4rem)]">
                      Malta&apos;s One{" "}
                      <span className="text-[#e8ffb0] font-semibold not-italic">End-to-End</span>{" "}
                      Team
                    </span>
                  </h1>

                  <div className="flex justify-start mb-6">
                    <div
                      className="relative inline-block px-4 py-2 rounded-lg"
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <p
                        className="text-white tracking-wide whitespace-nowrap text-[clamp(0.9rem,1.5vw,1.25rem)] lg:text-[clamp(1rem,1.6vw,1.35rem)]"
                        style={{
                          fontFamily: "var(--font-halfre)",
                          textShadow:
                            "0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2)",
                        }}
                        data-testid="text-hero-subheadline"
                      >
                        For Brands That Compete on Value, Not Price
                      </p>
                      <div
                        className="absolute bottom-2 left-6 right-6 h-[2px]"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    className="max-w-2xl leading-snug mb-4 font-normal tracking-[0.08em] text-[clamp(0.9rem,1.5vw,1.2rem)]"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                    data-testid="text-value-proposition"
                    data-speakable
                  >
                    Creative AI Talent + Social-Led Marketing + Custom Workflows
                  </p>
                  <p
                    className="max-w-2xl leading-tight mb-7 lg:mb-9 text-[clamp(1.2rem,2.2vw,1.8rem)]"
                    data-testid="text-result-line"
                  >
                    <span className="text-white/70 font-light">=</span>{" "}
                    <span className="text-white font-bold italic">Less Waste</span>
                    <span className="text-white/50 font-light"> + </span>
                    <span className="text-white font-semibold">More Reach</span>
                    <span className="text-white/50 font-light"> + </span>
                    <span className="text-white font-bold tracking-wide">More Sales</span>
                  </p>

                  <div className="flex flex-wrap gap-4 justify-start">
                    <MobileGlassCard
                      icon={Palette}
                      label="Creative"
                      href="/creative"
                      testId="button-nav-creative-desktop"
                    />
                    <MobileGlassCard
                      icon={Bot}
                      label="AI"
                      href="/ai-agents"
                      testId="button-nav-ai-desktop"
                    />
                    <MobileGlassCard
                      icon={Rocket}
                      label="Growth"
                      href="/solutions"
                      testId="button-nav-growth-desktop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 relative">
            <FloatingChipCarousel />
            <div className="absolute -bottom-16 left-0 right-0 pointer-events-none">
              <svg
                viewBox="0 0 1440 120"
                className="w-full h-auto lg:scale-y-75"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
                  fill="#c4ff4d"
                  opacity="0.08"
                />
                <path
                  d="M0,80 C320,40 640,100 960,60 C1200,30 1360,70 1440,50 L1440,120 L0,120 Z"
                  fill="#c4ff4d"
                  opacity="0.05"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
