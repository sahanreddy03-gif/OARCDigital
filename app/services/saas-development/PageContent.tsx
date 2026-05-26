"use client";

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

const saasHeroImage = "/attached_assets/16_1763228440283.jpg";

const saasImageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "SaaS product architecture review — OARC Digital builds Malta SaaS MVPs from idea to first paying customer in six weeks",
  description: "A Malta SaaS founder team reviewing a multi-tenant product architecture built by OARC Digital — six-week MVP from kickoff to first paying customer.",
  url: "https://oarcdigital.com/attached_assets/16_1763228440283.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/16_1763228440283.jpg",
};

const saasFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SCHEMA.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saasImageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saasFaqPageSchema) }}
      />
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-hero">
              Your SaaS Idea Deserves a Team That&apos;s Done This Before.
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
                src={saasHeroImage}
                alt="Tech startup founders reviewing SaaS product architecture — OARC Digital builds Malta SaaS MVPs from idea to first paying customer in six weeks"
                className="w-full h-auto block object-cover"
                loading="eager"
                width={1200}
                height={800}
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
              This page describes how OARC Digital builds SaaS products specifically. If you need a single-tenant internal application — an operations dashboard, a custom CRM, a workflow tool for one company — read <Link href="/services/custom-software-development" className="text-orange-600 font-medium hover:text-orange-700 underline">our custom software development service</Link> instead. If you have an idea you have not validated with paying customers yet, the first step is not engineering — it is demand validation. Our <Link href="/services/idea-validation-engine" className="text-orange-600 font-medium hover:text-orange-700 underline">idea validation engine</Link> runs structured discovery interviews and demand tests before a line of code is written. After validation, start with <Link href="/services/mvp-development" className="text-orange-600 font-medium hover:text-orange-700 underline">our MVP development sprint</Link> — a faster, cheaper first build whose only job is to find out whether anyone will pay.
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

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Choosing Between Next.js, Remix, and a Custom Node API for Your SaaS Back End</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta SaaS briefs we receive describe the front end requirement precisely (a dashboard, a form-heavy workflow, a data table) and leave the back-end architecture open. The choice between Next.js API routes, a Remix full-stack application, and a standalone Node.js API behind a React front end is not arbitrary — each has a different performance profile, deployment model, and operational complexity, and the wrong choice for the product type creates friction that compounds over the product&apos;s life.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We use Next.js with App Router for SaaS products where the front end and the API are tightly coupled and the team is one to three people who cannot afford to maintain two separate deployments. Next.js Server Actions handle the form mutations; Next.js API routes handle the webhook endpoints from Stripe and other integrations; the front end is server-rendered for public pages (SEO, landing, pricing) and client-rendered for the authenticated dashboard. This is the default and works for the majority of Malta SaaS products in the MVP phase. Remix earns its place for products with complex multi-step forms, optimistic UI with nested mutation states, and real-time collaboration requirements — the loader and action model is a better fit for those workloads than Next.js&apos;s page-level data model.
            </p>
            <p className="text-foreground leading-relaxed">
              A standalone Express or Fastify API is the right choice when the API needs to serve multiple clients (a web app, a mobile app, and a third-party integration layer) on independent release cycles, or when the product is a platform whose API is itself the product (other developers will call it directly, not through a front end we control). In this architecture the back end is deployed separately, versioned independently, and documented with OpenAPI. The front end is a separate Vite or Next.js application that talks to the API over HTTPS. The operational complexity is higher — two deployments, two CI pipelines, a shared type layer — but the long-term flexibility justifies it for platform products. We document the rationale for the chosen architecture in the ADR (Architecture Decision Record) on day one so future engineers understand why the structure is what it is.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Technical Decisions Made at Architecture Phase</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The week-zero architecture session for every OARC SaaS engagement produces three decisions that are difficult or costly to reverse later: the auth provider, the database host, and the primary billing integration. We make these decisions explicitly and document the rationale so the team is not relitigating them when a new engineer joins in month four.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Auth provider (Clerk, Auth.js, or Supabase Auth) is chosen based on whether the product needs social login only, SSO for enterprise customers, or organisation-level multi-user access with role-based permissions from day one. Clerk is the default for new Malta SaaS products that anticipate enterprise buyers because SSO (SAML, OIDC) is a two-click configuration change rather than a sprint. Database host (Neon or Supabase) is chosen based on whether the product needs Postgres extensions beyond pgvector — Supabase has broader extension support and includes a built-in Storage layer for file uploads; Neon has better branching support for CI and a simpler pricing model for unpredictable serverless traffic. Billing integration (Stripe Billing or LemonSqueezy) is chosen based on whether the product needs complex metered billing and usage-based pricing (Stripe), or a simple per-seat or per-product model where LemonSqueezy&apos;s merchant-of-record structure removes the Malta VAT registration requirement for cross-border digital sales.
            </p>
            <p className="text-foreground leading-relaxed">
              None of these decisions are permanent — Postgres is Postgres regardless of host, Stripe and LemonSqueezy both emit webhooks, and Clerk and Auth.js both produce JWT sessions. But switching any of them mid-product has a real cost in engineering time and user migration risk. The architecture session is where we pressure-test the assumptions behind the initial preference, document the switching cost of each option, and make the decision with enough information to stand behind it for the first three years of the product&apos;s life.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Observability: How You Know the Product Is Working</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A SaaS product without structured logging, error tracking, and uptime monitoring is a product whose failures are invisible until a customer reports them. We wire three observability layers in every build: Sentry for exception tracking with source-map upload so stack traces resolve to readable code rather than minified bundles; a structured logging pipeline (Axiom or Datadog) where every background job, every Stripe webhook, every critical mutation writes a JSON log entry with the user ID, tenant ID, and operation duration; and an uptime monitor (Better Uptime or Checkly) that probes the API health endpoint and the Stripe webhook endpoint every minute from two EU regions.
            </p>
            <p className="text-foreground leading-relaxed">
              The first month of a new SaaS product&apos;s life is the highest-noise period for the observability stack: users do unexpected things, edge cases from the seed data do not match real data, and the error rate is elevated relative to what it will be at month six. We configure alert thresholds to avoid alert fatigue — a 10% error rate in the first two weeks is worth investigating but not paging at 2am, whereas a 10% error rate in month four is a P1 incident. Thresholds are documented in the runbook and revisited at the 90-day mark when the product&apos;s normal error baseline is established.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Technical Readiness Checklist Before Raising a Seed Round</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta-origin SaaS founders raising pre-seed or seed capital from EU or UK institutional investors increasingly face a technical due-diligence step before term sheet. The checklist is not publicly standardised, but the questions are consistent across investors: Is the codebase in version control under the company&apos;s ownership? Are credentials and secrets managed securely and not committed to the repository? Is the infrastructure reproducible from code rather than manually configured? Are the core business metrics (MRR, activation, churn) measurable from the product data rather than estimated? Is the Stripe account owned by the company rather than a contractor?
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Every OARC SaaS build exits with yes answers to all of those questions by construction. The GitHub repository is under the company&apos;s organisation. Secrets are managed in Vercel environment variables or AWS Secrets Manager, never in .env files committed to the repository. Infrastructure is defined as code (Terraform for AWS resources, Vercel project config as code). The metrics dashboard is built into the product. Stripe is registered to the company email. A Malta startup that raised without these in place and needs to retrofit them before a Series A is a separate engagement we handle — and it is more expensive than having built them correctly the first time.
            </p>
            <p className="text-foreground leading-relaxed">
              Beyond the binary questions, technical due diligence increasingly reviews the security posture: OWASP Top 10 coverage, dependency audit results, penetration test history, and the incident response process. We recommend that every OARC-built SaaS undergoes a third-party penetration test before raising a Series A, and we provide the engineering support to remediate any findings before the investor review. The typical remediation timeline for a clean MVP build is two to four weeks from test completion to all critical and high findings resolved — short enough to not block a fundraise timeline if the test is scheduled early.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Month Seven Looks Like: Post-Build Velocity</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The six-week build delivers a product with one paying customer and a working revenue loop. Month seven and beyond are where the product compounds — or does not. The key variable is whether the engineering retainer is keeping pace with what the product data is revealing about what to build next, or whether every sprint is dominated by scaling problems that should have been designed out in the original build.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In an OARC SaaS engagement at month seven, the founder is typically running sales calls and looking at the MRR dashboard while the retainer engineering team ships one feature per fortnight based on activation data. The admin console is being used to debug edge cases in customer onboarding. The PMF survey score has been above 40% for two consecutive months. The first enterprise prospect is asking for an SSO integration, which is a two-hour configuration change because Clerk&apos;s SSO support was wired in at build time. The billing configuration for an annual plan is being discussed — and it is a five-minute change to the pricing config file, not a sprint.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The features that absorb the most retainer budget at month seven in healthy products are: the second major workflow (the one the first customers asked for in their first support ticket), the first integration with an external tool the customer already uses (CRM, Slack, email), and the admin tooling to handle the customer-support volume that comes with real paying users. These are features that could not have been designed correctly at week zero because they require real usage data to scope correctly. The build gives you the platform; the retainer is where the product learns what it actually is.
            </p>
            <p className="text-foreground leading-relaxed">
              When the retainer is working well, the founder stops thinking about engineering as a cost centre and starts thinking about it as a growth driver. When it is not working well — usually because the retainer is being used to fix build-time mistakes rather than ship new capability — we say so and stop the engagement rather than continuing to invoice for remediation. The retainer renews month to month and has to keep proving its worth every 30 days. That is not a marketing line; it is the clause that keeps us honest.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Infrastructure Decisions for Malta-Regulated SaaS (iGaming, Fintech, MFSA)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s iGaming and financial-services regulatory framework creates specific engineering requirements that a generalist SaaS team will miss. We have shipped SaaS products under MGA iGaming licence conditions, under MFSA Electronic Money Institution supervision, and under the VFA framework for crypto-asset service providers. The infrastructure decisions that differ from a standard SaaS build are narrow but non-negotiable.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Data residency:</strong> EU-region hosting is required by every Malta licence condition we have reviewed. The production database, the backup store, and the queue broker must all reside in an EU region. We provision on AWS eu-central-1 or eu-west-1 by default and document the residency configuration in the GDPR Article 30 record so it is available for regulatory review. Any third-party SaaS integrated into the product (analytics, error tracking, email) must also have an EU data-processing agreement in place before the product goes live.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Audit trail and immutable logs:</strong> MGA and MFSA licence conditions typically require an immutable audit trail for financial events, player actions, or regulated decisions (AML alerts, KYC status changes). We implement this as an append-only event table with database-level constraints preventing updates or deletes, backed by a separate off-site log archive written at the time of each event. The archive is versioned and tamper-evidenced using SHA-256 hashes chained per batch.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Responsible gambling and AML controls:</strong> Malta Gaming Authority licence holders are required to enforce responsible-gambling limits — deposit limits, loss limits, session time limits, self-exclusion — at the application layer. We implement these as database-enforced constraints (not just front-end validation) so a future code change or a race condition cannot produce a bet or deposit that exceeds a player&apos;s stated limit. AML transaction-monitoring rules are implemented as database triggers or application-level event handlers that flag suspicious patterns into a compliance-review queue the licence holder is required to operate.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">AI Features in a SaaS MVP — What to Build and What to Skip</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Every SaaS brief we receive in 2026 includes at least one request for an AI feature. The question is not whether to include AI — it is which AI feature earns its place in a six-week MVP budget and which should be deferred to month four when you have enough user behaviour data to know what problem you are actually solving.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Features we build in MVP scope without hesitation: structured text generation where the output is bounded and verifiable (draft templates, summarisation, classification), semantic search over the user&apos;s own documents using pgvector on Postgres with an embedding model, and a simple LLM call that transforms user input into a specific output format where the failure mode is obvious (wrong answer rather than catastrophic system behaviour). These features have clear success metrics, fit inside a predictable token budget, and do not require a bespoke model.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Features we defer to a later sprint: autonomous AI agents that take multi-step actions on behalf of the user, fine-tuned models on proprietary data, real-time voice, and any feature where the failure mode is a user action in the physical world (booking a meeting, sending an email, executing a payment) without a human review step. Not because these features are unimportant — because they require the product to have enough real usage data to define the guardrails correctly, and because the engineering cost in a six-week timeline displaces the revenue-critical features that make the business viable.
            </p>
            <p className="text-foreground leading-relaxed">
              The technical scaffolding for AI features — an OpenAI or Anthropic client abstraction layer, a prompt template registry, a usage-metering table, a model-response cache, and a feedback-collection schema — is included in every OARC SaaS build regardless of whether an AI feature ships in v1. Adding the first AI feature in week eight rather than week four costs the same engineering time; adding it without the scaffolding costs three times as much because the scaffolding has to be retrofitted under a live product.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Building SaaS From Malta in 2026</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta is a genuinely useful jurisdiction for a SaaS startup. EU domicile means GDPR compliance is straightforward, the banking infrastructure (BOV, HSBC Malta, Revolut Business) handles multi-currency from day one, the MGA and MFSA frameworks give regulated verticals (iGaming, fintech, crypto-assets) a navigable path to licence, and the English common-law heritage of Maltese contract law reduces friction with international enterprise customers who want a DPA they can read without a lawyer. The island&apos;s size is often misread as a disadvantage — in practice, a Malta SaaS team reaches the right government contact, the right investor, and the right enterprise pilot customer faster than a team in a capital city where those relationships require years of networking.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The challenge is that the Malta talent pool for senior SaaS engineers is thin. The founders we work with typically have a strong product instinct and domain expertise but no existing engineering team, or they have a small team of generalists who have never shipped a multi-tenant billing layer before. That is the exact gap OARC fills — a Malta-based SaaS engineering team with a specific track record in the infrastructure decisions that matter: tenant isolation, Stripe Billing, activation instrumentation, and the founder-enablement handover that lets a non-technical co-founder run the business after the build.
            </p>
            <p className="text-foreground leading-relaxed">
              We have shipped SaaS MVPs for Malta-origin founders across iGaming compliance tools, hospitality booking management, legal document automation, maritime logistics coordination, and B2B procurement workflows. The industry varies; the engineering pattern is mostly the same. The most common mistake we see is a founder hiring a generalist agency that builds a functional v1 without multi-tenancy, billing, or instrumentation — and discovering the cost of retrofitting all three when the product has fifty paying customers and no time to stop shipping.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How the Billing Handover Works for Non-Technical Founders</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most non-technical founders we work with have a specific anxiety about Stripe: that it is a black box they cannot understand, that a misconfiguration will charge customers incorrectly, and that they will need to call us for every pricing change. We engineer against all three fears deliberately.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              After every OARC SaaS build, the founder receives a Stripe dashboard tour covering five screens: the Products view (where to add a new plan or change a price), the Subscriptions view (where to see every paying customer and their billing status), the Revenue Recognition view (where MRR comes from), the Disputes view (where to respond to chargebacks), and the Developer Webhooks view (how to confirm that events are flowing to the application correctly). The tour is recorded as a Loom and stored in the project drive. A new team member who has never seen Stripe before can run the billing operation at week one.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Pricing changes — adding a new plan, raising a price, introducing an annual discount — are made through a CMS-driven pricing configuration rather than a code deploy. The pricing page and the Stripe product configuration are both driven from a JSON config file that the founder can edit and deploy via a single GitHub Actions button push. No engineer needed, no deploy queue, no waiting. The first price test typically ships within the first month of launch rather than month six.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta founders operating under GDPR, every subscription includes a compliant data-processing agreement between the product and Stripe, a data-subject access request endpoint that returns a user&apos;s full billing history in machine-readable form, and a right-to-erasure flow that deletes personal data from the application database while preserving the financial records Stripe is legally required to retain. The compliance architecture is documented in the GDPR register the founder maintains — or that we build from scratch if they do not have one.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The SaaS Engagements We Decline</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We decline a meaningful number of SaaS briefs every quarter and are transparent about why. The most common reasons:
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">No demand signal.</strong> A founder with a detailed spec and zero conversations with potential paying customers is not ready to build. We will refer them to our idea-validation-engine first, and if they decline, we decline the build. Spending €30,000 to €60,000 building a product no one has agreed to pay for is the most common SaaS failure mode and the one we are in a position to prevent.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Competitor clones with no differentiated value.</strong> Asking us to build "Notion but better" or "Stripe but for Malta" without a specific, defensible reason a customer would choose it over the incumbent is not a project we take on. We ask the founder to describe the one customer segment the incumbent has specifically failed, and the one workflow that customer would pay €100/month to solve. If there is no honest answer, we stop there.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Founders who want an agency relationship, not an ownership model.</strong> We are not a development agency that takes a brief and delivers a build for a fee. We are a team that becomes a temporary co-engineering partner and then hands over full ownership. If a founder wants a vendor relationship with an SLA, a helpdesk ticket for every request, and ongoing lock-in to us for all future development, we are not the right fit — and we say so up front.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Projects where the regulatory complexity outweighs the MVP scope.</strong> Malta-licensed payment institutions, e-money institutions, and crypto-asset service providers carry a compliance burden — GDPR, AML, PSD2, MiCA — that adds significant engineering time to every user-facing feature. For regulated-vertical SaaS we require a dedicated compliance consultation before scoping the build, and we do not accept fixed-price mandates where the compliance scope is undefined at the time of contract.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Decisions We Make on Your Behalf — and Why</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A non-technical founder should not spend hours choosing between Next.js App Router and Pages Router, or between Auth.js and Clerk, or between BullMQ and AWS SQS. These decisions have right answers given the constraints of a six-week SaaS MVP, and we make them. The rationale is documented in the architecture doc so a future engineer can understand them — but the founder does not need to approve them any more than they approve which framework the login form is built in.
            </p>
            <div className="space-y-3">
              {[
                { decision: "Next.js App Router on Vercel", reason: "Fastest path from a React component to a production URL, with edge caching for marketing pages and API routes for the SaaS back end. Vercel's EU region satisfies GDPR data-residency with one config change." },
                { decision: "Postgres (Neon or Supabase) for the operational database", reason: "Mature, SQL-standard, row-level security for multi-tenant isolation, and a typed ORM (Drizzle or Prisma) that catches schema drift at compile time rather than 2am on a Monday." },
                { decision: "Clerk for authentication on most products", reason: "Org-scoped membership, SSO via a config toggle, and a pre-built UI that survives a security audit. Auth.js when the product has a specific reason to self-host the identity layer." },
                { decision: "Stripe Billing with Checkout Sessions", reason: "PCI scope stays inside Stripe. The hosted checkout converts better than custom card forms on mobile. Every Stripe event lands on a webhook that updates the local subscription mirror." },
                { decision: "PostHog self-hosted or cloud for product analytics", reason: "Feature flag, event capture, session recording, and PMF survey in a single stack. EU cloud region for GDPR. Cheaper and more flexible than Amplitude or Mixpanel for a product under €100k ARR." },
              ].map((item) => (
                <div key={item.decision} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{item.decision}</div>
                  <div className="text-sm text-muted-foreground">{item.reason}</div>
                </div>
              ))}
            </div>
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
