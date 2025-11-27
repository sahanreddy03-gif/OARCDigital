# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform delivering AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform emphasizes a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages, aiming to provide AI-driven marketing solutions with AI-driven marketing solutions.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform features a React frontend and an Express.js backend, leveraging a modern web stack for performance and scalability.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Montserrat (headings) and Nunito Sans (body) typography. Extensive CSS animations, including Framer Motion for scroll effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages (creative, growth, AI services), consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **Navigation:** Master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with scale hover animations, redesigned carousels, infinite logo marquees, and campaign galleries. All sections are wrapped in `ScrollReveal` with Intersection Observer fade-in animations and full `prefers-reduced-motion` accessibility support.
-   **Homepage Polish:** AI data-particle overlays, enhanced hero typography, hover animations on service cards, real OARC case studies with KPI glow + tilt hover effects, grayscale testimonial images, FAQ green gradient hover borders, and a footer with bold category titles. Features parallax scrolling on hero background, light sweep animation, and `ScrollReveal` components for scroll-triggered fade-in animations with staggered delays.
-   **Carousel Enhancements:** `FloatingChipCarousel` with clean transparent background and rounded-lg square edges. Carousels redesigned with modern overlaid text including 3:4 portrait aspect ratio images.
-   **Mobile Carousel Architecture:** Three distinct ultra-premium mobile animations: dual-column opposite-direction infinite scroll for AI Creative, staggered cascade floating animation for Revenue, and multi-speed dual columns for AI Employees. All mobile animations use seamless modulo-based wrapping with RAF for 60fps GPU acceleration, and `prefers-reduced-motion` accessibility support.
-   **Testimonials Section:** Three-column premium layout with client testimonials, vertical avatar stack, large quotes, highlighted "OARC" brand name, author attribution, and three stats with case study card. Includes 7s auto-rotation with pause-on-hover.
-   **Case Studies:** Centralized metadata system with TypeScript types for brand, category, metrics, images, and routing. Six featured case studies with real OARC clients, accessible at `/our-work` with individual pages at `/case-studies/[slug]`.
-   **PDF Marketing Collateral:** Professional print-ready PDF documents for client proposals (Company Profile, One-Pager Capability, AI & Creative Profile) with premium design aesthetic. HTML-based with print-optimized CSS, A4 page size, black backgrounds with orange and green accents, page break controls, and print media queries.
-   **AI Employee Service Pages:** Modern SaaS-inspired design for 7 AI employee roles, each with unique JSON content. Features custom hero images, two-column hero layout, floating gradient orbs background with `will-change` optimization and `motion-reduce:hidden` for accessibility, scroll-triggered animations, enhanced hover effects on cards, and a purple gradient color scheme.
-   **Contact Information & Global Presence:** Premium implementation of global contact details across Footer and dedicated Contact page (`/contact`). Contact page features a clean enterprise design with primary contact section and comprehensive global offices grid displaying department-specific phone numbers organized by location.
-   **Advanced SEO Infrastructure:**
    -   **Centralized SEO Config:** Single source of truth (`shared/seoConfig.ts`) for all slugs (locations, services, case studies) ensuring sitemap, routes, and components stay synchronized.
    -   **Programmatic Location Pages:** 80+ auto-generated location-based service pages (`/malta/[location]/[service]`).
    -   **Auto-Generated Sitemap:** Dynamic sitemap.xml served at `/sitemap.xml` including all core pages, 33 service pages, 80+ location pages, and 16 case studies (130+ total pages).
    -   **Optimized Robots.txt:** SEO-friendly robots.txt at `/robots.txt` with Google/Bing fast-crawling enabled and bad bot blocking.
    -   **Advanced Schema Markup:** FAQ schema, Review/Rating schema, BreadcrumbList schema, HowTo schema, VideoObject, Article, Product, Service, and Event schemas via `advancedSchema.ts` utility.
    -   **Voice Search Optimization:** Conversational Q&A content format throughout location pages, FAQ sections, and comparison page.
    -   **Internal Linking System:** Intelligent internal linking utility (`internalLinking.ts`) that automatically suggests related services, case studies, and location pages.
    -   **Comparison Page:** High-intent comparison page (`/comparison`) targeting "OARC vs traditional agencies", "AI employees vs hiring" searches with detailed feature tables, cost comparisons, and FAQ sections.
    -   **Blog Infrastructure:** SEO-optimized blog system (`/blog`) with topic cluster architecture, breadcrumb schema, voice search optimization, and featured snippet formatting.
    -   **Enhanced Homepage Schema:** Homepage combines Organization, LocalBusiness, FAQ, AggregateRating, and Review schemas in @graph format.
-   **Service Page Visual Enhancement Pattern:** Standardized visual treatment applied to service pages for homepage-style aesthetic consistency, including `ScrollReveal` animations with staggered delays, gradient backgrounds, floating orbs, and image hover effects (`scale-110` to `scale-115`).
-   **Homepage Section Order (17 sections):** Hero Section (with 3D Concave Carousel), Trusted Brands (NEW - floating logo carousel), Creative Work (AI Creative showcase), Phone Section, Our Difference, Hire AI Employees, Tech Enabled (NEW - masonry grid), Revenue and Workflow Automations, Success in Numbers, Our Impact (case studies), Testimonials, ROI Calculator (NEW - interactive sliders), Money-Back Guarantee (NEW - 30% ROI in 90 days), Blog Preview (NEW - 3 featured articles), CTA Sections, Need Help? CTA (NEW - green bar), FAQ, Footer.
-   **3D Carousel Polish:** Refs-based rendering, Lerp interpolation (factor 0.08), Spring physics (damping 0.92), motion blur, direct DOM manipulation for performance.
-   **Typography System:** 9 semantic levels with fluid `clamp()` values (e.g., `.text-display`, `.text-heading-xl`, `.text-body`).
-   **Smooth Scroll System:** `AdvancedScrollReveal` component wraps all homepage sections with animation variants (fade, slide-up, slide-left, slide-right, scale), staggered delays, custom cubic-bezier easing, and accessibility support.
-   **Mobile Landscape Mode:** CSS media queries and utility classes (`.landscape-show`, `.landscape-hidden`, `.landscape-flex`) for adapting layout when device is tilted.
-   **Icon Standardization:** Lucide React for generic icons, `react-icons/si` ONLY for brand logos.
-   **Why Us Page Enhancement:** OARC origin story timeline, OARC meaning breakdown, mission statement section.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.
-   **SEO Routes:** Server routes for sitemap.xml and robots.txt with programmatic generation of all pages.

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