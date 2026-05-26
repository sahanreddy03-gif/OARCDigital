"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Target, Clock, BarChart3, Users, Shield, TrendingUp, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const heroImage = "/attached_assets/stock_images/business_revenue_gro_8da91583.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Revenue automation dashboard showing pipeline metrics and AI agent outputs",
  description: "A revenue operations dashboard combining CRM pipeline data, AI agent activity, and lifecycle automation metrics for a Malta-based B2B business.",
  url: "https://oarcdigital.com/attached_assets/stock_images/business_revenue_gro_8da91583.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/stock_images/business_revenue_gro_8da91583.jpg",
};

const layers = [
  {
    step: "01",
    title: "CRM audit, redesign, and hygiene",
    detail: "Every revenue automation breaks on a broken CRM. We audit every stage definition, every deal property, and every automation rule — then rebuild the CRM so it reflects reality. Deal-stage hygiene rules fire automatically when a deal stalls, so your forecast holds in a board meeting.",
    icon: Database,
  },
  {
    step: "02",
    title: "Lifecycle lead nurture and qualification",
    detail: "Leads that aren't ready to buy now rarely get followed up on. Lifecycle sequences keep prospects engaged through six-week, six-month, and twelve-month nurture arcs — triggered by behaviour, not arbitrary day-counts. We also wire AI qualification so closers only see contacts who have confirmed intent.",
    icon: Target,
  },
  {
    step: "03",
    title: "AI SDR and AI Support deployment",
    detail: "An AI SDR handles outbound prospecting and first-touch qualification 24/7 — no sick days, no capacity cap, and a response time of under 90 seconds. AI Support handles tier-1 customer queries and renewal triggers, escalating only what genuinely needs a human.",
    icon: Users,
  },
  {
    step: "04",
    title: "Billing automation",
    detail: "Dunning sequences, failed-payment recovery, subscription upgrade flows, and renewal reminders built on Stripe or Chargebee. Most Malta SaaS companies recover 15–30% of failed payments through automated retry and email sequences that would otherwise require manual intervention.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Revenue dashboards and attribution",
    detail: "A single revenue dashboard joining CRM, email, billing, and ad-platform data. Every metric has a curated definition agreed with your finance team. Forecast accuracy is reviewed weekly against the closing pipeline so the number in the board deck is not a fiction.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "Weekly RevOps cadence",
    detail: "The Revenue Engine retainer includes a weekly RevOps standup: what moved, what stalled, what we are changing. Every quarter includes a business review measured in pipeline and revenue, not in impressions or emails sent.",
    icon: TrendingUp,
  },
];

const pricing = [
  {
    name: "RevOps Audit",
    price: "€2,900",
    unit: "project",
    desc: "3-week audit: every revenue tool, every CRM stage, every lifecycle automation. Output: a prioritised remediation roadmap with effort and ROI estimates for each item.",
    cta: "Start with the audit",
  },
  {
    name: "Revenue Engine",
    price: "€5,900",
    unit: "/ month",
    desc: "Monthly delivery — AI agents, CRM hygiene, lifecycle automation, dashboard, weekly RevOps standup. Observable lift before the end of month one.",
    cta: "Most popular",
    featured: true,
  },
  {
    name: "RevOps Build",
    price: "€22,000",
    unit: "project",
    desc: "12-week build of a permanent revenue engine — CRM redesign, automation, AI agents, dashboards — handed over to your team with full documentation.",
    cta: "Book a scoping call",
  },
];

const metrics = [
  { value: "10–25%", label: "Pipeline-to-meeting lift", note: "median 90 days after full RevOps build" },
  { value: "20–40%", label: "Marketing-attributed revenue lift", note: "measured quarterly in client QBRs" },
  { value: "15–30%", label: "Revenue ops headcount cost reduction", note: "through AI agent and automation deployment" },
];

const revenueAutoFAQs: FAQItem[] = [
  {
    question: "What does revenue automation actually do?",
    answer: "Removes the 'one human has to do this' bottleneck from revenue activity — pipeline routing, deal-stage hygiene, lifecycle email, billing dunning, customer-success notifications. The aim is double the revenue throughput at the same headcount.",
  },
  {
    question: "How is this different from funnel automation?",
    answer: "Funnel Automation covers acquisition-through-close — the conversion pipeline. Revenue Automation is the wider scope: it adds billing, customer-success, and finance integration on top. Most clients land on Funnel Automation first, then expand into the full Revenue Automation layer once the pipeline is running cleanly.",
  },
  {
    question: "What's a typical first-90-day result?",
    answer: "10–25% lift in pipeline-to-meeting conversion, 20–40% lift in marketing-attributed revenue, and 15–30% reduction in revenue ops headcount cost — measured per client and reported in a quarterly business review.",
  },
  {
    question: "Which CRMs do you build on?",
    answer: "HubSpot, Salesforce, Pipedrive, Close, Attio. We are CRM-agnostic but recommend a single source of truth — fragmented stacks dilute the automation gains.",
  },
  {
    question: "Do you take over our existing automation, or rebuild from scratch?",
    answer: "Audit-first. Most clients have working pieces (welcome flows, onboarding) and broken pieces (deal-stage hygiene, attribution). We keep what works and rebuild the broken layers. You pay for remediation, not for demolishing what already functions.",
  },
  {
    question: "Where does the data live?",
    answer: "EU-region CRM tenants by default — HubSpot EU, Salesforce EU, etc. Custom builds host on Vercel and Postgres in EU regions for GDPR compliance. We sign a DPA before any data is shared.",
  },
  {
    question: "How long until we see results?",
    answer: "The RevOps Audit delivers a roadmap in 3 weeks. The Revenue Engine retainer produces observable CRM hygiene and first automation improvements in the first 30 days. The full RevOps Build goes live in 12 weeks with a permanent system your team can run independently.",
  },
  {
    question: "What is the minimum engagement?",
    answer: "The RevOps Audit is a standalone project at €2,900. There is no minimum retainer commitment — clients who start with the audit and approve the Revenue Engine retainer can cancel with 30 days notice at any point.",
  },
];

const notForYou = [
  { title: "You want one email campaign", desc: "Revenue Automation is a system build, not a campaign. If you want a one-off email blast, we do that too — under content marketing or email creative." },
  { title: "You have no CRM at all", desc: "Automation requires a CRM as the source of truth. If you are pre-CRM, we recommend starting with a CRM set-up sprint before the full RevOps build." },
  { title: "You want to hand the wheel over completely", desc: "Revenue Automation provides infrastructure and AI agents, but strategic decisions about pricing, positioning, and target market remain human. We are a partner, not a replacement." },
];

export default function PageContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Revenue automation dashboard — AI agents, CRM pipeline, and lifecycle email metrics in a single Malta business operations view"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            data-testid="img-hero-revenue-automation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/50" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Zap className="w-3 h-3 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Revenue Operations</span>
            </div>
            <h1 data-speakable className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Build a Revenue Machine<br />
              <span className="text-orange-400 italic">That Runs Without You.</span>
            </h1>
            <p data-speakable className="text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
              Revenue Automation wires your CRM, AI agents, lifecycle email, and billing into one compounding system — so pipeline grows, deals close, and customers renew without a human touching every step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" data-testid="button-book-audit">
                  Book a free RevOps audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white font-semibold">
                  {NAP.phoneDisplay}
                </Button>
              </a>
            </div>
            <p className="mt-6 text-xs text-white/40" data-testid="text-last-updated">Last updated: 10 May 2026</p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-white/10 text-center" data-testid={`metric-${i}`}>
                  <div className="text-4xl font-bold text-orange-400 mb-2">{m.value}</div>
                  <div className="font-medium text-white mb-1">{m.label}</div>
                  <div className="text-sm text-zinc-500">{m.note}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        {/* WHAT IS REVENUE AUTOMATION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revenue that grows while you focus on strategy</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Most Malta SMEs have a revenue leak, not a revenue shortage. The leak is the 40% of qualified leads that fall out of the pipeline because a rep missed a follow-up. It is the billing dunning emails that nobody built, costing 15–30% of failed-payment recovery. It is the CRM that has seventeen different definitions of &quot;qualified&quot; across twelve reps, making the forecast useless. Revenue Automation closes those leaks with AI agents, CRM hygiene, and lifecycle automation that compound without adding headcount.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC Digital builds Revenue Automation systems for Malta-based B2B, SaaS, and professional-services businesses. The scope is broader than funnel automation — it extends past the conversion event into billing, customer success, and the finance integration that makes your revenue data believable to a CFO or an investor. The result is a single revenue engine where every touchpoint is instrumented, every drop-off is visible, and every improvement compounds.
          </p>
          <p className="text-foreground leading-relaxed">
            The audit is always the starting point. Before recommending a single automation, we map every revenue tool, every CRM stage, and every lifecycle trigger in your stack. The audit output is a prioritised remediation roadmap — you decide which layers to ship first, and we build them in order of revenue impact.
          </p>
        </section>

        {/* THE 6 LAYERS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The six layers we build</h2>
          <p className="text-muted-foreground mb-10">
            Each layer is shipped and proven independently before the next one starts. You see the lift from layer 1 before layer 2 begins — no black-box, six-month build with results promised at the end.
          </p>
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
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What every Revenue Engine retainer includes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "CRM audit, redesign, and hygiene",
              "Lifecycle and lead nurture automation",
              "AI SDR and AI Support deployment",
              "Billing automation (Stripe, Chargebee)",
              "Revenue dashboards and forecasts",
              "Weekly RevOps cadence",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{f}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REVENUE AUTOMATION vs FUNNEL AUTOMATION */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revenue Automation vs Funnel Automation — which do you need?</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Funnel Automation covers the acquisition-through-close pipeline — form-to-CRM piping, AI qualification, booking, and lifecycle email up to the point of sale. Revenue Automation extends that scope into what happens after the sale: billing, renewals, customer success, churn prevention, and finance reporting. Most clients start with Funnel Automation to fix the conversion pipeline, then graduate into Revenue Automation when they are ready to systemise the full revenue cycle.
          </p>
          <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-orange-600">Start with Funnel Automation if:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />Your conversion pipeline leaks but billing works</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />You want observable lift within 30 days</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />You are pre-Series A and need pipeline first</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-orange-600">Upgrade to Revenue Automation when:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />The pipeline works but churn and billing are leaking</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />Your CFO cannot reconcile revenue data</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />You want a full RevOps function without a full RevOps team</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-orange-500/20">
              <Link href="/services/funnel-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                See Funnel Automation — the acquisition-through-close layer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-muted-foreground mb-6">Start with the audit to know exactly what to fix before committing to a retainer.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {pricing.map((tier) => (
              <div key={tier.name} className={`rounded-xl border p-6 flex flex-col ${tier.featured ? "border-orange-500 bg-orange-500/5" : "bg-card"}`} data-testid={`pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {tier.featured && (
                  <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-3">{tier.cta}</div>
                )}
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-orange-600">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1 mb-4">{tier.desc}</p>
                {!tier.featured && (
                  <Link href="/contact" className="text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors">
                    {tier.cta} <ArrowRight className="inline w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* NOT FOR YOU */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revenue Automation is not right for every business</h2>
          <p className="text-muted-foreground mb-6">
            We would rather tell you this now than six months into an engagement that does not fit your stage. Revenue Automation is a system build — it compounds over time. The following situations call for a different approach.
          </p>
          <div className="space-y-4">
            {notForYou.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mb-16 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">Where Revenue Automation fits in the growth stack</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Revenue Automation is the operations layer. It amplifies every other service — more leads from Funnel Automation compound through a clean CRM, more content from SEO converts through automated nurture, and AI agents multiply the output of your sales team. Most mature OARC retainer clients run Revenue Automation alongside our Solutions pillar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/funnel-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              Funnel Automation — the conversion pipeline layer <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              Solutions — see how the full growth stack fits together <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* WHAT FIRST 30 DAYS LOOKS LIKE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What the first 30 days look like</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Revenue Automation is a system build, not a campaign — but clients see movement in the first 30 days, not the first 90. Here is the realistic timeline for a new Revenue Engine retainer.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { week: "Week 1", action: "RevOps Audit kick-off. We map every revenue tool, every CRM stage, every lifecycle automation. Identify the three highest-priority leaks. Deliver the remediation roadmap with effort estimates." },
              { week: "Week 2", action: "Layer 1 begins: CRM redesign. New stage definitions agreed, hygiene rules drafted, duplicates merged. First automated alerts fire — stalled-deal notifications, missing-data popups, deal-close reminders." },
              { week: "Week 3", action: "Layer 2: lifecycle email audit. Broken or absent sequences identified. Welcome flow patched first — the highest-impact fix for most clients. Initial metrics collected from the updated flow." },
              { week: "Week 4", action: "First weekly RevOps standup. Dashboard live with CRM hygiene score, pipeline by stage, and email attribution. Bottleneck for month 2 named and agreed." },
            ].map((row, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4" data-testid={`timeline-${i}`}>
                <span className="font-bold text-orange-500 text-sm w-16 flex-shrink-0 mt-0.5">{row.week}</span>
                <p className="text-muted-foreground text-sm">{row.action}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            By the end of month one, every client has a clean CRM, at least one patched lifecycle sequence, and a dashboard that tells them where the next bottleneck is. Month two focuses on that bottleneck. The system compounds from there.
          </p>
        </section>

        {/* WHY REVENUE AUTOMATION FAILS WITHOUT AN AUDIT */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why revenue automation fails without an audit first</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Most failed automation projects have the same root cause — someone automated a broken process. The automation ran flawlessly, faithfully routing broken data into a broken dashboard with broken attribution. Garbage-in, garbage-out at machine speed.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Automating without cleaning the CRM first", desc: "CRM data quality is the foundation. An automation that routes deals through a pipeline where stage definitions mean different things to different reps produces inconsistent outputs no matter how sophisticated the workflow." },
              { title: "Building complex flows before proving the basics", desc: "A seven-step lead nurture sequence adds zero value if the welcome email bounces 30% because the domain has no DMARC record. We ship the foundation first and prove each layer works before the next begins." },
              { title: "Measuring opens and clicks instead of revenue", desc: "Email open rates have been noise since Apple Mail Privacy Protection launched. We set up revenue attribution from day one — tracking email-to-conversion and flow-to-pipeline, not inbox metrics." },
              { title: "Ignoring billing automation as a revenue layer", desc: "Failed-payment recovery, subscription renewal nudges, and dunning sequences are the most reliable revenue automation — yet most Malta SaaS companies have none of them. They are typically worth 15–30% of recovered MRR." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK & GDPR */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology stack and GDPR compliance</h2>
          <p className="text-foreground leading-relaxed mb-4">
            OARC Digital builds Revenue Automation on the tools your team already knows — HubSpot, Salesforce, Pipedrive, Close, Attio — and adds the automation layer, AI agents, and revenue dashboards on top. We do not sell proprietary platforms. You own every license and can leave at any time without re-platforming.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            GDPR is built in from day one. EU-region CRM tenants, GDPR-compliant consent capture wired into every form, suppression lists that sync automatically across tools, and a data-retention policy agreed in the onboarding DPA. Malta businesses operating under the IDPC are responsible for the data their automation touches — we make that compliance demonstrable rather than assumed.
          </p>
          <p className="text-foreground leading-relaxed">
            For iGaming and fintech clients, we extend the compliance layer to include licence-specific marketing restrictions and consent audit trails that hold up to MGA or MFSA examination.
          </p>
        </section>

        <MaltaContextBlock slug="revenue-automation" />

        {/* MALTA CONTEXT EXTRAS */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue Automation in the Malta Market Context</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Malta&apos;s business ecosystem is compact, highly networked, and operating at a pace where manual processes show up instantly in lost deals and missed renewals. A B2B operator in Birkirkara or the CBD that loses a deal because nobody followed up on a stale opportunity at day 14 is a common scenario — and a preventable one with a properly wired CRM and lifecycle email. The island&apos;s iGaming, hospitality, and professional-services sectors are all relationship-driven industries where systematic follow-up is the difference between closing and losing to a competitor who simply stayed in contact.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC Digital is headquartered in Birkirkara, near Sir Paul Boffa Square, and works with Malta SMEs, fintech operators licensed by the MFSA, and iGaming companies licensed by the MGA. The revenue automation systems we build are EU-region by default, GDPR-compliant, and where required include MGA or MFSA-specific marketing consent flows that hold up to regulatory examination.
          </p>
          <p className="text-foreground leading-relaxed">
            For businesses along the Marsa-Qormi corridor with a mix of B2B and wholesale accounts, the CRM hygiene and lifecycle automation layers are typically the highest-impact starting points — clean pipeline data and systematic follow-up compound faster in a market where personal relationships still close most deals.
          </p>
        </section>

        <FAQSection
          faqs={revenueAutoFAQs}
          title="Revenue Automation questions, answered directly"
          subtitle="What Malta and EU businesses need to know before engaging a RevOps partner"
          schemaId="faq-revenue-automation"
        />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who handles the Revenue Automation work on your account</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every Revenue Engine retainer is assigned a named RevOps lead — a senior strategist who owns the audit, the layer-by-layer build plan, and the weekly standup. The RevOps lead is supported by a CRM implementation specialist, an email automation engineer, and an AI agent deployment specialist from the OARC Birkirkara team. You do not get handed to a junior account manager after the proposal is signed.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The weekly RevOps standup is 30 minutes. It covers what moved in the pipeline this week, what the dashboard said, what we are changing next week, and what the running ROI calculation looks like against the retainer cost. The standup notes are written up and shared within 24 hours.
          </p>
          <p className="text-foreground leading-relaxed">
            The quarterly business review is 60 minutes and includes a written deck covering the revenue metric deltas, the automation performance by layer, the next-quarter roadmap, and a benchmark comparison against what similar Malta B2B clients are achieving at the same stage of the engagement. It is the meeting where the client and the OARC team decide whether to expand, iterate, or hold the scope for the next quarter.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Revenue Automation and the AI Employee Layer</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Revenue Automation at its most advanced includes deploying permanent AI employees — an AI SDR for outbound prospecting and qualification, an AI Support Specialist for tier-1 customer queries, and an AI Data Analyst for revenue reporting and anomaly detection. These are not chatbots on a website — they are configured agents integrated with your CRM, your email platform, your calendar, and your billing system, operating 24/7 within defined escalation rules.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The AI SDR, for instance, monitors the CRM for new leads that have not been contacted within a defined window, crafts a personalised first-touch email using the lead&apos;s available firmographic and intent data, qualifies the response, and books a meeting directly into the closer&apos;s calendar — all without human intervention. The closer receives a pre-call brief with the prospect&apos;s question history, the qualifying criteria it passed, and the suggested discovery agenda.
          </p>
          <p className="text-foreground leading-relaxed">
            For Malta-based B2B businesses operating in competitive verticals, an AI SDR deployed at 11pm on a Tuesday — when a prospect submitted a form and expected no response until Wednesday — produces a measurably different first-impression outcome than a human team that responds the following morning. Speed-to-lead is one of the most consistent revenue levers we deploy.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/services/hire-ai-employees" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Hire AI Employees — the AI agent layer in detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <RelatedServices slug="/services/revenue-automation" />

        <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">Not sure where to start? The RevOps Audit answers that question.</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Before recommending a single automation, we map every revenue tool, every CRM stage, and every lifecycle trigger in your stack. The audit output is a prioritised remediation roadmap — you decide which layers to ship first, and we build them in order of revenue impact. No commitment beyond the audit. If you want to take the roadmap in-house, that is your right.
          </p>
          <p className="text-sm text-muted-foreground">
            Most clients who commission the audit approve the Revenue Engine retainer within 10 days of receiving the roadmap — because the roadmap makes the ROI case better than any proposal we could write in advance of the data.
          </p>
        </section>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Want a free Revenue Ops audit?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            We map every revenue tool, CRM stage, and lifecycle trigger in your stack — and send you a prioritised fix list with ROI estimates. No commitment beyond the audit.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-cta-footer">
              Book the audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
}
