import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";

/**
 * Case studies whose story lives in components/premium-work/WorkCase.tsx
 * rather than in the data files. Metadata for them: app/our-work/[slug]/page.tsx.
 */
export const ANCHOR_WORK_SLUGS = ["pjazza", "h360", "data-foundation", "live-context"] as const;

/**
 * Every /our-work/{slug} page that exists. Single source for the route's
 * generateStaticParams (any other slug is a 404) and for sitemap-work.xml.
 */
export const ALL_WORK_SLUGS: string[] = Array.from(new Set<string>([
  ...ANCHOR_WORK_SLUGS,
  ...Object.keys(ORIGINAL_STUDIES),
  ...Object.keys(CLIENT_CASE_STUDIES),
]));
