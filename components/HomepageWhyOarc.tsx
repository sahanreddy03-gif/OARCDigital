import Link from "next/link";
import { NAP } from "@/lib/seo/nap";

/**
 * "Why OARC Digital" — one clear, answer-first block about the whole business
 * (not only AI). Replaces "Our Difference" (Section5) and the AI-only
 * comparison table (ComparisonSection) on the homepage. The opening sentence
 * is written so search engines and AI assistants can quote it as-is.
 */
const FACTS = [
  { title: "No setup fee", text: "Start this month. No long contract." },
  { title: "You keep everything", text: "Your accounts, your footage and your dashboard stay yours." },
  { title: "Money-back guarantee", text: "A full refund if the targets we agree are not met." },
  { title: "Local, since 2023", text: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Come and meet us.` },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function HomepageWhyOarc() {
  return (
    <section
      id="why-oarc"
      aria-labelledby="homepage-why-title"
      className="bg-[#F5F3EE] px-4 py-16 text-[#0E0E0E] md:px-10 md:py-24"
      data-testid="homepage-why-oarc"
    >
      <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16">
        <div>
          <h2
            id="homepage-why-title"
            className="text-[clamp(2.4rem,5vw,3.9rem)] font-semibold leading-none tracking-[-0.045em]"
          >
            Why OARC <em className="font-normal tracking-[-0.02em]" style={serif}>Digital.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#0E0E0E]/80">
            OARC Digital is a marketing agency in {NAP.addressLocality}, Malta, founded in 2023. One team handles
            your brand, content, social media, ads, website and AI staff, so you are not managing five suppliers.
          </p>
          <p className="mt-8 text-[clamp(4rem,9vw,7.5rem)] font-semibold leading-[.9] tracking-[-0.07em]">
            €500
            <span className="ml-2 text-2xl font-medium tracking-[-0.02em] text-[#0E0E0E]/60">a month</span>
          </p>
          <p className="mt-3 max-w-md text-base text-[#0E0E0E]/70">
            The whole marketing team: strategy, filming, social, Meta and Google ads, your website and enquiry
            follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/why-oarc" className="border-b border-[#0E0E0E]/30 pb-1 hover:border-[#0E0E0E]">
              Why OARC in detail →
            </Link>
            <Link href="/about" className="border-b border-[#0E0E0E]/30 pb-1 hover:border-[#0E0E0E]">
              Meet the team →
            </Link>
            <Link href="/tools" className="border-b border-[#0E0E0E]/30 pb-1 hover:border-[#0E0E0E]">
              Free business tools →
            </Link>
          </div>
        </div>

        <ul className="grid gap-3">
          {FACTS.map((fact) => (
            <li key={fact.title} className="flex gap-4 rounded-2xl border border-[#0E0E0E]/10 bg-white/70 p-5">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#0E0E0E] text-sm font-bold text-[#F9FF84]"
              >
                ✓
              </span>
              <span>
                <span className="block text-lg font-semibold tracking-[-0.02em]">{fact.title}</span>
                <span className="mt-0.5 block text-[15px] text-[#0E0E0E]/65">{fact.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
