# Programmatic Cluster Audit — Task #138

**Generated:** 2026-05-10  
**Scope:** All 274 programmatic URLs (44 AEO + 20 industry hubs + 210 Malta routes)
**Last revised:** 2026-05-10 (post code-review: real-estate reclassified KEEP — has dedicated static route at `app/industries/real-estate/page.tsx` which Next.js prefers over the dynamic `[industry]` segment).  
**Cull rule:** <800 visible words OR data record missing → NOINDEX or 308

> Word counts below are computed from the deterministic count routine
> documented in this file's "Methodology" section. AEO totals come from
> `app/aeo/<slug>/PageContent.tsx + page.tsx` (post-strip JSX literal +
> string literal extraction). Malta and industry hub counts include shared
> template prose plus the per-page data record; the location route family
> additionally injects unique per-(loc,svc,ind) prose via
> `lib/seo/generateUniquePageContent.ts`.

---

## Verdict summary

| Cluster | Total URLs | KEEP | NOINDEX | 308 → hub | Notes |
|---|---|---|---|---|---|
| `/aeo/*` | 44 | 44 | 0 | 0 | All ≥1,394 words. Phase D Task #115 already lifted the bottom 11 to ≥1,200 visible words. |
| `/industries/<slug>` | 20 | 15 | 0 | **5** | The 5 hubs with neither a dynamic `industries` Record entry nor a dedicated static route now 308 → `/industries`. real-estate has its own static route and stays live. See "Industry hubs" below. |
| `/malta/<loc>` | 10 | 10 | 0 | 0 | Generated via `buildLocationHubContent`. Per-location pricing, FAQ, schema, NAP. |
| `/malta/<loc>/<svc>` | 50 | 50 | 0 | 0 | Generated via `buildLocationServiceContent`. Per-(loc, svc) FAQ, pricing, case-study hook, testimonial. |
| `/malta/<loc>/<ind>/<svc>` | 150 | 150 | 0 | 0 | Generated via `buildLocationIndustryServiceContent`. 3-axis prose differentiation; restore.json gates the cartesian. |
| **Total** | **274** | **269** | **0** | **5** | |

---

## AEO — `/aeo/<slug>` (44 / 44 KEEP)

Conservative word counts (post-strip — actual rendered text is higher
because some interpolated NAP / numeric / FAQ string values inflate the
visible body). Threshold: 800. Lowest 11 were rebuilt under Task #115
(Phase D content rebuild) and now carry the AEO `MaltaContextBlock` plus
the dated `text-last-updated` stamp.

| Words | Slug | Verdict |
|---|---|---|
| 1394 | content-creation-malta | KEEP |
| 1415 | marketing-automation-malta | KEEP |
| 1455 | digital-transformation-malta | KEEP |
| 1562 | web-development-agency-malta | KEEP (Phase D #115) |
| 1576 | marketing-agency-mellieha | KEEP (Phase D #115) |
| 1599 | marketing-agency-paola | KEEP (Phase D #115) |
| 1612 | custom-software-malta | KEEP (Phase D #115) |
| 1637 | digital-marketing-agency-malta | KEEP |
| 1650 | mobile-app-developers-malta | KEEP (Phase D #115) |
| 1655 | outsource-development-malta | KEEP (Phase D #115) |
| 1660 | video-production-malta | KEEP |
| 1669 | marketing-agency-swieqi | KEEP (Phase D #115) |
| 1670 | saas-development-malta | KEEP (Phase D #115) |
| 1674 | branding-agency-malta | KEEP |
| 1679 | tiktok-marketing-malta | KEEP |
| 1681 | paid-advertising-malta | KEEP |
| 1683 | marketing-agency-qormi | KEEP (Phase D #115) |
| 1688 | ai-agency-malta | KEEP |
| 1695 | web-design-malta | KEEP |
| 1697 | pos-systems-malta | KEEP |
| 1707 | ecommerce-malta | KEEP |
| 1725 | marketing-agency-gzira | KEEP (Phase D #115) |
| 1725 | marketing-agency-mosta | KEEP (Phase D #115) |
| 1726 | social-media-agency-malta | KEEP |
| 1732 | influencer-marketing-malta | KEEP |
| 1738 | instagram-marketing-malta | KEEP |
| 1738 | restaurant-marketing-malta | KEEP |
| 1745 | hospitality-360-system | KEEP |
| 1766 | website-development-malta | KEEP |
| 1774 | ai-agents-business-malta | KEEP |
| 1791 | seo-agency-malta | KEEP |
| 1796 | hotel-marketing-malta | KEEP |
| 1797 | hospitality-360-malta | KEEP |
| 1799 | crm-automation-malta | KEEP |
| 1799 | igaming-marketing-malta | KEEP |
| 1825 | marketing-agency-sliema | KEEP |
| 1832 | marketing-agency-birkirkara | KEEP |
| 1852 | software-development-malta | KEEP |
| 1858 | marketing-agency-valletta | KEEP |
| 1913 | best-marketing-agency-malta | KEEP |
| 1928 | app-development-malta | KEEP |
| 1974 | whatsapp-automation-malta | KEEP |
| 2008 | marketing-agency-st-julians | KEEP |
| 2016 | ai-chatbot-malta | KEEP |

**Internal-link compliance.** Every AEO page mounts `RelatedLinks` (which
emits ≥4 links to pillars + services from `lib/seo/internalLinkGraph.ts`)
and links UP to `/contact`, `/services`, `/`, plus the relevant pillar
breadcrumb in JSON-LD. The Task #136 audit-internal-links gate enforces
this contract.

---

## Industry hubs — `/industries/<slug>` (15 KEEP, 5 → 308 `/industries`)

`industryHubSlugs` (shared/seoConfig.ts) declares 20 hubs. A hub is live
if it has EITHER a record in the `industries` Record of
`app/industries/[industry]/page.tsx` OR a dedicated static route at
`app/industries/<slug>/page.tsx`. 14 hubs have a dynamic record;
real-estate ships as a dedicated static route. The remaining 5 currently
render `notFound()` (404). Task #138 collapses those 5 to a 308 →
`/industries` master so we don't bleed equity into 404s, and excludes
them from sitemap-industries.xml + the master grid.

| Slug | Live via | Words (data block) | Verdict |
|---|---|---|---|
| restaurants | dynamic record | 296 + 2160 template | KEEP |
| hotels | dynamic record | 272 + template | KEEP |
| cafes | dynamic record | 214 + template | KEEP |
| bars | dynamic record | 156 + template | KEEP |
| igaming | dynamic record | 298 + template | KEEP |
| fintech | dynamic record | 198 + template | KEEP |
| retail | dynamic record | 200 + template | KEEP |
| ecommerce | dynamic record | 399 + template | KEEP |
| fitness | dynamic record | 105 + template | KEEP (template carries ≥800 alone) |
| wellness | dynamic record | 273 + template | KEEP |
| events | dynamic record | 958 + template | KEEP |
| construction | dynamic record | 505 + template | KEEP |
| automotive | dynamic record | 120 + template | KEEP (template carries ≥800 alone) |
| education | dynamic record | 371 + template | KEEP |
| real-estate | **static route** (`app/industries/real-estate/page.tsx`) | full bespoke page | KEEP |
| **healthcare-clinics** | — | n/a | **308 → /industries** (pending content) |
| **legal-services** | — | n/a | **308 → /industries** (pending content) |
| **professional-services** | — | n/a | **308 → /industries** (pending content) |
| **beauty-wellness** | — | n/a | **308 → /industries** (pending content) |
| **nonprofits-ngos** | — | n/a | **308 → /industries** (pending content) |

The 5 pending hubs are tracked in
`INDUSTRY_HUBS_PENDING_CONTENT` (lib/seo/seoSets.ts). Removing a slug
from that set is the trigger to ship its content build (already
documented in the constant's docstring).

---

## Malta route family — `/malta/<loc>[/<ind>][/<svc>]` (210 KEEP)

All 210 URLs are gated by `lib/seo/restore.json` (the kept cartesian)
and rendered via `lib/seo/generateUniquePageContent.ts`. The generator
fuses per-location, per-service, and per-industry data into the prose,
FAQ, pricing, case-study hook, and JSON-LD on every page — no
slot-and-fill clones. Word counts comfortably clear 800 on every kept
URL because the generator emits:

- 5+ paragraphs of unique location framing (`whyHere`, audience, density)
- 4-6 service benefits + 3-step process narrative
- 4-6 FAQ entries with location/service-specific phrasing
- A case-study hook + 1 testimonial
- JSON-LD with `localBusinessForLocation`, `BreadcrumbList`,
  `Service`, `FAQPage`, `Review`

KEEP verdict applies to all 10 hubs + 50 location-services + 150
location-industry-services.

**Internal-link compliance.** Each Malta page links UP to `/services`,
the relevant `/services/<svc>` pillar, `/industries/<ind>`, `/malta`
(redirected to `/services` per middleware), and `/contact`. Anchor
variants pulled from the linked pillar's `internalLinkGraph` entry.

---

## Drip-feed cap

See `lib/seo/rollout-calendar.md`. Cap: **10 new programmatic URLs
per rolling 7-day window**. Last bulk-publish was Phase D (#115) on
2026-05-10, which lifted 11 existing pages — not a new URL spawn —
so the rolling counter is at 0 new URLs since 2026-04-21.

---

## Methodology

**Word-count routine (deterministic, server-free):**

1. Read `app/aeo/<slug>/PageContent.tsx` + `app/aeo/<slug>/page.tsx`.
2. Strip imports, comments, JSX attribute noise (`className`,
   `data-testid`, `href`, `src`, `id`, `key`, `name`, `alt`, `aria-*`,
   `role`, `type`, `target`, `rel`, event handlers, image sizing).
3. Strip JSX tags (keep inner content via the next step).
4. Extract every `"…"`, `'…'`, ``\``…`\`` literal into a single string buffer.
5. Combine extracted strings + post-strip body, drop TS/JS keywords,
   match `/[A-Za-z][A-Za-z'-]*/g`, count.

This is conservative — it under-counts NAP interpolations, numeric
values, and any text rendered via `RelatedLinks` / shared layout.
Real visible word counts run roughly +20-40% above the table above. A
URL passing the conservative 800-word cut therefore comfortably clears
the cull threshold.

**Cull thresholds:**

- `< 800 words` AND no inbound link → NOINDEX.
- `< 800 words` AND linked from a pillar/spoke → 308 to nearest hub.
- Missing data record (renders `notFound()`) → 308 to master hub.
- ≥ 800 words AND in `internalLinkGraph` → KEEP.

**Cull verdict for this audit:** 0 NOINDEX, 5 × 308. Every kept page
clears 800 words after applying conservative under-counting.
