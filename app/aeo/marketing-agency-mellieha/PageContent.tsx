import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import TrustBlock from "@/components/seo/TrustBlock";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

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
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-8" data-testid="text-last-updated">Last updated: 10 May 2026</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in {NAP.addressLocality}</h2>
            <TrustBlock variant="visit" />
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Mellieha's Seasonal Audience</h2>
              <p className="text-foreground leading-relaxed">
                Mellieha's audience swings dramatically between off-season locals and summer tourists, and the marketing that works in March will under-deliver in July. Our Mellieha retainers run a dual calendar — local-resident creative through autumn and winter, tourist-targeted creative across spring and summer — with bid strategies and creative budgets that flex monthly rather than annually.
              </p>
            </section>
          <MaltaContextBlock slug="marketing-agency-mellieha" />

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

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Mellieha Booking-Window Calendar</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Mellieha tourism year breaks into four distinct marketing windows that any successful retainer plans against from January 1st. The first runs from January through late March — the inspiration window. German and Scandinavian source-market audiences are researching summer holidays in the dark months at home. Paid spend here is brand-led, video-first, and aimed at organic-search recall rather than direct booking. The conversion lag is real and unavoidable: a saved Instagram post in February becomes a Booking.com inquiry in April.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The second window is April to late June — the booking window. Search-intent and OTA spend lift sharply. Google Hotel Ads, Booking.com paid placements, and high-intent Meta lead-gen become the dominant channels. The third window is the July-and-August peak, where the marketing job shifts from acquisition to ancillary-revenue lift — restaurant covers at the resort, dive-centre add-ons, sunset-cruise upsells. Cost-per-acquisition is at its highest, but the lifetime-value per booked guest is maximised.
            </p>
            <p className="text-foreground leading-relaxed">
              The fourth window is September through Christmas — the recovery and content-build window. Production happens here for the next year. Drone footage of an empty Ghadira Bay at sunrise, an off-season shoot at Popeye Village, video assets for the next inspiration cycle. Off-season budget is materially lower but never zero — content built in October pays back across the next three booking cycles. The Cirkewwa-ferry corridor for Gozo day-trippers gets a separate micro-calendar inside that, calibrated to weekend ferry departure peaks and holiday crossings. Every Mellieha retainer is reviewed against this four-window calendar at the end of each quarter so the next cycle is briefed in time.
            </p>
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
