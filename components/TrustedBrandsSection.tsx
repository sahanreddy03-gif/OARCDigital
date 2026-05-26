"use client";

// Keyword strip — platform names + authority phrases business owners search for.
// Same visual style as the original logo strip: #f0fff4 bg, compact, CSS marquee.

const ITEMS = [
  { label: "Instagram",               type: "platform" },
  { label: "Google Business Profile", type: "platform" },
  { label: "TikTok",                  type: "platform" },
  { label: "Award-Winning Growth",    type: "phrase"   },
  { label: "Meta Ads",                type: "platform" },
  { label: "Growth Hacking",          type: "phrase"   },
  { label: "Google Partner",          type: "phrase"   },
  { label: "Revenue Guarantee",       type: "phrase"   },
  { label: "AI Integration",          type: "phrase"   },
  { label: "Your Sales Partner",      type: "phrase"   },
  { label: "In-House Marketing",      type: "phrase"   },
  { label: "Fast-Track Growth",       type: "phrase"   },
  { label: "Google Ads",              type: "platform" },
  { label: "Place You Number One",    type: "phrase"   },
];

const TICKER = [...ITEMS, ...ITEMS];
const BG = "#f0fff4";

export default function TrustedBrandsSection() {
  return (
    <section
      className="relative py-6 md:py-8 overflow-hidden"
      style={{ backgroundColor: BG }}
      data-testid="section-trust-strip"
      aria-label="OARC Digital — platforms and specialisms"
    >
      {/* Left edge fade */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
      />
      {/* Right edge fade */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
      />

      {/* Screen-reader summary */}
      <p className="sr-only">
        OARC Digital specialisms: Instagram, Google Business Profile, TikTok,
        Award-Winning Growth, Meta Ads, Growth Hacking, Google Partner, Revenue
        Guarantee, AI Integration, Your Sales Partner, In-House Marketing,
        Fast-Track Growth, Google Ads, Place You Number One.
      </p>

      <div className="w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap items-center trust-strip-marquee"
          aria-hidden="true"
          data-testid="trust-strip-marquee"
        >
          {TICKER.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center flex-shrink-0"
            >
              {/* Label */}
              <span
                className={
                  item.type === "platform"
                    ? "font-semibold text-zinc-500 text-sm md:text-base px-4 md:px-6"
                    : "italic font-normal text-zinc-400 text-sm md:text-base px-4 md:px-6"
                }
              >
                {item.label}
              </span>
              {/* Separator dot */}
              <span aria-hidden="true" className="text-zinc-300 text-base select-none">·</span>
            </span>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes trust-strip-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-strip-marquee {
          animation: trust-strip-scroll 15s linear infinite;
          will-change: transform;
        }
      ` }} />
    </section>
  );
}
