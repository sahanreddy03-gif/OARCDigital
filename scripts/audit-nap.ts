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
import {
  extractJsonLd,
  flattenJsonLdEntities,
  findEntitiesByType,
} from "../lib/seo/jsonLdExtract";

const BASE = process.env.BASE ?? "http://localhost:5000";

// URLs the audit must check. Two tiers:
//   - Top-level surfaces that emit a LocalBusiness / MarketingAgency block
//     via JSON-LD plus the high-traffic service pages (canonical TrustBlock
//     consumers).
//   - Representative AEO / blog / case-study / industry / malta pages.
//     Each of those directories has 10–60 sibling pages built from a shared
//     template; auditing one representative file per directory catches any
//     template-level drift in NAP literals while keeping HTTP run-time
//     bounded. When a NEW page in those directories ships with bespoke NAP
//     literals (not template-derived), it should be added explicitly.
//
// Adding a new "OARC HQ" surface MUST come with a new entry here — that is
// the lock. Bulk-migration of remaining hard-coded NAP literals across the
// 100+ AEO/blog/malta/case-study/industry pages is tracked as a separate
// follow-up task; once those import from `lib/seo/nap.ts` directly, the
// representative-sample approach below can be replaced with a sitemap-
// derived dynamic walk.
const TARGETS = [
  // Top-level + canonical service pages (TrustBlock consumers)
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
  // Representative AEO pages — depth-parity refactor (Task #76) gives every
  // /aeo/* page the same NAP-bearing structure, so one per category catches
  // template-level regressions.
  "/aeo/saas-development-malta",
  "/aeo/marketing-agency-mosta",
  "/aeo/marketing-agency-swieqi",
  "/aeo/web-development-agency-malta",
  "/aeo/mobile-app-developers-malta",
  // Representative blog post (Malta-focused articles share a footer/CTA
  // surface that renders the canonical NAP).
  "/blog/marketing-agency-malta",
  "/blog/igaming-marketing-malta",
  // Representative case studies.
  "/case-studies/volta-home",
  "/case-studies/authentic-stories",
  // Industries + malta location pages (template-driven NAP rendering).
  "/industries",
  "/legal/privacy-policy",
];

const NAP_ENTITY_TYPES = [
  "LocalBusiness",
  "MarketingAgency",
  "Organization",
  "ProfessionalService",
] as const;

type Failure = {
  url: string;
  category: "jsonld-parse" | "jsonld-field" | "html-phone" | "html-address" | "fetch";
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

function checkAddressBlock(url: string, addr: unknown): void {
  if (!addr || typeof addr !== "object") {
    fail(url, "jsonld-field", "address block missing or non-object");
    return;
  }
  const a = addr as Record<string, unknown>;
  const expectations: [string, unknown][] = [
    ["addressLocality", expectedLocality],
    ["postalCode", expectedPostal],
    ["addressCountry", expectedCountry],
  ];
  // streetAddress can legitimately be the long or short form depending on
  // which constant the page chose — both are canonical so both pass.
  if (a.streetAddress !== expectedStreet && a.streetAddress !== expectedStreetShort) {
    fail(
      url,
      "jsonld-field",
      `address.streetAddress = ${JSON.stringify(a.streetAddress)} (expected ${JSON.stringify(expectedStreet)} or ${JSON.stringify(expectedStreetShort)})`,
    );
  }
  for (const [key, want] of expectations) {
    if (a[key] !== want) {
      fail(
        url,
        "jsonld-field",
        `address.${key} = ${JSON.stringify(a[key])} (expected ${JSON.stringify(want)})`,
      );
    }
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
      checkAddressBlock(url, ent.address);
    }
  }
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
 * Pull the rendered text of every TrustBlock visit-* testid container and
 * assert it contains the canonical NAP. The testid pattern comes from
 * `components/seo/TrustBlock.tsx`. This makes the TrustBlock → audit
 * coupling concrete: removing the canonical NAP from the component (or
 * accidentally rendering a stale NAP via a sibling fork) breaks the gate.
 */
function auditTrustBlock(url: string, htmlInput: string): void {
  // Strip <script> blocks so we only walk the visible DOM.
  const html = htmlInput.replace(/<script[\s\S]*?<\/script>/gi, "");
  // The TrustBlock wrapper is always a <section> (see TrustBlock.tsx) so
  // close on </section>. Matching a generic </tag> would close on the
  // first nested </a> / </span> / </div> long before the wrapper ends.
  const sectionRe =
    /<section\s[^>]*data-testid="trustblock-visit-[a-z0-9-]+"[^>]*>([\s\S]*?)<\/section>/gi;
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

async function main(): Promise<void> {
  console.log(`audit-nap: BASE=${BASE} targets=${TARGETS.length}`);
  // Quick reachability check so the audit fails loudly with a clear message
  // rather than 16 individual fetch failures.
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
  for (const url of TARGETS) {
    await auditUrl(url);
    process.stdout.write(".");
  }
  console.log();
  if (failures.length === 0) {
    console.log(`audit-nap: PASS (${TARGETS.length}/${TARGETS.length} URLs)`);
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
