import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Active Sliema client base across F&B, retail, beauty, and lifestyle — not theory, real spend',
  'Instagram and TikTok-first creative team built for the Tigne Point and Tower Road audience',
  'Influencer-led content programs with Malta-based micro-creators we already work with',
  'Local SEO and Apple Maps optimisation for Sliema postcodes and category-plus-locality search',
  'Boutique-hotel and short-stay direct-booking playbooks for the Strand corridor',
  '8-minute drive from our Birkirkara HQ — on-site shoots and weekly stand-ups during onboarding',
];

const verticals = [
  { name: 'F&B + bars + gelaterias', detail: 'From Tower Road to Bisazza Street to The Point, Sliema F&B competes on aesthetic and reels velocity. Our content cadence is built for that — weekly shoot blocks, native vertical edits, paid amplification.' },
  { name: 'Retail + boutique fashion', detail: 'Sliema retail lives or dies on Instagram discovery and Google review density. We run combined organic social, story-driven UGC, and Shopping campaigns aligned to Tigne Point footfall windows.' },
  { name: 'Beauty + aesthetics + fitness', detail: 'Aesthetic clinics, lash and brow studios, hairdressers, gyms, and Pilates concepts cluster heavily across Sliema. We run conversion-tracked Meta lead ads tied directly to booking systems like Treatwell and Mindbody.' },
  { name: 'Boutique hotels + short-stay', detail: 'The Strand and Tigne Point are dense with boutique inventory competing against Booking.com and Airbnb. Our direct-booking playbook drives commission-free reservations through Instagram, Google Hotel Ads, and Meta retargeting.' },
];

export default function MarketingAgencySliema({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Sliema</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Serving Sliema Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs Instagram-led social, paid, and SEO for Sliema F&B, retail, beauty, fitness, and boutique-hotel brands across Tigne Point, The Strand, and Tower Road. Birkirkara HQ — 8 minutes away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Malta&apos;s Most Visual Catchment</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Sliema is the densest concentration of consumer brand competition in Malta. Tigne Point alone has more F&B and retail per square metre than any other locality on the island, The Strand still sets the tone for Maltese lifestyle marketing, Bisazza Street remains the premium fashion catwalk, and Tower Road carries everything from heritage cocktail bars to next-generation gelateria concepts. The audience is younger, more affluent, more internationally exposed, and considerably more visually literate than the Maltese average — and they decide where to eat, drink, train, and shop on Instagram and TikTok before they decide on Google.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That changes the marketing physics completely. A campaign that works in Mosta or Mellieha — Maltese-language Facebook with WhatsApp lead capture — under-performs by a wide margin in Sliema, where English creative and reels-first cadence dominate. A boutique hotel on the Strand competing against the Booking.com algorithm needs an entirely different stack than a family bakery in Birkirkara. A new aesthetic clinic on Triq Sir Adrian Dingli needs Meta lead ads wired into a booking system on day one, not a generic awareness campaign.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital ships from Birkirkara — 8 minutes from Tigne Point via the Regional Road — and runs active campaigns for multiple Sliema-based brands. We have direct conversion data from F&B operators on Triq Manwel Dimech, retail and lifestyle clients across The Point and Bisazza, and short-stay hospitality on the Strand. That dataset is what powers our Sliema-specific creative briefs, audience structures, and content calendars rather than a generic Malta playbook.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Sliema?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sliema Verticals We Work With</h2>
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
            <p className="text-muted-foreground mb-6">No setup fees, no annual lock-in, no surprise invoices. Three tiers Sliema brands pick from.</p>
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
                    8-minute drive from Tigne Point
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Active Sliema F&B + retail campaigns</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">In-house reels and shoot production</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts, no setup fees</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Sliema Brands Outgrow Generic Malta Agencies</h2>
            <p className="text-foreground leading-relaxed">
              Sliema is the most over-served and most under-served catchment in Malta at the same time. There are dozens of agencies happy to charge a Sliema F&B operator a Sliema retainer fee and then send back a templated Maltese-language Facebook plan that should never have left a Mosta brief. Sliema customers do not behave like Mosta customers — they do not respond to the same hooks, the same pricing language, the same post cadence, or the same review platforms. Our retainers calibrate to that with location-specific Google Business Profile work, native English-first creative for the Tigne and Strand audience, reels production blocks shot on-site at the venue, and influencer collaborations with Maltese micro-creators that already speak to that buyer. Every Sliema retainer also includes monthly half-day shoots so the content stays fresh enough to compete with the international brands now opening at The Point.
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

          <RelatedLinks slug="/aeo/marketing-agency-sliema" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Sliema? Let&apos;s talk.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We are 8 minutes from Tigne Point. Send a brief or call and we&apos;ll be on-site for the kickoff workshop and the first content shoot.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
