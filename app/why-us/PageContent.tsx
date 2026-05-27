"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Gauge, Brain, TrendingUp, Heart, Sparkles, Quote } from "lucide-react";
import { buildOrganization, buildPerson, buildFAQ } from "@/lib/schema";
import { NAP } from "@/lib/seo/nap";
import { ORG_FOUNDING_DATE } from "@/lib/seo/organizationSchema";

const PAGE_URL = "https://oarcdigital.com/why-us";
const TITLE = "Who We Are | Our Founding Story | OARC Digital Malta";

const heroImage = "/attached_assets/hf_20260420_065011_d9310ea4-689e-4251-a67b-14bfb035b894_1779878403927.png";
const teamImage = "/attached_assets/global-influencer-marketing-agency-socially-powerful_1763244062764.jpg";
const maltaImage = "/attached_assets/pexels-pham-ngoc-anh-170983008-14237665_1763244193737.jpg";
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
    answer:
      "OARC Digital was founded in 2023 by Sahan Reddy, after a decade of running creative, engineering, and growth teams across Asia and the European Union. The studio was set up in Birkirkara, Malta, to put three disciplines that Maltese businesses usually have to source separately — creative, AI engineering, and growth automation — under one roof.",
  },
  {
    question: "Where is OARC Digital based?",
    answer:
      "Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta. The studio is a five-minute drive from Mriehel, ten from Mosta, and twenty from Valletta or Sliema. Local clients are welcome to drop in for a Friday review.",
  },
  {
    question: "What does OARC stand for?",
    answer:
      "Optimised, AI, Revenue, Creative. Each letter is a working principle, not a tagline. Optimised means we engineer for output per hour. AI is a real capability, not a sticker. Revenue is the metric we report against. Creative is the surface that has to earn attention before any spend.",
  },
  {
    question: "What is the mission of OARC Digital?",
    answer:
      "To be the Malta studio that a serious operator can hand the entire growth stack to — brand, performance, AI agents, automation — without stitching together three vendors, four account managers, and a quarterly review cadence. The goal is weekly output and weekly revenue impact.",
  },
];

const PILLARS = [
  {
    letter: "O",
    title: "Optimised",
    Icon: Gauge,
    description:
      "Zero bloat. Zero waste. Every workflow and campaign is engineered for maximum output with minimum friction. If a step does not serve the revenue number, it gets cut.",
  },
  {
    letter: "A",
    title: "AI",
    Icon: Brain,
    description:
      "Not a gimmick. A genuine capability we build with — AI agents in production handling live SDR outreach, support triage, appointment booking, and analytics, tuned for the Maltese market.",
  },
  {
    letter: "R",
    title: "Revenue",
    Icon: TrendingUp,
    description:
      "The metric that matters. Every strategy we create ties directly back to your bottom line. Brand work, paid media, automation — every surface connects to a measurable outcome.",
  },
  {
    letter: "C",
    title: "Creative",
    Icon: Heart,
    description:
      "Organic-first, paid to amplify. Creative has to earn attention before a single euro is spent boosting it. We build the brand work that makes the performance work pay.",
  },
];

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      {children}
    </div>
  );
}

export default function PageContent() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const orgSchema = buildOrganization();
  const personSchema = buildPerson();
  const faqSchema = buildFAQ(FOUNDER_FAQS, true);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: PAGE_URL,
    name: TITLE,
    description:
      "The founding story, principles, and mission of OARC Digital — a Birkirkara, Malta studio founded in 2023 by Sahan Reddy.",
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
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]"],
    },
  };

  const carouselImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    }, 20);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [orgSchema, personSchema] }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsImageObjectSchema) }} />

      {/* ══════════════════════════════════════════════
          1. HERO — Born in the AI Era
      ══════════════════════════════════════════════ */}
      <section
        className="relative bg-zinc-950 overflow-hidden text-white"
        data-testid="section-hero"
      >
        {/* Mobile: full-width branded image with gradient fade into dark */}
        <div className="md:hidden relative w-full" data-testid="section-hero-mobile-image">
          <img
            src={heroImage}
            alt="OARC Digital — the future of Malta island businesses is being built right now, not by the biggest companies, by the fastest ones"
            width={1080}
            height={1350}
            className="w-full object-cover object-top max-h-[70vw]"
            fetchPriority="high"
            data-testid="img-hero-mobile"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 pointer-events-none" />
        </div>

        {/* Desktop: split layout — text left, image right */}
        <div className="flex flex-col md:flex-row md:items-stretch md:min-h-screen">
          {/* Left: text */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-32">
            <p
              className="text-xs font-bold tracking-[0.35em] uppercase text-[#ff914d] mb-8"
              data-testid="text-eyebrow"
            >
              Born in the AI Era
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] mb-8"
              data-speakable
              data-testid="heading-hero"
            >
              Born in <br />
              <span className="text-[#ff914d]">the AI</span>
              <br />
              Era
            </h1>
            <p
              className="text-xl md:text-2xl text-white/60 max-w-lg leading-relaxed mb-10"
              data-speakable
              data-testid="text-hero-subtitle"
            >
              We didn&apos;t inherit the old agency playbook.
              <br />
              We&apos;re writing a new one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#ff914d] text-zinc-950 font-bold px-7 py-4 rounded-full text-base transition-transform hover:scale-[1.02]"
                data-testid="link-hero-cta"
              >
                Start the conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/why-oarc"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-full text-base hover:border-white transition-colors"
                data-testid="link-hero-comparison"
              >
                See the comparison page
              </Link>
            </div>
          </div>

          {/* Right: image — desktop only */}
          <div className="hidden md:flex items-center justify-end relative flex-shrink-0 w-[42%] pr-10 py-10">
            {/* Gradient fade on the left edge of the image so it bleeds into dark bg */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <img
              src={heroImage}
              alt="OARC Digital — the future of Malta island businesses is being built right now, not by the biggest companies, by the fastest ones"
              width={1080}
              height={1350}
              className="h-[88vh] w-auto object-cover rounded-3xl shadow-2xl shadow-black/60"
              fetchPriority="high"
              data-testid="img-hero-desktop"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. WE SAW A BROKEN SYSTEM
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 py-24 relative overflow-hidden text-white border-t border-white/5"
        data-testid="section-origin"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">
                  Chapter 01 — The gap we saw
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-origin">
                  We Saw a{" "}
                  <span className="text-[#ff914d]">Broken System.</span>
                </h2>
                <p className="text-lg text-white/60 mb-5 leading-relaxed">
                  Before OARC Digital, Sahan Reddy spent more than ten years running creative, engineering,
                  and growth teams across Asia and the EU — for hospitality groups, financial-services
                  firms, and SaaS companies that paid serious money to good agencies and still walked away
                  frustrated.
                </p>
                <p className="text-lg text-white/60 mb-5 leading-relaxed">
                  The pattern repeated everywhere. Brand sat in one studio. Paid media sat in another.
                  Engineering sat in a third. Each vendor blamed the other when a launch slipped, and the
                  client paid for all three.
                </p>
                <p className="text-lg text-white/60 leading-relaxed">
                  By 2022, AI tooling matured enough that a small team could carry the workload of a much
                  bigger one without losing quality. The thesis behind OARC Digital was to fix the broken
                  system — one studio, three disciplines, built around AI agents that handle the repeatable
                  work so the human team can focus on judgement, taste, and revenue.
                </p>
              </div>
              <div className="relative">
                <img
                  src={teamImage}
                  className="rounded-2xl shadow-2xl border border-white/10 w-full h-[420px] object-cover"
                  alt="OARC Digital team — the Birkirkara studio that put creative, AI engineering, and growth automation under one roof for Malta businesses"
                  width={600}
                  height={420}
                  data-testid="img-team"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#ff914d] text-zinc-950 p-6 rounded-xl shadow-xl max-w-[220px] hidden md:block">
                  <p className="font-bold text-lg leading-snug">&ldquo;Outcomes over Hours.&rdquo;</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. O-A-R-C PILLARS
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-900 py-24 border-t border-white/5 text-white"
        data-testid="section-pillars"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff914d] text-center mb-4">
              What O.A.R.C. stands for
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Four letters, four working principles.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <ScrollReveal key={p.letter} delay={i * 100}>
                  <div
                    className="bg-zinc-950/70 border border-white/10 rounded-2xl p-8 text-center hover-elevate h-full flex flex-col items-center"
                    data-testid={`pillar-${p.letter}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#ff914d] text-zinc-950 font-black text-3xl flex items-center justify-center mb-5">
                      {p.letter}
                    </div>
                    <Icon className="w-6 h-6 text-white/30 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. STORY TIMELINE
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 py-24 border-t border-white/5 text-white"
        data-testid="section-timeline"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            {/* Timeline spine */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff914d] via-white/20 to-[#ff914d] opacity-30 hidden md:block" />

            {/* Chapter 02 — Why Malta */}
            <ScrollReveal delay={100}>
              <div
                className="relative flex flex-col md:flex-row items-center mb-24"
                data-testid="milestone-malta"
              >
                <div className="md:w-1/2 md:pr-20 md:text-right mb-10 md:mb-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-2">
                    Chapter 02 — Why Malta
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">Why Malta. Why Now.</h3>
                  <p className="text-white/60 text-lg mb-4 leading-relaxed">
                    Malta is a small market with global ambition. iGaming brands competing in Brazil.
                    Financial-services firms regulated under MFSA serving clients across the EU. Hotels
                    needing discovery in twenty languages. Small island, large surface area.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    We picked Birkirkara — Level 1 of The Brewhouse on Mdina Road — because it sits in
                    the middle of where the operators actually are. Mriehel is five minutes. Mosta is ten.
                    St Julian&apos;s and Sliema are twenty.
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ff914d] flex items-center justify-center text-zinc-950 font-black text-sm hidden md:flex z-10">
                  02
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <img
                    src={maltaImage}
                    alt="Malta — OARC Digital home island, a small market with global ambition for iGaming, fintech, and hospitality operators"
                    width={600}
                    height={350}
                    className="rounded-2xl shadow-2xl border border-white/10 w-full h-[280px] object-cover"
                    data-testid="img-malta"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Chapter 03 — How we work */}
            <ScrollReveal delay={100}>
              <div
                className="relative flex flex-col md:flex-row-reverse items-center mb-24"
                data-testid="milestone-approach"
              >
                <div className="md:w-1/2 md:pl-20 mb-10 md:mb-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-2">
                    Chapter 03 — How we actually work
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Three disciplines, one room, no handovers.
                  </h3>
                  <p className="text-white/60 text-lg mb-4 leading-relaxed">
                    Every account is run by a named pod of three: a strategist, a creative lead, and an AI
                    engineer. The pod stays with the account from kickoff through the weekly review. Nobody
                    hands the brief to a delivery team and disappears.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Behind each pod sits a roster of AI agents built and tuned in-house — an SDR for
                    outbound, a support specialist for inbound, an appointment booker, a data analyst, and
                    admin agents. They take the repeatable work off the pod so the humans spend their hours
                    on strategy, taste, and direct client time.
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ff914d] flex items-center justify-center text-zinc-950 font-black text-sm hidden md:flex z-10">
                  03
                </div>
                <div className="md:w-1/2 md:pr-20">
                  <img
                    src={workspaceImage}
                    alt="OARC Digital workspace — creative, AI engineering, and revenue strategy under one roof with no vendor handovers"
                    width={600}
                    height={350}
                    className="rounded-2xl shadow-2xl border border-white/10 w-full h-[280px] object-cover"
                    data-testid="img-workspace"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Chapter 04 — The mission */}
            <ScrollReveal delay={100}>
              <div
                className="relative flex flex-col md:flex-row items-center"
                data-testid="milestone-mission"
              >
                <div className="md:w-1/2 md:pr-20 md:text-right mb-10 md:mb-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-2">
                    Chapter 04 — What we are here to do
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Be the studio a serious operator can hand the whole growth stack to.
                  </h3>
                  <p className="text-white/60 text-lg mb-4 leading-relaxed">
                    One brief, one pod, one weekly review. Brand, performance, AI agents, and automation
                    under the same roof, reporting against the same revenue number.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    The first cohort of clients from 2023 is still on the books in 2026, on the same
                    month-to-month terms they signed originally. No lock-in, no minimum term. Just a weekly
                    review that has been worth showing up to for three years running.
                  </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ff914d] flex items-center justify-center text-zinc-950 font-black text-sm hidden md:flex z-10">
                  04
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <div className="space-y-4">
                    {[
                      { n: "2023", label: "Studio founded in Birkirkara" },
                      { n: "7+", label: "Malta localities served" },
                      { n: "4", label: "Overseas markets from Malta base" },
                      { n: "0", label: "12-month contracts — ever" },
                    ].map((stat) => (
                      <div
                        key={stat.n}
                        className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                        data-testid={`stat-${stat.n}`}
                      >
                        <span className="text-2xl font-black text-[#ff914d] min-w-[3rem]">{stat.n}</span>
                        <span className="text-white/70 text-sm">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. WHAT AGENCIES GET WRONG
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-900 py-24 border-t border-white/5 text-white"
        data-testid="section-agencies-wrong"
      >
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">
              Chapter 05 — What agencies keep getting wrong
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The five patterns we refused to repeat.
            </h2>
            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "The account manager layer",
                  body: "Most agencies put an account manager between the client and the people doing the work. They add three to five days to every feedback loop and cost €30,000–€50,000 a year in overhead the client pays invisibly in their retainer. At OARC, the pod that writes the strategy is the pod that runs the account.",
                },
                {
                  number: "02",
                  title: "The quarterly review cadence",
                  body: "Most agencies meet their clients quarterly — four opportunities per year to course-correct. In between, campaigns run, budgets burn, and underperforming creative stays live for three months before anyone discusses it. OARC reviews weekly with live data and decisions for the following week.",
                },
                {
                  number: "03",
                  title: "The strategy deck with no output",
                  body: "Strategy is cheap. Output is expensive. Most agency engagements begin with a ten-week discovery phase that produces a hundred-slide deck and zero content. OARC ships in week one. The strategy evolves from what the data tells us, not from what a deck predicted.",
                },
                {
                  number: "04",
                  title: "The vanity metric report",
                  body: "Impressions, reach, engagement rate, follower growth — metrics that look good in a report and say nothing about revenue. The OARC weekly report covers leads generated, cost per qualified lead, revenue attributed to campaigns this week, and sales-qualified meetings booked.",
                },
                {
                  number: "05",
                  title: "The contract that outlasts the relationship",
                  body: "Most agency contracts run twelve months minimum — twelve months of revenue regardless of output quality. OARC runs month-to-month across every engagement. That structure forces us to earn the renewal every four weeks.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-6 p-6 bg-zinc-950/60 border border-white/10 rounded-xl"
                  data-testid={`wrong-${item.number}`}
                >
                  <div className="shrink-0 text-3xl font-black text-white/10 select-none">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. CAMPAIGN EXCELLENCE CAROUSEL
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-900 py-24 relative border-t border-white/5 overflow-hidden"
        data-testid="section-campaigns"
      >
        <div className="text-center mb-16 px-6">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#ff914d] mb-4">The Work</p>
          <h2 className="text-3xl font-bold text-white mb-2" data-testid="heading-campaigns">
            Campaign Excellence
          </h2>
          <p className="text-white/50">The result of human strategy and AI execution.</p>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap px-4"
          data-testid="carousel-container"
        >
          {carouselImages.map((src, i) => (
            <div
              key={i}
              className="inline-block w-[280px] md:w-[320px] h-[370px] md:h-[420px] rounded-2xl overflow-hidden relative flex-shrink-0 border border-white/10"
              data-testid={`carousel-item-${i}`}
            >
              <img
                src={src}
                className="w-full h-full object-cover"
                alt="OARC Digital campaign creative work — Malta marketing agency"
                width={320}
                height={420}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. HARD LIMITS
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 py-24 border-t border-white/5 text-white"
        data-testid="section-principles"
      >
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">
              Chapter 06 — Hard limits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Things we will not do.</h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  limit: "We will not take a percentage of ad spend as our fee.",
                  reason:
                    "If the agency earns more when you spend more, the agency has an incentive to recommend more spend. We charge a flat retainer regardless of media budget. The recommendation to increase or decrease spend is based on data, not our fee structure.",
                },
                {
                  limit: "We will not run white-label work on behalf of another agency.",
                  reason:
                    "The client at the end of the chain deserves to know who is doing their work. We are not interested in being the production team behind another agency&apos;s pitch.",
                },
                {
                  limit: "We will not sign a 12-month contract.",
                  reason:
                    "If the work is good, the client renews. Month-to-month is the only contract structure we offer. It has been that way since the first client in 2023.",
                },
                {
                  limit: "We will not hire account managers.",
                  reason:
                    "Account managers add a layer between the client and the people doing the work. Without that layer, feedback loops are faster, clients are happier, and the work is better.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/[0.03] border border-white/10 rounded-xl"
                  data-testid={`principle-${i}`}
                >
                  <p className="text-sm font-bold text-white mb-2">{item.limit}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
            <div className="p-6 bg-[#ff914d]/10 border border-[#ff914d]/20 rounded-xl">
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                If these principles describe a studio you want to work with, the next step is a
                thirty-minute call. We pull live data on your current presence, tell you what we would
                change in the first ninety days, and you decide from there.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#ff914d] font-semibold text-sm hover:text-orange-300 transition-colors"
                data-testid="link-principles-cta"
              >
                Book the thirty-minute call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. HOW TO START
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 border-t border-white/5 py-20 text-white"
        data-testid="section-engage"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">
              Chapter 07 — How to start
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              A thirty-minute call, not a twelve-slide deck.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  step: "1.",
                  title: "Book the call",
                  body: "Thirty minutes via the contact page. No prep required on your end — we do the pre-call research.",
                },
                {
                  step: "2.",
                  title: "Working session",
                  body: "Live data on your current presence, honest view on where the gap is, and what we would change first.",
                },
                {
                  step: "3.",
                  title: "Decision",
                  body: "We tell you whether the fit is right. If yes, you get a start date. If not, we say why.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/[0.03] border border-white/10 rounded-xl"
                  data-testid={`engage-step-${i}`}
                >
                  <div className="text-[#ff914d] font-black text-2xl mb-2">{item.step}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 border-t border-white/5 py-20 text-white"
        data-testid="section-faq"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff914d] mb-4">
              Questions we get asked on the first call
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Answered directly.</h2>
            <div className="space-y-6">
              {FOUNDER_FAQS.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-white/10 pb-6 last:border-0"
                  data-testid={`faq-item-${i}`}
                >
                  <h3 className="text-base font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. FOUNDER QUOTE
      ══════════════════════════════════════════════ */}
      <section
        className="bg-zinc-950 border-t border-white/5 py-20 text-white"
        data-testid="section-founder-quote"
      >
        <ScrollReveal>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Quote className="w-10 h-10 text-[#ff914d] mx-auto mb-6" />
            <p
              className="text-2xl md:text-3xl font-light leading-snug italic mb-6"
              data-speakable
            >
              &ldquo;Maltese operators are some of the fastest-moving people I have worked with anywhere.
              The studio that serves them properly cannot move at the pace of a quarterly review. So we
              built one that does not.&rdquo;
            </p>
            <p className="text-sm text-white/60">— Mr Reddy, founder, OARC Digital</p>
            <p className="text-xs text-white/40 mt-2">
              Studio founded {new Date(ORG_FOUNDING_DATE).getFullYear()}. Headquartered at{" "}
              {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════════
          11. SERVICES THAT BACK UP THE CLAIMS
      ══════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-t border-white/5 py-16" data-testid="section-services">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Services that back up the claims
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/social-media-creative-management"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-service-social"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">
                Creative
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                Social Media Creative
              </h3>
              <p className="text-sm text-white/60">
                Full creative and management for platforms your customers use daily.
              </p>
            </Link>
            <Link
              href="/services/seo-services"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-service-seo"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">
                Organic
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                SEO Services
              </h3>
              <p className="text-sm text-white/60">
                Search rankings that compound and cost nothing per click.
              </p>
            </Link>
            <Link
              href="/services/ai-consulting"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-service-ai-consulting"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">AI</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                AI Consulting
              </h3>
              <p className="text-sm text-white/60">
                AI strategy and deployment built around your model.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          12. WHERE TO GO NEXT
      ══════════════════════════════════════════════ */}
      <section className="bg-zinc-950 border-t border-white/5 py-16" data-testid="section-related">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Where to go next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-related-about"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">
                Founder bio
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                About the team
              </h3>
              <p className="text-sm text-white/60">
                The minimal founder bio, principles, and how to visit the studio.
              </p>
            </Link>
            <Link
              href="/why-oarc"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-related-comparison"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">
                Comparison
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                Why choose OARC
              </h3>
              <p className="text-sm text-white/60">
                Side-by-side comparison vs the typical Malta agency model.
              </p>
            </Link>
            <Link
              href="/case-studies"
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover-elevate block"
              data-testid="link-related-case-studies"
            >
              <div className="text-[#ff914d] font-bold text-xs tracking-widest uppercase mb-2">Proof</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff914d] transition-colors">
                Case studies
              </h3>
              <p className="text-sm text-white/60">
                Real Malta clients, real revenue numbers, real time-to-launch.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          13. CTA
      ══════════════════════════════════════════════ */}
      <section
        className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-24 text-center"
        data-testid="section-cta"
      >
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6">
            <Sparkles className="w-12 h-12 text-[#ff914d] mx-auto mb-6" />
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
              data-testid="heading-cta"
            >
              Ready to Work With a Team That{" "}
              <span className="text-[#ff914d]">Gets It?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Partner with a Malta studio that understands the island, masters the technology, and puts
              your revenue first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ff914d] hover:bg-[#ff8033] text-zinc-950 font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105"
              data-testid="button-cta"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
}
