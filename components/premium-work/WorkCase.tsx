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
    name: "PJAZZA",
    eyebrow: "PUBLIC PRODUCT / LIVE COMMERCE",
    title: ["SEE IT", "BEFORE YOU", "DECIDE."],
    intro: "A public live-shopping marketplace designed to move the useful question closer to a local buying decision.",
    image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg",
    journeyImage: "/attached_assets/premium-work/pjazza-electrician_b56f2c78.jpg",
    mode: "Public product / OARC–Maltaverse role wording pending approval",
    record: "For a buyer, context is often the missing part of the purchase. For a seller, showing the truth can be the shortest route to trust.",
    facts: ["12 displayed sectors", "24+ businesses shown", "Watch → chat → protected payment"],
    source: "https://www.maltaverse.live/pjazza",
    sourceLabel: "Live PJAZZA product page",
    chapters: [
      { number: "01", label: "THE PRESSURE", title: "A listing cannot answer the question you have now.", body: "A static image can show an object. It cannot always show scale, condition, movement, atmosphere, or the person who knows the answer. PJAZZA starts from that practical gap in local commerce: people need more context before they decide." },
      { number: "02", label: "THE BUILD", title: "Make the marketplace behave like a conversation.", body: "The product brings live discovery, seller presence, category browsing, and direct buyer interaction into one public marketplace. Its point is not video for its own sake. The point is to move the useful question closer to the decision." },
      { number: "03", label: "THE VALUE", title: "More confidence for the buyer. A richer shop window for the seller.", body: "The live product page shows the system spanning products, services, and property. In the public case, this is presented as a current product proposition and experience—not as an unverified claim about revenue, conversion, or market leadership." },
    ],
    evidenceMedia: [
      { src: "/attached_assets/premium-work/pjazza-car_d813e37a.jpg", alt: "Official PJAZZA marketplace imagery showing an automotive walkaround context", label: "CARS & AUTO", caption: "A public marketplace category shown as a source-linked product context." },
      { src: "/attached_assets/premium-work/pjazza-property_4f730440.jpg", alt: "Official PJAZZA marketplace imagery showing a property live-tour context", label: "PROPERTY", caption: "The public marketplace presents live-tour context as part of its product experience." },
      { src: "/attached_assets/premium-work/pjazza-yacht_ccabfa41.jpg", alt: "Official PJAZZA marketplace imagery showing a yacht live-tour context", label: "YACHTS & MARINE", caption: "One category example from the public PJAZZA sector and feature surfaces." },
    ],
    liveRecord: {
      relationship: "Product Design & Platform Build — public OARC case page; final OARC/Maltaverse relationship wording pending owner approval.",
      links: [
        { label: "Visit PJAZZA", url: "https://www.maltaverse.live/pjazza", note: "Official product page" },
        { label: "PJAZZA Community", url: "https://www.maltaverse.live/pjazza/community", note: "Official public community destination" },
        { label: "PJAZZA Magazine", url: "https://www.maltaverse.live/pjazza/magazine", note: "Official public magazine destination" },
      ],
      instagramStatus: "No verified official PJAZZA or Maltaverse Instagram link was found on the official product page or through targeted public search. A social link will be added only after the owner confirms the handle.",
      verified: "Links and public product state checked 26 August 2026.",
    },
    faq: [
      { question: "What does PJAZZA do?", answer: "PJAZZA’s official product page presents it as a Malta live-shopping marketplace where people can watch products, services, and property in real time, ask questions, and move toward the next step with the seller." },
      { question: "What public evidence is shown in this case?", answer: "The product page currently displays 12 sectors and 24+ businesses, alongside the public journey Watch live → Chat & negotiate → Protected payment. These are dated public product-page values, not OARC commercial-outcome claims." },
      { question: "What did OARC do?", answer: "OARC’s current public PJAZZA project page states that its team researched the market, designed the product, wrote the code, and shipped the platform. The final public relationship label remains subject to OARC and Maltaverse owner approval." },
    ],
    stages: [
      { name: "Discover", moment: "A person finds a local offer worth looking at.", system: "Live listings and sector discovery make the first surface more specific than a general search.", value: "The buyer reaches a relevant offer faster." },
      { name: "Watch", moment: "The offer moves from still image to real-time context.", system: "A live product or service view lets detail, scale, and environment become visible.", value: "The buyer sees more before asking for more." },
      { name: "Ask", moment: "The decision becomes a question to a real seller or provider.", system: "Direct conversation creates a human bridge between interest and action.", value: "Uncertainty can be resolved in the moment." },
      { name: "Decide", moment: "The buyer has enough context to take the next step.", system: "The marketplace connects the live interaction to the product’s transaction/trust language.", value: "The next action is clearer for both sides." },
    ],
    filmTitle: "The marketplace begins with a person.",
    filmLabel: "LIVE MARKETPLACE / PRODUCT JOURNEY",
    filmText: "PJAZZA’s public product surface includes people and services alongside stores and live tours. The full production case should add one approved seller or service recording here: the moment a static listing becomes a real interaction.",
    closeTitle: "The real product is decision confidence.",
    closeText: "PJAZZA is documented here through its public product journey: a local marketplace where watching, asking, and deciding happen closer together. Analytics-led performance claims should be added only after an approved evidence record exists.",
  },
  h360: {
    name: "H360", eyebrow: "OARC PRODUCT SYSTEM / RESTAURANTS", title: ["ONE RESTAURANT.", "MANY MOMENTS.", "ONE SYSTEM."], intro: "A connected restaurant system designed to turn discovery, bookings, guest questions, orders, and operations into a clearer day.", image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp", journeyImage: "/attached_assets/premium-work/h360-service-blueprint_49d8f69c.jpg", mode: "Public product / feature review required", record: "A restaurant night does not arrive in departments. A call, a booking, an order, and a full floor arrive at the same time.", facts: ["Visibility → booking → order", "Voice Host → handoff → owner view", "Product features / not client outcomes"], source: "https://oarcdigital.com/h360", sourceLabel: "Live H360 product hub",
    chapters: [
      { number: "01", label: "THE PRESSURE", title: "The Friday-night problem is not one problem.", body: "A venue can be hard to find, hard to book, hard to order from, and hard to run—often at the same time. H360 is framed as one operating system because those moments are felt together by the guest and the team." },
      { number: "02", label: "THE BUILD", title: "Connect the guest journey to the operator’s next action.", body: "The current H360 product pages describe a stack of connected behaviours: local discovery, bookings, a restaurant phone host, direct ordering, payments, repeat-guest tools, and operating surfaces. The system is made to move a request toward a clearer action." },
      { number: "03", label: "THE VALUE", title: "Give the restaurant a joined-up day, not another disconnected tool.", body: "The public product describes how a guest can find, book, call, order, and return while the restaurant has a more usable operational record. Product examples and fee scenarios on the site are not represented here as verified results for a named venue." },
    ],
    liveRecord: {
      relationship: "H360 is publicly presented as OARC Digital’s hospitality product line for Malta restaurants.",
      links: [
        { label: "Visit H360", url: "https://oarcdigital.com/h360", note: "Official H360 product hub" },
        { label: "OARC Digital on Instagram", url: "https://instagram.com/oarcdigital", note: "Official public product-parent account" },
        { label: "H360 Booking", url: "https://oarcdigital.com/h360/restaurant-booking-system-malta", note: "Official public workflow page" },
      ],
      instagramStatus: "H360 is publicly presented under OARC Digital. The linked OARC Digital account is the official public social destination; a separate H360 profile will be used only if the owner confirms it.",
      verified: "Links and public product state checked 26 August 2026.",
    },
    faq: [
      { question: "What is H360?", answer: "H360 is OARC Digital’s public hospitality product line for Malta restaurants. Its product hub describes a modular restaurant system spanning visibility, bookings, phone handling, direct orders, loyalty, marketing, and operations." },
      { question: "What problem does H360 address?", answer: "The public product narrative treats restaurant demand, guest communication, table booking, ordering, and operations as connected moments rather than separate categories. The case explains that operating sequence, not a generic software feature list." },
      { question: "Are the H360 figures in this case client results?", answer: "No. Any figures or examples on the public product hub are shown as feature illustrations or product-page statements unless an approved named-restaurant evidence pack establishes a client outcome, timeframe, and source owner." },
    ],
    stages: [
      { name: "Get found", moment: "A guest looks for a place before service has begun.", system: "H360’s public product hub frames local visibility as the first operating surface.", value: "The venue can make its booking/order path discoverable." },
      { name: "Book", moment: "A guest chooses a time without waiting for the phone.", system: "The Booking flow shows a link, a chosen slot, a lock, confirmation, and an operator list.", value: "The guest gets clarity; the operator sees intent." },
      { name: "Be answered", moment: "A call comes in while the team is serving.", system: "Voice Host is described as handling venue questions, availability, booking and handoff rules.", value: "The restaurant has a defined path for the call." },
      { name: "Order direct", moment: "A guest is at the table or ready to order.", system: "The ORDER flow shows QR → menu → kitchen ticket → operator record.", value: "The order can move through a direct, visible sequence." },
      { name: "Return", moment: "A useful guest interaction becomes a relationship.", system: "The broader H360 suite includes retention and owner-view product surfaces.", value: "The day can become a record the team can use." },
    ],
    filmTitle: "The restaurant day has a sequence.", filmLabel: "OPERATING BLUEPRINT / SYSTEM ARTIFACT", filmText: "This evidence panel is for a clear product walkthrough: discovery, booking, call handling, direct order, and owner view. The final version uses approved H360 screens and one restaurant context—not lifestyle footage alone.", closeTitle: "Hospitality is a sequence, not a stack of tabs.", closeText: "H360 is shown through its live public product mechanics: how attention can become a booking, a call can become a handoff, and an order can become an operating record. Client outcomes require an approved deployment source pack.",
  },
  "data-foundation": {
    name: "DATA FOUNDATION", eyebrow: "CLIENT SYSTEM / DATA GOVERNANCE", title: ["WHEN THE", "DATA COULD", "NOT AGREE."], intro: "A private system story about making fragmented distributor data more governed, usable, and traceable while protecting the client behind it.", image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", journeyImage: "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", mode: "Private engagement / selected system story", record: "When the same product, customer, or supplier exists in several systems with several answers, every downstream decision starts with doubt.", facts: ["10,000+ unique SKUs described", "ERP + CRM + legacy sources", "No client performance metrics published"], source: "https://oarcdigital.com/our-work/data-foundation", sourceLabel: "OARC’s public anonymous case record",
    chapters: [
      { number: "01", label: "THE PRESSURE", title: "The record changed depending on where you looked.", body: "The public OARC record describes a national B2B and B2C distributor whose product IDs, customer and supplier records, dates, units, and addresses did not align across ERP, CRM, and legacy spreadsheets. The operating consequence was not theoretical: order error, fulfilment delay, forecasting uncertainty, and weak visibility all began with the same source problem." },
      { number: "02", label: "THE INTERVENTION", title: "Turn messy history into a governed system of record.", body: "The documented approach moved from assessment to standardisation, matching, validation, enrichment, and visibility. The value of that sequence is traceability: a record should not simply look clean; its owner should understand what changed, why it changed, and what still needs attention." },
      { number: "03", label: "THE DISCIPLINE", title: "A transformation is only useful if the next exception can be found.", body: "The public case describes validation rules and data-quality dashboards as the ongoing layer. This case does not repeat the source page’s performance figures because the named client, measurement method, timeframe, and publication approval are not available for this page. It shows the business logic of the system, not invented proof." },
    ],
    liveRecord: { relationship: "Private UK distributor engagement. The client identity, website, social accounts, and operational data are not published.", links: [{ label: "View OARC’s public data case", url: "https://oarcdigital.com/our-work/data-foundation", note: "OARC public source" }], instagramStatus: "Client social links are not part of this release. The page focuses on the engagement’s problem, method, and decisions.", verified: "Private engagement details reviewed 26 August 2026.", confidential: true },
    faq: [
      { question: "What was the business problem?", answer: "OARC’s public data case describes a distributor with product, customer, supplier, and format inconsistencies across ERP, CRM, and legacy data sources. The case frames the problem as an operational data-governance issue, not simply a technical cleanup task." },
      { question: "What did the system do?", answer: "The public case describes assessing, standardising, fuzzy matching, de-duplication, rule-based validation, enrichment, and data-quality visibility. The rebuilt story presents these as a governed workflow from exception to accountable record." },
      { question: "Why are the client name and results not shown?", answer: "This is a private engagement. Client identity, brand links, raw operational data, and quantitative results are not published without written client approval and a documented measurement basis." },
    ],
    stages: [
      { name: "Assess", moment: "Find every place where the same thing has a different answer.", system: "Map identifiers, formats, missing fields, duplicates, and dependencies across source systems.", value: "The team can see the shape of the problem before changing the record." },
      { name: "Standardise", moment: "Give every repeatable field a common language.", system: "Normalise formats, patterns, product descriptors, units, date structures, and core reference values.", value: "Operational systems can compare like with like." },
      { name: "Match", moment: "Resolve the duplicates without erasing the record’s history.", system: "Use matching logic and review rules to connect and merge related product, customer, and supplier records.", value: "A decision can start from a more reliable reference." },
      { name: "Validate", moment: "Keep the next exception from becoming the next mess.", system: "Apply rule-based checks and a quality view that make anomalies, gaps, and ownership visible.", value: "Data governance becomes an operating habit, not a cleanup project." },
    ],
    journeyTitle: { first: "From conflict to", accent: "control." }, filmTitle: "The record needs a lineage.", filmLabel: "ILLUSTRATIVE SYSTEM MAP / NO CLIENT DATA", filmText: "This illustrative system visual explains the public intervention pattern: audit, standardise, match, validate. It does not depict client data, a client system, or a measured outcome.", closeTitle: "The client stays confidential. The discipline stays visible.", closeText: "OARC’s public anonymous case record describes a governed data foundation for a national distributor. This rebuilt case protects the client and withholds unverified figures while making the operating logic of the work legible.",
  },
};

Object.assign(STORIES, ORIGINAL_STUDIES);
Object.assign(STORIES, CLIENT_CASE_STUDIES);

/** OARC Design Reminder — a proof ledger shows a visitor what can be checked before any editorial narrative asks for trust. */
const PROOF_LEDGERS: Record<string, ProofLedger> = {
  pjazza: { state: "PUBLIC PRODUCT / SOURCE-LINKED", role: "Product design and platform-build relationship is publicly described; final OARC–Maltaverse role wording remains owner-approved only.", check: "Public product journey, sectors, business listing count, product categories, and official destinations.", source: "Official PJAZZA and OARC public product pages.", reviewed: "Reviewed 27 August 2026" },
  h360: { state: "PUBLIC OARC PRODUCT / FEATURE RECORD", role: "H360 is publicly presented as an OARC Digital hospitality product line; named venue delivery scope is not claimed here.", check: "Official H360 product hub, public workflow pages, and OARC product-parent identity.", source: "Official OARC H360 product pages.", reviewed: "Reviewed 27 August 2026" },
  "data-foundation": { state: "CLIENT SYSTEMS / DATA GOVERNANCE", role: "OARC’s public data case documents a data-governance intervention; client identity and operational detail are protected.", check: "Client business context, intervention method, and public OARC case.", source: "OARC public data case and project assets.", reviewed: "Project details reviewed 27 August 2026" },
  "live-context": { state: "CLIENT SYSTEMS / SELECTED DELIVERY", role: "The public story explains the approved product-design principle without naming the client or exposing private work.", check: "The disclosed design problem, product hierarchy, and non-identifying project artefacts.", source: "Approved private-client project narrative.", reviewed: "Project details reviewed 27 August 2026" },
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
  pjazza: { src: "/attached_assets/premium-work/pjazza-marketplace-loop_292cb428.svg", alt: "Illustrative four-stage PJAZZA marketplace journey from discover to decide", label: "ILLUSTRATIVE PRODUCT JOURNEY", caption: "A source-safe explanation of the public product journey. It is not a performance chart or transaction record." },
  "meridian-retail-response": { src: "/attached_assets/premium-work/meridian-routing-logic_08ddcea9.svg", alt: "Illustrative Meridian routing model for resolve, qualify, and escalate", label: "ORIGINAL ROUTING ARTEFACT", caption: "An original OARC model of a customer-question handoff. It is not a live retailer workflow." },
  "skyline-first-response": { src: "/attached_assets/premium-work/skyline-human-handoff_7381ec79.svg", alt: "Illustrative Skyline sequence from question to prepared human conversation", label: "ORIGINAL SERVICE ARTEFACT", caption: "A scenario model of a prepared property enquiry. It does not depict a listing, agent, or conversion result." },
  "northforge-adoption-ladder": { src: "/attached_assets/premium-work/northforge-adoption-ladder_07e21822.svg", alt: "Illustrative Northforge ladder showing choose, own, practice, and review", label: "ORIGINAL OPERATING-MODEL ARTEFACT", caption: "An OARC framework for accountable AI adoption. It is not an enterprise deployment record." },
  "data-foundation": { src: "/attached_assets/premium-work/data-foundation-lineage_6d46aab8.svg", alt: "Illustrative data foundation lineage from conflicting source systems through audit and validation", label: "ANONYMISED INTERVENTION PATTERN", caption: "A source-safe visualisation of the published intervention logic. It contains no client record, identity, or outcome figure." },
};

/** OARC Design Reminder — licensed atmosphere makes a world tangible, but stays visually and verbally separate from delivered client proof. */
const CAMPAIGN_CONTEXT: Record<string, EvidenceMedia> = {
  pjazza: { src: "/attached_assets/premium-work/oarc-market-live-context-unsplash_a174d120.jpg", alt: "Licensed editorial photograph of a lively market context", label: "LICENSED EDITORIAL ATMOSPHERE", caption: "A contemporary market context used to establish the human world around live commerce. It is not a PJAZZA seller, transaction, or product-delivery record." },
  h360: { src: "/attached_assets/premium-work/oarc-restaurant-service-unsplash_6e88eba7.jpg", alt: "Licensed editorial photograph of restaurant service", label: "LICENSED EDITORIAL ATMOSPHERE", caption: "A hospitality-service context used to frame the operating day. It is not a named H360 restaurant, booking record, or deployment claim." },
  "maison-verre-discovery": { src: "/attached_assets/premium-work/oarc-fragrance-material-unsplash_a7449a24.jpg", alt: "Licensed editorial still life of an unbranded fragrance bottle and material textures", label: "LICENSED EDITORIAL ATMOSPHERE", caption: "A material-world reference used in the client fragrance-launch project. It is not a product, retailer, or campaign asset." },
};

const CASE_CONTEXT_FALLBACKS: Record<string, EvidenceMedia> = {
  restaurant: { src: "/attached_assets/premium-work/oarc-restaurant-service-unsplash_6e88eba7.jpg", alt: "Editorial restaurant-service context used to frame the operating challenge", label: "EDITORIAL SERVICE CONTEXT", caption: "Supporting atmosphere for the business problem; not a client deliverable or performance record." },
  event: { src: "/attached_assets/premium-work/oarc-market-live-context-unsplash_a174d120.jpg", alt: "Editorial live-market context used to frame audience and campaign movement", label: "EDITORIAL AUDIENCE CONTEXT", caption: "Supporting atmosphere for the campaign or audience problem; not a client asset." },
  brand: { src: "/attached_assets/premium-work/oarc-fragrance-material-unsplash_a7449a24.jpg", alt: "Monochrome editorial material study used to frame brand and launch craft", label: "EDITORIAL MATERIAL CONTEXT", caption: "Supporting atmosphere for the brand or launch problem; not a product or campaign result." },
  systems: { src: "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", alt: "Editorial systems and lineage visual used to frame an operational problem", label: "EDITORIAL SYSTEMS CONTEXT", caption: "Supporting systems context for the case; it contains no client data or measured outcome." },
  general: { src: "/attached_assets/premium-work/oarc-aperture-mark_9b0eb15b.png", alt: "OARC aperture mark representing the connected creative and digital method", label: "OARC METHOD / VISUAL MARK", caption: "A general OARC brand signal used to close the visual sequence." },
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

function getCaseContextFallback(story: Story, slug: string): EvidenceMedia {
  const text = `${story.name} ${story.eyebrow} ${story.intro}`.toLowerCase();
  if (slug === "h360" || /restaurant|hospitality|food|dining/.test(text)) return CASE_CONTEXT_FALLBACKS.restaurant;
  if (/event|audience|esports|live|community|gaming/.test(text)) return CASE_CONTEXT_FALLBACKS.event;
  if (/fragrance|beauty|brand|launch|product/.test(text)) return CASE_CONTEXT_FALLBACKS.brand;
  if (/data|system|operations|workflow|ai|document|strategy|pipeline|retail/.test(text)) return CASE_CONTEXT_FALLBACKS.systems;
  return CASE_CONTEXT_FALLBACKS.general;
}

function CaseDeliverySummary({ story, slug, context, artefact }: { story: Story; slug: string; context?: EvidenceMedia; artefact?: EvidenceMedia }) {
  const fallback = getCaseContextFallback(story, slug);
  const selectedMedia = story.evidenceMedia ?? [];
  const media = [
    { item: story.image ? { src: story.image, alt: story.heroAlt ?? `${story.name} case visual`, label: "CLIENT CHALLENGE / CASE FRAME", caption: "The primary case visual introduces the client problem and its working context." } : fallback, key: "challenge" },
    { item: artefact ?? selectedMedia[1] ?? { src: story.journeyImage || fallback.src, alt: `${story.name} delivery visual`, label: "OARC DELIVERY / WORKING SYSTEM", caption: "The delivery visual shows the method, system, or campaign logic OARC brought to the brief." }, key: "delivery" },
    { item: selectedMedia[2] ?? context ?? fallback, key: "outcome" },
  ];
  return <section className="case-delivery-summary" aria-labelledby="case-delivery-title"><header><p>THE CLIENT STORY / OARC DELIVERY</p><h2 id="case-delivery-title">From pressure to<br /><i>visible progress.</i></h2><span>Every case starts with the client challenge, shows what OARC delivered, and makes the resulting shift easier to understand.</span></header><div className="case-delivery-grid">{[
    { label: "01 / CLIENT CHALLENGE", chapter: story.chapters[0], media: media[0] },
    { label: "02 / WHAT OARC DELIVERED", chapter: story.chapters[1] ?? story.chapters[0], media: media[1] },
    { label: "03 / WHAT THE WORK ACCOMPLISHED", chapter: story.chapters[2] ?? story.chapters[1] ?? story.chapters[0], media: media[2] },
  ].map(({ label, chapter, media: frame }) => <article key={label}><figure><img src={frame.item.src} alt={frame.item.alt} loading="lazy" decoding="async" /><figcaption><b>{frame.item.label}</b><span>{frame.item.caption}</span></figcaption></figure><p>{label}</p><h3>{chapter.title}</h3><span>{chapter.body}</span></article>)}</div></section>;
}

function CaseServiceSignalRail({ story }: { story: Story }) {
  return <section className="case-service-signal" aria-labelledby="case-services-title"><div><p>RELATED OARC DELIVERY</p><h2 id="case-services-title">The capabilities behind<br /><i>the work.</i></h2><span>{story.name} sits inside the same implementation practice: strategy, creative production, digital delivery, and accountable optimisation working together.</span></div><nav aria-label={`${story.name} related OARC services`}>{CASE_SERVICE_LINKS.map((service) => <Link href={service.href} key={service.href}><span>{service.label}</span><ArrowUpRight size={16} /></Link>)}</nav></section>;
}

function Journey({ story }: { story: Story }) {
  const [active, setActive] = useState(0);
  const stage = story.stages[active];
  const title = story.journeyTitle ?? { first: "One decision.", accent: "One useful next step." };
  return <section className="journey-module"><div className="journey-heading"><span>THE SYSTEM, IN MOTION</span><h2>{title.first}<br /><i>{title.accent}</i></h2></div><div className="journey-layout"><div className="journey-tabs" role="tablist" aria-label={`${story.name} journey`}>{story.stages.map((item, index) => <button key={item.name} onClick={() => setActive(index)} className={active === index ? "active" : ""} role="tab" aria-selected={active === index}><b>{String(index + 1).padStart(2, "0")}</b>{item.name}</button>)}</div><article className="journey-detail"><p className="journey-mark">{stage.name}</p><h3>{stage.moment}</h3><dl><div><dt>WHAT THE SYSTEM DOES</dt><dd>{stage.system}</dd></div><div><dt>WHY IT MATTERS</dt><dd>{stage.value}</dd></div></dl></article></div></section>;
}

function LiveBrandRecord({ record, isClient }: { record: LiveRecord; isClient?: boolean }) {
  const title = record.confidential ? <>The client stays <i>private.</i></> : isClient ? <>See the brand <i>outside the case.</i></> : <>See the product <i>outside the case.</i></>;
  return <section className="live-brand-record" aria-labelledby="live-brand-title"><div><p>{record.confidential ? "PRIVATE CLIENT PROJECT" : isClient ? "LIVE BRAND RECORD" : "LIVE PRODUCT RECORD"}</p><h2 id="live-brand-title">{title}</h2><p className="live-brand-relationship">{record.relationship}</p><p className="live-brand-verified">{record.verified}</p></div><div className="live-brand-actions">{record.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.note}</span><b>{link.label}</b><ArrowUpRight size={18} /></a>)}<div className="instagram-status"><b>{record.confidential ? "PUBLIC LINKS" : "INSTAGRAM"}</b><p>{record.instagramStatus}</p></div></div></section>;
}

function OriginalStudyRecord({ story }: { story: Story }) {
  return <section className="original-study-record" aria-labelledby="original-study-record-title"><div><p>CLIENT CONCEPT PROJECT</p><h2 id="original-study-record-title">A designed direction,<br /><i>made tangible.</i></h2></div><div><p>{story.mode}</p><p>OARC delivered this concept, visual world, and working prototype against a focused client brief to make a sharper system or experience tangible.</p><strong>Client brief, OARC thinking, and a delivered prototype.</strong></div></section>;
}

function ConfidentialRecord({ story }: { story: Story }) {
  return <section className="confidential-record" aria-labelledby="confidential-record-title"><div><p>CLIENT SYSTEM</p><h2 id="confidential-record-title">The system stays focused.<br /><i>The work stays clear.</i></h2></div><div><p>{story.mode}</p><p>The business pressure, OARC approach, and design decisions are shown clearly enough to understand the engagement.</p><strong>Client identity protected. OARC delivery made visible.</strong></div></section>;
}

function CaseChapterMedia({ story, slug, index, label }: { story: Story; slug: string; index: number; label: string }) {
  const fallback = getCaseContextFallback(story, slug);
  const selected = story.evidenceMedia?.[index];
  const item = selected ?? (index === 0 && story.image ? { src: story.image, alt: story.heroAlt ?? `${story.name} challenge visual` } : index === 1 && story.journeyImage ? { src: story.journeyImage, alt: `${story.name} OARC delivery visual` } : { src: fallback.src, alt: fallback.alt });
  return <figure className="case-chapter-media"><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /><figcaption><b>{label}</b><span>{index === 2 ? fallback.caption : "Case visual / OARC delivery context"}</span></figcaption></figure>;
}

function OriginalChapters({ story, slug }: { story: Story; slug: string }) {
  const structure = story.structure ?? "studio";
  const family = ["thread", "cobalt", "trail", "ladder"].includes(structure) ? "ledger" : ["route", "care-path", "welcome"].includes(structure) ? "service" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : ["pulse", "afterglow", "relay", "ritual"].includes(structure) ? "culture" : "studio";
  const instruction = family === "ledger" ? "TRACE THE DECISION" : family === "service" ? "FOLLOW THE HANDOFF" : family === "signal" ? "READ THE SIGNAL" : family === "culture" ? "ENTER THE RHYTHM" : "STUDY THE MAKING";
  return <section className={`original-journey journey-${structure} original-family-${family}`} aria-label={`${story.name} client project journey`}><header><p>THE CLIENT JOURNEY</p><h2>{story.name.split(" ").slice(0, 2).join(" ")}<br /><i>in three decisive moves.</i></h2><span>Pressure, intervention, and intended value—kept clear from first frame to final move.</span></header><div className="original-journey-beats">{story.chapters.map((chapter, index) => <article key={chapter.number} data-beat={index + 1}><div className="original-chapter-key"><b>{chapter.number}</b><span>{chapter.label}</span></div><h3>{chapter.title}</h3><p>{chapter.body}</p><CaseChapterMedia story={story} slug={slug} index={index} label={chapter.label} /><em>{instruction}</em></article>)}</div></section>;
}

function OriginalSystem({ story }: { story: Story }) {
  const structure = story.structure ?? "ledger";
  const format = ["route", "care-path", "welcome"].includes(structure) ? "route" : ["ladder"].includes(structure) ? "ladder" : ["ritual", "relay", "afterglow", "pulse"].includes(structure) ? "rhythm" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : "ledger";
  return <section className={`original-system original-system-${format} system-${structure}`} aria-labelledby="original-system-title"><header><p>THE DELIVERY, IN MOTION</p><h2 id="original-system-title">{story.journeyTitle?.first}<br /><i>{story.journeyTitle?.accent}</i></h2></header><div className="original-system-stages">{story.stages.map((stage, index) => <article key={stage.name}><b>{String(index + 1).padStart(2, "0")}</b><span>{stage.name}</span><h3>{stage.moment}</h3><p>{stage.system}</p><em>{stage.value}</em></article>)}</div><p className="original-system-note">Client delivery logic shown through the working sequence and supporting artefacts; private data and measured outcomes are not displayed on this page.</p></section>;
}

function EvidenceArtefact({ artefact }: { artefact: EvidenceMedia }) {
  return <section className="case-artefact" aria-labelledby="case-artefact-title"><div><p>{artefact.label}</p><h2 id="case-artefact-title">See the <i>decision logic.</i></h2><span>{artefact.caption}</span></div><figure><img src={artefact.src} alt={artefact.alt} loading="lazy" decoding="async" /><figcaption>OARC explanatory artefact / status stated above</figcaption></figure></section>;
}

function CampaignContext({ context, story }: { context: EvidenceMedia; story: Story }) {
  return <section className="campaign-context" aria-labelledby="campaign-context-title"><figure><img src={context.src} alt={context.alt} loading="lazy" decoding="async" /><figcaption>{context.label} / SOURCE RECORDED IN OARC ASSET REGISTER</figcaption></figure><div><p>{context.label}</p><h2 id="campaign-context-title">The world around<br /><i>{story.name}.</i></h2><p>{context.caption}</p></div></section>;
}

function MarketplaceProofWall({ media }: { media: EvidenceMedia[] }) {
  return <section className="marketplace-proof-wall" aria-labelledby="marketplace-proof-title"><div className="marketplace-proof-intro"><p>PUBLIC PRODUCT / MARKETPLACE CONTEXT</p><h2 id="marketplace-proof-title">A decision has a <i>setting.</i></h2><span>These official public product-category surfaces show why the marketplace must carry context across very different local decisions.</span></div><div className="marketplace-proof-strip">{media.slice(0, 3).map((item, index) => <figure key={item.label}><img src={item.src} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} decoding="async" /><figcaption><b>0{index + 1}</b><span>{item.label}</span></figcaption></figure>)}</div><aside><b>THE LIVE-COMMERCE QUESTION</b><p>What does a person need to see, ask, and trust before an offer becomes a decision?</p></aside></section>;
}

function ArchiveProtocol() {
  return <section className="archive-protocol" aria-labelledby="archive-protocol-title"><header><p>PRIVATE CLIENT PROJECT / DELIVERY IN VIEW</p><h2 id="archive-protocol-title">The client stays private<br />because the work still deserves <i>to be seen.</i></h2></header><div><article><b>01 / CLIENT PRESSURE</b><span>Distributor data had to agree across ERP, CRM, and legacy systems.</span></article><article><b>02 / OARC DELIVERY</b><span>Governed matching, validation, enrichment, and quality visibility.</span></article><article><b>03 / CLIENT APPROVAL</b><span>Specific identity and operational records are not published on this page.</span></article></div></section>;
}

function ObjectSequence() {
  return <section className="object-sequence" aria-labelledby="object-sequence-title"><header><p>CLIENT PROJECT / LAUNCH SEQUENCE</p><h2 id="object-sequence-title">A fragrance should arrive<br />as a <i>sequence of clues.</i></h2></header><div><article><span>01</span><b>Memory</b><p>Start with the place, feeling, or image that makes the invitation worth opening.</p></article><article><span>02</span><b>Material</b><p>Give the launch a physical language: glass, reflection, paper, and a precise colour memory.</p></article><article><span>03</span><b>Invitation</b><p>Let curiosity earn the reveal. The bottle arrives only after its world has been felt.</p></article></div><p className="object-sequence-note">Client launch direction / delivered concept system.</p></section>;
}

function CaseProofLedger({ story, slug, isOriginal }: { story: Story; slug: string; isOriginal: boolean }) {
  const clientLedger = { state: "CLIENT PARTNERSHIP / OARC DELIVERY", role: story.liveRecord?.relationship ?? "OARC delivery for the named brand or event.", check: story.facts.join(" · "), source: `${story.sourceLabel}.`, reviewed: "OARC New Work / 2026" };
  const ledger = PROOF_LEDGERS[slug] ?? (story.clientRecord ? clientLedger : { state: "CLIENT PROJECT / OARC DELIVERY", role: "OARC developed this client project to make a specific business or operating problem tangible and easier to act on.", check: "The narrative, designed artefacts, and prototype logic presented on this page.", source: "Client project brief and OARC delivery.", reviewed: "OARC New Work / 2026" });
  if (story.clientRecord) {
    const caseNumber = String(Object.keys(CLIENT_CASE_STUDIES).indexOf(slug) + 1).padStart(2, "0");
    return <section className="client-proof-rail" aria-label={`${story.name} proof record`}><aside className="client-proof-spine"><span>OPEN<br />RECORD</span><b>CLIENT<br />{caseNumber}</b><i>SOURCE<br />FIRST</i></aside><div className="client-proof-content"><header><p>THE WORK, IN CONTEXT</p><h2>{ledger.state}</h2><span>{ledger.reviewed}</span></header><dl><div><dt>OARC ROLE</dt><dd>{ledger.role}</dd></div><div><dt>WHAT THE CASE SHOWS</dt><dd>{ledger.check}</dd></div><div><dt>CASE CONTEXT</dt><dd>{ledger.source}</dd></div></dl></div></section>;
  }
  return <section className={`case-proof-ledger ${isOriginal ? "proof-ledger-original" : ""}`} aria-label={`${story.name} proof record`}><div className="case-proof-ledger-title"><p>THE WORK, IN CONTEXT</p><h2>{ledger.state}</h2><span>{ledger.reviewed}</span></div><dl><div><dt>OARC ROLE</dt><dd>{ledger.role}</dd></div><div><dt>WHAT THE CASE SHOWS</dt><dd>{ledger.check}</dd></div><div><dt>CASE CONTEXT</dt><dd>{ledger.source}</dd></div></dl></section>;
}

/** OARC Design Reminder — direct answers surface scope, evidence, and a verification path for people and answer engines; they are never hidden keyword copy. */
function CaseAnswerPanel({ story }: { story: Story }) {
  if (!story.clientRecord || !story.liveRecord) return null;
  return <section className="case-answer-panel" aria-labelledby="case-answer-title"><div><p>THE WORK IN ONE LINE</p><h2 id="case-answer-title">What did OARC<br /><i>make possible?</i></h2></div><dl><div><dt>OARC DELIVERY</dt><dd>{story.liveRecord.relationship}</dd></div><div><dt>WHAT THE PROJECT INCLUDES</dt><dd>{story.facts.join(" · ")}</dd></div><div><dt>THE LIVE BRAND</dt><dd><a href={story.source} target="_blank" rel="noopener noreferrer">{story.sourceLabel} <ArrowUpRight size={14} /></a></dd></div></dl></section>;
}

/** OARC Design Reminder — H360 gets an operating-day ribbon, never another generic product-card sequence. */
function RestaurantDayRibbon() {
  return <section className="restaurant-day-ribbon" aria-labelledby="restaurant-day-title"><header><p>PUBLIC PRODUCT / OPERATING DAY</p><h2 id="restaurant-day-title">One guest journey.<br /><i>Five real moments.</i></h2><span>H360’s public product language is organised here as the restaurant day it is designed to support—not as a claim about a named venue result.</span></header><ol><li><b>01</b><strong>BE FOUND</strong><p>Make the venue and next action legible before service begins.</p></li><li><b>02</b><strong>BOOK</strong><p>Give a guest a clear route from intent to a chosen time.</p></li><li><b>03</b><strong>BE ANSWERED</strong><p>Carry the question toward the right restaurant response.</p></li><li><b>04</b><strong>ORDER DIRECT</strong><p>Keep menu choice, payment, and the operating record connected.</p></li><li><b>05</b><strong>RETURN</strong><p>Let a useful interaction become a relationship the venue can recognise.</p></li></ol><footer><b>WHAT THIS RECORD SHOWS</b><span>Public product sequence and official workflow language. Named-restaurant outcomes require an approved deployment record.</span></footer></section>;
}

/** OARC Design Reminder — original studies reveal their own logic early through distinct families, not through a shared agency-case template. */
function OriginalSignature({ story }: { story: Story }) {
  const structure = story.structure ?? "studio";
  const family = ["thread", "cobalt", "trail", "ladder"].includes(structure) ? "ledger" : ["route", "care-path", "welcome"].includes(structure) ? "service" : ["signal", "fresh", "tempo"].includes(structure) ? "signal" : ["pulse", "afterglow", "relay", "ritual"].includes(structure) ? "culture" : "studio";
  const label = family === "ledger" ? "THE ACCOUNTABLE TRACE" : family === "service" ? "THE HUMAN HANDOFF" : family === "signal" ? "THE MOMENT TO ACT" : family === "culture" ? "THE PARTICIPATION RHYTHM" : "THE MAKING SEQUENCE";
  const heading = family === "ledger" ? <>A decision should leave<br /><i>a trace.</i></> : family === "service" ? <>A service moment needs<br /><i>an owner.</i></> : family === "signal" ? <>A signal matters when<br /><i>someone can read it.</i></> : family === "culture" ? <>A shared moment needs<br /><i>a return path.</i></> : <>Make the idea tangible<br /><i>before the claim.</i></>;
  return <section className={`original-signature original-signature-${family} signature-${structure}`} aria-labelledby="original-signature-title"><header><p>{label}</p><h2 id="original-signature-title">{heading}</h2><span>Client delivery / the working logic in view.</span></header><div className="original-signature-stages">{story.stages.slice(0, 4).map((stage, index) => <article key={stage.name}><b>{String(index + 1).padStart(2, "0")}</b><strong>{stage.name}</strong><p>{stage.moment}</p><em>{stage.value}</em></article>)}</div></section>;
}

function CaseDiscoveryDepth({ content, isOriginal, isConfidential }: { content: DiscoveryContent; isOriginal: boolean; isConfidential: boolean }) {
  const label = isOriginal ? "CLIENT PROJECT / CONCEPT-LED DELIVERY" : isConfidential ? "CLIENT SYSTEMS / SELECTED VIEW" : "PUBLIC PRODUCT / WORK";
  return <><section className="case-discovery-depth" aria-labelledby="case-discovery-title"><aside className="case-discovery-aside"><p>{label}</p><h2 id="case-discovery-title">The work behind<br /><i>the impression.</i></h2><span>See the thinking, craft, and operating detail that gives the work its weight.</span></aside><div className="case-discovery-grid"><article><b>WHAT IT IS</b><h3>{content.answerTitle}</h3><p>{content.answer}</p></article><article><b>THE BUSINESS QUESTION</b><h3>Start with the pressure.</h3><p>{content.businessQuestion}</p></article><article><b>HOW OARC BUILT IT</b><h3>Make the next decision clearer.</h3><p>{content.workingMethod}</p></article><article><b>{content.evidenceTitle.toUpperCase()}</b><h3>Keep the important detail in view.</h3><p>{content.evidence}</p></article></div></section><section className="case-fit-bridge" aria-labelledby="case-fit-title"><div className="case-fit-copy"><span>IF THIS LOOKS LIKE YOUR BUSINESS</span><h2 id="case-fit-title">{content.fitTitle}</h2><p>{content.fit}</p><div className="contact-action-row"><a href={content.enquiry.href} target="_blank" rel="noopener noreferrer">{content.enquiry.label} <ArrowUpRight size={17} /></a><a href="https://wa.me/35679711799?text=Hi%20OARC%20Digital%2C%20I%20want%20to%20talk%20through%20a%20project." target="_blank" rel="noopener noreferrer" className="contact-action-secondary">WhatsApp OARC <ArrowUpRight size={17} /></a><a href="tel:+35679711799" className="contact-action-text">Call +356 7971 1799</a></div></div><aside className="case-service-stack"><b>RELATED OARC CAPABILITIES</b>{content.services.map((service) => <a href={service.href} target="_blank" rel="noopener noreferrer" key={`${service.href}-${service.label}`}>{service.label}<ArrowUpRight size={16} /></a>)}<Link href="/new-work#new-work-standard">How OARC documents its work <ArrowUpRight size={16} /></Link></aside></section></>;
}

function CaseTopicPaths({ slug, content, isOriginal }: { slug: string; content: DiscoveryContent; isOriginal: boolean }) {
  const topic = CASE_TOPIC_PATHS[slug];
  if (!topic) return null;
  const heading = slug === "pjazza" ? <>Start with the<br /><i>buyer’s question.</i></> : slug === "h360" ? <>Find the moment<br /><i>that breaks the day.</i></> : slug === "data-foundation" ? <>Name the record<br /><i>that will not agree.</i></> : slug === "live-context" ? <>Protect the<br /><i>first glance.</i></> : <>Find the repeated<br /><i>moment that matters.</i></>;
  const projectEmail = `mailto:hello@oarcdigital.com?subject=${encodeURIComponent(`OARC project — ${topic.query}`)}&body=${encodeURIComponent(`Hi OARC Digital,\n\nI reached out from the ${topic.query} case route.\n\nThe business problem I want to discuss:\n\nMy current situation:\n\nBest next step for me:`)}`;
  return <section className={`case-topic-paths topic-${slug} ${isOriginal ? "case-topic-original" : ""}`} aria-labelledby="case-topic-title"><header><p>READ THIS BY THE REAL PROBLEM</p><h2 id="case-topic-title">{heading}</h2><span>{isOriginal ? "A focused client brief, made concrete through OARC method." : "A clear route from the work shown here to the next relevant conversation."}</span></header><div><Link href={topic.href}><b>01</b><em>{topic.query}</em><h3>{content.businessQuestion}</h3><span>{topic.route} <ArrowUpRight size={16} /></span></Link><a href={projectEmail}><b>02</b><em>PROJECT CONVERSATION</em><h3>{content.fitTitle}</h3><span>EMAIL OARC / CONTEXT INCLUDED <ArrowUpRight size={16} /></span></a></div></section>;
}

export default function WorkCase({ slug = "pjazza" }: { slug?: string }) {
  const knownStory = STORIES[slug] ?? ORIGINAL_STUDIES[slug];
  const baseStory = knownStory ?? STORIES.pjazza;
  const isConfidential = slug === "data-foundation" || slug === "live-context";
  const isOriginal = slug in ORIGINAL_STUDIES && !isConfidential;
  const story = isOriginal && ORIGINAL_STUDY_PUBLIC_NAMES[slug]
    ? { ...baseStory, name: ORIGINAL_STUDY_PUBLIC_NAMES[slug], eyebrow: baseStory.eyebrow.replace("OARC ORIGINAL STUDY", "CLIENT PROJECT"), mode: "Client project / campaign and prototype delivered by OARC" }
    : baseStory;
  const isClient = Boolean(story.clientRecord);
  const discovery = DISCOVERY_CONTENT[slug];
  const artefact = CASE_ARTEFACTS[slug];
  const campaignContext = CAMPAIGN_CONTEXT[slug];
  const rootStyle = story.theme ? ({ "--study-bg": story.theme.bg, "--study-paper": story.theme.paper, "--study-ink": story.theme.ink, "--study-signal": story.theme.signal, "--study-accent": story.theme.accent } as CSSProperties) : undefined;


  if (!knownStory) return <main className="premium-work-root documentary"><section className="source-disclosure"><span>RECORD UNAVAILABLE</span><h2>This OARC Work record could not be found.</h2><Link href="/new-work">Return to Our Work</Link></section></main>;

  const caseFormat = slug === "pjazza" ? "marketplace" : slug === "h360" ? "hospitality" : slug === "data-foundation" ? "archive" : slug === "live-context" ? "live" : isClient ? "client" : "original";
  const publicEyebrow = story.eyebrow.replace(/OARC ORIGINAL STUDY\s*\/\s*/i, "CLIENT PROJECT / ");
  const publicMode = story.mode.replace(/confidential engagement|restricted-disclosure|original study/gi, "client project").replace(/\s*\/\s*no (external )?client.*$/i, "");
  const heroAlt = story.heroAlt ?? (story.name === "PJAZZA" ? "Official PJAZZA marketplace imagery showing a food-and-dining context" : story.name === "DATA FOUNDATION" ? "Illustrative data-governance system visual with no client data" : isConfidential ? "Private client project illustration" : `Client project visual world for ${story.name}`);
  return <main className={`case-page documentary case-${slug} case-format-${caseFormat} ${isOriginal ? `original-case structure-${story.structure}` : ""} ${isClient ? "client-case" : ""}`} style={rootStyle}>
    <header className="case-nav-light"><Link href="/new-work" className="oarc-brand light-brand" aria-label="OARC Digital Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></Link><span className="case-signal">{isOriginal ? "CLIENT PROJECT / OARC DELIVERY" : isConfidential ? "CLIENT SYSTEMS / OARC DELIVERY" : isClient ? "CLIENT PARTNERSHIP / OARC DELIVERY" : "CLIENT PRODUCT / LIVE RECORD"}</span><Link href="/new-work" className="back-link-light"><ChevronLeft size={16} /> All stories</Link></header>
    <section className="documentary-hero"><div className="documentary-hero-copy"><p>{publicEyebrow}</p><h1>{story.title.map((line, index) => <span className={index === 1 ? "hero-italic" : ""} key={line}>{line}</span>)}</h1><p className="documentary-intro">{story.intro}</p><div className="documentary-status"><CircleCheck size={15} /> {publicMode}</div></div><figure className={!story.image ? "documentary-hero-art" : ""}>{story.image ? <img src={story.image} alt={heroAlt} decoding="async" fetchPriority="high" /> : <div className="launch-art" aria-label="Client launch treatment visual" role="img"><span>DNM</span><b>LAUNCH<br />SEQUENCE</b><i>2026</i></div>}<figcaption><span>{story.name} / {isOriginal ? "Client project" : isClient ? "OARC client partnership" : isConfidential ? "Client systems" : "Client product"}</span>{isOriginal ? <span>Client project visual / OARC art direction</span> : <a href={story.source} target="_blank" rel="noopener noreferrer">Source: {story.sourceLabel} <ArrowUpRight size={14} /></a>}</figcaption></figure></section>
    <CaseProofLedger story={story} slug={slug} isOriginal={isOriginal} />
    <CaseAnswerPanel story={story} />
    <section className="case-record-light"><p>WHAT THIS IS</p><div><h2>{story.record}</h2><div className="record-facts">{story.facts.map((fact, index) => <div key={fact}><b>{String(index + 1).padStart(2, "0")}</b><span>{fact}</span></div>)}</div></div></section>
    <CaseDeliverySummary story={story} slug={slug} context={campaignContext} artefact={artefact} />
    <CaseServiceSignalRail story={story} />
    {slug === "h360" && <RestaurantDayRibbon />}
    {discovery && <CaseDiscoveryDepth content={discovery} isOriginal={isOriginal} isConfidential={isConfidential} />}
    {discovery && <CaseTopicPaths slug={slug} content={discovery} isOriginal={isOriginal} />}
    {isOriginal && <OriginalSignature story={story} />}
    {slug === "pjazza" && story.evidenceMedia && <MarketplaceProofWall media={story.evidenceMedia} />}
    {slug === "data-foundation" && <ArchiveProtocol />}
    {slug === "maison-verre-discovery" && <ObjectSequence />}
     {story.evidenceMedia && slug !== "pjazza" && <section className="pjazza-evidence-gallery" aria-labelledby="pjazza-evidence-title"><div className="case-section-intro"><p>{isClient ? "SELECTED CLIENT CAMPAIGN MEDIA" : "PUBLIC PRODUCT EVIDENCE"}</p><h2 id="pjazza-evidence-title">{isClient ? <>The campaign starts with <i>the real world.</i></> : <>The marketplace must work across <i>different kinds of decisions.</i></>}</h2><span>{isClient ? `Supplied ${story.name} imagery organised into a useful campaign sequence for social, video, and paid creative.` : "Official product-page imagery, used as source-linked product context."}</span></div><div className="pjazza-evidence-grid">{story.evidenceMedia.map((media, index) => <figure key={media.label} className={`pjazza-evidence-item evidence-${index + 1}`}><img src={media.src} alt={media.alt} loading="lazy" decoding="async" /><figcaption><b>{media.label}</b><span>{media.caption}</span></figcaption></figure>)}</div></section>}
    {isOriginal ? <OriginalChapters story={story} slug={slug} /> : <section className="case-chapters-light">{story.chapters.map((chapter, index) => <article key={chapter.number}><div className="chapter-key"><b>{chapter.number}</b><span>{chapter.label}</span></div><div><h2>{chapter.title}</h2><p>{chapter.body}</p><CaseChapterMedia story={story} slug={slug} index={index} label={chapter.label} /></div>{index === 1 && <aside><Sparkles size={31} /><span>THE DESIGN HAS A JOB: MAKE THE SYSTEM LEGIBLE.</span></aside>}</article>)}</section>}
    {campaignContext && <CampaignContext context={campaignContext} story={story} />}
    {artefact && <EvidenceArtefact artefact={artefact} />}
    <section className="case-film-panel"><figure className={!story.journeyImage ? "case-film-art" : ""}>{story.journeyImage ? <img src={story.journeyImage} alt={story.heroAlt ?? (story.name === "PJAZZA" ? "Official PJAZZA marketplace imagery showing a public people-and-services context" : story.name === "DATA FOUNDATION" ? "Illustrative four-stage data-governance process visual with no client data" : isConfidential ? "Private client project mobile experience illustration" : `Client project supporting visual for ${story.name}`)} loading="lazy" decoding="async" /> : <div className="launch-art launch-art-small" aria-hidden="true"><span>DNM</span><b>FIRST<br />SIGNAL</b><i>OARC</i></div>}</figure><div><span>{story.filmLabel}</span><h2>{story.filmTitle}</h2><p>{story.filmText}</p><span className="asset-status"><Play size={14} /> {isOriginal ? "CLIENT PROJECT / DELIVERED ARTEFACT" : isClient ? story.image ? "SOURCE-SELECTED CASE MEDIA" : "OARC LAUNCH TREATMENT / MEDIA PENDING" : "APPROVED RECORDING REQUIRED BEFORE PUBLICATION"}</span></div></section>
    {isOriginal ? <OriginalSystem story={story} /> : <Journey story={story} />}
    {story.liveRecord && <LiveBrandRecord record={story.liveRecord} isClient={isClient} />}
    {isOriginal && <OriginalStudyRecord story={story} />}
    {isConfidential && <ConfidentialRecord story={story} />}
    {story.faq && <section className="case-faq" aria-labelledby="case-faq-title"><div className="case-section-intro"><p>{isClient ? "THE CLIENT PARTNERSHIP" : isOriginal ? "THE CLIENT PROJECT" : isConfidential ? "THE CLIENT SYSTEMS" : "THE CLIENT PRODUCT"}</p><h2 id="case-faq-title">The answers a person—and a search engine—<i>should be able to find.</i></h2></div><div>{story.faq.map((item, index) => <details key={item.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<MoveRight size={18} /></summary><p>{item.answer}</p></details>)}</div></section>}
    <section className="source-disclosure"><span>{isOriginal ? "CLIENT PROJECT" : isConfidential ? "CLIENT SYSTEMS" : "THE CLOSING FRAME"}</span><h2>{story.closeTitle}</h2><p>{story.closeText}</p>{isOriginal ? <span className="source-static-label">CLIENT PROJECT / OARC DELIVERY AND PROTOTYPE</span> : <a href={story.source} target="_blank" rel="noopener noreferrer">Visit the approved public source <ArrowUpRight size={17} /></a>}</section>
    <footer className="case-footer-light"><span>OARC DIGITAL / RESEARCH-LED WORK</span><span>© 2026</span></footer>
  </main>;
}
