"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { NAP } from "@/lib/seo/nap";
import { FAQS } from "./faqs";
import "./insights.css";

/* ------------------------------------------------------------------ data --- */

const MEDIA = "/insights/best-marketing-agencies-malta";

const SECTIONS = [
  { id: "answer", label: "The short answer" },
  { id: "method", label: "How this was measured" },
  { id: "shortlist", label: "The shortlist" },
  { id: "checks", label: "The 9 checks" },
  { id: "price", label: "What it costs" },
  { id: "offer", label: "What we do differently" },
  { id: "faq", label: "Questions" },
];

type Agency = {
  rank: number;
  name: string;
  site: string;
  own: string;
  evidence: string;
  fits: string;
  ask: string;
  us?: boolean;
};

const AGENCIES: Agency[] = [
  {
    rank: 1,
    name: "OARC Digital",
    site: "oarcdigital.com",
    own:
      "“Malta's creative + AI systems agency: brand strategy, content production, influencer marketing, AI automation and hospitality technology as one growth system.”",
    evidence:
      "Measured 7 Sep 2026: organic #7 on “marketing agency Malta”, local #5 and organic #12 on “AI agency Malta”, organic #7 on “social media agency Malta”.",
    fits: "Owner-run companies that need one team producing content, ads, Google Business and AI systems every week.",
    ask:
      "We publish this guide, so ask us harder questions than anyone else on the list: name the owner, the monthly output, the exit.",
    us: true,
  },
  {
    rank: 2,
    name: "9H Digital",
    site: "9hdigital.com",
    own:
      "“Malta's largest creative, tech, AI & digital marketing company” — research-led work across complex online challenges.",
    evidence: "Appeared on 6 of the 7 measured Malta queries — the broadest visibility of any agency measured (best: #4 local).",
    fits: "Larger organisations that want one supplier across creative, technology and marketing, with headcount to match.",
    ask: "Size is the trade-off: ask who your named owner is and how many accounts they personally carry.",
  },
  {
    rank: 3,
    name: "IB Results",
    site: "ibresults.com",
    own:
      "“Malta digital marketing agency… SEO, Google Ads and Meta Ads, fully tracked” with a published “more clients or we work for free” pledge.",
    evidence: "Appeared on 4 of the 7 measured queries, including #1 in the local pack on “marketing agency Malta”.",
    fits: "Local businesses that want tracked lead generation and a written risk-reversal offer.",
    ask: "A pledge lives or dies on its wording — get the remedy clause in the same email as the promise.",
  },
  {
    rank: 4,
    name: "Neural AI",
    site: "neuralai.mt",
    own: "“AI company Malta | Chatbots, ML & Automation.”",
    evidence: "Appeared on 4 of the 7 measured queries; the only Malta AI specialist ranking across the cluster (#1 organic on “AI agency Malta”).",
    fits: "Companies buying a specific AI build — chatbot, automation or machine-learning work — rather than full marketing.",
    ask: "AI without distribution is a cost centre: ask how the build is tied to enquiries.",
  },
  {
    rank: 5,
    name: "Digital Consulting Pros",
    site: "thisisdcp.com",
    own: "“A full service digital marketing agency… ready to support your bottom line in business: SALES.”",
    evidence: "Appeared on 4 of the 7 measured queries (best position #2 local).",
    fits: "Companies that want a full-service agency relationship framed around sales outcomes.",
    ask: "Confirm what is produced per month in numbers, not service categories.",
  },
  {
    rank: 6,
    name: "Switch",
    site: "switch.com.mt",
    own: "“Since 2004, Switch has been helping B2B brands grow as a boutique B2B marketing agency for SMBs that believe in long-term thinking.”",
    evidence: "Appeared on 3 of the 7 measured queries (#1 local pack on “marketing agency Malta”).",
    fits: "B2B companies that want a long-horizon brand and demand programme rather than short-cycle content.",
    ask: "Long-term thinking is a real strategy and a real excuse — insist on 30-day deliverables.",
  },
  {
    rank: 7,
    name: "4Sight Group",
    site: "4sight.group",
    own: "“Digital Transformation company based in Malta and Cyprus, with an international network providing global marketing & technology solutions.”",
    evidence: "Appeared on 3 of the 7 measured queries (#8).",
    fits: "Mid-market and enterprise digital transformation spanning marketing and technology.",
    ask: "Transformation programmes need a named owner inside your business, not only on the partner side.",
  },
  {
    rank: 8,
    name: "Ballotra",
    site: "ballotra.com",
    own: "Positioning not verifiable — the site returned a 403 to our check on 13 September 2026. We will not describe what we could not read.",
    evidence: "Appeared on 3 of the 7 measured queries (#10).",
    fits: "Verify directly.",
    ask: "A blocked homepage is a small signal; a blocked homepage plus an unverifiable client list is a bigger one.",
  },
  {
    rank: 9,
    name: "SEO Malta",
    site: "seo-malta.com",
    own: "“SEO-Malta.com is a full-service SEO agency in Malta. Rank higher on Google with local, technical & content SEO.”",
    evidence: "Appeared on 2 of the 7 measured queries (#2).",
    fits: "Companies buying SEO as a standalone service with a defined technical scope.",
    ask: "Ask for the monthly report you will actually receive, and who does the work.",
  },
  {
    rank: 10,
    name: "Brnd Wgn",
    site: "brndwgn.com",
    own: "“BRND WGN is a leading brand-led creative agency in Malta” — “for the love of brands”.",
    evidence: "Appeared on 2 of the 7 measured queries (#4).",
    fits: "Brand identity, naming and creative work where positioning is the deliverable.",
    ask: "Brand work and demand generation are different purchases — check which one you are buying.",
  },
  {
    rank: 11,
    name: "Ponder & Pitch",
    site: "ponderandpitch.com",
    own: "“A creative marketing agency in Malta, specialising in branding, content creation, and digital strategy” including audiovisual production.",
    evidence: "Appeared on 2 of the 7 measured queries (#5).",
    fits: "Brands that want campaign creative and production with strategy attached.",
    ask: "Confirm the publishing cadence after the campaign ends — output usually drops off a cliff.",
  },
  {
    rank: 12,
    name: "GRO",
    site: "gro.com.mt",
    own: "“A full-service boutique marketing agency” empowering businesses in Malta and Gozo by implementing tailor-made marketing solutions.",
    evidence: "Appeared on 2 of the 7 measured queries (#8).",
    fits: "Malta and Gozo SMEs that want a boutique relationship with senior attention.",
    ask: "Boutique capacity means prioritisation — agree the queue in writing.",
  },
  {
    rank: 13,
    name: "Steves&Co.",
    site: "stevesandco.com",
    own: "“Transforms brands into extraordinary experiences through strategy, creativity, and innovation. A brand experience & UI agency.”",
    evidence: "Appeared on 1 of the 7 measured queries (#3).",
    fits: "Product, UI and brand-experience projects with an international posture.",
    ask: "Demand generation is not their stated service — buy what they actually sell.",
  },
  {
    rank: 14,
    name: "Maltaseo.pro",
    site: "maltaseo.pro",
    own: "“Practical SEO services for Malta businesses, covering technical SEO, local search and content strategy.”",
    evidence: "Appeared on 1 of the 7 measured queries (#1 organic on “SEO Malta”).",
    fits: "Pure SEO engagements where ranking is the single deliverable.",
    ask: "SEO alone rarely fixes a demand problem — pair it with distribution.",
  },
  {
    rank: 15,
    name: "Digital Marketing Malta",
    site: "digitalmarketingmalta.eu",
    own: "Positioning not verifiable — the site served a bot-wall interstitial to our check on 13 September 2026.",
    evidence: "Appeared on 2 of the 7 measured queries (#5).",
    fits: "Verify directly.",
    ask: "If a bot wall blocks us, ask them how they expect answer engines to read their clients' sites.",
  },
];

const CHECKS = [
  { t: "A named owner, introduced before you sign", d: "You are buying one person's attention. If the pitch is delivered by a director and the work by nobody in particular, that is the whole answer." },
  { t: "A written scope with numbers in it", d: "Posts per month, videos per month, pages per month, campaigns launched. Categories — content, strategy, growth — are not a scope." },
  { t: "You keep every account", d: "Google Ads, Analytics, Google Business Profile, the domain: your name, you as owner. An agency that holds them holds your leverage." },
  { t: "Reporting on enquiries or revenue, not reach", d: "Impressions can rise every month while the phone stays quiet. Ask which number they are comfortable being judged on." },
  { t: "A term you can leave", d: "Month-to-month is the strongest quality signal in this market: an agency that cannot keep you without a lock-in is telling you where its confidence sits." },
  { t: "A price where the structure is stated", d: "What you pay, what is included, what sits outside the fee, and whether ad spend is managed for a percentage." },
  { t: "Claims you can verify in one search", d: "Open their Google Business Profile while you are on the call. If the numbers on the call do not match the live listing, end it kindly." },
  { t: "Something shipped in the first 30 days", d: "One real artifact — a page fixed, a profile completed, a campaign live. Quality shown beats quality promised." },
  { t: "One client you can speak to, same scope", d: "Not a logo wall. One person who bought what you are buying and will tell you what the first 90 days were actually like." },
];

const PRICE = [
  { s: "Single channel — Google Business Profile, or SEO only", fits: "The cheapest way in; measurable and easy to exit", ask: "What is produced each month, in numbers?" },
  { s: "Multi-channel operator retainer", fits: "Most Malta SMEs — content, ads and local presence run together", ask: "Who owns the calendar, and who approves public work?" },
  { s: "Full service with media management", fits: "Companies already spending meaningfully on ads", ask: "Is the percentage fee tied to a result, or to spend?" },
  { s: "Project / campaign fee", fits: "A launch, a rebrand, a season", ask: "What happens after launch, and who maintains it?" },
  { s: "Advisory only — a consultant", fits: "You already have someone in-house who executes", ask: "What is produced, versus what is recommended?" },
];

const OFFER = [
  "Creative production, paid media, Google Business Profile and AI systems inside one retainer — no handoff between planner and producer.",
  "A human approves every public post before it goes out. Nothing unsupervised carries your brand.",
  "Ad spend is never debited without your explicit approval, and the accounts stay in your name.",
  "Published scope, published range, month-to-month availability, no setup fee.",
  "48-hour turnaround on requests, tracked in a calendar you can see.",
  "Reporting on enquiries and bookings, with tracking installed before launch.",
];

const WORK = [1, 2, 3, 4, 5, 6, 7].map((n) => `${MEDIA}/work-0${n}.jpg`);

/* --------------------------------------------------------------- helpers --- */

function useReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".oi");
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".oi [data-reveal], .oi [data-mask]"));
    if (!root || !nodes.length) return;
    // `?still=1` renders the page fully painted — used for screenshots, print and QA.
    if (new URLSearchParams(window.location.search).has("still")) {
      root.classList.add("oi-still");
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("oi-animate");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function useSectionRail() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(Math.min(100, Math.max(0, p * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-42% 0px -52% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
  return { active, progress };
}

/* -------------------------------------------------------------- component -- */

export default function BestMarketingAgenciesMalta() {
  useReveal();
  const { active, progress } = useSectionRail();
  const [open, setOpen] = useState(0);

  return (
    <Layout navTheme="light">
      <main className="oi">
        {/* hero ------------------------------------------------------------ */}
        <section className="oi-hero">
          <div className="oi-hero__media">
            <video autoPlay muted loop playsInline poster={`${MEDIA}/hero-coast-poster.jpg`} aria-hidden="true">
              <source src={`${MEDIA}/hero-coast-720.webm`} type="video/webm" />
              <source src={`${MEDIA}/hero-coast-1080.mp4`} type="video/mp4" />
            </video>
            <div className="oi-hero__scrim" />
          </div>
          <div className="oi-hero__inner">
            <p className="oi-eyebrow">OARC Digital / Buying guide 01</p>
            <h1>
              The best marketing agencies in <em>Malta</em> — and how to tell them apart
            </h1>
            <p className="oi-hero__deck">
              Every other list in this market is a sales document. This one publishes how it was built, what was
              measured, when — and the nine checks that will remove an agency from your shortlist before you call.
            </p>
            <div className="oi-hero__meta">
              <span>15 agencies reviewed</span>
              <span>Visibility measured 7 Sep 2026</span>
              <span>Descriptions read 13 Sep 2026</span>
              <span>12 min read</span>
            </div>
          </div>
          <div className="oi-scrollcue" aria-hidden="true">Scroll ↓</div>
        </section>

        {/* marquee --------------------------------------------------------- */}
        <div className="oi-marquee" aria-hidden="true">
          <div className="oi-marquee__row">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k}>
                measured evidence · published method · no paid placement · 15 agencies · Malta first · a human approves everything ·
              </span>
            ))}
          </div>
        </div>

        <div className="oi-shell">
          {/* rail ---------------------------------------------------------- */}
          <aside className="oi-rail" aria-label="Contents">
            <p className="oi-rail__label">Contents</p>
            <ol>
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? "is-active" : ""}>
                    <span className="oi-rail__num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="oi-progress" aria-hidden="true">
              <i style={{ width: `${progress}%` }} />
            </div>
          </aside>

          <div>
            {/* answer ------------------------------------------------------ */}
            <section id="answer" className="oi-block">
              <div className="oi-answer" data-reveal>
                <span className="oi-answer__tag">The short answer</span>
                <p>
                  There is no single best marketing agency in Malta — there is the best agency for your scope. What can
                  be measured is visibility: across seven Malta commercial queries on 7 September 2026, 9H Digital
                  appeared most often, with IB Results, Neural AI and Digital Consulting Pros next. OARC Digital
                  publishes this guide, appears on the same measured queries, and is listed first with that disclosure.
                  The nine checks below matter more than the order of this list.
                </p>
              </div>
              <p className="oi-body" data-reveal>
                Malta has dozens of agencies and hundreds of freelancers selling the same four words — creative, social,
                performance, AI. Almost none of them publish what they produce each month, what it costs, or how they
                compare on a measurable query. That gap is the entire reason this page exists, and it is also the reason
                you should treat every other list you find with suspicion: most are written by the agency that placed
                itself first.
              </p>
            </section>

            {/* method ------------------------------------------------------ */}
            <section id="method" className="oi-block">
              <p className="oi-section-label" data-reveal>
                02 — Method
              </p>
              <h2 className="oi-h2" data-reveal>
                How this list was built — <em>before</em> you read the list
              </h2>
              <div className="oi-data" data-reveal>
                <div className="oi-data__cell">
                  <span className="oi-data__fig">7</span>
                  <span className="oi-data__lab">Malta commercial queries</span>
                  <p className="oi-data__src">
                    marketing agency Malta · digital marketing Malta · digital agency Malta · SEO Malta · social media
                    agency Malta · AI agency Malta · AI chatbot Malta
                  </p>
                </div>
                <div className="oi-data__cell">
                  <span className="oi-data__fig">15</span>
                  <span className="oi-data__lab">Agencies measured</span>
                  <p className="oi-data__src">
                    Top-20 organic and local results, Google desktop, English, Malta. Directories (Clutch, Sortlist,
                    The Manifest, TechBehemoths, Yellow.com.mt) excluded — they are not agencies.
                  </p>
                </div>
                <div className="oi-data__cell">
                  <span className="oi-data__fig">0</span>
                  <span className="oi-data__lab">Paid placements</span>
                  <p className="oi-data__src">
                    Nobody paid to appear. External links are marked nofollow. Two sites blocked our check and are
                    marked unverifiable rather than guessed.
                  </p>
                </div>
              </div>
              <p className="oi-body" data-reveal>
                <strong>What we measured.</strong> Which agency domains actually appear when a Malta buyer searches for
                an agency, and where. That is a snapshot of one day, not a trend — but it is real, dated, and it is more
                than any other list in this market offers.
              </p>
              <p className="oi-body" data-reveal>
                <strong>What we read.</strong> Every agency description below is taken from the agency's own website —
                the title and description their page serves to Google — on 13 September 2026. We did not write their
                positioning for them, and we did not credit anyone with a service they do not advertise.
              </p>
              <p className="oi-body" data-reveal>
                <strong>What we did not do.</strong> We did not test their client work, speak to their clients or read
                their contracts. That is your job, with the nine checks and the questions printed under each entry.
              </p>
            </section>

            {/* shortlist --------------------------------------------------- */}
            <section id="shortlist" className="oi-block">
              <p className="oi-section-label" data-reveal>
                03 — The shortlist
              </p>
              <h2 className="oi-h2" data-reveal>
                Fifteen agencies, in one table, with the evidence
              </h2>
              <div className="overflow-x-auto" data-reveal>
                <table className="oi-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Agency</th>
                      <th>Appeared on</th>
                      <th>Best position</th>
                      <th>Probably right for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AGENCIES.map((a) => (
                      <tr key={a.site} className={a.us ? "oi-t-us" : ""}>
                        <td className="oi-t-name">{String(a.rank).padStart(2, "0")}</td>
                        <td className="oi-t-name">
                          {a.name}
                          {a.us ? " · this guide" : ""}
                        </td>
                        <td>{a.evidence.match(/(\d) of the 7/)?.[0] ?? "1 of the 7"}</td>
                        <td>{a.evidence.match(/#\d+/)?.[0] ?? "—"}</td>
                        <td>{a.fits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="oi-orgs">
                {AGENCIES.map((a) => (
                  <article key={a.site} className="oi-org" data-reveal>
                    <span className="oi-org__num">{String(a.rank).padStart(2, "0")}</span>
                    <div>
                      <h3 className="oi-org__name">
                        <a href={`https://${a.site}`} target="_blank" rel="noopener noreferrer nofollow">
                          {a.name}
                        </a>
                        {a.us && <span className="oi-org__tag">We publish this guide</span>}
                      </h3>
                      <p className="oi-org__own">{a.own}</p>
                    </div>
                    <div className="oi-org__meta">
                      <p>
                        <b>Measured</b>
                        {a.evidence}
                      </p>
                      <p>
                        <b>The question we would ask</b>
                        {a.ask}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <h3 className="oi-h3" style={{ marginTop: 44 }} data-reveal>
                The pages you are actually competing with
              </h3>
              <p className="oi-body" data-reveal>
                The strongest positions on Malta agency searches are not held by agencies. They are held by directory
                pages: Clutch, Sortlist, The Manifest, TechBehemoths, TopSEOs and Yellow.com.mt. Those pages are long,
                thin and unopinionated — they list everyone and recommend nobody. That is why we publish criteria, and
                why the table above prints evidence beside every name.
              </p>
            </section>

            {/* checks ------------------------------------------------------ */}
            <section id="checks" className="oi-block">
              <p className="oi-section-label" data-reveal>
                04 — The part you can use today
              </p>
              <h2 className="oi-h2" data-reveal>
                The nine checks that remove an agency <em>before</em> you call
              </h2>
              <p className="oi-body" data-reveal>
                One point per check passed. Nine is excellent. Seven is workable. Five or fewer is a decision you will
                regret by month four. Run it on every name above — including ours.
              </p>
              <div className="oi-checks">
                {CHECKS.map((c, i) => (
                  <div className="oi-check" key={c.t} data-reveal style={{ ["--d" as string]: `${i * 40}ms` }}>
                    <span className="oi-check__n">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* video band ------------------------------------------------------ */}
        <section className="oi-band" data-reveal>
          <video autoPlay muted loop playsInline poster={`${MEDIA}/band-faster-poster.jpg`} aria-hidden="true">
            <source src={`${MEDIA}/band-faster-1080.mp4`} type="video/mp4" />
          </video>
          <p className="oi-band__cap">Speed is a strategy only when the work ships · OARC original footage</p>
        </section>

        {/* pull quote ------------------------------------------------------ */}
        <section className="oi-quote">
          <blockquote data-reveal>
            “They used to measure views, and then they measured sales, and then they became rich.”
            <cite>— the only change that matters in an agency contract</cite>
          </blockquote>
        </section>

        <div className="oi-shell">
          <div />
          <div>
            {/* price ------------------------------------------------------ */}
            <section id="price" className="oi-block">
              <p className="oi-section-label" data-reveal>
                05 — Money
              </p>
              <h2 className="oi-h2" data-reveal>
                What it costs — read the <em>structure</em>, not the number
              </h2>
              <p className="oi-body" data-reveal>
                Almost nobody in Malta publishes a price, which makes comparison impossible. Judge the structure
                instead: the same structure with two different prices is a negotiation; two different structures at the
                same price are two different products.
              </p>
              <div className="overflow-x-auto" data-reveal>
                <table className="oi-table">
                  <thead>
                    <tr>
                      <th>Structure</th>
                      <th>Fits</th>
                      <th>Ask this</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE.map((p) => (
                      <tr key={p.s}>
                        <td className="oi-t-name">{p.s}</td>
                        <td>{p.fits}</td>
                        <td>{p.ask}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="oi-body" data-reveal>
                Our own answer to the price question is published rather than hidden: a monthly retainer range that
                moves with scope and the number of channels running, stated in writing before you commit, with no setup
                fee and no lock-in. Ask any agency on this page for the same sentence in writing. The ones that send it
                are the ones worth a second call.
              </p>
            </section>

            {/* offer ------------------------------------------------------ */}
            <section id="offer" className="oi-block">
              <div className="oi-offer" data-reveal>
                <p className="oi-section-label" style={{ color: "var(--oi-accent-ink)" }}>
                  06 — What we actually do differently
                </p>
                <h2>
                  One operator, three jobs: <em>socials, systems, sales</em>
                </h2>
                <div className="oi-offer__grid">
                  {OFFER.map((o) => (
                    <div className="oi-offer__item" key={o}>
                      <i>✓</i>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
                <p className="oi-offer__foot">
                  We are not the right answer for every business reading this page. If you need enterprise procurement,
                  a forty-person media desk, or pure brand consulting with no execution, one of the names above will
                  serve you better — and we would rather you found that out here than three invoices in.
                </p>
              </div>
            </section>

            {/* vertical strip + provenance -------------------------------- */}
            <section className="oi-block">
              <div className="oi-vert" data-reveal>
                <div>
                  <p className="oi-section-label">In our own words</p>
                  <h2 className="oi-h2">The work, not the deck</h2>
                  <p className="oi-body">
                    Every campaign, page and AI system we run is produced in-house and approved by a human before it
                    goes public. The clip alongside is ours — shot in Malta, unretouched, edited the same week. If an
                    agency cannot show you work from the last thirty days, they are showing you a portfolio, not a
                    practice.
                  </p>
                </div>
                <video autoPlay muted loop playsInline poster={`${MEDIA}/presenter-vertical-poster.jpg`} aria-hidden="true">
                  <source src={`${MEDIA}/presenter-vertical.mp4`} type="video/mp4" />
                </video>
              </div>

              <div className="oi-prov" data-reveal>
                <div>
                  <h4>Who wrote this</h4>
                  <p>
                    OARC Digital, {NAP.streetAddressShort}, {NAP.addressLocality} — an operator that runs these
                    retainers. We are entry one, and we disclose it on the same line as everyone else.
                  </p>
                </div>
                <div>
                  <h4>What was measured, and when</h4>
                  <p>
                    Visibility: seven Malta commercial queries, Google desktop, English, top-20 organic and local
                    results, 7 September 2026. Descriptions: each agency's own site metadata, read 13 September 2026.
                  </p>
                </div>
                <div>
                  <h4>How to verify us</h4>
                  <p>
                    Search the seven queries yourself, open each agency's Google Business Profile, and ask each name for
                    the nine checks in writing. Our contact details are at the bottom of this page.
                  </p>
                </div>
              </div>
            </section>

            {/* faq -------------------------------------------------------- */}
            <section id="faq" className="oi-block">
              <p className="oi-section-label" data-reveal>
                07 — Questions buyers actually ask
              </p>
              <h2 className="oi-h2" data-reveal>
                Straight answers
              </h2>
              <div className="oi-faq" data-reveal>
                {FAQS.map((f, i) => (
                  <div key={f.q} className={`oi-faq__item${open === i ? " is-open" : ""}`}>
                    <button className="oi-faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                      <span>{f.q}</span>
                      <b>{open === i ? "−" : "+"}</b>
                    </button>
                    <div className="oi-faq__a">
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* work strip ------------------------------------------------------ */}
        <section className="oi-work">
          <div className="oi-work__head" data-reveal>
            <div>
              <p className="oi-section-label">Recent output</p>
              <h2 className="oi-h2" style={{ marginBottom: 0 }}>
                Seven pieces from the last month
              </h2>
            </div>
            <p className="oi-body" style={{ maxWidth: "34ch" }}>
              Produced in-house. Published only after a human approved each one.
            </p>
          </div>
          <div className="oi-work__row">
            {WORK.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="OARC Digital recent social output" loading="lazy" />
            ))}
          </div>
        </section>

        {/* cta ------------------------------------------------------------- */}
        <section className="oi-cta">
          <h2 data-reveal>
            Put us through the <em>nine checks</em>
          </h2>
          <div className="oi-cta__row">
            <a className="oi-btn" href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp the questions →
            </a>
            <Link className="oi-btn oi-btn--ghost" href="/pricing">
              See published pricing
            </Link>
          </div>
          <p className="oi-cta__nap">
            {NAP.streetAddressShort}, {NAP.addressLocality} · {NAP.phoneDisplay} · {NAP.email}
          </p>
        </section>
      </main>
    </Layout>
  );
}
