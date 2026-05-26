"use client";

import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["shopify-development"];

const shopifyHeroImage = "/attached_assets/9_1763228440281.jpg";

const shopifyImageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Shopify eCommerce store product page and checkout — built to convert browsers into buyers for Malta DTC brands",
  description: "A high-converting Shopify storefront with optimised product pages, abandoned-cart recovery, and EU VAT compliance — built for Malta and EU retailers that intend to scale.",
  url: "https://oarcdigital.com/attached_assets/9_1763228440281.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/9_1763228440281.jpg",
};

const shopifyFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SCHEMA.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyImageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopifyFaqPageSchema) }}
      />
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-hero">Your Shopify Store Should Be Your Best Salesperson.</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Shopify-only specialists. Custom Liquid themes, bespoke Shopify apps, checkout extensibility on Plus, and de-risked migrations from WooCommerce, Magento, or BigCommerce — for Malta and EU retailers that intend to scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-hero-cta">Book a Shopify strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={shopifyHeroImage}
                alt="High-converting Shopify product and collection page — built to turn Malta DTC store visitors into buyers with EU VAT compliance and fast page loads"
                className="w-full h-auto block object-cover"
                loading="eager"
                width={1200}
                height={800}
                data-testid="img-shopify-hero"
              />
            </div>
            <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Checkout Extensibility on Shopify Plus</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Shopify deprecated checkout.liquid for upgraded merchants in August 2024 and Plus stores must move to Checkout Extensibility before the August 2025 cut-off. We have shipped this migration for Maltese and EU Plus merchants — gift-wrap upselling, bundled-discount calculation, age-verification gates for alcohol catalogues, post-purchase one-click upsells, and B2B account-aware shipping methods are all rebuilt as Checkout UI Extensions in React with Shopify Functions handling the discount, delivery, and payment customisations server-side.
              </p>
              <p className="text-foreground leading-relaxed">
                The benefit is not just compliance with Shopify&apos;s timeline. Checkout Extensibility moves the buyer through a PCI-isolated checkout that Shopify owns and updates — fewer abandoned carts on iOS Safari, fewer payment failures during peak Black Friday traffic, and zero risk of a third-party script breaking the buy button. Every Plus merchant we work with leaves the migration with a documented Functions repo in their own GitHub, deployed via the Shopify CLI through a CI/CD pipeline we hand over fully.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Plus Migrations from WooCommerce, Magento and BigCommerce</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The most common reason a Malta merchant calls us is a tired WooCommerce store crashing every Friday night, a Magento 2 instance whose monthly hosting bill outweighs its revenue, or a BigCommerce account that throttles a custom checkout the merchant actually needs. The migration plan is the same in every case: a frozen export of products, customers, orders, redirects, and SEO metadata; a parallel build on a Plus development store; a URL-preservation map run through htaccess or middleware so organic rankings survive; and a coordinated DNS cut-over scheduled outside peak trading hours.
              </p>
              <p className="text-foreground leading-relaxed">
                Plus is the right destination when GMV crosses ~€80k/month, when wholesale or B2B catalogues need separate price books, when expansion stores in EUR / GBP / USD justify multi-storefront, or when scripted checkout logic exceeded the standard plan&apos;s ceiling. Below those thresholds we recommend standard Shopify and a clean theme — paying for Plus before you need it is the most expensive mistake a Maltese DTC brand can make in year one.
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
            <TrustBlock variant="visit" />
          </section>
          <section className="mb-8 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">Shopify within the wider OARC ecommerce stack</h2>
            <p className="text-sm text-muted-foreground mb-4">
              This page covers Shopify exclusively — Liquid theme work, app development, checkout extensibility, and Plus migrations. If you are weighing platforms, the parent <strong className="text-foreground">Ecommerce Development</strong> page compares Shopify against WooCommerce, BigCommerce, and headless builds with cost and time-to-launch benchmarks for Malta merchants. Retailers also use our <strong className="text-foreground">Retail industry hub</strong> to see sector-specific case work — store-loyalty integrations, in-store-to-online sync, and Maltese VAT handling.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">WordPress</strong> remains the right fit for content-led brands, and a <strong className="text-foreground">custom web design</strong> sits above both when the product or brand experience cannot live inside any theme framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/ecommerce-development" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Ecommerce Development — platform-agnostic parent page <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/industries/ecommerce" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Ecommerce & DTC industry hub — sector case work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/industries/retail" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Retail industry hub — physical-store retailers <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/wordpress-development" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                WordPress Development — for content and service businesses <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/web-design" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Custom Web Design — bespoke design beyond any theme <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/paid-advertising" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm" data-testid="link-paid-advertising">
                Paid Advertising — traffic for your Shopify store <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
          <RelatedServices slug="/services/shopify-development" />
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
