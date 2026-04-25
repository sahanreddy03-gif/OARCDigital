import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Hotel marketing reported in RevPAR, ADR, and direct-booking share — not vanity metrics',
  'Source-market split across UK, Germany, Italy, France, Poland, and Scandinavia with native creative',
  'Direct-channel work reduces 15–22% Booking.com / Expedia commission exposure quarter on quarter',
  'PMS and booking-engine integrations with Mews, Cloudbeds, Opera, Protel, Apaleo, SiteMinder, GuestCentric',
  'Hospitality 360 review automation built in — Google review velocity that lifts the property profile in OTA ranking too',
  'On-site at Sliema, St Julians, Valletta, Mellieha, Qawra, Bugibba and Gozo within an hour of Birkirkara',
];

const playbook = [
  { name: 'Branded + non-branded Google Ads', detail: 'Defend the property name from OTA bidding, capture intent on category-plus-locality (boutique hotel Valletta, family resort Mellieha), and run conquesting on competitor terms.' },
  { name: 'Source-market paid social', detail: 'Meta and TikTok in language for UK / DE / IT / FR / PL / SE source markets, weighted by season and MLA flight schedule. Reels and short-form video carry the volume.' },
  { name: 'Booking-engine optimisation', detail: 'Direct-channel UX work on the booking engine — fewer steps, faster load, multilingual currency, parity messaging, and a member-rate hook to beat the OTA price by enough to convert.' },
  { name: 'Hospitality 360 review automation', detail: 'Automated Google review prompt fired post-checkout, lifting the property review velocity and rating, which in turn lifts both Google Maps ranking and OTA placement.' },
  { name: 'Source-market PR + content', detail: 'Press placements, travel-blogger trips, and content syndication into the UK and DACH travel press — slow-burn channel that compounds direct-booking demand over six to twelve months.' },
  { name: 'CRM + repeat-guest revenue', detail: 'Klaviyo or HubSpot for the guest database, segmented by source market and stay type, with pre-arrival upsell flows, return-visit campaigns, and post-stay review follow-up.' },
];

export default function HotelMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Hotel Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Hotel Marketing Malta — Direct Bookings, Lower OTA Commission, Stronger RevPAR</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs hotel marketing for Maltese boutique properties, four and five-star resorts, and apartment-hotel groups. Reported in RevPAR and direct-booking share, not impressions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Real Hotel Marketing Question in Malta is Direct vs OTA</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta hotels do not have a demand problem. The 2.3 million annual tourists arriving via MLA see to that. They have a margin problem — Booking.com and Expedia together take 15 to 22% commission off every reservation, and for a four-star resort in Sliema doing €4 million of room revenue, that is €600,000 to €880,000 per year leaving the P&L to the OTA. Hotel marketing in Malta, done seriously, is the work of moving a few percentage points of that mix from OTA-paid to direct-paid every quarter without losing OTA inventory entirely.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds that direct channel from Birkirkara. Branded Google Ads to defend the property name from OTA bidding, source-market paid social into the UK, Germany, Italy, France, Poland and Scandinavia in native language, booking-engine UX work that closes the gap with the OTA experience, a Hospitality 360 review automation layer that lifts both Google Maps and the OTA ranking, and a CRM stack (Klaviyo or HubSpot) that turns first-stay guests into repeat-direct revenue. We report in RevPAR, ADR, occupancy, and direct-booking share — not in vanity metrics.
            </p>
            <p className="text-foreground leading-relaxed">
              The work calibrates to the property type. A boutique hotel in Mdina, a four-star family resort in Mellieha, an apartment-hotel in Qawra, and a five-star city property in Valletta are different commercial businesses with different ADR ceilings, different shoulder seasons, and different source-market fits. The retainer is structured so the audience-mix audit, the booking-engine work, and the source-market split are tailored to that specific property — not lifted from a template.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Maltese Hotels</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Hotel Marketing Playbook</h2>
            <p className="text-muted-foreground mb-6">Six tracks that run together. Weighted to property type, ADR ceiling, and source-market mix.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {playbook.map((p) => (
                <div key={p.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three retainer shapes. No annual lock-in.</p>
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
                    Within an hour of every Maltese hotel cluster
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">RevPAR, ADR + direct-share board pack</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">PMS + booking-engine integrations</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Native-language source-market creative</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why RevPAR-Led Marketing Beats Vanity-Metric Marketing</h2>
            <p className="text-foreground leading-relaxed">
              An agency that reports a Malta hotel campaign in impressions and reach is reporting things that do not pay the wages. RevPAR pays the wages. ADR pays the wages. Direct-booking share pays the wages. Every OARC Digital hotel retainer ties marketing spend back to those numbers in the monthly board pack — and the work itself is structured around moving them. That is the difference between a hotel marketing supplier and a hotel marketing partner the GM can defend at the next ownership review.
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

          <RelatedLinks slug="/aeo/hotel-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">OTA commission eating your margin?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a direct-vs-OTA audit and an honest verdict on what is recoverable in the next two quarters.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
