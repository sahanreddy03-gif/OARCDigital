# OARC Digital — Malta SEO Rollout Calendar

**Anti-flag throttle**: 5–8 pages per week. Never burst more than 10 pages in any 7-day window. The previous 5,200-page programmatic push got flagged; every batch must publish at human-believable velocity.

**Gate before every batch publish**:
1. `npx tsx scripts/audit-core-57.ts` — must report zero critical failures across the canonical set.
2. `npx tsx scripts/verify-redirects.ts` — every previously-live URL must return 200 or 308.
3. Human edit pass — no AI-generated body copy ships without a human review on each page.
4. Rebuild + spot-check 3 random pages in the batch render without runtime errors.

**Last updated**: April 2026 (Task #68 baseline)

## Phase 0 — Foundational fixes (LANDED in Task #68)

- [x] NAP normalised to canonical Birkirkara CBD 2010 / +356 7971 1799 across pillar pages and `utils/structuredData.ts`.
- [x] Homepage FAQ Ta' Xbiex text replaced with Birkirkara.
- [x] Duplicate-slug 308 redirects for `/services/web-application-development`, `/services/mobile-applications-development`, `/services/api-integration` were already wired in `SERVICE_ALIASES`. `allServiceSlugs` cleaned of the alias source.
- [x] `scripts/verify-redirects.ts` extended to smoke-test `SERVICE_ALIASES`.
- [x] Keyword map (`.local/seo-keyword-map.md`) and this calendar documented.

## Deferred phases — drip schedule

The numbers below are **maximums per 7-day window**, not minimums. Slip rather than burst.

### Phase A — Service-page schema migration (8 weeks, ~7 pages/week)

55 service pages currently DO NOT use `RouteSchema`. Migrate each one to the same Service + LocalBusiness + Organization + AggregateRating + Offers + Breadcrumb graph the top-3 AEO pages already emit, and insert a `<RelatedLinks slug="..." />` block before the CTA.

| Week | Pages migrated | Audit gate                                |
| ---- | -------------- | ----------------------------------------- |
| W2   | 7              | audit-core-57 + verify-redirects pass     |
| W3   | 7              | "                                         |
| W4   | 7              | "                                         |
| W5   | 7              | "                                         |
| W6   | 7              | "                                         |
| W7   | 7              | "                                         |
| W8   | 7              | "                                         |
| W9   | 6              | "                                         |

Order priority: highest-traffic services first (web-design, social-media-creative-management, video-production, branding, paid-advertising, marketing-automation-suite, ai-sdr-agent), then development services, then the long tail.

### Phase B — Pillar composition (W4, 1 build week)

- `/software-development` — composed from existing MVP, Custom Software, Mobile Apps, Web Apps, API Integration, AI Consulting pages plus 4 software case studies. ~400 words of original framing + 8 FAQs + offers + RelatedLinks.
- `/automation` — rebuilt as a real composition hub from existing automation services + automation AEOs.
- Wire `/software-development` into the header nav.

Counts as 2 of W4's 7-page allowance.

### Phase C — 9 missing service pages (3 weeks, 3 per week)

| Week | Pages built                                                              |
| ---- | ------------------------------------------------------------------------ |
| W5   | seo-services, content-marketing, email-marketing                         |
| W6   | saas-development, ecommerce-development, wordpress-development           |
| W7   | shopify-development, devops-services, database-design                    |

Each: 1,000+ unique words, real Malta context, full schema graph, RelatedLinks, transparent pricing tile. Counts toward Phase A's weekly caps.

### Phase D — 11 missing AEO pages (4 weeks, ~3 per week)

| Week | Pages built                                                              |
| ---- | ------------------------------------------------------------------------ |
| W5   | saas-development-malta, mobile-app-developers-malta                      |
| W6   | web-development-agency-malta, outsource-development-malta                |
| W7   | custom-software-malta, marketing-agency-mosta                            |
| W8   | marketing-agency-qormi, marketing-agency-swieqi, marketing-agency-gzira  |
| W9   | marketing-agency-mellieha, marketing-agency-paola                        |

Each: 1,200+ words, full schema, RelatedLinks. Add to `lib/seo/internalLinkGraph.ts` AS IT SHIPS. Counts toward weekly caps.

### Phase E — 8 industries + master hub (3 weeks) — LANDED in Task #108

| Week | Industries added (data entries in `app/industries/[industry]/page.tsx`)   |
| ---- | ------------------------------------------------------------------------- |
| W7   | healthcare-clinics, legal-services, professional-services                 |
| W8   | construction, beauty-wellness, automotive                                 |
| W9   | education, nonprofits-ngos, plus rebuild `/industries` master hub         |

**Status (Task #108):** All 8 new industry hubs live; `/industries` master hub rebuilt with 19 entries, lucide icons, per-industry case-study counts, and CollectionPage + ItemList JSON-LD. Slug governance refactored: `industryHubSlugs` (19) added to `shared/seoConfig.ts` as a separate SoT from `maltaIndustries` (3 singulars used for `/malta/{loc}/{ind}`). Middleware `/industries/*` allow-list updated via new `KEPT_INDUSTRY_HUBS`. Legacy industry slugs (10) 308-redirect to canonical hubs. All 8 hubs added to `lib/seo/internalLinkGraph.ts` under the new `industry-hub` Hub type. `sitemap-industries.xml` regenerated to emit 20 `<loc>` entries.

**Follow-ups opened:** #109 (orphaned `/services/{svc}/{ind}` 410 — pre-existing inconsistency), #110 (cross-link the 8 new hubs from related service pages).

### Phase F — 30 industry × service cross-pages (4 weeks, ~7 per week)

Build `/industries/{industry}/{service}` for the highest-priority combinations. Each MUST have at least one industry-specific case study with named client + real metrics, plus 800+ words that can't be derived by template substitution. Either as new dynamic route with per-combo data files, OR static pages — pick the option that lets each page have genuinely unique content.

Priority combos:
- iGaming × AI agents, iGaming × paid advertising
- Real Estate × lead generation, Real Estate × video production
- Hospitality × booking automation, Hotels × email marketing
- Restaurants × social media, Restaurants × influencer
- Healthcare × patient communication, Healthcare × ai-support-specialist
- Legal × content marketing, Legal × seo-services
- Fintech × paid advertising, Fintech × marketing-automation-suite
- Retail × ecommerce-development, Retail × paid-advertising
- ...and 14 more spanning the remaining industry × service combinations driving the most search volume per Google Search Console.

### Phase G — Schema + trust hygiene (parallel, no extra weekly cap)

- Replace generic 4.9/47 `AggregateRating` on leaf service pages with verifiable per-page ratings (linked review URLs) OR drop AggregateRating from leaf pages and keep it only on `/` and the LocalBusiness graph node.
- Sitemap is already segmented (sitemap-core, sitemap-services, sitemap-malta, sitemap-industries, sitemap-case-studies, sitemap-aeo, sitemap-blog, image-sitemap). Submit each segment to Google Search Console.
- Add a "last updated" date stamp to every commercial page; wire a quarterly refresh checklist.

### Phase H — Off-page (operational, not code)

Run continuously alongside the on-page drip:

- 10+ Malta business-directory citations submitted (Times of Malta business, MaltaCEOs, Yellow Pages MT, BusinessNow.mt, etc.) in W1–W2.
- HARO / Connectively / Qwoted response cadence of 5 per week from W1.
- Pitch 2 guest posts per month to Malta business publications.
- Surface `/diagnostics` as a public free tool with its own landing page.
- Book 2 podcast appearances in the first 60 days.

### Phase I — Conversion tracking + reporting (W1, parallel)

- GA4 funnels from organic landing → form submission / Cal.com booking → CRM.
- Weekly rankings dashboard for the top 47 priority pages.
- Monthly attribution view: which 10 pages drive real revenue vs vanity rankings.

## Spot-check protocol

After every batch publish:

1. Run `npx tsx scripts/audit-core-57.ts` → archive the CSV report under `.local/audit-reports/audit-YYYY-MM-DD.csv`.
2. Run `npx tsx scripts/verify-redirects.ts` against the local dev server.
3. Random-sample 3 pages from the batch — fetch each, validate schema with Google Rich Results Test, eyeball the rendered page in dev.
4. Check internal-link graph: `lib/seo/internalLinkGraph.ts` validates every spoke at module load — a broken spoke throws in production.

## What we will NOT do

- Burst-publish more than 10 pages in any 7-day window. Period.
- Ship AI-generated copy without a human edit pass.
- Add new location slugs without updating `KEPT_LOCATIONS` and the redirect graph in the same change.
- Publish two pages targeting the same query intent. Expand the canonical instead.
- Skip the audit-core-57 gate before a batch publish, even "just this once".
