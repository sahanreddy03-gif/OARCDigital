# SEO Foundation Lockdown — Tier Doc (Tasks #83 → #93, Apr 2026)

This doc is the closeout record for the Tier-1/2/3 SEO lockdown shipped
across Tasks #83–#93. Read it alongside `.local/seo-framework.md`,
`.local/seo-rollout-calendar.md`, and `.local/seo-keyword-map.md`.

The previous version of this doc (Apr 2026, Task #83) listed Tier-2/3
items as "deferred — proposed as follow-ups". They are now SHIPPED.
Section 2 below enumerates each. Section 3 lists the residual work
that requires Sahan-side credentials/access and could not ship in this
batch — those are the OARC handoffs.

---

## 1. Tier-1 — SHIPPED in Task #83

(Unchanged from the previous version of this doc. Summary kept here
for self-contained reading; full detail in the original Task #83 plan.)

1. **6 framework audit fixes** in `lib/seo/serviceSchemaConfig.ts` —
   trimmed UVPs over the 180-char Layer-1 cap; resolved 3 Layer-3
   keyword cannibalisation collisions. `audit-framework` is 21/21
   green and stays gated by `gate:fast`.
2. **6 invented service slugs noindexed** —
   `ai-revenue-engine`, `ai-virtual-talent-hub`, `funnel-automation`,
   `funnel-optimization-agent`, `idea-validation-engine`,
   `rapid-idea-testing` carry `robots: { index: false, follow: false }`,
   are stripped from the sitemap, and inbound links continue to resolve.
3. **Robots scraper-block list** in `app/robots.ts` — 17 SEO scrapers
   blocked, all major engines + AI crawlers explicitly allowed,
   3 uptime monitors allow-listed.
4. **Phrase blocklist** in `lib/seo/phraseBlocklist.ts` — 42 banned
   AI-tell phrases swept by `audit-framework`.
5. **UTM consolidation** verified — `lib/utm.ts` is the sole source of
   truth for WhatsApp + telephony links.
6. **`llms.txt` regenerated** — AUTOGEN parity gated by `gate:fast`.

---

## 2. Tier-2/3 — SHIPPED in Tasks #88–#93

Each task added a measurable gate. The summary table at the end of
Section 4 shows the full audit set after this batch.

### Task #88 — Per-page Malta context + TrustBlock variants
- `lib/seo/maltaContext.ts` — one paragraph of Malta-specific context
  + 2 town/regulator references per service page. Gives every service
  page defensibility against template-clone detection.
- `components/seo/TrustBlock.tsx` — 3 reusable trust banners
  (reviews count, GDPR + Malta MGA badges, Birkirkara visit block
  with optional photo). Replaced hand-rolled trust banners on every
  service page.

### Task #89 — Layer 0 CI gate (sitemap honesty + audit enforcement)
- Replaced `TODAY = new Date()` in `lib/seo/sitemapHelpers.ts` with
  `lastmodForPath()` / `lastmodForPaths()` — derived from `git log -1
  --format=%cd --date=short -- <path>`. Sitemap entries now emit each
  URL's true last-modified date instead of "every URL deployed today"
  (a Google spam-tell).
- `getSitemapLastmod()` in `lib/seo/sitemapSources.ts` returns
  `max(entry.lastmod)` over the actual `UrlEntry[]` each child route
  serves — index lastmod equals children's true max BY CONSTRUCTION.
- `scripts/audit-sitemap.ts` — two modes (static + HTTP). Static mode
  imports route handlers directly (no server needed) and runs at
  Vercel build. HTTP mode runs against the dev server in `gate:full`.
  FAILs only when a sitemap's dominant date is today AND that date
  covers >50% of URLs.
- Three-tier orchestrator `scripts/seo-gate.sh`:
  - `gate:fast` (Husky pre-commit, ~10s)
  - `gate` (Vercel build via `vercel.json`, adds the static audits)
  - `gate:full` (manual / pre-push, adds the HTTP audits)
- Husky 9.x wired via `prepare: husky` in package.json.
- Bypass policy: `HUSKY=0` skips pre-commit, `SKIP_SEO_GATE=1` skips
  the body (ignored when `CI=1`).

### Task #90 — Full NAP audit + schema validator
- `scripts/audit-nap.ts` — for every monitored URL asserts:
  (a) every LocalBusiness/MarketingAgency/Organization/ProfessionalService
  JSON-LD entity exposes the canonical `telephone`/`email`/`address`
  from `lib/seo/nap.ts`; (b) every `tel:` href and visible address text
  matches the canonical NAP; (c) recursive walk so a stale phone
  leaking into an Article author or a Person sub-entity also fails.
  Source-aware exception for the Ta' Xbiex location-data surface
  (locality permitted only when entity is a LocalBusiness variant on
  a `location-data`-tagged URL). Wired into `gate:full`.
- `scripts/audit-schema.ts` — JSON-LD structural validator covering
  parse errors, required-field, type-allowlist, `@id`-orphan
  resolution, ISO-8601 dates, banned properties, per-page schema
  contract, per-`@type` required-property contract. Gated in
  `gate:full`. A `--self-test` mode runs in `gate:fast` to validate
  the script's own assertions without hitting a server.

### Task #91 — AI/voice discovery layer
- `public/llms-full.txt` — auto-generated long-form companion to
  `llms.txt` from `SERVICE_SCHEMAS` + `PILLAR_SCHEMAS` via
  `lib/seo/llmsFullBuilder.ts`. Marker-bounded
  `<!-- AUTOGEN:LLMS-FULL:START/END -->` so the body regenerates
  while the static header/footer stay editable.
- IndexNow delta-ping wired into `vercel.json` `buildCommand` (NOT
  package.json `postbuild` — package.json edits are platform-blocked).
  Gated by `VERCEL_ENV=production`. Delta computed from
  `git diff $VERCEL_GIT_PREVIOUS_SHA HEAD`. `DELTA_CAP=9000`.
- Speakable JSON-LD + en-MT/en-GB/x-default hreflang (no en-US) on
  the top 12 pages defined in `lib/seo/topPages.ts`.
- `scripts/audit-discovery.ts` (HTTP) walks all 12 top pages and
  asserts: SpeakableSpecification JSON-LD with `@type` strict-checked,
  >=2 `[data-speakable]` targets including at least one heading, exact
  canonical match, all 3 hreflang variants, `llms-full.txt` parity.
  Gated in `gate:full`.

### Task #92 — Image alts + cross-page similarity
- `scripts/audit-alts.ts` (server-free, gated in `gate:fast`) — walks
  every `<img>` and `<Image>` in `app/`, `components/`, `lib/` and
  fails on missing alt, empty alt without explicit decorative opt-out,
  generic alt (`image-1`, `screenshot`, filename-as-alt), or
  decorative without the canonical `alt="" + aria-hidden="true"`
  pattern. Dynamic alts (`alt={var}`) are accepted.
- `scripts/audit-similarity.ts` (HTTP, gated in `gate:full`) — walks
  the live sitemap, extracts visible body text (excluding head, script,
  JSON-LD, and `data-similarity-ignore` blocks), tokenises into 5-word
  shingles, computes pairwise Jaccard, FAILs on any pair >= threshold
  (default 0.70 — Google's textbook duplicate-content trigger).
  `AUDIT_FULL=1` walks every URL pair (gate-equivalent coverage).

### Task #93 — Visual + perf + crawl baselines (this task)
- **Playwright visual-diff baseline** — `tests/visual/visual.spec.ts`
  (DIFF spec, runs in gate), `tests/visual/baseline.spec.ts` (CAPTURE
  spec, operator-only — explicitly excluded from default `npx
  playwright test` invocations via `testMatch` in `playwright.config.ts`),
  `lib/seo/topVisualPages.ts` (16 services + 4 pillars). Captures
  desktop (1280×800) + mobile (375×667) as PNG references — total
  40 snapshots in `tests/visual/visual.spec.ts-snapshots/`.
  `maxDiffPixelRatio: 0.01` (>1% pixel diff fails). Uses Replit's
  Nix-provided Chromium (Playwright's bundled-browser CDN download
  is blocked in the container). Animations frozen, fonts forced to
  system-ui, ARC chat widget hidden — all to keep pixel-ratio drift
  under the threshold across CI runs. Per-test timeout 90s,
  `toHaveScreenshot.timeout` 60s — generous for the dev server's
  on-demand compile.
  **Baseline seeding state at Task #93 close:** 40 of 40 PNGs
  committed (full corpus — all 4 pillars + all 16 services × desktop
  + mobile). Captured incrementally in 5 batches via
  `npx playwright test tests/visual/baseline.spec.ts
  --update-snapshots --project=desktop|mobile -g '<slug-regex>'`
  after warming each batch with `curl` against the dev server (the
  cold-compile penalty was the bottleneck — warm routes captured in
  5-7s each). The drift gate is therefore live for every TOP_VISUAL
  route from the next gate:full run onward. Regenerate after
  intentional design changes with the same incremental
  `baseline.spec.ts --update-snapshots` invocation, then commit the
  PNG diff in the same PR as the design change.
- **Lighthouse perf baseline** (`scripts/lighthouse-baseline.ts`,
  `lib/seo/topPerfPages.ts`) — runs Lighthouse 3 times per route
  (median-of-3 dampens the ±5pt variance in LH lab data below the
  5% gate threshold), takes median LCP/INP/CLS/scores per route,
  writes `.local/lighthouse-baseline/<slug>.json`. Future runs diff
  vs baseline. FAILs on >5% absolute score regression OR >20%
  relative CWV regression. `--update` flag regenerates baseline (in
  --update mode, requires ALL 30 routes to capture successfully or
  FAILs with the missing-route list — a partial baseline would be
  inconsistent and is refused at write time). Uses system Chromium
  via spawned headless instance with random free port.
  **Dev server vs production build:** the script consumes whatever
  URL `BASE` points at. Default = dev server (NOT vendor-comparable
  but still drift-comparable: an 8-point dev-vs-dev regression is
  still a real regression). For prod-build capture, the operator
  runs `npm run build && PORT=5000 npm start &` BEFORE invoking
  with `--update`. Documented in the script header.
  **Incremental seeding via `LIGHTHOUSE_ROUTE_FILTER`:** the script
  accepts an env var of comma-separated routes (e.g.
  `LIGHTHOUSE_ROUTE_FILTER=/services/web-design,/`) that restricts
  the run to that subset, both in `--update` (capture only those)
  and diff (compare only those) modes. Diff mode also tolerates a
  partial corpus — it runs only against routes that have committed
  baseline files and prints an `uncovered:` list for the rest, so
  the operator can grow the baseline corpus across multiple staging
  sessions without the gate FAILing on the missing routes.
  **Baseline seeding state at Task #93 close:** 0 of 30 JSONs
  committed. Each median-of-3 capture is ~30-90s on the cold-compile
  dev server, putting a full 30-route run at ~45min — exceeds the
  per-tool-call budget AND the workflow-restart kill window. The
  script is fully functional and was tested end-to-end (chromium
  spawn at the resolved Nix path, free-port detection, median
  calculation, JSON write, --update completeness check, diff
  diagnostics, route-filter env var). Operator seeds via Task #101
  by running, in batches:
  ```
  curl -s -o /dev/null http://localhost:5000/<route>  # warm
  LIGHTHOUSE_ROUTE_FILTER=/<route> npx tsx \
    scripts/lighthouse-baseline.ts --update
  git add .local/lighthouse-baseline/<file>.json
  ```
  Until the corpus has at least one entry the gate SKIPs lighthouse
  cleanly with a loud NOTE ("Run `npx tsx
  scripts/lighthouse-baseline.ts --update` once to seed it"). The
  script REFUSES to silently auto-capture in non-update mode — that
  would convert the gate from "diff vs floor" into "always-pass
  capture mode" and mutate the working tree mid-CI. Real-edge runs
  require Sahan's Vercel preview access (Section 3) — this captures
  the LOCAL FLOOR only.
- **lychee 404 crawl** (`scripts/lychee-crawl.sh`) — fetches local
  sitemap-index, extracts every `<loc>`, runs lychee with
  `--max-redirects 5`, `--accept 200..=299,301,302,303,307,308`,
  excludes patterns from `.local/lychee-allowlist.txt` (currently
  empty — RULES enforce that internal 404s NEVER go in the allowlist;
  only documented external failures with dated comments may).
  Writes report to `.local/lychee-report.txt`. FAILs the gate when
  the sitemap is unexpectedly empty AND the dev server is up
  (silent-empty-sitemap was a real-world drift pattern caught in
  code review).
- All three wired into `seo-gate.sh` via a new `run_optional_parallel`
  helper that fans them out concurrently (visual + lighthouse +
  lychee) — sequential wall-time was 6-9min, parallel ~3-5min on
  the OARC container — and replays per-step logs in declaration
  order so CI grep behaviour is unchanged. The fan-out prereq-checks
  each binary and SKIPs cleanly with a loud note when missing, so
  the gate stays green on a fresh clone where Sahan hasn't run
  `installSystemDependencies`. The standalone `run_step_optional`
  helper is retained for the (currently zero) future single-binary
  optional gates.
- `.local/seo-framework.md` updated with the install path
  (Section "Tool installation — Tier-2/3 baselines").
- **Known scope drift on package placement:** `@playwright/test` and
  `lighthouse` ship in `dependencies` rather than `devDependencies`.
  Replit's `installLanguagePackages` tool does not honor a `dev` /
  `saveDev` flag and direct `package.json` edits are platform-blocked
  for Replit agents. This is a tooling-side limitation, not a
  policy decision; Sahan should move them to `devDependencies`
  manually on next checkout (`npm uninstall @playwright/test
  lighthouse && npm install --save-dev @playwright/test lighthouse`).

---

## 3. Sahan handoffs — residual asks

These items require credentials, access, or a policy decision OARC's
side, and could NOT ship in Task #93 because the underlying account
isn't ours to provision. Each carries the EXACT data we need.

### A. GBP (Google Business Profile) access
- **What we need.** Owner or Manager invite to the OARC GBP listing.
- **Why.** GBP is the dominant local-pack signal for "marketing
  agency Malta". Without owner access we cannot:
  - Verify NAP consistency between site and GBP (today's NAP audit
    only validates the site).
  - Maintain hours, services list, and photo-set rotation.
  - Seed Q&A (currently empty — competitors are seeding theirs).
  - Set the post cadence.
- **Sahan must provide:** Manager invite to `hello@oarcdigital.com`
  (or owner-side login). Once received we will commit a one-pager
  recording who can edit what and the post cadence.

### B. Vercel preview access
- **What we need.** Vercel team membership for the OARC project so we
  can pull preview-deploy URLs.
- **Why.** Lighthouse local-baseline (Task #93) captures the LOCAL
  FLOOR. Real CWV — the numbers Google ingests — must be measured
  against an edge-deployed preview (real CDN, real TLS, real
  third-party connections). Without preview URLs we cannot:
  - Capture proper edge-Lighthouse baselines.
  - Run a `--prod` mode of `scripts/lighthouse-baseline.ts` that
    diffs against the edge floor instead of the local floor.
- **Sahan must provide:** Vercel team invite to
  `hello@oarcdigital.com` with at least Developer role on the
  oarcdigital project.

### C. Uptime monitor confirmation
- **What we need.** Name of the uptime monitoring service in use.
- **Why.** `app/robots.ts` already allow-lists UptimeRobot,
  Pingdom.com_bot, and StatusCake — but if Sahan is using something
  else (Pingdom RUM, NewRelic Synthetics, Datadog Synthetics,
  Better Uptime, etc.) the monitor's bot is currently being blocked
  by the scraper deny-list, generating false-positive downtime
  alerts.
- **Sahan must provide:** Name of the service (one word). Three
  outcomes:
  - Already on the allow-list (fine, no change).
  - Different vendor → we add its bot UA to the allow-list in a
    one-line follow-up.
  - No uptime monitor in use → we propose one (UptimeRobot free
    tier is enough for a 5-min check on `/` + `/contact`).

### D. noindex policy decision for the 6 invented services
- **What we need.** Yes/no decision on whether the 6 invented service
  slugs (`ai-revenue-engine`, `ai-virtual-talent-hub`,
  `funnel-automation`, `funnel-optimization-agent`,
  `idea-validation-engine`, `rapid-idea-testing`) stay
  `noindex,nofollow` or change to `noindex,follow`.
- **Why.** Currently all six emit `robots: { index: false, follow:
  false }` — Google sees zero of them as canonical, and inbound link
  equity is also dropped. `noindex,follow` would still hide them
  from search results but PRESERVE link equity flowing through to
  the rest of the site (best practice for "thin / non-canonical"
  pages we're not ready to delete).
- **Sahan must decide:**
  - Option 1 (status quo): keep `noindex,nofollow`. Pages stay
    invisible AND inbound link equity is dropped. Safest for pages
    we plan to delete.
  - Option 2: change to `noindex,follow`. Pages stay invisible but
    inbound link equity flows through. Recommended if any of the 6
    will be kept long-term.
  - Option 3: delete the 6 pages and 308 their slugs to the closest
    canonical. Permanent — irreversible without restoring the
    pages from git.
- **Default until decided:** Option 1 stays in effect (no action
  needed from us — the invented-services audit gate keeps them
  noindexed).

---

## 4. The audit set (18 steps across 3 modes)

This is the complete enumeration of every audit step run by
`scripts/seo-gate.sh`. Each row is one `run_step` (or
`run_step_optional`) invocation. The "Mode" column is the cheapest
mode at which the step runs — every step also runs in deeper modes
(e.g. a `gate:fast` step also runs at `gate` and `gate:full`).

| # | Step | Cheapest Mode | Required? | Owner |
|---|---|---|---|---|
| 1 | `tsc --noEmit` | gate:fast | required | (existing) |
| 2 | `audit-framework` | gate:fast | required | Task #83 |
| 3 | `audit-schema --self-test` | gate:fast | required | Task #90 |
| 4 | `verify-redirects --static` | gate:fast | required | (existing) |
| 5 | `llms.txt` AUTOGEN parity | gate:fast | required | Task #91 |
| 6 | `llms-full.txt` AUTOGEN parity | gate:fast | required | Task #91 |
| 7 | `audit-alts` | gate:fast | required | Task #92 |
| 8 | `audit-core-57` | gate | required | (existing) |
| 9 | `audit-images` | gate | required | (existing) |
| 10 | `audit-sitemap` (static) | gate | required | Task #89 |
| 11 | `verify-redirects` (HTTP) | gate:full | required | (existing) |
| 12 | `audit-sitemap --http` | gate:full | required | Task #89 |
| 13 | `audit-nap` (HTTP) | gate:full | required | Task #90 |
| 14 | `audit-schema` (HTTP) | gate:full | required | Task #90 |
| 15 | `audit-discovery` (HTTP) | gate:full | required | Task #91 |
| 16 | `audit-similarity` (HTTP) | gate:full | required | Task #92 |
| 17 | Playwright visual-diff | gate:full | optional | Task #93 |
| 18 | Lighthouse baseline | gate:full | optional | Task #93 |
| 19 | lychee 404 crawl | gate:full | optional | Task #93 |

**Required vs optional.** Steps 1–16 are required: missing a binary or
config means FAIL. Steps 17–19 are optional: they run when their
binary (Chromium / lychee) is present and SKIP cleanly with a loud
NOTE when not — the gate stays green so a fresh clone where Sahan
hasn't run `installSystemDependencies` is never blocked.

**Step counts by mode.** `gate:fast` = 7 steps. `gate` (which includes
fast) = 10 steps. `gate:full` (which includes gate) = 19 steps total
(16 required + 3 optional). On the OARC container all 19 run; on a
fresh clone without Chromium or lychee, the last 3 print SKIP.

---

## 5. Pre-existing gate failures (NOT addressed in #83–#93)

Two HTTP-tier failures that existed BEFORE the lockdown began and are
tracked as separate follow-up tasks:

- `/` — `audit-core-57` flags the home pillar as `thin` because the
  hero is `useState(true)`-gated and the SSR HTML carries no audit
  body. Same root cause as the temporary sr-only shim on
  `marketing-automation-suite` and `ai-sdr-agent` (Task #91).
- `/ai-agents` — same loading-state pattern as `/`. Both are gated by
  the loading-pattern restructure tracked under Follow-up #98.

These are documented here so a fresh-eye reviewer running
`bash scripts/seo-gate.sh gate:full` on the OARC container does NOT
treat the two failures as Task-#93 regressions.
