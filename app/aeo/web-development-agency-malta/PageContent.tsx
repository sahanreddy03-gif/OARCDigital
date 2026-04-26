import Layout from '@/components/layout/Layout';
import RelatedLinks from '@/components/RelatedLinks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { NAP } from "@/lib/seo/nap";

interface Faq { question: string; answer: string; }
interface Offer { name: string; priceFrom: number; unitText?: string; description?: string; }
interface Props { faqs: Faq[]; offers: Offer[]; }

const platforms = [
  { name: 'WordPress', detail: 'Editorial-led marketing sites where the team needs to publish weekly. Custom block editor, ACF Pro, EU managed hosting.' },
  { name: 'Webflow', detail: 'Designer-led brands where speed of iteration matters more than developer custom code. CMS-led marketing sites.' },
  { name: 'Shopify', detail: 'Ecommerce — Malta retail brands selling locally and internationally. Theme customisation, integrations, B2B portals.' },
  { name: 'Next.js custom', detail: 'High-traffic, SEO-critical, or product-plus-marketing combined builds. SaaS marketing sites and content engines.' },
];

const phases = [
  { week: 'Week 1', title: 'Discovery + IA', detail: 'Stakeholder workshop, content audit, sitemap, wireframes, technical SEO baseline, redirect map for migrations.' },
  { week: 'Week 2–3', title: 'Design', detail: 'Hi-fi design in Figma — homepage, three template patterns, components library. Two design rounds included.' },
  { week: 'Week 4–7', title: 'Build', detail: 'Front-end build, CMS configuration, integrations, on-page SEO, structured data, page-speed optimisation.' },
  { week: 'Week 8', title: 'QA + Launch', detail: 'Cross-browser QA, accessibility check, 301 redirect verification, DNS cutover, post-launch crawl, training.' },
];

export default function WebDevelopmentAgencyMalta({ faqs, offers }: Props) {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Web Development Agency Malta</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Answer Engine Optimised</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Malta Web Development Agency That Ships Fast Sites</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              OARC Digital builds custom WordPress, Webflow, Shopify, and Next.js sites from a Birkirkara studio. Conversion-focused, EU-hosted, Core Web Vitals at launch.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"><Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Brief us on your build <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={`tel:${NAP.phoneE164}`}><Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button></a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Choosing a Web Development Agency in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most Malta business websites underperform for one of three reasons. The first is platform mismatch — a Webflow site for a content-heavy news brand, or a custom Next.js build for a five-page brochure site. The second is hosting — an Australian-hosted WordPress site loading first-byte from Sydney while the buyer is in Sliema. The third is migrations gone wrong — a redesign that lost 40% of organic traffic because nobody mapped the redirects from the old URL structure.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              OARC Digital fixes all three before they happen. We pick the right platform for the brief in week one rather than defaulting to whatever the team built last. We host every Malta client in EU regions — typically Cloudways Frankfurt for WordPress, Vercel eu-west-1 for Next.js, Webflow&apos;s native CDN, or Shopify&apos;s built-in. And we treat the redirect map as a delivery artefact: every old URL gets a one-to-one 301 to the new structure, verified post-launch with a full crawl.
            </p>
            <p className="text-foreground leading-relaxed">
              The result is a Malta web build that loads in under a second from local devices, ranks in Google Malta from launch, and converts at the rate the brief promised — not three rounds of revisions later.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Platforms We Build On</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="p-4 rounded-xl bg-card border">
                  <div className="font-bold mb-1">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The 8-Week Build Process</h2>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.title} className="p-5 rounded-xl bg-card border">
                  <div className="text-xs uppercase tracking-wider text-orange-500 font-bold mb-2">{p.week}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Migrations Without Ranking Loss</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The single biggest risk on a Malta web project is rebuilding a site that already has organic visibility and losing it overnight. Every OARC migration starts with an Ahrefs and Search Console export — the URLs currently ranking, the keywords driving traffic, and the internal-link equity flowing to each. We map every URL one-to-one to the new structure with a 301, audit the new sitemap against the old, and run a post-launch crawl on day one and again at day 14 to catch anything missed.
            </p>
            <p className="text-foreground leading-relaxed">
              Zero ranking loss is the standard, not the exception. Several recent Malta migrations gained organic traffic in the first 60 days post-launch because the new build also lifted Core Web Vitals from poor to good — a ranking factor in its own right.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Transparent Pricing</h2>
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
                <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-orange-500" /><a href={`tel:${NAP.phoneE164}`} className="text-foreground hover:text-orange-600">{NAP.phoneDisplay}</a></div>
                <div className="flex items-center gap-3 mb-3"><Mail className="w-5 h-5 text-orange-500" /><a href={`mailto:${NAP.email}`} className="text-foreground hover:text-orange-600">{NAP.email}</a></div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-orange-500" /><span className="text-foreground">Mon – Fri, 09:00 – 18:00 CET</span></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">EU-region hosting on every project</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Core Web Vitals green at launch</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500" /><span className="text-sm text-foreground">Migrations with zero ranking loss</span></div>
              </div>
            </div>
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

          <RelatedLinks slug="/aeo/web-development-agency-malta" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Planning a new website?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">A 30-minute brief and we&apos;ll come back with a platform recommendation, a fixed-price proposal, and a launch date.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Brief us today <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
