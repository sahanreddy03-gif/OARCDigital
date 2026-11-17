import { aiTeamMembers } from "@/components/ai/aiAgentsData";
import mediaFiles from "@/lib/data/premium-work/caseMedia.json";
import { getCaseFull } from "@/lib/data/premium-work/caseFull";
import { getCaseGallery } from "@/lib/data/premium-work/caseGallery";
import { CLIENT_CASE_STUDIES } from "@/lib/data/premium-work/clientCaseStudies";
import { ORIGINAL_STUDIES } from "@/lib/data/premium-work/originalStudies";
import { ALL_WORK_SLUGS } from "@/lib/data/premium-work/workSlugs";
import { HERO_CUSTOMERS_VIDEO } from "@/lib/media/heroCustomersVideo";
import { SITE_BASE, lastmodForPaths } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * Image sitemap: one <url> per key page, listing the photos that page shows.
 *
 * Built from the same data the pages render (no fs scan of public/, which
 * would drag every image into the serverless bundle; see next.config.mjs).
 * Pages covered:
 *   /                  homepage hero poster (also its og:image)
 *   /our-work/{slug}   client photos: hero, gallery, story pictures
 *   /ai-agents         every agent portrait
 *   /ai-agents/{id}    the agent's portrait and its og:image card
 *
 * Only local image files are listed (no video, no generated /api/og cards).
 * `image:title` is left out: Google ignores it since 2022.
 */

const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif)$/i;
const MEDIA = mediaFiles as Record<string, { src: string }[]>;

type Pic = { src?: string } | undefined | null;

const SOURCES = [
  "app/image-sitemap.xml/route.ts",
  "lib/data/premium-work",
  "components/ai/aiAgentsData.ts",
  "lib/media/heroCustomersVideo.ts",
  "public/attached_assets",
  "public/agents",
  "public/media/hero",
];

function caseImages(slug: string): string[] {
  const story = CLIENT_CASE_STUDIES[slug] ?? ORIGINAL_STUDIES[slug];
  const full = getCaseFull(slug);
  // Long-form cases (caseFull) render their own pictures, not the card image.
  const short: Pic[] = full
    ? []
    : [
        story?.image ? { src: story.image } : undefined,
        story?.journeyImage ? { src: story.journeyImage } : undefined,
        ...(getCaseGallery(slug)?.items ?? []),
      ];
  const pics: Pic[] = [
    ...short,
    full?.afterSummary,
    full?.afterBrief,
    full?.afterGrew,
    ...(full?.blocks ?? []).flatMap((b) => [b.picture, b.pair, b.film ? { src: b.film.poster } : undefined]),
    ...(MEDIA[slug] ?? []),
  ];
  return pics.map((p) => p?.src).filter((s): s is string => !!s);
}

export function buildImagePages(): { loc: string; images: string[] }[] {
  const pages: { loc: string; images: string[] }[] = [
    { loc: "/", images: [HERO_CUSTOMERS_VIDEO.posterJpg] },
    ...ALL_WORK_SLUGS.map((slug) => ({ loc: `/our-work/${slug}`, images: caseImages(slug) })),
    {
      loc: "/ai-agents",
      images: aiTeamMembers.map((a) => a.avatarImage).filter((s): s is string => !!s),
    },
    ...aiTeamMembers.map((a) => ({
      loc: `/ai-agents/${a.id}`,
      images: [a.avatarImage, `/agents/${a.id}.webp`].filter((s): s is string => !!s),
    })),
  ];
  return pages
    .map((p) => ({
      loc: p.loc,
      images: Array.from(new Set(p.images.filter((s) => s.startsWith("/") && IMAGE_EXT.test(s)))),
    }))
    .filter((p) => p.images.length > 0);
}

/**
 * Source-of-truth lastmod for this sitemap, read by the index
 * (lib/seo/sitemapSources.ts). Undefined when no real date is known.
 */
export function buildLastmod(): string | undefined {
  return lastmodForPaths(SOURCES);
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c === "'" ? "&apos;" : "&quot;",
  );
}

export async function GET() {
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    buildImagePages()
      .map(
        (p) =>
          `  <url>\n    <loc>${escapeXml(SITE_BASE + (p.loc === "/" ? "/" : p.loc))}</loc>\n` +
          p.images
            .map((src) => `    <image:image><image:loc>${escapeXml(SITE_BASE + encodeURI(src))}</image:loc></image:image>`)
            .join("\n") +
          `\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
