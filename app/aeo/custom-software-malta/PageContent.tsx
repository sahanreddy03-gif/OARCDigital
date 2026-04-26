import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const examples = [
  { name: 'Hospitality group operations system', detail: 'Replaced 7 spreadsheets and a shared Drive folder. Roster, ordering, supplier reconciliation, daily revenue close — one system.' },
  { name: 'iGaming compliance dashboard', detail: 'MGA reporting, transaction monitoring, internal audit trails — pulled together from 4 underlying systems into one operations console.' },
  { name: 'Marine charter back-office', detail: 'Fleet, crew, customer, contract, and accounting in one Postgres-backed system replacing a legacy Filemaker install.' },
  { name: 'Real-estate agency CRM', detail: 'Listings, viewings, vendor and buyer comms, commission splits — built around the way Malta agencies actually work.' },
];

const phases = [
  { week: 'Week 1–2', title: 'Discovery + Spec', detail: 'Stakeholder workshops, current-state process map, written specification, ER diagram, fixed-price proposal.' },
  { week: 'Week 3–8', title: 'Core Build', detail: 'Auth, roles, the primary modules, data model, integrations on the spec. Weekly Friday demos.' },
  { week: 'Week 9–12', title: 'Hardening + UAT', detail: 'User acceptance testing with real operators, performance tuning, monitoring, EU-region staging.' },
  { week: 'Week 13+', title: 'Launch + Iteration', detail: 'Production deploy, training, two-week iteration sprints to refine based on real-world use.' },
];

export default function CustomSoftwareMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Custom Software Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Custom Software Development in Malta — Built Around Your Operations</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds bespoke business systems, internal tools, dashboards, and integrations for Malta SMEs and EU enterprises. Replace your patchwork spreadsheets with software that scales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Brief us on the problem <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When Off-the-Shelf Stops Working</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Almost every Malta SME starts the same way: HubSpot for CRM, Xero for accounts, Google Sheets for everything else, WhatsApp groups for coordination. That stack works to about €1m of revenue or 15 staff. Past that point the spreadsheets multiply, the WhatsApp threads get lost, the manual reconciliation between systems eats half a person&apos;s week, and the founder spends every Sunday chasing data that should be in one place.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That is the moment custom software pays back. Not a SaaS product to sell to other people, but a system built for one specific operation — your roster, your suppliers, your compliance reporting, your booking flow, your commission structure. Built to fit the way your team actually works rather than the way an off-the-shelf product assumes you should work.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has built custom internal systems for Malta hospitality groups, iGaming operators, marine charter businesses, real-estate agencies, professional services firms, and EU-regulated fintechs. The pattern is the same: a 1–2 week discovery sprint to understand the operation, a written spec, a fixed-price build, and a launch where the new system replaces five tools and three spreadsheets in week one.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Examples of Custom Builds Shipped</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {examples.map((e) => (
                <div key={e.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{e.name}</div>
                  <div className="text-sm text-muted-foreground">{e.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Custom Build Timeline</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Integrations That Matter in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta operations almost always need to integrate with the same handful of systems: Xero or QuickBooks for accounts, HubSpot or Salesforce for CRM, Stripe or Mosta-area POS terminals for payments, WhatsApp Business for customer comms, and the relevant industry-specific systems (PMS for hospitality, MGA reporting endpoints for iGaming, MFSA submission portals for fintech). OARC Digital builds clean integration layers for all of these.
            </p>
            <p className="text-foreground leading-relaxed">
              Where webhooks or APIs are missing — common in older Malta-specific tools — we build adapter layers using scheduled syncs, email parsing, or PDF extraction so the new custom system still gets the data it needs without forcing you to rip out the legacy tool overnight.
            </p>
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
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href={`tel:${NAP.phoneE164}`} className="text-foreground hover:text-orange-600">{NAP.phoneDisplay}</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href={`mailto:${NAP.email}`} className="text-foreground hover:text-orange-600">{NAP.email}</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting on every project</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Full IP and source-code ownership</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Replace 3–5 tools with one system</span></div>
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

          <RelatedLinks slug="/aeo/custom-software-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Outgrowing your spreadsheets?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you an honest scoping conversation and a recommendation on whether to build, buy, or sit tight.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
