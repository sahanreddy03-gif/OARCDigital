import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
const SCHEMA = SERVICE_SCHEMAS["shopify-development"];

const phases = [
  { title: "Catalogue and brand workshop (week 1)", detail: "Map the catalogue, define the variant logic, plan the EU and Malta tax setup, and lock the brand system the new theme will express." },
  { title: "Custom theme build (weeks 2–5)", detail: "Online Store 2.0 theme using JSON sections so your team can drag-and-drop on the home page, collection pages, and product pages without breaking layout." },
  { title: "App stack and integrations (week 6)", detail: "Klaviyo for email and SMS, Judge.me or Stamped for reviews, Shopify Markets for cross-border, and Sufio or Avalara if EU OSS VAT is in scope." },
  { title: "Launch, instrumentation, training (week 7)", detail: "Meta and Google CAPI, GA4 ecommerce events, TikTok Pixel, Klaviyo placed-order webhook, plus a 60-minute Loom training so your team can edit and ship." },
];

const apps = [
  { name: "Klaviyo", role: "Email and SMS lifecycle, abandoned-cart, post-purchase, win-back. The single highest-ROI app on most stores." },
  { name: "Judge.me / Stamped", role: "User-generated reviews and Q&A on product pages. Lifts conversion and supports Google Shopping seller ratings." },
  { name: "Recharge", role: "Subscriptions for repeat-purchase brands — coffee, supplements, beauty, pet food." },
  { name: "Shopify Markets / Sufio", role: "Cross-border pricing, currency display, and EU OSS VAT compliance for Malta brands selling EU-wide." },
];

export default function ShopifyDevelopmentContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">Shopify Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Shopify Builds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Shopify Development for Malta DTC Brands</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Custom Shopify theme builds, app stack engineering, paid-media-ready instrumentation, and full migrations from WooCommerce or Magento — designed for Malta brands that intend to scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a Shopify strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href="tel:+35679711799"><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" /> +356 7971 1799</Button></a>
            </div>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Shopify, and Why for Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify is the right answer for most Malta DTC brands, full stop. The reasons are unromantic but decisive: the platform&apos;s payment, shipping, and tax integrations are mature, the third-party app ecosystem is unmatched, and the operational risk of a checkout outage is roughly zero compared to a self-hosted alternative. For a brand selling beauty, food, fashion, supplements, or homewares from Malta into the EU, Shopify removes more failure modes than it introduces.
            </p>
            <p className="text-foreground leading-relaxed">
              The flip side is that the default Shopify theme is generic, the default tax setup is wrong for Malta-domiciled brands selling EU-wide, and the analytics stack ships broken in ways that quietly hide cart-recovery revenue. Those are exactly the things OARC Digital fixes on every Shopify build.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A 7-Week Shopify Build, Phase by Phase</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The App Stack We Default To</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Apps are where Shopify stores either compound or bleed. We use a deliberately small stack — fewer dependencies, lower monthly cost, fewer points of failure.
            </p>
            <div className="space-y-3">
              {apps.map((a) => (
                <div key={a.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{a.name}</div>
                  <div className="text-sm text-muted-foreground">{a.role}</div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Comes In Every Build</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Built for Paid Media From Day One</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify&apos;s native pixel implementation lost a meaningful share of conversion data after Apple&apos;s ATT changes and the wider browser-tracking restrictions. The fix is server-side conversion tracking through Meta Conversions API, Google Enhanced Conversions, and TikTok Events API — all of which we wire up at launch, not as a later upgrade.
            </p>
            <p className="text-foreground leading-relaxed">
              The result: the same week your store goes live, your media buyer (yours or ours) can switch on Meta and Google ads with conversion data flowing accurately. No 60-day diagnostic loop trying to figure out why ROAS looks worse than it should.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Themes Built for Malta and EU Conversion</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most Shopify themes available on the marketplace are designed for the US market — dollar-first pricing, ZIP-code-based shipping, and PDP layouts optimised for influencer-driven impulse buys. Malta and broader EU buyers behave differently: they expect a transparent EUR price including VAT, a clear shipping ETA in working days, third-party trust signals like Trustpilot, and bilingual content for the iGaming, fintech, and hospitality verticals. Our custom Shopify themes are built around those defaults rather than retrofitted.
              </p>
              <p className="text-foreground leading-relaxed">
                We start every theme build with the Online Store 2.0 sections architecture and write Liquid by hand — no Dawn-template clones, no theme-builder middleware. Sections are designed for marketers to recombine: a homepage hero block, a featured collection block, a press-mention block, a comparison-table block, and a Klaviyo signup block can all be reordered from the theme editor without engineering involvement. Translation is wired through Shopify Markets so a single theme serves English and Maltese (or French, German, Italian) audiences without a separate codebase.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Apps, Hydrogen, and Scale-Ups</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Once a Malta merchant outgrows the standard Shopify storefront we offer two upgrade paths. Custom Shopify Apps written in Node and Remix and listed on the Shopify App Store handle merchant-specific integrations — Malta accounting platforms like Shireburn, local courier APIs, or bespoke loyalty programmes. Hydrogen storefronts replace the Liquid theme entirely with a React-based headless frontend hosted on Oxygen or Vercel for sub-one-second page loads at scale.
              </p>
              <p className="text-foreground leading-relaxed">
                Both upgrade paths preserve the merchant's existing Shopify back office — order management, inventory, payments, and Shopify Flow automations all continue to work. We refuse to migrate clients off Shopify simply to chase a headless badge; the migration only happens when the data shows existing performance is genuinely capping conversion, not because it sounds impressive in a deck.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting, Maintenance, and Compliance Wrap-Around</h2>
            <p className="text-foreground leading-relaxed">
              Every Shopify build ships with a quarterly health report covering Lighthouse scores, app performance impact, theme update history, third-party-script audit, EU consent-banner compliance, and a forward-looking optimisation queue. We monitor app subscription costs and recommend consolidations when overlap creeps in, and we keep the merchant on the latest stable version of every paid app rather than letting versions drift for years. Source code lives in the merchant's own GitHub organisation under permissions the merchant controls — no proprietary lock-in, no licence fees on the work we ship.
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
          
          <MaltaContextBlock slug="shopify-development" />
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
            <TrustBlock slug="shopify-development" />
          </section>
          <RelatedLinks slug="/services/shopify-development" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Migrating Or Building From Scratch?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will audit your existing platform free and send a phased Shopify migration plan in five working days.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
