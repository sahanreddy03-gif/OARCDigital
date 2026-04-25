import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const phases = [
  { week: 'Week 1–2', title: 'Discovery + Spec', detail: 'Founder workshop in Birkirkara, customer interviews, written product spec, ER diagram, fixed-price proposal for the build.' },
  { week: 'Week 3–6', title: 'Core MVP Build', detail: 'Auth, billing, multi-tenant Postgres data model, the single primary user workflow, and admin scaffolding. Weekly Friday demo.' },
  { week: 'Week 7–9', title: 'Hardening + Integrations', detail: 'Stripe Billing, transactional email, monitoring, error tracking, EU-region staging environment, and the integrations on the spec.' },
  { week: 'Week 10', title: 'Launch + Onboarding', detail: 'Production deploy, first 10 customer onboarding flows, founder training, GDPR DPIA documentation, and clean code handover.' },
];

const stack = [
  { name: 'Next.js + TypeScript', role: 'App framework — server components, edge routing, RSC streaming for fast time-to-first-byte.' },
  { name: 'PostgreSQL + Drizzle', role: 'Multi-tenant relational data with type-safe queries and tidy migrations.' },
  { name: 'Clerk or Auth.js', role: 'Identity, MFA, organisation membership, audit log — production-ready from day one.' },
  { name: 'Stripe Billing', role: 'Subscriptions, metered usage, EU VAT, customer portal, dunning, tax automation.' },
  { name: 'Vercel / Render (EU)', role: 'EU-region hosting in eu-west-1 or Frankfurt — GDPR-clean by default.' },
  { name: 'Sentry + PostHog', role: 'Error tracking and product analytics so you know which features customers actually use.' },
];

export default function SaasDevelopmentMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">SaaS Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">SaaS Development in Malta — Paid v1 in 8–10 Weeks</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital is a Birkirkara-based product engineering team that builds and ships paid SaaS MVPs for Malta-based founders. EU-hosted, full IP, fixed price.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Build SaaS in Malta?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta has quietly become one of the better places in the EU to incubate a SaaS company. The combination of an English-first business culture, EU passport for customer data, a 5% effective corporate tax rate via the imputation system, and a small but fast-growing senior engineering pool means founders can ship a paid v1 here for materially less than London or Berlin and keep the cap table clean while doing it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital has been building SaaS for Malta-based and EU-based founders since 2021 from our office in Birkirkara&apos;s Central Business District. The pattern we see again and again: a founder with deep industry expertise (iGaming compliance, hospitality operations, marine logistics, EU-regulated fintech) who needs a software partner that can take a half-formed idea, push back where the spec is wrong, and ship a real product that people pay for inside ten weeks.
            </p>
            <p className="text-foreground leading-relaxed">
              That is the engagement we run best. A two-week discovery sprint to compress the idea into a written spec and ER diagram, then an eight-week build to a paid v1 with auth, billing, the single primary workflow, and the operational scaffolding (monitoring, error tracking, EU-hosted backups) that lets you onboard real customers without firefighting at midnight.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 10-Week MVP Sprint</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">GDPR + EU Hosting by Default</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Every SaaS we build defaults to EU-region infrastructure — Vercel eu-west-1 or eu-central-1, Render Frankfurt, AWS eu-central-1. Customer data never leaves the EU unless your spec specifically requires a US or UK region. We document the data-flow diagram on day one so your DPIA, ROPA, and any subsequent regulator queries (MFSA, IDPC, MGA) are answered before they are asked.
            </p>
            <p className="text-foreground leading-relaxed">
              For founders building in regulated verticals — iGaming, payments, health, EU-regulated fintech — this matters in week one of customer conversations, not in year two. The first enterprise customer will ask for the security questionnaire and the data residency statement before signing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement models. Pick the one that matches where you are.</p>
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
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting on every project</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Full IP and source-code ownership</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Founders served across Malta + EU</span></div>
              </div>
            </div>
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

          <RelatedLinks slug="/aeo/saas-development-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have an idea? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written feedback summary and a rough scope. No deck, no pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
