"use client";

import { useEffect, useState } from "react";
import FloatingChipCarousel from "./FloatingChipCarousel";
import HeroATCard from "./HeroATCard";

const heroBackground =
  "/attached_assets/d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181_1761251957292.avif";

function useImagePreload(src: string) {
  const checkCached = () => {
    if (typeof window === "undefined") return false;
    const img = new Image();
    img.src = src;
    return img.complete && img.naturalWidth > 0;
  };
  const [loaded, setLoaded] = useState(() => checkCached());
  useEffect(() => {
    if (loaded) return;
    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else {
      img.onload = () => setLoaded(true);
    }
  }, [src, loaded]);
  return loaded;
}

export default function HeroSection() {
  useImagePreload(heroBackground);

  return (
    <>
      <section className="relative flex flex-col overflow-hidden bg-black min-h-[100svh]">

        {/* ─── Background ─────────────────────────────────── */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: "60% center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

        {/* Light sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="hero-light-sweep absolute w-1/3 h-[200%] -top-1/2 bg-gradient-to-r from-transparent via-white/4 to-transparent" />
        </div>

        {/* ─── Main content ───────────────────────────────── */}
        <div className="relative flex-1 flex flex-col justify-center pt-20 pb-6">
          <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">

            {/* Stacked: text top, cards below */}
            <div className="flex flex-col gap-8 md:gap-10">

              {/* ── Text ─────────────────────────────────── */}
              <div className="flex flex-col">

                {/* H1 */}
                <h1
                  className="hero-text hero-text-d1 mb-5 md:mb-7 text-white text-left"
                  data-testid="text-hero-headline"
                  data-speakable
                >
                  <span
                    className="block tracking-tight leading-[1.04] text-[9.5vw] sm:text-[7vw] md:text-[clamp(2.6rem,4.6vw,5rem)] lg:text-[clamp(3rem,4.8vw,5.2rem)]"
                    style={{ fontFamily: "var(--font-swarsh)" }}
                  >
                    AI-Native Marketing Agency
                  </span>
                  <span
                    className="block font-extralight italic font-serif tracking-tight leading-[1.04] mt-1 md:mt-2 text-[9.5vw] sm:text-[7vw] md:text-[clamp(2.6rem,4.6vw,5rem)] lg:text-[clamp(3rem,4.8vw,5.2rem)] md:ml-[8%]"
                  >
                    That Drives{" "}
                    <span className="text-[#e8ffb0] font-semibold not-italic">
                      Revenue
                    </span>
                  </span>
                </h1>

                {/* Subheadline — subtle lime bar, no glow */}
                <div className="hero-text hero-text-d2 flex items-center gap-3 mb-5 md:mb-6">
                  <span
                    className="flex-shrink-0 w-[2px] self-stretch rounded-full"
                    style={{ background: "#c4ff4d", opacity: 0.3 }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-white/80 text-[4.2vw] sm:text-[2.8vw] md:text-[clamp(1.1rem,1.85vw,1.65rem)] tracking-wide leading-snug"
                    style={{ fontFamily: "var(--font-halfre)" }}
                    data-testid="text-hero-subheadline"
                  >
                    Pioneers in visibility — from search to sales.
                  </p>
                </div>

                {/* Service trio */}
                <ul
                  className="hero-text hero-text-d3 list-none mb-5 md:mb-6 flex flex-col gap-1.5 md:gap-2"
                  data-testid="text-value-proposition"
                  data-speakable
                  style={{
                    fontFamily: "var(--font-montserrat, Montserrat, sans-serif)",
                  }}
                >
                  {[
                    "Creative studio",
                    "Autonomous AI agents",
                    "Full AI systems built for you",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[3.8vw] sm:text-[2.4vw] md:text-[clamp(0.95rem,1.5vw,1.3rem)]"
                    >
                      <span
                        className="flex-shrink-0 w-3.5 md:w-4 h-[1px]"
                        style={{ background: "#c4ff4d", opacity: 0.35 }}
                        aria-hidden="true"
                      />
                      <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Trust line */}
                <p
                  className="hero-text hero-text-d4 text-[3vw] sm:text-[1.8vw] md:text-[clamp(0.65rem,0.95vw,0.82rem)] leading-tight"
                  style={{ color: "rgba(255,255,255,0.38)", fontWeight: 300 }}
                  data-testid="text-result-line"
                >
                  <span style={{ color: "#c4ff4d", fontWeight: 500 }}>✓</span>{" "}
                  30% ROI Guaranteed{" "}
                  <span style={{ opacity: 0.5 }}>·</span>{" "}
                  Trusted by 47+ Brands
                </p>
              </div>

              {/* ── Video cards — one row ─────────────────── */}
              <div className="flex justify-center md:justify-start overflow-visible">
                <HeroATCard />
              </div>

            </div>
          </div>
        </div>

        {/* ─── Carousel ───────────────────────────────────── */}
        <div className="relative w-full mt-auto pb-0">
          <FloatingChipCarousel />
          <div className="absolute -bottom-8 md:-bottom-14 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
              <path
                d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,65 1440,50 L1440,100 L0,100 Z"
                fill="#c4ff4d"
                opacity="0.07"
              />
            </svg>
          </div>
        </div>

      </section>
    </>
  );
}
