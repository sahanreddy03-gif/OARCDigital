import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active Mellieha hospitality client campaigns — direct seasonal data',
  'Multi-language creative — English, German, Italian, French for tourist audiences',
  'OTA listing optimisation — Booking.com, Airbnb, Expedia, Google Hotel Ads',
  'Seasonal campaign calendars built around Mellieha&apos;s May-to-October peak',
  'Monthly on-site visits during peak season for hands-on campaign reviews',
];

const verticals = [
  { name: 'Hotels + aparthotels', detail: 'Mellieha&apos;s 4-star and 5-star resort properties competing for direct bookings against the major OTAs.' },
  { name: 'Holiday-let owners', detail: 'Apartments, villas, and farmhouses listed on Booking.com, Airbnb, and Vrbo — owned-channel marketing to reduce OTA dependence.' },
  { name: 'Beach restaurants + lidos', detail: 'Mellieha Bay and Ghadira venues with concentrated peak-season demand. Instagram and TikTok dominate discovery.' },
  { name: 'Dive + watersports operators', detail: 'PADI dive centres, jetski hire, kayak tours, parasailing — multi-language paid campaigns and TripAdvisor optimisation.' },
];

export default function MarketingAgencyMellieha({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Mellieha</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Mellieha Tourism Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social, paid ads, SEO, and OTA optimisation for Mellieha hotels, holiday lets, beach restaurants, and dive centres. Birkirkara HQ — monthly on-site visits in peak season.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Mellieha&apos;s Seasonal Tourism Economy</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Mellieha is overwhelmingly tourism-driven. The local council covers Malta&apos;s longest sandy beach at Ghadira Bay, the Popeye Village attraction, the Gozo ferry terminal at Cirkewwa, and one of the densest concentrations of resort hotels and holiday lets in the country. Roughly 80% of local business revenue is concentrated in the May-to-October peak, with smaller spikes around Christmas, Easter, and the August public holidays. Marketing strategies that ignore that seasonality run out of money in the off-season and miss the booking window in spring.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The OARC Digital approach for Mellieha tourism clients is built around the booking-window calendar rather than month-to-month spend curves. Paid social and Google Hotel Ads spend lifts 8 weeks before peak season starts in March and April, holds at peak through July and August, then tapers in September. Organic content and SEO compound year-round to build the brand recall that converts during the booking-decision window. Off-season is used for content production, OTA listing optimisation, and creative refresh for the next peak.
            </p>
            <p className="text-foreground leading-relaxed">
              We have direct campaign data from Mellieha hospitality clients across hotels, holiday lets, and beach venues. We produce multi-language creative in English, German, Italian, and French — the four largest source markets for the Mellieha tourist audience — and we optimise OTA listings on Booking.com, Airbnb, Vrbo, Expedia, and Google Hotel Ads alongside owned-channel marketing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Mellieha?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Mellieha Verticals We Work With</h2>
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
                    25 minutes from Mellieha — monthly on-site visits in peak season
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Tourism + hospitality specialists</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">OTA + Google Hotel Ads optimisation</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Seasonal campaign calendars built-in</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Mellieha's Seasonal Audience</h2>
              <p className="text-foreground leading-relaxed">
                Mellieha's audience swings dramatically between off-season locals and summer tourists, and the marketing that works in March will under-deliver in July. Our Mellieha retainers run a dual calendar — local-resident creative through autumn and winter, tourist-targeted creative across spring and summer — with bid strategies and creative budgets that flex monthly rather than annually.
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

          <RelatedLinks slug="/aeo/marketing-agency-mellieha" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Hospitality business in Mellieha?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Best to start the conversation 8–12 weeks before peak season. Send a brief and we&apos;ll come visit on-site.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
