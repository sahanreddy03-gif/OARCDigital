"use client";

/* OARC Design Reminder — Evidence in Motion: one editorial surface, media-first records, source status visible before the click, and no card may imply more proof than its record contains. */
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { caseStudiesArray } from "@/data/caseStudies";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";

type Filter = "All work" | "Curated records" | "Original OARC work";

const curatedProjects = Object.entries(CLIENT_CASE_STUDIES).map(([slug, story], index) => ({
  key: `curated-${slug}`,
  href: `/new-work/${slug}`,
  category: "Curated records" as const,
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

const originalProjects = caseStudiesArray.map((study, index) => ({
  key: `original-${study.slug}`,
  href: `/case-studies/${study.slug}`,
  category: "Original OARC work" as const,
  number: String(index + 1).padStart(2, "0"),
  tag: `${study.category} / ORIGINAL OARC RECORD`,
  title: study.brand,
  line: study.description,
  evidence: `${study.metrics.value} ${study.metrics.label}`,
  image: study.thumbnailImage,
  alt: `${study.brand}: ${study.description}`,
  style: "card-client new-original-card",
  accent: "#c8d5cb",
}));

const projects = [...curatedProjects, ...originalProjects];
const filters: Filter[] = ["All work", "Curated records", "Original OARC work"];

function Brand() {
  return <a href="#new-work-top" className="oarc-brand light-brand" aria-label="OARC Digital New Work"><span className="brand-word"><b>OARC</b><i>DIGITAL</i></span></a>;
}

export default function NewWorkIndex() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => filter === "All work" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return <main className="work-index work-index-light" id="new-work-top">
    <section className="light-hero">
      <header className="light-topbar"><Brand /><span className="oarc-edition">NEW WORK / COMPLETE INDEX<br />EDITION 01 — 2026</span><nav className="light-nav" aria-label="New Work navigation"><a href="#new-work-records">Records</a><a href="#new-work-standard">The standard</a><Link href="/our-work">Our Work</Link></nav><a href="#new-work-contact" className="light-contact">Start a conversation <ArrowUpRight size={15} /></a><button className="light-menu" aria-label="Open navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      {menuOpen && <nav className="light-mobile-nav" aria-label="Mobile New Work navigation"><a href="#new-work-records" onClick={() => setMenuOpen(false)}>Records</a><a href="#new-work-standard" onClick={() => setMenuOpen(false)}>The standard</a><Link href="/our-work" onClick={() => setMenuOpen(false)}>Our Work</Link><a href="#new-work-contact" onClick={() => setMenuOpen(false)}>Start a conversation</a></nav>}
      <div className="hero-signal" />
      <div className="light-hero-copy"><p className="ink-label">OARC DIGITAL / NEW WORK / 32 RECORDS</p><h1>ALL THE WORK.<br />ONE <i>READABLE</i><br />SURFACE.</h1><div><p><strong>New Work brings the original OARC collection and the newly curated evidence records into one inspectable page.</strong> The source, category, and next route stay visible before a visitor opens a record.</p><a href="#new-work-records" aria-label="View all New Work records"><ArrowDownRight size={23} /></a></div></div>
      <div className="hero-collage"><figure className="hero-collage-a"><img src={curatedProjects[0]?.image} alt={curatedProjects[0]?.alt} decoding="async" fetchPriority="high" /><figcaption>C01 / CURATED CLIENT RECORD</figcaption></figure><figure className="hero-collage-b"><img src={originalProjects[0]?.image} alt={originalProjects[0]?.alt} loading="lazy" decoding="async" /><figcaption>01 / ORIGINAL OARC WORK</figcaption></figure><span>NEW<br />WORK<br />2026</span></div>
    </section>

    <section className="work-answer-index" aria-labelledby="new-work-answer-title"><div><p>THE DIRECT ANSWER</p><h2 id="new-work-answer-title">What is<br /><i>New Work?</i></h2></div><p>A single OARC Digital index of 32 records: 21 original work records preserved from the existing collection and 11 newly curated named client and event records. They remain visibly distinct so a source-linked record, an original OARC record, and a dated client snapshot are never confused.</p><Link href="/our-work/methodology">Read the evidence standard <ArrowUpRight size={17} /></Link></section>
    <section className="purpose-strip"><p>EVERY RECORD STATES ITS SOURCE, CONTEXT, AND THE WORK THAT MOVED IT FORWARD.</p></section>

    <section className="story-index" id="new-work-records">
      <div className="story-index-heading"><p className="ink-label">THE COMPLETE RECORDS / 32 TOTAL</p><h2>Start with the pressure.<br />Then choose the source.</h2><p>The original collection stays available through its existing case-study routes. The curated records keep their native Premium Work detail journeys. New Work is the single index; it does not rewrite either record family.</p></div>
      <div className="story-controls"><div role="tablist" aria-label="Filter New Work records">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><span>{visible.length.toString().padStart(2, "0")} RECORDS / {filter.toUpperCase()}</span></div>
      <div className="story-cards">{visible.map((project, index) => <Link href={project.href} className={`story-card ${project.style}`} style={{ "--client-accent": project.accent } as React.CSSProperties} key={project.key}><figure>{project.image ? <img src={project.image} alt={`${project.title}: ${project.evidence}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" /> : <div className="client-launch-card-art" role="img" aria-label={`${project.title}: record image unavailable`}><span>OARC</span><b>RECORD<br />IN<br />PROGRESS</b></div>}<figcaption><b>{project.number}</b><span>{project.category}</span></figcaption></figure><div className="story-card-copy"><span>{project.tag}</span><h3>{project.title}</h3><p>{project.line}</p><div><b>{project.number}</b><em>{project.evidence}</em><ArrowUpRight size={19} /></div></div></Link>)}</div>
    </section>

    <section className="standard-section" id="new-work-standard"><div className="standard-stamp"><span>OARC</span><b>NEW<br />WORK</b></div><div><p className="ink-label">THE NON-NEGOTIABLE</p><h2>One page.<br />Different proof.</h2><p>New Work makes the full collection easier to inspect without flattening the difference between original OARC work and named client records. Each click takes a visitor to the appropriate source-bound detail route.</p></div><ol><li><b>01</b> The 21 original records remain linked to their established OARC case routes.</li><li><b>02</b> The 11 curated records retain their Premium Work journeys and evidence rails.</li><li><b>03</b> Client, event, regulatory, launch, and original boundaries remain explicit.</li></ol></section>
    <section className="archive-section" id="new-work-contact"><div><p className="ink-label">THE NEXT RECORD</p><h2>Bring the real<br /><i>pressure.</i></h2><p>New Work is an index, not a claim wall. If the right record is not here yet, start with the business pressure and let the evidence determine the next step.</p></div><a href="/contact" className="archive-contact" id="new-work-contact-link">Start a conversation <ArrowUpRight size={19} /></a></section>
  </main>;
}
