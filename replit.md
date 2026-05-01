# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform delivering AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform aims to provide high-end, AI-driven marketing solutions with a sophisticated aesthetic, advanced animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages. Its core ambition is to be a leader in AI-powered marketing, offering unparalleled creative and automation capabilities to drive significant revenue growth for its clients.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform utilizes a modern web stack with a React frontend and an Express.js backend, designed for scalability and high performance.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, powered by Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat, Nunito Sans, and EB Garamond. Extensive CSS animations include Framer Motion for scroll effects and `ScrollReveal` for fade-in animations.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage (19 sections including 3D Concave Carousel, ROI calculator), 25 specialized service pages, master services page with mega menu, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations.
-   **Specialized Page Designs:**
    -   **"Our Work" Page:** Professional yet creative aesthetic with full-width bokeh background, orange accents, clean filter tabs, premium case study cards, and AI category badges.
    -   **PDF Marketing Collateral:** Professional, print-ready HTML-based PDF documents.
    -   **AI Employee & Revenue Service Pages:** "Elevated Monochrome Futurism" design with custom grayscale hero images, animated grid backgrounds, glassmorphism, integration hub visualizations, and workflow diagrams.
    -   **Creative Services Pages:** Vibrant design with colorful gradients, animated particles, and dynamic typography.
    -   **Bespoke Service Page Framework:** Unique, narrative-driven structures for priority services (e.g., Video Production as a studio reel, Web Design as a conversion lab, Branding as a brand lab, Mobile Apps as a product lifecycle).
    -   **OARC Intelligence - Business Diagnostics:** Dark premium aesthetic with lime green accent, 8 industry verticals showing problems, revenue loss calculations, behavioral psychology, and actionable solutions.
    -   **Tools Directory Page:** ColdIQ-inspired design with search, sticky category filters, 50+ curated tools, and featured tools grid.
    -   **AI Agents Landing Page:** Conversion-optimized with dark premium aesthetic, lime green accents, animated grid background, "What It Replaces" section, comparison table, "How It Works" timeline, key benefits, interactive live demo chat, and three pricing packages.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, comprehensive advanced schema markup (e.g., FAQ, Review, Service, Article), voice search optimization, intelligent internal linking, and an SEO-optimized blog system.
-   **SEO Anti-Spam Constraints (Apr 2026):** The previous 5,200-page programmatic push got flagged by Google. All future page rollout is governed by `.local/seo-rollout-calendar.md` (drip 5–8 pages/week, never burst >10 in any 7-day window) and `.local/seo-keyword-map.md` (one canonical URL per query intent — anti-cannibalisation gate). Canonical NAP is **Level 1, The Brewhouse, Birkirkara CBD 2010, +356 7971 1799** — every JSON-LD address block emits this; Ta' Xbiex appears only as a legitimate location in `lib/seo/locationData.ts`. The duplicate-slug 308 layer in `lib/seo/seoSets.ts → SERVICE_ALIASES` is now smoke-tested by `scripts/verify-redirects.ts` (which also checks every redirect target has a real `app/services/<slug>/` directory — that build-time check moved out of `lib/seo/redirectMap.ts` because middleware compiles to Edge Runtime and Edge forbids `node:fs`). Multi-week phases (RouteSchema migration of 55 service pages, 9 missing services, 11 missing AEOs, 8 industries, 30 industry × service crosses, pillar composition) are tracked as separate follow-up tasks, each gated by audit-core-57 + verify-redirects before each batch publish.
-   **Layer 0 CI Gate (Task #89, Apr 2026):** Sitemap honesty + automated audit enforcement. The legacy `TODAY = new Date()` constant in `lib/seo/sitemapHelpers.ts` (which made every URL in every sitemap emit "deployed today" — a Google spam-tell) was replaced with `lastmodForPath()` / `lastmodForPaths()` deriving each URL's `lastmod` from `git log -1 --format=%cd --date=short -- <path>` (synchronous, build-time only since sitemap routes are `force-static`; in-process Map cache). Falls back to a frozen `DEPLOY_BASELINE` when git has no record. The sitemap index uses `getSitemapLastmod()` (in `lib/seo/sitemapSources.ts`) which calls each child route's exported `buildEntries()` function and returns `max(entry.lastmod)` over the actual `UrlEntry[]` the child serves — index lastmod is therefore equal to the children's true max **by construction** (no SUPERSET heuristic, no second source of truth, no path-map to drift). The `image-sitemap.xml` route is structurally different (one URL with `image:image` children) so it exposes a `buildLastmod()` function the index reads directly. The audit script enforces this with an `index ↔ children parity` check that re-derives the max from the child XML and asserts it equals the index `<lastmod>` — currently 8/8 children agree. New regression test `scripts/audit-sitemap.ts` runs in two modes — static (imports route handlers directly, no server needed; runs at Vercel build) and HTTP (`--http` flag, runs against the dev server in `gate:full`) — and FAILs only when a sitemap's dominant date is today AND that date covers >50% of URLs (the pure TODAY-regression signal — tightened from the looser >90% threshold so a partial regression cannot sneak through; bulk-committed historical dates still pass cleanly). Three-tier gate orchestrated by `scripts/seo-gate.sh`: `gate:fast` (Husky pre-commit — tsc + audit-framework, ~10s), `gate` (Vercel `buildCommand` via `vercel.json` — adds audit-core-57, audit-images, audit-sitemap static), `gate:full` (manual/pre-push — adds verify-redirects + audit-sitemap HTTP, requires server). Bypass policy: `HUSKY=0` skips pre-commit, `SKIP_SEO_GATE=1` skips the body (ignored when `CI=1`). Husky 9.x wired via `prepare: husky` in package.json. Documentation in `.local/seo-framework.md` "Layer 0 enforcement" section.
-   **AEO depth parity (Task #76, Apr 2026):** All 30 previously-thin `/aeo/*` pages were rewritten in-place to the canonical `saas-development-malta` / `marketing-agency-mosta` shape (TITLE/DESCRIPTION/URL constants, `metadata` export with canonical+OG+Twitter, 7-question `faqs` array using `question`/`answer` keys, 3-tier `offers` array, `<RouteSchema type="service" features=[…6]>`, and a `PageContent.tsx` with hero → 3-paragraph context → reasons list → stack/verticals/playbook grid → pricing tile → Birkirkara visit block → closing differentiator → FAQ section → `<RelatedLinks>` → orange CTA banner). Every rewritten page now clears the `aeo` tier in `scripts/audit-core-57.ts` (1,038–1,494 audit-words, no `thin`, no `bad-schema`). Each page carries unique Malta context (towns, verticals, channel mixes, regulators) — not template-clones.
-   **SEO + AI-Discovery Framework (binding, Apr 2026):** Foundation + 6 layers, defined in `.local/seo-framework.md`. Every new page (and every page enriched in a drip batch) MUST satisfy: Layer 0 (foundation — schema, NAP, sitemap, perf — gated by `scripts/audit-core-57.ts` + `scripts/verify-redirects.ts`), Layer 1 (uniqueValueProp — distinct per page), Layer 2 (entityFocus — topical authority), Layer 3 (primaryIntent + generalizationKeywords — anti-cannibalisation), Layer 4 (llmCitableFacts — quotable claims for AI answer engines, mirrored in `public/llms.txt`), Layer 5 (internal-link distribution — gated by `lib/seo/internalLinkGraph.ts` >=4 inbound links), Layer 6 (conversionGoal + UX-trust). Layers 1, 2, 3, 4, 6 are TypeScript-enforced via the required `framework: FrameworkLayers` field on every entry in `lib/seo/serviceSchemaConfig.ts` (and the equivalent `ARTICLE_SCHEMAS` / `AEO_SCHEMAS` tables when those ship). Audit script: `npx tsx scripts/audit-framework.ts` — currently 7/7 service entries pass. Reach surfaces explicitly targeted: 7 search engines (Google, Bing, DuckDuckGo, Yahoo, Brave, Yandex, Ecosia) + 7 AI answer engines (ChatGPT, Claude, Gemini, Perplexity, Copilot, You.com, Brave Leo). Drip-batch checklist lives at the end of `seo-framework.md` and must be ticked before every batch ships.
    -   Includes anti-spam constraints (drip-feed page rollout, canonical URL per query intent, consistent NAP) and archived URL 308 redirects to preserve SEO link equity.
-   **AI/Voice discovery layer (Task #91, Apr 2026):** Three additive signals shipped together: (a) `public/llms-full.txt` is auto-generated from `SERVICE_SCHEMAS` + `PILLAR_SCHEMAS` via `lib/seo/llmsFullBuilder.ts` (marker-bounded `<!-- AUTOGEN:LLMS-FULL:START/END -->` so the body regenerates while the static header/footer stay editable; idempotent transform). (b) IndexNow delta-ping wired into `vercel.json` `buildCommand` (NOT a package.json `postbuild` hook — package.json edits are platform-blocked, so the ping lives at the END of `buildCommand` after `gate:full` and `next build`; gated by `VERCEL_ENV=production`; delta computed from `git diff $VERCEL_GIT_PREVIOUS_SHA HEAD` with shared-template fan-out to TOP_PAGES; DELTA_CAP=9000 with sort+truncate+warn so a runaway diff never fails the deploy). The "lives in vercel.json buildCommand" rationale is documented in `scripts/index-now-ping.ts` header comments — do NOT add a `$IndexNowNote` field to vercel.json (Vercel schema-validates and rejects unknown top-level keys). (c) Speakable JSON-LD + en-MT/en-GB/x-default hreflang (no en-US) on the top 12 pages defined in `lib/seo/topPages.ts` (4 pillars + 8 highest-commercial-intent services); helpers in `lib/seo/discoveryTags.tsx`; every top page carries a `<h1 data-speakable>` anchor and at least one `<p data-speakable>` lead paragraph. Two service pages (`marketing-automation-suite`, `ai-sdr-agent`) use a temporary sr-only SSR shim because their hero is `useState(true)`-gated client-side — Follow-up #98 will restructure the loading pattern. New audit `scripts/audit-discovery.ts` (HTTP) walks all 12 pages and asserts: SpeakableSpecification JSON-LD with `@type` strict-checked, >=2 `[data-speakable]` targets including at least one `<h1>/<h2>/<h3>`, exact-match canonical, all 3 hreflang variants, `llms-full.txt` parity. Wired into `gate:full`. AUTOGEN parity for both `llms.txt` and `llms-full.txt` runs in `gate:fast` (Husky pre-commit).
-   **FAQ Sections:** Comprehensive FAQ implementation across service pages with reusable component, 8 voice-search optimized questions per page, automatic JSON-LD FAQPage schema, and dark mode support.
-   **Malta-Focused Blog Articles:** Four comprehensive SEO articles targeting the Malta market with data visualizations, tables, internal linking, and breadcrumb schemas.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.
-   **SEO Routes:** Server routes for programmatic sitemap.xml and robots.txt generation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) managed with Drizzle ORM.

### External Dependencies

**Third-Party UI Libraries:**
-   Radix UI
-   Shadcn/ui
-   Embla Carousel
-   Lucide React
-   CMDK
-   Framer Motion
-   react-icons

**Database & Infrastructure:**
-   Neon Database (PostgreSQL serverless)
-   `@neondatabase/serverless`

**Form & Validation:**
-   React Hook Form
-   Zod
-   `@hookform/resolvers`

**Utility Libraries:**
-   clsx, tailwind-merge
-   date-fns
-   nanoid