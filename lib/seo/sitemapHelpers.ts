import { promises as fs, existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

export const SITE_BASE = "https://oarcdigital.com";

/**
 * Legacy baseline date. No longer emitted as a sitemap `lastmod`: a made-up
 * date is worse than none. Kept exported for older imports.
 */
export const DEPLOY_BASELINE = "2026-04-26";

const MANIFEST_PATH = "seo-manifest/lastmod.json";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

let _manifest: Record<string, string> | null = null;
let _shallowBoundary: Set<string> | null = null;
const _dateCache = new Map<string, string | undefined>();

/** Committed path -> date map, generated from full history by `npm run seo:lastmod`. */
function manifestDates(): Record<string, string> {
  if (_manifest) return _manifest;
  try {
    const raw = readFileSync(path.join(process.cwd(), MANIFEST_PATH), "utf8");
    _manifest = (JSON.parse(raw) as { dates?: Record<string, string> }).dates ?? {};
  } catch {
    _manifest = {};
  }
  return _manifest;
}

/**
 * Commits whose parents were cut off by a shallow clone (Vercel clones only
 * the last few commits). git reports such a commit as the "last change" of
 * every older file, so a date from it is not real.
 */
function shallowBoundary(): Set<string> {
  if (_shallowBoundary) return _shallowBoundary;
  _shallowBoundary = new Set();
  try {
    const file = execFileSync("git", ["rev-parse", "--git-path", "shallow"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 5000,
    }).trim();
    const abs = path.resolve(process.cwd(), file);
    if (existsSync(abs)) {
      for (const line of readFileSync(abs, "utf8").split(/\s+/)) {
        if (line.trim()) _shallowBoundary.add(line.trim());
      }
    }
  } catch {
    // git unavailable: nothing to distrust, gitDate() fails anyway.
  }
  return _shallowBoundary;
}

/** Date of the last commit touching the path, or undefined if git can't tell for sure. */
function gitDate(repoRelativePath: string): string | undefined {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%H %cd", "--date=short", "--", repoRelativePath],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 5000 },
    ).trim();
    const [hash, date] = out.split(" ");
    if (!hash || !date || !DATE_RE.test(date)) return undefined;
    if (shallowBoundary().has(hash)) return undefined;
    return date;
  } catch {
    return undefined;
  }
}

/**
 * Real last-change date (YYYY-MM-DD) for a repo-relative file or directory,
 * or `undefined` when no trustworthy date exists. Callers then omit
 * `<lastmod>`; we never emit the build date or a made-up baseline.
 *
 * Sources, newest wins:
 *  1. `seo-manifest/lastmod.json`, generated from full git history
 *     (`npm run seo:lastmod`).
 *  2. `git log -1 -- <path>`, ignored when the commit is a shallow-clone
 *     boundary. This picks up pages changed after the manifest was made,
 *     as long as the change is inside the build's clone.
 *
 * Build-time only: sitemap routes are `force-static`. Memoised per path.
 * `execFileSync` with array args, so no shell and no injection surface.
 */
export function lastmodForPath(repoRelativePath: string): string | undefined {
  const key = repoRelativePath.split(path.sep).join("/").replace(/\/+$/, "");
  if (_dateCache.has(key)) return _dateCache.get(key);
  const fromManifest = manifestDates()[key];
  const fromGit = gitDate(key);
  const candidates = [fromManifest, fromGit].filter((d): d is string => !!d && DATE_RE.test(d));
  const date = candidates.length ? candidates.sort()[candidates.length - 1] : undefined;
  _dateCache.set(key, date);
  return date;
}

/**
 * Newest real date across a set of paths, for entries built from several
 * sources. `undefined` when none of them has a trustworthy date.
 */
export function lastmodForPaths(repoRelativePaths: string[]): string | undefined {
  let max: string | undefined;
  for (const p of repoRelativePaths) {
    const d = lastmodForPath(p);
    if (d && (!max || d > max)) max = d;
  }
  return max;
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
