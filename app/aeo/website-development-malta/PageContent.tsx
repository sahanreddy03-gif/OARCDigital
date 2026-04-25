import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const stack = [
  { name: 'Next.js + TypeScript', role: 'Default for new builds — server components, RSC streaming, edge image optimisation. Fast time-to-first-byte on Maltese 4G and EU fibre alike.' },
  { name: 'WordPress + ACF', role: 'For clients with existing WordPress operations or in-house content teams that already live in wp-admin. Hosted on Kinsta or RunCloud EU regions.' },
  { name: 'Shopify + Liquid', role: 'For product-led commerce — Maltese delivery rates, Wolt and Bolt Food integration, multi-currency for tourist traffic, Klaviyo abandonment flows.' },
  { name: 'Sanity / Payload CMS', role: 'Headless content for editorial-led sites and bilingual Maltese/English microsites. Granular roles for in-house content teams.' },
  { name: 'Vercel eu-west-1', role: 'Default hosting region. GDPR-clean by design, edge functions in Dublin, image optimisation served from EU POPs nearest your visitor.' },
  { name: 'Plausible + GA4', role: 'Cookieless Plausible by default for owners who want clean analytics without consent friction. GA4 added when the marketing team needs it.' },
];

const reasons = [
  'Conversion-first wireframes — every section earns its place by moving the visitor toward booking, buying, or enquiring.',
  'EU-region hosting on Vercel eu-west-1 or Kinsta Frankfurt — never US data centres unless you specifically request it.',
  'Real Malta market context — we know the difference between a Sliema F&B audience and a St Julians iGaming HQ landing page.',
  'Hand-off you can actually maintain — clean Git history, README, env documentation, and a 60-minute training call with the team.',
];

export default function WebsiteDevelopmentMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Website Development Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Website Development in Malta — Built to Convert, Hosted in the EU</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital is a Birkirkara-based studio that builds business websites for Malta SMEs across hospitality, retail, professional services, iGaming, and fintech. Next.js, WordPress, or Shopify — picked for the job, not the trend.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a discovery call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Most Malta Business Sites Underperform</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Walk through any commercial street in Sliema, Valletta, or St Julians and pull up the websites of the businesses you pass. The pattern is depressingly consistent: a five-year-old WordPress theme, a hero slider nobody asked for, three megabytes of unoptimised stock photography, no schema markup, and a contact form that nobody monitors. The site loads in four seconds on Malta&apos;s real 4G, the Lighthouse mobile score sits at 38, and the founder cannot explain in one sentence what action a visitor is supposed to take when they land on the homepage.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds the opposite of that. Our default position is that a website exists to do a single job — turn an interested visitor into a booking, a purchase, an enquiry, or a download — and every other element on the page is either supporting that job or quietly subtracting from it. We start with the conversion wireframe, layer the brand on top, and build on a stack (Next.js, WordPress, or Shopify) we picked for the project rather than the one we always reach for.
            </p>
            <p className="text-foreground leading-relaxed">
              The Birkirkara HQ matters here. Most of our website clients are Malta operators we can sit down with for a working session — a Mdina restaurant rebuilding its booking flow, a Sliema retailer launching DTC commerce, a Mosta professional services firm consolidating four legacy domains into one. Being thirty minutes from any client on the islands is a real underwriting advantage when you are scoping content, photo direction, and integration access in week one of the project.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Malta Operators Pick OARC Digital</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Stack We Build On</h2>
            <p className="text-muted-foreground mb-6">Pragmatic, EU-hosted, and matched to the brief — not whatever framework was trending last quarter on Twitter.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {stack.map((s) => (
                <div key={s.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground mb-6">Three engagement shapes. Pick the one that matches your stage.</p>
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
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting (Vercel eu-west-1) on every site</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Lighthouse mobile 90+ on real Malta 4G</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Schema, sitemap, GA4/Plausible from day one</span></div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Matters for Malta Operators</h2>
            <p className="text-foreground leading-relaxed">
              Malta is a small SERP. There are only so many restaurants, hotels, brokers, gaming operators, and agencies competing on the same dozen high-intent queries. Whichever site loads fastest on a Vodafone Malta 4G connection, structures content cleanest for Google and ChatGPT, and converts visitors to enquiries earliest will quietly compound an advantage every quarter. A website built well in 2025 is still earning bookings in 2028. A website built badly is a leaky bucket that costs you money every time you run a paid campaign on top of it.
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

          <RelatedLinks slug="/aeo/website-development-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Have a website that&apos;s underperforming?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute call gets you a written audit of what is costing you conversions and a rough scope to fix it.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Start a conversation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
