import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'OARC Digital is headquartered in the Birkirkara CBD — clients walk in, not just dial in',
  'Direct campaign data from Birkirkara retail, F&B, automotive, and professional-services clients',
  'Maltese-language creative for the resident catchment plus polished English for CBD B2B',
  'Local SEO built around Birkirkara CBD, the High Street, Fleur-de-Lys, and adjacent Balzan / Lija / Iklin',
  'Five minutes from the Three Hills roundabout with on-site monthly working sessions baked in',
  'No setup fees, no annual lock-in — month-to-month retainers calibrated to Birkirkara budgets',
];

const verticals = [
  { name: 'Professional services + fintech', detail: 'Birkirkara CBD hosts a dense layer of legal, accounting, fiduciary, payments, and MFSA-registered fintech firms. We run LinkedIn-led B2B and Google Search campaigns built for high-intent commercial traffic.' },
  { name: 'Retail + High Street F&B', detail: 'The Birkirkara High Street, Triq Tumas Fenech, and the Psaila Street commercial spine still drive foot traffic. Our retail playbook combines Maltese Facebook, Google Business Profile, and WhatsApp ordering to convert that footfall.' },
  { name: 'Automotive + trades', detail: 'The Tal-Wied corridor and the Mdina Road service strip cluster Malta&apos;s strongest automotive and trade workshops. Maltese-language Meta ads with WhatsApp lead capture out-perform every other channel for these brands.' },
  { name: 'SMB headquarters', detail: 'Plenty of Maltese SMBs centralise their HQ in Birkirkara because of the CBD address and easy island-wide access. We act as the in-house marketing function for several of them, from brand to lead generation to sales enablement.' },
];

export default function MarketingAgencyBirkirkara({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Marketing Agency Birkirkara</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Marketing Agency Headquartered in Birkirkara</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital runs social, paid, SEO, web, and AI for Birkirkara CBD professional services, High Street retail, and Tal-Wied trades — from our office at The Brewhouse on the Mdina Road.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Marketing for Malta&apos;s Geographic Centre</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Birkirkara is Malta&apos;s most populous town and one of its most layered economies. The Central Business District concentrates the kind of professional-services tenants you would expect in a national finance hub — legal practices, audit and tax advisors, MFSA-licensed payments firms, fund administrators, and a growing fintech and Web3 cluster — while the original village fabric around Saint Helen&apos;s Basilica still carries family-run retail, bakeries, salons, and casual F&B that serve a deep resident base. Layered on top is the Tal-Wied industrial corridor, which is where most of central Malta&apos;s automotive, joinery, and contracting trades sit.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That mix means a Birkirkara marketing brief is rarely about a single audience. A CBD law firm needs Google Search dominance and credible LinkedIn presence to win commercial mandates. A High Street bakery needs Maltese-language Facebook reach plus a Google Business Profile that converts after-school foot traffic. A Tal-Wied bodyshop needs WhatsApp lead capture wired to a Meta lead-form ad. The agency that wins in Birkirkara is the one that can fluently move between those briefs without templating them all into the same retainer.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital is headquartered at The Brewhouse on the Mdina Road, five minutes from the Three Hills roundabout and walking distance to the CBD. We run active campaigns for Birkirkara clients across all three of those audience layers, which is how we can talk concretely about what works on Triq Tumas Fenech versus Triq Psaila versus the CBD office floors — instead of generalising from a Sliema or Mosta dataset that does not transfer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital for Birkirkara?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Birkirkara Verticals We Work With</h2>
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
            <p className="text-muted-foreground mb-6">No setup fees, no annual lock-in, no surprise invoices. Three tiers Birkirkara businesses pick from.</p>
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
                    Walking distance from the CBD
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Walk-in working sessions available</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Active Birkirkara client campaigns running</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Month-to-month contracts, no setup fees</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why HQ Location Matters for a Birkirkara Brief</h2>
            <p className="text-foreground leading-relaxed">
              Most of the agencies that pitch into Birkirkara CBD live in Sliema or St Julians and parachute in for the kickoff. That is not how OARC Digital works. Our team is in Birkirkara every day. We know which side of the Mdina Road the loading bays are on, which CBD towers route reception through which front desk, and which High Street operators trade hardest on Saturday mornings. That ground-truth shows up in better-converting Google Business Profiles, sharper Maltese-language Meta creative, and B2B campaigns that name real Birkirkara CBD addresses instead of generic &ldquo;central Malta&rdquo; copy. It is a small operational difference, and it compounds into a meaningful lead-quality difference over a 6-month retainer.
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

          <RelatedLinks slug="/aeo/marketing-agency-birkirkara" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Operating in Birkirkara? Walk over.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We are headquartered in the Birkirkara CBD. Send a brief or stop by The Brewhouse for a working session — kickoff workshops are part of every retainer.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
