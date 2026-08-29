"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { ORIGINAL_STUDIES, ORIGINAL_STUDY_PUBLIC_NAMES } from "@/lib/data/premium-work/originalStudies";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_TREATMENTS } from "@/lib/data/premium-work/originalTreatments";

type Filter = "All client work" | "Client partnerships" | "Client products" | "Client systems" | "Client concept work";

const CLIENT_SCOPE: Record<string, string> = {
  "louisiana-mama": "Brand · content · direct ordering · systems",
  palino: "Brand system · content · influencer activation",
  "ricky-jr-burger": "Always-on social content · brand growth",
  "mcw-cbd": "Multi-location presence · content operations",
  "calle-bistro": "Local search · website · paid social · CAPI",
  kreta: "Local search · content · booking journey",
  tiffany: "Content · video · website · event booking",
  "massive-fan-zone": "Event campaign · content · paid media",
  "spinola-gin-fest": "Festival campaign · content · paid media",
  "drink-n-more": "Launch campaign · active work in production",
  "portomaso-casino": "Approved venue-media showcase",
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
  "mcw-cbd": "CBD retail · multi-location content · product education",
  "calle-bistro": "Local search · website · paid social",
  kreta: "Restaurant discovery · content · booking journey",
  tiffany: "Real estate brand · video · event booking",
  "massive-fan-zone": "Event campaign · social video · paid media",
  "spinola-gin-fest": "Festival marketing · content · audience growth",
  "drink-n-more": "Product launch · social content · campaign production",
  "portomaso-casino": "Venue media · content production · brand presence",
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

const clientProjects = Object.entries(CLIENT_CASE_STUDIES).map(([slug, story], index) => ({
  key: `client-${slug}`,
  href: `/new-work/${slug}`,
  category: "Client partnerships" as const,
  number: `C${String(index + 1).padStart(2, "0")}`,
  tag: slug === "portomaso-casino" ? "BRAND MEDIA SHOWCASE / APPROVED VENUE" : slug === "drink-n-more" ? "CLIENT PARTNERSHIP / LAUNCH IN PRODUCTION" : story.eyebrow.replace("CLIENT RECORD", "CLIENT PARTNERSHIP"),
  title: story.name,
  line: story.intro,
  evidence: PROJECT_MARKS[slug] ?? "Digital delivery · content · implementation",
  image: story.image,
  alt: story.heroAlt ?? `${story.name}: approved brand media`,
  style: `card-client client-card-${slug}`,
  accent: story.theme.signal,
  categoryLabel: slug === "portomaso-casino" ? "Brand media showcase" : slug === "drink-n-more" ? "Launch in production" : "Client partnership",
}));

const anchorProjects = [
  { key: "product-pjazza", href: "/new-work/pjazza", category: "Client products" as const, number: "P01", tag: "LIVE OARC PRODUCT / MARKETPLACE", title: "PJAZZA", line: "A live marketplace built around the question before a purchase.", evidence: "Live product · public destinations inside", image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg", alt: "Official PJAZZA marketplace imagery showing a food-and-dining context", style: "card-pjazza", accent: "#f3a64a" },
  { key: "private-data-foundation", href: "/new-work/data-foundation", category: "Client systems" as const, number: "E01", tag: "CLIENT SYSTEMS PROJECT / DATA SYSTEMS", title: "DATA FOUNDATION", line: "A client data-system engagement presented without identifying the organisation behind it.", evidence: PROJECT_MARKS["data-foundation"], image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", alt: "Data-system engagement illustration with no identifying client information", style: "card-data-foundation", accent: "#8db6ff" },
  { key: "private-live-context", href: "/new-work/live-context", category: "Client systems" as const, number: "E02", tag: "CLIENT SYSTEMS PROJECT / LIVE INFORMATION", title: "LIVE CONTEXT", line: "A mobile reading-order redesign for a fast live-information environment.", evidence: PROJECT_MARKS["live-context"], image: "/attached_assets/premium-work/live-context-sports_486d86c2.jpg", alt: "Live-information mobile experience illustration with no identifying client information", style: "card-live-context", accent: "#f15d8a" },
];

const labProjects = Object.entries(ORIGINAL_STUDIES)
  .filter(([slug]) => slug !== "live-context" && slug !== "data-foundation")
  .map(([slug, story], index) => ({
    key: `lab-${slug}`,
    href: `/new-work/${slug}`,
    category: "Client concept work" as const,
    number: `L${String(index + 1).padStart(2, "0")}`,
    tag: `CLIENT PROJECT / ${ORIGINAL_TREATMENTS[slug]?.serviceTag ?? story.eyebrow.replace("OARC ORIGINAL STUDY / ", "")}`,
    title: ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name,
    line: ORIGINAL_TREATMENTS[slug]?.cardLine ?? story.intro,
    evidence: PROJECT_MARKS[slug] ?? "Digital delivery · content · implementation",
    image: story.image,
    alt: `${ORIGINAL_STUDY_PUBLIC_NAMES[slug] ?? story.name}: client project visual`,
    style: `card-original card-${story.structure}`,
    accent: story.theme?.signal ?? "#c8d5cb",
  }));

const projects = [...clientProjects, ...anchorProjects, ...labProjects];
const filters: Filter[] = ["Client partnerships", "Client products", "Client systems", "Client concept work", "All client work"];

function Brand() {
  return <a href="#new-work-top" className="oarc-brand light-brand" aria-label="OARC Digital New Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></a>;
}

export default function NewWorkIndex() {
  const [filter, setFilter] = useState<Filter>("Client partnerships");
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => filter === "All client work" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return <main className="work-index work-index-light" id="new-work-top">
    <section className="light-hero">
      <header className="light-topbar"><Brand /><span className="oarc-edition">NEW WORK / CLIENT PARTNERSHIPS<br />EDITION 01 — 2026</span><nav className="light-nav" aria-label="New Work navigation"><a href="#new-work-records">Work</a><a href="#new-work-standard">How to read it</a><Link href="/our-work">Our Work</Link></nav><a href="#new-work-contact" className="light-contact">Start a conversation <ArrowUpRight size={15} /></a><button className="light-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      {menuOpen && <nav className="light-mobile-nav" aria-label="Mobile New Work navigation"><a href="#new-work-records" onClick={() => setMenuOpen(false)}>Work</a><a href="#new-work-standard" onClick={() => setMenuOpen(false)}>How to read it</a><Link href="/our-work" onClick={() => setMenuOpen(false)}>Our Work</Link><a href="#new-work-contact" onClick={() => setMenuOpen(false)}>Start a conversation</a></nav>}
      <div className="hero-signal" />
      <div className="light-hero-copy"><p className="ink-label">CLIENT PARTNERSHIPS · CLIENT PRODUCTS · CLIENT SYSTEMS</p><h1>WORK YOU CAN<br /><i>TRUST.</i></h1><div><p><strong>Real brands and real OARC delivery lead this collection.</strong> Client products, client systems, and concept-led client projects follow in clearly marked sections—so every record says exactly what it is.</p><a href="#new-work-records" aria-label="View selected OARC work"><ArrowDownRight size={23} /></a></div></div>
      <div className="hero-collage"><figure className="hero-collage-a"><img src="/attached_assets/premium-work/oarc-fragrance-material-unsplash_a7449a24.jpg" alt="Monochrome editorial material study representing OARC’s attention to detail" decoding="async" fetchPriority="high" /><figcaption>EDITORIAL MATERIAL STUDY</figcaption></figure><figure className="hero-collage-b"><img src="/attached_assets/premium-work/oarc-aperture-mark_9b0eb15b.png" alt="OARC aperture mark representing connected creative and digital systems" loading="eager" decoding="async" /><figcaption>OARC SYSTEMS &amp; CRAFT</figcaption></figure><span>NEW<br />WORK<br />2026</span></div>
    </section>

    <section className="work-answer-index" aria-labelledby="new-work-answer-title"><div><p>THE DIRECT ANSWER</p><h2 id="new-work-answer-title">What will you<br /><i>find here?</i></h2></div><p>Client partnerships show the brand and OARC’s delivery. Client products show live product work. Client systems projects show the business problem and delivery approach. Concept-led client projects show the system and prototype work behind a focused brief.</p><a href="#new-work-standard">How to read the collection <ArrowUpRight size={17} /></a></section>
    <section className="purpose-strip"><p>REAL CLIENTS. REAL DELIVERY. EVERY PROJECT, CLEARLY LABELLED.</p></section>

    <section className="story-index" id="new-work-records">
      <div className="story-index-heading"><p className="ink-label">SELECTED WORK / {projects.length} RECORDS</p><h2>Start with the<br />client partnerships.</h2><p>The strongest client proof comes first. Use the filters to explore products, client systems projects, and concept-led engagements without mixing one kind of delivery for another.</p></div>
      <div className="story-controls"><div role="tablist" aria-label="Filter New Work records">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><span>{visible.length.toString().padStart(2, "0")} RECORDS / {filter.toUpperCase()}</span></div>
      <div className="story-cards">{visible.map((project, index) => <Link href={project.href} className={`story-card ${project.style}`} style={{ "--client-accent": project.accent } as React.CSSProperties} key={project.key}><figure>{project.image ? <img src={project.image} alt={`${project.title}: ${project.evidence}`} loading={project.category !== "Client concept work" || index < 2 ? "eager" : "lazy"} decoding="async" /> : <div className="client-launch-card-art" role="img" aria-label={`${project.title}: launch work in production`}><span>{project.title}</span><b>LAUNCH<br />WORK<br />IN PRODUCTION</b></div>}<figcaption><b>{project.number}</b><span>{"categoryLabel" in project ? project.categoryLabel : project.category}</span></figcaption></figure><div className="story-card-copy"><span>{project.tag}</span><h3>{project.title}</h3><p>{project.line}</p><div><b>{project.number}</b><em>{project.evidence}</em><ArrowUpRight size={19} /></div></div></Link>)}</div>
    </section>

    <section className="service-index-rail" aria-labelledby="new-work-services-title"><div><p className="ink-label">OARC DELIVERY CAPABILITIES</p><h2 id="new-work-services-title">From strategy to<br /><i>implementation.</i></h2><p>These case studies sit inside the work OARC delivers for ambitious brands: digital marketing, social content, video, TikTok, websites, automation, AI chatbots, and paid growth.</p></div><nav aria-label="OARC Digital services from New Work">{SERVICE_SIGNALS.map((service) => <Link href={service.href} key={service.href}>{service.label}<ArrowUpRight size={16} /></Link>)}</nav></section>

    <section className="standard-section" id="new-work-standard"><div className="standard-stamp"><span>OARC</span><b>NEW<br />WORK</b></div><div><p className="ink-label">HOW TO READ THIS COLLECTION</p><h2>One collection.<br />Four client types.</h2><p>The work stays premium because the labelling stays simple. Each record shows the client context, the OARC delivery, and the public destination or approved project evidence available for that engagement.</p></div><ol><li><b>01</b> Client partnerships lead with OARC’s actual scope and approved public brand links.</li><li><b>02</b> Client products and client systems are identified before the story begins.</li><li><b>03</b> Concept-led client projects show thinking and craft through the same pressure-led standard as the named partnerships.</li></ol></section>
    <section className="archive-section" id="new-work-contact"><div><p className="ink-label">THE NEXT PARTNERSHIP</p><h2>Bring the real<br /><i>pressure.</i></h2><p>Bring the ambition, the business problem, or the moment that deserves a sharper creative and digital response.</p></div><a href="/contact" className="archive-contact">Start a conversation <ArrowUpRight size={19} /></a></section>
  </main>;
}
