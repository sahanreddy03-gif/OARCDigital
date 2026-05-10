import Layout from "@/components/layout/Layout";
import RelatedLinks from "@/components/RelatedLinks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Search, TrendingUp, Globe2, BarChart3 } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";

import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";
const SCHEMA = SERVICE_SCHEMAS["seo-services"];

const phases = [
  { title: "Technical & on-page audit (week 1)", detail: "Crawl, Core Web Vitals, schema, internal-link graph, indexation, hreflang for English/Maltese/Italian, plus competitor SERP mapping for the keywords that actually move revenue in Malta." },
  { title: "Local + national keyword strategy (week 2)", detail: "Maltese English search behaviour is unusual — buyers mix UK English, US English, and Maltese phrasing. We build clusters around how Malta actually searches, not how a London agency assumes it does." },
  { title: "Content production + on-page fixes (weeks 3–8)", detail: "Pillar pages, location pages for Sliema, St Julian's, Birkirkara, Mosta, Valletta and Gozo, FAQ schema, internal linking, image optimisation, and topical authority articles tied to commercial intent." },
  { title: "Authority and digital PR (months 2–6)", detail: "Citations on relevant Malta directories, partnerships with local publications, niche-relevant guest content, and unlinked-mention reclamation. We do not buy spam links." },
  { title: "Reporting and iteration (ongoing)", detail: "Monthly written report covering ranking deltas, organic traffic by intent cluster, conversions, and a written next-month plan. Quarterly business review measured in pipeline, not impressions." },
];

const proofPoints = [
  { metric: "47%", label: "average organic traffic lift in 6 months across Malta clients" },
  { metric: "12+", label: "Malta-specific keyword clusters mapped (legal, hospitality, iGaming, real estate)" },
  { metric: "0", label: "spam-link tactics — every link is editorial and reviewed" },
];

export default function SeoServicesContent() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">SEO Services</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Search Visibility</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-speakable>SEO Services for Malta-Based Businesses</h1>
            <p className="text-xl text-zinc-300 leading-relaxed mb-8" data-speakable>
              Six-month organic growth programmes built specifically for the Malta market — its mixed-language search behaviour, its tight competitive set, and its outsized reliance on tourism and iGaming demand cycles.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">Book a free SEO audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <a href={`tel:${NAP.phoneE164}`}>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button>
              </a>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Generic SEO Fails in Malta</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Malta search market has three quirks that wreck imported playbooks. First, search volumes are small — a query like &quot;accountant Sliema&quot; might attract only forty searches a month, which is enough to build a real business but invisible to tools calibrated for the UK or US. Second, Malta searchers fluently switch between English, Maltese, and Italian within the same query session, so your page architecture has to handle three languages without diluting authority. Third, the country is geographically small, so users rarely add city qualifiers — ranking for &quot;dentist Malta&quot; matters far more than you would assume from international SEO logic.
            </p>
            <p className="text-foreground leading-relaxed">
              OARC Digital&apos;s SEO team works on Malta accounts every day. We know which directories carry weight in Malta, which Maltese publications still pass authority, and which iGaming and hospitality keyword clusters are over-saturated versus genuinely winnable. The result is a search programme that compounds rather than chasing rankings that never convert into local revenue.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A 6-Month Programme, Phase by Phase</h2>
            <div className="space-y-4">
              {phases.map((p, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Actually Build For You</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Search visibility on its own is a vanity metric. Every deliverable in an OARC SEO retainer maps back to revenue or qualified leads — that is non-negotiable. Below is what a typical Malta client receives across a six-month engagement.
            </p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What Malta SEO Clients See in 6 Months</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {proofPoints.map((p, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{p.metric}</div>
                  <p className="text-sm text-muted-foreground">{p.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Industries We Win In</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We have shipped SEO work for hospitality groups around Sliema and St Julian&apos;s, iGaming operators in the CBD, professional-services firms in Valletta and Birkirkara, real-estate agencies covering the central and southern harbour areas, and SaaS companies operating internationally from Malta. Each industry has a different search ceiling and a different competitive density — a hospitality client can dominate non-brand search in 4 months, while a generalist legal firm needs 9 to 12.
            </p>
            <p className="text-foreground leading-relaxed">
              When you book the audit, the first thing we do is plot your industry on that map and tell you honestly whether SEO is your best lever right now or whether paid search would compound faster. We will not sell you the wrong service.
            </p>
          </section>

          <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What Sets Malta SEO Apart in 2026</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Malta is a small, hyper-saturated search market — one of the few EU territories where a single keyword like "web design Malta" carries the same commercial weight that an entire metro area would in mainland Europe. The local pack is contested by a tiny number of agencies who all share the same client base, the same backlink sources, and increasingly the same AI-generated content. Standing out in 2026 means treating SEO as an editorial and product discipline, not a checklist of meta-tag tweaks.
              </p>
              <p className="text-foreground leading-relaxed">
                Our retainers focus on three durable advantages. First, we publish first-party data — Malta-specific benchmarks, locally sourced quotes, and original research that other Malta sites then have to cite. Second, we build deep topical authority around niches like iGaming, hospitality, and fintech where the .com.mt search audience is willing to pay a premium for expertise. Third, we wire every page to llms.txt and Schema.org JSON-LD so AI assistants can quote our clients verbatim when a buyer asks ChatGPT or Perplexity for recommendations.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting You Can Actually Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Every monthly report is written, not auto-generated. We pair Search Console and GA4 data with a one-page commentary explaining what moved, why it moved, and what we are doing next month. Ranking dashboards are included for the tracked keyword set, but the headline metric is always organic-attributed pipeline revenue — measured in euros, not impressions. Clients see a calibrated forecast for the next 90 days alongside the historical trend, so the conversation in the boardroom is about ROI rather than vanity scores.
              </p>
              <p className="text-foreground leading-relaxed">
                We also share the raw inputs: the keyword tracker, the backlink prospect list, the technical issue log, and the Google Business Profile review pipeline. If a client wants to take the work in-house at any point, the entire SEO operating system transfers across — no proprietary dashboards, no opaque scoring formulas, no exit fee.
              </p>
            </section>
            <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-muted-foreground mb-6">Three transparent tiers. No setup fees, no annual lock-in.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {SCHEMA.offers.map((offer) => (
                <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                  <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
                </div>
              ))}
            </div>
          </section>

          
          <MaltaContextBlock slug="seo-services" />
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

          <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-3">SEO vs Paid Ads vs Content Marketing — which should you start with?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              SEO builds a compounding organic asset — once rankings are earned, traffic arrives without paying per click. It takes 4–9 months before results compound. <strong className="text-foreground">Paid advertising</strong> delivers results in days but stops the moment the budget stops. <strong className="text-foreground">Content marketing</strong> builds topical authority and feeds both SEO and AI search citations, but relies on SEO infrastructure to distribute the content.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              For most Malta SMEs: if you need pipeline in 30 days, start with paid. If you are willing to invest 6 months in a channel that pays back for 3 years, start with SEO. If you want to be cited by ChatGPT and Perplexity alongside organic rankings, you need content. Most OARC retainer clients run SEO and content in parallel, with paid supplementing high-intent keywords where organic is not yet ranked.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/services/paid-advertising" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Paid Advertising — results in 48 hours <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/content-marketing" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm">
                Content Marketing — authority and AI citations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <RelatedLinks slug="/services/seo-services" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want a Free Malta SEO Audit?</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">We will crawl your site, plot your gap against the top three Malta competitors, and send you a 90-day plan with no obligation.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
