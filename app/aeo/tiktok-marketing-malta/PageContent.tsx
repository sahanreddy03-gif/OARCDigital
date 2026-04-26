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
  'Native, trend-led short-video editing — never repurposed Instagram Reels',
  'Sound-on-first production discipline (the 80% of TikTok scrollers Reels ignores)',
  'TikTok Ads Manager with Pixel + Events API set up properly from day one',
  'Tourist-creator pipeline — UK, German, and Italian creators visiting Malta seasonally',
  'Maltese-language and English cuts for resident vs visitor audience splits',
  'Weekly shoot days at your venue — Sliema, St Julians, Mellieha, Valletta, Gozo',
];

const playbook = [
  { name: 'Native short-video production', detail: 'Sound-on, vertical, captioned for the 70% who scroll muted. Hook in the first 0.8 seconds, payoff before second seven, no recycled Reels.' },
  { name: 'Trend + sound monitoring', detail: 'Weekly scan of trending audios in the EU food, travel, and Gen-Z verticals, with format adaptation that fits your brand instead of generic chase.' },
  { name: 'TikTok Ads + Pixel', detail: 'Spark Ads from organic breakouts, conversion campaigns with proper Pixel and Events API instrumentation, and weekly creative re-cuts when hooks fatigue.' },
  { name: 'Tourist-creator collabs', detail: 'Sourced UK, German, Italian, and Scandinavian creators visiting Malta seasonally — fresh content from a vetted pipeline, not random DMs.' },
  { name: 'Local Gen-Z creator pool', detail: 'A vetted roster of Malta-resident creators across food, fitness, lifestyle, and gaming. Briefs land authentic, output measurable with promo codes and tagged links.' },
  { name: 'Sound-aware editing', detail: 'Edits cut to trending audio beats, captions positioned for safe-zones, end-screen calls to action that route to your Instagram, WhatsApp, or booking link.' },
];

export default function TikTokMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">TikTok Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">TikTok Marketing in Malta — Native, Sound-On, Built to Reach</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital ships native short-video production, trend-led editing, paid TikTok Ads, and a vetted tourist-plus-resident creator pipeline for Malta brands competing for Gen-Z and visitor attention.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why TikTok Is the Asymmetric Bet for Malta Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              TikTok is the platform where a brand-new account in Marsaskala can hit a million views with a single well-cut Reel and a brand opening its sixth Sliema location can post for a year and never break thirty thousand. The For You algorithm is brutally meritocratic about watch-time, and Malta is one of the few EU markets where the supply side has not yet saturated. There are still entire verticals — Maltese-language home cooking, Gozo agritourism, MFSA-licensed fintech explainers, MGA-licensed B2B iGaming — where ten well-shipped TikToks would put you above every competitor on the island.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The other unique lever for Malta is tourist-creator volume. Roughly 4.5 million overnight visitors arrive every year, including a meaningful slice of UK, German, Italian, and Scandinavian creators with audiences in the tens to hundreds of thousands. The brands that have systematically captured those creators — beach clubs in St Julians, rooftop restaurants in Valletta, dive centres in Marsaskala, gelaterias in Sliema — get organic mid-funnel content from foreign accounts that compounds into bookings the following month. OARC Digital runs that pipeline as a deliberate retainer line item, not a hopeful side bet.
            </p>
            <p className="text-foreground leading-relaxed">
              The reason most Malta brands fail on TikTok is the same reason most Malta brands fail on Reels — they post recycled Instagram polish, cropped to vertical, with the sound off. TikTok punishes that immediately. The platform wants native audio sync, native captions, hook in the first frame, and visible authenticity. Our shop ships content cut for that reality from day one, then layers paid amplification on the organic pieces that prove watch-time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for TikTok</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The TikTok Playbook We Run</h2>
            <p className="text-muted-foreground mb-6">Six elements blend into every retainer. Mix is calibrated to your brand and audience split.</p>
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
            <p className="text-muted-foreground mb-6">Three retainer shapes for Malta brands. Month-to-month, no setup fee, no annual lock-in.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for TikTok in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The TikTok window in Malta is real but it is closing. The early-mover advantage that hospitality brands captured in 2023 is now being defended; the opening for retail, MFSA-licensed services, and B2B fintech explainers is wide open right now. The brands that ship native short video weekly for the next two quarters will own location-tag and category-search dominance for years. The brands that wait will need to outspend, not outrun, that gap.
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

          <RelatedLinks slug="/aeo/tiktok-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to win TikTok in Malta?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written audit of your account, three trend-led format opportunities, and a recommended cadence.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
