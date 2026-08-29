"use client";

/* OARC Design Reminder — Evidence in Motion: one editorial surface, media-first records, source status visible before the click, and no card may imply more proof than its record contains. */
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_TREATMENTS } from "@/lib/data/premium-work/originalTreatments";

type Filter = "All work" | "Client work" | "Public products" | "Private work" | "Studio work";

const curatedProjects = Object.entries(CLIENT_CASE_STUDIES).map(([slug, story], index) => ({
  key: `curated-${slug}`,
  href: `/new-work/${slug}`,
  category: "Client work" as const,
  number: `C${String(index + 1).padStart(2, "0")}`,
  tag: story.eyebrow,
  title: story.name,
  line: story.intro,
  evidence: story.facts.slice(0, 2).join(" · "),
  image: story.image,
  alt: story.heroAlt ?? `${story.name}: source-selected client record media`,
  style: `card-client client-card-${slug}`,
  accent: story.theme.signal,
}));

const anchorProjects = [
  { key: "original-pjazza", href: "/new-work/pjazza", category: "Public products" as const, number: "01", tag: "PUBLIC PRODUCT / MARKETPLACE", title: "PJAZZA", line: "A live marketplace built around the question before a purchase.", evidence: "Product record · public links verified", image: "/attached_assets/premium-work/pjazza-food_b3085783.jpg", alt: "Official PJAZZA marketplace imagery showing a food-and-dining context", style: "card-pjazza", accent: "#f3a64a" },
  { key: "original-h360", href: "/new-work/h360", category: "Public products" as const, number: "P01", tag: "OARC PRODUCT SYSTEM / RESTAURANTS", title: "H360", line: "A restaurant system joining discovery, bookings, questions, orders, and operations.", evidence: "Product record · not a named-client result", image: "/attached_assets/premium-work/h360-public-product-hub_b339c106.webp", alt: "Illustrative art direction for a restaurant operating system", style: "card-h360", accent: "#7ec8a4" },
  { key: "original-data-foundation", href: "/new-work/data-foundation", category: "Private work" as const, number: "20", tag: "PRIVATE WORK / DATA SYSTEMS", title: "DATA FOUNDATION", line: "A restricted story about moving fragmented records toward governed data.", evidence: "Restricted work / data systems", image: "/attached_assets/premium-work/oarc-confidential-data-foundation_61730536.jpg", alt: "Illustrative data foundation record image", style: "card-data-foundation", accent: "#8db6ff" },
  { key: "original-live-context", href: "/new-work/live-context", category: "Private work" as const, number: "21", tag: "PRIVATE WORK / LIVE INFORMATION", title: "LIVE CONTEXT", line: "A mobile reading-order redesign for a fast live-information environment.", evidence: "Restricted work / live information", image: "/attached_assets/premium-work/live-context-sports_486d86c2.jpg", alt: "Illustrative live-context mobile experience record", style: "card-live-context", accent: "#f15d8a" },
];
const originalProjects = Object.entries(ORIGINAL_STUDIES).filter(([slug]) => slug !== "live-context" && slug !== "data-foundation").map(([slug, story], index) => ({
  key: `original-${slug}`,
  href: `/new-work/${slug}`,
  category: "Studio work" as const,
  number: String(index + 2).padStart(2, "0"),
  tag: ORIGINAL_TREATMENTS[slug]?.serviceTag ?? `${story.eyebrow} / ORIGINAL OARC RECORD`,
  title: story.name,
  line: ORIGINAL_TREATMENTS[slug]?.cardLine ?? story.intro,
  evidence: `${ORIGINAL_TREATMENTS[slug]?.mediaRole ?? "OARC method direction"} · OARC work`,
  image: story.image,
  alt: `${story.name}: ${story.intro}`,
  style: `card-original card-${story.structure}`,
  accent: story.theme?.signal ?? "#c8d5cb",
}));

const restoredProjects = [...anchorProjects.filter((project) => project.key !== "original-h360"), ...originalProjects];
const projects = [...curatedProjects, ...restoredProjects];
const filters: Filter[] = ["All work", "Client work", "Public products", "Private work", "Studio work"];

function Brand() {
  return <a href="#new-work-top" className="oarc-brand light-brand" aria-label="OARC Digital New Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></a>;
}

export default function NewWorkIndex() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => filter === "All work" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return <main className="work-index work-index-light" id="new-work-top">
    <section className="light-hero">
      <header className="light-topbar"><Brand /><span className="oarc-edition">NEW WORK / SELECTED CASES<br />EDITION 01 — 2026</span><nav className="light-nav" aria-label="New Work navigation"><a href="#new-work-records">Records</a><a href="#new-work-standard">The standard</a><Link href="/our-work">Our Work</Link></nav><a href="#new-work-contact" className="light-contact">Start a conversation <ArrowUpRight size={15} /></a><button className="light-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      {menuOpen && <nav className="light-mobile-nav" aria-label="Mobile New Work navigation"><a href="#new-work-records" onClick={() => setMenuOpen(false)}>Records</a><a href="#new-work-standard" onClick={() => setMenuOpen(false)}>The standard</a><Link href="/our-work" onClick={() => setMenuOpen(false)}>Our Work</Link><a href="#new-work-contact" onClick={() => setMenuOpen(false)}>Start a conversation</a></nav>}
      <div className="hero-signal" />
      <div className="light-hero-copy"><p className="ink-label">OARC DIGITAL / SELECTED WORK / 32 CASE STUDIES</p><h1>WORK THAT<br />EARNS THE <i>LOOK.</i></h1><div><p><strong>A selection of brand, content, campaign, product, and operating work made to move businesses forward.</strong> Explore the ideas, images, systems, and experiences OARC has brought into the world.</p><a href="#new-work-records" aria-label="View selected OARC work"><ArrowDownRight size={23} /></a></div></div>
      <div className="hero-collage"><figure className="hero-collage-a"><img src={curatedProjects[0]?.image} alt={curatedProjects[0]?.alt} decoding="async" fetchPriority="high" /><figcaption>C01 / CLIENT WORK</figcaption></figure><figure className="hero-collage-b"><img src={originalProjects[0]?.image} alt={originalProjects[0]?.alt} loading="lazy" decoding="async" /><figcaption>01 / ORIGINAL OARC WORK</figcaption></figure><span>NEW<br />WORK<br />2026</span></div>
    </section>

    <section className="work-answer-index" aria-labelledby="new-work-answer-title"><div><p>THE DIRECT ANSWER</p><h2 id="new-work-answer-title">What kind of work<br /><i>do we make?</i></h2></div><p>OARC builds the creative and digital systems that make a business more visible, more useful, and easier to choose—from social content and paid campaigns to video, products, automation, and live experiences.</p><a href="#new-work-standard">See how the work is made <ArrowUpRight size={17} /></a></section>
    <section className="purpose-strip"><p>EVERY BRIEF DESERVES A POINT OF VIEW. EVERY DETAIL SHOULD EARN ITS PLACE.</p></section>

    <section className="story-index" id="new-work-records">
      <div className="story-index-heading"><p className="ink-label">SELECTED WORK / 32 CASE STUDIES</p><h2>Different briefs.<br />Different ways to make them matter.</h2><p>Browse the work by the kind of change it was built to create: stronger presence, sharper content, smoother service, clearer systems, or a more memorable moment.</p></div>
      <div className="story-controls"><div role="tablist" aria-label="Filter New Work records">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><span>{visible.length.toString().padStart(2, "0")} RECORDS / {filter.toUpperCase()}</span></div>
      <div className="story-cards">{visible.map((project, index) => <Link href={project.href} className={`story-card ${project.style}`} style={{ "--client-accent": project.accent } as React.CSSProperties} key={project.key}><figure>{project.image ? <img src={project.image} alt={`${project.title}: ${project.evidence}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" /> : <div className="client-launch-card-art" role="img" aria-label={`${project.title}: record image unavailable`}><span>{project.title}</span><b>LAUNCH<br />WORK<br />IN PRODUCTION</b></div>}<figcaption><b>{project.number}</b><span>{project.category}</span></figcaption></figure><div className="story-card-copy"><span>{project.tag}</span><h3>{project.title}</h3><p>{project.line}</p><div><b>{project.number}</b><em>{project.evidence}</em><ArrowUpRight size={19} /></div></div></Link>)}</div>
    </section>

    <section className="standard-section" id="new-work-standard"><div className="standard-stamp"><span>OARC</span><b>NEW<br />WORK</b></div><div><p className="ink-label">HOW THE WORK HOLDS UP</p><h2>One brief.<br />A sharper result.</h2><p>Every case begins with a pressure worth solving and ends with a clearer experience, a stronger piece of communication, or a system people can actually use. The form changes with the work.</p></div><ol><li><b>01</b> Find the idea that makes the brief worth remembering.</li><li><b>02</b> Build the content, product, campaign, or workflow around the real moment.</li><li><b>03</b> Leave the business with something clearer, more useful, and ready for the next move.</li></ol></section>
    <section className="archive-section" id="new-work-contact"><div><p className="ink-label">THE NEXT RECORD</p><h2>Bring the real<br /><i>pressure.</i></h2><p>The next piece of work starts with the right pressure. Bring the ambition, the problem, or the moment that deserves to be made sharper.</p></div><a href="/contact" className="archive-contact" id="new-work-contact-link">Start a conversation <ArrowUpRight size={19} /></a></section>
  </main>;
}
