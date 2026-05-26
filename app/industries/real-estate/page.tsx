import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building2, Users, Globe, Camera, TrendingUp, Brain, Search, Workflow, Target } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/seo/TrustBlock";
import { IMAGE_REGISTRY } from "@/lib/images/registry";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const HERO_IMAGE_ID = "img-001";
const heroEntry = IMAGE_REGISTRY.find((e) => e.id === HERO_IMAGE_ID);
if (!heroEntry) {
  throw new Error(`/industries/real-estate hero image ${HERO_IMAGE_ID} missing from IMAGE_REGISTRY`);
}
const heroImage = `/images/registry/${heroEntry.seoFilename}.webp`;
const heroImageAlt = heroEntry.altText;

const CANONICAL = "https://oarcdigital.com/industries/real-estate";
const LAST_UPDATED = "2026-05-10";
const LAST_UPDATED_DISPLAY = "10 May 2026";

const META_TITLE = "Real Estate Marketing Agency Malta | Social, Paid, SEO & Video for Estate Agents";
const META_DESC = "The complete marketing service for Malta real estate agencies and developers — listings SEO, paid buyer campaigns targeting international markets, cinematic property video, social media management, agency branding, and CRM automation.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: ogImageEntry({ title: META_TITLE, subtitle: META_DESC }),
    title: META_TITLE,
    description: META_DESC,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: META_TITLE, subtitle: META_DESC })],
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
  },
};

type ServiceBlock = {
  slug: string;
  title: string;
  blurb: string;
  icon: typeof Camera;
  detail: string;
};

const services: ServiceBlock[] = [
  {
    slug: "paid-advertising",
    title: "Paid Advertising for Real Estate",
    blurb: "Google Search for active buyer intent. Meta lead-gen for UK retirees, Italian cross-channel buyers, Scandinavian remote workers and EU citizenship applicants. Retargeting that follows portal visitors with your listings for 90 days.",
    icon: TrendingUp,
    detail: "We do not run portal-only campaigns — the goal is to own the buyer relationship, not rent it from Property Malta or a third-party listing site. Every campaign is segmented by buyer persona (retiree, investor, citizenship applicant, remote worker, local upgrader) with separate creative, separate landing pages and separate measurement. Budget allocation is reviewed every two weeks against pipeline contribution, not vanity metrics.",
  },
  {
    slug: "seo-services",
    title: "Listings SEO & Local Search",
    blurb: "Rank your agency on the long-tail Malta property searches that actually convert — 'two bedroom apartment Sliema seafront', 'penthouse for sale Gzira', 'Valletta property to rent furnished' — and own the Google Business Profile presence in your catchment.",
    icon: Search,
    detail: "Most Malta agencies rank for their own brand name and nothing else. We rebuild the website information architecture around neighbourhood-by-property-type combinations, build internal linking from neighbourhood guides into live listings, and run a structured-data pass so individual listings appear with price, bedrooms and location in the search snippet. Google Business Profile is treated as a separate channel with weekly posts, photo refreshes and review-response workflows.",
  },
  {
    slug: "video-production",
    title: "Property Video & Virtual Tours",
    blurb: "Cinematic property walkthroughs, licensed drone footage, agent profile videos, development showcase films, and 360-degree virtual tours that let international buyers shortlist before they fly in.",
    icon: Camera,
    detail: "Portal thumbnails are won or lost in the first frame. Our property video team shoots a tight 60–90 second walkthrough for portal embed, a 30 second vertical cut for Reels and TikTok, and a longer 3–4 minute story-led version for YouTube and the agency website. Virtual tours use a Matterport-equivalent capture and are linked directly from each listing page so a UK or Italian buyer can self-tour at 11pm on a Sunday and arrive in Malta with a shortlist already drawn up.",
  },
  {
    slug: "marketing-automation-suite",
    title: "Real Estate CRM & Automation",
    blurb: "Connect HubSpot, Pipedrive or your in-house system to your portal feeds, your website, your WhatsApp number and your viewing calendar — so every enquiry has an owner, a status, a next step and a deadline.",
    icon: Workflow,
    detail: "The single biggest revenue leak we find in Malta agencies is enquiries arriving in three different inboxes (Property Malta, the agency website, an agent's personal WhatsApp) with nobody owning the consolidated view. We map your existing process, plug the gaps with a CRM you actually want to use, and automate the routine work — viewing reminders, follow-up emails after a viewing, drip nurture for buyers who said 'maybe in six months', re-engagement for buyers who went cold. Reporting is built so the principal can see pipeline by agent, by neighbourhood and by source in one screen.",
  },
  {
    slug: "lead-generation-engine",
    title: "Buyer & Vendor Lead Generation",
    blurb: "End-to-end lead programmes — landing pages, multi-step enquiry forms, lead magnets ('Sliema valuation guide', 'Citizenship-by-investment property checklist'), and the campaigns that drive qualified traffic into them.",
    icon: Target,
    detail: "Buyer leads and vendor (instruction) leads are two different programmes with different creative, different offers and different qualification logic. Buyer programmes lean on visual content, neighbourhood-specific landing pages and citizenship-aware compliance language. Vendor programmes lean on free valuation tools, market-update opt-ins and credibility content from the principal agent. Both feed the same CRM with clearly tagged source, persona and qualification status.",
  },
  {
    slug: "ai-real-estate-agent",
    title: "AI Real Estate Agent",
    blurb: "An AI that reads every portal and website enquiry 24/7, qualifies buyers on budget, timeline, financing and intent, books viewings into the right agent's calendar, and sends a written brief before the meeting.",
    icon: Brain,
    detail: "The AI Real Estate Agent is a separate product — not a marketing service — that sits downstream of the marketing programme. Once the campaigns above are generating enquiry volume, the AI agent handles triage: it replies in seven languages within seconds, qualifies on budget and intent, and books viewings into the right calendar. Most agencies add this once monthly enquiry volume crosses 50–80 contacts and manual triage is becoming the bottleneck.",
  },
];

const buyerMarkets = [
  { market: "United Kingdom", detail: "Retirees and semi-retirees drawn by climate, low crime, English-speaking environment and EU residency access. Typical search horizon: 9–24 months. Price ceiling: €350k–€650k. Strongest channels: Google Search and YouTube pre-roll against UK property-research content." },
  { market: "Italy (Sicily & Lazio)", detail: "Cross-channel buyers — proximity to Sicily makes Malta a logical second property or relocation. Strong in the Cottonera and central Malta markets. Italian-language creative and Italian-speaking enquiry handling are non-negotiable; 60% of these buyers will quietly move on if the first reply is in English." },
  { market: "EU Citizenship Applicants", detail: "High-net-worth buyers qualifying for Malta's citizenship-by-investment programmes. Require a compliant rental or purchase. Budgets typically €375k+ on the property line, with separate government contribution and due-diligence costs. This segment drives the Sliema, St Julian's and Valletta premium market." },
  { market: "Remote Working Professionals", detail: "EU-based professionals using Malta's Nomad Residence Permit and Digital Nomad Visa. Typically younger buyers in the €200k–€350k bracket. Strong on Instagram, TikTok and LinkedIn. They rent first, buy second — patient nurture wins them." },
  { market: "Maltese Upgraders", detail: "The local market is still the largest single segment by volume. Family upgraders moving from a two-bedroom in Mosta to a three-bedroom in Attard. Loyal to specific agents, heavily word-of-mouth driven, and increasingly research-led on Facebook and TikTok before they ever pick up the phone." },
];

const painPoints = [
  {
    icon: Building2,
    title: "Portal listings indistinguishable from the next agency",
    detail: "Every Malta agency sits on the same handful of portals — Property Malta, Frank Salt's platform, Dhalia's, RE/MAX, the international syndication feeds. Without video, professional photography and a paid layer driving traffic to your own landing pages, the listing is a commodity. The agencies that win the mandate are the ones the vendor saw on Instagram three times last week.",
  },
  {
    icon: Globe,
    title: "International buyers lost at the first touch",
    detail: "More than 40% of Malta property enquiries originate outside the islands. They come in English, Italian, French and German at 11pm on a Sunday. Without a 24/7 multilingual qualification layer, the reply lands 18 hours later and the buyer has already booked a viewing with whoever answered first. That is not a content problem. It is a response-time and language-coverage problem.",
  },
  {
    icon: TrendingUp,
    title: "Senior agent time burned on tyre-kickers",
    detail: "The Malta market has a high tyre-kicker rate, particularly from speculative citizenship enquiries and leisure browsers. Without triage automation, senior agents spend half their week on contacts who will never transact, while serious buyers wait three days for a callback. The fix is not 'try harder' — it is a qualification layer that runs before a human ever sees the enquiry.",
  },
  {
    icon: Workflow,
    title: "Three inboxes, no single source of truth",
    detail: "Portal enquiries land in one inbox, the agency website in another, an agent's personal WhatsApp in a third. Nobody owns the consolidated view. Leads slip, follow-ups get duplicated, and the principal has no honest pipeline view at the end of the month. We see this in roughly four out of every five Malta agencies we audit.",
  },
];

const stats = [
  { metric: "40%+", label: "of Malta property enquiries", note: "originate outside the islands" },
  { metric: "3–6 mo", label: "buyer search cycle", note: "requires structured long-cycle nurture" },
  { metric: "5", label: "international buyer markets", note: "each needs separate creative and language" },
  { metric: "90 days", label: "typical programme setup", note: "from audit to full retainer" },
];

const faqs = [
  {
    q: "How is /industries/real-estate different from the AI Real Estate Agent product page?",
    a: "This page is the broader industry hub. It covers the full marketing stack a Malta agency or developer needs — listings SEO, paid buyer campaigns, virtual tours, CRM automation, lead generation, plus the AI Real Estate Agent itself. The AI Real Estate Agent product page goes deep on a single product: how the qualification, language coverage, calendar booking and senior-agent escalation actually work. If you are scoping a full programme, start here. If you already know you want the AI layer, go straight to the product page.",
  },
  {
    q: "Can you target international property buyers in specific source markets?",
    a: "Yes. We run separate campaigns for UK retirees, Italian cross-channel buyers, EU citizenship applicants, Scandinavian and German remote workers, and Middle Eastern investors. Each segment has its own creative, its own landing page, its own language coverage on the inbound side, and its own qualification thresholds. Bundling them all into one 'international buyer' campaign is the most common mistake we unwind.",
  },
  {
    q: "Do you produce property video and virtual tours in Malta?",
    a: "Video is one of our core services. We shoot cinematic walkthroughs, licensed aerial footage, development launch films and agent-credibility videos, and we capture 360-degree virtual tours that link directly from your listing pages. For still photography we coordinate with Malta-based photographers we trust as part of the broader content package, so the agency only briefs one team.",
  },
  {
    q: "How do you qualify leads — particularly for high-value or citizenship-track properties?",
    a: "The OARC AI Real Estate Agent reads every enquiry in the buyer's language, qualifies on budget, timeline, financing situation and intent, and routes accordingly. High-value signals (cash buyer, declared budget above €1.5m, citizenship-programme intent) trigger an immediate brief to a senior agent. Lower-priority enquiries enter a calibrated nurture sequence rather than being discarded — the Malta search cycle is long enough that a 'not yet' contact today is often a transaction in eight months.",
  },
  {
    q: "Can you help with a new development launch?",
    a: "Yes. We build end-to-end launch programmes for new developments — project branding and visual identity, the launch microsite, paid campaigns across Google and Meta, social content strategy, and an AI qualification layer to handle the enquiry spike a successful launch generates. We have run programmes for residential and mixed-use developments in Sliema, St Julian's, Gzira and the Three Cities.",
  },
  {
    q: "What kind of budget should a Malta agency expect to commit?",
    a: "Most independent agencies start in the €2.5k–€6k per month range across video, paid and CRM, then add the AI Real Estate Agent once monthly enquiry volume crosses 50–80. Larger agencies and developers running launch campaigns are typically €8k–€18k per month while a launch is live, then settle into a steady-state programme. We will scope an honest minimum viable budget on the first call rather than push a fixed package.",
  },
  {
    q: "What about commission models — do you take a cut of completed sales?",
    a: "No. We are a marketing partner on a clear monthly retainer, with deliverables and reporting committed in writing. Taking commission on completed sales would put us in a position to push specific listings, which is the opposite of what an honest marketing partner should do. Our incentive is the long-term retainer, not any single transaction.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://oarcdigital.com/industries" },
        { "@type": "ListItem", position: 3, name: "Real Estate", item: CANONICAL },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL}#collection`,
      url: CANONICAL,
      name: "Real Estate Marketing in Malta",
      description: "Industry hub covering the full marketing stack for Malta real estate agencies and developers — listings SEO, paid buyer campaigns, virtual tours, CRM automation, lead generation, and the AI Real Estate Agent.",
      inLanguage: "en-MT",
      isPartOf: { "@type": "WebSite", "@id": "https://oarcdigital.com/#website" },
      dateModified: LAST_UPDATED,
      about: { "@type": "Thing", name: "Real estate marketing in Malta" },
      mainEntity: { "@id": `${CANONICAL}#services-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#services-list`,
      name: "Real Estate Marketing Services for Malta Agencies",
      numberOfItems: services.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://oarcdigital.com/services/${s.slug}`,
        name: s.title,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RealEstateMaltaIndustryHub() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />
        {/* Speakable JSON-LD — voice/AI discovery for /industries/real-estate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: CANONICAL,
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["[data-speakable]"],
              },
            }),
          }}
        />

        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors" data-testid="link-breadcrumb-industries">Industries</Link>
              <span>/</span>
              <span className="text-white">Real Estate</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Industry Hub</span>
              </div>
              <time
                dateTime={LAST_UPDATED}
                className="text-xs text-white/60"
                data-testid="text-last-updated"
              >
                Last updated: {LAST_UPDATED_DISPLAY}
              </time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>
              Real Estate Marketing Agency in Malta — Social, Paid, SEO &amp; Video for Estate Agents
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              The complete marketing service for Malta agencies and developers — listings SEO that ranks for buyer-intent queries, paid campaigns reaching UK, Italian and EU buyers, cinematic property video, social media management, and CRM automation that keeps every enquiry moving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="link-cta-strategy-call">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                  Book a free marketing audit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services/video-production" data-testid="link-cta-video">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  Property video production
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">

          {/* Hub framing */}
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Industry Hub</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A hub, not a single product page — six services that work together for Malta real estate</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page is the broader industry hub for real estate. It is intentionally separate from <Link href="/services/ai-real-estate-agent" className="text-orange-600 underline">the AI Real Estate Agent product page</Link>, which goes deep on a single flagship product. Here we cover the full stack a Malta agency or developer needs to compete in 2026: listings SEO, paid buyer campaigns, property video and virtual tours, CRM and automation, lead generation programmes, and the AI qualification layer that ties the inbox together.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Most agencies do not need all six on day one. The honest sequence we recommend in the first call is usually: fix listings SEO and Google Business Profile, layer paid on top of the listings that already convert, add video and virtual tours to differentiate the portal thumbnail, then plug in CRM and the AI Real Estate Agent once enquiry volume justifies it. We will scope the right starting point on the first call rather than push a fixed package.
            </p>
          </section>

          {/* Market context */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">One of Europe&apos;s most competitive property markets — on four square kilometres of rock</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta&apos;s property market is structurally unusual. Constrained land supply, high international demand from EU citizenship programmes, remote-worker relocation and UK retirement migration, and a large number of agencies competing for a finite pool of listings create a market where marketing quality — not just price or commission rate — decides which agency lands the mandate.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The names you see on every street sign — Frank Salt, Dhalia, RE/MAX Malta, Belair, Engel &amp; Völkers — all run recognisable brands, professional video, multilingual enquiry handling and broad international buyer reach. Independent agencies and smaller developers compete in the same market with one or two-person marketing teams, which is exactly the gap a properly-scoped programme closes.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              On the buyer side, Malta is genuinely a seven-language market — English, Maltese, Italian, French, German, Spanish and Russian appear in inbound enquiries on a normal week. Buyers shortlist remotely (often months before they fly in), expect virtual tours by default, and will quietly move to the next agency if the first reply lands in the wrong language. The marketing infrastructure has to assume all of this from day one.
            </p>
          </section>

          {/* Pain points */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta agencies lose revenue every week</h2>
            <div className="space-y-4">
              {painPoints.map((p, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border flex items-start gap-5">
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats strip */}
          <section className="bg-zinc-950 text-white rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta Real Estate Buyer in Numbers</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((r, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{r.metric}</div>
                  <div className="text-white font-medium mb-1 text-sm">{r.label}</div>
                  <div className="text-zinc-500 text-xs">{r.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services — six blocks */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six services for Malta real estate — each linking deeper</h2>
            <p className="text-muted-foreground mb-8">Every block below is its own dedicated service page with its own scope, pricing logic and case examples. Click through to go deep. Most agencies start with two or three of these and add the others as the programme matures.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {services.map((s) => (
                <Link
                  href={`/services/${s.slug}`}
                  key={s.slug}
                  className="block p-6 rounded-xl bg-card border hover:border-orange-400 transition-colors group"
                  data-testid={`link-service-${s.slug}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <s.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-orange-600 transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                      <span className="text-xs text-orange-500 font-medium mt-2 inline-block">Read the full service page <ArrowRight className="inline w-3 h-3 ml-0.5" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              {services.map((s) => (
                <div key={`detail-${s.slug}`} className="border-l-2 border-orange-500/30 pl-5">
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-2">{s.detail}</p>
                  <Link href={`/services/${s.slug}`} className="text-xs text-orange-600 hover:text-orange-700 font-medium">
                    Full {s.title.toLowerCase()} page <ArrowRight className="inline w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* International buyer markets */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">International Buyer Markets We Actually Target</h2>
            <p className="text-muted-foreground mb-6">Each buyer segment has a different language, search behaviour and buying timeline. A single &ldquo;international buyer&rdquo; campaign is the most common mistake we unwind. Five distinct programmes is the working baseline.</p>
            <div className="space-y-3">
              {buyerMarkets.map((bm, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border flex items-start gap-4 flex-wrap md:flex-nowrap">
                  <span className="font-bold text-orange-600 text-sm md:w-44 flex-shrink-0">{bm.market}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{bm.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Real Estate Agent cross-link — separate product, downstream of marketing */}
          <section className="p-5 rounded-xl border bg-muted/40">
            <h2 className="text-base font-semibold mb-2">Once enquiry volume is live — the AI Real Estate Agent</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              This page covers marketing: how to generate enquiries from local and international buyers. Once those campaigns are running and the inbox is busy, there is a separate AI product that handles triage — reading every portal and website enquiry 24/7, qualifying on budget and intent, booking viewings, and replying in seven languages within seconds. That is a different buy from a different buyer.
            </p>
            <Link href="/services/ai-real-estate-agent" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm">
              AI Real Estate Agent — automated enquiry handling &amp; lead qualification <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* How a programme typically rolls out */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How a Real Estate Marketing Programme Typically Rolls Out</h2>
            <p className="text-muted-foreground mb-6">A realistic ninety-day shape for an independent Malta agency starting from a standing start. Larger agencies and developer launch programmes compress this; very small agencies stretch it.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 1–2 — Audit and foundations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We audit current listings, portal performance, Google Business Profile, response times, language coverage and CRM hygiene. Output is a written prioritised plan, not a slide deck. We fix the obvious leaks first — broken portal feeds, missing GBP photos, response-time bottlenecks — before spending on new traffic.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 3–6 — Listings SEO, GBP and paid foundation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Website information architecture is rebuilt around neighbourhood-by-property-type pages. Structured data is added to listings. Google Business Profile is rebuilt with weekly post and photo cadence. The first paid campaigns go live against the highest-intent search terms with conservative budgets while we learn what converts.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 7–10 — Video, virtual tours and content</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">First production block — typically 8–12 properties shot together with drone footage, walkthrough video, vertical cuts and 360-degree tours. Listings are republished on portals with the new media. Social content calendar starts running weekly with property showcases, neighbourhood guides and agent profile content.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 11–13 — CRM, AI Real Estate Agent and reporting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">CRM is configured against the workflow we mapped in week one — not a generic template. The AI Real Estate Agent is connected to portal feeds, website forms and WhatsApp. Reporting goes live for the principal: pipeline by agent, neighbourhood and source in one screen, with weekly written commentary from us, not just a dashboard link.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Month 4 onward — Steady-state retainer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Programme settles into a steady-state retainer with monthly content production, ongoing paid management, quarterly SEO sprints, and an honest monthly review of what is working and what to cut. The principal gets a one-page written summary every month, not a fifty-slide PDF.</p>
              </div>
            </div>
          </section>

          {/* Neighbourhood briefing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A Working Map of the Malta Property Market</h2>
            <p className="text-muted-foreground mb-6">A short, opinionated read on the neighbourhoods that drive most agency revenue. We use this as the starting point for the website information architecture and the paid campaign segmentation.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Sliema, Gzira and St Julian&apos;s — the international premium spine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">The seafront from Tigne Point through the Sliema strand, around Manoel Island, into Gzira and up through St Julian&apos;s and Paceville is where the bulk of international buyer demand concentrates. Citizenship-track buyers, EU remote workers and senior expats all shortlist here first. Listings need professional video, virtual tours and English-first creative; Italian and German are the next two languages to layer in. Paid campaigns work hardest when neighbourhood-specific landing pages exist for &ldquo;Sliema seafront&rdquo;, &ldquo;Tigne Point penthouse&rdquo;, &ldquo;Gzira waterfront&rdquo; rather than a single generic agency landing page.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Valletta, Floriana and the Three Cities — heritage and conversion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">UNESCO-protected stock, Knights-era townhouses, palazzino conversions and boutique developments. Buyers here are heavily international and heavily research-led — they want the architectural story, the renovation history and the planning context, not a one-line listing description. Long-form blog content, agent-led video tours and credibility-led social posts outperform standard listing-only marketing by a wide margin.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Mosta, Attard, Lija and Balzan — the local upgrader belt</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">The volume centre of the local market. Maltese family upgraders, second-home buyers from Gozo, professionals moving out of the harbour cities. Facebook is still the dominant social channel, word-of-mouth referrals matter more than for the international segments, and Google Business Profile reviews carry disproportionate weight on the vendor side. Maltese-language creative is welcome but not strictly necessary on the buyer side; English works for most of the audience.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Mellieha, St Paul&apos;s Bay, Bugibba and Qawra — leisure and second-home</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Holiday-let yields, semi-retirement purchases from the UK and Scandinavia, and growing year-round letting demand from remote workers. Buyer journeys are longer (often 12–24 months) and visual content carries more weight than written specs. Drone footage of Mellieha Bay, Ghadira and the surrounding coast is one of the highest-performing single creative assets we produce for this segment.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Gozo — the patient, story-led market</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">A separate market in almost every operational sense — different buyer profile (often UK semi-retired or EU lifestyle relocators), longer sales cycles, smaller agency network, and a higher tolerance for slower, more story-led marketing. Cinematic video, written long-form content and patient nurture sequences outperform the high-frequency creative cadence that wins in Sliema or St Julian&apos;s.</p>
              </div>
            </div>
          </section>

          {/* What we will not do */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Will Not Do for a Real Estate Client</h2>
            <p className="text-muted-foreground mb-6">A short, honest list. We share this on the first call so there are no surprises later.</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="p-4 rounded-xl bg-card border"><strong>We do not take commission on completed sales.</strong> A marketing partner paid on transactions has an incentive to push specific listings, which is the opposite of what an honest partner should do. We work on a clear monthly retainer with deliverables committed in writing.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not run portal-only campaigns.</strong> Driving paid traffic to a third-party portal listing rents the buyer relationship from the portal. Every paid programme we run drives traffic to landing pages the agency owns.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not lock agencies into 24-month contracts.</strong> Standard term is rolling monthly after the first ninety days. If the programme is not working, the agency should be free to leave without legal friction. The retainer renews because it is working, not because of the paperwork.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not write generic citizenship-by-investment marketing without a compliance review.</strong> The programmes are tightly regulated and the language used in marketing matters. We always involve a Malta-licensed compliance professional on the agency side before launching CBI-targeted campaigns.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not promise specific listing-to-sale conversion rates on the first call.</strong> Honest baseline numbers come after the audit, not before. Anyone promising headline numbers in the pitch deck is selling a number, not a programme.</li>
            </ul>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit OARC Digital</h2>
            <TrustBlock variant="visit" />
          </section>

          <RelatedLinks slug="/industries/real-estate" />

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Real Estate Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your portal listings, Google Business Profile, paid campaigns, response times and CRM hygiene — and send you a written, prioritised action plan within five working days.
            </p>
            <Link href="/contact" data-testid="link-cta-audit">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                Book the audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </article>
      </main>
    </Layout>
  );
}
