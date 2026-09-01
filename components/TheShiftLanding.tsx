"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Scene = {
  time: string;
  industry: string;
  slug: string;
  headline: string;
  body: string;
  mode: "call" | "timeline" | "briefing" | "board";
  lines: string[];
};

const scenes: Scene[] = [
  {
    time: "00:12",
    industry: "Hospitality",
    slug: "hospitality",
    headline: "A guest calls at midnight. The answer is already ready.",
    body: "A late-night request is answered, the context is captured, and the next action is queued without waking the team.",
    mode: "call",
    lines: [
      "Inbound · after hours · language recognised",
      "Guest context matched · stay history available",
      "Request answered · next action prepared",
      "Team note written · morning handoff scheduled",
    ],
  },
  {
    time: "03:10",
    industry: "Logistics",
    slug: "logistics",
    headline: "An exception appears. It does not become a fire.",
    body: "The operator finds the affected work, prepares the updates, and leaves the human team with the decision that actually needs them.",
    mode: "timeline",
    lines: [
      "03:10 — exception detected · affected work mapped",
      "03:14 — customer updates prepared",
      "03:31 — priority cases routed to owner",
      "03:47 — clearance document requested",
    ],
  },
  {
    time: "08:00",
    industry: "Every business",
    slug: "operator",
    headline: "It calls you. Two minutes. The whole business.",
    body: "What happened overnight, what needs a decision, and where the next opportunity sits — condensed into a useful morning briefing.",
    mode: "briefing",
    lines: [
      "Calling owner · 08:00 · daily briefing",
      "Overnight: handled, closed, and waiting",
      "Needs you: decisions queued with context",
      "Next move: mission ready for approval",
    ],
  },
  {
    time: "09:12",
    industry: "Home services",
    slug: "home-services",
    headline: "The quote went quiet. The follow-up does not.",
    body: "A warm lead gets a timely, useful answer while the team is doing the work — then the next appointment is prepared.",
    mode: "call",
    lines: [
      "Outbound · quote follow-up · context loaded",
      "Question identified · answer prepared",
      "Appointment request captured",
      "Reminder set · owner briefed",
    ],
  },
  {
    time: "14:20",
    industry: "Real estate",
    slug: "real-estate",
    headline: "A renewal is due. The conversation starts early.",
    body: "The operator watches the important dates, prepares the right conversation, and keeps the relationship moving before it becomes urgent.",
    mode: "board",
    lines: [
      "Lease · expiry approaching · renewal task opened",
      "Buyer context matched · last touch reviewed",
      "Relevant property surfaced",
      "Agent briefed · next step queued",
    ],
  },
  {
    time: "22:40",
    industry: "Sales",
    slug: "sales",
    headline: "A lead lands. The response starts in seconds.",
    body: "The enquiry is qualified against the real criteria, the history is found, and the right person receives a useful brief.",
    mode: "call",
    lines: [
      "Inbound lead · 22:40 · response initiated",
      "Company matched · previous context found",
      "Qualification complete · timing understood",
      "Meeting request prepared · CRM updated",
    ],
  },
];

const industries = [
  ["01", "Hospitality & travel", "hospitality"],
  ["02", "Sales & revenue", "sales"],
  ["03", "Healthcare & dental", "healthcare"],
  ["04", "Finance & insurance", "finance-insurance"],
  ["05", "Real estate & property", "real-estate"],
  ["06", "Legal", "legal"],
  ["07", "Logistics & maritime", "logistics"],
  ["08", "Home services & auto", "home-services"],
  ["09", "Education & enrolment", "education"],
  ["10", "Government & citizen services", "government"],
] as const;

const comparisonRows: readonly [string, boolean, boolean][] = [
  ["Works across the day, not just office hours", true, false],
  ["Makes outbound moves, not just replies", true, false],
  ["Works inside the systems already in use", true, false],
  ["Leaves a clear handoff when a human decision is needed", true, false],
  ["Gets more useful as it learns the business", true, false],
];

const proofImages = [
  {
    src: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    label: "Hospitality",
    title: "Context that travels with the work.",
  },
  {
    src: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    label: "Experience",
    title: "A better response is a better experience.",
  },
  {
    src: "/attached_assets/premium-work/pjazza-food_b3085783.jpg",
    label: "Commerce",
    title: "Useful action, close to the moment.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(true);
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`shift-reveal ${ready ? (visible ? "is-visible" : "is-pending") : ""} ${className}`}
      style={{ "--shift-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function Simulation({
  scene,
  active,
}: {
  scene: Scene;
  active: boolean;
}) {
  const [shown, setShown] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setShown(scene.lines.length);
      return;
    }
    if (!active) {
      setShown(0);
      return;
    }
    setShown(1);
    let index = 1;
    const interval = window.setInterval(() => {
      index += 1;
      setShown(index);
      if (index >= scene.lines.length) window.clearInterval(interval);
    }, 650);
    return () => window.clearInterval(interval);
  }, [active, reducedMotion, scene.lines.length]);

  return (
    <div className="shift-sim" aria-label={`Live ${scene.industry} operator simulation`} role="img">
      <div className="shift-sim__top">
        <span className="shift-sim__live"><i /> OPERATOR · LIVE</span>
        <span>{scene.mode.toUpperCase()}</span>
      </div>
      {(scene.mode === "call" || scene.mode === "briefing") && (
        <div className="shift-wave" aria-hidden="true">
          {Array.from({ length: 32 }).map((_, index) => (
            <span
              key={index}
              style={{ animationDelay: `${(index % 8) * 90}ms`, animationPlayState: active && !reducedMotion ? "running" : "paused" }}
            />
          ))}
        </div>
      )}
      <div className="shift-sim__log">
        {scene.lines.map((line, index) => (
          <div className={`shift-sim__line ${index < shown ? "is-on" : ""} ${index === shown - 1 ? "is-latest" : ""}`} key={line}>
            <span>{index < shown ? "▸" : "·"}</span>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShiftWorkday() {
  const sectionRef = useRef<HTMLElement>(null);
  const [clock, setClock] = useState("00:00");
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const updateClock = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const minutes = Math.round(progress * 24 * 60);
      const hours = String(Math.floor(minutes / 60) % 24).padStart(2, "0");
      const mins = String(minutes % 60).padStart(2, "0");
      setClock(`${hours}:${mins}`);
    };
    updateClock();
    window.addEventListener("scroll", updateClock, { passive: true });
    return () => window.removeEventListener("scroll", updateClock);
  }, []);

  return (
    <section ref={sectionRef} id="shift" className="shift-day">
      <div className="shift-clock" aria-hidden="true"><i /> {clock}</div>
      <div className="shift-wrap shift-day__intro">
        <Reveal>
          <p className="shift-kicker">One operator · one working day</p>
          <h2>Scroll through the work.<br /><em>Not the promise.</em></h2>
        </Reveal>
      </div>
      <div className="shift-scenes">
        {scenes.map((scene, index) => (
          <div
            className="shift-scene shift-wrap"
            key={scene.time}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            ref={(element) => {
              if (!element) return;
              const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setActiveIndex(index),
                { threshold: 0.45 },
              );
              observer.observe(element);
            }}
          >
            <div className={`shift-scene__grid ${index % 2 === 1 ? "is-flipped" : ""}`}>
              <Reveal className="shift-scene__copy">
                <p className="shift-time"><span>{scene.time}</span> — {scene.industry}</p>
                <h3>{scene.headline}</h3>
                <p className="shift-muted">{scene.body}</p>
                <Link href={`/industries/${scene.slug}`} className="shift-text-link">Open {scene.industry} <span>↗</span></Link>
              </Reveal>
              <Reveal className="shift-scene__visual" delay={120}>
                <Simulation scene={scene} active={activeIndex === index} />
              </Reveal>
            </div>
          </div>
        ))}
      </div>
      <div className="shift-wrap shift-day__close">
        <Reveal>
          <p>It does not replace the people who know the business. It makes sure the important work does not wait for them to remember it.</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function TheShiftLanding() {
  return (
    <div className="shift-page">
      <main>
        <section className="shift-hero">
          <div className="shift-hero__film" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="/media/hero/hero-customers-poster-v2.jpg">
              <source src="/media/hero/hero-customers-v2.mp4" type="video/mp4" />
            </video>
            <div className="shift-hero__veil" />
          </div>
          <div className="shift-wrap shift-hero__content">
            <Reveal>
              <p className="shift-kicker shift-kicker--light">OARC Digital · Malta · Europe</p>
            </Reveal>
            <h1>
              <Reveal delay={60}><span>It&apos;s not</span></Reveal>
              <Reveal delay={140}><span>software.</span></Reveal>
              <Reveal delay={220}><span className="is-outline">It&apos;s an</span></Reveal>
              <Reveal delay={300}><span className="is-signal">operator.</span></Reveal>
            </h1>
            <div className="shift-hero__footer">
              <Reveal delay={420}>
                <p>An AI-native operator that works across the moments your team cannot always be there for — inside the systems you already use.</p>
              </Reveal>
              <Reveal delay={520} className="shift-hero__actions">
                <a href="#shift" className="shift-button shift-button--signal">Watch the shift <span>↓</span></a>
                <Link href="/contact" className="shift-button">Give it a mission <span>↗</span></Link>
              </Reveal>
            </div>
          </div>
          <div className="shift-hero__marquee" aria-hidden="true">
            <div>
              <span>ITS OWN PHONE</span><b>●</b><span>ITS OWN EMAIL</span><b>●</b><span>ITS OWN VOICE</span><b>●</b><span>IT WORKS WITH YOUR TEAM</span><b>●</b><span>IT OWNS OUTCOMES</span><b>●</b>
              <span>ITS OWN PHONE</span><b>●</b><span>ITS OWN EMAIL</span><b>●</b><span>ITS OWN VOICE</span><b>●</b><span>IT WORKS WITH YOUR TEAM</span><b>●</b>
            </div>
          </div>
        </section>

        <ShiftWorkday />

        <section className="shift-industries">
          <div className="shift-wrap">
            <Reveal>
              <p className="shift-kicker">Ten industries · one intelligence</p>
              <h2>Find your<br /><em>operator.</em></h2>
            </Reveal>
            <div className="shift-industry-list">
              {industries.map(([index, name, slug]) => (
                <Reveal key={slug} delay={Number(index) * 24}>
                  <Link href={`/industries/${slug}`} className="shift-industry-row">
                    <span className="shift-industry-row__index">{index}</span>
                    <strong>{name}</strong>
                    <span className="shift-industry-row__arrow">↗</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="shift-proof">
          <div className="shift-wrap">
            <Reveal>
              <p className="shift-kicker">Made for the real world</p>
              <h2>The operator belongs<br />where the work <em>happens.</em></h2>
            </Reveal>
            <div className="shift-proof__grid">
              {proofImages.map((image, index) => (
                <Reveal key={image.src} delay={index * 80} className={`shift-proof-card shift-proof-card--${index + 1}`}>
                  <div className="shift-proof-card__image"><img src={image.src} alt="" loading="lazy" /></div>
                  <p className="shift-proof-card__label">{image.label}</p>
                  <h3>{image.title}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="shift-comparison">
          <div className="shift-wrap">
            <Reveal>
              <p className="shift-kicker">The useful difference</p>
              <h2>Not another tool<br /><em>to manage.</em></h2>
            </Reveal>
            <div className="shift-table">
              <div className="shift-table__head"><span>What it does</span><strong>The operator</strong><span>Another tool</span></div>
              {comparisonRows.map(([label, operator, tool]) => (
                <div className="shift-table__row" key={label}>
                  <span>{label}</span>
                  <strong>{operator ? "●" : "—"}</strong>
                  <span>{tool ? "●" : "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shift-statement">
          <div className="shift-wrap">
            <Reveal><p>Software depreciates.<br /><em>This compounds.</em></p></Reveal>
          </div>
        </section>

        <section className="shift-start">
          <div className="shift-wrap shift-start__inner">
            <Reveal>
              <p className="shift-kicker shift-kicker--light">Start with one mission</p>
              <h2>Give it a problem<br />worth <em>solving.</em></h2>
              <p className="shift-start__body">Show us the moment that keeps falling through the cracks. We will map the work, build the operator, and prove the first mission before anything else.</p>
              <Link href="/contact" className="shift-button shift-button--signal">Start a conversation <span>↗</span></Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}