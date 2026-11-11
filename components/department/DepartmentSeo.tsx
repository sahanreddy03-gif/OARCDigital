import Link from "next/link";
import { homepageQuotes, servicesHubQuotes, whyOarcQuotes } from "@/lib/reviews/approvedQuotes";
import { NAP } from "@/lib/seo/nap";
import { LOGOS, TRUST, type DeptSeo } from "@/lib/departments/types";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";

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

/**
 * Real client work for each department, from the Our Work records (name, photo and the
 * recorded scope only; no result figures are claimed here). Keys are /our-work slugs.
 */
const WORK_NAMES: Record<string, string> = {
  "louisiana-mama": "Louisiana Mama",
  palino: "Palino",
  "ricky-jr-burger": "Ricky Jr Burger",
  "mcw-cbd": "MCW CBD Relax Shop",
  "calle-bistro": "Calle Bistro",
  kreta: "Kreta",
  "tiffany": "Tiffany Lounge",
  "massive-fan-zone": "Spinola Bay Fan Zone",
  "spinola-gin-fest": "Spinola Gin Fest",
};
const WORK_BY_DEPT: Record<string, string[]> = {
  Growth: ["calle-bistro", "kreta", "louisiana-mama"],
  Sales: ["louisiana-mama", "tiffany", "calle-bistro"],
  Media: ["calle-bistro", "massive-fan-zone", "spinola-gin-fest"],
  Social: ["ricky-jr-burger", "palino", "louisiana-mama"],
  Clarity: ["calle-bistro", "kreta", "mcw-cbd"],
  "AI Staff": ["louisiana-mama", "tiffany", "calle-bistro"],
  Creative: ["palino", "tiffany", "spinola-gin-fest"],
  Operations: ["louisiana-mama", "tiffany", "mcw-cbd"],
  Automation: ["louisiana-mama", "tiffany", "calle-bistro"],
  Transformation: ["mcw-cbd", "tiffany", "louisiana-mama"],
  Reputation: ["mcw-cbd", "kreta", "calle-bistro"],
  Brand: ["palino", "louisiana-mama", "ricky-jr-burger"],
  Enquiries: ["louisiana-mama", "tiffany", "calle-bistro"],
};

/** Every client named in the approved quotes, the logo strip and the Our Work records. */
const CLIENT_WALL = [
  "BrewDog", "32Red", "The Alchemist", "Kreta", "Palino", "Louisiana Mama", "Calle Bistro", "Tiffany Lounge",
  "Ricky Jr Burger", "MCW CBD Relax Shop", "Bay Street Group", "Eden Leisure Group", "Dhalia Real Estate Services",
  "CSB Group", "Camilleri Preziosi", "Polidano Group", "G3 Group", "Carmelo Abela Group",
  "Cynergi Health & Fitness Club", "Jatco Insurance Brokers", "Fahrenheit Logistics", "Rent Anytime",
];

function RealWork({ dept }: { dept: string }) {
  const items = (WORK_BY_DEPT[dept] ?? [])
    .map((slug) => ({ slug, study: CLIENT_CASE_STUDIES[slug] }))
    .filter((x) => x.study);
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="dept-work" className="bg-[#0E0E0E] px-5 py-16 text-[#F5F3EE] md:py-24">
      <div className="mx-auto max-w-[980px]">
        <h2 id="dept-work" className={H2} style={serif}>
          We don&apos;t just say it. <em className="text-[#F9FF84]" style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}>We&apos;ve done it.</em>
        </h2>
        <ul className="mt-10 border-t border-[#F5F3EE]/30">
          {items.map(({ slug, study }) => (
            <li key={slug} className="border-b border-[#F5F3EE]/30">
              <Link href={`/our-work/${slug}`} className="group grid gap-x-8 gap-y-2 py-6 md:grid-cols-[1fr_1.2fr_auto] md:items-baseline">
                <span className="text-[clamp(2.2rem,5vw,3.4rem)] leading-none" style={serif}>
                  {WORK_NAMES[slug]}
                </span>
                <span className="text-xl leading-snug">{study.facts.slice(0, 2).join(". ")}.</span>
                <span aria-hidden="true" className="text-[28px] leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-lg font-semibold">And the brands that trust us:</p>
        <p className="mt-3 text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.25]" style={serif}>
          {CLIENT_WALL.join(" · ")}
        </p>
      </div>
    </section>
  );
}

/**
 * Example phone screens: what the owner sees on their phone when the service is working.
 * Illustrations, labelled "Example" on the page. Not client results.
 */
const PHONE: Record<string, [string, string][]> = {
  Sales: [["New lead", "Replied in 4 seconds"], ["Call booked", "Tuesday, 10:30"], ["Quote accepted", "Deal closed"]],
  Media: [["Ad A", "14 enquiries this week"], ["Ad B", "Paused. Not working"], ["Budget moved", "To the ad that sells"]],
  Social: [["Reel posted", "09:00, as planned"], ["New message", "\u201cDo you have a table tonight?\u201d"], ["Booked", "Table for 4, 20:30"]],
  Clarity: [["Google", "18 customers"], ["Instagram ads", "9 customers"], ["Flyers", "0 customers. Cut it"]],
  "AI Staff": [["Call at 23:14", "Answered by Tom"], ["Booking made", "Thursday, 14:00"], ["Passed to you", "1 tricky question"]],
  Creative: [["New video", "Ready to post"], ["New ad set", "6 versions"], ["Brand kit", "Updated"]],
  Operations: [["Invoices", "Sent automatically"], ["Reminders", "12 sent today"], ["Weekly report", "Ready"]],
  Automation: [["New lead", "Logged and answered"], ["Follow-up", "Sent on day 2"], ["Booked", "Added to calendar"]],
  Transformation: [["Orders", "All in one place"], ["Stock", "Updated live"], ["Team", "Same screen"]],
  Reputation: [["New review", "5 stars"], ["Press", "Story published"], ["Mentions", "Up this week"]],
  Brand: [["Logo", "One version, everywhere"], ["Website", "Matches the shop"], ["Posts", "Look like you"]],
  Enquiries: [["WhatsApp, 02:10", "Answered in 4 seconds"], ["Instagram DM", "Answered in 4 seconds"], ["Booked", "Saturday, 13:00"]],
};

function PhoneMock({ dept }: { dept: string }) {
  const rows = PHONE[dept];
  if (!rows) return null;
  return (
    <figure className="mx-auto w-[260px] shrink-0 md:mx-0">
      <div className="rounded-[38px] border-[6px] border-[#F5F3EE]/90 bg-[#0E0E0E] p-3">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[#F5F3EE]/40" />
        <ul className="flex flex-col gap-2.5">
          {rows.map(([top, bottom], i) => (
            <li key={top} className={`rounded-2xl p-4 ${i === rows.length - 1 ? "bg-[#F9FF84] text-[#0E0E0E]" : "bg-[#F5F3EE] text-[#0E0E0E]"}`}>
              <span className="block text-base font-semibold leading-tight">{top}</span>
              <span className="mt-1 block text-base leading-snug">{bottom}</span>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#F5F3EE]/40" />
      </div>
      <figcaption className="mt-3 text-center text-base text-[#F5F3EE]/80">Example of your phone on a normal day.</figcaption>
    </figure>
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
        <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-[1fr_auto] md:items-center">
         <div>
          <h1 className="text-[clamp(3rem,7.4vw,5.6rem)] font-normal leading-[.92] tracking-[-0.02em]" style={serif}>
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
         <PhoneMock dept={data.dept} />
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
      <RealWork dept={data.dept} />

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
