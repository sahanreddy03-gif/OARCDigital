import Layout from "@/components/layout/Layout";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, Search, TrendingUp, Globe2, BarChart3, Shield } from "lucide-react";
import Link from "next/link";
import { SERVICE_SCHEMAS } from "@/lib/seo/serviceSchemaConfig";
import ScrollReveal from "@/components/ScrollReveal";
import MaltaContextBlock from "@/components/seo/MaltaContextBlock";
import TrustBlock from "@/components/seo/TrustBlock";
import { NAP } from "@/lib/seo/nap";

const SCHEMA = SERVICE_SCHEMAS["seo-services"];

const heroImage = "/attached_assets/16_1763228440283.jpg";

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  name: "World map with magnifying glass representing global SEO discovery and search visibility for Malta businesses",
  description: "A world map overlaid with a magnifying glass, representing search engine discovery and organic ranking strategy for Malta-based businesses targeting local and international markets.",
  url: "https://oarcdigital.com/attached_assets/16_1763228440283.jpg",
  width: 1200,
  height: 800,
  contentUrl: "https://oarcdigital.com/attached_assets/16_1763228440283.jpg",
};

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

const differentiators = [
  {
    icon: Search,
    title: "We build for how Malta actually searches",
    desc: "Malta searchers switch between English, Maltese, and Italian mid-session. A query like 'accountant Sliema' carries the same commercial weight as 'accountant London' on a volume-adjusted basis — but most SEO tools calibrated for the UK miss it entirely. We map clusters around Maltese intent, not imported playbooks.",
  },
  {
    icon: Globe2,
    title: "Local authority built on editorial, not spam",
    desc: "Malta has a small but tight directory and publishing ecosystem. We know which Malta directories pass real authority, which publications still carry link equity, and which iGaming and hospitality clusters are over-contested versus genuinely winnable. Every link we build is editorial and reviewed.",
  },
  {
    icon: TrendingUp,
    title: "AEO: we make you quotable by ChatGPT and Perplexity",
    desc: "In 2026, roughly one in three high-intent B2B queries starts inside an AI assistant. We wire every page for Answer Engine Optimisation — structured FAQ blocks, named entities, local references, and llms.txt — so our clients get cited verbatim by the AI tools their buyers use.",
  },
  {
    icon: BarChart3,
    title: "Reporting tied to revenue, not vanity",
    desc: "Every monthly report is written, not auto-generated. We pair Search Console and GA4 data with commentary explaining what moved, why it moved, and what we are doing next month. The headline metric is always organic-attributed pipeline — measured in euros, not impressions.",
  },
  {
    icon: Shield,
    title: "You own everything, no lock-in",
    desc: "The keyword tracker, backlink prospect list, technical issue log, and Google Business Profile review pipeline are all yours. If a client wants to take the work in-house at any point, the entire SEO operating system transfers across — no proprietary dashboards, no exit fee.",
  },
];

const industries = [
  { name: "Hospitality & tourism", detail: "Sliema and St Julian's hospitality groups can dominate non-brand search in 4 months. We target seasonal peaks, review velocity, and multi-language SERPs for tourism-dependent businesses." },
  { name: "iGaming operators", detail: "The CBD iGaming cluster is over-saturated on brand terms but genuinely winnable on regulatory, technical, and affiliate-adjacent content. We know where the gaps are." },
  { name: "Professional services", detail: "Law firms, audit practices, and financial advisers in Valletta and Birkirkara. Long decision cycles mean organic search is the highest-ROI channel when positioned correctly." },
  { name: "Real estate", detail: "Central and southern harbour area agencies. Property search in Malta is primarily English, with high commercial intent and low competition on long-tail location queries." },
  { name: "SaaS and fintech", detail: "Malta-based SaaS companies competing internationally. We build topical authority in niche verticals where a single pillar page can dominate EU-wide search if it carries enough original research." },
];

export default function SeoServicesContent() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      {/* HERO with photo from user's 40 images */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="World map with magnifying glass — representing search discovery and organic SEO visibility for Malta businesses in local and global markets"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            data-testid="img-hero-seo-services"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-900/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-28 z-10">
          <div className="flex items-center gap-2 mb-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">SEO Services</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Search className="w-3 h-3 text-orange-400" />
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Search Visibility</span>
          </div>
          <h1 data-speakable className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Own Page One.<br />
            <span className="text-orange-400 italic">Stop Renting It.</span>
          </h1>
          <p data-speakable className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            Six-month organic growth programmes built specifically for the Malta market — its mixed-language search behaviour, its tight competitive set, and its outsized reliance on tourism and iGaming demand cycles.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold" data-testid="button-book-audit">Book a free SEO audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
            <a href={`tel:${NAP.phoneE164}`}>
              <Button size="lg" variant="outline" className="border-white/20 text-white"><Phone className="mr-2 w-4 h-4" />{NAP.phoneDisplay}</Button>
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">Last updated: 10 May 2026</p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="py-12 px-6 bg-zinc-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {proofPoints.map((p, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/10 text-center" data-testid={`proof-${i}`}>
                <div className="text-3xl font-bold text-orange-400 mb-2">{p.metric}</div>
                <p className="text-sm text-zinc-400">{p.label}</p>
              </div>
            ))}
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
              <ScrollReveal key={i}>
                <div className="p-5 rounded-xl bg-card border">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-orange-500 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-bold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">{p.detail}</p>
                </div>
              </ScrollReveal>
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

        {/* DIFFERENTIATORS */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why OARC SEO is different</h2>
          <div className="space-y-4">
            {differentiators.map((d, i) => (
              <ScrollReveal key={i}>
                <div className="p-6 rounded-xl bg-card border flex items-start gap-5" data-testid={`diff-${i}`}>
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <d.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{d.title}</h3>
                    <p className="text-muted-foreground text-sm">{d.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Industries We Win In</h2>
          <p className="text-foreground leading-relaxed mb-6">
            Each Malta industry has a different search ceiling and a different competitive density. When you book the audit, the first thing we do is plot your industry on that map and tell you honestly whether SEO is your best lever right now or whether paid search would compound faster. We will not sell you the wrong service.
          </p>
          <div className="space-y-3">
            {industries.map((ind, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border flex items-start gap-4">
                <span className="text-orange-500 font-bold text-sm w-8 flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-bold mb-1">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground">{ind.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Sets Malta SEO Apart in 2026</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Malta is a small, hyper-saturated search market — one of the few EU territories where a single keyword like &quot;web design Malta&quot; carries the same commercial weight that an entire metro area would in mainland Europe. The local pack is contested by a tiny number of agencies who all share the same client base, the same backlink sources, and increasingly the same AI-generated content. Standing out in 2026 means treating SEO as an editorial and product discipline, not a checklist of meta-tag tweaks.
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
              <div key={offer.name} className="rounded-xl border p-6 bg-card flex flex-col" data-testid={`offer-${offer.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-bold text-lg mb-1">{offer.name}</h3>
                <p className="text-3xl font-bold text-orange-600 mb-1">€{offer.priceFrom}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">per {offer.unitText?.toLowerCase() ?? "month"}</p>
                <p className="text-sm text-muted-foreground flex-1">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SEO FOUNDATION */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical SEO: The Foundation Every Malta Site Needs</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Rankings built on thin technical foundations leak as fast as they are earned. Before a single new article is written, we run a technical audit that covers Core Web Vitals, crawl efficiency, JavaScript rendering, internal-link graph structure, canonical and hreflang implementation for English, Maltese, and Italian variants, and structured data coverage across every template. Most Malta websites we first touch fail at least three of these checks.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Core Web Vitals — Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint — are now weighted ranking signals in Google&apos;s helpful-content scoring. A site that loads in 4.2 seconds loses organic positions to an otherwise weaker competitor loading in 1.8 seconds. We fix the infrastructure before we add the content.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {[
              { title: "Crawl efficiency", desc: "Wasted crawl budget on URL parameters, session IDs, and infinite calendar pages is endemic on Malta hospitality and real-estate sites. We block the waste through robots.txt and canonical consolidation." },
              { title: "Structured data", desc: "LocalBusiness, FAQPage, Article, BreadcrumbList, and Service schema on every relevant template. A Malta page with correct schema outranks an identical page without it for Featured Snippet and Knowledge Panel eligibility." },
              { title: "Hreflang for multilingual pages", desc: "Maltese operators targeting UK, Italian, and local audiences need hreflang implemented at the sitemap level and confirmed in Search Console. Errors here cause international ranking cannibalization." },
              { title: "Internal-link graph health", desc: "Most Malta sites have orphaned pages — URLs with no inbound internal links — absorbing crawl budget and earning no PageRank distribution. We map and wire the graph before each new content layer is added." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GOOGLE BUSINESS PROFILE */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Google Business Profile Optimisation for Malta Businesses</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The local pack — the three-result map block that appears above organic results for location-intent queries — is the most valuable SERP real estate a Malta brick-and-mortar or service-area business can hold. GBP ranking correlates with proximity, review velocity, profile completeness, and the density of citation signals across Malta directories, Google Maps, and Apple Maps.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Every SEO retainer with a local footprint includes GBP management: consistent NAP across all directories, regular posts timed to Malta seasonal peaks (summer tourism, carnival, Independence Day, festas), Q&amp;A management, and a review-request cadence that complies with Google&apos;s policies. We do not incentivise reviews — we make it frictionless for satisfied customers to leave them.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For multi-location clients — restaurant groups with outlets in Sliema and St Julian&apos;s, or retail chains across Qormi, Mosta, and Birkirkara — we manage a separate GBP profile per location with location-specific keywords, images, and opening hours, and we suppress duplicate or unverified listings that dilute pack eligibility.
          </p>
        </section>

        {/* WHAT WE MONITOR MONTHLY */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">What We Monitor Every Month</h2>
          <p className="text-foreground leading-relaxed mb-6">
            SEO is not a set-it-and-forget-it channel. Algorithm updates, new competitor content, and new buyer behaviour patterns require ongoing observation. The following is what every OARC SEO retainer monitors on a rolling monthly basis.
          </p>
          <div className="space-y-3">
            {[
              { signal: "Core Web Vitals by page template", action: "Flag any template that degrades — caused by a plugin update, an image format regression, or a new tracking script." },
              { signal: "Ranking delta for all tracked keywords", action: "Identify keywords that moved up or down more than 3 positions week-over-week. Investigate winners to double down; investigate decliners for competitor content changes." },
              { signal: "Indexation changes", action: "New pages appearing as Discovered-not-indexed or Crawled-not-indexed often signal a technical issue or a quality signal below Google's indexation threshold." },
              { signal: "Backlink profile anomalies", action: "New links from unusual domains, sudden spikes in referring domains, or toxic anchor text accumulation trigger an immediate review and disavow if necessary." },
              { signal: "Organic-attributed pipeline by page cluster", action: "The metric the client&apos;s CFO cares about. If page cluster A is ranking but not converting, the content intent is wrong or the offer is wrong. We catch this and escalate it to the editorial team." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border flex items-start gap-4" data-testid={`monitor-${i}`}>
                <span className="text-orange-500 font-bold text-sm w-6 flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="font-medium text-foreground">{item.signal}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RANKING TIMELINE */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Honest Ranking Timeline for Malta Businesses</h2>
          <p className="text-foreground leading-relaxed mb-4">
            We will not promise first-page rankings in 30 days. For a new or technically weak Malta domain, the realistic SEO timeline is as follows: technical fixes implemented and confirmed in Search Console by the end of month one. New content indexed and appearing in the 20–50 position range by months two and three. First meaningful ranking lifts into position 5–15 on target keywords typically visible between months four and seven. Compounding organic traffic growth measurable in pipeline by month six or seven.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            The timeline accelerates for established domains with existing link equity and decelerates for new domains or domains that have had a manual penalty or manual action. We confirm domain history and existing signals in the audit before quoting a timeline.
          </p>
          <p className="text-foreground leading-relaxed">
            Paid search can fill the traffic gap while organic compounds. We recommend a combined strategy for clients who need pipeline in the first 90 days and are willing to invest in both channels. The OARC growth stack covers both — and the messaging is coordinated across organic and paid from the same team.
          </p>
        </section>

        <MaltaContextBlock slug="seo-services" />

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {SCHEMA.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-card border" data-testid={`faq-${i}`}>
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Voice Search and Featured Snippets in the Malta Market</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Voice search accounts for roughly 25% of all mobile searches in Malta — driven by the same Siri, Google Assistant, and Alexa adoption patterns as the UK market. Voice queries are conversational, longer, and structured as questions. A page optimised only for head keywords misses the voice-search audience entirely. Every OARC SEO retainer includes a structured question-and-answer layer on every target page — FAQ schema, Speakable markup, and a question-intent cluster mapped alongside the commercial-intent cluster.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Featured Snippets — the position-zero box above the standard organic results — are dominated by pages with clear, concise answers to specific questions in the first 100 words of a section. We identify Featured Snippet opportunities in the keyword research phase and brief every article to compete for them explicitly: structured headers, a one-sentence definition, a bulleted list, and the correct word count for each snippet format.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For Malta hospitality businesses, the highest-value Featured Snippet opportunities are around specific venue questions: &quot;best restaurant Sliema marina&quot;, &quot;private dining Valletta&quot;, &quot;hotel pool Mellieha&quot;. We target these with location-specific content, GBP posts, and structured data — building the SERP presence that voice assistants pull from when a visitor asks Siri on arrival at Malta International Airport.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">IndexNow and Sitemap Submission for Fast Indexation</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Google&apos;s crawl frequency for most Malta SME websites is low — weekly at best. A new article published on Monday may not be crawled until Friday, which delays the ranking signal and delays the revenue. We implement IndexNow — the Bing, Yandex, and third-party search engine ping protocol — and submit delta sitemap pings to Google Search Console within hours of every new publish. Most OARC clients see their new articles indexed within 24–48 hours of publication, not 5–7 days.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Every OARC SEO retainer also maintains a production sitemap architecture that separates content by type — blog articles, service pages, location pages, and industry hub pages — with appropriate change-frequency and priority tags. The sitemap is validated monthly against the live URL set so that deleted or 308-redirected pages are removed promptly and do not waste crawl budget.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For clients with programmatic page sets — location pages, industry pages, or product category pages generated at scale — we implement sitemap chunking and a last-modified header pipeline so Google can identify what changed in a 48-hour window without re-crawling 10,000 pages. This is standard for Malta-based iGaming and hospitality clients with large programmatic page sets but is rarely implemented by generic SEO agencies unfamiliar with server-side rendering.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Schema Markup: from LocalBusiness to FAQPage and Beyond</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Schema.org markup is the machine-readable layer that tells search engines — and AI answer engines — what a page is about, who the author is, what the service costs, and what questions the page answers. Most Malta websites have either no schema or only a basic LocalBusiness record on the homepage. A full schema deployment across every template is a structural ranking advantage.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            OARC deploys schema by template type. Service pages get Service and Offer schema with priceRange, areaServed (Malta, Gozo, EU), and aggregateRating if reviews are available. Blog articles get Article schema with dateModified, author, and publisher. FAQ pages get FAQPage schema with one QuestionAndAnswer block per common buyer question. Location pages get LocalBusiness with geo coordinates, opening hours, and NAP. The implementation is validated weekly against Google&apos;s Rich Results Test and the Schema.org validator.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">AEO: Making Your Site Quotable by AI Answer Engines</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Answer Engine Optimisation is the discipline of making a website&apos;s content citable by ChatGPT, Perplexity, Gemini, and Claude. AI answer engines do not rank pages the way Google does — they extract claims, validate them against named sources, and synthesise a response. A page that ranks fifth on Google but carries a clear primary claim, structured FAQ schema, a named author, and a date is more likely to be cited by an AI than a page that ranks first but lacks those signals.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Every OARC SEO retainer includes an AEO layer: Speakable schema on the top-10 commercial pages, a maintained llms.txt file listing the pages we want AI crawlers to prioritise, FAQ schema on every service and location page, and a quarterly review of which OARC client pages appear in AI assistant responses to the target queries. We track AEO performance in the monthly report alongside the standard organic metrics.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            For Malta businesses in regulated verticals — legal, financial, iGaming — AEO is particularly valuable because a buyer who asks an AI assistant &quot;which iGaming agency in Malta handles regulatory content?&quot; and receives a citation to your site has higher intent and higher trust than a buyer who found you through a standard organic result. The AI citation is an implicit endorsement that a 10th-link click on a search result page is not.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Reputation and Review Management for Malta Businesses</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Google reviews are a confirmed local-pack ranking signal and a decisive conversion factor for Malta service businesses. A hospitality group with 4.7 stars across 180 reviews outranks and outconverts a competitor with 4.1 stars across 14 reviews — regardless of the differences in their SEO programmes. Every SEO retainer with a local footprint includes a review velocity programme: automated post-transaction review requests via SMS or email, a negative-review early-warning system, and a monthly report on review count, velocity, and rating delta across Google, Facebook, and TripAdvisor where relevant.
          </p>
          <p className="text-foreground leading-relaxed">
            We do not incentivise reviews or coach clients on how to respond to negative reviews in ways that contravene Google&apos;s policies. The review velocity programme operates within platform guidelines and Malta consumer protection law at all times.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Link Building for Malta Businesses: What Works and What Does Not</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Backlinks remain a top-three ranking signal for Google, but the quality of the link matters more than the quantity. A single editorial mention in a Malta-relevant niche publication carries more authority than 100 links from a generic directory farm. We build links through three channels: digital PR (pitching Malta-relevant stories and data to journalists and editors who have covered the niche before), niche directory citation (Malta-specific business directories, industry associations, and trade bodies that carry real domain authority), and unlinked-mention reclamation (finding existing citations of your brand or content that have not been linked and asking for the link).
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            We do not buy links, participate in private blog networks, or engage in link exchanges. These tactics produce short-term ranking lifts that are systematically undone by Google&apos;s link-spam algorithm updates, and they accumulate a disavow liability that makes the domain harder to clean up later. Every link we build is editorial and can be shown to a client&apos;s board without embarrassment.
          </p>
          <p className="text-foreground leading-relaxed">
            For iGaming clients, the link-building constraints are the most specific: MGA-licensed operators cannot accept links from certain gambling-adjacent categories, and some Malta media groups have editorial policies that exclude paid content from link-eligible placements. We know these constraints before we pitch — they are mapped in the monthly link-building plan alongside the target publications and the editorial angle we are pitching.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Handle Your SEO Account Day-to-Day</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Every SEO retainer has a named account lead who attends the monthly reporting call, reviews every article brief before it goes to production, approves every link-building pitch before it goes to the publication, and signs off on every technical change before it goes to the developer. You do not get handed to a junior analyst after the proposal is signed.
          </p>
          <p className="text-foreground leading-relaxed">
            Between monthly calls, the account lead is available by email for questions about ranking movements, algorithm update impacts, and competitor activity. Significant algorithm updates — core updates, spam updates, helpful-content updates — receive a written impact assessment within 48 hours of the update being confirmed by Google. We do not wait for the monthly call to communicate bad news.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
          <TrustBlock variant="visit" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">SEO Pricing — Month-to-Month, No Lock-In</h2>
          <p className="text-foreground leading-relaxed mb-4">
            OARC SEO retainers start at €1,800/month for the Foundation tier (technical audit, on-page optimisation, 2 articles/month, monthly report). The Growth tier at €3,200/month adds 4 articles/month, link-building up to 8 links/month, and a bi-weekly check-in. The Authority tier at €5,500/month is the full-stack deployment: 8 articles/month, full AEO layer, digital PR link-building, and a dedicated account lead who works exclusively on your domain.
          </p>
          <p className="text-foreground leading-relaxed">
            All tiers are month-to-month with 30 days notice to exit. There is no annual lock-in and no setup fee. The SEO Audit (€1,200, one-time) is available standalone for businesses that want the diagnostic before committing to a retainer. The audit deliverable can be taken in-house or handed to OARC to implement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Web Vitals and Page Experience Signals</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Google&apos;s Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift — are confirmed ranking signals in 2025. Every OARC SEO retainer includes a monthly Core Web Vitals audit across the 10 highest-traffic pages on the domain. Pages that fail the thresholds (LCP above 2.5s, INP above 200ms, CLS above 0.1) are flagged with a developer brief and tracked until the metric passes.
          </p>
          <p className="text-foreground leading-relaxed">
            For Malta businesses on shared hosting or legacy WordPress themes, Core Web Vitals failures are the most common reason for a ranking ceiling — the content is good enough to rank but the page experience signals are holding the position down. Fixing a failing CLS score is often a 2-hour developer task that produces a persistent ranking improvement. We identify these opportunities in the first 30 days of every new retainer.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl bg-card border">
          <h2 className="text-xl font-bold mb-3">SEO Audit — the standalone starting point</h2>
          <p className="text-sm text-muted-foreground mb-3">
            For Malta businesses that are not ready to commit to a retainer, the standalone SEO Audit (€1,200) maps every technical issue on the domain, produces a priority-ranked fix list, and benchmarks the organic keyword footprint against the two strongest Malta competitors in the category. The audit deliverable is a written document of 25–40 pages — not a generic checklist produced by a crawler. Every recommendation carries an effort estimate (days) and an expected impact rating (High / Medium / Low) so the client can triage without SEO expertise.
          </p>
          <p className="text-sm text-muted-foreground">
            The audit is completed within 7 working days of kickoff. A 45-minute debrief call is included to walk through the findings. There is no obligation to proceed with an OARC retainer — the audit findings are yours to implement with any team.
          </p>
        </section>

        {/* SEO vs PAID vs CONTENT differentiation section */}
        <section className="mb-12 p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-3">SEO vs Paid Ads vs Content Marketing — which do you need?</h2>
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

        <RelatedServices slug="/services/seo-services" />

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center mt-8">
          <h2 className="text-2xl font-bold mb-3">Want a Free Malta SEO Audit?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">We will crawl your site, plot your gap against the top three Malta competitors, and send you a 90-day plan with no obligation.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold" data-testid="button-cta-footer">Request the audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
}
