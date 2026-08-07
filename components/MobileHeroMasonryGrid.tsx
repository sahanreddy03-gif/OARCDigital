"use client";

/**
 * MobileHeroMasonryGrid
 *
 * Three-column vertically-scrolling image grid — Superside-style.
 * Rules:
 *  • Zero rotation on every card — flat rectangles only
 *  • Full-bleed images; tiny service label at bottom-left
 *  • RAF-driven, GPU transform only (translateY)
 *  • Columns scroll UP, each at a different pace (parallax rhythm)
 *  • Seamless loop: 6 items doubled → 12 per column
 *  • Top/bottom edge-fade blends into hero dark background
 */

import { useRef, useEffect } from "react";
import Link from "next/link";
import { serviceImages } from "@/lib/assets/serviceImages";

type Item = { src: string; label: string };

// ── Three columns: 6 items each, covering different service areas ──
const COL_0: Item[] = [
  { src: serviceImages.adCreative,    label: "Ad Creative" },
  { src: serviceImages.video,         label: "Video Production" },
  { src: serviceImages.illustration,  label: "Illustration" },
  { src: serviceImages.branding,      label: "Branding" },
  { src: serviceImages.email,         label: "Email Creation" },
  { src: serviceImages.webDesign,     label: "Web Design" },
];

const COL_1: Item[] = [
  { src: serviceImages.socialMedia,   label: "Social Media" },
  { src: serviceImages.motion,        label: "Motion Design" },
  { src: serviceImages.packaging,     label: "Packaging" },
  { src: serviceImages.concept,       label: "Concept Creation" },
  { src: serviceImages.immersive,     label: "Immersive Design" },
  { src: serviceImages.aiEnhanced,    label: "AI Creative" },
];

const COL_2: Item[] = [
  { src: serviceImages.presentation,  label: "Presentation" },
  { src: serviceImages.ebook,         label: "eBook Design" },
  { src: serviceImages.printDesign,   label: "Print Design" },
  { src: serviceImages.designSystems, label: "Design Systems" },
  { src: serviceImages.productDesign, label: "Product Design" },
  { src: serviceImages.aiConsulting,  label: "AI Consulting" },
];

// Scroll speeds in px per RAF frame (60 fps → px/s = speed × 60)
// Different speeds create a natural parallax between columns.
const SPEEDS = [0.85, 1.25, 0.65] as const;
const GAP_PX = 4; // gap between cards within a column
const COL_GAP = 3; // gap between columns

function Card({ src, label }: Item) {
  return (
    <Link
      href="/services"
      className="relative block flex-shrink-0 overflow-hidden"
      style={{ borderRadius: 6, aspectRatio: "3 / 4" }}
      draggable={false}
      tabIndex={-1}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      {/* Dark gradient for legibility — NOT a decorative gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.12) 45%, transparent 100%)",
        }}
      />
      <span
        className="absolute bottom-2 left-2 text-white font-bold leading-tight tracking-widest uppercase"
        style={{ fontSize: 7.5, letterSpacing: "0.14em" }}
      >
        {label}
      </span>
    </Link>
  );
}

export default function MobileHeroMasonryGrid() {
  const col0Ref = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);

  // Looped card sets — 6 originals + 6 duplicates = seamless infinite loop
  const looped0 = [...COL_0, ...COL_0];
  const looped1 = [...COL_1, ...COL_1];
  const looped2 = [...COL_2, ...COL_2];

  useEffect(() => {
    const refs = [col0Ref.current, col1Ref.current, col2Ref.current];
    if (refs.some(r => !r)) return;

    const pos    = [0, 0, 0];
    const halfH  = [0, 0, 0];
    let started  = false;

    const readHeights = () => {
      refs.forEach((el, i) => {
        if (el) halfH[i] = el.scrollHeight / 2;
      });
      return halfH.every(h => h > 0);
    };

    const frame = () => {
      refs.forEach((el, i) => {
        if (!el || halfH[i] <= 0) return;
        pos[i] = (pos[i] + SPEEDS[i]) % halfH[i];
        // Translate upward — content scrolls UP, new cards appear from bottom
        el.style.transform = `translateY(-${pos[i]}px)`;
      });
      rafRef.current = requestAnimationFrame(frame);
    };

    const start = () => {
      if (started) return;
      if (!readHeights()) return;
      started = true;
      frame();
    };

    requestAnimationFrame(start);

    const ro = new ResizeObserver(() => {
      readHeights();
      if (!started) start();
    });
    refs.forEach(el => { if (el) ro.observe(el); });

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ height: 256, display: "flex", gap: COL_GAP }}
      data-testid="hero-mobile-masonry-grid"
    >
      {/* ── Column 0 ── */}
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={col0Ref}
          className="absolute top-0 left-0 right-0 flex flex-col"
          style={{ gap: GAP_PX, willChange: "transform" }}
        >
          {looped0.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>

      {/* ── Column 1 ── */}
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={col1Ref}
          className="absolute top-0 left-0 right-0 flex flex-col"
          style={{ gap: GAP_PX, willChange: "transform" }}
        >
          {looped1.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>

      {/* ── Column 2 ── */}
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={col2Ref}
          className="absolute top-0 left-0 right-0 flex flex-col"
          style={{ gap: GAP_PX, willChange: "transform" }}
        >
          {looped2.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>

      {/* Top fade — blends into hero dark bg above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{
          height: 40,
          background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 100%)",
        }}
      />
      {/* Bottom fade — blends into whatever is below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: 40,
          background: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
