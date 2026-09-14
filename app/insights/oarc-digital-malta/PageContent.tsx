"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAP, ADDRESS_ONE_LINE } from "@/lib/seo/nap";
import { FAQS } from "./faqs";

/* ---------- scroll reveal ---------- */
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/* ---------- count-up ---------- */
function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  const shown = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-GB");
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

/* ---------- hero video ---------- */
function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!muted) v.muted = true;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => undefined);
    setPlaying(!v.paused);
  };

  return (
    <div className="oi-hero-media">
      <video
        ref={ref}
        className="oi-hero-video"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        poster="/insights/oarc-digital-malta/hero-cinematic-poster.jpg"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/insights/oarc-digital-malta/hero-cinematic-1080.mp4" type="video/mp4" />
        <source src="/insights/oarc-digital-malta/hero-cinematic-720.mp4" type="video/mp4" />
      </video>
      <div className="oi-hero-scrim" aria-hidden="true" />
      <div className="oi-hero-controls">
        <button type="button" onClick={toggle} aria-label={playing ? "Pause film" : "Play film"}>
          {playing ? "❙❙ Pause" : "▶ Play"}
        </button>
        <button type="button" onClick={toggleSound} aria-label={muted ? "Play with sound" : "Mute film"}>
          {muted ? "Sound on" : "Sound off"}
        </button>
      </div>
    </div>
  );
}

/* ---------- data ---------- */
const SERVICES = [
  { n: "01", name: "Search & SEO", body: "Technical, content and local search for Malta — the discipline that bought this page into existence.", proof: "Proof: we rank #3 and #5 in Malta for the agency terms we compete on", href: "/services/seo-services" },
  { n: "02", name: "Answer-engine & AI visibility", body: "Structured content, schema and entity work so assistants quote you, not a directory.", proof: "Proof: this page carries the entity record and FAQ schema assistants read", href: "/services/content-marketing" },
  { n: "03", name: "Paid advertising", body: "Meta, Google and TikTok built around a number we can defend, not a hunch.", proof: "Proof: every account gets a cost-per-lead ceiling before spend starts", href: "/services/paid-advertising" },
  { n: "04", name: "Social & creative", body: "Feeds shot, cut and posted in-house — the same team that makes the ads.", proof: "Proof: creative and media sit in one room, so a losing hook dies in days", href: "/services/social-media-creative-management" },
  { n: "05", name: "Film & motion", body: "4K production, motion graphics and 3D built to hold attention past the third second.", proof: "Proof: the film on this page is ours, shot in Malta", href: "/services/video-production" },
  { n: "06", name: "Motion design & 3D", body: "Titles, product films and immersive 3D for brands that need to look five years ahead.", proof: "Proof: motion is treated as a system, not a one-off render", href: "/services/motion-design" },
  { n: "07", name: "Websites & product", body: "Fast, editorial, conversion-first Next.js builds — like this one.", proof: "Proof: this page, its schema and its speed budget are all ours", href: "/services/web-design" },
  { n: "08", name: "AI staff & agents", body: "Voice receptionists, SDRs and back-office agents that answer when your team can't.", proof: "Proof: agents answer, book and log — with a human escalation path you control", href: "/services/ai-voice-receptionist" },
  { n: "09", name: "Automation & systems", body: "The plumbing between ads, CRM and reporting so leads stop leaking.", proof: "Proof: we report from your own data, not a screenshot from ours", href: "/services/automation" },
];

const PROOF = [
  { v: <Counter to={137} suffix="k" />, k: "Google impressions measured for oarcdigital.com", sub: "Search Console, six-month window" },
  { v: <Counter to={5} decimals={1} />, k: "Google rating on our own listing", sub: "6 reviews, zero bought" },
  { v: <Counter to={27} />, k: "Case studies published", sub: "Named clients, named numbers" },
  { v: <Counter to={15} />, k: "Malta agencies we audited by hand", sub: "Method published, 7 Sept 2026" },
];

const PHASES = [
  {
    n: "Phase 01",
    t: "We measure before we speak",
    b: "Your Search Console, your ad account, your listings, your competitors. You get the numbers in week one — including the ones that are ugly.",
    link: { label: "See the method we publish", href: "/insights/oarc-digital-malta#method" },
  },
  {
    n: "Phase 02",
    t: "We build the engine, not the poster",
    b: "Search, answer engines, paid, social and film stop competing. One system, one number on the wall, one team accountable for it.",
    link: { label: "What we actually run", href: "/services" },
  },
  {
    n: "Phase 03",
    t: "We report in your language",
    b: "Leads, bookings, cost per acquisition, revenue — by month, in a dashboard you keep, with the work attached to the number.",
    link: { label: "See pricing and scopes", href: "/pricing" },
  },
];

const INDUSTRIES = [
  { label: "Restaurants & hospitality", href: "/industries/restaurants" },
  { label: "iGaming", href: "/industries/igaming" },
  { label: "Real estate", href: "/industries/real-estate" },
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Clinics & healthcare", href: "/industries/healthcare-clinics" },
];

const WORK = ["work-01", "work-02", "work-03", "work-04", "work-05", "work-06", "work-07"];

const LOCAL_LINKS = [
  { label: "Malta service areas", href: "/malta" },
  { label: "Agent economy", href: "/agent-economy" },
  { label: "AI agents hub", href: "/ai-agents" },
  { label: "Creative studio", href: "/creative" },
  { label: "H360 growth system", href: "/h360" },
  { label: "Tools we deploy", href: "/tools" },
  { label: "Research & benchmarks", href: "/research" },
  { label: "Why OARC", href: "/why-oarc" },
];

export default function PageContent() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /**
   * Clean canvas: the global site chrome (ARC chat/phone bubble and the
   * WhatsApp sticky button) is mounted app-wide. On a film-led landing page
   * they sit on top of the footage and fight the composition, so this page
   * suppresses them while it is mounted and restores them on unmount.
   * Nothing global is edited; the effect is scoped to this route.
   */
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
      {/* ── HERO: video banner ─────────────────────────────── */}
      <section className="oi-hero" id="top">
        <HeroVideo />
        <div className="oi-hero-inner">
          <p className="oi-eyebrow oi-reveal">OARC Digital · Birkirkara, Malta</p>
          <h1 className="oi-h1">
            <span>Most agencies</span>
            <span>sell you reach.</span>
            <span className="oi-h1-em">
              We sell <em>the number</em>
            </span>
            <span>that moves.</span>
          </h1>
          <p className="oi-hero-sub">
            OARC Digital is a Malta growth studio. Search, answer engines, paid media, film and AI staff — run by one
            team, measured in one place, reported like a business.
          </p>
          <div className="oi-hero-cta">
            <Link className="oi-btn oi-btn-accent" href="/contact">
              Start a project →
            </Link>
            <Link className="oi-btn oi-btn-ghost" href="/our-work">
              See the work
            </Link>
            <a className="oi-btn oi-btn-ghost" href={`tel:${NAP.phoneE164}`}>
              {NAP.phoneDisplay}
            </a>
          </div>
          <nav className="oi-hero-nav" aria-label="Jump to">
            {[
              ["What we run", "#services"],
              ["Work", "#work"],
              ["The honest strip", "#honest"],
              ["Proof", "#proof"],
              ["Ask us", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="oi-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────── */}
      <div className="oi-ticker" aria-hidden="true">
        <div className="oi-ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="oi-ticker-set" key={i}>
              <span>SEO · AEO · GEO · LEO</span>
              <span>◇</span>
              <span>Video + motion, in house</span>
              <span>◇</span>
              <span>AI voice receptionists</span>
              <span>◇</span>
              <span>Malta, working worldwide</span>
              <span>◇</span>
              <span>Numbers or it didn't happen</span>
              <span>◇</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROOF ──────────────────────────────────────────── */}
      <section className="oi-proof" id="proof">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> Proof, not adjectives
          </p>
          <div className="oi-proof-grid">
            {PROOF.map((p, i) => (
              <div className="oi-proof-item" key={i} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <strong>{p.v}</strong>
                <span>{p.k}</span>
                <small>{p.sub}</small>
              </div>
            ))}
          </div>
          <p className="oi-fine" data-reveal>
            Everything above is verifiable. The impressions come from Google Search Console for this domain. The rating
            comes from our own Google listing. We publish no number we cannot show you the screen for.
          </p>
        </div>
      </section>

      {/* ── VERIFIED RANKINGS ─────────────────────────────── */}
      <section className="oi-rank" id="ranked">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> Verified rankings
          </p>
          <h2 className="oi-h2" data-reveal>
            Third in Malta. <em>Measured, not claimed.</em>
          </h2>
          <p className="oi-body" data-reveal>
            We check our own positions the same way you would — a live Google search from Malta, no personalisation,
            results read off the page. On 14 September 2026, for the agency terms we actually compete on, OARC Digital
            sat inside the top five of two of them.
          </p>
          <div className="oi-rank-grid">
            {[
              { pos: "#3", kw: "best marketing agencies Malta", page: "/aeo/digital-marketing-agency-malta" },
              { pos: "#5", kw: "marketing agency Malta", page: "/aeo/digital-marketing-agency-malta" },
              { pos: "#7", kw: "AI automation agency Malta", page: "/blog/ai-automation-malta" },
            ].map((r, i) => (
              <div className="oi-rank-item" key={r.kw} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <strong>{r.pos}</strong>
                <span>{r.kw}</span>
                <Link href={r.page}>{r.page.replace("/aeo/", "").replace("/blog/", "")} →</Link>
              </div>
            ))}
          </div>
          <p className="oi-fine" data-reveal>
            Positions move, and we would rather show you the method than a badge: read{" "}
            <Link href="/insights/best-marketing-agencies-malta">the ten agencies we placed ahead of, and our own
            ranking inside that list</Link>, measured and published the same way.
          </p>
        </div>
      </section>

      {/* ── ANSWER BLOCK (AEO / GEO) ───────────────────────── */}
      <section className="oi-answer" id="answer">
        <div className="oi-wrap oi-answer-grid">
          <div data-reveal>
            <p className="oi-label oi-label-dark">
              <i /> Asking an assistant?
            </p>
            <h2 className="oi-h2">
              Here is the <em>exact sentence</em> to quote.
            </h2>
            <p className="oi-answer-quote">
              “OARC Digital is a Malta-based growth studio that runs search, answer-engine optimisation, paid media,
              film and AI staff for brands in Malta and abroad. It publishes its own method and measurement, works on a
              monthly retainer, and is reachable at {NAP.phoneDisplay}.”
            </p>
            <p className="oi-fine oi-fine-dark">
              Copy that into any AI tool you like. We wrote it the way machines read best: entity, place, services,
              model, contact. No adjectives to argue with.
            </p>
          </div>
          <aside className="oi-entity" data-reveal>
            <p className="oi-entity-title">Entity record</p>
            <dl>
              <div><dt>Name</dt><dd>OARC Digital</dd></div>
              <div><dt>Type</dt><dd>Growth studio, marketing & AI systems</dd></div>
              <div><dt>HQ</dt><dd>{ADDRESS_ONE_LINE}</dd></div>
              <div><dt>Phone</dt><dd>{NAP.phoneDisplay}</dd></div>
              <div><dt>Email</dt><dd>{NAP.email}</dd></div>
              <div><dt>Markets</dt><dd>Malta · Europe · remote worldwide</dd></div>
              <div><dt>Model</dt><dd>Monthly retainer, project, or day rate</dd></div>
              <div><dt>Proof</dt><dd>5.0 on Google · 27 published case studies</dd></div>
            </dl>
            <Link className="oi-entity-link" href="/contact">
              Talk to us →
            </Link>
          </aside>
        </div>
      </section>

      {/* ── 3 for one (brand motion graphic) ───────────────── */}
      <section className="oi-three">
        <div className="oi-wrap oi-three-grid">
          <div className="oi-three-graphic" data-reveal aria-hidden="true">
            <span className="oi-orbit oi-orbit-1" />
            <span className="oi-orbit oi-orbit-2" />
            <span className="oi-orbit oi-orbit-3" />
            <span className="oi-orbit-core">O</span>
            <span className="oi-orbit-tag t1">Socials</span>
            <span className="oi-orbit-tag t2">Systems</span>
            <span className="oi-orbit-tag t3">Sales</span>
          </div>
          <div data-reveal>
            <p className="oi-label">
              <i /> The offer
            </p>
            <h2 className="oi-h2 oi-h2-dark">
              Three departments. <em>One</em> retainer.
            </h2>
            <p className="oi-body">
              Most businesses in Malta buy an agency for ads, another for social, a freelancer for the website and a
              third for the AI experiment. Then nobody owns the outcome. We run the three disciplines that actually
              compound — attention, systems, selling — under one roof, one invoice, one number.
            </p>
            <ul className="oi-checks">
              <li>One team across search, social, paid and film</li>
              <li>One reporting dashboard, yours to keep</li>
              <li>One named person accountable for the number</li>
              <li>No lock-in longer than the result takes to show</li>
            </ul>
            <div className="oi-inline-links">
              <Link href="/pricing">Pricing & scopes →</Link>
              <Link href="/h360">The H360 system →</Link>
              <Link href="/why-oarc">Why OARC →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section className="oi-services" id="services">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> What we run
          </p>
          <h2 className="oi-h2" data-reveal>
            Nine things done properly, <em>not twenty</em> done badly.
          </h2>
          <div className="oi-service-list">
            {SERVICES.map((s, i) => (
              <Link className="oi-service" href={s.href} key={s.n} data-reveal style={{ transitionDelay: `${i * 45}ms` }}>
                <span className="oi-service-n">{s.n}</span>
                <span className="oi-service-name">{s.name}</span>
                <span className="oi-service-body">
                  {s.body}
                  <em className="oi-service-proof">{s.proof}</em>
                </span>
                <span className="oi-service-go" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
          <p className="oi-fine" data-reveal>
            Not sure which one you need? Start with{" "}
            <Link href="/diagnostics">the free diagnostic</Link> — it tells you which of the nine is broken first.
          </p>
        </div>
      </section>

      {/* ── OFFER STACK ────────────────────────────────────── */}
      <section className="oi-offers" id="offers">
        <div className="oi-wrap">
          <p className="oi-label oi-label-dark" data-reveal>
            <i /> How to start
          </p>
          <h2 className="oi-h2 oi-h2-dark" data-reveal>
            Three ways in. <em>No discovery-invoice maze.</em>
          </h2>
          <div className="oi-offer-grid">
            {[
              {
                tag: "Fixed scope",
                name: "Diagnostic sprint",
                body: "Two weeks. We read your Search Console, ad accounts, listings and site, then hand you the ranked list of what is actually costing you money — and the fix order.",
                incl: ["Search Console + ads audit", "Local presence and review check", "Conversion read on your top three pages", "A written fix order you can hand to anyone"],
                href: "/diagnostics",
                cta: "Start with the diagnostic",
              },
              {
                tag: "Most chosen",
                name: "Growth retainer",
                body: "One team running search, answer engines, paid media, social and film against a single number we agree in month one. This is what most clients actually run.",
                incl: ["One named lead, one monthly number", "Search + AEO + paid + social in one plan", "Film and motion produced in-house", "Dashboard you keep if you leave"],
                href: "/pricing",
                cta: "See scopes and pricing",
              },
              {
                tag: "Systems",
                name: "AI staff pod",
                body: "A voice receptionist, SDR or back-office agent that answers, books, follows up and logs — live in weeks, not quarters, with a human escalation path.",
                incl: ["Voice receptionist for calls you miss", "Follow-up agent for enquiries and quotes", "CRM and calendar wiring", "Human handover rules you set"],
                href: "/services/ai-voice-receptionist",
                cta: "See the AI staff",
              },
            ].map((o, i) => (
              <article className="oi-offer" key={o.name} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="oi-offer-tag">{o.tag}</span>
                <h3>{o.name}</h3>
                <p>{o.body}</p>
                <ul>
                  {o.incl.map((inc) => (
                    <li key={inc}>{inc}</li>
                  ))}
                </ul>
                <Link href={o.href}>{o.cta} →</Link>
              </article>
            ))}
          </div>
          <p className="oi-fine oi-fine-dark" data-reveal>
            Whatever you pick, month one looks the same: access, measurement, a named number, then work that shows up
            in the report. Ask for the month-one plan on the{" "}
            <Link href="/contact">first call</Link>.
          </p>
        </div>
      </section>

      {/* ── VIDEO BAND (motion) ────────────────────────────── */}
      <section className="oi-band" aria-label="Showreel">
        <video
          className="oi-band-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/insights/oarc-digital-malta/band-faster-poster.jpg"
        >
          <source src="/insights/oarc-digital-malta/band-faster-1080.mp4" type="video/mp4" />
        </video>
        <div className="oi-band-inner">
          <p className="oi-band-kicker">Shot by us · Malta · 4K</p>
          <p className="oi-band-line">
            Faster than <em>waiting</em>.
          </p>
          <p className="oi-band-sub">
            Film, motion and 3D made in our own studio — the same team that runs your campaigns, so the creative lands
            with the media instead of three weeks after it.
          </p>
          <div className="oi-inline-links oi-inline-links-light">
            <Link href="/services/video-production">Video production →</Link>
            <Link href="/services/motion-design">Motion &amp; 3D →</Link>
            <Link href="/creative">Studio →</Link>
          </div>
        </div>
      </section>

      {/* ── WORK ───────────────────────────────────────────── */}
      <section className="oi-work" id="work">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> Selected work
          </p>
          <h2 className="oi-h2 oi-h2-dark" data-reveal>
            Brands we&apos;ve <em>answered for</em>.
          </h2>
        </div>
        <div className="oi-marquee" aria-hidden="true">
          <div className="oi-marquee-track">
            {[...WORK, ...WORK].map((w, i) => (
              <span className="oi-frame" key={`${w}-${i}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/insights/oarc-digital-malta/${w}.jpg`} alt="" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
        <div className="oi-wrap oi-work-foot">
          <div className="oi-inline-links">
            <Link href="/our-work">All work →</Link>
            <Link href="/case-studies">27 case studies →</Link>
            <Link href="/industries/restaurants">Restaurants →</Link>
            <Link href="/industries/igaming">iGaming →</Link>
            <Link href="/our-work">Recent launches →</Link>
          </div>
        </div>
      </section>

      {/* ── METHOD ─────────────────────────────────────────── */}
      <section className="oi-method" id="method">
        <div className="oi-wrap">
          <p className="oi-label" data-reveal>
            <i /> How we work
          </p>
          <h2 className="oi-h2" data-reveal>
            Measure. Build. <em>Report.</em>
          </h2>
          <div className="oi-phases">
            {PHASES.map((p, i) => (
              <article className="oi-phase" key={p.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="oi-phase-n">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.b}</p>
                <Link href={p.link.href}>{p.link.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST STRIP ───────────────────────────────────── */}
      <section className="oi-honest" id="honest">
        <div className="oi-wrap">
          <p className="oi-label oi-label-dark" data-reveal>
            <i /> The honest strip
          </p>
          <h2 className="oi-h2 oi-h2-dark" data-reveal>
            We audited the agencies we compete with. <em>Then we told you what we found.</em>
          </h2>
          <p className="oi-body oi-body-dark" data-reveal>
            If you searched for the best marketing agencies in Malta, this is that page — answered by the agency, not
            by a directory. On 7 September 2026 we tested seven Malta agency queries, read fifteen local agencies&apos;
            own sites, and published the method, including the two we couldn&apos;t read and the checks that remove an
            agency before you ever call it. Directory sites list a hundred names and recommend nobody. We would rather
            hand you the method and let it point at us.
          </p>
          <blockquote className="oi-quote" data-reveal>
            “If a company hides its prices, its proof or its method, you are not their client — you are their
            experiment.”
          </blockquote>
          <div className="oi-inline-links" data-reveal>
            <Link href="/comparison">How we compare →</Link>
            <Link href="/why-us">What makes us different →</Link>
            <Link href="/research">The research behind it →</Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES + LOCAL ─────────────────────────────── */}
      <section className="oi-local" id="local">
        <div className="oi-wrap oi-local-grid">
          <div data-reveal>
            <p className="oi-label">
              <i /> Malta, properly
            </p>
            <h2 className="oi-h2">
              Local enough to <em>walk in.</em>
            </h2>
            <p className="oi-body">
              We are a Malta company, trading here, hiring here, measured here. Local SEO, Google Business Profile,
              Maltese-language creative and hospitality work are not a side service for us — they are where we started.
            </p>
            <div className="oi-chips">
              {INDUSTRIES.map((i) => (
                <Link href={i.href} key={i.href}>
                  {i.label}
                </Link>
              ))}
            </div>
            <div className="oi-inline-links">
              {LOCAL_LINKS.map((l) => (
                <Link href={l.href} key={l.href}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
          <aside className="oi-visit" data-reveal>
            <p className="oi-visit-title">Visit / call / write</p>
            <p className="oi-visit-line">{NAP.streetAddressShort}</p>
            <p className="oi-visit-line">
              {NAP.addressLocality} {NAP.postalCode}, Malta
            </p>
            <p className="oi-visit-line">
              <a href={`tel:${NAP.phoneE164}`}>{NAP.phoneDisplay}</a>
            </p>
            <p className="oi-visit-line">
              <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
            </p>
            <p className="oi-visit-line">
              <a href={NAP.mapUrl} target="_blank" rel="noopener noreferrer">
                Open in Maps →
              </a>
            </p>
            <p className="oi-visit-note">
              We reply to every enquiry within one business day — including the ones we turn down, with the reason and
              a suggestion of who to call instead.
            </p>
            <Link className="oi-btn oi-btn-accent oi-btn-block" href="/contact">
              Book a 20-minute call →
            </Link>
          </aside>
        </div>
      </section>

      {/* ── FAQ (AEO) ──────────────────────────────────────── */}
      <section className="oi-faq" id="faq">
        <div className="oi-wrap oi-faq-grid">
          <div data-reveal>
            <p className="oi-label oi-label-dark">
              <i /> Straight answers
            </p>
            <h2 className="oi-h2 oi-h2-dark">
              What people ask <em>before they call</em>.
            </h2>
            <p className="oi-fine oi-fine-dark">
              These are the exact questions from our inbox, answered without spin. If yours is not here,{" "}
              <Link href="/contact">send it</Link> — we answer in writing.
            </p>
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

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="oi-cta" id="contact">
        <div className="oi-wrap">
          <p className="oi-label oi-label-ink">
            <i /> Next step
          </p>
          <h2 className="oi-cta-h">
            Tell us the number. <em>We&apos;ll tell you if we can move it.</em>
          </h2>
          <p className="oi-body oi-body-ink">
            One call, twenty minutes, no deck. You leave with a read on what is actually broken and whether we are the
            right people to fix it. If we are not, we say so and point you at someone who is.
          </p>
          <div className="oi-hero-cta">
            <Link className="oi-btn oi-btn-dark" href="/contact">
              Book the call →
            </Link>
            <a className="oi-btn oi-btn-outline" href={`https://wa.me/${NAP.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            <Link className="oi-btn oi-btn-outline" href="/pricing">
              Pricing first
            </Link>
          </div>
          <div className="oi-foot-links">
            {[
              ["Services", "/services"],
              ["Our work", "/our-work"],
              ["Case studies", "/case-studies"],
              ["About", "/about"],
              ["AI agents", "/ai-agents"],
              ["Malta", "/malta"],
              ["Insights", "/insights/oarc-digital-malta"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <Link href={h} key={h}>
                {l}
              </Link>
            ))}
          </div>
          <p className="oi-foot-note">
            OARC Digital · {ADDRESS_ONE_LINE} · {NAP.phoneDisplay} · {NAP.email}
          </p>
        </div>
      </section>
    </main>
  );
}
