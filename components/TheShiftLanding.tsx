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
    headline: "A guest calls late. It answers.",
    body: "The guest gets help right away. The team sees a clear note in the morning.",
    mode: "call",
    lines: [
      "New call · late at night",
      "Guest details found",
      "Question answered",
      "Team note saved for morning",
    ],
  },
  {
    time: "03:10",
    industry: "Logistics",
    slug: "logistics",
    headline: "A delivery has a problem. It finds it.",
    body: "It shows the right person what happened and what needs to happen next.",
    mode: "timeline",
    lines: [
      "03:10 — delivery problem found",
      "03:14 — customer message ready",
      "03:31 — right person told",
      "03:47 — missing document requested",
    ],
  },
  {
    time: "08:00",
    industry: "Every team",
    slug: "operator",
    headline: "It gives you the morning update.",
    body: "You hear what happened, what needs your help, and what can wait.",
    mode: "briefing",
    lines: [
      "Morning update ready",
      "Handled overnight",
      "Needs your decision",
      "Next step ready",
    ],
  },
  {
    time: "09:12",
    industry: "Home services",
    slug: "home-services",
    headline: "A customer goes quiet. It follows up.",
    body: "It sends a helpful message while the team is busy, then gets the next appointment ready.",
    mode: "call",
    lines: [
      "Follow-up needed",
      "Helpful answer ready",
      "Appointment request saved",
      "Reminder set for the team",
    ],
  },
  {
    time: "14:20",
    industry: "Real estate",
    slug: "real-estate",
    headline: "An important date is near. It reminds you.",
    body: "It spots the date, prepares a message, and gives the team time to act.",
    mode: "board",
    lines: [
      "Important date coming soon",
      "Past messages checked",
      "Right property found",
      "Team told what to do next",
    ],
  },
  {
    time: "22:40",
    industry: "Sales",
    slug: "sales",
    headline: "A new customer writes. It replies quickly.",
    body: "It finds the important details and gives the right person a useful summary.",
    mode: "call",
    lines: [
      "New customer message",
      "Past messages found",
      "What they need understood",
      "Meeting request ready",
    ],
  },
];

const industries = [
  ["01", "Hotels & travel", "hospitality"],
  ["02", "Sales", "sales"],
  ["03", "Doctors & dentists", "healthcare"],
  ["04", "Money & insurance", "finance-insurance"],
  ["05", "Homes & property", "real-estate"],
  ["06", "Legal", "legal"],
  ["07", "Shipping & delivery", "logistics"],
  ["08", "Home repairs & cars", "home-services"],
  ["09", "Schools", "education"],
  ["10", "Public services", "government"],
] as const;

const comparisonRows: readonly [string, boolean, boolean][] = [
  ["Works after office hours", true, false],
  ["Can send messages and follow up", true, false],
  ["Works with the tools you already use", true, false],
  ["Tells a person when help is needed", true, false],
  ["Gets better at your way of working", true, false],
];

const proofImages = [
  {
    src: "/attached_assets/premium-work/client-media/tiffany-hero.jpg",
    label: "Hospitality",
  title: "Keeps the right details together.",
  },
  {
    src: "/attached_assets/premium-work/client-media/portomaso-entrance.jpg",
    label: "Experience",
  title: "Helps people get answers faster.",
  },
  {
    src: "/attached_assets/premium-work/pjazza-food_b3085783.jpg",
    label: "Commerce",
  title: "Acts while the moment still matters.",
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
    <div className="shift-sim" aria-label={`Example of how the helper works for ${scene.industry}`} role="img">
      <div className="shift-sim__top">
        <span className="shift-sim__live"><i /> HELPER · LIVE</span>
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
          <p className="shift-kicker">One helper · one working day</p>
          <h2>See the helper<br /><em>at work.</em></h2>
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
                <Link href={`/industries/${scene.slug}`} className="shift-text-link">See {scene.industry} <span>↗</span></Link>
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
          <p>It does not replace your team. It takes care of repeat work so people can focus on bigger decisions.</p>
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
              <Reveal delay={140}><span>just software.</span></Reveal>
              <Reveal delay={220}><span className="is-outline">It&apos;s a</span></Reveal>
              <Reveal delay={300}><span className="is-signal">helper.</span></Reveal>
            </h1>
            <div className="shift-hero__footer">
              <Reveal delay={420}>
                <p>A digital helper that works all day, talks to customers, and helps your team get important jobs done.</p>
              </Reveal>
              <Reveal delay={520} className="shift-hero__actions">
                <a href="#shift" className="shift-button shift-button--signal">See how it works <span>↓</span></a>
                <Link href="/contact" className="shift-button">Tell us what you need <span>↗</span></Link>
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
              <p className="shift-kicker">One helper · many kinds of work</p>
              <h2>Where could<br />it <em>help?</em></h2>
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
              <p className="shift-kicker">Built for real work</p>
              <h2>The helper goes<br />where the work <em>happens.</em></h2>
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
              <p className="shift-kicker">Why it helps</p>
              <h2>More than a tool<br /><em>on a screen.</em></h2>
            </Reveal>
            <div className="shift-table">
              <div className="shift-table__head"><span>What it can do</span><strong>This helper</strong><span>A usual tool</span></div>
              {comparisonRows.map(([label, isHelper, tool]) => (
                <div className="shift-table__row" key={label}>
                  <span>{label}</span>
                  <strong>{isHelper ? "●" : "—"}</strong>
                  <span>{tool ? "●" : "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shift-statement">
          <div className="shift-wrap">
            <Reveal><p>It learns your way of working.<br /><em>It gets more helpful.</em></p></Reveal>
          </div>
        </section>

        <section className="shift-start">
          <div className="shift-wrap shift-start__inner">
            <Reveal>
              <p className="shift-kicker shift-kicker--light">Start with one job</p>
              <h2>Give it one problem<br />to <em>solve.</em></h2>
              <p className="shift-start__body">Tell us about a job that gets missed or takes too much time. We will show you how the helper can take it on.</p>
              <Link href="/contact" className="shift-button shift-button--signal">Tell us the problem <span>↗</span></Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}