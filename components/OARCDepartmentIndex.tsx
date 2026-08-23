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
 * One-card art-direction proof. The complete department data remains here so
 * all destinations stay discoverable while the visual system is approved.
 */
const DEPARTMENTS: Department[] = [
  { name: "Growth", statement: "Turn attention into demand.", key: "Growth", href: "/services/growth", image: "/attached_assets/generated_images/oarc-growth-editorial-proof.jpg", imageAlt: "A founder drawing a sculptural green curve upward through a limestone plaza" },
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
          padding: clamp(2rem, 4.5vw, 5rem) 0 clamp(5rem, 9vw, 9rem);
        }
        .odg-proof-rail {
          display: flex;
          overflow-x: auto;
          padding: 0 clamp(1rem, 3.2vw, 3.5rem) 1rem;
          scroll-snap-type: x mandatory;
          scroll-padding-left: clamp(1rem, 3.2vw, 3.5rem);
          overscroll-behavior-x: contain;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x pan-y;
        }
        .odg-proof-rail::-webkit-scrollbar { display: none; }
        .odg-growth-card {
          flex: 0 0 min(94vw, 1320px);
          display: block;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--ink);
          cursor: pointer;
          scroll-snap-align: start;
          text-align: left;
          -webkit-tap-highlight-color: transparent;
        }
        .odg-growth-card:focus-visible {
          outline: 3px solid var(--green);
          outline-offset: 7px;
        }
        .odg-growth-media {
          position: relative;
          display: block;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #D8D0C1;
        }
        .odg-growth-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 1100ms cubic-bezier(.16,1,.3,1);
        }
        .odg-growth-card:hover .odg-growth-image { transform: scale(1.025); }
        .odg-growth-copy {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.22fr) auto;
          gap: clamp(1rem, 3vw, 4rem);
          align-items: end;
          padding: clamp(1.35rem, 2.3vw, 2.5rem) 0 0;
        }
        .odg-growth-name {
          display: block;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(2.7rem, 5.2vw, 6.75rem);
          font-weight: 800;
          letter-spacing: -.09em;
          line-height: .8;
        }
        .odg-growth-message {
          max-width: 11ch;
          margin: 0;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(1.65rem, 3.25vw, 4.3rem);
          font-weight: 700;
          letter-spacing: -.065em;
          line-height: .9;
        }
        .odg-growth-message em {
          font-family: var(--font-instrument-serif, "Instrument Serif", serif);
          font-size: 1.12em;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -.055em;
        }
        .odg-growth-action {
          display: inline-flex;
          align-items: center;
          min-height: 2.6rem;
          padding-bottom: .15rem;
          border-bottom: 2px solid var(--ink);
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          font-weight: 800;
          letter-spacing: -.045em;
          white-space: nowrap;
          transition: transform 350ms cubic-bezier(.16,1,.3,1);
        }
        .odg-growth-card:hover .odg-growth-action { transform: translateX(8px); }
        @media (max-width: 680px) {
          .odg-growth-card { flex-basis: 92vw; }
          .odg-growth-media { aspect-ratio: .87 / 1; }
          .odg-growth-copy {
            grid-template-columns: 1fr auto;
            gap: 1.25rem;
            padding-top: 1.25rem;
          }
          .odg-growth-message {
            grid-column: 1 / -1;
            grid-row: 2;
            font-size: clamp(2.3rem, 10vw, 3.65rem);
          }
          .odg-growth-action {
            grid-column: 2;
            grid-row: 1;
            align-self: center;
            font-size: .98rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .odg-growth-image, .odg-growth-action { transition: none; }
          .odg-growth-card:hover .odg-growth-image,
          .odg-growth-card:hover .odg-growth-action { transform: none; }
        }
      `}</style>

      <nav aria-label="Department pages" className="sr-only">
        {DEPARTMENTS.map((department) => (
          <a key={department.key} href={department.href}>
            {department.name} — {department.statement}
          </a>
        ))}
      </nav>

      <div className="odg-proof-rail" aria-label="Department preview">
        <button
          type="button"
          className="odg-growth-card"
          data-testid="department-card-growth"
          aria-label={`Explore ${growth.name}: ${growth.statement}`}
          onClick={() => setOpenDept(growth.key)}
        >
          <span className="odg-growth-media">
            <img
              className="odg-growth-image"
              src={growth.image}
              alt={growth.imageAlt}
              loading="eager"
            />
          </span>
          <span className="odg-growth-copy">
            <span className="odg-growth-name">{growth.name}</span>
            <strong className="odg-growth-message">
              Turn attention<br />into <em>demand.</em>
            </strong>
            <span className="odg-growth-action" aria-hidden="true">Explore ↗</span>
          </span>
        </button>
      </div>

      <DepartmentDetailModal dept={openDept} onClose={() => setOpenDept(null)} />
    </section>
  );
}