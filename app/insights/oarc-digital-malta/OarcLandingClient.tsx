"use client";

import AutoplayVideo from "@/components/AutoplayVideo";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import MotionSection from "@/components/MotionSection";
import {
  CONTACT,
  CTA_CLAIM,
  CTA_WA,
  FooterCta,
  HOME,
  INSTAGRAM,
  MoneyLinks,
  PHONE_DISPLAY,
  ShiftHappensBand,
  StickyExitBand,
  waUrl,
} from "@/components/SiteChrome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const WA = waUrl("Talk about growth in Malta — claim Shift Happens 50% off.");

const filmFrames = [
  { type: "image" as const, src: "/media/images/raylabs/Cw8Vdfho5YTBQvlIeFKOfSFAyJ8.jpg" },
  { type: "video" as const, src: "/media/videos/raylabs-atmosphere.mp4" },
  { type: "image" as const, src: "/media/images/raylabs/a1daVaOmbl26jqNCw1Q0P3vhWZQ2abe.png" },
  { type: "video" as const, src: "/media/videos/raylabs-onset.mp4" },
  { type: "image" as const, src: "/media/images/raylabs/9SazqeFTnXrYVlCuTm8R7IBsboUb488.jpg" },
  { type: "video" as const, src: "/media/videos/raylabs-automotive.mp4" },
  { type: "image" as const, src: "/media/images/raylabs/TzeaSwa5EkKAeTbPBK1xmaVVs4ecb.jpg" },
  { type: "image" as const, src: "/media/images/raylabs/ZLi4wCHZ0oJ9yB9iydu1JWCM7Pgda7d.jpg" },
  { type: "video" as const, src: "/media/videos/raylabs-editorial.mp4" },
  { type: "image" as const, src: "/media/images/raylabs/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg" },
  { type: "image" as const, src: "/media/images/raylabs/WDlxZ5aairNkZSH0cyHqAzB2w7033.png" },
  { type: "video" as const, src: "/media/videos/raylabs-product.mp4" },
];

type Work = {
  label: string;
  copy: string;
  kind: "video" | "image";
  src: string;
};

const works: Work[] = [
  {
    label: "Atmosphere",
    copy: "A moody narrative short exploring isolation through fog, silhouette, and silence. Cinematography that sells the feeling before the product.",
    kind: "video",
    src: "/media/videos/raylabs-atmosphere.mp4",
  },
  {
    label: "On Set",
    copy: "Behind the scenes of a studio production. Full lighting design, crew, and direction handled end to end for Malta brands.",
    kind: "video",
    src: "/media/videos/raylabs-onset.mp4",
  },
  {
    label: "Editorial",
    copy: "Bold, colour-driven portrait work for brand and fashion campaigns. Styling, direction, and post all in-house.",
    kind: "image",
    src: "/media/images/raylabs/Cw8Vdfho5YTBQvlIeFKOfSFAyJ8.jpg",
  },
  {
    label: "Automotive",
    copy: "Cinematic automotive film shot in low light. Built for launch campaigns that need atmosphere over speed-ramping clichés.",
    kind: "video",
    src: "/media/videos/raylabs-automotive.mp4",
  },
  {
    label: "Architecture",
    copy: "Nighttime architectural and location cinematography. Capturing space, light, and scale for real estate and hospitality.",
    kind: "image",
    src: "/media/images/raylabs/WDlxZ5aairNkZSH0cyHqAzB2w7033.png",
  },
  {
    label: "Product",
    copy: "Clean, high-detail product cinematography. Studio-lit hero shots that make hardware the star.",
    kind: "video",
    src: "/media/videos/raylabs-product.mp4",
  },
];

const testimonials = [
  {
    quote:
      "OARC turned our product launch film around in ten days and it still looked like a six-figure shoot.",
    name: "Abhra",
    role: "Founder @FutureUI",
  },
  {
    quote:
      "We've worked with three agencies before. None of them made our founders look this comfortable on camera.",
    name: "Alisha",
    role: "Marketing @Slime",
  },
  {
    quote:
      "Their photography carried our entire rebrand. Every shot felt intentional, and the lighting work alone was worth it.",
    name: "Tom",
    role: "Founder @Jesko",
  },
  {
    quote:
      "The campaign cut felt like a sales asset, not a vanity film. They understand that creative has to earn.",
    name: "Sofia Almeida",
    role: "Founder @Field Notes",
  },
  {
    quote:
      "Working with OARC feels like having an in-house studio. Fast, calm on set, and genuinely invested in the outcome.",
    name: "Marcus",
    role: "Growth @Castaway",
  },
];

const brands = [
  "FUTURE UI",
  "COSMO",
  "CREATOR",
  "PIXEL",
  "SANDSTONE",
  "FIELD NOTES",
  "CASTAWAY",
  "JESKO",
];

const faqs: FaqItem[] = [
  {
    question: "What is OARC Digital?",
    answer:
      "OARC Digital is Malta’s Creative + AI Systems agency — strategy, creative production, paid media, SEO/AEO, and automation in one team based in Birkirkara.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused film or campaign pack is often 1–3 weeks once scope is locked. Retainers run month-to-month with weekly creative and media cadence.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Retainers typically range from single-channel packages upward to full creative + growth + automation. WhatsApp +356 7971 1799 for a scoped quote.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Hospitality, iGaming, retail, real estate, fintech, and ambitious local brands that want serious creative and systems.",
  },
  {
    question: "Where are you based?",
    answer:
      "Level 1, The Brewhouse, Zone 2, Central Business District, Mdina Road, Birkirkara, Malta.",
  },
];

function FrameMedia({
  frame,
  className = "",
}: {
  frame: (typeof filmFrames)[number];
  className?: string;
}) {
  if (frame.type === "video") {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <AutoplayVideo src={frame.src} className="video-cover" />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={frame.src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

function RayNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="https://oarcdigital.com/"
          className="flex items-center gap-2.5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8457ff] text-sm font-bold text-white">
            +
          </span>
          <span className="font-display text-sm tracking-[0.12em] text-black uppercase">
            OARC Digital
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-black/80 md:gap-6">
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#works" className="hover:text-black">
            Works
          </a>
          <a href="#testimonials" className="hover:text-black">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-black">
            FAQ
          </a>
          <Link href={CONTACT} className="hover:text-black">
            Contact
          </Link>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Instagram
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full cta-fill px-3 py-1.5 text-sm font-semibold"
          >WhatsApp · 50% off</a>
        </nav>
      </div>
    </header>
  );
}

function WorksCarousel() {
  const [index, setIndex] = useState(0);
  const n = works.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n]);

  const prev = (index - 1 + n) % n;
  const next = (index + 1) % n;

  return (
    <div className="relative mx-auto max-w-6xl px-5 md:px-8">
      <div className="relative flex h-[420px] items-center justify-center md:h-[520px]">
        {[prev, index, next].map((i, pos) => {
          const w = works[i];
          const isCenter = pos === 1;
          const offset = pos === 0 ? -1 : pos === 2 ? 1 : 0;
          return (
            <motion.article
              key={`${w.label}-${i}-${pos}`}
              className="absolute w-[78%] max-w-xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-2xl md:w-[55%]"
              style={{ zIndex: isCenter ? 3 : 1 }}
              animate={{
                x: offset * 280,
                scale: isCenter ? 1 : 0.78,
                opacity: isCenter ? 1 : 0.45,
                filter: isCenter ? "blur(0px)" : "blur(6px)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <div className="relative aspect-[16/11]">
                {w.kind === "video" ? (
                  <AutoplayVideo src={w.src} className="video-cover" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={w.src}
                    alt={w.label}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-5 md:p-6">
                  <h3 className="font-display text-2xl text-white md:text-3xl">
                    {w.label}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">
                    {w.copy}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}

        <button
          type="button"
          aria-label="Previous work"
          onClick={() => setIndex((i) => (i - 1 + n) % n)}
          className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur md:left-2"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next work"
          onClick={() => setIndex((i) => (i + 1) % n)}
          className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur md:right-2"
        >
          ›
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {works.map((w, i) => (
          <button
            key={w.label}
            type="button"
            aria-label={w.label}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function OarcLandingClient() {
  return (
    <div className="bg-white text-black">
      {/* HERO — light grid + oversized type + filmstrip (Raylabs bone) */}
      <section
        id="about"
        className="relative min-h-[100svh] overflow-hidden bg-[#f7f7f8]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#c9b8ff]/55 via-[#d9ceff]/25 to-transparent" />
        <RayNav />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-28 md:px-8">
          <div className="relative w-full">
            <h1 className="relative z-10 text-center font-display text-[clamp(3.2rem,14vw,9.5rem)] leading-[0.82] tracking-[-0.05em] text-black">
              OARC
              <br />
              DIGITAL
            </h1>

            {/* Filmstrip orbit */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[140%] max-w-none -translate-x-1/2 -translate-y-[42%]"
              style={{
                transform:
                  "translate(-50%, -42%) rotate(-18deg) perspective(900px) rotateY(-8deg)",
              }}
            >
              <div className="flex w-max gap-2 rounded-sm bg-black px-2 py-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                {filmFrames.map((frame, i) => (
                  <div
                    key={i}
                    className="relative h-[110px] w-[78px] shrink-0 overflow-hidden rounded-[2px] border border-white/20 md:h-[150px] md:w-[108px]"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)",
                    }}
                  >
                    <span className="absolute left-0.5 top-1 h-1.5 w-1.5 rounded-[1px] bg-white/70" />
                    <span className="absolute bottom-1 left-0.5 h-1.5 w-1.5 rounded-[1px] bg-white/70" />
                    <span className="absolute right-0.5 top-1 h-1.5 w-1.5 rounded-[1px] bg-white/70" />
                    <span className="absolute right-0.5 bottom-1 h-1.5 w-1.5 rounded-[1px] bg-white/70" />
                    <FrameMedia frame={frame} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative z-30 mt-28 max-w-xl text-center text-base leading-relaxed text-black/70 md:mt-36 md:text-lg"
          >
            OARC Digital is Malta&apos;s Creative + AI systems agency in
            Birkirkara — film-led creative, paid growth, SEO/AEO, and
            automation under one roof. Owners get month-to-month work and
            WhatsApp-speed decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="relative z-30 mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full cta-fill px-5 py-3 text-sm font-semibold"
            >
              {CTA_CLAIM}
            </a>
            <a
              href="#works"
              className="rounded-full border border-black/20 bg-white/70 px-5 py-3 text-sm font-semibold text-black backdrop-blur"
            >
              View works
            </a>
            <Link
              href={CONTACT}
              className="rounded-full border border-black/20 bg-white/70 px-5 py-3 text-sm font-semibold text-black backdrop-blur"
            >
              Contact
            </Link>
          </motion.div>
          <p className="relative z-30 mt-4 text-center text-sm text-black/55">
            Shift Happens · 50% off for the next clients who contact now.
          </p>
          <p className="scroll-cue relative z-30 mt-14 text-xs uppercase tracking-[0.3em] text-black/40">
            Scroll
          </p>
        </div>
      </section>

      {/* WORKS — purple → black cinematic carousel */}
      <section
        id="works"
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, #7a50ea 0%, #5b35c7 28%, #2a1a55 62%, #0a0a0a 100%)",
        }}
      >
        <h2 className="mb-10 text-center font-display text-[clamp(3.5rem,12vw,8rem)] leading-none tracking-[-0.04em] text-white/90 md:mb-14">
          <span className="bg-gradient-to-b from-white/95 via-[#d7c8ff] to-[#8f6dff]/40 bg-clip-text text-transparent">
            WORKS
          </span>
        </h2>
        <WorksCarousel />
        <p className="mx-auto mt-12 max-w-2xl px-5 text-center text-sm text-white/55 md:text-base">
          Atmosphere · On Set · Editorial · Automotive · Architecture · Product —
          original photography and video from the Raylabs media bone.
        </p>
      </section>

      {/* Proof */}
      <section className="border-y border-white/10 bg-[#0f0f0f] text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-20">
          <p className="font-display text-3xl leading-tight md:text-5xl">
            Built for brands that refuse to blend in.
          </p>
        </div>
      </section>

      {/* THE IMPACT */}
      <MotionSection
        id="testimonials"
        className="bg-[#0f0f0f] px-5 py-20 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9e9e9e]">
            The Impact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Don&apos;t just take our word for it. Proof from founders and brand
            leads.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-white/8 bg-[#1c1c1c] p-6"
              >
                <blockquote className="text-base leading-relaxed text-neutral-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-display text-sm">{t.name}</p>
                  <p className="text-xs text-[#9e9e9e]">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Brands */}
      <section className="overflow-hidden border-y border-white/10 bg-[#0f0f0f] py-8 text-white">
        <div className="marquee-track gap-12 px-6 text-sm uppercase tracking-[0.35em] text-white/35">
          {[...brands, ...brands].map((b, i) => (
            <span key={`${b}-${i}`} className="whitespace-nowrap">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Photo density strip */}
      <section className="bg-[#0f0f0f] px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            "/media/images/raylabs/9SazqeFTnXrYVlCuTm8R7IBsboUb488.jpg",
            "/media/images/raylabs/TzeaSwa5EkKAeTbPBK1xmaVVs4ecb.jpg",
            "/media/images/raylabs/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg",
            "/media/images/raylabs/ZLi4wCHZ0oJ9yB9iydu1JWCM7Pgda7d.jpg",
          ].map((src) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#1c1c1c]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="bg-[#0f0f0f] px-5 py-10 text-white md:px-8">
        <div className="mx-auto max-w-6xl">
          <ShiftHappensBand waHref={WA} tone="dark" />
          <div className="mt-6">
            <MoneyLinks tone="dark" />
          </div>
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection
        id="faq"
        className="bg-[#0f0f0f] px-5 py-20 text-white md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9e9e9e]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Got questions? Here is everything you need to know about how we
            work.
          </h2>
          <div className="mt-10">
            <FaqAccordion items={faqs} tone="dark" />
          </div>
        </div>
      </MotionSection>

      {/* Let's Talk */}
      <section className="bg-[#0f0f0f] px-5 pb-10 text-white md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#1c1c1c]">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <AutoplayVideo
                src="/media/videos/raylabs-editorial.mp4"
                className="video-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">
                Let&apos;s talk 👋
              </h2>
              <p className="mt-4 text-neutral-400">
                Whether you need a complete rebrand, a campaign film, or AI
                operators wired to your CRM — we&apos;re here.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full cta-fill px-5 py-3 text-sm font-semibold"
                >{CTA_CLAIM}</a>
                <Link
                  href="https://oarcdigital.com/contact"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold"
                >
                  Contact form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyExitBand waHref={WA} tone="dark" />

      <FooterCta
        waHref={WA}
        title="Let's build the next chapter."
        subtitle="OARC Digital · Birkirkara, Malta · Creative + AI systems. Shift Happens 50% off for next clients."
      />
    </div>
  );
}
