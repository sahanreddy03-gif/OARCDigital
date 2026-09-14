// Single source of truth for the AEO/llms.txt + llms-full.txt
// surface coverage of the canonical Core 60 pages.
//
// Why this module exists (Task #135):
//   The existing `llmsFullBuilder.ts` only walks SERVICE_SCHEMAS +
//   PILLAR_SCHEMAS — that's 16 services + 4 pillars = 20 pages. The
//   ranked Core 60 (`.local/memory/core-url-rank.md`, mirrored in
//   `lib/seo/topPages.ts`) covers another ~40 supporting / spoke pages
//   that ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews
//   should be able to cite. Without an entry in llms.txt /
//   llms-full.txt, these pages are effectively invisible to the AI
//   answer engines.
//
// Responsibilities:
//   1. Resolve every TOP_PAGES path → { title, description, canonical,
//      kind } using the framework schemas where available, otherwise
//      a curated supplemental table sourced from each page's own
//      `export const metadata` (so we don't drift from the live <head>).
//   2. Provide `validateCoreCoverage()` so the gate fails loudly when
//      a TOP_PAGES path has no resolvable metadata — that's the
//      "missing entry" condition the task brief locks in.
//   3. Provide `buildCoreIndexSection()` (autogen block for llms.txt)
//      and `buildSupplementalLlmsFullEntries()` (extra body block
//      that llmsFullBuilder.ts splices in after the framework
//      sections) — keeping all generation logic in one file so the
//      compact index and the full reference can never drift apart.
//
// Authoring rules:
//   - Pure module, no side effects, no IO.
//   - Adding a new TOP_PAGES path REQUIRES a SUPPLEMENTAL_META entry
//     (or a SERVICE_SCHEMAS / PILLAR_SCHEMAS framework entry). The
//     gate enforces this.
//   - When a page's <head> title/description changes upstream, mirror
//     it here. The audit-framework tag lays the trap; the gate catches it.

import { TOP_PAGES, type TopPage } from "./topPages";
import { SERVICE_SCHEMAS } from "./serviceSchemaConfig";
import { PILLAR_SCHEMAS } from "./pillarSchemaConfig";

/** Discovery-only copy normalisation. This keeps generated AI references
 * organisation-focused and prevents old commercial wording from being
 * repeated as a universal promise. Live service copy remains owned by its
 * route and source schema. */
export function sanitizeDiscoveryText(value: string): string {
  return value
    .replace(/\bfounding story\b/gi, "company background")
    .replace(/\bfounder's\b/gi, "client's")
    .replace(/\bfounders'\b/gi, "business owners'")
    .replace(/\bfounders\b/gi, "business owners")
    .replace(/\bfounder\b/gi, "business owner")
    .replace(/\bfounder-grade\b/gi, "business-owner-ready")
    .replace(/\bRed\b/g, "OARC Digital")
    .replace(/\bfixed[- ]price(?:d)?\b/gi, "tailored pricing")
    .replace(/\bfixed[- ]fee\b/gi, "tailored pricing")
    .replace(
      /priced on outcomes not retainers/gi,
      "pricing is tailored to the brief; results-based structures may apply where appropriate",
    )
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.])/g, "$1")
    .trim();
}

function repairMalformedDiscoveryProse(value: string): string {
  return value
    .replace(/monitoring tailored pricing\b/gi, "monitoring under a tailored care plan")
    .replace(/no a project-scoped timeline agency lock-ins\b/gi, "no long-term agency lock-ins")
    .replace(
      /(?:Average client benchmark:\s*)?measurable improvement incremental revenue from email\/SMS automation(?: within a project-scoped timeline)?, and measurable improvement reduction in manual operations time\.?/gi,
      "Engagement targets include incremental revenue growth from email and SMS automation, alongside reduced manual operations time.",
    )
    .replace(
      /Our average client sees Engagement targets include incremental revenue growth from email and SMS automation, alongside reduced manual operations time\.?\s*We'll model your specific lift on a discovery call\./gi,
      "Email and SMS automation is scoped around incremental revenue growth and reduced manual operations time. The expected value is modelled for the specific business before implementation.",
    )
    .replace(/start from tailored pricing per month per agent/gi, "use tailored monthly pricing per agent")
    .replace(/start from tailored pricing per month/gi, "use tailored monthly pricing")
    .replace(
      /automation pricing starts at tailored pricing for single workflows and tailored pricing for marketing-automation suites, with ROI calculated against replaced human-hour cost/gi,
      "automation pricing is tailored to workflow complexity and integration scope, with expected value assessed against the manual work replaced",
    )
    .replace(
      /Single workflows are project-scoped from tailored pricing Marketing-automation suites are scoped per project, typically tailored pricing depending on integrations\. Ongoing optimisation is tailored pricing per month\./gi,
      "Single workflows and marketing-automation suites are scoped to their integrations and operational complexity. Ongoing optimisation uses tailored monthly pricing.",
    )
    .replace(/within the first a project-scoped timeline/gi, "as the programme gains traction")
    .replace(/handles measurable improvement of the workloads/gi, "handles many of the workloads")
    .replace(/for measurable improvement of that cost/gi, "with broader specialist coverage than one role")
    .replace(/Shopify for most Malta retailers with under tailored pricing GMV\./gi, "Shopify suits many Malta retailers.")
    .replace(/typically tailored pricing \+ monthly revenue/gi, "typically at sustained high traffic and revenue")
    .replace(/Maltese measurable improvement VAT/gi, "Maltese VAT")
    .replace(
      /Typical lift on a tired store is measurable improvement within a project-scoped timeline\./gi,
      "Conversion targets are agreed against the store's pre-launch baseline.",
    )
    .replace(
      /We work most effectively above tailored pricing media spend\. Below that, the management fee starts to outweigh the return/gi,
      "The right managed-media scope depends on spend, channel mix and creative demand. At smaller scopes, the management fee can outweigh the return",
    )
    .replace(
      /We offer flat retainers up to tailored pricing spend, then a hybrid \(retainer \+ small percentage\) above that\./gi,
      "We offer flat retainers or a hybrid retainer and performance component where appropriate.",
    )
    .replace(
      /Performance signals appear within the first a project-scoped timeline\. Statistically meaningful campaign optimisation usually takes a project-scoped timeline\./gi,
      "Performance signals develop as campaigns gather enough evidence for meaningful optimisation.",
    )
    .replace(/guarantee a documented a project-scoped roadmap/gi, "guarantee a documented project-scoped roadmap")
    .replace(
      /Typical first- a project-scoped timeline conversion lift on a tired store is measurable improvement\./gi,
      "Conversion goals are agreed against the store's baseline and reported transparently.",
    )
    .replace(/Book a project-scoped timeline conversion audit/gi, "Book a conversion audit")
    .replace(/Plans start at tailored pricing/gi, "Plans use tailored monthly pricing")
    .replace(/~ measurable improvement of the web/gi, "a large share of the web")
    .replace(/reduce costs by measurable improvement/gi, "reduce costs measurably")
    .replace(/Reduce no-shows by measurable improvement/gi, "Reduce no-shows")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function normalizedPricingText(value: string): string {
  return value
    .replace(
      /Plus pays back when monthly GMV crosses ~?€[\d,.]+[km]?\s+or when you need scripted checkout, B2B catalogs, multi-storefront, or (?:\d+\+\s+SKUs|a scoped volume) with complex pricing\. For most Malta retailers under that volume, standard Shopify is enough\./gi,
      "Shopify Plus is appropriate when scripted checkout, B2B catalogues, multi-storefront, or complex pricing justify it. Standard Shopify suits many smaller retailers.",
    )
    .replace(
      /pricing is tied to outcomes, not vanity retainers/gi,
      "pricing is tailored to the brief; results-based structures may apply where appropriate",
    )
    .replace(
      /priced to pay back inside the first quarter/gi,
      "scoped against the expected operational value",
    )
    .replace(
      /\b(?:an?\s+)?in-house engineer costs\s+(?:EUR|€|£|\$)\s*[\d,.]+(?:[km])?(?:\s*(?:to|-|–)\s*(?:EUR|€|£|\$)?\s*[\d,.]+[km]?)?\s+loaded\b/gi,
      "an in-house engineer has a role-specific loaded cost",
    )
    .replace(
      /\b(?:up to\s+)?\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\s+conversations?\/month\b/gi,
      "a scoped conversation volume",
    )
    .replace(
      /\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\s+(?:senior\s+)?engineers?\b/gi,
      "a scoped engineering team",
    )
    .replace(
      /\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\s+active\s+segments?\b/gi,
      "scoped segments",
    )
    .replace(/\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\s+long-form\s+pieces?\b/gi, "a scoped set of long-form pieces")
    .replace(/\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\s+lifecycle\s+and\s+triggered\s+flows?\b/gi, "a scoped set of lifecycle and triggered flows")
    .replace(/\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*)?\s+page\s+marketing\s+sites?\b/gi, "a scoped marketing site")
    .replace(/\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*)?\s+page\s+SEO\s+audits?\b/gi, "a scoped SEO audit")
    .replace(/\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*)?\s+words?\b/gi, "long-form writing")
    .replace(
      /\b\d[\d,]*(?:[km])?\+?\s+(?:AI\s+)?(?:sales\s+)?tools?\b/gi,
      "AI sales tools",
    )
    .replace(/#\d+\s+ranking promises?\b/gi, "ranking promises")
    .replace(/#\d+\s+(?:Google\s+)?rankings?\b/gi, "ranking")
    .replace(/\bLighthouse scores? of \d+\+/gi, "Lighthouse scores meeting the agreed target")
    .replace(/\b(?:six|seven|eight|nine|ten|twelve)\s+weeks?\b/gi, "a project-scoped timeline")
    .replace(/\bcharge-from-day-one MVP\b/gi, "scoped MVP build")
    .replace(/\bday-one\b/gi, "handover")
    .replace(/\bp\d{2}\b/gi, "latency")
    .replace(/\bnever\s+86\s+the\s+bestseller\b/gi, "never let stockouts hide the bestseller")
    .replace(/\ba\s+\d[\d,]*(?:\s*(?:to|-|–)\s*\d[\d,]*)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)[-\s]+(?=(?:sprint|cycle|roadmap|engagement|programme)\b)/gi, "a project-scoped ")
    .replace(/\ba\s+\d[\d,]*(?:\s*(?:to|-|–)\s*\d[\d,]*)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\s+(?=discovery\b)/gi, "a ")
    .replace(/\ba\s+\d[\d,]*(?:\s*(?:to|-|–)\s*\d[\d,]*)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\s+(?=(?:audit|call|discovery)\b)/gi, "an ")
    .replace(/\ba\s+\d[\d,]*(?:\s*(?:to|-|–)\s*\d[\d,]*)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\s+(?=demo\b)/gi, "a ")
    .replace(/\bfree\s+\d[\d,]*(?:\s*(?:to|-|–)\s*\d[\d,]*)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\s+/gi, "free ")
    .replace(/\baccelerated\s+\d+(?:\s*(?:to|-|–)\s*\d+)?\s*[x×]\s+by\s+AI\b/gi, "accelerated by AI")
    .replace(/\bcompounding usually starts at month three on a low-volume programme and month two on a four-article-per-month engine\b/gi, "compounding develops as the programme matures")
    .replace(/\b\d+\+?\s+MVPs?\s+shipped\b/gi, "MVP delivery experience")
    .replace(/\bLaunch Your Startup in a project-scoped timeline\b/gi, "Launch Your Startup with a scoped build")
    // Commercial numbers in source schemas are not universal guarantees.
    // Discovery copy keeps the offer useful without repeating unsupported
    // prices, percentages, multipliers, turnaround promises, or volumes.
    .replace(
      /(?:about|around|from|starting\s+at|starts?\s+from|priced\s+at|~)?\s*(?:EUR|€|£|\$)\s*[\d,.]+(?:[km])?(?:\s*(?:to|-|–)\s*(?:EUR|€|£|\$)?\s*[\d,.]+[km]?)?(?:\s*\/\s*(?:month|mo|year|yr))?/gi,
      " tailored pricing ",
    )
    .replace(/\b\d+(?:[.,]\d+)?(?:\s*(?:to|-|–)\s*\d+(?:[.,]\d+)?)?\s*%/gi, " measurable improvement ")
    .replace(/\b\d+(?:\s*(?:to|-|–)\s*\d+)?\s*[x×]\b/gi, " AI-assisted ")
    .replace(/\b(?:847|37)\s*(?:→|->)\s*(?:847|37)\b/gi, " searches to calls ")
    .replace(/\b\d+(?:[.,]\d+)?\s*rating\s+from\s+\d+\s+(?:Google\s+)?reviews?\b/gi, " Google Maps rating and reviews ")
    .replace(
      /\b\d+(?:\s*(?:to|-|–)\s*\d+)?(?:[-\s]+)(?:(?:business|working)\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\b/gi,
      " a project-scoped timeline ",
    )
    .replace(
      /\b\d[\d,]*(?:[km])?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:[km])?)?\+?(?:[-\s]+)(?:pages?|words?|articles?|pieces?|flows?|platforms?|tools?|industries|reviews?|languages?|users?|MVPs?|SKUs?|qps|tenants?|conversations?|meetings?|calls?|leads?|segments?)\b/gi,
      " a scoped volume ",
    )
    .replace(/\b\d[\d,]*(?:[km])?\+?\s*(?:AI\s+)?(?:sales\s+)?(?:tools?|platforms?|industries|reviews?|languages?|users?|SKUs?|qps|tenants?|conversations?|meetings?|calls?|leads?|segments?)\b/gi, " a scoped volume ")
    .replace(/\b\d+\.\d+s\b/gi, " the agreed performance target ")
    .replace(/\b24\/7\b/gi, " ongoing ")
    .replace(/\b\d+-star\b/gi, " positive ")
    .replace(/\beat\s+\d+\s+get\s+\d+\s+free\b/gi, "loyalty rewards")
    .replace(/\b\d+\/\d+\b/gi, "the agreed ratio")
    .replace(/\btwo\s+to\s+four\s+full-time\s+human\s+hours?\s+per\s+day\b/gi, "repetitive administrative work")
    .replace(/\b(?:under|up\s+to|over)\s+~?\d[\d,]*\s+(?:engineers?|users?|SKUs?|customers?)\b/gi, "for the agreed scale")
    .replace(/\bfirst\s+\d[\d,]*\s+customers?\b/gi, "larger customer scale")
    .replace(/\s{2,}/g, " ")
    .replace(/\ba\s+a\b/gi, "a")
    .replace(/\ban\s+a\b/gi, "an")
    .replace(/\blatency latency improvement\b/gi, "latency improvement")
    .replace(/\blong-form writing\s*\(\s*long-form writing\s*\)/gi, "long-form writing")
    .replace(/\ba scoped marketing site\b/gi, "a project-scoped marketing site")
    .replace(/\ba scoped volume reports?\b/gi, "long reports")
    .replace(/\ba scoped volume shipped\b/gi, "MVP delivery experience")
    .replace(/\bacross a scoped volume\b/gi, "across several industries")
    .replace(/\ba scoped volume\./gi, "several platforms.")
    .replace(/\bprioritised a project-scoped timeline roadmap\b/gi, "prioritised project-scoped roadmap")
    .replace(/\ba project-scoped timeline (?=(?:audit|roadmap|execution|post-launch|onboarding|incident|sprint|discovery)\b)/gi, "a project-scoped ")
    .replace(/\bno a project-scoped timeline lock-in\b/gi, "no long-term lock-in")
    .replace(/\bafter a project-scoped timeline onboarding\b/gi, "after onboarding")
    .replace(/\ba project-scoped timeline of kickoff\b/gi, "a project-scoped kickoff sequence")
    .replace(/\ba project-scoped timeline\s*;/gi, "a project-scoped timeline;")
    // Curated repairs for source sentences where removing the unsupported
    // number changes the grammar or meaning. Keep these specific: broad
    // placeholder substitutions are not acceptable public discovery copy.
    .replace(/monitoring tailored pricing\b/gi, "monitoring under a tailored care plan")
    .replace(/no a project-scoped timeline agency lock-ins\b/gi, "no long-term agency lock-ins")
    .replace(
      /(?:Average client benchmark:\s*)?measurable improvement incremental revenue from email\/SMS automation(?: within a project-scoped timeline)?, and measurable improvement reduction in manual operations time\.?/gi,
      "Engagement targets include incremental revenue growth from email and SMS automation, alongside reduced manual operations time.",
    )
    .replace(
      /Our average client sees Engagement targets include incremental revenue growth from email and SMS automation, alongside reduced manual operations time\.?\s*We'll model your specific lift on a discovery call\./gi,
      "Email and SMS automation is scoped around incremental revenue growth and reduced manual operations time. The expected value is modelled for the specific business before implementation.",
    )
    .replace(/start from tailored pricing per month per agent/gi, "use tailored monthly pricing per agent")
    .replace(/start from tailored pricing per month/gi, "use tailored monthly pricing")
    .replace(
      /automation pricing starts at tailored pricing for single workflows and tailored pricing for marketing-automation suites, with ROI calculated against replaced human-hour cost/gi,
      "automation pricing is tailored to workflow complexity and integration scope, with expected value assessed against the manual work replaced",
    )
    .replace(
      /Single workflows are project-scoped from tailored pricing Marketing-automation suites are scoped per project, typically tailored pricing depending on integrations\. Ongoing optimisation is tailored pricing per month\./gi,
      "Single workflows and marketing-automation suites are scoped to their integrations and operational complexity. Ongoing optimisation uses tailored monthly pricing.",
    )
    .replace(/within the first a project-scoped timeline/gi, "as the programme gains traction")
    .replace(/within measurable improvement of the workloads/gi, "for many of the workloads")
    .replace(/handles measurable improvement of the workloads/gi, "handles many of the workloads")
    .replace(/for measurable improvement of that cost/gi, "with broader specialist coverage than one role")
    .replace(
      /Shopify for most Malta retailers with under tailored pricing GMV\./gi,
      "Shopify suits many Malta retailers.",
    )
    .replace(/typically tailored pricing \+ monthly revenue/gi, "typically at sustained high traffic and revenue")
    .replace(/Maltese measurable improvement VAT/gi, "Maltese VAT")
    .replace(
      /Typical lift on a tired store is measurable improvement within a project-scoped timeline\./gi,
      "Conversion targets are agreed against the store's pre-launch baseline.",
    )
    .replace(
      /We work most effectively above tailored pricing media spend\. Below that, the management fee starts to outweigh the return/gi,
      "The right managed-media scope depends on spend, channel mix and creative demand. At smaller scopes, the management fee can outweigh the return",
    )
    .replace(
      /We offer flat retainers up to tailored pricing spend, then a hybrid \(retainer \+ small percentage\) above that\./gi,
      "We offer flat retainers or a hybrid retainer and performance component where appropriate.",
    )
    .replace(
      /Performance signals appear within the first a project-scoped timeline\. Statistically meaningful campaign optimisation usually takes a project-scoped timeline\./gi,
      "Performance signals develop as campaigns gather enough evidence for meaningful optimisation.",
    )
    .replace(/guarantee a documented a project-scoped roadmap/gi, "guarantee a documented project-scoped roadmap")
    .replace(
      /Typical first- a project-scoped timeline conversion lift on a tired store is measurable improvement\./gi,
      "Conversion goals are agreed against the store's baseline and reported transparently.",
    )
    .replace(/Book a project-scoped timeline conversion audit/gi, "Book a conversion audit")
    .replace(/Plans start at tailored pricing/gi, "Plans use tailored monthly pricing")
    .replace(/~ measurable improvement of the web/gi, "a large share of the web")
    .replace(/reduce costs by measurable improvement/gi, "reduce costs measurably")
    .replace(/Reduce no-shows by measurable improvement/gi, "Reduce no-shows")
    .replace(/\s+([,.])/g, "$1")
    .replace(/\(\s*\)/g, "")
    .trim();
}

/**
 * A source field containing one of these claims is omitted from discovery
 * output. It is deliberately stricter than the terminology normaliser:
 * replacing a price or delivery promise with a placeholder makes the copy
 * look generated rather than making the claim citable.
 */
const UNSUPPORTED_COMMERCIAL_PATTERNS = [
  /(?:EUR|USD|GBP|€|£|\$)\s*[\d,.]+/i,
  /\b\d+(?:[.,]\d+)?\s*%/,
  /\b\d+(?:\.\d+)?\s*(?:to|-|–)\s*\d+(?:\.\d+)?\s*[x×]\b/i,
  /\b\d+(?:[.,]\d+)?\s*[x×]\b/i,
  /\b(?:double|triple|quadruple)\b/i,
  /\b(?:24\/7|day[- ]one|first quarter|month[- ]two|month[- ]three|week[- ]one)\b/i,
  /\b\d+(?:\.\d+)?\s*(?:to|-|–)\s*\d+(?:\.\d+)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\b/i,
  /\b\d+(?:\.\d+)?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\b/i,
  /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|twelve)(?:\s+to\s+(?:one|two|three|four|five|six|seven|eight|nine|ten|twelve))?[-\s]+(?:business\s+|working\s+)?(?:minutes?|hours?|days?|weeks?|months?|years?)\b/i,
  /\b\d[\d,]*(?:\.\d+)?(?:[km])?\+?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:\.\d+)?(?:[km])?\+?)?[-\s]+(?:long-form\s+)?(?:AI\s+)?(?:sales\s+)?(?:active\s+)?(?:pages?|words?|articles?|pieces?|ads?|variants?|flows?|platforms?|tools?|industries|reviews?|languages?|users?|MVPs?|SKUs?|qps|tenants?|conversations?|meetings?|calls?|leads?|segments?|engineers?|staff|roles?|tickets?|bookings?|integrations?|customers?|clients?|vendors?|lives?|cuts?)\b/i,
  /\b(?:up\s+to|over|under|first)\s+\d[\d,]*(?:\.\d+)?(?:[km])?\+?(?:\s*(?:to|-|–)\s*\d[\d,]*(?:\.\d+)?(?:[km])?\+?)?[-\s]+(?:long-form\s+)?(?:AI\s+)?(?:sales\s+)?(?:active\s+)?(?:pages?|words?|articles?|pieces?|ads?|variants?|flows?|platforms?|tools?|industries|reviews?|languages?|users?|MVPs?|SKUs?|qps|tenants?|conversations?|meetings?|calls?|leads?|segments?|engineers?|staff|roles?|tickets?|bookings?|integrations?|customers?|clients?|vendors?|lives?|cuts?)\b/i,
  /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|twelve)(?:\s+(?:to|or)\s+(?:one|two|three|four|five|six|seven|eight|nine|ten|twelve))?[-\s]+(?:long-form\s+|short-form\s+|free\s+)?(?:active\s+)?(?:video\s+)?(?:pages?|words?|articles?|pieces?|ads?|variants?|flows?|platforms?|tools?|industries|reviews?|languages?|users?|MVPs?|SKUs?|qps|tenants?|conversations?|meetings?|calls?|leads?|segments?|engineers?|staff|roles?|tickets?|bookings?|integrations?|customers?|clients?|vendors?|lives?|cuts?)\b/i,
  /\b\d+(?:\.\d+)?[-\s](?:star\s+)?ratings?\b/i,
  /\b\d+(?:\.\d+)?[-\s]star\s+(?:reviews?|ratings?)\b/i,
  /\b\d+(?:\.\d+)?[-\s]star\s+(?:Google\s+)?(?:reviews?|ratings?)\b/i,
  /(?:#\s*\d+|number\s+\d+)\s+(?:Google\s+)?rankings?\b/i,
  /\b(?:rank|ranking)\s+(?:number\s+)?(?:one|first|\d+)\b/i,
  /\bMalta's\s+(?:first|leading|best|top)\b/i,
  /\b(?:Lighthouse|PageSpeed)\s+scores?\s+(?:of\s+)?\d+(?:\.\d+)?\+?\b/i,
  /\b(?:LCP|CLS|INP|FID)\s*[<>=]\s*\d+(?:\.\d+)?\s*[a-z]*\b/i,
  /\beat\s+\d+\s+get\s+\d+\s+free\b/i,
  /\b(?:guarantee|guaranteed|guarantees)\b/i,
  /\bmillions?\s+of\s+(?:users?|customers?|requests?|records?)\b/i,
  /\b(?:fires?|responds?|delivers?|completes?)\s+in\s+seconds\b/i,
] as const;

const MALFORMED_DISCOVERY_PATTERNS = [
  /project-scoped\s+timeline/i,
  /scoped\s+volume/i,
  /measurable improvement\s+(?:incremental|reduction|of|VAT|within|with)/i,
  /tailored pricing\s+(?:per month|marketing|GMV)/i,
  /\b(?:a|an)\s+(?:a|an)\b/i,
  /\b(?:a|an)\s+(?:project-scoped|scoped)\s*$/i,
] as const;

export function hasUnsupportedDiscoveryClaim(value: string): boolean {
  const auditValue = value
    // Core 60 is a stable structural identifier, not a volume promise.
    .replace(/\b(?:canonical\s+)?Core 60 pages?\b/gi, "Core pages")
    .replace(/\bTop 60 pages?\b/gi, "Top pages");
  return UNSUPPORTED_COMMERCIAL_PATTERNS.some((pattern) => pattern.test(auditValue));
}

/** Return null for a source field that must not enter the discovery surface. */
export function curateDiscoveryText(value: string): string | null {
  if (hasUnsupportedDiscoveryClaim(value)) return null;
  const normalized = sanitizeDiscoveryText(value);
  return normalized.length > 0 ? normalized : null;
}

export function assertValidDiscoveryProse(value: string, label: string): void {
  const malformed = MALFORMED_DISCOVERY_PATTERNS.find((pattern) => pattern.test(value));
  if (malformed) {
    throw new Error(
      `[discovery-prose] ${label} contains malformed sanitised copy matching ${malformed}: ${value.match(malformed)?.[0]}`,
    );
  }
  const auditValue = value
    .replace(/\b(?:canonical\s+)?Core 60 pages?\b/gi, "Core pages")
    .replace(/\bTop 60 pages?\b/gi, "Top pages");
  const unsupported = UNSUPPORTED_COMMERCIAL_PATTERNS.find((pattern) => pattern.test(auditValue));
  if (unsupported) {
    throw new Error(
      `[discovery-prose] ${label} contains an unsupported commercial-number pattern ${unsupported}: ${value.match(unsupported)?.[0]}`,
    );
  }
}

export const START_HERE_START = "<!-- AUTOGEN:START-HERE:START -->";
export const START_HERE_END = "<!-- AUTOGEN:START-HERE:END -->";

const START_HERE_LINKS = [
  {
    title: "Homepage",
    url: "https://oarcdigital.com/",
    description: "OARC Digital: creative, AI workers, voice coverage, and business systems.",
  },
  {
    title: "Creative",
    url: "https://oarcdigital.com/creative",
    description: "Brand, social, video, and web production with human creative direction.",
  },
  {
    title: "AI Workers",
    url: "https://oarcdigital.com/ai-agents",
    description: "AI workers for sales, support, booking, administration, and operations.",
  },
  {
    title: "Voice AI Worker",
    url: "https://oarcdigital.com/voice-ai-worker",
    description: "A managed phone operating layer that answers, acts, and hands off decisions.",
  },
  {
    title: "Business Systems",
    url: "https://oarcdigital.com/solutions",
    description: "Workflow, CRM, WhatsApp, and revenue systems scoped to the business need.",
  },
  {
    title: "H360",
    url: "https://oarcdigital.com/h360",
    description: "OARC's hospitality line for Malta restaurants and food businesses.",
  },
  {
    title: "Pricing",
    url: "https://oarcdigital.com/pricing",
    description: "Tailored project and service pricing, with affordable entry packages where available.",
  },
  {
    title: "Our Work",
    url: "https://oarcdigital.com/our-work",
    description: "Named partnerships, public products, private systems, and clearly labelled studies.",
  },
] as const;

export function buildStartHereSection(): string {
  const lines = [START_HERE_START, "", "## Start here", ""];
  lines.push(
    "The canonical entry order for AI answer engines and people discovering OARC Digital:",
    "",
  );
  for (const item of START_HERE_LINKS) {
    lines.push(`- [${item.title}](${item.url}) — ${item.description}`);
  }
  lines.push(
    "",
    "## Actions",
    "",
    "- [Service catalogue](https://oarcdigital.com/api/services) — machine-readable departments, capabilities and pricing guidance.",
    "- [Pricing](https://oarcdigital.com/pricing.txt) — plain-text pricing model and starting-scope guidance.",
    "- [Agent manifest](https://oarcdigital.com/.well-known/agent.json) — canonical discovery metadata and action endpoints.",
    "- [OpenAPI](https://oarcdigital.com/openapi.json) — service discovery and validated enquiry-request contract.",
    "- [MCP](https://oarcdigital.com/mcp) — tools for listing services and requesting human follow-up.",
  );
  lines.push("", START_HERE_END);
  return lines.join("\n");
}

export type CorePageMeta = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  /** "framework" = covered by SERVICE_SCHEMAS / PILLAR_SCHEMAS (full entry).
   *  "supplemental" = lighter stub (title + description + NAP CTA). */
  source: "framework" | "supplemental";
  kind: TopPage["kind"];
  tier: TopPage["tier"];
};

function canonicalFor(path: string): string {
  return path === "/" ? "https://oarcdigital.com" : `https://oarcdigital.com${path}`;
}

// Curated metadata for every TOP_PAGES path NOT covered by
// SERVICE_SCHEMAS / PILLAR_SCHEMAS. Titles + descriptions mirror the
// `export const metadata` of the corresponding `app/<path>/page.tsx`
// at HEAD — when those drift, update here too (the gate's parity
// check will not catch a wording drift on its own; this is a
// content-team responsibility flagged in the module header).
const SUPPLEMENTAL_META: Record<string, { title: string; description: string }> = {
  // Added 2026-09-13: /agent-economy is in TOP_PAGES but had no framework or
  // supplemental entry, so `assertCoreCoverage` threw and blocked
  // `npm run prebuild` / the pre-commit gate. Titles mirror
  // app/agent-economy/page.tsx at HEAD.
  "/agent-economy": {
    title: "AI Agent Economy Malta | Marketing Agents That Work for You | OARC",
    description:
      "OARC Digital's agent economy: SEO/AEO, creative, outreach, GBP, and voice agents that live on the agentic web and market for Malta owners. Capability registry, entity graph + NAP, bookable actions. Birkirkara.",
  },
  // ── Pillar / nav supporting shells ────────────────────────────────────
  "/solutions": {
    title: "Business Automation & Revenue Solutions — Malta's First | OARC Digital",
    description:
      "Automate your Malta business with OARC Digital. Workflow automation, CRM integration, API connections, lead funnels, email sequences & custom software development. Eliminate manual processes, reduce costs by 60%, and scale operations. Malta's premier automation partner.",
  },
  "/services": {
    title: "Our Services | AI Creative, AI Employees & Revenue Automation",
    description:
      "Explore OARC Digital's comprehensive suite of AI-powered services: creative production, AI employees for hire, and revenue automation solutions. Elite marketing services designed for ambitious brands in Malta and globally.",
  },
  "/our-work": {
    title: "Our Work | Case Studies & Success Stories | OARC Digital",
    description:
      "Explore OARC Digital's portfolio of named partnerships, public OARC products, private systems, and clearly labelled concept studies across creative, digital products, and automation.",
  },
  "/contact": {
    title: "Contact OARC Digital | Get in Touch with Our Team",
    description:
      "Talk to the OARC Digital team in Birkirkara CBD about AI creative, AI employees, and revenue automation. Walk in to The Brewhouse on weekdays, call +356 7971 1799, or book a slot online.",
  },
  "/pricing": {
    title: "Pricing Plans | OARC Digital",
    description:
      "Flexible plans built for growth. Pay for outcomes, not outputs. 10x faster than traditional agencies.",
  },
  "/why-us": {
    title: "Who We Are | OARC Digital Malta",
    description:
      "How OARC Digital combines creative, AI engineering, and growth automation under one Birkirkara team for Maltese businesses.",
  },
  "/blog": {
    title: "OARC Digital Blog | AI Marketing, Creative Services & Growth Strategies",
    description:
      "Expert insights on AI marketing, creative services, and revenue growth. Learn from real case studies, how-to guides, and industry best practices.",
  },
  "/tools": {
    title: "AI Tools & Tech Stack | OARC Digital",
    description:
      "Discover the 80+ AI sales tools, marketing automation, and creative software we use to deliver results. From Clay and Instantly to Midjourney and Figma.",
  },
  "/about": {
    title: "About OARC Digital | Malta's AI-Native Creative & Automation Agency",
    description:
      "OARC Digital brings AI, creative, and automation under one roof for Maltese businesses. Explore the team's operating principles and capabilities.",
  },
  "/case-studies": {
    title: "Case Studies — OARC Digital Malta | Detailed Engagement Write-Ups",
    description:
      "Detailed long-form case studies from OARC Digital across hospitality, iGaming, real estate, fintech, and SaaS. Methodology, measured outcomes, and the systems we built.",
  },
  "/industries": {
    title: "Industries We Serve in Malta | OARC Digital",
    description:
      "OARC Digital serves restaurants, hotels, healthcare, legal, professional services, construction, beauty, automotive, education, NGOs, iGaming, fintech, real estate, retail, ecommerce, fitness, wellness, and events across Malta. Pick your industry to see how we package the offer.",
  },
  "/intelligence": {
    title: "Business Diagnostics | OARC Intelligence",
    description:
      "Discover what's costing your business. AI-powered diagnostics identify revenue leakage, operational inefficiencies, and hidden cost centers across 8 industries.",
  },
  "/diagnostics": {
    title: "Free Business Diagnostics — Malta | OARC Digital",
    description:
      "Four free tools — Industry Scan, Growth Simulator, AI Workforce Designer, and the Cortex Business Intelligence Scan — for Malta SMEs who want a fast read on where revenue is leaking and what to fix first.",
  },
  "/enterprise": {
    title: "Enterprise Solutions | OARC Digital for Large Organizations",
    description:
      "Enterprise-grade AI marketing solutions from OARC Digital. Scalable AI employees, custom creative production, and revenue automation systems designed for ambitious organizations across Europe, Middle East, and Asia.",
  },
  "/roadmap-2026": {
    title: "Road Map 2026 | OARC Digital's AI Innovation Journey",
    description:
      "Discover OARC Digital's vision for the future of AI-powered marketing. Interactive timeline showcasing our commitment to AI innovation, creative excellence, and revenue automation leadership from Malta to the world.",
  },
  "/pdf-hub": {
    title: "PDF Marketing Hub — Capabilities, Profiles & One-Pagers | OARC Digital",
    description:
      "Download OARC Digital's printable capabilities deck, company profile, AI creative profile, and one-pager. Built for Malta-market sales conversations and EU partner intros.",
  },

  // ── AI services ───────────────────────────────────────────────────────
  "/services/ai-consulting": {
    title: "AI Consulting | AI Strategy & Implementation | OARC Digital Malta",
    description:
      "Strategic AI consulting from OARC Digital. Transform your marketing and operations with expert AI strategy, implementation, and optimization services.",
  },
  "/services/ai-support-specialist": {
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description:
      "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  },
  "/services/ai-appointment-booker": {
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description:
      "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  },
  "/services/ai-data-analyst": {
    title: "Data Insights Analyst | AI-Powered Business Intelligence | OARC Digital",
    description:
      "Turn data chaos into strategic dashboards. Our AI Data Analyst transforms raw data into actionable insights with machine learning and real-time analytics.",
  },
  "/services/ai-admin-agent": {
    title: "AI Admin Agent | Inbox & Calendar Automation Malta",
    description:
      "Reclaim 15+ hours weekly. AI admin agent triages inbox, books and reschedules meetings, files docs, and runs SOPs across your team — Malta-built.",
  },
  "/services/hire-ai-employees": {
    title: "AI Virtual Talent Hub | Autonomous AI Agents On-Demand | OARC Digital Malta",
    description:
      "Hire autonomous AI agents as on-demand team members. Our production-tested agents think, adapt, and execute 24/7 while slashing your hiring costs. Malta-based support.",
  },

  // ── Software / engineering services ───────────────────────────────────
  "/services/custom-software-development": {
    title: "Custom Software Development | Web Apps & Enterprise Solutions | OARC Digital",
    description:
      "Build powerful custom software solutions tailored to your business. Full-stack development with React, Node.js, Python. From MVPs to enterprise platforms.",
  },
  "/services/mobile-apps-development": {
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description:
      "Build apps people love. Native iOS, Android, and cross-platform development from MVP to production scale.",
  },
  "/services/api-integration": {
    title: "API Integration Malta | Connect Any System | OARC Digital",
    description:
      "Custom API development and third-party integration for Malta businesses. Stripe, Salesforce, Twilio, and 500+ platforms. REST, GraphQL, webhooks — enterprise-grade reliability.",
  },
  "/services/mvp-development": {
    title: "MVP Development Services Malta | Launch Your Startup in 8-12 Weeks | OARC Digital",
    description:
      "Build your MVP with a Malta-based product development team. From concept validation to market launch in 8-12 weeks. 40+ MVPs shipped. Get a free consultation.",
  },

  // ── Creative spoke services ───────────────────────────────────────────
  "/services/social": {
    title: "Social Media Strategy & Audit | OARC Digital Malta",
    description:
      "A one-time social media strategy and audit for Malta brands. Forensic teardown of your channels, competitor matrix, content pillars, and a 90-day execution plan.",
  },
  "/services/influencer": {
    title:
      "Malta Influencer Marketing | Local Creator Network for Hospitality, Lifestyle & iGaming",
    description:
      "Malta-local creator partnerships for hospitality, lifestyle, sport, food and MGA-licensed iGaming brands. Maltese creators briefed and contracted to move bookings, deposits and footfall.",
  },
  "/services/influencer-marketing": {
    title: "Influencer Marketing | Creator Partnerships | OARC Digital",
    description:
      "Premium influencer marketing campaigns from OARC Digital. Connect with authentic creators and drive results through strategic influencer partnerships.",
  },
  "/services/motion-design": {
    title: "Motion Design | Animation & Motion Graphics | OARC Digital",
    description:
      "Elite motion design and animation services. OARC Digital creates stunning motion graphics, explainer videos, and animated content that captivates audiences.",
  },
  "/services/presentation-pitch": {
    title: "Presentation Design | Pitch Decks | OARC Digital Malta",
    description:
      "Elite presentation and pitch deck design from OARC Digital. Create compelling visual narratives that win deals and inspire action.",
  },
  "/services/ad-creative": {
    title: "Ad Creative Design | Performance Marketing Creative | OARC Digital",
    description:
      "High-converting ad creative from OARC Digital. Design performance marketing assets that drive results across paid social, display, and video advertising.",
  },
  "/services/email-creative": {
    title: "Email Creative Design | Email Marketing Design | OARC Digital",
    description:
      "Premium email design services that drive engagement and conversions. OARC Digital creates stunning email campaigns combining creative excellence with marketing strategy.",
  },
  "/services/print-packaging": {
    title: "Print & Packaging Design | Physical Product Design | OARC Digital",
    description:
      "Premium print and packaging design services. OARC Digital creates stunning physical brand experiences from product packaging to marketing collateral.",
  },
  "/services/illustration": {
    title: "Illustration Services | Custom Digital Art | OARC Digital Malta",
    description:
      "Premium custom illustration and digital art from OARC Digital. Unique visual storytelling combining traditional artistry with AI-enhanced creative workflows.",
  },
  "/services/design-systems": {
    title: "Design Systems | Scalable UI Frameworks | OARC Digital",
    description:
      "Build comprehensive design systems with OARC Digital. Create consistent, scalable brand experiences across all digital touchpoints with elite design system architecture.",
  },
  "/services/immersive-3d-ar": {
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description:
      "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  },

  // ── Marketing / growth / revenue services ─────────────────────────────
  "/services/growth-strategy": {
    title: "Growth Strategy & Consulting | Strategic Planning | OARC Digital",
    description:
      "Expert growth strategy consulting. Market validation, growth experiments, strategic planning, and scaling roadmaps that transform ambitious businesses into market leaders.",
  },
  "/services/performance-analytics": {
    title: "Performance Analytics & Reporting | Data-Driven Insights | OARC Digital",
    description:
      "Custom analytics dashboards, ROI tracking, attribution modeling, and performance insights. Transform data into actionable growth strategies.",
  },
  "/services/lead-generation": {
    title: "Lead Generation | B2B & B2C Lead Gen | OARC Digital Malta",
    description:
      "Premium lead generation services combining AI automation with creative strategy. OARC Digital delivers qualified leads at scale for ambitious brands.",
  },
  "/services/revenue-automation": {
    title: "Revenue Automation Malta | AI Revenue Engine | OARC Digital",
    description:
      "AI-powered revenue automation for Malta businesses. OARC Digital builds systems that generate and convert leads automatically. Contact hello@oarcdigital.com.",
  },
  "/services/funnel-automation": {
    title: "Funnel Automation | Conversion Optimization | OARC Digital Malta",
    description:
      "Automate your marketing funnels with OARC Digital. Build, test, and optimize conversion funnels using AI-powered automation for predictable revenue growth.",
  },
  "/services/customer-acquisition": {
    title: "Customer Acquisition Malta | Predictable CPA at Scale | OARC Digital",
    description:
      "End-to-end customer acquisition engineering for Malta and EU brands. We build the attribution model, run the channels, and report one number: cost-per-acquired-customer.",
  },
};

export function resolveCorePageMeta(p: TopPage): CorePageMeta {
  // Pillar pages — PILLAR_SCHEMAS keys are paths like "/" and "/creative".
  if (p.kind === "pillar") {
    const pillar = (PILLAR_SCHEMAS as Record<string, { title: string; description: string }>)[p.path];
    if (pillar) {
      return {
        path: p.path,
        title: pillar.title,
        description: pillar.description,
        canonical: canonicalFor(p.path),
        source: "framework",
        kind: p.kind,
        tier: p.tier,
      };
    }
  }
  // Service pages — SERVICE_SCHEMAS keys are bare slugs.
  if (p.kind === "service") {
    const slug = p.path.replace(/^\/services\//, "");
    const svc = (SERVICE_SCHEMAS as Record<string, { title: string; description: string }>)[slug];
    if (svc) {
      return {
        path: p.path,
        title: svc.title,
        description: svc.description,
        canonical: canonicalFor(p.path),
        source: "framework",
        kind: p.kind,
        tier: p.tier,
      };
    }
  }
  const sup = SUPPLEMENTAL_META[p.path];
  if (sup) {
    return {
      path: p.path,
      title: sup.title,
      description: sup.description,
      canonical: canonicalFor(p.path),
      source: "supplemental",
      kind: p.kind,
      tier: p.tier,
    };
  }
  // Coverage hole — caller (validateCoreCoverage / generators) MUST surface.
  return {
    path: p.path,
    title: "",
    description: "",
    canonical: canonicalFor(p.path),
    source: "supplemental",
    kind: p.kind,
    tier: p.tier,
  };
}

/** Returns paths that have neither framework nor supplemental metadata. */
export function validateCoreCoverage(): string[] {
  const missing: string[] = [];
  for (const p of TOP_PAGES) {
    const meta = resolveCorePageMeta(p);
    if (!meta.title || !meta.description) missing.push(p.path);
  }
  return missing;
}

/** Throws if any TOP_PAGES path lacks resolvable metadata. Used by the
 *  generators so a missing page hard-fails llms-full.txt regeneration
 *  AND its --check parity gate (which is wired into seo-gate.sh). */
export function assertCoreCoverage(): void {
  const missing = validateCoreCoverage();
  if (missing.length > 0) {
    throw new Error(
      `[llmsTxtGenerator] Core 60 coverage FAILED — ${missing.length} TOP_PAGES path(s) ` +
        `have no SERVICE_SCHEMAS / PILLAR_SCHEMAS / SUPPLEMENTAL_META entry:\n` +
        missing.map((p) => `  - ${p}`).join("\n") +
        `\n  Add a framework entry or extend SUPPLEMENTAL_META in lib/seo/llmsTxtGenerator.ts.`,
    );
  }
}

export const CORE_INDEX_START = "<!-- AUTOGEN:CORE-60-INDEX:START -->";
export const CORE_INDEX_END = "<!-- AUTOGEN:CORE-60-INDEX:END -->";

/** llms.txt block: ranked Core 60 listing (URL + one-line title).
 *  Replaces nothing existing — bracketed by its own AUTOGEN markers so
 *  it can sit alongside the existing CITABLE-FACTS section. */
export function buildCoreIndexSection(): string {
  assertCoreCoverage();
  const lines: string[] = [];
  lines.push(CORE_INDEX_START);
  lines.push("");
  lines.push("## Canonical Core 60 (ranked)");
  lines.push("");
  lines.push(
    "Auto-generated from lib/seo/topPages.ts + lib/seo/llmsTxtGenerator.ts. The single ranked list of core URLs OARC Digital wants AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot) to know about and cite. Order matches `.local/memory/core-url-rank.md`. Do not hand-edit between the AUTOGEN markers — re-run the generator instead.",
  );
  lines.push("");
  let n = 0;
  for (const p of TOP_PAGES) {
    n += 1;
    const meta = resolveCorePageMeta(p);
    const cleanTitle =
      curateDiscoveryText(meta.title.replace(/\s*\|\s*OARC Digital.*$/i, "").trim()) ??
      (p.path.slice(1).replace(/[-/]/g, " ") || "OARC Digital");
    lines.push(`${n}. [${cleanTitle}](${meta.canonical}) — tier ${p.tier}`);
  }
  lines.push("");
  lines.push(CORE_INDEX_END);
  return lines.join("\n");
}

/** Cite-able facts true for every Core 60 page (location and canonical
 *  contact path). Kept generic-but-true so AI engines have at least
 *  one anchor fact per page even when the framework schema is absent. */
function commonFactsFor(m: CorePageMeta): string[] {
  return [
    `OARC Digital is headquartered at Level 1, The Brewhouse, Central Business District, Birkirkara CBD 2010, Malta — the team running ${m.canonical} works on-island. (source: https://oarcdigital.com/contact)`,
    `${m.canonical} is part of OARC Digital's ranked Core 60 (tier ${m.tier}, ${m.kind}) — the canonical pages OARC Digital wants AI answer engines to cite for queries about its services. (source: https://oarcdigital.com/sitemap.xml)`,
  ];
}

/** Two evergreen Q&A pairs for every supplemental Core 60 page. Same
 *  structure as the framework FAQ block so AI engines can ingest a
 *  consistent shape across all 60 pages. */
function commonFaqsFor(m: CorePageMeta): { q: string; a: string }[] {
  const subject = sanitizeDiscoveryText(m.title.replace(/\s*[\|—–-]\s*OARC Digital.*$/i, "").trim());
  return [
    {
      q: `How do I engage OARC Digital for ${subject}?`,
      a: `Start at ${m.canonical} or message the Birkirkara team on WhatsApp +356 7971 1799 / hello@oarcdigital.com. The canonical page explains the relevant scope and next step.`,
    },
    {
      q: `Where is the OARC Digital team that delivers this work based?`,
      a: `OARC Digital's head office is at Level 1, The Brewhouse, Central Business District, Birkirkara CBD 2010, Malta. The team works on-island and serves clients across the EU, the Middle East, and Asia remotely.`,
    },
  ];
}

/** llms-full.txt block: full-shape entries (title, canonical,
 *  description, key facts, FAQ summary, contact path) for every
 *  TOP_PAGES path NOT already covered by a framework schema. Spliced
 *  into `buildLlmsFullBody()` after the Pillar + Service sections so
 *  AI engines see the same NAP and canonical contact path everywhere.
 *  Pricing remains a single global resource in Start here + Actions. */
export function buildSupplementalLlmsFullEntries(): string {
  assertCoreCoverage();
  const lines: string[] = [];
  const supplementals = TOP_PAGES.map(resolveCorePageMeta).filter(
    (m) => m.source === "supplemental",
  );
  if (supplementals.length === 0) return "";
  lines.push("## Core supporting pages (Top 60 spokes & shells)");
  lines.push("");
  lines.push(
    "Reference entries for the canonical Core 60 pages that don't carry a full 6-layer framework schema. Each entry gives AI answer engines a citable description, anchor facts, Q&A pairs, and a canonical contact path to the Birkirkara HQ.",
  );
  lines.push("");
  for (const m of supplementals) {
    const title =
      curateDiscoveryText(m.title) ??
      (m.path.slice(1).replace(/[-/]/g, " ") || "OARC Digital");
    lines.push(`### ${title}`);
    lines.push(`Canonical: ${m.canonical}`);
    lines.push("");
    const description = curateDiscoveryText(m.description);
    if (description) {
      lines.push("**Description**");
      lines.push(description);
      lines.push("");
    }
    lines.push(`**Tier**: ${m.tier} · **Kind**: ${m.kind}`);
    lines.push("");
    lines.push("**Cite-able facts**");
    lines.push("");
    for (const f of commonFactsFor(m)) {
      const fact = curateDiscoveryText(f);
      if (fact) lines.push(`- ${fact}`);
    }
    lines.push("");
    lines.push("**FAQs**");
    lines.push("");
    for (const { q, a } of commonFaqsFor(m)) {
      const question = curateDiscoveryText(q);
      const answer = curateDiscoveryText(a);
      if (!question || !answer) continue;
      lines.push(`Q: ${question}`);
      lines.push(`A: ${answer}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }
  return lines.join("\n");
}
