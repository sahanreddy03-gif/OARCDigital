"use client";

import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import DepartmentDetailModal from "./DepartmentDetailModal";

type Department = {
  name: string;
  statement: string;
  key: string;
  href: string;
  image: string;
  imageAlt: string;
};

/*
 * This is intentionally a one-card proof before the full department set is
 * art-directed. The data shape keeps every existing destination available to
 * SEO and makes the final rail straightforward once this visual direction is
 * approved.
 */
const DEPARTMENTS: Department[] = [
  {
    name: "Growth",
    statement: "Bring me more customers.",
    key: "Growth",
    href: "/services/growth",
    image: caseStudies["fanstake-sports-platform"].thumbnailImage,
    imageAlt: "A sales team turning attention into new opportunities",
  },
  { name: "AI Staff", statement: "Pick your employee.", key: "AI Staff", href: "/services/ai-staff", image: caseStudies["nexgen-retail-ai-transformation"].thumbnailImage, imageAlt: "An AI workforce interface" },
  { name: "Creative", statement: "Make us worth more.", key: "Creative", href: "/services/creative", image: caseStudies["naturalcare-beauty"].thumbnailImage, imageAlt: "A natural beauty brand campaign" },
  { name: "Reputation", statement: "Make them remember you.", key: "Reputation", href: "/services/reputation", image: caseStudies["authentic-stories"].thumbnailImage, imageAlt: "Creators building an authentic brand story" },
  { name: "Sales", statement: "Close more sales.", key: "Sales", href: "/services/sales", image: caseStudies["propflow-property-platform"].thumbnailImage, imageAlt: "A property sales experience" },
  { name: "Enquiries", statement: "Turn questions into revenue.", key: "Enquiries", href: "/services/automation", image: caseStudies["sportsai-interactive"].thumbnailImage, imageAlt: "A conversational customer experience" },
  { name: "Social", statement: "Give people a reason to share.", key: "Social", href: "/services/social", image: caseStudies["authentic-stories"].thumbnailImage, imageAlt: "Social creators making a story people share" },
  { name: "Media", statement: "Put your spend to work.", key: "Media", href: "/services/media", image: caseStudies["digital-finance-solutions"].thumbnailImage, imageAlt: "A performance-led digital system" },
  { name: "Brand", statement: "Be the one they remember.", key: "Brand", href: "/services/brand", image: caseStudies["maison-lumiere"].thumbnailImage, imageAlt: "A luxury product brand" },
  { name: "Operations", statement: "Take the work off your plate.", key: "Operations", href: "/services/operations", image: caseStudies["global-supply-systems"].thumbnailImage, imageAlt: "A connected operations system" },
  { name: "Clarity", statement: "Know what is working.", key: "Clarity", href: "/services/clarity", image: caseStudies["strategypulse-enterprise"].thumbnailImage, imageAlt: "A strategic planning dashboard" },
  { name: "Automation", statement: "Let the business run better.", key: "Automation", href: "/services/automation", image: caseStudies["digital-finance-solutions"].thumbnailImage, imageAlt: "An automated financial workflow" },
  { name: "Transformation", statement: "Change how the business moves.", key: "Transformation", href: "/services/transformation", image: caseStudies["nexgen-retail-ai-transformation"].thumbnailImage, imageAlt: "A transformed retail operation" },
  { name: "Ship", statement: "Get the thing into the world.", key: "Ship", href: "/h360", image: caseStudies["pjazza"].thumbnailImage, imageAlt: "A live commerce product ready to ship" },
  { name: "Products", statement: "Build what the business needs.", key: "Products", href: "/h360", image: caseStudies["cloudbase-technologies"].thumbnailImage, imageAlt: "A product team building a digital system" },
  { name: "Compare", statement: "Choose production over promises.", key: "Compare", href: "/why-oarc", image: caseStudies["national-distributor-nlp"].thumbnailImage, imageAlt: "A working system replacing a paper process" },
];

export default function OARCDepartmentIndex() {
  const [openDept, setOpenDept] = useState<string | null>(null);
  const growth = DEPARTMENTS[0];

  return (
    <section
      id="departments"
      className="oarc-department-gallery"
      aria-label="OARC departments"
      data-testid="oarc-department-index"
    >
      <style>{`
        .oarc-department-gallery {
          --paper: #F2EFE9;
          --ink: #0E0D0C;
          --green: #0E5A3A;
          position: relative;
          background: var(--paper);
          color: var(--ink);
          padding: clamp(4rem, 9vw, 9rem) 0 clamp(5rem, 10vw, 10rem);
        }
        .odg-proof-head {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 4.5rem) clamp(2.25rem, 4vw, 4rem);
        }
        .odg-proof-title {
          max-width: 9ch;
          margin: 0;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(3.5rem, 9vw, 10rem);
          font-weight: 800;
          letter-spacing: -.08em;
          line-height: .82;
        }
        .odg-proof-title em {
          display: block;
          font-family: var(--font-instrument-serif, "Instrument Serif", serif);
          font-size: 1.06em;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -.055em;
        }
        .odg-proof-intro {
          max-width: 26ch;
          margin: 1.75rem 0 0;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(1.05rem, 1.8vw, 1.3rem);
          line-height: 1.3;
          color: rgba(14,13,12,.66);
        }
        .odg-proof-rail {
          display: flex;
          overflow-x: auto;
          padding: 0 clamp(1.25rem, 4vw, 4.5rem) 1rem;
          scroll-snap-type: x mandatory;
          scroll-padding-left: clamp(1.25rem, 4vw, 4.5rem);
          overscroll-behavior-x: contain;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x pan-y;
        }
        .odg-proof-rail::-webkit-scrollbar { display: none; }
        .odg-growth-card {
          position: relative;
          isolation: isolate;
          flex: 0 0 min(72vw, 760px);
          aspect-ratio: 1.12 / 1;
          overflow: hidden;
          padding: 0;
          border: 0;
          border-radius: 2px;
          background: var(--ink);
          color: var(--paper);
          cursor: pointer;
          scroll-snap-align: start;
          text-align: left;
          -webkit-tap-highlight-color: transparent;
        }
        .odg-growth-card:focus-visible {
          outline: 3px solid var(--green);
          outline-offset: 6px;
        }
        .odg-growth-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(.92);
          transition: transform 800ms cubic-bezier(.16,1,.3,1), filter 800ms cubic-bezier(.16,1,.3,1);
        }
        .odg-growth-card:hover .odg-growth-image {
          transform: scale(1.045);
          filter: saturate(1.08);
        }
        .odg-growth-wash {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(14,13,12,.2);
          pointer-events: none;
        }
        .odg-growth-copy {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          padding: clamp(1.5rem, 4vw, 3.5rem);
          background: rgba(14,13,12,.84);
        }
        .odg-growth-name {
          display: block;
          margin-bottom: .6rem;
          color: #C4FF4D;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(1.25rem, 2vw, 1.8rem);
          font-weight: 800;
          letter-spacing: -.04em;
        }
        .odg-growth-message {
          max-width: 9ch;
          margin: 0;
          color: var(--paper);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(2.6rem, 6vw, 6.5rem);
          font-weight: 800;
          letter-spacing: -.075em;
          line-height: .86;
        }
        .odg-growth-message em {
          font-family: var(--font-instrument-serif, "Instrument Serif", serif);
          font-size: 1.08em;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -.055em;
        }
        .odg-growth-action {
          flex: 0 0 auto;
          align-self: flex-end;
          color: var(--paper);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(1rem, 1.7vw, 1.4rem);
          font-weight: 800;
          letter-spacing: -.035em;
          transition: color 240ms ease, transform 240ms ease;
        }
        .odg-growth-card:hover .odg-growth-action {
          color: #C4FF4D;
          transform: translateX(5px);
        }
        @media (max-width: 680px) {
          .oarc-department-gallery { padding-top: 3.5rem; }
          .odg-proof-title { font-size: clamp(3.4rem, 17vw, 5.5rem); }
          .odg-proof-intro { margin-top: 1.35rem; }
          .odg-growth-card {
            flex-basis: 86vw;
            aspect-ratio: .78 / 1;
          }
          .odg-growth-copy {
            display: block;
            padding: 1.4rem;
          }
          .odg-growth-message { font-size: clamp(2.55rem, 11vw, 4.1rem); }
          .odg-growth-action {
            display: block;
            margin-top: 1.3rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .odg-growth-image, .odg-growth-action { transition: none; }
          .odg-growth-card:hover .odg-growth-image { transform: none; }
          .odg-growth-card:hover .odg-growth-action { transform: none; }
        }
      `}</style>

      {/* Keep every department route crawlable while this first-card proof is reviewed. */}
      <nav aria-label="Department pages" className="sr-only">
        {DEPARTMENTS.map((department) => (
          <a key={department.key} href={department.href}>
            {department.name} — {department.statement}
          </a>
        ))}
      </nav>

      <header className="odg-proof-head">
        <h2 className="odg-proof-title">
          What needs<br /><em>to move?</em>
        </h2>
        <p className="odg-proof-intro">
          Start with the change your business needs next.
        </p>
      </header>

      <div className="odg-proof-rail" aria-label="Department preview">
        <button
          type="button"
          className="odg-growth-card"
          data-testid="department-card-growth"
          aria-label={`Explore ${growth.name}: ${growth.statement}`}
          onClick={() => setOpenDept(growth.key)}
        >
          <img
            className="odg-growth-image"
            src={growth.image}
            alt={growth.imageAlt}
            loading="lazy"
          />
          <span className="odg-growth-wash" aria-hidden="true" />
          <span className="odg-growth-copy">
            <span>
              <span className="odg-growth-name">{growth.name}</span>
              <strong className="odg-growth-message">
                Bring me more<br /><em>customers.</em>
              </strong>
            </span>
            <span className="odg-growth-action" aria-hidden="true">Explore Growth ↗</span>
          </span>
        </button>
      </div>

      <DepartmentDetailModal dept={openDept} onClose={() => setOpenDept(null)} />
    </section>
  );
}