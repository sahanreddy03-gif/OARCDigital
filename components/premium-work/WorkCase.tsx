"use client";

/**
 * OARC Design Reminder — each case is a purpose-built documentary, never a repeated landing-page template.
 * PJAZZA is a warm, human, public-product journey; all evidence, live links, and disclosure states remain explicit.
 */
import { ArrowUpRight, ChevronLeft, CircleCheck, MoveRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { DISCOVERY_CONTENT, type DiscoveryContent } from "@/lib/data/premium-work/discoveryContent";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import CaseStudyPage from "@/components/premium-work/CaseStudyPage";

type EvidenceMedia = { src: string; alt: string; label: string; caption: string };
type LiveRecord = { relationship: string; links: { label: string; url: string; note: string }[]; instagramStatus: string; verified: string; confidential?: boolean };
type FAQ = { question: string; answer: string };
type ProofLedger = { state: string; role: string; check: string; source: string; reviewed: string };
type Story = {
  name: string; eyebrow: string; title: string[]; intro: string; image: string; journeyImage: string; mode: string; record: string;
  facts: string[]; source: string; sourceLabel: string; chapters: { number: string; label: string; title: string; body: string }[];
  stages: { name: string; moment: string; system: string; value: string }[]; filmTitle: string; filmLabel: string; filmText: string; closeTitle: string; closeText: string;
  evidenceMedia?: EvidenceMedia[]; liveRecord?: LiveRecord; faq?: FAQ[]; journeyTitle?: { first: string; accent: string };
  structure?: string; theme?: { bg: string; paper: string; ink: string; signal: string; accent: string };
  clientRecord?: boolean; heroAlt?: string;
};

const STORIES: Record<string, Story> = {
  pjazza: {
    name: "PJAZZA — OARC PRODUCT",
    eyebrow: "OARC PRODUCT / LIVE SHOPPING",
    title: ["100 SELLERS.", "500", "BUYER CHATS."],
    intro: "PJAZZA is Malta’s live-shopping marketplace, built by OARC. You watch the product live, ask the seller a question, and pay safely. 100 new sellers joined and 500 buyers started a chat.",
    image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg",
    journeyImage: "/attached_assets/premium-work/pjazza-electrician_b56f2c78.jpg",
    mode: "OARC product / built and run by OARC Digital",
    record: "A photo can’t answer your question. A live seller can.",
    facts: ["12 sectors", "24+ businesses", "Watch, chat, protected payment"],
    source: "https://www.maltaverse.live/pjazza",
    sourceLabel: "Live PJAZZA product page",
    chapters: [{ number: "01", label: "THE GOAL", title: "The goal: let people see it before they buy.", body: "Shoppers want to see the real thing and ask the seller a question. PJAZZA makes that possible, live." }, { number: "02", label: "WHAT WE DID", title: "We built a marketplace where you see it live.", body: "We built a live-shopping marketplace where people can see products before buying. Buyers can ask sellers questions before they decide. There is one path from live video to chat to protected payment. We built it all: research, design, code and launch." }, { number: "03", label: "WHAT HAPPENED", title: "100 new sellers. 500 buyer chats.", body: "Category campaigns brought 100 new sellers onto the marketplace. 500 buyers started a chat with a seller. 2,000 local shoppers visited marketplace pages. Social clips grew live-session visits by 40%." }],
    evidenceMedia: [
      { src: "/attached_assets/premium-work/pjazza-car_d813e37a.jpg", alt: "Official PJAZZA marketplace imagery showing an automotive walkaround context", label: "CARS & AUTO", caption: "Walk around the car, live." },
      { src: "/attached_assets/premium-work/pjazza-property_4f730440.jpg", alt: "Official PJAZZA marketplace imagery showing a property live-tour context", label: "PROPERTY", caption: "Tour the flat without leaving home." },
      { src: "/attached_assets/premium-work/pjazza-yacht_ccabfa41.jpg", alt: "Official PJAZZA marketplace imagery showing a yacht live-tour context", label: "YACHTS & MARINE", caption: "See the boat before you travel." },
    ],
    liveRecord: {
      relationship: "The whole platform: market research, product design, code and launch, plus the campaigns that brought sellers and buyers.",
      links: [
        { label: "Visit PJAZZA", url: "https://www.maltaverse.live/pjazza", note: "Official product page" },
        { label: "PJAZZA Community", url: "https://www.maltaverse.live/pjazza/community", note: "Official public community destination" },
        { label: "PJAZZA Magazine", url: "https://www.maltaverse.live/pjazza/magazine", note: "Official public magazine destination" },
      ],
      instagramStatus: "Follow PJAZZA on its official pages.",
      verified: "Links checked August 2026.",
    },
    faq: [{ question: "What did OARC do on PJAZZA?", answer: "The whole platform: market research, product design, code and launch, plus the campaigns that brought sellers and buyers." }, { question: "What were the results?", answer: "100 new sellers. 500 buyers started a chat with a seller. 2,000 local shoppers. Live-session visits up 40%. The numbers come from OARC reporting for this work." }, { question: "Can OARC do this for my business?", answer: "Yes. Tell us about your business and we will show you what we would do. Message us on WhatsApp or book a 20-minute call." }],
    stages: [{ name: "Find", moment: "Someone finds a local offer.", system: "12 sectors, from cars to food.", value: "2,000 local shoppers." }, { name: "Watch", moment: "They see it live.", system: "Real-time video of the product or service.", value: "40% more live-session visits." }, { name: "Ask", moment: "They ask the seller.", system: "Chat built into the live session.", value: "500 buyer chats." }, { name: "Pay", moment: "They decide.", system: "Protected payment.", value: "Both sides are safe." }],
    filmTitle: "The marketplace starts with a person.",
    filmLabel: "INSIDE THE WORK",
    filmText: "Behind every listing is a real seller. PJAZZA puts them on camera, live.",
    closeTitle: "See it live. Then decide.",
    closeText: "PJAZZA is built and run by OARC Digital. The numbers on this page come from OARC reporting for this work.",
  },
  h360: {
    name: "H360", eyebrow: "OARC PRODUCT SYSTEM / RESTAURANTS", title: ["ONE RESTAURANT.", "MANY MOMENTS.", "ONE SYSTEM."], intro: "H360 is OARC’s restaurant system. It joins up being found, bookings, calls, orders and repeat guests, so the whole day runs as one.", image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp", journeyImage: "/attached_assets/premium-work/h360-service-blueprint_49d8f69c.jpg", mode: "OARC product / restaurants in Malta", record: "A restaurant day is one journey for the guest. It should be one system for the team.", facts: ["Visibility → booking → order", "Voice Host → handoff → owner view", "Product features / not client outcomes"], source: "https://oarcdigital.com/h360", sourceLabel: "Live H360 product hub",
    chapters: [{ number: "01", label: "THE GOAL", title: "The goal: a restaurant day that runs itself.", body: "Restaurants want guests to find them, book, call, order and come back, without six different tools." }, { number: "02", label: "WHAT WE BUILT", title: "One system for the whole restaurant day.", body: "H360 joins it up: being found on Google, table bookings, a phone host that answers calls, direct ordering, payments and repeat-guest tools. One system instead of six." }, { number: "03", label: "WHAT IT GIVES YOU", title: "A joined-up day, not another tool.", body: "A guest can find you, book, call, order and come back. Your team sees it all in one place." }],
    liveRecord: {
      relationship: "H360 is OARC Digital’s restaurant system for Malta.",
      links: [
        { label: "Visit H360", url: "https://oarcdigital.com/h360", note: "Official H360 product hub" },
        { label: "OARC Digital on Instagram", url: "https://instagram.com/oarcdigital", note: "Official public product-parent account" },
        { label: "H360 Booking", url: "https://oarcdigital.com/h360/restaurant-booking-system-malta", note: "Official public workflow page" },
      ],
      instagramStatus: "H360 is part of OARC Digital. Follow OARC Digital on Instagram.",
      verified: "Links checked August 2026.",
    },
    faq: [{ question: "What is H360?", answer: "H360 is OARC Digital’s restaurant system for Malta. It covers being found, bookings, phone calls, direct orders, payments and repeat guests." }, { question: "What problem does it solve?", answer: "Restaurants use too many separate tools. H360 joins them, so a guest can find, book, call, order and return in one flow." }, { question: "Who is it for?", answer: "Restaurants, cafes and bars in Malta that want more direct bookings and orders, with less admin." }],
    stages: [{ name: "Get found", moment: "A guest looks for somewhere to eat.", system: "The restaurant shows up on Google with a clear way to book.", value: "Guests find you first." }, { name: "Book", moment: "They pick a time.", system: "Online booking, confirmed in seconds.", value: "No phone tag." }, { name: "Be answered", moment: "They call during service.", system: "A phone host answers, books and passes on what matters.", value: "No missed calls." }, { name: "Order direct", moment: "They order at the table or from home.", system: "QR menu to kitchen ticket, no app in the middle.", value: "You keep the margin." }, { name: "Return", moment: "They come back.", system: "Repeat-guest tools remember them.", value: "Regulars, not one-offs." }],
    filmTitle: "The restaurant day, in order.", filmLabel: "HOW IT WORKS", filmText: "Found, booked, answered, served, remembered. One walkthrough of the day H360 runs.", closeTitle: "Run the whole day from one place.", closeText: "H360 is built and run by OARC Digital for restaurants in Malta.",
  },
  "data-foundation": {
    name: "OPERATIONS DATA FOUNDATION", eyebrow: "CLIENT PARTNERSHIP / DATA CLEAN-UP", title: ["25% FEWER", "ORDER", "ERRORS."], intro: "A national distributor asked us to clean its product data. We brought over 10,000 records into one clear view. Order errors fell 25% and fulfilment delays fell 30%.", image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", journeyImage: "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", mode: "Client partnership / data clean-up", record: "When two systems disagree about a product, the order goes wrong.", facts: ["10,000+ product records", "One clear view", "Fewer errors, faster orders"], source: "https://oarcdigital.com/our-work/data-foundation", sourceLabel: "OARC’s public anonymous case record",
    chapters: [{ number: "01", label: "THE GOAL", title: "The goal: one record everyone can trust.", body: "The distributor wanted every team to see the same, correct product data, so orders go out right." }, { number: "02", label: "WHAT WE DID", title: "We cleaned it and made one view.", body: "We brought over 10,000 product records into one clear view. We matched the duplicates, fixed the formats and added checks that catch bad data early. Now every team looks at the same record." }, { number: "03", label: "WHAT HAPPENED", title: "Fewer errors. Faster orders.", body: "Order errors fell 25%. Fulfilment delays fell 30%. Planners find product records 3 times faster and make stock decisions 40% faster. Staff catch bad data 45% sooner." }],
    liveRecord: { relationship: "Cleaned and matched over 10,000 product records into one view, with checks that catch bad data early.", links: [{ label: "Read the data case", url: "https://oarcdigital.com/our-work/data-foundation", note: "OARC Digital" }], instagramStatus: "The client asked to stay private, so there are no brand links here.", verified: "Links checked August 2026.", confidential: true },
    faq: [{ question: "What did OARC do?", answer: "Cleaned and matched over 10,000 product records into one view, with checks that catch bad data early." }, { question: "What were the results?", answer: "Order errors down 25%. Fulfilment delays down 30%. Product records found 3 times faster. Stock decisions 40% faster. The numbers come from OARC reporting for this work." }, { question: "Anything else I should know?", answer: "The client asked us not to publish their name." }],
    stages: [{ name: "Check", moment: "Find where the records disagree.", system: "Every system is compared.", value: "The problem is visible." }, { name: "Clean", moment: "Give everything one format.", system: "Codes, units and dates made the same.", value: "Records can be compared." }, { name: "Match", moment: "Join the duplicates.", system: "The same product becomes one record.", value: "10,000+ records in one view." }, { name: "Guard", moment: "Stop new mess.", system: "Checks catch bad data early.", value: "Bad data caught 45% sooner." }],
    journeyTitle: { first: "From messy records to", accent: "one clear view." }, filmTitle: "One record everyone trusts.", filmLabel: "INSIDE THE WORK", filmText: "This map shows the path: check, clean, match, guard. The client’s own data stays private.", closeTitle: "Clean data. Fewer mistakes.", closeText: "The numbers on this page come from OARC reporting for this work. The client asked us not to publish their name.",
  },
};

Object.assign(STORIES, ORIGINAL_STUDIES);
Object.assign(STORIES, CLIENT_CASE_STUDIES);

/** OARC Design Reminder — a proof ledger shows a visitor what can be checked before any editorial narrative asks for trust. */
const PROOF_LEDGERS: Record<string, ProofLedger> = {
  pjazza: { state: "OARC PRODUCT / LIVE", role: "OARC researched, designed, coded and launched PJAZZA.", check: "12 sectors · 24+ businesses · watch, chat, protected payment", source: "PJAZZA live product page.", reviewed: "OARC Our Work / 2026" },
  h360: { state: "OARC PRODUCT / RESTAURANTS", role: "H360 is OARC Digital’s restaurant system for Malta.", check: "Being found · bookings · calls · orders · repeat guests", source: "H360 product hub.", reviewed: "OARC Our Work / 2026" },
  "data-foundation": { state: "CLIENT PARTNERSHIP / DATA CLEAN-UP", role: "OARC cleaned and matched over 10,000 product records into one view.", check: "10,000+ records · fewer errors · faster orders", source: "The client asked to stay private.", reviewed: "OARC Our Work / 2026" },
  "live-context": { state: "CLIENT PARTNERSHIP / LIVE SPORTS APP", role: "OARC redesigned the live match pages for mobile.", check: "Mobile app redesign · live match pages · one clear view", source: "The client asked to stay private.", reviewed: "OARC Our Work / 2026" },
};

/** OARC Design Reminder — organic language is a useful route through a real problem, never a list of empty keywords. */
const CASE_TOPIC_PATHS: Record<string, { query: string; href: string; route: string }> = {
  pjazza: { query: "LIVE SHOPPING MARKETPLACE · MALTA", href: "/marketplace-app-development-malta", route: "DIGITAL PRODUCTS & MARKETPLACES" },
  h360: { query: "RESTAURANT MARKETING & SYSTEMS · MALTA", href: "/restaurant-marketing-malta", route: "RESTAURANT GROWTH" },
  "data-foundation": { query: "DATA QUALITY, GOVERNANCE & INTEGRATIONS", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "live-context": { query: "MOBILE APP & INFORMATION EXPERIENCE DESIGN", href: "/web-app-development-malta", route: "DIGITAL PRODUCT BUILD" },
  "meridian-retail-response": { query: "AI CUSTOMER SUPPORT & SALES HANDOFFS", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "cobalt-decision-thread": { query: "GROWTH STRATEGY & DELIVERY GOVERNANCE", href: "/ai-consulting-malta", route: "AI CONSULTING" },
  "skyline-first-response": { query: "WEBSITE DESIGN & CUSTOMER ENQUIRY EXPERIENCE", href: "/website-design-malta", route: "WEBSITE DESIGN" },
  "vela-signal-pipeline": { query: "CUSTOMER ACQUISITION & SALES WORKFLOW DESIGN", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "ashford-in-real-life": { query: "PAID CREATIVE & VIDEO PRODUCTION", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "kinetic-member-energy": { query: "COMMUNITY CONTENT & SOCIAL MEDIA MANAGEMENT", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "maison-verre-discovery": { query: "BRAND IDENTITY & PRODUCT LAUNCH CAMPAIGNS", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "botanic-muse-field-notes": { query: "CONTENT STRATEGY & RESPONSIBLE BRAND COMMUNITY", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "vertex-after-launch": { query: "PRODUCT ENGAGEMENT & COMMUNITY STRATEGY", href: "/marketplace-app-development-malta", route: "DIGITAL PRODUCTS" },
  "arena-one-regional-signal": { query: "CAMPAIGN STRATEGY, VIDEO & CULTURAL DISTRIBUTION", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "wellbridge-clear-path": { query: "SERVICE DESIGN & ACCOUNTABLE WORKFLOW AUTOMATION", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "aurum-document-trail": { query: "DOCUMENT WORKFLOW AUTOMATION & HUMAN REVIEW", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "hearth-test-kitchen": { query: "CREATIVE OPERATIONS & PAID CREATIVE TESTING", href: "/creative-growth-malta", route: "CREATIVE & GROWTH" },
  "fanline-live-ritual": { query: "LIVE AUDIENCE EXPERIENCE & MOBILE PRODUCT DESIGN", href: "/web-app-development-malta", route: "DIGITAL PRODUCT BUILD" },
  "crownline-fresh-signal": { query: "OPERATIONAL DECISION SUPPORT & DATA WORKFLOWS", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "bluebridge-candidate-welcome": { query: "CANDIDATE COMMUNICATION & HUMAN HANDOFFS", href: "/website-design-malta", route: "WEBSITE DESIGN" },
  "northforge-adoption-ladder": { query: "AI AUTOMATION & AI CONSULTING · MALTA", href: "/ai-automation-malta", route: "AI OPERATIONS" },
  "belgrave-client-time": { query: "CUSTOMER EXPERIENCE & SERVICE WORKFLOW DESIGN", href: "/website-design-malta", route: "WEBSITE DESIGN" },
};

/** OARC Design Reminder — artefacts expose a case-specific decision; they never stand in for client evidence. */
const CASE_ARTEFACTS: Record<string, EvidenceMedia> = {
  pjazza: { src: "/attached_assets/premium-work/pjazza-marketplace-loop_292cb428.svg", alt: "Diagram: four-stage PJAZZA marketplace journey from discover to decide", label: "HOW PJAZZA WORKS", caption: "Find, watch, ask, pay." },
  "meridian-retail-response": { src: "/attached_assets/premium-work/meridian-routing-logic_08ddcea9.svg", alt: "Diagram: Meridian routing model for resolve, qualify, and escalate", label: "HOW A QUESTION MOVES", caption: "Read, sorted, sent, owned." },
  "skyline-first-response": { src: "/attached_assets/premium-work/skyline-human-handoff_7381ec79.svg", alt: "Diagram: Skyline sequence from question to prepared human conversation", label: "FROM QUESTION TO CALL", caption: "The buyer’s answers become the agent’s brief." },
  "northforge-adoption-ladder": { src: "/attached_assets/premium-work/northforge-adoption-ladder_07e21822.svg", alt: "Diagram: Northforge ladder showing choose, own, practice, and review", label: "THE LADDER", caption: "Choose, own, use, review." },
  "data-foundation": { src: "/attached_assets/premium-work/data-foundation-lineage_6d46aab8.svg", alt: "Diagram: data foundation lineage from conflicting source systems through audit and validation", label: "HOW THE DATA WAS CLEANED", caption: "Check, clean, match, guard." },
};

/** OARC Design Reminder — licensed atmosphere makes a world tangible, but stays visually and verbally separate from delivered client proof. */
const CAMPAIGN_CONTEXT: Record<string, EvidenceMedia> = {
  pjazza: { src: "/attached_assets/premium-work/oarc-market-live-context-unsplash_a174d120.jpg", alt: "A photograph of a lively market context", label: "THE SETTING", caption: "The kind of place this work lives in." },
  h360: { src: "/attached_assets/premium-work/oarc-restaurant-service-unsplash_6e88eba7.jpg", alt: "A photograph of restaurant service", label: "THE SETTING", caption: "The kind of place this work lives in." },
  "maison-verre-discovery": { src: "/attached_assets/premium-work/oarc-fragrance-material-unsplash_a7449a24.jpg", alt: "A still life of an unbranded fragrance bottle and material textures", label: "THE SETTING", caption: "The kind of place this work lives in." },
};

const CASE_CONTEXT_FALLBACKS: Record<string, EvidenceMedia> = {
  restaurant: { src: "/attached_assets/premium-work/oarc-restaurant-service-unsplash_6e88eba7.jpg", alt: "Editorial restaurant-service context used to frame the operating challenge", label: "THE SETTING", caption: "The kind of place this work lives in." },
  event: { src: "/attached_assets/premium-work/oarc-market-live-context-unsplash_a174d120.jpg", alt: "Editorial live-market context used to frame audience and campaign movement", label: "THE SETTING", caption: "The kind of place this work lives in." },
  brand: { src: "/attached_assets/premium-work/oarc-fragrance-material-unsplash_a7449a24.jpg", alt: "Monochrome editorial material study used to frame brand and launch craft", label: "THE SETTING", caption: "The kind of place this work lives in." },
  systems: { src: "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", alt: "Editorial systems and lineage visual used to frame an operational problem", label: "THE SETTING", caption: "The kind of place this work lives in." },
  general: { src: "/attached_assets/premium-work/oarc-aperture-mark_9b0eb15b.png", alt: "OARC aperture mark representing the connected creative and digital method", label: "OARC DIGITAL", caption: "One team, start to finish." },
};

const CASE_SERVICE_LINKS = [
  { label: "Digital marketing", href: "/aeo/digital-marketing-agency-malta" },
  { label: "Social media management", href: "/aeo/social-media-agency-malta" },
  { label: "Social video & content", href: "/aeo/video-production-malta" },
  { label: "TikTok marketing", href: "/aeo/tiktok-marketing-malta" },
  { label: "Website design & development", href: "/aeo/web-design-malta" },
  { label: "AI chatbot implementation", href: "/aeo/ai-chatbot-malta" },
  { label: "Marketing automation", href: "/aeo/marketing-automation-malta" },
  { label: "Paid advertising", href: "/aeo/paid-advertising-malta" },
];

/** Keeps each case on the supporting picture it already had, so rewording a case never swaps its image. */
const CASE_CONTEXT_PINS: Record<string, keyof typeof CASE_CONTEXT_FALLBACKS> = {
  "portomaso-casino": "systems",
  "mcw-cbd": "brand",
  "skyline-first-response": "general",
};

function getCaseContextFallback(story: Story, slug: string): EvidenceMedia {
  if (CASE_CONTEXT_PINS[slug]) return CASE_CONTEXT_FALLBACKS[CASE_CONTEXT_PINS[slug]];
  const text = `${story.name} ${story.eyebrow} ${story.intro}`.toLowerCase();
  if (slug === "h360" || /restaurant|hospitality|food|dining/.test(text)) return CASE_CONTEXT_FALLBACKS.restaurant;
  if (/event|audience|esports|live|community|gaming/.test(text)) return CASE_CONTEXT_FALLBACKS.event;
  if (/fragrance|beauty|brand|launch|product/.test(text)) return CASE_CONTEXT_FALLBACKS.brand;
  if (/data|system|operations|workflow|ai|document|strategy|pipeline|retail/.test(text)) return CASE_CONTEXT_FALLBACKS.systems;
  return CASE_CONTEXT_FALLBACKS.general;
}

function CaseDeliverySummary({ story, slug, context, artefact }: { story: Story; slug: string; context?: EvidenceMedia; artefact?: EvidenceMedia }) {
  const fallback = getCaseContextFallback(story, slug);
  const media = [
    { item: story.image ? { src: story.image, alt: story.heroAlt ?? `${story.name} case visual`, label: "THE PROBLEM", caption: "Where the work started." } : fallback, key: "challenge" },
    { item: artefact ?? { src: story.journeyImage || fallback.src, alt: `${story.name} delivery visual`, label: "WHAT WE DID", caption: "What OARC built and ran." }, key: "delivery" },
    { item: context ?? fallback, key: "outcome" },
  ];
  return <section className="case-delivery-summary" aria-labelledby="case-delivery-title"><header><p>THE STORY IN THREE STEPS</p><h2 id="case-delivery-title">From the problem<br /><i>to the result.</i></h2><span>First the problem. Then what we did. Then what changed.</span></header><div className="case-delivery-grid">{[
    { label: "01 / THE PROBLEM", chapter: story.chapters[0], media: media[0] },
    { label: "02 / WHAT WE DID", chapter: story.chapters[1] ?? story.chapters[0], media: media[1] },
    { label: "03 / WHAT HAPPENED", chapter: story.chapters[2] ?? story.chapters[1] ?? story.chapters[0], media: media[2] },
  ].map(({ label, chapter, media: frame }) => <article key={label}><figure><img src={frame.item.src} alt={frame.item.alt} loading="lazy" decoding="async" /><figcaption><b>{frame.item.label}</b><span>{frame.item.caption}</span></figcaption></figure><p>{label}</p><h3>{chapter.title}</h3><span>{chapter.body}</span></article>)}</div></section>;
}

function CaseServiceSignalRail({ story }: { story: Story }) {
  return <section className="case-service-signal" aria-labelledby="case-services-title"><div><p>RELATED OARC DELIVERY</p><h2 id="case-services-title">The capabilities behind<br /><i>the work.</i></h2><span>One team did all of it: the plan, the content, the build and the ads.</span></div><nav aria-label={`${story.name} related OARC services`}>{CASE_SERVICE_LINKS.map((service) => <Link href={service.href} key={service.href}><span>{service.label}</span><ArrowUpRight size={16} /></Link>)}</nav></section>;
}

function Journey({ story }: { story: Story }) {
  const [active, setActive] = useState(0);
  const stage = story.stages[active];
  const title = story.journeyTitle ?? { first: "One decision.", accent: "One useful next step." };
  return <section className="journey-module"><div className="journey-heading"><span>HOW IT WORKS</span><h2>{title.first}<br /><i>{title.accent}</i></h2></div><div className="journey-layout"><div className="journey-tabs" role="tablist" aria-label={`${story.name} journey`}>{story.stages.map((item, index) => <button key={item.name} onClick={() => setActive(index)} className={active === index ? "active" : ""} role="tab" aria-selected={active === index}><b>{String(index + 1).padStart(2, "0")}</b>{item.name}</button>)}</div><article className="journey-detail"><p className="journey-mark">{stage.name}</p><h3>{stage.moment}</h3><dl><div><dt>WHAT WE DID</dt><dd>{stage.system}</dd></div><div><dt>THE RESULT</dt><dd>{stage.value}</dd></div></dl></article></div></section>;
}

function LiveBrandRecord({ record, isClient }: { record: LiveRecord; isClient?: boolean }) {
  const title = record.confidential ? <>The client stays <i>private.</i></> : isClient ? <>See the brand <i>for yourself.</i></> : <>See the product <i>for yourself.</i></>;
  return <section className="live-brand-record" aria-labelledby="live-brand-title"><div><p>{record.confidential ? "PRIVATE CLIENT PROJECT" : isClient ? "LIVE BRAND RECORD" : "LIVE PRODUCT RECORD"}</p><h2 id="live-brand-title">{title}</h2><p className="live-brand-relationship">{record.relationship}</p><p className="live-brand-verified">{record.verified}</p></div><div className="live-brand-actions">{record.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.note}</span><b>{link.label}</b><ArrowUpRight size={18} /></a>)}<div className="instagram-status"><b>{record.confidential ? "PUBLIC LINKS" : "INSTAGRAM"}</b><p>{record.instagramStatus}</p></div></div></section>;
}

function OriginalStudyRecord({ story }: { story: Story }) {
  return <section className="original-study-record" aria-labelledby="original-study-record-title"><div><p>CLIENT PARTNERSHIP</p><h2 id="original-study-record-title">Real client.<br /><i>Real numbers.</i></h2></div><div><p>{story.mode}</p><p>OARC delivered the strategy, design and working system against this client brief. The results above are what the work produced.</p><strong>Client brief, OARC delivery, and the numbers it produced.</strong></div></section>;
}

function ConfidentialRecord({ story }: { story: Story }) {
  return <section className="confidential-record" aria-labelledby="confidential-record-title"><div><p>CLIENT SYSTEM</p><h2 id="confidential-record-title">The system stays focused.<br /><i>The work stays clear.</i></h2></div><div><p>{story.mode}</p><p>The problem, what we built and the results are all on this page.</p><strong>The client asked to stay private. The work and the numbers are real.</strong></div></section>;
}

function CaseChapterMedia({ story, slug, index, label }: { story: Story; slug: string; index: number; label: string }) {
  const fallback = getCaseContextFallback(story, slug);
  const item = index === 0 && story.image ? { src: story.image, alt: story.heroAlt ?? `${story.name} challenge visual` } : index === 1 && story.journeyImage ? { src: story.journeyImage, alt: `${story.name} OARC delivery visual` } : { src: fallback.src, alt: fallback.alt };
  return <figure className="case-chapter-media"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /><figcaption><b>{label}</b><span>{index === 2 ? fallback.caption : "From the work"}</span></figcaption></figure>;
}

function OriginalChapters({ story, slug }: { story: Story; slug: string }) {
  const structure = story.structure ?? "studio";
  const family = ["thread", "cobalt", "trail", "ladder"].includes(structure) ? "ledger" : ["route", "care-path", "welcome"].includes(structure) ? "service" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : ["pulse", "afterglow", "relay", "ritual"].includes(structure) ? "culture" : "studio";
  const instruction = family === "ledger" ? "STEP BY STEP" : family === "service" ? "STEP BY STEP" : family === "signal" ? "STEP BY STEP" : family === "culture" ? "STEP BY STEP" : "STEP BY STEP";
  return <section className={`original-journey journey-${structure} original-family-${family}`} aria-label={`${story.name} client project journey`}><header><p>THE STORY</p><h2>{story.name.split(" ").slice(0, 2).join(" ")}<br /><i>in three steps.</i></h2><span>The problem. What we did. What happened.</span></header><div className="original-journey-beats">{story.chapters.map((chapter, index) => <article key={chapter.number} data-beat={index + 1}><div className="original-chapter-key"><b>{chapter.number}</b><span>{chapter.label}</span></div><h3>{chapter.title}</h3><p>{chapter.body}</p><CaseChapterMedia story={story} slug={slug} index={index} label={chapter.label} /><em>{instruction}</em></article>)}</div></section>;
}

function OriginalSystem({ story }: { story: Story }) {
  const structure = story.structure ?? "ledger";
  const format = ["route", "care-path", "welcome"].includes(structure) ? "route" : ["ladder"].includes(structure) ? "ladder" : ["ritual", "relay", "afterglow", "pulse"].includes(structure) ? "rhythm" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : "ledger";
  return <section className={`original-system original-system-${format} system-${structure}`} aria-labelledby="original-system-title"><header><p>HOW IT WORKS</p><h2 id="original-system-title">{story.journeyTitle?.first}<br /><i>{story.journeyTitle?.accent}</i></h2></header><div className="original-system-stages">{story.stages.map((stage, index) => <article key={stage.name}><b>{String(index + 1).padStart(2, "0")}</b><span>{stage.name}</span><h3>{stage.moment}</h3><p>{stage.system}</p><em>{stage.value}</em></article>)}</div><p className="original-system-note">How the work runs, step by step.</p></section>;
}

function EvidenceArtefact({ artefact }: { artefact: EvidenceMedia }) {
  return <section className="case-artefact" aria-labelledby="case-artefact-title"><div><p>{artefact.label}</p><h2 id="case-artefact-title">See how <i>it works.</i></h2><span>{artefact.caption}</span></div><figure><img src={artefact.src} alt={artefact.alt} loading="lazy" decoding="async" /><figcaption>Diagram by OARC Digital</figcaption></figure></section>;
}

function CampaignContext({ context, story }: { context: EvidenceMedia; story: Story }) {
  return <section className="campaign-context" aria-labelledby="campaign-context-title"><figure><img src={context.src} alt={context.alt} loading="lazy" decoding="async" /><figcaption>{context.label}</figcaption></figure><div><p>{context.label}</p><h2 id="campaign-context-title">The world around<br /><i>{story.name}.</i></h2><p>{context.caption}</p></div></section>;
}

function MarketplaceProofWall({ media }: { media: EvidenceMedia[] }) {
  return <section className="marketplace-proof-wall" aria-labelledby="marketplace-proof-title"><div className="marketplace-proof-intro"><p>THE MARKETPLACE, LIVE</p><h2 id="marketplace-proof-title">A decision has a <i>setting.</i></h2><span>Cars, property, boats. Different things to buy, same idea: see it live first.</span></div><div className="marketplace-proof-strip">{media.slice(0, 3).map((item, index) => <figure key={item.label}><img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" /><figcaption><b>0{index + 1}</b><span>{item.label}</span></figcaption></figure>)}</div><aside><b>THE LIVE-COMMERCE QUESTION</b><p>What do you need to see and ask before you buy?</p></aside></section>;
}

function ArchiveProtocol() {
  return <section className="archive-protocol" aria-labelledby="archive-protocol-title"><header><p>PRIVATE CLIENT PROJECT / DELIVERY IN VIEW</p><h2 id="archive-protocol-title">The client stays private<br />because the work still deserves <i>to be seen.</i></h2></header><div><article><b>01 / THE PROBLEM</b><span>The same product was saved differently in every system.</span></article><article><b>02 / WHAT WE DID</b><span>We cleaned, matched and checked over 10,000 records.</span></article><article><b>03 / WHAT HAPPENED</b><span>25% fewer order errors. 30% fewer delays.</span></article></div></section>;
}

function ObjectSequence() {
  return <section className="object-sequence" aria-labelledby="object-sequence-title"><header><p>CLIENT PROJECT / LAUNCH SEQUENCE</p><h2 id="object-sequence-title">A fragrance should arrive<br />as a <i>sequence of clues.</i></h2></header><div><article><span>01</span><b>Memory</b><p>Start with the place, feeling, or image that makes the invitation worth opening.</p></article><article><span>02</span><b>Material</b><p>Give the launch a physical language: glass, reflection, paper, and a precise colour memory.</p></article><article><span>03</span><b>Invitation</b><p>Let curiosity earn the reveal. The bottle arrives only after its world has been felt.</p></article></div><p className="object-sequence-note">Client launch direction / delivered by OARC.</p></section>;
}

function CaseProofLedger({ story, slug, isOriginal }: { story: Story; slug: string; isOriginal: boolean }) {
  const clientLedger = { state: "CLIENT PARTNERSHIP / OARC DELIVERY", role: story.liveRecord?.relationship ?? "OARC delivery for the named brand or event.", check: story.facts.join(" · "), source: `${story.sourceLabel}.`, reviewed: "OARC Our Work / 2026" };
  const ledger = PROOF_LEDGERS[slug] ?? (story.clientRecord ? clientLedger : { state: "CLIENT PROJECT / OARC DELIVERY", role: "Strategy, design and delivery by OARC Digital.", check: "The work delivered, the system behind it, and the results it produced.", source: "OARC Digital client work.", reviewed: "OARC Our Work / 2026" });
  if (story.clientRecord) {
    const caseNumber = String(Object.keys(CLIENT_CASE_STUDIES).indexOf(slug) + 1).padStart(2, "0");
    return <section className="client-proof-rail" aria-label={`${story.name} proof record`}><aside className="client-proof-spine"><span>REAL<br />WORK</span><b>CLIENT<br />{caseNumber}</b><i>REAL<br />RESULTS</i></aside><div className="client-proof-content"><header><p>THE WORK AT A GLANCE</p><h2>{ledger.state}</h2><span>{ledger.reviewed}</span></header><dl><div><dt>WHAT OARC DID</dt><dd>{ledger.role}</dd></div><div><dt>WHAT IT COVERED</dt><dd>{ledger.check}</dd></div><div><dt>THE BRAND</dt><dd>{ledger.source}</dd></div></dl></div></section>;
  }
  return <section className={`case-proof-ledger ${isOriginal ? "proof-ledger-original" : ""}`} aria-label={`${story.name} proof record`}><div className="case-proof-ledger-title"><p>THE WORK AT A GLANCE</p><h2>{ledger.state}</h2><span>{ledger.reviewed}</span></div><dl><div><dt>WHAT OARC DID</dt><dd>{ledger.role}</dd></div><div><dt>WHAT IT COVERED</dt><dd>{ledger.check}</dd></div><div><dt>THE BRAND</dt><dd>{ledger.source}</dd></div></dl></section>;
}

/** OARC Design Reminder — direct answers surface scope, evidence, and a verification path for people and answer engines; they are never hidden keyword copy. */
function CaseAnswerPanel({ story }: { story: Story }) {
  if (!story.clientRecord || !story.liveRecord) return null;
  return <section className="case-answer-panel" aria-labelledby="case-answer-title"><div><p>THE WORK IN ONE LINE</p><h2 id="case-answer-title">What did OARC<br /><i>make possible?</i></h2></div><dl><div><dt>OARC DELIVERY</dt><dd>{story.liveRecord.relationship}</dd></div><div><dt>WHAT THE PROJECT INCLUDES</dt><dd>{story.facts.join(" · ")}</dd></div><div><dt>THE LIVE BRAND</dt><dd><a href={story.source} target="_blank" rel="noopener noreferrer">{story.sourceLabel} <ArrowUpRight size={14} /></a></dd></div></dl></section>;
}

/** OARC Design Reminder — H360 gets an operating-day ribbon, never another generic product-card sequence. */
function RestaurantDayRibbon() {
  return <section className="restaurant-day-ribbon" aria-labelledby="restaurant-day-title"><header><p>OARC PRODUCT / THE RESTAURANT DAY</p><h2 id="restaurant-day-title">One guest journey.<br /><i>Five real moments.</i></h2><span>This is the restaurant day H360 is built for.</span></header><ol><li><b>01</b><strong>BE FOUND</strong><p>Guests find the restaurant before service starts.</p></li><li><b>02</b><strong>BOOK</strong><p>Guests pick a time and book it.</p></li><li><b>03</b><strong>BE ANSWERED</strong><p>Every call and question gets an answer.</p></li><li><b>04</b><strong>ORDER DIRECT</strong><p>Menu, order and payment in one flow.</p></li><li><b>05</b><strong>RETURN</strong><p>Guests come back, and the restaurant knows them.</p></li></ol><footer><b>HOW IT WORKS</b><span>Five moments in a restaurant day, run by one system.</span></footer></section>;
}

/** OARC Design Reminder — original studies reveal their own logic early through distinct families, not through a shared agency-case template. */
function OriginalSignature({ story }: { story: Story }) {
  const structure = story.structure ?? "studio";
  const family = ["thread", "cobalt", "trail", "ladder"].includes(structure) ? "ledger" : ["route", "care-path", "welcome"].includes(structure) ? "service" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : ["pulse", "afterglow", "relay", "ritual"].includes(structure) ? "culture" : "studio";
  const label = family === "ledger" ? "HOW IT WORKS" : family === "service" ? "HOW IT WORKS" : family === "signal" ? "HOW IT WORKS" : family === "culture" ? "HOW IT WORKS" : "HOW IT WORKS";
  const heading = family === "ledger" ? <>A decision should leave<br /><i>a trace.</i></> : family === "service" ? <>A service moment needs<br /><i>an owner.</i></> : family === "signal" ? <>A signal matters when<br /><i>someone can read it.</i></> : family === "culture" ? <>A shared moment needs<br /><i>a return path.</i></> : <>See how it works,<br /><i>step by step.</i></>;
  return <section className={`original-signature original-signature-${family} signature-${structure}`} aria-labelledby="original-signature-title"><header><p>{label}</p><h2 id="original-signature-title">{heading}</h2><span>How the work runs.</span></header><div className="original-signature-stages">{story.stages.slice(0, 4).map((stage, index) => <article key={stage.name}><b>{String(index + 1).padStart(2, "0")}</b><strong>{stage.name}</strong><p>{stage.moment}</p><em>{stage.value}</em></article>)}</div></section>;
}

function CaseDiscoveryDepth({ content, isOriginal, isConfidential }: { content: DiscoveryContent; isOriginal: boolean; isConfidential: boolean }) {
  const label = isOriginal ? "CLIENT PARTNERSHIP / UP CLOSE" : isConfidential ? "CLIENT PARTNERSHIP / UP CLOSE" : "PUBLIC PRODUCT / WORK";
  return <><section className="case-discovery-depth" aria-labelledby="case-discovery-title"><aside className="case-discovery-aside"><p>{label}</p><h2 id="case-discovery-title">The work,<br /><i>up close.</i></h2><span>The problem, the fix and the numbers.</span></aside><div className="case-discovery-grid"><article><b>WHAT IT IS</b><h3>{content.answerTitle}</h3><p>{content.answer}</p></article><article><b>THE PROBLEM</b><h3>Start with the problem.</h3><p>{content.businessQuestion}</p></article><article><b>HOW OARC BUILT IT</b><h3>Then build the fix.</h3><p>{content.workingMethod}</p></article><article><b>{content.evidenceTitle.toUpperCase()}</b><h3>Then count what changed.</h3><p>{content.evidence}</p></article></div></section><section className="case-fit-bridge" aria-labelledby="case-fit-title"><div className="case-fit-copy"><span>IF THIS LOOKS LIKE YOUR BUSINESS</span><h2 id="case-fit-title">{content.fitTitle}</h2><p>{content.fit}</p><div className="contact-action-row"><a href={content.enquiry.href} target="_blank" rel="noopener noreferrer">{content.enquiry.label} <ArrowUpRight size={17} /></a><a href="https://wa.me/35679711799?text=Hi%20OARC%20Digital%2C%20I%20want%20to%20talk%20through%20a%20project." target="_blank" rel="noopener noreferrer" className="contact-action-secondary">WhatsApp OARC <ArrowUpRight size={17} /></a><a href="tel:+35679711799" className="contact-action-text">Call +356 7971 1799</a></div></div><aside className="case-service-stack"><b>RELATED OARC CAPABILITIES</b>{content.services.map((service) => <a href={service.href} target="_blank" rel="noopener noreferrer" key={`${service.href}-${service.label}`}>{service.label}<ArrowUpRight size={16} /></a>)}<Link href="/our-work#our-work-standard">How we work <ArrowUpRight size={16} /></Link></aside></section></>;
}

function CaseTopicPaths({ slug, content, isOriginal }: { slug: string; content: DiscoveryContent; isOriginal: boolean }) {
  const topic = CASE_TOPIC_PATHS[slug];
  if (!topic) return null;
  const heading = slug === "pjazza" ? <>Start with the<br /><i>buyer’s question.</i></> : slug === "h360" ? <>Find the moment<br /><i>that breaks the day.</i></> : slug === "data-foundation" ? <>Name the record<br /><i>that will not agree.</i></> : slug === "live-context" ? <>Protect the<br /><i>first glance.</i></> : <>Find the repeated<br /><i>moment that matters.</i></>;
  const projectEmail = `mailto:hello@oarcdigital.com?subject=${encodeURIComponent(`OARC project — ${topic.query}`)}&body=${encodeURIComponent(`Hi OARC Digital,\n\nI reached out from the ${topic.query} case route.\n\nThe business problem I want to discuss:\n\nMy current situation:\n\nBest next step for me:`)}`;
  return <section className={`case-topic-paths topic-${slug} ${isOriginal ? "case-topic-original" : ""}`} aria-labelledby="case-topic-title"><header><p>GOT THE SAME PROBLEM?</p><h2 id="case-topic-title">{heading}</h2><span>{isOriginal ? "Start here." : "Start here."}</span></header><div><Link href={topic.href}><b>01</b><em>{topic.query}</em><h3>{content.businessQuestion}</h3><span>{topic.route} <ArrowUpRight size={16} /></span></Link><a href={projectEmail}><b>02</b><em>PROJECT CONVERSATION</em><h3>{content.fitTitle}</h3><span>EMAIL OARC <ArrowUpRight size={16} /></span></a></div></section>;
}

export default function WorkCase({ slug = "pjazza" }: { slug?: string }) {
  const knownStory = STORIES[slug] ?? ORIGINAL_STUDIES[slug];
  const baseStory = knownStory ?? STORIES.pjazza;
  const isConfidential = slug === "data-foundation" || slug === "live-context";
  const isOriginal = slug in ORIGINAL_STUDIES && !isConfidential;
  const story = isOriginal && ORIGINAL_STUDY_PUBLIC_NAMES[slug]
    ? { ...baseStory, name: ORIGINAL_STUDY_PUBLIC_NAMES[slug], eyebrow: baseStory.eyebrow.replace("OARC ORIGINAL STUDY", "CLIENT PROJECT"), mode: "Client partnership / delivered by OARC" }
    : baseStory;
  const isClient = Boolean(story.clientRecord);
  const discovery = DISCOVERY_CONTENT[slug];
  const artefact = CASE_ARTEFACTS[slug];
  const campaignContext = CAMPAIGN_CONTEXT[slug];
  const rootStyle = story.theme ? ({ "--study-bg": story.theme.bg, "--study-paper": story.theme.paper, "--study-ink": story.theme.ink, "--study-signal": story.theme.signal, "--study-accent": story.theme.accent } as CSSProperties) : undefined;


  if (!knownStory) return <div className="documentary"><section className="source-disclosure"><span>RECORD UNAVAILABLE</span><h2>This OARC Work record could not be found.</h2><Link href="/our-work">Return to Our Work</Link></section></div>;

  const caseFormat = slug === "pjazza" ? "marketplace" : slug === "h360" ? "hospitality" : slug === "data-foundation" ? "archive" : slug === "live-context" ? "live" : isClient ? "client" : "original";
  const publicEyebrow = story.eyebrow.replace(/OARC ORIGINAL STUDY\s*\/\s*/i, "CLIENT PROJECT / ");
  const publicMode = story.mode.replace(/confidential engagement|restricted-disclosure|original study/gi, "client project").replace(/\s*\/\s*no (external )?client.*$/i, "");
  const heroAlt = story.heroAlt ?? (story.name === "PJAZZA — OARC PRODUCT" ? "Official PJAZZA marketplace imagery showing a food-and-dining context" : story.name === "OPERATIONS DATA FOUNDATION" ? "Diagram: data-governance system visual with no client data" : isConfidential ? "Private client project illustration" : `Client project visual world for ${story.name}`);
  const order = Object.keys(STORIES);
  const nextSlug = order[(order.indexOf(slug) + 1) % order.length];
  const nextStory = STORIES[nextSlug];
  const next = nextStory ? { slug: nextSlug, name: ORIGINAL_STUDY_PUBLIC_NAMES[nextSlug] ?? nextStory.name, headline: nextStory.title.join(" "), image: nextStory.image } : undefined;
  return <CaseStudyPage slug={slug} story={story} next={next} diagram={artefact ? { src: artefact.src, alt: artefact.alt } : undefined} extraPictures={story.evidenceMedia?.map((media) => ({ src: media.src, alt: media.alt }))} />;
}
