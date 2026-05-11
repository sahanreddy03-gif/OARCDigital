import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Users, Globe, Brain, Search, Workflow, Target, Trophy, Gauge } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/seo/TrustBlock";
import { IMAGE_REGISTRY } from "@/lib/images/registry";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const HERO_IMAGE_ID = "img-010";
const heroEntry = IMAGE_REGISTRY.find((e) => e.id === HERO_IMAGE_ID);
if (!heroEntry) {
  throw new Error(`/industries/igaming hero image ${HERO_IMAGE_ID} missing from IMAGE_REGISTRY`);
}
const heroImage = `/images/registry/${heroEntry.seoFilename}.webp`;
const heroImageAlt = heroEntry.altText;

const CANONICAL = "https://oarcdigital.com/industries/igaming";
const LAST_UPDATED = "2026-05-11";
const LAST_UPDATED_DISPLAY = "11 May 2026";

const TITLE = "iGaming Marketing in Malta | B2B, Affiliate & Player Operations";
const DESCRIPTION = "The full iGaming marketing stack for Malta operators, studios, platform suppliers and affiliates — MGA-aware paid, B2B SDR programmes for SiGMA season, multilingual creative, retention CRM, and the AI Player Support agent that triages 24/7.";

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
    description: "MGA-aware paid, B2B SDR for SiGMA season, multilingual player creative, retention CRM, and the AI Player Support agent — built for Malta iGaming.",
  },
};

type ServiceBlock = { slug: string; title: string; blurb: string; icon: typeof Brain; detail: string };

const services: ServiceBlock[] = [
  {
    slug: "ai-support-specialist",
    title: "AI Player Support Specialist",
    blurb: "A multilingual support agent reading every player chat, KYC enquiry and bonus question 24/7 — triaging across English, German, Italian, Portuguese, Spanish and Polish, and escalating responsible-gambling signals to a human within seconds.",
    icon: Brain,
    detail: "Player support is where most Tier-2 operators leak NPS and bonus-fraud margin in equal measure. Our AI Player Support agent plugs into your Intercom, Zendesk or Freshdesk instance, reads every inbound chat in the player's language, and resolves the routine 60–70% (deposit method questions, password resets, bonus terms, withdrawal SLAs). Anything carrying responsible-gambling indicators — chasing losses, requesting deposit-limit increases late at night, distress phrasing — escalates to a trained human inside two minutes with the conversation transcript already attached. The same engine answers affiliate enquiries from your B2B inbox without burning your BD lead's mornings.",
  },
  {
    slug: "ai-sdr-agent",
    title: "B2B AI SDR for SiGMA & iGaming Next",
    blurb: "Outbound prospecting for platform suppliers, studios and B2B vendors targeting MGA-licensed operators — calibrated to the Malta iGaming social graph so a tone-deaf outbound message does not poison the well across three accounts in the same building.",
    icon: Target,
    detail: "Mrieħel and Ta' Xbiex are tightly networked enough that every C-suite operator contact knows three others in the same business park. A standard cold-email cadence built for the EU at large will burn three accounts at once on the first send. Our SDR agents are tuned to the Malta-specific cadence — Maltese surnames, MGA licence-class nuance, the SiGMA conference rhythm — and route everything through a human approver inside the regulated perimeter. The cadence compresses to a SiGMA-week sprint in November and an iGaming Next sprint in March, then sustained nurture between events.",
  },
  {
    slug: "paid-advertising",
    title: "MGA-Aware Paid Acquisition",
    blurb: "Compliant paid programmes across permissible inventory — Google Search inside Maltese-licensed creative limits, Meta and TikTok where the regulated market allows, and a curated affiliate-network layer with traffic quality scoring.",
    icon: Gauge,
    detail: "Most operator paid programmes either overspend on broad inventory and burn the responsible-gambling compliance officer's patience, or hide inside a single affiliate network that prices traffic up every renewal. We build a hybrid stack — direct paid against permissible inventory in regulated jurisdictions, plus a curated affiliate layer where each partner carries a traffic-quality score (deposit-to-FTD ratio, 30-day churn, bonus-abuse rate) that updates monthly. Spend reallocates against the score, not the network rep's quarterly target.",
  },
  {
    slug: "video-production",
    title: "Game Trailers, Studio Reels & Event Content",
    blurb: "Game-launch trailers for studio releases, B2B platform-demo reels for SiGMA, operator brand films and post-event highlights — produced from our Birkirkara studio with the licensing/permits chain handled.",
    icon: Trophy,
    detail: "A studio launching a new slot needs three deliverables on day one: a 30-second hero trailer for the operator integration deck, a vertical 9:16 cut for affiliate social, and a longer 90-second walkthrough for the B2B sales conversation. We produce all three from a single shoot, plus a SiGMA-specific stand activation reel in November and a post-event highlight cut filmed in three days of conference floor coverage. Drone work over Malta locations runs under our Malta Civil Aviation Directorate permit so the bastion-skyline opening shot is shot legally and insured.",
  },
  {
    slug: "marketing-automation-suite",
    title: "Player CRM & Retention Automation",
    blurb: "HubSpot, Optimove or Smartico wired into your platform so deposit cohorts, bonus eligibility, dormancy windows and responsible-gambling flags all drive the right next message in the right language at the right time.",
    icon: Workflow,
    detail: "Acquisition spend is wasted if the first-deposit-to-second-deposit window leaks. We map the full player lifecycle — registration, KYC completion, FTD, second deposit, day-30, day-90, dormancy — and wire the CRM stack so each cohort gets the right communication. Responsible-gambling signals override the marketing logic at every step, so a player who has just self-imposed a deposit limit never receives a top-up bonus push. Reporting is built so the head of CRM can see retention by deposit cohort, by acquisition channel and by language in one screen.",
  },
  {
    slug: "branding",
    title: "Operator & Studio Brand Systems",
    blurb: "Brand identity work for new operator launches, studio rebrands and B2B platform repositioning — built to survive an MGA brand-mark review, an affiliate-network logo grid and a SiGMA stand at 8x8 metres.",
    icon: Shield,
    detail: "An iGaming brand identity has to work in four very different contexts: the player-facing casino lobby (high colour, high motion), the affiliate-network logo grid (ultra-compact, low contrast tolerance), the regulator's brand-mark review (defensible against trademark search and sober enough for a compliance file), and the SiGMA stand (8x8 metres of branded scrim under harsh exhibition lighting). We deliver Adobe + Figma source plus a trademark-ready master logo and a brand-system guide that covers all four contexts in one document.",
  },
];

const segments = [
  { market: "B2C Operators (MGA-licensed)", detail: "Tier-2 and Tier-3 casino, sportsbook and combined operators competing against the Maltese-headquartered Tier-1s. Marketing budget is real but compliance overhead eats a third of it. Wins come from CRM compounding, not paid blast." },
  { market: "Game Studios & Aggregators", detail: "Slot studios, live-dealer providers and content aggregators selling into operators across the EU, LatAm and emerging African markets. Buyers are integration directors, not players. SiGMA, iGB Live and ICE Barcelona are the three deal-making windows in the year." },
  { market: "Platform & B2B Suppliers", detail: "Platform providers, payment specialists, KYC vendors, affiliate-tracking platforms and managed-services suppliers. Sales cycles run 6–14 months and the buying committee is five-to-eight people deep — content, demo reels and a clean BD operations stack matter more than ad spend." },
  { market: "Affiliate & Media Networks", detail: "The Malta affiliate ecosystem is dense and incestuous. The same five tracking platforms, ten major network owners and twenty meaningful media properties show up at every event. Reputation compounds and burns equally fast — every campaign decision should be checked against the social graph before it ships." },
  { market: "Responsible-Gambling & Tooling Vendors", detail: "A growing segment of MGA-licensed safer-gambling, dispute-resolution and player-protection vendors selling into operators globally. The pitch sits closer to GovTech B2B than casino marketing — credibility content, regulator citations and clear ROI numbers do the heavy lifting." },
];

const painPoints = [
  { icon: Shield, title: "Compliance bottleneck strangling creative output", detail: "Every piece of player-facing creative needs sign-off against the MGA's Commercial Communications regulation, the regulator-of-record in each target market, and the operator's own internal responsible-gambling guidelines. Without a compliance-aware production process, a single campaign brief can sit in the queue for three weeks before a single asset goes live. The fix is a structured pre-clearance template, a shared phrase blocklist and a compliance reviewer embedded in the weekly creative standup — not a post-hoc legal pass." },
  { icon: Globe, title: "Multilingual creative scale collapsing into machine translation", detail: "A Tier-2 operator running ten regulated markets needs creative variants in eight languages on a weekly cadence. Most teams collapse this into Google Translate plus a low-cost localisation vendor and end up with creative that natives quietly dismiss as 'foreign' on first read. We staff the cadence with native speakers in the six languages that move the meter (English, German, Italian, Spanish, Portuguese-BR, Polish) and machine-translate only the legals, with a native review on every piece before publish." },
  { icon: Users, title: "B2B BD time burned on tyre-kickers around SiGMA", detail: "The week before SiGMA, every operator inbox fills with 'quick coffee' requests from suppliers chasing a 15-minute slot. Half of those requests are not real opportunities — they are vendor calendar-padding. Without an upstream qualification layer, the BD lead arrives at SiGMA with a calendar of 35 meetings and no time for the eight that actually matter. AI qualification on inbound calendar requests, plus an SDR-led pre-event outreach focused on confirmed budget and integration timeline, fixes this." },
  { icon: Workflow, title: "Affiliate spend running blind on traffic quality", detail: "Most operators pay affiliate networks on revenue share or CPA without scoring traffic quality at the cohort level. The result: 15–25% of monthly affiliate spend is going to networks whose traffic churns inside 30 days, costs more in support and bonus-fraud than it returns, and crowds out the long-tail affiliates who actually compound. A monthly traffic-quality scorecard reallocates spend off the bottom quartile and pays back inside one quarter." },
];

const stats = [
  { metric: "300+", label: "MGA-licensed operators", note: "competing on the same Malta talent pool" },
  { metric: "8 lang", label: "creative production cadence", note: "for a typical Tier-2 operator running 10 markets" },
  { metric: "6–14 mo", label: "B2B sales cycle", note: "platform, payments, KYC and managed-service deals" },
  { metric: "2 events", label: "SiGMA + iGaming Next", note: "compress the year into two BD sprints" },
];

const faqs = [
  { q: "Do you understand MGA Commercial Communications and responsible-gambling rules?", a: "Yes. Every piece of player-facing creative goes through a structured pre-clearance against the MGA's Commercial Communications regulation, the relevant safer-gambling indicators and (where applicable) the regulator-of-record in each target market — Spelinspektionen for SE, ADM for IT, ANJ for FR and so on. We never publish player-facing creative without a documented compliance pass on file." },
  { q: "Can you handle B2B marketing for a platform supplier or game studio?", a: "B2B iGaming is half of what we do. The cadence is structurally different from B2C — long sales cycles, five-to-eight-person buying committees, conference-driven deal flow. We build SDR programmes calibrated to the Malta operator social graph, produce demo reels that survive an integration director's scrutiny, and run a quarterly content programme that gets the brand cited in operator buying conversations between events." },
  { q: "What languages do you produce creative and player support in?", a: "Native production for English, German, Italian, Spanish, Portuguese-BR and Polish on a sustained cadence; project-based work in French, Dutch, Swedish, Romanian, Greek and Russian. The AI Player Support agent covers all of those plus another dozen at machine-translation grade with native fall-back review for any escalation." },
  { q: "How do you score affiliate traffic quality?", a: "We pull deposit-to-FTD ratio, 30-day churn rate, bonus-abuse rate and net gaming revenue per visitor at the affiliate-cohort level on a monthly cycle. Each affiliate gets a composite quality score against the operator portfolio average, and spend reallocates each quarter off the bottom quartile. Most operators recover 10–18% of monthly affiliate spend in the first reallocation cycle without losing top-line FTD volume." },
  { q: "Can you build a SiGMA or iGaming Next activation programme?", a: "Yes — pre-event SDR outreach focused on confirmed budget and integration timeline, on-stand demo reels, a daily highlight cut filmed live, and a post-event nurture sequence that opens within 48 hours of the closing keynote. The aim is calendar quality going in and pipeline conversion coming out, not vanity stand traffic." },
  { q: "What budgets are realistic for an iGaming engagement?", a: "Studios and platform suppliers typically commit €4k–€10k per month for the B2B programme between events, scaling to €18k–€30k for the SiGMA-month sprint. B2C operators committing to a full retention CRM rebuild plus AI Player Support plus paid management are usually €12k–€25k per month, with affiliate spend reported separately. We scope an honest minimum on the first call." },
  { q: "Do you work with operators in unlicensed or grey markets?", a: "No. We work only with operators carrying a current MGA licence (or an equivalent recognised EU/EEA licence) and only target jurisdictions where the operator is licensed or pre-licensed. Grey-market work creates compliance liability we cannot indemnify and reputation risk for the rest of the client portfolio." },
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
        { "@type": "ListItem", position: 3, name: "iGaming", item: CANONICAL },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${CANONICAL}#collection`,
      url: CANONICAL,
      name: "iGaming Marketing in Malta",
      description: DESCRIPTION,
      inLanguage: "en-MT",
      isPartOf: { "@type": "WebSite", "@id": "https://oarcdigital.com/#website" },
      dateModified: LAST_UPDATED,
      about: { "@type": "Thing", name: "iGaming marketing in Malta" },
      mainEntity: { "@id": `${CANONICAL}#services-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${CANONICAL}#services-list`,
      name: "iGaming Marketing Services for Malta Operators, Studios & Suppliers",
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
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function IGamingMaltaIndustryHub() {
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
              <span className="text-white">iGaming</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Industry Hub</span>
              </div>
              <time dateTime={LAST_UPDATED} className="text-xs text-white/60" data-testid="text-last-updated">Last updated: {LAST_UPDATED_DISPLAY}</time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>iGaming Marketing in Malta</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              The full marketing stack for Malta-licensed operators, studios, B2B platform suppliers and affiliate networks — MGA-aware paid, B2B SDR for SiGMA, multilingual creative, retention CRM, and the AI Player Support agent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="link-cta-strategy-call">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">Book a strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link href="/services/ai-support-specialist" data-testid="link-cta-ai-agent">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">See the AI Player Support agent</Button>
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Industry Hub</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A hub, not a single product page — six services for the full Malta iGaming stack</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page is the broader industry hub for iGaming. It is intentionally separate from <Link href="/services/ai-support-specialist" className="text-orange-600 underline">the AI Player Support product page</Link>, which goes deep on a single flagship product. Here we cover the full stack a Malta-licensed operator, studio, platform supplier or affiliate network needs in 2026: MGA-aware paid acquisition, B2B SDR programmes calibrated to SiGMA and iGaming Next, multilingual creative production, player retention CRM, brand systems that survive a regulator review, and the AI player-support layer that resolves 60–70% of routine chat in the player&apos;s own language.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Most companies do not need all six on day one. The honest sequence we recommend in the first call is usually: fix the compliance-aware creative process so the team can ship on a weekly cadence, layer the AI player-support agent on top of an existing helpdesk to free up human capacity, then plug in the retention CRM rebuild and the B2B SDR programme as the team has bandwidth to absorb them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">One of the world&apos;s most regulated, most networked iGaming markets — on a single bus route</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta hosts more than three hundred MGA-licensed operators, the European headquarters of most major studios and platform suppliers, and the dominant calendar event of the global iGaming year in SiGMA. The result is a market that is simultaneously huge in deal value and tiny in social graph — the BD director at a Mrieħel platform supplier has lunch every other Thursday with the integrations lead at a Ta&apos; Xbiex operator, and they both knew each other&apos;s previous teams.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Compliance is the structural constraint that shapes every marketing decision. The MGA&apos;s Commercial Communications regulation governs player-facing creative, and most operators run regulated activity in five-to-twelve additional jurisdictions, each with its own communication rules. A B2C operator launching a new market without a compliance-aware creative process either ships nothing for six weeks or ships something that triggers a regulator letter inside the first month.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              On the B2B side, the year compresses into two windows. SiGMA in November and iGaming Next in March account for the majority of integration deals signed in the calendar year. The pre-event SDR sprint, the on-floor activation and the post-event nurture sequence are not optional add-ons — they are the operating rhythm of B2B iGaming marketing in Malta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta iGaming companies leak margin every week</h2>
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
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta iGaming Market in Numbers</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six services for Malta iGaming — each linking deeper</h2>
            <p className="text-muted-foreground mb-8">Every block below is its own dedicated service page with its own scope, pricing logic and case examples. Most engagements start with two or three of these and add the others as the team has capacity to absorb them.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Five iGaming Buyer Segments We Actually Serve</h2>
            <p className="text-muted-foreground mb-6">Each segment has a different cadence, a different buying committee and a different compliance perimeter. A single &ldquo;iGaming retainer&rdquo; that ignores the differences between an MGA operator and a platform supplier ends up delivering value to neither.</p>
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
              <h2 className="text-xl font-bold">AI Player Support — multilingual triage that protects margin and players in the same workflow</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              The OARC AI Player Support agent reads every inbound chat, ticket and DM in the player&apos;s language, resolves the routine 60–70% (deposit method, password reset, bonus terms, withdrawal SLAs), and escalates every responsible-gambling indicator to a trained human inside two minutes with the full conversation transcript attached. It runs on top of your existing Intercom, Zendesk or Freshdesk install — no rip-and-replace.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              On the B2B side, the same engine handles inbound from your affiliate inbox and your platform-sales inbox, qualifies on integration timeline and budget, and routes high-priority enquiries to a BD lead within minutes. Reporting tells the head of operations exactly where human time is going, where the model is over- or under-confident, and where the next compliance escalation came from.
            </p>
            <Link href="/services/ai-support-specialist" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm">
              Full AI Player Support product page <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How an iGaming Programme Typically Rolls Out</h2>
            <p className="text-muted-foreground mb-6">A realistic ninety-day shape for a Tier-2 operator or a mid-stage platform supplier. SiGMA-driven engagements compress the front-loaded weeks; B2B-only engagements stretch them.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 1–2 — Compliance audit and creative-process rebuild</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">We audit the current creative pre-clearance process, the regulator-of-record perimeter for each target market, the responsible-gambling phrase blocklist and the existing compliance reviewer&apos;s queue depth. Output is a written prioritised plan and a structured pre-clearance template embedded in the weekly creative standup.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 3–6 — AI Player Support pilot and language layer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">The AI Player Support agent is connected to the existing helpdesk in shadow mode for two weeks, then live in a single language for two weeks, then expanded to the six-language production cadence. Native reviewers are onboarded for the languages that matter; machine translation falls back to native escalation for everything else.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 7–10 — CRM rebuild and affiliate quality scoring</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Player CRM is rewired against the actual deposit cohort logic, with responsible-gambling overrides at every step. Affiliate traffic-quality scoring goes live with the first monthly reallocation cycle. Reporting consolidates retention, paid acquisition and affiliate quality into a single principal view.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 11–13 — B2B SDR cadence (or SiGMA sprint)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">For studio and platform clients, the SDR cadence goes live calibrated to the operator social graph. For B2C operators, this block is reallocated to a paid acquisition rebuild and a fresh creative production sprint. SiGMA-month engagements compress everything above into the first ten weeks and dedicate weeks 11–13 to the event activation.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Month 4 onward — Steady-state retainer with event sprints</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Programme settles into a steady-state retainer with monthly creative production, sustained CRM optimisation, ongoing AI player-support tuning and a written monthly review. Two SiGMA/iGaming Next sprints in November and March ride on top of the baseline retainer with separate scopes.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Will Not Do for an iGaming Client</h2>
            <p className="text-muted-foreground mb-6">A short, honest list. We share this on the first call so there are no surprises later.</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="p-4 rounded-xl bg-card border"><strong>We do not work with operators outside a recognised licence.</strong> MGA, UKGC, Spelinspektionen, ADM, ANJ, and equivalent EU/EEA regulators are the perimeter. Grey-market work creates compliance liability we cannot indemnify and reputation risk for the rest of the client portfolio.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not bypass responsible-gambling overrides for a CRM push.</strong> A player who has self-imposed a deposit limit never receives a top-up bonus communication from any campaign we run, regardless of cohort value.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not run player-facing creative without a documented compliance pass.</strong> Every asset carries a pre-clearance signature in the campaign log. Speed comes from a better process, not from skipping the check.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not promise specific FTD or NGR numbers on the first call.</strong> Honest baseline numbers come after the audit, not before. Anyone promising headline numbers in the pitch deck is selling a number, not a programme.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not lock clients into 24-month contracts.</strong> Standard term is rolling monthly after the first ninety days. The retainer renews because it is working, not because of the paperwork.</li>
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

          <RelatedLinks slug="/industries/igaming" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free iGaming Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your compliance pre-clearance process, your player support stack, your CRM cohort logic and your affiliate quality picture — and send you a written, prioritised action plan within five working days.
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
