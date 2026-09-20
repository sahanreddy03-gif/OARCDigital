"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Phone, Plus, Minus } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const whatsapp = "https://wa.me/35679711799?text=Hello%20OARC%2C%20I%27d%20like%20to%20discuss%20voice%20AI%20for%20hospitality.";

const faqs = [
  ["Will guests know they are speaking with AI?", "The experience should be honest. Your greeting and operating rules can identify the receptionist as an AI assistant, while keeping the language warm, clear and specific to your property."],
  ["Can it take reservations?", "It can collect the details your team defines, answer availability questions from connected information where supported, and pass the request to the right system or person. We agree the boundaries before launch."],
  ["What happens when a call needs a person?", "Human handoff is part of the design. The caller can be transferred during agreed hours, or the assistant can capture a message and route it to your team."],
  ["Can it answer property-specific questions?", "Yes. We shape its knowledge around approved information such as opening times, directions, amenities, policies and the questions your front desk hears most often."],
  ["Does this replace our reception team?", "No. It handles defined, repetitive call moments so your people can stay present for guests, service recovery and the conversations that need judgement."],
];

function VoiceReceptionistDiagram() {
  return (
    <div className="hv-diagram" aria-label="Call flow diagram">
      <div className="hv-diagram-node hv-node-call"><Phone size={18} /><span>Guest calls</span><small>one familiar number</small></div>
      <div className="hv-diagram-line" aria-hidden="true" />
      <div className="hv-diagram-node hv-node-ai"><span className="hv-pulse" />AI receptionist<small>listens, answers, clarifies</small></div>
      <div className="hv-diagram-branches">
        <div className="hv-branch"><b>01</b><strong>Reserve</strong><span>collect details and pass them on</span></div>
        <div className="hv-branch"><b>02</b><strong>Inform</strong><span>answer approved FAQs</span></div>
        <div className="hv-branch"><b>03</b><strong>Escalate</strong><span>transfer or take a message</span></div>
      </div>
    </div>
  );
}

export default function HospitalityExperience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="hv-page">
      <section className="hv-hero" id="top">
        <nav className="hv-nav hv-wrap" aria-label="Main navigation">
          <Link href="/" className="hv-brand" aria-label="OARC Digital home"><span>OARC</span><small>DIGITAL</small></Link>
          <div className="hv-navlinks"><Link href="#how-it-works">How it works</Link><Link href="#questions">Questions</Link><Link href="/contact">Contact</Link></div>
          <a className="hv-nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Talk to OARC <ArrowUpRight size={14} /></a>
        </nav>
        <div className="hv-wrap hv-hero-grid">
          <div className="hv-hero-copy">
            <p className="hv-kicker"><i /> Voice AI / Hospitality / Malta</p>
            <h1>The front desk,<br /><em>always listening.</em></h1>
            <p className="hv-lede">A voice receptionist for hotels, restaurants and hospitality teams. It handles the call, keeps the context, and knows when a human should take over.</p>
            <div className="hv-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="hv-button hv-button-dark">Discuss your call flow <ArrowUpRight size={16} /></a><a href="#how-it-works" className="hv-text-link">See the system <ArrowDownRight size={16} /></a></div>
            <p className="hv-note">Designed in Malta by OARC Digital. Built around your operating rules.</p>
          </div>
          <div className="hv-hero-art" aria-label="Voice receptionist interface preview">
            <div className="hv-orbit hv-orbit-one" /><div className="hv-orbit hv-orbit-two" />
            <div className="hv-call-card"><div className="hv-call-top"><span className="hv-live-dot" />INCOMING CALL <span>00:42</span></div><div className="hv-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><strong>Good afternoon.<br />How can we help?</strong><div className="hv-call-meta"><span>PROPERTY KNOWLEDGE</span><b>READY</b></div></div>
            <div className="hv-art-caption">A considered answer / not a scripted wall</div>
          </div>
        </div>
        <div className="hv-wrap hv-hero-foot"><span>For hotels / restaurants / venues</span><span>Voice operations, made human</span><span>01 — 05</span></div>
      </section>

      <div className="hv-marquee" aria-hidden="true"><span>Reservations</span><b>+</b><span>FAQs</span><b>+</b><span>Transfers</span><b>+</b><span>Human handoff</span><b>+</b><span>Malta hospitality</span></div>

      <section className="hv-intro hv-wrap" id="about">
        <p className="hv-kicker hv-kicker-light"><i /> The premise</p>
        <div className="hv-intro-grid"><h2>More answers.<br /><em>More attention.</em></h2><div><p>Calls arrive while the team is checking guests in, carrying plates or solving the unexpected. A voice worker gives every caller a clear next step without asking your people to be everywhere at once.</p><p className="hv-muted">The goal is not to make hospitality less human. It is to protect the human moments that matter.</p></div></div>
      </section>

      <section className="hv-film"><div className="hv-wrap hv-film-top"><p className="hv-kicker"><i /> A quiet layer of operations</p><p>One voice. A defined scope. A clean route to your team when the conversation deserves one.</p></div><div className="hv-wrap hv-film-visual"><video autoPlay loop muted playsInline poster="/media/stage0/hospitality-voice/light-poster.jpg" aria-label="Abstract operations loop"><source src="/media/stage0/hospitality-voice/light-loop.mp4" type="video/mp4" /></video><div className="hv-film-caption"><span>LISTEN / UNDERSTAND / ROUTE</span><span>OARC VOICE WORKER 01</span></div></div></section>

      <section className="hv-operations hv-wrap" id="how-it-works"><div className="hv-section-head"><p className="hv-kicker hv-kicker-light"><i /> What it does</p><h2>A call flow with<br /><em>good manners.</em></h2><p className="hv-section-lede">The useful part is not the novelty of a voice. It is the care taken to define what it can say, what it can do and where it should stop.</p></div><VoiceReceptionistDiagram /></section>

      <section className="hv-capabilities"><div className="hv-wrap"><div className="hv-cap-head"><p className="hv-kicker"><i /> The service surface</p><h2>Every answer<br /><em>has a place.</em></h2></div><div className="hv-cap-grid">{[["01","Reservations","Capture dates, party size, preferences and contact details in the order your team needs them."],["02","Property FAQs","Give consistent answers about opening hours, directions, amenities, policies and what is currently approved."],["03","Transfers","Route calls to a department or colleague when a live conversation is the right next step."],["04","Messages","When no one can answer, take the important details and send a useful message rather than a dead end."]].map(([n,t,d])=><article key={n} className="hv-cap-card"><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={18} /></article>)}</div></div></section>

      <section className="hv-dashboard hv-wrap"><div className="hv-dashboard-copy"><p className="hv-kicker hv-kicker-light"><i /> Built around your property</p><h2>Not a generic<br /><em>hotel script.</em></h2><p>We map your hours, language, departments, reservation rules and escalation paths before the worker speaks to a guest. The result is a system your team can recognise.</p><a className="hv-text-link" href={whatsapp} target="_blank" rel="noreferrer">Map my call flow <ArrowUpRight size={16} /></a></div><div className="hv-dashboard-screen"><img src="/media/stage0/hospitality-voice/operations-dashboard.avif" alt="Abstract operations dashboard" /><div className="hv-screen-label">OPERATIONS / LIVE VIEW</div></div></section>

      <section className="hv-trust hv-wrap"><p className="hv-kicker hv-kicker-light"><i /> The handover principle</p><div className="hv-trust-grid">{[["Boundaries first","We start with the calls you want covered and the ones you never want automated."],["Approved knowledge","Your team decides the information the worker can use and how it should be phrased."],["Human by design","Transfers, messages and clear escalation are not edge cases. They are part of the service."],["Measured carefully","We review real call patterns and refine the flow with your operators, not guesswork."]].map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="hv-faq hv-wrap" id="questions"><div className="hv-faq-title"><p className="hv-kicker hv-kicker-light"><i /> Questions operators ask</p><h2>Clarity before<br /><em>automation.</em></h2></div><div className="hv-faq-list">{faqs.map(([q,a],i)=><div className={`hv-faq-item ${open===i?"is-open":""}`} key={q}><button onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>{q}</span>{open===i?<Minus size={18}/>:<Plus size={18}/>}</button>{open===i&&<p>{a}</p>}</div>)}</div></section>

      <section className="hv-end"><div className="hv-wrap hv-end-inner"><p className="hv-kicker"><i /> Start with one honest conversation</p><h2>Make every call feel <em>looked after.</em></h2><p>Tell us what happens between the ring and the reservation. We will help you decide where a voice worker fits, and where your people should stay in the room.</p><div className="hv-actions"><a href={whatsapp} target="_blank" rel="noreferrer" className="hv-button hv-button-light"><SiWhatsapp size={16} /> WhatsApp +356 7971 1799</a><a href="/contact" className="hv-text-link hv-text-link-light">Contact OARC <ArrowUpRight size={16} /></a></div></div></section>
      <footer className="hv-footer hv-wrap"><Link href="/" className="hv-brand"><span>OARC</span><small>DIGITAL</small></Link><span>Voice AI for hospitality / Malta</span><div><a href="tel:+35679711799">+356 7971 1799</a><a href="mailto:hello@oarcdigital.com">hello@oarcdigital.com</a></div></footer>
    </main>
  );
}