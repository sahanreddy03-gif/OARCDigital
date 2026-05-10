import { ArrowUpRight } from "lucide-react";
import {
  getRelatedLinks,
  getAnchors,
  pickAnchor,
} from "@/lib/seo/internalLinkGraph";
import SmartLink from "@/components/SmartLink";

interface RelatedLinksProps {
  slug: string;
  heading?: string;
  intro?: string;
  max?: number;
  variant?: "light" | "dark";
}

const HUB_LABELS: Record<string, string> = {
  homepage: "Pillar",
  ai: "AI",
  creative: "Creative",
  automation: "Automation",
  "services-index": "Services",
  service: "Service",
  "aeo-service": "Service · Malta",
  "aeo-city": "City",
  "aeo-vertical": "Industry",
};

export default function RelatedLinks({
  slug,
  heading = "Explore related solutions",
  intro = "Hand-picked next steps from across OARC Digital — services, locations, and industries that pair well with this page.",
  max = 6,
  variant = "light",
}: RelatedLinksProps) {
  const links = getRelatedLinks(slug, max);
  if (links.length === 0) return null;

  const isDark = variant === "dark";
  const sectionBg = isDark
    ? "bg-zinc-950 text-white"
    : "bg-zinc-50 dark:bg-zinc-900";
  const cardBg = isDark
    ? "bg-zinc-900/60 border-white/10 hover:border-orange-500/40"
    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-orange-500/60";
  const labelColor = isDark ? "text-orange-400/80" : "text-orange-600/80";
  const titleColor = isDark ? "text-white" : "text-foreground";
  const introColor = isDark ? "text-zinc-400" : "text-muted-foreground";

  return (
    <section className={`${sectionBg} rounded-2xl border border-transparent p-8 md:p-10 my-12`}>
      <div className="mb-8">
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${titleColor}`}>{heading}</h2>
        <p className={`text-base ${introColor} max-w-2xl`}>{intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link, idx) => {
          // Anchor-text diversification (Task #136): the visible anchor
          // is picked from the graph deterministically seeded by
          // (sourceSlug -> target, idx). SmartLink wraps the card so the
          // href + data-anchor + data-smartlink-target attributes are
          // emitted centrally for analytics + audit sampling.
          const anchor = pickAnchor(getAnchors(link), `${slug}->${link.path}`, idx);
          return (
            <SmartLink
              key={link.path}
              to={link.path}
              sourcePath={slug}
              index={idx}
              data-testid={`link-related-${link.path.replace(/[^a-z0-9]+/gi, "-")}`}
              className={`group flex items-start justify-between gap-3 rounded-xl border ${cardBg} p-4 transition-all hover-elevate active-elevate-2`}
            >
              <span className="flex-1 min-w-0 block">
                <span className={`block text-[11px] font-semibold uppercase tracking-wider ${labelColor} mb-1`}>
                  {HUB_LABELS[link.hub] ?? link.hub}
                </span>
                <span className={`block text-sm font-semibold ${titleColor} leading-snug`}>
                  {anchor || link.title}
                </span>
              </span>
              <ArrowUpRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? "text-zinc-500 group-hover:text-orange-400" : "text-zinc-400 group-hover:text-orange-500"} transition-colors`} />
            </SmartLink>
          );
        })}
      </div>
    </section>
  );
}
