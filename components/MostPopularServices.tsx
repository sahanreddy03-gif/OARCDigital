import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Surfaces the highest-leverage Top-30 destinations on the homepage.
// Hand-curated split: 3 AEO landing pages (Google search demand) + 3 service
// pages (conversion intent) so internal-link equity flows to the right targets.
//
// Layout: editorial bento — one hero card (Digital Marketing Agency Malta,
// the most-searched destination) + 5 supporting cards in asymmetric sizes.
// AEO cards use an amber/orange wash; service cards use teal/violet washes.
// Hover lifts the card on the Z-axis and shifts the arrow icon.
//
// All 6 destination URLs and their `data-testid` attributes are SEO/test
// infra contracts and must be preserved verbatim.

type AccentTheme = "amber" | "teal" | "violet";

type Tile = {
  label: string;
  href: string;
  title: string;
  blurb: string;
  accent: AccentTheme;
};

const HERO: Tile = {
  label: "Most searched · Malta",
  href: "/aeo/digital-marketing-agency-malta",
  title: "Digital Marketing Agency Malta",
  blurb:
    "Strategy, creative, paid, SEO, and AI under one roof — built and shipped from our Birkirkara studio.",
  accent: "amber",
};

const SUPPORTING: Tile[] = [
  {
    label: "Buyer's guide",
    href: "/aeo/best-marketing-agency-malta",
    title: "Best Marketing Agency Malta 2026",
    blurb:
      "How to choose — and the five tests that separate the best from the rest.",
    accent: "amber",
  },
  {
    label: "Outcomes, not slides",
    href: "/aeo/digital-transformation-malta",
    title: "Digital Transformation Malta",
    blurb:
      "AI agents and automation that ship live in 30 days, measured in 90.",
    accent: "amber",
  },
  {
    label: "Service",
    href: "/services/social-media-creative-management",
    title: "Social Media Creative Management",
    blurb:
      "Editorial-grade social production for Malta's most discerning brands.",
    accent: "violet",
  },
  {
    label: "Service",
    href: "/ai-agents",
    title: "AI Workforce Agents",
    blurb: "Sales, support, bookings, ops — one AI team that runs 24/7.",
    accent: "teal",
  },
];

const WIDE: Tile = {
  label: "Service",
  href: "/automation",
  title: "Automation & AI Systems",
  blurb:
    "Replace the manual workflows your team hates. Software that pays for itself, wired into the tools you already use.",
  accent: "teal",
};

// Per-accent class bundles. Kept verbose (not template-literal interpolated)
// so Tailwind's JIT can statically detect every utility.
const ACCENTS: Record<
  AccentTheme,
  { eyebrow: string; glowCss: string; arrow: string; ring: string }
> = {
  amber: {
    eyebrow: "text-orange-300",
    glowCss:
      "radial-gradient(circle at center, rgba(251,146,60,0.22) 0%, rgba(251,146,60,0.06) 40%, transparent 70%)",
    arrow: "text-orange-300 group-hover:text-orange-200",
    ring: "group-hover:border-orange-400/50 group-hover:shadow-[0_20px_60px_-20px_rgba(251,146,60,0.45)]",
  },
  teal: {
    eyebrow: "text-teal-300",
    glowCss:
      "radial-gradient(circle at center, rgba(45,212,191,0.22) 0%, rgba(45,212,191,0.06) 40%, transparent 70%)",
    arrow: "text-teal-300 group-hover:text-teal-200",
    ring: "group-hover:border-teal-400/50 group-hover:shadow-[0_20px_60px_-20px_rgba(45,212,191,0.4)]",
  },
  violet: {
    eyebrow: "text-violet-300",
    glowCss:
      "radial-gradient(circle at center, rgba(167,139,250,0.25) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)",
    arrow: "text-violet-300 group-hover:text-violet-200",
    ring: "group-hover:border-violet-400/50 group-hover:shadow-[0_20px_60px_-20px_rgba(167,139,250,0.45)]",
  },
};

// Stable card id used in data-testid (kept identical to the previous build
// so existing test selectors keep working).
function testId(href: string) {
  return `link-popular-${href.replace(/[^a-z0-9]+/gi, "-")}`;
}

function CardShell({
  tile,
  className,
  children,
}: {
  tile: Tile;
  className?: string;
  children: React.ReactNode;
}) {
  const a = ACCENTS[tile.accent];
  return (
    <Link
      href={tile.href}
      data-testid={testId(tile.href)}
      className={[
        "group relative isolate flex flex-col overflow-hidden rounded-2xl",
        "border border-white/10 bg-white/[0.03] backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:bg-white/[0.05]",
        // Touch/active parity — mirrors the hover lift so mobile users
        // get equivalent feedback on tap (devices without hover capability).
        "active:-translate-y-0.5 active:bg-white/[0.06] active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        a.ring,
        className ?? "",
      ].join(" ")}
    >
      {/* Per-card ambient wash anchored to the top-right corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1/3 -right-1/3 h-[120%] w-[120%] rounded-full opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: a.glowCss }}
      />
      {/* Subtle inner top highlight for premium glass feel */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Link>
  );
}

function StandardCard({ tile }: { tile: Tile }) {
  const a = ACCENTS[tile.accent];
  return (
    <CardShell tile={tile} className="p-6 md:p-7">
      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${a.eyebrow}`}
        >
          {tile.label}
        </span>
        <ArrowUpRight
          className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${a.arrow}`}
        />
      </div>
      <h3 className="mb-2 text-lg font-bold leading-snug text-white md:text-xl">
        {tile.title}
      </h3>
      <p className="mt-auto text-sm leading-relaxed text-zinc-300/90">
        {tile.blurb}
      </p>
    </CardShell>
  );
}

function HeroCard({ tile }: { tile: Tile }) {
  const a = ACCENTS[tile.accent];
  return (
    <CardShell
      tile={tile}
      className="lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[460px] p-7 md:p-9"
    >
      {/* Decorative grid for depth on the hero card only */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="mb-6 flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${a.eyebrow}`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {tile.label}
        </span>
        <ArrowUpRight
          className={`h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${a.arrow}`}
        />
      </div>

      <h3 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
        {tile.title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-zinc-200/90 md:text-lg">
        {tile.blurb}
      </p>

      {/* Proof block — uses the canonical site-wide '47+ projects' figure
          surfaced in <SuccessInNumbers />. Defensible, not fabricated. */}
      <div className="mt-auto pt-8">
        <div className="flex items-end gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="text-4xl font-light leading-none tracking-tight text-white md:text-5xl">
              47<span className="text-orange-400">+</span>
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Malta projects shipped to date
            </p>
          </div>
          <div className="ml-auto hidden text-right md:block">
            <div className="text-2xl font-light leading-none tracking-tight text-white">
              4.9<span className="text-orange-400/70">/5</span>
            </div>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
              Avg client rating
            </p>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function WideCard({ tile }: { tile: Tile }) {
  const a = ACCENTS[tile.accent];
  return (
    <CardShell tile={tile} className="lg:col-span-4 p-7 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${a.eyebrow}`}
            >
              {tile.label}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent md:max-w-[80px]" />
          </div>
          <h3 className="mb-2 text-xl font-bold leading-snug text-white md:text-2xl">
            {tile.title}
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300/90 md:text-base">
            {tile.blurb}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className={`text-sm font-medium ${a.eyebrow}`}>
            Explore the system
          </span>
          <ArrowUpRight
            className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${a.arrow}`}
          />
        </div>
      </div>
    </CardShell>
  );
}

export default function MostPopularServices() {
  return (
    <section
      className="relative overflow-hidden bg-zinc-950 py-20 text-white md:py-28"
      data-testid="section-most-popular-services"
    >
      {/* Section-level ambient depth: orange bloom top-left, zinc wash bottom-right,
          subtle dot grid texture. All decorative, pointer-events disabled. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-teal-500/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-orange-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Most Popular Right Now
              </span>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              The pages Malta business owners read before they call us
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Read together by the founders behind{" "}
              <span className="text-zinc-200">47+ shipped Malta projects</span>{" "}
              — the entry points that tell you whether OARC is the right fit before you ever fill in a form.
            </p>
          </div>
          <Link
            href="/services"
            data-testid="link-most-popular-all-services"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-orange-400/40 hover:bg-white/[0.08] active:bg-white/[0.12] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:self-auto"
          >
            See all services
            <ArrowUpRight className="h-4 w-4 text-orange-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Bento grid:
            - lg+: 4-col grid, hero spans 2x2, four 1x1 supporting cards in
              the top-right cluster, wide CTA card spans full width on row 3.
            - md: 2-col, hero spans 2 across the top, then 4 supporting in
              two rows of two, then wide card full-width.
            - sm: single column stack, hero stays first. */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:auto-rows-fr">
          <HeroCard tile={HERO} />
          {SUPPORTING.map((tile) => (
            <StandardCard key={tile.href} tile={tile} />
          ))}
          <WideCard tile={WIDE} />
        </div>
      </div>
    </section>
  );
}
