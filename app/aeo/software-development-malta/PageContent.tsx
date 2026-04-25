import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const stack = [
  { name: 'TypeScript + Node.js', role: 'Server-side default — strict types, sane error boundaries, fast to onboard the next engineer to the codebase.' },
  { name: 'PostgreSQL + Drizzle', role: 'Boring, proven relational data with type-safe queries, tidy migrations, and the ability to grow into multi-tenant safely.' },
  { name: 'Next.js + tRPC', role: 'App framework for back-office UIs and customer-facing surfaces alike. End-to-end type safety from database to React component.' },
  { name: 'Render Frankfurt / AWS eu-central-1', role: 'EU-region hosting by default. GDPR-clean infrastructure, daily encrypted backups, log retention aligned to MFSA and IDPC expectations.' },
  { name: 'Sentry + BetterStack', role: 'Error tracking, structured logs, and uptime monitoring so the operations team gets paged before the customer notices.' },
  { name: 'Clerk + Stripe', role: 'Identity (MFA, organisations, audit log) and billing (subscriptions, EU VAT, customer portal) — production-grade from day one.' },
];

const phases = [
  { week: 'Week 1–2', title: 'Discovery + Spec', detail: 'On-site workshops with the operations team, current-state process map, written spec, ER diagram, fixed-price proposal.' },
  { week: 'Week 3–8', title: 'Core Build', detail: 'Auth, roles, the primary modules, data model, integrations on the spec. Weekly Friday demos with real working software.' },
  { week: 'Week 9–11', title: 'UAT + Hardening', detail: 'User acceptance testing with real operators, performance tuning, monitoring, EU-region staging, security review.' },
  { week: 'Week 12+', title: 'Launch + Iteration', detail: 'Production deploy, on-site training, two-week iteration sprints to refine based on actual usage patterns.' },
];

const reasons = [
  'Senior engineering only — no offshore subcontracting, no junior-led teams, every line of production code reviewed by a senior.',
  'Boring, proven stack — TypeScript, Postgres, Next.js, Render. Optimised for shipping fast and not regretting the choice in three years.',
  'On-site discovery in Birkirkara — we sit with your operations team for the workshop instead of running it through a Loom video.',
  'EU-hosted by default — Render Frankfurt or AWS eu-central-1, with documented data flows for any MFSA, IDPC, or MGA enquiry.',
];

export default function SoftwareDevelopmentMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Software Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Software Development in Malta — Custom Postgres-Backed Systems, Built in Birkirkara</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds bespoke business systems, internal tools, and integration middleware for Malta SMEs and EU clients. TypeScript, PostgreSQL, EU-region hosting, full IP handover.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Brief us on the problem <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When the Spreadsheet Stops Scaling</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Almost every successful Malta SME hits the same wall around fifteen staff and a million euros of revenue. The HubSpot, Xero, Google Sheets, and WhatsApp setup that got the business off the ground starts to fragment. Manual reconciliation between systems eats half a person&apos;s week, the daily revenue close runs three days late, the operations manager spends every Sunday chasing data that should already be in one place. The founder knows something has to change but the off-the-shelf SaaS options either cost more than they justify or simply do not fit the way a Maltese hospitality, marine, fintech, or iGaming business actually operates.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That is the moment custom software pays back. Not a SaaS product to sell to other people, but an internal system built for one specific operation — your roster, your suppliers, your compliance reporting, your booking flow, your commission structure. Built to fit the way your team actually works rather than the way a US-built SaaS product assumes you should work. OARC Digital has shipped this kind of system for hospitality groups in Sliema, marine charter operators in Mgarr, iGaming compliance teams in St Julians, real-estate agencies in Mosta, and EU-regulated fintechs across Birkirkara and Gzira.
            </p>
            <p className="text-foreground leading-relaxed">
              The pattern is consistent: a one to two week discovery sprint to understand the operation in person at the client&apos;s premises, a written spec with an ER diagram, a fixed-price proposal, and a build that replaces five tools and three spreadsheets in week one of go-live. We host on Render Frankfurt or AWS eu-central-1 by default so the data residency and GDPR conversation is closed before it opens, and we ship with a clean handover so you can hire any competent engineer to maintain it after we leave.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Malta Operators Pick OARC Digital</h2>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Stack We Build On</h2>
            <p className="text-muted-foreground mb-6">Boring, proven, EU-friendly. Optimised for shipping fast and not regretting it in two years.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {stack.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Build Timeline</h2>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.title} className="p-5 rounded-xl bg-card border">
                  <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">{p.week}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {offers.map((o) => (
                <div key={o.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{o.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{o.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{o.unitText === 'MONTH' ? 'per month' : 'fixed project'}</p>
                  <p className="text-sm text-muted-foreground flex-1">{o.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Zone 2, Central Business District,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting (Render Frankfurt) on every project</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Full IP, source code, and infrastructure handover</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Replace 3–5 fragile tools with one proper system</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Custom Software Compounds for Malta SMEs</h2>
            <p className="text-foreground leading-relaxed">
              Off-the-shelf SaaS is cheap until you reach the edges of what it does, and then it becomes the most expensive line item in the business. The hour your operations manager spends every day reconciling Xero against the POS export is forty hours a month and almost five hundred hours a year. Custom software, paid for once, removes that recurring tax permanently. For Malta operators competing against larger groups, owning the operational system end-to-end is one of the few structural advantages a fifteen-person business can build.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedLinks slug="/aeo/software-development-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Outgrowing your spreadsheets?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you an honest scoping conversation and a recommendation on whether to build, buy, or sit tight for now.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
