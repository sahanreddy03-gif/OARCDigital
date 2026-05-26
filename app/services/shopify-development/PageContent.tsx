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
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">EU VAT and Maltese Compliance — Configured Correctly From Day One</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta-registered businesses selling goods or services into the EU operate under the EU OSS (One Stop Shop) regime introduced in July 2021. Instead of VAT-registering in every member state, Maltese merchants collect the buyer&apos;s local VAT rate at checkout and remit it quarterly via the Maltese tax authority. Shopify&apos;s native tax engine supports OSS collection, but only if the tax settings are configured with the correct rates, thresholds, and the right override logic for B2B reverse-charge transactions.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              On every Malta Shopify build we configure Shopify Tax or Sufio for automatic rate lookup, set up the B2B VAT-exempt flow (EU business buyers enter their VAT number at checkout; the system validates it via the VIES API and zero-rates the transaction), configure the Maltese 18% standard rate and the reduced 7% hotel accommodation and 5% e-books rates in the product-level tax overrides, and generate the quarterly OSS report in the format the Commissioner for Revenue accepts. The first VAT return is not a crisis — it is a fifteen-minute reconciliation against a report the platform has already generated.
            </p>
            <p className="text-foreground leading-relaxed">
              For merchants shipping physical goods, we also configure customs duties calculation via Shopify&apos;s Duties and Import Taxes feature for orders destined for the UK (post-Brexit threshold of £135) and for non-EU buyers. Malta's position as an EU island with no land border means all imports and exports involve customs; wiring this correctly at launch prevents the chargebacks and abandoned orders that come from buyers discovering unexpected duties at delivery.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Conversion Rate Optimisation Built Into the Theme</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The average Shopify store converts between one and two percent of visitors. A well-optimised store converts at three to five percent without more ad spend. The gap is almost entirely explained by product page design, trust signals, checkout friction, and the speed at which the page loads on mobile. We design these elements correctly the first time rather than leaving them for a separate CRO engagement six months later.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our standard product-page template includes: a sticky add-to-cart bar on mobile that persists through scroll; trust badges (secure checkout, free returns policy, delivery estimate) positioned directly under the add-to-cart button rather than in the footer; metafield-driven specification tables so merchants can publish structured product data without code; a review block from Judge.me or Stamped surfacing star rating and review count in the Google Shopping feed; a complementary-product block driven by Shopify&apos;s product recommendation API; and a sticky cart drawer that shows running total without navigating away from the product page. These elements are not add-ons — they are part of every build because leaving them out provably costs conversion.
            </p>
            <p className="text-foreground leading-relaxed">
              Collection pages are optimised for filter logic that matches the actual ways buyers shop the catalogue: size and colour for apparel, material and finish for homeware, price band and subscription-availability for consumables. Infinite scroll versus pagination is chosen based on catalogue depth and the analytics of the existing store if a migration — infinite scroll loses the footer on large catalogues, which matters for stores using footer links for SEO and compliance.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">International Expansion: Shopify Markets for Malta Brands Selling EU-Wide</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta is an English-speaking EU country with a legal system hospitable to international trade. The natural expansion sequence for most Malta DTC brands is Malta → UK → Germany → France → Italy. Shopify Markets makes that sequence operationally simple: a single store serves all five markets with localised pricing, localised language, localised payment methods (iDEAL for Netherlands, Klarna for Germany and Sweden, Carte Bancaire for France), and localised domain structure (mystore.com/de, mystore.com/fr) or separate ccTLDs under the same Shopify organisation.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Shopify Markets with a clear currency strategy — displaying prices in the buyer&apos;s currency using Shopify Payments multi-currency, or locking to EUR for brands that prefer price consistency across the Eurozone. Language localisation uses Shopify&apos;s native translation editor backed by DeepL for the machine-translation pass and a human-review step for product descriptions and marketing copy. Hreflang tags are emitted automatically from Markets, and the alternate-language sitemaps are submitted to Google Search Console per-market so organic traffic from Germany or France lands on the correct localised product page rather than bouncing off an English-only PDP.
            </p>
            <p className="text-foreground leading-relaxed">
              For brands where a single Shopify store cannot cover the market complexity — different product assortments, separate wholesale and DTC catalogues, or a B2B pricing model alongside a consumer storefront — we configure Shopify Plus with expansion stores under the Organisation umbrella, sharing the inventory, product, and customer data through a shared back-office while allowing each storefront its own theme, pricing, and checkout configuration.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify EU VAT for Malta Cross-Border Sellers</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A Malta-based Shopify merchant selling physical goods to EU consumers above the €10,000 annual cross-border threshold is required to collect and remit VAT in the buyer&apos;s country of residence — not Malta&apos;s 18% VAT rate. Shopify&apos;s tax settings can be configured to calculate the correct destination-country VAT rate at checkout, but the configuration requires deliberate setup: enabling the EU VAT OSS (One Stop Shop) rates in Shopify Tax, excluding VAT from product prices so Shopify can add the correct destination rate at checkout, and configuring the checkout to display prices inclusive of VAT for EU buyers (as required by EU consumer protection law).
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Malta merchants registered for VAT OSS file a single quarterly return to the Maltese tax authority covering all EU destination-country VAT collected. Shopify&apos;s Finance Summary can export the data in a format compatible with the OSS return, but the export requires the correct tax settings to have been active from the first sale — retroactive correction of historical Shopify tax data is a manual accounting exercise. We configure the tax settings at store launch and validate the export against the OSS return format before the first quarter end.
            </p>
            <p className="text-foreground leading-relaxed">
              For digital goods (software, fonts, templates, online courses, ebooks), the VAT rules differ: digital services are always taxed at the buyer&apos;s country rate regardless of the seller&apos;s revenue level, there is no €10,000 threshold, and the evidence requirements (two non-contradictory pieces of location evidence per transaction) are stricter than physical goods. We configure Shopify for digital product VAT compliance using Shopify&apos;s digital tax settings combined with a metafield that flags products as digital goods so the tax engine applies the correct rules per product type within a mixed physical-and-digital catalogue.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">EU VAT, OSS, and Shopify Tax Configuration for Malta Merchants</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s standard VAT rate is 18%, with reduced rates of 7% for accommodation services and 5% for medical and electronic publications. Shopify Tax, enabled by default on all new stores, handles the Malta domestic rate correctly for physical goods. Where it does not cover the Malta context without additional configuration: the EU VAT One Stop Shop (OSS) regime for cross-border digital-goods sales, the EU reduced rates for specific categories sold to EU consumers, and B2B reverse-charge for sales to EU-registered businesses.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Shopify Tax with the correct Malta tax rules, EU country tax overrides for all 27 member states using the current VAT rates published by the European Commission, and the VAT number collection and VIES validation at B2B checkout using the Sufio or Avalara app. The resulting tax calculation is correct for: Maltese consumers buying from a Malta Shopify store (18% Malta VAT), EU consumers buying digital goods above the €10,000 OSS threshold (buyer&apos;s country VAT rate), EU B2B buyers with a valid VAT number (0% reverse charge with the buyer&apos;s VAT number on the invoice), and non-EU buyers (0%, outside the VAT system). Each scenario is tested with a real test order before the store goes live because an incorrect tax configuration that overcharges a consumer creates a refund liability and an EU VAT registration complication.
            </p>
            <p className="text-foreground leading-relaxed">
              Invoicing for VAT-registered Malta businesses requires a VAT-compliant invoice format: the seller&apos;s VAT registration number, the buyer&apos;s VAT number for B2B transactions, the date of supply, a sequential invoice number, and the VAT amount broken out by rate. Shopify&apos;s built-in order confirmation email does not produce a VAT-compliant invoice. We integrate Sufio or Order Printer Pro configured to the Malta CFR invoice format so every order generates a compliant PDF invoice without the finance team manually producing them in a separate tool.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify SEO Configuration for Malta Merchants</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta merchants competing in both the domestic and UK search market need Shopify configured for dual-market discoverability. The platform&apos;s defaults are a starting point, not a finish line, and uncorrected they produce indexing problems that actively suppress rankings for the pages that generate revenue.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify generates canonical tags, sitemap.xml, and robots.txt automatically, but the defaults require deliberate adjustment for a Malta merchant to rank well in Maltese and UK search. The auto-generated sitemap includes every URL Shopify creates — including pagination pages, sort-order variants, and collection filter combinations — none of which should be indexed, because they create thin-content duplicate issues that dilute the indexing budget for the pages that matter: the homepage, collection pages, and product pages. We configure the robots.txt (via the Shopify robots.txt.liquid template) to disallow the sort, filter, and pagination parameters and submit only the curated sitemap to Google Search Console.
            </p>
            <p className="text-foreground leading-relaxed">
              Product structured data (Product JSON-LD with offers, availability, and price) is implemented using the Shopify theme&apos;s product.json-ld template, extended with the GTIN field populated from the product&apos;s barcode metafield and the brand field populated from the vendor metafield. This produces rich results in Google Shopping and enables the product to appear in the Google Merchant Center free listings without a separate data feed — though we also configure the Google Merchant Center feed via the Shopify Google channel for paid Shopping campaigns where the client runs them.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify International: Selling Beyond Malta and Gozo</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta&apos;s domestic market is small — approximately 550,000 residents — which means that most Malta DTC brands with growth ambitions are selling to an international audience from day one: the UK diaspora, the European tourist market, and in some categories (iGaming merchandise, financial services tools) a genuinely global buyer. Shopify Markets, available on all Shopify plans from Basic, allows a single store to present localised storefronts for different regions: local currency pricing rounded to local convention, local language content for storefront text and notifications, local payment method display order, and local domain or subdomain for SEO purposes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Shopify Markets for Malta brands selling to the UK and mainland Europe as the primary international expansion. Currency is displayed in the buyer&apos;s local currency using Shopify Payments&apos; automatic exchange rate (updated daily), with rounding rules set to produce clean prices (€24.99 rather than €24.73) and a configurable margin buffer of 1 to 3% to cover exchange rate fluctuation between pricing reviews. Duties and import taxes are estimated at checkout for UK buyers using Shopify&apos;s Duties and Import Taxes feature, which calls the Avalara API — this eliminates the &quot;surprise customs bill&quot; that causes a significant proportion of UK cross-border cart abandonments and post-delivery refund requests.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta brands targeting a specific non-EU market in depth — the Gulf states for luxury goods, or North America for niche food exports — we configure a dedicated Shopify expansion store under the same Organisation as the primary store, with its own domain, its own theme configuration tuned for the target market&apos;s browsing conventions, and its own Shopify Payments account in the local currency. Inventory syncs between stores via the Shopify inventory API or a middleware layer (Linnworks or Skubana for brands with complex multi-warehouse fulfilment). The Organisation-level analytics dashboard in Shopify Plus consolidates the revenue and order data across all stores so the founder sees total business performance in one view.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Theme Architecture and Performance for Malta Stores</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify themes are built in Liquid, Shopify&apos;s templating language, with JavaScript and CSS assets served through Shopify&apos;s CDN. For new builds, we start from Dawn (Shopify&apos;s reference theme) or Prestige/Impulse for fashion and lifestyle brands — modifying rather than building from scratch, because a battle-tested base theme has the accessibility, performance, and cross-browser compatibility groundwork already in place. For inherited stores with a heavily customised or page-builder-based theme, we assess whether the technical debt in the existing theme is worth carrying forward or whether a clean rebuild on Dawn is faster and cheaper over an 18-month horizon.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Performance targets for Shopify stores are: LCP under 2.5 seconds on a simulated 4G mobile connection, tested from a Frankfurt WebPageTest node (the closest major node to Malta); a Google PageSpeed mobile score of 70 or above on the homepage and the top three product pages (Shopify theme constraints make scores above 85 difficult without removing third-party scripts, which always involves a tradeoff against functionality); and a checkout page that loads the payment step under 3 seconds on 4G, which matters for conversion rate on mobile.
            </p>
            <p className="text-foreground leading-relaxed">
              The most impactful performance optimisations on Shopify are: loading third-party scripts (Meta Pixel, TikTok Pixel, Klaviyo, live chat) using a custom script loader that defers their execution until after the main thread is free rather than using the Shopify Script Editor which loads them synchronously; serving hero and product images in WebP format at appropriate srcset breakpoints (Shopify&apos;s CDN converts images to WebP automatically when the img_url filter includes format: &apos;webp&apos; — it is not on by default on older themes); and removing unused CSS from theme stylesheets using a PurgeCSS step in the theme&apos;s build pipeline so the stylesheet shipped to the browser contains only the rules the theme actually uses.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Analytics: What the Dashboard Shows and What It Hides</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify Analytics provides revenue, conversion rate, and traffic source data out of the box. What it does not show — and what matters for a Malta DTC brand making inventory, marketing, and pricing decisions — is contribution margin by product, cohort repeat-purchase rate by acquisition month, and the lifetime value curve by traffic source. A brand spending €4,000 per month on Meta ads that attributes 60% of revenue to Meta through Shopify&apos;s last-click attribution may be profitable at the product level or may be losing money on customer acquisition after the cost of goods; Shopify Analytics alone cannot tell you which.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure a supplementary analytics layer for every OARC Shopify engagement: GA4 with enhanced ecommerce events (view_item, add_to_cart, begin_checkout, purchase) plus custom events for wishlist addition and product video play; a Looker Studio dashboard connected to Shopify&apos;s GraphQL Admin API that shows cohort repeat-purchase rates, average order value by traffic source, and SKU-level contribution margin using the cost-per-item field from Shopify&apos;s inventory; and a weekly automated email (Klaviyo or Google Sheets macro) that delivers the five key metrics the founder looks at every Monday morning without logging into three separate platforms.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta brands running Meta and Google Ads simultaneously, we implement server-side conversion tracking using Shopify&apos;s Customer Events API sending purchase data directly to the Meta Conversions API and Google&apos;s Enhanced Conversions endpoint. This bypasses browser-based tracking limitations (iOS 14.5 App Tracking Transparency, ad blockers, and cookie consent non-acceptance) and recovers 15 to 35% of purchase events that browser pixel tracking misses. The server-side events are deduplicated against browser events using the event ID so Meta and Google do not double-count conversions, which would otherwise produce inflated ROAS figures and incorrect campaign optimisation signals.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaviyo, Retention, and the Malta Email Marketing Stack</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Email remains the highest-ROI channel for Shopify DTC brands in Malta. Klaviyo is the standard for OARC Shopify builds: it has native Shopify integration, behavioural segmentation from Shopify event data (viewed product, added to cart, purchased, purchased a specific collection), and a flow builder that handles the five flows every Malta DTC store needs from day one — abandoned cart, abandoned browse, post-purchase, winback, and welcome series for new subscribers.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Klaviyo with double opt-in for GDPR compliance, consent-timestamp recording in the Klaviyo profile, suppression lists synced from Shopify (customers who have unsubscribed from transactional emails are suppressed from marketing sends), and a preference centre where subscribers can manage their frequency and category preferences without unsubscribing entirely. The preference centre reduces the unsubscribe rate for Malta lifestyle and hospitality brands by 20 to 30% compared to a binary subscribe/unsubscribe model, because many customers want quarterly updates but not weekly promotional emails.
            </p>
            <p className="text-foreground leading-relaxed">
              SMS is configured alongside email for Malta merchants selling to a domestic audience — Malta has an extremely high mobile penetration rate and domestic SMS delivery rates above 95%. We integrate Klaviyo SMS or Postscript for time-sensitive communications: flash sale announcements, back-in-stock alerts for high-demand products, and order dispatch notifications for same-day delivery orders. SMS consent is collected separately from email consent at checkout and in the welcome flow, in compliance with the Electronic Communications (Regulation) Act and GDPR. The consent record includes the timestamp, the collection method, and the version of the consent language shown.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Checkout Customisation and Shopify Functions</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify Plus unlocks checkout customisation through Checkout Extensions and Shopify Functions — server-side compute that runs inside Shopify&apos;s infrastructure and modifies the cart, delivery, payment, and discount logic without Shopify needing to execute any code on a third-party server. For Malta merchants on Plus, the most commercially valuable Functions are custom discount logic (tiered discounts by order value, B2B volume pricing rules, loyalty-point redemption at checkout) and custom shipping logic (carrier selection by postcode, surcharges for Gozo delivery, free-shipping thresholds by product category that the standard Shopify rules cannot express).
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Checkout Extensions allow custom UI components to be inserted at specific slots in the Shopify checkout — before the shipping address, between the shipping and payment steps, or in the order summary sidebar. We use these for: a Malta-specific VAT number field for B2B buyers (collected at checkout, stored in the order metafield, and passed to the accounting integration), a gift-message textarea with character limit that feeds into the packing-slip template, and a delivery-date selector that queries the merchant&apos;s fulfilment calendar to show only dates when local delivery is available (excluding Maltese public holidays and Sundays when courier services are not operating).
            </p>
            <p className="text-foreground leading-relaxed">
              For Shopify non-Plus stores that cannot use Functions, we implement discount and shipping logic through Shopify Scripts (legacy, being deprecated in favour of Functions) or through a combination of manual discount codes and conditional product-display rules using metafields and Liquid conditionals in the theme. The architecture is always documented: the checkout logic is in a Functions package in the repository, the discount rules are in a configuration file that the merchant can update without code, and the deployment is via the Shopify CLI in the CI pipeline so a new checkout rule does not require manual deployment from a developer&apos;s laptop.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify for Malta Hospitality, Beauty, and Food Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Three Malta DTC categories account for the majority of our Shopify work: hospitality-adjacent retail (branded merchandise, food products, and locally-sourced goods sold to tourists and expats), beauty and wellness (cosmetics, supplements, and skincare brands that position around Malta&apos;s geographic story), and artisan food and beverage (local wine, honey, cheeselets, and preserved-food producers selling direct to both the domestic and export market). Each category has different Shopify configuration needs.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Hospitality-adjacent retail</strong> benefits from a product taxonomy aligned to the tourist buying journey — gift sets, "made in Malta" collections, fast-shipping domestic fulfilment for same-week delivery to Malta hotel addresses — and a checkout flow optimised for international card acceptance without friction. We configure Shopify Payments with Klarna and PayPal Express as supplementary methods and set the currency display to EUR by default for the Maltese and European buyer, with GBP and USD as secondary options for UK and US tourists.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Beauty and wellness brands</strong> face EU product regulation requirements: INCI ingredient declarations, responsible person details, EU Cosmetics Product Notification Portal registration numbers, and allergen disclosures. We build metafield structures for these regulatory fields so the correct disclosures appear automatically on every product page without the marketing team manually formatting legal text. For subscription supplement brands, Recharge or Skio handles the subscription billing with Shopify Payments as the processor, and a customer portal built on the Shopify Customer Account API allows subscribers to skip, pause, or cancel without contacting support.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Artisan food and beverage producers</strong> need careful attention to shelf-life display, cold-chain shipping options, and EU food labelling requirements (allergen highlighting, net quantity, best-before date format). We build variant-level shelf-life metafields surfaced in the checkout and in the packing slip template, wire Klaviyo for the best-before reminder sequence (an automated email 30 days before the stated shelf life for subscription orders), and configure Shopify Shipping with the DHL Malta API for refrigerated shipping rates where cold-chain products require it.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify App Development for Malta Merchants</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Shopify App Store contains more than 10,000 published apps and solves most standard ecommerce problems. It does not solve problems specific to Maltese business operations: integration with the Maltese Revenue Job Portal for employee management, connection to the NIC.mt registry for domain-based verifications, compatibility with local courier networks (DHL Malta, Maltapost, Merabell), or the specific reporting format the Malta Competition and Consumer Affairs Authority requires for licensed retailers in regulated categories. When a standard app does not exist, we build a private Shopify app.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Private Shopify apps are installed only on the merchant&apos;s specific store — they do not appear in the App Store and are not subject to Shopify&apos;s app review process. They are built in Node.js and Remix using the official Shopify App Template, authenticated via OAuth against the merchant&apos;s store, and access the Admin API for order, product, and customer data. Common private apps we have built for Malta merchants include: a Shireburn payroll integration that exports Shopify employee tip data in the format Shireburn Financial Reports accepts; a Malta Post shipping-rate API integration that provides live domestic parcel rates at checkout; a regulatory product-label generator that produces EAN-compliant labels from Shopify metafields for Maltese health-product retailers; and a custom returns portal built on Shopify Functions that enforces the merchant&apos;s specific returns policy, which differs from the Shopify default.
            </p>
            <p className="text-foreground leading-relaxed">
              Custom Shopify apps are priced as fixed-fee engineering engagements with a defined scope, a test suite covering the critical API paths, and a deployment pipeline via the Shopify CLI that the merchant&apos;s team can run without OARC involvement. Every app delivered includes a README covering the app&apos;s purpose, the OAuth scopes it requires, the webhooks it registers, and the environment variables it needs — so a new developer hired by the merchant can understand, operate, and extend the app without a formal handover.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify SEO for Malta DTC Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify&apos;s out-of-the-box SEO is adequate and regularly misunderstood. The platform generates canonical tags, sitemap.xml, and structured data for products automatically. What it does not do — and what matters for a Malta DTC brand competing against international retailers — is control duplicate content from faceted navigation, generate unique meta descriptions per product variant, or structure collection page content for keyword targeting. Those are all solvable, but they require deliberate configuration rather than default settings.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure every Shopify store with: canonical tags on collection pages filtered by tag (e.g. /collections/clothing?sort_by=price redirects to the collection canonical, not indexed separately); metafield-driven unique descriptions per product variant so a blue medium and a red large are not duplicate product pages; structured data for Product (with Offer, AggregateRating, and Brand) emitted on every product PDP; and a blog section configured with the correct Article schema and internal links to the collection pages most relevant to each post. The blog structure matters for Maltese DTC brands whose main organic opportunity is long-tail how-to and comparison content rather than direct brand-name searches.
            </p>
            <p className="text-foreground leading-relaxed">
              For migrating stores, we build a URL-redirect map before the DNS cut-over that captures every existing product, collection, and blog post URL indexed in Google Search Console and maps it to its new Shopify equivalent. Collection URL structures often change on migration (from /category/x to /collections/x, or from a WooCommerce permalink structure to Shopify&apos;s flat product paths), and a missing redirect on a high-traffic collection page can cost 30 to 40% of organic traffic within the first two indexing cycles. We monitor GSC daily for the first 30 days post-migration and resolve any 404s that appear before they compound.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify for Malta-Based B2B and Wholesale Merchants</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify B2B on Plus allows Malta wholesale and trade merchants to operate a separate buyer experience — net-payment terms, purchase-order-based checkout, custom price lists per account, and account-level minimum order quantities — inside the same Shopify admin as the DTC storefront. The use case is frequent among Malta food and beverage importers, health-and-beauty distributors, and industrial-supply companies that sell to both trade buyers and retail consumers from the same warehouse.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Shopify B2B with company-level accounts and location-level contacts, custom price lists using percentage discounts or fixed-price overrides per company, net-30 and net-60 payment terms with Shopify&apos;s draft order payment reminders, and a B2B-specific storefront theme that surfaces order history, outstanding invoices, and account documents without the DTC conversion elements that confuse trade buyers. The B2B checkout collects the company&apos;s VAT number, validates it against the VIES API, and applies EU reverse charge automatically so Malta businesses selling to EU-registered companies do not over-collect VAT on intra-community supplies.
            </p>
            <p className="text-foreground leading-relaxed">
              For merchants whose B2B order volume is high enough to justify a fully custom procurement portal — blanket purchase orders, contract pricing with volume tiers, ERP integration for order syncing — we build a headless B2B storefront using Shopify&apos;s Storefront API with a custom React front end, connected to the client&apos;s ERP (SAP Business One, Microsoft Dynamics, or Odoo) via a real-time webhook layer. The Shopify admin remains the fulfilment back-office; the procurement portal is the buyer-facing interface. This architecture is used by Malta-licensed distributors with regulatory reporting requirements that the standard Shopify admin cannot produce.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Shopify Speed Optimisation for Malta Mobile Buyers</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Mobile accounts for more than 70% of Shopify traffic in Malta and across the EU. The network conditions vary significantly — a tourist on 3G roaming from the ferry terminal in Valletta and a resident on fibre in Birkirkara both land on the same product page. A theme that loads in 1.2 seconds on fibre takes 4.5 seconds on 3G, and at 4.5 seconds the bounce rate on mobile exceeds 60%.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our speed optimisation process for Shopify covers: removing unused CSS and JavaScript from the theme bundle by auditing which sections are actually used on each page template and lazy-loading the rest; converting all product images to AVIF and WebP with correct responsive srcsets so the 375px mobile viewport does not download the same file as the 1440px desktop; deferring all third-party scripts (Klaviyo, Meta Pixel, TikTok Pixel, GA4) until after the main thread is free; and configuring Shopify&apos;s predictive prefetch so the next-page HTML is pre-loaded as the buyer hovers or touches a product card.
            </p>
            <p className="text-foreground leading-relaxed">
              The benchmark we target is LCP under 2.5 seconds on simulated 4G in WebPageTest from a London node (the nearest test location to Malta). We measure at store launch and again at month three and month six because app additions, new sections, and new product images frequently degrade performance without anyone tracking it. Performance is measured as a post-launch metric on every OARC managed Shopify engagement, not just at build time.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Post-Launch: The First 90 Days of Shopify Analytics</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A Shopify store&apos;s first 90 days post-launch are the highest-leverage window for conversion optimisation. The initial traffic cohort — whether from paid ads, organic, or email — establishes the baseline against which every future experiment is measured. We run a structured 90-day analytics programme on every build to make sure that baseline is clean and actionable rather than a mess of unconfigured events and broken attribution.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Week one after launch: verify that all GA4 ecommerce events (view_item, add_to_cart, begin_checkout, purchase) are firing correctly via DebugView and that the Meta CAPI and Google Enhanced Conversions are matching client-side events within a 5% tolerance. Any gap above 5% means ad platforms are under-counting purchases, which inflates CPA estimates and causes the algorithm to bid incorrectly. Week two: segment the conversion funnel by device, traffic source, and landing page. Malta buyers on mobile convert differently than desktop buyers, and the Shopify mobile checkout has specific drop-off patterns (address autocomplete failures on Maltese addresses, PostCode lookup returning no results for Gozo postcodes) that require specific fixes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Month two: Klaviyo flow performance review. Abandoned-cart sequences typically recover between 5% and 15% of abandoned carts; a Malta DTC store recovering less than 5% usually has a timing or subject-line problem, not a deliverability problem. Browse-abandonment and post-purchase upsell flows are activated once the abandoned-cart baseline is established. Month three: first A/B test on the highest-traffic product page — usually hero image versus lifestyle image, or price anchoring versus subscription discount presentation. We use Shopify&apos;s built-in A/B test functionality or Intelligems for price tests, and we do not run tests below 1,000 visitors per variant per week because the statistical noise drowns the signal.
            </p>
            <p className="text-foreground leading-relaxed">
              The 90-day report delivered at the end of this period includes: funnel conversion rates by stage and device, Klaviyo flow revenue attribution, top-ten pages by revenue, and a prioritised optimisation queue for the next quarter. Clients who go through this programme typically enter month four with a conversion rate 20 to 40% above the 90-day average — not from a redesign, but from fixing the specific frictions the data reveals.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Product Photography and Creative for Malta DTC Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most common reason a well-built Shopify theme underperforms is not the theme — it is the photography. A product page on a custom theme is only as good as the images in it, and most Malta DTC brands launch with one flat-lay shot per product, no lifestyle photography, and no short-form video. The category average for product-page conversion with a single image is roughly 1.5%. With three or more images including at least one lifestyle shot and a 15-second product video, the average rises to 3%.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC works with a network of Malta-based product photographers and videographers who understand ecommerce deliverables — consistent background, correct aspect ratios for Shopify&apos;s 1:1 and 4:5 image containers, AVIF and WebP exports at the correct resolutions, and model releases cleared for commercial use. We brief the shoot, attend where needed to ensure technical requirements are met, and deliver the processed image set ready to upload to Shopify with correct alt text pre-populated. The creative brief references the brand&apos;s Shopify theme colour palette so the photography feels native rather than stock.
            </p>
            <p className="text-foreground leading-relaxed">
              For brands that need to move faster than a full shoot allows, we build a product mockup workflow using Placeit or custom Figma templates so new product variants can be visualised at announcement speed — the actual photography follows. We also integrate AI background-removal and background-replacement tools into the media upload workflow so the team can maintain visual consistency on product images without a Photoshop operator on retainer.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When Shopify Is Not the Right Answer</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Shopify is the right foundation for almost every Malta DTC brand selling physical or digital products. It is not always the right answer, and we will say so before taking a deposit.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">If your primary need is a content-led site with editorial publishing, SEO blogging, and CMS editing as the central value:</strong> WordPress gives editorial teams better tools, more flexible URL structures, and a lower per-post cost for content operations at scale. Many Malta hospitality groups, legal firms, and media publishers are better served by WordPress even if they have a small shop attached.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">If you need deeply custom product configuration logic — build-your-own, bespoke pricing matrices, or engineer-to-order manufacturing workflows:</strong> Shopify&apos;s product model struggles above a few dozen option combinations. A custom back end with Shopify as the checkout layer, or a purpose-built CPQ (configure-price-quote) engine, is a more honest solution.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">If your business is purely digital services or SaaS subscriptions not tied to physical goods:</strong> Shopify&apos;s subscription model on standard plans adds unnecessary complexity. A Stripe Billing integration on a lightweight web front end handles the billing workflow more directly and at lower monthly platform cost. We build that through our <Link href="/services/saas-development" className="text-orange-600 font-medium hover:text-orange-700 underline">SaaS development service</Link> when the billing model is subscriptions without physical inventory.
            </p>
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
