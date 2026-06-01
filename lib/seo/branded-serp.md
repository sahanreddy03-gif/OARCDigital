# Branded SERP Defence — "OARC Digital"

**Owner:** SEO infra
**Last audited:** 2026-05-10
**Cadence:** monthly (set calendar reminder for the 10th)
**Source of truth for sameAs:** `lib/seo/organizationSchema.ts` → `ORG_SAMEAS`

## What this doc is

The branded query "OARC Digital" (and stem variants "OARC", "OARC.Digital",
"oarcdigital") is the single highest-conviction commercial keyword we will
ever rank for. Anyone typing it has already been pre-sold on the brand and
is one click away from converting. Owning **every** position on the first
page of Google for this query is the cheapest, highest-ROI SEO win
available — and the only defence against (a) impostor profiles, (b) ad
hijacking by competitors, and (c) AI Overviews citing third-party
listings instead of our own surfaces.

This doc tracks who currently owns positions 1–10, flags any non-owned
slot as an action item, and is the single artifact a rebuild can rebuild
the defence from if the SEO infra is ever lost.

## Audit method

1. Open Google in an incognito window (or, ideally, a fresh browser
   profile with no Google account signed in).
2. Set the locale to Malta (`gl=mt`) and language to English (`hl=en`).
   Quick way: `https://www.google.com/search?q=OARC+Digital&gl=mt&hl=en&pws=0`.
3. Record the top 10 organic results (skip ads, the local pack, and
   the Knowledge Panel — those are tracked separately below).
4. Repeat for `OARC` and `oarcdigital` (single token).
5. Cross-check on Bing (`https://www.bing.com/search?q=OARC+Digital&cc=mt`)
   because IndexNow gives us same-day visibility there.

## Current ownership snapshot (2026-05-10)

> Recorded from incognito Malta-locale searches. Update on the 10th of
> every month. Positions ±1 between audits is normal SERP churn — only
> flag a slot as "lost" if a non-owned domain holds it for two
> consecutive monthly audits.

### Google — query: `OARC Digital`

| # | URL                                              | Owned? | Notes                                                     |
|---|--------------------------------------------------|--------|-----------------------------------------------------------|
| 1 | https://oarcdigital.com/                         | ✅     | Homepage. Sitelinks: /services, /case-studies, /contact.  |
| 2 | https://oarcdigital.com/about                    | ✅     | Founder Person entity anchored here.                      |
| 3 | https://oarcdigital.com/case-studies             | ✅     | ItemList schema; pulls 7 cases.                           |
| 4 | https://oarcdigital.com/our-work                 | ✅     | Album/CreativeWork schema.                                |
| 5 | https://www.linkedin.com/company/oarc-digital    | ✅     | Company page. In ORG_SAMEAS.                              |
| 6 | https://www.instagram.com/oarcdigital/           | ✅     | In ORG_SAMEAS.                                            |
| 7 | https://oarcdigital.com/services                 | ✅     | Master services page.                                     |
| 8 | https://www.linkedin.com/in/sahanoarcdigital     | ✅     | Founder profile. In ORG_SAMEAS + Person.sameAs.           |
| 9 | https://oarcdigital.com/contact                  | ✅     | LocalBusiness schema with NAP.                            |
|10 | https://www.yellow.com.mt/oarc-digital_…         | ✅     | Malta directory. In ORG_SAMEAS.                           |

**Knowledge Panel:** present, sourced from Organization schema on `/`
(see `lib/seo/organizationSchema.ts`). Logo, founder, sameAs links all
resolve. No corrections pending.

### Google — query: `OARC` (single token)

Higher noise — competes with US-military "OARC" radio club and the
"Open Auto Racing Channel". Defensive posture: ensure positions 1–3
on the Malta-locale SERP are ours; positions 4–10 will mix.

| # | URL                                              | Owned? | Notes                                                     |
|---|--------------------------------------------------|--------|-----------------------------------------------------------|
| 1 | https://oarcdigital.com/                         | ✅     |                                                           |
| 2 | https://oarcdigital.com/about                    | ✅     |                                                           |
| 3 | https://www.linkedin.com/company/oarc-digital    | ✅     |                                                           |

### Bing — query: `OARC Digital` (cc=mt)

Bing surfaces fewer organic results but IndexNow gets us same-day
inclusion. Top 5 are all owned (homepage, /about, /services,
LinkedIn company, Instagram). No action items.

## Owned-profile audit

Every URL below MUST (a) be live, (b) carry profile photo + bio + at
least one piece of recent content/activity, (c) link back to
`https://oarcdigital.com/`. An empty/abandoned profile is worse than
no profile — AI answer engines read it as "fake entity created for
SEO".

| Profile                                                 | Live | Bio + photo | Recent activity | Links to oarcdigital.com | In ORG_SAMEAS |
|---------------------------------------------------------|------|-------------|-----------------|--------------------------|---------------|
| https://www.instagram.com/oarcdigital/                  | ✅   | ✅          | ✅              | ✅                       | ✅            |
| https://www.facebook.com/profile.php?id=61584491206896  | ✅   | ✅          | ✅              | ✅                       | ✅            |
| https://x.com/oarcdigital                               | ✅   | ✅          | ✅              | ✅                       | ✅            |
| https://www.linkedin.com/in/sahanoarcdigital            | ✅   | ✅          | ✅              | ✅                       | ✅            |
| https://www.linkedin.com/company/oarc-digital           | ✅   | ✅          | ✅              | ✅                       | ✅            |
| https://www.youtube.com/@oarcdigital                    | ✅   | ✅          | ⚠️ low         | ✅                       | ✅            |
| https://www.crunchbase.com/organization/oarc-digital    | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://www.yellow.com.mt/oarc-digital_…                | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://clutch.co/profile/oarc-digital                  | ✅   | ✅          | ⚠️ no reviews  | ✅                       | ✅            |
| https://www.goodfirms.co/company/oarc-digital           | ✅   | ✅          | ⚠️ no reviews  | ✅                       | ✅            |
| https://www.agencyspotter.com/oarc-digital              | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://theresanaiforthat.com/ai/oarc-digital-…         | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://toolhunt.io/oarc-digital-…                      | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://huntscreens.com/products/oarc-digital-…         | ✅   | ✅          | n/a (directory) | ✅                       | ✅            |
| https://cal.com/oarc-digital-srwvnv                     | ✅   | ✅          | n/a (booking)   | ✅                       | ✅            |

## Action items

1. **Crunchbase profile — LINKED in `ORG_SAMEAS`** at
   `https://www.crunchbase.com/organization/oarc-digital`. Operational
   owner must keep the page populated (logo, HQ Birkirkara/Malta,
   founding date 2023-01-01, founder Red, website, social
   links, ≥1 news/funding event so it isn't a stub). The
   `audit-org-sameas-live` step in `gate:full` will hard-fail any
   deploy if the URL ever 4xxs, so a removed/blocked profile cannot
   silently rot.
2. **YouTube cadence.** Channel exists and is linked but recent
   activity is low. Schedule one upload/quarter minimum (case-study
   walkthrough or service explainer) so the profile reads as active.
3. **Clutch + GoodFirms reviews.** Both profiles are live but carry
   zero reviews. Ask the three most-recent paying clients for a
   one-paragraph Clutch review (verified call). Two reviews each is
   the threshold where Clutch starts surfacing the profile in its
   own internal SERPs.
4. **Re-audit on the 10th of every month** and update the table dates
   above. Flag any slot lost to a non-owned domain — second
   consecutive month triggers a recovery sprint (fresh content on
   the slot's intended owner page + IndexNow re-ping + manual GSC
   re-index, see `reindex-playbook.md`).

## Why this matters

- Branded queries convert at 8-15× the rate of category queries.
  Losing one of the top-10 slots to an aggregator (or an impostor)
  is a direct revenue leak.
- AI Overviews and Perplexity-style answer engines disproportionately
  cite the top-3 organic results for an entity. A non-owned slot in
  positions 1–3 means a third party's framing of OARC ends up in the
  AI summary.
- Knowledge Panel completeness depends on `sameAs` links resolving to
  live, content-rich profiles. Each dead link in `ORG_SAMEAS` is a
  trust signal we throw away.
