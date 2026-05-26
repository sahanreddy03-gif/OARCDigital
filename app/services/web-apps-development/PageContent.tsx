import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["web-apps-development"];

const phases = [
  { title: "Discovery & architecture (week 1)", detail: "We map the workflows, draft the data model, sketch the screens, and price the build in a one-week fixed-fee discovery sprint. You walk away with an architecture document and a Linear backlog whether or not you proceed." },
  { title: "Foundation build (weeks 2–4)", detail: "Auth, role-based access, the database schema, the deployment pipeline, and the empty shell of every screen. By the end of this phase your team can log in, click around, and see exactly where the product is going." },
  { title: "Feature build (weeks 5–10)", detail: "Two-week sprints, each ending in a Loom demo and a written changelog. Features ship to a staging environment your stakeholders can poke at long before launch — no big-reveal surprises." },
  { title: "Launch & handover (week 11)", detail: "Production deploy with monitoring, error tracking, an on-call rota for the first 30 days, and a written runbook. Source code lives in your GitHub from day one, so handover is a permission change, not a migration." },
];

const stack = [
  { area: "Frontend", choice: "Next.js 15 + TypeScript + Tailwind. Server components for fast first paint, client components where interactivity matters, no framework lock-in further down the road." },
  { area: "API layer", choice: "Node.js with Hono or tRPC. Type-safe end-to-end so a renamed database column produces a TypeScript error instead of a 3am page." },
  { area: "Database", choice: "PostgreSQL via Drizzle or Prisma — battle-tested in EU regions, easy to staff, and supported by every major Maltese hosting partner." },
  { area: "Auth & permissions", choice: "Clerk or Auth.js with role-based access enforced at the database layer using Postgres policies, not just in the UI." },
  { area: "Hosting", choice: "Vercel, Render, or AWS in eu-central-1 / eu-west-1 for sub-100ms latency to Maltese users and clean GDPR data residency for EU customers." },
];

const useCases = [
  { title: "Internal tools & ops dashboards", detail: "Replace the spreadsheet, the Airtable, or the legacy access-database your operations team has outgrown. Same data, but with audit trails, permissions, and a UI nobody curses at." },
  { title: "Customer portals", detail: "Branded self-service portals for clients to view orders, raise tickets, upload documents, and pay invoices — wired into the CRM, ERP, or accounting tool you already run." },
  { title: "Marketplaces & directories", detail: "Two-sided marketplaces, supplier directories, classifieds, and B2B catalogues with search, filtering, payments, and moderation tools built in." },
  { title: "Booking & scheduling apps", detail: "Resource scheduling, appointment booking, course enrolment, and calendar-integration apps — including Google Calendar, Outlook, and Microsoft 365 sync." },
  { title: "Progressive Web Apps", detail: "Installable, offline-capable web apps that behave like native iOS or Android apps without the App Store overhead. Push notifications, home-screen install, the lot." },
  { title: "Workflow & approval systems", detail: "Multi-step approval flows for procurement, HR, finance, or compliance teams — with audit logs, email/Slack notifications, and reporting dashboards baked in." },
];

export default function WebAppsDevelopmentContent() {
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
              <span className="text-white">Web Apps Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Web Application Engineering</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Web Apps Development for Malta &amp; EU Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Custom internal tools, customer portals, marketplaces, and progressive web apps — built by a Birkirkara engineering team that ships in weeks, hands the keys over on day one, and stays around for the awkward edge cases.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-book-call">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" data-testid="button-call-phone"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When a Spreadsheet Is No Longer Enough</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta businesses do not need a SaaS product. They need a single, custom web application that replaces three spreadsheets, a forgotten Airtable, and a chain of email approvals. They need it to enforce permissions, leave an audit trail, talk to the accounting system, and stop falling over every time payroll runs an export. They need it shipped this quarter, not next financial year.
            </p>
            <p className="text-foreground leading-relaxed">
              That is the bracket OARC Digital occupies. We are a small, senior product-engineering team in Birkirkara that builds web apps for one client at a time — internal tools for ops, customer portals for B2B, marketplaces for retail and hospitality, dashboards for finance and compliance. The technology is boring on purpose; the delivery model is the differentiator.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Build</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((u) => (
                <div key={u.title} className="p-5 rounded-xl bg-card border" data-testid={`use-case-${u.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
                  <h3 className="font-bold mb-2">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How an OARC Web App Build Runs</h2>
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
              We bias toward boring, hireable technology. The point is for any future engineer in Malta or remote to be able to read the codebase and ship a feature in their first week.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes With Every Web App Build</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Web App vs. SaaS vs. Mobile App — How To Decide</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We build all three, and we are happy to talk founders out of the wrong one. A custom web app is right when one organisation (or a known set of accounts) needs a tool that does not exist off the shelf. A SaaS product is right when the same problem is shared by hundreds of organisations and you intend to charge them a subscription. A native mobile app is right only when the use case genuinely demands camera access, offline-first data, push at scale, or App Store discoverability — otherwise a Progressive Web App will cover 90% of the requirement at a quarter of the cost.
            </p>
            <p className="text-foreground leading-relaxed">
              If you are not sure which category your idea sits in, the discovery sprint will resolve that. We have killed our own scope on more than one project because the right answer turned out to be a Notion automation or a Make.com flow, not a custom build.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Integrations We Wire In Most Often</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta web apps do not live in a vacuum. They sit inside an existing operating model with HubSpot or Salesforce on the front end, Xero or QuickBooks on the finance side, and a handful of internal systems that the IT team would rather not rebuild. We wire in those integrations as part of the standard build — using webhooks where systems support them, polling where they do not, and a properly versioned ETL job for the rest.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta-licensed verticals, that integration list often expands to KYC providers, AML screening services, MFSA filing endpoints, MGA reporting feeds, and the local banking APIs. Every external system is documented, retried with exponential back-off, and monitored — so when a third party breaks, your operations team gets a message in Slack instead of a phone call from an angry customer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Performance, Security, and the Boring Operational Stuff</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Performance budgets are non-negotiable: target a Largest Contentful Paint under 1.5 seconds on a Maltese 4G connection, an Interaction-to-Next-Paint under 200ms, and a Lighthouse performance score of 90+ on the busiest screens. We measure those numbers in CI on every pull request and refuse to merge code that regresses them.
            </p>
            <p className="text-foreground leading-relaxed">
              Security gets the same treatment. Every endpoint is rate-limited, every input validated server-side with Zod, every database query parameterised, and every secret rotated through a managed vault rather than committed to a .env file. We run dependency audits weekly, hand over a written threat model after launch, and book a free security review at the six-month mark.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Documentation and Knowledge Transfer Built Into Every Sprint</h2>
            <p className="text-foreground leading-relaxed">
              Sprint reviews always include a recorded walkthrough of the code shipped that fortnight, an updated architecture diagram, and a brief written commentary on technical debt taken on or paid down. Onboarding documentation, runbooks, and an operations manual live in the client repository from the first sprint, so when you eventually hire your first in-house engineer or bring on a CTO, the codebase and the documentation are both ready for them on day one.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`pricing-tier-${offer.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText?.toLowerCase() ?? "project"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          
          <MaltaContextBlock slug="web-apps-development" />
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

          <RelatedServices slug="/services/web-apps-development" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a Web App Idea Sitting in a Doc?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Bring it to a 30-minute discovery call. We will tell you honestly whether to build, buy, or duct-tape it together — and if it is worth building, what it would cost and how long to ship.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-cta-contact">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
