import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, CircleAlert, Clock3, GitBranch, ShieldCheck } from "lucide-react";
import { NAP } from "@/lib/seo/nap";
import Footer from "@/components/Footer";
import RevenueAutomationClient from "./RevenueAutomationClient";
import "./styles.css";

const canonical = "https://oarcdigital.com/malta/birkirkara/igaming/revenue-automation";
const whatsapp = `https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent("Hi OARC, I want to review revenue automation for our licensed iGaming team.")}`;

export const metadata: Metadata = {
  title: "iGaming Revenue Automation in Birkirkara | OARC Digital",
  description:
    "A consent-aware revenue-automation operating layer for licensed iGaming teams in Malta: CRM triggers, human approvals, retention workflows and reporting.",
  alternates: { canonical },
  openGraph: {
    title: "Revenue automation with a human approval line",
    description: "Operational CRM journeys for licensed iGaming teams. Clear triggers, explicit consent and accountable review.",
    url: canonical,
    type: "website",
    locale: "en_MT",
    siteName: "OARC Digital",
  },
  twitter: { card: "summary_large_image", title: "iGaming revenue automation | OARC Digital", description: "Consent-aware journeys and human-in-the-loop CRM operations." },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "iGaming revenue automation",
      serviceType: "CRM and revenue automation for licensed iGaming teams",
      provider: { "@type": "Organization", name: "OARC Digital", url: "https://oarcdigital.com" },
      areaServed: { "@type": "Place", name: "Birkirkara, Malta" },
      url: canonical,
      description: metadata.description,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ["What can be automated?", "CRM triggers, audience checks, message sequencing, task creation, suppression rules and reporting handoffs can be automated. Commercial claims, sensitive interventions and exceptions remain subject to your approval policy."],
        ["Does this replace our compliance or responsible-gaming team?", "No. It gives those teams a clearer operating surface. Your licence obligations, policies, risk decisions and final approvals remain with your people."],
        ["How do consent and suppression work?", "Every journey is scoped to the consent, channel, market and player status fields your systems expose. A withdrawal, exclusion or safety flag can stop downstream actions."],
        ["Can we start with one workflow?", "Yes. A contained lifecycle such as onboarding follow-up or dormant-account review is a sensible starting point before connecting additional systems."],
      ].map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ],
};

function Logo() {
  return <Link href="/" className="ra-logo" aria-label="OARC Digital home"><span>OARC</span><small>DIGITAL</small></Link>;
}

export default function RevenueAutomationPage() {
  return (
    <div className="ra-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="ra-nav">
        <Logo />
        <nav aria-label="Primary navigation">
          <Link href="#system">System</Link><Link href="#boundaries">Boundaries</Link><Link href="#process">Process</Link><Link href="#faq">FAQ</Link>
        </nav>
        <div className="ra-nav-actions">
          <Link href="/contact" className="ra-nav-contact">Contact OARC <ArrowUpRight size={15} /></Link>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="ra-nav-wa">WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="ra-hero">
          <div className="ra-hero-grid">
            <div className="ra-hero-copy ra-reveal">
              <p className="ra-kicker"><span className="ra-pulse" /> Birkirkara · licensed iGaming operations</p>
              <h1>Revenue operations,<br /><em>without</em> blind spots.</h1>
              <p className="ra-lede">A controlled automation layer for CRM teams that need journeys to move quickly — and stop exactly where a person, a policy or a player boundary says they should.</p>
              <div className="ra-actions"><Link href="#system" className="ra-button">See the operating model <ArrowUpRight size={17} /></Link><Link href="/contact" className="ra-quiet-link">Talk through your stack <span>→</span></Link></div>
              <p className="ra-note">No performance promises. No autonomous player decisions. Just visible operating rules.</p>
            </div>
            <div className="ra-control-room ra-reveal" aria-label="Illustration of an automated CRM control room">
              <div className="ra-room-top"><span>OARC / OPS VIEW</span><span className="ra-live"><i /> LIVE MODEL</span></div>
              <div className="ra-room-body">
                <div className="ra-room-sidebar"><span className="active">OVERVIEW</span><span>JOURNEYS</span><span>CONSENT</span><span>REPORTS</span></div>
                <div className="ra-room-main">
                  <div className="ra-room-title"><span>Lifecycle control</span><b>Today / 09:42</b></div>
                  <div className="ra-signal"><div><small>TRIGGER QUEUE</small><strong>12</strong></div><div><small>AWAITING REVIEW</small><strong className="lime">03</strong></div></div>
                  <div className="ra-mini-flow"><span>CRM EVENT</span><b>→</b><span>POLICY CHECK</span><b>→</b><span className="limebox">HUMAN GATE</span></div>
                  <div className="ra-feed"><p><i className="dot green" /> Consent refreshed <time>09:41</time></p><p><i className="dot amber" /> Journey paused for review <time>09:38</time></p><p><i className="dot grey" /> Report handoff complete <time>09:21</time></p></div>
                </div>
              </div>
              <div className="ra-room-footer">AUTOMATION IS ONLY AS SAFE AS ITS EXIT CONDITIONS</div>
            </div>
          </div>
          <div className="ra-scroll">SCROLL TO MAP THE SYSTEM <span>↓</span></div>
        </section>

        <section className="ra-strip" aria-label="Operating principles">
          <div>CONSENT FIRST</div><span>+</span><div>HUMAN APPROVALS</div><span>+</span><div>AUDITABLE HANDOFFS</div><span>+</span><div>RESPONSIBLE BOUNDARIES</div>
        </section>

        <section id="system" className="ra-section ra-system">
          <div className="ra-section-head"><p className="ra-kicker ra-dark">01 / the system</p><h2>Turn scattered<br /><em>signals</em> into a<br />reviewable route.</h2></div>
          <div className="ra-system-intro"><p>Revenue automation is not a send button. It is the connective tissue between your CRM, consent records, campaign tooling and the operators accountable for each decision.</p><p className="ra-muted">We map what should happen, what must never happen, and what needs a named person before a journey continues.</p></div>
          <div className="ra-workflow" role="img" aria-label="Workflow diagram: event, eligibility, policy check, approval, action, reporting">
            {[
              ["01", "CRM event", "A deposit, login, support case, preference or lifecycle state changes."],
              ["02", "Eligibility", "Market, product, channel, consent and exclusion fields are checked."],
              ["03", "Policy check", "Frequency, wording, timing and responsible-gaming rules are applied."],
              ["04", "Human gate", "A designated operator reviews exceptions and sensitive actions."],
              ["05", "Action", "The approved message, task or suppression is sent to the right system."],
              ["06", "Report", "The decision trail and outcome are written back for review."]
            ].map(([num, title, desc], i) => <div className="ra-flow-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div>{i < 5 && <b aria-hidden="true">→</b>}</div>)}
          </div>
        </section>

        <section id="boundaries" className="ra-section ra-boundaries">
          <div className="ra-boundary-copy"><p className="ra-kicker">02 / the line</p><h2>Automation has a<br /><em>stop condition.</em></h2><p>For a licensed operator, control is part of the product. The system should make boundaries visible to CRM, compliance and customer teams — not hide them behind a green status.</p></div>
          <div className="ra-boundary-table">
            <div className="ra-table-head"><span>Automated by rule</span><span>Owned by a human</span></div>
            <div className="ra-table-row"><Check /><p>Consent and channel eligibility checks</p><ShieldCheck /><p>Policy interpretation and licence decisions</p></div>
            <div className="ra-table-row"><Check /><p>Suppression, frequency and timing rules</p><ShieldCheck /><p>Responsible-gaming interventions</p></div>
            <div className="ra-table-row"><Check /><p>Task routing and report preparation</p><ShieldCheck /><p>Exceptions, escalations and final approval</p></div>
            <div className="ra-table-foot"><CircleAlert size={17} /><p>Automation can surface a decision. It does not make a judgement about a player’s wellbeing.</p></div>
          </div>
        </section>

        <section className="ra-section ra-capabilities">
          <p className="ra-kicker ra-dark">03 / operational modules</p><h2>Built around the work<br />your team already <em>owns.</em></h2>
          <div className="ra-module-grid">
            {[
              ["CRM triggers", "Listen for lifecycle and account events, then route a defined next step without losing the source context.", GitBranch],
              ["Consent-aware journeys", "Keep channel permission, market scope, suppression and preference changes in the path — not in a spreadsheet beside it.", ShieldCheck],
              ["Approval queues", "Give a person the right context, reason and action before a sensitive message or exception proceeds.", CircleAlert],
              ["Retention workflows", "Coordinate win-back, service follow-up and inactivity reviews with clear exit rules and no pressure language.", Clock3],
            ].map(([title, text, Icon]) => <article key={title as string} className="ra-module"><Icon size={23} /><h3>{title as string}</h3><p>{text as string}</p><a href="#process">Map this module <ArrowUpRight size={14} /></a></article>)}
          </div>
        </section>

        <section id="process" className="ra-section ra-process">
          <div className="ra-process-lead"><p className="ra-kicker">04 / implementation</p><h2>Start with one<br /><em>journey.</em></h2><p>Good automation is introduced in slices. We make the first workflow legible enough for operations, CRM and compliance to challenge before it touches a second channel.</p></div>
          <ol className="ra-process-list">
            <li><b>01</b><div><h3>Map the source of truth</h3><p>We document systems, fields, permissions, owners and the events that genuinely matter.</p></div></li>
            <li><b>02</b><div><h3>Write the policy path</h3><p>Every branch gets an eligibility rule, an exit condition and an accountable owner.</p></div></li>
            <li><b>03</b><div><h3>Test with held-out cases</h3><p>Edge cases are reviewed before launch: missing consent, conflicting statuses, quiet hours and escalation scenarios.</p></div></li>
            <li><b>04</b><div><h3>Operate and report</h3><p>Teams receive a usable queue, decision trail and reporting view — then refine the workflow with evidence.</p></div></li>
          </ol>
        </section>

        <section className="ra-section ra-reporting"><div><p className="ra-kicker ra-dark">05 / reporting</p><h2>Make the invisible<br /><em>reviewable.</em></h2></div><div className="ra-report-card"><div className="ra-report-bar"><span>JOURNEY / DORMANT REVIEW</span><span>WEEKLY OPERATING VIEW</span></div><div className="ra-report-grid"><div><small>RUNS WITHIN POLICY</small><strong>—</strong><p>Report from your agreed definitions, not a promise.</p></div><div><small>MANUAL DECISIONS</small><strong>—</strong><p>See where people are needed and why.</p></div><div><small>SUPPRESSIONS</small><strong>—</strong><p>Keep exits visible to the next reviewer.</p></div></div><div className="ra-report-note">Illustrative reporting structure. Your data, definitions and governance remain yours.</div></div></section>

        <section id="faq" className="ra-section ra-faq"><div className="ra-faq-heading"><p className="ra-kicker">06 / questions</p><h2>Before you<br /><em>connect.</em></h2><p>Clear answers for teams responsible for both customer experience and control.</p></div><RevenueAutomationClient /></section>

        <section className="ra-cta"><p className="ra-kicker">OARC DIGITAL / MALTA</p><h2>Bring us the<br /><em>messy middle.</em></h2><p>We will help you separate automation, approval and accountability — one workflow at a time.</p><div className="ra-actions"><Link href="/contact" className="ra-button ra-button-dark">Contact OARC <ArrowUpRight size={17} /></Link><a href={whatsapp} target="_blank" rel="noreferrer" className="ra-quiet-link ra-cta-link">WhatsApp +356 7971 1799 <span>→</span></a></div></section>
      </main>
      <Footer />
    </div>
  );
}