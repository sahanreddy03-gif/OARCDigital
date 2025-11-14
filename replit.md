# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform emphasizes a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages, aiming to provide AI-driven marketing solutions.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform features a React frontend and an Express.js backend, leveraging a modern web stack for performance and scalability.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Inter and Space Grotesk typography, and extensive CSS animations, including Framer Motion for scroll effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations. Shadcn buttons use default variants.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages (creative, growth, AI services), consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design. Service pages include dynamically loaded content and SEO meta tags.
-   **Navigation:** Master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories for accessibility.
-   **Services Page Design (Nov 2025):** Energetic cinematic design featuring dark background with purple network globe hero image (global-influencer-marketing-agency-socially-powerful_1763048685978.jpg), parallax scroll effects, three large animated purple/magenta/fuchsia glowing orbs (550-600px) pulsing at staggered intervals (8s, 10s, 12s durations), gradient hero headline "Elevate Your Digital Presence" with purple/fuchsia brand colors (from-fuchsia-400 via-purple-400 to-violet-400), animated stats section with purple gradient counter animations, interactive 3-category tabs (AI Creative, Revenue Automation, AI Employees) with purple gradient styling, category hero images with featured services (AI Creative uses ultra-wide workspace image 837b9d2d4233bb346c214826035215a37160c085-3840x1432_1763049729526.avif), and service grid cards with purple hover animations. Strategic color choice: Purple/magenta palette creates cohesive futuristic aesthetic, green CTA button retained for high-contrast action trigger. Design emphasizes visual energy, sophisticated animations, and premium professional aesthetic. User preference: ORIGINAL energetic design retained after rejecting minimal white alternative. AnimatedCounter component refactored to accept isInView prop from parent container for reliable intersection observer triggering in all contexts.
-   **Interactive Elements:** Enhanced `ScrollableCards` component with mouse drag, grab/grabbing cursor states. Carousels include navigation dots and hover-activated arrow buttons.
-   **Page Design Philosophy:** Inspired by leading agencies, featuring parallax scroll effects, horizontal scrolling carousels, interactive 3-category service tabs, AI-enhanced sections, stats grids, and case studies with stagger animations. `ScrollReveal` components are for fade-in and slide-up animations.
-   **UI/UX decisions:** The platform features "Road Map 2026" page (`/roadmap`) with interactive timeline, animated metrics, and cinematic scroll effects, including a custom `TimelineMilestone` component and brand color integration. Improved color contrast throughout roadmap page with white text (text-white, text-slate-200) on dark backgrounds (#1A1A1A) for better readability. Homepage includes roadmap CTA card in `CTASections` component linking to full roadmap. The "Why Us" page (`/why-us`) features an Auralee-inspired editorial aesthetic with bold typography, alternating dark (#0F0F0F) and light sections, neon accent highlights (#00FF88), generous whitespace, minimal card designs, and clean grid layouts showcasing 3 beliefs, 6 differentiators, 6 team members, 4 stats, and 2 testimonials with comprehensive data-testid coverage for E2E testing. **Why Us Hero (Nov 2025):** Cinematic astronaut background with GSAP parallax scrolling, film grain overlay (/grain.svg), color grading (warm amber + deep teal), vignette radial gradient, glass CTA button with backdrop-blur, and differentiated messaging: "BUILT DIFFERENT" kicker with "We Create Culture, Not Just Campaigns" headline emphasizing creativity over AI buzzwords (inspired by research of Superside, Social Shepherd, Socially Powerful agencies). Mobile-optimized responsive design with flexbox wrapping headings, scaled stats grids (2x2 on mobile, 1x4 on desktop), and responsive typography using CSS variables (--h1-mobile: 38px, --h1-tablet: 52px, --h1-desktop: 64px, --accent-green: #00FF88) for consistency.
-   **Homepage Polish (Nov 2025):** Comprehensive global-tier agency polish including: AI data-particle overlays on hero with animated grid patterns, floating particles, and scanning lines; enhanced hero typography with refined letter spacing and font weights; 0.3s ease-in hover animations on service cards; real OARC case studies (Gym Group, Azzaro, Body Shop, Tefal, Lenovo Legion, ESL Gaming) with KPI glow + tilt hover effects; grayscale testimonial images with company watermarks; FAQ purple gradient hover borders with "Because transparency is part of our process." tagline; footer with bold category titles, dividers, and orange Quick Links; parallax scrolling on hero background; light sweep animation (15s infinite); `ScrollReveal` component with Intersection Observer for scroll-triggered fade-in animations on all major sections with staggered delays; accessibility support for prefers-reduced-motion; centralized case studies data in `client/src/data/caseStudies.ts`.
-   **Case Studies:** Centralized metadata system with TypeScript types for brand, category, metrics, images, and routing. Six featured case studies with real OARC clients. Case studies index at `/our-work` route with grid layout and hover effects. Individual case study pages at `/case-studies/[slug]` pattern.
-   **PDF Marketing Collateral (Nov 2025):** Professional print-ready PDF documents for client proposals targeting Malta and European markets. Three documents modeled after GrowExx's premium design aesthetic: (1) Company Profile (10-page comprehensive deck with services, case studies, tech stack), (2) One-Pager Capability (condensed single-page overview), and (3) AI & Creative Profile (8-page AI-focused deck). HTML-based documents with print-optimized CSS (`client/src/styles/pdf.css`) using A4 page size, black backgrounds with orange (#FF5A00) and green (#00FF9C) accents, page break controls, and print media queries. Centralized company data in `client/src/data/companyProfile.ts` includes Malta/EU case studies (Mediterranean Retail Chain, Premium Dental Studio, Boutique Café Brand, EU Tech Startup). PDF Hub navigation at `/pdf` route with print instructions and usage recommendations.
-   **AI Employee Service Pages (Nov 2025):** Make.com-inspired exceptional design for 7 AI employee roles (SDR, Customer Support, Marketing Coordinator, Content Writer, Data Analyst, Financial Analyst, Administrative Assistant). Each role has unique JSON content (`client/public/content/services/ai-*.json`) with benefits, features, use cases, integrations, and metrics. Dynamic `AIEmployeeService.tsx` component loads role-specific content via slug extraction from URL. Design features: (1) Custom hero images (7 generated images with futuristic purple lighting stored in `attached_assets/generated_images/`), (2) Two-column hero layout (content left, image right), (3) Floating gradient orbs background (3 animated orbs with purple/violet/fuchsia gradients, 8s/10s/12s durations, responsive sizing: 300-350px mobile → 450-600px desktop, `will-change` optimization, `motion-reduce:hidden` for accessibility), (4) Scroll-triggered animations using ScrollReveal + Framer Motion, (5) Enhanced hover effects on cards (scale 1.02-1.05, lift -4px to -8px, purple border transitions), (6) Purple gradient color scheme matching Services page redesign, (7) Complete data-testid coverage for E2E testing. Routes: `/services/ai-sdr`, `/services/ai-support`, `/services/ai-marketing`, `/services/ai-writer`, `/services/ai-analyst`, `/services/ai-financial-analyst`, `/services/ai-admin`. Replaced Social Media Manager with Financial Analyst per user request in `servicesConfig.ts`.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) managed with Drizzle ORM.

### External Dependencies

**Third-Party UI Libraries:**
-   Radix UI
-   Shadcn/ui
-   Embla Carousel
-   Lucide React (icons)
-   CMDK (command palette)
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

**Asset Management:**
-   Image assets stored in `attached_assets/`
-   Service content managed via JSON files in `client/public/content/services/`