"use client";

/**
 * Hero — the Monolith centerpiece.
 *
 * Editorial serif headline (Instrument Serif) over a deep-charcoal room.
 * The same logo-mark that shattered the screen in Beat 00 stands here as a
 * WebGL sculpture (MonolithScene) and transmutes its material when the
 * CREATE / DEPLOY / BUILD tabs are hovered; clicking dives the camera into
 * the material as the transition into that vertical's page.
 *
 * SEO / performance contract:
 * - Every word of hero text is real SSR HTML from millisecond zero.
 * - The word-by-word reveal only *moves* text (transform/opacity) and is
 *   triggered by the intro's `oarc:shatter` event (3.8s failsafe).
 * - The WebGL scene is dynamic-imported, desktop-only, and skipped for
 *   prefers-reduced-motion and the fps governor's "static" tier — those
 *   paths get the floating logo-mark composition instead.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { Palette, Bot, Code2, CheckCircle2 } from "lucide-react";
import FloatingChipCarousel from "./FloatingChipCarousel";
import {
  getQualityTier,
  onQualityTierChange,
} from "@/lib/motion/fpsGovernor";
import type { Vertical } from "./motion/monolith/MonolithScene";

const MonolithScene = dynamic(() => import("./motion/monolith/MonolithScene"), {
  ssr: false,
});

const MARK_SRC = "/attached_assets/image_1767660951950.png";

// ── Copy ─────────────────────────────────────────────────────────────────────
const EYEBROW = "CREATIVE · AI AGENTS · CUSTOM SOFTWARE";
// One italic serif accent word — the emotional beat of the line.
const HEADLINE_WORDS: { text: string; accent?: boolean }[] = [
  { text: "AI-Native", accent: true },
  { text: "Marketing" },
  { text: "Agency" },
];
const SUBLINE =
  "Creative content that ranks where customers search. An army of AI agents working 24/7 · Custom software · A sales team — one agency behind your growth.";

const TRUST_BADGES = [
  "30% ROI Guaranteed",
  "Trusted by 47+ Brands",
];

// ── Tabs — the verbs; the pages carry the nouns ──────────────────────────────
const TABS: {
  verb: string;
  noun: string;
  href: string;
  vertical: Exclude<Vertical, "idle">;
  icon: typeof Palette;
  testId: string;
}[] = [
  { verb: "CREATE", noun: "OARC Studio", href: "/creative", vertical: "create", icon: Palette, testId: "button-nav-creative" },
  { verb: "DEPLOY", noun: "OARC Agents", href: "/ai-agents", vertical: "deploy", icon: Bot, testId: "button-nav-ai" },
  { verb: "BUILD", noun: "OARC Systems", href: "/solutions", vertical: "build", icon: Code2, testId: "button-nav-growth" },
];

// Room light-temperature tints per vertical (opacity-animated overlays)
const TINTS: Record<Exclude<Vertical, "idle">, string> = {
  create: "radial-gradient(ellipse 90% 70% at 65% 35%, rgba(255,138,76,0.14), transparent 65%)",
  deploy: "radial-gradient(ellipse 90% 70% at 65% 35%, rgba(96,156,255,0.14), transparent 65%)",
  build: "radial-gradient(ellipse 90% 70% at 65% 35%, rgba(214,228,255,0.12), transparent 65%)",
};

const MOBILE_GLOW: Record<Exclude<Vertical, "idle">, string> = {
  create: "drop-shadow(0 0 46px rgba(255,138,76,0.35))",
  deploy: "drop-shadow(0 0 46px rgba(96,156,255,0.35))",
  build: "drop-shadow(0 0 46px rgba(214,228,255,0.3))",
};

const VERTICAL_CYCLE: Exclude<Vertical, "idle">[] = ["create", "deploy", "build"];

export default function HeroSection() {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);
  const [vertical, setVertical] = useState<Vertical>("idle");
  const [diving, setDiving] = useState(false);
  const [sceneEnabled, setSceneEnabled] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const divingRef = useRef(false);

  // Decide whether the live WebGL Monolith runs: desktop, motion allowed,
  // and the fps governor hasn't floored out to "static".
  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compute = () =>
      setSceneEnabled(md.matches && !rm.matches && getQualityTier() !== "static");
    compute();
    md.addEventListener("change", compute);
    rm.addEventListener("change", compute);
    const unsub = onQualityTierChange(compute);
    return () => {
      md.removeEventListener("change", compute);
      rm.removeEventListener("change", compute);
      unsub();
    };
  }, []);

  // Word-by-word headline reveal, choreographed off the intro's shatter.
  // Text is SSR'd fully visible; we only hide it *after* hydration (the
  // opaque intro overlay is covering the hero at that moment), so crawlers
  // and reduced-motion users always see complete text.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = root.querySelectorAll<HTMLElement>("[data-hero-word]");
    const rest = root.querySelectorAll<HTMLElement>("[data-hero-fade]");
    if (!words.length) return;

    gsap.set(words, { yPercent: 112 });
    gsap.set(rest, { autoAlpha: 0, y: 14 });

    let revealed = false;
    let tl: gsap.core.Timeline | null = null;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(words, { yPercent: 0, duration: 0.9, stagger: 0.055 }, 0.05)
        .to(rest, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, 0.55);
    };

    window.addEventListener("oarc:shatter", reveal);
    // Failsafe — if the intro never fires (blocked, errored), the hero must
    // still land complete.
    const failsafe = window.setTimeout(reveal, 3800);

    return () => {
      window.removeEventListener("oarc:shatter", reveal);
      window.clearTimeout(failsafe);
      tl?.kill();
      gsap.set(words, { clearProps: "all" });
      gsap.set(rest, { clearProps: "all" });
    };
  }, []);

  // The click = the transition. With the live scene running, the camera
  // dives into the material while the room fades to charcoal, then we route.
  const dive = useCallback(
    (e: React.MouseEvent, href: string) => {
      if (!sceneEnabled || sceneFailed || divingRef.current) return; // plain <Link> navigation
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      divingRef.current = true;
      setDiving(true);
      window.setTimeout(() => router.push(href), 520);
    },
    [sceneEnabled, sceneFailed, router],
  );

  // Mobile fallback: tapping the mark cycles the room's light temperature.
  const cycleVertical = useCallback(() => {
    setVertical((v) => {
      const idx = v === "idle" ? -1 : VERTICAL_CYCLE.indexOf(v as Exclude<Vertical, "idle">);
      return VERTICAL_CYCLE[(idx + 1) % VERTICAL_CYCLE.length];
    });
  }, []);

  const liveScene = sceneEnabled && !sceneFailed;

  const styles = `
    @keyframes monolithFloat {
      0%, 100% { transform: translateY(0) rotate(-2deg); }
      50% { transform: translateY(-16px) rotate(2deg); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section
        ref={rootRef}
        className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: "#0b0b0d" }}
      >
        {/* ── The room — deep charcoal, one soft volumetric light ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 68% 20%, rgba(208,218,238,0.10), transparent 60%), radial-gradient(ellipse 120% 90% at 50% 115%, rgba(10,12,16,0.9), transparent 55%)",
          }}
        />
        {/* Volumetric cone from the key light */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "conic-gradient(from 200deg at 72% -8%, transparent 40%, rgba(198,210,232,0.05) 47%, rgba(198,210,232,0.09) 50%, rgba(198,210,232,0.05) 53%, transparent 60%)",
          }}
        />
        {/* Light-temperature shift per vertical — opacity-only crossfade */}
        {VERTICAL_CYCLE.map((v) => (
          <div
            key={v}
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{ background: TINTS[v], opacity: vertical === v ? 1 : 0 }}
          />
        ))}

        {/* ── The Monolith — live WebGL on desktop ── */}
        {liveScene && (
          <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
            <MonolithScene
              vertical={vertical}
              diving={diving}
              onContextFail={() => setSceneFailed(true)}
            />
          </div>
        )}

        {/* ── Fallback sculpture — mobile / reduced-motion / static tier.
               SSR'd so the composition is present at first paint; hidden on
               desktop once the live scene takes over. ── */}
        <div
          className={`absolute inset-0 z-[1] flex items-start md:items-center justify-center md:justify-end pointer-events-none ${liveScene ? "md:hidden" : ""}`}
          aria-hidden="true"
        >
          <button
            type="button"
            tabIndex={-1}
            onClick={cycleVertical}
            className="pointer-events-auto mt-[14vh] md:mt-0 md:mr-[9vw] cursor-default"
            data-testid="button-monolith-fallback"
            aria-label="Shift the hero light"
          >
            <img
              src={MARK_SRC}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1024}
              decoding="async"
              className="w-[44vw] max-w-[230px] md:w-[26vw] md:max-w-[380px] h-auto select-none motion-reduce:animate-none"
              style={{
                animation: "monolithFloat 7s ease-in-out infinite",
                filter:
                  vertical === "idle"
                    ? "drop-shadow(0 24px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(198,210,232,0.12))"
                    : `drop-shadow(0 24px 60px rgba(0,0,0,0.6)) ${MOBILE_GLOW[vertical as Exclude<Vertical, "idle">]}`,
                transition: "filter 700ms ease",
              }}
              draggable={false}
            />
          </button>
        </div>

        {/* ── Content — real HTML from ms 0 ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pt-14 md:pt-16 lg:pt-20 pb-6">
          <div className="w-full px-4 md:pl-8 lg:pl-12 md:pr-0">
            <div className="w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-center md:text-left">
              {/* Eyebrow — spaced small caps */}
              <p
                className="mb-4 md:mb-6 text-[11px] md:text-[13px] font-semibold text-white/60 uppercase"
                style={{
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.08em",
                }}
                data-hero-fade
                data-testid="text-hero-eyebrow"
              >
                {EYEBROW}
              </p>

              {/* Headline — high-contrast editorial serif */}
              <h1
                className="mb-5 md:mb-7 text-white"
                style={{
                  fontFamily: "var(--font-editorial)",
                  fontSize: "clamp(44px, 7vw, 108px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.022em",
                  fontWeight: 400,
                }}
                data-testid="text-hero-headline"
                data-speakable
              >
                {HEADLINE_WORDS.map((w, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom"
                    style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
                  >
                    <span data-hero-word className="inline-block will-change-transform">
                      {w.accent ? (
                        <em className="italic" style={{ color: "#e8ffb0" }}>
                          {w.text}
                        </em>
                      ) : (
                        w.text
                      )}
                    </span>
                    {i < HEADLINE_WORDS.length - 1 ? "\u00A0" : ""}
                  </span>
                ))}
              </h1>

              {/* Subline */}
              <p
                className="max-w-xl md:max-w-2xl mx-auto md:mx-0 mb-7 md:mb-9 text-[15px] md:text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-white/70"
                style={{ fontFamily: "var(--font-sans)" }}
                data-hero-fade
                data-testid="text-hero-subheadline"
                data-speakable
              >
                {SUBLINE}
              </p>

              {/* Trust badges */}
              <div
                className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-6 md:mb-8"
                data-hero-fade
                data-testid="text-hero-trust"
              >
                {TRUST_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 text-[13px] md:text-sm font-medium text-white/80"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#c4ff4d" }} />
                    {badge}
                  </span>
                ))}
              </div>

              {/* The three verbs — hovering transmutes the Monolith */}
              <div
                className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
                data-hero-fade
              >
                {TABS.map((tab) => (
                  <Link
                    key={tab.verb}
                    href={tab.href}
                    onMouseEnter={() => setVertical(tab.vertical)}
                    onMouseLeave={() => setVertical("idle")}
                    onFocus={() => setVertical(tab.vertical)}
                    onBlur={() => setVertical("idle")}
                    onClick={(e) => dive(e, tab.href)}
                    className="group flex items-center gap-3 px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/20 hover:bg-white/[0.14] hover:border-white/40 transition-colors duration-300"
                    data-testid={tab.testId}
                  >
                    <tab.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                    <span className="text-left">
                      <span
                        className="block text-sm md:text-base font-bold text-white"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        {tab.verb}
                      </span>
                      <span className="block text-[10px] md:text-[11px] text-white/50 tracking-wide">
                        {tab.noun}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel with green wave — kept from the previous hero */}
          <div className="w-full mt-8 md:mt-5 relative">
            <FloatingChipCarousel />
            <div className="absolute -bottom-8 md:-bottom-16 left-0 right-0 pointer-events-none">
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

        {/* Dive-to-charcoal veil — covers the route change */}
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[60] transition-opacity duration-500 ${diving ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          style={{ backgroundColor: "#0b0b0d" }}
          data-testid="overlay-hero-dive"
        />
      </section>
    </>
  );
}
