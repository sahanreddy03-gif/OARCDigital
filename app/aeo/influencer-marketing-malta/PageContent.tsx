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
  'Vetted Malta micro-creator roster across food, lifestyle, beauty, fitness, fintech, gaming',
  'Seasonal tourist-creator pipeline (UK, German, Italian, Scandinavian, Spanish visitors)',
  'MFSA, IDPC, and MGA-aware briefs for iGaming and regulated-sector activations',
  'Promo code + UTM + Pixel tracking on every activation — no vanity-only reporting',
  'Content rights cleared upfront for downstream paid amplification on Meta and TikTok',
  'Direct relationships, not paid platforms — better rates, faster turnarounds',
];

const playbook = [
  { name: 'Resident micro-creators', detail: 'The 10–50k follower band where engagement is highest and Malta-resident overlap is densest. Authentic content that converts to walk-ins, DMs, and bookings.' },
  { name: 'Tourist-creator hosting', detail: 'Seasonal hosting of EU and UK creators visiting the islands, with content rights cleared for paid amplification afterwards. Mid-funnel reach at fraction of paid CPM.' },
  { name: 'iGaming-compliant briefs', detail: 'For MGA-licensed operators we write briefs that respect Malta&apos;s gambling advertising rules, age-gating, and responsible-gaming disclosures end-to-end.' },
  { name: 'Promo code + UTM tracking', detail: 'Every activation ships with a unique tracked URL, promo code, and Pixel event so attribution lives in your dashboard, not a creator&apos;s screenshot.' },
  { name: 'Contract + rights pack', detail: 'Creators sign deliverables, exclusivity windows, usage rights for paid amplification, and image-and-video license terms before any shoot day starts.' },
  { name: 'Long-tail amplification', detail: 'The best-performing organic creator posts get whitelisted and re-promoted as Spark Ads on TikTok or Branded Content Ads on Meta from your handle.' },
];

export default function InfluencerMarketingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Influencer Marketing Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Influencer Marketing in Malta — Vetted Creators, Tracked Outcomes</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital sources, briefs, and tracks creator activations for Malta brands across hospitality, retail, MGA-licensed iGaming, and regulated services — with MFSA-aware briefs and full attribution baked in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Influencer Marketing Works Differently in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta is a 540,000-resident island with 4.5 million annual overnight visitors and a creator pool small enough that almost every working influencer in the food, lifestyle, fitness, and travel verticals knows almost every other one. That density is a structural advantage for brands that approach creator marketing properly. A single well-briefed micro-creator activation in St Julians can land your venue in front of every relevant Malta resident inside two weeks, and the vetted seasonal tourist-creator pipeline can put your name in front of a hundred-thousand-strong UK or German audience the next.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The trap most Malta brands fall into is paying for follower counts that do not convert. The same big-name lifestyle creator that posts about Marsamxett harbour for one operator, a Sliema beauty brand the next week, and a Mosta gym the week after that has trained their audience to ignore sponsored content. The work that actually drives bookings, walk-ins, and DM enquiries is shipped by the 10,000-to-50,000-follower micro-creators with concentrated topical authority — the chef who only talks about pastizzi, the diver who only posts Gozo wrecks, the running coach who only films Pembroke routes.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds and maintains that vetted micro-creator roster as a strategic asset and treats every activation as a measured campaign, not a flat-fee post. Promo codes, UTM-tagged URLs, dedicated landing pages where appropriate, and Pixel plus Events API instrumentation are the floor — not the upsell. For MFSA-licensed operators in fintech and MGA-licensed operators in iGaming we write briefs that respect Malta&apos;s gambling advertising rules, age-gating obligations, and responsible-gaming disclosure requirements end-to-end so the creative ships clean.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Creator Campaigns</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Activation Playbook We Run</h2>
            <p className="text-muted-foreground mb-6">Six elements blend across single launches, quarterly campaigns, and always-on retainers.</p>
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
            <p className="text-muted-foreground mb-6">Three engagement shapes for Malta brands. No hidden mark-up on creator fees, no annual lock-in.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Influencer Work in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Creator marketing is where the gap between brands that compound and brands that disappear is widest in Malta. The operators with vetted relationships, contracted rights, and compounding usage of best-performing posts as paid creative are buying mid-funnel reach at a fraction of cold-CPM rates. The operators paying flat fees to whoever pitches them in the inbox are subsidising the agencies that built the proper roster. Our retainers exist to put you on the right side of that gap.
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

          <RelatedLinks slug="/aeo/influencer-marketing-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to run influencer campaigns properly?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written brief outline, a recommended creator tier mix, and a tracking plan. No deck, no pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
