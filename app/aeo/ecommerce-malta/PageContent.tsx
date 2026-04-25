import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const reasons = [
  'Platform-agnostic — we build on Shopify, WooCommerce or custom Next.js + Stripe based on what fits your scale, not what we earn highest commission on',
  'Local payment depth — Stripe, PayPal, Revolut, Apple Pay, Google Pay as standard, plus Worldline, BNF and Truevo for MFSA-licensed merchants',
  'Maltese delivery integration — Malta Post, EcoCourier, Spedenet, DPD, DHL and click-and-collect logic baked into checkout',
  'EU-region hosting on every store — Vercel eu-west-1, Render Frankfurt or Shopify EU, GDPR + IDPC ready',
  'Lifecycle email and ads integrated from launch — Klaviyo or Mailchimp, Meta Pixel + Conversions API, Google Ads conversion linker',
];

const stack = [
  { name: 'Shopify', detail: 'The default for most Malta DTC and retailer launches. Strong app ecosystem, EU billing, fast launch path. Custom theme work in Liquid + Hydrogen for headless setups.' },
  { name: 'WooCommerce', detail: 'For Malta brands already on WordPress with content-heavy commerce. Custom block themes, WooPayments and Stripe integration, GDPR-ready cookie + consent stack.' },
  { name: 'Next.js + Stripe + Postgres', detail: 'Custom headless commerce for high-volume DTC and B2B catalogues. App Router, server components, EU-hosted on Vercel eu-west-1 or Render Frankfurt.' },
  { name: 'Klaviyo or Mailchimp', detail: 'Lifecycle email integrated from launch — welcome, abandoned cart, post-purchase, win-back. Maltese + English bilingual flows where it makes sense.' },
  { name: 'Meta + Google ads pixels', detail: 'Meta Pixel + Conversions API, Google Ads conversion linker, GA4 e-commerce events instrumented properly so paid media has clean attribution from day one.' },
  { name: 'Maltese delivery + payments', detail: 'Malta Post, EcoCourier, Spedenet, DPD, DHL on the carrier side. Stripe, PayPal, Revolut, Worldline, BNF and Truevo on the payments side. Wolt + Bolt Food for hot food.' },
];

export default function EcommerceMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">E-commerce Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">E-commerce in Malta — Shopify, WooCommerce or Custom, Done Properly</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds e-commerce stores for Malta retailers and DTC brands. Maltese delivery integrated, MFSA-licensed payment gateways supported, EU-hosted, scoped on the platform that actually fits the business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Malta E-commerce Has Its Own Rules</h2>
            <p className="text-foreground leading-relaxed mb-4">
              On paper a Malta e-commerce store is the same as any other EU store. In practice the operational stack is meaningfully different. Maltese consumers default to local carriers like Malta Post, EcoCourier and Spedenet, and they expect same-day or next-day delivery on island for orders placed before noon. They want Apple Pay and Google Pay at checkout because card-not-present typing rates on iPhone are abysmal. They split payment behaviour between Stripe-routed cards, Revolut Business transfers and, for a non-trivial slice of older consumers, BNF Bank or HSBC Malta merchant rails through Worldline or Truevo.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The mainland-EU side has its own complications. Cross-border VAT under OSS thresholds, IOSS for sub-€150 parcels, DPD and DHL integration where Malta Post stops making economic sense above 5kg, region-specific lifecycle emails because a Maltese tone-of-voice in English does not always translate cleanly to a German or Italian inbox. None of this is rocket science, but the standard out-of-the-box Shopify or WooCommerce install ignores all of it and leaves the merchant patching it up by hand for the first six months.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital has built and maintains stores across that whole spectrum &mdash; small Maltese craft brands shipping locally on Malta Post, mid-market DTC brands hitting €50k+ months on Shopify with Klaviyo running the lifecycle, and high-volume B2B catalogues running on custom Next.js + Stripe + Postgres with EU-hosted infrastructure. Every engagement scopes the platform to the volume, the margin and the regulatory shape of the merchant &mdash; not the other way around.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC Digital?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The E-commerce Stack</h2>
            <p className="text-muted-foreground mb-6">Six building blocks. We mix and match based on the brief — never a one-size-fits-all template.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {stack.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement tiers. Pick the one that matches the volume you actually expect to do this year.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital in Birkirkara</h2>
            <div className="rounded-xl border bg-card p-6 grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <address className="not-italic text-foreground leading-relaxed">
                    Level 1, The Brewhouse,<br />
                    Zone 2, Central Business District,<br />
                    Mdina Road, Birkirkara CBD 2010, Malta
                  </address>
                </div>
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href="tel:+35679711799" className="text-foreground hover:text-orange-600">+356 7971 1799</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href="mailto:hello@oarcdigital.com" className="text-foreground hover:text-orange-600">hello@oarcdigital.com</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting on every store</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">MFSA-licensed gateway integrations supported</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Maltese delivery providers integrated at checkout</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why this matters for e-commerce in Malta</h2>
            <p className="text-foreground leading-relaxed">
              The Malta e-commerce brands compounding right now have one thing in common &mdash; their checkout, their carrier mix and their lifecycle email were built for the actual Maltese consumer, not lifted from a US Shopify template. That is what OARC Digital ships. A store that respects how Maltese customers pay, how they expect their parcel to arrive, and how they want to be talked to once the order lands.
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

          <RelatedLinks slug="/aeo/ecommerce-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have an e-commerce brief? Let&apos;s scope it.</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute discovery call gets you a written platform recommendation, a fixed-price scope, and a go-live date &mdash; no slide deck, no upsell.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
