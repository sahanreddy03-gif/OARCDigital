// SmartLink (Task #136)
// =====================
// Internal-link wrapper that picks an anchor-text variant from the
// internal link graph instead of always using the same exact-match anchor.
//
// Why: Google penalises exact-match internal anchor repetition. The
// canonical Top-60 graph in `lib/seo/internalLinkGraph.ts` carries >=3
// hand-curated/derived anchor variants per node. <SmartLink> picks one
// deterministically using a stable hash of (sourcePath, target, index)
// so SSR and CSR render identically (no hydration mismatch) but two
// different placements of the same target across the site naturally
// resolve to different anchors.
//
// Usage:
//   <SmartLink to="/ai-agents" sourcePath="/services/ai-sdr-agent" />
//     -> renders e.g. "AI agents for business" or "OARC's AI workforce"
//
//   <SmartLink to="/services/ai-sdr-agent" sourcePath="/automation">
//     Build my own SDR
//   </SmartLink>
//     -> renders the explicit children, but still emits the canonical
//        href + tracks the anchor in the data-anchor attribute so audits
//        can sample anchor distribution.
//
// If `to` is not in LINK_GRAPH the component still renders a normal
// <Link>, falling back to children or the raw path. That keeps the
// component safe to drop into legacy code paths during the migration.

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { LINK_GRAPH, getAnchors, pickAnchor } from "@/lib/seo/internalLinkGraph";

type LinkProps = ComponentProps<typeof Link>;

interface SmartLinkProps extends Omit<LinkProps, "href" | "children"> {
  /** Target path. Must start with `/`. */
  to: string;
  /** Source page path (used as part of the deterministic anchor seed). */
  sourcePath?: string;
  /**
   * Index disambiguator for multiple links to the same target on one
   * page (e.g. inside a <RelatedLinks /> grid). Different indexes pick
   * different anchor variants.
   */
  index?: number;
  /** Optional explicit anchor text — overrides the variant picker. */
  children?: ReactNode;
  className?: string;
}

export function SmartLink({
  to,
  sourcePath,
  index = 0,
  children,
  className,
  ...rest
}: SmartLinkProps) {
  const node = LINK_GRAPH.get(to);
  const anchors = node ? getAnchors(node) : [];
  const seed = `${sourcePath ?? ""}->${to}`;
  const picked = anchors.length > 0 ? pickAnchor(anchors, seed, index) : null;
  const label = children ?? picked ?? to;

  return (
    <Link
      href={to}
      className={className}
      data-anchor={picked ?? undefined}
      data-smartlink-target={to}
      {...rest}
    >
      {label}
    </Link>
  );
}

export default SmartLink;
