"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_TREATMENTS } from "@/lib/data/premium-work/originalTreatments";
import { CASE_PROOF } from "@/lib/data/premium-work/caseProof";

type Filter = "All client work" | "Client partnerships" | "Client products" | "Client systems" | "Client projects";

const CLIENT_SCOPE: Record<string, string> = {
  "louisiana-mama": "Brand · content · direct ordering · systems",
  palino: "Brand system · content · influencer activation",
  "ricky-jr-burger": "Always-on social content · brand growth",
  "mcw-cbd": "Google listings · website · social · ads",
  "calle-bistro": "Local search · website · paid social · CAPI",
  kreta: "Local search · content · booking journey",
  tiffany: "Content · video · website · event booking",
  "massive-fan-zone": "Event campaign · content · paid media",
  "spinola-gin-fest": "Festival campaign · content · paid media",
  "drink-n-more": "Launch plan · launch creative · content plan",
  "portomaso-casino": "Venue photography · restaurant content",
};

const SERVICE_SIGNALS = [
  { label: "Digital marketing", href: "/aeo/digital-marketing-agency-malta" },
  { label: "Social media management", href: "/aeo/social-media-agency-malta" },
  { label: "Social video & content", href: "/aeo/video-production-malta" },
  { label: "TikTok marketing", href: "/aeo/tiktok-marketing-malta" },
  { label: "Website design & development", href: "/aeo/web-design-malta" },
  { label: "AI chatbot implementation", href: "/aeo/ai-chatbot-malta" },
  { label: "Marketing automation", href: "/aeo/marketing-automation-malta" },
  { label: "Paid advertising", href: "/aeo/paid-advertising-malta" },
];

const PROJECT_MARKS: Record<string, string> = {
  "louisiana-mama": "Restaurant branding · content · direct ordering",
  palino: "Hospitality brand · social content · activation",
  "ricky-jr-burger": "Burger brand · social video · content management",
  "mcw-cbd": "CBD retail · Google listings · social · ads",
  "calle-bistro": "Local search · website · paid social",
  kreta: "Restaurant discovery · content · booking journey",
  tiffany: "Champagne bar · video · website · bookings",
  "massive-fan-zone": "Event campaign · social video · paid media",
  "spinola-gin-fest": "Festival marketing · content · audience growth",
  "drink-n-more": "Product launch · social content · campaign production",
  "portomaso-casino": "Venue photography · restaurant content",
  pjazza: "Marketplace product · local commerce · digital experience",
  "data-foundation": "Data systems · workflow design · implementation",
  "live-context": "Live-information UX · mobile product · interaction design",
  "meridian-retail-response": "Retail response · customer journey · campaign system",
  "cobalt-decision-thread": "Decision systems · content structure · conversion flow",
  "skyline-first-response": "Rapid response · social content · brand communications",
  "vela-signal-pipeline": "Data pipeline · operations · digital systems",
  "ashford-in-real-life": "Product launch · campaign content · everyday utility",
  "kinetic-member-energy": "Fitness community · social video · membership energy",
  "maison-verre-discovery": "Fragrance launch · editorial content · brand discovery",
  "botanic-muse-field-notes": "Beauty community · social content · creator routines",
  "vertex-after-launch": "Gaming launch · community design · digital product",
  "arena-one-regional-signal": "Esports event · regional campaign · audience growth",
  "wellbridge-clear-path": "Service design · customer journey · digital experience",
  "aurum-document-trail": "Document workflow · data governance · automation",
  "hearth-test-kitchen": "Creative operations · campaign system · content testing",
  "fanline-live-ritual": "Live audience · event content · digital experience",
  "crownline-fresh-signal": "Food operations · demand planning · decision systems",
  "bluebridge-candidate-welcome": "Candidate experience · communications · workflow",
  "northforge-adoption-ladder": "AI adoption · automation · operating system",
  "belgrave-client-time": "Premium service · customer experience · operations",
};

/** The headline result for a card, e.g. "+24% table bookings from Instagram". */
function impactLine(slug: string): string | undefined {
  const stat = CASE_PROOF[slug]?.stats?.[0];
  if (!stat) return undefined;
  return `${stat.value} ${stat.label.charAt(0).toLowerCase()}${stat.label.slice(1)}`;
}

const FEATURED_CLIENT_ORDER = ["tiffany", "portomaso-casino", "massive-fan-zone", "spinola-gin-fest", "drink-n-more", "mcw-cbd", "calle-bistro", "kreta", "louisiana-mama", "palino", "ricky-jr-burger"];

const PORTFOLIO_PROOF = [
  { value: "30+", label: "client projects" },
  { value: "11", label: "named brand partnerships" },
  { value: "8", label: "delivery capabilities" },
  { value: "1", label: "connected OARC practice" },
];

const clientProjects = Object.entries(CLIENT_CASE_STUDIES).sort(([a], [b]) => FEATURED_CLIENT_ORDER.indexOf(a) - FEATURED_CLIENT_ORDER.indexOf(b)).map(([slug, story], index) => ({
  key: `client-${slug}`,
  href: `/our-work/${slug}`,
  category: "Client partnerships" as const,
  number: `C${String(index + 1).padStart(2, "0")}`,
  tag: story.eyebrow.replace("CLIENT RECORD", "CLIENT PARTNERSHIP"),
  title: story.name,
  line: story.intro,
  evidence: impactLine(slug) ?? PROJECT_MARKS[slug] ?? "Digital delivery · content · implementation",
  image: story.image,
  alt: story.heroAlt ?? `${story.name}: brand image`,
  style: `card-client client-card-${slug}`,
  accent: story.theme.signal,
  categoryLabel: "Client partnership",
}));

const anchorProjects = [
  { key: "product-pjazza", href: "/our-work/pjazza", category: "Client products" as const, number: "P01", tag: "LIVE OARC PRODUCT / MARKETPLACE", title: "PJAZZA — OARC PRODUCT", line: "Malta’s live-shopping marketplace. Watch it live, ask the seller, pay safely.", evidence: impactLine("pjazza") ?? "Live product", image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg", alt: "Official PJAZZA marketplace imagery showing a food-and-dining context", style: "card-pjazza", accent: "#f3a64a" },
  { key: "private-data-foundation", href: "/our-work/data-foundation", category: "Client systems" as const, number: "E01", tag: "CLIENT SYSTEMS PROJECT / DATA SYSTEMS", title: "OPERATIONS DATA FOUNDATION", line: "A distributor’s messy product data, cleaned into one clear view.", evidence: impactLine("data-foundation") ?? PROJECT_MARKS["data-foundation"], image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", alt: "Data-system engagement illustration with no identifying client information", style: "card-data-foundation", accent: "#8db6ff" },
  { key: "private-live-context", href: "/our-work/live-context", category: "Client systems" as const, number: "E02", tag: "CLIENT SYSTEMS PROJECT / LIVE INFORMATION", title: "LIVE INFORMATION EXPERIENCE", line: "A live sports app, redesigned so fans find the score first.", evidence: impactLine("live-context") ?? PROJECT_MARKS["live-context"], image: "/attached_assets/premium-work/live-context-sports_486d86c2.jpg", alt: "Live-information mobile experience illustration with no identifying client information", style: "card-live-context", accent: "#f15d8a" },
];

const labProjects = Object.entries(ORIGINAL_STUDIES)
  .filter(([slug]) => slug !== "live-context" && slug !== "data-foundation")
  .map(([slug, story], index) => ({
    key: `lab-${slug}`,
    href: `/our-work/${slug}`,
    category: "Client projects" as const,
    number: `L${String(index + 1).padStart(2, "0")}`,
    tag: `CLIENT PROJECT / ${ORIGINAL_TREATMENTS[slug]?.serviceTag ?? story.eyebrow.replace("OARC ORIGINAL STUDY / ", "CLIENT PROJECT / ")}`,
    title: ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name,
    line: story.intro,
    evidence: impactLine(slug) ?? PROJECT_MARKS[slug] ?? "Digital delivery · content · implementation",
    image: story.image,
    alt: `${ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name}: client project visual`,
    style: `card-original card-${story.structure}`,
    accent: story.theme?.signal ?? "#c8d5cb",
  }));

const projects = [...clientProjects, ...anchorProjects, ...labProjects];
const filters: Filter[] = ["All client work", "Client partnerships", "Client products", "Client systems", "Client projects"];

function Brand() {
  return <a href="#our-work-top" className="oarc-brand light-brand" aria-label="OARC Digital Our Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></a>;
}

export default function NewWorkIndex() {
  const [filter, setFilter] = useState<Filter>("All client work");
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => filter === "All client work" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return <div className="work-index work-index-light" id="our-work-top">
    <section className="light-hero">
      <header className="light-topbar"><Brand /><span className="oarc-edition">OUR WORK / CLIENT PARTNERSHIPS<br />EDITION 01 — 2026</span><nav className="light-nav" aria-label="Our Work navigation"><a href="#our-work-records">Work</a><a href="#our-work-standard">How to read it</a></nav><a href="#our-work-contact" className="light-contact">Start a conversation <ArrowUpRight size={15} /></a><button className="light-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      {menuOpen && <nav className="light-mobile-nav" aria-label="Mobile Our Work navigation"><a href="#our-work-records" onClick={() => setMenuOpen(false)}>Work</a><a href="#our-work-standard" onClick={() => setMenuOpen(false)}>How to read it</a><a href="#our-work-contact" onClick={() => setMenuOpen(false)}>Start a conversation</a></nav>}
      <div className="hero-signal" />
      <div className="light-hero-copy"><p className="ink-label">CLIENT PARTNERSHIPS · CLIENT PRODUCTS · CLIENT SYSTEMS</p><h1>WORK YOU CAN<br /><i>TRUST.</i></h1><div><p><strong>Real brands and real OARC delivery lead this collection.</strong> Real clients. Real work. Real numbers on every page.</p><a href="#our-work-records" aria-label="View selected OARC work"><ArrowDownRight size={23} /></a></div></div>
       <div className="hero-collage"><figure className="hero-collage-a"><img src="/attached_assets/premium-work/client-media/tiffany-champagne-toast.jpg" alt="Tiffany Lounge champagne toast showing the venue’s hospitality atmosphere" decoding="async" fetchPriority="high" /><figcaption>TIFFANY LOUNGE / HOSPITALITY CONTENT</figcaption></figure><figure className="hero-collage-b"><img src="/attached_assets/premium-work/client-media/portomaso-entrance-hero.jpg" alt="Portomaso Casino entrance showing the approved venue-media source" loading="eager" decoding="async" /><figcaption>PORTOMASO CASINO / VENUE MEDIA</figcaption></figure><span>SELECTED<br />CLIENT<br />WORK</span></div>
    </section>

    <section className="work-answer-index" aria-labelledby="our-work-answer-title"><div><p>THE DIRECT ANSWER</p><h2 id="our-work-answer-title">What will you<br /><i>find here?</i></h2></div><p>Every project shows three things: the problem, what we did, and what happened. With the numbers.</p><a href="#our-work-standard">How to read the collection <ArrowUpRight size={17} /></a></section>
    <section className="purpose-strip"><p>REAL CLIENTS. REAL WORK. REAL NUMBERS.</p></section>
    <section className="portfolio-proof-strip" aria-label="OARC Our Work portfolio facts">{PORTFOLIO_PROOF.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</section>

    <section className="story-index" id="our-work-records">
      <div className="story-index-heading"><p className="ink-label">SELECTED WORK / {projects.length} PROJECTS</p><h2>Start with the<br />client partnerships.</h2><p>Start anywhere. Every project shows what we did and what it achieved.</p></div>
      <div className="story-controls"><div role="tablist" aria-label="Filter Our Work records">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><span>{visible.length.toString().padStart(2, "0")} PROJECTS / {filter.toUpperCase()}</span></div>
      <div className="story-cards">{visible.map((project, index) => <Link href={project.href} className={`story-card ${project.style}`} style={{ "--client-accent": project.accent } as React.CSSProperties} key={project.key}><figure>{project.image ? <img src={project.image} alt={`${project.title}: ${project.evidence}`} loading={project.category !== "Client projects" || index < 2 ? "eager" : "lazy"} decoding="async" /> : <div className="client-launch-card-art" role="img" aria-label={`${project.title}: launch work in production`}><span>{project.title}</span><b>LAUNCH<br />CAMPAIGN<br />BY OARC</b></div>}<figcaption><b>{project.number}</b><span>{"categoryLabel" in project ? project.categoryLabel : project.category}</span></figcaption></figure><div className="story-card-copy"><span>{project.tag}</span><h3>{project.title}</h3><p>{project.line}</p><div><b>{project.number}</b><em>{project.evidence}</em><ArrowUpRight size={19} /></div></div></Link>)}</div>
    </section>

    <section className="service-index-rail" aria-labelledby="our-work-services-title"><div><p className="ink-label">OARC DELIVERY CAPABILITIES</p><h2 id="our-work-services-title">From strategy to<br /><i>implementation.</i></h2><p>These case studies sit inside the work OARC delivers for ambitious brands: digital marketing, social content, video, TikTok, websites, automation, AI chatbots, and paid growth.</p></div><nav aria-label="OARC Digital services from Our Work">{SERVICE_SIGNALS.map((service) => <Link href={service.href} key={service.href}>{service.label}<ArrowUpRight size={16} /></Link>)}</nav></section>

    <section className="standard-section" id="our-work-standard"><div className="standard-stamp"><span>OARC</span><b>OUR<br />WORK</b></div><div><p className="ink-label">HOW TO READ THIS COLLECTION</p><h2>One collection.<br />Four client types.</h2><p>Each project shows the client, what OARC did, and the results.</p></div><ol><li><b>01</b> Client partnerships: named brands, with links to see them live.</li><li><b>02</b> Products and systems: things we built, and what they changed.</li><li><b>03</b> Client projects: the problem, the fix and the numbers.</li></ol></section>
    <section className="archive-section" id="our-work-contact"><div><p className="ink-label">THE NEXT PARTNERSHIP</p><h2>Bring the real<br /><i>pressure.</i></h2><p>Bring the ambition, the business problem, or the moment that deserves a sharper creative and digital response.</p></div><a href="/contact" className="archive-contact">Start a conversation <ArrowUpRight size={19} /></a></section>
  </div>;
}
