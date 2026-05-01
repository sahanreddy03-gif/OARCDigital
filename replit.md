# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital is a marketing agency platform that leverages AI to deliver creative services, AI employees, and revenue automation. The platform aims to provide high-end, AI-driven marketing solutions with a sophisticated aesthetic, advanced animations, and a multi-page architecture to support 25 distinct service offerings and 6 supporting pages. Its core ambition is to be a leader in AI-powered marketing, offering unparalleled creative and automation capabilities to drive significant revenue growth for its clients.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform is built on a modern web stack designed for scalability and high performance.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, powered by Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat, Nunito Sans, and EB Garamond. Extensive CSS animations include Framer Motion and `ScrollReveal`.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage (19 sections), 25 specialized service pages, master services page with mega menu, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations. Specialized page designs include "Our Work" (bokeh background, orange accents), PDF Marketing Collateral (print-ready HTML), AI Employee & Revenue Service Pages ("Elevated Monochrome Futurism" with glassmorphism), Creative Services Pages (vibrant gradients), Bespoke Service Page Framework (narrative-driven), OARC Intelligence (dark premium, lime green accents, business diagnostics), Tools Directory (ColdIQ-inspired), and AI Agents Landing Page (conversion-optimized, dark premium, interactive chat). The "Most Popular Services" section on the homepage uses an editorial bento + live-dashboard hybrid layout with accent-themed ambient washes and blurred bloom orbs.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, comprehensive advanced schema markup (e.g., FAQ, Review, Service, Article), voice search optimization, intelligent internal linking, and an SEO-optimized blog system.
-   **SEO Anti-Spam Constraints:** Drip-feed page rollout (5–8 pages/week), one canonical URL per query intent (anti-cannibalisation), and consistent NAP (Name, Address, Phone). Archived URL 308 redirects are used to preserve SEO link equity.
-   **Layer 0 CI Gate:** Ensures sitemap honesty and automated audit enforcement. `lastmod` dates for sitemap entries are derived from Git history, not generated as "deployed today." Audit scripts (`audit-sitemap.ts`) enforce index ↔ children parity.
-   **AEO Depth Parity:** All 30 previously thin `/aeo/*` pages were rewritten to a canonical, content-rich shape, ensuring unique Malta context and meeting audit word count requirements.
-   **SEO + AI-Discovery Framework:** A 6-layer framework (Foundation, Unique Value Proposition, Entity Focus, Primary Intent + Generalization Keywords, LLM Citable Facts, Internal Link Distribution, Conversion Goal + UX-trust) is enforced for all new and enriched pages via TypeScript and audit scripts (`audit-framework.ts`). Targets 7 search engines and 7 AI answer engines.
-   **AI/Voice discovery layer:** Incorporates `public/llms-full.txt` (auto-generated for AI answer engines), IndexNow delta-ping for search engine updates, and Speakable JSON-LD with `hreflang` on top commercial pages for voice search optimization.
-   **FAQ Sections:** Comprehensive FAQ implementation with reusable component, voice-search optimized questions, automatic JSON-LD FAQPage schema, and dark mode support.
-   **Malta-Focused Blog Articles:** Four comprehensive SEO articles targeting the Malta market.

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