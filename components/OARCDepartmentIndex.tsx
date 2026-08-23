"use client";

import { useState } from "react";
import DepartmentDetailModal from "./DepartmentDetailModal";

type Department = {
  name: string;
  statement: string;
  key: string;
  href: string;
  signals: string[];
};

/*
 * One visual language, not 16 mini designs.
 * The department detail modals remain exactly as they are; this component is
 * their calmer, tactile front door.
 */
const DEPARTMENTS: Department[] = [
  { name: "Growth", statement: "Bring me more customers.", key: "Growth", href: "/services/growth", signals: ["Find", "Pick", "Return"] },
  { name: "AI Staff", statement: "Pick your employee.", key: "AI Staff", href: "/services/ai-staff", signals: ["Sales", "Support", "Bookings"] },
  { name: "Creative", statement: "Make us worth more.", key: "Creative", href: "/services/creative", signals: ["Campaigns", "Content", "Identity"] },
  { name: "Reputation", statement: "Make me famous.", key: "Reputation", href: "/services/reputation", signals: ["Press", "Creators", "Stories"] },
  { name: "Sales", statement: "Close more sales.", key: "Sales", href: "/services/sales", signals: ["Offers", "Pipeline", "Proof"] },
  { name: "Enquiries", statement: "Turn enquiries into money.", key: "Enquiries", href: "/services/automation", signals: ["Reply", "Qualify", "Book"] },
  { name: "Social", statement: "Our powerhouse.", key: "Social", href: "/services/social", signals: ["Strategy", "Video", "Community"] },
  { name: "Media", statement: "Ad spend that pays.", key: "Media", href: "/services/media", signals: ["Meta", "Google", "Return"] },
  { name: "Brand", statement: "Creative and brand.", key: "Brand", href: "/services/brand", signals: ["Position", "Identity", "Voice"] },
  { name: "Operations", statement: "Take work off my plate.", key: "Operations", href: "/services/operations", signals: ["Time back", "Follow-up", "Flow"] },
  { name: "Clarity", statement: "Tell me what's working.", key: "Clarity", href: "/services/clarity", signals: ["Metrics", "Trace", "Decide"] },
  { name: "Automation", statement: "The business runs itself.", key: "Automation", href: "/services/automation", signals: ["CRM", "Payments", "Reports"] },
  { name: "Transformation", statement: "Change how it runs.", key: "Transformation", href: "/services/transformation", signals: ["Systems", "Guests", "Growth"] },
  { name: "Ship", statement: "We ship.", key: "Ship", href: "/h360", signals: ["Software", "Week one", "Own it"] },
  { name: "Products", statement: "We build, not advise.", key: "Products", href: "/h360", signals: ["H360", "Workforce", "People"] },
  { name: "Compare", statement: "Paper versus production.", key: "Compare", href: "/why-oarc", signals: ["Proof", "Platform", "Outcomes"] },
];

const TONES = ["paper", "green", "ink"] as const;

export default function OARCDepartmentIndex() {
  const [openDept, setOpenDept] = useState<string | null>(null);

  return (
    <section
      className="oarc-department-gallery"
      aria-label="OARC departments"
      data-testid="oarc-department-index"
    >
      <style>{`
        .oarc-department-gallery {
          --paper: #F2EFE9;
          --ink: #0E0D0C;
          --green: #0E5A3A;
          --line: rgba(14,13,12,.16);
          position: relative;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          padding: clamp(3.75rem, 7.5vw, 8rem) 0 clamp(4.5rem, 8vw, 9rem);
        }
        .oarc-department-gallery::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .035;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.78' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }
        .odg-head {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(180px, .75fr);
          gap: 2rem;
          align-items: end;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 4.5rem) clamp(2rem, 4vw, 3.75rem);
        }
        .odg-kicker {
          display: flex;
          align-items: center;
          gap: .7rem;
          margin: 0 0 1rem;
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 9px;
          line-height: 1;
          letter-spacing: .22em;
          text-transform: uppercase;
        }
        .odg-kicker::before { content: ""; width: 24px; height: 1px; background: var(--green); }
        .odg-title {
          max-width: 10ch;
          margin: 0;
          font-size: clamp(3.15rem, 7.6vw, 8.9rem);
          font-weight: 800;
          letter-spacing: -.07em;
          line-height: .82;
        }
        .odg-title em {
          color: var(--green);
          font-family: var(--font-instrument-serif, "Instrument Serif", serif);
          font-size: 1.06em;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -.05em;
        }
        .odg-note {
          max-width: 29ch;
          margin: 0 0 .25rem auto;
          color: rgba(14,13,12,.62);
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.35;
        }
        .odg-note span {
          display: block;
          margin-top: 1.25rem;
          color: var(--ink);
          font-family: var(--font-space-mono, "Space Mono", monospace);
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
        }
        .odg-rule { position: relative; z-index: 1; height: 1px; background: var(--line); margin: 0 clamp(1.25rem, 4vw, 4.5rem) clamp(1.15rem, 2vw, 1.5rem); }
        .odg-rail {
          position: relative;
          z-index: 1;
          display: flex;
          gap: clamp(.75rem, 1.4vw, 1.35rem);
          overflow-x: auto;
          overscroll-behavior-x: contain;
          scroll-snap-type: x mandatory;
          scroll-padding-left: clamp(1.25rem, 4vw, 4.5rem);
          padding: 0 clamp(1.25rem, 4vw, 4.5rem) 1rem;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          cursor: grab;
          touch-action: pan-x pan-y;
        }
        .odg-rail:active { cursor: grabbing; }
        .odg-rail::-webkit-scrollbar { display: none; }
        .odg-card {
          --card-bg: var(--paper);
          --card-fg: var(--ink);
          --card-line: rgba(14,13,12,.16);
          --card-muted: rgba(14,13,12,.56);
          --card-accent: var(--green);
          position: relative;
          isolation: isolate;
          flex: 0 0 clamp(275px, 27vw, 430px);
          min-height: clamp(390px, 36vw, 510px);
          scroll-snap-align: start;
          overflow: hidden;
          border: 1px solid var(--card-line);
          border-radius: 18px;
          background: var(--card-bg);
          color: var(--card-fg);
          padding: clamp(1.15rem, 2.1vw, 1.8rem);
          text-align: left;
          transition: transform 420ms cubic-bezier(.16,1,.3,1), box-shadow 420ms cubic-bezier(.16,1,.3,1);
          -webkit-tap-highlight-color: transparent;
        }
        .odg-card:hover { transform: translateY(-7px); box-shadow: 0 18px 35px rgba(14,13,12,.15); }
        .odg-card:focus-visible { outline: 3px solid var(--green); outline-offset: 4px; }
        .odg-card::after {
          content: attr(data-number);
          position: absolute;
          right: -0.07em;
          bottom: -.17em;
          z-index: -1;
          color: currentColor;
          font-size: clamp(8.5rem, 14vw, 14rem);
          font-weight: 800;
          letter-spacing: -.13em;
          line-height: .72;
          opacity: .055;
          pointer-events: none;
        }
        .odg-card--green { --card-bg: var(--green); --card-fg: var(--paper); --card-line: rgba(242,239,233,.17); --card-muted: rgba(242,239,233,.68); --card-accent: #C4FF4D; }
        .odg-card--ink { --card-bg: var(--ink); --card-fg: var(--paper); --card-line: rgba(242,239,233,.15); --card-muted: rgba(242,239,233,.62); --card-accent: #C4FF4D; }
        .odg-card-top { display: flex; align-items: center; justify-content: space-between; color: var(--card-muted); font-family: var(--font-space-mono, "Space Mono", monospace); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; }
        .odg-plus { display: grid; place-items: center; width: 25px; height: 25px; border: 1px solid var(--card-line); border-radius: 50%; color: var(--card-fg); font-family: Arial, sans-serif; font-size: 16px; font-weight: 300; transition: background 220ms, color 220ms, transform 320ms cubic-bezier(.16,1,.3,1); }
        .odg-card:hover .odg-plus { background: var(--card-accent); color: var(--ink); border-color: var(--card-accent); transform: rotate(90deg); }
        .odg-card-body { position: absolute; inset: auto clamp(1.15rem, 2.1vw, 1.8rem) clamp(1.15rem, 2.1vw, 1.8rem); }
        .odg-name { display: block; margin-bottom: .7rem; color: var(--card-accent); font-family: var(--font-space-mono, "Space Mono", monospace); font-size: 9px; letter-spacing: .22em; text-transform: uppercase; }
        .odg-statement { max-width: 9ch; margin: 0 0 1.35rem; font-size: clamp(2.15rem, 3.3vw, 3.7rem); font-weight: 800; letter-spacing: -.065em; line-height: .88; }
        .odg-signals { display: flex; flex-wrap: wrap; gap: .42rem .85rem; }
        .odg-signal { color: var(--card-muted); font-size: 11px; line-height: 1.2; }
        .odg-signal:not(:last-child)::after { content: "·"; margin-left: .85rem; color: var(--card-accent); }
        .odg-hint { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; max-width: 1600px; margin: .45rem auto 0; padding: 0 clamp(1.25rem, 4vw, 4.5rem); color: rgba(14,13,12,.48); font-family: var(--font-space-mono, "Space Mono", monospace); font-size: 9px; letter-spacing: .17em; text-transform: uppercase; }
        .odg-hint i { display: block; width: clamp(5rem, 13vw, 11rem); height: 1px; background: rgba(14,13,12,.22); }
        @media (max-width: 680px) {
          .oarc-department-gallery { padding-top: 3.5rem; }
          .odg-head { display: block; padding-bottom: 2.4rem; }
          .odg-title { max-width: 9ch; font-size: clamp(3.3rem, 17vw, 5.3rem); }
          .odg-note { max-width: 30ch; margin: 1.5rem 0 0; font-size: 1rem; }
          .odg-note span { margin-top: 1rem; }
          .odg-rail { gap: .75rem; padding-bottom: .8rem; }
          .odg-card { flex-basis: 82vw; min-height: 425px; border-radius: 15px; }
          .odg-statement { font-size: clamp(2.4rem, 11vw, 3.6rem); }
          .odg-hint { margin-top: .6rem; }
          .odg-hint span:last-child { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .odg-card, .odg-plus { transition: none; }
          .odg-card:hover { transform: none; }
        }
      `}</style>

      {/* Crawlable department routes remain available independently of the rail. */}
      <nav aria-label="Department pages" className="sr-only">
        {DEPARTMENTS.map((department) => (
          <a key={department.key} href={department.href}>
            {department.name} — {department.statement}
          </a>
        ))}
      </nav>

      <header className="odg-head">
        <div>
          <p className="odg-kicker">OARC / One team</p>
          <h2 className="odg-title">Every move.<br /><em>One direction.</em></h2>
        </div>
        <p className="odg-note">
          Start with the change your business needs next. Then pull the whole team behind it.
          <span>Swipe to explore →</span>
        </p>
      </header>

      <div className="odg-rule" aria-hidden="true" />

      <div className="odg-rail" aria-label="Browse OARC departments">
        {DEPARTMENTS.map((department, index) => {
          const tone = TONES[index % TONES.length];
          const number = String(index + 1).padStart(2, "0");
          return (
            <button
              key={department.key}
              type="button"
              className={`odg-card odg-card--${tone}`}
              data-number={number}
              aria-label={`Explore ${department.name}`}
              onClick={() => setOpenDept(department.key)}
            >
              <span className="odg-card-top">
                <span>{number} / 16</span>
                <span className="odg-plus" aria-hidden="true">+</span>
              </span>
              <span className="odg-card-body">
                <span className="odg-name">{department.name}</span>
                <strong className="odg-statement">{department.statement}</strong>
                <span className="odg-signals" aria-label={`${department.name} focus areas`}>
                  {department.signals.map((signal) => <span className="odg-signal" key={signal}>{signal}</span>)}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="odg-hint" aria-hidden="true">
        <span>16 ways to move forward</span>
        <i />
        <span>Drag or swipe</span>
      </div>

      <DepartmentDetailModal dept={openDept} onClose={() => setOpenDept(null)} />
    </section>
  );
}