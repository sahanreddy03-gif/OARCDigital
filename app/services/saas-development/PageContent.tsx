import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["saas-development"];

const phases = [
  {
    title: "Week 0 — founder spec call (free)",
    detail:
      "Ninety minutes with one engineer and one product lead. We pressure-test the idea, name the one workflow that earns the first paying customer, and decide together whether a six-week SaaS MVP is the right shape — or whether you should validate demand first.",
  },
  {
    title: "Weeks 1–2 — discovery, schema, and a clickable Linear backlog",
    detail:
      "A written architecture doc, a Postgres schema diagram, a tenant-isolation plan, and a Linear board with effort estimates per ticket. Founders who decide not to proceed past this sprint keep the documentation and walk away — no commitment to the build.",
  },
  {
    title: "Weeks 3–6 — paid MVP build",
    detail:
      "Multi-tenant Next.js front end, Node and Postgres back end, Stripe Billing, Clerk or Auth.js, role-based access, an admin console, and one core revenue workflow. Two-week sprints, Loom demo at the end of each, written changelog, and a real customer can swipe a card on day 42.",
  },
  {
    title: "Week 7 — go-live, instrumentation, founder handover",
    detail:
      "Production deploy on EU-hosted infrastructure (Vercel, Render, or AWS Frankfurt), product analytics wired (PostHog or Mixpanel), error tracking on Sentry, dunning emails connected, and a 90-minute founder onboarding walkthrough so you can run sales calls and product demos without us in the room.",
  },
  {
    title: "Month 3 onward — retainer, only if it earns its keep",
    detail:
      "A small fractional engineering retainer ships every fortnight against the metrics that matter — activation, time-to-value, and gross-revenue retention. We renew month to month, not annually, so the retainer has to keep proving its worth.",
  },
];

const tenantStack = [
  {
    area: "Tenant isolation",
    choice:
      "Postgres row-level security as the default for products under 5,000 tenants — enforced at the database layer so a misbehaving feature flag cannot leak data between customers. Schema-per-tenant is the alternative for regulated verticals (Malta-licensed fintech, MGA iGaming back-office) where audit isolation matters more than write throughput.",
  },
  {
    area: "Auth and identity",
    choice:
      "Clerk or Auth.js with org-scoped membership and per-tenant role mapping from day one. SSO (Google Workspace, Microsoft Entra) is a config flip when an enterprise prospect asks for it — not a four-week rebuild.",
  },
  {
    area: "Background work",
    choice:
      "BullMQ on Redis, or AWS SQS once volume justifies it. Webhooks from Stripe, your customers' integrations, and any LLM call land here, retry with backoff, and surface to a small admin queue so humans can intervene when an external API misbehaves.",
  },
  {
    area: "Hosting and data residency",
    choice:
      "Vercel or Render in eu-central-1 / eu-west-1 by default. Cloudflare in front for edge caching and DDoS. EU-only is the standard so the product passes a GDPR procurement review without a four-week scramble.",
  },
];

const billingScope = [
  "Monthly and annual subscriptions with proration on plan switches",
  "Per-seat billing with org admin control over invitations",
  "Tiered Starter / Pro / Business plans driven from a single config file",
  "Usage-based metering for API calls, AI tokens, or events processed",
  "Credit-pack top-ups for prepaid usage models",
  "Free trials with grace periods, dunning, and self-serve cancel flows",
  "EU VAT collection and reverse-charge handling via Stripe Tax",
  "Customer portal: invoices, payment method, plan switch, cancel — without a support ticket",
];

const analyticsKit = [
  {
    name: "MRR, ARR, net new MRR",
    detail:
      "Pulled directly off Stripe invoice and subscription events, not estimated from a CSV export. Updates within 60 seconds of a checkout.",
  },
  {
    name: "Activation and time-to-value",
    detail:
      "We define activation per product during discovery (e.g. 'first project published', 'first message sent', 'first invoice generated') and instrument the funnel from sign-up to that event. The dashboard shows median TTV per cohort.",
  },
  {
    name: "Cohort retention and churn",
    detail:
      "Weekly and monthly cohorts with logo, gross-revenue, and net-revenue retention. Voluntary versus involuntary churn split out so dunning and product-fit problems do not get conflated.",
  },
  {
    name: "Feature adoption",
    detail:
      "PostHog or Mixpanel events tied to feature flags so you can see whether the feature you shipped last week is actually used — and by which segment of customers.",
  },
  {
    name: "PMF survey loop",
    detail:
      "An in-app Sean Ellis 'how would you feel if you could no longer use this product?' survey wired to a small admin dashboard. The 40% threshold becomes a real number you can watch, not a Twitter quote you remember.",
  },
];

const founderEnablement = [
  "Loom-recorded sprint demos so co-founders, advisors, and investors can catch up async",
  "A founder-facing admin console for impersonation, refunds, and tenant invites — no SQL required",
  "Written runbooks for the five operational tasks every SaaS founder ends up doing weekly",
  "A pricing-page CMS so price tests do not require an engineer or a deploy",
  "GitHub repository in your organisation from day one, OARC engineers added as collaborators",
  "Stripe, Clerk, AWS, PostHog, Sentry accounts created under your email — no credentials held hostage",
];

export default function SaasDevelopmentContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">SaaS Product Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">SaaS Product Engineering</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              SaaS Product Development &amp; MVPs for Malta Startups
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              A paid SaaS MVP in six weeks. Multi-tenant from day one, Stripe Billing wired end to end, product analytics in the box, and a founder dashboard that shows MRR — not a slide deck about it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-book-saas-call">
                  Book a founder spec call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}
                </Button>
              </a>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/services/saas-development-hero.png"
                alt="SaaS analytics dashboard mockup showing MRR growth, churn rate, and active users — illustrating the founder-grade metrics dashboard OARC Digital ships with every Malta SaaS MVP build"
                className="w-full h-auto block"
                loading="eager"
                width={1600}
                height={900}
                data-testid="img-saas-hero"
              />
            </div>
            <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A SaaS-Only Build, Not a Generic Software Project</h2>
            <p className="text-foreground leading-relaxed mb-4">
              SaaS is a different commercial animal from custom software. A custom software project ships an internal tool one organisation pays for once. A SaaS product is a multi-tenant subscription business with self-serve sign-up, recurring billing, customer support load, and a churn rate that decides whether the company survives. The engineering decisions that matter — tenant isolation, billing model, activation instrumentation, dunning logic — almost never appear in a custom software brief. They have to be designed in from week one or they become an expensive rebuild in month nine.
            </p>
            <p className="text-foreground leading-relaxed">
              This page describes how OARC Digital builds SaaS products specifically. If you need a single-tenant internal application — an operations dashboard, a custom CRM, a workflow tool for one company — read <Link href="/services/custom-software-development" className="text-orange-600 font-medium hover:text-orange-700 underline">our custom software development service</Link> instead. If you have an idea you have not validated with paying customers yet, start with <Link href="/services/mvp-development" className="text-orange-600 font-medium hover:text-orange-700 underline">our MVP development sprint</Link> — a faster, cheaper first build whose only job is to find out whether anyone will pay.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A Paid SaaS MVP in Six Weeks</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The first goal of every OARC SaaS engagement is the same: a real customer typing a real card number into Stripe by day 42. Not a clickable Figma. Not a closed beta with friends. A live product, in production, that has charged at least one paying account before the founder briefs us on the second sprint.
            </p>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`phase-${i}`}>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i).padStart(2, "0")}</span>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mt-6">
              The six-week clock starts at the kickoff of week 3 — discovery in weeks 1 and 2 is a fixed-price preflight. We protect the timeline ruthlessly with a written cut list of features that explicitly will not ship in v1. If the brief grows mid-sprint, the cut list grows with it. Founders rarely push back on this once they understand the alternative is a four-month build with no revenue.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Multi-Tenant Architecture Built In, Not Bolted On</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Most failed SaaS rebuilds we are asked to inherit have one thing in common: they were built single-tenant first, then retrofitted for multi-tenancy six months later. The retrofit always costs more than the original build. We avoid the trap by designing the tenant model in week one and enforcing it at the database layer for the rest of the product&apos;s life.
            </p>
            <div className="space-y-3">
              {tenantStack.map((s) => (
                <div key={s.area} className="p-4 rounded-xl bg-card border" data-testid={`tenant-${s.area.toLowerCase().replace(/[^a-z]/g, "-")}`}>
                  <div className="font-bold mb-1">{s.area}</div>
                  <div className="text-sm text-muted-foreground">{s.choice}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stripe Billing, Wired End to End</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We have shipped Stripe Billing on more than two dozen Malta and EU SaaS products. The pattern that works is the same every time: define the pricing object in code, treat the Stripe dashboard as the source of truth for prices, and let the application read products and prices through a thin caching layer. Every checkout uses the hosted Checkout Session or the Payment Element — never a custom card form — so PCI scope stays out of the application. Every subscription event lands on a webhook that updates a local subscription mirror, which is what the rest of the product reads from.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              The default billing scope shipped with every SaaS MVP build covers:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {billingScope.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mt-6">
              For founders trading EU-wide who would rather not be merchant of record, we substitute Paddle for Stripe and let Paddle handle VAT, sales tax, and chargeback risk. The trade-off is roughly five percent on take rate — worth it for a small two-person team that does not want to build a tax compliance function before they have ten paying customers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Analytics &amp; PMF Tooling, In the Box</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Most SaaS founders do not have an analytics problem. They have an attention problem. The data is in Stripe, the product database, and Google Analytics — but no one has time to stitch it into a number they can act on. Every OARC SaaS build ships with a founder-grade metrics dashboard that does that stitching once, then keeps the result current.
            </p>
            <div className="space-y-3 mb-6">
              {analyticsKit.map((m) => (
                <div key={m.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.detail}</div>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              The dashboard is part of the codebase, not a third-party subscription. You will not pay Baremetrics or ChartMogul a percentage of revenue forever, and you can extend the dashboard with a custom metric in an afternoon rather than waiting for a vendor roadmap. The same tables feed an investor-update CSV export so monthly fundraising hygiene takes ten minutes instead of an evening.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Founder Enablement, Not Agency Dependency</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The single biggest failure mode of an outsourced SaaS build is the founder ending up locked in to the agency that built it. We engineer for the opposite outcome from kickoff. The codebase, the cloud accounts, the payment processor, and the analytics stack are all in the founder&apos;s name from day one. Our engineers are added as collaborators to a repository the founder owns — never the other way round.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {founderEnablement.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              A non-technical founder finishes the build able to log into Stripe and pull MRR, log into the admin console and impersonate a customer to debug a support ticket, and brief a future in-house engineer with a written runbook rather than a verbal handover. When you eventually hire a CTO or a full-time platform engineer, they read the docs and ship a feature in their first week. That is the bar.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Comes With Every SaaS Build</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. Fixed scope on the build, month-to-month on the retainer.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`offer-${offer.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText?.toLowerCase() ?? "project"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          <MaltaContextBlock slug="saas-development" />

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">SaaS MVP, custom software, or validate first?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              A SaaS MVP is the right shape when you believe hundreds or thousands of buyers will pay for the same workflow. The engineering optimises for multi-tenant scale, recurring billing, and activation. <Link href="/services/custom-software-development" className="text-orange-600 font-medium hover:text-orange-700 underline">Custom software development</Link> is the right shape when one organisation pays for one tool — the criteria are operational fit and maintainability, not churn or MRR.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              If you have not yet proved a customer will pay, do not start either. <Link href="/services/mvp-development" className="text-orange-600 font-medium hover:text-orange-700 underline">Our MVP development sprint</Link> ships a focused first build whose only job is to find out. We will not scope a full SaaS engagement for an idea that has not seen a paying customer or a hard demand signal — it is the most honest thing we can do for a founder&apos;s capital.
            </p>
            <Link href="/services/mvp-development" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm" data-testid="link-mvp-development">
              MVP development — find out before you build a platform <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <RelatedServices slug="/services/saas-development" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a SaaS Idea Sitting in a Doc?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Bring it to a 90-minute founder spec call. We will tell you honestly whether a six-week MVP is the right move, what it would cost, and what your first paying customer&apos;s journey looks like.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-book-spec-call">
                Book the spec call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
