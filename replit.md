# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform emphasizes a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages, aiming to provide AI-driven marketing solutions with AI-driven marketing solutions.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform features a React frontend and an Express.js backend, leveraging a modern web stack for performance and scalability.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Montserrat (headings) and Nunito Sans (body) typography for Superside-inspired sophistication, and extensive CSS animations, including Framer Motion for scroll effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations. Shadcn buttons use default variants.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages (creative, growth, AI services), consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design. Service pages include dynamically loaded content and SEO meta tags.
-   **Navigation:** Master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories for accessibility.
-   **Services Page Design:** Energetic cinematic design featuring dark background, parallax scroll effects, large animated purple/magenta/fuchsia glowing orbs, gradient hero headline "Elevate Your Digital Presence", animated stats section, interactive 3-category tabs (AI Creative, Revenue Automation, AI Employees), category hero images, and service grid cards with purple hover animations. Strategic use of purple/magenta palette for a cohesive futuristic aesthetic, retaining green CTA button for high contrast.
-   **Interactive Elements:** Enhanced `ScrollableCards` component with mouse drag and cursor states. Carousels include navigation dots and hover-activated arrow buttons.
-   **Page Design Philosophy:** Inspired by leading agencies, featuring parallax scroll effects, horizontal scrolling carousels, interactive 3-category service tabs, AI-enhanced sections, stats grids, and case studies with stagger animations. `ScrollReveal` components for fade-in and slide-up animations.
-   **UI/UX decisions:** "Road Map 2026" page (`/roadmap`) with interactive timeline, animated metrics, and cinematic scroll effects, including a custom `TimelineMilestone` component and brand color integration with improved color contrast. The "Why Us" page features a Superside-grade aesthetic with fluid typography, large icons with scale hover animations, a redesigned carousel with dark backgrounds and hover-elevate interactions, a new Brand Showcase section with an infinite logo marquee and campaign gallery, and a Founder's Manifesto section. Typography system uses fluid `clamp()` values, generous section padding, consistent letter-spacing tightening on display headings, and `leading-loose/relaxed` for body copy. Includes a "Success in Numbers" section with a two-column layout and a "Core Values" section with Lucide icons. All sections are wrapped in `ScrollReveal` with Intersection Observer fade-in animations and full `prefers-reduced-motion` accessibility support.
-   **Homepage Polish:** Global-tier agency polish including AI data-particle overlays, enhanced hero typography, hover animations on service cards, real OARC case studies with KPI glow + tilt hover effects, grayscale testimonial images, FAQ green gradient hover borders, and a footer with bold category titles. Features parallax scrolling on hero background, light sweep animation, and `ScrollReveal` components for scroll-triggered fade-in animations with staggered delays, and accessibility support for `prefers-reduced-motion`.
-   **Homepage Superside-Grade Refinements:** Elite polish achieving 90%+ Superside aesthetic similarity: content flow optimization, strict green and orange brand palette enforcement, elite typography system with Montserrat (geometric sans-serif headings) and Nunito Sans (clean body text), fluid `clamp()` responsive scaling and reduced heading sizes (clamp(1.75rem, 5vw, 3.25rem) max ~52px for refined aesthetic), ultra-light font weights, standardized subtle hover animations, comprehensive motion optimization with global `prefers-reduced-motion` support and `will-change` performance optimization, and comprehensive SEO excellence with meta descriptions, Open Graph tags, and Twitter cards. **Homepage carousels redesigned with Superside-style overlaid text:** All three carousel sections (AI Creative, AI Employees, Revenue) feature 3:4 portrait aspect ratio images, white titles overlaid directly on images with dark gradient backgrounds for legibility, and taglines removed from Creative and AI Employees sections (kept for Revenue section for educational clarity). **Carousel Responsive Design (Nov 2025):** Complete responsive redesign with three distinct ultra-premium mobile animations. Desktop (≥1024px) shows horizontal auto-scroll carousels with interactive drag using pointer events. Mobile (<1024px) features three unique "visual treat" animations using conditional rendering via shared `useMediaQuery` hook: (1) **AI Creative**: Dual-column opposite-direction infinite scroll (left column scrolls downward, right column scrolls upward, using modulo-based seamless wrapping), (2) **Revenue**: Staggered cascade floating animation (gentle float with 0.2s stagger delays across 8 cards, 3s ease-in-out), (3) **AI Employees**: Multi-speed dual columns (left 30s fast, right 45s slow for dynamic visual interest). All mobile animations use seamless modulo-based wrapping with RAF for 60fps GPU acceleration, and `prefers-reduced-motion` accessibility support. **Carousel Drag Implementation:** Desktop carousels use pointer events with document-level listeners for `pointermove`, `pointerup`, and `pointercancel` ensuring drag cleanup works regardless of pointer release location. Dragging pauses auto-scroll animation. React effect cleanup properly removes document listeners when transitioning between viewport sizes. Mobile dual-column drag uses double-modulo normalization `((value % height) + height) % height` to prevent snaps when crossing boundaries, with accumulated scroll position updated only on pointerup to ensure smooth 1:1 drag tracking.
-   **Tech Enabled Section (Nov 2025):** Compact section "Tech enabled and made to work for you" positioned between AI Creative carousel and Hire AI Employees carousel. Features "EASY & HASSLE-FREE" label, italic emphasis on "work for you", 4 feature cards in 2x2 grid (desktop) / 1-column (mobile) with aspect-[4/3] images, using Superside CDN images for platform features. Reduced section padding (py-12 md:py-16), tightened card spacing (gap-6 md:gap-8), and compact card content (p-4 md:p-6) for refined elite aesthetic. Cards include hover-elevate effects with image scale transforms. Button links to /contact. Component: `TechEnabledSection.tsx`.
-   **Elite Aesthetic Updates (Nov 2025):** Homepage sections redesigned for premium Superside-grade aesthetic: (1) AI Creative section background changed from orange/black to elite cream (#FAF9F6) with subtle gradients and white radial overlays, dark zinc-900 typography with green accent (#16a34a), (2) Tech Enabled section made more compact with reduced padding and aspect-[4/3] images, (3) Let's Talk Revenue background redesigned from teal to sophisticated off-black/charcoal gradient (zinc-900 to neutral-900) with subtle blue radial glows and glassmorphism overlay for premium feel, (4) Section ordering updated: Hire AI Employees now appears before Let's Talk Revenue to improve narrative flow.
-   **Mobile Carousel Architecture (Nov 2025):** AI Creative mobile dual-column carousel uses absolutely positioned column containers (`absolute top-0 left-0 right-0`) inside fixed-height viewport wrappers (`h-[520px] overflow-hidden`) to enable smooth translateY animations. RAF-driven opposite-direction infinite scroll (left downward, right upward) with seamless modulo-based wrapping. Pointer event handlers stored in cleanup ref to properly remove document-level listeners on unmount.
-   **Testimonials Section:** Three-column Superside-inspired layout with client testimonials. Features a vertical avatar stack for navigation, large quotes with light typography, highlighted "OARC" brand name, small author attribution, and three stats with case study card. Includes 7s auto-rotation with pause-on-hover, smooth transitions, and typography refinements for an elite minimalist aesthetic.
-   **Case Studies:** Centralized metadata system with TypeScript types for brand, category, metrics, images, and routing. Six featured case studies with real OARC clients. Case studies index at `/our-work` route with individual pages at `/case-studies/[slug]`.
-   **PDF Marketing Collateral:** Professional print-ready PDF documents for client proposals (Company Profile, One-Pager Capability, AI & Creative Profile) modeled after GrowExx's premium design aesthetic. HTML-based with print-optimized CSS, A4 page size, black backgrounds with orange and green accents, page break controls, and print media queries. Centralized company data in `client/src/data/companyProfile.ts` includes Malta/EU case studies. PDF Hub navigation at `/pdf` route.
-   **AI Employee Service Pages:** Make.com-inspired design for 7 AI employee roles (SDR, Customer Support, Marketing Coordinator, Content Writer, Data Analyst, Financial Analyst, Administrative Assistant). Each role has unique JSON content. Design features custom hero images, two-column hero layout, floating gradient orbs background with `will-change` optimization and `motion-reduce:hidden` for accessibility, scroll-triggered animations, enhanced hover effects on cards, and a purple gradient color scheme. Routes follow `/services/ai-*`.

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