import Link from "next/link";

/**
 * AI staff + custom AI builds, one section. Replaces HireAIEmployeesSection +
 * LetsTalkRevenueSection on the homepage (endless glow/particle loops and
 * 2–3 MB avatar PNGs made scrolling stutter).
 * Design system v3 (Notion): ink ground, paper words, ONE yellow (#F9FF84)
 * italic phrase; cobalt (#0035AD) = "AI, systems, the fix".
 * "Glass" is drawn with gradients and an inner highlight, not backdrop-blur,
 * so it costs nothing while scrolling. Reveal-on-scroll is pure CSS
 * (animation-timeline: view()), skipped where unsupported or reduced motion.
 */
const AI_STAFF = [
  { title: "Rappreżentant tal-bejgħ", text: "Tom iċempel lura lil kull klijent potenzjali u jibbukkja l-laqgħa.", href: "/services/ai-sdr-agent" },
  { title: "Appoġġ għall-klijenti", text: "Tom iwieġeb telefonati, chat u WhatsApp, lejl u nhar.", href: "/services/ai-support-specialist" },
  { title: "Ibbukkjar tal-appuntamenti", text: "Jimla l-kalendarju tiegħek u jibgħat ir-reminders.", href: "/services/ai-appointment-booker" },
  { title: "Assistent amministrattiv", text: "Jieħu ħsieb il-formoli, l-emails u d-data entry.", href: "/services/ai-admin-agent" },
  { title: "Analista tad-data", text: "Ibiddel in-numri tiegħek f'rapport ta' kull ġimgħa.", href: "/services/ai-data-analyst" },
  { title: "Strateġista tal-kontenut", text: "Jippjana u jabbozza posts u emails.", href: "/services/content-marketing" },
  { title: "Kontroll tal-konformità", text: "Jiċċekkja d-dokumenti skont ir-regoli tiegħek.", href: "/services/ai-compliance-auditor" },
  { title: "Żvilupp tan-negozju", text: "Isib u jikkwalifika klijenti potenzjali ġodda.", href: "/services/lead-generation" },
] as const;

const CUSTOM = [
  { label: "Aġenti tal-AI personalizzati", href: "/services/custom-ai-agents" },
  { label: "Soluzzjonijiet tal-AI personalizzati", href: "/services/custom-software-development" },
  { label: "Apps għall-mowbajl", href: "/services/mobile-apps-development" },
  { label: "Apps għall-web", href: "/services/web-apps-development" },
  { label: "Prodotti SaaS", href: "/services/saas-development" },
  { label: "MVP fi ftit ġimgħat", href: "/services/mvp-development" },
  { label: "E-commerce", href: "/services/ecommerce-development" },
  { label: "Shopify", href: "/services/shopify-development" },
  { label: "WordPress", href: "/services/wordpress-development" },
  { label: "API u integrazzjonijiet", href: "/services/api-integration" },
  { label: "Awtomazzjoni tal-marketing", href: "/services/marketing-automation-suite" },
  { label: "Databases", href: "/services/database-design" },
  { label: "DevOps u hosting", href: "/services/devops-services" },
  { label: "Konsulenza dwar l-AI", href: "/services/ai-consulting" },
] as const;

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

const GLASS =
  "relative rounded-2xl border border-white/[0.14] bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-[transform,background,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))]";

export default function HomepageAIStaff() {
  return (
    <section
      aria-labelledby="homepage-ai-staff-title"
      className="oarc-ai bg-[#0E0E0E] px-4 py-20 text-[#F5F3EE] md:px-10 md:py-28"
      data-testid="homepage-ai-staff"
    >
      <style>{`
        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .oarc-ai .oarc-reveal { animation: oarc-rise linear both; animation-timeline: view(); animation-range: entry 0% entry 60%; }
          }
        }
        @keyframes oarc-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
      `}</style>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1.15fr_.85fr] md:items-end">
          <h2
            id="homepage-ai-staff-title"
            className="text-[clamp(3rem,7vw,6rem)] font-normal leading-[.92] tracking-[-0.02em]"
            style={serif}
          >
            Staff tal-AI li
            <br />
            <em className="text-[#F9FF84]">qatt ma jieqaf.</em>
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#F5F3EE]/70 md:text-lg">
            {"Impjegati tal-AI lesti għall-bejgħ, l-appoġġ, il-bookings u l-amministrazzjoni. Imħarrġin fuq in-negozju tiegħek u ċċekkjati mit-tim tagħna f'Malta."}
          </p>
        </div>

        {/* Featured: Tom */}
        <Link
          href="/voice-ai-worker"
          hrefLang="en"
          className={`oarc-reveal group mt-14 flex flex-col gap-6 p-7 md:mt-16 md:flex-row md:items-center md:justify-between md:p-10 ${GLASS}`}
        >
          <span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F3EE]/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F9FF84]" aria-hidden="true" /> {"Diġà jaħdem f'negozji f'Malta"}
            </span>
            <span className="mt-3 block text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none" style={serif}>
              {"Iltaqa' ma' Tom, il-Voice AI Worker tiegħek."}
            </span>
            <span className="mt-3 block max-w-xl text-base text-[#F5F3EE]/70">
              Iwieġeb kull telefonata, ibigħ, jgħin lill-klijenti u jibbukkjahom. Bl-Ingliż, bil-Malti u bit-Taljan.
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-transform group-hover:translate-x-1 md:self-center">
            {"Isma' lil Tom iwieġeb →"}
          </span>
        </Link>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {AI_STAFF.map((item) => (
            <li key={item.title} className="oarc-reveal">
              <Link href={item.href} hrefLang="en" className={`group flex h-full flex-col p-5 ${GLASS}`}>
                <span className="flex items-start justify-between gap-3">
                  <span className="text-[26px] leading-none" style={serif}>
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 text-sm transition-colors group-hover:border-transparent group-hover:bg-[#F5F3EE] group-hover:text-[#0E0E0E]"
                  >
                    →
                  </span>
                </span>
                <span className="mt-3 text-[15px] leading-snug text-[#F5F3EE]/65">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="oarc-reveal mt-14 rounded-3xl bg-[#0035AD] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:mt-20 md:p-12">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <h3 className="text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.01em]" style={serif}>
                Trid xi ħaġa apposta għalik?
              </h3>
              <p className="mt-3 max-w-sm text-base text-[#F5F3EE]/80">
                Apps, għodod tal-AI, websajts u sistemi, iddisinjati u mibnija mit-tim tagħna skont kif diġà taħdem int.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2.5">
              {CUSTOM.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    hrefLang="en"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/[0.08] px-4 py-2.5 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-colors hover:bg-[#F5F3EE] hover:text-[#0035AD]"
                  >
                    {item.label}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/ai-agents"
            hrefLang="en"
            className="inline-flex items-center rounded-full bg-[#F5F3EE] px-6 py-3.5 text-[15px] font-semibold text-[#0E0E0E] transition-opacity hover:opacity-90"
          >
            {"Iltaqa' mal-istaff kollu tal-AI →"}
          </Link>
          <Link href="/mt/ai" className="border-b border-white/30 pb-1 text-sm font-semibold hover:border-white" data-testid="link-home-ai-industry">
            Sistemi tal-AI skont l-industrija: proprjetà, ditti legali
          </Link>
          <Link href="/agent-economy" hrefLang="en" className="border-b border-white/30 pb-1 text-sm font-semibold hover:border-white">
            {"X'inhi l-ekonomija tal-aġenti?"}
          </Link>
        </div>
      </div>
    </section>
  );
}
