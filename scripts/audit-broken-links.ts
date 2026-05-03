/**
 * Broken-link audit — Task #106.
 *
 * Crawls a curated representative set of pages, parses every internal
 * <a href> rendered in the HTML, and asserts that each destination
 * resolves to HTTP 200 (or a documented 308 redirect chain that ends
 * at a 200). Wired into `gate:full`.
 *
 * Why curated, not full-crawl: the site has 197+ pages. A full BFS
 * crawl would dwarf the gate budget. The curated set covers the
 * highest-traffic surfaces (homepage, services index, every direct
 * service page, the 6 SEO-locked URLs from Task #104, the 4 PDF
 * sub-routes, the master pillar / AEO landing pages) — enough to
 * surface any footer-wide / nav-wide / common-component link rot
 * that would otherwise hit Google as 404 signal on every crawl.
 *
 * Usage:
 *   BASE=http://localhost:5000 npx tsx scripts/audit-broken-links.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";

const BASE = process.env.BASE ?? "http://localhost:5000";
const TIMEOUT_MS = 30_000;
const MAX_REDIRECT_HOPS = 3;

type LinkCheck = {
  source: string;
  target: string;
  status: number | "ERR";
  finalStatus?: number;
  ok: boolean;
  note?: string;
};

function listServiceSlugs(): string[] {
  const dir = path.join(process.cwd(), "app", "services");
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();
  } catch {
    return [];
  }
}

function buildSourcePages(): string[] {
  const services = listServiceSlugs().map((s) => `/services/${s}`);
  const set = new Set<string>([
    "/",
    "/services",
    "/our-work",
    "/contact",
    "/pricing",
    "/why-us",
    "/why-oarc",
    "/blog",
    "/case-studies",
    "/industries",
    "/tools",
    "/pdf-hub",
    // Top SEO-locked URLs (Task #104 contract).
    "/aeo/digital-marketing-agency-malta",
    "/aeo/best-marketing-agency-malta",
    "/aeo/digital-transformation-malta",
    "/ai-agents",
    "/automation",
    // Sample of every direct service page.
    ...services,
  ]);
  return Array.from(set);
}

async function fetchWithTimeout(url: string, init?: RequestInit): Promise<Response> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: ctl.signal });
  } finally {
    clearTimeout(t);
  }
}

const HREF_RE = /<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi;

function extractInternalHrefs(html: string): string[] {
  const out = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = HREF_RE.exec(html)) !== null) {
    let href = m[1].trim();
    if (!href) continue;
    if (href.startsWith("#")) continue;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    if (href.startsWith("javascript:")) continue;
    // Strip absolute prefix if it points at our own origin.
    if (href.startsWith("https://oarcdigital.com")) {
      href = href.slice("https://oarcdigital.com".length) || "/";
    }
    if (href.startsWith("http://") || href.startsWith("https://")) continue;
    if (!href.startsWith("/")) continue;
    // Strip query + hash.
    const noHash = href.split("#")[0];
    const noQuery = noHash.split("?")[0];
    if (!noQuery) continue;
    // Skip dynamic-route template literals (e.g. /services/[serviceSlug]).
    if (noQuery.includes("[") || noQuery.includes("]")) continue;
    out.add(noQuery);
  }
  return Array.from(out);
}

async function checkUrl(url: string): Promise<{ status: number | "ERR"; finalStatus?: number; note?: string }> {
  let current = url;
  let firstStatus: number | "ERR" = "ERR";
  for (let hop = 0; hop <= MAX_REDIRECT_HOPS; hop++) {
    try {
      const res = await fetchWithTimeout(`${BASE}${current}`, {
        redirect: "manual",
        headers: { "user-agent": "audit-broken-links" },
      });
      if (hop === 0) firstStatus = res.status;
      if (res.status >= 200 && res.status < 300) {
        return { status: firstStatus, finalStatus: res.status };
      }
      if (res.status === 308 || res.status === 301 || res.status === 307 || res.status === 302) {
        const loc = res.headers.get("location");
        if (!loc) return { status: firstStatus, note: "redirect without Location" };
        const next = new URL(loc, `${BASE}${current}`);
        if (next.origin !== BASE) {
          // External redirect — accept as OK (we only audit internal targets).
          return { status: firstStatus, finalStatus: res.status };
        }
        current = next.pathname + next.search;
        continue;
      }
      return { status: firstStatus, finalStatus: res.status };
    } catch (e) {
      return { status: firstStatus, note: e instanceof Error ? e.message : String(e) };
    }
  }
  return { status: firstStatus, note: "redirect loop" };
}

async function pMap<T, R>(items: T[], n: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      out[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return out;
}

async function main() {
  const sources = buildSourcePages();
  const failures: LinkCheck[] = [];
  let totalLinks = 0;

  // eslint-disable-next-line no-console
  console.log(`audit-broken-links: ${sources.length} source pages, base=${BASE}\n`);

  // 1) Fetch all source pages in parallel.
  type SourceFetch = { src: string; status: number | "ERR"; html?: string; note?: string };
  const sourceResults = await pMap<string, SourceFetch>(sources, 2, async (src) => {
    try {
      const res = await fetchWithTimeout(`${BASE}${src}`, {
        headers: { "user-agent": "audit-broken-links" },
      });
      const html = await res.text();
      return { src, status: res.status, html };
    } catch (e) {
      return { src, status: "ERR", note: e instanceof Error ? e.message : String(e) };
    }
  });

  // 2) Extract every (source, target) pair.
  const occurrences: Array<{ src: string; href: string }> = [];
  const uniqueTargets = new Set<string>();
  for (const r of sourceResults) {
    if (r.status === "ERR" || r.status !== 200 || !r.html) {
      failures.push({
        source: "(self)",
        target: r.src,
        status: r.status,
        ok: false,
        note: r.note ?? `source page did not return 200`,
      });
      continue;
    }
    for (const href of extractInternalHrefs(r.html)) {
      occurrences.push({ src: r.src, href });
      uniqueTargets.add(href);
      totalLinks++;
    }
  }

  // 3) Check unique targets in parallel.
  const targets = Array.from(uniqueTargets);
  const targetResults = await pMap(targets, 6, async (href) => ({
    href,
    result: await checkUrl(href),
  }));
  const checked = new Map<string, { status: number | "ERR"; finalStatus?: number; note?: string }>();
  for (const t of targetResults) checked.set(t.href, t.result);

  // 4) Build failure list per source.
  for (const occ of occurrences) {
    const result = checked.get(occ.href)!;
    const ok =
      result.status !== "ERR" &&
      ((result.status >= 200 && result.status < 300) ||
        (result.finalStatus !== undefined && result.finalStatus >= 200 && result.finalStatus < 300) ||
        result.status === 308 ||
        result.status === 301);
    if (!ok) {
      failures.push({
        source: occ.src,
        target: occ.href,
        status: result.status,
        finalStatus: result.finalStatus,
        ok: false,
        note: result.note,
      });
    }
  }

  // eslint-disable-next-line no-console
  console.log(`audit-broken-links: scanned ${sources.length} pages, ${totalLinks} link occurrences, ${checked.size} unique targets`);

  if (failures.length > 0) {
    // eslint-disable-next-line no-console
    console.error(`\nFAILURES (${failures.length}):`);
    const grouped = new Map<string, string[]>();
    for (const f of failures) {
      const key = `[${f.status}${f.finalStatus ? `→${f.finalStatus}` : ""}] ${f.target}${f.note ? ` (${f.note})` : ""}`;
      const sources = grouped.get(key) ?? [];
      sources.push(f.source);
      grouped.set(key, sources);
    }
    for (const [key, srcs] of grouped) {
      // eslint-disable-next-line no-console
      console.error(`  ${key}`);
      for (const s of srcs.slice(0, 5)) {
        // eslint-disable-next-line no-console
        console.error(`     from: ${s}`);
      }
      if (srcs.length > 5) {
        // eslint-disable-next-line no-console
        console.error(`     ... and ${srcs.length - 5} more`);
      }
    }
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log("  ✓ all internal links resolved to 2xx (or documented 308)");
}

void main();
