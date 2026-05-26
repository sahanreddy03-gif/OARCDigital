"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, TrendingUp, BarChart3, Globe, DollarSign, Zap, Shield, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";

const heroImage = "/attached_assets/12_1763228440282.jpg";

const customerAcquisitionFAQs: FAQItem[] = [
  {
    question: "What does customer acquisition mean at OARC?",
    answer: "End-to-end engineering of getting a stranger to become a paying customer at a known, repeatable cost. That means paid channels, organic channels, the landing page, the lifecycle email, the AI qualification, and the attribution model that ties them together — all measured against one number: cost-per-acquired-customer, benchmarked against contribution margin per cohort.",
  },
  {
    question: "What is a reasonable cost-per-acquired-customer for a Malta business?",
    answer: "It depends entirely on your contribution margin and customer lifetime value. A Malta accountancy with €3,000 LTV and a 3-month sales cycle should target a CPA below €300 (10:1 LTV-to-CPA ratio minimum). We will not accept an engagement without a clear CPA target defined upfront — that is the number we optimise toward and report against weekly.",
  },
  {
    question: "How is customer acquisition different from lead generation?",
    answer: "Lead generation is top-of-funnel: qualified meetings into your closer's calendar. Customer acquisition is the full funnel — from first ad impression to signed contract or first purchase. If your close rate is healthy and the bottleneck is meetings, you need lead generation. If your issue is converting traffic or managing cost at scale across multiple channels, you need customer acquisition.",
  },
  {
    question: "How do you handle attribution after iOS 14?",
    answer: "We run a three-layer attribution model: (1) server-side conversion APIs on every paid platform — Meta CAPI, Google Enhanced Conversions, TikTok Events API, LinkedIn CAPI — so platform-reported numbers are usable; (2) first-party warehouse data joined on session, user, and customer ID to build cohorts and LTV; (3) quarterly geo-incrementality testing as the source of truth for incremental contribution per channel.",
  },
  {
    question: "What ad spend do you need to manage?",
    answer: "The minimum monthly ad spend for the Acquisition Retainer to make commercial sense is roughly €8k/month — below that, the management fee is a disproportionate share of total cost, and a quarterly OARC audit plus a freelancer is a better fit. Above €100k/month spend, we move clients to a Performance Media Pod with embedded buying capacity.",
  },
  {
    question: "Do you manage creative as well as media buying?",
    answer: "Yes. Ad creative production — images, video, static copy — is included in the Retainer. We run systematic creative testing: new variants go live weekly, underperforming variants are paused within 7 days, and creative learnings are documented in a shared repository so every test informs the next.",
  },
];

const channels = [
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Facebook and Instagram. Full-funnel campaigns from awareness to conversion. CAPI server-side tracking, dynamic creative, lookalike expansion.",
  },
  {
    icon: Globe,
    title: "Google Ads",
    desc: "Search, Shopping, Performance Max. Capturing high-intent buyers. Enhanced Conversions configured on day one.",
  },
  {
    icon: Users,
    title: "LinkedIn Ads",
    desc: "B2B decision-maker targeting by job title, company, and industry. Lead Gen Forms, sponsored InMail, account-based targeting.",
  },
  {
    icon: Zap,
    title: "Lifecycle Email",
    desc: "Post-acquisition nurture sequences, onboarding automations, and re-engagement campaigns. Owned channel with zero CPM.",
  },
];

const attributionStack = [
  {
    layer: "Layer 1",
    title: "Server-side conversion APIs",
    desc: "Meta CAPI, Google Enhanced Conversions, TikTok Events API, LinkedIn CAPI. Platform-reported numbers are usable again.",
  },
  {
    layer: "Layer 2",
    title: "First-party data warehouse",
    desc: "Session, user, and customer IDs joined in your warehouse. Cohort analysis and LTV built on data you own.",
  },
  {
    layer: "Layer 3",
    title: "Geo-incrementality testing",
    desc: "Quarterly geographic holdout tests. The source of truth for each channel's actual contribution to revenue.",
  },
];

export default function CustomerAcquisition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Structured data — ImageObject for hero */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "url": "https://oarcdigital.com/attached_assets/12_1763228440282.jpg",
            "name": "Confident business professional — customer acquisition and growth strategy for Malta businesses",
            "description": "Customer acquisition strategy — OARC Digital delivers full-funnel CPA-measured customer acquisition for Malta and EU businesses through multi-channel paid media and attribution engineering.",
            "width": 1024,
            "height": 683,
            "representativeOfPage": true,
          }),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Confident business professional reviewing customer acquisition data — full-funnel growth strategy for Malta businesses | OARC Digital"
            fetchPriority="high"
            width={1024}
            height={683}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <TrendingUp className="w-4 h-4 text-[#c4ff4d]" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Customer Acquisition Malta</span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-customer-acquisition"
            data-speakable
          >
            Turn qualified leads into{" "}
            <span className="italic text-[#c4ff4d]">paying clients — faster.</span>
          </h1>
          <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed" data-speakable>
            End-to-end customer acquisition engineering. We build the attribution model, run the channels, and report one number: cost-per-acquired-customer. Benchmarked weekly against your contribution margin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90 font-bold" data-testid="button-get-started">
                Get Acquisition Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services/lead-generation">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-lead-gen">
                Need Leads First?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 bg-[#f5f0e6] border-b border-[#1a2e29]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "One", label: "KPI we optimise: cost-per-acquired-customer" },
              { value: "3-layer", label: "Attribution model: CAPI + first-party + incrementality" },
              { value: "€8k+", label: "Minimum monthly ad spend for Retainer" },
              { value: "Weekly", label: "CPA reporting against SOW target" },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-[#1a2e29]/10" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-bold text-[#23AACA] mb-2">{s.value}</div>
                <div className="text-sm text-[#1a2e29]/60 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CA MEANS */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">The real definition</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-6">
                  Customer acquisition, measured in CPA — not impressions
                </h2>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  Most Malta SMEs we audit have the pieces — a Meta account, a Google account, a Mailchimp list, a HubSpot CRM — but the pieces do not talk to each other. CPA is unknowable because attribution is broken. Channel decisions are made on platform-reported numbers (which over-credit themselves) instead of first-party data (which does not).
                </p>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  The first month of any Acquisition Retainer is dedicated to fixing the attribution layer. Spending more before you can measure is how you waste two quarters and a significant budget.
                </p>
                <p className="text-lg text-[#1a2e29]/70 leading-relaxed">
                  Once attribution is honest, we run the channels, test the creative, and optimise the funnel — with a single weekly number: cost-per-acquired-customer versus the target agreed in your SOW.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Our primary KPI", value: "Cost-per-acquired-customer" },
                  { label: "How we measure it", value: "First-party data + server-side APIs + incrementality tests" },
                  { label: "Reporting cadence", value: "Weekly CPA dashboard + monthly strategy review" },
                  { label: "Minimum ad spend", value: "€8k/month for the Retainer to make commercial sense" },
                  { label: "What we do NOT report as success", value: "Impressions, clicks, MQLs, or platform-claimed conversions alone" },
                  { label: "Creative included", value: "Yes — ad creative, copy, landing page reviews all included" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-[#1a2e29]/10">
                    <CheckCircle2 className="w-5 h-5 text-[#23AACA] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1a2e29] text-sm">{item.label}</div>
                      <div className="text-[#1a2e29]/60 text-sm mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Channel strategy</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Channel-agnostic. Attribution-first.
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                We do not chase channels because they are fashionable. Channel mix is determined by your ICP and the data from your Acquisition Audit.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((ch, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-colors h-full" data-testid={`channel-${i}`}>
                  <div className="w-12 h-12 bg-[#23AACA]/15 rounded-xl flex items-center justify-center mb-5">
                    <ch.icon className="w-6 h-6 text-[#23AACA]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{ch.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{ch.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRIBUTION */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Attribution engineering</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-4">
                The work that makes everything else honest
              </h2>
              <p className="text-lg text-[#1a2e29]/60 max-w-2xl mx-auto">
                Post-iOS 14, post-cookie-deprecation, attribution is hard. We run a three-layer model so every channel decision is based on data you own, not data a platform reported about itself.
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-5">
            {attributionStack.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start p-7 bg-white rounded-xl border border-[#1a2e29]/10" data-testid={`attribution-layer-${i}`}>
                  <div className="w-20 flex-shrink-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#23AACA]">{item.layer}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2e29] mb-2">{item.title}</h3>
                    <p className="text-[#1a2e29]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Transparent pricing</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Three ways to engage
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Acquisition Audit",
                price: "€2,400",
                target: "Two-week diagnostic",
                desc: "Every channel, every tracker, every funnel step measured. 90-day execution roadmap delivered. No commitment required.",
                items: ["Full channel audit", "Attribution gap analysis", "Funnel conversion review", "90-day roadmap with priorities"],
                cta: "Book Audit",
              },
              {
                name: "Acquisition Retainer",
                price: "€4,900/mo",
                target: "Ongoing multi-channel delivery",
                desc: "Channel management, creative testing, attribution reporting, and bi-weekly strategy calls. Minimum €8k/month ad spend.",
                items: ["Multi-channel campaign management", "Weekly CPA dashboard", "Creative testing (new variants weekly)", "Monthly strategy review"],
                cta: "Start Retainer",
                featured: true,
              },
              {
                name: "Growth Engine Build",
                price: "€18,000",
                target: "12-week build, then handed over",
                desc: "Attribution stack, channel architecture, AI qualification agents, reporting dashboards — built and handed to your team.",
                items: ["Attribution infrastructure build", "Channel architecture setup", "AI qualification agent", "Dashboards + team handover"],
                cta: "Discuss Build",
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`p-8 rounded-xl border transition-all ${tier.featured ? "bg-[#23AACA] border-[#23AACA] shadow-xl" : "bg-zinc-900 border-zinc-800"}`}
                data-testid={`pricing-tier-${i}`}
              >
                <div className={`text-sm font-semibold mb-1 ${tier.featured ? "text-white/70" : "text-[#23AACA]"}`}>{tier.name}</div>
                <div className={`text-3xl font-bold mb-1 ${tier.featured ? "text-white" : "text-white"}`}>{tier.price}</div>
                <div className={`text-sm mb-5 ${tier.featured ? "text-white/70" : "text-white/40"}`}>{tier.target}</div>
                <p className={`text-sm mb-6 leading-relaxed ${tier.featured ? "text-white/80" : "text-white/60"}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-white" : "text-[#23AACA]"}`} />
                      <span className={`text-sm ${tier.featured ? "text-white/90" : "text-white/70"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className={`w-full font-bold ${tier.featured ? "bg-white text-[#23AACA] hover:bg-white/90" : "bg-[#23AACA] text-white hover:bg-[#23AACA]/90"}`}
                    data-testid={`button-cta-${i}`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Who we serve</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-4">
                Built for ambitious brands spending money{" "}
                <span className="italic text-orange-500">they cannot fully account for yet</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "DTC and e-commerce brands", desc: "Meta + Google Shopping + TikTok with full ROAS tracking. From product launches to seasonal peaks — predictable CPA at scale." },
              { title: "B2B SaaS companies", desc: "LinkedIn paid + Google Search + outbound SDR. Optimised for demo bookings and MRR growth, not vanity MQL counts." },
              { title: "Malta professional services", desc: "Google Local + Facebook neighbourhood targeting + LinkedIn for senior decision-makers. Built for Valletta, Sliema, and the broader Malta B2B market." },
              { title: "iGaming and fintech operators", desc: "Compliance-aware channel strategy for Malta's highly regulated operators. Performance-based creative with strict brand-safety controls." },
              { title: "Health and wellness brands", desc: "HIPAA-aware tracking, educational content strategy, local and regional targeting for healthcare businesses expanding across Malta and the EU." },
              { title: "Consumer apps and SaaS", desc: "App install campaigns, in-app event optimisation, cohort-based retention targeting. Scalable user acquisition with LTV-informed bidding." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-[#1a2e29]/10 hover:border-[#23AACA] transition-colors" data-testid={`use-case-${i}`}>
                <DollarSign className="w-5 h-5 text-[#23AACA] mb-4" />
                <h3 className="text-lg font-bold text-[#1a2e29] mb-3">{item.title}</h3>
                <p className="text-[#1a2e29]/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINK — ADJACENT SERVICES */}
      <section className="py-16 px-4 bg-[#1a2e29]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Where customer acquisition fits in your growth stack</h2>
            <p className="text-white/60">Customer acquisition is the conversion layer. It works best when paired with the right upstream and downstream services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Need qualified meetings first?", desc: "Lead generation delivers qualified meetings into your closer's calendar — the upstream input to customer acquisition.", href: "/services/lead-generation", cta: "See Lead Generation" },
              { title: "Want to automate post-acquisition?", desc: "Revenue automation turns acquired customers into recurring revenue through lifecycle automation and AI-driven upsell sequences.", href: "/services/revenue-automation", cta: "See Revenue Automation" },
              { title: "Need a broader growth system?", desc: "Our Solutions pillar shows how acquisition, automation, and creative work together as a single growth engine.", href: "/solutions", cta: "See Solutions" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer" data-testid={`adjacent-service-${i}`}>
                  <h3 className="text-white font-bold mb-2">{link.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{link.desc}</p>
                  <div className="flex items-center gap-2 text-[#c4ff4d] text-sm font-semibold">
                    {link.cta} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MALTA CONTEXT */}
      <MaltaContextBlock slug="customer-acquisition" />

      {/* FAQ */}
      <FAQSection
        faqs={customerAcquisitionFAQs}
        title="Customer acquisition questions, answered directly"
        subtitle="What Malta and EU businesses need to know before engaging a performance marketing partner"
        schemaId="faq-customer-acquisition"
      />

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-6">
            Start with the audit.{" "}
            <span className="text-[#23AACA] italic">Know your CPA in two weeks.</span>
          </h2>
          <p className="text-lg text-[#1a2e29]/60 mb-8">
            The Acquisition Audit maps every channel, every tracker, and every funnel step — and delivers a 90-day roadmap. No commitment required beyond the audit itself.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#1a2e29] text-white hover:bg-[#1a2e29]/90 font-bold text-lg px-10" data-testid="button-final-cta">
              Book Acquisition Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <RelatedServices slug="/services/customer-acquisition" />
    </Layout>
  );
}
