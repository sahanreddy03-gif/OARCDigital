import Link from "next/link";
import DeptViz from "./DeptViz";
import { homepageQuotes } from "@/lib/reviews/approvedQuotes";
import { NAP } from "@/lib/seo/nap";
import { TRUST, type DepartmentData } from "@/lib/departments/types";

/**
 * Long-form department page (one template for all 15 departments).
 * Design system v3 (Notion): ink / paper / cobalt grounds, Instrument Serif
 * display, one yellow signal per frame, red only as a dot. Three type sizes.
 * Everything a search engine or AI assistant needs is real text in the HTML:
 * answer-first sentence, keyword line, steps, comparison table, FAQs.
 */
const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

const LOGOS = [
  { name: "Kreta", src: "/brand-logos/recreated/kreta.svg" },
  { name: "BrewDog", src: "/brand-logos/normalized/brewdog.png" },
  { name: "32Red", src: "/brand-logos/normalized/32red.png" },
  { name: "The Alchemist", src: "/brand-logos/recreated/alchemist.svg" },
  { name: "Palino", src: "/brand-logos/normalized/palino.png" },
] as const;

const VIZ_CSS = `
.dept-viz svg{width:100%;height:auto;display:block;overflow:visible}
.dept-viz .wire{fill:none;stroke:rgba(14,14,14,.28);stroke-width:1.5}
.dept-viz .node{fill:rgba(14,14,14,.16)}
.dept-viz .nodeOn{fill:#0035AD}
.dept-viz .lab{fill:rgba(14,14,14,.72)}
.dept-viz .labk{fill:#F5F3EE}
.dept-viz .glow{filter:drop-shadow(0 4px 10px rgba(0,53,173,.28))}
.dept-viz .up,.dept-viz .pop,.dept-viz .grow{transform-box:fill-box}
@media (prefers-reduced-motion:no-preference){
  .dept-viz .up{opacity:0}
  .dept-viz .pop{opacity:0;transform:scale(.6);transform-origin:center}
  .dept-viz .draw{stroke-dasharray:var(--L);stroke-dashoffset:var(--L)}
  .dept-viz .grow{transform:scaleY(0);transform-origin:bottom}
  .dept-viz[data-in] .up{animation:dv-up .7s cubic-bezier(.16,1,.3,1) forwards}
  .dept-viz[data-in] .pop{animation:dv-pop .6s cubic-bezier(.16,1,.3,1) forwards}
  .dept-viz[data-in] .draw{animation:dv-draw 1.4s cubic-bezier(.16,1,.3,1) forwards}
  .dept-viz[data-in] .grow{animation:dv-grow .9s cubic-bezier(.16,1,.3,1) forwards}
  .dept-viz[data-in] .spin{animation:dv-spin 4s linear 3}
}
@keyframes dv-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes dv-pop{to{opacity:1;transform:scale(1)}}
@keyframes dv-draw{to{stroke-dashoffset:0}}
@keyframes dv-grow{to{transform:scaleY(1)}}
@keyframes dv-spin{to{transform:rotate(360deg)}}
`;

function Buttons({ dark = true }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <Link
        href="/contact"
        className={`inline-flex items-center rounded-full px-7 py-4 text-base font-semibold transition-opacity hover:opacity-90 ${
          dark ? "bg-[#F5F3EE] text-[#0E0E0E]" : "bg-[#0E0E0E] text-[#F5F3EE]"
        }`}
      >
        Book a free 20-minute call →
      </Link>
      <a
        href={`https://wa.me/${NAP.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`border-b pb-1 text-base font-semibold ${
          dark ? "border-white/40 hover:border-white" : "border-[#0E0E0E]/30 hover:border-[#0E0E0E]"
        }`}
      >
        Or WhatsApp us
      </a>
    </div>
  );
}

export default function DepartmentPage({ data }: { data: DepartmentData }) {
  const hookWords = data.hook.replace(/\.$/, "");

  return (
    <article className="bg-[#F5F3EE] text-[#0E0E0E]">
      <style>{VIZ_CSS}</style>

      {/* 1 — Hook */}
      <header className="bg-[#0E0E0E] px-4 pb-14 pt-28 text-[#F5F3EE] md:px-10 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[1180px]">
          <h1 className="max-w-[14ch] text-[clamp(3.4rem,9vw,8rem)] font-normal leading-[.9] tracking-[-0.025em]" style={serif}>
            {hookWords}
            <span className="text-[#FF4B4B]">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#F5F3EE]/85 md:text-2xl">{data.keywordLine}</p>
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed text-[#F5F3EE]/65 md:text-lg"
            data-speakable
            data-testid="dept-entity-sentence"
          >
            {data.answer}
          </p>
          <div className="mt-9">
            <Buttons />
          </div>

          <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">
            {TRUST.map((t) => (
              <li key={t.big} className="bg-[#0E0E0E] p-5 last:col-span-2 md:last:col-span-1">
                <span className="block text-[28px] leading-none text-[#F9FF84]" style={serif}>
                  {t.big}
                </span>
                <span className="mt-2 block text-[15px] leading-snug text-[#F5F3EE]/70">{t.small}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* 2 — Logos */}
      <section aria-label="Brands we work with" className="border-b border-[#0E0E0E]/10 px-4 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
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
      </section>

      {/* 3 — The journey */}
      <section aria-labelledby="dept-journey" className="px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <h2 id="dept-journey" className="max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]" style={serif}>
            {data.journey.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0E0E0E]/75 md:text-xl">{data.journey.intro}</p>

          <ol className="relative mt-14 grid gap-4 md:grid-cols-6 md:gap-0">
            <span aria-hidden="true" className="absolute left-[19px] top-0 h-full w-px bg-[#0E0E0E]/20 md:left-0 md:top-[19px] md:h-px md:w-full" />
            {data.steps.map((step, i) => (
              <li key={step.title} className="relative flex items-center gap-4 md:block md:pr-4">
                <a
                  href={`#step-${i + 1}`}
                  className="relative z-[1] grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0035AD] text-sm font-bold text-[#F5F3EE] transition-transform hover:scale-110"
                >
                  {i + 1}
                </a>
                <a href={`#step-${i + 1}`} className="block md:mt-5">
                  <span className="block text-2xl leading-none md:text-[26px]" style={serif}>
                    {step.title}
                  </span>
                  <span className="mt-1.5 block text-base text-[#0E0E0E]/60">{step.short}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-10 flex flex-wrap items-center gap-3 text-lg">
            <span className="text-[#0E0E0E]/60">{data.journey.from}</span>
            <span aria-hidden="true" className="h-px w-16 bg-[#0E0E0E]/30" />
            <span className="font-semibold">{data.journey.to}</span>
          </p>
        </div>
      </section>

      {/* 4 — Each step in detail */}
      <section aria-label="How it works, step by step" className="px-4 pb-10 md:px-10">
        <div className="mx-auto max-w-[1180px] divide-y divide-[#0E0E0E]/15 border-t border-[#0E0E0E]/15">
          {data.steps.map((step, i) => (
            <div
              key={step.title}
              id={`step-${i + 1}`}
              className="grid scroll-mt-28 gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16 md:py-24"
            >
              <div className={i % 2 ? "md:order-2" : ""}>
                <span className="text-[clamp(3rem,6vw,4.5rem)] leading-none text-[#0035AD]" style={serif}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[clamp(2.4rem,4.5vw,3.6rem)] font-normal leading-[.95]" style={serif}>
                  {step.title}
                </h3>
                <p className="mt-2 text-xl italic text-[#0E0E0E]/60" style={serif}>
                  {step.short}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-[#0E0E0E]/80">{step.text}</p>
                <p className="mt-4 text-base text-[#0E0E0E]/60">Done by: {step.who}.</p>
                <div className="mt-8 flex items-baseline gap-4 border-l-2 border-[#0035AD] pl-5">
                  <span className="shrink-0 text-[clamp(2.6rem,5vw,3.8rem)] leading-none text-[#0035AD]" style={serif}>
                    {step.stat}
                  </span>
                  <span className="text-base leading-snug text-[#0E0E0E]/70">{step.statText}</span>
                </div>
                {step.tom ? (
                  <Link
                    href="/voice-ai-worker"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0035AD] px-6 py-3.5 text-base font-semibold text-[#F5F3EE] transition-opacity hover:opacity-90"
                  >
                    Hear Tom answer a call →
                  </Link>
                ) : null}
              </div>
              <div className={`rounded-3xl border border-[#0E0E0E]/10 bg-white/70 p-6 md:p-10 ${i % 2 ? "md:order-1" : ""}`}>
                <DeptViz svg={step.viz} label={step.vizLabel} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Tom */}
      <section aria-labelledby="dept-tom" className="bg-[#0E0E0E] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <h2 id="dept-tom" className="text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]" style={serif}>
              Meet Tom.
              <br />
              <em className="text-[#F9FF84]">He answers in 4 seconds.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F5F3EE]/75 md:text-xl">
              Tom is your AI receptionist. He picks up every call, WhatsApp, Instagram message and email, day or night,
              in English, Maltese and Italian. He answers questions, books customers in and passes anything tricky to
              your team. No more lost customers because nobody picked up.
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

      {/* 6 — Comparison */}
      <section aria-labelledby="dept-compare" className="px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <h2 id="dept-compare" className="text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]" style={serif}>
            {data.compare.title}
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-base md:text-lg">
              <thead>
                <tr className="border-b-2 border-[#0E0E0E]">
                  <th scope="col" className="py-4 pr-4 font-normal text-[#0E0E0E]/50" />
                  <th scope="col" className="py-4 pr-4 text-xl font-normal text-[#0E0E0E]/60" style={serif}>
                    A normal agency
                  </th>
                  <th scope="col" className="py-4 text-xl font-normal text-[#0035AD]" style={serif}>
                    OARC Digital
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.compare.rows.map(([label, them, us]) => (
                  <tr key={label} className="border-b border-[#0E0E0E]/15">
                    <th scope="row" className="py-5 pr-4 font-semibold">
                      {label}
                    </th>
                    <td className="py-5 pr-4 text-[#0E0E0E]/55">{them}</td>
                    <td className="py-5 font-semibold text-[#0035AD]">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-2xl text-lg text-[#0E0E0E]/75">{data.bestFor}</p>
        </div>
      </section>

      {/* 7 — What clients say */}
      <section aria-labelledby="dept-proof" className="px-4 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1180px]">
          <h2 id="dept-proof" className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-none" style={serif}>
            What our clients say.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {homepageQuotes.map((q) => (
              <figure key={q.quote} className="rounded-2xl border border-[#0E0E0E]/10 bg-white/70 p-7">
                <blockquote className="text-2xl leading-snug" style={serif}>
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-4 text-base text-[#0E0E0E]/60">{q.credit.replace(" — ", ", ")}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Guarantee */}
      <section aria-labelledby="dept-guarantee" className="bg-[#0035AD] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 id="dept-guarantee" className="max-w-4xl text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]" style={serif}>
            {data.guarantee.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F3EE]/80 md:text-xl">{data.guarantee.text}</p>
        </div>
      </section>

      {/* 9 — FAQs */}
      <section aria-labelledby="dept-faq" className="px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[.8fr_1.2fr]">
          <h2 id="dept-faq" className="text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]" style={serif}>
            Questions owners ask.
          </h2>
          <div className="border-t border-[#0E0E0E]/20">
            {data.faqs.map((f) => (
              <details key={f.question} className="group border-b border-[#0E0E0E]/20 py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-xl font-semibold leading-snug">
                  {f.question}
                  <span aria-hidden="true" className="mt-1 text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#0E0E0E]/75">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Final call */}
      <section aria-labelledby="dept-cta" className="bg-[#0E0E0E] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <h2 id="dept-cta" className="max-w-4xl text-[clamp(2.8rem,7vw,6rem)] font-normal leading-[.92] tracking-[-0.02em]" style={serif}>
            {data.cta.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#F5F3EE]/75 md:text-xl">{data.cta.text}</p>
          <div className="mt-9">
            <Buttons />
          </div>
          <nav aria-label="Related pages" className="mt-16 border-t border-white/15 pt-8" data-testid="dept-money-links">
            <p className="text-base text-[#F5F3EE]/60">Keep reading</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {data.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex rounded-full border border-white/25 px-4 py-2.5 text-base transition-colors hover:bg-[#F5F3EE] hover:text-[#0E0E0E]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-base text-[#F5F3EE]/50">
              OARC Digital, {NAP.streetAddressShort}, {NAP.addressLocality}, Malta · {NAP.phoneDisplay} · Updated{" "}
              {data.updated}
            </p>
          </nav>
        </div>
      </section>
    </article>
  );
}
