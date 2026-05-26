import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, Mail, Zap, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import ScrollReveal from "@/components/ScrollReveal";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const SCHEMA = SERVICE_SCHEMAS["email-marketing"];

const heroImage = "/attached_assets/marketing-automation-optimized.webp";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Email marketing automation flow dashboard showing lifecycle sequences, segmentation, and triggered revenue flows for a Malta business",
  description: "An email marketing automation dashboard for a Malta-based business, displaying lifecycle email sequences, behavioural segmentation, and triggered campaign revenue attribution across Klaviyo and HubSpot.",
  url: "https://oarcdigital.com/attached_assets/marketing-automation-optimized.webp",
  width: 1400,
  height: 900,
  contentUrl: "https://oarcdigital.com/attached_assets/marketing-automation-optimized.webp",
};

const platforms = [
  {
    name: "Klaviyo",
    best: "Shopify and WooCommerce ecommerce — best-of-breed revenue attribution, predictive segmentation, and product-feed personalisation. Default choice when 60% or more of revenue moves through email.",
  },
  {
    name: "Mailchimp",
    best: "B2C content brands and SMB ecommerce under 25,000 contacts. Cheapest path to a working welcome flow and a weekly broadcast when revenue attribution is not yet the bottleneck.",
  },
  {
    name: "ActiveCampaign",
    best: "Service businesses, agencies, and clinics with longer sales cycles and conditional automations spanning email, SMS, and CRM tasks. Strong sales-pipeline integration in the same tool.",
  },
  {
    name: "HubSpot",
    best: "B2B teams that want the email list and the sales CRM on one contact record. Fits when marketing-qualified leads need to hand off cleanly to a sales rep with full context.",
  },
  {
    name: "Customer.io",
    best: "Product-led SaaS with event-driven onboarding, behavioural triggers from the application, and high-volume transactional sends that need engineering control.",
  },
];

const lifecycleFlows = [
  {
    title: "Welcome series",
    detail:
      "5–7 emails over the first 14 days. Sets expectations, delivers the lead-magnet promise, escalates from brand introduction to product education to first soft conversion. Single primary call to action per send.",
  },
  {
    title: "Abandoned cart and abandoned checkout",
    detail:
      "Three sends at +1 hour, +24 hours, and +72 hours with social proof, FAQ handling, and a soft incentive on the third send only. Recovers 8–14% of abandoned baskets in Malta consumer accounts.",
  },
  {
    title: "Post-purchase and review request",
    detail:
      "Thank-you, shipping notification, review request timed to product-arrival, and a replenishment reminder for consumables. Lifts repeat-purchase rate and Google or Trustpilot review velocity.",
  },
  {
    title: "Win-back and sunset",
    detail:
      "Quarterly automated sweep of disengaged subscribers — soft opener, value reminder, and a sunset email that protects domain reputation by removing chronic non-openers from active sending.",
  },
  {
    title: "Browse abandonment and price-drop",
    detail:
      "Triggered from product-view events for high-intent categories. Price-drop and back-in-stock alerts run from inventory webhooks and consistently rank in the top three revenue-per-recipient flows.",
  },
];

const triggers = [
  {
    source: "Shopify",
    events: "Cart created, checkout started, order placed, order fulfilled, refund issued, customer created.",
  },
  {
    source: "Stripe",
    events: "Subscription created, trial ending, payment failed, invoice paid, subscription cancelled.",
  },
  {
    source: "HubSpot / Salesforce",
    events: "Lifecycle stage change, deal stage moved, meeting booked, form submitted, lead score crossed threshold.",
  },
  {
    source: "Booking and PMS",
    events: "Booking confirmed, booking cancelled, no-show recorded, post-stay or post-appointment review window opened.",
  },
];

const deliverabilitySteps = [
  {
    icon: Shield,
    title: "SPF, DKIM, and DMARC alignment",
    desc: "We flatten SPF, publish DKIM selectors for every active sender, and move DMARC from p=none to p=quarantine once a clean two-week window confirms alignment. One-click unsubscribe headers are added to every campaign.",
  },
  {
    icon: Mail,
    title: "Platform-specific DKIM selectors",
    desc: "Klaviyo, Mailchimp, ActiveCampaign, and HubSpot each need their own DKIM selector — they cannot share. Most Malta sending domains we audit have at least one selector misconfigured.",
  },
  {
    icon: BarChart3,
    title: "Postmaster Tools and SNDS monitoring",
    desc: "Postmaster Tools, Microsoft SNDS, and the platform's own deliverability dashboard are checked weekly. Inbox placement is measured against Apple Mail, Gmail, Outlook, and Yahoo separately.",
  },
  {
    icon: Zap,
    title: "Warm-up for new sending infrastructure",
    desc: "New domains and IPs are warmed over 4–6 weeks using a graduated volume ramp before any campaign volume moves. Skipping warm-up on a new sender domain is the fastest way to hit the spam folder.",
  },
];

const reportingMetrics = [
  {
    metric: "Revenue per recipient",
    desc: "The dollar impact of each send — more durable than open rate after Apple Mail Privacy Protection and corporate inbox scanning.",
  },
  {
    metric: "Per-flow attributed revenue",
    desc: "Isolates what each automation paid back this month versus the campaign calendar.",
  },
  {
    metric: "List growth net of unsubscribes",
    desc: "Measures the real growth of the audience, not the raw subscriber count inflated by non-openers.",
  },
  {
    metric: "Lifetime-value lift by cohort",
    desc: "Compares subscribers who entered a flow against those who did not — the only metric that proves automation is moving the business forward rather than cannibalising existing demand.",
  },
];

export default function EmailMarketingContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-25">
          <img
            src={heroImage}
            alt="Email marketing automation flow dashboard — lifecycle sequences, triggered campaigns, and revenue attribution for a Malta business"
            width={1400}
            height={900}
            className="w-full h-full object-cover"
            data-testid="img-hero-email-automation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-900/40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
            <span className="text-white">Email Marketing Automation</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Automation &amp; Lifecycle</span>
          </div>
          <h1 data-speakable className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-email-marketing">
            Email That Works While You Sleep<br />
            <span className="text-orange-400 italic">Built on Automation.</span>
          </h1>
          <p data-speakable className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            The full email channel under management — Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Customer.io built, monitored, and reported on monthly by a Birkirkara team that owns deliverability, segmentation, and triggered revenue end-to-end.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" data-testid="button-book-audit">Book an automation audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
            <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
          </div>
          <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">

        {/* WHO THIS IS FOR */}
        <section className="mb-10 p-6 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50">
          <h2 className="text-base font-bold mb-3 text-zinc-700 dark:text-zinc-300 uppercase tracking-wider text-xs">Who this service is for</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <p className="font-semibold mb-1 text-foreground">Email Marketing Management (this page)</p>
              <p className="text-muted-foreground">Business owners who want a team to run their entire email channel — platform setup, automation flows, list management, deliverability, segmentation, A/B testing, and monthly revenue reporting. You hand over the channel; we own the results.</p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <p className="font-semibold mb-1 text-foreground"><a href="/services/email-creative" className="text-orange-500 hover:text-orange-600">Email Creative →</a></p>
              <p className="text-muted-foreground">Marketing teams who already have a platform and automation strategy but need a design partner — beautiful templates, modular content blocks, mobile-first layouts, and on-brand campaign visuals. Design-led, not strategy-led.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Automation, Not Broadcast</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Most Malta accounts we audit are still treating email as a weekly broadcast channel — one campaign, one segment, one send. Automation flips that model. The same list, with five well-built triggered flows in place, will out-earn a year of broadcast effort because the messages reach a subscriber at the moment of intent rather than on a calendar the marketer guessed at. Welcome flows convert 4–6x better than a one-off welcome blast. Abandoned-cart sequences recover revenue that would otherwise leak silently. Post-purchase replenishment compounds repeat-rate without any additional acquisition spend.
          </p>
          <p className="text-foreground leading-relaxed">
            OARC Digital is platform-agnostic by design — we run Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and Customer.io daily and pick the platform that matches your list size, list source, and revenue model. The work is the same on every platform: clean authentication, segmentation that maps to behaviour, triggered flows wired into the systems that already record buyer intent, and reporting that answers what each flow paid back this month.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Platforms We Work With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="p-5 rounded-xl bg-card border" data-testid={`card-platform-${p.name.toLowerCase()}`}>
                <h3 className="font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.best}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Platform recommendation comes out of the discovery call, not a default. We have rebuilt accounts in every direction — Mailchimp into Klaviyo for an ecommerce client whose revenue attribution was broken, Klaviyo into ActiveCampaign for a clinic that needed conditional SMS branches, HubSpot into Customer.io for a SaaS product whose onboarding events lived in the application database.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Lifecycle Flows We Build First</h2>
          <div className="space-y-4">
            {lifecycleFlows.map((f, i) => (
              <ScrollReveal key={i}>
                <div className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{f.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Every flow ships with documented triggers, exit conditions, and a kill switch — so it can be paused for a sale, a launch, or a reputation incident without losing the underlying configuration. Monthly reports break revenue out by flow versus campaign so the client can see exactly which automations are doing the compounding work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Triggered Campaigns From Your Stack</h2>
          <p className="text-foreground leading-relaxed mb-6">
            The most valuable emails in any account are the ones triggered by an event the buyer already cared about. We wire your platform directly into the systems that record those events — Shopify, Stripe, HubSpot, Salesforce, your booking platform — so triggers fire in seconds, not on a daily sync.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {triggers.map((t) => (
              <div key={t.source} className="p-5 rounded-xl bg-card border" data-testid={`card-trigger-${t.source.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <h3 className="font-bold mb-1">{t.source}</h3>
                <p className="text-sm text-muted-foreground">{t.events}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Retainer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SCHEMA.features.map((f) => (
              <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{f.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERABILITY */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Deliverability: SPF, DKIM, DMARC</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Since Google and Yahoo published their bulk-sender requirements in February 2024, deliverability is a technical discipline as much as a creative one. Most Malta sending domains we audit have at least one of the three records misconfigured — over-10-lookup SPF, missing platform-specific DKIM selectors, or a DMARC policy stuck on p=none reporting mode forever.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverabilitySteps.map((step, i) => (
              <ScrollReveal key={i}>
                <div className="p-5 rounded-xl bg-card border flex items-start gap-4 h-full" data-testid={`deliverability-${i}`}>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Segmentation That Actually Changes Revenue</h2>
          <p className="text-foreground leading-relaxed mb-4">
            At the size of the Maltese market, persona-based segmentation is theatre. Behaviour beats demographics every time. A typical account ends up with 12–18 active segments built from product views, cart events, purchase recency, lifetime-value bands, and engagement decay — each tied to at least one triggered campaign. Recency-segmented broadcasts routinely double revenue per recipient compared to a single send to the whole list.
          </p>
          <p className="text-foreground leading-relaxed">
            Every segment definition is documented in plain English in the client workspace, so a future in-house marketer can edit without rebuilding the logic from scratch. We deliberately avoid platform-locked custom properties when a native event will do the same job — segments survive a future platform migration.
          </p>
        </section>

        {/* REPORTING */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Reporting That Stands Up to a Finance Review</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Every retainer reports against four durable metrics rather than vanity ones. Monthly reports include written commentary, the raw export, and the underlying flow definitions so a future in-house marketer can pick up where we left off without rebuilding the measurement model.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {reportingMetrics.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`reporting-${i}`}>
                <h3 className="font-bold mb-2 text-orange-600">{item.metric}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
          <p className="text-muted-foreground mb-6">Three transparent retainers. No setup fees, no annual lock-in.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {SCHEMA.offers.map((offer) => (
              <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`card-offer-${offer.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A/B TESTING */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">A/B Testing and List Growth Inside Every Retainer</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every retainer includes a structured A/B testing programme. We test one variable per week — subject line, preview text, send time, first paragraph hook, CTA copy, or offer framing — against a statistically significant sample before rolling the winner to the full active segment. Clients who inherit an account with no prior testing history typically see 20–40% revenue-per-recipient lift in the first six months from testing alone.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            List growth is tracked net of unsubscribes, not gross additions. A list that adds 200 subscribers and loses 180 to disengagement is not growing — it is churning through acquisition spend. We measure and report net growth weekly, and diagnose acquisition source quality alongside churn rate to identify which lead magnets and which paid traffic sources produce subscribers who actually buy.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { test: "Subject line and preview text", result: "Typically 15–30% open-rate variance across a well-designed subject-line test. The winner is rolled out across all future sends in that segment until a new test beats it." },
              { test: "Send day and time", result: "Malta business email is read on Tuesday and Thursday mornings more than UK or US benchmarks suggest. We test against the actual subscriber open window, not against published best-practice averages." },
              { test: "CTA copy and offer framing", result: "The highest-impact test for revenue per send. A CTA that says 'Book a demo' versus 'See it in 15 minutes' can double click-through on the same layout." },
              { test: "Plain-text vs HTML", result: "Some B2B segments — particularly professional services and compliance — convert better on plain-text. We test format as a variable in Q1 of every new retainer." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`ab-test-${i}`}>
                <h3 className="font-bold mb-2">{item.test}</h3>
                <p className="text-sm text-muted-foreground">{item.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EMAIL AUTOMATION TIMELINE */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What the first 60 days look like</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Most Malta email accounts we take over have immediate quick wins — a broken welcome flow, a missing abandoned-cart sequence, a domain with p=none DMARC and no selector alignment. Here is the realistic first-60-day ramp for a new retainer.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { period: "Week 1", action: "DNS audit — SPF, DKIM, DMARC confirmed or fixed. Platform account audit — broken flows identified, sender reputation checked in Postmaster Tools. Segment inventory completed." },
              { period: "Week 2", action: "Welcome flow rebuilt or patched. Abandoned-cart sequence commissioned if absent. First broadcast planned against the monthly calendar. A/B test framework set up in the platform." },
              { period: "Week 3–4", action: "First broadcast sent to confirmed-healthy segment. Welcome flow live. First A/B test running on subject line. Revenue attribution tracking confirmed." },
              { period: "Month 2", action: "Post-purchase flow live. Win-back sequence active. First A/B test winner identified and rolled out. Monthly report delivered — revenue by flow vs campaign, list growth net, attribution model reviewed." },
            ].map((row, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4" data-testid={`timeline-${i}`}>
                <span className="font-bold text-orange-500 text-sm w-20 flex-shrink-0 mt-0.5">{row.period}</span>
                <p className="text-muted-foreground text-sm">{row.action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW THIS FITS WITH FUNNEL AUTOMATION */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Email Marketing Automation Fits the Broader Funnel</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Email automation is one layer of the revenue stack — it works best when paired with a clean CRM that feeds it with segmented contacts and a form-to-platform piping layer that routes leads to the right sequence without manual intervention. OARC&apos;s Funnel Automation service builds that routing layer; email marketing manages the sequences it feeds.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For clients who run both email automation and funnel automation under one retainer, the two teams share a weekly operations standup — the funnel team confirms which new leads entered which sequences in the past week, and the email team confirms what each sequence delivered in revenue and engagement. The closed loop between pipeline routing and lifecycle messaging is what produces compounding results rather than the flat performance typical of a siloed email retainer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services/funnel-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Funnel Automation — the pipeline and routing layer <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/revenue-automation" className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
              Revenue Automation — billing and full-lifecycle RevOps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <MaltaContextBlock slug="email-marketing" />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {SCHEMA.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`faq-${i}`}>
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Email Marketing in the Malta Business Context</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Email is the highest-ROI marketing channel in the Malta market for one simple reason: the buyer pool is small and the cost of not staying in contact is high. A hospitality operator near Ta&apos; Xbiex marina who misses a reactivation window with a lapsed client is not losing that client to a global competitor — they are losing them to a Sliema or St Julian&apos;s business that sent a well-timed email the week before.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC Digital manages email marketing for Malta-based hospitality groups, iGaming operators, fintech firms, professional-services practices, and ecommerce brands shipping across the EU. Our team is based in Birkirkara and is familiar with the Malta market&apos;s seasonal patterns: summer tourism peaks, the Christmas festa calendar, the iGaming conference season in the spring and autumn, and the Maltese school-year calendar that affects B2C purchasing behaviour significantly.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            GDPR compliance is built in from day one. Every retainer includes a consent-capture audit, a suppression-list sync across all active sending platforms, and a data-retention policy agreed in the onboarding DPA. Malta businesses operating under the IDPC are responsible for the data their email programmes touch — we make that compliance demonstrable, not assumed.
          </p>
          <p className="text-foreground leading-relaxed">
            For iGaming clients, we extend the compliance layer to include responsible gambling messaging requirements, promotional restrictions under MGA guidelines, and a bonus-communication audit that holds up to regulator examination. Our templates for iGaming broadcast email are reviewed by a compliance editor before send — a layer that most generic email agencies do not offer.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Handle RevOps Integration for Malta B2B Clients</h2>
          <p className="text-foreground leading-relaxed mb-4">
            For Malta B2B clients running a CRM alongside their email platform, the two systems must share a single contact record or the segmentation logic breaks down. A sales rep who marks a deal as &quot;Closed Lost&quot; in HubSpot must trigger a suppression in Klaviyo before the next broadcast goes out — otherwise the lapsed buyer receives a promotional email the week after they told the rep they went with a competitor. These breakdowns erode trust faster than any campaign can rebuild it.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC Email Marketing Automation manages the bi-directional sync between the email platform and the CRM as a standard part of every B2B retainer. CRM lifecycle stage changes push to the email platform in real time, suppressing contacts in irrelevant sequences and enrolling them in the relevant ones. Email engagement data — opens, clicks, conversion events — flows back into the CRM as activity records and lead-score increments.
          </p>
          <p className="text-foreground leading-relaxed">
            For clients on the OARC Funnel Automation or Revenue Automation retainers, the email channel and the CRM are managed by the same team with a shared weekly cadence. The email automation team and the RevOps team attend the same standup and share the same attribution dashboard — which is the only way to produce a pipeline-level view of what the email channel is actually paying back.
          </p>
        </section>

        <section className="mb-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">Email Marketing Automation vs Email Creative — design partner inside the same team</h2>
          <p className="text-sm text-muted-foreground mb-4">
            This page is the platform and automation side of email — Klaviyo, Mailchimp, ActiveCampaign, HubSpot, the deliverability stack, the segmentation logic, the triggered flows wired into Shopify and Stripe. The visual design of every send — templates, modular blocks, mobile-first layouts, on-brand campaign creative — is the responsibility of <strong className="text-foreground">Email Creative</strong>, our design-led email service. The two work as one team on most accounts: automation builds the flow, creative ships the email that makes the flow convert.
          </p>
          <Link href="/services/email-creative" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm" data-testid="link-email-creative">
            Email Creative — template design and on-brand campaign visuals <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Email Marketing Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Which email platform is best for my Malta business?", a: "Klaviyo for ecommerce with Shopify or WooCommerce. HubSpot for B2B with a sales CRM. ActiveCampaign for service businesses with conditional logic and SMS needs. Mailchimp for SMBs under 25,000 contacts where revenue attribution is not yet the bottleneck. Customer.io for product-led SaaS with event-driven onboarding. The discovery call determines the recommendation — not a default." },
              { q: "Do you take platform commissions or referral fees?", a: "No. Tool selection is purely on stack-fit and cost-per-event. You own the licenses and can leave OARC at any time without re-platforming. We are paid for implementation and ongoing management, not for selling software." },
              { q: "How long until we see email automation results?", a: "Welcome flow improvements are visible in the first send cycle — typically within 14 days of the retainer starting. Abandoned-cart recovery begins producing revenue within the first week of going live. Full lifecycle automation lift is measurable in month two with a proper attribution model in place." },
              { q: "What is included in the monthly report?", a: "Revenue by flow versus revenue by broadcast campaign, list net growth, deliverability metrics (inbox placement by provider, bounce rate, spam complaint rate), A/B test results for the month, and a written commentary from the email lead explaining what moved and what we are changing next month." },
              { q: "Is GDPR compliance handled as part of the retainer?", a: "Yes — consent-capture audit, suppression-list sync across all platforms, data-retention policy agreed in the onboarding DPA, and ongoing monitoring for compliance with IDPC requirements. For iGaming clients, MGA promotional restriction compliance is also included." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border" data-testid={`faq-email-${i}`}>
                <h3 className="font-bold mb-2 text-sm">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedServices slug="/services/email-marketing" />

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Email Marketing Retainer Pricing</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Email Marketing Automation retainers start at €1,600/month for the Core tier — deliverability setup, welcome flow, one broadcast/month, and a monthly report. The Growth tier at €2,800/month adds full lifecycle flows (post-purchase, win-back, abandoned-cart), A/B testing programme, and bi-weekly standups. The Revenue tier at €4,200/month includes the full automation stack, list growth programme, revenue attribution model, and a quarterly business review with finance-grade reporting. All tiers are month-to-month with 30 days notice to exit.
          </p>
        </section>

        <section className="mb-8 p-6 rounded-xl border bg-card">
          <h2 className="text-xl font-bold mb-3">What the email automation audit covers</h2>
          <p className="text-sm text-muted-foreground mb-3">
            The free audit reviews your current platform configuration, domain authentication (SPF, DKIM, DMARC), active and missing lifecycle flows, segmentation quality, and the last 90 days of deliverability metrics. We return a one-page findings summary with the top three highest-impact fixes, a platform recommendation if your current platform is the wrong fit for your list size and business model, and a 30-day automation plan with effort estimates.
          </p>
          <p className="text-sm text-muted-foreground">
            The audit takes approximately 3 working days from the moment you share read-only access to the platform. There is no obligation to proceed with a retainer — the findings are yours to implement with any agency or in-house team.
          </p>
        </section>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Want a Free Email Automation Audit?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">We will review your platform, score deliverability, list the broken or missing flows, and send you a 30-day automation plan with no obligation.</p>
          <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-request-audit">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
        </div>
      </article>
    </Layout>
  );
}
