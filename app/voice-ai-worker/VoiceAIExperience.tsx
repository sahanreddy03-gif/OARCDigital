"use client";
import Link from "next/link";
import { useState } from "react";
import { voiceAIWorkerPages } from "./voice-ai-worker-data";

const jobs = [
  ["CUSTOMER SUPPORT", "Answers the question, resolves the issue, and escalates with context."],
  ["SALES", "Qualifies the opportunity, sends the next step, and follows up."],
  ["BOOKINGS", "Finds availability, confirms the appointment, and updates the calendar."],
  ["RECEPTION", "Welcomes callers, routes requests, and keeps the front door open."],
  ["OPERATIONS", "Updates records, chases missing information, and reports what changed."],
];
const proof = [
  ["Mediterranean Retail Chain", "+48%", "documented ROI increase", "/case-studies"],
  ["Premium Dental Studio", "-67%", "documented no-show reduction", "/case-studies"],
  ["Boutique Café Brand", "+40%", "documented repeat-customer rate", "/case-studies"],
  ["EU Tech Startup", "-35%", "documented sales-cycle reduction", "/case-studies"],
];
const faqs = [
  ["Can AI answer my business phone in Malta after hours?", "Yes. OARC's Voice AI Worker answers Malta business calls after hours, follows your rules, and books or routes work so you miss fewer revenue calls."],
  ["Does the voice agent book appointments into my calendar?", "When scoped, yes—it books into your calendar or CRM and hands off exceptions that need a human decision."],
  ["How is a Voice AI Worker different from a basic IVR menu?", "IVR is button trees. A Voice AI Worker understands speech, completes tasks in your systems, and escalates judgment calls to people."],
  ["Is voice AI suitable for restaurants in Malta?", "Yes. Restaurants use voice for bookings and FAQs; see also H360 hospitality phone AI for venue-specific packaging."],
  ["Is Voice AI Worker only for restaurants?", "No. Hospitality is a strong fit, and the same worker covers clinics, sales teams, home services, logistics, and other Malta operators who lose calls."],
  ["How does Voice AI Worker relate to AI agents and creative?", "Voice covers the phone. Chat and CRM agents live on /ai-agents. Creative on /creative creates demand those agents catch. One Birkirkara team owns the stack."],
  ["Who builds Voice AI Worker?", "OARC Digital in Birkirkara—the same marketing and AI studio behind creative, AI agents, H360, and automation. Phone +356 7971 1799."],
];

export default function VoiceAIExperience() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="va-page">
    <section className="va-hero va-hero-blue">
      <div className="va-navline"><span>OARC DIGITAL / VOICE AI WORKER</span><span>THE OPERATING LAYER FOR CUSTOMER WORK</span></div>
      <div className="va-hero-grid va-wrap">
        <div className="va-hero-copy"><p className="va-overline">NOT A RECEPTIONIST. A BUSINESS WORKER.</p><h1>Every request.<br/><i>Moved forward.</i></h1><p className="va-hero-lede">A managed Voice AI Worker that supports customers, creates sales opportunities, books work, routes people, and keeps your systems up to date.</p><div className="va-hero-actions"><Link href="#jobs" className="va-button va-button-light">See what it handles <span>↓</span></Link><Link href="/voice-ai-worker/start" className="va-button va-button-blue-line">Map one workflow <span>↗</span></Link></div></div>
        <div className="va-product-console" aria-label="Voice AI Worker product workflow">
          <div className="va-console-top"><span>VOICE AI WORKER / LIVE</span><b>CONNECTED</b></div>
          <div className="va-console-request"><small>INCOMING REQUEST</small><strong>“Can you help me book, buy, fix, or find something?”</strong><span>VOICE · WHATSAPP · FORMS · EMAIL</span></div>
          <div className="va-console-flow"><div><b>01</b><strong>UNDERSTAND</strong><small>Intent, context, rules</small></div><i>→</i><div><b>02</b><strong>DO THE WORK</strong><small>CRM · calendar · inbox</small></div><i>→</i><div><b>03</b><strong>RETURN PROOF</strong><small>Record · handoff · next step</small></div></div>
          <div className="va-console-result"><span>OUTCOME</span><strong>Request completed. Team briefed. Nothing lost.</strong><em>HUMAN CONTROL ALWAYS AVAILABLE</em></div>
        </div>
      </div>
      <div className="va-hero-foot va-wrap"><span>ONE WORKER / MANY BUSINESS JOBS</span><span>SUPPORT · SALES · BOOKINGS · OPERATIONS</span></div>
    </section>

    <section className="va-intro va-wrap"><p className="va-overline">THE SIMPLE VERSION</p><h2>Voice is the front door.<br/><i>Execution is the product.</i></h2><div className="va-intro-grid"><p>Your customers ask for something. The worker understands the request, follows your approved rules, acts inside the right systems, and gives your team a clean result.</p><div className="va-stat-stack"><span>01 / UNDERSTAND THE REQUEST</span><span>02 / COMPLETE THE WORK</span><span>03 / SHOW WHAT CHANGED</span></div></div></section>

    <section className="va-jobs" id="jobs"><div className="va-wrap"><div className="va-section-head"><p className="va-overline">WHAT IT CAN BE</p><h2>One worker.<br/><i>Many jobs.</i></h2><p className="va-section-lede">The role changes with your business. The operating layer stays consistent.</p></div><div className="va-job-grid">{jobs.map(([title,copy], i)=><article key={title} className={i===0?"va-job-card va-job-featured":"va-job-card"}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p><b>VOICE AI WORKER ↗</b></article>)}</div></div></section>

    <section className="va-model va-wrap"><div className="va-section-head"><p className="va-overline">THE OPERATING MODEL</p><h2>From request<br/><i>to result.</i></h2></div><div className="va-step-grid">{[["01","RECEIVE","Voice, WhatsApp, forms, email, or a staff request enters."],["02","REASON","Domain knowledge, permissions, context, and exceptions become clear."],["03","EXECUTE","The worker books, updates, qualifies, routes, follows up, or records."],["04","PROVE","The record changes. The next person gets the context. Nothing disappears."]].map(([n,t,b])=><article className="va-step" key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="va-industries" id="industries"><div className="va-wrap"><div className="va-section-head"><p className="va-overline">TEN CONFIGURATIONS</p><h2>Built for the way<br/><i>your industry works.</i></h2><p className="va-section-lede">Different vocabulary, systems, permissions, and priorities. One clear operating layer.</p></div><div className="va-industry-rail">{voiceAIWorkerPages.map((item, i)=><Link href={`/voice-ai-worker/${item.slug}`} className="va-industry-card" key={item.slug}><span className="va-card-no">{String(i+1).padStart(2,"0")}</span><div><h3>{item.name}</h3><p>{item.metaDescription}</p><b>Explore configuration ↗</b></div></Link>)}</div><p className="va-swipe-note">SWIPE OR DRAG TO EXPLORE ALL TEN →</p></div></section>

    <section className="va-proof"><div className="va-wrap"><div className="va-section-head"><p className="va-overline">DOCUMENTED PROJECT SNAPSHOTS</p><h2>Proof over promises.</h2><p className="va-section-lede">Existing OARC records and public project studies. Figures are dated snapshots, not universal guarantees.</p></div><div className="va-proof-grid">{proof.map(([name,value,label,href])=><Link href={href} className="va-proof-card" key={name}><span>READ THE RECORD ↗</span><strong>{value}</strong><h3>{name}</h3><p>{label}</p></Link>)}</div></div></section>

    <section className="va-trust va-wrap"><div className="va-section-head"><p className="va-overline">CONTROL, NOT MAGIC</p><h2>Useful because<br/><i>the limits are clear.</i></h2></div><div className="va-trust-grid">{[["Approved actions","The worker only acts inside the permissions and systems you approve."],["Human escalation","When the decision is yours, the worker stops and gives the full context."],["Visible evidence","Every completed action leaves a record your team can understand."],["Built around you","We map, build, monitor, and improve the operating layer with your team."]].map(([t,b])=><article key={t}><h3>{t}</h3><p>{b}</p></article>)}</div></section>

    <section className="va-faq va-wrap"><div className="va-section-head"><p className="va-overline">PLAIN ANSWERS</p><h2>Ask the hard ones.</h2></div><div className="va-faq-list">{faqs.map(([q,a],i)=><div className={`va-faq-item ${openFaq===i?'is-open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?'−':'+'}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="va-end"><div className="va-wrap"><p className="va-overline">START WITH ONE IMPORTANT JOB</p><h2>Give it one workflow.<br/><i>See what moves.</i></h2><p>Bring one expensive, repetitive, or easily missed workflow. We will map what enters, what the worker can do, what must stay human, and what evidence comes back.</p><Link href="/voice-ai-worker/start" className="va-button va-button-light">Map the workflow <span>↗</span></Link></div></section>
  </main>;
}
