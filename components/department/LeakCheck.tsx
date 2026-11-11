"use client";

import { useState } from "react";

type Step = { question: string; step: string; fix: string };

const sans = { fontFamily: "var(--font-inter-tight), sans-serif" };
const serif = { fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" };

/**
 * 30-second self-check: one yes/no per step of the department's journey. The first "no" is
 * the leak. The result shows straight away, with no email asked, so the visitor gets value
 * before giving anything.
 */
export default function LeakCheck({ steps, offerName }: { steps: Step[]; offerName: string }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => steps.map(() => null));
  const done = answers.every((a) => a !== null);
  const leakIndex = answers.findIndex((a) => a === false);
  const leak = leakIndex >= 0 ? steps[leakIndex] : null;

  return (
    <section aria-labelledby="dept-leak" className="bg-white px-5 py-16 text-[#0E0E0E] md:py-24" style={sans}>
      <div className="mx-auto max-w-[860px]">
        <h2 id="dept-leak" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
          Where are you losing customers?
        </h2>
        <p className="mt-4 text-xl leading-relaxed">{steps.length} questions. 30 seconds. No email needed.</p>

        <ol className="mt-8 border-t border-[#0E0E0E]/15">
          {steps.map((s, i) => (
            <li key={s.step} className="flex flex-col gap-3 border-b border-[#0E0E0E]/15 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="text-lg leading-snug md:text-xl">
                <span className="mr-2 text-[#0035AD]" style={serif}>
                  {i + 1}.
                </span>
                {s.question}
              </p>
              <div className="flex shrink-0 gap-2" role="group" aria-label={s.question}>
                {[true, false].map((value) => {
                  const on = answers[i] === value;
                  return (
                    <button
                      key={String(value)}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setAnswers((prev) => prev.map((a, j) => (j === i ? value : a)))}
                      className={`min-w-[72px] rounded-full border px-5 py-2.5 text-base font-semibold transition-colors ${
                        on ? "border-[#0E0E0E] bg-[#0E0E0E] text-[#F5F3EE]" : "border-[#0E0E0E]/30 hover:border-[#0E0E0E]"
                      }`}
                    >
                      {value ? "Yes" : "No"}
                    </button>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>

        <div aria-live="polite" className="mt-8">
          {done && (
            <div className="rounded-[18px] bg-[#0E0E0E] p-7 text-[#F5F3EE] md:p-9">
              {leak ? (
                <>
                  <p className="text-lg">Your weakest step:</p>
                  <p className="mt-2 text-[clamp(2rem,5vw,3.2rem)] leading-none text-[#F9FF84]" style={serif}>
                    Step {leakIndex + 1}. {leak.step}.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">What to do: {leak.fix}</p>
                </>
              ) : (
                <>
                  <p className="text-[clamp(2rem,5vw,3.2rem)] leading-none text-[#F9FF84]" style={serif}>
                    All 6 look good.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    We can still check each one properly, for free.
                  </p>
                </>
              )}
              <a
                href="#free-check"
                className="mt-6 inline-flex items-center rounded-full bg-[#F5F3EE] px-7 py-4 text-base font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
              >
                Get {offerName.replace(/^The /, "the ")} →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
