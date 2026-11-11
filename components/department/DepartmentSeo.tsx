import Link from "next/link";
import { homepageQuotes, servicesHubQuotes, whyOarcQuotes } from "@/lib/reviews/approvedQuotes";
import { NAP } from "@/lib/seo/nap";
import { LOGOS, TRUST, type DeptSeo } from "@/lib/departments/types";
import LeakCheck from "./LeakCheck";

/**
 * Everything around a department's own content. The owner's content is the page; this adds
 * what sells it and what search needs, in this order: a 30-second self-check, proof in the
 * middle (never at the top), the free offer with its contents spelled out, the comparison,
 * Tom, the plain-words summary, the questions, and one call to action.
 *
 * Notion design system v3: one flood colour per section and never the same flood twice in a
 * row (white, espresso, yellow, paper, cobalt, paper, ink). Instrument Serif for display
 * words, Inter Tight for sentences, nothing under 16px.
 */
const serif = { fontFamily: "var(--font-instrument-serif-roman), Georgia, serif" };
const sans = { fontFamily: "var(--font-inter-tight), sans-serif" };
const H2 = "text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]";

/** The owner-approved comparison, plus the contract row (the live site already says month-to-month). */
const COMPARE: [string, string, string][] = [
  ["Who does the work", "5 suppliers you manage", "One team, one point of contact"],
  ["How it is judged", "Reports full of activity", "One result you can count"],
  ["Who replies to enquiries", "Whoever is free", "Tom, in seconds, 24/7"],
  ["The contract", "Locked in for 12 months", "Month-to-month"],
  ["What you own", "Nothing when you leave", "Your accounts, ads, content and data"],
];

/** Named client words first: a name and a company is worth more than a first name. */
const QUOTES = [homepageQuotes[0], servicesHubQuotes[0], homepageQuotes[2], whyOarcQuotes[1]].filter(Boolean);

/** Breadcrumb only. Proof sits lower down, after the visitor knows what we do. */
export function DeptTop({ data, tone }: { data: DeptSeo; tone: "light" | "dark" | "ai" }) {
  const dim = tone === "light" ? "text-[#0E0E0E]/75" : "text-[#F5F3EE]/80";
  return (
    <div className="px-5 pb-2 pt-28 md:pt-32" style={sans}>
      <nav aria-label="Breadcrumb" className={`mx-auto max-w-[860px] text-base ${dim}`}>
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{data.keyword} in Malta</span>
      </nav>
    </div>
  );
}

/** What happens after they contact us: the whole journey in 4 short steps. */
const NEXT: [string, string][] = [
  ["You book the free check.", "20 minutes, on a call. No preparation needed."],
  ["We show you what to fix.", "You get a 1-page scorecard and 3 fixes you can do yourself."],
  ["You get one clear price.", "In writing, before anything starts. No surprises."],
  ["We do the work.", "One team. Every month you see the result. You can leave any month."],
];

/** Why OARC, the same three true things on every page. */
const WHY: [string, string][] = [
  ["One team does all of it.", "Marketing, creative, tech and AI. You talk to one team, not 5 suppliers."],
  ["We use AI where it helps you.", "Tom answers your customers in 4 seconds, day and night."],
  ["You can leave any month.", "No lock-in. Your accounts, your content and your data always stay yours."],
];

/**
 * The plain-words top of a department page: what it is (with the search phrase), what we do,
 * what you get and why OARC. The owner's own detailed content follows underneath.
 */
export function DeptIntro({ data }: { data: DeptSeo }) {
  const intro = data.intro;
  if (!intro) return null;
  const check = data.offer.name.replace(/^The free /, "");
  return (
    <div style={sans}>
      <section className="bg-[#0E0E0E] px-5 pb-16 pt-6 text-[#F5F3EE] md:pb-24">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-[clamp(3rem,8.6vw,6.4rem)] font-normal leading-[.92] tracking-[-0.02em]" style={serif}>
            {intro.lead}{" "}
            <em className="text-[#F9FF84]" style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}>
              {intro.punch}
            </em>
          </h1>
          <p className="mt-8 max-w-[46ch] text-xl leading-relaxed md:text-2xl">{intro.promise}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#free-check"
              className="inline-flex items-center rounded-full bg-[#F9FF84] px-7 py-4 text-lg font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
            >
              Get my free {check} →
            </a>
            <a href="#what-happens" className="border-b border-white/60 pb-1 text-lg font-semibold hover:border-white">
              See what happens next
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE] px-5 py-16 text-[#0E0E0E] md:py-24">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className={H2} style={serif}>
                What we do.
              </h2>
              <ul className="mt-6 border-t border-[#0E0E0E]/25">
                {intro.weDo.map((t, i) => (
                  <li key={t} className="flex gap-4 border-b border-[#0E0E0E]/25 py-4 text-xl leading-snug">
                    <span className="w-6 shrink-0 text-[26px] leading-none text-[#0035AD]" style={serif}>
                      {i + 1}
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={H2} style={serif}>
                What you get.
              </h2>
              <ul className="mt-6 border-t border-[#0E0E0E]/25">
                {intro.youGet.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-[#0E0E0E]/25 py-4 text-xl leading-snug">
                    <span aria-hidden="true" className="w-6 shrink-0 font-semibold">
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 max-w-[60ch] text-xl leading-relaxed">{data.bestFor}</p>

          <h2 className={`${H2} mt-16`} style={serif}>
            Why OARC.
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {WHY.map(([big, small]) => (
              <li key={big} className="rounded-[18px] bg-white p-6 ring-1 ring-[#0E0E0E]/10">
                <p className="text-[26px] leading-[1.05] text-[#0035AD]" style={serif}>
                  {big}
                </p>
                <p className="mt-3 text-lg leading-snug">{small}</p>
              </li>
            ))}
          </ul>
          <a
            href="#free-check"
            className="mt-8 inline-flex items-center rounded-full bg-[#0E0E0E] px-7 py-4 text-lg font-semibold text-[#F5F3EE] transition-opacity hover:opacity-90"
          >
            Get my free {check} →
          </a>
        </div>
      </section>
    </div>
  );
}

/** Everything under the department content. */
export function DeptBottom({ data }: { data: DeptSeo }) {
  const check = data.offer.name.replace(/^The /, "the ");
  return (
    <div className="text-[#0E0E0E]" style={sans}>
      {data.leak && <LeakCheck steps={data.leak} offerName={data.offer.name} />}

      {/* Proof, in the middle: The table (espresso ground, paper words, one yellow signal) */}
      <section aria-labelledby="dept-proof" className="bg-[#3E2723] px-5 py-16 text-[#F5F3EE] md:py-24">
        <div className="mx-auto max-w-[860px]">
          <h2 id="dept-proof" className={H2} style={serif}>
            Don&apos;t take <em className="text-[#F9FF84]">our</em> word for it.
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
            {TRUST.map((t) => (
              <li key={t.big} className="border-t border-[#F5F3EE]/25 pt-4">
                <span className="block text-[32px] leading-none" style={serif}>
                  {t.big}
                </span>
                <span className="mt-2 block text-base leading-snug text-[#F5F3EE]/85">{t.small}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {QUOTES.map((q) => (
              <figure key={q.quote} className="rounded-[18px] bg-[#F5F3EE] p-6 text-[#0E0E0E]">
                <blockquote className="text-[24px] leading-[1.15]" style={serif}>
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-4 text-base font-semibold">{q.credit.replace(" — ", ", ")}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-[#F5F3EE]/25 pt-8">
            <span className="text-base font-semibold">Trusted by 20+ brands</span>
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto opacity-90 brightness-0 invert md:h-7"
              />
            ))}
          </div>
        </div>
      </section>

      {/* The offer: Yellow flood (yellow ground, ink words, black button) */}
      <section id="free-check" aria-labelledby="dept-offer" className="scroll-mt-24 bg-[#F9FF84] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <p className="text-lg font-semibold">Free. 20 minutes. Yours to keep.</p>
          <h2 id="dept-offer" className={`${H2} mt-3`} style={serif}>
            {data.offer.name}.
          </h2>
          <p className="mt-5 max-w-[40ch] text-xl leading-relaxed md:text-2xl">{data.offer.line}</p>
          <h3 className="mt-10 text-lg font-semibold">Exactly what you get:</h3>
          <ol className="mt-3 border-t border-[#0E0E0E]/25">
            {data.offer.checks.map((c, i) => (
              <li key={c} className="flex gap-4 border-b border-[#0E0E0E]/25 py-4 text-lg leading-snug md:text-xl">
                <span className="w-7 shrink-0 text-[26px] leading-none" style={serif}>
                  {i + 1}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">
            You leave with a 1-page scorecard, the biggest problem and 3 fixes you can do yourself. It&apos;s yours even if
            you never hire us. No sales pitch: if there is nothing worth fixing, we tell you. And if you do hire us:
            month-to-month, no lock-in.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#0E0E0E] px-7 py-4 text-lg font-semibold text-[#F9FF84] transition-opacity hover:opacity-90"
            >
              Get my free check →
            </Link>
            <a
              href={`https://wa.me/${NAP.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-[#0E0E0E] pb-1 text-lg font-semibold"
            >
              Or WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* What happens next: white ground, ink words */}
      <section id="what-happens" aria-labelledby="dept-next" className="scroll-mt-20 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[980px]">
          <h2 id="dept-next" className={H2} style={serif}>
            What happens next.
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {NEXT.map(([big, small], i) => (
              <li key={big} className="rounded-[18px] bg-[#F5F3EE] p-6">
                <span className="block text-[44px] leading-none text-[#0035AD]" style={serif}>
                  {i + 1}
                </span>
                <p className="mt-3 text-xl font-semibold leading-snug">{big}</p>
                <p className="mt-2 text-lg leading-snug">{small}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A normal agency vs OARC: Editorial (paper ground, ink words) */}
      <section aria-labelledby="dept-compare" className="bg-[#F5F3EE] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <h2 id="dept-compare" className={H2} style={serif}>
            A normal agency vs OARC.
          </h2>
          <table className="mt-8 w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-[#0E0E0E]">
                <th scope="col" className="w-[30%] py-3 pr-3 text-base font-semibold">
                  <span className="sr-only">Question</span>
                </th>
                <th scope="col" className="py-3 pr-3 text-base font-semibold text-[#0E0E0E]/70">
                  A normal agency
                </th>
                <th scope="col" className="py-3 text-lg font-semibold">
                  OARC
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([q, them, us]) => (
                <tr key={q} className="border-b border-[#0E0E0E]/20 align-top">
                  <th scope="row" className="py-4 pr-3 text-base font-semibold">
                    {q}
                  </th>
                  <td className="py-4 pr-3 text-base text-[#0E0E0E]/70">{them}</td>
                  <td className="py-4 text-lg font-semibold">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tom: The fix (cobalt ground, paper words) */}
      <section aria-labelledby="dept-tom" className="bg-[#0035AD] px-5 py-16 text-[#F5F3EE] md:py-24">
        <div className="mx-auto grid max-w-[860px] gap-8 md:grid-cols-[1.3fr_.7fr] md:items-end">
          <div>
            <h2 id="dept-tom" className={H2} style={serif}>
              Meet Tom.
              <br />
              <em>He answers in 4 seconds.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Tom is your AI receptionist. He picks up every call, WhatsApp, Instagram message and email, day or night,
              in English, Maltese and Italian. He answers questions, books customers in and passes anything tricky to
              your team.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/voice-ai-worker"
              className="inline-flex items-center rounded-full bg-[#F5F3EE] px-7 py-4 text-base font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
            >
              Hear Tom answer →
            </Link>
            <Link href="/services/ai-staff" className="border-b border-white/60 pb-1 text-base font-semibold hover:border-white">
              See all AI staff
            </Link>
          </div>
        </div>
      </section>

      {/* In short + questions: Editorial */}
      <section aria-labelledby="dept-short" className="bg-[#F5F3EE] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <h2 id="dept-short" className={H2} style={serif}>
            {data.keyword} in Malta, in short.
          </h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl" data-speakable data-testid="dept-entity-sentence">
            {data.answer}
          </p>
          <p className="mt-5 text-lg leading-relaxed">{data.bestFor}</p>

          <h2 id="dept-faq" className={`${H2} mt-16 md:mt-24`} style={serif}>
            Questions owners ask.
          </h2>
          <div className="mt-8 border-t border-[#0E0E0E]/25">
            {data.faqs.map((f) => (
              <details key={f.question} className="group border-b border-[#0E0E0E]/25 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-xl font-semibold leading-snug">{f.question}</h3>
                  <span aria-hidden="true" className="mt-0.5 text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-lg leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* One call to action + related: Default (ink ground, paper words, one yellow button) */}
      <section aria-labelledby="dept-cta" className="bg-[#0E0E0E] px-5 py-16 text-[#F5F3EE] md:py-24">
        <div className="mx-auto max-w-[860px]">
          <h2 id="dept-cta" className={H2} style={serif}>
            20 minutes. Free. You keep the scorecard.
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed">
            Book {check}. We look at your business, show you where you are losing customers or time, and what we would
            fix first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#F9FF84] px-7 py-4 text-lg font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
            >
              Get my free check →
            </Link>
            <a
              href={`https://wa.me/${NAP.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/60 pb-1 text-lg font-semibold hover:border-white"
            >
              Or WhatsApp us
            </a>
          </div>
          <nav aria-label="Related services" className="mt-14 border-t border-white/25 pt-8" data-testid="dept-money-links">
            <p className="text-2xl" style={serif}>
              Keep reading
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {data.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex rounded-full border border-white/40 px-4 py-2.5 text-base transition-colors hover:bg-[#F5F3EE] hover:text-[#0E0E0E]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-base text-[#F5F3EE]/80">
              OARC Digital, {NAP.streetAddressShort}, {NAP.addressLocality}, Malta · {NAP.phoneDisplay} · Updated {data.updated}
            </p>
          </nav>
        </div>
      </section>
    </div>
  );
}
