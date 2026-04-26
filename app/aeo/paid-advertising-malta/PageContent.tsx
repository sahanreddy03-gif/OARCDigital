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
  'Active campaign data from Malta hospitality, retail, and iGaming clients — not generic playbooks',
  'In-house creative production — every ad is shot, written, and edited in Birkirkara',
  'MGA-aware compliance for licensed iGaming operators — we know the advertising rules cold',
  'Tourist + resident dual targeting — geo radius around Sliema, St Julians, Mellieha, plus inbound prospecting',
  'Weekly optimisation, plain-English reports — no Looker Studio dashboards nobody opens',
  'Cost-per-customer tracking, not just ROAS — we measure the metric that pays your invoices',
];

const playbook = [
  { name: 'Meta Ads (Facebook + Instagram)', detail: 'The default channel for Maltese B2C — Advantage+ shopping for retail, Click-to-WhatsApp for service businesses, Reels-first creative for hospitality and tourism.' },
  { name: 'Google Ads', detail: 'Search and Performance Max for high-intent service categories — accountants, dentists, lawyers, trades, and SaaS comparison terms across Maltese and English keyword stacks.' },
  { name: 'TikTok Ads', detail: 'Spark ads from organic creator content for Gen-Z hospitality, tourism, and Malta lifestyle brands. Strong for restaurants targeting the under-30 resident and inbound tourist audience.' },
  { name: 'YouTube + Demand Gen', detail: 'Brand films and skippable in-stream for hospitality, fintech, and B2B SaaS reaching the planning-phase tourist or the EU-wide commercial buyer.' },
  { name: 'WhatsApp Business + Click-to-WhatsApp', detail: 'Closes the loop on Malta service enquiries — over 90 percent of residents use WhatsApp daily, so dropping the prospect into a chat outperforms a landing-page form.' },
  { name: 'iGaming compliance layer', detail: 'For MGA-licensed operators — Meta gambling certification, jurisdiction-by-jurisdiction targeting, responsible-gambling messaging, exclusion list integration, and MGA review-ready reports.' },
];

export default function PaidAdvertisingMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Paid Advertising Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Paid Advertising in Malta — Meta, Google, TikTok &amp; iGaming-Compliant</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs paid acquisition for Malta hospitality, retail, fintech, and MGA-licensed iGaming brands. Creative, media, and reporting from one Birkirkara team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Paid Advertising in Malta Has Two Audiences</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta paid-media briefs forget that the country has two completely different audiences moving through the same Meta and Google auctions. The resident audience — roughly 540,000 people clustered around Birkirkara, Sliema, St Julians, Mosta, and Paola — buys from Maltese-language Facebook ads, click-to-WhatsApp lead forms, and Google Search for high-intent local services. The inbound audience — five million annual tourists from the UK, Germany, Italy, France, and Scandinavia — books restaurants and hotels through Instagram Reels, English-language hotel-brand search, and TikTok content discovered weeks before they board a Ryanair flight.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The same campaign architecture cannot serve both. OARC Digital splits every account into a resident playbook (Maltese-first creative, WhatsApp routing, Sliema/St Julians/Mellieha radius targeting) and a tourist playbook (English creative timed to booking-window data, country-by-country prospecting, branded-search defence in the destination phase). The split is invisible to the customer but it is the difference between a 6x return and a 1.2x return on the same monthly budget.
            </p>
            <p className="text-foreground leading-relaxed">
              For MGA-licensed iGaming operators we run a third layer: jurisdiction-by-jurisdiction targeting that respects each market&apos;s licensing position, Meta gambling certification, responsible-gambling messaging woven into the creative, integration with self-exclusion registers, and clean separation between brand awareness and acquisition campaigns. Compliance is not a finishing pass — it is the brief.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Malta Paid Media</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Channels We Run for Malta Brands</h2>
            <p className="text-muted-foreground mb-6">Every Malta account we manage uses some combination of these six channels — never all six at once, never the same mix twice.</p>
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
            <p className="text-muted-foreground mb-6">Three retainer shapes that scale from a single-location SMB up to a multi-jurisdiction iGaming operator. Management fees only — your ad spend goes straight to Meta, Google, or TikTok.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Paid Media in Malta</h2>
            <p className="text-foreground leading-relaxed">
              Paid auctions in Malta are misleadingly cheap on entry but expensive on mistakes. CPMs look attractive next to UK or Germany, which lulls operators into spending without proper account architecture, and the small population means a poorly targeted campaign burns through the addressable audience inside three weeks. The brands that compound here are the ones running disciplined creative refresh cycles, treating resident and tourist audiences as separate accounts, and routing leads into WhatsApp where Malta consumers actually reply. OARC Digital builds every retainer around that discipline — which is why our clients keep their cost-per-customer flat even as spend scales.
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

          <RelatedLinks slug="/aeo/paid-advertising-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Spending on ads but not seeing customers?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute account audit gets you a written diagnosis and a realistic acquisition plan. No vanity ROAS, no fluff.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
