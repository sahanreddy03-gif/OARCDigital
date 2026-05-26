"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Inbox, Calendar, FolderOpen, Bell, FileCheck, Users, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";

const heroImage = "/attached_assets/3_1763228440278.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Business professional overwhelmed by administrative paperwork — the problem OARC AI Admin Agent solves",
  description: "The administrative burden that AI admin agents eliminate — inbox overload, scheduling chaos, document filing, and follow-up management that consume operator hours in Malta SMEs.",
  url: "https://oarcdigital.com/attached_assets/3_1763228440278.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/3_1763228440278.jpg",
};

const adminTasks = [
  { icon: Inbox, title: "Inbox triage", detail: "Every overnight email read, categorised, and actioned before your team logs on. Routine replies drafted and sent. Escalations flagged with reason codes." },
  { icon: Calendar, title: "Scheduling and diary management", detail: "Meeting requests accepted, declined, or rescheduled against pre-set rules. Travel buffers, timezone conversions, and conflict detection handled automatically." },
  { icon: FolderOpen, title: "Document filing and organisation", detail: "Supplier invoices, signed agreements, client briefs — filed into the correct Drive or SharePoint folder the moment they arrive. No manual sorting, no misfiled documents." },
  { icon: Bell, title: "Follow-up management", detail: "Outstanding documents, unanswered proposals, overdue invoices — tracked and chased on schedule. Nothing falls through because a human forgot to check." },
  { icon: FileCheck, title: "Data entry and CRM hygiene", detail: "Contact records updated, deal stages moved, notes logged after every client interaction. Your CRM stays current without anyone spending Friday afternoon on it." },
  { icon: Users, title: "Supplier and contractor coordination", detail: "Purchase orders acknowledged, delivery confirmations filed, NDA expirations flagged. Routine supplier correspondence handled end-to-end." },
];

const tiers = [
  { name: "Solo Operator", price: "€990", period: "/month", seats: "1 user", sops: "1 core SOP", detail: "Single-user inbox triage, scheduling, and document filing. Recovers 8–12 hours of operator time per week. Most clients recover the fee inside six weeks.", highlight: false },
  { name: "Team Admin Agent", price: "€2,400", period: "/month", seats: "Up to 10 seats", sops: "3 SOPs", detail: "Multi-seat deployment with three documented workflow automations. The most common Malta SME entry point. Includes weekly tuning calls in the first 90 days.", highlight: true },
  { name: "Operations Pod", price: "€5,800", period: "/month", seats: "Unlimited", sops: "Custom", detail: "Multi-team rollout with a dedicated solutions engineer, custom CRM and ERP connectors, and EU-only inference on Azure OpenAI West Europe.", highlight: false },
];

const deployPhases = [
  { week: "Week 1", title: "SOP capture", detail: "We sit with the human owner of each recurring workflow — typically the office manager, head of ops, or EA — and document every step, exception case, and escalation criteria in plain English. This runbook is yours to keep." },
  { week: "Week 2", title: "Integration wiring", detail: "Gmail or Outlook for inbox, Google Calendar or Microsoft 365 for scheduling, Drive or SharePoint for document filing, plus Xero, HubSpot, Salesforce, or your ERP wherever the SOPs touch them." },
  { week: "Week 3", title: "Paired review", detail: "The agent runs alongside the human owner, every action queued for approval before it fires. This is where edge cases surface and the runbook gets refined against reality." },
  { week: "Week 4+", title: "Auto-approval ramp", detail: "Most clients reach 70–80% auto-approval by week four and 80–85% by week six. Steady-state at month three, then monthly tuning unless a SOP changes significantly." },
];

const adminFAQs: FAQItem[] = [
  {
    question: "What admin tasks can an AI admin agent actually handle?",
    answer: "Inbox triage and draft replies, meeting scheduling and calendar management, document filing into Drive or SharePoint, follow-up chasing for outstanding documents or invoices, CRM data entry, and supplier correspondence. The agent works to a documented SOP — if the task has a clear rule, the agent handles it. If it requires genuine judgement, it routes to a human.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Four weeks from kickoff to steady-state operation. Week one is SOP capture. Week two is integration wiring. Week three is paired review alongside the human owner. By week four most clients are at 70–80% auto-approval. By week six the majority of routine tasks are fully automated.",
  },
  {
    question: "Is it secure — can it access our email and files safely?",
    answer: "Yes. The agent runs with least-privilege OAuth scopes — it only accesses what the documented SOPs require. Every action is logged in an immutable audit trail. Anything below a configured confidence threshold goes to a human-in-the-loop review queue before firing. EU-only inference is available on the Operations Pod tier using Azure OpenAI West Europe.",
  },
  {
    question: "How is this different from hiring a virtual assistant?",
    answer: "A virtual assistant works fixed hours, takes holidays, needs onboarding when they leave, and costs €18,000+ to replace when they do. The AI admin agent works 24 hours a day, 365 days a year, in under 30 seconds per task, and never needs re-onboarding. Most Malta clients reach the same output as a well-trained PA at 30–40% of the total cost, including the recruitment and turnover risk.",
  },
  {
    question: "What happens when the agent encounters something it can't handle?",
    answer: "It routes to the human review queue with a reason code: 'no matching SOP rule', 'ambiguous sender intent', or 'exception case: escalation required'. Most clients see fewer than 10–15% of tasks reach the review queue by week six. The queue summary arrives in your inbox each morning — no dashboard login required.",
  },
  {
    question: "Can the agent work in Maltese and English?",
    answer: "Yes. Production deployments run bilingual English/Maltese correspondence for local hospitality groups, English/Italian flows for real-estate agencies serving Sicilian buyers, and all-English inboxes for EU SaaS companies headquartered on the islands. The reply voice card is tuned to your brand tone during onboarding.",
  },
  {
    question: "What is included in the weekly report?",
    answer: "Every Friday your principal receives a one-page written summary in their inbox: total tasks handled, auto-send rate on outbound replies, tasks routed to human review with reason codes, follow-ups closed during the week, and any SOPs that surfaced exception cases needing a rule update. No dashboard login required.",
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
            alt="Business professional overwhelmed by stacks of administrative paperwork — the problem OARC AI Admin Agent is built to solve"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-orange-500 mb-6" data-testid="text-eyebrow">
            AI Admin Agent — OARC AI Employees
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-8"
            data-speakable
            data-testid="heading-hero"
          >
            Stop Drowning in Admin.<br className="hidden md:block" /> Your AI Employee Has It Covered.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl" data-speakable>
            Inbox triaged before 8:30am. Meetings scheduled automatically. Documents filed the moment they arrive. Follow-ups chased on schedule — without you touching any of it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors"
                data-testid="button-hero-cta"
              >
                Book a discovery call <ArrowRight className="w-5 h-5" />
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

      {/* WHAT THE AGENT HANDLES */}
      <ScrollReveal>
        <section className="py-20 bg-background border-t" data-testid="section-tasks">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every routine admin task. Handled.
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                The OARC AI Admin Agent handles the recurring, rule-based work that fills two hours of your ops manager&apos;s morning — before your team even logs on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminTasks.map((task, i) => (
                <div key={i} className="p-6 rounded-xl border bg-card" data-testid={`card-task-${i}`}>
                  <task.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{task.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{task.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* BEFORE 8:30AM SECTION */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-morning">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What happens before your team arrives
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Before your first team member opens their laptop, the AI Admin Agent has already processed the overnight inbox: flagged the three emails that need a human reply by 10am, drafted responses to the twelve that are routine, filed the four supplier confirmations into the correct Drive folders, declined the meeting request that conflicts with the quarterly planning block, and sent a reminder to the contractor whose NDA has been outstanding for six days.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The average production client sees inbox triage complete before 8:30am, a daily action list in Slack by 9:00am, and zero missed follow-ups across the working week. What used to take two hours of the ops manager&apos;s morning takes twelve minutes of human review. The rest is verification and sign-off, not handling.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "8:30am", label: "Inbox triage complete every morning" },
                { metric: "12 min", label: "Human review vs 2+ hour manual process" },
                { metric: "0", label: "Missed follow-ups across the working week" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center" data-testid={`stat-${i}`}>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{stat.metric}</div>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DEPLOYMENT PHASES */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-deploy">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four weeks from kickoff to autonomous admin
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-12">
              Every deployment starts with a one-week SOP capture — we document every step, every exception case, and every escalation criteria for each recurring workflow. That document is yours to keep and operate independently.
            </p>
            <div className="space-y-6">
              {deployPhases.map((phase, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl border bg-card" data-testid={`phase-${i}`}>
                  <div className="shrink-0 bg-orange-500/10 rounded-lg flex items-center justify-center px-3 py-2">
                    <span className="text-orange-600 font-bold text-sm whitespace-nowrap">{phase.week}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MALTA CONTEXT */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-malta">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Malta SMEs deploy the AI Admin Agent first
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Malta sits in a particular hiring squeeze. The local labour pool for skilled administrative talent is thin, multilingual EU candidates are expensive, and turnover for EA and PA roles in Sliema and Valletta finance houses runs above twenty percent annually. A properly-trained PA at €32–42k fully-loaded compensation, with a re-recruit-and-onboard cost of roughly €18k every time someone leaves, creates a compounding cost that the AI Admin Agent compresses.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Production deployments from Birkirkara cover bilingual English and Maltese correspondence common to local hospitality groups, the bilingual English and Italian flows used by Maltese real-estate agencies serving Sicilian buyers, and the all-English ops inboxes used by EU SaaS scaleups headquartered on the islands. The voice card is tuned per client during onboarding — the agent does not arrive sounding generic.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Industries already running the OARC AI Admin Agent in Malta: financial services firms in Valletta and Sliema (client onboarding document chasing, meeting scheduling across CEST and GMT time zones), hospitality groups managing multiple properties (reservation overflow, supplier correspondence, pre-arrival guest briefings), real-estate agencies (portal enquiry triage, viewing confirmation flows), and professional services firms including architects, engineering consultancies, and legal practices handling the intake process from initial enquiry through to proposal sending.
            </p>
            <div className="p-6 rounded-xl border bg-card">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">EU data residency included</p>
                  <p className="text-sm text-foreground/70">All AI inference runs on Azure OpenAI West Europe. Customer-held encryption keys are available on the Operations Pod tier. The agent does not send data outside EU infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PRICING TIERS */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-pricing">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Investment and what&apos;s included
              </h2>
              <p className="text-lg text-foreground/70">
                Every tier includes onboarding, weekly tuning during the first 90 days, the audit log, and the human-review queue. No per-action billing — the monthly retainer covers it all.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-xl border ${tier.highlight ? "border-orange-400 bg-orange-50/30" : "bg-card"}`}
                  data-testid={`pricing-tier-${i}`}
                >
                  {tier.highlight && (
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">Most popular</div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-foreground/60">{tier.period}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-sm text-foreground/70">{tier.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="text-sm text-foreground/70">{tier.sops}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{tier.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WEEKLY REPORT */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-report">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What you receive every Friday
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Every Friday the principal receives a one-page written summary in their inbox — no dashboard login required. It covers total tasks handled, auto-send rate on outbound replies, tasks routed to human review with reason codes, follow-ups that closed in the week, and any SOPs that surfaced exception cases requiring a rule update.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Weekly tuning calls in the first ninety days cover reply quality, exception handling, and prompt drift. Most clients reach 80–85% auto-approval by week six and steady-state by month three, at which point tuning cadence drops to monthly unless a significant SOP changes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Total tasks handled that week",
                "Auto-send rate on outbound replies",
                "Tasks routed to human review with reason codes",
                "Follow-ups that closed during the week",
                "SOP exception cases flagged for rule updates",
                "Agent health metrics and uptime confirmation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3" data-testid={`report-item-${i}`}>
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHERE IT FITS */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-ecosystem">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Admin Agent as your first AI hire
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              The Admin Agent is the foundation. Once the recurring administrative load is offloaded, most clients add a second agent within ninety days — typically the{" "}
              <Link href="/services/ai-sdr-agent" className="text-orange-600 hover:text-orange-700 underline">AI SDR</Link>{" "}
              for outbound, the{" "}
              <Link href="/services/ai-support-specialist" className="text-orange-600 hover:text-orange-700 underline">AI Support Specialist</Link>{" "}
              for tier-one customer service, or the{" "}
              <Link href="/services/ai-appointment-booker" className="text-orange-600 hover:text-orange-700 underline">AI Appointment Booker</Link>{" "}
              for hospitality or clinic scheduling overflow. Because every agent on the OARC platform shares the same data layer and audit infrastructure, adding the second agent is a fortnight, not a project.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              If you are evaluating multiple admin and EA tooling options — Lindy, Relevance AI, Cassidy, Microsoft Copilot — the practical difference is that OARC ships and operates the agent for you, in EU regions, with humans who answer the phone in Malta timezone when something needs tuning. The product is the managed service, not the model.
            </p>

            <div className="p-6 rounded-xl border bg-muted/40">
              <h3 className="text-base font-semibold text-foreground mb-3">Part of the OARC AI Employees programme</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                The Admin Agent is one of ten pre-built AI roles available through the OARC platform. If you are scoping a broader AI employee rollout — or want to compare the Admin Agent alongside the SDR, Support Specialist, and Appointment Booker — start at the hub.
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

      {/* ADMIN TASKS PRIORITIES */}
      <ScrollReveal>
        <section className="py-20 bg-muted/30" data-testid="section-priorities">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The five admin workflows Malta operators automate first
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Not every admin task should be automated at once. The first ninety days focus on the five workflows that account for the majority of daily admin time and have the clearest decision rules. These are the workflows where the SOP capture is fastest and the auto-approval rate reaches 80%+ earliest.
            </p>
            <div className="space-y-4">
              {[
                { rank: "01", workflow: "Overnight inbox triage", why: "Every email that arrives after 5pm is read, categorised, and actioned before 8:30am. This workflow alone saves 90–120 minutes of the ops manager's morning and ensures nothing urgent falls through. The auto-approval rate on standard reply drafts reaches 75% in week four." },
                { rank: "02", workflow: "Meeting request handling", why: "Inbound meeting requests accepted, declined, or rescheduled against pre-set availability rules. Travel time buffered, timezone conversions applied, conflicts detected. The agent never double-books and never ignores a request. Malta clients in financial services and hospitality see the most immediate lift here — both sectors have heavy meeting volumes." },
                { rank: "03", workflow: "Document filing from email attachments", why: "Every supplier invoice, signed agreement, and client brief filed into the correct Drive or SharePoint folder at the moment of receipt. No manual sorting, no end-of-week cleanup session, no 'where did that PDF go?' conversation. The naming convention and folder logic is defined once in the SOP and applied every time." },
                { rank: "04", workflow: "Overdue follow-up chasing", why: "Outstanding proposals, unsigned documents, unpaid invoices, and unreturned information requests tracked and chased on schedule. The agent sends the first chase at a configurable interval (typically day 3 or day 5), escalates to the account owner on day 10, and logs the full chase history in the CRM. Most Malta SMEs see a 30–40% reduction in days-outstanding on receivables within the first 60 days." },
                { rank: "05", workflow: "CRM and contact hygiene", why: "New contacts created or merged from email correspondence. Deal stages moved to reflect the latest communication. Notes logged after every substantive exchange. The CRM becomes a live system instead of a Sunday-afternoon update task. Financial services firms with Salesforce and hospitality groups with HubSpot see the clearest ROI here." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl border bg-card" data-testid={`priority-${i}`}>
                  <div className="shrink-0 text-4xl font-black text-orange-500/20 select-none">{item.rank}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.workflow}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COMPARISON TO HIRING */}
      <ScrollReveal>
        <section className="py-20 bg-background" data-testid="section-vs-hiring">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Admin Agent versus hiring an EA or PA in Malta
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              The comparison most Malta operators ask for before signing. These are the structural differences, not the marketing version of them.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl border bg-card">
                <h3 className="text-base font-bold text-foreground mb-4">Human EA or PA</h3>
                <div className="space-y-3">
                  {[
                    "Works 8am–5pm, Monday–Friday",
                    "Takes sick leave, annual leave, public holidays",
                    "Fully-loaded cost: €28,000–€42,000 per year",
                    "3–6 month ramp before operating independently",
                    "Leaves after 18 months on average — re-recruit cost €18,000+",
                    "Excellent for nuanced, relationship-heavy tasks",
                    "Judgement and empathy that AI cannot replicate",
                    "One person, one task at a time",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="shrink-0 mt-0.5 text-foreground/40">—</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-orange-200 bg-orange-50/20">
                <h3 className="text-base font-bold text-foreground mb-4">OARC AI Admin Agent</h3>
                <div className="space-y-3">
                  {[
                    "Works 24 hours a day, 365 days a year",
                    "No leave, no sick days, no public holiday surcharges",
                    "€990–€5,800 per month depending on scope",
                    "4-week deployment from kickoff to autonomous operation",
                    "Never leaves — no re-recruit cost, no knowledge drain",
                    "Rule-based tasks executed in under 30 seconds",
                    "Routes ambiguous cases to a human with a reason code",
                    "Handles unlimited parallel tasks simultaneously",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-muted/40 border">
              <p className="text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">The honest answer:</strong> The AI Admin Agent is not a replacement for every EA function. It is the right tool for the high-volume, rule-based layer of admin — inbox triage, scheduling, document filing, follow-up chasing. The best deployments pair the agent with a part-time human PA who handles the relationship-heavy and judgement-intensive tasks: difficult conversations, client escalations, event planning, and the things that require reading between the lines. That combination typically delivers the output of 1.5 full-time EA positions at roughly 50% of the cost.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHAT HAPPENS AT STEADY STATE */}
      <ScrollReveal>
        <section className="py-20 bg-zinc-950 text-white" data-testid="section-steady-state">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What steady state looks like at month three
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              By month three the typical OARC AI Admin Agent client has reached a stable operating pattern: the agent handles 80–85% of admin tasks fully autonomously, 10–15% route to a morning review queue where a human approves the proposed action in under two minutes, and fewer than 5% require active human handling. The weekly report arrives Friday morning and takes the principal approximately four minutes to read.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Steady state is not static. SOPs evolve as the business changes — a new supplier relationship, a new CRM field, a new escalation path. The monthly tuning call covers any SOP that generated more than three exception cases in the previous month, and the runbook is updated accordingly. Most months there are zero SOP changes. The months that have them take 45 minutes to resolve.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { figure: "80–85%", label: "Tasks handled fully autonomously by month three" },
                { figure: "10–15%", label: "Morning review queue: human approves in under 2 minutes" },
                { figure: "4 min", label: "Weekly report reading time for the principal" },
              ].map((metric, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 text-center" data-testid={`steady-${i}`}>
                  <div className="text-2xl font-bold text-orange-400 mb-2">{metric.figure}</div>
                  <p className="text-sm text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <FAQSection
        faqs={adminFAQs}
        title="AI Admin Agent — common questions"
        subtitle="Everything Malta operators ask before deploying their first AI admin"
        schemaId="faq-ai-admin-agent"
        emitJsonLd={true}
      />

      {/* INDUSTRIES */}
      <ScrollReveal>
        <section className="py-16 bg-background" data-testid="section-industries">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Industries already running the AI Admin Agent in Malta</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { industry: "Financial services (Valletta and Sliema)", detail: "Client onboarding document chasing, meeting scheduling across CEST and GMT, regulatory correspondence filing, MFSA-related document organisation." },
                { industry: "Hospitality and property management", detail: "Reservation overflow handling, supplier correspondence, pre-arrival guest briefing emails, maintenance contractor scheduling and follow-up." },
                { industry: "Real-estate agencies", detail: "Portal enquiry triage, viewing confirmation flows, vendor and buyer follow-up chasing, CRM hygiene after each viewing." },
                { industry: "Professional services (legal, architecture, engineering)", detail: "Intake enquiry response, proposal follow-up, document collection, meeting scheduling across multiple principals' calendars." },
                { industry: "iGaming and technology companies", detail: "HR correspondence and scheduling, supplier onboarding documentation, executive calendar management, board reporting logistics." },
                { industry: "Healthcare and clinical practices", detail: "Appointment confirmation and rescheduling, referral letter filing, supplier invoice processing, registration correspondence." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card" data-testid={`industry-${i}`}>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.industry}</p>
                  <p className="text-xs text-foreground/60 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <MaltaContextBlock slug="ai-admin-agent" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <TrustBlock variant="visit" />
      </div>

      <RelatedServices slug="/services/ai-admin-agent" />
    </Layout>
  );
}
