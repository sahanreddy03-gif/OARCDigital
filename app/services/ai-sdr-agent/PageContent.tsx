"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MessageSquare, Target, Clock, TrendingUp, Users, BarChart3, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const heroImage = "/attached_assets/stock_images/professional_sales_r_08d96be3.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Professional sales representative working on AI-powered outbound sequences for qualified meeting booking",
  description: "An AI SDR agent running 24/7 outbound prospecting across email and LinkedIn, qualifying leads and booking meetings into your closers' calendars automatically.",
  url: "https://oarcdigital.com/attached_assets/stock_images/professional_sales_r_08d96be3.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/stock_images/professional_sales_r_08d96be3.jpg",
};

const sequenceSteps = [
  { day: "Day 1", channel: "Email", action: "Short, plain-text cold email — 4–6 sentences, specific to their role or recent company news. No HTML, no graphics, no marketing speak." },
  { day: "Day 3", channel: "LinkedIn", action: "Connection request with a one-line note. Not a pitch — a genuine observation that earns the connection." },
  { day: "Day 7", channel: "Email", action: "Follow-up that acknowledges the silence. Adds one relevant data point — a case result, a competitor movement, a stat relevant to their industry." },
  { day: "Day 12", channel: "Email", action: "Short break-up email that leaves the door open. Graceful, no pressure, and triggers reactivation if they ever respond." },
];

const tiers = [
  { name: "AI SDR Lite", price: "€1,490", period: "/month", target: "15–20 qualified meetings/month", detail: "Single-ICP outbound on email. Separate sending domain, IP warm-up, DKIM/SPF/DMARC setup, and reply management included.", highlight: false },
  { name: "AI SDR Pro", price: "€2,900", period: "/month", target: "40–60 qualified meetings/month", detail: "Email plus LinkedIn outreach, multi-ICP coverage, and weekly creative iteration on the message library. The most complete outbound programme.", highlight: true },
  { name: "Custom Build", price: "€18,000", period: "project", target: "Bespoke targets", detail: "Custom ICP modelling, bespoke CRM hooks, integration with your own enrichment stack, or voice-call layering on top of the email and LinkedIn foundation.", highlight: false },
];

const qualificationRubric = [
  { label: "Firmographic fit", detail: "Industry, headcount range, geography, and company stage match the defined ICP. Not close — exact." },
  { label: "Persona match", detail: "Decision-maker or budget-holder. The agent does not book meetings with people who cannot say yes." },
  { label: "Present intent signal", detail: "Active hiring in the relevant department, recent funding, declared problem in the discovery message, or competitor displacement signal." },
  { label: "Deal-size fit", detail: "For Malta B2B SaaS selling into EU mid-market, that often means €5k–€50k ARR. The rubric is defined with you, not assumed." },
];

const sdrFAQs: FAQItem[] = [
  {
    question: "Can AI really do effective cold outreach?",
    answer: "Yes — with important nuances. The AI writes and sends the sequences, handles reply detection, runs qualification conversations, and books the meeting. What it cannot replace is the human closer on the discovery call. The AI SDR is a prospecting and meeting-booking tool, not a replacement for a sales team. Most clients see first qualified meetings in week three after the email warm-up period.",
  },
  {
    question: "What CRM does the AI SDR connect to?",
    answer: "HubSpot, Salesforce, Pipedrive, and Zoho natively. Bespoke webhook integrations are available for teams on internal or less common CRMs. Every qualified lead gets a structured record created or updated in the CRM, and every meeting outcome is logged post-call so the pipeline stays current without manual input.",
  },
  {
    question: "How does the agent handle GDPR and cold-email regulations?",
    answer: "Prospect data is sourced from GDPR-compliant providers — Apollo, Cognism, Lusha, ZoomInfo — where the data was gathered with a legitimate interest basis for B2B outreach. We use separate sending domains (not your primary domain) to protect your main domain's reputation. All sequences include a compliant opt-out, and suppression lists are maintained automatically.",
  },
  {
    question: "How long does the email warm-up period take?",
    answer: "Four to six weeks. Sending from a cold domain at volume before warming it up is the fastest way to land in spam — and to damage your primary domain reputation in the process. We run a structured warm-up on every new sending domain using gradually increasing volume, positive-signal seeding, and daily Postmaster monitoring before any real prospect sees a message.",
  },
  {
    question: "What does 'qualified meeting' mean in practice?",
    answer: "Every engagement defines it in the statement of work. Typically: a fit on ICP firmographics, a buyer-side persona match (decision-maker or budget-holder), and a signal of present intent. Meetings that do not meet that bar do not count toward the monthly target. We report on qualified meetings, not raw meeting volume.",
  },
  {
    question: "What does the closer receive when a meeting is booked?",
    answer: "A one-page pre-call brief in their inbox, also attached to the calendar invite: the prospect's role and company, what they responded to in the sequence, the exact questions they asked, qualification answers (budget, timeline, current provider), the meeting objective, and two suggested opening lines based on the conversation thread.",
  },
  {
    question: "How does the LinkedIn outreach work — do I need a separate account?",
    answer: "Yes. LinkedIn outreach runs from a dedicated SDR-role LinkedIn account that you own — not your main CEO or founder profile. This protects your primary LinkedIn presence and keeps the outbound persona separate from your personal brand. We set up the account, write the profile, and manage the activity within LinkedIn's usage limits.",
  },
];

export default function PageContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-zinc-950 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional sales representative running AI-powered outbound sequences to book qualified meetings"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-orange-500 mb-6" data-testid="text-eyebrow">
            AI SDR Agent — OARC AI Employees
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-8"
            data-speakable
            data-testid="heading-hero"
          >
            Your AI SDR Works 24/7.<br className="hidden md:block" /> Your Human Team Closes the Deals.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl" data-speakable>
            Outbound prospecting, cold email and LinkedIn sequences, qualification conversations, and calendar booking — all handled by AI while your closers focus on what only humans can do.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
                data-testid="button-hero-cta"
              >
                Book a strategy call <ArrowRight className="w-5 h-5" />
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

      {/* WHY AI SDR */}
      <ScrollReveal>
        <section className="py-20 bg-background border-t" data-testid="section-why">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why the SDR role is the right first AI hire for B2B teams
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              An SDR role has three structural traits that make it the cleanest fit for AI: the work is high-volume, the criteria for success are observable and measurable (qualified meetings booked), and the variance in human output is enormous. A great SDR books fifteen meetings a month; an average one books five; a struggling one books one. The OARC AI SDR Agent consistently performs at the great-SDR floor, and does it across every working hour of every weekday across every relevant time zone.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              It prospects against your defined ideal customer profile using Apollo, Cognism, Lusha, ZoomInfo, and LinkedIn Sales Navigator data — GDPR-compliance checked at source — and runs cold-outreach sequences across email and LinkedIn from your domain. Replies go through the agent&apos;s qualification logic, qualified prospects book directly into your closers&apos; calendars, and the closer arrives at the meeting with a one-page brief instead of a cold introduction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { metric: "Week 3", label: "First qualified meeting (after warm-up)" },
                { metric: "Week 10", label: "Steady-state output reached" },
                { metric: "60–90 days", label: "Positive pipeline ROI in most engagements" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card text-center" data-testid={`stat-${i}`}>
                  <div className="text-2xl font-bold text-orange-500 mb-2">{stat.metric}</div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* OUTBOUND SEQUENCE */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-sequence">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The outbound sequence the AI runs, step by step
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              At every step, reply detection runs in real time. A positive reply triggers the qualification flow. A negative reply closes the contact gracefully and logs the reason. An out-of-office pauses and resumes on the return date automatically.
            </p>
            <div className="space-y-4">
              {sequenceSteps.map((step, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10" data-testid={`sequence-step-${i}`}>
                  <div className="shrink-0">
                    <div className="bg-orange-500/20 rounded-lg px-3 py-2">
                      <div className="text-orange-400 font-bold text-xs">{step.day}</div>
                      <div className="text-white/60 text-xs">{step.channel}</div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{step.action}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/60 leading-relaxed">
                On LinkedIn, the agent uses a dedicated SDR-role LinkedIn account you own — not your main profile — to send connection requests, comment on relevant posts, and follow up in LinkedIn DMs after email opens. The combination typically lifts reply rate by 30–50% over email-only sequences.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT QUALIFIED MEANS */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-qualification">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What &ldquo;qualified&rdquo; actually means
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              We refuse to count meeting-volume vanity numbers. Every engagement defines &ldquo;qualified&rdquo; explicitly in the statement of work. Meetings that do not meet that bar do not count toward the monthly target. The rubric is configured against your specific criteria, not a generic template.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {qualificationRubric.map((item, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card" data-testid={`qual-${i}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-2">{item.label}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DELIVERABILITY */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-deliverability">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cold-email deliverability is a first-class workstream
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Cold-email deliverability is the silent killer of every DIY SDR rollout. Send from the wrong domain and your main inbox lands in spam for actual customers. We treat deliverability as the foundation of every engagement: separate sending domain (e.g. yourcompany.io for a yourcompany.com primary), four-to-six week IP warm-up, daily DKIM / SPF / DMARC monitoring, and reply-rate-based pacing that throttles automatically when the inbox-placement signal degrades.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Inbox placement is monitored via Google Postmaster Tools, GlockApps seed-list testing, and reply-rate-by-day tracking. Sequences that show declining reply rates are paused for review, not pushed harder. That discipline is the difference between a deliverable two-year programme and a two-month rocket that burns out and damages your domain reputation for the following year.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Separate sending domain — your primary domain is protected" },
                { icon: Clock, label: "4–6 week IP warm-up before any real prospect sees a message" },
                { icon: BarChart3, label: "Daily DKIM / SPF / DMARC monitoring and inbox placement tracking" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-card" data-testid={`deliverability-${i}`}>
                  <item.icon className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HANDOFF TO CLOSERS */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-handoff">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What your closer receives at the meeting
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              When a prospect books a meeting, the closer receives a one-page pre-call brief in their inbox, also attached to the calendar invite: the prospect&apos;s role and company, what they responded to in the sequence, the exact questions they asked, the qualification answers they gave (budget range, timeline, current provider or stack), the meeting objective, and two suggested opening lines based on the conversation thread.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Post-call, the agent logs the outcome in the CRM: won (move to onboarding), lost with reason (log and suppress for 90 days), or nurture (re-enter at a timed interval). This closes the loop so the data improves the sequence over time — messages producing wrong-fit meetings get revised; messages producing meetings that close get weighted higher.
            </p>
            <div className="p-6 rounded-xl border bg-muted/40">
              <h3 className="text-base font-semibold text-foreground mb-3">The human and AI division of labour</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                The AI SDR handles prospecting, cold outreach, inbound qualification, meeting booking, and the pre-call brief. Your humans handle the discovery call, demo, proposal, negotiation, and close. Most clients replace one and a half to two SDR seats in the first ninety days and use the saved budget to hire one additional account executive.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/services/marketing-automation-suite" className="text-orange-600 hover:text-orange-700 font-medium underline">
                  Marketing automation suite — lifecycle nurture for prospects not ready this quarter
                </Link>
                <Link href="/services/revenue-automation" className="text-orange-600 hover:text-orange-700 font-medium underline">
                  Revenue automation — full pipeline and CRM infrastructure
                </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing and first-quarter expectations</h2>
              <p className="text-lg text-white/60">No per-email billing. No sequence credits. The monthly retainer covers everything.</p>
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
                  <div className="text-sm text-orange-400 font-medium mb-6">{tier.target}</div>
                  <p className="text-sm text-white/60 leading-relaxed">{tier.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* AI EMPLOYEES HUB */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-hub">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="p-6 rounded-xl border bg-muted/40">
              <h2 className="text-base font-semibold text-foreground mb-3">Part of the OARC AI Employees programme</h2>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                The AI SDR is one of ten pre-built AI roles on the OARC platform. If you are comparing SDR coverage alongside an Admin Agent, Support Specialist, and Appointment Booker — or scoping a full AI employee rollout for your Malta-based team — start at the hub.
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

      {/* WHAT A WEEK LOOKS LIKE */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-week">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What a week of AI SDR outbound looks like
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Clients on the AI SDR Pro tier often ask what is actually happening week to week. This is the operating picture at steady state for a Malta-based B2B SaaS company selling into EU mid-market financial services teams.
            </p>
            <div className="space-y-4">
              {[
                { day: "Monday", activity: "Fresh prospect list pulled from Apollo and Cognism against the current week's ICP parameters. Enrichment verified against LinkedIn. 40–60 new prospects enter the sequence. Last week's reply thread reviewed by the human sales lead — anything that looks like a buying signal that the agent did not catch is flagged for manual follow-up." },
                { day: "Tuesday–Thursday", activity: "The sequence runs. Emails send between 7:30am and 10:30am in the prospect's timezone — outside that window, open and reply rates drop materially. LinkedIn connection requests go out in the mid-afternoon. Positive replies trigger the qualification conversation flow within 90 seconds. Out-of-office replies pause until the return date and resume automatically." },
                { day: "Friday", activity: "Weekly performance report arrives in the sales director's inbox by 9am: total emails sent, open rate by subject-line variant, reply rate by message version, meetings booked in the week, qualification rate on replies, and any message creative that underperformed its benchmark by more than 15% (flagged for revision on Monday). No dashboard login required." },
                { day: "Ongoing", activity: "A/B tests on subject lines, opening sentences, and call-to-action variants run continuously. Message creative is rotated on a four-week cycle unless a variant outperforms its predecessor by a statistically significant margin, in which case it replaces the control. The sequence gets better every month rather than drifting into irrelevance." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl border bg-card" data-testid={`week-${i}`}>
                  <div className="shrink-0 bg-orange-500/10 rounded-lg px-3 py-2 text-center min-w-[100px]">
                    <span className="text-orange-600 font-bold text-sm">{item.day}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MALTA B2B CONTEXT */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-malta-context">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Malta B2B companies need an AI SDR in 2026
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Malta sits in an unusual position for outbound sales. The local market — iGaming operators, MFSA-supervised fintechs, hospitality groups, MGA licensees — is small enough that personal relationships still drive most B2B purchasing decisions. But the revenue ceiling that Malta-domiciled companies actually target is not Malta: it is the EU, the UK, and increasingly the US. The AI SDR Agent is built for that gap — it runs EU-wide outbound from a Malta-headquartered company without the operational overhead of a distributed human sales team.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Production AI SDR deployments from Malta include: a Valletta-based payment infrastructure provider running outbound into UK and Irish fintech buyers; a Birkirkara iGaming compliance SaaS running outbound into EU affiliate managers; a St Julian&apos;s HR technology company running outbound into Scandinavian and Benelux HR directors; and a Maltese legal technology startup running outbound into UK and Irish law firm partners. Each engagement has a different ICP, different sequence creative, and a different definition of qualified — but the same underlying infrastructure.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              The local talent market for SDR roles is thin. A competent Malta-based SDR is expensive relative to comparable skill in Eastern Europe, has a 12–18 month tenure before leaving for a larger organisation, and takes 6–8 weeks to ramp before producing qualified meetings consistently. The AI SDR Agent does not have tenure risk, ramp time, or geography constraints. It runs in CEST, BST, and CET simultaneously without overtime costs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Industries deploying AI SDR from Malta", items: ["iGaming and igaming compliance software", "Payment infrastructure and fintech SaaS", "HR technology and workforce management platforms", "Legal technology and contract management tools", "B2B hospitality software and booking infrastructure"] },
                { title: "Target markets running from Malta today", items: ["UK financial services and fintech (FSA, FCA regulated)", "Scandinavian and Benelux mid-market", "DACH enterprise software buyers", "Irish professional services and legal", "EU MGA and MFSA-adjacent compliance buyers"] },
              ].map((col, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card">
                  <h3 className="text-base font-bold text-foreground mb-4">{col.title}</h3>
                  <div className="space-y-2">
                    {col.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
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

      {/* COMMON OBJECTIONS */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-objections">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The objections we hear from sales directors before they sign
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The AI SDR is a newer category. Sales directors have legitimate concerns about it. Here is how we answer the most common ones directly.
            </p>
            <div className="space-y-6">
              {[
                { objection: "Our buyers are sophisticated — they will know it is AI.", response: "Cold outreach was never a personal letter from the CEO. Buyers at the companies you are targeting receive hundreds of cold emails per month. What they care about is whether the message is relevant and whether it earns a response. AI-generated relevance at scale outperforms generic human outreach in every A/B test we have run. The response that books the meeting is one that feels specific to their situation — and that is exactly what we engineer." },
                { objection: "We tried cold email before and it did not work.", response: "The most common failure mode is not message quality — it is deliverability. If your previous email campaign was sent from your primary domain without a proper warm-up, DKIM setup, and inbox-placement monitoring, it likely ended up in spam before the first prospect ever read it. The second failure mode is a poorly-defined ICP — messages sent to the wrong people with the right message never work. We solve the infrastructure problem and the targeting problem before the first email sends." },
                { objection: "We want a human SDR who can build relationships.", response: "Correct — and we agree. The AI SDR is the prospecting layer: it finds the right people, earns the first reply, qualifies the interest, and books the meeting. The human closer is then free to build the relationship on a discovery call with a fully-briefed prospect who already knows who you are. Most clients who make this objection end up with a better closer-to-SDR ratio after 90 days than they had before — because closers spend more time closing." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10" data-testid={`objection-${i}`}>
                  <p className="text-sm font-bold text-orange-400 mb-3">Objection: {item.objection}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FAQSection
        faqs={sdrFAQs}
        title="AI SDR Agent — common questions"
        subtitle="What B2B sales teams ask before deploying their first AI SDR"
        schemaId="faq-ai-sdr-agent"
        emitJsonLd={true}
      />

      {/* REPORTING STACK */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-reporting">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The reporting stack — what you see every week
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              No dashboard login required. Every Friday the sales director receives a structured written report in their inbox. Here is exactly what it covers.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { category: "Volume metrics", items: ["Emails sent and LinkedIn connection requests accepted", "Reply rate by day and by message version", "Open rate by subject-line variant (A/B results)", "Bounce rate and unsubscribe rate by domain"] },
                { category: "Pipeline metrics", items: ["Qualified meetings booked in the week", "Qualification rate on positive replies", "Prospects in active qualification conversations", "Prospects declined or disqualified with reason codes"] },
                { category: "Deliverability health", items: ["Inbox placement rate from GlockApps seed-list monitoring", "Postmaster Tools spam-rate trend", "Reply rate trajectory (leading indicator of deliverability drift)", "Bounce and catch-all percentage by sending domain"] },
                { category: "Creative performance", items: ["Top-performing subject line and opening sentence combination", "Worst-performing variant flagged for revision", "A/B test results with statistical significance note", "Recommended creative change for the following week"] },
              ].map((section, i) => (
                <div key={i} className="p-5 rounded-xl border bg-card" data-testid={`report-section-${i}`}>
                  <h3 className="text-sm font-bold text-foreground mb-3">{section.category}</h3>
                  <div className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-muted/40 border">
              <p className="text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Quarterly business review:</strong> Every 90 days, the weekly report is supplemented with a longer written QBR covering pipeline attribution (how much closed revenue can be traced to AI SDR-sourced meetings), cohort analysis of meeting quality over time, ICP accuracy review against what actually closed, and a revised sequence strategy for the next quarter based on what the data shows.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INTEGRATION STACK */}
      <ScrollReveal>
        <section className="py-12 bg-background" data-testid="section-integrations">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tools the AI SDR Agent integrates with</h2>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">The agent connects to the tools your sales team already uses. No new platform required. If you are not using any of these, we provision the right stack as part of onboarding.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { tool: "Apollo.io", role: "Prospect sourcing and enrichment" },
                { tool: "Cognism", role: "GDPR-compliant EU contact data" },
                { tool: "Instantly / Smartlead", role: "Email sequencing and warm-up" },
                { tool: "LinkedIn Sales Navigator", role: "Account targeting and connection outreach" },
                { tool: "HubSpot CRM", role: "Lead creation, deal stage, and activity logging" },
                { tool: "Salesforce", role: "Opportunity creation and campaign attribution" },
                { tool: "Pipedrive", role: "Pipeline creation and activity sync" },
                { tool: "Calendly / Cal.com", role: "Meeting booking link embedded in reply sequences" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg border bg-card" data-testid={`integration-${i}`}>
                  <p className="text-xs font-semibold text-foreground mb-1">{item.tool}</p>
                  <p className="text-xs text-foreground/55">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <MaltaContextBlock slug="ai-sdr-agent" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <TrustBlock variant="visit" />
      </div>

      <RelatedServices slug="/services/ai-sdr-agent" />
    </Layout>
  );
}
