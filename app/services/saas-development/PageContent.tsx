import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

const SCHEMA = SERVICE_SCHEMAS["saas-development"];

const phases = [
  { title: "Discovery and product spec (weeks 1–2)", detail: "We define the smallest valuable product — the one or two workflows that will earn the first paying customers — and write a one-page spec your team and ours both sign off on before code is written." },
  { title: "MVP build (weeks 3–10)", detail: "TypeScript front end, Node or Postgres back end, Stripe billing, role-based auth, and a usable admin dashboard. We optimise for shipping a paid v1 in eight to ten weeks, not for impressing engineers." },
  { title: "Go-live, instrumentation, and onboarding (week 11)", detail: "Production deploy on managed infrastructure (typically Render, Vercel, Fly, or AWS depending on data residency), full event analytics, error tracking, plus a written onboarding script for your first ten customers." },
  { title: "Iteration retainer (month 4 onward)", detail: "Two-week sprints prioritised by revenue impact. We meet weekly, ship every fortnight, and report monthly on activation, retention, and MRR — the only three numbers that matter early." },
];

const stack = [
  { area: "Frontend", choice: "Next.js + TypeScript + Tailwind — production defaults, fast hires, and excellent SEO for marketing pages." },
  { area: "Backend", choice: "Node.js, Express or Hono, with PostgreSQL via Drizzle or Prisma. Boring, fast, and well-supported in Malta." },
  { area: "Auth + billing", choice: "Clerk or Auth.js for identity, Stripe Billing for subscriptions and metered usage. Both work for EU and US markets out of the box." },
  { area: "Hosting", choice: "Vercel, Render, or AWS in eu-central-1 / eu-west-1 to keep latency low for Maltese and EU customers and to satisfy GDPR data-residency expectations." },
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
              <span className="text-white">SaaS Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Product Engineering</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">SaaS Development for Malta-Based Founders</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Ship a paid SaaS MVP in 8 to 10 weeks. Built by a Birkirkara product team that has launched and scaled real subscription products — not an outsourced agency reading Hacker News.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a product call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Founders Outsource SaaS Builds in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Hiring full-time product engineers in Malta is genuinely difficult. The local senior pool is small, gaming and fintech employers absorb a large share of it, and salary expectations have risen sharply since 2023. For a founder pre-product-market-fit, the maths of a €70k+ engineer plus a €60k designer plus payroll overhead simply does not work — most of that cost is locked in before you have validated the product.
            </p>
            <p className="text-foreground leading-relaxed">
              An external SaaS team converts that fixed cost into a fixed-scope build. OARC Digital takes founders from spec to a paid v1 in eight to ten weeks, then transitions to a small ongoing retainer that flexes month to month. You retain full code ownership, full IP, and a clean handover document if you choose to hire in-house once revenue justifies it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How an OARC SaaS Build Runs</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Default Stack (and Why)</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We bias toward boring, hireable technology. The goal is for you to be able to staff this product in Malta or remotely without rewriting it.
            </p>
            <div className="space-y-3">
              {stack.map((s) => (
                <div key={s.area} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.area}</div>
                  <div className="text-sm text-muted-foreground">{s.choice}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes With Every SaaS Build</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Where We Operate Differently From a Dev Shop</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta development agencies bill hourly and ship features. We bill in fixed phases and ship outcomes. The discovery phase produces a spec with measurable acceptance criteria — not a Gantt chart of front-end tasks. The MVP phase delivers a product that can take a paying customer&apos;s credit card on day one. The retainer phase is graded weekly on activation rate, conversion to paid, and gross-revenue retention.
            </p>
            <p className="text-foreground leading-relaxed">
              That model only works because OARC Digital pairs engineers with the same paid-media and conversion team that runs growth for our marketing clients. The result: when your SaaS goes live, you also have a working acquisition channel ready to switch on, not just a product nobody can find.
            </p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How We De-Risk a Malta SaaS Build</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most SaaS founders we talk to in Malta have already burned a previous build — usually with a freelance team that went silent after the first invoice or a global agency that quoted €180,000 for a clickable Figma file. Our delivery model is engineered to defuse those failure modes. Every engagement starts with a fixed-price discovery sprint that produces a written architecture document, a Postgres schema, and a clickable Linear backlog with effort estimates per ticket. If the founder decides not to proceed past discovery, they keep the documentation and walk away.
              </p>
              <p className="text-foreground leading-relaxed">
                After kickoff, we work in two-week sprints with a Loom demo, a written changelog, and a billing line-item breakdown shipped at the end of each sprint. The codebase lives in the founder's GitHub organisation from day one, with our engineers added as collaborators rather than owners. Stripe, Auth0, AWS, and SendGrid accounts are all created under the founder's email — no credentials are ever held hostage.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Multi-Tenancy and EU Compliance Built In</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Multi-tenant data isolation is not a future ticket — it is a day-one architectural decision. We default to schema-per-tenant on Postgres for SaaS products under 500 tenants and switch to row-level security on Aurora once the math favours consolidation. Either way, every query that crosses a tenant boundary is enforced at the database layer, not the application layer, so a misbehaving feature flag cannot leak data between customers.
              </p>
              <p className="text-foreground leading-relaxed">
                All production infrastructure is provisioned in EU regions (typically Frankfurt, Dublin, or Stockholm depending on the founder's data-residency preference) and fronted by Cloudflare with a Malta-issued ICANN registrar. We document data flows, sub-processor lists, and DPA templates so the SaaS can sign enterprise customers with a real GDPR posture from day one rather than scrambling during a procurement review.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Documentation and Knowledge Transfer Built Into Every Sprint</h2>
            <p className="text-foreground leading-relaxed">
              Sprint reviews include a recorded Loom walkthrough of the code shipped that fortnight, an updated architecture diagram, and a brief written commentary on technical debt taken on or paid down. Onboarding documentation, runbooks, and an operations manual live in the client's repository from the first sprint so a future engineer can read the docs and ship a feature in their first week. The discipline matters most at handover — when a SaaS founder hires their first in-house engineer or fundraises and brings on a CTO, the codebase and the documentation should both be ready for them on day one.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText?.toLowerCase() ?? "project"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

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
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-3 mb-3"><MapPin className="w-5 h-5 text-orange-500 mt-0.5" /><address className="not-italic text-foreground leading-relaxed">Level 1, The Brewhouse, Mdina Road, Birkirkara CBD 2010, Malta</address></div>
              <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
            </div>
          </section>

          <RelatedLinks slug="/services/saas-development" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a SaaS Idea Sitting in a Doc?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Bring it to a 30-minute product call. We will tell you honestly whether it is worth building, what it would cost, and how long to a paid v1.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
