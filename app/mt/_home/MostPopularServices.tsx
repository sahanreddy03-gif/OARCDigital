import Link from "next/link";

/**
 * "The pages Malta business owners read before they call us" — a short,
 * numbered reading list into the main ranking pages. Every link the old
 * glow-card grid had is kept (same hrefs and test ids) so no page loses its
 * homepage link.
 * Design system v3: paper ground, ink type, one black box with yellow text.
 *
 * Maltese copy: `href` stays the ENGLISH path (it also builds the test id, which
 * must match the English page). `twin: true` marks a page that has a Maltese
 * twin, so its link goes to `/mt` + href; every other link keeps the English
 * address and gets hrefLang="en".
 */
type Tile = { label: string; href: string; title: string; blurb: string; twin?: boolean };

const PAGES: Tile[] = [
  {
    label: "L-aktar imfittxija",
    href: "/aeo/digital-marketing-agency-malta",
    title: "Aġenzija tal-marketing diġitali f'Malta",
    blurb: "Strateġija, kreattività, reklami, SEO u AI taħt saqaf wieħed, mill-istudjo tagħna f'Birkirkara.",
    twin: true,
  },
  {
    label: "Gwida għax-xerrej",
    href: "/insights/best-marketing-agencies-malta",
    title: "L-aqwa aġenzija tal-marketing f'Malta 2026",
    blurb: "Kif tagħżel aġenzija, u ħames testijiet li jifirdu l-aqwa mill-bqija.",
  },
  {
    label: "Staff tal-AI",
    href: "/ai-agents",
    title: "Tim ta' aġenti tal-AI",
    blurb: "Bejgħ, appoġġ, prenotazzjonijiet u amministrazzjoni. Tim tal-AI li jaħdem lejl u nhar.",
  },
  {
    label: "Social",
    href: "/services/social-media-creative-management",
    title: "Kreattività u ġestjoni tas-social media",
    blurb: "Nippjanaw, niffilmjaw, neditjaw u nippowstjaw, biex il-feed tiegħek jidher tajjeb daqs in-negozju tiegħek.",
  },
  {
    label: "Awtomazzjoni",
    href: "/automation",
    title: "Awtomazzjoni u sistemi tal-AI",
    blurb: "Ibdel ix-xogħol manwali li t-tim tiegħek jobgħod b'awtomazzjoni mqabbda mal-għodod li diġà tuża.",
  },
  {
    label: "Aġenti",
    href: "/agent-economy",
    title: "L-ekonomija tal-aġenti tal-AI f'Malta",
    blurb: "X'jistgħu jagħmlu diġà l-aġenti tal-AI għall-SEO, il-kreattività, il-profil ta' Google, il-vuċi u l-outreach.",
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
            {"Il-paġni li s-sidien tan-negozji f'Malta jaqraw"}
            <br />
            <em className="text-[#0E0E0E]/55">qabel ma jċemplulna.</em>
          </h2>
          <Link
            href="/services"
            hrefLang="en"
            data-testid="link-most-popular-all-services"
            className="shrink-0 self-start border-b border-[#0E0E0E]/30 pb-1 text-sm font-semibold hover:border-[#0E0E0E] md:self-auto"
          >
            Ara s-servizzi kollha →
          </Link>
        </div>

        <ol className="mt-12 border-t border-[#0E0E0E]/20 md:mt-16">
          {PAGES.map((page, i) => (
            <li key={page.href} className="border-b border-[#0E0E0E]/20">
              <Link
                href={page.twin ? `/mt${page.href}` : page.href}
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
