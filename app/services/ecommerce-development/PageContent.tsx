import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["ecommerce-development"];

const phases = [
  { title: "Catalogue and operations workshop (week 1)", detail: "Map the catalogue (single SKU vs variant matrix), inventory truth source, fulfilment partner, and tax rules — Malta VAT plus EU OSS where relevant." },
  { title: "Theme build, product page templates, checkout (weeks 2–6)", detail: "Custom Shopify theme or WooCommerce build. Product page architecture is treated as the single most important conversion surface — variant logic, social proof, returns visibility, and a fast mobile add-to-cart." },
  { title: "Payments, shipping, and tax (week 7)", detail: "Stripe, Revolut Business, and PayPal integrated. Malta Post and DPD shipping zones configured. EU OSS VAT rules applied if you sell across borders." },
  { title: "Launch, instrumentation, and handover (week 8)", detail: "GA4, Meta CAPI, TikTok Pixel, and Klaviyo wired up. Full Loom training for your team. We hand over a working store, not a half-finished theme." },
];

const platforms = [
  { name: "Shopify", best: "Most Malta DTC brands. Best ecosystem, fastest time to revenue." },
  { name: "WooCommerce", best: "WordPress-first sites that already rank, lower transaction fees, more flexibility." },
  { name: "Custom (Next.js + Stripe)", best: "Brands needing bespoke flows or B2B logic — quoting, subscriptions, multi-currency dashboards." },
];

export default function EcommerceDevelopmentContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Ecommerce Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Ecommerce Builds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ecommerce Development for Malta Retailers</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Shopify and WooCommerce stores built for Malta and EU buyers — VAT-compliant, mobile-first, integrated with Malta Post and DPD, and ready to scale on Meta and Google ads from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a store strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
            <p className="mt-6 text-xs text-zinc-500">Last updated: 10 May 2026</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Building Ecommerce in a 500,000-Person Market</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A Malta-first ecommerce store has different constraints from one built in London or Berlin. The home market is small, so cross-border EU shipping has to be planned in from day one if the brand is going to scale. Malta Post and DPD dominate domestic delivery, but their tariff structures differ enough that the wrong shipping zone configuration can quietly destroy unit economics. VAT compliance under Malta&apos;s EU OSS regime requires correct origin-of-supply handling that most off-the-shelf themes mismanage by default.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital builds stores that handle these realities cleanly. We bake the operational rules into the build rather than discovering them after launch — and we measure success in checkout completion rate, return rate, and 60-day repeat-purchase rate, not visual polish.
            </p>
            <p className="text-foreground leading-relaxed">
              The merchants we work with in Sliema, Valletta, and St Julian&apos;s share a common second-year challenge: scaling beyond the Maltese household to serve Italian, Sicilian, and southern French buyers without a second platform build. Our store architecture answers that on day one — Shopify Markets or WooCommerce multi-store from the start, EUR pricing with locale-aware checkout copy, and a fulfilment model that switches from Malta-origin shipping to a Sicilian 3PL once monthly volume crosses the break-even point. The brand never has to migrate platforms to grow into the EU.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">An 8-Week Store Build, Phase by Phase</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2"><span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span><h3 className="font-bold">{p.title}</h3></div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Platforms We Build On</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.best}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Store Build</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SCHEMA.features.map((f) => (
                <div key={f.name} className="flex items-start gap-3 p-4 rounded-xl bg-card border">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Built to Scale on Paid Media</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most stores are designed without paid media in mind. The Meta Pixel is added as an afterthought, the Conversions API is never wired up, and product pages do not contain the structured data that Google Shopping needs. Six months later the brand wonders why ads are not profitable.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds stores assuming the first euro of revenue will come from a Meta or Google ad. Server-side conversion tracking, GA4 ecommerce events, product-level structured data, and a Klaviyo-ready event stream are all in place at launch — so the same week we hand over the store, your media buyer can start spending profitably.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What Slows Malta Stores Down</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We have audited dozens of Malta-based Shopify and WooCommerce stores and the same conversion blockers appear over and over. Slow product detail pages because the merchant installed eight personalisation apps that each inject 200KB of JavaScript. A checkout that requires account creation and rejects half of the European address formats. Multi-currency that changes the price label but charges the customer in EUR at a hidden FX margin. Shipping rules that quote €18 to send a t-shirt to Mosta because the carrier matrix was never updated for Malta intra-island delivery.
              </p>
              <p className="text-foreground leading-relaxed">
                Our build process treats every one of these as a first-week deliverable rather than a future ticket. Theme JavaScript is audited and deferred. The checkout is set to guest-friendly and tested against Italian, French, German, Spanish, and Maltese address formats. Multi-currency is wired through Shopify Payments or a Stripe-native multi-currency setup so the customer sees and pays the same number. And the shipping matrix is rebuilt with real Malta carrier rates from DHL, GO Logistics, and FedEx including the cheaper intra-island options.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Conversion Engineering Beyond Launch</h2>
              <p className="text-foreground leading-relaxed mb-4">
                A new store on launch day is the floor of its conversion potential, not the ceiling. Our retainers ship a documented CRO test queue starting in week six post-launch — A/B tests on PDP layout, social-proof placement, shipping-fee transparency, and add-to-cart copy. Each test runs to statistical significance using a weekly traffic baseline we set during the build, and only winning variants ship to 100% of traffic.
              </p>
              <p className="text-foreground leading-relaxed">
                We also wire Klaviyo flows for abandoned cart, browse abandonment, post-purchase, and win-back from day one — because email is consistently the highest-margin channel for Malta ecommerce brands and the cheapest to scale. Together with the on-site CRO programme, these channels typically lift store-wide conversion 15-30% in the first six months without changing ad spend.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Documentation, Training, and the Handover</h2>
            <p className="text-foreground leading-relaxed">
              Every store ships with a written operations manual covering order workflows, refund policy execution, inventory replenishment, shipping-rule edge cases, theme content updates, and the quarterly Klaviyo review checklist. Two recorded training sessions for the merchant's team are included in every build — one for the customer-service workflow and one for marketing operations. Source code, theme assets, app subscriptions, and analytics dashboards all live under accounts owned by the merchant from day one, so handover at any point is a permission change rather than a migration project. We also publish a quarterly health report covering Lighthouse trends, app inventory, and a forward-looking optimisation queue so non-technical stakeholders can read it and ask informed questions.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom.toLocaleString()}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{offer.unitText?.toLowerCase() ?? "project"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <MaltaContextBlock slug="ecommerce-development" />
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {SCHEMA.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>
          <RelatedServices slug="/services/ecommerce-development" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Launching or Replatforming?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">Bring us your existing store — we will audit it free and tell you whether to refresh it or rebuild it.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request an audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
