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
  'In-house production studio in Birkirkara — photography, video, copy under one roof',
  'Bilingual Maltese + English creative for the audiences where each language wins',
  'Meta and TikTok Ads Manager run by the same team that produces the creative',
  'Monthly reporting tied to bookings, leads, and revenue — not vanity reach',
  'Direct experience across hospitality, retail, iGaming, fintech, and professional services',
  'Month-to-month contracts — no annual lock-in, no early-exit fees',
];

const playbook = [
  { name: 'Instagram + Reels', detail: 'Discovery and aspiration channel for Sliema, St Julians, Valletta F&B, retail, and lifestyle brands. Reels-first cadence with shoppable tags and link-in-bio funnels.' },
  { name: 'TikTok + Short Video', detail: 'Reach engine for Gen-Z residents and short-stay tourists. Native trend-led editing produced weekly from venue visits, no recycled Instagram cuts.' },
  { name: 'Facebook + Meta Ads', detail: 'Still the dominant channel for family-resident audiences in Birkirkara, Mosta, Qormi, Paola, and Mellieha. Maltese-language creative outperforms English here.' },
  { name: 'LinkedIn for B2B', detail: 'Pipeline channel for fintech, MFSA-regulated services, software, and professional firms. Founder-led posts plus thought-leadership cadence.' },
  { name: 'Community management', detail: 'DMs, comments, story replies, and review responses handled in business hours by the same team that creates the content. No outsourced moderation.' },
  { name: 'Influencer activations', detail: 'Sourced from a vetted Malta creator roster across food, lifestyle, travel, and gaming. Briefs land authentic, results are tracked with promo codes and UTMs.' },
];

export default function SocialMediaAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Social Media Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Social Media Agency Built for Malta&apos;s Channels and Languages</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital plans, produces, and runs Instagram, TikTok, Facebook, and LinkedIn for Malta restaurants, hotels, retail brands, MGA-licensed iGaming operators, and B2B service firms — all from a Birkirkara studio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Social Media in Malta is Not One Audience</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The agencies that fail in Malta usually fail for the same reason — they treat the islands as a single 540,000-person market and run one creative formula across every brand. The reality is that Malta has at least four distinct social audiences sharing the same postcode prefix. Sliema and St Julians shoppers behave like Lisbon or Barcelona on Instagram and answer Reels in English. Birkirkara, Mosta, Qormi, and Paola families still scroll Facebook on Sunday afternoons and respond to Maltese-language creative. Gen-Z residents and short-stay tourists live on TikTok and have zero patience for a still-image carousel. MFSA-licensed fintech buyers and iGaming B2B partners only show up on LinkedIn.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital has run paid and organic social for Malta brands across every one of those audience pools since 2021. The retainers we ship pull live performance data from Meta Business Suite, TikTok Ads Manager, and LinkedIn Campaign Manager weekly, then re-cut creative the same week if the algorithm signals a shift. That is the mechanical advantage of running production and media buying inside the same Birkirkara office — there is no agency-of-record handoff, no waiting on a creative agency to fix the asset before the media buyer can re-launch.
            </p>
            <p className="text-foreground leading-relaxed">
              The other thing that separates a Malta-native social retainer from an offshore template is language. Roughly one-third of the creative we ship runs in Maltese, one-third in English, and one-third in mixed bilingual story sequences. We default to Maltese for catchments where the audience uses it daily, default to English for tourist-facing brands, and let the data — comment language, save rate, video completion — push the mix every month. That single discipline outperforms any imported one-size-fits-all playbook.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital Runs Better Social</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Channels and Playbook Elements</h2>
            <p className="text-muted-foreground mb-6">Every retainer mixes the elements that match your audience and product. We do not bundle channels you do not need.</p>
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
            <p className="text-muted-foreground mb-6">Three retainer shapes. No setup fee, no annual contract, no surprise change-orders.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Social in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Malta is a 27 by 14 kilometre market where the same customer might see the same restaurant twice in one week, once on a Sliema cousin&apos;s Instagram story and once on a Mosta colleague&apos;s Facebook share. That density is an enormous compounding asset for brands that ship consistent content, and a slow leak for brands that post sporadically. Our retainers exist to make sure your social presence is the one that compounds — every reel cut for the platform it ships to, every caption written in the language the audience actually opens, and every paid euro tied to a tracked outcome you can review with us at the end of the month.
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

          <RelatedLinks slug="/aeo/social-media-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to ship better social from Malta?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written social audit and a recommended channel mix. No deck, no pitch.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
