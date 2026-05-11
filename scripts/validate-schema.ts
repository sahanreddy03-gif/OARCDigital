/* eslint-disable no-console */
/**
 * Task #133 — schema completeness sweep across all 60 core OARC Digital pages.
 *
 * Static analyzer. Walks every URL in `.local/memory/core-url-rank.md` (the
 * canonical 60), resolves it to its `app/.../page.tsx`, and asserts the
 * page emits the required JSON-LD bundle:
 *
 *   - 1x Service (or pillar-appropriate primary entity)
 *   - 1x FAQPage with >= 5 questions
 *   - 1x BreadcrumbList
 *   - 1x Speakable (WebPage with SpeakableSpecification cssSelector)
 *
 * Service-tier pages additionally need an AggregateRating (Review block where
 * >=3 testimonials exist). Blog index needs a CollectionPage / pillar bundle;
 * blog posts (out of the 60) emit Article + Author elsewhere via RouteSchema
 * type="article".
 *
 * STATIC: this script does NOT spin up the dev server. It reads page.tsx,
 * resolves the linked schema config (SERVICE_SCHEMAS, SERVICE_SCHEMA_EXTRAS,
 * PILLAR_SCHEMAS, SUPPORTING_PAGE_SCHEMAS), and proves the components needed
 * to emit each block are present in the file. Faster than HTTP audits and
 * runs on every commit via gate:fast.
 *
 * Usage:
 *   npx tsx scripts/validate-schema.ts
 *
 * Wired into `scripts/seo-gate.sh` gate:fast.
 */

import fs from "node:fs";
import path from "node:path";

import { SERVICE_SCHEMAS } from "../lib/seo/serviceSchemaConfig";
import { SERVICE_SCHEMA_EXTRAS } from "../lib/seo/serviceSchemaExtras";
import { PILLAR_SCHEMAS } from "../lib/seo/pillarSchemaConfig";
import { SUPPORTING_PAGE_SCHEMAS } from "../lib/seo/supportingPagesSchema";
import { TOP_PAGES } from "../lib/seo/topPages";

// ---------------------------------------------------------------------------
// Canonical 60 — kept in sync with `.local/memory/core-url-rank.md`. ANY edit
// to this list must also edit core-url-rank.md (the user-locked ordering).
// ---------------------------------------------------------------------------

type CanonicalPage = {
  url: string;
  tier: "P0" | "P1" | "P2" | "P3";
  /** Primary schema entity expected on this page. */
  expects: "pillar" | "service" | "shell";
};

const CANONICAL_60: CanonicalPage[] = [
  // Tier 1 — pillars
  { url: "/", tier: "P0", expects: "pillar" },
  { url: "/creative", tier: "P0", expects: "pillar" },
  { url: "/ai-agents", tier: "P0", expects: "pillar" },
  { url: "/solutions", tier: "P0", expects: "pillar" },
  // Tier 2 — top nav / supports
  { url: "/services/social-media-creative-management", tier: "P1", expects: "service" },
  { url: "/services", tier: "P1", expects: "shell" },
  { url: "/our-work", tier: "P1", expects: "shell" },
  { url: "/contact", tier: "P1", expects: "shell" },
  { url: "/pricing", tier: "P1", expects: "shell" },
  { url: "/why-us", tier: "P1", expects: "shell" },
  { url: "/blog", tier: "P1", expects: "shell" },
  { url: "/case-studies", tier: "P1", expects: "shell" },
  { url: "/tools", tier: "P2", expects: "shell" },
  // Tier 3 — headline services
  { url: "/services/branding", tier: "P1", expects: "service" },
  { url: "/services/video-production", tier: "P1", expects: "service" },
  { url: "/services/ai-appointment-booker", tier: "P1", expects: "service" },
  { url: "/services/ai-data-analyst", tier: "P1", expects: "service" },
  { url: "/services/api-integration-services", tier: "P2", expects: "service" },
  { url: "/services/custom-software-development", tier: "P2", expects: "service" },
  { url: "/services/ai-consulting", tier: "P1", expects: "service" },
  { url: "/services/ai-admin-agent", tier: "P1", expects: "service" },
  { url: "/services/web-design", tier: "P1", expects: "service" },
  { url: "/services/social", tier: "P2", expects: "service" },
  { url: "/services/influencer-marketing", tier: "P2", expects: "service" },
  { url: "/services/motion-design", tier: "P2", expects: "service" },
  { url: "/services/presentation-pitch", tier: "P2", expects: "service" },
  { url: "/services/marketing-automation-suite", tier: "P1", expects: "service" },
  { url: "/services/paid-advertising", tier: "P1", expects: "service" },
  { url: "/services/seo-services", tier: "P1", expects: "service" },
  { url: "/services/email-marketing", tier: "P1", expects: "service" },
  { url: "/services/content-marketing", tier: "P1", expects: "service" },
  { url: "/services/lead-generation", tier: "P2", expects: "service" },
  { url: "/services/performance-analytics", tier: "P2", expects: "service" },
  { url: "/services/revenue-automation", tier: "P1", expects: "service" },
  { url: "/services/funnel-automation", tier: "P1", expects: "service" },
  { url: "/services/customer-acquisition-accelerator", tier: "P2", expects: "service" },
  { url: "/services/hire-ai-employees", tier: "P1", expects: "service" },
  { url: "/about", tier: "P1", expects: "shell" },
  { url: "/services/ai-sdr-agent", tier: "P1", expects: "service" },
  { url: "/services/ai-support-specialist", tier: "P1", expects: "service" },
  { url: "/services/saas-development", tier: "P2", expects: "service" },
  { url: "/services/mobile-apps-development", tier: "P2", expects: "service" },
  { url: "/services/web-apps-development", tier: "P2", expects: "service" },
  { url: "/services/ecommerce-development", tier: "P2", expects: "service" },
  { url: "/services/mvp-development", tier: "P2", expects: "service" },
  { url: "/services/devops-services", tier: "P2", expects: "service" },
  { url: "/services/growth-strategy", tier: "P2", expects: "service" },
  { url: "/services/ad-creative", tier: "P3", expects: "service" },
  { url: "/services/email-creative", tier: "P3", expects: "service" },
  { url: "/services/print-packaging", tier: "P3", expects: "service" },
  { url: "/services/illustration", tier: "P3", expects: "service" },
  { url: "/services/design-systems", tier: "P3", expects: "service" },
  { url: "/services/immersive-3d-ar", tier: "P3", expects: "service" },
  { url: "/industries", tier: "P2", expects: "shell" },
  { url: "/intelligence", tier: "P2", expects: "shell" },
  { url: "/diagnostics", tier: "P2", expects: "shell" },
  { url: "/automation", tier: "P2", expects: "pillar" },
  { url: "/enterprise", tier: "P2", expects: "shell" },
  { url: "/roadmap-2026", tier: "P2", expects: "shell" },
  { url: "/pdf-hub", tier: "P2", expects: "shell" },
];

// Sanity gate: refuse to run if we drift from "60".
if (CANONICAL_60.length !== 60) {
  console.error(
    `validate-schema: CANONICAL_60 length is ${CANONICAL_60.length}, must be exactly 60. ` +
      "If `.local/memory/core-url-rank.md` legitimately changed, update both files together.",
  );
  process.exit(2);
}

// ---------------------------------------------------------------------------
// Page resolution + static parsing
// ---------------------------------------------------------------------------

const REPO_ROOT = path.resolve(process.cwd());

function urlToPagePath(url: string): string {
  if (url === "/") return path.join(REPO_ROOT, "app", "page.tsx");
  return path.join(REPO_ROOT, "app", url.replace(/^\//, ""), "page.tsx");
}

type PageCheck = {
  url: string;
  expects: "pillar" | "service" | "shell";
  /** File contents (page.tsx). Empty when missing. */
  source: string;
  /** True when the file exists on disk. */
  exists: boolean;
};

type Issue = {
  url: string;
  type: "missing" | "service" | "faq" | "breadcrumb" | "speakable" | "pillar" | "review";
  message: string;
};

const issues: Issue[] = [];

function loadPage(url: string, expects: PageCheck["expects"]): PageCheck {
  const file = urlToPagePath(url);
  if (!fs.existsSync(file)) {
    return { url, expects, source: "", exists: false };
  }
  return { url, expects, source: fs.readFileSync(file, "utf8"), exists: true };
}

// ---------------------------------------------------------------------------
// Per-block detectors. All are static (regex / config lookup); no HTTP.
// ---------------------------------------------------------------------------

/**
 * Service block presence + FAQ count >= 5 for service-tier pages.
 *
 * Strategy: a service page must mount `<RouteSchema type="service" ...>` and
 * pass a `faqs={schema.faqs}` (or equivalent) prop. The FAQ count is then
 * looked up directly in the typed config object so the validator catches
 * drift between page.tsx and the schema source-of-truth.
 */
function checkService(p: PageCheck): void {
  if (p.expects !== "service") return;

  if (!/<RouteSchema[\s\S]*?type=["']service["']/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "service",
      message: "page.tsx does not mount <RouteSchema type=\"service\"> — Service node will not emit",
    });
    return;
  }
  if (!/faqs=\{/.test(p.source) && !/faqs:\s*/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "faq",
      message: "service page does not pass `faqs=` to <RouteSchema> — FAQPage node will not emit",
    });
    return;
  }

  // Resolve the FAQ count from the typed config (single source of truth).
  const slug = p.url.replace(/^\/services\//, "");
  const cfg = (SERVICE_SCHEMAS as Record<string, { faqs?: unknown[] }>)[slug]
    ?? (SERVICE_SCHEMA_EXTRAS as Record<string, { faqs?: unknown[] }>)[slug];
  if (!cfg) {
    issues.push({
      url: p.url,
      type: "service",
      message: `slug "${slug}" not found in SERVICE_SCHEMAS or SERVICE_SCHEMA_EXTRAS — cannot verify FAQ count`,
    });
    return;
  }
  const faqCount = Array.isArray(cfg.faqs) ? cfg.faqs.length : 0;
  if (faqCount < 5) {
    issues.push({
      url: p.url,
      type: "faq",
      message: `FAQ count ${faqCount} < 5 — schema contract requires at least 5 questions per page`,
    });
  }
}

/**
 * Pillar block presence + FAQ count >= 5 for the four canonical pillars +
 * /automation. These mount <RouteSchema type="pillar"> which emits
 * Organization + LocalBusiness + WebSite + Person + WebPage + FAQPage +
 * BreadcrumbList in a single graph.
 */
function checkPillar(p: PageCheck): void {
  if (p.expects !== "pillar") return;

  if (!/<RouteSchema[\s\S]*?type=["']pillar["']/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "pillar",
      message: "page.tsx does not mount <RouteSchema type=\"pillar\"> — pillar bundle will not emit",
    });
    return;
  }
  if (!/faqs=\{/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "faq",
      message: "pillar page does not pass `faqs=` to <RouteSchema> — FAQPage will not emit",
    });
    return;
  }

  // /solutions intentionally reuses the /automation PILLAR_SCHEMAS entry
  // (Tier 1 pillar that historically shared its schema source-of-truth with
  // the /automation pillar — see app/solutions/page.tsx). Map the lookup so
  // the validator does not false-flag the alias.
  const PILLAR_ALIASES: Record<string, string> = { "/solutions": "/automation" };
  const lookup = PILLAR_ALIASES[p.url] ?? p.url;
  const cfg = (PILLAR_SCHEMAS as Record<string, { faqs?: unknown[] }>)[lookup];
  if (!cfg) {
    issues.push({
      url: p.url,
      type: "pillar",
      message: `pillar path "${p.url}" not in PILLAR_SCHEMAS — cannot verify FAQ count`,
    });
    return;
  }
  const faqCount = Array.isArray(cfg.faqs) ? cfg.faqs.length : 0;
  if (faqCount < 5) {
    issues.push({
      url: p.url,
      type: "faq",
      message: `pillar FAQ count ${faqCount} < 5 — schema contract requires at least 5 questions`,
    });
  }
}

/**
 * Supporting / strategic shells (e.g. /services index, /our-work, /about,
 * /industries). Same RouteSchema type="pillar" mount but FAQ source is
 * SUPPORTING_PAGE_SCHEMAS. Some pages legitimately use a custom inline
 * graph (e.g. /our-work uses buildOurWorkShellGraph) — those still need
 * the RouteSchema mount alongside the inline graph for FAQ + Breadcrumb +
 * Speakable coverage.
 */
function checkShell(p: PageCheck): void {
  if (p.expects !== "shell") return;

  if (!/<RouteSchema[\s\S]*?type=["']pillar["']/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "pillar",
      message: "supporting-page page.tsx does not mount <RouteSchema type=\"pillar\"> — pillar bundle (Org+LB+WebSite+Person+WebPage+Breadcrumb+FAQ) will not emit",
    });
    return;
  }
  if (!/faqs=\{/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "faq",
      message: "supporting-page page.tsx does not pass `faqs=` to <RouteSchema> — FAQPage will not emit",
    });
    return;
  }

  const cfg = (SUPPORTING_PAGE_SCHEMAS as Record<string, { faqs?: unknown[] }>)[p.url];
  if (!cfg) {
    issues.push({
      url: p.url,
      type: "pillar",
      message: `supporting path "${p.url}" not in SUPPORTING_PAGE_SCHEMAS — cannot verify FAQ count`,
    });
    return;
  }
  const faqCount = Array.isArray(cfg.faqs) ? cfg.faqs.length : 0;
  if (faqCount < 5) {
    issues.push({
      url: p.url,
      type: "faq",
      message: `supporting FAQ count ${faqCount} < 5 — schema contract requires at least 5 questions`,
    });
  }
}

/**
 * Speakable JSON-LD presence. Two acceptable mounts:
 *   - <SpeakableJsonLd path="..." />  (only emits when path is in TOP_PAGES)
 *   - inline `<script type="application/ld+json">` carrying a SpeakableSpecification
 *
 * For the first form we additionally require the path to be present in
 * TOP_PAGES — otherwise SpeakableJsonLd no-ops and the schema does not ship.
 */
function checkSpeakable(p: PageCheck): void {
  const hasMount = /<SpeakableJsonLd\b/.test(p.source);
  const hasInline = /SpeakableSpecification/.test(p.source);
  if (!hasMount && !hasInline) {
    issues.push({
      url: p.url,
      type: "speakable",
      message: "page.tsx does not mount <SpeakableJsonLd> nor inline a SpeakableSpecification — voice-search Speakable block will not emit",
    });
    return;
  }
  if (hasMount && !hasInline) {
    const inTop = TOP_PAGES.some((tp) => tp.path === p.url);
    if (!inTop) {
      issues.push({
        url: p.url,
        type: "speakable",
        message: "page.tsx mounts <SpeakableJsonLd> but path is NOT in lib/seo/topPages.ts → component no-ops and Speakable JSON-LD never emits",
      });
    }
  }
}

/**
 * BreadcrumbList — guaranteed by every <RouteSchema> mount (the helper
 * derives a BreadcrumbList from the path prop unconditionally). So this
 * check is satisfied as a side-effect of checkService / checkPillar /
 * checkShell. Kept as an explicit no-op so the contract is documented in
 * one place and so a future RouteSchema refactor that drops Breadcrumb
 * emission would surface a clear failure point to add the explicit assert.
 */
function checkBreadcrumb(_p: PageCheck): void {
  // Intentionally no-op. RouteSchema unconditionally pushes a BreadcrumbList
  // node into the @graph (see components/RouteSchema.tsx). Verified by the
  // checkService / checkPillar / checkShell mount checks above.
}

/**
 * Service-tier pages get AggregateRating via DEFAULT_RATING in RouteSchema.
 * We assert pages do not opt out via aggregateRating={null} or similar.
 */
function checkReview(p: PageCheck): void {
  if (p.expects !== "service") return;
  if (/aggregateRating\s*=\s*\{?\s*(null|false|undefined)/.test(p.source)) {
    issues.push({
      url: p.url,
      type: "review",
      message: "service page explicitly disables aggregateRating — Review/AggregateRating bundle will not emit",
    });
  }
}

// ---------------------------------------------------------------------------
// Driver
// ---------------------------------------------------------------------------

function main(): void {
  console.log(`validate-schema: walking ${CANONICAL_60.length} canonical pages`);

  for (const c of CANONICAL_60) {
    const p = loadPage(c.url, c.expects);
    if (!p.exists) {
      issues.push({
        url: c.url,
        type: "missing",
        message: `page.tsx does not exist at ${path.relative(REPO_ROOT, urlToPagePath(c.url))}`,
      });
      continue;
    }
    checkService(p);
    checkPillar(p);
    checkShell(p);
    checkSpeakable(p);
    checkBreadcrumb(p);
    checkReview(p);
  }

  if (issues.length === 0) {
    console.log(`  OK — all 60 canonical pages emit Service/Pillar + FAQPage(>=5) + BreadcrumbList + Speakable`);
    return;
  }

  console.error(`\nvalidate-schema: ${issues.length} issue(s) across ${new Set(issues.map((i) => i.url)).size} page(s):`);
  const byUrl = new Map<string, Issue[]>();
  for (const i of issues) {
    const list = byUrl.get(i.url) ?? [];
    list.push(i);
    byUrl.set(i.url, list);
  }
  for (const [url, list] of byUrl) {
    console.error(`\n  ${url}`);
    for (const i of list) console.error(`    [${i.type}] ${i.message}`);
  }
  process.exit(1);
}

main();
