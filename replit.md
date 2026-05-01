# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform focused on delivering AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform aims to be a leader in AI-driven marketing, offering sophisticated solutions with advanced animations and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages. Its core ambition is to provide unparalleled creative and automation capabilities to drive significant revenue growth for its clients.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform is built on a modern web stack using a React frontend and an Express.js backend, designed for scalability and high performance.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat, Nunito Sans, and EB Garamond. Animations leverage Framer Motion for scroll effects and `ScrollReveal` for fade-in effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage (19 sections including 3D Concave Carousel, ROI calculator), 25 specialized service pages, master services page with mega menu, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations. Specialized page designs include "Our Work" with a professional aesthetic and bokeh background, "AI Employee & Revenue Service Pages" with "Elevated Monochrome Futurism" design, "Creative Services Pages" with vibrant gradients, and unique narrative-driven structures for priority services. The "AI Agents Landing Page" is conversion-optimized with a dark premium aesthetic, lime green accents, and interactive elements.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, comprehensive advanced schema markup (e.g., FAQ, Review, Service, Article), voice search optimization, intelligent internal linking, and an SEO-optimized blog system. Includes anti-spam constraints (drip-feed page rollout, canonical URL per query intent, consistent NAP) and archived URL 308 redirects.
-   **SEO + AI-Discovery Framework:** A foundational framework with 6 layers ensuring unique value propositions, entity focus, primary intent, LLM-citable facts, internal linking, and conversion goals. This framework is enforced via TypeScript and audit scripts.
-   **AI/Voice discovery layer:** Implemented through `public/llms-full.txt` (auto-generated), IndexNow delta-ping for content updates, and Speakable JSON-LD with hreflang on top pages for enhanced AI and voice search visibility.
-   **FAQ Sections:** Comprehensive FAQ implementation across service pages with reusable components, 8 voice-search optimized questions per page, automatic JSON-LD FAQPage schema, and dark mode support.
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