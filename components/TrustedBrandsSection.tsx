"use client";

// Stat ticker — same visual style as the original platform logo strip:
// light #f0fff4 background, compact, smooth CSS marquee, muted grey text.
// 4 proof stats scroll in place of the old 30 brand icons.

const STATS = [
  { number: "4.9/5",   label: "Satisfaction Rating", testId: "stat-rating"    },
  { number: "47+",     label: "Clients Served",       testId: "stat-clients"   },
  { number: "68%",     label: "Avg ROI Lift",         testId: "stat-roi"       },
  { number: "90 Days", label: "Guarantee Period",     testId: "stat-guarantee" },
];

const TICKER = [...STATS, ...STATS];
const BG = "#f0fff4";

export default function TrustedBrandsSection() {
  return (
    <section
      className="relative py-6 md:py-8 overflow-hidden"
      style={{ backgroundColor: BG }}
      data-testid="section-trust-stats"
      aria-label="OARC Digital — key performance metrics"
    >
      {/* Left edge fade */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
      />
      {/* Right edge fade */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
      />

      <div className="w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap py-2 trust-stats-marquee"
          data-testid="stats-marquee"
        >
          {TICKER.map((stat, i) => (
            <div
              key={i}
              className="inline-flex items-center flex-shrink-0"
              data-testid={i < STATS.length ? stat.testId : undefined}
            >
              {/* Stat block */}
              <div className="inline-flex flex-col items-center justify-center px-10 md:px-14">
                <span
                  className="block font-semibold text-zinc-500 leading-none"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", letterSpacing: "-0.02em" }}
                >
                  {stat.number}
                </span>
                <span
                  className="block mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-400"
                >
                  {stat.label}
                </span>
              </div>

              {/* Separator dot */}
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-zinc-300 text-lg select-none"
              >
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes trust-stats-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-stats-marquee {
          animation: trust-stats-scroll 30s linear infinite;
          will-change: transform;
        }
      ` }} />
    </section>
  );
}
