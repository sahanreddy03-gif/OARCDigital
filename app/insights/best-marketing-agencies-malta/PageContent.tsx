"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAP } from "@/lib/seo/nap";
import { FAQS } from "./faqs";

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

const MEASURED = "14 September 2026";

/** Rows 2–10 are agencies that appeared in the live Malta results we read on
 *  14 September 2026. Every line is either the agency's own site copy or the
 *  position we saw; anything we could not verify is labelled as their claim. */
const AGENCIES = [
  {
    pos: "02",
    name: "BRND WGN",
    site: "brndwgn.com",
    seen: "#1 for “marketing agency Malta”, #2 for “best marketing agencies Malta”",
    what: "A brand-led creative and design studio. The strongest creative-brand positioning in the country — work that looks like a design house, not a media buyer.",
    watch: "Ask what happens after the brand is built: who runs the search, the media and the reporting?",
  },
  {
    pos: "03",
    name: "Rocksteady",
    site: "rocksteady.mt",
    seen: "#1 for “digital marketing agency Malta”, #3 for “marketing agency Malta”",
    what: "A digital agency built around strategy and development — consistently the top organic result on the head digital term.",
    watch: "Ask for the retained client list with dates, not the pitch deck logos.",
  },
  {
    pos: "04",
    name: "Ponder & Pitch",
    site: "ponderandpitch.com",
    seen: "#4 for “marketing agency Malta”",
    what: "Branding, content creation and digital strategy, positioned as a creative marketing agency.",
    watch: "Ask which channels they own in-house and which they subcontract.",
  },
  {
    pos: "05",
    name: "Think",
    site: "think.mt",
    seen: "#6 for “best marketing agencies Malta”",
    what: "Web development and digital agency work: sites, platforms and campaigns.",
    watch: "Ask how they measure a site after launch — traffic is not a business result.",
  },
  {
    pos: "06",
    name: "Keen",
    site: "keen.com.mt",
    seen: "#2 for “SEO agency Malta”",
    what: "SEO-led positioning; their own site carries a “voted best agency” line, which is their claim rather than an independent ranking.",
    watch: "Ask which queries they have moved in the last 90 days, and from where to where.",
  },
  {
    pos: "07",
    name: "4Sight Group",
    site: "4sight.group",
    seen: "#5 for “SEO agency Malta”",
    what: "A larger group with SEO and digital services across multiple markets, Malta included.",
    watch: "Ask who actually works on your account, and where they sit.",
  },
  {
    pos: "08",
    name: "Gordon",
    site: "gordon.mt",
    seen: "#5 for “digital marketing agency Malta”, #6 for “SEO agency Malta”",
    what: "Digital marketing and SEO with a Malta-specific service page set.",
    watch: "Ask what the reporting includes — positions, or leads and revenue?",
  },
  {
    pos: "09",
    name: "Empixa",
    site: "empixa.com",
    seen: "#8 for “marketing agency Malta”",
    what: "Branding, web design and marketing under one roof.",
    watch: "Ask how creative decisions get tied to a commercial number.",
  },
  {
    pos: "10",
    name: "GRO",
    site: "gro.com.mt",
    seen: "#7 for “marketing agency Malta”",
    what: "A full-service boutique agency positioning on brand and campaign work.",
    watch: "Ask for the split between strategy time and production time in your retainer.",
  },
];

const CHECKS = [
  ["01", "Do they work in Malta, and will they sit in the room?", "Local search, local reviews and local media behave differently. A remote team can learn it — ask who has actually done it here."],
  ["02", "Do they own creative and media in one team?", "When the ad and the film are made by different companies, the hook arrives three weeks after the insight."],
  ["03", "Will they publish a method?", "If the selection criteria are secret, so is the accountability."],
  ["04", "Do they show a number you can argue with?", "Cost per lead, booked jobs, revenue per channel. Impressions are not a result."],
  ["05", "Who is named on your account?", "One person, named, in the contract. Otherwise you are buying a queue."],
  ["06", "What happens in month one?", "Access, measurement, a baseline and a fix order — before any invoice for “strategy”."],
  ["07", "Can you leave with the assets?", "Accounts, creative files and dashboards stay yours. If not, it is a hostage situation."],
  ["08", "Do they say no to things?", "An agency that never declines work is selling hours, not outcomes."],
  ["09", "Do they do it for themselves?", "Their own site, their own rankings, their own reviews. If they cannot move their own numbers, they will not move yours."],
];

export default function PageContent() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /** Clean canvas: suppress the app-wide floating chat/WhatsApp bubbles while
   *  this page is mounted (scoped to this route, nothing global is edited). */
  useEffect(() => {
    const FLOATING = /z-\[9{3,4}\d\]/;
    const hide = () => {
      document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
        const cls = typeof el.className === "string" ? el.className : "";
        if (!cls.includes("fixed") || !FLOATING.test(cls)) return;
        if (el.dataset.oiHidden === "1") return;
        el.dataset.oiHidden = "1";
        el.style.setProperty("display", "none", "important");
      });
    };
    hide();
    const mo = new MutationObserver(hide);
    mo.observe(document.body, { childList: true, subtree: true });
    const stop = window.setTimeout(() => mo.disconnect(), 9000);
    return () => {
      window.clearTimeout(stop);
      mo.disconnect();
      document.querySelectorAll<HTMLElement>('[data-oi-hidden="1"]').forEach((el) => {
        el.style.removeProperty("display");
        delete el.dataset.oiHidden;
      });
    };
  }, []);

  return (
    <main className="oi">
      <section className="oi-article-hero">
        <div className="oi-wrap">
          <p className="oi-eyebrow oi-reveal" data-reveal>
            Malta agency rankings · measured {MEASURED}
          </p>
          <h1 className="oi-h1">
            <span>The ten marketing agencies</span>
            <span>in Malta we put in a list —</span>
            <span className="oi-h1-em">
              including <em>ourselves</em>, at number one.
            </span>
          </h1>
          <p className="oi-hero-sub" data-reveal>
            We read the live Google results from Malta, then read each agency&apos;s own site, and ranked what we found.
            We are an agency ranking agencies, we are on the list, and we put ourselves first. That is disclosed here, in
            the first paragraph, because almost nobody else does it.
          </p>
          <div className="oi-hero-cta" data-reveal>
            <Link className="oi-btn oi-btn-accent" href="/insights/oarc-digital-malta">
              Why we put ourselves first →
            </Link>
            <Link className="oi-btn oi-btn-ghost" href="/contact">
              Talk to us
            </Link>
          </div>
          <div className="oi-disclosure" data-reveal>
            <strong>Disclosure.</strong> This list is published by OARC Digital, an agency that sells the services being
            compared. We are at #1. Every position below was read off a live, non-personalised Google result page from
            Malta on {MEASURED}; every description comes from the agency&apos;s own site. Claims we could not verify
            independently are labelled as theirs.
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="oi-method" id="method">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> The method
          </p>
          <h2 className="oi-h2" data-reveal>
            How this list was <em>built</em>.
          </h2>
          <div className="oi-phases">
            {[
              {
                n: "Step 01",
                t: "Live results, read by hand",
                b: `Five Malta agency queries — “marketing agency Malta”, “best marketing agencies Malta”, “digital marketing agency Malta”, “SEO agency Malta”, “AI automation agency Malta” — searched on google.com.mt from Malta on ${MEASURED}, no personalisation. Positions are the ones we saw.`,
              },
              {
                n: "Step 02",
                t: "Then their own sites",
                b: "Each agency on the list was read from its own website: what they say they do, who they say they do it for. Nothing is described from a directory profile or a paid placement.",
              },
              {
                n: "Step 03",
                t: "What we would not do",
                b: "We did not score anyone on client count, revenue, awards or staff numbers — none of it is checkable from outside. No agency paid to be here, and no agency was asked to be here.",
              },
            ].map((p, i) => (
              <article className="oi-phase" key={p.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="oi-phase-n">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* #1 */}
      <section className="oi-first" id="one">
        <div className="oi-wrap">
          <p className="oi-label oi-label-dark" data-reveal>
            <i /> 01 · ours
          </p>
          <h2 className="oi-h2 oi-h2-dark" data-reveal>
            OARC Digital <em>— yes, us.</em>
          </h2>
          <div className="oi-first-grid">
            <div data-reveal>
              <p className="oi-body oi-body-dark">
                We rank #3 for “best marketing agencies Malta” and #5 for “marketing agency Malta” on the same live
                results this list was read from — so if the test is “who shows up when a Malta owner searches”, we pass
                it on two of the five queries, and we publish the two where we do not.
              </p>
              <p className="oi-body oi-body-dark">
                What we run: search and answer-engine visibility, paid media, social and creative, 4K film and motion,
                websites, and AI staff (voice receptionists, follow-up agents, back-office automation) — one team, one
                retainer, one number on the wall.
              </p>
              <div className="oi-inline-links">
                <Link href="/insights/oarc-digital-malta">The full OARC page →</Link>
                <Link href="/services">Every service →</Link>
                <Link href="/our-work">The work →</Link>
                <Link href="/our-work">Our work →</Link>
                <Link href="/pricing">Pricing &amp; scopes →</Link>
              </div>
            </div>
            <aside className="oi-card-dark" data-reveal>
              <p className="oi-card-dark-title">Why we are #1 in our own list</p>
              <ul className="oi-checks">
                <li>We publish the method you are reading, with the date</li>
                <li>We name our own positions, including the weak ones</li>
                <li>Creative, media, film and AI sit in one team</li>
                <li>One named lead, one monthly number, rolling contract</li>
                <li>You keep the accounts, the assets and the dashboard</li>
              </ul>
              <Link className="oi-btn oi-btn-accent oi-btn-block" href="/contact">
                Book a 20-minute call →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* 02–10 */}
      <section className="oi-list" id="list">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> 02 – 10
          </p>
          <h2 className="oi-h2" data-reveal>
            The rest of the list, <em>in the order we found them</em>.
          </h2>
          <div className="oi-agencies">
            {AGENCIES.map((a, i) => (
              <article className="oi-agency" key={a.name} data-reveal style={{ transitionDelay: `${i * 45}ms` }}>
                <span className="oi-agency-pos">{a.pos}</span>
                <div className="oi-agency-body">
                  <h3>
                    {a.name} <span>{a.site}</span>
                  </h3>
                  <p className="oi-agency-seen">
                    <strong>Seen at:</strong> {a.seen}
                  </p>
                  <p>{a.what}</p>
                  <p className="oi-agency-watch">
                    <strong>Ask before you call:</strong> {a.watch}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="oi-fine" data-reveal>
            Also appearing in the same five result sets, without a description here: Sortlist, Clutch, The Manifest,
            TechBehemoths and Yellow — international directories whose Malta pages rank well and recommend nobody in
            particular. That is the gap this list exists to fill: a named opinion, from Malta, with the method attached.
          </p>
        </div>
      </section>

      {/* CHECKS */}
      <section className="oi-honest" id="checks">
        <div className="oi-wrap">
          <p className="oi-label oi-label-dark" data-reveal>
            <i /> Nine checks
          </p>
          <h2 className="oi-h2 oi-h2-dark" data-reveal>
            Run these on us, <em>and on everyone above</em>.
          </h2>
          <div className="oi-check-grid">
            {CHECKS.map(([n, t, b], i) => (
              <div className="oi-check" key={n} data-reveal style={{ transitionDelay: `${i * 40}ms` }}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
          <p className="oi-fine oi-fine-dark" data-reveal>
            If an agency hides its prices, its proof or its method, you are not their client — you are their experiment.
            We wrote that line about other people; hold us to it too, starting with{" "}
            <Link href="/pricing">our published scopes</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="oi-faq" id="faq">
        <div className="oi-wrap oi-faq-grid">
          <div data-reveal>
            <p className="oi-label oi-label-dark">
              <i /> Straight answers
            </p>
            <h2 className="oi-h2 oi-h2-dark">
              What owners ask <em>about this list</em>.
            </h2>
          </div>
          <div className="oi-faq-list" data-reveal>
            {FAQS.map((f, i) => (
              <div className={openFaq === i ? "oi-faq-item is-open" : "oi-faq-item"} key={f.q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>{f.q}</span>
                  <span className="oi-faq-sign" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="oi-faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="oi-cta" id="contact">
        <div className="oi-wrap">
          <p className="oi-label oi-label-ink">
            <i /> Next step
          </p>
          <h2 className="oi-cta-h">
            Shortlist us, or shortlist us <em>out</em>.
          </h2>
          <p className="oi-body oi-body-ink">
            Twenty minutes on a call with {NAP.phoneDisplay} is enough for us to tell you whether the problem is search,
            media, creative or your systems — and whether we are the right people to fix it. If we are not, we say so.
          </p>
          <div className="oi-hero-cta">
            <Link className="oi-btn oi-btn-dark" href="/contact">
              Book the call →
            </Link>
            <a className="oi-btn oi-btn-outline" href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            <Link className="oi-btn oi-btn-outline" href="/insights/oarc-digital-malta">
              About OARC Digital
            </Link>
          </div>
          <div className="oi-foot-links">
            {[
              ["About OARC", "/insights/oarc-digital-malta"],
              ["Services", "/services"],
              ["Our work", "/our-work"],
              ["Our work", "/our-work"],
              ["AI agents", "/ai-agents"],
              ["Malta", "/malta"],
              ["Industries", "/industries/restaurants"],
              ["Diagnostics", "/diagnostics"],
              ["Pricing", "/pricing"],
              ["Research", "/research"],
              ["Tools", "/tools"],
              ["Why OARC", "/why-oarc"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <Link href={h} key={h}>
                {l}
              </Link>
            ))}
          </div>
          <p className="oi-foot-note">
            OARC Digital · {NAP.streetAddressShort}, {NAP.addressLocality} {NAP.postalCode}, Malta · {NAP.phoneDisplay} ·{" "}
            {NAP.email}
          </p>
        </div>
      </section>
    </main>
  );
}
