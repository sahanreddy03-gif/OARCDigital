"use client";
import Link from "next/link";
import { useState } from "react";
import { tomBriefPages } from "./tom-v2-data";

const proof = [
  ["Mediterranean Retail Chain", "+48%", "documented ROI increase", "/case-studies"],
  ["Premium Dental Studio", "-67%", "documented no-show reduction", "/case-studies"],
  ["Boutique Café Brand", "+40%", "documented repeat-customer rate", "/case-studies"],
  ["EU Tech Startup", "-35%", "documented sales-cycle reduction", "/case-studies"],
];
const faqs = [
  ["What is a Voice AI Worker?", "A managed operating layer that receives requests, follows your rules, takes permitted actions inside your systems, and returns a visible result."],
  ["Is it just a chatbot?", "No. Voice is one interface. The value is the execution behind it: booking, updating, qualifying, routing, following up, and proving what happened."],
  ["What happens when it cannot decide?", "It stops, explains what is missing, and hands the full context to a person you choose. Human control is part of the system."],
  ["What happens to our data?", "Your records, systems, and knowledge remain yours. We design the permissions, retention, and handoffs around your operating reality."],
];
const media = [
  ["The request", "/attached_assets/premium-work/pjazza-property_4f730440.jpg", "A customer asks. The system captures intent, context, and urgency."],
  ["The decision", "/attached_assets/premium-work/oarc-confidential-data-lineage_2e1a3236.jpg", "Approved rules and connected systems turn the request into a permitted action."],
  ["The result", "/attached_assets/premium-work/h360-service-blueprint_49d8f69c.jpg", "The record changes, the next person knows, and the work keeps moving."],
];

export default function VoiceAIExperience() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="va-page">
    <section className="va-hero">
      <div className="va-navline"><span>OARC DIGITAL / VOICE AI WORKER</span><span>SCROLL TO SEE THE WORK MOVE ↓</span></div>
      <div className="va-hero-grid va-wrap">
        <div className="va-hero-copy"><p className="va-overline">THE OPERATING LAYER FOR CONVERSATIONS</p><h1>Calls become<br/><i>completed work.</i></h1><p className="va-hero-lede">A managed Voice AI Worker that answers, understands, acts inside your systems, and hands off the decisions that need a person.</p><div className="va-hero-actions"><Link href="#industries" className="va-button va-button-dark">Choose your industry <span>↓</span></Link><Link href="/voice-ai-worker/start" className="va-button va-button-line">Get a workflow map <span>↗</span></Link></div></div>
        <div className="va-hero-art va-hero-film" aria-label="Animated Voice AI Worker workflow"><video autoPlay muted loop playsInline controls poster="/hero-cinematic.jpg"><source src="/media/voice-ai-worker-product-film.mp4" type="video/mp4"/></video><div className="va-film-overlay"><span>VOICE → KNOWLEDGE → SYSTEMS → ACTION → PROOF</span><b>PLAYING / LOOP</b></div></div>
      </div>
      <div className="va-hero-foot va-wrap"><span>ONE WORKER / TEN INDUSTRIES</span><span>VOICE · WHATSAPP · FORMS · EMAIL</span></div>
    </section>

    <section className="va-intro va-wrap"><p className="va-overline">THE SIMPLE VERSION</p><h2>Your customers speak.<br/><i>Your business moves.</i></h2><div className="va-intro-grid"><p>Voice is only the front door. Behind it, the worker follows approved rules, updates the right systems, keeps the unfinished work moving, and gives your team a clean brief instead of another inbox.</p><div className="va-stat-stack"><span>01 / RECEIVE</span><span>02 / EXECUTE</span><span>03 / PROVE</span></div></div></section>

    <section className="va-film"><div className="va-film-top va-wrap"><p className="va-overline">A REQUEST IN MOTION</p><p>Not a decorative animation. A visual model of what changes when the work is connected.</p></div><div className="va-film-visual"><video autoPlay muted loop playsInline poster="/hero-cinematic.jpg"><source src="/media/hero/hero-customers-v2.mp4" type="video/mp4"/></video><div className="va-film-caption"><span>01 / REQUEST</span><span>02 / UNDERSTAND</span><span>03 / ACT</span><span>04 / HAND OFF</span></div></div></section>

    <section className="va-steps va-wrap"><div className="va-section-head"><p className="va-overline">THE OPERATING MODEL</p><h2>One request.<br/><i>Four visible moves.</i></h2></div><div className="va-step-grid">{[["01","Receive","Voice, WhatsApp, forms, email, or a staff request enters the system."],["02","Understand","Intent, customer context, rules, permissions, and exceptions become clear."],["03","Execute","The worker books, updates, qualifies, routes, follows up, or records the action."],["04","Prove","The record changes. The next person gets the context. Nothing disappears." ]].map(([n,t,b])=><article className="va-step" key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="va-industries" id="industries"><div className="va-wrap"><div className="va-section-head"><p className="va-overline">THE TEN CONFIGURATIONS</p><h2>Choose the work<br/><i>you want moved.</i></h2><p className="va-section-lede">Same operating layer. Different vocabulary, systems, permissions, and priorities for the way your industry actually works.</p></div><div className="va-industry-rail">{tomBriefPages.map((item, i)=><Link href={`/voice-ai-worker/${item.slug}`} className="va-industry-card" key={item.slug}><span className="va-card-no">0{ i + 1 }</span><div><h3>{item.name}</h3><p>{item.metaDescription}</p><b>Explore configuration ↗</b></div></Link>)}</div><p className="va-swipe-note">SWIPE OR DRAG TO EXPLORE ALL TEN →</p></div></section>

    <section className="va-gallery va-wrap"><div className="va-section-head"><p className="va-overline">THE WORK, IN FRAME</p><h2>Show the change.<br/><i>Do not explain it twice.</i></h2></div><div className="va-media-grid">{media.map(([title,image,copy],i)=><article className={`va-media-card va-media-${i+1}`} key={title}><img src={image} alt=""/><div><span>0{i+1} / {title.toUpperCase()}</span><p>{copy}</p></div></article>)}</div></section>

    <section className="va-proof"><div className="va-wrap"><div className="va-section-head"><p className="va-overline">DOCUMENTED PROJECT SNAPSHOTS</p><h2>The work already exists.<br/><i>Here is the record.</i></h2><p className="va-section-lede">Existing OARC company-profile records and public project studies. Figures are dated snapshots, not universal guarantees.</p></div><div className="va-proof-grid">{proof.map(([name,value,label,href])=><Link href={href} className="va-proof-card" key={name}><span>READ THE RECORD ↗</span><strong>{value}</strong><h3>{name}</h3><p>{label}</p></Link>)}</div></div></section>

    <section className="va-trust va-wrap"><div className="va-section-head"><p className="va-overline">CONTROL, NOT MAGIC</p><h2>Useful because<br/><i>the limits are clear.</i></h2></div><div className="va-trust-grid">{[["Approved actions","The worker only acts inside the permissions and systems you approve."],["Human escalation","When the decision is yours, the worker stops and gives you the full context."],["Visible evidence","Every completed action leaves a record your team can understand."],["Built around you","We map, build, monitor, and improve the operating layer with your team."]].map(([t,b])=><article key={t}><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="va-faq va-wrap"><div className="va-section-head"><p className="va-overline">PLAIN ANSWERS</p><h2>Ask the hard ones.</h2></div><div className="va-faq-list">{faqs.map(([q,a],i)=><div className={`va-faq-item ${openFaq===i?'is-open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?'−':'+'}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="va-end"><div className="va-wrap"><p className="va-overline">START WITH ONE IMPORTANT JOB</p><h2>Get the workflow<br/><i>out of your head.</i></h2><p>Bring one expensive, repetitive, or easily missed workflow. We will map what enters, what the worker can do, what must stay human, and what evidence comes back.</p><Link href="/voice-ai-worker/start" className="va-button va-button-light">Get your workflow map <span>↗</span></Link></div></section>
  </main>;
}
