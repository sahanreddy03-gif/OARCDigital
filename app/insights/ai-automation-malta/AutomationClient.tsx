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
  TopNav,
  waUrl,
} from "@/components/SiteChrome";
import { motion } from "framer-motion";
import Link from "next/link";

const WA = waUrl("AI automation in Malta — claim Shift Happens 50% off.");

const IMG = "/media/images/conicorn";

const caps = [
  { src: `${IMG}/69ad5041e18e0a6c61dd1a65_Cap1.png`, t: "Hours saved" },
  { src: `${IMG}/69ad5041ea93e995c9064911_Cap2.png`, t: "Faster follow-up" },
  { src: `${IMG}/69ad504197f79fd83b9978e2_Cap3.png`, t: "Cleaner CRM" },
  { src: `${IMG}/69ad5041e96214864aa8b126_Cap4.png`, t: "Live reporting" },
  { src: `${IMG}/69ad5041cad745cd865620d1_Cap5.png`, t: "Booked jobs" },
];

const services = [
  {
    t: "AI workflow automation",
    d: "Automate repetitive tasks across departments using intelligent triggers and decision logic.",
    points: ["Workflow mapping", "Real-time system integration", "Validated output"],
  },
  {
    t: "Chatbots & conversational agents",
    d: "24/7 WhatsApp and web agents for support, lead qualification, booking, and sales hand-offs.",
    points: ["Lead qualify", "Bookings", "Human escalation"],
  },
  {
    t: "Data & reporting systems",
    d: "Automated dashboards, business intelligence, and weekly truth your team actually opens.",
    points: ["Dashboards", "Forecasting", "Ops alerts"],
  },
  {
    t: "CRM + sales ops",
    d: "Pipeline hygiene, follow-up sequences, and scoring — the leaky bucket gets a lid.",
    points: ["Pipeline", "Sequences", "Scoring"],
  },
  {
    t: "Marketing systems",
    d: "Sequences and content ops wired to the same CRM the sales desk uses.",
    points: ["Sequences", "Personalisation", "Handoffs"],
  },
  {
    t: "Guardrails",
    d: "Audit logs, human review, and scoped tools. Automation that stays inside the brief.",
    points: ["Audit", "Review loops", "Access control"],
  },
];

const process = [
  { k: "01", t: "Discover", d: "Map the work that actually burns hours." },
  { k: "02", t: "Design", d: "Diagram the system. Owners sign the logic." },
  { k: "03", t: "Build", d: "Agents, CRM, WhatsApp, reporting — one stack." },
  { k: "04", t: "Train", d: "Your team runs it. We sit in until they do." },
  { k: "05", t: "Run", d: "Month-to-month ops. Iterate, don’t abandon." },
];

const projects = [
  {
    t: "Lead follow-up system",
    d: "An intelligent agent that qualifies inquiries, answers buyer questions, and schedules appointments.",
    img: `${IMG}/69adaf50e18e0a6c61e5932b_caseimg1.png`,
  },
  {
    t: "Project coordination ops",
    d: "Streamlining task assignments for faster delivery and smoother collaboration across desks.",
    img: `${IMG}/69b279984f3e16bb9f31f77d_case2.png`,
  },
  {
    t: "CRM + messaging bridge",
    d: "WhatsApp, email, and CRM in one loop — no more spreadsheet graveyards.",
    img: `${IMG}/69b279981413ea21427cbe4e_case3.png`,
  },
];

const integrations = [
  { name: "HubSpot", icon: `${IMG}/69ae6c1d59ec5b8e51dda16f_intergration-1.png` },
  { name: "Salesforce", icon: `${IMG}/69ae8696c6670e7502c6b286_intergration-2.png` },
  { name: "Zoho", icon: `${IMG}/69ae869740745b53027b50cc_intergration-3.png` },
  { name: "Mailchimp", icon: `${IMG}/69ae8697e87afcffef732e77_intergration-4.png` },
  { name: "ActiveCampaign", icon: `${IMG}/69ae869a8852077c30ac2406_intergration-5.png` },
  { name: "Monday", icon: `${IMG}/69ae86979878f6dbd9146833_intergration-6.png` },
  { name: "Copper", icon: `${IMG}/69ae8697a5de0c1a88e80236_intergration-7.png` },
  { name: "Klaviyo", icon: `${IMG}/69ae8697703592af9042cf02_intergration-8.png` },
];

const logos = [
  `${IMG}/69ad28ee521df4f0bc216f6b_logo.png`,
  `${IMG}/69ad28ee0421ab7969cbe39c_logo-1.png`,
  `${IMG}/69ad28ee1cae938069bc7006_logo-3.png`,
  `${IMG}/69ad28ee05dea11f5c66ad65_logo-4.png`,
  `${IMG}/69ad28ee828e941aba7f3f44_logo-5.png`,
  `${IMG}/69ad28eee8bacd5844ecec17_logo-6.png`,
];

const testimonials = [
  {
    quote:
      "We were spending hours on repetitive tasks. Their automation system took repetitive tasks off our plate every week.",
    name: "Elena",
    role: "Ops lead",
    av: `${IMG}/69ae9a942fa71416fab957f6_testimonial-avt-1.png`,
  },
  {
    quote:
      "Our enrollment process used to require manual follow-ups. Now AI handles the loop and humans close.",
    name: "Mark",
    role: "Founder",
    av: `${IMG}/69ae9a93b815609aa102cb3f_testimonial-avt-2.png`,
  },
  {
    quote:
      "Security and compliance were major concerns. They designed an architecture that stayed inside our brief.",
    name: "Sara",
    role: "COO",
    av: `${IMG}/69ae9a943af1ec1a5cd4a2fd_testimonial-avt-3.png`,
  },
];

const pricing = [
  {
    name: "Starter",
    price: "€499",
    blurb: "For small teams beginning their automation journey",
    items: ["1–3 workflow systems", "WhatsApp or web agent", "Weekly check-in"],
  },
  {
    name: "Growth",
    price: "€1,490",
    blurb: "For operators scaling lead flow and CRM hygiene",
    items: ["Full CRM + agent stack", "Reporting dashboards", "Month-to-month ops"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    blurb: "Multi-desk systems, guardrails, and dedicated operators",
    items: ["Multi-system architecture", "Training + SOPs", "Priority response"],
  },
];

const team = [
  { name: "Strategy", img: `${IMG}/69b2e3257d7fcd486816534c_team-1.png` },
  { name: "Build", img: `${IMG}/69b2e3257a5458a5e56c9e14_team-2.png` },
  { name: "Ops", img: `${IMG}/69b2e32503b85c803b356e29_team-3.png` },
  { name: "Support", img: `${IMG}/69b2e3251caad8c5e487bba0_team-4.png` },
];

const faqs: FaqItem[] = [
  {
    question: "What is OARC automation?",
    answer:
      "OARC Digital designs and runs AI operators for Malta businesses — lead follow-up, CRM, reporting, booking, and WhatsApp agents. Systems your team actually uses.",
  },
  {
    question: "Do we need a technical team?",
    answer:
      "No. We map the work, build the stack, train the operators, and stay on month-to-month. You need a named owner on your side — not a developer bench.",
  },
  {
    question: "How long until something ships?",
    answer:
      "First useful loop is usually inside 2–4 weeks: one workflow, one channel, one report. We do not start with a six-month platform rewrite.",
  },
  {
    question: "Is this replacing staff?",
    answer:
      "No. We cut the busywork that keeps closers off the phone. People who sell stay. Spreadsheets and ghost follow-ups go.",
  },
  {
    question: "How do we start?",
    answer:
      "{CTA_WA}. Birkirkara HQ. Month-to-month after a scoped discovery. Home: oarcdigital.com.",
  },
];

export default function AutomationClient() {
  return (
    <div className="bg-[color:var(--coni-bg)] text-[color:var(--coni-ink)]">
      <TopNav variant="automation" waHref={WA} />

      {/* HERO — light ops chrome; brand pass: solid type, no demo gradient */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="relative h-[420px] w-[720px] max-w-[90vw] overflow-hidden rounded-[2rem]">
            <AutoplayVideo
              src="/media/videos/conicorn-hero.mp4"
              poster={`${IMG}/69b2815e8cd44081a7e9719d_Hero Video_2_poster.0000000.jpg`}
              className="video-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f4f4f4] via-transparent to-[#f4f4f4]" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="coni-badge"
          >
            ✦ Malta · AI operators
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] tracking-[-0.04em] text-black"
          >
            AI Automation Malta — operators for modern teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--coni-muted)] md:text-lg"
          >
            Looking for AI automation in Malta? OARC Digital builds WhatsApp
            agents, CRM follow-up, reporting loops, and ops systems for owners
            who want less busywork — from Birkirkara, month to month.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1a1a1a] px-6 py-3.5 text-sm font-semibold text-white"
            >
              {CTA_CLAIM}
            </a>
            <Link
              href={CONTACT}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-3.5 text-sm font-semibold backdrop-blur"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/69ae9a939df2ac07b87bcc18_testimonial-avt.png`}
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              Work with us
            </Link>
          </div>
          <p className="mt-5 text-sm text-neutral-600">
            Shift Happens · 50% off for the next clients who contact now · {PHONE_DISPLAY}
          </p>
          <div className="mt-4">
            <MoneyLinks tone="light" />
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="overflow-hidden border-y border-black/5 py-8">
        <div className="marquee-track items-center gap-14 px-6 opacity-60 grayscale">
          {[...logos, ...logos].map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </section>

      {/* 001 Why choose */}
      <MotionSection id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="text-center">
          <span className="coni-badge">001 · Why choose us</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {caps.map((c) => (
            <div
              key={c.t}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.t} className="w-full rounded-xl object-cover" />
              <p className="mt-3 text-center text-sm font-medium">{c.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-black/5 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${IMG}/69b0c7277e29e402d77aa0b3_about.png`}
            alt="About OARC automation"
            className="w-full object-cover"
          />
        </div>
      </MotionSection>

      {/* 003 Services */}
      <MotionSection
        id="services"
        className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24"
      >
        <div className="text-center">
          <span className="coni-badge">003 · Services</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Our AI-Driven Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--coni-muted)]">
            Book a free 30-minute AI strategy session. We&apos;ll analyse your
            workflows and identify the highest-ROI automations.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.t}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--coni-muted)]">
                {s.d}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-neutral-700">
                {s.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </MotionSection>

      {/* 004 Process */}
      <MotionSection
        id="process"
        className="border-y border-black/5 bg-white px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="coni-badge">004 · Process</span>
            <h2 className="mt-5 font-display text-4xl">How We Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[color:var(--coni-muted)]">
              A proven process designed to transform complex workflows into
              scalable AI-powered systems.
            </p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {process.map((p) => (
              <div
                key={p.k}
                className="rounded-2xl border border-black/5 bg-[#f4f4f4] p-5"
              >
                <p className="text-xs font-semibold tracking-wider text-neutral-500">
                  {p.k}
                </p>
                <h3 className="mt-2 font-display text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--coni-muted)]">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 005 Projects */}
      <MotionSection
        id="projects"
        className="mx-auto max-w-6xl px-5 py-20 md:px-8"
      >
        <div className="text-center">
          <span className="coni-badge">005 · Projects</span>
          <h2 className="mt-5 font-display text-4xl">What We&apos;ve Built</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.t}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.t} className="aspect-[5/4] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--coni-muted)]">
                  {p.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      {/* 006 Integrations */}
      <MotionSection className="border-y border-black/5 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="coni-badge">006 · Integrations</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Technology Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--coni-muted)]">
            Our automation architecture connects data, workflows, and platforms
            into a secure, high-performance stack.
          </p>
          <div className="relative mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((i) => (
                <div
                  key={i.name}
                  className="flex items-center gap-3 rounded-full border border-black/5 bg-[#f4f4f4] px-4 py-2.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={i.icon} alt="" className="h-6 w-6 object-contain" />
                  <span className="text-sm font-medium">{i.name}</span>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1a1a1a] text-center text-xs font-semibold leading-tight text-white shadow-xl">
              Try with
              <br />
              OARC
            </div>
          </div>
        </div>
      </MotionSection>

      {/* 007 Testimonials */}
      <MotionSection className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="text-center">
          <span className="coni-badge">007 · Testimonials</span>
          <h2 className="mt-5 font-display text-4xl">What They&apos;re Saying</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.av}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm">{t.name}</p>
                  <p className="text-xs text-[color:var(--coni-muted)]">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </MotionSection>

      {/* 008 Pricing */}
      <MotionSection className="border-y border-black/5 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="coni-badge">008 · Pricing</span>
            <h2 className="mt-5 font-display text-4xl">
              Built for Growth at Every Stage
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[color:var(--coni-muted)]">
              Whether you&apos;re starting small or scaling fast, we have an
              automation plan that fits. Prices indicative — scoped on call.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 ${
                  p.featured
                    ? "border-black bg-[#1a1a1a] text-white"
                    : "border-black/5 bg-[#f4f4f4]"
                }`}
              >
                <p className="text-sm uppercase tracking-wider opacity-70">
                  {p.name}
                </p>
                <p className="mt-3 font-display text-4xl">{p.price}</p>
                <p
                  className={`mt-2 text-sm ${
                    p.featured ? "text-white/70" : "text-[color:var(--coni-muted)]"
                  }`}
                >
                  {p.blurb}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex rounded-full px-4 py-2.5 text-sm font-semibold ${
                    p.featured
                      ? "cta-fill"
                      : "bg-[#1a1a1a] text-white"
                  }`}
                >
                  {CTA_CLAIM}
                </a>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 009 Team */}
      <MotionSection className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="text-center">
          <span className="coni-badge">009 · Team</span>
          <h2 className="mt-5 font-display text-4xl">
            Meet the operators behind the systems
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.img} alt={m.name} className="aspect-[3/4] w-full object-cover" />
              <p className="p-3 text-center font-display text-sm">{m.name}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* FAQ */}
      <MotionSection
        id="faq"
        className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24"
      >
        <div className="text-center">
          <span className="coni-badge">FAQs</span>
          <h2 className="mt-5 font-display text-4xl">Common Questions</h2>
        </div>
        <div className="mt-10">
          <FaqAccordion items={faqs} tone="light" />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
            className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold"
          >
            Contact
          </Link>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold"
          >
            Instagram
          </a>
        </div>
      </MotionSection>

      {/* Final CTA + footer video */}
      <section className="relative overflow-hidden px-5 py-24 text-white md:px-8">
        <div className="absolute inset-0">
          <AutoplayVideo
            src="/media/videos/conicorn-footer.mp4"
            poster={`${IMG}/69b0d1d271397d4fd4227e2d_Footer Video_poster.0000000.jpg`}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Your Competitors Are Automating.
          </h2>
          <p className="mt-4 text-white/75">
            Stop wasting time on manual processes. Start building a self-running
            business.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full cta-fill px-6 py-3.5 text-sm font-semibold"
          >
            {CTA_WA}
          </a>
        </div>
      </section>

      <StickyExitBand waHref={WA} tone="light" />

      <FooterCta
        tone="dark"
        waHref={WA}
        title="Book a free 30-minute AI strategy session."
        subtitle="OARC Digital · Birkirkara, Malta · AI operators. Shift Happens 50% off for next clients."
      />
    </div>
  );
}
