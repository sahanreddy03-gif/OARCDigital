# OARC Digital - Marketing Agency Platform

## Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform aims to lead in AI-driven marketing by offering sophisticated, high-end solutions, driving significant revenue growth for its clients through 25 distinct service offerings and a multi-page architecture.

## User Preferences
Preferred communication style: Simple, everyday language.

## Canonical Core URL Ranking (LOCKED)
The authoritative ranked list of ~60 core URLs lives at `.local/memory/core-url-rank.md`. Always read this file before planning any SEO/content/redirect work. Highlights:
- **Tier 1 (P0) — 4 pillars:** `/`, `/creative`, `/ai-agents`, `/solutions`
- **Tier 2 (P1) — 8 top-nav:** `/services`, `/our-work`, `/case-studies`, `/pricing`, `/contact`, `/why-us`, `/about`, `/blog`
- **Tier 3 (P1) — 8 headline services:** social-media-creative-management, branding, video-production, web-design, seo-services, paid-advertising, content-marketing, email-marketing
- **Tier 4 (P1) — 10 AI/Revenue:** hire-ai-employees, ai-consulting, ai-sdr-agent, ai-support-specialist, ai-appointment-booker, ai-data-analyst, ai-admin-agent, revenue-automation, marketing-automation-suite, funnel-automation
- **Tier 5 (P2) — 12 growth+engineering spokes**
- **Tier 6 (P2/P3) — 10 creative spokes**
- **Tier 7 (P2) — 8 strategic supports:** /industries, /intelligence, /diagnostics, /automation, /enterprise, /roadmap-2026, /tools, /pdf-hub
- **Phase D content rebuild — Task #115 LANDED (2026-05-10):** All 11 AEO/Malta-location PageContent.tsx files now render ≥1,200 user-visible words (range: 1,203–1,265 incl. props), each carries a "Last updated: 10 May 2026" stamp (`data-testid="text-last-updated"`) at the top of the article, plus one new ~280-word substantive section with named local references (Sir Paul Boffa Sq, Targa Gap, Marsa-Qormi corridor, Manoel Island, Ta' Xbiex marina, Ghadira Bay, Cirkewwa, Pjazza Antoine de Paule, Three Cities, etc.). RouteSchema + TrustBlock + RelatedLinks already integrated; service variant of `RouteSchema` extended with `dateModified?` prop that emits a `WebPage` node carrying it (all 11 pages pass `dateModified="2026-05-10"`). `MALTA_CONTEXT` (lib/seo/maltaContext.ts) extended with 11 new AEO entries and `<MaltaContextBlock slug="..."/>` mounted just above the FAQ on every page. Audit-framework Layer 2 stale-entry check now also accepts `app/aeo/<slug>/PageContent.tsx` so AEO slugs are first-class citizens of MALTA_CONTEXT alongside SERVICE_SCHEMAS. Audit-framework 21/21, banned-phrase audit clean (5 grandfathered Tier 1 hits unchanged). Slugs: saas-development-malta, mobile-app-developers-malta, web-development-agency-malta, outsource-development-malta, custom-software-malta, marketing-agency-{mosta,qormi,swieqi,gzira,mellieha,paola}.
- **Slug-collision 308s — Task #116 LANDED (2026-05-04):** Foundation merged 10 hard-kill 308s — `/services/{ai-revenue-engine, funnel-optimization-agent, rapid-idea-testing, ai-virtual-talent-hub, media-buying, ai-copywriting, digital-marketing, creative}`, `/diagnostic`, `/roadmap` → canonical winners. New `CROSS_SECTION_ALIASES` map in `lib/seo/seoSets.ts` for non-`/services/<slug>` targets (avoids `verify-redirects` false-flags). Folders deleted, sitemap-core cleaned, internal links rewritten in Footer/CTASections/Navigation/internalLinkGraph. `/services/paid` and `/services/influencer` kept live (Tasks #119/#120 will repurpose).
- **Slug-collision 308s pending:** `/mobile-applications-development`, `/api-integration`, `/lead-generation-engine`, `/customer-acquisition` (Task #116 follow-ups for less-trafficked variants).
- **Demoted to P3 (defer):** digital-marketing, media-buying, wordpress-development, shopify-development, database-design, ai-copywriting, ai-compliance-auditor, ai-real-estate-agent, ai-virtual-talent-hub, ai-revenue-engine, funnel-optimization-agent, idea-validation-engine, rapid-idea-testing
- **Programmatic (P4):** /aeo/* (44), /industries/[industry] (19), /malta/[location]/* (~80) — template-driven, not in core 60

**Strategic call (user-confirmed):** Design + content are good. The real gap is **technical SEO + AEO** — schema completeness, internal-link graph, slug-collision cleanup, AEO/voice coverage, programmatic tail governance, and the Next 16 upgrade (#111) for the technical foundation.

## System Architecture
The platform utilizes a modern web stack with a React frontend and an Express.js backend, designed for scalability and high performance.

**Build Gate (`scripts/seo-gate.sh`):** A pre-commit + CI gate enforces the SEO/content contract. Notable steps in `gate:fast`:
-   `audit-banned-phrases` — scans every `app/**/*.tsx` and `components/**/*.tsx` for the AI-tell phrase blocklist (`lib/seo/phrase-blocklist.md`). Skips comments/imports/code-only lines and strips noise attrs (`className`, `data-testid`, `href`, `src`, `id`, `key`, `name`, `aria-*`, `role`, `from "..."`) so only user-visible JSX text is checked. Hits in Tier 1 content-locked pages are reported but grandfathered (allowlist in the script itself with a per-prefix justification); hits anywhere else hard-fail. Single source of truth = `lib/seo/phrase-blocklist.md`, parsed by `lib/seo/phraseBlocklist.ts`.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, powered by Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat, Nunito Sans, and EB Garamond. Extensive CSS animations include Framer Motion for scroll effects and `ScrollReveal` for fade-in animations.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages, master services page with mega menu, 19 industry hub pages at `/industries/{slug}` plus a CollectionPage-schema'd master `/industries` index, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations. Specialized page designs include "Our Work" page, PDF marketing collateral, "Elevated Monochrome Futurism" for AI Employee & Revenue Service Pages, vibrant designs for Creative Services, narrative-driven bespoke service pages, and a dark premium aesthetic for Business Diagnostics and AI Agents Landing Page.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, comprehensive advanced schema markup (e.g., FAQ, Review, Service, Album, Article), voice search optimization, intelligent internal linking, and an SEO-optimized blog system.
    -   Includes anti-spam constraints (drip-feed page rollout, canonical URL per query intent, consistent NAP) and archived URL 308 redirects to preserve SEO link equity.
    -   **Industry slug governance (Task #108):** Two distinct slug vocabularies live in `shared/seoConfig.ts`. `maltaIndustries` (3 singulars: restaurant/hotel/real-estate) gates the programmatic `/malta/{loc}/{ind}` location-paired routes. `industryHubSlugs` (19) gates the standalone `/industries/{slug}` hubs and is enforced through `KEPT_INDUSTRY_HUBS` in middleware. Legacy industry slugs 308-redirect to canonical hubs (e.g. `healthcare → healthcare-clinics`).
    -   **Service × industry combos (Task #109):** Intentionally NOT part of the SEO surface. The legacy `app/services/[serviceSlug]/[industry]` programmatic route was deleted; middleware 410s any `/services/{slug}/{anything}` request. The single exception is the bespoke `/services/mvp-development/for-software` page, which owns its own static file and is allow-listed in `middleware.ts`. Service-pillar pages and industry hubs each canonicalise to their own URL; cross-pages would dilute that signal and proliferate combinatorially.
    -   Foundation + 6 layers for SEO and AI-Discovery, ensuring unique value proposition, entity focus, primary intent, LLM-citable facts, internal linking, and conversion goals.
-   **AI/Voice Discovery Layer:** Implementation of `public/llms-full.txt` for AI answer engines, IndexNow delta-ping for search engine updates, and Speakable JSON-LD with hreflang for top commercial pages.
-   **FAQ Sections:** Comprehensive FAQ implementation across service pages with reusable component, voice-search optimized questions, and automatic JSON-LD FAQPage schema.
-   **Malta-Focused Blog Articles:** Four comprehensive SEO articles targeting the Malta market.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.
-   **SEO Routes:** Server routes for programmatic sitemap.xml and robots.txt generation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) managed with Drizzle ORM.

## External Dependencies

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