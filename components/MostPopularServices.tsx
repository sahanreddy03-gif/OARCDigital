import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

// Surfaces the highest-leverage Top-30 destinations on the homepage.
// Hand-curated split: 3 AEO landing pages (Google search demand) + 3 service
// pages (conversion intent) so internal-link equity flows to the right targets.

const TILES = [
  {
    label: "Most searched · Malta",
    href: "/aeo/digital-marketing-agency-malta",
    title: "Digital Marketing Agency Malta",
    blurb: "Strategy, creative, paid, SEO, and AI in one Birkirkara team.",
  },
  {
    label: "Buyer's guide",
    href: "/aeo/best-marketing-agency-malta",
    title: "Best Marketing Agency Malta 2026",
    blurb: "How to choose — and the five tests that separate the best from the rest.",
  },
  {
    label: "Outcomes, not slides",
    href: "/aeo/digital-transformation-malta",
    title: "Digital Transformation Malta",
    blurb: "AI agents and automation that ship live in 30 days, measured in 90.",
  },
  {
    label: "Service",
    href: "/services/social-media-creative-management",
    title: "Social Media Creative Management",
    blurb: "Editorial-grade social production for Malta's most discerning brands.",
  },
  {
    label: "Service",
    href: "/ai-agents",
    title: "AI Workforce Agents",
    blurb: "Sales, support, bookings, ops — one AI team that runs 24/7.",
  },
  {
    label: "Service",
    href: "/automation",
    title: "Automation & AI Systems",
    blurb: "Replace manual workflows with software that pays for itself.",
  },
];

export default function MostPopularServices() {
  return (
    <section className="bg-zinc-950 text-white py-20 md:py-24" data-testid="section-most-popular-services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Most Popular Right Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              The pages Malta business owners read before they call us
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-orange-400 hover:text-orange-300 inline-flex items-center gap-2"
            data-testid="link-most-popular-all-services"
          >
            See all services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TILES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              data-testid={`link-popular-${t.href.replace(/[^a-z0-9]+/gi, "-")}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover-elevate active-elevate-2 transition-colors hover:border-orange-500/40"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-400/80">
                  {t.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 leading-snug">{t.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
