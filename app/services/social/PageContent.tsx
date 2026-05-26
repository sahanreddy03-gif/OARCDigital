"use client";

import Layout from "@/components/layout/Layout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  Layers,
  Calendar,
  Users2,
  Target,
  Search,
  FileText,
  Presentation,
  Wrench,
} from "lucide-react";
import RelatedServices from "@/components/RelatedServices";

const socialAuditFAQs: FAQItem[] = [
  {
    question: "What exactly do I get when the audit is finished?",
    answer:
      "A board-ready slide deck (typically 35-50 slides), a competitor matrix in spreadsheet form, a 90-day editorial calendar with named content pillars, and a read-out call with the founder. Everything is yours to keep — no licensing, no lock-in.",
  },
  {
    question: "How is this different from your managed social retainer?",
    answer:
      "Different intent. The managed retainer at /services/social-media-creative-management is an ongoing engagement where our pod runs your channels every day. This page is a one-time, project-based deliverable: you get the strategy and the plan, and you (or your in-house team, or another agency) execute. Many buyers start here and graduate to the managed retainer once the plan is proven.",
  },
  {
    question: "Will you actually post for me?",
    answer:
      "Not under this engagement. The audit ends with a written plan and a handover. If you want us to execute, the natural next step is the managed retainer at /services/social-media-creative-management — and we credit the audit fee against the first month if you continue with us.",
  },
  {
    question: "What channels do you audit?",
    answer:
      "Instagram, TikTok, LinkedIn, Facebook, YouTube, X, Threads, and Pinterest. Most Malta brands need a deep audit on two to three channels rather than a shallow audit on eight, so we scope per client during the kick-off call.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "The Strategy Sprint is two weeks from kick-off to read-out. The Strategy & Audit is three weeks. The Audit + Implementation Handover is seven weeks total: three weeks of audit followed by four weeks of handover and SOP work.",
  },
  {
    question: "Do you work with brands outside Malta?",
    answer:
      "Yes. The methodology is identical. Malta clients get a competitor matrix weighted toward local players (and our knowledge of the Sliema, St Julian's, and Gozo media buying landscape), while overseas clients get a benchmark against their primary geographic market.",
  },
];

const heroImg = "/attached_assets/stock_images/social-media-analytics-dashboard-strategy-audit.jpg";
const auditDeckImg = "/attached_assets/stock_images/social-strategy-audit-deck-readout.jpg";
const competitorMatrixImg = "/attached_assets/stock_images/social-competitor-matrix-benchmark.jpg";

export default function SocialStrategyAudit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    {
      icon: ClipboardCheck,
      title: "Channel Audit Deck",
      description:
        "A 35-50 slide forensic teardown of your existing social presence. We score every active channel against engagement quality, posting cadence, creative consistency, hook craft, and conversion path. You see exactly which posts earned their slot in the feed and which ones quietly damaged your account.",
    },
    {
      icon: Users2,
      title: "Competitor Matrix",
      description:
        "Five to eight named competitors benchmarked side-by-side: posting frequency, top-performing formats, hook patterns, paid amplification footprint, and the gaps you can credibly own. Delivered as a spreadsheet you can sort, filter, and update yourself after we leave.",
    },
    {
      icon: Layers,
      title: "Content Pillar Framework",
      description:
        "Three to five content pillars chosen from the audit data, not from a workshop sticky-note exercise. Each pillar comes with proof-points, hook archetypes, example posts, and a clear definition of what is and is not on-brief — so any writer or editor can produce on-pillar content the next day.",
    },
    {
      icon: Calendar,
      title: "90-Day Editorial Calendar",
      description:
        "A working calendar with daily slots for the next 90 days. Each slot names the pillar, the platform, the format, the hook angle, and the call-to-action. You can hand this to any in-house creator, agency, or freelancer and the plan keeps running without us.",
    },
  ];

  const processSteps = [
    {
      week: "Week 1",
      icon: Search,
      title: "Data pull and competitor scrape",
      body:
        "We start with a 60-minute intake call to capture the commercial context — what you sell, who buys, what success looks like in 90 days. Then we pull the last 12 months of analytics from every channel you give us read access to, scrape the named competitors, and load everything into our analysis workspace.",
    },
    {
      week: "Week 2",
      icon: FileText,
      title: "Audit deck and matrix build",
      body:
        "The senior strategist writes the audit narrative slide by slide. Findings are tied to data — every claim cites the post, the metric, or the competitor benchmark behind it. We avoid generic best-practice slides; if a finding is true for every brand on the planet, it does not earn a slide in your deck.",
    },
    {
      week: "Week 3",
      icon: Presentation,
      title: "Read-out and 90-day plan",
      body:
        "The founder walks you and your team through the deck on a 90-minute call. We rebuild the editorial calendar live in response to your team's questions, then send the final files within 48 hours. You leave the call with a plan you can start executing on Monday morning.",
    },
    {
      week: "Weeks 4-7 (optional handover)",
      icon: Wrench,
      title: "Implementation handover",
      body:
        "Available on the Audit + Implementation Handover tier. We onboard your in-house team or your existing agency, write the SOPs (briefing, approvals, reporting), set up the dashboard, and check back at the 30-day mark to recalibrate the calendar against the first month of real performance.",
    },
  ];

  const tiers = [
    {
      name: "Strategy Sprint",
      price: "From €2,400",
      cadence: "Project — 2 weeks",
      bullets: [
        "One channel audited in depth",
        "Competitor matrix (3-5 competitors)",
        "Content pillar framework",
        "90-day posting plan",
        "One read-out call",
      ],
    },
    {
      name: "Strategy & Audit",
      price: "From €3,900",
      cadence: "Project — 3 weeks",
      featured: true,
      bullets: [
        "Up to three channels audited",
        "Competitor matrix (5-8 competitors)",
        "Paid-vs-organic mix recommendation",
        "Full 90-day editorial calendar",
        "Board-ready slide deck",
        "Founder-led read-out call",
      ],
    },
    {
      name: "Audit + Implementation Handover",
      price: "From €5,800",
      cadence: "Project — 7 weeks",
      bullets: [
        "Everything in Strategy & Audit",
        "Four-week implementation handover",
        "Briefing, approval, and reporting SOPs",
        "Dashboard and weekly cadence setup",
        "30-day recalibration check-in",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-14 px-4 bg-[#f5f0e6] overflow-hidden">
        <div className="absolute inset-0 bg-surface-lime-radial"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: "#6b9b12" }}
                data-testid="text-eyebrow"
              >
                Strategy & Audit — One-Time Project
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6"
                data-testid="heading-social-strategy-audit"
              >
                Social Media Strategy &amp; Audit
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black mb-5">
                A plan before you hire an agency. Or an honest second opinion on the one you already have.
              </h2>

              <p className="text-base text-black mb-5">
                Most Malta brands hire a social agency, fire it nine months later, then hire another and repeat the cycle. The pattern is almost always the same: nobody ran a real audit before the retainer started, so nobody could tell whether the new content was actually working.
              </p>

              <p className="text-base text-black mb-6">
                This is the work that comes before the retainer. We forensically read your last 12 months of performance, benchmark you against named competitors, build the content pillars and 90-day calendar, and hand it over. You can run it in-house, hand it to any agency, or come back to us for the managed build.
              </p>

              <Link href="/contact">
                <button
                  className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-book-audit"
                >
                  Book a Discovery Call
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </button>
              </Link>
            </div>

            <div className="image-reveal rounded-3xl">
              <img
                src={heroImg}
                alt="Social media analytics dashboard used during an OARC Digital strategy and audit engagement"
                className="w-full h-[460px] object-cover rounded-3xl"
                data-testid="img-hero-analytics"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime-soft"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="mb-10 max-w-3xl">
              <div
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: "#6b9b12" }}
              >
                What you get
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">
                Four artefacts. Zero slideware.
              </h2>
              <p className="text-base text-black">
                The deliverables are deliberately short and operational. Every artefact is something a marketing lead can act on the day it lands — not a 200-page report that gets archived.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="glass-lime-strong rounded-3xl p-8 hover-lift"
                    data-testid={`card-deliverable-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="w-14 h-14 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-[#c4ff4d]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1a2e29]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal delay={150}>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-end">
              <div>
                <div
                  className="text-sm uppercase tracking-wider mb-3"
                  style={{ color: "#6b9b12" }}
                >
                  Process
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">
                  Three weeks of work. Then a plan you can ship.
                </h2>
                <p className="text-base text-black">
                  We run the same engagement shape every time. Calendar invites for the kick-off and the read-out are sent on day one, so the project never drifts and the read-out date is non-negotiable.
                </p>
              </div>
              <div className="image-reveal rounded-3xl">
                <img
                  src={competitorMatrixImg}
                  alt="Strategist reviewing a social media competitor matrix during the audit phase"
                  className="w-full h-[280px] object-cover rounded-3xl"
                  data-testid="img-competitor-matrix"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.week}
                    className="bg-white border border-black/10 rounded-3xl p-8 hover-lift"
                    data-testid={`card-process-${step.week.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#c4ff4d] rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-black" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider text-black/60">
                        {step.week}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing tier preview */}
      <ScrollReveal delay={200}>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime"></div>
          <div className="max-w-6xl mx-auto relative">
            <div className="mb-10 max-w-3xl">
              <div
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: "#6b9b12" }}
              >
                Pricing
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">
                Three project tiers. Fixed scope. Fixed price.
              </h2>
              <p className="text-base text-black">
                Project pricing means you know the bill before the work starts. Most Malta brands choose Strategy &amp; Audit. The Sprint suits founders piloting one channel; the Implementation Handover suits in-house teams who want our SOPs and reporting cadence baked in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-3xl p-8 hover-lift ${
                    tier.featured
                      ? "bg-black text-white glow-lime-subtle"
                      : "bg-white border border-black/10 text-black"
                  }`}
                  data-testid={`card-tier-${tier.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <h3 className="text-xl font-black mb-2">{tier.name}</h3>
                  <div
                    className={`text-3xl font-black mb-1 ${
                      tier.featured ? "text-[#c4ff4d]" : "text-black"
                    }`}
                  >
                    {tier.price}
                  </div>
                  <div
                    className={`text-sm mb-6 ${
                      tier.featured ? "text-white/60" : "text-black/60"
                    }`}
                  >
                    {tier.cadence}
                  </div>
                  <ul className="space-y-2">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 mt-1 ${
                            tier.featured ? "text-[#c4ff4d]" : "text-[#6b9b12]"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            tier.featured ? "text-white/85" : "text-black/80"
                          }`}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <button
                  className="btn-shimmer inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                  data-testid="button-discuss-tier"
                >
                  Discuss Which Tier Fits
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-white">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Who this is for */}
      <ScrollReveal delay={250}>
        <section className="relative py-14 px-4 overflow-hidden bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="image-reveal rounded-3xl">
                <img
                  src={auditDeckImg}
                  alt="Founder presenting a social media audit deck to an in-house marketing team"
                  className="w-full h-[420px] object-cover rounded-3xl"
                  data-testid="img-audit-deck"
                />
              </div>
              <div>
                <div
                  className="text-sm uppercase tracking-wider mb-3"
                  style={{ color: "#6b9b12" }}
                >
                  Who this is for
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-5">
                  You probably want this if…
                </h2>
                <ul className="space-y-3">
                  {[
                    "You're about to brief an agency and want a benchmark to brief them against.",
                    "You're nine months into a retainer that feels expensive, and you need an honest second opinion.",
                    "You have an in-house marketer who is great at execution but needs the strategy written down.",
                    "You're a Malta brand entering a new market and want a content plan that lands locally.",
                    "Your last social plan was a one-off workshop, the deck is on someone's hard drive, and nobody has opened it in six months.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-[#6b9b12] flex-shrink-0 mt-1" />
                      <span className="text-base text-black/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What this audit is, and what it isn't */}
      <ScrollReveal delay={275}>
        <section className="relative py-14 px-4 overflow-hidden bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 max-w-3xl">
              <div
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: "#6b9b12" }}
              >
                Methodology
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-4">
                What this audit is — and what it deliberately is not
              </h2>
              <p className="text-base text-black mb-4">
                We have sat in too many social-media workshops where the output was a Miro board of sticky-notes, a list of trending TikTok formats, and a vague promise that the agency would "iterate from there." That is not what we sell here. The Strategy &amp; Audit is a forensic engagement: every recommendation traces back to a specific post, a specific competitor benchmark, or a specific gap in the market that we can name and defend.
              </p>
              <p className="text-base text-black mb-4">
                Our analysis pulls from three data layers. First, your own analytics — every post from the last 12 months, scored on engagement quality (saves, shares, replies) rather than vanity metrics like impressions. Second, the named competitor set — we manually classify their last 90 days of content into formats, hooks, and pillars so you can see exactly what is working in your market and what is being neglected. Third, the search and discovery layer — what people in Malta are actually searching for on TikTok, what they are asking on Reddit, what is trending in the long-tail of YouTube. Strategy that ignores any one of these three layers is guessing.
              </p>
              <p className="text-base text-black">
                What this audit is not: a generic best-practice list, an exhaustive competitor screenshot deck, or a 90-page report that nobody on your team will read past page 12. The deck is short on purpose. Every slide has to earn its place. If a finding is true for every brand on the planet, it does not appear in the deliverable. The point is to give your marketing lead a plan that is sharp enough to brief into production on Monday morning, not a thesis that wins design awards in November.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="bg-[#f5f0e6] rounded-3xl p-8"
                data-testid="card-included"
              >
                <h3 className="text-xl font-black text-black mb-4">
                  Included in every tier
                </h3>
                <ul className="space-y-2">
                  {[
                    "Founder-led intake and read-out — not handed to a junior",
                    "Manual classification of competitor content (no scraped-keyword shortcuts)",
                    "Named content pillars with example posts you can copy",
                    "90-day calendar with hooks, formats, and CTAs per slot",
                    "All raw files, spreadsheets, and decks transferred to your Drive",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#6b9b12] flex-shrink-0 mt-1" />
                      <span className="text-sm text-black/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-[#f5f0e6] rounded-3xl p-8"
                data-testid="card-not-included"
              >
                <h3 className="text-xl font-black text-black mb-4">
                  Not included — by design
                </h3>
                <ul className="space-y-2">
                  {[
                    "Daily content production or posting (that is the managed retainer)",
                    "A 200-slide industry report nobody reads",
                    "Vanity-metric dashboards (impressions, follower count vanity)",
                    "Generic best-practice slides that apply to every brand on earth",
                    "An open-ended scope that drifts past the read-out date",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="h-4 w-4 flex-shrink-0 mt-1 text-black/40 font-bold leading-none">
                        ×
                      </span>
                      <span className="text-sm text-black/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* A note from the founder */}
      <ScrollReveal delay={290}>
        <section className="relative py-14 px-4 overflow-hidden bg-[#f5f0e6]">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-sm uppercase tracking-wider mb-3"
              style={{ color: "#6b9b12" }}
            >
              From the founder
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-5">
              Why we sell the audit separately from the retainer
            </h2>
            <p className="text-base text-black mb-4">
              Honest version: most agencies bundle the audit into the first month of a retainer for free. That sounds generous, but it almost always means the audit is a sales document — the conclusion is decided before the work starts, and the conclusion is always "you should sign the retainer." It also means the audit gets the junior strategist, because the senior team is busy on paid retainers.
            </p>
            <p className="text-base text-black mb-4">
              We sell the audit as a paid project so the analysis is genuinely independent. If the honest read on your channels is that you are doing fine and you do not need an agency at all, we will write that down in the deck. If the honest read is that you should fire your current agency before signing anyone new, we will write that down too. Charging for the work is what makes the work worth reading.
            </p>
            <p className="text-base text-black">
              The senior strategist is on every engagement. The founder runs the read-out call. The deliverables are short, sharp, and yours to keep. If you graduate to the managed retainer afterwards, we credit the fee back. If you do not, the work still pays for itself the first time it stops you from signing the wrong agency.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Upsell to managed retainer */}
      <ScrollReveal delay={300}>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-surface-lime-soft"></div>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-black text-white rounded-3xl p-10 glow-lime-subtle">
              <div className="w-14 h-14 bg-[#c4ff4d] rounded-xl flex items-center justify-center mb-5">
                <LineChart className="h-7 w-7 text-black" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Want us to actually run it?
              </h2>
              <p className="text-base text-white/80 mb-4">
                The audit ends with a plan you can hand to anyone. If you want the people who wrote the plan to also build the calendar, produce the content, schedule the posts, and report weekly, the natural next step is the managed retainer.
              </p>
              <p className="text-base text-white/80 mb-6">
                We credit the audit fee against the first month of the retainer if you continue with us — so the strategy work is, effectively, free if you graduate to the managed engagement.
              </p>
              <Link
                href="/services/social-media-creative-management"
                data-testid="link-upsell-managed"
              >
                <button
                  className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover-elevate active-elevate-2"
                  data-testid="button-upsell-managed"
                >
                  See the Managed Retainer
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQs */}
      <FAQSection
        faqs={socialAuditFAQs}
        title="Social Strategy & Audit FAQ"
        subtitle="Common questions about our one-time social strategy and audit engagement"
        schemaId="faq-social-strategy-audit"
        emitJsonLd={false}
      />

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready for an honest read on your social?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Book a 30-minute discovery call. We'll scope the right tier, agree the channels in scope, and send a fixed-fee proposal within 48 hours.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold glow-lime hover-elevate active-elevate-2"
              data-testid="button-final-cta"
            >
              Book a Discovery Call
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      <RelatedServices slug="/services/social" />
    </Layout>
  );
}
