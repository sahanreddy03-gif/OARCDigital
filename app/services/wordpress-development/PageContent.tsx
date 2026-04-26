import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["wordpress-development"];

const phases = [
  { title: "Discovery, content audit, hosting plan (week 1)", detail: "We map the URL structure to migrate, the plugins to keep, the plugins to retire, and the hosting topology — usually Cloudways, Kinsta, or WP Engine in EU regions for Malta clients." },
  { title: "Theme and block design (weeks 2–4)", detail: "Custom block-based theme using the modern WordPress block editor (Gutenberg) so your team can edit pages without breaking the layout. No page-builder lock-in." },
  { title: "Migration and 301 redirect map (week 5)", detail: "Full content migration with a one-to-one 301 redirect map preserving every backlink and ranking signal. Zero traffic loss is the standard, not the exception." },
  { title: "Launch, security hardening, training (week 6)", detail: "Wordfence or iThemes Security, daily off-site backups, restricted login, two-factor admin, and a 60-minute Loom training for your team to take over content updates." },
];

export default function WordPressDevelopmentContent() {
  return (
    <Layout>
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">WordPress Development for Malta Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Custom WordPress builds, theme design, plugin development, and managed maintenance — fast, secure, and built to be edited by your team without breaking.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a WordPress audit <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
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
            <TrustBlock slug="wordpress-development" />
          </section>
          <RelatedLinks slug="/services/wordpress-development" />
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
