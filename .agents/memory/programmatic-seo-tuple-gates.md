---
name: Programmatic SEO tuple gates
description: Release safeguards for restored programmatic URL corpora and their sitemap dates
---

Admit restored programmatic routes by exact path tuples from the authoritative URL
ledger, never by independently allowlisting each location, industry, and service
segment.

**Why:** Segment-level checks silently create a Cartesian product of valid-looking,
self-canonical pages that were never in the historical corpus. A release review
caught this before preview deployment. A material restoration must also use its
actual release date as sitemap `lastmod`; original dates are provenance, not the
latest significant modification.

**How to apply:** Before preview and again before production, prove the exact
admitted tuple counts statically, crawl every advertised URL for status, robots,
canonical, content depth, and cluster links, and include negative HTTP controls
for representative valid-segment/non-ledger combinations.