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

const WA = waUrl("Comparing Malta agencies — claim Shift Happens 50% off.");

type Agency = {
  rank: number;
  name: string;
  focus: string;
  fit: string;
  note: string;
  isOarc?: boolean;
};

const agencies: Agency[] = [
  {
    rank: 1,
    name: "OARC Digital",
    focus: "Creative + AI systems",
    fit: "Owners who want film-grade creative, paid growth, and automation in one team",
    note: "Birkirkara HQ · month-to-month · WhatsApp +356 7971 1799",
    isOarc: true,
  },
  {
    rank: 2,
    name: "Full-service traditional agencies",
    focus: "Brand + above-the-line",
    fit: "Larger retainers, longer contracts, classic brand programmes",
    note: "Strong craft; often slower on AI ops and island-speed iteration",
  },
  {
    rank: 3,
    name: "Performance specialists",
    focus: "Paid media",
    fit: "Teams that already own creative and need media buying depth",
    note: "Excellent when creative is covered elsewhere — weak when ads look generic",
  },
  {
    rank: 4,
    name: "SEO / content houses",
    focus: "Organic search",
    fit: "Long-horizon content programmes and technical SEO",
    note: "Compound well; rarely own cinematic creative or sales automation",
  },
  {
    rank: 5,
    name: "Social / influencer desks",
    focus: "Community + creators",
    fit: "Lifestyle brands needing volume posting and creator coordination",
    note: "Useful layer — not a full growth system on their own",
  },
];

const solutions = [
  {
    t: "Creative production",
    d: "Film, stills, and social packs that look expensive in the first three seconds — the real reason ads convert in Malta.",
    tags: ["Brand films", "Social kits", "Launch assets", "On-set direction"],
  },
  {
    t: "Paid + organic growth",
    d: "Meta, Google, TikTok, LinkedIn and SEO/AEO under one desk. Creative testing weekly — not a six-month static plan.",
    tags: ["Paid media", "SEO / AEO", "Landing systems", "Offer framing"],
  },
  {
    t: "AI workflow systems",
    d: "Lead follow-up, CRM hygiene, reporting agents. Growth without ops is a leaky bucket.",
    tags: ["CRM", "WhatsApp agents", "Reporting", "Follow-up loops"],
  },
  {
    t: "Strategy retainers",
    d: "Month-to-month. Local presence in Birkirkara. Owners get decisions at WhatsApp speed.",
    tags: ["Discovery", "Roadmaps", "Weekly cadence", "Guarantee window"],
  },
];

const process = [
  {
    k: "01",
    t: "Discover & analyse",
    d: "We map your market, creative gaps, paid waste, and ops leaks — then lock commercial outcomes.",
  },
  {
    k: "02",
    t: "Design & build",
    d: "Creative system, media plan, and automation blueprint. You sign the logic before we scale spend.",
  },
  {
    k: "03",
    t: "Deploy & optimise",
    d: "Ship, measure, iterate weekly. Month-to-month retainer — exit when it stops earning.",
  },
];

const method = [
  {
    t: "Outcomes over slides",
    d: "Ask for revenue, booked jobs, or qualified leads — not reach screenshots.",
  },
  {
    t: "Creative ownership",
    d: "If the agency outsources every reel, you will wait on freelancers when ads die.",
  },
  {
    t: "Contract hygiene",
    d: "Prefer month-to-month or short exits. Malta owners should not be trapped.",
  },
  {
    t: "Local presence",
    d: "Can they meet in Birkirkara, Sliema, or Valletta when the work needs it?",
  },
  {
    t: "Systems literacy",
    d: "CRM, follow-up, reporting agents. Growth without ops is a leaky bucket.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Who ranks #1 on this page — and why disclose it?",
    answer:
      "OARC Digital is listed #1 because this page is published by OARC. That is an honest disclosure, not a mystery ranking. Use the method section to stress-test any agency — including us — before you hire.",
  },
  {
    question: "How should Malta owners pick a marketing agency?",
    answer:
      "Five checks: local presence, in-house creative + media, month-to-month flexibility, case studies with commercial metrics, and systems/AI literacy. OARC Digital is built around those five.",
  },
  {
    question: "What does a serious Malta retainer cost?",
    answer:
      "Expect roughly €1,500–€5,000/month for multi-channel work at established shops. Ask for a scoped quote — vanity packages without creative ownership are the expensive ones.",
  },
  {
    question: "Is this page an affiliate list?",
    answer:
      "No. Names below #1 are category descriptions, not paid placements. We give owners a decision framework and a clear path to talk to OARC.",
  },
  {
    question: "Where can I talk to OARC?",
    answer:
      "WhatsApp +356 7971 1799 (Shift Happens 50% off for the next clients who contact now), https://oarcdigital.com/contact, or Instagram @oarcdigital. Home: https://oarcdigital.com/.",
  },
  {
    question: "What is Shift Happens?",
    answer:
      "Shift Happens is OARC's current campaign: 50% off for the next clients who contact now. Soft window — when seats fill, the offer closes. No fake countdown timers.",
  },
];

const stats = [
  { n: "1 desk", l: "Creative + media + AI" },
  { n: "MT", l: "Birkirkara HQ" },
  { n: "30d", l: "Guarantee window" },
  { n: "MoM", l: "Month-to-month" },
];

export default function AgenciesClient() {
  return (
    <div className="bg-[color:var(--crovia-bg)] text-neutral-100">
      {/* Nav — Crovia rhythm + shared exits */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#090909]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href={HOME}
            className="font-display text-sm tracking-[0.18em] uppercase"
          >
            OARC Digital
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-neutral-300 md:gap-5">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#method" className="hover:text-white">
              Method
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <Link href={CONTACT} className="hover:text-white">
              Contact
            </Link>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[color:var(--oarc-accent)] px-3 py-1.5 font-medium text-black"
            >
              WhatsApp · 50% off
            </a>
          </nav>
        </div>
      </header>

      {/* HERO — video + editorial type (Crovia bone) */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <AutoplayVideo src="/media/videos/crovia-hero.mp4" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-[#090909]" />
        </div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.32em] text-white/60"
          >
            Malta · Agency guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] text-white"
          >
            Best marketing agencies in Malta — how owners should actually choose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Looking for the best marketing agencies in Malta? Start with five
            owner checks: local presence, in-house creative + media,
            month-to-month contracts, commercial case studies, and AI/ops
            literacy. This guide ranks OARC Digital #1 with honest disclosure —
            then shows how to stress-test any shop before you hire.
          </motion.p>
          <p className="mt-4 max-w-xl text-sm text-white/55">
            Shift Happens · 50% off for the next clients who contact now. Soft
            window — when seats fill, the offer closes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[color:var(--oarc-accent)] px-5 py-3 text-sm font-semibold text-black"
            >
              {CTA_CLAIM}
            </a>
            <Link
              href={CONTACT}
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white"
            >
              Contact
            </Link>
            <a
              href="#method"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white"
            >
              See the method
            </a>
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
              Explore OARC
            </p>
            <MoneyLinks tone="dark" />
            <p className="mt-3 text-sm text-white/50">
              Or visit{" "}
              <a href={HOME} className="underline underline-offset-2">
                oarcdigital.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Legacy / proof strip */}
      <MotionSection
        id="about"
        className="border-b border-white/10 bg-[#151515] px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--crovia-muted)]">
                Our Legacy
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Built for Malta owners who need more than a social calendar
              </h2>
              <p className="mt-4 max-w-xl text-neutral-400">
                We have built our reputation delivering intelligent creative and
                AI-driven systems that help businesses grow, automate, and scale
                with confidence — from Birkirkara.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-white">
                <span>Valletta</span>
                <span className="text-white/20">|</span>
                <span>Sliema</span>
                <span className="text-white/20">|</span>
                <span>Birkirkara</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5"
                >
                  <p className="font-display text-2xl text-[color:var(--crovia-orange)]">
                    {s.n}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Solutions we deliver */}
      <MotionSection
        id="services"
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--crovia-muted)]">
            Solutions we deliver
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            What a serious Malta agency should own
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.t}
              className="rounded-2xl border border-white/10 bg-[#151515] p-6 md:p-8"
            >
              <h3 className="font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-neutral-400">{s.d}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Mid video editorial band */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10">
          <div className="relative aspect-[21/9] min-h-[220px]">
            <AutoplayVideo
              src="/media/videos/crovia-mid.mp4"
              className="video-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <p className="max-w-lg font-display text-2xl text-white md:text-3xl">
                Transforming complex marketing ops into intelligent,
                measurable growth systems.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Process */}
      <MotionSection className="border-y border-white/10 bg-[#151515] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl font-display text-3xl md:text-4xl">
            How we turn agency selection into a commercial decision
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {process.map((p) => (
              <div
                key={p.k}
                className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6"
              >
                <p className="text-sm text-[color:var(--crovia-orange)]">
                  {p.k}
                </p>
                <h3 className="mt-3 font-display text-xl">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Mid exit — Shift Happens */}
      <MotionSection className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <ShiftHappensBand waHref={WA} tone="dark" />
      </MotionSection>

      {/* Ranking table + method */}
      <MotionSection
        id="method"
        className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--crovia-muted)]">
              Comparison
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Agency landscape — with disclosure
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-400">
            #1 is OARC because we publish this page. Categories below are
            archetypes, not paid placements.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="hidden grid-cols-12 gap-3 border-b border-white/10 bg-[#151515] px-5 py-3 text-xs uppercase tracking-wider text-neutral-500 md:grid">
            <span className="col-span-1">#</span>
            <span className="col-span-3">Agency</span>
            <span className="col-span-2">Focus</span>
            <span className="col-span-3">Best fit</span>
            <span className="col-span-3">Note</span>
          </div>
          {agencies.map((a) => (
            <div
              key={a.rank}
              className={`grid gap-2 border-b border-white/10 px-5 py-5 last:border-0 md:grid-cols-12 md:items-start md:gap-3 ${
                a.isOarc ? "bg-[#1a120e]" : "bg-[#0f0f0f]"
              }`}
            >
              <span className="font-display text-[color:var(--crovia-orange)] md:col-span-1">
                {String(a.rank).padStart(2, "0")}
              </span>
              <div className="md:col-span-3">
                <p className="font-display text-lg">{a.name}</p>
                {a.isOarc ? (
                  <p className="mt-1 text-xs text-[color:var(--crovia-orange)]">
                    Publisher · disclosed
                  </p>
                ) : null}
              </div>
              <p className="text-sm text-neutral-300 md:col-span-2">{a.focus}</p>
              <p className="text-sm text-neutral-400 md:col-span-3">{a.fit}</p>
              <p className="text-sm text-neutral-500 md:col-span-3">{a.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl md:text-3xl">
            Stress-test any agency — including us
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {method.map((m) => (
              <div
                key={m.t}
                className="rounded-2xl border border-white/10 bg-[#151515] p-5"
              >
                <h4 className="font-display text-lg">{m.t}</h4>
                <p className="mt-2 text-sm text-neutral-400">{m.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial stills */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            "/media/images/crovia/eWBiyjyz96d6XPbVZcOmxlXUMng.jpg",
            "/media/images/crovia/SpNqEMH1K1n8XMz5NzsfvDjRQ.jpg",
            "/media/images/crovia/PMlrGKD7pDDlAProCYey0DfM.jpg",
            "/media/images/crovia/EewpaMj6jTxRrekNfaRSMULlgbI.jpg",
          ].map((src) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#151515]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection
        id="faq"
        className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--crovia-muted)]">
          FAQ
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">
          Common questions from Malta buyers
        </h2>
        <div className="mt-10">
          <FaqAccordion items={faqs} tone="dark" />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--oarc-accent)] px-5 py-3 text-sm font-semibold text-black"
          >
            {CTA_WA}
          </a>
          <Link
            href={CONTACT}
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold"
          >
            Contact
          </Link>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold"
          >
            Instagram
          </a>
        </div>
      </MotionSection>

      {/* Let's Talk */}
      <MotionSection id="talk" className="px-5 pb-10 md:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10">
          <div className="absolute inset-0">
            <AutoplayVideo
              src="/media/videos/crovia-wide.mp4"
              className="video-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative px-6 py-16 md:px-12 md:py-20">
            <h2 className="max-w-2xl font-display text-3xl md:text-5xl">
              Let&apos;s build your next growth system
            </h2>
            <p className="mt-4 max-w-xl text-neutral-300">
              Compare agencies with the method above — then talk to OARC if the
              fit is creative + media + AI under one roof.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Shift Happens · 50% off for the next clients who contact now ·{" "}
              {PHONE_DISPLAY}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[color:var(--oarc-accent)] px-5 py-3 text-sm font-semibold text-black"
              >
                {CTA_CLAIM}
              </a>
              <Link
                href={CONTACT}
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold"
              >
                Contact
              </Link>
              <a href={HOME} className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold">
                Home
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <StickyExitBand waHref={WA} tone="dark" />

      <FooterCta
        waHref={WA}
        title="Ready when you are."
        subtitle="OARC Digital · Birkirkara, Malta · Creative + AI systems. Shift Happens 50% off for next clients."
      />
    </div>
  );
}
