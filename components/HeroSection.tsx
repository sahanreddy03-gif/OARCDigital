"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MobileHeroCustomersVideo from "./MobileHeroCustomersVideo";
import FloatingChipCarousel from "./FloatingChipCarousel";

const offers = [
  { label: "Creative & Growth", href: "/creative", tone: "coral" },
  { label: "AI & Automation", href: "/ai-agents", tone: "lime" },
  { label: "H360", href: "/solutions", tone: "blue" },
] as const;

export default function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[#161616] text-[#f5f0e8]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <MobileHeroCustomersVideo />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.82)_0%,rgba(10,10,10,.3)_48%,rgba(10,10,10,.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,.12)_0%,transparent_62%,rgba(10,10,10,.76)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-5 pt-28 md:px-10 md:pb-8 md:pt-36">
        <div className="max-w-[980px]">
          <h1
            id="hero-heading"
            data-testid="text-hero-headline"
            data-speakable
            className="font-sans text-[clamp(2.4rem,7.2vw,6.4rem)] font-semibold leading-[.88] tracking-[-.075em] text-white"
          >
            Marketing Agency Malta
          </h1>
          <h2 className="mt-4 max-w-5xl font-serif text-[clamp(2rem,4.05vw,3.85rem)] italic leading-[.95] tracking-[-.055em] text-white md:mt-7 md:whitespace-nowrap">
            One AI-native team for{" "}
            <span className="font-sans font-semibold not-italic text-[#ff9d83]">creative</span>
            <span className="text-white/55">, </span>
            <span className="font-sans font-semibold not-italic text-[#e6ff76]">growth</span>
            <span className="text-white/55"> &amp; </span>
            <span className="font-sans font-semibold not-italic text-[#9ed9ff]">automation</span>.
          </h2>
          <p
            className="mt-7 max-w-[560px] text-base leading-snug md:mt-9 md:text-xl"
            data-testid="text-hero-inhouse-line"
            data-speakable
          >
            <span className="font-sans font-semibold text-[#e6ff76]">In-house</span>{" "}
            <span className="font-serif italic text-white">Studio, Sales &amp; Tech</span>{" "}
            <span className="font-sans font-semibold text-white">at your disposal.</span>
          </p>
        </div>

        <div className="mt-16">
          <nav aria-label="OARC services" className="grid max-w-[920px] grid-cols-1 gap-2 md:grid-cols-3 md:gap-3">
            {offers.map((offer) => (
              <Link
                key={offer.label}
                href={offer.href}
                className={`group flex items-center justify-between border-b px-0 py-4 text-lg font-medium tracking-[-.035em] transition-transform duration-300 hover:translate-x-2 md:px-1 md:text-2xl ${
                  offer.tone === "coral"
                    ? "border-[#ff9d83]/70 text-[#ffb09a]"
                    : offer.tone === "lime"
                      ? "border-[#e6ff76]/70 text-[#e6ff76]"
                      : "border-[#9ed9ff]/70 text-[#9ed9ff]"
                }`}
                data-testid={`button-nav-${offer.label.toLowerCase().replaceAll(" ", "-")}`}
              >
                <span>{offer.label}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </nav>
          <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-[#f5f0e8]/78 md:text-base">
            H360 is the connected system for bookings, calls, orders and guest relationships.
          </p>
        </div>
      </div>

      <div
        className="relative z-10 mt-auto w-full overflow-hidden pb-3 pt-8 md:pb-5 md:pt-12"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)",
        }}
      >
        <FloatingChipCarousel />
      </div>
    </section>
  );
}