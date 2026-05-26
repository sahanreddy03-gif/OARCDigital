"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Users, Zap, BarChart3, Mail, Shield, Clock, TrendingUp, Filter, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";

const heroImage = "/attached_assets/2_1763228440277.jpg";

const leadGenFAQs: FAQItem[] = [
  {
    question: "What does lead generation actually deliver?",
    answer: "Qualified meetings booked directly into your closer's calendar, with a pre-call brief summarising the prospect's firmographics, intent signals, and why they replied. Not form fills, not downloads, not raw email addresses — meetings with pre-qualified buyers who fit your ICP and have shown active interest.",
  },
  {
    question: "How do you define a 'qualified' lead?",
    answer: "We lock the definition in the SOW with you before launch. Typical B2B rubric: matches ICP firmographics (industry, headcount, geography), has buyer-side authority (decision-maker or budget-holder), and shows present intent — active hiring, recent funding, or a declared problem in their reply. Meetings that fail the rubric do not count toward your monthly target.",
  },
  {
    question: "How long before we see results from lead generation?",
    answer: "Cold-email domains need a four-to-six-week warm-up before any prospect sees a message. During that window we build lists, write copy, and run deliverability testing. Most clients see their first qualified meetings in weeks five to seven. Paid-inbound channels can generate leads within 48 hours of launch but at a higher cost-per-meeting in the early weeks.",
  },
  {
    question: "What channels do you run for lead generation?",
    answer: "We choose channels based on your ICP and deal size. For Malta B2B services selling to EU mid-market: LinkedIn outbound + cold email + targeted LinkedIn/Google ads. For local Malta services: Google Local + Meta + LinkedIn for senior-decision-maker targets. We do not run channels we cannot attribute — if a channel is not measurable in your deal cycle, we do not recommend it.",
  },
  {
    question: "How is OARC's lead generation different from other agencies?",
    answer: "We commit qualified meeting volumes in the SOW and report against them weekly. If we miss the floor by more than 20% in any month, the following month is credited. We do not report on click-through rates, impressions, or MQLs as primary KPIs — those are intermediate metrics, not business outcomes. You hired us for meetings, so that is what we report.",
  },
  {
    question: "Do you handle cold email compliance and GDPR?",
    answer: "Yes. We send from dedicated sending domains, source prospect data from GDPR-compliant providers (Apollo, Cognism, Lusha, LinkedIn Sales Navigator), honour opt-out signals across the full prospect graph, and sign a DPA with every client. Our playbook respects EU-PECR and the Maltese Data Protection Act alongside GDPR.",
  },
];

const channels = [
  {
    icon: Mail,
    title: "Cold Email Outreach",
    desc: "Warm domains, GDPR-compliant lists, AI-written personalisation at scale. Reply rates 3–5× industry average.",
  },
  {
    icon: Users,
    title: "LinkedIn Outbound",
    desc: "Connection sequences, InMail, and Sales Navigator targeting by job title, company size, and intent signals.",
  },
  {
    icon: Target,
    title: "Paid Inbound",
    desc: "LinkedIn and Google ads targeting high-intent search queries. Faster results at higher CPM; ideal for scaling proven outbound.",
  },
  {
    icon: Filter,
    title: "AI Qualification",
    desc: "Every reply scored against your ICP rubric before a meeting is booked. No human time wasted on mismatched prospects.",
  },
];

const process = [
  { step: "01", title: "ICP Workshop", desc: "We lock the ideal customer profile, qualification rubric, and meeting-volume target in the SOW before any campaign launches." },
  { step: "02", title: "Infrastructure Build", desc: "Sending domain setup, warm-up, list sourcing, copy testing in low-volume batches. Four to six weeks before full scale." },
  { step: "03", title: "Launch & Iterate", desc: "Full campaign goes live. Reply rates and conversion-to-meeting tracked daily. Copy and targeting adjusted weekly." },
  { step: "04", title: "Scale Winners", desc: "Channels and messages with proven reply rates get more budget. Underperformers are paused — we do not guess, we measure." },
];

export default function LeadGeneration() {
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
            "url": "https://oarcdigital.com/attached_assets/2_1763228440277.jpg",
            "name": "Lead generation outreach — person working on targeted outbound campaigns",
            "description": "Lead generation outreach and sales prospecting — OARC Digital delivers qualified meetings for Malta and EU businesses through AI-powered cold outreach and paid inbound channels.",
            "width": 683,
            "height": 1024,
            "representativeOfPage": true,
          }),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Lead generation outreach — targeted sales prospecting for Malta businesses | OARC Digital"
            fetchPriority="high"
            width={683}
            height={1024}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Target className="w-4 h-4 text-[#c4ff4d]" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Lead Generation Malta</span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-lead-generation"
            data-speakable
          >
            Stop chasing cold leads.{" "}
            <span className="italic text-[#c4ff4d]">Start closing warm ones.</span>
          </h1>
          <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed" data-speakable>
            We deliver qualified meetings booked into your closer's calendar — with a pre-call brief on every prospect. Measured by cost-per-qualified-meeting. Reported weekly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90 font-bold" data-testid="button-get-started">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services/customer-acquisition">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-view-acquisition">
                See Customer Acquisition
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
              { value: "25–35", label: "Qualified meetings / month (Pilot tier)" },
              { value: "60+", label: "Meetings / month (Multi-Channel tier)" },
              { value: "4–6wk", label: "Domain warm-up before first outreach" },
              { value: "100%", label: "SOW-defined qualification rubric" },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-[#1a2e29]/10" data-testid={`stat-${i}`}>
                <div className="text-3xl md:text-4xl font-bold text-[#23AACA] mb-2">{s.value}</div>
                <div className="text-sm text-[#1a2e29]/60 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT LEAD GEN MEANS HERE */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">The definition that matters</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-6">
                  Lead generation is a meeting, not a form fill
                </h2>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  Most agencies sell lead generation and deliver email-list purchases, contest entries, and gated PDF downloads. None of those translate to revenue. We sell lead generation as a qualified meeting booked into your closer's calendar — with a pre-call brief summarising who the prospect is, why they replied, and whether they pass your ICP rubric.
                </p>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  The economic unit is the qualified meeting. The unit cost is reported as cost-per-qualified-meeting. The leading indicator is reply rate; the lagging indicator is closed-won attribution. Anything else is a vanity metric we choose not to report.
                </p>
                <p className="text-lg text-[#1a2e29]/70 leading-relaxed">
                  For Malta-headquartered businesses, we run multi-channel outbound programmes targeting EU buyers — combining cold email infrastructure, LinkedIn Sales Navigator, and where deal size warrants it, targeted paid inbound on LinkedIn and Google. Channel mix is calibrated to your sales cycle, not to what is fashionable this quarter.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "What we deliver", value: "Qualified meetings with pre-call brief" },
                  { label: "What we do NOT deliver", value: "Raw form fills, email lists, MQL counts" },
                  { label: "How we measure success", value: "Cost-per-qualified-meeting vs SOW target" },
                  { label: "What happens if we miss the floor", value: "Next month is credited — no argument" },
                  { label: "What we cannot commit to", value: "Closed-won numbers (that is your team's job)" },
                  { label: "Compliance", value: "GDPR, EU-PECR, Maltese Data Protection Act" },
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
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Multi-channel execution</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Every channel we run is measurable
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                We are channel-agnostic but will not run a channel we cannot attribute back to a meeting. If we cannot measure it, we do not recommend it.
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

      {/* COLD EMAIL DELIVERABILITY */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Infrastructure that protects your brand</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-6">
                  Cold email deliverability is the silent killer of DIY lead gen
                </h2>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  We send from a separate sending domain (yourcompany.io for a yourcompany.com primary), warm the new domain over four to six weeks before any prospect sees a message, and monitor inbox placement daily via Postmaster Tools and seed-list testing.
                </p>
                <p className="text-lg text-[#1a2e29]/70 mb-5 leading-relaxed">
                  Reply-rate pacing throttles automatically when deliverability degrades. The discipline here is the difference between a two-year lead-gen programme and a two-month rocket that burns the domain.
                </p>
                <p className="text-lg text-[#1a2e29]/70 leading-relaxed">
                  Prospect data is sourced from GDPR-compliant providers: Apollo, Cognism, Lusha, and LinkedIn Sales Navigator. Opt-out signals are honoured across the full prospect graph — not just the source list. We sign a DPA with every client.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Dedicated sending domain", desc: "Separate from your primary domain — protecting your main email deliverability." },
                  { icon: Clock, title: "4–6 week warm-up", desc: "Gradual volume ramp before any prospect sees your first message." },
                  { icon: BarChart3, title: "Daily deliverability monitoring", desc: "Postmaster Tools + seed-list testing catches degradation before it hits reply rates." },
                  { icon: Database, title: "GDPR-compliant data sourcing", desc: "Apollo, Cognism, Lusha, Sales Navigator. DPA signed with every client." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-[#1a2e29]/10">
                    <div className="w-10 h-10 bg-[#23AACA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#23AACA]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a2e29] mb-1">{item.title}</div>
                      <div className="text-[#1a2e29]/60 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How a lead generation programme{" "}
                <span className="italic text-[#c4ff4d]">actually runs</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {process.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start p-6 md:p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-colors" data-testid={`step-${i}`}>
                  <div className="text-4xl font-bold text-[#23AACA]/30 flex-shrink-0 w-12">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Transparent pricing</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e29] mb-4">
                Three ways to engage
              </h2>
              <p className="text-lg text-[#1a2e29]/60 max-w-2xl mx-auto">
                Every engagement starts with a clear SOW including qualified meeting volume targets and credit terms for misses.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lead Gen Pilot",
                price: "€2,900/mo",
                target: "25–35 qualified meetings/month",
                desc: "Single-channel programme — cold email or LinkedIn. AI qualification. Ideal for first engagements and proof-of-concept.",
                items: ["One primary channel", "AI-powered prospect qualification", "Weekly meeting-volume reporting", "Monthly strategy review"],
                cta: "Start Pilot",
              },
              {
                name: "Multi-Channel Lead Gen",
                price: "€5,900/mo",
                target: "60+ qualified meetings/month",
                desc: "Cold email + LinkedIn + targeted paid inbound. AI qualification across all channels. CRM routing to your closer.",
                items: ["Three channels in parallel", "AI qualification on every reply", "CRM integration + pre-call briefs", "Weekly reporting + bi-weekly calls"],
                cta: "Start Multi-Channel",
                featured: true,
              },
              {
                name: "Lead Gen Engine Build",
                price: "€18,000",
                target: "Permanent system, handed to your team",
                desc: "12-week project to build your lead gen engine: infrastructure, copy playbook, qualification agent, reporting stack — then we hand it over.",
                items: ["Full infrastructure build", "Copywriting + qualification playbook", "Dashboard + reporting setup", "Team handover + 30-day support"],
                cta: "Discuss Build",
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`p-8 rounded-xl border transition-all ${tier.featured ? "bg-[#1a2e29] border-[#23AACA] shadow-xl" : "bg-white border-[#1a2e29]/10"}`}
                data-testid={`pricing-tier-${i}`}
              >
                <div className="text-sm font-semibold mb-1" style={{ color: tier.featured ? "#23AACA" : "#23AACA" }}>{tier.name}</div>
                <div className={`text-3xl font-bold mb-1 ${tier.featured ? "text-white" : "text-[#1a2e29]"}`}>{tier.price}</div>
                <div className={`text-sm mb-5 ${tier.featured ? "text-white/60" : "text-[#1a2e29]/50"}`}>{tier.target}</div>
                <p className={`text-sm mb-6 leading-relaxed ${tier.featured ? "text-white/70" : "text-[#1a2e29]/60"}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-[#c4ff4d]" : "text-[#23AACA]"}`} />
                      <span className={`text-sm ${tier.featured ? "text-white/80" : "text-[#1a2e29]/70"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className={`w-full font-bold ${tier.featured ? "bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90" : "bg-[#1a2e29] text-white hover:bg-[#1a2e29]/90"}`}
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

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="text-sm uppercase tracking-wider text-[#23AACA] mb-3">Who this is built for</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Lead generation works when the bottleneck is{" "}
                <span className="italic text-[#c4ff4d]">top-of-funnel volume</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "B2B SaaS founders — Malta and EU",
                desc: "Deal sizes above €10k ACV with a sales cycle longer than 30 days. You need a steady supply of qualified meetings; your closer handles the rest.",
              },
              {
                title: "Professional services firms",
                desc: "Accountancy, legal, consulting, and specialist services targeting decision-makers. High-ticket, relationship-driven sales that needs warm introductions, not cold callers.",
              },
              {
                title: "iGaming and fintech operators",
                desc: "Malta's dense tech and iGaming sector requires highly targeted outreach to specific roles. We have playbooks for compliance-aware markets.",
              },
              {
                title: "Healthcare and MedTech",
                desc: "Long sales cycles with clinical and procurement gatekeepers. Our qualification logic handles multi-stakeholder buying committees.",
              },
              {
                title: "Software vendors selling into EU enterprise",
                desc: "Multi-language outreach across DE, FR, NL, and Nordic markets. We build ICP-specific messaging for each geography.",
              },
              {
                title: "Any B2B with a healthy close rate",
                desc: "Lead generation performs best when your close rate is already solid and the constraint is qualified meeting volume, not conversion quality.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-[#23AACA] transition-colors" data-testid={`use-case-${i}`}>
                <TrendingUp className="w-5 h-5 text-[#23AACA] mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT LEAD GEN IS NOT */}
      <section className="py-20 px-4 bg-[#f5f0e6]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e29] mb-4">
                Lead generation vs. customer acquisition — which do you need?
              </h2>
              <p className="text-lg text-[#1a2e29]/60">
                If your bottleneck is not lead volume but conversion rate, lead generation is not the right fix.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl border border-[#1a2e29]/10">
                <div className="text-sm font-bold text-[#23AACA] uppercase tracking-wider mb-4">Lead Generation is right for you if…</div>
                <ul className="space-y-3">
                  {[
                    "Your close rate is 25%+ but you do not have enough qualified meetings",
                    "Your sales team spends more than 30% of their time on prospecting",
                    "You have a clear ICP and know what 'qualified' means for your business",
                    "Your deal size justifies a cost-per-meeting above €150",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#23AACA] mt-0.5 flex-shrink-0" />
                      <span className="text-[#1a2e29]/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl border border-[#1a2e29]/10">
                <div className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Consider Customer Acquisition instead if…</div>
                <ul className="space-y-3">
                  {[
                    "You have plenty of leads but a low conversion rate",
                    "Your attribution is broken — you cannot tell which channel drives revenue",
                    "You need to reduce cost-per-acquired-customer across paid channels",
                    "You sell DTC or e-commerce where the buyer journey is faster",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[#1a2e29]/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/services/customer-acquisition">
                    <Button variant="outline" className="border-[#1a2e29] text-[#1a2e29] w-full" data-testid="button-acquisition-link">
                      See Customer Acquisition
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MALTA CONTEXT */}
      <MaltaContextBlock slug="lead-generation" />

      {/* FAQ */}
      <FAQSection
        faqs={leadGenFAQs}
        title="Lead generation questions, answered honestly"
        subtitle="Everything a Malta or EU business needs to know before engaging a lead generation partner"
        schemaId="faq-lead-generation"
      />

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-[#1a2e29]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to fill your closer's{" "}
            <span className="text-[#c4ff4d] italic">calendar?</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a 30-minute discovery call. We will map your ICP, propose a channel mix, and give you a realistic meeting-volume range before any contract is signed.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#c4ff4d] text-[#1a2e29] hover:bg-[#c4ff4d]/90 font-bold text-lg px-10" data-testid="button-final-cta">
              Book Discovery Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <RelatedServices slug="/services/lead-generation" />
    </Layout>
  );
}
