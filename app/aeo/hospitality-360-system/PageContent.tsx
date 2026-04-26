import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import TrustBlock from "@/components/seo/TrustBlock";
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'One tenant covers menu, ordering, payment, reviews, reservations, and reporting — no zapier glue needed',
  'Real POS integrations with Lightspeed, Square, SumUp, iZettle, Toast, and Celery — not generic webhooks',
  'PMS sync with Mews, Cloudbeds, Opera, Protel, and Apaleo for hotel outlet check posting',
  'Automated Google review capture wired into the payment confirmation — no staff intervention required',
  'EU-region hosted on Vercel eu-west-1 and Render Frankfurt — IDPC-clean from day one',
  'Built and supported from Birkirkara — kickoff and training happen in person across the Maltese islands',
];

const features = [
  { name: 'Menu engine', detail: 'Multilingual menus in 9+ languages, modifiers, allergens, dietary tags, time-of-day visibility (breakfast / lunch / dinner / late-night), and instant publish.' },
  { name: 'Ordering + payments', detail: 'QR-to-table, QR-to-sunbed, counter mode, or server-mediated. Stripe Connect, Apple Pay, Google Pay, and split-bill flows out of the box.' },
  { name: 'POS + PMS integrations', detail: 'Lightspeed, Square, SumUp, iZettle, Toast, Celery on the POS side; Mews, Cloudbeds, Opera, Protel, Apaleo on the PMS side. Outlet check posting included.' },
  { name: 'Review automation', detail: 'Automated Google review prompt fired post-payment via receipt screen, email, or WhatsApp. Deep-linked into the venue Google Business Profile.' },
  { name: 'Reservations + waitlist', detail: 'Native reservations with covers limits, deposit capture, automated confirmation and reminder messaging, and a waitlist mode for peak service.' },
  { name: 'Operations dashboards', detail: 'Daily revenue close, outlet-by-outlet covers, average spend per cover, review velocity, and integration health — all in one view at the OARC tenant.' },
];

export default function Hospitality360System({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Hospitality 360 System</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Hospitality 360 — The System Behind Malta&apos;s Most Efficient Venues</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              One tenant. POS-integrated. PMS-synced. Review-automated. EU-hosted. Built by OARC Digital in Birkirkara for the way Maltese hospitality actually runs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">An Operating System, Not Another QR-Menu Vendor</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Maltese hospitality market is full of QR-menu apps. Most of them are a thin wrapper around a Stripe checkout and a PDF, sold on a 36-month contract by a sales rep who has never worked a service. Hospitality 360 is not that. It is a real operating layer — a single tenant that holds the menu engine, the ordering and payment flow, the POS integration, the PMS sync, the review automation, the reservations, and the operations dashboards in one connected system. The difference shows up at month three when the operator stops paying for five disconnected SaaS subscriptions and starts running the venue from one screen.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital built Hospitality 360 in Birkirkara because the Malta hospitality market needed it. Lightspeed and Square will not write a Maltese menu. Mews and Cloudbeds will not chase a Google review. Generic SaaS will not ship a multilingual flow that handles Maltese, Italian, English, German, and French on the same table at a Sliema beach club. Hospitality 360 was designed for those edge cases first and the obvious cases second — which is why it works for boutique hotels in Mdina, Paceville cocktail bars, beach clubs in Mellieha, and gelaterias on the Sliema strip.
            </p>
            <p className="text-foreground leading-relaxed">
              The system is hosted on EU-region infrastructure (Vercel eu-west-1, Render Frankfurt, AWS eu-central-1), all guest data stays in the EU, and OARC Digital provides the data-flow diagram, processor agreement, and DPIA inputs at the start of every deployment so IDPC questions are answered before they are asked. Support is local — phone, WhatsApp, and email reach the team at the Birkirkara office during service hours.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Operators Pick Hospitality 360 Over Off-the-Shelf SaaS</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Features + Integrations</h2>
            <p className="text-muted-foreground mb-6">Every Hospitality 360 tenant ships with these modules. POS and PMS connections are scoped per venue during the discovery week.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{f.name}</div>
                  <div className="text-sm text-muted-foreground">{f.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three commercial shapes. Pick the one that fits the venue.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why a Single-Tenant System Beats a Stack of Apps</h2>
            <p className="text-foreground leading-relaxed">
              The reason most Malta operators do not rely on a generic QR-menu vendor is that a hospitality business is not a menu. It is a menu plus a POS plus a PMS plus a payments processor plus a reviews channel plus a reservations book plus a daily revenue close. When those live in six different SaaS apps, integration breaks every time one vendor pushes an update, the operations team rekeys data twice a day, and the GM closes the night by exporting CSVs at 02:00. Hospitality 360 collapses that into one tenant — one source of truth, one login, one supplier. That is the difference between technology that helps a venue and technology that taxes it.
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

          <RelatedLinks slug="/aeo/hospitality-360-system" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">See the system end-to-end.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute live walkthrough of menu, payments, POS sync, PMS posting, and review capture. We will mock up your venue before the call ends.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
