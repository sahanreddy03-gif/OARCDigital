import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Brain, Search, Workflow, Camera, Utensils, Calendar, Users, Star } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";
import TrustBlock from "@/components/seo/TrustBlock";
import { IMAGE_REGISTRY } from "@/lib/images/registry";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";

const HERO_IMAGE_ID = "img-008";
const heroEntry = IMAGE_REGISTRY.find((e) => e.id === HERO_IMAGE_ID);
if (!heroEntry) {
  throw new Error(`/industries/restaurants hero image ${HERO_IMAGE_ID} missing from IMAGE_REGISTRY`);
}
const heroImage = `/images/registry/${heroEntry.seoFilename}.webp`;
const heroImageAlt = heroEntry.altText;

const CANONICAL = "https://oarcdigital.com/industries/restaurants";
const LAST_UPDATED = "2026-05-11";
const LAST_UPDATED_DISPLAY = "11 May 2026";

const TITLE = "Restaurant Marketing in Malta | Covers, Reviews & AI Bookings";
const DESCRIPTION = "The full restaurant marketing stack for Malta venues — Google Business Profile, Instagram and TikTok content cadence, paid local awareness, review programmes, CRM for repeat covers, and the AI Booking agent that handles after-hours reservations 24/7.";

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
    description: "GBP, Instagram and TikTok cadence, local paid awareness, review programmes, CRM for repeat covers, plus the AI Booking agent — built for Malta restaurants.",
  },
};

type ServiceBlock = { slug: string; title: string; blurb: string; icon: typeof Brain; detail: string };

const services: ServiceBlock[] = [
  {
    slug: "ai-appointment-booker",
    title: "AI Booking Agent for Restaurants",
    blurb: "An AI booking agent reading every after-hours reservation enquiry across WhatsApp, Instagram DM, Google Maps message and the website form — confirming availability against your existing booking system in seconds, in English, Maltese, Italian, German and French.",
    icon: Brain,
    detail: "Most Malta restaurants lose 20–35% of weekly cover requests because the booking enquiry lands at 22:30 in an Instagram DM and the manager replies the next afternoon, by which point the table has gone to whoever answered first. Our AI Booking agent plugs into Quandoo, OpenTable, ResDiary or your in-house diary, reads inbound enquiries from WhatsApp, Instagram, Facebook, Google Maps and the website form, confirms availability against the live diary in seconds, and routes anything unusual (large groups, dietary requirements, celebration set-up) to the manager with the conversation transcript already attached.",
  },
  {
    slug: "social-media-creative-management",
    title: "Restaurant Social Media (Instagram + TikTok)",
    blurb: "A weekly content cadence that wins both audiences in parallel — the St Julian&apos;s and Sliema tourist-and-expat crowd on Instagram and TikTok, and the Maltese family-decision audience on Facebook event shares and parish-feast tie-ins.",
    icon: Camera,
    detail: "Posting once a week with a stock photo and a hashtag list does not move covers in Malta in 2026. We run a weekly shoot day at the venue capturing dish reels, kitchen-pass cuts, front-of-house b-roll and one founder/chef story piece, then schedule across Instagram, TikTok and Facebook with platform-specific edits. The Sliema and St Julian&apos;s audience converts on Reels saves and TikTok geo-tags; the Mosta, Birkirkara and Mqabba family audience still moves on Facebook event shares and a clean parish-feast tie-in. Both run from the same shoot.",
  },
  {
    slug: "seo-services",
    title: "Google Business Profile & Local Search",
    blurb: "Own the Google Maps, Google Business Profile and local-pack presence for every search a Malta diner runs — &lsquo;best pasta Sliema&rsquo;, &lsquo;rooftop dinner Valletta&rsquo;, &lsquo;Sunday lunch Mdina&rsquo; — with weekly photos, weekly posts and a reviews response workflow.",
    icon: Search,
    detail: "Google Business Profile is the single most undermanaged channel in Malta hospitality. Most venues have a profile that has not been updated since the soft launch, twelve photos all from the opening week, and unanswered reviews going back six months. We rebuild GBP with weekly fresh photos, weekly posts (events, menu changes, chef features), and a structured reviews response workflow that replies inside 24 hours to every review — five-star, three-star or one-star. The local-pack presence on Maps queries lifts measurably inside ninety days.",
  },
  {
    slug: "paid-advertising",
    title: "Local Paid Awareness & Event Promotion",
    blurb: "Hyper-local Meta and Google campaigns targeting the catchment around the venue, plus event-specific promotion for Easter, summer rooftop seasons, Christmas private hire and Valentine&apos;s — measured in covers, not impressions.",
    icon: Utensils,
    detail: "Most restaurant paid programmes run a single &ldquo;always-on&rdquo; campaign with a generic dish photo and end up paying for impressions inside the wrong audience. We split spend into a hyper-local always-on awareness layer (Meta + Google), an event-driven campaign layer for the calendar moments that actually drive premium covers (Easter, summer rooftop opening, Christmas private hire, Valentine&apos;s, Notte Bianca, restaurant week), and a creative testing budget. Reporting is in covers and average cover value, not impressions or reach.",
  },
  {
    slug: "marketing-automation-suite",
    title: "Repeat-Cover CRM & Loyalty",
    blurb: "Connect your booking system, your POS and your loyalty programme so first-time guests get a thank-you the next morning, third-visit guests get a manager note, and lapsed regulars get a structured win-back inside ninety days.",
    icon: Workflow,
    detail: "Acquisition cost on a new Malta restaurant cover sits at €8–€18 across paid, content and review-programme spend. Once you have the cover, the marginal cost of bringing them back is essentially zero — but most venues never do. We wire the booking system, POS and loyalty stack so first-time guests receive a thank-you the next morning, third-visit guests receive a personalised note from the manager, and regulars who have not visited in ninety days enter a structured win-back sequence with a real reason to come back, not a discount race to the bottom.",
  },
  {
    slug: "video-production",
    title: "Dish Reels, Chef Films & Venue Walkthroughs",
    blurb: "Cinematic dish reels for Instagram, kitchen-pass and chef story films for the website and TikTok, and a once-yearly venue walkthrough that becomes the hero asset for paid creative and the Google Business Profile cover.",
    icon: Camera,
    detail: "Restaurant video production is one of our highest-leverage services in this vertical. A single half-day shoot at the venue yields ten dish reels, a 60-second kitchen-pass cut, a 90-second chef story piece, and a 45-second venue walkthrough — enough creative to feed Instagram, TikTok and paid for six-to-eight weeks. Drone work over the venue (where licensed) is operated under our Malta Civil Aviation Directorate permit so a Valletta rooftop opening shot or a Mellieha Bay terrace cut is shot legally and insured.",
  },
];

const segments = [
  { market: "Sliema, St Julian's & Paceville", detail: "The expat-and-tourism dining belt. Conversion is led by Instagram saves, TikTok geo-tags, and the Google Maps local pack on \u2018dinner near me\u2019 queries. Average cover values are higher; review programmes carry disproportionate weight in the buying decision." },
  { market: "Valletta, Mdina & the Three Cities", detail: "Heritage and occasion dining. Buyers research weeks ahead, book via the website or OpenTable, and read long-form Google reviews before committing. Cinematic dish video and a curated GBP photo set drive most of the inbound." },
  { market: "Mosta, Birkirkara, Attard & the Central Belt", detail: "The Maltese family-decision market. Sunday lunch, communions, family birthdays and parish-feast tie-ins drive the cover calendar. Facebook event shares and word-of-mouth dominate; Instagram is supporting, not lead." },
  { market: "Marsaxlokk, Mellieha & Coastal", detail: "Seasonal demand peaks in summer with strong cruise-passenger and day-tripper traffic. Lunch covers dominate over dinner. Visual content, drone footage and clear \u2018sea-view terrace\u2019 positioning win the discovery moment on Maps and Instagram." },
  { market: "Gozo", detail: "A separate market with longer dwell time, more occasion dining, and a stronger UK / German lifestyle-traveller audience. Slower content cadence, longer-form storytelling, and a tighter integration with the Gozo agritourism circuit (rural restaurants, vineyards, farm-to-table) outperforms the high-frequency cadence that wins in Sliema." },
];

const painPoints = [
  { icon: Calendar, title: "After-hours bookings dying in three different inboxes", detail: "Booking enquiries land in WhatsApp, Instagram DMs, Google Maps messages, the website form and the OpenTable widget. Nobody owns the consolidated view, the manager catches up the next afternoon, and 20–35% of weekly cover requests are lost to whoever replied within the hour. The fix is not &lsquo;reply faster&rsquo; — it is an AI booking layer that confirms availability in seconds, in the diner&apos;s language." },
  { icon: Star, title: "Google Business Profile abandoned at the soft launch", detail: "Most Malta venues have a GBP that was set up the week before opening and not touched since. Twelve photos, no recent posts, unanswered reviews going back six months. The Maps local pack is a real channel — &lsquo;best pasta Sliema&rsquo; gets 40+ branded searches per week — and an undermanaged GBP loses the local pack to whichever competitor refreshed their photos last week." },
  { icon: Users, title: "First-time covers never converted into repeat covers", detail: "Acquisition cost on a new cover is €8–€18 across paid, content and review-programme spend. Once you have the diner, the marginal cost of bringing them back is essentially zero — but most venues never close that loop. No thank-you the next morning, no manager note on the third visit, no structured win-back at day 90. The CRM rebuild that fixes this is one of the highest-ROI projects in restaurant marketing." },
  { icon: Camera, title: "Content cadence that posts a stock photo once a week", detail: "Posting once a week with a stock photo and a hashtag list does not move covers in 2026. The Sliema and St Julian&apos;s audience converts on Reels saves and TikTok geo-tags; the Mosta family audience still moves on Facebook event shares. Both audiences need real venue content shot weekly — dish reels, kitchen-pass cuts, chef voice — not stock photography from a content library." },
];

const stats = [
  { metric: "20–35%", label: "of weekly cover requests", note: "lost to slow after-hours response" },
  { metric: "5 lang", label: "supported by the AI Booking agent", note: "EN, MT, IT, DE, FR" },
  { metric: "€8–€18", label: "acquisition cost per new cover", note: "across paid, content and review programmes" },
  { metric: "90 days", label: "to lift Maps local-pack rank", note: "with a properly managed GBP" },
];

const faqs = [
  { q: "Can you handle bookings across WhatsApp, Instagram DMs, Google Maps and the website?", a: "Yes — that is the design brief for the AI Booking agent. We connect to your existing diary (Quandoo, OpenTable, ResDiary or in-house), read inbound enquiries from WhatsApp Business, Instagram DMs, Facebook Messenger, Google Maps and the website form, and confirm availability in seconds. Anything unusual — large groups, dietary requirements, celebration set-up — is routed to the manager with the conversation transcript attached." },
  { q: "What languages does the AI Booking agent handle?", a: "English, Maltese, Italian, German and French on a sustained production cadence; Spanish, Portuguese, Polish and Dutch at machine-translation grade with native fall-back review on escalations. The five primary languages cover the bulk of after-hours booking traffic from local diners, expats and the cruise-passenger audience that lands in the harbour cities." },
  { q: "How quickly can we lift our Google Maps and local-pack ranking?", a: "Measurable lift inside 90 days for most venues, with the biggest gains in the first 30 days from the basic GBP rebuild — fresh photos, weekly posts, and a reviews response workflow that replies to every review inside 24 hours. The local pack on &lsquo;best pasta Sliema&rsquo; or &lsquo;rooftop dinner Valletta&rsquo; type queries is genuinely winnable for properly managed venues." },
  { q: "Do you work with cafes, bars and gastropubs as well as full-service restaurants?", a: "Yes — the operational stack is similar. The content cadence and the AI booking layer transfer cleanly. The CRM and loyalty work flexes against the venue&apos;s actual ticket size and visit frequency — a Sliema speciality coffee venue runs a different repeat-visit cadence to a Valletta heritage restaurant or a Marsaxlokk fish lunch venue." },
  { q: "Can you produce dish video and chef content at our venue?", a: "Yes. A single half-day shoot at the venue yields enough creative — dish reels, kitchen-pass cut, chef story piece, venue walkthrough — to feed Instagram, TikTok and paid for six-to-eight weeks. Drone work over the venue, where licensed, runs under our Malta Civil Aviation Directorate permit so a rooftop opening or terrace cut is shot legally and insured." },
  { q: "How do you handle reviews — including the negative ones?", a: "Every review gets a response inside 24 hours. Positive reviews get a thank-you that names the dish or the team member mentioned. Three-star and below get a measured, named-manager response that acknowledges the issue and invites a direct conversation offline, never a defensive reply on the public thread. The response cadence itself is part of what lifts the Maps ranking." },
  { q: "What budgets are realistic for a Malta restaurant engagement?", a: "Independent single-site venues typically commit €1.8k–€4k per month for the content cadence plus GBP plus paid management. Adding the AI Booking agent and the repeat-cover CRM rebuild lifts that to €3k–€6k per month and pays back inside one quarter on saved cover loss alone. Multi-site groups are quoted on a per-venue baseline plus a group-level retainer for shared content production." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "@id": `${CANONICAL}#breadcrumbs`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oarcdigital.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://oarcdigital.com/industries" },
      { "@type": "ListItem", position: 3, name: "Restaurants", item: CANONICAL },
    ] },
    { "@type": "CollectionPage", "@id": `${CANONICAL}#collection`, url: CANONICAL, name: "Restaurant Marketing in Malta", description: DESCRIPTION, inLanguage: "en-MT", isPartOf: { "@type": "WebSite", "@id": "https://oarcdigital.com/#website" }, dateModified: LAST_UPDATED, about: { "@type": "Thing", name: "Restaurant marketing in Malta" }, mainEntity: { "@id": `${CANONICAL}#services-list` } },
    { "@type": "ItemList", "@id": `${CANONICAL}#services-list`, name: "Restaurant Marketing Services for Malta Venues", numberOfItems: services.length, itemListOrder: "https://schema.org/ItemListOrderAscending", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `https://oarcdigital.com/services/${s.slug}`, name: s.title })) },
    { "@type": "FAQPage", "@id": `${CANONICAL}#faq`, mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "ImageObject", "@id": `${CANONICAL}#case-study-image`, url: "https://oarcdigital.com/attached_assets/hf_20260420_110118_7550d988-bf93-45c0-b657-8533bafeeba7_1779836586701.png", name: "Malta restaurant and hotel marketing results — Google Business Profile, Instagram, TikTok and AI booking", description: "OARC Digital restaurant and hospitality marketing results for Malta venues — Google Business Profile, Instagram, TikTok content cadence, and AI booking agent.", width: 1080, height: 1080, contentUrl: "https://oarcdigital.com/attached_assets/hf_20260420_110118_7550d988-bf93-45c0-b657-8533bafeeba7_1779836586701.png" },
  ],
};

export default function RestaurantsMaltaIndustryHub() {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

        <div className="bg-zinc-950 flex justify-center py-6 px-4" data-testid="section-restaurant-hero-image">
          <img
            src="/attached_assets/hf_20260420_110118_7550d988-bf93-45c0-b657-8533bafeeba7_1779836586701.png"
            alt="OARC Digital restaurant and hotel systems Malta — direct ordering, self-order kiosks, automated review funnels, and real-time owner dashboards for Malta hospitality | OARC Digital"
            width={1080}
            height={1080}
            className="w-full max-w-xl rounded-xl shadow-2xl"
            fetchPriority="high"
            data-testid="img-restaurant-hero"
          />
        </div>

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
              <span className="text-white">Restaurants</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">Malta Industry Hub</span>
              </div>
              <time dateTime={LAST_UPDATED} className="text-xs text-white/60" data-testid="text-last-updated">Last updated: {LAST_UPDATED_DISPLAY}</time>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-speakable>Restaurant Marketing in Malta</h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl leading-relaxed" data-speakable>
              The full marketing stack for Malta restaurants — Google Business Profile, Instagram and TikTok content cadence, hyper-local paid awareness, review programmes, repeat-cover CRM, and the AI Booking agent that handles after-hours reservations 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="link-cta-strategy-call">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">Book a strategy call <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
              <Link href="/services/ai-appointment-booker" data-testid="link-cta-ai-agent">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20">See the AI Booking Agent</Button>
              </Link>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-16">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">Industry Hub</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A hub, not a single product page — six services for the full Malta restaurant stack</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This page is the broader industry hub for restaurants. It is intentionally separate from <Link href="/services/ai-appointment-booker" className="text-orange-600 underline">the AI Booking Agent product page</Link>, which goes deep on a single flagship product. Here we cover the full stack a Malta restaurant — single-site or multi-venue group — needs in 2026: Google Business Profile and local search, Instagram and TikTok content cadence, hyper-local paid awareness, dish and chef video, repeat-cover CRM, and the AI Booking agent that closes the after-hours response gap.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Most venues do not need all six on day one. The honest sequence we recommend in the first call is usually: rebuild the Google Business Profile and the reviews response workflow first (the highest-ROI single project), layer the AI Booking agent to recover after-hours cover loss, then add the content cadence and the repeat-cover CRM as the team has bandwidth to absorb them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six neighbourhoods, three audiences, one tight competitive market</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Malta&apos;s restaurant market sits inside an unusually dense competitive perimeter — fewer than 320 square kilometres of land, 800+ licensed venues, three audiences (local Maltese, resident expats, and a year-round tourism flow that triples in the summer cruise season). The result is a market where the venue that wins the cover is not necessarily the one with the best food — it is the one whose Google Business Profile photo set is fresher, whose Instagram dish reel landed in the diner&apos;s feed last Tuesday, and whose AI Booking agent confirmed the table inside ninety seconds when the WhatsApp enquiry landed at 22:30.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The audience splits cleanly across the geography. Sliema, St Julian&apos;s, Paceville and the Valletta waterfront are the expat-and-tourism dining belt — Instagram and TikTok lead, the Google Maps local pack is the dominant discovery channel, and review programmes carry disproportionate weight. Mosta, Birkirkara, Attard and the central belt are the Maltese family-decision market — Sunday lunch, communions, family birthdays, parish-feast tie-ins, with Facebook event shares still doing the heavy lifting. Marsaxlokk and the coastal villages run a seasonal lunch-led economy, and Gozo runs a longer-dwell occasion-dining audience that converts on storytelling rather than frequency.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Cruise season (May–October) layers an additional 300,000+ disembarking passengers per year on top of the resident audience, with the bulk landing in Valletta, Vittoriosa and Mġarr Gozo. A venue serving lunch covers in any of those catchments without a curated cruise-week paid layer is leaving substantial revenue on the dock.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Where Malta restaurants leak covers every week</h2>
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
            <h2 className="text-2xl font-bold mb-8 text-center">The Malta Restaurant Market in Numbers</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Six services for Malta restaurants — each linking deeper</h2>
            <p className="text-muted-foreground mb-8">Every block below is its own dedicated service page with its own scope, pricing logic and case examples. Most venues start with GBP plus the AI Booking agent and add the content cadence, paid layer and CRM as the team grows.</p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Five Restaurant Catchments We Actually Target</h2>
            <p className="text-muted-foreground mb-6">Each catchment has a different audience, a different content cadence and a different booking-window pattern. A single &ldquo;Malta restaurant&rdquo; programme that ignores the differences between Sliema and Mosta delivers value to neither.</p>
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
              <h2 className="text-xl font-bold">AI Booking Agent — closing the after-hours cover loss across every channel</h2>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Booking enquiries land at 22:30 on a Saturday in an Instagram DM in Italian. By the time the manager catches up the next afternoon, the table has gone to whoever answered first. The OARC AI Booking agent reads inbound enquiries from WhatsApp Business, Instagram DMs, Facebook Messenger, Google Maps messages and the website form, confirms availability against your live diary inside seconds, and routes anything unusual — large groups, dietary requirements, anniversary set-up — to the manager with the conversation transcript already attached.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              It works in English, Maltese, Italian, German and French on a sustained cadence. Reporting tells the manager exactly how many enquiries arrived per channel, how many converted to confirmed bookings, where the after-hours volume sits, and where the human team should be staffed at peak. Most venues recover 15–25% of weekly cover requests in the first month live.
            </p>
            <Link href="/services/ai-appointment-booker" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors text-sm">
              Full AI Booking Agent product page <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How a Restaurant Programme Typically Rolls Out</h2>
            <p className="text-muted-foreground mb-6">A realistic ninety-day shape for an independent single-site Malta venue. Multi-site groups compress the early weeks across the group; new opening venues stretch them around the soft-launch calendar.</p>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 1–2 — GBP rebuild and reviews response workflow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Highest-ROI single project. We rebuild the Google Business Profile with fresh photos, weekly post cadence, accurate hours and menu, and stand up a 24-hour reviews response workflow that replies to every review — five-star, three-star or one-star — by name, with a measured tone.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 3–6 — AI Booking agent live across every channel</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">AI Booking agent connected to your existing diary, listening across WhatsApp Business, Instagram DMs, Facebook Messenger, Google Maps and the website form. Two weeks in shadow mode against the manager, then live in production with manager escalation for anything unusual.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 7–10 — Content cadence and first paid layer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">First on-venue shoot day produces six-to-eight weeks of dish reels, kitchen-pass cuts, chef story and venue walkthrough. Weekly content schedule goes live across Instagram, TikTok and Facebook with platform-specific edits. Hyper-local Meta and Google paid awareness layer goes live with measured spend.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Weeks 11–13 — Repeat-cover CRM and loyalty rebuild</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Booking system, POS and loyalty stack wired so first-time guests get a thank-you the next morning, third-visit guests get a personalised manager note, and lapsed regulars get a structured win-back at day 90. Reporting consolidates covers, average cover value, repeat-visit rate and reviews into a single owner view.</p>
              </div>
              <div className="p-5 rounded-xl bg-card border">
                <h3 className="font-bold mb-2">Month 4 onward — Steady-state retainer with seasonal sprints</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Programme settles into a steady-state retainer with monthly content production, sustained GBP and reviews management, ongoing AI Booking optimisation, and a one-page written monthly review. Seasonal sprints overlay on top — Easter, summer rooftop opening, Christmas private hire, Valentine&apos;s, Notte Bianca.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Will Not Do for a Restaurant Client</h2>
            <p className="text-muted-foreground mb-6">A short, honest list. We share this on the first call so there are no surprises later.</p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="p-4 rounded-xl bg-card border"><strong>We do not run discount-led campaigns to fill quiet shifts.</strong> Discount races compress margin and train regulars to wait for the next promotion. Mid-week recovery comes from event programming, occasion content and the repeat-cover CRM, not a 20% off coupon.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not buy fake or incentivised reviews.</strong> Google&apos;s detection is good and the downside (a manual action on the GBP) wipes out a year of organic gain. The reviews programme runs on real diners replying to real prompts in the days after the visit.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not stage food photography we did not shoot at the venue.</strong> Stock photography of dishes the kitchen does not actually serve damages trust the moment a diner notices. Every dish reel and dish photo we publish is shot at the venue, of the actual menu.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not lock venues into 24-month contracts.</strong> Standard term is rolling monthly after the first ninety days. The retainer renews because it is working, not because of the paperwork.</li>
              <li className="p-4 rounded-xl bg-card border"><strong>We do not promise specific cover-uplift numbers on the first call.</strong> Honest baseline numbers come after the audit, not before. Anyone promising headline numbers in the pitch deck is selling a number, not a programme.</li>
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

          <RelatedLinks slug="/industries/restaurants" />

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Restaurant Marketing Audit</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We will review your Google Business Profile, your reviews response, your after-hours booking flow and your repeat-cover picture — and send you a written, prioritised action plan within five working days.
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
