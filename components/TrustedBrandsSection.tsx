"use client";

// Luxury stat-ticker marquee — replaces the old 30-icon tool strip.
// Pure CSS infinite scroll (same pattern as the original logo marquees).
// Deep dark background, platinum/white monochrome — zero green.

const STATS = [
  { number: "4.9/5",    label: "Satisfaction Rating",  testId: "stat-rating"    },
  { number: "47+",      label: "Clients Served",        testId: "stat-clients"   },
  { number: "68%",      label: "Avg ROI Lift",          testId: "stat-roi"       },
  { number: "90 Days",  label: "Guarantee Period",      testId: "stat-guarantee" },
];

// Duplicate so the CSS -50% translateX loops seamlessly
const TICKER = [...STATS, ...STATS];

const BG = "#090909";

export default function TrustedBrandsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BG }}
      data-testid="section-trust-stats"
      aria-label="OARC Digital — key performance metrics"
    >
      {/* Top seam — fades from AICreativeSection (#f0fff4 light) into dark */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ background: `linear-gradient(to bottom, #f0fff4 0%, ${BG} 100%)` }}
      />

      {/* Bottom seam — fades back out to white (Section2 bg) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ background: `linear-gradient(to top, #ffffff 0%, ${BG} 100%)` }}
      />

      {/* Left / right edge fades so items dissolve cleanly at viewport edges */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-24 md:w-40 pointer-events-none z-20"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-24 md:w-40 pointer-events-none z-20"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
      />

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden py-16 md:py-20">
        <div
          className="flex whitespace-nowrap trust-stats-marquee"
          data-testid="stats-marquee"
          aria-hidden="true"
        >
          {TICKER.map((stat, i) => (
            <div
              key={i}
              className="inline-flex items-center flex-shrink-0"
              data-testid={i < STATS.length ? stat.testId : undefined}
            >
              {/* Stat item */}
              <div className="inline-flex flex-col items-center px-12 md:px-16 lg:px-20">
                {/* Number */}
                <span
                  className="block font-bold text-white leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {stat.number}
                </span>
                {/* Label */}
                <span
                  className="block mt-2 text-[10px] md:text-[11px] font-medium uppercase"
                  style={{
                    letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.38)",
                  }}
                >
                  {stat.label}
                </span>
              </div>

              {/* Separator — thin platinum vertical rule */}
              <div
                aria-hidden="true"
                className="flex-shrink-0 self-stretch"
                style={{
                  width: "1px",
                  background: "linear-gradient(to bottom, transparent 15%, rgba(255,255,255,0.14) 50%, transparent 85%)",
                  marginInline: "0",
                }}
              />
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
          animation: trust-stats-scroll 36s linear infinite;
          will-change: transform;
        }
      ` }} />
    </section>
  );
}
