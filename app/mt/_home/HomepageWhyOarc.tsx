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
    title: "Tim wieħed, kollox",
    text: "Brand, kontenut, social media, reklami, websajt u staff tal-AI taħt saqaf wieħed. Pjan wieħed, persuna waħda li ċċemplilha.",
  },
  {
    n: "02",
    title: "Kollox jibqa' tiegħek",
    text: "Il-kontijiet tar-reklami, il-filmati, il-paġni u d-data jibqgħu f'ismek. Dejjem.",
  },
  {
    n: "03",
    title: "Garanzija ta' flusek lura",
    text: "Naqblu fuq il-miri qabel nibdew. Jekk ma nilħquhomx, tieħu flusek lura.",
  },
  {
    n: "04",
    title: "Lokali, mill-2023",
    text: `${NAP.streetAddressShort}, ${NAP.addressLocality}. Ejja ltaqa' man-nies li jagħmlu x-xogħol.`,
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
            Għaliex OARC
            <br />
            <em>
              Digital<span className="text-[#FF4B4B]">.</span>
            </em>
          </h2>
          <p className="oarc-reveal max-w-xl text-lg leading-relaxed text-[#0E0E0E]/80 md:text-xl">
            {"OARC Digital hija aġenzija tal-marketing f'"}{NAP.addressLocality}{", Malta, imwaqqfa fl-2023. Tim wieħed jieħu ħsieb il-brand, il-kontenut, is-social media, ir-reklami, il-websajt u l-istaff tal-AI tiegħek. Hekk ma jkollokx għalfejn timmaniġġja ħames fornituri."}
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
            {"Ibbukkja telefonata ta' 20 minuta →"}
          </a>
          <Link href="/why-oarc" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            Għaliex OARC, fid-dettall
          </Link>
          <Link href="/about" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            {"Iltaqa' mat-tim"}
          </Link>
          <Link href="/tools" hrefLang="en" className="border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E]">
            {"Għodod b'xejn għan-negozju"}
          </Link>
        </div>
      </div>
    </section>
  );
}
