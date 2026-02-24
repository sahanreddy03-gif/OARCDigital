# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform providing high-end, AI-powered creative services, AI employees, and revenue automation solutions. The platform aims to deliver sophisticated, AI-driven marketing solutions with a focus on advanced aesthetics, animations, and a multi-page architecture to support its 25 service offerings and 6 supporting pages. The project seeks to capture a premium market segment with cutting-edge digital marketing and AI integration.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform is built on a modern web stack using React for the frontend and Express.js for the backend, with a focus on premium UI/UX, advanced SEO, and specialized service delivery.

**Frontend:**
-   **Core Technologies:** React 18+ with TypeScript (Vite), Shadcn/ui (New York style), Radix UI, Tailwind CSS with custom HSL palette, Wouter for routing, TanStack Query for server state, and React Hook Form with Zod for validation.
-   **Design & Aesthetics:** Premium agency-grade aesthetic featuring a two-palette color system (primary green, orange-600 accents), fluid typography (Montserrat, Nunito Sans, EB Garamond), extensive CSS animations (Framer Motion, ScrollReveal), and responsive design.
-   **Key Features:**
    -   **Navigation:** Master services page with accordion layout, desktop hover mega menu, and footer service categories.
    -   **Animations:** NeuralGrid 3D perspective canvas (replaced snow effect), WordReveal word-by-word text animations, ScrollReveal entrance animations on all homepage sections, AnimatedCounter counting stats, staggered card entrances, cursor-tracking glass glow on hero cards, large icons with hover effects, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, light sweep animations, and ultra-premium mobile animations with GPU acceleration. All animations respect prefers-reduced-motion.
    -   **Content & Services:** 25 specialized service pages (creative, growth, AI services), comprehensive homepage with 19 sections (3D Concave Carousel, brand DNA, service pillars, ROI calculator), six featured case studies, and dedicated pages for AI Employee & Revenue Services, and Creative Services.
    -   **Specialized Page Designs:**
        -   **Our Work Page:** Redesigned portfolio with bokeh background, orange accents, clean filter tabs, and subtle hover effects on case study cards.
        -   **PDF Marketing Collateral:** Professional, print-ready HTML-based PDF documents.
        -   **AI Employee & Revenue Service Pages:** "Elevated Monochrome Futurism" design with custom grayscale heroes, animated grids, glassmorphism, and integration hub visualizations.
        -   **Creative Services Pages:** Vibrant design with colorful gradients, particles, and dynamic typography.
        -   **Bespoke Service Page Framework:** Unique, narrative-driven structures for priority services like Video Production (studio reel), Web Design (conversion lab), Branding (brand lab), and Mobile Apps (product lifecycle).
        -   **MVP Development Service Pages:** Interconnected pages with "Elevated Monochrome Futurism" design, process timelines, tech stack marquees, and AI-generated product mockups.
        -   **Contact Page:** Premium dark aesthetic with dual CTA hero, two-column layout for form and contact details, and trust badges.
        -   **OARC Intelligence (Business Diagnostics):** Enterprise-grade AI diagnostics platform with routes `/diagnostics` and `/intelligence`, dark premium aesthetic with lime green accent, 8 industry verticals showing problems, behavioral psychology, and actionable solutions.
        -   **Tools Directory Page:** ColdIQ-inspired directory (`/tools`) with search, sticky category filters, 50+ curated tools, featured tools grid, and integrated FAQ.
        -   **AI Agents Landing Page:** Conversion-optimized page (`/ai-agents`) with dark premium aesthetic, lime green accents, AnimatedGridBackground, value badge hero, "What It Replaces" section with GlassCards, 3-column comparison table, "How It Works" timeline, Key Benefits GlassCards, interactive Live Demo Chat widget, and tiered pricing.
    -   **Advanced SEO:** Centralized configuration, programmatic location pages, dynamic sitemap.xml, optimized robots.txt, extensive schema markup (FAQ, Review, BreadcrumbList, HowTo, VideoObject, Article, Product, Service, Event, Organization, LocalBusiness, AggregateRating), voice search optimization, intelligent internal linking, and SEO-optimized blog system.
    -   **FAQ Sections:** Comprehensive, reusable `FAQSection` component across 43 service pages with 8 voice-search optimized questions, automatic JSON-LD schema generation, expand/collapse functionality, and dark mode support.
    -   **Malta-Focused Blog Articles:** Four comprehensive SEO articles targeting the Malta market, featuring Recharts data visualizations, tables, internal linking, and breadcrumb schemas.
    -   **Typography System:** 9 semantic levels with fluid `clamp()` values.
    -   **Smooth Scroll System:** `AdvancedScrollReveal` component for scroll-triggered animations.
    -   **Iconography:** Lucide React for generic icons, `react-icons/si` for brand logos.

**Backend:**
-   **Core Technologies:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.
-   **SEO Features:** Server routes for programmatic sitemap.xml and robots.txt generation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) managed with Drizzle ORM.

**PJAZZA — Live Shopping Marketplace for Malta (Secondary Project):**
-   **Architecture:** Separate module under `/pjazza/*` with its own `PjazzaApp.tsx` entry point. Routes registered in both `App.tsx` (top-level) and `PjazzaApp.tsx` (internal).
-   **Design:** Fully responsive (375px–1440px+), true black (#000000), rose-red (#E11D48) accents, gold (#D4A574) premium touches, Space Grotesk and Inter fonts, self-contained CSS (`pjazza.css`).
-   **12 Sectors:** Food & Dining, Property, Cars, Yachts, Home Services, Freelancers, Wellness, Fashion & Retail, Electronics, Tourism, Education, Pets & Animals.
-   **Pages (7 total):**
    -   **Portal** (`/pjazza`): Full landing page — hero, live streams preview, 12-sector grid, featured listings, how-it-works overview, trust signals, stats, success stories, dual CTAs.
    -   **Discover** (`/pjazza/discover`): Marketplace feed — live streams, category pills (12 sectors), high-value listings, crowd intelligence, quick links to How It Works & Sectors.
    -   **How It Works** (`/pjazza/how-it-works`): Buyer flow (5 steps), seller flow (5 steps), escrow explainer, 8 FAQs with expand/collapse.
    -   **Sectors** (`/pjazza/sectors`): All 12 categories with descriptions, examples, business counts, live counts, quick nav pills.
    -   **Business Onboard** (`/pjazza/business/onboard`): Pitch page — problem/solution, proof metrics, 12 industries, pricing with founding partner offer.
    -   **Business Dashboard** (`/pjazza/business/dashboard`): Seller analytics dashboard.
    -   **Recording Studio** (`/pjazza/business/stream`): Live streaming studio.
-   **Navigation:** TopBar (desktop 1024px+) and BottomNav (mobile) with Home, Sectors, LIVE, How It Works, Business tabs.

### External Dependencies

**Third-Party UI & Animation Libraries:**
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