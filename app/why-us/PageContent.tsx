"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { buildOrganization, buildPerson, buildFAQ } from "@/lib/schema";
import { NAP } from "@/lib/seo/nap";
import { ORG_FOUNDING_DATE } from "@/lib/seo/organizationSchema";

/* ─── constants ─────────────────────────────────────────────────────────── */

const PAGE_URL = "https://oarcdigital.com/why-us";
const TITLE    = "Who We Are | Our Founding Story | OARC Digital Malta";

const GREEN   = "#22c55e";   // OARC green — replaces orange throughout
const GREEN_DIM = "rgba(34,197,94,0.08)";

const heroImage      = "/attached_assets/hf_20260420_065011_d9310ea4-689e-4251-a67b-14bfb035b894_1779878403927.png";
const teamImage      = "/attached_assets/global-influencer-marketing-agency-socially-powerful_1763244062764.jpg";
const maltaImage     = "/attached_assets/pexels-pham-ngoc-anh-170983008-14237665_1763244193737.jpg";
const workspaceImage = "/attached_assets/campaign-img1_1763245285586.png";

const CAROUSEL_IMAGES = [
  "/attached_assets/image_1763243239681.png",
  "/attached_assets/Biolage-influencer-marketing-agency-socially-powerful_1763243258630.jpg",
  "/attached_assets/it-cosmetics-socially-powerful-marketing-agency-1_1763243258630.png",
  "/attached_assets/stock_images/modern_marketing_age_2cb6d515.jpg",
  "/attached_assets/joshua-rondeau-7mHMwHbJ_0o-unsplash-scaled-e1690895515404_1763243258631.jpg",
  "/attached_assets/Screenshot-2023-08-01-at-16.06.24_1763243258631.png",
  "/attached_assets/stock_images/modern_marketing_age_0c16bbf6.jpg",
];

/* ─── SEO schemas ────────────────────────────────────────────────────────── */

const whyUsImageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "OARC Digital — the future of Malta island businesses is being built by the fastest ones, not the biggest",
  description: "OARC Digital AI-native studio: born in the AI era, building Malta's fastest-moving businesses with creative, AI engineering, and growth automation under one roof.",
  url: `https://oarcdigital.com${heroImage}`,
  width: 1080,
  height: 1350,
  contentUrl: `https://oarcdigital.com${heroImage}`,
};

const FOUNDER_FAQS: { question: string; answer: string }[] = [
  {
    question: "Who founded OARC Digital and when?",
    answer: "OARC Digital was founded in 2023 by Sahan Reddy, after a decade of running creative, engineering, and growth teams across Asia and the European Union. The studio was set up in Birkirkara, Malta, to put three disciplines that Maltese businesses usually have to source separately — creative, AI engineering, and growth automation — under one roof.",
  },
  {
    question: "Where is OARC Digital based?",
    answer: "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. The studio is a five-minute drive from Mriehel, ten from Mosta, and twenty from Valletta or Sliema. Local clients are welcome to drop in for a Friday review.",
  },
  {
    question: "What does OARC stand for?",
    answer: "Optimised, AI, Revenue, Creative. Each letter is a working principle, not a tagline. Optimised means we engineer for output per hour. AI is a real capability, not a sticker. Revenue is the metric we report against. Creative is the surface that has to earn attention before any spend.",
  },
  {
    question: "What is the mission of OARC Digital?",
    answer: "To be the Malta studio that a serious operator can hand the entire growth stack to — brand, performance, AI agents, automation — without stitching together three vendors, four account managers, and a quarterly review cadence. The goal is weekly output and weekly revenue impact.",
  },
];

const PILLARS = [
  { letter: "O", title: "Optimised",  body: "Zero bloat. Zero waste. Every workflow and campaign is engineered for maximum output with minimum friction. If a step does not serve the revenue number, it gets cut." },
  { letter: "A", title: "AI",         body: "Not a gimmick. A genuine capability — AI agents in production handling live SDR outreach, support triage, appointment booking, and analytics, tuned for the Maltese market." },
  { letter: "R", title: "Revenue",    body: "The metric that matters. Every strategy ties directly back to your bottom line. Brand work, paid media, automation — every surface connects to a measurable outcome." },
  { letter: "C", title: "Creative",   body: "Organic-first, paid to amplify. Creative has to earn attention before a single euro is spent boosting it. We build the brand work that makes the performance work pay." },
];

const ANTI_PATTERNS = [
  { n: "01", title: "The account manager layer",         body: "Most agencies put an account manager between the client and the people doing the work. They add days to every feedback loop and cost €30–50k a year in overhead the client pays invisibly. At OARC, the pod that writes the strategy runs the account." },
  { n: "02", title: "The quarterly review cadence",      body: "Quarterly meetings mean four chances per year to course-correct. OARC reviews weekly with live data — one hour, live numbers, decisions for the following week. Quarterly reviews are what you do when you do not have weekly data." },
  { n: "03", title: "The strategy deck with no output",  body: "Strategy is cheap. Output is expensive. Most engagements begin with a ten-week discovery phase that produces a hundred-slide deck and zero content. OARC ships in week one." },
  { n: "04", title: "The vanity metric report",          body: "Impressions and follower counts look good in a report and say nothing about revenue. The OARC weekly report covers leads generated, cost per qualified lead, and revenue attributed to campaigns this week." },
  { n: "05", title: "The contract that outlasts results", body: "Most agency contracts run twelve months minimum. OARC runs month-to-month across every engagement. That structure forces us to earn the renewal every four weeks." },
];

/* ─── sub-components ─────────────────────────────────────────────────────── */

function SilkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lines = 28;
      for (let i = 0; i < lines; i++) {
        const progress = i / lines;
        const alpha    = 0.025 + progress * 0.045;
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            Math.sin(x * 0.004 + t + i * 0.6) * 45 +
            Math.sin(x * 0.002 + t * 0.7 + i * 0.35) * 28 +
            canvas.height * (i / lines) * 0.95 +
            canvas.height * 0.025;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
        ctx.lineWidth   = 1.2;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setVis(true), delay); },
      { threshold: 0.08 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

function CircleCTA({ href, label, testId }: { href: string; label: string; testId: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 group"
      data-testid={testId}
    >
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{label}</span>
      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
        <ArrowUpRight className="w-4 h-4 text-black" />
      </span>
    </Link>
  );
}

/* ─── main component ─────────────────────────────────────────────────────── */

export default function PageContent() {
  const carouselRef  = useRef<HTMLDivElement>(null);
  const orgSchema    = buildOrganization();
  const personSchema = buildPerson();
  const faqSchema    = buildFAQ(FOUNDER_FAQS, true);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: PAGE_URL,
    name: TITLE,
    description: "The founding story, principles, and mission of OARC Digital — a Birkirkara, Malta studio founded in 2023 by Sahan Reddy.",
    about: {
      "@type": "Organization",
      name: "OARC Digital",
      url: "https://oarcdigital.com",
      founder: {
        "@type": "Person",
        name: "Sahan Reddy",
        jobTitle: "Founder & Creative Director",
        worksFor: { "@type": "Organization", name: "OARC Digital" },
      },
    },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
  };

  /* carousel auto-scroll */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
      else el.scrollLeft += 1;
    }, 18);
    return () => clearInterval(id);
  }, []);

  const duoCarousel = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <Layout>
      {/* ── keyframes (inline so we don't need a global file edit) ── */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track { animation: marqueeScroll 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [orgSchema, personSchema] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsImageObjectSchema) }} />

      {/* ════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════ */}
      <section className="relative bg-black overflow-hidden text-white min-h-screen flex flex-col" data-testid="section-hero">
        {/* animated silk layer */}
        <SilkCanvas />

        {/* mobile image — stacked above text */}
        <div className="md:hidden relative w-full flex-shrink-0" data-testid="section-hero-mobile-image">
          <img
            src={heroImage}
            alt="OARC Digital — the future of Malta island businesses is being built right now, not by the biggest companies, by the fastest ones"
            width={1080}
            height={1350}
            className="w-full object-cover object-top"
            style={{ maxHeight: "65vw" }}
            fetchPriority="high"
            data-testid="img-hero-mobile"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
        </div>

        {/* desktop split */}
        <div className="flex flex-1 flex-col md:flex-row items-center relative z-10">
          {/* left — text */}
          <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-32 max-w-3xl">
            <p
              className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-10"
              style={{ color: GREEN }}
              data-testid="text-eyebrow"
            >
              Born in the AI Era
            </p>
            <h1
              className="font-thin text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] text-white mb-10 tracking-tight"
              data-speakable
              data-testid="heading-hero"
            >
              Born in<br />
              <em className="not-italic" style={{ color: GREEN }}>the AI</em><br />
              Era
            </h1>
            <p
              className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed mb-14"
              data-speakable
              data-testid="text-hero-subtitle"
            >
              We didn&apos;t inherit the old agency playbook.
              <br />We&apos;re writing a new one.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {/* primary — pill + circle arrow (umm.digital style) */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 group"
                data-testid="link-hero-cta"
              >
                <span
                  className="text-sm font-semibold px-6 py-3 rounded-full border transition-colors group-hover:text-black"
                  style={{ borderColor: GREEN, color: GREEN }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GREEN; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  Start the conversation
                </span>
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{ background: GREEN }}
                >
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </span>
              </Link>
              <Link
                href="/why-oarc"
                className="text-sm text-white/40 hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/20"
                data-testid="link-hero-comparison"
              >
                See the comparison
              </Link>
            </div>
          </div>

          {/* right — hero image, desktop only */}
          <div className="hidden md:flex items-center justify-end flex-shrink-0 w-[44%] h-screen pr-12 py-12 relative">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <img
              src={heroImage}
              alt="OARC Digital — the future of Malta island businesses is being built right now, not by the biggest companies, by the fastest ones"
              width={1080}
              height={1350}
              className="h-[84vh] w-auto object-cover rounded-2xl"
              style={{ boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(34,197,94,0.12)` }}
              fetchPriority="high"
              data-testid="img-hero-desktop"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. MARQUEE TICKER
      ════════════════════════════════════════════════ */}
      <div className="bg-black border-y border-white/5 py-4 overflow-hidden" data-testid="section-marquee">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-0 shrink-0">
            {Array(2).fill(null).map((_, i) => (
              <span key={i} className="flex items-center">
                {["Optimised", "AI", "Revenue", "Creative", "Malta", "Born 2023", "Birkirkara", "Weekly delivery", "No retainer lock-in", "AI agents in production"].map((t) => (
                  <span key={t} className="flex items-center">
                    <span className="text-xs font-medium tracking-widest uppercase text-white/30 px-8">{t}</span>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: GREEN }} />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          3. WE SAW A BROKEN SYSTEM
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-32 text-white" data-testid="section-origin">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: GREEN }}>
                  Chapter 01 — The gap we saw
                </p>
                <h2 className="font-thin text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] mb-10 tracking-tight" data-testid="heading-origin">
                  We Saw a<br />Broken System.
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Before OARC Digital, Sahan Reddy spent more than ten years running creative, engineering,
                  and growth teams across Asia and the EU — for hospitality groups, financial-services firms,
                  and SaaS companies that paid serious money to good agencies and still walked away frustrated.
                </p>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  The pattern repeated everywhere. Brand sat in one studio. Paid media in another. Engineering
                  in a third. Each vendor blamed the other when a launch slipped, and the client paid for all three.
                </p>
                <p className="text-white/50 text-lg leading-relaxed mb-12">
                  By 2022, AI tooling matured enough that a small team could carry the workload of a much bigger
                  one without losing quality. The thesis behind OARC Digital: one studio, three disciplines,
                  built around AI agents that handle the repeatable work so the human team can focus on
                  judgement, taste, and revenue.
                </p>
                <CircleCTA href="/about" label="Read the founding story" testId="link-origin-about" />
              </div>
              <div className="relative">
                <img
                  src={teamImage}
                  className="rounded-xl w-full object-cover"
                  style={{ height: "480px", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
                  alt="OARC Digital team — the Birkirkara studio that put creative, AI engineering, and growth automation under one roof for Malta businesses"
                  width={600}
                  height={480}
                  data-testid="img-team"
                />
                {/* small pull-quote badge */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 rounded-xl hidden md:block"
                  style={{ background: GREEN }}
                >
                  <p className="font-semibold text-black text-sm leading-snug">&ldquo;Outcomes over Hours.&rdquo;</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. O-A-R-C PILLARS
      ════════════════════════════════════════════════ */}
      <section className="py-32 text-white" style={{ background: "#050d08" }} data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase text-center mb-6" style={{ color: GREEN }}>
              What O.A.R.C. stands for
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] text-center mb-20 tracking-tight">
              Four letters, four working principles.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {PILLARS.map((p, i) => (
              <FadeIn key={p.letter} delay={i * 80}>
                <div
                  className="flex flex-col p-10 h-full"
                  style={{ background: "#050d08" }}
                  data-testid={`pillar-${p.letter}`}
                >
                  {/* big letter */}
                  <div
                    className="text-[5rem] font-black leading-none mb-6 select-none"
                    style={{ color: GREEN, opacity: 0.9 }}
                  >
                    {p.letter}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. TIMELINE / STORY BLOCKS
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-32 text-white" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-8 md:px-16 space-y-40">

          {/* Chapter 02 — Why Malta */}
          <FadeIn delay={50}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center" data-testid="milestone-malta">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: GREEN }}>
                  Chapter 02 — Why Malta
                </p>
                <h3 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-10 tracking-tight">
                  Why Malta.<br />Why Now.
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Malta is a small market with global ambition. iGaming brands competing in Brazil.
                  Financial-services firms regulated under MFSA serving clients across the EU. Hotels
                  needing discovery in twenty languages. Small island, large surface area.
                </p>
                <p className="text-white/50 text-lg leading-relaxed">
                  We picked Birkirkara — Level 1 of The Brewhouse on Mdina Road — because it sits in the
                  middle of where the operators actually are. Mriehel is five minutes. Mosta is ten.
                  St Julian&apos;s and Sliema are twenty. Local context is the hardest thing for an offshore
                  agency to fake.
                </p>
              </div>
              <div>
                <img
                  src={maltaImage}
                  alt="Malta — OARC Digital home island, a small market with global ambition for iGaming, fintech, and hospitality operators"
                  width={640}
                  height={420}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "380px", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
                  data-testid="img-malta"
                />
              </div>
            </div>
          </FadeIn>

          {/* Chapter 03 — How we work */}
          <FadeIn delay={50}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center" data-testid="milestone-approach">
              <div className="order-2 md:order-1">
                <img
                  src={workspaceImage}
                  alt="OARC Digital workspace — creative, AI engineering, and revenue strategy under one roof with no vendor handovers"
                  width={640}
                  height={420}
                  className="w-full object-cover rounded-xl"
                  style={{ height: "380px", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
                  data-testid="img-workspace"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: GREEN }}>
                  Chapter 03 — How we work
                </p>
                <h3 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-10 tracking-tight">
                  Three disciplines,<br />one room,<br />no handovers.
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Every account is run by a named pod of three: a strategist, a creative lead, and an AI
                  engineer. The pod stays with the account from kickoff through the weekly review.
                  Nobody hands the brief to a delivery team and disappears.
                </p>
                <p className="text-white/50 text-lg leading-relaxed">
                  Behind each pod sits a roster of AI agents built and tuned in-house — SDR, support
                  specialist, appointment booker, data analyst, admin agents. They take the repeatable work
                  off the pod so the humans spend their hours on strategy, taste, and direct client time.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Chapter 04 — Mission + stats */}
          <FadeIn delay={50}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start" data-testid="milestone-mission">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{ color: GREEN }}>
                  Chapter 04 — The mission
                </p>
                <h3 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-10 tracking-tight">
                  One brief, one pod,<br />one weekly review.
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-6">
                  Brand, performance, AI agents, and automation under the same roof, reporting against the
                  same revenue number. No retainer lock-in, no minimum term.
                </p>
                <p className="text-white/50 text-lg leading-relaxed mb-12">
                  The first cohort of clients from 2023 is still on the books in 2026, on the same
                  month-to-month terms they signed originally. Just a weekly review that has been worth
                  showing up to for three years running.
                </p>
                <CircleCTA href="/contact" label="Book the call" testId="link-mission-cta" />
              </div>
              <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
                {[
                  { n: "2023", label: "Studio founded in Birkirkara" },
                  { n: "7+",   label: "Malta localities served" },
                  { n: "4",    label: "Overseas markets from Malta" },
                  { n: "0",    label: "12-month contracts — ever" },
                ].map((s) => (
                  <div key={s.n} className="flex flex-col p-8" style={{ background: "#050d08" }} data-testid={`stat-${s.n}`}>
                    <span className="text-4xl font-black mb-2" style={{ color: GREEN }}>{s.n}</span>
                    <span className="text-white/40 text-xs leading-snug">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6. WHAT AGENCIES GET WRONG
      ════════════════════════════════════════════════ */}
      <section className="py-32 text-white" style={{ background: "#050d08" }} data-testid="section-agencies-wrong">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>
              Chapter 05 — The patterns we refused
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-20 tracking-tight">
              Five things most agencies<br />keep getting wrong.
            </h2>
            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {ANTI_PATTERNS.map((item) => (
                <div key={item.n} className="flex gap-10 py-10 group" data-testid={`wrong-${item.n}`}>
                  <span className="text-xs font-mono text-white/20 mt-1 shrink-0 w-8">{item.n}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/10 mt-1 shrink-0 group-hover:text-white/30 transition-colors self-start" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          7. CAMPAIGN EXCELLENCE CAROUSEL
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-32 overflow-hidden" data-testid="section-campaigns">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-8 md:px-16 mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>
              The work
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-white" data-testid="heading-campaigns">
              Campaign Excellence
            </h2>
          </div>
        </FadeIn>
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden px-8"
          data-testid="carousel-container"
        >
          {duoCarousel.map((src, i) => (
            <div
              key={i}
              className="inline-block flex-shrink-0 rounded-xl overflow-hidden"
              style={{ width: "300px", height: "380px" }}
              data-testid={`carousel-item-${i}`}
            >
              <img
                src={src}
                className="w-full h-full object-cover"
                alt="OARC Digital campaign creative work — Malta marketing agency"
                width={300}
                height={380}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          8. HARD LIMITS
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-32 text-white" data-testid="section-principles">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>
              Chapter 06 — Hard limits
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-20 tracking-tight">
              Things we will not do.
            </h2>
            <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
              {[
                { limit: "No percentage of ad spend as fee.", reason: "If the agency earns more when you spend more, the agency has an incentive to recommend more spend. Flat retainer, always." },
                { limit: "No white-label work for other agencies.", reason: "The client at the end of the chain deserves to know who is doing their work." },
                { limit: "No 12-month contracts.", reason: "Month-to-month since the first client in 2023. If the work is good, the client renews." },
                { limit: "No account managers.", reason: "They add a layer between the client and the work. Without that layer, feedback loops are faster and the work is better." },
              ].map((item, i) => (
                <div key={i} className="p-10" style={{ background: "#000" }} data-testid={`principle-${i}`}>
                  <p className="font-semibold text-white text-sm mb-3">{item.limit}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 flex items-center justify-between flex-wrap gap-8 py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-white/40 text-sm max-w-lg">
                If these principles describe a studio you want to work with, the next step is a thirty-minute
                call. No slide decks, no commitment.
              </p>
              <CircleCTA href="/contact" label="Book the thirty-minute call" testId="link-principles-cta" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          9. HOW TO START
      ════════════════════════════════════════════════ */}
      <section className="py-32 text-white" style={{ background: "#050d08" }} data-testid="section-engage">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>
              Chapter 07 — How to start
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-20 tracking-tight">
              A thirty-minute call,<br />not a twelve-slide deck.
            </h2>
            <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
              {[
                { step: "01", title: "Book the call",    body: "Thirty minutes via the contact page. No prep required — we do the pre-call research." },
                { step: "02", title: "Working session",  body: "Live data on your current presence, honest view on the gap, and what we would change first." },
                { step: "03", title: "Decision",         body: "We tell you if the fit is right. If yes, start date. If not, we say why and name who would serve you better." },
              ].map((item, i) => (
                <div key={i} className="p-10 flex flex-col gap-4" style={{ background: "#050d08" }} data-testid={`engage-step-${i}`}>
                  <span className="text-xs font-mono" style={{ color: GREEN }}>{item.step}</span>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          10. FAQ
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-32 text-white" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <FadeIn>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: GREEN }}>
              Questions from the first call
            </p>
            <h2 className="font-thin text-[clamp(2rem,4vw,3.5rem)] mb-20 tracking-tight">
              Answered directly.
            </h2>
            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {FOUNDER_FAQS.map((item, i) => (
                <div key={i} className="py-10" data-testid={`faq-item-${i}`}>
                  <h3 className="text-base font-semibold text-white mb-4">{item.question}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          11. FOUNDER QUOTE
      ════════════════════════════════════════════════ */}
      <section className="py-32 text-white" style={{ background: "#050d08" }} data-testid="section-founder-quote">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-8 md:px-16">
            <p className="font-thin text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.3] text-white/80 mb-12" data-speakable>
              &ldquo;Maltese operators are some of the fastest-moving people I have worked with anywhere.
              The studio that serves them properly cannot move at the pace of a quarterly review.
              So we built one that does not.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px" style={{ background: GREEN }} />
              <p className="text-white/30 text-sm">Mr Reddy, founder — OARC Digital</p>
            </div>
            <p className="text-white/20 text-xs mt-3">
              Studio founded {new Date(ORG_FOUNDING_DATE).getFullYear()} · {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ════════════════════════════════════════════════
          12. SERVICES
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-24 text-white" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h2 className="text-sm font-semibold text-white/30 mb-12 uppercase tracking-widest">Services that back up the claims</h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
            {[
              { label: "Creative", title: "Social Media Creative", body: "Full creative and management for platforms your customers use daily.", href: "/services/social-media-creative-management", testId: "link-service-social" },
              { label: "Organic",  title: "SEO Services",          body: "Search rankings that compound and cost nothing per click.",           href: "/services/seo-services",                            testId: "link-service-seo" },
              { label: "AI",       title: "AI Consulting",         body: "AI strategy and deployment built around your model.",                 href: "/services/ai-consulting",                           testId: "link-service-ai-consulting" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block p-10 group transition-colors"
                style={{ background: "#000" }}
                data-testid={s.testId}
              >
                <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: GREEN }}>{s.label}</p>
                <h3 className="text-base font-semibold text-white mb-3 group-hover:text-white/60 transition-colors">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          13. WHERE TO GO NEXT
      ════════════════════════════════════════════════ */}
      <section className="bg-black py-24 text-white border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }} data-testid="section-related">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h2 className="text-sm font-semibold text-white/30 mb-12 uppercase tracking-widest">Where to go next</h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
            {[
              { label: "Founder bio", title: "About the team",   body: "The minimal founder bio, principles, and how to visit the studio.", href: "/about",        testId: "link-related-about" },
              { label: "Comparison",  title: "Why choose OARC",  body: "Side-by-side comparison vs the typical Malta agency model.",        href: "/why-oarc",    testId: "link-related-comparison" },
              { label: "Proof",       title: "Case studies",     body: "Real Malta clients, real revenue numbers, real time-to-launch.",    href: "/case-studies", testId: "link-related-case-studies" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block p-10 group transition-colors"
                style={{ background: "#000" }}
                data-testid={s.testId}
              >
                <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: GREEN }}>{s.label}</p>
                <h3 className="text-base font-semibold text-white mb-3 group-hover:text-white/60 transition-colors">{s.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          14. CTA
      ════════════════════════════════════════════════ */}
      <section className="py-40 text-white" style={{ background: "#050d08" }} data-testid="section-cta">
        <FadeIn>
          <div className="max-w-5xl mx-auto px-8 md:px-16">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-10" style={{ color: GREEN }}>
              Ready to work with us?
            </p>
            <h2
              className="font-thin text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] mb-16 tracking-tight"
              data-testid="heading-cta"
            >
              Ready to Work With<br />a Team That Gets It?
            </h2>
            <div className="flex flex-wrap items-center gap-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-5 group"
                data-testid="button-cta"
              >
                <span
                  className="text-base font-semibold px-8 py-4 rounded-full border transition-all group-hover:text-black"
                  style={{ borderColor: GREEN, color: GREEN }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GREEN; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  Start your journey
                </span>
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shrink-0"
                  style={{ background: GREEN }}
                >
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </span>
              </Link>
              <p className="text-white/25 text-sm max-w-xs">
                Thirty minutes. No slide decks. We pull live data before the call.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
