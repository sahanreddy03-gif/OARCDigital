import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Brain, Workflow, Target, Building2, LineChart, FileText } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/seo/TrustBlock";
import { IMAGE_REGISTRY } from "@/lib/images/registry";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const HERO_IMAGE_ID = "img-038";
const heroEntry = IMAGE_REGISTRY.find((e) => e.id === HERO_IMAGE_ID);
if (!heroEntry) {
  throw new Error(`/industries/fintech hero image ${HERO_IMAGE_ID} missing from IMAGE_REGISTRY`);
}
const heroImage = `/images/registry/${heroEntry.seoFilename}.webp`;
const heroImageAlt = heroEntry.altText;

const CANONICAL = "https://oarcdigital.com/industries/fintech";
const LAST_UPDATED = "2026-05-11";
const LAST_UPDATED_DISPLAY = "11 May 2026";

const TITLE = "Fintech Marketing in Malta | MFSA-Aware B2B Pipeline & Brand";
const DESCRIPTION = "The full fintech marketing stack for Malta-licensed payments, EMI, VFA, banking and SaaS-fintech firms — MFSA-aware brand systems, regulator-grade web, B2B SDR for CFO/treasurer ICPs, demo-led video, lifecycle automation and the AI SDR agent.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
    card: "summary_large_image",
    title: TITLE,
    description: "MFSA-aware brand and web, B2B SDR for CFO and treasurer ICPs, demo-led video, lifecycle automation and the AI SDR agent — built for Malta fintech.",
  },
};

type ServiceBlock = { slug: string; title: string; blurb: string; icon: typeof Brain; detail: string };

const services: ServiceBlock[] = [
  {
    slug: "ai-sdr-agent",
    title: "AI SDR Agent for Fintech ICPs",
    blurb: "Outbound prospecting against tightly defined fintech buying committees — CFOs, group treasurers, heads of payments, MLROs and platform integration leads — with regulator-aware messaging and a human approver inside the MFSA / IDPC compliance perimeter.",
    icon: Brain,
    detail: "A fintech sales cycle is six-to-fourteen months and the buying committee is rarely fewer than five people. A standard SDR cadence aimed at one persona burns the other four before the deal opens. Our SDR agents are configured against a per-account buying-committee map, send sequenced messaging to each persona on a different rhythm, and never email a regulated entity inside the MFSA / MGA / IDPC perimeter without a human approver in the chain. The cadence is calibrated to the Malta fintech social graph — the SiGMA Eurasia and Money 20/20 windows, the MFSA conference circuit, and the European Payments Council working-group calendar.",
  },
  {
    slug: "branding",
    title: "MFSA-Grade Brand Systems",
    blurb: "Brand identity work that survives an MFSA brand-mark review, a Maltese trademark search, an EBA passporting application, a Tier-1 bank vendor onboarding and a payments-network compliance file — without losing the founder&apos;s voice.",
    icon: Shield,
    detail: "A fintech brand has to work in four contexts most marketing agencies have never seen: the MFSA brand-mark review, the partner bank&apos;s vendor onboarding pack, the payments-network compliance file (Visa / Mastercard / SEPA scheme), and the founder&apos;s LinkedIn presence. We deliver Adobe + Figma source plus a trademark-ready master logo, plus a compliance-friendly brand-system guide that includes regulator-mark guidance, BIN-sponsor co-branding rules where relevant, and a clear position on which third-party use cases the mark is licensed for.",
  },
  {
    slug: "web-design",
    title: "Regulator-Grade Web for Fintech",
    blurb: "Conversion-focused fintech websites with the MFSA-required disclosures, complaints procedure, regulatory-information page and risk warnings designed in — not bolted on as an afterthought after the marketing site goes live.",
    icon: Building2,
    detail: "A typical fintech marketing site goes live with the conversion path designed and the regulatory disclosures hidden in a footer link the compliance officer adds in week three. We design the regulatory information architecture (MFSA licence reference, complaints procedure, ICF / DGS scheme membership where applicable, risk warnings, terms-of-service hierarchy) into the IA from day one, so a regulator desk audit, a partner bank vendor pack and a buyer&apos;s due-diligence checklist all return clean answers to the same URL.",
  },
  {
    slug: "marketing-automation-suite",
    title: "Long-Cycle Lifecycle Automation",
    blurb: "HubSpot, Customer.io or Marketo wired into a B2B fintech buying journey that runs nine months by default — with content sequencing for each persona, IDPC-grade consent logging and lawful-basis tracking on every contact.",
    icon: Workflow,
    detail: "B2B fintech lifecycle automation is structurally different from a SaaS funnel. The buying journey is nine-to-fourteen months by default, the buying committee adds and drops members through the cycle, and procurement, legal and compliance teams join the conversation halfway through with their own questions. We map the buying-committee evolution per ICP, build content sequencing for each persona, and treat IDPC consent as a first-class part of the design — every webform, every event registration, every CRM merge logs a lawful basis. The handover from marketing to BD is engineered, not improvised.",
  },
  {
    slug: "video-production",
    title: "Demo-Led Product Video & Founder Films",
    blurb: "Product demo reels for the platform sales conversation, founder credibility videos for LinkedIn and the investor deck, and explainer films that compress a fifteen-minute integration walkthrough into a three-minute reel a CFO will actually watch.",
    icon: LineChart,
    detail: "A fintech buyer&apos;s first contact with the product is almost always a recorded demo, not a live one. We produce a tight three-minute platform demo reel that survives a CFO&apos;s skim, plus a six-to-eight-minute deeper walkthrough for the integration lead, plus a sixty-second LinkedIn cut for the founder&apos;s audience build. Production is run from our Birkirkara studio with screen-record, motion-design and live-action interview capture in the same shoot day, so the same content base feeds the website, the SDR cadence and the investor update.",
  },
  {
    slug: "content-marketing",
    title: "Regulator-Cited Content & Thought Leadership",
    blurb: "Founder-and-policy-team-led content programmes that cite MFSA notices, EBA opinions, SEPA scheme rule changes and PSD2/PSD3 implementing technical standards — the sources fintech buyers and regulators actually read.",
    icon: FileText,
    detail: "Most fintech content marketing collapses into thin SEO listicles that no buyer or regulator takes seriously. Our content programmes are built around a quarterly regulatory-and-market briefing led by your policy or compliance team, supplemented by founder-led commentary on specific MFSA notices, EBA opinions and PSD2/PSD3 implementing technical standards as they land. The output is published as long-form briefings on the company site, distilled into LinkedIn cuts for the founder, and pulled into the SDR cadence as personalised opening references — the same content asset doing three jobs.",
  },
];

const segments = [
  { market: "Payments & EMIs", detail: "Maltese-licensed Electronic Money Institutions and Payment Institutions — issuing, acquiring, cross-border SEPA, FX-as-a-service, embedded payments. Buying committees centre on heads of payments, treasury and procurement, with heavy compliance involvement." },
  { market: "VFA & Digital Asset Service Providers", detail: "MFSA Virtual Financial Assets Act licensees and pre-MiCA-transition firms covering exchange, custody, brokerage and advisory. Sales cycles are slow, regulator-watching is intense, and credibility content carries more weight than paid acquisition." },
  { market: "Insurtech & Pensiontech", detail: "MFSA-licensed insurance intermediaries, captive managers and pension administrators selling into corporate buyers across Europe. The buying committee includes finance, HR/benefits and risk — three different content cadences in a single account." },
  { market: "Banking-as-a-Service & Embedded Finance", detail: "BIN-sponsor banks, BaaS platforms and embedded-finance enablers. Sales conversations span the bank&apos;s commercial team, the platform&apos;s product organisation and the end-fintech&apos;s integration leads — three buyer constellations in every deal." },
  { market: "RegTech & Compliance SaaS", detail: "AML, transaction monitoring, sanctions screening, KYB and reporting platforms selling into MFSA-regulated firms and the wider EU regulated market. Buyers are MLROs, heads of compliance and chief operating officers; the language must be precise to the obligation, not generic 'compliance'." },
];

const painPoints = [
  { icon: Shield, title: "Brand and web that fail the partner-bank vendor pack", detail: "A marketing site goes live looking modern and converts well — and then a Tier-1 bank&apos;s vendor onboarding team rejects half of it because the regulatory disclosures are buried, the complaints procedure is missing, and the brand mark is not consistently presented across the assets in the data room. We see this on roughly half of the fintechs we audit. The fix is to design the regulatory IA into the site from day one rather than retrofit it." },
  { icon: Target, title: "SDR programmes that spam one persona and burn the rest of the buying committee", detail: "A six-person buying committee receives the same generic outbound to the CFO, while the head of payments, the treasurer, the MLRO and the integration lead never hear from the brand. By the time the CFO forwards the email internally, three of the five required signatures have already heard a competitor&apos;s pitch. Per-account buying-committee mapping plus persona-specific cadences fixes this — and it is the single highest-ROI change in most fintech BD programmes we touch." },
  { icon: LineChart, title: "Long-cycle nurture handed to a SaaS template", detail: "Most fintech CRMs run on lifecycle templates designed for thirty-day SaaS funnels. A nine-to-fourteen-month fintech sales cycle in a SaaS template starves marketing of attribution data, drops contacts who go quiet for ninety days, and loses the procurement / legal / compliance handovers in the middle of the journey. The fix is a custom lifecycle map per ICP, designed against the actual buying-committee evolution, not a generic funnel." },
  { icon: FileText, title: "Content programmes that ignore the regulator reading-list", detail: "Fintech buyers and regulators read the same reading-list — MFSA notices, EBA opinions, ESMA guidelines, SEPA scheme rule changes, PSD2/PSD3 RTS drafts. A content programme that ignores those sources and publishes generic 'top fintech trends 2026' SEO content gets dismissed by both audiences in the first thirty seconds. Founder-and-policy-led content with regulator citations earns the credibility that drives inbound enquiry." },
];

const stats = [
  { metric: "9–14 mo", label: "B2B fintech sales cycle", note: "with a 5-8 person buying committee" },
  { metric: "5+", label: "regulators in scope", note: "MFSA, EBA, ESMA, IDPC, payments-scheme bodies" },
  { metric: "3 ICPs", label: "minimum production cadence", note: "for a typical Malta fintech in growth mode" },
  { metric: "70%", label: "deal-room failure rate", note: "tied to weak regulatory IA on the marketing site" },
];

const faqs = [
  { q: "Can you market a regulated fintech without breaching MFSA rules?", a: "Yes. Every claim and every campaign is reviewed against the relevant MFSA conduct-of-business rules, the EBA / ESMA guidelines and the firm&apos;s own internal compliance manual before publish. We work alongside your compliance team and MLRO on every pre-clearance — we do not write copy that goes around them." },
  { q: "Do you understand IDPC consent and lawful-basis logging requirements?", a: "Yes. The Information and Data Protection Commissioner&apos;s guidance is treated as a first-class part of every CRM and automation design we ship. Every webform, every event registration, every CRM merge logs a documented lawful basis. We also handle subject-access-request workflow design as part of the lifecycle build where requested." },
  { q: "Can you handle B2B SDR for fintech buying committees?", a: "B2B fintech SDR is one of our core deliverables. We map the buying committee per account, build persona-specific cadences for the CFO, treasurer, head of payments, MLRO, integration lead and procurement, and route everything through a human approver inside the MFSA / IDPC perimeter. The cadence is calibrated to the relevant industry calendar — Money 20/20, Sibos, EBADay, the MFSA conference circuit." },
  { q: "Will the website pass a partner-bank vendor pack and a buyer&apos;s due-diligence review?", a: "That is the design brief. We design the regulatory information architecture (MFSA licence reference, complaints procedure, ICF / DGS scheme membership where applicable, risk warnings, terms-of-service hierarchy, sanctions and AML statements) into the IA from day one. A partner bank vendor pack, a buyer&apos;s due-diligence checklist and a regulator desk audit all return clean answers to the same URL." },
  { q: "Can you produce demo videos that survive a CFO&apos;s ten-second attention span?", a: "Yes — that is the design brief for fintech demo video. A tight three-minute platform demo for the CFO, a six-to-eight-minute deeper walkthrough for the integration lead, and a sixty-second LinkedIn cut for the founder&apos;s audience build, all from the same shoot. We run screen-record, motion-design and live-action interview capture in one studio day to keep the cost per asset honest." },
  { q: "What budgets are realistic for a Malta fintech engagement?", a: "Early-stage fintechs typically commit €4k–€8k per month against a focused programme — usually brand, regulator-grade web, plus a starter SDR layer. Growth-stage fintechs running multiple ICPs are €10k–€22k per month against a full lifecycle build, demo content production, founder-led thought leadership and SDR programmes for two-to-four personas. We scope an honest minimum on the first call rather than push a fixed package." },
  { q: "Do you work with VFA and pre-MiCA digital-asset firms?", a: "Yes — within the MFSA VFA framework today and the MiCA transition timeline going forward. Marketing of regulated digital-asset services is tightly governed and the language used in marketing matters. We work with your compliance team on every claim and have a documented pre-clearance process for VFA-targeted creative." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumbs`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://oarcdigital.com/industries" },
      { "@type": "ListItem", position: 3, name: "Fintech", item: CANONICAL },
    ] },
    { "@type": "CollectionPage", "@id": `${CANONICAL}#collection`, url: CANONICAL, name: "Fintech Marketing in Malta", description: DESCRIPTION, inLanguage: "en-MT", isPartOf: { "@type": "WebSite", "@id": "https://oarcdigital.com/#website" }, dateModified: LAST_UPDATED, about: { "@type": "Thing", name: "Fintech marketing in Malta" }, mainEntity: { "@id": `${CANONICAL}#services-list` } },
    { "@type": "ItemList", "@id": `${CANONICAL}#services-list`, name: "Fintech Marketing Services for Malta-Licensed Firms", numberOfItems: services.length, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `https://oarcdigital.com/services/${s.slug}`, name: s.title })) },
    { "@type": "FAQPage", "@id": `${CANONICAL}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function FintechMaltaIndustryHub() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

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
              <span className="text-white">Fintech</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Industry Hub</span>
              </div>
              <time dateTime={LAST_UPDATED} className="text-xs text-white/60" data-testid="text-last-updated">Last updated: {LAST_UPDATED_DISPLAY}</time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>Fintech Marketing in Malta</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              The full marketing stack for Malta-licensed payments, EMI, VFA, banking and SaaS-fintech firms — MFSA-aware brand, regulator-grade web, B2B SDR for CFO and treasurer ICPs, demo-led video, lifecycle automation and the AI SDR agent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="link-cta-strategy-call">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">Book a strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link href="/services/ai-sdr-agent" data-testid="link-cta-ai-agent">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">See the AI SDR Agent</Button>
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Industry Hub</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A hub, not a single product page — six services for the full Malta fintech stack</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page is the broader industry hub for fintech. It is intentionally separate from <Link href="/services/ai-sdr-agent" className="text-orange-600 underline">the AI SDR Agent product page</Link>, which goes deep on a single flagship product. Here we cover the full stack a Malta-licensed payments, EMI, VFA, banking-as-a-service or RegTech SaaS firm needs in 2026: MFSA-aware brand systems, regulator-grade web, demo-led video, long-cycle lifecycle automation, founder-and-policy-led content with regulator citations, and the AI SDR agent that runs against a per-account buying-committee map.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Most firms do not need all six on day one. Early-stage fintechs typically start with brand and regulator-grade web before any acquisition spend. Growth-stage fintechs already trading start with the SDR cadence and lifecycle rebuild, then layer brand and content as the team has bandwidth to absorb them. We will scope the right starting point on the first call rather than push a fixed package.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A regulator-dense market with a fast-moving global buying audience</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta&apos;s fintech ecosystem sits inside one of the densest regulatory perimeters in Europe. The MFSA supervises payments institutions, EMIs, VFA service providers, fund managers, banks and insurance intermediaries from a single Mrieħel campus. The IDPC governs personal-data handling. The FIAU governs the AML and CFT regime. Every marketing decision passes through that perimeter, whether the team realises it or not.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              On the buyer side, the market is global. A Malta-licensed EMI sells acquiring services to merchants in Italy, Germany and Cyprus. A VFA brokerage onboards corporate clients across the EU. A pension administrator services UK and continental European employers under EU passporting. A RegTech SaaS sells into MLROs in fifteen countries. The marketing infrastructure has to assume EU-wide buyer reach, multi-language content (English, Italian, German, French) and a buying committee that spans finance, treasury, compliance, IT and procurement.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The compounding signal in this market is credibility — regulator citations, named clients, named regulators on the partner list, named integrations on the BIN-sponsor side. Marketing programmes that compound credibility week-on-week win the long-cycle deals. Programmes that chase short-term lead volume tend to burn out in the first six months as the procurement and compliance reviewers in every account quietly score them down.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta fintechs leak deals every quarter</h2>
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

          <section className="bg-zinc-950 text-white rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta Fintech Buyer in Numbers</h2>
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

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six services for Malta fintech — each linking deeper</h2>
            <p className="text-muted-foreground mb-8">Every block below is its own dedicated service page with its own scope, pricing logic and case examples. Most fintechs start with brand plus regulator-grade web (early stage) or SDR plus lifecycle (growth stage), and add the others as the team scales.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {services.map((s) => (
                <Link href={`/services/${s.slug}`} key={s.slug} className="block p-6 rounded-xl bg-card border hover:border-orange-400 transition-colors group" data-testid={`link-service-${s.slug}`}>
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
                  <Link href={`/services/${s.slug}`} className="text-xs text-orange-600 hover:text-orange-700 font-medium">Full {s.title.toLowerCase()} page <ArrowRight className="inline w-3 h-3 ml-0.5" /></Link>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Five Fintech Buyer Segments We Actually Serve</h2>
            <p className="text-muted-foreground mb-6">Each segment has a different regulator, a different buying committee and a different content cadence. A single &ldquo;fintech retainer&rdquo; that ignores the differences between an EMI and a VFA brokerage delivers value to neither.</p>
            <div className="space-y-3">
              {segments.map((s, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border flex items-start gap-4 flex-wrap md:flex-nowrap">
                  <span className="font-bold text-orange-600 text-sm md:w-56 flex-shrink-0">{s.market}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold">AI SDR Agent — buying-committee-aware outbound for fintech ICPs</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Fintech sales cycles fail not because the cold-email tool is wrong but because the cadence treats a six-person buying committee as a single contact. The OARC AI SDR agent runs against a per-account buying-committee map, sequences persona-specific messaging to the CFO, treasurer, head of payments, MLRO, integration lead and procurement on different rhythms, and routes everything through a human approver inside the MFSA / IDPC compliance perimeter.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              It works in English, Italian, German and French on a sustained cadence and in another six languages on a project basis. Every send carries a documented lawful basis under IDPC guidance. Reporting tells the head of revenue exactly which personas inside which accounts are progressing through the cadence, where the buying committee has expanded mid-deal, and where compliance escalation came from.
            </p>
            <Link href="/services/ai-sdr-agent" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm">
              Full AI SDR Agent product page <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How a Fintech Programme Typically Rolls Out</h2>
            <p className="text-muted-foreground mb-6">A realistic ninety-day shape for a growth-stage Malta fintech with the licence in hand and the first revenue trading. Pre-licensed firms compress the early weeks; later-stage firms stretch them.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 1–2 — Regulatory IA audit and compliance interview</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We audit the existing site against the MFSA conduct-of-business expectations, the partner-bank vendor pack, the IDPC consent picture and the FIAU AML statements. We interview the MLRO, the compliance officer and the founder. Output is a written prioritised plan and a rebuilt regulatory IA for the website.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 3–6 — Brand, regulator-grade web and demo content</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Brand system delivered with MFSA brand-mark guidance and trademark-ready master logo. Regulator-grade web rebuilt against the new IA. First demo content production block — three-minute platform demo, longer integration walkthrough, sixty-second LinkedIn cut from a single shoot day.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 7–10 — SDR cadence per ICP and lifecycle build</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Per-account buying-committee maps built for the top 100 target accounts in each ICP. Persona-specific cadences go live with a human approver inside the MFSA / IDPC perimeter. CRM lifecycle automation rewired against the actual nine-to-fourteen-month buying journey, with IDPC-grade consent logging end-to-end.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 11–13 — Founder content programme and reporting</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">First quarterly regulatory-and-market briefing produced and published. Founder content cadence on LinkedIn goes live with two posts per week and one long-form briefing per month. Reporting consolidates SDR pipeline, lifecycle progression and content engagement into a single principal view with weekly written commentary.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Month 4 onward — Steady-state retainer with quarterly briefings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Programme settles into a steady-state retainer with monthly demo content, sustained SDR optimisation, ongoing lifecycle tuning, and a quarterly regulatory-and-market briefing that anchors the founder content cadence. The principal gets a one-page written summary every month, not a fifty-slide PDF.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Will Not Do for a Fintech Client</h2>
            <p className="text-muted-foreground mb-6">A short, honest list. We share this on the first call so there are no surprises later.</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="p-4 rounded-xl bg-card border"><strong>We do not write copy that goes around the compliance team.</strong> Every claim and every campaign is pre-cleared against MFSA conduct-of-business rules, the relevant EU regime and the firm&apos;s own compliance manual. Speed comes from a better process, not from skipping the check.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not run cold outbound to regulated entities without a human approver in the chain.</strong> The MFSA / MGA / IDPC perimeter is non-negotiable. Every send to a regulated counterparty carries a documented human review.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not work with pre-MiCA digital-asset firms outside a licensed perimeter.</strong> VFA framework today, MiCA transition tomorrow — but not unlicensed activity in either window.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not promise specific deal-cycle compression on the first call.</strong> Honest baseline numbers come after the audit. Anyone promising to halve a fourteen-month sales cycle in the pitch deck is selling a number, not a programme.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not lock fintechs into 24-month contracts.</strong> Standard term is rolling monthly after the first ninety days. The retainer renews because it is working, not because of the paperwork.</li>
            </ul>
          </section>

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

          <RelatedLinks slug="/industries/fintech" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Fintech Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your regulatory IA on the marketing site, your compliance pre-clearance picture, your buying-committee map and your lifecycle automation — and send you a written, prioritised action plan within five working days.
            </p>
            <Link href="/contact" data-testid="link-cta-audit">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">Book the audit <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
        </article>
      </main>
    </Layout>
  );
}
