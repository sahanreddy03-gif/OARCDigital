"use client";

import { useState } from "react";

const serif = { fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" };

/**
 * The leak in the visitor's own euros: enquiries lost a month x what one customer is worth
 * x 12. Their numbers, not ours, so nothing here is a claim.
 */
export default function LeakCost() {
  const [lost, setLost] = useState(10);
  const [worth, setWorth] = useState(150);
  const year = lost * worth * 12;

  return (
    <section aria-labelledby="leak-cost" className="bg-[#0E0E0E] px-5 py-16 text-[#F5F3EE] md:py-24">
      <div className="mx-auto grid max-w-[1080px] gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <h2 id="leak-cost" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
            What do missed enquiries cost you?
          </h2>
          <p className="mt-5 text-xl leading-relaxed">Your numbers, not ours. Move the sliders.</p>

          <label className="mt-9 block text-lg font-semibold" htmlFor="lc-lost">
            Enquiries you miss or lose each month: <span className="text-[#F9FF84]">{lost}</span>
          </label>
          <input
            id="lc-lost"
            type="range"
            min={1}
            max={100}
            value={lost}
            onChange={(e) => setLost(Number(e.target.value))}
            className="mt-3 w-full accent-[#F9FF84]"
          />

          <label className="mt-8 block text-lg font-semibold" htmlFor="lc-worth">
            What 1 customer is worth to you: <span className="text-[#F9FF84]">€{worth.toLocaleString("en-MT")}</span>
          </label>
          <input
            id="lc-worth"
            type="range"
            min={20}
            max={5000}
            step={10}
            value={worth}
            onChange={(e) => setWorth(Number(e.target.value))}
            className="mt-3 w-full accent-[#F9FF84]"
          />
        </div>

        <div aria-live="polite">
          <p className="text-lg">That is about</p>
          <p className="mt-1 text-[clamp(4rem,13vw,8.5rem)] leading-[.85] text-[#F9FF84]" style={serif}>
            €{year.toLocaleString("en-MT")}
          </p>
          <p className="mt-3 text-2xl" style={serif}>
            a year, in customers who never reached you.
          </p>
          <a
            href="#free-check"
            className="mt-8 inline-flex items-center rounded-full bg-[#F5F3EE] px-7 py-4 text-lg font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            Get a free check of my business →
          </a>
        </div>
      </div>
    </section>
  );
}
