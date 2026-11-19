import Link from "next/link";
import { verticals } from "./DiagnosticsTeaser.verticals";
import { NAP } from "@/lib/seo/nap";

/**
 * Homepage entry to /diagnostics. Each industry chip opens the diagnostic with
 * that industry already selected (/diagnostics?industry=<id>). The full report
 * is unlocked with an email, which reaches the OARC team via /api/leads.
 * Design system v3: cobalt ground = "the fix"; paper type; one yellow phrase.
 * No fake "live" numbers and no JavaScript animation.
 */
const STEPS = [
  { n: "1", title: "Agħżel l-industrija tiegħek", text: "Ristorant, klinika, ħanut, proprjetà, legali u aktar." },
  { n: "2", title: "Ara fejn qed jintilfu l-flus", text: "Telefonati mitlufa, klijenti li ma jiġux, follow-ups li jdumu, ftit reviews." },
  { n: "3", title: "Ikseb is-soluzzjoni", text: "Iftaħ ir-rapport sħiħ bl-email, jew kellimna mill-ewwel." },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

export default function DiagnosticsTeaser() {
  return (
    <section
      aria-labelledby="homepage-diagnostic-title"
      className="bg-[#0035AD] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28"
      data-testid="homepage-diagnostic"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <h2
            id="homepage-diagnostic-title"
            className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-normal leading-[.95] tracking-[-0.02em]"
            style={serif}
          >
            {"Agħmel dijanjożi b'xejn"}
            <br />
            <em className="text-[#F9FF84]">{"tan-negozju tiegħek f'60 sekonda."}</em>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-[#F5F3EE]/80 md:text-lg">
            {"Skopri fejn in-negozju tiegħek qed jitlef klijenti u flus, skont dak li naraw f'negozji f'Malta bħal tiegħek. B'xejn, u bla ebda telefonata."}
          </p>
        </div>

        <ol className="mt-12 grid gap-3 md:mt-16 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-white/20 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F5F3EE] text-sm font-bold text-[#0035AD]">
                {step.n}
              </span>
              <h3 className="mt-5 text-[28px] leading-none" style={serif}>
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-snug text-[#F5F3EE]/75">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:mt-14">
          <p className="text-lg font-semibold">Ibda mill-industrija tiegħek:</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {verticals.map((v) => (
              <li key={v.id}>
                <Link
                  href={`/diagnostics?industry=${v.id}`}
                  hrefLang="en"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.08] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F5F3EE] hover:text-[#0035AD]"
                >
                  <span aria-hidden="true">{v.icon}</span>
                  {v.name}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/diagnostics"
            hrefLang="en"
            data-testid="button-diagnostics-cta"
            className="inline-flex items-center rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            {"Ibda d-dijanjożi b'xejn →"}
          </Link>
          <a
            href={`https://wa.me/${NAP.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-white/40 pb-1 text-sm font-semibold hover:border-white"
          >
            Jew staqsina fuq WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
