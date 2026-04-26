import { promises as fs } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

export const SITE_BASE = "https://oarcdigital.com";

/**
 * Frozen baseline date used for sitemap `lastmod` when git has no record
 * for a path (untracked file, missing path, or git unavailable in the
 * build environment). Set to the date of the merge commit shipping the
 * Tier-2/3 SEO lockdown work. Update only at major release boundaries.
 */
export const DEPLOY_BASELINE = "2026-04-26";

const _gitDateCache = new Map<string, string>();

/**
 * Resolve a repo-relative file or directory path to its most recent
 * git-committed change date in YYYY-MM-DD format. Falls back to
 * DEPLOY_BASELINE if git returns no date (path untracked, doesn't exist,
 * or git is unavailable).
 *
 * Build-time only — sitemap routes use `force-static` so this runs once
 * per build, never per request. Results are memoised in-process so a
 * sitemap with N URLs over K unique paths costs K git calls, not N.
 *
 * Uses `execFileSync` with array args so the path is passed directly to
 * git without going through a shell — no shell metacharacter parsing,
 * no injection surface, and Next.js dynamic-segment paths like
 * `app/industries/[industry]/page.tsx` work without sanitisation.
 */
export function lastmodForPath(repoRelativePath: string): string {
  const cached = _gitDateCache.get(repoRelativePath);
  if (cached) return cached;
  let date: string = DEPLOY_BASELINE;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cd", "--date=short", "--", repoRelativePath],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 5000 },
    ).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) {
      date = out;
    }
  } catch {
    // git unavailable, path missing, or timeout — fall back to baseline.
  }
  _gitDateCache.set(repoRelativePath, date);
  return date;
}

/**
 * Resolve the most recent date across a set of paths. For aggregated
 * sitemap entries whose source spans many directories.
 */
export function lastmodForPaths(repoRelativePaths: string[]): string {
  if (repoRelativePaths.length === 0) return DEPLOY_BASELINE;
  let max = "";
  for (const p of repoRelativePaths) {
    const d = lastmodForPath(p);
    if (d > max) max = d;
  }
  return max || DEPLOY_BASELINE;
}

export interface UrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c === "'" ? "&apos;" : "&quot;",
  );
}

export function urlsetXml(entries: UrlEntry[]): string {
  const body = entries
    .map((e) => {
      const parts = [`    <loc>${escapeXml(e.loc)}</loc>`];
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

export function sitemapIndexXml(sitemaps: { loc: string; lastmod?: string }[]): string {
  const body = sitemaps
    .map((s) => {
      const lm = s.lastmod ? `    <lastmod>${s.lastmod}</lastmod>\n` : "";
      return `  <sitemap>\n    <loc>${escapeXml(s.loc)}</loc>\n${lm}  </sitemap>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export async function listRouteSlugs(dirRelativeToCwd: string): Promise<string[]> {
  const abs = path.resolve(process.cwd(), dirRelativeToCwd);
  let entries;
  try {
    entries = await fs.readdir(abs, { withFileTypes: true });
  } catch {
    return [];
  }
  const slugs: string[] = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith("[") || e.name.startsWith("_") || e.name.startsWith(".")) continue;
    try {
      const stat = await fs.stat(path.join(abs, e.name, "page.tsx"));
      if (stat.isFile()) slugs.push(e.name);
    } catch {
      // no page.tsx — skip
    }
  }
  return slugs.sort();
}

/**
 * @deprecated Use `lastmodForPath()` / `lastmodForPaths()` instead.
 * Emitting today's date for every URL is a sitemap-spam tell that Google
 * penalises. Retained only so legacy imports continue to type-check until
 * fully migrated. The audit at `scripts/audit-sitemap.ts` will fail any
 * sitemap whose URLs cluster on a single date.
 */
export const TODAY = new Date().toISOString().split("T")[0];
