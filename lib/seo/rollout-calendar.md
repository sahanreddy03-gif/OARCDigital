# SEO Drip-Feed Rollout Calendar

**Owner:** SEO/AEO programme  
**Cap:** 10 new indexable URLs per rolling 7-day window  
**Why:** A bulk-publish spike (>10 new URLs/week) reads as low-quality
mass content to Google's spam classifiers. Our drip-feed cap keeps the
crawl-budget signal honest and lets each new page accumulate inbound
internal links before the next batch ships.

**Scope of the cap:** Any URL that becomes indexable for the first time
counts. This includes: new `/services/<slug>/`, new `/aeo/<slug>/`, new
`/industries/<slug>/` (when its data record ships), new `/malta/...`
URLs added to `restore.json`, new pillar pages, new case studies, and
new `/blog/<slug>/` articles. Content rebuilds on already-indexable URLs
(e.g. Task #115 Phase D content lift) do NOT count — the URL was
already in the index, only the body changed.

**Audit hook:** Maintain this calendar by hand on each ship. The audit
expectation: the rolling 7-day count of "Date" entries below, summed
over their "Count" column, never exceeds 10. Reviewer enforces this at
PR time when adding a new sitemap entry.

---

## Rolling window check (since 2026-04-15)

| Date | Cluster | URLs added | Count | Notes |
|---|---|---|---|---|
| 2026-04-21 | `/malta/...` | 210 KEPT URLs locked into restore.json | n/a | One-time foundation lock, not a drip event. Post-lock cap applies forward. |
| 2026-05-04 | `/services` consolidation (Task #116) | 10 hard-kill 308s | 0 | Removals, not additions — cap unaffected. |
| 2026-05-10 | `/aeo/*` Phase D (Task #115) | 0 new URLs (11 rebuilt) | 0 | Content lift on existing AEO URLs; cap unaffected. |
| 2026-05-10 | `/industries/<slug>` cull (Task #138) | 0 new URLs (5 → 308) | 0 | Removals, not additions. real-estate stays live (dedicated static route). |

**Current rolling 7-day count:** **0 of 10**. Plenty of headroom for
the next 5 industry hub builds (healthcare-clinics, legal-services,
professional-services, beauty-wellness, nonprofits-ngos) once their
content records ship — schedule them at most 5 per week to stay inside
the cap with margin.

---

## Forward schedule (planned)

| Target date | Cluster | URLs to add | Notes |
|---|---|---|---|
| TBD | `/industries/healthcare-clinics` | 1 | Tier-2 industry hub, has 1 case study available. Highest priority of the 5 pending. |
| TBD | `/industries/legal-services` | 1 | Tier-2 industry hub. |
| TBD | `/industries/professional-services` | 1 | Tier-2 industry hub, 4 case studies available. |
| TBD | `/industries/beauty-wellness` | 1 | Tier-2 industry hub, 4 case studies available. |
| TBD | `/industries/nonprofits-ngos` | 1 | Tier-2 industry hub. |

When ready to ship a hub:
1. Add the data Record entry in `app/industries/[industry]/page.tsx`.
2. Drop the slug from `INDUSTRY_HUBS_PENDING_CONTENT` in
   `lib/seo/seoSets.ts`.
3. Append a row to "Rolling window check" above with `Count: 1`.
4. Verify the rolling 7-day total stays ≤ 10 before merging.

---

## Cap enforcement playbook

If a sprint needs >10 URLs, split the ship across 2 weeks:

- Week 1: ship 10. Internal-link-graph audit re-runs to wire the new
  pages into pillars + spokes.
- Week 2: ship the rest, plus a fresh `IndexNow` ping batch only after
  the previous batch has cycled through Google's index (check with
  `npx tsx scripts/verify-indexnow.ts`).

Hard fail: any single PR that adds >10 URLs to a sitemap requires
explicit Sahan approval recorded in the PR description.
