import { promises as fs } from "node:fs";
import path from "node:path";

export const SITE_BASE = "https://oarcdigital.com";

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

export const TODAY = new Date().toISOString().split("T")[0];
