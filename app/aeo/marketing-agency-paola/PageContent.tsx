import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active Paola client campaigns — direct data from the local market',
  'Three Cities catchment expertise (Cospicua, Senglea, Vittoriosa, plus Tarxien and Fgura)',
  'Maltese-language consumer creative produced in-house',
  'Lower-competition local SEO — many Paola category-plus-locality terms still under-optimised',
  '15 minutes from our Birkirkara HQ — on-site kickoff workshops included',
];

const verticals = [
  { name: 'Restaurants + cafes', detail: 'Family hospitality serving Paola residents and the adjacent Three Cities catchment. Facebook + Maltese creative dominates the channel mix.' },
  { name: 'Retail boutiques', detail: 'Independent fashion, home, and gift retailers. Instagram + Google Local Inventory ads drive footfall to the town centre.' },
  { name: 'Salons + clinics', detail: 'Beauty salons, dental practices, physiotherapy, and aesthetic clinics serving the southern central catchment.' },
  { name: 'Automotive + trade', detail: 'Garages, body shops, and home-services trades operating from Paola serving the Three Cities and the southern industrial corridor.' },
];

export default function MarketingAgencyPaola({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Paola</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Paola Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social, paid ads, and SEO for Paola (Rahal Gdid) hospitality, retail, beauty, and trade businesses, plus the wider Three Cities catchment. Birkirkara HQ.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Paola and the Three Cities</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Paola — Rahal Gdid in Maltese — is the commercial hub of southern central Malta. The town anchors a dense residential catchment that flows out to Tarxien, Fgura, Marsa, and into the Three Cities of Cospicua, Senglea, and Vittoriosa across the Cottonera waterfront. Total addressable population in that catchment runs to over 60,000 people — comparable to Sliema and St Julian&apos;s combined — but most of the marketing attention in Malta still concentrates on the central tourist corridor, leaving Paola visibly underserved.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That under-served status is an opportunity. Local SEO competition for category-plus-Paola or category-plus-Three-Cities keywords is materially lower than equivalent searches for Sliema or St Julian&apos;s. Google Maps optimisation, on-page structured data, and a steady cadence of Google Business Profile posts can move a Paola business into the top three local-pack results in 3 to 5 months — half the time it would take in the central tourist corridor and at a quarter of the cost.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has direct campaign data from clients operating in Paola and the adjacent Three Cities catchment. We produce Maltese-language creative in-house, run targeted Facebook and Instagram campaigns segmented by neighbourhood, and structure local SEO that exploits the lower competitive density in this part of the island. The result is marketing performance that matches Sliema-area benchmarks at a noticeably lower cost-per-lead.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Paola?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Paola Verticals We Work With</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {verticals.map((v) => (
                <div key={v.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{v.name}</div>
                  <div className="text-sm text-muted-foreground">{v.detail}</div>
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per month</p>
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
                    Mdina Road, Birkirkara CBD 2010, Malta<br />
                    15-minute drive from Paola
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Lower competition = lower cost-per-lead</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Maltese-language creative on demand</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing Built for Paola's Local Economy</h2>
              <p className="text-foreground leading-relaxed">
                Paola anchors the southern harbour area and supports a dense network of independent retailers, family-run restaurants, and local services. Foot-traffic campaigns into Paola work best when they pair Google Business Profile optimisation with Meta geo-targeted offers and printed door-drop creative produced in our Birkirkara studio.
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

          <RelatedLinks slug="/aeo/marketing-agency-paola" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Paola or the Three Cities?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Lower competition than the central corridor. Send a brief and we&apos;ll come visit on-site.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
