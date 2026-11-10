import Link from "next/link";
import { NAP } from "@/lib/seo/nap";

/**
 * "Why OARC Digital" — one clear, answer-first block about the whole business
 * (not only AI). The opening sentence is written so search engines and AI
 * assistants can quote it as-is.
 * Design system v3: paper ground, ink type, one black box with yellow text.
 * Reveal-on-scroll is pure CSS (animation-timeline: view()), so it costs no
 * JavaScript and is skipped for reduced motion or older browsers.
 */
const PROMISES = [
  {
    n: "01",
    title: "One team, everything",
    text: "Brand, content, social, ads, website and AI staff under one roof. One plan, one person to call.",
  },
  {
    n: "02",
    title: "You keep everything",
    text: "Your ad accounts, footage, pages and data stay in your name. Always.",
  },
  {
    n: "03",
    title: "Money-back guarantee",
    text: "We agree targets before we start. If we miss them, you get your money back.",
  },
  {
    n: "04",
    title: "Local, since 2023",
    text: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Come in and meet the people doing the work.`,
  },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function HomepageWhyOarc() {
  return (
    <section
      id="why-oarc"
      aria-labelledby="homepage-why-title"
      className="oarc-why bg-[#F5F3EE] px-4 py-20 text-[#0E0E0E] md:px-10 md:py-28"
      data-testid="homepage-why-oarc"
    >
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .oarc-why .oarc-reveal { animation: oarc-why-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 55%; }
            .oarc-why .oarc-line { animation: oarc-why-line linear both; animation-timeline: view(); animation-range: entry 10% cover 40%; transform-origin: left; }
          }
        }
        @keyframes oarc-why-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes oarc-why-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <h2
            id="homepage-why-title"
            className="oarc-reveal text-[clamp(3rem,7vw,6rem)] font-normal leading-[.92] tracking-[-0.02em]"
            style={serif}
          >
            Why OARC
            <br />
            <em>
              Digital<span className="text-[#FF4B4B]">.</span>
            </em>
          </h2>
          <p className="oarc-reveal max-w-xl text-lg leading-relaxed text-[#0E0E0E]/80 md:text-xl">
            OARC Digital is a marketing agency in {NAP.addressLocality}, Malta, founded in 2023. One team handles
            your brand, content, social media, ads, website and AI staff, so you are not managing five suppliers.
          </p>
        </div>

        <div className="oarc-line mt-14 h-px bg-[#0E0E0E]/25 md:mt-20" aria-hidden="true" />

        <ol className="grid md:grid-cols-4">
          {PROMISES.map((item, i) => (
            <li
              key={item.n}
              className={`oarc-reveal border-b border-[#0E0E0E]/15 py-8 md:border-b-0 md:py-10 md:pr-8 ${
                i > 0 ? "md:border-l md:pl-8" : ""
              }`}
            >
              <span className="text-sm font-semibold tabular-nums text-[#0E0E0E]/45">{item.n}</span>
              <h3 className="mt-4 text-[32px] leading-none" style={serif}>
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#0E0E0E]/70">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0E0E0E] px-6 py-3.5 text-[15px] font-semibold text-[#F5F3EE] transition-opacity hover:opacity-85"
          >
            Book a 20-minute call →
          </Link>
          <Link href="/why-oarc" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Why OARC in detail
          </Link>
          <Link href="/about" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Meet the team
          </Link>
          <Link href="/tools" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Free business tools
          </Link>
        </div>
      </div>
    </section>
  );
}
