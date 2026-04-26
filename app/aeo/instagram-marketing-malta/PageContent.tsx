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
  'In-house photo and Reels studio at the Birkirkara office — no third-party producers',
  'Bilingual captions in English and Maltese, calibrated to your audience mix',
  'Reels-first cadence engineered for the Instagram algorithm in 2025, not 2021',
  'Meta Ads paid amplification managed by the same team that produces the creative',
  'Monthly venue shoot days at your premises — Sliema, St Julians, Valletta, Mellieha, Gozo',
  'DM-to-booking attribution reporting, not just reach and impression vanity numbers',
];

const playbook = [
  { name: 'Reels-first cadence', detail: 'Two to three Reels per week is the floor for Malta hospitality and retail brands competing in 2025. Format trumps polish — vertical, captioned, hook in the first 1.2 seconds.' },
  { name: 'Carousel storytelling', detail: 'Longer-dwell save-driver content — chef stories, product educations, neighbourhood guides for Sliema, Valletta, and St Julians. Saves are the metric that compounds.' },
  { name: 'Stories + close-friends', detail: 'Daily presence layer for community management, polls, behind-the-scenes, and limited reservation drops. Close-friends loops are powerful for VIP retail.' },
  { name: 'Meta Ads amplification', detail: 'Reels boosted with conversion or messaging objective, audience layered by Malta postcode plus EU-tourist intent signals. Creative re-cut weekly.' },
  { name: 'Creator collaborations', detail: 'Collab posts with vetted Malta creators in food, lifestyle, beauty, and travel. Briefs land authentic, codes track every booking back to source.' },
  { name: 'DM and review loops', detail: 'Booking enquiries triaged in business hours, with WhatsApp Business API hand-off for high-intent conversations. Google Business and Tripadvisor responses included.' },
];

export default function InstagramMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Instagram Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Instagram Marketing in Malta — Reels-First, Booked Solid</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital ships in-studio production, Reels-first content, paid Meta amplification, and DM-to-booking attribution for Sliema, St Julians, and Valletta brands competing on Malta&apos;s most influential discovery surface.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Instagram Still Wins Discovery in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Instagram is the single highest-leverage discovery channel for Malta&apos;s consumer-facing brands and it has been since the platform began prioritising Reels in 2022. A 4.5 million-overnight-tourist economy compounds inside that algorithm — every visitor saves restaurants, beach clubs, gelaterias, boutique hotels, and creator recommendations to a Sliema or St Julians or Valletta location tag, and the next wave of arrivals scrolls those same tags two weeks before they fly. Malta-resident discovery layers on top: Tigne Point retail circles, Strand cafe gossip, Paceville new openings, Mellieha summer pop-ups. The brands that dominate location tags compound bookings month after month.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital runs Instagram for Malta clients across hospitality, retail, beauty, wellness, and the local creator economy. We have shot Reels in Maison La Valletta back rooms before service, ran Meta Ads for Sliema retail brands during the Christmas window, and produced product carousels for Birkirkara CBD beauty studios that sold out launches in 48 hours. The pattern that delivers is simple — Reels-first cadence, save-engineered carousels, daily story presence, and a paid amplification budget that re-deploys weekly to whichever organic post broke out first.
            </p>
            <p className="text-foreground leading-relaxed">
              The mistake we see with imported templates is that they ignore Malta&apos;s light, language mix, and density. The Mediterranean midday sun blows out anything shot without proper grade. Sliema and St Julians audiences answer English captions but Mosta and Birkirkara brands convert better when the same Reel ships with Maltese voice-over. And on a 27 by 14 kilometre island the same potential customer might see your account three times in a week — that frequency is your friend if the content varies, your enemy if every post looks like the last.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Instagram</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Instagram Playbook We Run</h2>
            <p className="text-muted-foreground mb-6">Six elements blend into every retainer. Mix is calibrated to your brand, audience mix, and revenue model.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Instagram in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Discovery is still the engine on Instagram and discovery is still won by Reels. The boutique hotels and restaurants in Malta that built location-tag dominance during 2023 and 2024 now defend it cheaply — the algorithm rewards them with reach because their audience saves and shares at higher rates than newcomers. Catching up requires concentrated production, paid amplification on the Reels that work, and a refusal to ship anything that does not earn a save. That is the discipline our retainers enforce.
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

          <RelatedLinks slug="/aeo/instagram-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want Instagram that books tables, not impressions?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written audit of your account, your top three Reels-format opportunities, and a recommended cadence.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
