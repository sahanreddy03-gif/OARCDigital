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
const SCHEMA = SERVICE_SCHEMAS["wordpress-development"];

const wpHeroImage = "/attached_assets/11_1763228440281.jpg";

const wpImageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "Custom WordPress build by OARC Digital for a Malta business — editable CMS for non-technical teams",
  description: "WordPress built so Malta business owners can update pages, add blog posts, and manage content without needing a developer for every change.",
  url: "https://oarcdigital.com/attached_assets/11_1763228440281.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/11_1763228440281.jpg",
};

const wpFaqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SCHEMA.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const phases = [
  { title: "Discovery, content audit, hosting plan (week 1)", detail: "We map the URL structure to migrate, the plugins to keep, the plugins to retire, and the hosting topology — usually Cloudways, Kinsta, or WP Engine in EU regions for Malta clients." },
  { title: "Theme and block design (weeks 2–4)", detail: "Custom block-based theme using the modern WordPress block editor (Gutenberg) so your team can edit pages without breaking the layout. No page-builder lock-in." },
  { title: "Migration and 301 redirect map (week 5)", detail: "Full content migration with a one-to-one 301 redirect map preserving every backlink and ranking signal. Zero traffic loss is the standard, not the exception." },
  { title: "Launch, security hardening, training (week 6)", detail: "Wordfence or iThemes Security, daily off-site backups, restricted login, two-factor admin, and a 60-minute Loom training for your team to take over content updates." },
];

export default function WordPressDevelopmentContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wpImageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wpFaqPageSchema) }}
      />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link><span>/</span>
              <span className="text-white">WordPress Development</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">WordPress Builds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="heading-hero">A Website You Can Actually Manage Yourself.</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Custom WordPress builds, theme design, plugin development, and managed maintenance — fast, secure, and built to be edited by your team without breaking.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-hero-cta">Book a WordPress audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={wpHeroImage}
                alt="Website design UI and UX process — WordPress block editor built so Malta business owners can update pages, add blog posts, and manage content without a developer"
                className="w-full h-auto block object-cover"
                loading="eager"
                width={1200}
                height={800}
                data-testid="img-wordpress-hero"
              />
            </div>
            <p className="mt-6 text-xs text-zinc-500" data-testid="text-last-updated">Last updated: 10 May 2026</p>
          </div>
        </section>
        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Done Right, Not Done Cheap</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WordPress still powers more than 40% of websites globally and remains the right answer for Malta businesses that need a content-led site their own team can update — law firms, hospitality groups, real-estate agencies, news publishers, and B2B service businesses. The catch is that most Malta WordPress sites are running on a Frankenstein stack of nine page-builders, twenty-three plugins, and a theme last updated in 2019. They are slow, insecure, and impossible to redesign without starting over.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital builds modern WordPress sites the right way — block-based themes, minimum plugin footprint, EU-region managed hosting, and a clear maintenance contract that prevents the rot from setting in again. The result is a site that loads in under one second, ranks well, and stays editable by your team for years.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A 6-Week WordPress Build, Phase by Phase</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Performance: A Hard Target, Not a Promise</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Every WordPress build OARC ships hits Core Web Vitals targets at launch — Largest Contentful Paint under 2.5 seconds on 4G, Cumulative Layout Shift under 0.1, and Interaction to Next Paint under 200ms. We get there by combining a lean theme, server-level caching (LiteSpeed or NGINX FastCGI), CDN delivery via Cloudflare, properly-sized AVIF and WebP images, and a strict no-bloat plugin policy.
            </p>
            <p className="text-foreground leading-relaxed">
              The reason this matters is not vanity. It is conversion. The data is consistent across our Malta client base: a one-second improvement in LCP is worth 7–14% more leads on a service site and 8–10% more revenue on an ecommerce store. Performance is the cheapest conversion lift you will ever buy.
            </p>
          </section>
          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom WordPress, Not Page-Builder Bloat</h2>
              <p className="text-foreground leading-relaxed mb-4">
                WordPress powers more than 40% of the open web, but the version of WordPress most Malta agencies sell is a generic theme stuffed with three page builders, fifteen plugins, and a Lighthouse mobile score in the forties. Our builds are the opposite. Every site ships with a custom theme written against the official block API, fewer than ten production plugins each chosen for a specific purpose, and a hand-rolled editorial workflow that gives content owners purpose-built blocks rather than a blank Gutenberg canvas.
              </p>
              <p className="text-foreground leading-relaxed">
                The result is a site that loads in under two seconds on a 4G connection, scores 90+ on Lighthouse mobile, and stays performant six months after launch when the marketing team has added 200 pages. Editorial control is preserved — and often improved — because writers and marketers get blocks named after the actual layouts they need ("team grid", "client logo wall", "pricing table") rather than wrestling with raw spacers and columns.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Hosting, Security, and Updates That Are Actually Managed</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Managed WordPress hosting at most providers means "backups happen". Our managed hosting tier runs on EU infrastructure with daily encrypted backups stored in a separate AWS region, automated malware scanning on file changes, weekly minor-version core and plugin updates applied to a staging branch and reviewed before promotion, and uptime monitoring with a four-hour incident response SLA. Security headers, content security policy, and a hardened admin login are configured on day one rather than left for the client to discover after the first attack.
              </p>
              <p className="text-foreground leading-relaxed">
                We also publish a quarterly site health report covering Core Web Vitals trends, plugin update history, security incident log, backup verification results, and a forward-looking recommendations list. The report is written in plain English so non-technical stakeholders can read it and ask informed questions — not a PDF dump of vendor dashboards.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">WooCommerce Stores Without the 40-Plugin Tax</h2>
              <p className="text-foreground leading-relaxed mb-4">
                WooCommerce is the right ecommerce engine for Malta retailers under roughly 1,500 SKUs who already have content investment in WordPress, run a small product team, or need deep editorial integration between blog content and product pages. We build WooCommerce stores the same way we build the rest of our WordPress work — bespoke theme on top of the block editor, fewer than ten production plugins, and the Maltese VAT matrix (18 / 7 / 5 percent) baked into the cart at checkout rather than bolted on after the first VAT return goes wrong.
              </p>
              <p className="text-foreground leading-relaxed">
                Payments wire to Revolut Business, Stripe, or BOV Merchant Services with 3-D Secure 2 enforced; shipping integrates Maltese Post for domestic and DHL or FedEx for cross-border with live rate calls. Klaviyo handles the email loop because Mailchimp under-delivers in low-volume EU markets, and the Schema.org Product feed ships ready for Google Shopping and Bing Merchant Center on day one. For larger catalogues, a deeper feature set, or international Plus-grade scale we will tell you honestly when Shopify is the better engine before any code is written.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Plugin Engineering, Not Plugin Hoarding</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most performance and security incidents in Malta WordPress sites trace back to a stack of twenty-plus plugins that were installed once for a single feature and never reviewed again. Our policy is the opposite: every plugin earns its place against a documented business requirement, and where the requirement is unique we ship a small, audited custom plugin instead of grafting two third-party plugins together. Typical custom plugin work for our clients includes Maltese-VAT receipt generation, NIC.mt domain renewal reminders inside the admin, Salesforce / HubSpot lead sync, MFSA-style audit logs for regulated content workflows, and bespoke Gutenberg blocks tied to the brand's design system.
              </p>
              <p className="text-foreground leading-relaxed">
                Every custom plugin we deliver ships with a README, a changelog, semantic versioning, PHPUnit tests for the critical paths, a GitHub repository in the client's organisation, and a CI pipeline that runs the test suite on every push. The plugin is yours — IP-assigned in the SOW — and a written handover document explains how to extend it without re-engaging us. Lock-in is a business model we have deliberately walked away from.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Migrations With a One-to-One 301 Map and No Ranking Loss</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Migrations are where most Malta WordPress projects quietly burn six months of organic traffic. Our process is built around preventing that. Week one is a full crawl of the existing site, an export of every indexed URL from Google Search Console, and a side-by-side mapping spreadsheet that pairs every legacy URL with its successor on the new site. Where a page is being retired, the redirect target is the closest topical match — never a blanket bounce to the homepage, which dilutes link equity and tanks rankings within the first two weeks.
              </p>
              <p className="text-foreground leading-relaxed">
                Content moves block-by-block into the new theme's pattern library, media is re-encoded into AVIF and WebP at the correct breakpoints, internal links are rewritten to canonical URLs, and the redirect map is shipped as server-level 301s (Nginx or Apache .htaccess) rather than a plugin to keep the redirect overhead at zero milliseconds. Post-launch, we monitor Google Search Console daily for the first 30 days, fix any unexpected 404s within 24 hours, and publish a written ranking-stability report at day 30, day 60, and day 90 so the client can verify SEO equity has held — or know exactly which URL needs another look.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Working With Marketing and Editorial Teams</h2>
            <p className="text-foreground leading-relaxed">
              Most of our WordPress builds are handed over to a small marketing or editorial team rather than a dedicated developer. We design the back-of-house experience around that reality: every block has clear in-editor instructions, image fields enforce aspect ratios so layouts cannot break, and the dashboard is stripped of the eighty-plus default WordPress menu items down to the six the team actually uses. Two-hour onboarding sessions for content owners are included in every build — recorded, transcribed, and stored in the client's shared drive — so new hires can pick up the workflow without a second invoice from us. Where required we also wire WordPress to a headless front end on Next.js for a complete editor-friendly back office paired with a sub-second public site.
            </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing Honesty and the Realistic Project Timeline</h2>
            <p className="text-foreground leading-relaxed">
              We do not publish lowball discovery rates and back-load the bill at month three. Every WordPress build engagement starts with a fixed-fee scoping document that lists every page, every block type, every integration, and every editorial role with its corresponding effort estimate in hours. The total is the total. Change requests after kickoff are scoped, priced, and approved before any development begins, and the change log is published in the client's project board so nothing happens off the record. Realistic timelines for our typical builds are four to eight weeks for a marketing site, ten to fourteen weeks for a publisher or magazine, and twelve to sixteen weeks for a headless WordPress with a Next.js front end — and we publish those numbers up front rather than discovering them mid-project.
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
          
          <MaltaContextBlock slug="wordpress-development" />
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
            <p className="text-sm text-muted-foreground mb-3">
              WordPress development sits inside our broader <Link href="/services/web-design" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">web design and engineering practice</Link> — start there if you need a custom front-end stack outside the WordPress ecosystem (Next.js, Astro, headless CMS).
            </p>
            <h2 className="text-xl font-bold mb-3">WordPress vs Shopify — choosing the right CMS for your Malta business</h2>
            <p className="text-sm text-muted-foreground mb-4">
              WordPress is the right choice when your business needs a flexible, content-led site — a service business, a hospitality group, a professional-services firm, or any brand where editorial publishing and SEO are central to growth. It scales to any content complexity and integrates with every marketing tool on the planet.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              If your primary need is an <strong className="text-foreground">ecommerce storefront</strong> — a catalogue, a cart, a checkout, and order management — Shopify is typically the faster route to a high-converting store. The two platforms are optimised for different jobs; we will tell you honestly which one fits your business model before a single line of code is written.
            </p>
            <Link href="/services/shopify-development" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
              Shopify Development — for ecommerce-first businesses <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Headless WordPress and the Decoupled Architecture Option</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Traditional WordPress couples the content management system with the templating layer that renders the page. Headless WordPress separates them: WordPress operates purely as a content repository accessed via its REST API or GraphQL (through WPGraphQL), and a separate Next.js or Astro front end fetches the content at build time or request time and renders it with full control over HTML output, Core Web Vitals, and edge caching. The front end can be deployed to a CDN edge network while WordPress runs on a low-cost managed host that never receives direct public traffic.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The case for headless is strongest for high-traffic Malta publishers, media companies, and enterprise marketing sites where Core Web Vitals performance is the primary constraint and the content editing experience needs to be WordPress (editors already know it, training is zero, the plugin ecosystem for editorial workflows has no equivalent elsewhere). The case against headless is the real-time preview problem: WordPress&apos;s Gutenberg editor previews the post in the standard WordPress theme, not in the Next.js front end, which means editors cannot see the final rendered result during drafting without a custom preview configuration. We build the preview configuration using Next.js Draft Mode so editors see the final rendered output — but it is extra engineering cost that traditional WordPress does not require.
            </p>
            <p className="text-foreground leading-relaxed">
              For Malta clients who are evaluating headless, the honest framing is: if your current page performance is the primary business problem and your editors are already fluent in WordPress, the headless approach solves the right problem. If your primary problem is conversion rate, design quality, or content strategy, a well-optimised traditional WordPress build with a lean theme and correct server configuration will perform within acceptable range and deliver faster and for less engineering investment. We recommend headless to fewer than 20% of WordPress enquiries and are transparent about why for the other 80%.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Accessibility and GDPR Compliance for Malta Businesses</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Two compliance areas that Malta businesses routinely underestimate on their WordPress sites are web accessibility (the European Accessibility Act became enforceable for private-sector businesses from June 2025) and GDPR consent management. Both are addressed in our build standard, and both are easier to engineer correctly at launch than to retrofit after an audit or a complaint.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For accessibility we build to WCAG 2.1 AA as the minimum standard — keyboard navigability for all interactive elements, ARIA roles on dynamic content, colour contrast ratios above 4.5:1 for body text and 3:1 for large text, meaningful alt text on every image and not the filename or "image of", focus indicators visible at the default browser zoom, and a skip-navigation link at the top of the DOM for screen reader users. We run axe-core automated checks on every page template before delivery and include a one-page accessibility statement referencing the WCAG standard, the date of the last audit, and a contact method for users who encounter barriers. The statement is not a legal shield — the site has to actually be accessible — but it documents the standard and the process in the format Malta regulators expect.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For GDPR consent we integrate Cookiebot or Cookie Script configured for the Maltese and EU audience with granular consent categories (strictly necessary, functional, analytics, marketing), a consent-record database that stores each user&apos;s choices with timestamp and the version of the policy they accepted, and a consent-withdrawal mechanism accessible from every page footer. Analytics tags (GA4, Meta Pixel, HubSpot tracking) are gated behind consent and fire only after the user accepts the relevant category — not before. This is the most frequently audited GDPR control for Maltese businesses and the one we are most commonly asked to fix on inherited sites where tracking scripts fire on page load regardless of consent status.
            </p>
            <p className="text-foreground leading-relaxed">
              Privacy policy and terms documents are generated from a template that covers the required GDPR Article 13 disclosures — identity of the controller, purposes and legal basis for processing, data retention periods, recipients, third-country transfers, and data-subject rights — and are reviewed by the client&apos;s legal adviser before publication. We do not practise law, but we provide the technical implementation that makes the policy accurate: if the policy says no third-country transfers, the site should not be sending data to US-region servers without a transfer mechanism. We audit the technical stack against the policy text and flag discrepancies before the site launches.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WooCommerce for Malta Retailers: VAT, Shipping, and Payment Configuration</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WooCommerce is the ecommerce layer we build on top of WordPress for Malta retailers that need a product catalogue, shopping cart, and checkout alongside content-rich pages — a model that does not fit Shopify&apos;s template-first approach. The critical configurations for a Malta WooCommerce store differ from international defaults in four areas: tax, shipping, payment methods, and B2B pricing.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Malta VAT at 18% (standard rate) applies to most goods sold domestically. The 5% reduced rate applies to accommodation services and specific food categories. The 0% rate applies to exports outside the EU. WooCommerce tax tables are configured with tax classes for each applicable rate, the correct tax-inclusive or tax-exclusive display setting (Malta consumer-facing prices are displayed tax-inclusive per EU consumer directive), and the EU VAT OSS configuration for sales to EU consumers in other member states. From July 2021, Malta businesses with EU cross-border digital-goods sales above €10,000 annually must register for OSS and charge the buyer&apos;s country VAT rate — WooCommerce handles this through the Aelia Currency Switcher and the EU VAT Compliance plugin set to the OSS table.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Shipping is configured with Maltapost, DHL Malta, and DSV Malta rates for domestic delivery, and DHL or FedEx international rates for EU and global shipping. Free shipping thresholds are set per zone (typically €60 or €75 for domestic free shipping, reflecting the cost structure of Maltese last-mile delivery). The checkout displays the correct carrier options based on the delivery postcode — Gozo postcodes trigger the ferry-inclusive rate which adds roughly €3 to the fulfilment cost.
            </p>
            <p className="text-foreground leading-relaxed">
              Payment methods configured on every WooCommerce build include: Revolut Business (the most widely used payment gateway for Malta SMEs), Stripe (for international card acceptance), PayPal Express Checkout, and bank transfer as a fallback for B2B orders over €5,000. BOV and HSBC Malta direct-gateway integrations are available where the client has an existing merchant relationship and does not wish to pay Revolut or Stripe processing fees. The payment method display order at checkout is tested on mobile — the most common Malta checkout journey — and sequenced to surface the most-used method first based on the client&apos;s historical payment data.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Headless WordPress for Performance-Critical Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Headless WordPress — using WordPress purely as a CMS backend and API source, with a separate React or Next.js frontend consuming the REST API or GraphQL — is the right architecture for a narrow set of use cases: a brand whose marketing site must achieve LCP under 1.5 seconds on mobile globally, a publisher whose editorial team is comfortable in WordPress but whose developers want component-based front-end tooling, or an organisation that needs to serve the same content to a website, a native mobile app, and a digital signage system from a single content source. For most Malta businesses, it is architectural overhead that delays the build and raises the long-term engineering cost without delivering a benefit they can measure. We recommend it explicitly when the case for it is clear, and we say so when it is not.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              When headless is the right choice, we build the front end in Next.js with Incremental Static Regeneration for high-traffic public pages (the homepage, service pages, and blog posts regenerate in the background as content changes) and server-rendered pages for personalised or gated content. The WordPress REST API is used for content delivery with object caching at the WordPress layer (Redis or Memcached) so the Next.js front end is pulling from fast cached endpoints rather than triggering a PHP process on every request. Preview mode in Next.js connects to WordPress&apos; preview API so the content editor can see draft pages in the final design before publishing, using the same preview token flow that a monolithic WordPress theme would use.
            </p>
            <p className="text-foreground leading-relaxed">
              Content migrations from headless WordPress back to a traditional stack — or vice versa — are not uncommon when a product team changes and the new team does not want to maintain two separate codebases. We design the content model in WordPress with the migration scenario in mind: custom field structures that are portable between both architectures, image sizes registered at the WordPress level rather than the theme level, and URL slugs managed in WordPress rather than derived from a front-end routing convention. The content is the asset; the architecture serving it should be changeable without rewriting the content.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Integrating WordPress With Malta Business Tools</h2>
            <p className="text-foreground leading-relaxed mb-4">
              A WordPress site that does not talk to the tools a business already uses creates manual data-entry work, disconnected analytics, and a marketing team that cannot act on website data. We wire the following integrations on every applicable build — not as extras but as standard deliverables once the relevant tool is confirmed in scope.
            </p>
            <div className="space-y-3 mb-4">
              {[
                { tool: "HubSpot CRM", detail: "Contact form submissions create HubSpot contacts with UTM source, medium, and campaign populated automatically. Every lead from the WordPress site is tracked from first visit through to closed deal in the CRM without manual import." },
                { tool: "Klaviyo", detail: "Email capture forms on the WordPress site sync subscribers to Klaviyo lists with double opt-in and consent-timestamp recording. For hospitality and retail clients, the post-stay and post-purchase email sequences are triggered from WordPress form submissions and WooCommerce order events respectively." },
                { tool: "Google Analytics 4 and Google Search Console", detail: "GA4 implementation using Google Tag Manager, with custom events for every meaningful interaction: form start, form submit, phone click, map view, file download. Search Console verified and linked to GA4 so the organic keyword data is visible alongside on-site behaviour." },
                { tool: "Calendly or Microsoft Bookings", detail: "Appointment-booking widgets embedded on service pages with inline calendar availability. Bookings sync to the client's calendar system without a third-party scheduling tool or a phone-tag loop. For professional services clients, the booking confirmation email is customised with the firm's branding and a pre-meeting document checklist." },
                { tool: "Shireburn / MYOB / Xero", detail: "WooCommerce order data exported to Malta accounting platforms via scheduled CSV exports or a direct API integration where the accounting system supports it. VAT breakdowns at the correct Maltese rates are included in every export so the quarterly VAT return reconciliation is a one-step process." },
              ].map((item) => (
                <div key={item.tool} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{item.tool}</div>
                  <div className="text-sm text-muted-foreground">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Pricing and the True Cost of Maintenance</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta WordPress quotes contain a build price and a vague monthly "maintenance" fee that the client discovers covers almost nothing. Our pricing is structured differently: a fixed-fee build with a complete deliverable list, and a managed-hosting retainer with a documented monthly scope. The retainer covers EU-region managed hosting, daily off-site backups, weekly plugin and core updates applied to staging first, uptime monitoring, Core Web Vitals tracking, and a monthly written health report. It does not cover content changes, new features, or SEO work — those are scoped and priced separately when needed.
            </p>
            <p className="text-foreground leading-relaxed">
              The true cost of running a WordPress site without proper maintenance is not visible until it happens: a site defaced or taken down by a plugin vulnerability that was patched three months ago, a traffic collapse because a plugin update introduced a redirect loop that nobody noticed for two weeks, or a Google manual action for cloaked content injected through a compromised theme. We have cleaned up all three for Malta businesses whose previous agency was "maintaining" the site for €80 per month. The maintenance retainer is not insurance — it is the engineering work that prevents the claim from ever arising.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Plugin Audit: How We Evaluate What Stays and What Goes</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The average Malta WordPress site we inherit has between 35 and 60 active plugins. The average site we ship has fewer than twelve. The difference is not capability — it is deliberate curation. Every plugin in a WordPress installation is a surface for security vulnerabilities, a contributor to page-load time, a potential source of PHP conflicts on updates, and an ongoing maintenance commitment. We evaluate each plugin against three criteria before deciding whether it stays, is replaced, or is removed.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The first criterion is <strong className="text-foreground">active maintenance</strong>: a plugin that has not been updated in 24 months is a liability regardless of whether it currently functions correctly. PHP and WordPress core updates will eventually break it, and the maintainer may not be reachable when that happens. The second criterion is <strong className="text-foreground">singular purpose</strong>: a plugin that does six things (contact forms, popups, cookie consent, newsletter signup, social sharing, and a page builder) should be replaced by five purpose-specific plugins or, better, by custom blocks for the features the site actually needs. Multi-feature plugins are the most common source of plugin conflicts and the hardest to audit for security. The third criterion is <strong className="text-foreground">performance impact</strong>: we test each plugin individually using Query Monitor to measure its database query count and execution time per request. A plugin that adds eight database queries to every page load — including pages where it does nothing — is removed regardless of what it does.
            </p>
            <p className="text-foreground leading-relaxed">
              The result of a full plugin audit is a written report listing each plugin evaluated, the recommendation (keep, replace, remove), and the rationale. For inherited sites, clients typically discover that between ten and twenty plugins can be removed immediately with no loss of functionality — and that three or four plugins are doing critical jobs that were never documented anywhere and would not have been caught without the audit. The report becomes part of the site&apos;s maintenance documentation and is updated every six months as part of the managed-hosting engagement.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Staging Environments and the Deployment Workflow</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Consistent deployments are the foundation of a maintainable WordPress site. Without a documented, repeatable deployment process, critical updates get skipped because nobody wants to be the person who broke the live site, and eventually a plugin with a known critical CVE stays unpatched for months because the deployment process is too fragile to run safely.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Every OARC WordPress project runs with a three-environment model: local development (the developer&apos;s machine), staging (a private replica of the production environment used for client review and pre-launch testing), and production (the live site). Changes are made on local, tested on staging with the client, and only then deployed to production. The staging environment uses the same PHP version, the same plugin versions, and the same database content as production — copied via WP Migrate DB Pro on a weekly basis and on demand before any significant update. This means that a change tested on staging will behave identically on production, and a bug found on staging is found before users encounter it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Deployments use Git-based push-to-deploy on Kinsta and WP Engine, or WP CLI over SSH on other managed hosts. The theme and plugin code is version-controlled in Git; the database and uploaded media are not (these are synced via the migration tool). Every production deployment is preceded by an automated backup so that the rollback procedure in the event of a failed deployment is a two-click restore in the hosting dashboard rather than a manual database export. For clients on the managed maintenance plan, the deployment log — date, what changed, who approved it, outcome — is delivered as part of the monthly maintenance report.
            </p>
            <p className="text-foreground leading-relaxed">
              The staging URL is password-protected (HTTP Basic Auth at the server level) so that search engines do not index the staging content and create duplicate-content issues before launch. The staging robots.txt disallows all crawlers regardless of the HTTP auth, providing a second layer of crawl-block. After launch, the staging site&apos;s robots.txt is reviewed to confirm the Disallow: / directive is still present — it should remain in place for the life of the staging environment, since staging content being indexed would create duplicate signals against the live production pages.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Multisite for Malta Organisations With Multiple Brands</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WordPress Multisite allows a single WordPress installation to host multiple distinct websites under one admin dashboard, sharing the same codebase, plugin set, and hosting resource while maintaining separate content, user bases, themes, and domain names. For Malta organisations running several brands, divisions, or franchise locations, Multisite reduces the hosting cost, the maintenance overhead, and the time to spin up a new sub-site significantly compared to managing separate WordPress installations.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We configure Multisite for three Malta use cases: a hospitality group with five to ten property websites that share a booking-engine plugin, a brand identity, and a common footer but have separate content and local management teams; a professional services firm with practice-area microsites (corporate, litigation, employment) that share the parent brand but maintain separate service listings and separate contact forms routed to different teams; and a franchise brand where each franchisee manages their own location page within a shared theme template without access to the network settings or other franchisees&apos; content.
            </p>
            <p className="text-foreground leading-relaxed">
              Multisite adds complexity in three areas that require careful planning: plugin compatibility (not all plugins support Multisite network activation correctly, and the plugin audit step includes a Multisite compatibility check before any plugin is activated network-wide); domain mapping (each sub-site needs its own domain or subdomain mapped correctly in the web server configuration, with individual SSL certificates managed through Let&apos;s Encrypt or the hosting platform&apos;s certificate manager); and user role governance (network administrators have access to all sites, which requires that role to be restricted to IT staff rather than brand managers, with site administrator roles scoped to the individual site only).
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Security Hardening: The Baseline Every Malta Site Needs</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WordPress powers more than 40% of the web and is the most-targeted CMS by automated scanners, credential stuffers, and plugin-exploit kits. A Malta business running a default WordPress installation on shared hosting with no security hardening is not a question of if it will be compromised — it is a question of when. The attack surface is well-understood, the mitigations are mostly free, and we apply all of them as standard on every build.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The baseline hardening checklist covers: relocating or renaming the wp-admin path to a non-default URL to eliminate the brute-force attack surface (automated credential stuffing targets /wp-admin universally); enforcing two-factor authentication on all admin accounts using the WP 2FA plugin; disabling the XML-RPC endpoint, which is unused by modern Gutenberg-based sites and is a common attack vector for DDoS amplification and brute-force login; hiding the WordPress version number from page source, login error messages, and the generator meta tag so scanners cannot target the specific vulnerability set for the installed version; installing Wordfence or Solid Security for file-change monitoring and IP-based login lockout after five failed attempts; and configuring the web host&apos;s firewall to block requests matching known WordPress exploit signatures before they reach the application.
            </p>
            <p className="text-foreground leading-relaxed">
              Ongoing security maintenance covers weekly plugin and core updates applied to staging first, monthly review of the Wordfence scan log for file changes or suspicious login attempts, and immediate response (within four hours on business days) to any critical CVE affecting an installed plugin or theme. The response protocol is documented in the maintenance agreement and has never required more than two hours to remediate on any OARC-managed site to date — because the site is on managed hosting with one-click restore, and the staging environment means the patch can be tested in minutes rather than deployed blind to production.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress Performance Benchmarks: What Good Looks Like for Malta Sites</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The targets we commit to at project delivery for a Malta WordPress site on managed hosting are: Largest Contentful Paint under 2.5 seconds on a simulated 4G connection measured from a London WebPageTest node; Time to First Byte under 600 milliseconds, which is achievable on Kinsta or WP Engine EU-west nodes with full-page caching enabled; Cumulative Layout Shift below 0.1, achieved by reserving explicit dimensions for all images and embeds and avoiding layout-shifting font loading; and a Google PageSpeed Insights mobile score of 85 or above. These numbers are not aspirational — they are the baseline for a site configured correctly, and we do not deliver below them.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The most common causes of poor Core Web Vitals on inherited Malta WordPress sites are: render-blocking scripts added via plugins that fire synchronously in the document head rather than asynchronously; images served at full original resolution without srcset or modern format conversion; a page builder (Divi, Elementor, WPBakery) that loads its full asset bundle on every page including pages that use none of its features; and a hosting configuration without object caching, serving PHP-rendered HTML on every request including repeat visitors. Each cause has a specific fix, and the fix priority is determined by how much LCP improvement each change delivers — measured before and after with WebPageTest so the client can see the delta.
            </p>
            <p className="text-foreground leading-relaxed">
              For WooCommerce stores with complex product catalogues, checkout performance gets separate attention because the checkout pages cannot be cached (they contain cart state, customer session data, and anti-CSRF tokens). We benchmark checkout page load separately from marketing pages and optimise the checkout specifically: deferring all analytics tags until after the order-confirmation step, lazy-loading the payment widget JavaScript until the customer reaches the payment step, and pre-connecting to payment gateway domains on the cart page so the DNS resolution is complete before the customer clicks Pay.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Multilingual WordPress for Malta&apos;s Bilingual Market</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Malta has two official languages — Maltese and English — and a significant proportion of the population is functionally trilingual, adding Italian as a third language absorbed through decades of Italian television. For Malta businesses in hospitality, retail, and professional services, a bilingual or trilingual website is not a nice-to-have; it is a competitive signal that the business is serious about serving the full local audience and the tourist market simultaneously.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We build multilingual WordPress sites using WPML or TranslatePress, configured for Maltese, English, and optionally Italian or German audiences. Each language variant is served from a subdirectory URL structure (/mt/ for Maltese, /en/ as the canonical, /it/ for Italian) with the correct hreflang cluster emitted in the HTML head and in the XML sitemap so Google indexes each language variant independently. The language switcher is accessible at the header level on every page, implemented as a visible link rather than a flag-only icon so search engines can crawl between language versions.
            </p>
            <p className="text-foreground leading-relaxed">
              Content translation is handled through one of two workflows depending on the client&apos;s team: a CMS-based translation workflow where the content editor creates the Maltese version in the WordPress admin directly alongside the English original, or a professional translation brief sent to a vetted Maltese translator using the WPML translation management system and the resulting translated strings imported back automatically. AI-translated content is used only for a first-draft pass — Maltese is a Semitic language with an entirely different morphological structure from English and does not translate reliably using current AI translation tools without a native-speaker review step.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress SEO: What the Built-In Tools Do — and What They Cannot</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WordPress has a deserved reputation as the most SEO-friendly CMS for content-heavy sites. Rank Math or Yoast handles the meta layer — title, description, canonical, XML sitemap, schema markup for articles and local businesses. The Gutenberg block editor formats content semantically by default — headings are headings, not styled divs — and the block-level control over internal links, table of contents, and anchor text is better than anything inside Webflow or Squarespace.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              What WordPress cannot do is fix a slow server, a poorly cached page, or a topic strategy that targets keywords no one searches for. We wire Rank Math Pro on every build, configure the XML sitemap to exclude tag and author archives that dilute crawl budget, set up GSC and Bing Webmaster Tools verification on day one, and generate the Schema.org LocalBusiness markup with the client&apos;s NAP (name, address, phone) baked into the theme so it appears on every page rather than just the contact page. Every build ships with an initial topic cluster plan for the first twelve blog posts — the keyword gap between what the client ranks for and what their nearest competitor ranks for, ordered by estimated traffic and mapped to the editorial calendar.
            </p>
            <p className="text-foreground leading-relaxed">
              What the ongoing SEO retainer adds on top of the build is a monthly internal-link audit, a content-gap sweep, and a Core Web Vitals trend report so the client knows whether new plugins or large media added by the editorial team have eroded the performance baselines established at launch. SEO is not a launch event; it is a maintenance discipline. The difference between a Malta business that ranks and one that does not is almost always whether anyone is monitoring the signals three months after go-live.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Headless WordPress: When the Block Editor Is Not Enough</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For clients who need the editorial experience of WordPress — the block editor, user roles, editorial workflow, media library — but the front-end performance of a Next.js or Astro site, we build headless WordPress deployments. The WordPress installation runs on a managed server as the CMS and API only; the public-facing site is a React front end fetching content from the WordPress REST API or WPGraphQL and pre-rendering it at build time or on the edge.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The result is Lighthouse scores in the 95–100 range on mobile, sub-second LCP on a 4G connection for any content type, and the full editorial power of the block editor for the content team. The cost is complexity: a headless WordPress stack has two deployment targets, two sets of environment variables, and two build pipelines to maintain. It is the right call for Malta publishers, large hospitality groups managing dozens of property pages, and SaaS companies whose marketing site needs to load quickly while the product UI is a separate React application. It is not the right call for a five-page service company that posts one blog per month.
            </p>
            <p className="text-foreground leading-relaxed">
              Where we build headless, we provision the Next.js front end on Vercel (EU region), the WordPress back end on Kinsta or WP Engine, deploy through GitHub Actions, and include a preview environment so the editorial team can see draft content without the complexity leaking into the content workflow. The CMS editor experience is identical to standard WordPress — no additional training is needed for the writing team.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Editorial Workflow Setup Most Agencies Skip</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Almost every Malta WordPress site we inherit has the same editorial problem: everyone logs in as an administrator, there are no draft-review steps, and the editorial calendar lives in a WhatsApp thread. On a site with three editors and a monthly cadence it barely matters. On a site with twenty contributors or a daily publishing rhythm, the absence of a workflow is a source of constant noise, near-misses on published drafts, and regression when an editor breaks a layout while trying to update a post.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our standard editorial setup on every WordPress build includes: role hierarchy (subscriber, contributor, author, editor, administrator) configured so that contributors cannot publish without editor approval; the Nelio Content or CoSchedule integration for a visual editorial calendar; staging environment access for editors without access to the production database; and a documented policy on media file naming, image dimensions, and alt-text standards so the media library is searchable two years later. Where the client needs a structured content review gate — legal review for financial services content, brand review for franchise operators — we configure a custom workflow using the PublishPress plugin so the gate is enforced by the system rather than by a Slack reminder.
            </p>
            <p className="text-foreground leading-relaxed">
              For hospitality and real-estate clients in Malta managing seasonal content updates across multiple properties, we also build a simple CSV import workflow for bulk property or accommodation metadata updates — the content manager uploads a spreadsheet, the import plugin validates the data and previews the changes, and the editor approves before any change touches the live site. It removes the bottleneck of one-by-one admin edits for repetitive seasonal data without requiring custom development on every update.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">WordPress for Malta Industries: Hospitality, Legal, Property</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The three Malta industries that benefit most from a well-built WordPress site are hospitality and accommodation, legal and professional services, and real-estate agencies. Each has specific structural requirements that a generic theme build will get wrong.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Hospitality and accommodation</strong> — Malta has more than 40,000 licensed tourist beds and a multi-channel distribution challenge: direct bookings on the hotel website compete against Booking.com and Expedia, and the margin difference is roughly 15 to 25 percent per room. A WordPress site that integrates directly with the property management system (Mews, Cloudbeds, or Opera Cloud) via a booking-engine widget and tracks the booking source in GA4 gives revenue managers the data to optimise channel mix. We build the integration, configure the Schema.org LodgingBusiness markup with correct address, phone, check-in time, and amenity data so the property appears correctly in Google Search&apos;s Hotel pack, and wire the Klaviyo post-stay email sequence for repeat-booking recovery.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Legal and professional services</strong> — A Maltese law firm or accountancy practice needs a site that conveys authority, ranks for service-plus-location keyword combinations (e.g. "employment law Malta", "company formation Malta"), and converts visitors to consultation bookings without a generic contact form. We build structured practice-area landing pages with FAQ schema, attorney bio pages with Person schema linked to the firm&apos;s Organisation entity, and a Calendly or HubSpot Meetings integration so prospective clients book a slot rather than waiting for a callback. GDPR-compliant cookie consent and a clear data-retention notice are wired from day one — regulated professionals cannot afford a consent-related complaint.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">Real-estate agencies</strong> — Malta&apos;s property market — Sliema, St Julian&apos;s, Valletta, Gozo — generates significant search intent that most estate agent sites fail to capture because their property listing pages have thin content and no structured data. We build custom post types for properties with Listing schema, searchable by location, type, price range, and number of bedrooms; a map integration using Google Maps or Mapbox showing property locations clustered by area; and an email alert system so registered buyers hear about new listings in their saved search before the agent has sent the manual email. The SEO gain from a properly structured listing page versus a generic real-estate template is typically two to four positions on Malta-specific property search terms within sixty days of launch.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Multisite, Staging, and the Deployment Pipeline</h2>
            <p className="text-foreground leading-relaxed mb-4">
              WordPress Multisite allows a single installation to serve multiple domain-mapped sites from one admin dashboard — the right structure for a hospitality group with eight properties, a franchise network, or a publisher managing regional editions of the same publication. Each site shares the core codebase, the plugin set, and the server resources while maintaining its own database tables, media library, and theme configuration. We provision Multisite networks on hosts that support it correctly (Kinsta, WP Engine, GridPane) and configure domain-mapping, shared plugin licensing, and superadmin-level access so the network administrator can push plugin updates to all child sites from one place without logging into each one.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Every WordPress build includes a staging environment that mirrors production: same PHP version, same plugin versions, same database export from the previous Sunday, and the same CDN and caching configuration. Staging is where theme updates and plugin upgrades are tested before they reach production — not in a developer&apos;s local environment, which may differ on PHP version, object-cache configuration, or server software. A broken plugin update discovered on staging costs ten minutes; the same update discovered on production during a busy booking period costs differently. We configure staging with basic HTTP auth so it is not indexed by search engines and not accessible to site visitors, and we sync production content to staging weekly via an automated script.
            </p>
            <p className="text-foreground leading-relaxed">
              The deployment pipeline for sites that require it — publishers updating templates frequently, agencies managing multiple client sites — runs through GitHub Actions: a pull request triggers a deploy to staging, a code review approves the merge, and the main branch deploys to production automatically or with a manual approve gate depending on the client&apos;s risk tolerance. Database migrations run via WP-CLI inside the pipeline with a snapshot taken before each migration so rollback is a two-minute command rather than a support ticket. The pipeline is documented in the repository README so a new engineer can understand and operate it without a verbal handover.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Five Metrics We Watch on Every WordPress Site After Launch</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most WordPress maintenance contracts focus on the server going up and the plugins staying updated. That is necessary but insufficient. The metrics that actually tell you whether the site is doing its job are different, and we track them in every managed-hosting engagement.
            </p>
            <div className="space-y-3 mb-4">
              {[
                { metric: "Core Web Vitals (LCP, CLS, INP)", detail: "Measured from real users via Chrome UX Report, not lab scores. A plugin update or a new video embed can degrade LCP by 400ms without anyone noticing. We alert on regressions above 10% in any metric within 48 hours of detecting the change." },
                { metric: "Crawl budget usage", detail: "Google Search Console coverage report reviewed monthly. Tag archives, author pages, date archives, and paginated search results that were excluded at launch can creep back in after a plugin update. An unchecked crawl-budget drain quietly reduces how often new content gets indexed." },
                { metric: "Uptime and time-to-first-byte (TTFB)", detail: "Monitored from Malta and London endpoints every minute. TTFB above 800ms typically means the server cache has been bypassed — usually a logged-in user invalidating a cache segment on a shared-hosting plan." },
                { metric: "Search Console click-through rate by page", detail: "Pages with strong impressions but low CTR are candidates for title and description rewrites. A 1% CTR improvement on a page with 50,000 monthly impressions is 500 additional clicks per month at zero media spend." },
                { metric: "Goal completions and assisted conversions", detail: "GA4 conversion events for form submissions, phone-number clicks, booking completions, and live-chat initiations. We flag pages where sessions are high and goal completions are low — usually a form that broke during a plugin update or a CTA that scrolled below the fold on mobile." },
              ].map((item) => (
                <div key={item.metric} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When WordPress Is Not the Right Answer</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We build WordPress because it is the best tool for a specific job — not because it is the only tool we know. There are four situations where we recommend something else and tell clients clearly before taking any money.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">If your primary business is ecommerce with a catalogue above 500 SKUs and aggressive growth plans:</strong> Shopify is a better fit. WordPress and WooCommerce scale to ecommerce, but the operational overhead — plugin maintenance, performance tuning, payment gateway certification, and subscription management — increases non-linearly with catalogue and order volume. Shopify removes those failure modes at the cost of lower editorial flexibility.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">If you are building a SaaS product or a web application with user accounts and subscriptions:</strong> WordPress is not the right foundation. The plugin ecosystem can simulate many application behaviours, but the data model, the authentication layer, and the hosting requirements of a real application are fundamentally different from a CMS. Start with a purpose-built stack.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong className="text-foreground">If you are a small service business that will publish fewer than four blog posts per year and does not need to update site content regularly:</strong> a simpler static site on Webflow or Framer with a lower maintenance overhead is a proportionate choice. WordPress is worth its operational weight only when the editing capability is actually used.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong className="text-foreground">If design innovation is the primary brief and the design cannot live inside any grid or block:</strong> a custom Next.js or Astro build with a headless CMS (Sanity, Contentful, or Payload) gives the designer full creative control without the constraints of the block editor&apos;s layout model. We build those too — and we will tell you if your creative brief belongs there.
            </p>
          </section>
          <RelatedServices slug="/services/wordpress-development" />
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Site Slow or Outdated?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will audit your current WordPress installation free and send you a refresh-or-rebuild recommendation in five working days.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
