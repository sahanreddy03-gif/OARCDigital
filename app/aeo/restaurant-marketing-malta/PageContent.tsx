import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Audience-mix audit at the start of every retainer — local versus tourist split drives the channel mix',
  'Bilingual Maltese + English creative team based in Birkirkara, with Italian, German, and French on-call',
  'Google Maps SEO discipline for category-plus-locality searches (seafood Marsaxlokk, brunch Sliema, lampuki Birgu)',
  'Direct integration with Hospitality 360 for automated five-star Google review velocity',
  'On-site weekly during the first 90 days — anywhere from Valletta to Mellieha is within an hour',
];

const playbook = [
  { name: 'Tourist Reels + TikTok track', detail: 'Aspirational venue Reels and short-form TikTok aimed at tourists in the hotel-research and arrived-on-island stages. Geo-stickers, Maltese landmark cues, English voiceover.' },
  { name: 'Maltese-language family-resident track', detail: 'Facebook campaigns in Maltese targeting working-population family households across Mosta, Birkirkara, Naxxar, Qormi, and Paola. Sunday lunch, family bookings, takeaway.' },
  { name: 'Google Maps + reviews', detail: 'Google Business Profile optimisation, weekly post cadence, Hospitality 360 automated review prompt, and a category-plus-locality keyword map for the local pack.' },
  { name: 'Paid acquisition', detail: 'Meta retargeting on Reels viewers, Google Ads on branded plus high-intent terms (best Italian Sliema, late-night food Paceville), seasonal budget weighting around peak tourist months.' },
  { name: 'Influencer + UGC', detail: 'Maltese micro-creators sourced from the OARC Digital roster — food bloggers, TikTok creators, returning-tourist Instagrammers — paid in covers + cash, contracted properly.' },
  { name: 'Email + WhatsApp loyalty', detail: 'Klaviyo for diner email lists, WhatsApp Business broadcasts for booking reminders and reservation confirmations, both feeding back into Hospitality 360 guest profiles.' },
];

export default function RestaurantMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Restaurant Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Restaurant Marketing Malta — Built for the Local + Tourist Mix</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs Instagram, TikTok, Maltese-language Facebook, Google Maps SEO, and paid acquisition for Maltese restaurants — split deliberately between resident-family covers and 2.3M annual tourists.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Restaurant Marketing in Malta is Two Audiences in One Venue</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The mistake most agencies make with Maltese restaurants is treating the venue like a single audience. It is not. A typical Sliema restaurant on a Friday night serves a Maltese family of six who have come over from Mosta for an anniversary, a couple of returning British holidaymakers staying at a Tigne hotel, four iGaming colleagues from a St Julians office, and a German family that landed at MLA at lunchtime. Each of those segments researched the venue differently, expects a different language on the menu, and leaves a review on a different platform. The marketing has to address all of them in parallel.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That is why every OARC Digital restaurant retainer starts with an audience-mix audit — what percentage of covers come from resident families versus inbound tourists, by season, by day of week, by channel of discovery. We then weight Instagram, TikTok, Maltese-language Facebook, Google Ads, Google Maps SEO, and Hospitality 360 review automation to that mix. A waterfront seafood restaurant in Marsaxlokk gets a different blend than a Paceville late-night joint or a Mosta family trattoria — and the Maltese-language work is non-negotiable for any venue that wants the resident half of the audience.
            </p>
            <p className="text-foreground leading-relaxed">
              We run this from the OARC Digital office in Birkirkara, central to every Maltese restaurant cluster — Valletta heritage, Sliema strand, Spinola Bay, Mellieha, Marsaxlokk waterfront, the Three Cities. Bilingual Maltese-English creators, native Maltese copywriters, and a content calendar built around the dining hours that actually matter on the islands (12:00–14:00, 18:30–20:30, and 22:00–23:30 in summer) are the baseline.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Maltese Restaurants</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Restaurant Marketing Playbook</h2>
            <p className="text-muted-foreground mb-6">Six tracks that run in parallel. Weighted per venue based on the audit.</p>
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
            <p className="text-muted-foreground mb-6">Three retainer shapes for restaurants. No setup fees, no annual lock-in, month-to-month.</p>
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
                    Within an hour of every Maltese restaurant cluster
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Bilingual Maltese + English creators</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Hospitality 360 review automation included</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month, no annual lock-in</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why the Local + Tourist Split Decides Everything</h2>
            <p className="text-foreground leading-relaxed">
              A Marsaxlokk seafood restaurant that is 80% Maltese-resident on a Sunday and 20% tourist needs Maltese-language Facebook to dominate, and a TripAdvisor + Google Maps presence for the cruise-ship-day spike. A Valletta wine bar that is 70% tourist needs Reels, TikTok, and an English-language Google Ads spend that turns on at 16:00 local time. Treating both venues with the same content calendar wastes money on the wrong audience and ignores half the actual demand. OARC Digital builds the marketing the way a Maltese restaurant actually fills tables — by audience, by season, by day of week, in the right language.
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

          <RelatedLinks slug="/aeo/restaurant-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Filling tables harder than it should be?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you an audience-mix audit and an honest verdict on which channels to fix first. No deck.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
