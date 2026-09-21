"use client";

import Link from "next/link";
import { useState } from "react";

const jobs = [
  ["Reception", "Answer calls, understand what the caller needs, and route the next step."],
  ["Bookings", "Find availability, confirm the details, and update the approved calendar."],
  ["Follow-up", "Capture the request, send a consent-safe WhatsApp next step, and brief your team."],
  ["Operations", "Take bounded actions in the systems your business already uses."],
];
const faqs = [
  ["Can AI answer my business phone in Malta after hours?", "Yes. OARC's Voice AI Worker can answer after-hours calls, follow your approved rules, and route or book work without pretending to be a person."],
  ["Does the voice agent book appointments into my calendar?", "When scoped, it can book into your calendar or booking tools. Exceptions and decisions that need a person are handed over with context."],
  ["What happens when the worker cannot decide?", "It stops at the boundary you define and gives your team the relevant conversation, request, and next action."],
  ["Can callers continue on WhatsApp?", "Yes, where consent and your process allow it. The worker follows a bounded WhatsApp hand-off rather than sending unsolicited messages."],
  ["Who builds Voice AI Worker?", "OARC Digital in Birkirkara, Malta. Call +356 7971 1799 or contact the team to map one workflow."],
];

export default function VoiceAIExperience() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <main className="lighter-page">
      <nav className="lighter-nav" aria-label="Primary navigation">
        <Link className="lighter-logo" href="/" aria-label="OARC Digital home"><img className="logo-mark" src="/favicon.png" alt="" /><strong>OARC</strong><em>DIGITAL</em></Link>
        <div className="lighter-links"><Link href="#about">About</Link><Link href="#service">Services</Link><Link href="#process">Process</Link><Link href="#faq">FAQ</Link></div>
        <Link href="/contact" className="lighter-nav-cta">Contact <span>↗</span></Link>
        <details className="lighter-menu"><summary aria-label="Open menu">MENU</summary><div><Link href="#about">About</Link><Link href="#service">Services</Link><Link href="#process">Process</Link><Link href="/contact">Contact</Link></div></details>
      </nav>

      <section className="lighter-hero">
        <div className="hero-kicker"><span />OARC DIGITAL / VOICE AI WORKER</div>
        <div className="hero-title"><div>AI <span className="hero-chip">voice</span> answers</div><div>for your <i>business</i></div></div>
        <p className="hero-copy">A Malta voice workforce hub for calls that need an answer, a booking, a bounded action, or a clear hand-off to a person.</p>
        <div className="hero-actions"><Link href="/contact" className="pill pill-dark">Map one workflow <span>↗</span></Link><Link href="#service" className="pill">See what it handles <span>↓</span></Link></div>
      </section>

      <section className="lighter-dashboard" aria-label="Voice AI Worker dashboard preview"><img src="/media/exact-smoke/voice/dashboard.avif" alt="Voice AI Worker workflow dashboard" /></section>

      <section className="lighter-section about-section" id="about">
        <div className="eyebrow"><span />ABOUT OARC</div>
        <h2>Voice is the front door.<br /><i>Execution is the product.</i></h2>
        <div className="about-grid"><div><h3>Built for real business work in Malta</h3><p>OARC connects a voice worker to the rules, calendars, inboxes, and business systems your team already relies on. It answers clearly, acts only within scope, and keeps people in control.</p><Link href="/contact" className="text-link">Talk to OARC <span>↗</span></Link></div><img src="/media/exact-smoke/voice/about.avif" alt="Abstract OARC digital workspace" /></div>
      </section>

      <div className="lighter-ticker"><div>VOICE ANSWERS <b>•</b> BOUNDED ACTIONS <b>•</b> HUMAN HAND-OFFS <b>•</b> CONSENT-SAFE WHATSAPP <b>•</b> VOICE ANSWERS <b>•</b></div></div>

      <section className="lighter-impact"><div className="impact-card"><div><div className="eyebrow light"><span />THE WORKER IN PRACTICE</div><h2>From “hello”<br />to <i>next step.</i></h2><p>A caller should not have to repeat themselves. The worker captures intent, follows the approved path, and leaves an understandable record.</p></div><img src="/media/exact-smoke/voice/worker-poster.jpg" alt="Voice AI Worker visual" /></div></section>

      <section className="lighter-section service-section" id="service"><div className="eyebrow"><span />WHAT IT CAN DO</div><h2>One worker.<br /><i>Many jobs.</i></h2><p className="section-lede">The role changes with your business. The operating layer stays consistent.</p><div className="service-grid">{jobs.map(([title, copy], i) => <article key={title} className={i === 0 ? "service-card featured" : "service-card"}><small>0{i + 1}</small><h3>{title}</h3><p>{copy}</p><Link href="/contact">Explore the workflow ↗</Link></article>)}</div></section>

      <section className="lighter-mission"><div className="eyebrow"><span />OUR MISSION</div><h2>Useful AI has<br /><i>clear limits.</i></h2><div className="mission-media"><video autoPlay loop muted playsInline poster="/media/exact-smoke/voice/worker-poster.jpg"><source src="/media/exact-smoke/voice/worker.mp4" type="video/mp4" /></video><div>OARC / VOICE WORKFORCE / MALTA</div></div></section>

      <section className="lighter-section process-section" id="process"><div className="eyebrow"><span />THE PROCESS</div><h2>Make the work<br /><i>visible.</i></h2><div className="process-grid">{[["01", "Listen", "Map what enters, who calls, and what a good outcome looks like."], ["02", "Bound", "Choose approved systems, actions, permissions, and escalation points."], ["03", "Launch", "Put the worker into one important workflow and monitor the hand-offs."], ["04", "Improve", "Use the record of what happened to make the next version better."]].map(([n, t, c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

      <section className="lighter-industries"><div className="eyebrow light"><span />WHERE IT FITS</div><h2>For operators<br /><i>who miss calls.</i></h2><div className="industry-list"><div>Hospitality <span>Bookings, FAQs, hand-offs ↗</span></div><div>Clinics <span>Intake, reminders, routing ↗</span></div><div>Home services <span>Qualification, scheduling, dispatch ↗</span></div><div>Sales teams <span>Lead capture, follow-up, context ↗</span></div></div></section>

      <section className="lighter-section faq-section" id="faq"><div className="eyebrow"><span />PLAIN ANSWERS</div><h2>Ask the<br /><i>hard ones.</i></h2><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{a}</p>}</div>)}</div></section>

      <section className="lighter-cta"><div className="eyebrow"><span />START WITH ONE IMPORTANT JOB</div><h2>Give it one workflow.<br /><i>See what moves.</i></h2><p>Call +356 7971 1799 or bring one workflow to OARC. We will map what the worker can do, what stays human, and what evidence comes back.</p><Link href="/contact" className="pill pill-dark">Contact OARC <span>↗</span></Link></section>
      <footer className="lighter-footer"><Link className="lighter-logo" href="/"><img className="logo-mark" src="/favicon.png" alt="" /><strong>OARC</strong><em>DIGITAL</em></Link><div><Link href="/">Home</Link><Link href="/contact">Contact</Link><a href="https://wa.me/35679711799">WhatsApp +356 7971 1799</a></div></footer>
    </main>
  );
}