"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type WorkCard = {
  slug: string;
  brand: string;
  headline: string;
  industry: string;
  place: string;
  group: string;
  image?: string;
  alt: string;
};

/** The project grid with plain industry filters. All cards are in the first HTML, so every case stays linked. */
export default function WorkGrid({ cards, groups }: { cards: WorkCard[]; groups: string[] }) {
  const [group, setGroup] = useState("All");
  const visible = group === "All" ? cards : cards.filter((card) => card.group === group);

  return (
    <>
      <div className="wx-filters" role="group" aria-label="Show work by industry">
        {["All", ...groups].map((item) => (
          <button key={item} type="button" aria-pressed={group === item} onClick={() => setGroup(item)}>
            {item}
            <span>{item === "All" ? cards.length : cards.filter((card) => card.group === item).length}</span>
          </button>
        ))}
      </div>

      <ul className="wx-grid">
        {visible.map((card, index) => (
          <li key={card.slug} className={index === 0 ? "wx-wide" : undefined}>
            <Link href={`/our-work/${card.slug}`} className="wx-card">
              <figure>
                {card.image ? (
                  <img src={card.image} alt={card.alt} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
                ) : (
                  <span className="wx-noimage" aria-hidden="true">{card.brand}</span>
                )}
              </figure>
              <div className="wx-copy">
                <strong>{card.brand}</strong>
                <h3>{card.headline}</h3>
                <p>
                  <span>( {card.industry} )</span>
                  <span>( {card.place} )</span>
                </p>
                <em>
                  View project <ArrowUpRight size={16} aria-hidden="true" />
                </em>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
