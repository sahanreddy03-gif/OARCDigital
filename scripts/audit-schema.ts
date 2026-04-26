/**
 * JSON-LD schema audit (HTTP-only).
 *
 * Complements `audit-nap.ts`. Where audit-nap focuses on the *content* of
 * NAP-bearing entities, audit-schema focuses on the *structure* of every
 * JSON-LD block on every monitored URL:
 *
 *   1. Parse-error tier — every <script type="application/ld+json"> block
 *      MUST parse cleanly via JSON.parse. A parse error here is an outage:
 *      Google ignores the block entirely.
 *   2. Required-field tier — every entity must declare `@context` and
 *      `@type`. Missing either field means Google treats the block as
 *      generic JSON, not schema.org.
 *   3. Type-allow-list tier — only schema.org types we actually use are
 *      allowed; an unknown @type is almost always a typo (e.g. `LocalBus`)
 *      that silently disables rich-result eligibility.
 *   4. Per-page contract — pages with a documented schema obligation must
 *      emit at least one entity of the expected type. Catches a regression
 *      where a refactor accidentally drops a Service / FAQPage block.
 *
 * Usage:
 *   npx tsx scripts/audit-schema.ts                  # default http://localhost:5000
 *   BASE=http://localhost:3000 npx tsx scripts/audit-schema.ts
 *
 * Wired into `scripts/seo-gate.sh` gate:full HTTP block. Exits non-zero on
 * any failure so the gate breaks loudly.
 */
import {
  extractJsonLd,
  flattenJsonLdEntities,
  findEntitiesByType,
} from "../lib/seo/jsonLdExtract";

const BASE = process.env.BASE ?? "http://localhost:5000";

// schema.org @type values OARC actually uses. Anything else is a typo / a
// new schema we should consciously add to this list (forcing review).
const ALLOWED_TYPES = new Set<string>([
  "Organization",
  "LocalBusiness",
  "MarketingAgency",
  "ProfessionalService",
  "WebSite",
  "WebPage",
  "Service",
  "Product",
  "Article",
  "BlogPosting",
  "FAQPage",
  "Question",
  "Answer",
  "BreadcrumbList",
  "ListItem",
  "ItemList",
  "Offer",
  "AggregateOffer",
  "Review",
  "AggregateRating",
  "Person",
  "PostalAddress",
  "GeoCoordinates",
  "ContactPoint",
  "OpeningHoursSpecification",
  "Place",
  "Country",
  "ImageObject",
  "VideoObject",
  "HowTo",
  "HowToStep",
  "SoftwareApplication",
  "MobileApplication",
  "WebApplication",
  "CreativeWork",
  "Course",
  "Event",
  "SearchAction",
  "EntryPoint",
  "PriceSpecification",
  "OfferCatalog",
  "SpeakableSpecification",
  "Brand",
  "QuantitativeValue",
  "Demand",
  "MonetaryAmount",
]);

// Per-URL contract. Each entry asserts that the page emits at least one
// entity of the listed @type. Missing keys = no contract (parse + required-
// field tiers still apply).
//
// Mirror of `audit-nap.ts` TARGETS: top-level surfaces explicitly listed,
// plus representative AEO / blog / case-study / industry pages so a
// template-level schema regression in those directories breaks the gate.
const URL_CONTRACT: Record<string, readonly string[]> = {
  "/": ["Organization"],
  "/contact": ["LocalBusiness", "MarketingAgency", "Organization"],
  "/automation": ["LocalBusiness", "MarketingAgency"],
  "/solutions": ["LocalBusiness", "MarketingAgency"],
  "/ai-agents": ["LocalBusiness", "MarketingAgency"],
  "/creative": ["LocalBusiness", "MarketingAgency"],
  "/services/seo-services": ["Service"],
  "/services/saas-development": ["Service"],
  "/services/web-apps-development": ["Service"],
  "/services/wordpress-development": ["Service"],
  "/services/ecommerce-development": ["Service"],
  "/services/shopify-development": ["Service"],
  "/services/email-marketing": ["Service"],
  "/services/content-marketing": ["Service"],
  "/services/database-design": ["Service"],
  "/services/devops-services": ["Service"],
  // Representative AEO pages (Task #76 depth-parity refactor — every
  // /aeo/* page emits a Service block via RouteSchema).
  "/aeo/saas-development-malta": ["Service"],
  "/aeo/marketing-agency-mosta": ["Service"],
  "/aeo/marketing-agency-swieqi": ["Service"],
  "/aeo/web-development-agency-malta": ["Service"],
  "/aeo/mobile-app-developers-malta": ["Service"],
  // Representative blog posts emit Article (verified against rendered DOM).
  "/blog/marketing-agency-malta": ["Article", "BlogPosting"],
  "/blog/igaming-marketing-malta": ["Article", "BlogPosting"],
  // /case-studies/*, /industries, and /legal/* are deliberately included in
  // TARGETS (so the parse + allow-list tiers still cover their JSON-LD)
  // but DO NOT yet emit a top-level schema entity. That schema gap is
  // tracked separately — adding a contract here would gate Task #90 on
  // unrelated work. When those pages ship a parent CreativeWork / WebPage
  // / Organization entity, add the contract back.
  "/case-studies/volta-home": [],
  "/case-studies/authentic-stories": [],
  "/industries": [],
  "/legal/privacy-policy": [],
};

const TARGETS = Object.keys(URL_CONTRACT);

type Failure = {
  url: string;
  tier: "parse" | "required-field" | "type-allowlist" | "contract" | "fetch";
  detail: string;
};

const failures: Failure[] = [];

function fail(url: string, tier: Failure["tier"], detail: string): void {
  failures.push({ url, tier, detail });
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(`${BASE}${url}`, { redirect: "follow" });
    if (!res.ok) {
      fail(url, "fetch", `HTTP ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    fail(url, "fetch", err instanceof Error ? err.message : String(err));
    return null;
  }
}

function typesOf(entity: unknown): string[] {
  if (!entity || typeof entity !== "object") return [];
  const t = (entity as Record<string, unknown>)["@type"];
  if (typeof t === "string") return [t];
  if (Array.isArray(t)) return t.filter((x): x is string => typeof x === "string");
  return [];
}

function auditEntities(
  url: string,
  entities: unknown[],
  { contextInheritedFromWrapper }: { contextInheritedFromWrapper: boolean },
): void {
  for (const ent of entities) {
    if (!ent || typeof ent !== "object") {
      fail(url, "required-field", `non-object entity in JSON-LD payload: ${JSON.stringify(ent)}`);
      continue;
    }
    const e = ent as Record<string, unknown>;
    const types = typesOf(e);
    // @context can be inherited from a wrapper @graph object, or a sub-
    // entity may legitimately omit @context (PostalAddress, Offer …)
    // because it sits inside a parent that declares it. Only flag entities
    // that are top-level AND not legitimate sub-entities.
    if (e["@context"] === undefined && !contextInheritedFromWrapper) {
      const isSubEntity = types.some((t) =>
        ["PostalAddress", "GeoCoordinates", "ContactPoint", "OpeningHoursSpecification",
         "Offer", "AggregateOffer", "Question", "Answer", "ListItem",
         "Place", "Country", "Person", "ImageObject", "VideoObject",
         "HowToStep", "EntryPoint", "PriceSpecification", "OfferCatalog",
         "SpeakableSpecification", "Brand", "QuantitativeValue", "Demand",
         "MonetaryAmount"].includes(t),
      );
      if (!isSubEntity) {
        fail(url, "required-field", `entity missing @context: @type=${JSON.stringify(types)}`);
      }
    }
    if (types.length === 0) {
      fail(url, "required-field", `entity missing @type: keys=${Object.keys(e).join(",")}`);
      continue;
    }
    for (const t of types) {
      if (!ALLOWED_TYPES.has(t)) {
        fail(url, "type-allowlist", `unknown @type ${JSON.stringify(t)} — typo or new schema?`);
      }
    }
  }
}

function auditContract(url: string, entities: unknown[]): void {
  const contract = URL_CONTRACT[url];
  if (!contract || contract.length === 0) return;
  // Match if any of the contract types appears (the OR semantics — for
  // example /contact lists three NAP types, any one is enough).
  const found = findEntitiesByType(entities, contract);
  if (found.length === 0) {
    fail(
      url,
      "contract",
      `no entity matching expected @type ∈ {${contract.join(", ")}} — page either dropped its schema or renamed it`,
    );
  }
}

async function auditUrl(url: string): Promise<void> {
  const html = await fetchPage(url);
  if (html === null) return;
  const results = extractJsonLd(html);
  for (const r of results) {
    if (!r.ok) {
      fail(url, "parse", `block #${r.index}: ${r.error} :: ${r.rawSnippet}`);
    }
  }
  // Walk inline + @graph entities for structural checks. When a block uses
  // a `@graph` wrapper that declares `@context`, downstream entities inside
  // the graph inherit it — we must NOT flag them as "missing @context".
  const flatTop: unknown[] = [];
  const flatGraphInherited: unknown[] = [];
  for (const r of results) {
    if (!r.ok) continue;
    if (Array.isArray(r.data)) {
      flatTop.push(...r.data);
      continue;
    }
    const d = r.data as Record<string, unknown> | undefined;
    if (d && Array.isArray(d["@graph"])) {
      const wrapperHasContext = d["@context"] !== undefined;
      if (wrapperHasContext) {
        flatGraphInherited.push(...(d["@graph"] as unknown[]));
      } else {
        flatTop.push(...(d["@graph"] as unknown[]));
      }
    } else {
      flatTop.push(r.data);
    }
  }
  const flat = [...flatTop, ...flatGraphInherited];
  if (flat.length === 0 && URL_CONTRACT[url]?.length) {
    fail(url, "contract", "no JSON-LD entities found at all");
    return;
  }
  auditEntities(url, flatTop, { contextInheritedFromWrapper: false });
  auditEntities(url, flatGraphInherited, { contextInheritedFromWrapper: true });
  // Also walk every parsed entity recursively for sub-entity allow-list
  // checks (e.g. an Offer nested under a Service).
  for (const r of results) {
    if (!r.ok) continue;
    walkSubEntities(url, r.data);
  }
  auditContract(url, flat);
}

function walkSubEntities(url: string, node: unknown): void {
  if (!node || typeof node !== "object") return;
  const e = node as Record<string, unknown>;
  const types = typesOf(e);
  for (const t of types) {
    if (!ALLOWED_TYPES.has(t)) {
      fail(url, "type-allowlist", `unknown nested @type ${JSON.stringify(t)}`);
    }
  }
  for (const value of Object.values(e)) {
    if (Array.isArray(value)) {
      for (const v of value) walkSubEntities(url, v);
    } else if (value && typeof value === "object") {
      walkSubEntities(url, value);
    }
  }
}

async function main(): Promise<void> {
  console.log(`audit-schema: BASE=${BASE} targets=${TARGETS.length}`);
  try {
    const probe = await fetch(BASE, { method: "HEAD" });
    if (!probe.ok && probe.status !== 405) {
      throw new Error(`HEAD ${BASE} → HTTP ${probe.status}`);
    }
  } catch (err) {
    console.error(
      `audit-schema: server not reachable at ${BASE} — ${err instanceof Error ? err.message : String(err)}`,
    );
    console.error("audit-schema: this audit only runs in gate:full and requires the dev server up");
    process.exit(2);
  }
  for (const url of TARGETS) {
    await auditUrl(url);
    process.stdout.write(".");
  }
  console.log();
  if (failures.length === 0) {
    console.log(`audit-schema: PASS (${TARGETS.length}/${TARGETS.length} URLs)`);
    return;
  }
  console.error(`audit-schema: FAIL — ${failures.length} issue(s) across ${new Set(failures.map((f) => f.url)).size} URL(s):`);
  for (const f of failures) {
    console.error(`  [${f.tier}] ${f.url} :: ${f.detail}`);
  }
  process.exit(1);
}

main().catch((err) => {
  console.error("audit-schema: crashed", err);
  process.exit(1);
});
