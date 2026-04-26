import { promises as fs } from "node:fs";
import path from "node:path";
import { lastmodForPaths } from "@/lib/seo/sitemapHelpers";

export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://oarcdigital.com";
const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif)$/i;
const SCAN_ROOTS = ["assets", "agents", "media", "static", "og-image.png"];

async function* walk(dir: string): AsyncGenerator<string> {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.name.startsWith(".") || e.name.startsWith("_")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (IMAGE_EXT.test(e.name)) {
      yield full;
    }
  }
}

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : c === "'" ? "&apos;" : "&quot;",
  );
}

function titleFromFile(file: string) {
  const base = path.basename(file).replace(IMAGE_EXT, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .slice(0, 90);
}

export async function GET() {
  const publicDir = path.resolve(process.cwd(), "public");
  const seen = new Set<string>();
  const images: { url: string; title: string }[] = [];

  for (const root of SCAN_ROOTS) {
    const abs = path.join(publicDir, root);
    try {
      const stat = await fs.stat(abs);
      if (stat.isFile() && IMAGE_EXT.test(abs)) {
        const rel = "/" + path.relative(publicDir, abs).split(path.sep).join("/");
        if (!seen.has(rel)) {
          seen.add(rel);
          images.push({ url: BASE + rel, title: titleFromFile(rel) });
        }
        continue;
      }
    } catch {
      continue;
    }
    for await (const file of walk(abs)) {
      const rel = "/" + path.relative(publicDir, file).split(path.sep).join("/");
      if (seen.has(rel)) continue;
      seen.add(rel);
      images.push({ url: BASE + rel, title: titleFromFile(rel) });
    }
  }

  // Group all under the homepage as a permissive sitemap entry.
  // Search Console accepts <image:image> children of any <url> entry.
  const lastmod = lastmodForPaths([
    "public/assets",
    "public/agents",
    "public/media",
    "public/static",
  ]);
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `  <url>\n` +
    `    <loc>${BASE}/</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    images
      .map(
        (img) =>
          `    <image:image><image:loc>${escapeXml(img.url)}</image:loc><image:title>${escapeXml(
            img.title,
          )}</image:title></image:image>`,
      )
      .join("\n") +
    `\n  </url>\n` +
    `</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
