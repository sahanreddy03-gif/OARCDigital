import Link from "next/link";
import { NAP } from "@/lib/seo/nap";
import { bookingUrl } from "@/lib/utm";

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
    title: "Un solo team, tutto",
    text: "Brand, contenuti, social media, pubblicità, sito web e staff AI sotto lo stesso tetto. Un solo piano, una sola persona da chiamare.",
  },
  {
    n: "02",
    title: "Resta tutto tuo",
    text: "I tuoi account pubblicitari, i video, le pagine e i dati restano a tuo nome. Sempre.",
  },
  {
    n: "03",
    title: "Soddisfatti o rimborsati",
    text: "Concordiamo gli obiettivi prima di iniziare. Se non li raggiungiamo, ti restituiamo i soldi.",
  },
  {
    n: "04",
    title: "A Malta, dal 2023",
    text: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Vieni a conoscere le persone che fanno il lavoro.`,
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
            Perché OARC
            <br />
            <em>
              Digital<span className="text-[#FF4B4B]">.</span>
            </em>
          </h2>
          <p className="oarc-reveal max-w-xl text-lg leading-relaxed text-[#0E0E0E]/80 md:text-xl">
            OARC Digital è un&apos;agenzia di marketing a {NAP.addressLocality}, Malta, fondata nel 2023. Un solo team
            segue brand, contenuti, social media, pubblicità, sito web e staff AI, così non devi gestire cinque fornitori.
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
          <a
            href={bookingUrl("home-why-oarc")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#0E0E0E] px-6 py-3.5 text-[15px] font-semibold text-[#F5F3EE] transition-opacity hover:opacity-85"
          >
            Prenota una chiamata di 20 minuti →
          </a>
          <Link href="/why-oarc" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Perché OARC, in dettaglio
          </Link>
          <Link href="/about" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Conosci il team
          </Link>
          <Link href="/tools" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Strumenti gratuiti per la tua attività
          </Link>
        </div>
      </div>
    </section>
  );
}
