# GSC URL Inspection — Re-indexing Playbook

**Owner:** SEO infra
**Last revised:** 2026-05-10
**When to use:** any time a high-priority URL has been edited or
restored and you need it re-crawled in hours instead of days.

## Tool order (cheapest first)

Always work down this list — each step is more manual than the last,
so only escalate if the prior step didn't deliver re-crawl within its
SLA.

### 1. IndexNow ping (Bing + Yandex + DuckDuckGo)

**SLA:** crawl within minutes; index within hours.
**Cost:** zero, fully automated.

This already fires on every production deploy via
`scripts/index-now-ping.ts` (delta-mode by default — only changed
URLs are submitted alongside the sitemap). For an out-of-band ping
(content edit between deploys, no rebuild):

```bash
# Ping a specific URL right now:
npx tsx scripts/index-now-ping.ts https://oarcdigital.com/services/seo-services

# Ping the sitemap + homepage only (forces re-crawl of the index):
npx tsx scripts/index-now-ping.ts
```

After running, verify the marker:

```bash
npx tsx scripts/verify-indexnow.ts --max-age-hours=1
```

### 2. Google Search Console — URL Inspection

**SLA:** crawl within hours; index within 24-72h. Hard quota: ~10
"Request Indexing" submissions per property per day.
**Cost:** ~30s per URL, manual.

Use this for Google specifically (IndexNow does not cover Google).

1. Open https://search.google.com/search-console/
2. Select the `https://oarcdigital.com/` property.
3. Paste the full URL into the top search bar (the URL Inspection
   tool). Wait for the live data to load.
4. Click **Test Live URL** → wait for the live test to complete →
   confirm the page passes (HTTP 200, indexable, no robots block,
   canonical points to itself).
5. If green: click **Request Indexing**. Google queues a priority
   crawl. Typical re-index is 24-72h.
6. If red:
   - "Crawled — currently not indexed" → likely a quality/duplicate
     signal. Check that the URL has unique title, meta description,
     ≥1,200 words user-visible content (the audit-framework gate
     enforces this for AEO/Malta pages), and is linked from at least
     one Tier-1/2 page. Fix, deploy, re-submit.
   - "Discovered — currently not indexed" → Google saw the URL but
     hasn't crawled it. Boost internal links from higher-authority
     pages (homepage, /services, /case-studies) and re-submit.
   - "Page with redirect" → middleware is catching it. Check
     `middleware.ts` and `lib/seo/seoSets.ts`.

**Daily quota tip:** prioritise the four Tier-1 pillars (`/`,
`/creative`, `/ai-agents`, `/solutions`) first, then top-nav Tier-2,
then anything with a same-day content edit.

### 3. Bulk re-submission via Sitemap re-ping

**SLA:** discovery within 1-7 days.
**Cost:** zero.

If 10+ URLs need re-indexing (e.g. a slug-collision cleanup batch),
don't burn the URL Inspection quota. Instead:

1. Confirm the new URLs are in the appropriate child sitemap
   (`/sitemap-services.xml`, `/sitemap-aeo.xml`, etc).
2. In GSC → Sitemaps, **resubmit** the parent `sitemap.xml`. Google
   re-fetches the index and discovers the children.
3. IndexNow handles Bing/Yandex automatically on the next deploy.

### 4. Internal-link boost

**SLA:** 1-3 weeks (only useful as a long-tail signal).
**Cost:** edit time.

For a stubborn URL that won't index:

- Add it to `lib/seo/internalLinkGraph.ts` so it picks up cross-links
  from related pages.
- Link it from a Tier-1/2 page's prose (not just nav).
- Add it to the relevant section of `public/llms-full.txt` so AI
  answer engines surface it.

## When something goes wrong

### "I deployed but Bing isn't seeing the change"

```bash
# Confirm the ping fired in the last deploy:
npx tsx scripts/verify-indexnow.ts

# If marker is stale or missing, re-run the ping manually:
npx tsx scripts/index-now-ping.ts --delta

# Then re-verify:
npx tsx scripts/verify-indexnow.ts --max-age-hours=1
```

If the ping itself succeeded (`endpointsOk > 0`) but Bing still hasn't
re-crawled within 6h, check Bing Webmaster Tools → URL Inspection for
the specific URL and resubmit there.

### "Google de-indexed a URL after a slug-collision merge"

Expected for the losing slug — the 308 redirect carries equity to the
canonical winner. Verify:

1. The losing slug 308s to the winner: `curl -sI https://oarcdigital.com/<old-slug>`.
2. The winner is still indexed: GSC URL Inspection on the winner.
3. The winner's content absorbs the losing slug's intent (title,
   H1, meta description cover the old keyword).

If all three are green, the de-indexing is correct behaviour. Do not
"fix" it.

### "A non-owned domain is ranking #1 for OARC Digital"

This is a branded-SERP defence emergency. See
`lib/seo/branded-serp.md`. Steps:

1. Confirm the non-owned slot persists across two consecutive monthly
   audits (single-audit drops are normal SERP churn).
2. Trigger a recovery sprint: fresh content on whichever owned page
   should hold that slot, IndexNow re-ping, GSC manual re-index for
   the four Tier-1 pillars + the displaced page.
3. If the impostor is misrepresenting OARC, file a Google
   trademark-misuse report (https://support.google.com/legal/).

## SLA summary

| Tool                         | Bing/Yandex   | Google           | Manual cost   |
|------------------------------|---------------|------------------|---------------|
| IndexNow (auto on deploy)    | minutes       | not applicable   | zero          |
| IndexNow (manual one-off)    | minutes       | not applicable   | one shell cmd |
| GSC URL Inspection           | not applicable| 24-72h           | ~30s/URL      |
| GSC Sitemap resubmit         | not applicable| 1-7 days         | one click     |
| Internal-link boost          | not applicable| 1-3 weeks        | edit time     |

## Related files

- `lib/indexNow.ts` — IndexNow client (key + endpoints).
- `scripts/index-now-ping.ts` — post-deploy ping (writes the marker).
- `scripts/verify-indexnow.ts` — asserts the marker is recent.
- `app/sitemap.xml/route.ts` — index referencing 8 child sitemaps.
- `lib/seo/seoSets.ts` — REDIRECTING_SERVICE_SLUGS,
  NOINDEX_SERVICE_SLUGS, CROSS_SECTION_ALIASES.
- `lib/seo/organizationSchema.ts` — ORG_SAMEAS (Knowledge Panel feed).
- `lib/seo/branded-serp.md` — branded-SERP defence audit.
