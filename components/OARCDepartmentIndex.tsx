"use client";

import { useState } from "react";
import DepartmentDetailModal from "./DepartmentDetailModal";

type Department = {
  name: string;
  statement: string;
  key: string;
  href: string;
  image: string;
  imageAlt: string;
};

const DEPARTMENTS: Department[] = [
  { name: "Growth", statement: "Bring me more customers.", key: "Growth", href: "/services/growth", image: "/attached_assets/generated_images/oarc-growth-card-v2.jpg", imageAlt: "A crimson sphere rising on a green line above an ivory architectural form" },
  { name: "AI Staff", statement: "Pick your employee.", key: "AI Staff", href: "/services/ai-staff", image: "/attached_assets/generated_images/oarc-dept-ai-staff.jpg", imageAlt: "A chrome hand placing a warm light cube on a graphite plinth" },
  { name: "Creative", statement: "Make us worth more.", key: "Creative", href: "/services/creative", image: "/attached_assets/generated_images/oarc-dept-creative.jpg", imageAlt: "A vermilion folded paper sculpture against a yellow field" },
  { name: "Reputation", statement: "Make them remember you.", key: "Reputation", href: "/services/reputation", image: "/attached_assets/generated_images/oarc-dept-reputation.jpg", imageAlt: "A mirror orb reflecting a crimson sun" },
  { name: "Sales", statement: "Close more sales.", key: "Sales", href: "/services/sales", image: "/attached_assets/generated_images/oarc-dept-sales.jpg", imageAlt: "A cobalt doorway and a red key-like geometric form" },
  { name: "Enquiries", statement: "Turn questions into revenue.", key: "Enquiries", href: "/services/automation", image: "/attached_assets/generated_images/oarc-dept-enquiries.jpg", imageAlt: "A glossy red loop weaving through ivory forms" },
  { name: "Social", statement: "Give people a reason to share.", key: "Social", href: "/services/social", image: "/attached_assets/generated_images/oarc-dept-social.jpg", imageAlt: "Five colourful ribbons braided into one knot" },
  { name: "Media", statement: "Put your spend to work.", key: "Media", href: "/services/media", image: "/attached_assets/generated_images/oarc-dept-media.jpg", imageAlt: "Ruby discs and cobalt glass panes arranged on a yellow grid" },
  { name: "Brand", statement: "Be the one they remember.", key: "Brand", href: "/services/brand", image: "/attached_assets/generated_images/oarc-dept-brand.jpg", imageAlt: "An ivory sculptural bottle on a forest-green pedestal" },
  { name: "Operations", statement: "Take the work off your plate.", key: "Operations", href: "/services/operations", image: "/attached_assets/generated_images/oarc-dept-operations.jpg", imageAlt: "Red, cream and green modular blocks interlocking" },
  { name: "Clarity", statement: "Know what is working.", key: "Clarity", href: "/services/clarity", image: "/attached_assets/generated_images/oarc-dept-clarity.jpg", imageAlt: "A prism splitting light into cobalt and crimson planes" },
  { name: "Automation", statement: "Let the business run better.", key: "Automation", href: "/services/automation", image: "/attached_assets/generated_images/oarc-dept-automation.jpg", imageAlt: "A crimson tube looping through cobalt and ivory components" },
  { name: "Transformation", statement: "Change how the business moves.", key: "Transformation", href: "/services/transformation", image: "/attached_assets/generated_images/oarc-dept-transformation.jpg", imageAlt: "A concrete wall opening onto a vivid green interior" },
  { name: "Ship", statement: "Get the thing into the world.", key: "Ship", href: "/h360", image: "/attached_assets/generated_images/oarc-dept-ship.jpg", imageAlt: "A red sculptural object launching from a cream ramp" },
  { name: "Products", statement: "Build what the business needs.", key: "Products", href: "/h360", image: "/attached_assets/generated_images/oarc-dept-products.jpg", imageAlt: "A floating modular object assembled from colourful pieces" },
  { name: "Compare", statement: "Choose production over promises.", key: "Compare", href: "/why-oarc", image: "/attached_assets/generated_images/oarc-dept-compare.jpg", imageAlt: "A tangled charcoal path beside a clean crimson path" },
];

export default function OARCDepartmentIndex() {
  const [openDept, setOpenDept] = useState<string | null>(null);

  return (
    <section
      id="departments"
      className="oarc-department-gallery"
      aria-label="OARC departments"
      data-testid="oarc-department-index"
    >
      <style>{`
        .oarc-department-gallery {
          --paper: #FAF9F6;
          --ink: #0E0D0C;
          --green: #0E5A3A;
          position: relative;
          background: var(--paper);
          color: var(--ink);
          padding: clamp(2.5rem, 5vw, 5rem) 0 clamp(5rem, 9vw, 9rem);
        }
        .odg-department-rail {
          display: flex;
          gap: clamp(1.25rem, 2.4vw, 2.5rem);
          overflow-x: auto;
          padding: 0 clamp(1rem, 3.2vw, 3.5rem) 1rem;
          scroll-snap-type: x mandatory;
          scroll-padding-left: clamp(1rem, 3.2vw, 3.5rem);
          overscroll-behavior-x: contain;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-x pan-y;
        }
        .odg-department-rail::-webkit-scrollbar { display: none; }
        .odg-department-card {
          flex: 0 0 min(68vw, 540px);
          display: block;
          scroll-snap-align: start;
          text-align: left;
          -webkit-tap-highlight-color: transparent;
        }
        .odg-department-media-button {
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          color: inherit;
          text-align: inherit;
          -webkit-tap-highlight-color: transparent;
        }
        .odg-department-media-button:focus-visible,
        .odg-department-title:focus-visible {
          outline: 3px solid var(--green);
          outline-offset: 7px;
        }
        .odg-department-media {
          position: relative;
          display: block;
          aspect-ratio: .78 / 1;
          overflow: hidden;
          border-radius: clamp(1.25rem, 2.5vw, 2rem);
          background: #D8D0C1;
        }
        .odg-department-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 1100ms cubic-bezier(.16,1,.3,1);
        }
        .odg-department-card:hover .odg-department-image { transform: scale(1.025); }
        .odg-department-copy {
          display: grid;
          gap: .75rem;
          padding: 1.15rem .2rem 0;
        }
        .odg-department-title {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          color: inherit;
          font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif);
          font-size: clamp(2rem, 3.35vw, 3.3rem);
          font-style: normal;
          font-weight: 800;
          letter-spacing: -.075em;
          line-height: .9;
          text-decoration: none;
        }
        .odg-department-arrow {
          font-family: Arial, sans-serif;
          font-size: .62em;
          font-weight: 400;
          letter-spacing: 0;
          transition: transform 350ms cubic-bezier(.16,1,.3,1);
        }
        .odg-department-card:hover .odg-department-arrow,
        .odg-department-title:hover .odg-department-arrow { transform: translate(3px, -3px); }
        .odg-department-statement {
          display: block;
          max-width: 20ch;
          color: color-mix(in srgb, var(--ink) 76%, transparent);
          font-family: var(--font-instrument-serif, "Instrument Serif", serif);
          font-size: clamp(1.35rem, 2vw, 1.85rem);
          font-style: italic;
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: .95;
        }
        @media (max-width: 680px) {
          .odg-department-card { flex-basis: 78vw; }
          .odg-department-media { aspect-ratio: .78 / 1; }
          .odg-department-copy { padding-top: 1rem; }
          .odg-department-title { font-size: clamp(2rem, 9.5vw, 3.2rem); }
          .odg-department-statement { font-size: clamp(1.35rem, 6.5vw, 1.75rem); }
        }
        @media (prefers-reduced-motion: reduce) {
          .odg-department-image,
          .odg-department-arrow { transition: none; }
          .odg-department-card:hover .odg-department-image,
          .odg-department-card:hover .odg-department-arrow,
          .odg-department-title:hover .odg-department-arrow { transform: none; }
        }
      `}</style>

      <div className="odg-department-rail" aria-label="Department preview">
        {DEPARTMENTS.map((department, index) => (
          <article
            key={department.key}
            className="odg-department-card"
          >
            <button
              type="button"
              className="odg-department-media-button"
              data-testid={`department-card-${department.key.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={`Open ${department.name} department overview`}
              onClick={() => setOpenDept(department.key)}
            >
              <span className="odg-department-media">
                <img
                  className="odg-department-image"
                  src={department.image}
                  alt={department.imageAlt}
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </span>
            </button>
            <span className="odg-department-copy">
              <a
                href={department.href}
                className="odg-department-title"
                data-testid={`department-link-${department.key.toLowerCase().replace(/\s+/g, "-")}`}
                aria-label={`Visit ${department.name}: ${department.statement}`}
              >
                <span>{department.name}</span>
                <span className="odg-department-arrow" aria-hidden="true">↗</span>
              </a>
              <span className="odg-department-statement">{department.statement}</span>
            </span>
          </article>
        ))}
      </div>

      <DepartmentDetailModal dept={openDept} onClose={() => setOpenDept(null)} />
    </section>
  );
}