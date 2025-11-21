# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform emphasizes a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages, aiming to provide AI-driven marketing solutions with AI-driven marketing solutions.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform features a React frontend and an Express.js backend, leveraging a modern web stack for performance and scalability.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Montserrat (headings) and Nunito Sans (body) typography, and extensive CSS animations, including Framer Motion for scroll effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages (creative, growth, AI services), consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design. Service pages include dynamically loaded content and SEO meta tags.
-   **Navigation:** Master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories.
-   **Page Design Philosophy:** Inspired by leading agencies, featuring parallax scroll effects, horizontal scrolling carousels, interactive 3-category service tabs, AI-enhanced sections, stats grids, and case studies with stagger animations. `ScrollReveal` components for fade-in and slide-up animations.
-   **UI/UX Decisions:** Emphasis on a Superside-grade aesthetic with fluid typography, large icons with scale hover animations, redesigned carousels with dark backgrounds and hover-elevate interactions, infinite logo marquees, and campaign galleries. Typography uses fluid `clamp()` values, generous section padding, consistent letter-spacing, and `leading-loose/relaxed` for body copy. All sections are wrapped in `ScrollReveal` with Intersection Observer fade-in animations and full `prefers-reduced-motion` accessibility support.
-   **Homepage Polish:** Global-tier agency polish including AI data-particle overlays, enhanced hero typography, hover animations on service cards, real OARC case studies with KPI glow + tilt hover effects, grayscale testimonial images, FAQ green gradient hover borders, and a footer with bold category titles. Features parallax scrolling on hero background, light sweep animation, and `ScrollReveal` components for scroll-triggered fade-in animations with staggered delays, and accessibility support for `prefers-reduced-motion`.
-   **Hero Section Refinement:** Elite refinement of homepage landing section with ultra-light preheading typography, responsive headline sizing with bold/extralight italic contrast, and fadeSlideUp animation. Spatial design includes expanded desktop padding, enhanced horizontal gutters, and larger content max-width. Content wrapped in a glassmorphism panel.
-   **Carousel Enhancements:** FloatingChipCarousel features clean transparent background with rounded-lg square edges (replacing rounded-full pill shape), maintaining standard hover animations and transitions. Carousels redesigned with Superside-style overlaid text including 3:4 portrait aspect ratio images, white titles overlaid directly on images with dark gradient backgrounds.
-   **Mobile Carousel Architecture:** Complete responsive redesign with three distinct ultra-premium mobile animations: dual-column opposite-direction infinite scroll for AI Creative, staggered cascade floating animation for Revenue, and multi-speed dual columns for AI Employees. All mobile animations use seamless modulo-based wrapping with RAF for 60fps GPU acceleration, and `prefers-reduced-motion` accessibility support.
-   **Desktop Carousel Performance:** Optimized with enhanced `useSmoothCarouselDrag` hook, increased auto-scroll speed, increased drag multiplier, and an enhanced momentum system that blends with auto-scroll.
-   **Testimonials Section:** Three-column Superside-inspired layout with client testimonials, vertical avatar stack, large quotes, highlighted "OARC" brand name, author attribution, and three stats with case study card. Includes 7s auto-rotation with pause-on-hover, smooth transitions, and typography refinements.
-   **Case Studies:** Centralized metadata system with TypeScript types for brand, category, metrics, images, and routing. Six featured case studies with real OARC clients, accessible at `/our-work` with individual pages at `/case-studies/[slug]`.
-   **PDF Marketing Collateral:** Professional print-ready PDF documents for client proposals (Company Profile, One-Pager Capability, AI & Creative Profile) modeled after GrowExx's premium design aesthetic. HTML-based with print-optimized CSS, A4 page size, black backgrounds with orange and green accents, page break controls, and print media queries.
-   **AI Employee Service Pages:** Make.com-inspired design for 7 AI employee roles, each with unique JSON content. Features custom hero images, two-column hero layout, floating gradient orbs background with `will-change` optimization and `motion-reduce:hidden` for accessibility, scroll-triggered animations, enhanced hover effects on cards, and a purple gradient color scheme.
-   **Contact Information & Global Presence:** Premium implementation of global contact details across Footer and dedicated Contact page (`/contact`). Footer shows subtle phone numbers per office. Contact page features an Apple/Superside-inspired design with primary contact section and comprehensive global offices grid displaying department-specific phone numbers organized by location.

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