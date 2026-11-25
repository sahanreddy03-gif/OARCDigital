import Link from "next/link";

/**
 * "The pages Malta business owners read before they call us" — a short,
 * numbered reading list into the main ranking pages. Every link the old
 * glow-card grid had is kept (same hrefs and test ids) so no page loses its
 * homepage link.
 * Design system v3: paper ground, ink type, one black box with yellow text.
 *
 * Italian copy. `href` is always the ENGLISH address (it also builds the test
 * id, which must match the English page). `twin: true` means the page has an
 * Italian twin, so the link goes to `/it` + href; every other link keeps the
 * English address and gets hrefLang="en".
 */
type Tile = { label: string; href: string; twin: boolean; title: string; blurb: string };

const PAGES: Tile[] = [
  {
    label: "La più cercata",
    href: "/aeo/digital-marketing-agency-malta",
    twin: true,
    title: "Agenzia di marketing digitale a Malta",
    blurb: "Strategia, creatività, annunci, SEO e AI sotto lo stesso tetto, dal nostro studio di Birkirkara.",
  },
  {
    label: "Perché OARC",
    href: "/blog/marketing-agency-malta",
    twin: false,
    title: "Perché OARC Digital",
    blurb: "La prima agenzia Creative + AI Systems di Malta. 32 marchi reali, risultati in ogni reparto.",
  },
  {
    label: "Staff AI",
    href: "/ai-agents",
    twin: false,
    title: "Forza lavoro di agenti AI",
    blurb: "Vendite, assistenza, prenotazioni e amministrazione. Un team AI che lavora giorno e notte.",
  },
  {
    label: "Social",
    href: "/services/social-media-creative-management",
    twin: false,
    title: "Gestione creativa dei social media",
    blurb: "Pianifichiamo, giriamo, montiamo e pubblichiamo, così il tuo feed è bello quanto la tua attività.",
  },
  {
    label: "Automazione",
    href: "/automation",
    twin: false,
    title: "Automazione e sistemi AI",
    blurb: "Sostituisci il lavoro manuale che il tuo team odia, collegato agli strumenti che usi già.",
  },
  {
    label: "Agenti",
    href: "/agent-economy",
    twin: false,
    title: "Economia degli agenti AI a Malta",
    blurb: "Cosa sanno già fare gli agenti AI per SEO, creatività, profilo Google, voce e ricerca di nuovi clienti.",
  },
];

const serif = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };

function testId(href: string) {
  return `link-popular-${href.replace(/[^a-z0-9]+/gi, "-")}`;
}

export default function MostPopularServices() {
  return (
    <section
      aria-labelledby="homepage-popular-title"
      className="bg-[#F5F3EE] px-4 py-20 text-[#0E0E0E] md:px-10 md:py-28"
      data-testid="section-most-popular-services"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="homepage-popular-title"
            className="max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[.95] tracking-[-0.02em]"
            style={serif}
          >
            Le pagine che gli imprenditori di Malta leggono
            <br />
            <em className="text-[#0E0E0E]/55">prima di chiamarci.</em>
          </h2>
          <Link
            href="/services"
            hrefLang="en"
            data-testid="link-most-popular-all-services"
            className="shrink-0 self-start border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E] md:self-auto"
          >
            Vedi tutti i servizi →
          </Link>
        </div>

        <ol className="mt-12 border-t border-[#0E0E0E]/20 md:mt-16">
          {PAGES.map((page, i) => (
            <li key={page.href} className="border-b border-[#0E0E0E]/20">
              <Link
                href={page.twin ? `/it${page.href}` : page.href}
                hrefLang={page.twin ? undefined : "en"}
                data-testid={testId(page.href)}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 py-6 transition-colors md:grid-cols-[3rem_1.1fr_1fr_auto] md:gap-x-8 md:py-7"
              >
                <span className="text-sm font-semibold tabular-nums text-[#0E0E0E]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0E0E0E]/50">
                    {page.label}
                  </span>
                  <span
                    className="mt-1.5 block text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] transition-transform duration-300 group-hover:translate-x-1"
                    style={serif}
                  >
                    {page.title}
                  </span>
                </span>
                <span className="col-start-2 mt-2 text-[15px] leading-snug text-[#0E0E0E]/65 md:col-start-auto md:mt-0">
                  {page.blurb}
                </span>
                <span
                  aria-hidden="true"
                  className="col-start-3 row-start-1 grid h-10 w-10 place-items-center self-center rounded-full border border-[#0E0E0E]/25 transition-colors group-hover:border-transparent group-hover:bg-[#0E0E0E] group-hover:text-[#F9FF84] md:col-start-auto md:row-start-auto"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
