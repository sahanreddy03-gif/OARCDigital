# SEO Drip-Feed Rollout Calendar
**Maintained by:** OARC Digital SEO governance  
**Rule:** Maximum 10 new programmatic pages per rolling 7-day window  
**Reference:** `.local/seo/programmatic-audit.md`

---

## Why drip-feed?

Google flags sudden bulk-publication of programmatic pages as a spam signal. The `audit-sitemap.ts` gate check already catches the "every URL has today's date" variant. The drip-feed rule is the *publication-rate* complement: even if dates are spread across a sitemap, submitting 150 new pages in one IndexNow ping is a pattern Google associates with low-quality auto-generated content farms.

**Safe window:** 10 pages per 7-day rolling window is based on the observed safe rate for fresh agency domains in the 3–10 DA range. Revisit if DA reaches 20+.

---

## Current Inventory (as of 2026-05-26)

| Status | Count | Cluster |
|---|---|---|
| Indexed (KEEP) | 121 | 44 AEO + 17 industry + 10 Malta hub + 50 Malta loc×svc |
| NOINDEX (thin) | 150 | Malta loc×ind×svc |
| 308 redirect | 4 | Industry hubs pending content build |
| **Total programmatic surface** | **275** | |

---

## Calendar

### Sprint May-C (2026-05-26 → 2026-06-07) — CURRENT

**Goal:** Apply Task #221 cull (already done in this sprint).

- [x] NOINDEX applied to 150 `/malta/{loc}/{ind}/{svc}` pages
- [x] 150 entries removed from `sitemap-malta.xml`
- [x] `programmatic-audit.md` authored
- [ ] IndexNow ping with updated sitemap (trigger on next deploy)

**New pages added this window:** 0

---

### Sprint June-A (2026-06-01 → 2026-06-07)

**Goal:** Decide on 4 pending industry hubs.

Tasks:
1. Review content quality of `legal-services`, `professional-services`, `beauty-wellness`, `nonprofits-ngos` content records in `app/industries/[industry]/page.tsx`
2. If each has ≥800 user-visible words: remove slug from `INDUSTRY_HUBS_PENDING_CONTENT` and add to `sitemap-industries.xml` (max 4 pages — well within 10-page limit)
3. If any are thin: leave as 308 and queue for a content build sprint

**New pages to add (if promoted):** 0–4 (industry hubs)  
**Remaining budget this window:** 10

---

### Sprint June-B (2026-06-08 → 2026-06-14)

**Goal:** Pilot content-expanded loc×ind×svc pages.

Tasks:
1. Select 5 high-value loc×ind×svc combinations as pilot (e.g., `valletta/restaurant/social-media-creative-management`, `sliema/hotel/web-design`, `st-julians/restaurant/paid-advertising`, `birkirkara/real-estate/seo-services`, `mosta/hotel/ai-consulting`)
2. Expand each to ≥800 user-visible words with unique industry narrative
3. Lift NOINDEX for only those 5 pages (conditional flag, not global)
4. Add only those 5 to `sitemap-malta.xml`
5. Run gate:fast; deploy

**New pages to add:** 5  
**Remaining budget this window:** 5 (reserve for emergency re-indexing)

---

### Sprint July-A (2026-07-01 → 2026-07-07)

**Goal:** Assess pilot; decide on bulk expansion strategy.

Criteria to continue bulk lift:
- Pilot 5 pages: average position ≤25 within 21 days of indexing (GSC data)
- No HCU signal in Search Console (impression drop on existing pages)
- Crawl budget (GSC → Settings → Crawl Stats) not degraded

If criteria met: expand by 10 more loc×ind×svc pages (next batch: remaining Valletta + Sliema combinations).  
If criteria not met: hold expansion and invest in content depth first.

**New pages to add (if green light):** 10  
**Remaining budget this window:** 0

---

### Sprint July-B (2026-07-08 → 2026-07-14)

**Goal:** Batch 3 — 10 more loc×ind×svc pages.

Same criteria check as July-A before publishing.

**New pages to add:** 10

---

### Ongoing cadence (Q3–Q4 2026)

Repeat every 7 days: +10 loc×ind×svc pages per window until all 150 are expanded to ≥800 words or until GSC data shows diminishing returns.

At 10 per 7-day window: **full 150-page expansion = 15 sprints = ~15 weeks** (target: September 2026).

Accelerate to 15 per 7-day window if DA reaches 20+ or GSC confirms strong indexing velocity (>80% of submitted URLs indexed within 7 days).

---

## Governance Rules

### Trigger checklist before adding any new programmatic page

- [ ] Source word count ≥800 (run `wc -w` on the component file, or count visible text from rendered HTML)
- [ ] Unique title tag (no duplicate with existing indexed pages — run `audit-canonical.ts`)
- [ ] Canonical URL is the page's own URL (no self-referencing 308)
- [ ] Schema markup present (at minimum: LocalBusiness + BreadcrumbList)
- [ ] Page passes gate:fast (14/14 checks)
- [ ] Added to restore.json (or equivalent static-params file) BEFORE adding to sitemap
- [ ] Sitemap lastmod reflects the actual content date (NOT today unless content was genuinely written today)

### Trigger checklist before REMOVING a noindex or 308

- [ ] Content depth meets ≥800 word threshold
- [ ] No competing canonical page already indexed for the same intent
- [ ] IndexNow ping queued post-deploy
- [ ] Sitemap updated in the same commit

### Emergency rollback

If Search Console shows a sudden impression drop (>20% week-over-week on existing pages) after a programmatic batch:
1. Re-apply `robots: { index: false }` to the new batch
2. Remove from sitemap in the same commit
3. Submit updated sitemap via IndexNow
4. Wait 4 weeks before re-attempting

---

## Location Tiers for Future Expansion

When expanding beyond the current 10 kept locations, add in this order (based on Malta business density and search volume):

| Tier | Locations | Priority |
|---|---|---|
| Current (Tier 1) | valletta, sliema, st-julians, birkirkara, mosta, qormi, zabbar, san-gwann, gzira, hamrun | Active |
| Tier 2 | attard, msida, marsaskala, naxxar, paola, fgura, ta-xbiex | +10/sprint when ready |
| Tier 3 | mellieha, rabat, mdina, floriana, marsaxlokk | +10/sprint when ready |
| Tier 4 (archived) | swieqi, pembroke, balzan, lija, birzebbuga, zejtun, ... | Low priority |

Add each new location to `maltaLocations` in `shared/seoConfig.ts` and populate `locationProfiles` in `lib/seo/locationData.ts` before adding to sitemap. Run `scripts/restore-gen.ts` to regenerate `restore.json`.

---

*Last updated: 2026-05-26 — Task #221 (Programmatic cluster cull)*
