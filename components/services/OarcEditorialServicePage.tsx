"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, ChevronDown, CircleArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

export type EditorialService = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  accent: string;
  accentSoft: string;
  ownerTitle: string;
  ownerCopy: string;
  customerTitle: string;
  customerCopy: string;
  marquee: string[];
  proof: { label: string; value: string }[];
  capabilities: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  related: { title: string; href: string; copy: string }[];
};

export default function OarcEditorialServicePage({ service }: { service: EditorialService }) {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <Layout navTheme="light">
      <main className="oarc-editorial" style={{ "--service-accent": service.accent, "--service-soft": service.accentSoft } as CSSProperties}>
        <section className="oe-hero">
          <div className="oe-hero-copy">
            <p className="oe-eyebrow"><span /> OARC DIGITAL / {service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="oe-intro" data-speakable>{service.intro}</p>
            <div className="oe-hero-actions">
              <Link href="/contact" className="oe-button">Talk through the work <ArrowUpRight size={17} /></Link>
              <a href="#how-it-works" className="oe-text-link">See what it changes <CircleArrowRight size={18} /></a>
            </div>
            <p className="oe-note">Built around your existing tools, permissions and review process.</p>
          </div>
          <div className="oe-hero-art">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 48vw" />
            <div className="oe-art-caption">A working system, not a demo</div>
          </div>
        </section>

        <section className="oe-marquee" aria-label="Service outcomes">
          {service.marquee.map((item, index) => (
            <span className="contents" key={item}>
              <div>{item}</div>
              {index < service.marquee.length - 1 && <span aria-hidden="true">+</span>}
            </span>
          ))}
        </section>

        <section id="how-it-works" className="oe-owner section-pad">
          <div className="oe-section-label">01 / The point</div>
          <div className="oe-owner-grid">
            <h2>{service.ownerTitle}</h2>
            <div>
              <p className="oe-large-copy">{service.ownerCopy}</p>
              <p className="oe-muted">The useful measure is not how clever the system sounds. It is the completed work, the decision it supports and the evidence left behind.</p>
            </div>
          </div>
          <div className="oe-proof-row">
            {service.proof.map((item) => <div className="oe-proof" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className="oe-split section-pad">
          <div className="oe-section-label">02 / On the other side</div>
          <div className="oe-split-card">
            <div className="oe-split-mark">↗</div>
            <h2>{service.customerTitle}</h2>
            <p>{service.customerCopy}</p>
          </div>
          <p className="oe-footnote">That is the distinction: the business gets a clearer operating picture, while the person on the other side gets a shorter path to a useful answer.</p>
        </section>

        <section className="oe-capabilities section-pad">
          <div className="oe-section-label">03 / What we make real</div>
          <div className="oe-capability-grid">
            <h2>From question<br /><em>to outcome.</em></h2>
            <div className="oe-capability-list">
              {service.capabilities.map((item, index) => (
                <article key={item.title} className="oe-capability">
                  <span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><Check size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="oe-steps section-pad">
          <div className="oe-section-label">04 / A grounded build</div>
          <h2>Useful on day one.<br /><em>More accountable over time.</em></h2>
          <div className="oe-step-row">
            {service.steps.map((step, i) => (
              <div className="oe-step" key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></div>
            ))}
          </div>
        </section>

        <section className="oe-faq section-pad">
          <div className="oe-section-label">05 / Plain answers</div>
          <div className="oe-faq-grid"><h2>Questions buyers<br /><em>actually ask.</em></h2><div>
            {service.faqs.map((faq, i) => <div className={`oe-faq-item ${openFaq === i ? "is-open" : ""}`} key={faq.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown size={19} /></button>
              {openFaq === i && <p>{faq.a}</p>}
            </div>)}
          </div></div>
        </section>

        <section className="oe-related section-pad">
          <div className="oe-section-label">Keep exploring</div>
          <div className="oe-related-grid">{service.related.map((item) => <Link className="oe-related-card" href={item.href} key={item.href}><span>{item.title}</span><ArrowUpRight size={20} /><p>{item.copy}</p></Link>)}</div>
        </section>
        <section className="oe-cta"><p className="oe-eyebrow"><span /> OARC DIGITAL</p><h2>Make the work<br /><em>move forward.</em></h2><Link href="/contact" className="oe-button oe-button-dark">Start with the problem <ArrowUpRight size={17} /></Link></section>
      </main>
    </Layout>
  );
}