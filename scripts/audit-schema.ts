/**
 * JSON-LD schema audit (HTTP-only).
 *
 * Complements `audit-nap.ts`. Where audit-nap focuses on the *content* of
 * NAP-bearing entities, audit-schema focuses on the *structure* of every
 * JSON-LD block on every URL the live sitemap advertises:
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
 *   4. @id-orphan resolution — every reference-only `{@id: "..."}` shape
 *      must resolve to a defined entity declared on the same page.
 *   5. ISO-8601 date format — every `datePublished` / `dateModified` /
 *      `startDate` / `endDate` value must be a valid ISO 8601 string.
 *   6. Banned-property — entities must not contain lower-cased
 *      `id`/`type`/`context` typos or stray crawler-hint keys.
 *   7. Per-page contract — pages with a documented schema obligation must
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
import { walkSitemap } from "../lib/seo/sitemapWalker";

const BASE = process.env.BASE ?? "http://localhost:5000";
const CONCURRENCY = Number(process.env.AUDIT_CONCURRENCY ?? "6");

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
  // Used by /malta/* location pages and review/rating widgets.
  "City",
  "Rating",
  "Audience",
  // Emitted by lib/schema/index.ts (Dataset for stats blocks, PropertyValue
  // for typed Dataset metadata) and required-map (NewsArticle — kept here
  // so the allowlist and the per-type required-property map never drift).
  "Dataset",
  "PropertyValue",
  "NewsArticle",
]);

// Per-URL schema contract — listed pages MUST emit at least one entity of
// the named @type. Missing keys = no contract (parse / required-field /
// type-allowlist / @id-orphan / date-format / banned-property tiers still
// apply via the sitemap walk). Empty array = explicit "no parent schema
// yet" (deliberate placeholder, see comments below).
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
  tier:
    | "parse"
    | "required-field"
    | "type-allowlist"
    | "id-orphan"
    | "date-format"
    | "banned-property"
    | "contract"
    | "fetch";
  detail: string;
};

// Per-@type required-property contract. When an entity declares one of
// these types it MUST also declare every key in the corresponding array.
// Missing properties = the entity is structurally invalid for that type
// and rich results / answer-engine extraction silently degrade. Only the
// types we actively emit are listed; sub-entity types (PostalAddress,
// Offer, etc.) are validated indirectly via their parents' contracts.
const REQUIRED_PROPS_BY_TYPE: Record<string, readonly string[]> = {
  // Organization is intentionally lax: schema.org requires only `name`, and
  // we don't want to false-positive on every Service.provider Organization
  // (which is allowed to be a thin descriptor `{@type, name, url}` per
  // schema.org). Address-bearing requirements live on the more specific
  // LocalBusiness / MarketingAgency / ProfessionalService rows below — those
  // are what Google's local-pack ingests for NAP, and that is what we are
  // protecting. A bare Organization without address is valid markup.
  Organization: ["name", "url"],
  LocalBusiness: ["name", "address", "telephone"],
  MarketingAgency: ["name", "address", "telephone"],
  ProfessionalService: ["name", "address", "telephone"],
  Service: ["name", "provider", "areaServed"],
  Article: ["headline", "datePublished", "author", "publisher"],
  BlogPosting: ["headline", "datePublished", "author", "publisher"],
  NewsArticle: ["headline", "datePublished", "author", "publisher"],
  WebSite: ["url", "name"],
  WebPage: ["url"],
  BreadcrumbList: ["itemListElement"],
  FAQPage: ["mainEntity"],
  Question: ["name", "acceptedAnswer"],
  Answer: ["text"],
  Person: ["name"],
  PostalAddress: ["streetAddress", "addressLocality", "postalCode", "addressCountry"],
  GeoCoordinates: ["latitude", "longitude"],
  Offer: ["price", "priceCurrency"],
  Review: ["reviewRating", "author"],
  AggregateRating: ["ratingValue", "reviewCount"],
};

// `@id` values must be absolute URIs. A bare slug like `"hello"` or a
// relative path like `"/foo#bar"` is silently dropped by Google. Allow
// http(s) URIs and `urn:` IRIs (legitimate for non-resolvable identities).
const ID_FORMAT_RE = /^(https?:\/\/[^\s]+|urn:[a-z0-9][a-z0-9-]+:.+)$/i;

// schema.org property names whose value must be ISO 8601 (date or
// dateTime). Anything else is invisible to Google's date-aware crawlers.
const ISO_DATE_PROPS = new Set<string>([
  "datePublished",
  "dateModified",
  "dateCreated",
  "startDate",
  "endDate",
  "validFrom",
  "validThrough",
  "uploadDate",
  "expires",
]);

// Properties that must NEVER appear in JSON-LD blobs. These are typos or
// JS-side property names that leaked into the schema (lowercase variants
// of @-prefixed keys, googlebot crawler hints that belong in <meta>, etc.).
const BANNED_PROPS = new Set<string>([
  "id",          // wrong-cased — the schema-org key is `@id`
  "type",        // wrong-cased — the schema-org key is `@type`
  "context",     // wrong-cased — the schema-org key is `@context`
  "googleBot",
  "googlebot",
  "robots",
  "viewport",
]);

// ISO 8601 (lenient): YYYY[-MM[-DD]][Thh:mm[:ss[.sss]][Z|±hh:mm]]
const ISO_DATE_RE = /^\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?)?$/;

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
      // Per-@type required-property contract — enforced at every entity
      // level (top + nested), not just the URL_CONTRACT keys, so a
      // PostalAddress sub-entity missing `streetAddress` fails everywhere
      // it appears.
      const required = REQUIRED_PROPS_BY_TYPE[t];
      if (required) {
        const missing = required.filter((k) => e[k] === undefined);
        if (missing.length > 0) {
          fail(
            url,
            "required-field",
            `${t} missing required propert${missing.length === 1 ? "y" : "ies"} ${JSON.stringify(missing)}`,
          );
        }
      }
    }
    // @id values, when present, must be absolute URIs. Relative paths
    // and bare slugs silently break Google's id-graph resolution.
    if (typeof e["@id"] === "string" && !ID_FORMAT_RE.test(e["@id"] as string)) {
      fail(
        url,
        "required-field",
        `${JSON.stringify(types)}.@id is not an absolute URI: ${JSON.stringify(e["@id"])}`,
      );
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
  // Recursively unwrap a single value: top-level arrays are spread, and
  // `@graph` wrappers (with or without their own `@context`) push their
  // children into the right bucket so context inheritance is tracked.
  const unwrap = (value: unknown): void => {
    if (Array.isArray(value)) {
      for (const v of value) unwrap(v);
      return;
    }
    if (value && typeof value === "object") {
      const obj = value as Record<string, unknown>;
      if (Array.isArray(obj["@graph"])) {
        const wrapperHasContext = obj["@context"] !== undefined;
        const bucket = wrapperHasContext ? flatGraphInherited : flatTop;
        for (const child of obj["@graph"] as unknown[]) {
          // Children may themselves be `@graph` wrappers — keep unwrapping.
          if (
            child && typeof child === "object" && !Array.isArray(child) &&
            Array.isArray((child as Record<string, unknown>)["@graph"])
          ) {
            unwrap(child);
          } else {
            bucket.push(child);
          }
        }
        return;
      }
    }
    flatTop.push(value);
  };
  for (const r of results) {
    if (!r.ok) continue;
    unwrap(r.data);
  }
  const flat = [...flatTop, ...flatGraphInherited];
  if (flat.length === 0 && URL_CONTRACT[url]?.length) {
    fail(url, "contract", "no JSON-LD entities found at all");
    return;
  }
  auditEntities(url, flatTop, { contextInheritedFromWrapper: false });
  auditEntities(url, flatGraphInherited, { contextInheritedFromWrapper: true });
  // Also walk every parsed entity recursively for sub-entity allow-list,
  // banned-property, ISO-date AND required-property checks. The recursion
  // tracks two pieces of state:
  //  - `isRoot` so top-level entities skip the required-prop double-check
  //    (auditEntities above already covered them).
  //  - `parentKeys` — the chain of property names from the root to this
  //    entity. Lets us recognise reference-container slots (e.g.
  //    `itemOffered`, `hasOfferCatalog.itemListElement`) where Schema.org
  //    expects a thin reference rather than a fully-defined entity.
  for (const r of results) {
    if (!r.ok) continue;
    walkSubEntities(url, r.data, /* isRoot */ true, []);
  }
  auditIdGraph(url, results.filter((r) => r.ok).map((r) => r.data));
  auditContract(url, flat);
}

// Entity property slots where Schema.org / Google explicitly accepts a
// thin reference rather than a fully-defined entity (provider, price etc.
// inherit from the parent context). When a nested entity sits directly in
// one of these slots, required-property enforcement is suppressed for it.
// `provider` itself is NOT in this set: Service.provider is allowed to be
// `{ "@id": "..." }`, but the @id-graph tier already verifies that the
// reference resolves to a fully-defined Organization elsewhere — we want
// the canonical Organization to still satisfy required-prop checks.
const REFERENCE_PARENT_SLOTS = new Set<string>([
  "itemOffered",      // Offer.itemOffered → thin Service descriptor.
  "itemReviewed",     // Review.itemReviewed → reference to reviewed thing.
  "mainEntityOfPage", // CreativeWork.mainEntityOfPage → page reference.
  "isPartOf",         // CreativeWork.isPartOf → parent-collection ref.
  "publisher",        // CreativeWork.publisher → Organization ref.
  "author",           // CreativeWork.author → Person/Organization ref.
  "creator",          // CreativeWork.creator → Person/Organization ref.
  "sourceOrganization",
]);

function walkSubEntities(
  url: string,
  node: unknown,
  isRoot: boolean,
  parentKeys: readonly string[],
): void {
  if (Array.isArray(node)) {
    // Arrays at the root (or inside a `@graph`) are containers, not
    // entities — recurse into each element preserving root semantics so
    // top-level entities still skip the required-prop double-check.
    for (const v of node) walkSubEntities(url, v, isRoot, parentKeys);
    return;
  }
  if (!node || typeof node !== "object") return;
  const e = node as Record<string, unknown>;
  // `@graph` wrappers are containers — descend into the children with
  // `isRoot=true` so the children themselves are still treated as
  // top-level entities (required-prop already handled by auditEntities).
  if (Array.isArray(e["@graph"])) {
    for (const child of e["@graph"] as unknown[]) {
      walkSubEntities(url, child, /* isRoot */ true, parentKeys);
    }
    return;
  }
  const types = typesOf(e);
  // A bare reference object — `{"@id": "..."}` with no @type and no other
  // descriptive keys — is by definition a pointer, not an entity. The
  // @id-graph tier resolves it. Skip type/required-prop validation here.
  const keys = Object.keys(e);
  const isBareReference = typeof e["@id"] === "string" &&
    types.length === 0 &&
    keys.every((k) => k === "@id" || k === "@type" || k === "@context");
  // Slot-based reference: parent property is one of the known reference
  // slots (e.g. `itemOffered`). The entity may carry a @type and a few
  // descriptive props but Schema.org permits it to omit the canonical
  // required props because the canonical record lives elsewhere.
  const lastParentKey = parentKeys[parentKeys.length - 1];
  // `itemListElement` inside an OfferCatalog (or any *Catalog wrapper)
  // is a catalog membership slot — Offer entries here are list-membership
  // descriptors, not full Offer records.
  const isOfferCatalogMember =
    lastParentKey === "itemListElement" &&
    parentKeys.some((k) => k === "hasOfferCatalog" || /Catalog$/i.test(k));
  const isReferenceSlot = lastParentKey !== undefined &&
    REFERENCE_PARENT_SLOTS.has(lastParentKey);
  const skipRequiredProps =
    isRoot || isBareReference || isReferenceSlot || isOfferCatalogMember;
  for (const t of types) {
    if (!ALLOWED_TYPES.has(t)) {
      fail(url, "type-allowlist", `unknown nested @type ${JSON.stringify(t)}`);
    }
    // Per-@type required-property contract — enforced for every NESTED
    // entity (sub-entities like PostalAddress / Offer / Person / Review)
    // EXCEPT bare references and entities sitting in known reference
    // slots, which Schema.org explicitly permits to be thin.
    if (!skipRequiredProps) {
      const required = REQUIRED_PROPS_BY_TYPE[t];
      if (required) {
        const missing = required.filter((k) => e[k] === undefined);
        if (missing.length > 0) {
          const path = parentKeys.length
            ? ` at $.${parentKeys.join(".")}`
            : "";
          fail(
            url,
            "required-field",
            `nested ${t}${path} missing required propert${missing.length === 1 ? "y" : "ies"} ${JSON.stringify(missing)}`,
          );
        }
      }
    }
  }
  // Banned-property + ISO date checks at every nesting level.
  for (const [key, value] of Object.entries(e)) {
    if (BANNED_PROPS.has(key)) {
      fail(
        url,
        "banned-property",
        `entity ${JSON.stringify(types)} has banned property ${JSON.stringify(key)} = ${JSON.stringify(value)} (use the @-prefixed schema-org form)`,
      );
    }
    if (ISO_DATE_PROPS.has(key)) {
      if (typeof value !== "string" || !ISO_DATE_RE.test(value)) {
        fail(
          url,
          "date-format",
          `entity ${JSON.stringify(types)} property ${JSON.stringify(key)} = ${JSON.stringify(value)} is not ISO 8601`,
        );
      }
    }
    if (Array.isArray(value)) {
      for (const v of value) {
        walkSubEntities(url, v, /* isRoot */ false, [...parentKeys, key]);
      }
    } else if (value && typeof value === "object") {
      walkSubEntities(url, value, /* isRoot */ false, [...parentKeys, key]);
    }
  }
}

/**
 * @id orphan-reference resolver. Schema.org allows entities to reference
 * each other by `@id`. A reference-only object — `{"@id": "https://x/#y"}`
 * with no other meaningful keys — must resolve to a defined entity that
 * has the SAME `@id` and at least one other property. Otherwise the
 * reference is dead and Google can't follow the link.
 *
 * Walks the full entity tree to:
 *   1. Collect every `@id` declared on a "real" entity (object with
 *      `@type` or with non-trivial content).
 *   2. Collect every reference-only `{@id: ...}` shape.
 *   3. Fail when a reference cannot be resolved.
 */
function auditIdGraph(url: string, roots: unknown[]): void {
  const declared = new Set<string>();
  const refsToCheck: { id: string; parentTypes: string[] }[] = [];

  function visit(node: unknown, parentTypes: string[]): void {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const v of node) visit(v, parentTypes);
      return;
    }
    const e = node as Record<string, unknown>;
    const id = typeof e["@id"] === "string" ? (e["@id"] as string) : undefined;
    const types = typesOf(e);
    const keys = Object.keys(e);
    const meaningfulKeys = keys.filter((k) => k !== "@id" && k !== "@context");
    const isReferenceOnly = id !== undefined && meaningfulKeys.length === 0;
    if (id && !isReferenceOnly) {
      declared.add(id);
    }
    if (isReferenceOnly) {
      refsToCheck.push({ id: id!, parentTypes: types.length ? types : parentTypes });
    }
    for (const value of Object.values(e)) {
      visit(value, types.length ? types : parentTypes);
    }
  }

  for (const r of roots) visit(r, []);

  for (const ref of refsToCheck) {
    if (!declared.has(ref.id)) {
      fail(
        url,
        "id-orphan",
        `reference-only @id ${JSON.stringify(ref.id)} (parent ${JSON.stringify(ref.parentTypes)}) does not resolve to any declared entity on this page`,
      );
    }
  }
}

async function runWithConcurrency(
  urls: string[],
  worker: (url: string) => Promise<void>,
  concurrency: number,
): Promise<void> {
  let cursor = 0;
  let done = 0;
  const total = urls.length;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, total) }, async () => {
      while (true) {
        const i = cursor++;
        if (i >= total) return;
        await worker(urls[i]);
        done++;
        if (done % 25 === 0) {
          process.stdout.write(`  [${done}/${total}]\n`);
        } else {
          process.stdout.write(".");
        }
      }
    }),
  );
}

// See audit-nap.ts for the same sample-cap-vs-full-walk design rationale.
const SAMPLE_CAP = Number(process.env.AUDIT_SAMPLE ?? "60");
const FULL_WALK = process.env.AUDIT_FULL === "1";

async function resolveTargets(): Promise<string[]> {
  const override = process.env.AUDIT_URLS;
  if (override) {
    return override.split(",").map((s) => s.trim()).filter(Boolean);
  }
  const { paths } = await walkSitemap(BASE);
  if (FULL_WALK) {
    const merged = new Set<string>([...paths, ...Object.keys(URL_CONTRACT)]);
    return Array.from(merged).sort();
  }
  // Default sampled walk: every URL_CONTRACT key (load-bearing schema
  // contract tier) plus a deterministic round-robin across the sitemap so
  // parse / type-allowlist / banned-property / id-orphan / date-format
  // tiers cover the wider site surface, not just the listed surfaces.
  const contractKeys = Object.keys(URL_CONTRACT);
  const must = contractKeys.filter((p) => paths.includes(p));
  const mustExtra = contractKeys.filter((p) => !paths.includes(p));
  const remainder = paths.filter((p) => !contractKeys.includes(p));
  const want = Math.max(0, SAMPLE_CAP - must.length - mustExtra.length);
  const stride = Math.max(1, Math.floor(remainder.length / Math.max(1, want)));
  const sampled: string[] = [];
  for (let i = 0; sampled.length < want && i < remainder.length; i += stride) {
    sampled.push(remainder[i]);
  }
  return [...must, ...mustExtra, ...sampled];
}

/**
 * Self-test fixture. Exercises walkSubEntities's nested required-property
 * tier with a controlled JSON-LD blob so future refactors that silently
 * drop the recursive enforcement (the round-4 review-comment defect) get
 * caught at gate:fast time, before any sitemap walk. Asserts both:
 *   (1) the negative path — a nested PostalAddress missing streetAddress
 *       MUST produce a `required-field` failure.
 *   (2) the slot-exception positive path — a thin Service inside an
 *       OfferCatalog itemListElement MUST NOT produce a failure.
 * Exits non-zero on assertion mismatch so seo-gate fails loudly.
 */
function runSelfTest(): void {
  const previousFailures = failures.length;
  // Snapshot + clear so the self-test failures don't pollute a real run if
  // we ever invoke this mid-run (defensive — current callers always invoke
  // self-test in isolation).
  const snapshot = failures.splice(0, failures.length);

  const fixtureUrl = "<self-test-fixture>";
  const broken = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Broken NAP fixture",
    address: {
      "@type": "PostalAddress",
      // missing streetAddress + addressCountry on purpose
      addressLocality: "Birkirkara",
      postalCode: "CBD 2010",
    },
  };
  walkSubEntities(fixtureUrl, broken, /* isRoot */ true, []);
  const negativeHits = failures.filter(
    (f) => f.url === fixtureUrl && f.tier === "required-field" &&
      /PostalAddress/.test(f.detail) &&
      /streetAddress/.test(f.detail) && /addressCountry/.test(f.detail),
  );
  if (negativeHits.length === 0) {
    console.error("audit-schema --self-test: FAIL — recursive required-prop tier did not catch the broken nested PostalAddress");
    console.error("  full failure list captured during self-test:");
    for (const f of failures) console.error(`    [${f.tier}] ${f.detail}`);
    process.exit(1);
  }
  // Slot-exception positive path: thin Service inside an OfferCatalog
  // itemListElement → must NOT trigger required-field.
  failures.length = 0;
  const catalog = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Catalog parent",
    provider: { "@id": "https://example.com/#org" },
    areaServed: { "@type": "Country", name: "Malta" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Booker tiers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catalog member service",
            description: "Thin descriptor — provider+areaServed inherited.",
          },
        },
      ],
    },
  };
  walkSubEntities(fixtureUrl, catalog, /* isRoot */ true, []);
  const falsePositives = failures.filter((f) =>
    f.url === fixtureUrl && f.tier === "required-field"
  );
  if (falsePositives.length > 0) {
    console.error("audit-schema --self-test: FAIL — slot exception over-triggered (false positives on OfferCatalog members)");
    for (const f of falsePositives) console.error(`    [${f.tier}] ${f.detail}`);
    process.exit(1);
  }

  // Restore prior state for caller hygiene.
  failures.length = 0;
  for (const f of snapshot) failures.push(f);
  void previousFailures;
  console.log("audit-schema --self-test: PASS (negative path caught broken PostalAddress, slot exception suppressed false positive on OfferCatalog member)");
}

async function main(): Promise<void> {
  if (process.argv.includes("--self-test")) {
    runSelfTest();
    return;
  }
  console.log(`audit-schema: BASE=${BASE}`);
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
  const targets = await resolveTargets();
  console.log(`audit-schema: walking ${targets.length} URL(s) from sitemap (concurrency=${CONCURRENCY})`);
  await runWithConcurrency(targets, auditUrl, CONCURRENCY);
  console.log();
  if (failures.length === 0) {
    console.log(`audit-schema: PASS (${targets.length}/${targets.length} URLs)`);
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
