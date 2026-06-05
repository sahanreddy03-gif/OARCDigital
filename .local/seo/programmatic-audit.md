# Programmatic Page Audit — Cluster Cull
**Date:** 2026-05-26  
**Author:** Task #221 (automated audit pass)  
**Scope:** All programmatic pages — /aeo/*, /malta/*, /industries/*  
**Total audited:** 274 URLs (44 AEO + 20 industry hubs + 210 Malta)

---

## Summary Table

| Cluster | Total | KEEP (indexed) | NOINDEX | 308 redirect | Notes |
|---|---|---|---|---|---|
| AEO `/aeo/*` | 44 | 44 | 0 | 0 | All 1,080–1,332 words; all KEEP |
| Industry hubs `/industries/*` | 21 | 17 | 0 | 4 | Includes master `/industries` index |
| Malta hubs `/malta/{loc}` | 10 | 10 | 0 | 0 | Unique per-location content |
| Malta loc×svc `/malta/{loc}/{svc}` | 50 | 50 | 0 | 0 | Unique parameterised content |
| Malta loc×ind×svc `/malta/{loc}/{ind}/{svc}` | 150 | 0 | 150 | 0 | **Thin — see §4** |
| **TOTAL** | **275** | **121** | **150** | **4** | |

> The 275 figure includes the `/industries` master index page.

---

## §1 — AEO Pages (`/aeo/*`) — 44 pages — ALL KEEP

All 44 AEO pages are individually authored flat files under `app/aeo/`. Every page has a dedicated `PageContent.tsx` with word counts ranging **1,080–1,332 words** in source (user-visible content ~700–1,000+ words after template stripping).

**Verdict: KEEP (index)**. No action required. AEO sitemap (`/sitemap-aeo.xml`) emits all 44 at priority 0.85.

### Full AEO slug list (verdict: KEEP for all)

| Slug | Source words | Verdict |
|---|---|---|
| ai-agency-malta | 1,119 | KEEP |
| ai-agents-business-malta | 1,125 | KEEP |
| ai-chatbot-malta | 1,306 | KEEP |
| app-development-malta | 1,278 | KEEP |
| best-marketing-agency-malta | 1,194 | KEEP |
| branding-agency-malta | 1,104 | KEEP |
| content-creation-malta | 1,157 | KEEP |
| crm-automation-malta | 1,217 | KEEP |
| custom-software-malta | 1,298 | KEEP |
| digital-marketing-agency-malta | 1,196 | KEEP |
| digital-transformation-malta | 1,231 | KEEP |
| ecommerce-malta | 1,144 | KEEP |
| hospitality-360-malta | 1,156 | KEEP |
| hospitality-360-system | 1,175 | KEEP |
| hotel-marketing-malta | 1,154 | KEEP |
| igaming-marketing-malta | 1,156 | KEEP |
| influencer-marketing-malta | 1,123 | KEEP |
| instagram-marketing-malta | 1,144 | KEEP |
| marketing-agency-birkirkara | 1,133 | KEEP |
| marketing-agency-gzira | 1,240 | KEEP |
| marketing-agency-mellieha | 1,205 | KEEP |
| marketing-agency-mosta | 1,233 | KEEP |
| marketing-agency-paola | 1,234 | KEEP |
| marketing-agency-qormi | 1,223 | KEEP |
| marketing-agency-sliema | 1,146 | KEEP |
| marketing-agency-st-julians | 1,134 | KEEP |
| marketing-agency-swieqi | 1,224 | KEEP |
| marketing-agency-valletta | 1,166 | KEEP |
| marketing-automation-malta | 1,155 | KEEP |
| mobile-app-developers-malta | 1,287 | KEEP |
| outsource-development-malta | 1,332 | KEEP |
| paid-advertising-malta | 1,132 | KEEP |
| pos-systems-malta | 1,122 | KEEP |
| restaurant-marketing-malta | 1,143 | KEEP |
| saas-development-malta | 1,300 | KEEP |
| seo-agency-malta | 1,166 | KEEP |
| social-media-agency-malta | 1,173 | KEEP |
| software-development-malta | 1,262 | KEEP |
| tiktok-marketing-malta | 1,119 | KEEP |
| video-production-malta | 1,082 | KEEP |
| web-design-malta | 1,080 | KEEP |
| web-development-agency-malta | 1,264 | KEEP |
| website-development-malta | 1,127 | KEEP |
| whatsapp-automation-malta | 1,277 | KEEP |

---

## §2 — Industry Hub Pages (`/industries/*`) — 20 slugs + 1 master

Template: `app/industries/[industry]/page.tsx` (dynamic) + 5 static overrides.  
The 5 static routes take Next.js precedence over the dynamic segment.

### Static routes (fully bespoke pages — KEEP)

| Path | File | Verdict |
|---|---|---|
| `/industries` | `app/industries/page.tsx` | KEEP |
| `/industries/fintech` | `app/industries/fintech/page.tsx` | KEEP |
| `/industries/igaming` | `app/industries/igaming/page.tsx` | KEEP |
| `/industries/real-estate` | `app/industries/real-estate/page.tsx` | KEEP |
| `/industries/restaurants` | `app/industries/restaurants/page.tsx` | KEEP |
| `/industries/healthcare-clinics` | `app/industries/healthcare-clinics/page.tsx` | KEEP |

### Dynamic route — active (KEEP)

These 11 slugs have content records in the `industries` Record in the dynamic template and are NOT in `INDUSTRY_HUBS_PENDING_CONTENT`. They render fully.

| Slug | Verdict |
|---|---|
| hotels | KEEP |
| cafes | KEEP |
| bars | KEEP |
| retail | KEEP |
| ecommerce | KEEP |
| fitness | KEEP |
| wellness | KEEP |
| events | KEEP |
| construction | KEEP |
| automotive | KEEP |
| education | KEEP |

### Dynamic route — pending content build (308 → `/industries`)

These 4 slugs are in `INDUSTRY_HUBS_PENDING_CONTENT` in `lib/seo/seoSets.ts`. Middleware 308-redirects them to `/industries` before the renderer fires. They are excluded from `sitemap-industries.xml`.

> **Note (2026-05-26):** Content records for all 4 now exist in the `industries` Record of the dynamic template. They COULD be promoted by removing them from `INDUSTRY_HUBS_PENDING_CONTENT`. However, per the cull mandate the conservative action is to leave them as 308 until a dedicated content-quality review is done. Schedule: see `§6 Drip-Feed Governance` and the rollout calendar at `.local/seo-rollout-calendar.md`.

| Slug | Status | Action |
|---|---|---|
| legal-services | has content record | 308 → `/industries` (pending review) |
| professional-services | has content record | 308 → `/industries` (pending review) |
| beauty-wellness | has content record | 308 → `/industries` (pending review) |
| nonprofits-ngos | has content record | 308 → `/industries` (pending review) |

---

## §3 — Malta Location Hub Pages (`/malta/{loc}`) — 10 pages — ALL KEEP

Template: `app/malta/[location]/page.tsx`  
Content generator: `buildLocationHubContent()` in `lib/seo/generateUniquePageContent.ts`

Each of the 10 kept locations gets a full hub page with:
- Location-specific H1, intro paragraph, and "About" section
- Local challenges (3–4 unique bullet points per location)
- Marketing opportunities (3–4 unique bullet points per location)
- Service card grid (5 cards linking to `/malta/{loc}/{svc}`)
- CTA section

**Verdict: KEEP (index).** Content is sufficiently unique and location-differentiated. Sitemap emits all 10 at priority 0.8.

### Location hubs (verdict: KEEP for all 10)

| Location slug | Verdict |
|---|---|
| valletta | KEEP |
| sliema | KEEP |
| st-julians | KEEP |
| birkirkara | KEEP |
| mosta | KEEP |
| qormi | KEEP |
| zabbar | KEEP |
| san-gwann | KEEP |
| gzira | KEEP |
| hamrun | KEEP |

---

## §4 — Malta Location × Service Pages (`/malta/{loc}/{svc}`) — 50 pages — ALL KEEP

Template: `app/malta/[location]/[slug]/page.tsx`  
Content generator: `buildLocationServiceContent()` in `lib/seo/generateUniquePageContent.ts`

50 pages = 10 locations × 5 services (`social-media-creative-management`, `seo-services`, `paid-advertising`, `web-design`, `ai-consulting`).

Each page has:
- Location + service specific H1 and hero intro
- "Why this service matters in [location]" paragraph
- Differentiated features list
- Pricing from (location-adjusted)
- 4–6 parameterised FAQs (fully unique per loc×svc tuple)
- Case study hook + testimonial

**Verdict: KEEP (index).** Content is sufficiently unique and commercially valuable (specific service intent in a specific location). Sitemap emits all 50 at priority 0.7.

---

## §4 — Malta Location × Industry × Service Pages (`/malta/{loc}/{ind}/{svc}`) — 150 pages — NOINDEX

Template: `app/malta/[location]/[slug]/[service]/page.tsx`  
Content generator: `buildLocationIndustryServiceContent()` in `lib/seo/generateUniquePageContent.ts`

150 pages = 10 locations × 3 industries (`restaurant`, `hotel`, `real-estate`) × 5 services.

### Content analysis

Each page generates:
- H1 (1 sentence, parameterised)
- Hero intro (1–2 sentences)
- Challenge paragraph (~50–80 words)
- Service description (static per service, ~40–60 words)
- Service deliverable (3 bullet phrases joined)
- Opportunity paragraph (~50–80 words)
- 6 FAQs (3 service-FAQs + 2 industry-FAQs + 1 pricing-FAQ, all parameterised)
- CTA block

**Estimated user-visible word count per page: ~300–500 words.** While the content IS uniquely parameterised per (loc, ind, svc) tuple, the total word count at this combination depth is thin by Google Helpful Content Update standards. The risk is:

1. **Thin-content dilution** — 150 pages at ~400 words each signals low effort to crawlers.
2. **Combinatorial over-indexing** — 150 pages compete with 50 stronger `/malta/{loc}/{svc}` pages for the same service-intent queries with an industry modifier that adds marginal differentiation.
3. **Domain Authority risk** — a large proportion of thin indexed pages can apply a site-wide HCU penalty to all 54 service pages and 44 AEO pages.

### Actions applied (Task #221)

1. **NOINDEX applied** — `robots: { index: false, follow: true }` added to `generateMetadata()` in the template. Pages remain accessible and linkable but will not be indexed.
2. **Removed from sitemap** — `sitemap-malta.xml` no longer emits the 150 `/malta/{loc}/{ind}/{svc}` entries. The sitemap now emits 60 Malta URLs (10 hub + 50 loc×svc) instead of 210.

### Future pathway to promote these pages to KEEP

To promote these 150 pages to KEEP (indexed) in a future sprint:
1. Expand each page's content to ≥800 user-visible words with location + industry narrative
2. Add at least one unique section per industry tier (e.g., restaurant-specific case study block)
3. Remove `robots: { index: false, follow: true }` from the template
4. Add the 150 entries back to `sitemap-malta.xml`
5. Run gate:fast to verify

---

## §5 — Sitemap Coverage After Task #221

| Sitemap | Before | After | Delta |
|---|---|---|---|
| `/sitemap-aeo.xml` | 44 | 44 | 0 |
| `/sitemap-industries.xml` | 17 (incl. master) | 17 | 0 |
| `/sitemap-malta.xml` | 210 | 60 | −150 |
| **Total** | **271** | **121** | **−150** |

---

## §6 — Drip-Feed Governance

See `.local/seo-rollout-calendar.md` for the full schedule.

**Core rule:** No more than **10 new programmatic pages per rolling 7-day window** (Google spam-signal threshold). New programmatic pages must:

1. Have ≥800 user-visible words before being added to the sitemap
2. Be added to `restore.json` (or equivalent static-params list) first
3. Be allowed 4 weeks of crawl budget before performance measurement
4. Pass gate:fast before deploy

**Next scheduled promotions:**

| Window | Action |
|---|---|
| Sprint June-A (2026-06-01) | Review 4 pending industry hubs for KEEP promotion |
| Sprint June-B (2026-06-15) | Expand 5 loc×ind×svc pages as pilot; NOINDEX lifted on those only |
| Sprint July-A (2026-07-01) | Assess pilot performance; proceed or pause further expansions |

---

## §7 — Redirect Map for Zero-Value Pages (308s)

All 308 redirects are implemented in `middleware.ts` and documented in `lib/seo/seoSets.ts`:

| Source | Target | Set | Status |
|---|---|---|---|
| `/industries/legal-services` | `/industries` | `INDUSTRY_HUBS_PENDING_CONTENT` | Active |
| `/industries/professional-services` | `/industries` | `INDUSTRY_HUBS_PENDING_CONTENT` | Active |
| `/industries/beauty-wellness` | `/industries` | `INDUSTRY_HUBS_PENDING_CONTENT` | Active |
| `/industries/nonprofits-ngos` | `/industries` | `INDUSTRY_HUBS_PENDING_CONTENT` | Active |
| `/services/ai-revenue-engine` | `/services/revenue-automation` | `SERVICE_ALIASES` | Active |
| `/services/funnel-optimization-agent` | `/services/funnel-automation` | `SERVICE_ALIASES` | Active |
| `/services/rapid-idea-testing` | `/services/idea-validation-engine` | `SERVICE_ALIASES` | Active |
| (+ 8 more in SERVICE_ALIASES) | — | `SERVICE_ALIASES` | Active |

Full redirect map: `lib/seo/seoSets.ts` (`SERVICE_ALIASES`, `CROSS_SECTION_ALIASES`, `LOCATION_SERVICE_ALIASES`, `ARCHIVED_LOCATION_REDIRECTS`, `INDUSTRY_REDIRECTS`).

---

*Last updated: 2026-05-26 — Task #221 (Programmatic cluster cull)*
