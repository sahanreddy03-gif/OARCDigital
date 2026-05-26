import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Brain, Calendar, Mail, BarChart3, Shield, Zap, Users, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import FAQSection, { type FAQItem } from "@/components/FAQSection";

const heroImage = "/attached_assets/stock_images/marketing_funnel_aut_5c1f1337.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Marketing funnel automation diagram showing stages from awareness to close with AI qualification layer",
  description: "A funnel automation diagram for a Malta-based B2B business, illustrating the six stages from lead capture through AI qualification, calendar booking, lifecycle email, CRM hygiene, and revenue dashboards.",
  url: "https://oarcdigital.com/attached_assets/stock_images/marketing_funnel_aut_5c1f1337.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/stock_images/marketing_funnel_aut_5c1f1337.jpg",
};

const layers = [
  {
    step: "01",
    title: "Form-to-CRM piping with enrichment, dedup, and routing",
    detail: "Leads land in the right pipeline with the right owner within seconds of submitting a form — not in a Slack message someone might or might not see on Tuesday. Typical effort: 2–3 weeks.",
    icon: Database,
  },
  {
    step: "02",
    title: "AI qualification — protected closer calendars",
    detail: "The OARC AI SDR or the Lead Generation Engine decides which leads earn a meeting and which earn a long-cycle nurture. Your closers only see qualified, intent-confirmed contacts.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Calendar booking with no-show recovery",
    detail: "Qualified prospects book directly into the right calendar. No-show recovery sequences reclaim 25–40% of would-be-lost meetings. Rebooking happens automatically.",
    icon: Calendar,
  },
  {
    step: "04",
    title: "Lifecycle email cadences keyed to behaviour",
    detail: "Not arbitrary day-counts. Prospects who are not ready right now stay engaged for the year that follows. The single most undervalued revenue lever in most B2B stacks.",
    icon: Mail,
  },
  {
    step: "05",
    title: "CRM stage hygiene — consistent pipeline data",
    detail: "Deal stages that mean the same thing across every rep. Hygiene rules that fire automatically when a deal stalls. Forecast accuracy that actually holds in a board meeting.",
    icon: Shield,
  },
  {
    step: "06",
    title: "Dashboards joining all of the above",
    detail: "Funnel-stage conversion rates visible weekly, not quarterly. Every metric has a curated definition. Every change has commentary. The bottleneck is always visible.",
    icon: BarChart3,
  },
];

const metrics = [
  { value: "35–60%", label: "Funnel conversion lift", note: "median 90 days after a Funnel Build" },
  { value: "25–40%", label: "No-show recovery rate", note: "from automated rebooking sequences" },
  { value: "6", label: "Shipped layers", note: "each independently observable" },
];

const tools = [
  { area: "CRM", options: "HubSpot (SMB), Salesforce (enterprise), Pipedrive (< 20 seats), Close / Attio (fast-growth startups)" },
  { area: "Email automation", options: "Klaviyo (ecommerce), Customer.io / Iterable (SaaS), HubSpot (B2B)" },
  { area: "Calendar booking", options: "Calendly, Cal.com, Chili Piper (high-volume routing)" },
  { area: "Workflow glue", options: "n8n, Workato, Make, or custom Node.js workers depending on volume" },
];

const pricingTiers = [
  {
    name: "Funnel Audit",
    price: "€1,800",
    unit: "project",
    desc: "2-week diagnostic: map every funnel stage, name the friction points, produce a top-3 fix list with effort estimates.",
  },
  {
    name: "Funnel Build",
    price: "€9,500",
    unit: "project",
    desc: "6–8 week sprint: form-to-CRM layer + AI qualification + lifecycle email refresh. Observable lift before the retainer starts.",
    featured: true,
  },
  {
    name: "Funnel Retainer",
    price: "€2,900",
    unit: "/ month",
    desc: "Ongoing iteration: A/B tests, lifecycle tweaks, AI agent tuning, and weekly performance reviews.",
  },
];

const failureModes = [
  {
    num: "01",
    title: "Forms that post to Slack, not a CRM",
    desc: "The most common Malta funnel failure. A form fires a Slack notification, a rep sees it Tuesday, and the lead went cold on Sunday when they were ready to buy. Fix this before anything else.",
  },
  {
    num: "02",
    title: "Closers doing qualification work",
    desc: "When your closers spend 40% of their calls disqualifying leads, you have a qualification problem, not a sales problem. AI qualification protects closer time and compresses the qualification cost dramatically.",
  },
  {
    num: "03",
    title: "Lifecycle email that stops after the sale",
    desc: "Most B2B companies have a welcome flow and nothing else. The year after the first close — the expansion email, the renewal nudge, the re-engagement sequence — is where the compounding revenue lives.",
  },
  {
    num: "04",
    title: "CRM stages that mean different things to different reps",
    desc: "If 'qualified' means something different across 5 reps, your pipeline number is fiction. CRM hygiene rules enforce consistent definitions and auto-archive stale deals — so the forecast holds.",
  },
  {
    num: "05",
    title: "Dashboards built on assumptions, not definitions",
    desc: "A dashboard that shows 'pipeline created' without defining 'pipeline' is worse than no dashboard — it gives false confidence. We define every metric before building every chart.",
  },
  {
    num: "06",
    title: "Rebuilding instead of instrumenting what exists",
    desc: "Most clients have working pieces. We audit first, keep what works, and rebuild only the broken layers. You pay for remediation, not for demolishing what already functions.",
  },
];

const whoItsFor = [
  {
    icon: Target,
    title: "B2B SaaS companies (10–200 seats)",
    desc: "Discovery-call funnels that leak qualified leads at the form stage. Long-cycle nurture that keeps multi-stakeholder deals warm across 6-month decision processes.",
  },
  {
    icon: Users,
    title: "Professional services firms",
    desc: "Law firms, consultancies, and audit practices in Valletta and Birkirkara where a single qualified meeting is worth thousands in annual fees. Every qualified meeting counts.",
  },
  {
    icon: Zap,
    title: "eCommerce brands with a B2B or wholesale channel",
    desc: "Brands that run a consumer store and a trade or wholesale pipeline. The consumer flows are often Klaviyo — the B2B funnel is often nothing at all. We build both layers.",
  },
];

const funnelAutoFAQs: FAQItem[] = [
  {
    question: "What is funnel automation and how does it differ from revenue automation?",
    answer: "Funnel Automation covers the acquisition-through-close pipeline — from the moment a lead fills in a form to the moment a deal is marked closed-won. Revenue Automation is the broader scope: it extends past the sale into billing, customer-success notifications, renewals, and finance reporting. Most clients start with Funnel Automation and graduate into Revenue Automation when the pipeline is running cleanly.",
  },
  {
    question: "How long does a Funnel Build take?",
    answer: "The Funnel Build is a 6–8 week sprint. We ship each of the six layers in sequence so you see the lift from layer 1 before layer 2 begins. The Funnel Audit that precedes it takes 2 weeks and produces the prioritised layer list.",
  },
  {
    question: "Do you take over our existing automation, or rebuild from scratch?",
    answer: "Audit-first. Most clients have working pieces — welcome flows, basic onboarding — and broken pieces — form-to-CRM piping, deal-stage hygiene. We keep what works and rebuild the broken layers. You pay for remediation, not for demolishing what functions.",
  },
  {
    question: "Which CRMs do you build on?",
    answer: "HubSpot (SMB), Salesforce (enterprise), Pipedrive (under 20 seats), Close and Attio (fast-growth startups). We are CRM-agnostic and recommend a single source of truth — fragmented stacks dilute the automation gains.",
  },
  {
    question: "Do you take vendor commissions on the tools you recommend?",
    answer: "No. Tool selection is purely on stack-fit and cost-per-event. You own the licenses and can leave OARC at any time without re-platforming. We are paid for the implementation and ongoing optimisation, not for selling you software.",
  },
  {
    question: "What is the Funnel Audit and do I need it before the Build?",
    answer: "The Funnel Audit is a 2-week diagnostic — we map every funnel stage, name the friction points, and produce a top-3 fix list with effort estimates. We strongly recommend it before the Build because the audit determines layer priority. Clients who skip the audit sometimes build in the wrong order and delay their first observable lift.",
  },
  {
    question: "What does a typical Malta B2B client see in 90 days?",
    answer: "35–60% lift in funnel conversion rate, 25–40% no-show recovery from automated rebooking sequences, and a forecast dashboard that finance will actually trust. The exact numbers depend on the starting-state audit — which is why we run the audit before making any guarantees.",
  },
  {
    question: "Can funnel automation work for a hospitality or clinic business?",
    answer: "Yes — the layers are the same but the trigger events differ. Instead of a form-fill, the trigger is a booking request, a review window, or a re-appointment reminder. We have built funnel automation for Malta restaurants, private clinics, and spa businesses as well as B2B companies.",
  },
];

export default function PageContent() {
  return (
    <div className="border-t">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Marketing funnel automation diagram showing the six stages from lead capture through AI qualification to closed deal for a Malta B2B business"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            data-testid="img-hero-funnel-automation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-900/60" />
        </div>
        <div className="relative bg-transparent text-white py-20 px-6 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Six Layers, Each Shipped Independently</span>
            </div>
            <h1 data-speakable className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Build a Funnel That<br />
              <span className="text-orange-400 italic">Works While You Sleep.</span>
            </h1>
            <p data-speakable className="text-zinc-300 text-lg leading-relaxed mb-4 max-w-2xl">
              Wire the funnel from ad-click to closed deal — instrumented and self-tuning. Every stage automated, every bottleneck visible.
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-2xl mb-8">
              The typical Malta SME funnel looks great in a slide deck and leaks like a sieve in production. Forms post to a Slack message someone might not see. The lifecycle email cadence is two emails written in 2021. The dashboard says &quot;pipeline created&quot; but nobody can explain why conversion rate dropped from 12% in May to 4% in June.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors" data-testid="button-hero-cta">
                Book a Funnel Audit <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="p-8 rounded-xl border border-white/10 text-center" data-testid={`metric-${i}`}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{m.value}</div>
                <div className="font-medium text-white mb-1">{m.label}</div>
                <div className="text-sm text-zinc-500">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 LAYERS */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The 6 Layers of Funnel Automation</h2>
          <p className="text-muted-foreground mb-10">We deliberately do not bundle them into one monolithic platform — ship layer 1, prove the lift, move to layer 2.</p>
          <div className="space-y-4">
            {layers.map((layer) => (
              <ScrollReveal key={layer.step}>
                <div className="p-6 rounded-xl bg-card border flex items-start gap-5" data-testid={`layer-${layer.step}`}>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-orange-500 font-bold text-sm">{layer.step}</span>
                      <h3 className="font-bold">{layer.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{layer.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Who Funnel Automation is built for</h2>
          <p className="text-zinc-400 mb-10">Funnel Automation works across business types — the layers are the same, the trigger events differ.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {whoItsFor.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-white/10 h-full" data-testid={`who-${i}`}>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FUNNELS FAIL */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The 6 reasons Malta B2B funnels fail</h2>
          <p className="text-muted-foreground mb-10">Most Malta SMEs we audit are spending money on the right channels but making structural errors that make funnel performance unknowable and improvement guesswork.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {failureModes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-5 rounded-xl bg-card border h-full" data-testid={`failure-${i}`}>
                  <div className="text-2xl font-bold text-orange-500/30 mb-2">{item.num}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tools We Build On — and Why</h2>
          <p className="text-zinc-400 mb-6">We do not take vendor commissions. Tool selection is purely on stack-fit and cost-per-event. You own the licenses — you can leave OARC at any time without re-platforming.</p>
          <div className="space-y-3 mb-12">
            {tools.map((t, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/10 flex items-start gap-4" data-testid={`tool-${i}`}>
                <span className="font-bold text-sm w-40 flex-shrink-0 text-orange-400">{t.area}</span>
                <p className="text-sm text-zinc-400">{t.options}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground mb-6">Start with the Audit to know exactly where the bottleneck is before committing to the Build.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`rounded-xl border p-6 bg-card flex flex-col ${tier.featured ? "border-orange-500" : ""}`} data-testid={`pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {tier.featured && <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">Most popular</div>}
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-orange-600">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <p className="text-sm text-muted-foreground mb-3">
              <strong className="text-foreground">Funnel Automation vs Revenue Automation — what&apos;s different:</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Funnel Automation covers acquisition-through-close — the conversion pipeline. Revenue Automation is the wider scope: it adds billing, customer-success, and finance integration on top. Most clients land on Funnel Automation first, then expand into the revenue automation layer once the pipeline is running cleanly.
            </p>
            <Link href="/services/revenue-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              See Revenue Automation — the full-scope system above the funnel
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT FUNNEL AUTOMATION IS NOT */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Funnel Automation is not</h2>
          <p className="text-muted-foreground mb-8">
            Setting clear expectations before engagement is part of the service. The following situations call for a different approach.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { title: "A campaign agency", desc: "Funnel Automation builds infrastructure — the pipes, the triggers, the hygiene rules — not one-off campaigns. If you want a single email broadcast or a seasonal promotion, that is Email Creative or Content Marketing." },
              { title: "A replacement for human closers", desc: "AI qualification and calendar automation protect closer time and improve the quality of meetings. They do not close deals. The closer is the point of the system." },
              { title: "A quick win", desc: "The Funnel Build is a 6–8 week sprint. The observable lift comes in the first 30 days but the system compounds over 6–12 months. Clients who need pipeline in 48 hours should start with Paid Advertising." },
              { title: "A single-platform solution", desc: "We pick tools on stack-fit, not on partnership commissions. If you already have a CRM that works, we build on it. We do not require you to re-platform to work with us." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border h-full">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">What happens after the Funnel Build</h2>
          <p className="text-muted-foreground mb-6">
            The Build ends when all six layers are live and the bottleneck dashboard shows each stage conversion rate. The Funnel Retainer takes over from there — iterating on the configuration, running A/B tests on lifecycle copy, tuning AI qualification thresholds, and reporting weekly on what moved and why.
          </p>
          <div className="space-y-3 mb-12">
            {[
              { period: "Month 3", action: "All six layers live. Baseline conversion rates established. Weekly RevOps standup confirms the bottleneck for the next iteration cycle." },
              { period: "Month 4–6", action: "Lifecycle copy A/B tests running — subject lines, CTA copy, send timing against industry benchmarks. AI qualification thresholds tuned against the real discovery-call conversion rate." },
              { period: "Month 6+", action: "The funnel compounds. No-show recovery improvements compound, lifecycle revenue compounds, and CRM data quality enables more sophisticated segmentation. Clients typically expand into the Revenue Automation layer once the pipeline is running cleanly." },
            ].map((row, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4" data-testid={`after-build-${i}`}>
                <span className="font-bold text-orange-500 text-sm w-20 flex-shrink-0 mt-0.5">{row.period}</span>
                <p className="text-muted-foreground text-sm">{row.action}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h3 className="font-bold mb-3">How Funnel Automation fits in the growth stack</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Funnel Automation is the conversion layer — it maximises the value of every lead that enters the pipeline. Content Marketing and SEO drive organic leads into the funnel. Paid Advertising drives paid leads. Revenue Automation extends past the sale into billing and customer success. Most mature OARC retainer clients run Funnel Automation in parallel with at least one acquisition channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/services/revenue-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
                Revenue Automation — the layer above <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
                Solutions — see the full stack <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <MaltaContextBlock slug="funnel-automation" />
      </div>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Funnel Automation in the Malta Business Context</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Malta&apos;s B2B market is small and relationship-driven — a discovery call missed because of a form-to-Slack gap can cost a deal to a competitor who simply picked up the phone first. OARC Digital&apos;s Funnel Automation practice is calibrated for the Malta market: the qualified buyer pool for most B2B products on the island is between 50 and 500 companies, which means every lead is materially more valuable than in a continental European market.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            We have built funnel automation for hospitality operators with properties in St Julian&apos;s and Sliema, for fintech companies in the Valletta Financial Centre, for professional-services firms near Pjazza Antoine de Paule in Vittoriosa, and for iGaming operators in the Central Business District. In every case the principles are the same — clean routing, protected closer time, and lifecycle sequences that keep prospects warm for the long decision cycles typical of the Malta market.
          </p>
          <p className="text-foreground leading-relaxed">
            EU-region infrastructure, GDPR-compliant consent flows, and where required MGA or MFSA-compliant marketing governance are standard on every OARC funnel build for regulated Malta businesses.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={funnelAutoFAQs}
        title="Funnel Automation questions, answered directly"
        subtitle="What Malta B2B businesses need to know before engaging a funnel automation partner"
        schemaId="faq-funnel-automation"
      />

      <div className="max-w-4xl mx-auto px-6 pb-8">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who works on your Funnel Automation account</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every Funnel Build is assigned a named funnel architect — a senior RevOps specialist who owns the layer plan, the implementation timeline, and the weekly standup. The architect is supported by a CRM implementation engineer, a lifecycle email specialist, and an AI qualification agent from the OARC Birkirkara team. You do not get handed off to a junior account manager after the proposal is signed.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The weekly standup during the Build is 30 minutes and covers the layer shipped in the past week, the conversion rate delta observed, and the layer starting next week. Standup notes are shared within 24 hours. Once the Build transitions to the Retainer, the standup cadence moves to bi-weekly and focuses on test results and optimisation decisions.
          </p>
          <p className="text-foreground leading-relaxed">
            Every Funnel Retainer client also receives a quarterly business review — a 60-minute meeting with a written deck covering conversion-rate trends by funnel stage, A/B test winners and losers for the quarter, no-show recovery performance, AI qualification accuracy, and the roadmap for the next 90 days. The QBR is where the client and the OARC team decide what to double down on and what to stop.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Funnel Automation and AI Agent Integration</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Layer 2 of the Funnel Automation stack — AI qualification — is powered by the same AI SDR and Lead Generation Engine technology available as a standalone OARC service. For clients who want to go deeper on the AI agent layer, the standalone Hire AI Employees service provides a full AI SDR deployment, AI Support Specialist, and AI Appointment Booker configured as permanent agents in the revenue stack — not as a workflow that someone has to trigger manually.
          </p>
          <p className="text-foreground leading-relaxed">
            The Funnel Build integrates with these AI agents from day one. The AI qualification agent is configured alongside the CRM routing layer in week 2, so the qualification intelligence and the CRM hygiene compound from the same set of trigger events. Clients who start with Funnel Automation and later deploy the AI agent layer do not need to rebuild — the funnel infrastructure is already wired for it.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/services/hire-ai-employees" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Hire AI Employees — the full AI agent layer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="mb-12 p-6 rounded-xl border bg-card">
          <h2 className="text-xl font-bold mb-3">What the Funnel Audit covers — and what it costs</h2>
          <p className="text-sm text-muted-foreground mb-3">
            The Funnel Audit is a 2-week engagement at €1,800. We map every funnel stage from ad-click to CRM deal, name every friction point with evidence, and produce a top-3 fix list with effort and expected lift estimates. The audit deliverable is a written document — not a slide deck of arrows — that your team can implement independently or hand to OARC for the Build.
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            The audit includes a 90-minute workshop at kickoff to align on the ICP, the conversion events that matter to finance, and the success thresholds we will measure after each layer ships. Most clients report that the workshop alone produces two or three insights they had not previously quantified.
          </p>
          <p className="text-sm text-muted-foreground">
            There is no obligation to proceed with the Funnel Build after the audit. If you want to take the findings in-house, that is your right. The roadmap document belongs to you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Funnel Automation Pricing — Audit, Build, and Retainer</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Funnel Automation is offered at three engagement levels. The Funnel Audit (€1,800 / 2 weeks) is the diagnostic — a map of every stage, every friction point, and a written recommendation for the Build. The Funnel Build (€6,500 / 6 weeks) is the full six-layer implementation, from form-to-CRM routing through to lifecycle email and AI qualification. The Funnel Retainer (€2,200/month) takes over after the Build to run A/B tests, tune AI thresholds, and report weekly on what moved and why.
          </p>
          <p className="text-foreground leading-relaxed">
            Clients who start with the Build may add the Retainer at any point. There is no lock-in on the Retainer — 30 days notice to exit, and the infrastructure built during the Build belongs to the client. We do not build on proprietary tools you cannot take with you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>
        <RelatedServices slug="/services/funnel-automation" />
      </div>
    </div>
  );
}
