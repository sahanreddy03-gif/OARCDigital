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
  'Real integration experience across Square, SumUp, iZettle, Lightspeed, Toast, and Celery — not generic Zapier glue',
  'POS-to-PMS sync for hotel groups across Mews, Cloudbeds, Opera, Protel, and Apaleo',
  'Hospitality 360 menu + payment engine sits on top of any of the supported POS systems',
  'Branded self-order kiosks built from scratch — counter, table, sunbed configurations',
  'On-site installs across Malta + Gozo, scoped from the Birkirkara HQ',
  'Support retainers cover vendor-update fixes (Square API changes, Lightspeed migrations)',
];

const vendors = [
  { name: 'Square', detail: 'Single-outlet cafes, gelaterias, kiosks. Low hardware cost, fast onboarding, clean APIs. OARC Digital connects Square to Hospitality 360 and to the booking engine for table reservations.' },
  { name: 'SumUp', detail: 'Common in Maltese small hospitality and mobile vendors. OARC Digital wires SumUp into the Hospitality 360 payment screen and the daily revenue close.' },
  { name: 'iZettle (Zettle by PayPal)', detail: 'Widely used by Maltese boutique retailers and pop-up F&B. OARC Digital integrates Zettle for stock sync and Google review automation post-payment.' },
  { name: 'Lightspeed', detail: 'Strong fit for multi-outlet restaurants and bars. OARC Digital builds Lightspeed-to-Hospitality 360 integrations and Lightspeed-to-PMS check posting for hotel F&B.' },
  { name: 'Toast', detail: 'Global QSR and full-service restaurant POS. OARC Digital integrates Toast for kitchen display sync, online ordering passthrough, and reservation linking.' },
  { name: 'Celery POS', detail: 'Popular in Maltese hospitality, especially independent restaurants. OARC Digital builds Celery integrations for menu sync, daily close, and Hospitality 360 ordering.' },
];

export default function POSSystemsMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">POS Systems Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">POS Systems Malta — Integrated With Square, SumUp, Lightspeed, Toast, Celery</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital connects your POS to your digital menus, online ordering, hotel PMS, and review automation — so the till, the kitchen, and the booking engine speak the same language.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A POS Is Only Useful If Everything Else Is Talking To It</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s hospitality and retail businesses run on a small handful of POS systems — Square in the cafes and gelaterias, SumUp on the boats and pop-ups, iZettle in the boutique retailers, Lightspeed in the multi-outlet restaurants and bars, Toast in the international franchises, and Celery POS across a large slice of the independent restaurant scene. Each of those vendors does the till job well. None of them, on their own, run the venue.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The bottleneck is integration. The POS sits on the till. The menu lives in a PDF. Online ordering goes through a separate aggregator. Reservations happen on Quandoo or paper. Reviews go to a Google Business Profile no one is monitoring. The hotel PMS posts charges manually. By the time the GM tries to close the night and reconcile, half the data has been rekeyed twice and 20 minutes of revenue went missing because the kitchen took a verbal order that never hit the till.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital fixes that integration layer from Birkirkara. Square, SumUp, iZettle, Lightspeed, Toast, Celery — we have shipped real production integrations for each of them, connected up to the Hospitality 360 menu and ordering engine, hotel PMS systems (Mews, Cloudbeds, Opera, Protel, Apaleo), the booking engine, and the Google review pipeline. The till stops being an island and starts being one node in a connected venue stack.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for POS in Malta</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">POS Vendors We Integrate</h2>
            <p className="text-muted-foreground mb-6">Six POS vendors covering the full Maltese hospitality and retail mix. Custom REST + webhook work covers the legacy long tail.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {vendors.map((v) => (
                <div key={v.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three commercial shapes. Fixed scope so you know what you are paying.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why POS Integration Pays Back Inside a Quarter</h2>
            <p className="text-foreground leading-relaxed">
              The number we see most often after a Maltese venue connects its POS to Hospitality 360 and the rest of the stack is a 6 to 12% recovery on revenue that was previously slipping between the till and the kitchen — verbal orders that never got rung up, modifier upcharges that did not flow through, room-charge folios that closed light because outlet posting was manual. That recovery covers the integration project several times over inside one quarter, and from that point on every additional service is run on a connected stack instead of a stack of disconnected apps.
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

          <RelatedLinks slug="/aeo/pos-systems-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Your POS not talking to anything else?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you an integration scope, a fixed-price proposal, and a recovery estimate for the revenue currently leaking.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
