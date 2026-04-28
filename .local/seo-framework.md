# OARC Digital — SEO + Discovery Framework (binding)

**Status**: ACTIVE — every new page (and every page enriched in a drip batch) MUST satisfy this framework. Foundation + 6 layers. Each layer ships its own anti-flag mitigation. This document is the contract; `lib/seo/serviceSchemaConfig.ts` is its TypeScript enforcement; `scripts/audit-framework.ts` is its CI-style gate.

This framework lives **on top of**, not instead of, the existing anti-spam constraints in `replit.md` ("SEO Anti-Spam Constraints (Apr 2026)") and the drip schedule in `.local/seo-rollout-calendar.md`. Maximum 5–8 pages/week, never burst >10 in any 7-day window, anti-cannibalisation enforced by `.local/seo-keyword-map.md`.

---

## Reach surfaces we explicitly target

**7 search engines** (the rank surfaces that crawl us):

1. Google (primary)
2. Bing
3. DuckDuckGo (Bing-powered, but indexes independently)
4. Yahoo Search (Bing-powered)
5. Brave Search (own index)
6. Yandex (own index — relevant for EU/multilingual)
7. Ecosia (Bing-powered)

**7 answer engines / AI surfaces** (the citation surfaces that recommend us):

1. ChatGPT (with Bing/SearchGPT retrieval)
2. Anthropic Claude (with web tool)
3. Google Gemini / AI Overviews
4. Perplexity
5. Microsoft Copilot
6. You.com
7. Brave Leo (and adjacent: Kagi, Phind)

The framework's Layer 4 ("AI/LLM discoverability") is what makes the second list possible. The first list is largely covered by Layer 0 (foundation) + Layer 5 (distribution).

---

## Layer 0 — Foundation (traditional SEO, done right)

This is the base. No layer above is allowed to ship if the foundation is broken.

**Strategy**: Every page MUST have:
- Unique `<title>` and meta description (≤60 / ≤160 chars).
- One canonical URL via `metadata.alternates.canonical` AND a matching `og:url`. No mixed signals.
- One `<h1>` summarising the page's UVP (Layer 1).
- `<RouteSchema>` emitting at minimum: BreadcrumbList + Service/Article + FAQPage + Organization + LocalBusiness JSON-LD nodes, all sharing the canonical NAP (`Level 1, The Brewhouse, Birkirkara CBD 2010, +35679711799`, geo `35.8978, 14.4617`).
- Mobile-first responsive layout, LCP < 2.5s on 4G mobile, CLS < 0.1.
- Registered in `lib/seo/internalLinkGraph.ts` with ≥4 inbound links from related pages BEFORE the page is published.
- Listed in the auto-generated sitemap with the right priority and `lastmod`.

**Failure mode**: NAP drift, duplicate canonicals, missing schema, orphan pages, slow LCP, hard 404 on archived URLs.

**Anti-flag mitigation**: `scripts/audit-core-57.ts` (schema + word depth + inbound links) and `scripts/verify-redirects.ts` (108/108 alias 308s) are the two foundation gates. Both must pass before any drip batch ships.

---

## Layer 1 — Unique Value Proposition

**Why this layer exists**: Google's HCU (Helpful Content Update) and the scaled-content abuse policy specifically target pages that are interchangeable boilerplate. Every page must answer "why would a Malta buyer choose us for THIS specifically" in one sentence.

**Strategy**: Every entry in `SERVICE_SCHEMAS` (and equivalent `ARTICLE_SCHEMAS` / `AEO_SCHEMAS` when those tables ship) declares a `uniqueValueProp` field. The string MUST:
- Be unique across the entire `SERVICE_SCHEMAS` table (audit script enforces).
- Be specific enough that swapping it onto another page would be objectively wrong.
- Be the elevator-pitch anchor cited in `public/llms.txt` for AI answer engines.

The on-page surface for this layer is `entry.description` (the meta description, also injected into the Service JSON-LD `description`). The page H1 may use a tighter copy variant of this same idea. UVP-in-H1 is operational guidance for the writer, not an audit gate (we cannot reliably parse "an H1 that says the same thing" — only the meta + JSON-LD pair).

**Failure mode**: AI-generated boilerplate UVPs ("we help businesses grow" — flagged as scaled content). Duplicate UVPs across two service pages — Google picks one, kills the other.

**Anti-flag mitigation**: `scripts/audit-framework.ts` enforces (a) no duplicate UVP strings, (b) UVP is ≥40 chars and ≤180 chars; with `BASE` set, the live SSR check additionally enforces (c) `<meta name="description">` content equals `entry.description` AND (d) at least one Service JSON-LD node on `/services/<slug>` has `description === entry.description`.

---

## Layer 2 — Entity & Topical Authority (E-E-A-T)

**Why this layer exists**: Google's Knowledge Graph and LLM training corpora reward consistent entity reinforcement. Every page should make OARC Digital a stronger node in the "Malta marketing agency" topical cluster.

**Strategy**: Every entry declares `entityFocus` — the specific topic this page reinforces (e.g. "Conversion-focused web design (Malta)", "AI sales development agent (Malta SMB sales teams)"). On the page itself this means:
- Author block tied to a real Person entity (Sahan Reddy + named team only — never AI-byline).
- `sameAs` links in Organization JSON-LD pointing to verifiable profiles (LinkedIn, Instagram, YouTube, Google Business Profile).
- `knowsAbout` array on Organization listing the topical clusters we operate in.
- Where the page makes claims about results, those claims cite a real case study under `/our-work` or a named third-party source.
- `areaServed` set to Malta + the specific Maltese localities relevant to the page (drawn from `lib/seo/locationData.ts`).

**Failure mode**: Fake author bylines, made-up testimonials, AI-generated review schema — all flagged by Google's spam policies. Generic "we serve Europe" `areaServed` arrays dilute local relevance.

**Anti-flag mitigation**: All Author entities must point at a real `/team/<slug>` page (deferred follow-up to build the team pages). All review JSON-LD must reference a real Review entity tied to a named client. No exceptions.

---

## Layer 3 — Search Intent & Anti-Cannibalisation

**Why this layer exists**: Two pages competing for the same query both lose. The throttle alone doesn't solve cannibalisation — you need a per-page intent declaration so the keyword map can refuse a duplicate.

**Strategy**: Every entry declares:
- `primaryIntent` — one of `informational | navigational | commercial | transactional | local | comparative | alternative`.
- `generalizationKeywords` — the broad-match queries that should land here as the canonical answer. These are the "stumble upon" queries the brief calls out: a buyer searching "video production malta" lands on `/services/video-production` and is funnelled up to `/creative` or `/` from there.

The keyword map (`.local/seo-keyword-map.md`) is the single source of truth for "which canonical URL owns which query intent". Any new page proposed must add its row to the map BEFORE the schema entry is written. If the row already exists with a different URL, the new page is rejected.

**Failure mode**: Two `/services/*` pages both targeting "marketing automation malta" — Google picks one and demotes the other; both pages lose ranking.

**Anti-flag mitigation**: `scripts/audit-framework.ts` flags any (intent × generalisation-keyword) collision across the schema table. Keyword map review is part of every drip-batch checklist.

---

## Layer 4 — AI / LLM Discoverability

**Why this layer exists**: ChatGPT, Claude, Gemini, Perplexity, Copilot, You.com, and Brave Leo are increasingly the discovery surface — not Google. To be cited by an LLM, the page has to give the LLM something cite-able: a definitive claim, ideally with a number and a source.

**Strategy**: Every entry declares `llmCitableFacts` — 3 to 5 short, factual claims with optional source attribution. These claims:
- Are echoed verbatim in `public/llms.txt` (the LLM-targeted directory file) under the AUTOGEN block, regenerated by `scripts/generate-llms-txt-facts.ts`.
- Are formatted to be quotable: numeric where possible, with a clear subject ("OARC Digital ships brand films in 4–8 weeks at our Birkirkara studio").
- Should surface high in the page body (operational guidance: aim for the first ~150 words / "definitive answer block above the fold"). Placement is not auto-gated — it is the writer's responsibility checked at drip-batch QA.

Additionally:
- FAQPage schema with `speakable` markup (already in place via RouteSchema).
- HowTo schema where the page explains a process.
- llms.txt is regenerated on each drip batch and lists the canonical UVP for each updated page.

**Failure mode**: AI-generated marketing fluff with no concrete claims — LLMs ignore it because there's nothing quotable. Or, the opposite: fabricated statistics (e.g. "we've helped 10,000 Malta businesses") — flagged as misinformation, and once an LLM catches a hallucination it stops citing the source.

**Anti-flag mitigation**: `scripts/audit-framework.ts` enforces ≥3 entries per page, ≥30 char minimum claim length, ≥2 entries with a `source` URL per page, AND exact-block parity between SERVICE_SCHEMAS and the AUTOGEN section of `public/llms.txt` (any drift fails audit; fix is to re-run the generator). Sourcing every claim is operational guidance — the audit gate is ≥2 sourced per page so the page has at least two anchored, defensible claims.

---

## Layer 5 — Distribution & Internal-Link Authority

**Why this layer exists**: A page that no other page links to is invisible. A page with sudden inbound link spikes from low-quality sources is flagged as link manipulation.

**Strategy**:
- Internal: `lib/seo/internalLinkGraph.ts` is the authoritative graph. Every new page declares its outbound spokes AND has ≥4 inbound spokes registered before publish (audit-core-57 enforces).
- Every page must surface a `<RelatedLinks />` block before the final CTA, drawing from the link graph.
- External: only earn or partner-curate links. No PBN, no link injection, no comment spam, no link exchange schemes.
- PR-worthy assets (statistics, case studies with real numbers, original Malta-market research) are produced as Layer 4 by-product and pitched to Maltese tech / business press as the off-page distribution lever.

**Failure mode**: Orphan pages (zero inbound links), sudden inbound spikes from compromised sites, or reciprocal-link schemes — all flagged.

**Anti-flag mitigation**: audit-core-57 inbound check. No automated link-injection tooling exists in this codebase, and no such tooling will be added.

---

## Layer 6 — Conversion & UX-Trust

**Why this layer exists**: Search engines increasingly weight UX signals (Core Web Vitals, dwell, bounce, long-clicks). Pages optimised purely for ranking — with intrusive popups or aggressive CTAs — get demoted under "page experience" updates.

**Strategy**: Every entry declares `conversionGoal` — the single primary action this page drives toward. The page MUST have:
- Exactly one primary CTA in the hero, repeated near the end of the page. Secondary CTAs allowed in body but never above the primary.
- Visible Malta trust signals: NAP block, Google rating + review count (when ≥5 verified reviews exist), real client logos.
- No autoplay video with sound. No exit-intent popups. At most one modal CTA per session.
- LCP < 2.5s, INP < 200ms, CLS < 0.1 on 4G mobile.

**Failure mode**: Aggressive CTA density / intrusive interstitials → "annoying experience" demotion. Thin pages stuffed with CTAs but no real content → "doorway page" flag.

**Anti-flag mitigation**: word-count gate in audit-core-57 (already in place). Future Lighthouse-based perf gate (deferred follow-up).

---

## Per-page enforcement contract

Every entry in `lib/seo/serviceSchemaConfig.ts` (and the equivalent tables for `/aeo`, `/blog`, `/industries`, `/locations` when they ship) MUST carry a `framework` field with the following shape (TypeScript-enforced):

```ts
framework: {
  uniqueValueProp: string;            // Layer 1
  entityFocus: string;                // Layer 2
  primaryIntent: SearchIntent;        // Layer 3
  generalizationKeywords: string[];   // Layer 3 — ≥3
  llmCitableFacts: { claim: string; source?: string }[];  // Layer 4 — ≥3
  conversionGoal: string;             // Layer 6
}
```

Layers 0 and 5 are enforced separately (foundation gate + internal-link-graph gate).

---

## Drip-batch checklist (use this for every batch in `seo-rollout-calendar.md`)

Before any drip batch ships:

1. ☐ Every new entry has all `framework.*` fields populated, no boilerplate copy.
2. ☐ `npx tsx scripts/audit-framework.ts` passes (no duplicate UVPs, all required fields present).
3. ☐ `npx tsx scripts/audit-core-57.ts` passes (schema + word depth + inbound links).
4. ☐ `BASE=http://localhost:5000 npx tsx scripts/verify-redirects.ts` passes (currently 108/108).
5. ☐ `.local/seo-keyword-map.md` updated with the new canonical URL × intent rows.
6. ☐ `public/llms.txt` regenerated to include the new pages' UVPs and cite-able facts.
7. ☐ Manual content review by a human (no batch ships without it — this is the hard backstop against AI-generated spam).
8. ☐ Total pages added in the trailing 7-day window ≤ 8.

---

## Layer 0 enforcement — automated CI gate (Task #89, Apr 2026)

Layer 0 (foundation) is no longer enforced by humans alone. Automation now blocks the pipeline at three points: every commit, every Vercel deploy, every pre-push.

### Sitemap honesty
The deprecated `TODAY = new Date()` constant in `lib/seo/sitemapHelpers.ts` is replaced by `lastmodForPath()` / `lastmodForPaths()`, which derive each URL's `lastmod` from `git log -1 --format=%cd --date=short -- <path>` via `execFileSync("git", […])` (synchronous, build-time only since sitemap routes are `force-static`; in-process Map cache; argv-array invocation — no shell, no injection surface, dynamic-segment paths like `app/industries/[industry]/page.tsx` work without sanitisation). Falls back to a frozen `DEPLOY_BASELINE` constant when git has no record.

Each child sitemap route exports a `buildEntries()` function returning the `UrlEntry[]` it serves; its `GET()` wraps that. `getSitemapLastmod(name)` in `lib/seo/sitemapSources.ts` calls the same `buildEntries()` and returns `max(entry.lastmod)`, so the index `lastmod` equals the children's true max by construction. `image-sitemap.xml` is structurally different (one URL with `image:image` children) so it exposes `buildLastmod()` instead.

`scripts/audit-sitemap.ts` includes an `index ↔ children parity` check that re-derives `max(<lastmod>)` from each child's emitted XML and asserts it equals the index `<lastmod>` for that child. Defence-in-depth against any future refactor that splits the data source.

`scripts/audit-sitemap.ts` is a regression test: it loads every sitemap (including the index `sitemap.xml`), parses `<lastmod>` values, and FAILS any sitemap where one date covers >50% of URLs AND that date is today exactly (the spam tell of someone reintroducing `TODAY`). Bulk-committed historical dates (e.g. 100% of /malta on 2026-04-25) pass cleanly because the date is not today. Sitemaps with <5 URLs are exempt as statistically meaningless. Two execution modes: `static` (default) imports each route handler directly and invokes its `GET()` — no server required, runs at Vercel build time; `--http` hits the dev server and is used by `gate:full` against a running app.

### Three-tier gate (`scripts/seo-gate.sh`)
- **`gate:fast`** — Husky pre-commit. Server-free, ~10s budget. Runs: `tsc --noEmit`, `audit-framework`, `audit-schema --self-test` (negative-path fixture for nested PostalAddress + slot-exception positive path for OfferCatalog members — proves the recursive walker still catches genuine bugs and still suppresses the known false positive), `verify-redirects --static` (structural check + every redirect target points at a real `app/services/<slug>/` directory), AUTOGEN parity for `public/llms.txt` (`generate-llms-txt-facts.ts --check` — fails non-zero if the on-disk file would change after regeneration).
- **`gate`** — local CI / manual. Adds the slower server-free audits on top of `gate:fast`: `audit-core-57`, `audit-images`, `audit-sitemap (static)`.
- **`gate:full`** — Vercel build / pre-push. Wired via `vercel.json → buildCommand: "npm run gate:full && next build"`. Adds the HTTP smoke tests on top of `gate`: `verify-redirects (HTTP)`, `audit-sitemap --http`, `audit-nap` (canonical NAP drift gate — walks every emitted JSON-LD blob site-wide and asserts `addressLocality` ∈ `PERMITTED_NAP_LOCALITIES` with a URL-origin guard for the `Ta' Xbiex` allow; HTML-level heuristic mismatches downgraded to non-blocking warnings, JSON-LD-level drift remains hard-fail), and `audit-schema` (per-route required-property + nested-entity walker — uses `lib/seo/jsonLdExtract.ts` to enumerate every JSON-LD node, applies type-specific required-prop tables, exempts thin `{@id}` references via `REFERENCE_PARENT_SLOTS`, and exempts thin Service descriptors inside `OfferCatalog.itemListElement`). When the dev server is not reachable at `$BASE` (the case during a Vercel build), the HTTP steps are SKIPPED with a NOTE so the deploy still gates on every server-free audit. The skip is acceptable in CI because the static equivalents already cover the structural surface; locally Sahan's pre-push checklist is `npm run dev &; sleep 8; npm run gate:full` to exercise the full HTTP smoke.

### Canonical NAP single source of truth (Task #90, Apr 2026)
`lib/seo/nap.ts` is the only place the agency's address, phone, or email is authored. It is a pure module (no imports, no side effects, deeply frozen exports) so it can be safely consumed by JSON-LD config tables, server-side React components, audit scripts, and anything else without circular-dependency risk. Every other reference site-wide composes from `NAP.streetAddress` / `NAP.streetAddressShort` / `NAP.addressLocality` / `NAP.postalCode` / `NAP.phoneE164` / `NAP.phoneDisplay` / `NAP.email` / `ADDRESS_ONE_LINE` (the prose-friendly one-liner). Visit-tile, badges, and review-snippet UI live in `components/seo/TrustBlock.tsx` (variant-only API: `<TrustBlock variant="visit|badges|reviews" />`). FAQ/content prose in `lib/seo/serviceSchemaConfig.ts`, `lib/seo/pillarSchemaConfig.ts`, `app/api/chat/route.ts`, and `lib/research/data.ts` was migrated from hard-coded literals to template-literal `${NAP.*}` references on Apr 2026; `Ta' Xbiex` is permitted only in JSON-LD that originates from a `/aeo/*` or `/malta/*` URL whose slug is registered in `lib/seo/locationData.ts` (the URL-origin guard inside `audit-nap.ts`). When a NAP value changes, edit `nap.ts` once and run `gate:full`.

### Husky wiring
Husky v9.1.7 is installed as a `devDependency`, registered via `prepare: husky` in `package.json`. The `.husky/pre-commit` hook executes `npm run gate:fast`. `npx husky init` is NOT used — the hook file is hand-written so it does not rewrite our existing scripts.

### Bypass policy (binding — task-89 acceptance criterion)
Two escape hatches exist for the gate defined above. **Either bypass requires a Sahan-acknowledged justification line in the PR description.** A PR using either flag without `Sahan ack: yes` is not mergeable.

- **`HUSKY=0 git commit ...`** — skips the Husky pre-commit hook itself (`gate:fast`). Local-only; use only when committing intentionally-broken WIP to a feature branch, and follow with a clean commit before the PR opens.
- **`SKIP_SEO_GATE=1 npm run gate ...`** / **`SKIP_SEO_GATE=1 npm run gate:full ...`** — skips the audit body inside `seo-gate.sh`. The script **ignores this flag when `CI=1`** so the Vercel build cannot be silently bypassed; this is intentional and binding for task-89 (the whole point of Layer 0 was to make CI un-bypassable). Vercel build-step bypass therefore requires a deliberate workflow change committed to `vercel.json` (not an env-var trick), which is auditable in PR review. Locally `SKIP_SEO_GATE=1` is the stop-the-bleeding hotfix path; the next commit must restore green.

Required PR description line for any bypass:
```
SEO-GATE BYPASS: <which flag> — <reason> — Sahan ack: yes/no
```
"Sahan ack: no" with a bypass flag blocks merge.

### Maintenance
- `DEPLOY_BASELINE` is updated only at major release boundaries. The current baseline (2026-04-26) reflects the merge of the Tier-2/3 SEO lockdown work. New batches under the drip-feed schedule should not need to bump it; their files will get real git dates from `git log`.
- If the audit ever flags a legitimate cluster (e.g. 60 new pages legitimately shipping on the same day, blowing past the 50% threshold), update `MIN_URLS_FOR_AUDIT` or `MAX_DOMINANT_PCT` in `scripts/audit-sitemap.ts` and document the exception here. Do NOT silence the audit per-sitemap — that defeats the regression purpose.

## AI/voice discovery layer (Task #91, Apr 2026)

Voice search and AI answer engines (ChatGPT, Claude, Gemini, Perplexity, Copilot, You.com, Brave Leo) need three signals beyond traditional SEO: a deep machine-readable corpus, real-time ping when content changes, and an explicit voice-answer marker on the small set of pages we actually want spoken. This layer ships those three signals.

### 1. `public/llms-full.txt` — deep AI corpus

Generated by `scripts/generate-llms-full-txt.ts` (entrypoint: `lib/seo/llmsFullBuilder.ts → buildLlmsFullFile()`). Auto-derived from `SERVICE_SCHEMAS` + `PILLAR_SCHEMAS` so the corpus stays in lock-step with what the site actually publishes — not a hand-edited file that drifts.

- **AUTOGEN markers**: the body sits between `<!-- AUTOGEN:LLMS-FULL:START -->` and `<!-- AUTOGEN:LLMS-FULL:END -->`. Anything inside is regenerated; anything outside (header banner, footer NAP) is preserved.
- **Parity gate**: `scripts/audit-framework.ts → checkLlmsFullTxtParity()` does a byte-level diff between `public/llms-full.txt` on disk and `buildLlmsFullFile()`'s current output. Mismatch fails `gate:fast`. This means the file CANNOT drift from `SERVICE_SCHEMAS` — if you edit a schema, you regenerate the txt or CI blocks the commit.
- **Pre-commit check**: `gate:fast` runs `generate-llms-full-txt.ts --check` (dry-run mode) which exits non-zero if the on-disk file is stale. To regenerate: `npx tsx scripts/generate-llms-full-txt.ts`.

### 2. IndexNow delta-ping on Vercel deploy

`scripts/index-now-ping.ts --delta` runs as a postbuild step inside `vercel.json → buildCommand` (NOT in `package.json` — that surface is platform-blocked). The full chain: `npm run gate:full && next build && (test "$VERCEL_ENV" = production && npx tsx scripts/index-now-ping.ts --delta || echo '[postbuild] skipping...')`.

- **Production-only gate**: `test "$VERCEL_ENV" = production` ensures preview/dev builds never ping IndexNow. The script also no-ops if `INDEXNOW_KEY` is unset.
- **Delta mode**: walks `git diff --name-only $VERCEL_GIT_PREVIOUS_SHA HEAD` and submits only URLs whose source changed. This avoids re-pinging the entire 5,200-page surface on every deploy (which is itself a spam signal).
- **DELTA_CAP=9000**: hard ceiling per ping batch — IndexNow's documented limit is 10k. If a deploy genuinely changes more than 9k URLs (rebuild, mass refactor) the script fails loud rather than silently truncating. That forces a human to decide whether to chunk the ping or accept that this is a full-site relaunch.
- **Fail-loud philosophy**: any non-2xx response from IndexNow throws — silent fallback to "I'll catch it next deploy" defeats the whole point of a real-time push signal.

### 3. Speakable JSON-LD + en-MT/en-GB/x-default hreflang on the top-12 pages

`lib/seo/topPages.ts` defines the 12 priority pages (4 pillars + 8 highest-commercial-intent services). Two helpers in `lib/seo/discoveryTags.tsx`:

- **`<SpeakableJsonLd path="..." />`**: emits a `WebPage` JSON-LD node with `speakable.cssSelector = ["[data-speakable]"]`. Renders `null` for non-top paths (Layer 3 anti-cannibalisation — the voice-answer signal stays scarce).
- **`getHreflangAlternates(path)`**: returns the Next.js `metadata.alternates` object with the en-MT/en-GB/x-default cluster. All three variants point at the same canonical URL — single domain, no en-US emission.
- **Canonical normalisation**: `topPageCanonical("/")` returns `https://oarcdigital.com` (no trailing slash) because Next.js's Metadata API strips it; hreflang variants MUST match the actual canonical exactly or `audit-discovery.ts` flags a mismatch. This was a real bug caught by the audit on first run.
- **`data-speakable` placement**: hero `h1` + lead paragraph on each top page. For pages with a client-component loading-state hero (e.g. `RevenueServiceClient`, `AIEmployeeServiceClient` — they render `<Loading…/>` until a `useEffect` resolves, so the `[data-speakable]` element is missing from the SSR HTML), the page's RSC `page.tsx` ALSO emits an `sr-only` `h1`+`p` with `data-speakable` as an SSR-safe shim. The shim is in the DOM at first byte; the client hero adds redundant speakable targets after hydration. This was the second real bug caught by the audit.

### Audit gate

`scripts/audit-discovery.ts` (HTTP mode, `BASE=...`) walks all 12 top pages and asserts:
- WebPage JSON-LD with SpeakableSpecification targeting `[data-speakable]` is present
- The DOM contains at least one element matching `[data-speakable]` (regex: `\bdata-speakable(=|\s|>)`)
- `<link rel="canonical">` matches `topPageCanonical(path)` exactly
- All three hreflang variants (en-MT, en-GB, x-default) are present and href === canonical
- `public/llms-full.txt` exists, contains both AUTOGEN markers, and parses cleanly

Wired into `gate:full` (manual / pre-push, requires running dev server). Not in `gate:fast` because it needs HTTP — the parity check on llms-full.txt IS in `gate:fast` so the corpus-drift signal is caught at commit time.

### Drip-batch addendum

When promoting a new page into the top-12 (e.g. retiring a stale priority page in favour of a fresh service launch):
1. Add the path to `TOP_PAGES` in `lib/seo/topPages.ts`.
2. Add `data-speakable` to its hero `h1` + lead paragraph.
3. If the hero is gated by a client-component loading state, add the `sr-only` SSR shim in `page.tsx`.
4. Replace `alternates: { canonical: ... }` with `alternates: getHreflangAlternates(path)`.
5. Add `<SpeakableJsonLd path={path} />` next to `<RouteSchema />`.
6. Run `BASE=http://localhost:5000 npx tsx scripts/audit-discovery.ts` and confirm green before shipping.

---

## Cross-page hygiene — alt-text + similarity audits (Task #92, Apr 2026)

Two new audits close the long-standing "is this page actually distinct, accessible content?" gap. Both run server-free or HTTP and slot into the three-tier gate.

### `scripts/audit-alts.ts` — image alt-text validation (server-free)

Walks every `.tsx` under `app/`, `components/`, `lib/` with the TypeScript Compiler API (already a project dependency — no new packages). Recursively visits every `JsxOpeningElement` / `JsxSelfClosingElement` whose tag is `img` or `Image` and validates the `alt` prop.

- **Failure modes**: missing `alt`, empty literal `alt=""`, generic-pattern alt (`image`, `photo`, `icon`, `picture`, `untitled`), filename-as-alt (alt that contains a `.png`/`.jpg`/`.jpeg`/`.gif`/`.webp`/`.svg`/`.avif` substring).
- **Decorative opt-out**: an image with `aria-hidden="true"`, `role="presentation"`, or `role="none"` is exempt — the whole point of those attributes is to tell assistive tech "this is decoration, skip me." Decorative bokeh, hero washes, and gradient overlays should use this pattern.
- **Dynamic alt accepted**: `alt={someVar}` (any expression) is treated as valid because the audit can't statically resolve runtime values; we trust the call site. The author of the variable is responsible for content.
- **Baseline result**: 90 .tsx files scanned, 0 failures. The first run found 4 decorative bokeh/hero backgrounds in `app/contact/PageContent.tsx` (3) and `app/tools/PageContent.tsx` (1) — all four were genuine decorations, fixed in-place by adding `aria-hidden="true"` rather than inventing fake alt text.
- **Wired into**: `gate:fast` (server-free, ~3s). Blocks at commit time.

### `scripts/audit-similarity.ts` — cross-page Jaccard similarity (HTTP)

Catches doorway-page / boilerplate-clone risk that traditional SEO audits miss. Approach: fetch every sampled URL's SSR HTML, strip non-content (head, script, style, noscript, comments, and any subtree marked `data-similarity-ignore`), tokenise (lowercase alphanumeric, ≥2 chars), build 5-word shingles, compute pairwise Jaccard, fail if any pair exceeds the threshold.

- **Why Jaccard on shingles, not cosine on TF-IDF**: shingles preserve word order, which is exactly what Google's near-duplicate detector keys on. A 5-word shingle is the standard for English-language near-dupe detection (small enough to catch boilerplate paragraphs, large enough that natural overlap on common phrases doesn't score high).
- **`data-similarity-ignore` opt-out**: components that legitimately repeat verbatim across many pages (NAP block, pricing tier block, trust badges) carry this attribute on their root element so the audit excludes them from the corpus. Currently applied to `components/seo/MaltaContextBlock.tsx` and `components/seo/TrustBlock.tsx`. Add the attribute, do not remove the component — the attribute is the contract.
- **Coverage modes (resolved in this order)**: (1) `AUDIT_FULL=1` walks every sitemap URL — 394 paths today, gate-equivalent. (2) `--sample=N` walks N URLs — manual calibration when iterating on threshold. (3) `SAMPLE_CAP=50` default — fast inner-loop, used only when neither of the above is set. The sampled-mode default exists so `npx tsx scripts/audit-similarity.ts` on a freshly-booted dev server doesn't pay the full-walk cold-compile cost; sampled runs print a stderr WARNING naming the `AUDIT_FULL=1` flag so the trade-off is obvious. **`gate:full` ALWAYS sets `AUDIT_FULL=1`** (mirroring the convention used by `audit-nap` and `audit-schema`) so release gating audits every route pair, not a sample. Sampling is stratified — pillars and `/services/*` go first, then a deterministic prefix of the rest. Pages with <20 shingles after strip are dropped (too thin to compare meaningfully).
- **Tunables**: `--threshold=0.7` (default), `--top=50` (how many top-scoring pairs to print regardless of pass/fail), `--json` (machine-readable output). Per-fetch timeout 30s with `AbortController` so a stalled URL never wedges the audit.
- **Concurrency**: 8 parallel fetches. Higher concurrency does NOT speed up cold compiles (Next.js compiles pages on-demand serially) but it does help the warm-cache and `next start` paths.
- **Threshold = 0.70 rationale**: baseline run on 50 sampled pages produced top score 0.240 (`/intelligence` vs `/services/api-integration-services`). Even with the layout shell, footer, and shared NAP/Trust blocks excluded, no real page comes close to 0.70. That threshold is therefore "would only fire on a genuine doorway clone" — a high-precision red line, not a soft warning. If a future drip-batch produces pairs above 0.50 we revisit; pairs above 0.70 fail the gate.
- **Wired into**: `gate:full` (HTTP, requires running dev server). Not in `gate:fast` because it needs server fetches.

### Drip-batch addendum

When publishing a new page (or a batch of pages):
1. Decorative images get `aria-hidden="true"`. Content images get a real, page-specific `alt`. Never use a filename, never use `image`/`photo`/`icon`.
2. Genuinely-shared boilerplate (NAP, pricing tier, trust block) goes into a component carrying `data-similarity-ignore` on its root — never inline-duplicated.
3. After commit, `gate:fast` enforces (1). Before push, `gate:full` enforces (2). If a similarity pair surfaces above 0.50, treat it as a writing-uniqueness signal and rework the offending page before shipping.

---

## Visual + perf + crawl baselines (Task #93, Apr 2026)

Three optional gates close the "could a CSS-variable change silently break 17 pages?" / "did Core Web Vitals regress?" / "is anything 404ing?" loops. Each is wired into `gate:full` via `run_step_optional` in `scripts/seo-gate.sh` — present + binary installed = run; binary missing = SKIP cleanly with a loud note (the gate stays green so a fresh clone never blocks on missing tools).

### `tests/visual/visual.spec.ts` — Playwright pixel-diff baseline
- Captures the 16 services + 4 pillars (`lib/seo/topVisualPages.ts` — 20 routes) at desktop (1280×800) and mobile (375×667), 40 snapshots total committed under `tests/visual/visual.spec.ts-snapshots/`.
- Determinism levers: animations frozen (CSS injection at page-eval), all fonts forced to `system-ui` (so a slow Montserrat fetch can't reflow glyphs), `deviceScaleFactor: 1` on both projects, ARC chat widget hidden (its open/close state is non-deterministic).
- Threshold `maxDiffPixelRatio: 0.01` — >1% pixel diff fails. Catches shared-component regressions that no single-page audit can see.
- System Chromium via Nix (`installSystemDependencies chromium`) used directly via `executablePath` in `playwright.config.ts` — Playwright's bundled-browser CDN download is blocked in the Replit container, so we never call `npx playwright install`.
- Regenerate after intentional design changes: `npx playwright test --update-snapshots`, then commit the updated snapshots in the same PR as the design change.

### `scripts/lighthouse-baseline.ts` — perf baseline + diff
- Runs Lighthouse 3 times per route across the 30 routes in `lib/seo/topPerfPages.ts`, takes median LCP / INP / CLS / scores, writes `.local/lighthouse-baseline/<slug>.json`.
- Diff thresholds: >5% absolute score regression (perf, a11y, best-practices, seo) OR >20% relative CWV regression.
- `--update` overwrites the baseline (use after intentional perf changes); `--check-binary` only verifies the chromium binary is reachable.
- Spawns a headless system Chromium per route on a random free port (no shared user-data-dir, so runs are isolated).
- Local-floor only — real edge data requires Sahan's Vercel preview access (see `seo-tier-doc.md` Section 3.B).

### `scripts/lychee-crawl.sh` — 404 / link-rot crawl
- Walks the local sitemap-index, extracts every `<loc>`, runs lychee with `--max-redirects 5 --accept "200..=299,301,302,303,307,308"`, excludes patterns from `.local/lychee-allowlist.txt`.
- RULES (binding): internal 404s NEVER go in the allowlist — they are bugs and must be fixed in the same PR. Only documented external-domain failures may be added, with a dated comment explaining the why.
- Report at `.local/lychee-report.txt`.

### Tool installation — Tier-2/3 baselines

The OARC Replit container ships with all four tools installed. A fresh clone (or any environment where the gate prints SKIP for visual/lighthouse/lychee) needs the following one-time setup. Tools install via the package-management skill — never via raw `apt`/`brew`/`cargo`.

```text
1. npm devDeps   (added by Task #93 via installLanguagePackages):
   @playwright/test  — visual diff runner
   lighthouse        — perf baseline runner

2. System deps   (added by Task #93 via installSystemDependencies):
   chromium  — used by BOTH Playwright (executablePath) and Lighthouse
              (spawned per-route headless instance). We do NOT use
              `npx playwright install` — the CDN download is blocked
              in the Replit Nix sandbox.
   lychee    — Rust-binary 404 crawler.
```

After installation, the seo-gate's `run_step_optional` prereqs auto-detect each binary and switch the corresponding gate from SKIP to RUN. No further config required.
