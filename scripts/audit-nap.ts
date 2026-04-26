/**
 * NAP audit (HTTP-only).
 *
 * For every monitored URL the script asserts:
 *   1. JSON-LD: every LocalBusiness / MarketingAgency / Organization /
 *      ProfessionalService entity exposes the canonical `telephone`,
 *      `email`, and `address.{streetAddress, addressLocality, postalCode,
 *      addressCountry}` from `lib/seo/nap.ts`. Drift = FAIL.
 *   2. Rendered HTML: every `tel:` href and visible Birkirkara CBD address
 *      string matches the canonical NAP. Stray phone numbers (any string
 *      matching `+356 ?7971 ?1799` variants that does NOT match the
 *      canonical display form) and stray addresses fail the audit.
 *
 * Usage:
 *   npx tsx scripts/audit-nap.ts                  # default http://localhost:5000
 *   BASE=http://localhost:3000 npx tsx scripts/audit-nap.ts
 *
 * Wired into `scripts/seo-gate.sh` gate:full HTTP block. CI without a
 * server skips with a NOTE (matches verify-redirects / audit-sitemap).
 *
 * Exits non-zero if any URL fails so the gate gate:full breaks loudly.
 */
import { NAP } from "../lib/seo/nap";
import { PERMITTED_NAP_LOCALITIES } from "../lib/seo/permittedLocalities";
import {
  extractJsonLd,
  flattenJsonLdEntities,
  findEntitiesByType,
} from "../lib/seo/jsonLdExtract";
import { walkSitemap, originTagForPath } from "../lib/seo/sitemapWalker";

const BASE = process.env.BASE ?? "http://localhost:5000";
const CONCURRENCY = Number(process.env.AUDIT_CONCURRENCY ?? "6");
// Default sample cap. Walking the full ~280-URL sitemap against a Next.js
// dev server (which compiles each route on first hit) takes ~6 minutes —
// too slow for a pre-deploy gate iteration loop. Set AUDIT_FULL=1 (CI does
// this against the production server) to walk every URL the sitemap
// advertises. The default cap is biased toward `MUST_AUDIT_PATHS` so the
// load-bearing pages always run.
const SAMPLE_CAP = Number(process.env.AUDIT_SAMPLE ?? "60");
const FULL_WALK = process.env.AUDIT_FULL === "1";

// Pages that MUST be audited on every gate:full invocation regardless of
// the sample cap — the canonical NAP-bearing surfaces. Keeping this list
// ≤25 entries means the bias is minor and the rest of the sitemap rotates.
const MUST_AUDIT_PATHS: readonly string[] = [
  "/",
  "/contact",
  "/automation",
  "/solutions",
  "/ai-agents",
  "/creative",
  "/services/seo-services",
  "/services/saas-development",
  "/services/web-apps-development",
  "/services/wordpress-development",
  "/services/ecommerce-development",
  "/services/shopify-development",
  "/services/email-marketing",
  "/services/content-marketing",
  "/services/database-design",
  "/services/devops-services",
  "/aeo/saas-development-malta",
  "/aeo/marketing-agency-mosta",
  "/aeo/marketing-agency-swieqi",
  "/blog/marketing-agency-malta",
  "/case-studies/volta-home",
  "/industries",
  "/legal/privacy-policy",
];

/**
 * Targets are derived dynamically from the live sitemap-index — every page
 * the site advertises to crawlers is a candidate. No static TARGETS list to
 * drift out of sync.
 *
 * Defaults sample SAMPLE_CAP URLs (with MUST_AUDIT_PATHS always included
 * first, then a deterministic round-robin across the remaining sitemap so
 * coverage rotates rather than always hitting the same prefix). Set
 * AUDIT_FULL=1 for the full walk (used in CI), or AUDIT_URLS=/a,/b to
 * override entirely.
 */
async function resolveTargets(): Promise<string[]> {
  const override = process.env.AUDIT_URLS;
  if (override) {
    return override.split(",").map((s) => s.trim()).filter(Boolean);
  }
  const { paths } = await walkSitemap(BASE);
  if (FULL_WALK) return paths;
  const mustSet = new Set(MUST_AUDIT_PATHS);
  const must = MUST_AUDIT_PATHS.filter((p) => paths.includes(p));
  const remainder = paths.filter((p) => !mustSet.has(p));
  // Round-robin across remainder so coverage rotates by run-time order
  // (sitemap is alphabetised — picking every Kth URL spreads the sample
  // across all directories instead of front-loading /aeo/*).
  const want = Math.max(0, SAMPLE_CAP - must.length);
  const stride = Math.max(1, Math.floor(remainder.length / Math.max(1, want)));
  const sampled: string[] = [];
  for (let i = 0; sampled.length < want && i < remainder.length; i += stride) {
    sampled.push(remainder[i]);
  }
  return [...must, ...sampled];
}

const NAP_ENTITY_TYPES = [
  "LocalBusiness",
  "MarketingAgency",
  "Organization",
  "ProfessionalService",
] as const;

type Failure = {
  url: string;
  category:
    | "jsonld-parse"
    | "jsonld-field"
    | "jsonld-locality"
    | "html-phone"
    | "html-address"
    | "fetch";
  detail: string;
};

const failures: Failure[] = [];

function fail(url: string, category: Failure["category"], detail: string): void {
  failures.push({ url, category, detail });
}

/**
 * Phone-fragment matcher. Catches every legitimate spelling of the OARC
 * Malta number so we can then assert that any match equals the canonical
 * display form. Anything matching the prefix but not the exact form is a
 * stale reference. Strict E164 (NAP.phoneE164) and `tel:` hrefs are
 * checked separately because they can legitimately omit the space.
 */
const PHONE_PREFIX = /\+356\s?7971\s?1799/g;
const ADDRESS_PREFIX = /Level 1,\s*The Brewhouse[^"<\n]{0,200}/gi;

const expectedPhoneDisplay = NAP.phoneDisplay;
const expectedPhoneE164 = NAP.phoneE164;
const expectedEmail = NAP.email;
const expectedLocality = NAP.addressLocality;
const expectedPostal = NAP.postalCode;
const expectedCountry = NAP.addressCountry;
const expectedStreet = NAP.streetAddress;
const expectedStreetShort = NAP.streetAddressShort;

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

/**
 * Per-page locality permission. The site canonical NAP locality is
 * Birkirkara — but `lib/seo/locationData.ts` legitimately renders other
 * Malta towns (Ta' Xbiex, Sliema, Valletta, etc.) on the location surfaces
 * (`/aeo/*` and `/malta/*`). A non-Birkirkara locality is allowed ONLY
 * when ALL three guards line up:
 *   (a) the URL maps to the location-data origin tag (built-in URL surface
 *       known to import from locationData.ts),
 *   (b) the locality string matches a known PERMITTED_NAP_LOCALITIES entry
 *       (i.e. it's an actual Malta town we publish a service-area page
 *       for — not arbitrary text), and
 *   (c) the surrounding entity is a LocalBusiness/MarketingAgency variant
 *       (so a stray locality leaking into an Article author block, an
 *       Offer, or a Person still fails the gate).
 *
 * This is the source-aware Ta' Xbiex exception called for in the task spec:
 * a stray `Ta' Xbiex` reference in any non-location-data page, or a real
 * locality leaking into the wrong entity type, breaks the gate.
 */
function isPermittedLocality(
  url: string,
  locality: string | undefined,
  entityType: string | string[] | undefined,
): boolean {
  if (locality === expectedLocality) return true;
  if (locality === undefined) return false;
  if (originTagForPath(url) !== "location-data") return false;
  if (!PERMITTED_NAP_LOCALITIES.includes(locality)) return false;
  // Final guard: only LocalBusiness-family entities may carry a non-
  // canonical locality, even on location-data surfaces.
  const types = Array.isArray(entityType)
    ? entityType
    : entityType !== undefined
      ? [entityType]
      : [];
  return types.some((t) => (NAP_ENTITY_TYPES as readonly string[]).includes(t));
}

function checkAddressBlock(
  url: string,
  addr: unknown,
  parentType: string | string[] | undefined,
): void {
  if (!addr || typeof addr !== "object") {
    fail(url, "jsonld-field", "address block missing or non-object");
    return;
  }
  const a = addr as Record<string, unknown>;
  const localityValue = typeof a.addressLocality === "string" ? a.addressLocality : undefined;
  if (!isPermittedLocality(url, localityValue, parentType)) {
    fail(
      url,
      "jsonld-locality",
      `address.addressLocality = ${JSON.stringify(localityValue)} not permitted on this URL (only ${JSON.stringify(expectedLocality)} allowed outside /aeo/* and /malta/*)`,
    );
  }
  // postalCode + addressCountry must be canonical UNLESS the URL is a
  // location-data origin (where alternative postals/towns are expected).
  if (originTagForPath(url) === "core") {
    if (a.postalCode !== expectedPostal) {
      fail(
        url,
        "jsonld-field",
        `address.postalCode = ${JSON.stringify(a.postalCode)} (expected ${JSON.stringify(expectedPostal)})`,
      );
    }
    if (a.streetAddress !== expectedStreet && a.streetAddress !== expectedStreetShort) {
      fail(
        url,
        "jsonld-field",
        `address.streetAddress = ${JSON.stringify(a.streetAddress)} (expected ${JSON.stringify(expectedStreet)} or ${JSON.stringify(expectedStreetShort)})`,
      );
    }
  }
  if (a.addressCountry !== expectedCountry) {
    fail(
      url,
      "jsonld-field",
      `address.addressCountry = ${JSON.stringify(a.addressCountry)} (expected ${JSON.stringify(expectedCountry)})`,
    );
  }
}

function auditJsonLd(url: string, html: string): void {
  const results = extractJsonLd(html);
  for (const r of results) {
    if (!r.ok) {
      fail(url, "jsonld-parse", `block #${r.index}: ${r.error} :: ${r.rawSnippet}`);
    }
  }
  const entities = flattenJsonLdEntities(results);
  const napEntities = findEntitiesByType(entities, NAP_ENTITY_TYPES);
  if (napEntities.length === 0) {
    // Pages without any LocalBusiness/Organization JSON-LD don't need to
    // emit NAP — that's a content choice, not a regression. But pages that
    // have non-NAP @types should at least register one schema entity, so
    // an empty entities list is a separate signal we don't gate here.
    return;
  }
  for (const ent of napEntities) {
    if (ent.telephone !== expectedPhoneE164) {
      fail(url, "jsonld-field", `${ent["@type"]}.telephone = ${JSON.stringify(ent.telephone)} (expected ${JSON.stringify(expectedPhoneE164)})`);
    }
    if (ent.email !== undefined && ent.email !== expectedEmail) {
      fail(url, "jsonld-field", `${ent["@type"]}.email = ${JSON.stringify(ent.email)} (expected ${JSON.stringify(expectedEmail)})`);
    }
    if (ent.address !== undefined) {
      checkAddressBlock(url, ent.address, ent["@type"] as string | string[] | undefined);
    }
  }
  // Generic recursive key-walk tier. Independent of @type targeting:
  // walks every object in the JSON-LD tree and validates the canonical
  // fields wherever they appear. Catches drift in unexpected places —
  // an Article author block carrying a stale phone, a Person sub-entity
  // with the wrong email, etc. Locality drift is gated by the same
  // three-guard isPermittedLocality() so location-data pages still pass.
  for (const ent of entities) {
    walkRecursiveKeys(url, ent, undefined);
  }
}

/**
 * Recursive key-based field auditor. Walks every nested object/array in a
 * JSON-LD payload and validates `streetAddress`, `addressLocality`,
 * `addressRegion`, `postalCode`, `telephone`, and `email` wherever they
 * appear, regardless of containing entity type. The `parentType` carried
 * down the recursion lets the locality guard distinguish a real
 * LocalBusiness emission from a stray locality leaking into a
 * Person/Article/Offer sub-entity.
 */
function walkRecursiveKeys(
  url: string,
  node: unknown,
  parentType: string | string[] | undefined,
): void {
  if (Array.isArray(node)) {
    for (const item of node) walkRecursiveKeys(url, item, parentType);
    return;
  }
  if (!node || typeof node !== "object") return;
  const obj = node as Record<string, unknown>;
  const ownType = (obj["@type"] as string | string[] | undefined) ?? parentType;
  // Field-level checks (only when the value is a string — anything else
  // would be flagged separately by audit-schema's required-field tier).
  if (typeof obj.telephone === "string" && obj.telephone !== expectedPhoneE164) {
    fail(url, "jsonld-field", `recursive: ${describeType(ownType)}.telephone = ${JSON.stringify(obj.telephone)} (expected ${JSON.stringify(expectedPhoneE164)})`);
  }
  if (typeof obj.email === "string" && obj.email !== expectedEmail) {
    fail(url, "jsonld-field", `recursive: ${describeType(ownType)}.email = ${JSON.stringify(obj.email)} (expected ${JSON.stringify(expectedEmail)})`);
  }
  if (typeof obj.streetAddress === "string" && originTagForPath(url) === "core") {
    if (obj.streetAddress !== expectedStreet && obj.streetAddress !== expectedStreetShort) {
      fail(url, "jsonld-field", `recursive: ${describeType(ownType)}.streetAddress = ${JSON.stringify(obj.streetAddress)} (expected ${JSON.stringify(expectedStreet)} or ${JSON.stringify(expectedStreetShort)})`);
    }
  }
  if (typeof obj.postalCode === "string" && originTagForPath(url) === "core" && obj.postalCode !== expectedPostal) {
    fail(url, "jsonld-field", `recursive: ${describeType(ownType)}.postalCode = ${JSON.stringify(obj.postalCode)} (expected ${JSON.stringify(expectedPostal)})`);
  }
  if (typeof obj.addressLocality === "string" && !isPermittedLocality(url, obj.addressLocality, ownType)) {
    fail(url, "jsonld-locality", `recursive: ${describeType(ownType)}.addressLocality = ${JSON.stringify(obj.addressLocality)} not permitted on this URL (only ${JSON.stringify(expectedLocality)} allowed outside location-data surfaces)`);
  }
  if (typeof obj.addressRegion === "string" && obj.addressRegion !== "Malta" && obj.addressRegion !== expectedLocality) {
    fail(url, "jsonld-field", `recursive: ${describeType(ownType)}.addressRegion = ${JSON.stringify(obj.addressRegion)} (expected "Malta" or "${expectedLocality}")`);
  }
  // Recurse into every value — keep ownType as parent so PostalAddress
  // (which has no @type sometimes) inherits the right entity context.
  for (const v of Object.values(obj)) {
    walkRecursiveKeys(url, v, ownType);
  }
}

function describeType(t: string | string[] | undefined): string {
  if (Array.isArray(t)) return t.join("|");
  return t ?? "<no-@type>";
}

function auditRenderedHtml(url: string, htmlInput: string): void {
  // Strip every <script> block before walking the body. Two distinct
  // sources of false positives live inside script tags:
  //   1. JSON-LD blocks split the address into structured keys
  //      (streetAddress / addressLocality / postalCode), which would look
  //      like "fragments missing the postal" to the body-text walker.
  //      JSON-LD is checked separately by auditJsonLd above.
  //   2. Next.js RSC streaming payloads (`self.__next_f.push([1, ...])`)
  //      serialise component prop strings — `href="tel:..."` becomes
  //      `\"href\":\"tel:+35679711799\"` inside a JSON string, so the
  //      tel: regex captures the JSON-escaped form `tel:+35679711799\`
  //      (with trailing backslash) and reports false drift.
  // User-visible NAP renders in body HTML, never in script content, so
  // dropping every <script> here is safe and removes both false positives.
  const html = htmlInput.replace(/<script[\s\S]*?<\/script>/gi, "");
  // Phone-display drift: every match of the prefix MUST equal the
  // canonical display string. Catches `+356 79711799` (missing space),
  // `+3567971 1799` (mis-grouped), etc.
  const phoneMatches = html.match(PHONE_PREFIX) ?? [];
  for (const m of phoneMatches) {
    if (m !== expectedPhoneDisplay && m !== expectedPhoneE164.replace("+356", "+356")) {
      // Allow exact E164 form too (rendered as plain "+35679711799" in some
      // tel: hrefs) — those are checked below specifically.
      if (m !== "+35679711799") {
        fail(url, "html-phone", `non-canonical phone rendering: ${JSON.stringify(m)} (expected ${JSON.stringify(expectedPhoneDisplay)})`);
      }
    }
  }
  // Every `tel:+356...` href must equal the canonical E164 form. Catches
  // `tel:+35679711799` → ok, `tel:+3567971-1799` → fail.
  const telRe = /tel:\+356[^"'\s]*/g;
  const telMatches = html.match(telRe) ?? [];
  for (const m of telMatches) {
    if (m !== `tel:${expectedPhoneE164}`) {
      fail(url, "html-phone", `non-canonical tel: href: ${JSON.stringify(m)}`);
    }
  }
  // Every `wa.me/<digits>` link MUST use the canonical WhatsApp number
  // (NAP.whatsappNumber). Catches drift to a stale or fabricated number,
  // and catches the literal-vs-NAP regression class the architect flagged.
  // Allowlist: a separate WhatsApp line is intentionally used by the
  // /ai-agents/* surface (NAP.whatsappAgentNumber when set, currently a
  // distinct service-line number) — that path is exempt.
  const expectedWhatsapp = NAP.whatsappNumber;
  const altWhatsapp = (NAP as Record<string, unknown>).whatsappAgentNumber;
  const waRe = /wa\.me\/(\d+)/g;
  let waMatch: RegExpExecArray | null;
  while ((waMatch = waRe.exec(html)) !== null) {
    const num = waMatch[1];
    if (num === expectedWhatsapp) continue;
    if (typeof altWhatsapp === "string" && num === altWhatsapp) continue;
    fail(
      url,
      "html-phone",
      `non-canonical wa.me number: ${JSON.stringify(num)} (expected ${JSON.stringify(expectedWhatsapp)})`,
    );
  }
  // Every `mailto:hello@oarcdigital.com` href and every visible
  // `hello@oarcdigital.com` mention must be the canonical email. Catches
  // typos like `hellp@`, `hello@oarc.digital`, `hello@oarc-digital.com`.
  const mailtoRe = /mailto:[^"'\s]+/g;
  const mailtoMatches = html.match(mailtoRe) ?? [];
  for (const m of mailtoMatches) {
    if (!m.includes("oarc")) continue; // only audit OARC's own mailtos
    if (m !== `mailto:${expectedEmail}`) {
      fail(url, "html-phone", `non-canonical mailto: href: ${JSON.stringify(m)}`);
    }
  }
  // Visible email-text drift. Restricted to addresses that mention "oarc"
  // somewhere in the host (so we don't flag third-party emails the page
  // legitimately renders, e.g. an integration partner). The TLD class
  // `[a-z]{2,}` is bounded so a trailing sentence period stays unmatched.
  const emailRe = /[a-z0-9._%+-]+@[a-z0-9.-]*oarc[a-z0-9.-]*\.[a-z]{2,}/gi;
  const emailMatches = html.match(emailRe) ?? [];
  for (const m of emailMatches) {
    if (m !== expectedEmail) {
      fail(url, "html-phone", `non-canonical email rendering: ${JSON.stringify(m)} (expected ${JSON.stringify(expectedEmail)})`);
    }
  }
  // Address-string drift: every "Level 1, The Brewhouse" mention must be
  // followed (within ~250 chars of plain text) by the canonical locality
  // AND postal. Catches stale "Ta' Xbiex" body copy or partial address
  // edits. Tags are stripped first because the canonical address is
  // routinely rendered as `<address>Level 1, ... Mdina Road<br/>Birkirkara
  // CBD 2010</address>` — without strip, the regex would stop at `<br/>`
  // and report a false fragment.
  const plain = html
    .replace(/<[^>]+>/g, " ") // drop tags
    .replace(/\s+/g, " ");    // collapse whitespace
  const addressMatches = plain.match(ADDRESS_PREFIX) ?? [];
  for (const m of addressMatches) {
    if (!m.includes(expectedLocality) || !m.includes(expectedPostal)) {
      fail(url, "html-address", `address fragment missing canonical locality/postal: ${JSON.stringify(m.slice(0, 160))}`);
    }
  }
}

/**
 * Pull the rendered text of every TrustBlock visit container and assert it
 * contains the canonical NAP. The selector targets the semantic
 * `data-trustblock-variant="visit"` attribute on the outer wrapper from
 * `components/seo/TrustBlock.tsx` (data-testid is reserved for end-to-end
 * tests; this audit binds to the public component contract instead). This
 * makes the TrustBlock → audit coupling concrete: removing the canonical
 * NAP from the component (or accidentally rendering a stale NAP via a
 * sibling fork) breaks the gate.
 */
function auditTrustBlock(url: string, htmlInput: string): void {
  // Strip <script> blocks so we only walk the visible DOM.
  const html = htmlInput.replace(/<script[\s\S]*?<\/script>/gi, "");
  // The TrustBlock wrapper is always a <section> (see TrustBlock.tsx) so
  // close on </section>. Matching a generic </tag> would close on the
  // first nested </a> / </span> / </div> long before the wrapper ends.
  // We deliberately match `data-trustblock-variant="visit"` (the semantic
  // public attribute) rather than `data-testid="trustblock-visit"` so the
  // audit cannot silently break if a future refactor renames test ids.
  const sectionRe =
    /<section\s[^>]*data-trustblock-variant="visit"[^>]*>([\s\S]*?)<\/section>/gi;
  let m: RegExpExecArray | null;
  let foundAny = false;
  while ((m = sectionRe.exec(html)) !== null) {
    foundAny = true;
    const inner = m[0]; // entire section incl. children
    const plain = inner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (!plain.includes(expectedPhoneDisplay)) {
      fail(url, "html-phone", `TrustBlock visit-section missing canonical phoneDisplay`);
    }
    if (!plain.includes(expectedEmail)) {
      fail(url, "html-phone", `TrustBlock visit-section missing canonical email`);
    }
    if (!plain.includes(expectedLocality) || !plain.includes(expectedPostal)) {
      fail(url, "html-address", `TrustBlock visit-section missing canonical locality/postal`);
    }
  }
  // We deliberately do NOT fail when no TrustBlock is found — many pages
  // legitimately don't render one. The whole-DOM checks above already cover
  // those pages. The TrustBlock-specific check adds an additional gate ONLY
  // when a TrustBlock is present, hardening the coupling.
  void foundAny;
}

async function auditUrl(url: string): Promise<void> {
  const html = await fetchPage(url);
  if (html === null) return;
  auditJsonLd(url, html);
  auditRenderedHtml(url, html);
  auditTrustBlock(url, html);
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

async function main(): Promise<void> {
  console.log(`audit-nap: BASE=${BASE}`);
  // Quick reachability check so the audit fails loudly with a clear message
  // rather than per-URL fetch failures.
  try {
    const probe = await fetch(BASE, { method: "HEAD" });
    if (!probe.ok && probe.status !== 405) {
      throw new Error(`HEAD ${BASE} → HTTP ${probe.status}`);
    }
  } catch (err) {
    console.error(
      `audit-nap: server not reachable at ${BASE} — ${err instanceof Error ? err.message : String(err)}`,
    );
    console.error("audit-nap: this audit only runs in gate:full and requires the dev server up");
    process.exit(2);
  }
  const targets = await resolveTargets();
  console.log(`audit-nap: walking ${targets.length} URL(s) from sitemap (concurrency=${CONCURRENCY})`);
  await runWithConcurrency(targets, auditUrl, CONCURRENCY);
  console.log();
  if (failures.length === 0) {
    console.log(`audit-nap: PASS (${targets.length}/${targets.length} URLs)`);
    return;
  }
  console.error(`audit-nap: FAIL — ${failures.length} issue(s) across ${new Set(failures.map((f) => f.url)).size} URL(s):`);
  for (const f of failures) {
    console.error(`  [${f.category}] ${f.url} :: ${f.detail}`);
  }
  process.exit(1);
}

main().catch((err) => {
  console.error("audit-nap: crashed", err);
  process.exit(1);
});
