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
  'Bilingual Maltese + English creative — captions, scripts, voiceover, and on-screen copy reviewed by native Maltese speakers',
  'On-location across Malta and Gozo — restaurants in Sliema, hotels in St Julians, beach clubs in Mellieha, B2B in the Birkirkara CBD',
  'Real photography and video — never stock, never lazy AI-generated fakes',
  'Strategy-first — every piece is briefed against a measurable objective (footfall, bookings, leads, brand recall)',
  'Same-team execution — strategist, director, shooter, editor, and copywriter all in Birkirkara, no offshore handoff',
  'Insured for commercial production with permits handled for Valletta, Mdina, and protected heritage sites',
];

const playbook = [
  { name: 'Discovery + brief', detail: 'Half-day workshop in Birkirkara to lock the audience, the proof points, the channel mix, and the deliverable list against an actual business outcome.' },
  { name: 'Pre-production', detail: 'Treatment, shot list, location scout (Valletta, Mdina, Sliema, Mellieha, Gozo), talent casting from local agencies, schedule, and shoot-day call sheet.' },
  { name: 'Production', detail: 'On-location across the islands — Sony FX cameras, Aputure lighting, drone where licensed, Maltese-speaking crew, and full insurance for commercial sets.' },
  { name: 'Editorial + post', detail: 'Edit, colour grade, sound mix, motion graphics, captions in Maltese and English, music licensing, and delivery in every aspect ratio you need.' },
  { name: 'Distribution', detail: 'Captions, hashtags, paid-ad cuts, scheduling into Meta Business Suite, and creative briefs handed to your media buyer or our paid team.' },
  { name: 'Iterate', detail: 'Monthly performance review against engagement, save rate, and conversion. Top performers get re-edited and re-cut for the next sprint.' },
];

export default function ContentCreationMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Content Creation Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Content Creation in Malta — Bilingual, On-Location, On-Brand</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital is a Birkirkara-based content studio producing photo, video, and editorial work for Malta hospitality, retail, fintech, and iGaming brands — in Maltese and English, never stock.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Content for Malta Has to Be Bilingual</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The single biggest mistake imported content templates make in Malta is treating the country as English-only. Roughly 60 percent of residents respond more strongly to Maltese-language creative for B2C categories — particularly hospitality, retail, automotive, home services, and family-led F&amp;B. A Reel about a Mosta bakery scripted in Maltese will outperform the same Reel in English by a wide margin in the local feed, while a luxury hotel in St Julians will need its content in English to reach the inbound tourist audience and a third Italian-language cut for the Sicilian-day-trip market.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital plans every brief around that reality. Our writers work in both Maltese and English natively, and every deliverable goes through a native-speaker review before it lands in your scheduler. We use the right idiom for the right audience — formal Maltese for civic and B2B, casual code-switched bilingual for Gen-Z social, polished English for tourist-facing and B2B SaaS, Italian where the audience justifies the lift.
            </p>
            <p className="text-foreground leading-relaxed">
              Malta is also visually distinctive in a way that imported stock cannot replicate. The limestone of Mdina, the dghajsa boats in Marsamxett Harbour, the festa fireworks above Mosta, the brutal cobalt of the Blue Lagoon, the food culture from a hobz biz-zejt at a Birkirkara kiosk to a tasting menu in Valletta — these are the visual cues local audiences recognise instantly. Every shoot we run leans into them. We do not light a Maltese product the way a London studio would, and we do not write a Maltese restaurant caption the way a New York agency would.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Malta Content</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Production Playbook</h2>
            <p className="text-muted-foreground mb-6">Six phases from brief to performance review. Calibrated to the cadence Malta brands actually need — not Hollywood, not influencer chaos.</p>
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
            <p className="text-muted-foreground mb-6">Three engagement shapes — pick the one that matches the cadence and ambition of your brand right now.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Content in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Content quality is now the single biggest differentiator between a Malta brand that compounds and one that stagnates. Algorithm changes on Meta and TikTok have made paid distribution brutally expensive when the creative is mediocre — and almost free when the creative is genuinely good. The brands winning in Malta right now are the ones that ship native bilingual content rooted in actual local culture, not localised English templates. OARC Digital exists to be the team that ships that work, week after week, for hospitality, retail, fintech, and iGaming brands operating across the islands.
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

          <RelatedLinks slug="/aeo/content-creation-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Need content the Malta feed actually stops for?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written content brief and a realistic delivery schedule. No moodboards, no jargon.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
