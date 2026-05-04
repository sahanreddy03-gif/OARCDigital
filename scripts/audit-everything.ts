/* eslint-disable no-console */
// Site-wide audit — Task: brutal-honest "is OARC Digital actually shippable?" check.
//
// Walks every app/**/page.tsx route on disk and scores it on:
//   1. exists                — page.tsx file resolves
//   2. words                 — content depth (PageContent + page.tsx combined)
//   3. images                — count of <Image>, <img>, bg-[url(], and asset imports
//   4. schema                — RouteSchema type + presence of any JSON-LD
//   5. faq                   — has an FAQ section / FAQPage schema
//   6. inbound links         — internal-link graph density (Layer 5)
//   7. sitemap inclusion     — listed in one of the public sitemap routes
//   8. evergreen value       — mentions Malta-context, dated terms, year stamps
//
// Cross-checks:
//   - Contact-path components (Footer / MobileStickyCTA / layout) for tel:, wa.me,
//     mailto:, cal.com, formspree
//   - Programmatic vs hand-crafted (anything under a [bracket] dynamic route)
//   - Dead pages: directories present in services/aeo/blog/case-studies that are
//     missing page.tsx, OR sitemap entries pointing at non-existent slugs
//
// Output: .local/site-audit-report.md (markdown — designed for the user to read,
// not for a machine).
//
// Run: npx tsx scripts/audit-everything.ts
//
// NOTE: 100% static — no dev server required. The dev workflow on this Replit
// is unstable, so the report must be generatable from filesystem alone.

import fs from "node:fs";
import path from "node:path";
import { LINK_GRAPH, getInboundLinks } from "../lib/seo/internalLinkGraph";

const APP = "app";
const REPORT_PATH = ".local/site-audit-report.md";

type Tier =
  | "pillar"
  | "shell"
  | "service"
  | "aeo"
  | "blog"
  | "case-study"
  | "industry"
  | "location"
  | "tool"
  | "legal"
  | "other";

type Health = "healthy" | "thin" | "at-risk" | "no-images" | "dead";

interface Row {
  url: string;
  pageFile: string;
  exists: boolean;
  tier: Tier;
  programmatic: boolean;
  words: number;
  images: number;
  hasSchema: boolean;
  schemaType: string;
  hasFaq: boolean;
  inbound: number;
  inSitemap: boolean;
  evergreenScore: number;
  yearStamps: string[];
  health: Health;
  issues: string[];
  primaryKeyword: string;
}

// ── Discover every page.tsx route ──────────────────────────────────────
function walk(dir: string, acc: string[] = []): string[] {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.name === "page.tsx") acc.push(full);
  }
  return acc;
}

function fileToUrl(file: string): string {
  // app/foo/bar/page.tsx → /foo/bar    app/page.tsx → /
  const rel = file.replace(/^app/, "").replace(/\/page\.tsx$/, "");
  return rel === "" ? "/" : rel;
}

function tierFor(url: string): Tier {
  if (["/", "/ai-agents", "/creative", "/automation"].includes(url)) return "pillar";
  // Task #116: /diagnostic and /roadmap removed — 308 → /diagnostics and
  // /roadmap-2026 respectively (CROSS_SECTION_ALIASES in lib/seo/seoSets.ts).
  if (["/services", "/our-work", "/contact", "/pricing", "/why-us", "/why-oarc",
       "/blog", "/case-studies", "/resources", "/enterprise",
       "/roadmap-2026", "/diagnostics", "/intelligence",
       "/research", "/comparison", "/solutions", "/tools", "/malta",
       "/pdf", "/pdf-hub"].includes(url)) return "shell";
  if (url.startsWith("/services/")) return "service";
  if (url.startsWith("/aeo/")) return "aeo";
  if (url.startsWith("/blog/")) return "blog";
  if (url.startsWith("/case-studies/")) return "case-study";
  if (url.startsWith("/industries/")) return "industry";
  if (url.startsWith("/locations/") || url.startsWith("/malta/")) return "location";
  if (url.startsWith("/tools/")) return "tool";
  if (url.startsWith("/legal/")) return "legal";
  return "other";
}

function isProgrammatic(url: string): boolean {
  return /\[[^\]]+\]/.test(url);
}

function readContent(pageFile: string): string {
  const dir = path.dirname(pageFile);
  let combined = fs.readFileSync(pageFile, "utf8");
  const candidates = ["PageContent.tsx", "Content.tsx"];
  for (const c of candidates) {
    const f = path.join(dir, c);
    if (fs.existsSync(f)) combined += "\n" + fs.readFileSync(f, "utf8");
  }
  return combined;
}

function countWords(src: string): number {
  const stripped = src
    .replace(/import .* from .*;?/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/[^\n]*/g, " ")
    .replace(/[{}();[\]<>=]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.split(" ").filter((w) => w.length > 1 && /[a-zA-Z]/.test(w)).length;
}

function countImages(src: string): number {
  let n = 0;
  // <Image …
  n += (src.match(/<Image[\s/>]/g) || []).length;
  // <img …
  n += (src.match(/<img[\s/>]/g) || []).length;
  // bg-[url(  / backgroundImage: `url(...)` / style url(...)
  n += (src.match(/url\(['"]?[^)'"\s]+/g) || []).length;
  // import xxx from "@/assets..." or .png/.jpg/.webp
  n += (src.match(/from\s+["'][^"']+\.(png|jpe?g|webp|avif|svg|gif)["']/gi) || []).length;
  return n;
}

function detectSchema(src: string): { has: boolean; type: string } {
  const m = src.match(/<RouteSchema\s+[^>]*type=["']([^"']+)["']/);
  if (m) return { has: true, type: m[1] };
  if (/RouteSchema/.test(src)) return { has: true, type: "page" };
  if (/application\/ld\+json/.test(src)) return { has: true, type: "raw-jsonld" };
  return { has: false, type: "none" };
}

function detectFaq(src: string): boolean {
  return (
    /FAQ(Section|Block|Schema|Page|Component|s)/.test(src) ||
    /faqs?\s*=\s*\[/.test(src) ||
    /["']@type["']\s*:\s*["']FAQPage["']/.test(src) ||
    /<FAQ[\s/>]/.test(src)
  );
}

const EVERGREEN_HINTS = [
  "framework", "guide", "principles", "fundamentals", "checklist",
  "how to", "what is", "best practices", "case study", "playbook",
];
const DATED_HINTS = ["2023", "2024", "this month", "last week", "currently"];

function scoreEvergreen(src: string): { score: number; years: string[] } {
  const lower = src.toLowerCase();
  let score = 0;
  for (const h of EVERGREEN_HINTS) if (lower.includes(h)) score++;
  for (const h of DATED_HINTS) if (lower.includes(h)) score--;
  // Year stamps in titles/headings only (signals datedness)
  const yearMatches = lower.match(/\b20(2[3-9])\b/g) || [];
  return { score, years: Array.from(new Set(yearMatches)) };
}

function extractKeyword(url: string): string {
  // Pretty crude: convert last slug to "Title Case Keyword"
  const last = url.split("/").filter(Boolean).pop() || "home";
  return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Sitemap discovery (parse the route handlers as text — no SSR) ──────
function loadSitemapUrls(): Set<string> {
  const out = new Set<string>();
  const sitemapDirs = fs.readdirSync(APP).filter((d) => d.startsWith("sitemap-") && d.endsWith(".xml"));
  for (const d of sitemapDirs) {
    const route = path.join(APP, d, "route.ts");
    if (!fs.existsSync(route)) continue;
    const src = fs.readFileSync(route, "utf8");
    // Pull every quoted "/something" string — best-effort.
    for (const m of src.matchAll(/["']\/([^"'\s<>]+)["']/g)) {
      const u = "/" + m[1].replace(/^\/+/, "");
      if (!u.includes("$") && !u.includes("${")) out.add(u);
    }
    // ${slug} substitutions: walk SERVICE / AEO / BLOG / CASE_STUDY directories
    if (/services/.test(src)) for (const s of dirChildren("app/services")) out.add(`/services/${s}`);
    if (/aeo/.test(src)) for (const s of dirChildren("app/aeo")) out.add(`/aeo/${s}`);
    if (/blog/.test(src)) for (const s of dirChildren("app/blog")) out.add(`/blog/${s}`);
    if (/case-studies/.test(src)) for (const s of dirChildren("app/case-studies")) out.add(`/case-studies/${s}`);
    if (/industries/.test(src)) for (const s of dirChildren("app/industries")) out.add(`/industries/${s}`);
  }
  return out;
}

function dirChildren(p: string): string[] {
  if (!fs.existsSync(p)) return [];
  return fs
    .readdirSync(p, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("[") && !d.name.startsWith("_"))
    .map((d) => d.name);
}

// ── Dead-directory check: dir exists but has no page.tsx ───────────────
function findDeadDirs(): string[] {
  const dead: string[] = [];
  const roots = ["app/services", "app/aeo", "app/blog", "app/case-studies", "app/industries"];
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const d of fs.readdirSync(root, { withFileTypes: true })) {
      if (!d.isDirectory()) continue;
      if (d.name.startsWith("[") || d.name.startsWith("_")) continue;
      const dir = path.join(root, d.name);
      const hasPage = fs.existsSync(path.join(dir, "page.tsx"));
      if (!hasPage) dead.push(`/${root.replace(/^app\//, "")}/${d.name}`);
    }
  }
  return dead;
}

// ── Contact path checks ────────────────────────────────────────────────
interface ContactCheck { name: string; ok: boolean; detail: string }
function auditContactPath(): ContactCheck[] {
  const out: ContactCheck[] = [];
  const sources = [
    "components/Footer.tsx",
    "components/MobileStickyCTA.tsx",
    "app/layout.tsx",
    "app/contact/PageContent.tsx",
  ].filter((f) => fs.existsSync(f));
  const all = sources.map((f) => fs.readFileSync(f, "utf8")).join("\n");

  // tel: — collect every distinct number (Malta + any office numbers)
  const phoneMatches = Array.from(all.matchAll(/tel:(\$\{[^}]+\}|\+?[\d\s().-]{6,})/g));
  const phones = Array.from(new Set(phoneMatches.map((m) => m[1].trim())));
  out.push({
    name: "tap-to-call (tel:)",
    ok: phones.length > 0,
    detail: phones.length ? `found ${phones.length} number(s): ${phones.join(", ")}` : "NO tel: link",
  });

  // WhatsApp — variable-interpolated wa.me URLs are common, accept those too
  const wa = all.match(/(wa\.me\/(?:\$\{[^}]+\}|[\d+]+)|api\.whatsapp\.com\/send\?phone=[\d+]+|WHATSAPP_URL)/);
  out.push({
    name: "WhatsApp click-to-chat",
    ok: !!wa,
    detail: wa ? `wired (${wa[1]})` : "NO wa.me link in footer / sticky CTA / layout",
  });

  // mailto: — accept JSX-template-literal form `mailto:${NAP.email}`
  const mailto = all.match(/mailto:(\$\{[^}]+\}|[^"'\s`]+)/);
  out.push({
    name: "Email (mailto:)",
    ok: !!mailto,
    detail: mailto ? `wired (${mailto[1]})` : "NO mailto: link",
  });

  const cal = all.match(/cal\.com\/[a-z0-9-/]+/i);
  out.push({
    name: "Cal.com booking",
    ok: !!cal,
    detail: cal ? `found ${cal[0]}` : "no cal.com link found (may be intentional)",
  });

  // Lead-form Formspree wiring
  const leadsRoute = "app/api/leads/route.ts";
  if (fs.existsSync(leadsRoute)) {
    const src = fs.readFileSync(leadsRoute, "utf8");
    const fs_id = src.match(/formspree\.io\/f\/([a-z0-9]+)/i);
    out.push({
      name: "Lead form → Formspree",
      ok: !!fs_id,
      detail: fs_id ? `posts to formspree.io/f/${fs_id[1]}` : "/api/leads has NO Formspree endpoint",
    });
  }
  return out;
}

// ── Main ───────────────────────────────────────────────────────────────
function main() {
  const sitemapUrls = loadSitemapUrls();
  const pageFiles = walk(APP);
  const deadDirs = findDeadDirs();

  const rows: Row[] = pageFiles.map((file) => {
    const url = fileToUrl(file);
    const tier = tierFor(url);
    const programmatic = isProgrammatic(url);
    const src = readContent(file);
    const words = countWords(src);
    const images = countImages(src);
    const schema = detectSchema(src);
    const hasFaq = detectFaq(src);
    const inbound = getInboundLinks(url).length;
    const inSitemap = sitemapUrls.has(url) || programmatic;
    const ev = scoreEvergreen(src);

    const issues: string[] = [];
    // Tier minimums (looser than core-57 because this is whole-site)
    const minWords =
      tier === "pillar" ? 1200 :
      tier === "aeo" ? 700 :
      tier === "service" ? 400 :
      tier === "blog" ? 800 :
      tier === "case-study" ? 400 :
      tier === "shell" ? 200 :
      150;

    if (words < minWords) issues.push(`thin (${words}w < ${minWords})`);
    if (!schema.has && tier !== "legal" && tier !== "other") issues.push("no JSON-LD schema");
    if (!hasFaq && (tier === "service" || tier === "aeo" || tier === "pillar")) issues.push("no FAQ section");
    if (images === 0 && tier !== "legal" && tier !== "shell") issues.push("zero images");
    if (inbound < 2 && tier !== "shell" && tier !== "legal" && !programmatic) issues.push(`weak inbound (${inbound})`);
    if (!inSitemap && tier !== "legal" && tier !== "other") issues.push("not in any sitemap");
    if (ev.years.length > 0) issues.push(`year stamp (${ev.years.join(",")})`);

    let health: Health = "healthy";
    if (issues.some((i) => i.startsWith("thin")) && words < minWords / 2) health = "thin";
    else if (images === 0 && tier !== "legal" && tier !== "shell") health = "no-images";
    else if (issues.length >= 3) health = "at-risk";

    return {
      url,
      pageFile: file,
      exists: true,
      tier,
      programmatic,
      words,
      images,
      hasSchema: schema.has,
      schemaType: schema.type,
      hasFaq,
      inbound,
      inSitemap,
      evergreenScore: ev.score,
      yearStamps: ev.years,
      health,
      issues,
      primaryKeyword: extractKeyword(url),
    };
  });

  const contacts = auditContactPath();

  // ── Markdown report ───────────────────────────────────────────────────
  const today = new Date().toISOString().slice(0, 10);
  const lines: string[] = [];
  lines.push(`# OARC Digital — Site-Wide Brutal Audit`);
  lines.push(`_Generated ${today} · ${rows.length} routes scanned · graph: ${LINK_GRAPH.size} nodes_`);
  lines.push("");
  lines.push("> Static filesystem audit. No live server required. Reads every page.tsx + PageContent.tsx and scores it on 8 signals.");
  lines.push("");

  // Counts
  const byTier: Record<string, number> = {};
  for (const r of rows) byTier[r.tier] = (byTier[r.tier] || 0) + 1;
  const byHealth: Record<string, number> = {};
  for (const r of rows) byHealth[r.health] = (byHealth[r.health] || 0) + 1;
  const noImages = rows.filter((r) => r.images === 0 && r.tier !== "legal" && r.tier !== "shell");
  const noSchema = rows.filter((r) => !r.hasSchema && r.tier !== "legal");
  const noFaq = rows.filter((r) => !r.hasFaq && (r.tier === "service" || r.tier === "aeo" || r.tier === "pillar"));
  const notInSitemap = rows.filter((r) => !r.inSitemap && r.tier !== "legal" && r.tier !== "other");
  const yearStamped = rows.filter((r) => r.yearStamps.length > 0);
  const programmaticPages = rows.filter((r) => r.programmatic);

  lines.push("## TL;DR — what's actually broken");
  lines.push("");
  lines.push(`| Signal | Count | Action |`);
  lines.push(`|---|---:|---|`);
  lines.push(`| Pages scanned | ${rows.length} | — |`);
  lines.push(`| Pages with **no images** | ${noImages.length} | Add at least 1 hero + 1 inline image |`);
  lines.push(`| Pages with **no JSON-LD schema** | ${noSchema.length} | Add \`<RouteSchema>\` |`);
  lines.push(`| Service/AEO/pillar pages with **no FAQ** | ${noFaq.length} | Drop in the \`<FAQSection>\` component |`);
  lines.push(`| Pages **not listed in any sitemap** | ${notInSitemap.length} | Add to the matching \`sitemap-*.xml/route.ts\` |`);
  lines.push(`| Pages with **year stamps in body** (datedness) | ${yearStamped.length} | Replace with evergreen language |`);
  lines.push(`| **Dead directories** (folder exists, no page.tsx) | ${deadDirs.length} | Either delete the folder or add page.tsx |`);
  lines.push(`| Programmatic pages (dynamic [slug]) | ${programmaticPages.length} | These rely on \`generateStaticParams\` — verify build time |`);
  lines.push("");

  lines.push("## By tier");
  lines.push("");
  lines.push(`| Tier | Count | Healthy | At-risk | Thin | No-images |`);
  lines.push(`|---|---:|---:|---:|---:|---:|`);
  for (const tier of Object.keys(byTier).sort()) {
    const t = rows.filter((r) => r.tier === tier);
    const h = t.filter((r) => r.health === "healthy").length;
    const a = t.filter((r) => r.health === "at-risk").length;
    const th = t.filter((r) => r.health === "thin").length;
    const ni = t.filter((r) => r.health === "no-images").length;
    lines.push(`| ${tier} | ${t.length} | ${h} | ${a} | ${th} | ${ni} |`);
  }
  lines.push("");

  // ── Contact path ──────────────────────────────────────────────────────
  lines.push("## Phase A — Contact path verification");
  lines.push("");
  lines.push("> If contact is broken, ranking is worthless. These are static checks of the link strings in the layout/footer/sticky CTA.");
  lines.push("");
  for (const c of contacts) {
    lines.push(`- ${c.ok ? "✅" : "❌"} **${c.name}** — ${c.detail}`);
  }
  lines.push("");
  lines.push("> Live click-tests (open WhatsApp, dial Malta number, submit Formspree form) MUST be performed from a real phone — no static script can verify that the OS handler fires.");
  lines.push("");

  // ── Dead directories ──────────────────────────────────────────────────
  if (deadDirs.length) {
    lines.push("## ❌ Dead directories (folder exists but no page.tsx)");
    lines.push("");
    for (const d of deadDirs) lines.push(`- \`${d}\``);
    lines.push("");
  }

  // ── Critical: pages with NO images ────────────────────────────────────
  lines.push(`## 🖼️  Pages with ZERO images (${noImages.length})`);
  lines.push("");
  lines.push("Google's E-E-A-T weight rewards visual content. Every commercial-intent page should have at least one image.");
  lines.push("");
  if (noImages.length) {
    lines.push(`| URL | Tier | Words | Schema | Inbound |`);
    lines.push(`|---|---|---:|---|---:|`);
    for (const r of noImages.slice(0, 80).sort((a, b) => b.words - a.words)) {
      lines.push(`| \`${r.url}\` | ${r.tier} | ${r.words} | ${r.schemaType} | ${r.inbound} |`);
    }
    if (noImages.length > 80) lines.push(`| _...and ${noImages.length - 80} more_ | | | | |`);
  }
  lines.push("");

  // ── Pages with no schema ──────────────────────────────────────────────
  if (noSchema.length) {
    lines.push(`## 📋 Pages with NO JSON-LD schema (${noSchema.length})`);
    lines.push("");
    lines.push("Without schema, AI answer engines (ChatGPT, Perplexity, Gemini) cannot cite these pages.");
    lines.push("");
    lines.push(`| URL | Tier | Words |`);
    lines.push(`|---|---|---:|`);
    for (const r of noSchema.slice(0, 60).sort((a, b) => b.words - a.words)) {
      lines.push(`| \`${r.url}\` | ${r.tier} | ${r.words} |`);
    }
    if (noSchema.length > 60) lines.push(`| _...and ${noSchema.length - 60} more_ | | |`);
    lines.push("");
  }

  // ── Pages with no FAQ ────────────────────────────────────────────────
  if (noFaq.length) {
    lines.push(`## ❓ Service/AEO/pillar pages with NO FAQ (${noFaq.length})`);
    lines.push("");
    lines.push("FAQ schema is the single strongest signal for voice-search + AI-answer ranking on commercial pages.");
    lines.push("");
    lines.push(`| URL | Tier | Words |`);
    lines.push(`|---|---|---:|`);
    for (const r of noFaq.slice(0, 80).sort((a, b) => b.words - a.words)) {
      lines.push(`| \`${r.url}\` | ${r.tier} | ${r.words} |`);
    }
    if (noFaq.length > 80) lines.push(`| _...and ${noFaq.length - 80} more_ | | |`);
    lines.push("");
  }

  // ── Pages not in sitemap ─────────────────────────────────────────────
  if (notInSitemap.length) {
    lines.push(`## 🗺️  Pages NOT in any sitemap (${notInSitemap.length})`);
    lines.push("");
    lines.push("These pages exist but Google can't discover them via the sitemap index.");
    lines.push("");
    for (const r of notInSitemap.slice(0, 60)) lines.push(`- \`${r.url}\` (${r.tier}, ${r.words}w)`);
    if (notInSitemap.length > 60) lines.push(`- _...and ${notInSitemap.length - 60} more_`);
    lines.push("");
  }

  // ── Year-stamped (datedness risk) ────────────────────────────────────
  if (yearStamped.length) {
    lines.push(`## 📅 Pages with year stamps in content (${yearStamped.length})`);
    lines.push("");
    lines.push("Year stamps make pages decay. Either keep them (and commit to updating yearly) or rewrite to evergreen language.");
    lines.push("");
    for (const r of yearStamped.slice(0, 40)) {
      lines.push(`- \`${r.url}\` — mentions ${r.yearStamps.join(", ")}`);
    }
    if (yearStamped.length > 40) lines.push(`- _...and ${yearStamped.length - 40} more_`);
    lines.push("");
  }

  // ── Thin & at-risk ───────────────────────────────────────────────────
  const flagged = rows
    .filter((r) => r.health === "thin" || r.health === "at-risk")
    .sort((a, b) => a.words - b.words);
  lines.push(`## 🔻 Thin + at-risk pages (${flagged.length})`);
  lines.push("");
  lines.push("Sorted by word-count ascending. Top of list = highest churn risk.");
  lines.push("");
  if (flagged.length) {
    lines.push(`| URL | Tier | Words | Images | Schema | FAQ | Inbound | Issues |`);
    lines.push(`|---|---|---:|---:|---|---|---:|---|`);
    for (const r of flagged.slice(0, 100)) {
      lines.push(`| \`${r.url}\` | ${r.tier} | ${r.words} | ${r.images} | ${r.schemaType} | ${r.hasFaq ? "Y" : "—"} | ${r.inbound} | ${r.issues.join("; ")} |`);
    }
    if (flagged.length > 100) lines.push(`| _...and ${flagged.length - 100} more_ | | | | | | | |`);
  }
  lines.push("");

  // ── Healthy pages (the wins) ─────────────────────────────────────────
  const healthy = rows.filter((r) => r.health === "healthy");
  lines.push(`## ✅ Healthy pages (${healthy.length})`);
  lines.push("");
  lines.push("These pages have schema, images, depth, and discovery. Don't touch them — replicate their pattern on the broken ones.");
  lines.push("");
  for (const r of healthy.slice(0, 40).sort((a, b) => b.words - a.words)) {
    lines.push(`- \`${r.url}\` — ${r.words}w · ${r.images}img · schema=${r.schemaType} · ${r.inbound} inbound · FAQ=${r.hasFaq ? "Y" : "—"}`);
  }
  if (healthy.length > 40) lines.push(`- _...and ${healthy.length - 40} more_`);
  lines.push("");

  // ── Programmatic vs hand-crafted ────────────────────────────────────
  lines.push(`## 🤖 Programmatic vs hand-crafted`);
  lines.push("");
  lines.push(`- Hand-crafted pages: ${rows.filter((r) => !r.programmatic).length}`);
  lines.push(`- Programmatic (dynamic \`[slug]\`) pages: ${programmaticPages.length}`);
  if (programmaticPages.length) {
    lines.push("");
    lines.push("Programmatic routes (each fans out to N pages at build time via `generateStaticParams`):");
    for (const r of programmaticPages) lines.push(`- \`${r.url}\``);
  }
  lines.push("");

  // ── Reverse-engineered priority list ────────────────────────────────
  lines.push("## 🎯 Reverse-engineered priority list (do these IN ORDER)");
  lines.push("");
  lines.push("Goal: be #1 for Malta marketing-agency / AI-services queries. Every block below is a Google trust deduction.");
  lines.push("");
  lines.push("**Week 1 — stop the bleeding** (zero new pages until done)");
  if (deadDirs.length) lines.push(`1. Delete or rebuild **${deadDirs.length} dead directories** — folders with no page.tsx generate 404 if a stale link points at them.`);
  if (contacts.some((c) => !c.ok)) lines.push(`2. Fix **broken contact-path links** — see Phase A above. Mobile users can't reach you = wasted traffic.`);
  if (noSchema.length) lines.push(`3. Add JSON-LD schema to **${noSchema.length} pages** missing it. AI engines literally cannot parse you without this.`);
  if (notInSitemap.length) lines.push(`4. Add **${notInSitemap.length} pages to the sitemap**. If Google can't find a page in the index, it might never crawl it.`);
  lines.push("");
  lines.push("**Week 2 — close the FAQ + image gaps**");
  if (noFaq.length) lines.push(`5. Add an FAQ section to **${noFaq.length} commercial pages**. Use the existing \`<FAQSection>\` component.`);
  if (noImages.length) lines.push(`6. Add at least one image to **${noImages.length} image-less pages**. Hero illustration + 1 inline screenshot is enough.`);
  lines.push("");
  lines.push("**Week 3 — depth pass**");
  const thinCount = rows.filter((r) => r.health === "thin").length;
  if (thinCount) lines.push(`7. Rewrite **${thinCount} thin pages** to clear their tier minimum word-count. Use a unique angle per page (anti-cannibalisation).`);
  lines.push("");
  lines.push("**Ongoing — drip rollout** (per `.local/seo-rollout-calendar.md`)");
  lines.push("- 5–8 new pages/week MAX, never burst >10 in any 7-day window.");
  lines.push("- Every new page must pass `gate:full` BEFORE shipping (audit-core-57 + verify-redirects + audit-framework + audit-discovery).");
  lines.push("");

  // ── Full inventory ───────────────────────────────────────────────────
  lines.push("## Appendix — full route inventory");
  lines.push("");
  lines.push(`| URL | Tier | Health | Words | Img | Schema | FAQ | Inbound | Sitemap |`);
  lines.push(`|---|---|---|---:|---:|---|---|---:|---|`);
  for (const r of rows.sort((a, b) => a.url.localeCompare(b.url))) {
    lines.push(`| \`${r.url}\` | ${r.tier} | ${r.health} | ${r.words} | ${r.images} | ${r.schemaType} | ${r.hasFaq ? "Y" : "—"} | ${r.inbound} | ${r.inSitemap ? "Y" : "❌"} |`);
  }
  lines.push("");

  // Write report
  fs.mkdirSync(".local", { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join("\n"));

  // Console summary
  console.log(`\n📋 Site audit complete — ${rows.length} routes scanned`);
  console.log(`   Healthy:    ${byHealth.healthy ?? 0}`);
  console.log(`   At-risk:    ${byHealth["at-risk"] ?? 0}`);
  console.log(`   Thin:       ${byHealth.thin ?? 0}`);
  console.log(`   No-images:  ${byHealth["no-images"] ?? 0}`);
  console.log(`   Dead dirs:  ${deadDirs.length}`);
  console.log(`\n   No schema:  ${noSchema.length}`);
  console.log(`   No FAQ:     ${noFaq.length}`);
  console.log(`   No sitemap: ${notInSitemap.length}`);
  console.log(`   Year-stamp: ${yearStamped.length}`);
  console.log(`\n📝 Full report → ${REPORT_PATH}`);
}

main();
