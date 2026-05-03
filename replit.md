# OARC Digital - Marketing Agency Platform

## Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform aims to lead in AI-driven marketing by offering sophisticated, high-end solutions, driving significant revenue growth for its clients through 25 distinct service offerings and a multi-page architecture.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The platform utilizes a modern web stack with a React frontend and an Express.js backend, designed for scalability and high performance.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, powered by Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat, Nunito Sans, and EB Garamond. Extensive CSS animations include Framer Motion for scroll effects and `ScrollReveal` for fade-in animations.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages, master services page with mega menu, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations. Specialized page designs include "Our Work" page, PDF marketing collateral, "Elevated Monochrome Futurism" for AI Employee & Revenue Service Pages, vibrant designs for Creative Services, narrative-driven bespoke service pages, and a dark premium aesthetic for Business Diagnostics and AI Agents Landing Page.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, comprehensive advanced schema markup (e.g., FAQ, Review, Service, Album, Article), voice search optimization, intelligent internal linking, and an SEO-optimized blog system.
    -   Includes anti-spam constraints (drip-feed page rollout, canonical URL per query intent, consistent NAP) and archived URL 308 redirects to preserve SEO link equity.
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