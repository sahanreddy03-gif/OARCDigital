"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hotel,
  Dice5,
  ShoppingBag,
  Home,
  Cloud,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import RelatedLinks from "@/components/RelatedLinks";

// Image set for /services/paid. Hero is the bespoke "Better systems"
// composition; each vertical block uses a distinct stock image so no two
// industry rows share the same visual.
const heroImage = "/attached_assets/Untitled_design_93_paid_hero.png";
const hospitalityImg =
  "/attached_assets/stock_images/food_supply_chain_au_88dc232a.jpg";
const igamingImg =
  "/attached_assets/stock_images/gaming_esports_compu_611efecd.jpg";
const ecommerceImg =
  "/attached_assets/stock_images/luxury_fashion_retai_4c037440.jpg";
const realEstateImg =
  "/attached_assets/stock_images/real_estate_agent_pr_d5449235.jpg";
const saasImg =
  "/attached_assets/stock_images/ai_software_developm_171781f0.jpg";

const industryFAQs: FAQItem[] = [
  {
    question: "How is /services/paid different from /services/paid-advertising?",
    answer:
      "/services/paid-advertising is the generic media-buying offer — Meta, Google, TikTok, LinkedIn, YouTube across any business. /services/paid is industry-specific: the playbook, channel mix, creative angles and benchmarks change for hospitality, iGaming, e-commerce, real estate and SaaS. Pick this page if your sector behaves differently from a generic e-commerce funnel.",
  },
  {
    question: "Which industries do you actually have paid-ads experience in?",
    answer:
      "Five core verticals in Malta and the wider EU: hospitality (hotels, restaurants, beach clubs, venues), iGaming (within MGA marketing rules), e-commerce (DTC and marketplace), real estate (sales and rentals), and B2B SaaS. Each vertical has its own buyer pod, benchmark library and creative back-catalogue.",
  },
  {
    question:
      "Why does paid for hospitality look different to paid for SaaS?",
    answer:
      "Hospitality buyers decide in days on mobile and convert through a booking engine — channel mix leans Meta + Google + metasearch. SaaS buyers decide over weeks with a buying committee — channel mix leans LinkedIn + Google + retargeting with demo loops and case studies. Treating them the same is why most agency campaigns underperform.",
  },
  {
    question: "Do you handle iGaming compliance?",
    answer:
      "Yes. Every iGaming campaign is run against MGA marketing rules and platform policy — Meta and Google's gambling certification, TikTok's restricted-industry list. We refuse work for unlicensed operators and never run player-acquisition creative that breaches responsible-gaming guidelines.",
  },
  {
    question:
      "We are an e-commerce brand selling outside Malta — does this still apply?",
    answer:
      "Yes. The e-commerce vertical playbook ships globally — feed engineering, Shopping/Performance Max, server-side conversions and Klaviyo retargeting are the same in Berlin, Dublin or Dubai. The Malta base means EU-time-zone account work and EUR billing, not a geographic limit on where the campaigns run.",
  },
  {
    question: "What's the minimum spend per vertical?",
    answer:
      "€8,000 monthly media spend for the Vertical Retainer to be commercially sensible. Below that, management fees become a disproportionate share of total cost — we'll usually point smaller spenders at the generic /services/paid-advertising starter offer instead.",
  },
];

const industries = [
  {
    key: "hospitality",
    icon: Hotel,
    eyebrow: "Vertical 01 — Hospitality",
    title: "Hotels, restaurants, beach clubs and venues",
    pain:
      "Hospitality teams burn paid budget on generic Meta interest stacks while their actual booking-engine traffic stays flat. Room nights are perishable, ADR varies by week, and STR/DerbySoft data rarely makes it into the ad account.",
    solution:
      "We run a hospitality pod that connects the booking engine (SiteMinder, Mews, Cloudbeds, OpenTable, ResDiary) to Meta CAPI and Google Enhanced Conversions. Creative is shot on-property in Malta or your destination — never stock — and rotated weekly against length-of-stay, lead-time and segment.",
    miniCase:
      "A 4-star Sliema seafront hotel cut blended cost-per-direct-booking by 38% in 90 days by moving from agency boilerplate to weekly creative built around actual ADR-by-weekday and metasearch parity work on Google Hotel Ads.",
    cta: "Book a hospitality paid audit",
  },
  {
    key: "igaming",
    icon: Dice5,
    eyebrow: "Vertical 02 — iGaming",
    title: "MGA-licensed casino, sportsbook and affiliate brands",
    pain:
      "iGaming buyers have to balance MGA marketing rules, Meta's gambling certification, Google's licensing requirements and TikTok's restricted-industry list — usually with affiliate partners pulling the same audiences in the opposite direction.",
    solution:
      "Our iGaming pod runs licence-aware account structures: separate ad accounts per regulated market, server-side player-LTV tracking, responsible-gaming creative review at the storyboard stage, and an affiliate-attribution layer so paid and affiliate teams stop double-counting deposits.",
    miniCase:
      "A Malta-licensed sportsbook recovered 22% of previously-rejected Meta ad submissions inside one quarter by rebuilding storyboards against Meta's gambling-policy precedent library and submitting under the correct beneficiary entity.",
    cta: "Talk to the iGaming pod",
  },
  {
    key: "ecommerce",
    icon: ShoppingBag,
    eyebrow: "Vertical 03 — E-commerce",
    title: "DTC, marketplace and Shopify Plus brands",
    pain:
      "Most e-commerce ad accounts are running Performance Max with a single product feed, no exclusion lists, and a Shopify checkout that loses 40%+ of mobile sessions. The agency reports ROAS, leadership reports cash, and the two never reconcile.",
    solution:
      "We rebuild the feed first — product titles, GTINs, custom labels by margin and stock — then layer Performance Max, Shopping, paid social and Klaviyo retargeting against it. Server-side conversions, GA4 enhanced measurement and a daily reconciliation against the Shopify dashboard mean reported ROAS matches the bank statement.",
    miniCase:
      "A €4M/year Maltese-founded fashion brand selling into UK and Italy lifted contribution-margin ROAS from 2.1x to 3.6x in 60 days by splitting the feed into eight margin-banded campaigns and pruning a long tail of zero-margin SKUs from the bidding.",
    cta: "Get an e-commerce paid teardown",
  },
  {
    key: "real-estate",
    icon: Home,
    eyebrow: "Vertical 04 — Real Estate",
    title: "Sales agencies, developers and rental specialists",
    pain:
      "Real estate paid ads usually fail in one of two ways: lead-form campaigns full of tyre-kickers asking for prices on units they will never afford, or listing-by-listing Meta ads that cannibalise the agency's own SEO traffic.",
    solution:
      "We segment the funnel by ticket size and intent. High-end Sliema and St Julian's units get qualified-only lead forms with budget gating and WhatsApp follow-up via the AI appointment booker. Mid-market and rentals get geo-fenced Meta + Google Local campaigns with video walkthroughs from on-site shoots.",
    miniCase:
      "A Birkirkara-based agency selling residential developments in Mellieha replaced a €3,200/mo Meta retainer that produced 11 viewings/month with a paired Meta + Google + WhatsApp funnel that produced 28 viewings/month at the same total spend.",
    cta: "Plan a real-estate paid funnel",
  },
  {
    key: "saas",
    icon: Cloud,
    eyebrow: "Vertical 05 — SaaS",
    title: "B2B SaaS, fintech and developer tools",
    pain:
      "SaaS paid is run by performance teams using e-commerce mental models — they optimise to last-click trials, miss the buying committee, and watch CAC quietly inflate while LTV stays flat. LinkedIn budgets get cut for being expensive even when they own the pipeline.",
    solution:
      "We treat SaaS paid as pipeline marketing, not direct response. LinkedIn ABM by job-function and account list, Google brand and category capture, demand-side video on YouTube, and a HubSpot/Salesforce attribution view that ties spend to MRR — not vanity trials. Creative is built around demo loops, ROI calculators and named customer stories.",
    miniCase:
      "A Malta-based fintech SaaS doubled qualified pipeline against the same monthly spend in 4 months by reallocating 60% of Meta budget into LinkedIn ABM, switching trial creative for a 90-second demo loop, and rebuilding their Google brand defence against a noisier competitor.",
    cta: "Scope a SaaS paid pilot",
  },
];

export default function Paid() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Inline Speakable JSON-LD targeting the H1 + first paragraph for
          voice-search assistants. /services/paid is not in TOP_PAGES so the
          shared <SpeakableJsonLd /> helper would no-op here. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://oarcdigital.com/services/paid",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-speakable]"],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industry-specific paid ads for Malta hospitality, iGaming, e-commerce, real estate and SaaS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55"></div>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#c4ff4d]/15 border border-[#c4ff4d]/40 text-[#c4ff4d] text-xs font-semibold uppercase tracking-wider">
            Industry-specific · Malta + EU
          </div>
          <h1
            data-speakable
            data-testid="heading-paid"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Paid Ads,{" "}
            <span className="italic" style={{ color: "#c4ff4d" }}>
              built per industry
            </span>
          </h1>
          <p
            data-speakable
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Vertical-first paid advertising for Malta hospitality, iGaming,
            e-commerce, real estate and SaaS brands. Each industry gets its own
            buyer pod, channel mix, creative library and benchmark set —
            because a hotel funnel and a SaaS funnel should not look the same.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button
                className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
                data-testid="button-hero-cta"
              >
                Book your industry audit
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
                </div>
              </button>
            </Link>
            <Link href="/services/paid-advertising">
              <button
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur text-white border border-white/30 rounded-full pl-8 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="link-generic-paid"
              >
                Looking for generic paid ads?
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-black" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why industry-first paragraph block */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3ED] via-white to-[#FFF9F0]"></div>
          <div className="max-w-5xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              Why a vertical playbook beats a generic one
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#1a2e29]/80">
              <p>
                Most paid agencies sell platforms — Meta, Google, TikTok,
                LinkedIn — and treat every client as a tweaked version of the
                same e-commerce funnel. That works until the buyer behaviour
                stops matching the template. A 5-star Sliema hotel and a
                Birkirkara-based fintech SaaS share zero buying psychology, yet
                most agencies run them through the same dashboard with the
                same lookalike audiences and the same weekly reporting deck.
              </p>
              <p>
                Industry-first paid means the channel mix, the creative
                language, the conversion definition and the benchmark library
                all change per vertical. A hospitality pod owns booking-engine
                integration, ADR-aware bidding and metasearch parity. An
                iGaming pod owns MGA compliance and licence-scoped account
                structures. An e-commerce pod owns Shopify feeds and
                margin-weighted Performance Max. A real-estate pod owns
                ticket-gated lead forms and on-site video walkthroughs. A SaaS
                pod owns LinkedIn ABM and CRM-attributed pipeline reporting.
              </p>
              <p>
                This is also why the page you're reading is split from
                {" "}
                <Link
                  href="/services/paid-advertising"
                  className="underline decoration-[#c4ff4d] decoration-2 underline-offset-4"
                  data-testid="link-paid-advertising-inline"
                >
                  /services/paid-advertising
                </Link>
                . That page is the generic offer for buyers searching by
                channel — Meta ads, Google Ads, TikTok ads. This page is the
                vertical offer for buyers who already know their sector
                behaves differently from the agency average.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5 industry blocks */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm uppercase tracking-wider mb-3 text-[#6b9b12] font-semibold">
              Five vertical playbooks
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              Pick your industry. We'll show you the gap.
            </h2>
          </div>
          <div className="space-y-16">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const flip = idx % 2 === 1;
              const img = [
                hospitalityImg,
                igamingImg,
                ecommerceImg,
                realEstateImg,
                saasImg,
              ][idx];
              return (
                <ScrollReveal key={ind.key} delay={idx * 80}>
                  <div
                    id={ind.key}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                    data-testid={`section-industry-${ind.key}`}
                  >
                    <div className={flip ? "lg:order-2" : ""}>
                      <div className="rounded-3xl overflow-hidden glow-lime-subtle">
                        <img
                          src={img}
                          alt={`${ind.title} paid ads in Malta`}
                          className="w-full h-[420px] object-cover"
                          data-testid={`img-industry-${ind.key}`}
                        />
                      </div>
                    </div>
                    <div className={flip ? "lg:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-[#c4ff4d]" />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-[#6b9b12] font-semibold">
                          {ind.eyebrow}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-black mb-5">
                        {ind.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                            The pain
                          </div>
                          <p className="text-base text-[#1a2e29]/80">
                            {ind.pain}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                            How we run it
                          </div>
                          <p className="text-base text-[#1a2e29]/80">
                            {ind.solution}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-zinc-200 bg-[#FAFAF6] p-5">
                          <div className="text-xs uppercase tracking-wider text-[#6b9b12] font-semibold mb-1">
                            Mini case study
                          </div>
                          <p className="text-base text-[#1a2e29]/90">
                            {ind.miniCase}
                          </p>
                        </div>
                        <div className="pt-2">
                          <Link href="/contact">
                            <button
                              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-7 pr-3 py-3 text-sm font-semibold hover-elevate active-elevate-2"
                              data-testid={`button-cta-${ind.key}`}
                            >
                              {ind.cta}
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <ArrowRight className="h-4 w-4 text-black" />
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What every vertical retainer ships with */}
      <ScrollReveal>
        <section className="relative py-14 px-4 overflow-hidden bg-[#f5f0e6]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8">
              What every vertical retainer ships with
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "A named industry buyer pod (not a junior account manager rotated quarterly)",
                "Server-side conversion tracking — Meta CAPI, Google Enhanced Conversions, GA4",
                "Vertical benchmark library — your CPL, ROAS and CAC are scored against your sector, not the agency average",
                "Weekly creative iteration shot for your sector (no stock, no template)",
                "Compliance review for regulated verticals (iGaming MGA, finance, health)",
                "Direct read-only access to the ad accounts — you keep the asset, not us",
                "A monthly executive briefing in plain language, not a 60-tab dashboard dump",
                "Optional pairing with /services/ad-creative, /services/marketing-automation-suite and the AI appointment booker",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-zinc-200"
                  data-testid={`feature-row-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-[#6b9b12] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-[#1a2e29]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vertical benchmarks block — long-form prose for AEO depth */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              What "good" actually looks like in each vertical
            </h2>
            <p className="text-base md:text-lg text-[#1a2e29]/80 mb-8">
              Generic paid agencies report blended ROAS, blended CPL and a
              dashboard of platform metrics. None of those numbers tell a
              hotel operator whether their direct-booking strategy is working
              or tell a SaaS founder whether their Series A pipeline will
              hold. Here is the benchmark vocabulary we use per industry, and
              the questions a paid retainer should be answering for you each
              month.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Hospitality benchmarks
                </h3>
                <p className="text-base text-[#1a2e29]/80">
                  We track cost-per-direct-booking against rate-parity
                  competitors on Google Hotel Ads, the share of total room
                  nights coming from direct vs OTA channels, ADR uplift on
                  paid-driven bookings, length-of-stay differential, and
                  cancellation rate by acquisition source. A Maltese 4-star
                  property running paid well should be moving direct share
                  from the high teens toward 35-40% inside a year, with
                  blended cost-per-direct-booking running below the OTA
                  commission rate net of cancellations. If the agency cannot
                  show you that comparison, they are reporting Meta ROAS in
                  isolation and ignoring the OTA tax.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  iGaming benchmarks
                </h3>
                <p className="text-base text-[#1a2e29]/80">
                  We track cost per FTD (first-time deposit) by regulated
                  market, 30/60/90-day player LTV cohorts, deposit-to-bonus
                  ratio, share of paid traffic vs affiliate-attributed
                  traffic, and policy-rejection rate per platform. Healthy
                  Malta-licensed casino accounts run a cost-per-FTD that
                  recovers inside 60 days against player LTV, with
                  policy-rejection rates under 8% on a rolling 30-day window.
                  Anything above 15% rejection means the creative team is not
                  reading platform precedent before submission.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  E-commerce benchmarks
                </h3>
                <p className="text-base text-[#1a2e29]/80">
                  We track contribution-margin ROAS (not headline ROAS),
                  new-customer ROAS separately from retention ROAS,
                  feed-coverage ratio (the percentage of catalogue actually
                  receiving impressions), Performance Max share-of-spend by
                  margin band, and the gap between platform-reported revenue
                  and Shopify-reported revenue. A healthy 7-figure DTC brand
                  should be running new-customer cmROAS in the 1.6-2.4x range
                  and total cmROAS above 3x once retention email and SMS
                  attribute correctly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Real-estate benchmarks
                </h3>
                <p className="text-base text-[#1a2e29]/80">
                  We track qualified-viewings booked per €1,000 spent,
                  budget-qualification rate at the form-fill stage, time
                  from lead to viewing, viewing-to-offer conversion, and the
                  share of paid leads that end up listed on the agency's CRM
                  vs disappearing into a generic Excel sheet. A well-run
                  Malta agency selling Sliema or St Julian's units should be
                  spending less than €120 per qualified viewing and seeing a
                  viewing-to-offer ratio above 18% — anything below that and
                  the qualification gating is too loose.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  SaaS benchmarks
                </h3>
                <p className="text-base text-[#1a2e29]/80">
                  We track CAC payback in months, pipeline-to-spend ratio,
                  marketing-sourced ARR, brand-vs-non-brand search share,
                  and ABM account-engagement scores. Sustainable B2B SaaS
                  paid programmes typically run CAC payback under 18 months
                  on annual contracts, with pipeline-to-spend above 3x and a
                  brand-search share growing month over month — a paid
                  programme that does not bend the brand-search curve is
                  burning money on category defence without compounding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How a vertical engagement starts */}
      <ScrollReveal>
        <section className="py-14 px-4 bg-[#FAFAF6]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              How a vertical engagement starts
            </h2>
            <p className="text-base md:text-lg text-[#1a2e29]/80 mb-8">
              Most paid retainers start with a kickoff call and a Trello
              board. Ours start with a two-week Industry Sprint that produces
              a written diagnosis before any media is spent. Three reasons
              for that: vertical fit is the single biggest predictor of paid
              performance, the diagnosis becomes the contract for the
              retainer, and you keep the sprint output even if you choose
              not to continue with us.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg text-[#1a2e29]/80">
              <li>
                <strong className="text-black">Vertical-fit interview</strong>
                {" — "}a 60-minute call with a buyer pod lead from your
                actual sector (not a generalist account manager) covering
                your booking engine, MGA licence scope, Shopify stack, CRM
                or LinkedIn ABM list, depending on which industry applies.
              </li>
              <li>
                <strong className="text-black">Account and tracking
                teardown</strong> — full read-only audit of every active ad
                account, server-side tracking layer, GA4 property and CRM
                connection. We document where the data leaks before
                proposing where the spend should go.
              </li>
              <li>
                <strong className="text-black">Competitor library</strong>
                {" — "}we pull the last 90 days of Meta Ad Library + Google
                Ads Transparency Center for the three closest competitors
                in your vertical, segment their creative by angle, and map
                what they are testing that you are not.
              </li>
              <li>
                <strong className="text-black">Channel-mix
                recommendation</strong> — a written split across Meta,
                Google, TikTok, LinkedIn, YouTube and (where relevant)
                metasearch or affiliate, justified against your vertical
                benchmarks rather than agency boilerplate.
              </li>
              <li>
                <strong className="text-black">30-day test plan</strong> —
                three to five named experiments with hypothesis, success
                metric and budget envelope. This becomes the first month of
                the Vertical Retainer if you continue.
              </li>
              <li>
                <strong className="text-black">Fixed-fee handover</strong>
                {" — "}written sprint output, recorded walkthrough, and a
                fixed Vertical Retainer quote. No percent-of-spend pricing,
                no rolling discovery hours.
              </li>
            </ol>
          </div>
        </section>
      </ScrollReveal>

      {/* Cross-link block to industry hubs + pillar */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
            Go deeper into your industry
          </h2>
          <p className="text-base text-[#1a2e29]/70 mb-8 max-w-2xl">
            Each vertical has its own marketing hub on OARC Digital with the
            full playbook, case work and pricing notes. Pair them with this
            page when scoping a paid retainer.
          </p>
          {/* The hospitality umbrella maps to two canonical hubs in
              OARC's industry taxonomy: /industries/hotels and
              /industries/restaurants. There is no single
              /industries/hospitality URL — both hubs are linked below so
              the AEO/SEO surface for the hospitality vertical is fully
              covered. /services/paid-advertising is the canonical
              generic paid-ads URL (a bare /paid-advertising slug is not
              served — see Task #116 cross-section aliases). */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                href: "/industries/hotels",
                label: "Hospitality hub — Hotels",
              },
              {
                href: "/industries/restaurants",
                label: "Hospitality hub — Restaurants",
              },
              { href: "/industries/igaming", label: "iGaming in Malta" },
              {
                href: "/industries/real-estate",
                label: "Real estate in Malta",
              },
              { href: "/industries/retail", label: "Retail & e-commerce" },
              {
                href: "/services/saas-development",
                label: "SaaS engineering",
              },
              {
                href: "/services/paid-advertising",
                label: "Generic paid advertising (paid-advertising)",
              },
              {
                href: "/services/ad-creative",
                label: "Performance ad creative",
              },
              { href: "/solutions", label: "Pillar — full solution stack" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl border border-zinc-200 bg-[#FAFAF6] px-4 py-3 text-sm font-semibold text-[#1a2e29] hover-elevate active-elevate-2"
                data-testid={`link-cross-${l.href.replace(/[^a-z0-9]+/gi, "-")}`}
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related links from internal link graph */}
      <div className="max-w-6xl mx-auto px-4">
        <RelatedLinks slug="/services/paid" />
      </div>

      {/* FAQ */}
      <FAQSection
        faqs={industryFAQs}
        title="Industry-Specific Paid Ads FAQ"
        subtitle="The vertical-first questions buyers ask before signing a paid retainer."
        schemaId="faq-services-paid-industry"
      />

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Pick a vertical. Book the audit.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Tell us which industry you operate in and the rough monthly spend.
            We'll come back inside two business days with a vertical-specific
            audit scope and a fixed Industry Sprint quote.
          </p>
          <Link href="/contact">
            <button
              className="btn-shimmer inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-lg font-bold hover:bg-[#d4ff6d] transition-colors glow-lime"
              data-testid="button-final-cta"
            >
              Book your industry audit
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-[#c4ff4d]" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
