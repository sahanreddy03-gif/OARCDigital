"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield, TrendingUp, Globe, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const heroImage = "/attached_assets/12_1763228440282.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Confident Malta property professional — AI agent handles the portal enquiry inbox so agents focus on viewings",
  description: "A Malta real-estate agent whose viewing pipeline is managed by an AI agent that triages portal leads, books viewings, and qualifies buyers across English, Maltese, and Italian around the clock.",
  url: "https://oarcdigital.com/attached_assets/12_1763228440282.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/12_1763228440282.jpg",
};

const viewingFlow = [
  { time: "11:00pm", event: "Portal enquiry arrives in Italian from a Sicilian buyer — two-bedroom in Sliema, budget and timeline unspecified." },
  { time: "11:01pm", event: "AI agent reads the enquiry, detects Italian, replies in Italian within 40 seconds. Asks four scoping questions: budget, preferred area, timeline, financing status." },
  { time: "11:15pm", event: "Buyer responds. The agent identifies two matching listings, proposes three viewing slots across two agents' calendars for the following Tuesday and Wednesday." },
  { time: "11:20pm", event: "Buyer confirms a slot. The agent writes a one-page briefing for the listing agent: buyer requirements, both listings, every question asked, market context on comparable closures." },
  { time: "Next morning", event: "The listing agent arrives at the office to a clean briefing, a confirmed viewing on their calendar, and a buyer who felt attended to at 11pm on a Sunday." },
];

const tiers = [
  { name: "Listing Qualifier", price: "€990", period: "/month", volume: "Up to 1,000 enquiries/month", detail: "Portal triage, multilingual qualification, and cold-lead nurture queue. Right entry point for a single-office brokerage of three to seven agents.", highlight: false },
  { name: "Sales Agent Assistant", price: "€1,890", period: "/month", volume: "Viewing booking + calendar sync", detail: "Adds automated viewing booking, per-agent calendar sync, and CRM-ready handoff briefing. The most complete single-office deployment.", highlight: true },
  { name: "Brokerage Pod", price: "€4,500", period: "/month", volume: "Multi-office, custom volume", detail: "Multi-office tier with cold-lead reactivation, EN/MT/IT scripting, weekly broker performance reports, and a dedicated account manager.", highlight: false },
];

const buyerPool = [
  { market: "Italian buyers", detail: "Sicily and Lazio predominantly — the largest single overseas buyer segment in the Maltese residential market. Agent handles EN/IT correspondence end-to-end." },
  { market: "British retirees", detail: "Post-Brexit relocators seeking EU residency in an English-speaking environment. High budget-range, long consideration cycle. Agent nurtures over 6–12 months." },
  { market: "EU remote workers", detail: "Professionals relocating from DACH, Benelux, and Nordics under Malta's nomad residency options. Typically sub-€500k, fast decision cycle." },
  { market: "CBI applicants", detail: "Citizenship-by-Investment enquiries route to a human CBI-cleared agent automatically — the agent does not handle the regulated part of the CBI funnel." },
  { market: "Local upgraders", detail: "Maltese nationals moving from apartment to house, or from one locality to another. EN/MT bilingual handling. Often the fastest-converting segment." },
  { market: "iGaming and fintech professionals", detail: "High-earners relocating for Malta-based employer contracts. Good volume buyer segment, typically €400k–€900k budget." },
];

const realEstateFAQs: FAQItem[] = [
  {
    question: "Can an AI agent actually book viewings automatically?",
    answer: "Yes. The agent reads the portal enquiry, qualifies the buyer on budget, area, timeline, and financing status, then proposes viewing slots from the relevant agent's live calendar. When the buyer confirms, the agent writes the calendar entry, sends confirmation to both parties, and creates the briefing document for the listing agent. The human agent arrives at the viewing prepared, not cold.",
  },
  {
    question: "Does the agent work with Malta property portals?",
    answer: "Yes. Native portal integrations cover the major Malta property channels. Enquiries arriving through any connected portal route through the same qualification and booking flow. Portals not yet natively integrated can be connected via webhook or email parsing depending on the platform.",
  },
  {
    question: "What languages does the agent handle?",
    answer: "English, Maltese, Italian, French, German, Spanish, and Russian out of the box. The agent detects the buyer's language automatically and replies in kind. For brokerages that serve Sicilian Italian buyers extensively, the Italian scripting is tuned specifically for property vocabulary and the Maltese market context — not generic translation output.",
  },
  {
    question: "How does it handle high-value and CBI enquiries?",
    answer: "The agent reads value signals that local brokers know to look for — cash buyer mentions, citizenship programme references, declared budget bands above €1.5m. These route to a designated senior agent within minutes, with a full written briefing. CBI-adjacent enquiries have a hard-coded compliance escalation: any enquiry including regulated CBI language bypasses automated handling entirely and routes to a human CBI-cleared agent.",
  },
  {
    question: "What happens to leads that don't book a viewing immediately?",
    answer: "They enter a long-cycle reactivation cadence — typically a 90-day email and WhatsApp sequence that maintains contact without pressure. Most brokerages see 8–15% of previously-dormant enquiries re-engage to a viewing within 90 days of the reactivation programme launching. That is pure incremental commission from leads that previously just went cold.",
  },
  {
    question: "Is buyer data handled in compliance with GDPR?",
    answer: "Yes. All buyer data is stored on EU-region infrastructure — Azure OpenAI West Europe. The agent does not retain conversation content beyond the period specified in your DPA. PII fields (name, phone, email) are tokenised at ingestion and only expanded at the point of CRM handoff. CBI enquiries are escalated to humans and not processed through the automated flow.",
  },
  {
    question: "What is the return on investment for a typical Malta brokerage?",
    answer: "Most brokerages recover the monthly fee within 30–45 days from after-hours enquiries that previously bounced. The bigger lift is cold-lead reactivation — 8–15% of dormant enquiries re-engaging to a viewing in the first 90 days is pure incremental commission. The ROI calculation varies by volume and average commission, but is typically strongly positive within the first 60 days.",
  },
];

export default function PageContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* SLIEMA CASE STUDY — BRANDED HERO IMAGE */}
      <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-sliema-case-study">
        <img
          src="/attached_assets/hf_20260420_110651_c79565e9-5cf0-4a29-a4d8-966374bda9db_1779836586682.png"
          alt="Sliema property agency recovered 60% of after-hours enquiries using OARC Digital AI real estate agent — 340 enquiries replied, 89 viewings booked | OARC Digital Malta"
          width={1080}
          height={1080}
          className="w-full max-w-xl rounded-xl shadow-2xl"
          fetchPriority="high"
          data-testid="img-sliema-case-study"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "Sliema property agency Malta — recovered 60% of after-hours enquiries with OARC AI real estate agent",
          description: "A property agency in Sliema was losing 60% of their enquiries after hours. OARC AI Real Estate Agent deployed — 340 enquiries replied, 89 viewings booked, zero missed leads.",
          url: "https://oarcdigital.com/attached_assets/hf_20260420_110651_c79565e9-5cf0-4a29-a4d8-966374bda9db_1779836586682.png",
          width: 1080,
          height: 1080,
          contentUrl: "https://oarcdigital.com/attached_assets/hf_20260420_110651_c79565e9-5cf0-4a29-a4d8-966374bda9db_1779836586682.png",
        }) }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-zinc-950 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Confident Malta property professional — AI agent handles portal enquiries so agents focus on viewings and negotiations"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-orange-500 mb-6" data-testid="text-eyebrow">
            AI Real Estate Agent — OARC AI Employees
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-8"
            data-speakable
            data-testid="heading-hero"
          >
            Never Miss a Viewing Request<br className="hidden md:block" /> Again — Even at 2am.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl" data-speakable>
            AI that reads every portal enquiry in the buyer&apos;s language, qualifies budget and intent, books the viewing into the right agent&apos;s calendar, and sends a one-page briefing before they arrive — around the clock, seven days a week.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
                data-testid="button-hero-cta"
              >
                Book a demo <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services/hire-ai-employees">
              <button
                className="inline-flex items-center gap-3 bg-white/10 text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:bg-white/15 transition-colors"
                data-testid="button-hero-secondary"
              >
                See all AI Employees
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <ScrollReveal>
        <section className="py-20 bg-background border-t" data-testid="section-problem">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Malta brokerages bleed leads at the inbox
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Frank Salt, Belair, RE/MAX Malta, Dhalia, Engel &amp; Völkers — every brokerage on the islands is connected to the same handful of portals, and every brokerage has the same problem: portal enquiries arrive at all hours, in mixed languages, with tyre-kickers and serious buyers indistinguishable in the inbox. By the time an agent triages and replies, the buyer has already been answered by three competitors. The OARC AI Real Estate Agent is built to win that thirty-minute window.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              The agent connects to your portal feed and inbound web channels, reads each enquiry, qualifies it on budget, timeline, financing, and intent, books a viewing across the right agent&apos;s calendar, and sends a CRM-ready briefing to the agent who will run the viewing. Cold leads enter a long-cycle reactivation cadence so the broker who follows up nine months later — when a buyer&apos;s circumstances change — is your firm, not the next listing on Property Malta.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "40 sec", label: "Typical response time to a new portal enquiry" },
                { metric: "38%", label: "After-hours leads recovered in week one for a Sliema brokerage" },
                { metric: "2.4x", label: "Qualified viewings increase within 90 days" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card text-center" data-testid={`stat-${i}`}>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.metric}</div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW IT BOOKS VIEWINGS */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-flow">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How a viewing gets booked — a real example
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              An enquiry arrives at 11pm on a Sunday in Italian — a Sicilian buyer asking about a two-bedroom in Sliema. Here is what happens next, without a human touching anything.
            </p>
            <div className="space-y-4">
              {viewingFlow.map((step, i) => (
                <div key={i} className="flex gap-6 p-5 rounded-xl bg-white/5 border border-white/10" data-testid={`flow-step-${i}`}>
                  <div className="shrink-0 bg-orange-500/20 rounded-lg px-3 py-2 text-center min-w-[90px]">
                    <span className="text-orange-400 font-bold text-xs">{step.time}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{step.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BUYER POOL */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-buyers">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Malta&apos;s particular buyer pool
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              Forty percent of Malta property enquiries originate outside the islands — Italian buyers from Sicily and Lazio, British retirees, Russian and Ukrainian relocations, EU citizenship-by-investment applicants, and a growing tail of remote-working professionals. The agent is multilingual out of the box and triages each enquiry in the buyer&apos;s language without a manual translation step.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyerPool.map((segment, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card" data-testid={`buyer-${i}`}>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{segment.market}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{segment.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MALTA LOCALITIES */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-localities">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Active in Malta&apos;s highest-volume localities
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Production deployments are running in Sliema, St Julian&apos;s, Valletta, Gzira, Msida, Mosta, and Mellieha — the localities that generate the majority of Malta&apos;s residential transaction volume. Calendar buffers are configured per locality: a Sliema agent gets tighter travel-time buffers between viewings than a Gozo agent, because the journey times are different and the system knows the difference.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              The Valletta and Three Cities areas require specific handling for the AirBnB-adjacent short-let market that now intersects with long-term residential sales. The Mellieha and Cirkewwa corridor sees strong Italian and north-African buyer enquiry patterns that are distinct from the Sliema and Gzira buyer profiles. The agent&apos;s scripting and routing logic is tuned per locality rather than applied generically.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Sliema", "St Julian's", "Valletta", "Gzira", "Msida", "Mosta", "Mellieha", "Gozo", "Three Cities", "Marsaxlokk"].map((loc) => (
                <span key={loc} className="px-3 py-1.5 rounded-full text-sm bg-card border text-foreground/70">
                  <MapPin className="w-3 h-3 inline mr-1 text-orange-500" />{loc}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INTEGRATIONS */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-integrations">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrations and viewing logistics
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Native portal integrations with the major Malta property aggregators. CRM integrations with HubSpot, Salesforce, Pipedrive, Reapit, and Apto, with bespoke webhook integrations for brokerages on internal CRMs. Viewing booking writes to each agent&apos;s individual Google Calendar or Outlook, with travel-time buffers configured per locality.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              GDPR compliance is built in: all buyer data is stored on EU-region infrastructure. The agent does not retain conversation content beyond the period specified in your DPA. PII fields are tokenised at ingestion and only expanded at the point of CRM handoff. CBI enquiries route to a human CBI-cleared agent — the automated flow never touches the regulated part of the citizenship funnel.
            </p>
            <div className="p-6 rounded-xl border bg-card">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">EU data residency — Azure OpenAI West Europe</p>
                  <p className="text-sm text-foreground/70">No buyer data leaves EU infrastructure. DPA-compliant retention periods enforced automatically. CBI-flagged enquiries hard-routed to human agents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PRICING */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-pricing">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment for a typical Maltese brokerage</h2>
              <p className="text-lg text-white/60">Most brokerages recover the monthly fee within 30–45 days from after-hours enquiries that previously bounced.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-xl border ${tier.highlight ? "border-orange-400 bg-white/5" : "bg-white/[0.03] border-white/10"}`}
                  data-testid={`pricing-tier-${i}`}
                >
                  {tier.highlight && (
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Most popular</div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/50">{tier.period}</span>
                  </div>
                  <div className="text-sm text-orange-400 font-medium mb-6">{tier.volume}</div>
                  <p className="text-sm text-white/60 leading-relaxed">{tier.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHERE IT FITS WITH MARKETING */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-marketing">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where this fits with your marketing
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The AI Real Estate Agent does not displace the agents — it buys back their selling time. A senior Maltese real-estate agent&apos;s hourly cost is high, and the marginal hour is best spent in viewings and negotiations, not triaging the inbox at 11pm on a Sunday. The agent does the inbox-and-calendar layer; the human does the viewings, negotiations, and local-market judgement calls.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              For brokerages also wanting help on top-of-funnel lead acquisition, OARC pairs the AI Real Estate Agent with{" "}
              <Link href="/services/paid-advertising" className="text-orange-600 hover:text-orange-700 underline">paid advertising</Link>{" "}
              for portal-supplemented Meta and Google campaigns and{" "}
              <Link href="/services/seo-services" className="text-orange-600 hover:text-orange-700 underline">SEO services</Link>{" "}
              for the long-tail buyer-intent queries that compound over years. The AI Real Estate Agent then qualifies whatever the marketing layer brings in. For full property pipeline automation, see the{" "}
              <Link href="/industries/real-estate" className="text-orange-600 hover:text-orange-700 underline">real-estate industry hub</Link>.
            </p>
            <div className="p-6 rounded-xl border bg-muted/40">
              <h3 className="text-base font-semibold text-foreground mb-3">Part of the OARC AI Employees programme</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                The AI Real Estate Agent is one of ten pre-built AI roles on the OARC platform. To compare it alongside other agent roles — or to understand how a multi-agent deployment works — see the hub.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/ai-agents" className="text-orange-600 hover:text-orange-700 font-medium underline">
                  AI Agents hub — all ten roles
                </Link>
                <Link href="/services/hire-ai-employees" className="text-orange-600 hover:text-orange-700 font-medium underline">
                  Hire AI Employees — full roster and pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COLD LEAD REACTIVATION */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-reactivation">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The cold-lead reactivation programme
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Most Malta brokerages have two to four years of dormant portal enquiries that never converted. Someone messaged in March 2022 about a Gzira apartment, was told nothing was available in their range, and was never contacted again. Their circumstances have changed. Their budget has changed. The market has changed. The AI Real Estate Agent runs a structured reactivation programme against this dormant database — not a blanket broadcast, but a personalised sequence that references what they were looking for and what has changed in the market since.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Reactivation outreach runs in the buyer&apos;s original language, references the original enquiry specifics from the CRM record, and offers a no-pressure check-in rather than a sales push. Most dormant leads in the 6–36 month window respond positively to a well-timed reactivation — circumstances change, and the brokerage that reaches out first owns the relationship when the buyer re-enters the market.
            </p>
            <div className="space-y-4">
              {[
                { week: "Week 1", action: "Dormant CRM contacts segmented by enquiry date, property type, budget range, and last-contact status. Contacts with no portal activity for 90+ days tagged for reactivation." },
                { week: "Week 2", action: "First reactivation message personalised to original enquiry. Sent in the buyer's language. No pressure, no urgency manufacture — a genuine market update related to what they were originally looking for." },
                { week: "Week 4", action: "Follow-up for non-responders. Adds one relevant data point: a new listing in their area, a notable transaction, a price movement in their target type." },
                { week: "Week 8", action: "Final message in the cycle. Graceful close: 'If your situation has changed, we'd love to hear about it. If not, no worries.' Responders who re-engage at any point in the cycle route back into the live lead flow and the full qualification process." },
                { week: "Month 3+", action: "Contacts who never responded enter a quarterly light-touch cadence — one message per quarter, always relevant, never pushy. This maintains the relationship for the buyer who is 18 months away from a purchase decision." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-5 rounded-xl border bg-card" data-testid={`reactivation-${i}`}>
                  <div className="shrink-0 bg-orange-500/10 rounded-lg px-3 py-2 text-center min-w-[90px]">
                    <span className="text-orange-600 font-bold text-xs">{step.week}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{step.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DEATH BY MISSED LEADS — BRANDED IMAGE */}
      <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-missed-leads-image">
        <img
          src="/attached_assets/hf_20260420_110400_f275b238-63f3-432e-9bf6-8c751eff68cf_1779836586700.png"
          alt="AI lead capture system for Malta real estate — 89 viewings booked last month, zero missed leads, 24/7 WhatsApp replies under 30 seconds | OARC Digital"
          width={1080}
          height={1080}
          className="w-full max-w-xl rounded-xl shadow-2xl"
          data-testid="img-missed-leads"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "Death by missed leads — Malta estate agency losing after-hours property enquiries",
          description: "Malta estate agency losing after-hours property enquiries — every missed lead is a missed commission. OARC AI Real Estate Agent ensures no enquiry goes unanswered.",
          url: "https://oarcdigital.com/attached_assets/hf_20260420_110400_f275b238-63f3-432e-9bf6-8c751eff68cf_1779836586700.png",
          width: 1080,
          height: 1080,
          contentUrl: "https://oarcdigital.com/attached_assets/hf_20260420_110400_f275b238-63f3-432e-9bf6-8c751eff68cf_1779836586700.png",
        }) }}
      />

      {/* MONDAY MORNING */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-monday">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Monday morning looks like for a Sliema broker using the AI agent
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              The broker arrives at 9am. The weekend generated eleven portal enquiries — three in English, four in Italian, two in German, two in Russian. By the time the broker opens their laptop, the AI agent has read all eleven, replied in each buyer&apos;s language with qualifying questions, and received responses from six of them overnight. Of those six, four have been qualified and have confirmed viewing slots in the current week&apos;s calendar. The other two are in the qualification conversation flow and will likely book by Tuesday.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The broker&apos;s inbox shows a one-page summary: four confirmed viewings with full buyer briefings attached, two active qualification threads, and five enquiries that did not respond to the initial qualification questions (these have entered the 90-day reactivation cadence automatically). The broker&apos;s Monday morning is viewings and calls, not inbox archaeology. The difference is not small. A broker who handles eleven weekend enquiries manually spends two to three hours on Monday morning on triage and scheduling. That time disappears.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Before the agent", items: ["2–3 hours Monday morning on inbox triage", "Reply in one language, miss buyers in others", "Cold response to inquiries — 10+ hours later", "Dormant leads forgotten after first contact", "Viewing calendar filled ad hoc, no structure"] },
                { label: "With the AI Real Estate Agent", items: ["4 confirmed viewings ready by 9am Monday", "Multilingual responses within 40 seconds, 24/7", "Buyer briefing attached to every calendar entry", "Dormant leads enter structured reactivation cadence", "Calendar managed with locality-specific travel buffers"] },
              ].map((col, i) => (
                <div key={i} className={`p-6 rounded-xl border ${i === 1 ? "border-orange-400 bg-white/5" : "bg-white/[0.03] border-white/10"}`} data-testid={`monday-col-${i}`}>
                  <h3 className="text-sm font-bold text-white mb-4">{col.label}</h3>
                  <div className="space-y-2">
                    {col.items.map((item, j) => (
                      <div key={j} className={`flex items-start gap-2 text-sm ${i === 1 ? "text-white/70" : "text-white/50"}`}>
                        {i === 1 ? <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> : <span className="text-white/30 shrink-0">—</span>}
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 340 ENQUIRIES CASE STUDY — BRANDED IMAGE */}
      <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-340-enquiries">
        <img
          src="/attached_assets/hf_20260420_104042_398e075c-5536-4b20-820c-844b0e6be0ed_1779836586703.png"
          alt="Real estate AI agent case study Malta — 340 enquiries handled, 89 viewings booked automatically, zero missed leads | OARC Digital"
          width={1080}
          height={1080}
          className="w-full max-w-xl rounded-xl shadow-2xl"
          data-testid="img-340-enquiries"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "340 property enquiries handled in one month — Malta brokerage results with OARC AI agent",
          description: "A Malta brokerage handled 340 portal and WhatsApp property enquiries in a single month using OARC AI Real Estate Agent — with four confirmed viewings booked by 9am every Monday.",
          url: "https://oarcdigital.com/attached_assets/hf_20260420_104042_398e075c-5536-4b20-820c-844b0e6be0ed_1779836586703.png",
          width: 1080,
          height: 1080,
          contentUrl: "https://oarcdigital.com/attached_assets/hf_20260420_104042_398e075c-5536-4b20-820c-844b0e6be0ed_1779836586703.png",
        }) }}
      />

      {/* ESTATE AGENT FEEDBACK */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-agent-feedback">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Malta estate agents say after 90 days
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              After 90 days, the feedback from Malta brokerages consistently clusters around three themes. First: after-hours lead recovery. Brokerages report that 30–45% of their first confirmed meetings in the first month came from enquiries that arrived outside office hours — enquiries they would previously have replied to the following morning, by which point the buyer had already booked with a competitor who was faster.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Second: the multilingual capacity. Sicilian and mainland Italian buyers are the largest single overseas buyer segment on the Maltese market, and most Malta brokerages handle Italian enquiries manually, slowly, and with variable quality. The AI agent handles Italian with the same response time as English and with vocabulary specifically tuned for property conversation rather than generic translation output.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Third: the briefing document. Listing agents arrive at viewings knowing who the buyer is, what they have said they want, what they can spend, and what questions they have already asked. The viewing is a continuation of a relationship, not a cold introduction. Brokerages using the AI agent report that their viewing-to-offer conversion rate improves measurably in the first 90 days — not because the agent closes deals, but because the agent ensures that the human who runs the viewing is better prepared.
            </p>
            <div className="p-6 rounded-xl border bg-card">
              <h3 className="text-base font-semibold text-foreground mb-3">Is your brokerage a fit?</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">The AI Real Estate Agent is best suited to Malta brokerages handling more than 50 portal enquiries per month and operating in at least two languages. Below that volume, a human can manage the inbox manually. Above it, the maths on the agent changes materially. Book a 30-minute scoping call to find out whether your enquiry volume and language mix make the investment obvious.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-orange-600 font-medium text-sm hover:text-orange-700">
                Book a 30-minute scoping call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FAQSection
        faqs={realEstateFAQs}
        title="AI Real Estate Agent — common questions"
        subtitle="What Malta brokerages ask before deploying their first AI agent"
        schemaId="faq-ai-real-estate-agent"
        emitJsonLd={true}
      />

      {/* PROPERTY TYPES */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-property-types">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Property types and enquiry handling by segment
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Malta&apos;s residential market is not homogeneous. Enquiry patterns, buyer intent signals, and qualification criteria differ substantially between property types and buyer segments. The agent&apos;s scripting and routing logic is configured per segment during onboarding, not applied from a generic template.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { type: "Apartments in Sliema and St Julian&apos;s", handling: "Highest enquiry volume. Mostly overseas buyers — Italian, German, British. Agent handles in buyer's language, qualifies on budget vs asking price, confirms financing status before booking viewing. Short-let vs long-term intent captured in qualification." },
                { type: "Townhouses and maisonettes in Mosta and Birkirkara", handling: "Predominantly Maltese upgraders and local families. EN/MT bilingual. Budget range typically €200k–€500k. Qualification focuses on timeline and existing property sale status." },
                { type: "Luxury properties in Valletta and Gozo", handling: "Lower volume, higher intent signals required before viewing commitment. Agent qualifies on capital availability, timeline, and property requirement specifics before proposing a senior agent viewing." },
                { type: "New development launches", handling: "High-volume, time-sensitive enquiry windows. Agent handles burst volume overnight and across weekends, ensuring every enquiry during a launch week is qualified within the hour, not the next business day." },
                { type: "Commercial property", handling: "Different qualification rubric: business type, lease vs purchase intent, fit-out requirements, planning status. Routes to a designated commercial agent rather than the residential team." },
                { type: "Short-let investment property", handling: "Airbnb and short-let enquiries qualify on yield expectation, management preference, and licensing status. AirBnB-adjacent regulatory context for Valletta and Three Cities areas captured in the qualification conversation." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card" data-testid={`property-type-${i}`}>
                  <p className="text-sm font-semibold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: item.type }} />
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.handling}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PORTALS COVERED */}
      <ScrollReveal>
        <section className="py-12 bg-background" data-testid="section-portals">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portals and channels the agent monitors</h2>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">The agent monitors enquiry sources in real time and responds within 40 seconds regardless of which channel the buyer used. New portals and channels are added to the integration at no extra cost.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { source: "Malta Property", note: "Largest local residential portal" },
                { source: "Maltapark.com", note: "High-volume DTC listings" },
                { source: "Rightmove Overseas", note: "UK and overseas buyer volume" },
                { source: "Gate4Malta.com", note: "Relocation and lifestyle buyer traffic" },
                { source: "Propline.mt", note: "Commercial and development listings" },
                { source: "Direct website enquiry forms", note: "Your own site contact forms via webhook" },
                { source: "WhatsApp Business", note: "Malta buyers increasingly prefer WhatsApp for initial enquiry" },
                { source: "Email inbox", note: "Direct referrals and repeat buyer re-enquiries" },
                { source: "Facebook / Meta Leads", note: "Lead form campaigns run by your paid media team" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg border bg-card" data-testid={`portal-${i}`}>
                  <p className="text-xs font-semibold text-foreground mb-1">{item.source}</p>
                  <p className="text-xs text-foreground/55">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DEATH BY SLOW REPLIES — BRANDED IMAGE */}
      <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-slow-replies-image">
        <img
          src="/attached_assets/hf_20260420_090006_17d4bf21-1268-4181-a191-d2cca6724f69_1779836586705.png"
          alt="AI chat and booking system for Malta property agency — instant WhatsApp replies, automatic buyer qualification, 89 viewings booked | OARC Digital"
          width={1080}
          height={1080}
          className="w-full max-w-xl rounded-xl shadow-2xl"
          data-testid="img-slow-replies"
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          name: "Death by slow replies — Malta property buyers choose whoever answers first",
          description: "Death by slow replies in Malta property — buyers choose whoever replies first. OARC AI Real Estate Agent responds to enquiries in 40 seconds, 24 hours a day, 7 days a week.",
          url: "https://oarcdigital.com/attached_assets/hf_20260420_090006_17d4bf21-1268-4181-a191-d2cca6724f69_1779836586705.png",
          width: 1080,
          height: 1080,
          contentUrl: "https://oarcdigital.com/attached_assets/hf_20260420_090006_17d4bf21-1268-4181-a191-d2cca6724f69_1779836586705.png",
        }) }}
      />

      <MaltaContextBlock slug="ai-real-estate-agent" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <TrustBlock variant="visit" />
      </div>

      <RelatedServices slug="/services/ai-real-estate-agent" />
    </Layout>
  );
}
