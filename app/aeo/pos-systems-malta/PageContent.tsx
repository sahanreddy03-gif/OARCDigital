import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, ExternalLink, Phone, Waypoints } from "lucide-react";
import { NAP } from "@/lib/seo/nap";

type Faq = { question: string; answer: string };

const vendors = [
  ["Square", "Straightforward counter sales, cafes and smaller teams. Check country availability, tax settings and the exact API surface before committing."],
  ["SumUp", "Useful for mobile and compact operations. Confirm how products, refunds, settlements and webhooks can be exposed to the rest of your stack."],
  ["Zettle", "Often considered by boutique retail and pop-up teams. Validate catalogue, stock and reporting needs against the current PayPal/Zettle product."],
  ["Lightspeed", "A candidate for richer restaurant or multi-site workflows. Menu, location, inventory and permission modelling deserve a proper technical review."],
  ["Toast", "A restaurant-focused system worth assessing where its regional availability and integrations fit. Treat every connector as a discovery question."],
  ["Celery POS", "A Malta-relevant name to investigate for independent hospitality. Ask for export formats, API access and support boundaries in writing."],
];

const faqs: Faq[] = [
  { question: "What should a Malta business compare when choosing a POS?", answer: "Start with the operation, not the logo: service style, number of outlets, offline behaviour, payments, fiscal and tax requirements, menu complexity, stock, permissions and what must reach accounting or reporting. Then verify that the candidate works in Malta and that its current API, exports or partner connectors cover the fields you actually need." },
  { question: "Can a POS connect to a digital menu or online ordering system?", answer: "Often, but the path varies. A connector may use an API, webhooks, scheduled exports or a supported marketplace integration. Before promising a live sync, map menu ownership, modifiers, allergens, taxes, order status, refunds and stock rules, then test them in a sandbox or controlled outlet." },
  { question: "Do you officially partner with Square, SumUp, Lightspeed, Toast or Celery?", answer: "No official partnership is implied by this guide. OARC Digital can help with technical discovery and integration planning around named systems, subject to the vendor's current documentation, account permissions, region and commercial terms. Compatibility is confirmed per project, not assumed from a brand name." },
  { question: "Can a restaurant connect its POS to a hotel PMS?", answer: "Possibly. The important questions are which outlets post charges, how a folio is identified, what happens offline, how voids and refunds reconcile, and who owns the source of truth. A PMS connector should be scoped with the hotel, POS and PMS documentation together." },
  { question: "What does an integration discovery include?", answer: "A useful discovery inventories devices and outlets, traces an order from menu to close, lists required fields and failure states, checks credentials and rate limits, and produces a small integration brief: systems, direction of data flow, sync timing, ownership, monitoring and a test plan." },
];

function FlowDiagram() {
  return (
    <div className="pos-flow" aria-label="POS integration data flow diagram">
      <div className="pos-node pos-node-accent"><span>01</span><strong>Service layer</strong><small>counter · table · QR</small></div>
      <div className="pos-line" aria-hidden="true"><span>order</span></div>
      <div className="pos-node"><span>02</span><strong>POS</strong><small>sale · tax · payment</small></div>
      <div className="pos-line" aria-hidden="true"><span>event / export</span></div>
      <div className="pos-node"><span>03</span><strong>Operations</strong><small>stock · PMS · reporting</small></div>
    </div>
  );
}

export default function POSSystemsMalta({ faqs: providedFaqs }: { faqs: Faq[] }) {
  const displayFaqs = providedFaqs.length ? providedFaqs : faqs;
  return (
    <Layout>
      <main className="pos-page">
        <header className="pos-header">
          <Link href="/" className="pos-logo" aria-label="OARC Digital home"><span>OARC</span><small>DIGITAL</small></Link>
          <nav aria-label="Primary navigation">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" className="pos-nav-cta">Talk through your stack <ArrowUpRight size={15} /></Link>
          </nav>
        </header>

        <section className="pos-hero">
          <div className="pos-hero-copy">
            <p className="pos-kicker"><span /> FIELD GUIDE / MALTA / 2026</p>
            <h1>POS systems<br /><em>that talk back.</em></h1>
            <p className="pos-lede">A practical guide to choosing and connecting point-of-sale systems for Malta&apos;s restaurants, bars, retail counters and hospitality teams.</p>
            <div className="pos-actions">
              <Link href="#compare" className="pos-button">Compare the fit <ArrowUpRight size={16} /></Link>
              <a href={`tel:${NAP.phoneE164}`} className="pos-inline-link"><Phone size={15} /> {NAP.phoneDisplay}</a>
            </div>
            <p className="pos-disclaimer">No vendor ranking. No assumed compatibility. Technical discovery comes first.</p>
          </div>
          <div className="pos-hero-visual" aria-label="Illustration of a connected point of sale system">
            <div className="pos-orbit pos-orbit-one" /><div className="pos-orbit pos-orbit-two" />
            <div className="pos-terminal"><div className="pos-terminal-top"><span>VENUE / MT</span><b>● LIVE</b></div><strong>€ 248.60</strong><div className="pos-terminal-row"><span>4 × table service</span><span>18:42</span></div><div className="pos-terminal-bar" /></div>
            <div className="pos-float pos-float-a"><span>ORDER</span><b>webhook</b></div>
            <div className="pos-float pos-float-b"><span>REPORT</span><b>daily close</b></div>
          </div>
        </section>

        <div className="pos-marquee" aria-hidden="true"><span>CHOOSE WITH CONTEXT</span><b>×</b><span>CONNECT WITH EVIDENCE</span><b>×</b><span>OPERATE WITH CLARITY</span></div>

        <section className="pos-intro pos-section">
          <div><p className="pos-kicker pos-kicker-dark"><span /> THE SHORT VERSION</p><h2>The till is not<br /><em>the whole venue.</em></h2></div>
          <div className="pos-copy"><p>A POS is where a transaction is recorded. Your operation is bigger: menus change, tables move, stock arrives, guests book, rooms are charged and someone still has to close the day.</p><p>The right system is the one that fits those hand-offs. A familiar name can be a poor fit; a less obvious option can work well when its data model, regional coverage and support model line up with the way your team actually trades.</p><p className="pos-note">For Malta operators, check payment acquiring, VAT and receipt behaviour, data residency, offline mode and local support as part of the same decision.</p></div>
        </section>

        <section className="pos-diagram-section pos-section">
          <div className="pos-section-heading"><p className="pos-kicker pos-kicker-dark"><span /> THE INTEGRATION LAYER</p><h2>Make the hand-offs<br /><em>visible.</em></h2><p>Good integration is not a magic button. It is a defined path for a defined piece of data, with a human owner when something fails.</p></div>
          <FlowDiagram />
          <div className="pos-callout"><Waypoints size={19} /><span>Ask: which system owns the menu, the price, the payment and the final report?</span></div>
        </section>

        <section id="compare" className="pos-compare pos-section">
          <div className="pos-section-heading wide"><p className="pos-kicker"><span /> NAMED SYSTEMS / STARTING POINTS</p><h2>Compare the <em>shape</em><br />of the work.</h2><p>These are useful names to put on a discovery shortlist, not endorsements or a compatibility promise.</p></div>
          <div className="pos-vendor-grid">{vendors.map(([name, detail], index) => <article className="pos-vendor" key={name}><span className="pos-index">0{index + 1}</span><h3>{name}</h3><p>{detail}</p><a href="#discovery">Questions to ask <ArrowUpRight size={14} /></a></article>)}</div>
        </section>

        <section className="pos-fit pos-section">
          <div className="pos-section-heading"><p className="pos-kicker pos-kicker-dark"><span /> OPERATIONAL FIT</p><h2>Choose for a Tuesday<br /><em>night, not a demo.</em></h2></div>
          <div className="pos-fit-list">
            {[
              ["Restaurant", "Modifiers, coursing, kitchen routing, split bills, table status and a close the manager can trust."],
              ["Bar & beach club", "Fast service, tabs, mobile devices, network resilience and a clean handover between shifts."],
              ["Retail", "Catalogue, variants, stock movements, returns, staff permissions and channels beyond the counter."],
              ["Hotel & multi-outlet", "Outlet separation, room-charge posting, PMS identity, shared reporting and deliberate reconciliation."],
            ].map(([title, text]) => <div className="pos-fit-row" key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </section>

        <section id="discovery" className="pos-discovery pos-section">
          <div className="pos-section-heading wide"><p className="pos-kicker"><span /> BEFORE ANY BUILD</p><h2>A discovery brief<br /><em>beats a guess.</em></h2></div>
          <div className="pos-steps">{["Trace one order", "Name every owner", "Test the edges", "Plan the close"].map((title, i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{["From menu or counter to payment, kitchen, refund and daily report.", "Decide where products, prices, tax, stock and guest identity are authoritative.", "Try outages, duplicates, voids, partial refunds, modifiers and late webhooks.", "Define reconciliation, alerts, audit history and who responds when data disagrees."][i]}</p></article>)}</div>
        </section>

        <section className="pos-faq pos-section" id="faq">
          <div className="pos-section-heading"><p className="pos-kicker"><span /> QUESTIONS WE HEAR</p><h2>Plain answers.<br /><em>Useful caveats.</em></h2></div>
          <div className="pos-faq-list">{displayFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="pos-cta pos-section">
          <p className="pos-kicker pos-kicker-dark"><span /> OARC DIGITAL / MALTA</p><h2>Bring the actual<br /><em>stack.</em></h2><p>Tell us what runs the counter, what still lives in a spreadsheet and what your team re-enters by hand. We will help turn that into a scoped technical conversation.</p>
          <div className="pos-actions"><Link href="/contact" className="pos-button">Start a discovery <ArrowUpRight size={16} /></Link><a className="pos-inline-link" href={`https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent("Hi OARC Digital, I would like to discuss a POS and integration setup in Malta.")}`} target="_blank" rel="noreferrer">WhatsApp {NAP.phoneDisplay} <ExternalLink size={14} /></a></div>
        </section>
        <footer className="pos-footer"><Link href="/">OARC Digital</Link><span>Malta POS systems & integrations guide</span><Link href="/contact">Contact</Link></footer>
      </main>
    </Layout>
  );
}