/**
 * Editorial order for the public New Work archive.
 *
 * Named hospitality partnerships and public OARC products lead the collection.
 * Private systems and lighter concept studies remain available below them.
 */
export const FEATURED_WORK_ORDER = [
  "tiffany",
  "portomaso-casino",
  "h360",
  "pjazza",
  "data-foundation",
  "live-context",
  "massive-fan-zone",
  "spinola-gin-fest",
  "drink-n-more",
  "calle-bistro",
  "kreta",
  "louisiana-mama",
  "mcw-cbd",
  "palino",
  "ricky-jr-burger",
] as const;

export const FEATURED_WORK_RANK: Map<string, number> = new Map(
  FEATURED_WORK_ORDER.map((slug, index) => [slug, index]),
);