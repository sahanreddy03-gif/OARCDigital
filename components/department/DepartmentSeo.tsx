import Link from "next/link";
import { homepageQuotes } from "@/lib/reviews/approvedQuotes";
import { NAP } from "@/lib/seo/nap";
import { LOGOS, TRUST, type DeptSeo } from "@/lib/departments/types";

/**
 * The search layer around a department's own content: proof at the top, and a
 * plain-words summary, Tom, client words, FAQs and related links underneath.
 * Brand palette only: ink, paper, cobalt; yellow once per dark frame.
 */
const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

/** Breadcrumb + trust claims, above the department content. */
export function DeptTop({ data, dark }: { data: DeptSeo; dark: boolean }) {
  const fg = dark ? "text-[#F5F3EE]" : "text-[#0E0E0E]";
  const dim = dark ? "text-[#F5F3EE]/65" : "text-[#0E0E0E]/65";
  const line = dark ? "border-white/12" : "border-[#0E0E0E]/12";
  const big = dark ? "text-[#F9FF84]" : "text-[#0035AD]";
  return (
    <div className={`${fg} px-5 pb-6 pt-28 md:pt-32`}>
      <div className="mx-auto max-w-[920px]">
        <nav aria-label="Breadcrumb" className={`text-[15px] ${dim}`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{data.keyword} in Malta</span>
        </nav>
        <ul className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 border-y ${line} py-4 md:grid md:grid-cols-5 md:gap-x-6 md:py-5`}>
          {TRUST.map((t) => (
            <li key={t.big}>
              <span className={`block text-[19px] leading-none md:text-[22px] ${big}`} style={serif}>
                {t.big}
              </span>
              <span className={`mt-1.5 hidden text-[14px] leading-snug md:block ${dim}`}>{t.small}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Everything under the department content. */
export function DeptBottom({ data }: { data: DeptSeo }) {
  return (
    <div className="bg-[#F5F3EE] text-[#0E0E0E]">
      {/* In short: the answer AI assistants quote */}
      <section aria-labelledby="dept-short" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <h2 id="dept-short" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
            {data.keyword} in Malta, in short.
          </h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl" data-speakable data-testid="dept-entity-sentence">
            {data.answer}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#0E0E0E]/70">{data.bestFor}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-[#0E0E0E]/12 pt-8">
            <span className="text-base font-semibold text-[#0E0E0E]/60">Trusted by 20+ brands</span>
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto opacity-70 grayscale md:h-7"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tom */}
      <section aria-labelledby="dept-tom" className="bg-[#0E0E0E] px-5 py-16 text-[#F5F3EE] md:py-24">
        <div className="mx-auto grid max-w-[920px] gap-8 md:grid-cols-[1.3fr_.7fr] md:items-end">
          <div>
            <h2 id="dept-tom" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
              Meet Tom.
              <br />
              <em className="text-[#F9FF84]">He answers in 4 seconds.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#F5F3EE]/75">
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
            <Link href="/services/ai-staff" className="border-b border-white/40 pb-1 text-base font-semibold hover:border-white">
              See all AI staff
            </Link>
          </div>
        </div>
      </section>

      {/* Client words */}
      <section aria-labelledby="dept-proof" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <h2 id="dept-proof" className="text-[clamp(2.2rem,4.5vw,3.4rem)] font-normal leading-none" style={serif}>
            What our clients say.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {homepageQuotes.map((q) => (
              <figure key={q.quote} className="rounded-2xl border border-[#0E0E0E]/10 bg-white/70 p-6">
                <blockquote className="text-[22px] leading-snug" style={serif}>
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-3 text-base text-[#0E0E0E]/60">{q.credit.replace(" — ", ", ")}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="dept-faq" className="border-t border-[#0E0E0E]/12 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[920px]">
          <h2 id="dept-faq" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
            Questions owners ask.
          </h2>
          <div className="mt-8 border-t border-[#0E0E0E]/20">
            {data.faqs.map((f) => (
              <details key={f.question} className="group border-b border-[#0E0E0E]/20 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-semibold leading-snug">
                  <h3 className="text-xl font-semibold leading-snug">{f.question}</h3>
                  <span aria-hidden="true" className="mt-0.5 text-2xl leading-none text-[#0035AD] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-lg leading-relaxed text-[#0E0E0E]/75">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Book + related */}
      <section aria-labelledby="dept-cta" className="bg-[#0035AD] px-5 py-16 text-[#F5F3EE] md:py-24">
        <div className="mx-auto max-w-[920px]">
          <h2 id="dept-cta" className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[.95]" style={serif}>
            Book a free 20-minute call.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#F5F3EE]/80">
            We look at your business, show you where you are losing customers or time, and what we would fix first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#F5F3EE] px-7 py-4 text-base font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
            >
              Book a free call →
            </Link>
            <a
              href={`https://wa.me/${NAP.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/50 pb-1 text-base font-semibold hover:border-white"
            >
              Or WhatsApp us
            </a>
          </div>
          <nav aria-label="Related services" className="mt-14 border-t border-white/20 pt-8" data-testid="dept-money-links">
            <p className="text-lg" style={serif}>
              Keep reading
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {data.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex rounded-full border border-white/30 px-4 py-2.5 text-base transition-colors hover:bg-[#F5F3EE] hover:text-[#0035AD]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-base text-[#F5F3EE]/60">
              OARC Digital, {NAP.streetAddressShort}, {NAP.addressLocality}, Malta · {NAP.phoneDisplay} · Updated {data.updated}
            </p>
          </nav>
        </div>
      </section>
    </div>
  );
}
