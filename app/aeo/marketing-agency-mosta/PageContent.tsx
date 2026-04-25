import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active campaign data from Mosta clients — we know the market from real spend, not theory',
  'Strong family-resident audience expertise (Facebook + Maltese-language creative)',
  'Local SEO optimised for the Mosta dome catchment and adjacent Naxxar / Mgarr',
  'Hospitality, automotive, and home-services playbooks built around Mosta consumer behaviour',
  '7-minute drive from our Birkirkara HQ — on-site visits during onboarding included',
];

const verticals = [
  { name: 'Restaurants + cafes', detail: 'Mosta residential density and Sunday-after-mass tradition make F&B one of the strongest categories in the area.' },
  { name: 'Salons + beauty', detail: 'High-frequency local consumer category with strong word-of-mouth — paid ads compound with Google reviews.' },
  { name: 'Gyms + fitness', detail: 'Mosta serves a wide catchment for fitness — campaigns target adjacent Naxxar, Lija, and Mgarr alongside the town centre.' },
  { name: 'Automotive + trade', detail: 'Strong working-population demand for car services, body shops, and home-improvement trades. Maltese-language Facebook ads dominate.' },
];

export default function MarketingAgencyMosta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Mosta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Mosta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social media, paid ads, and SEO for Mosta restaurants, retail, salons, gyms, clinics, and trade businesses. Birkirkara HQ — 7 minutes from the Rotunda.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for the Mosta Catchment</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Mosta is one of Malta&apos;s largest towns by population and one of the densest by household count. The catchment is overwhelmingly resident-driven — families, working couples, retirees, and a growing third-country-national community along the Targa Gap and Triq Tumas Chetcuti corridors. Tourist footfall exists around the Rotunda but does not drive most local business revenue. That fundamentally changes how marketing for Mosta businesses needs to work.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In Sliema, Instagram outperforms Facebook for almost every consumer category. In Mosta the inverse is true: Facebook still dominates for the family-resident demographic, especially for hospitality, home services, automotive, and trade categories. Maltese-language creative outperforms English for most of the catchment. WhatsApp lead capture works because almost every Mosta consumer uses it daily.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has direct campaign data from Mosta clients across hospitality and service categories. We know which Facebook audience configurations actually deliver footfall to the Rotunda area, which Google Ads keywords convert in Maltese versus English, and how to structure a Mosta local-SEO campaign that beats the bigger directory sites for category-plus-locality search.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Mosta?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Mosta Verticals We Work With</h2>
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
            <p className="text-muted-foreground mb-6">No setup fees, no annual lock-in, no surprise invoices. Three tiers Mosta businesses pick from.</p>
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
                    7-minute drive from Mosta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Active Mosta client campaigns running</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Maltese-language creative on demand</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Mosta Brands Outgrow Generic Agencies</h2>
              <p className="text-foreground leading-relaxed">
                Mosta sits at the intersection of family-run retail, hospitality clusters around Sir Paul Boffa Square, and a fast-growing professional-services tier. The marketing playbook that works for a Sliema cocktail bar is the wrong playbook for a Mosta family bakery — different audience, different price sensitivity, different review-platform behaviour. Our retainers calibrate to that reality with location-specific Google Business Profile work, Mosta-resident audience targeting on Meta, and content rooted in the village itself rather than recycled from a Sliema template. Every Mosta retainer also includes a quarterly half-day on-site at the client's premises so the strategy stays connected to what is actually happening on the ground.
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

          <RelatedLinks slug="/aeo/marketing-agency-mosta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Mosta? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We are 7 minutes away. Send a brief or call and we&apos;ll be on-site for the kickoff workshop.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
