# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform focused on delivering AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform aims to provide high-end, AI-driven marketing solutions, emphasizing a sophisticated aesthetic, advanced animations, and a multi-page architecture to support its 25 distinct service offerings and 6 supporting pages.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform utilizes a modern web stack with a React frontend and an Express.js backend.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, powered by Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette. Typography uses Montserrat (headings) and Nunito Sans (body). Extensive CSS animations, including Framer Motion for scroll effects, and `ScrollReveal` with Intersection Observer for fade-in animations.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents, with teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations.
-   **Key Features:** Comprehensive homepage, 25 specialized service pages (creative, growth, AI services), consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design.
-   **Navigation:** Includes a master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories.
-   **UI/UX Decisions:** Premium agency-grade aesthetic with fluid typography, large icons with hover animations, redesigned carousels, infinite logo marquees, campaign galleries, parallax scrolling, and light sweep animations.
-   **Mobile Animations:** Three distinct ultra-premium mobile animations for different service categories, using modulo-based wrapping with RAF for 60fps GPU acceleration.
-   **Case Studies:** Centralized metadata system for brand, category, metrics, and routing, with six featured case studies and individual pages.
-   **Our Work Page - Elite Creative Portfolio:** Showcases creative services with an elite, premium aesthetic using OARC brand colors (#c4ff4d lime, #23AACA teal, #4ade80 green). Features dark zinc-950 hero with floating brand particles, elite filter tabs with lime green active states, premium case study grid with category-specific color coding (lime for creative, teal for AI), premium stats bar with brand-colored icons, and gradient text CTAs.
-   **PDF Marketing Collateral:** Professional, print-ready HTML-based PDF documents for client proposals with a premium design aesthetic.
-   **AI Employee & Revenue Service Pages:** Feature an "Elevated Monochrome Futurism" design with custom grayscale hero images, animated grid backgrounds, glassmorphism effects, integration hub visualizations, and workflow diagrams.
-   **Creative Services Pages:** Utilize a vibrant design philosophy with colorful gradients, animated particles, and dynamic typography to showcase creative capabilities.
-   **Advanced SEO Infrastructure:** Centralized SEO configuration, programmatic location pages (80+), auto-generated dynamic sitemap.xml, optimized robots.txt, advanced schema markup (FAQ, Review, BreadcrumbList, HowTo, VideoObject, Article, Product, Service, Event, Organization, LocalBusiness, AggregateRating), voice search optimization, intelligent internal linking, and an SEO-optimized blog system.
-   **Homepage Structure:** Comprises 19 sections including the Enhanced Split Screen Hero, OARC brand pillars, trusted brands, creative work showcase, AI employee sections, revenue automation, success metrics, case studies, testimonials, an ROI calculator, and a money-back guarantee section.
-   **Enhanced Split Screen Hero:** World-class three-column layout (40% Creative | 20% Fusion | 40% AI) featuring: cream background (#FDFCFA) with 3-layer parallax mouse tracking, canvas-based 400-particle system crossing from both sides to center, left-side work cards grid with floating animations and hover metric overlays, center fusion zone with OARC logo and "Creative × AI" headline, right-side AI systems with typing code terminal and animated data visualization (340%, 275%, 310% metrics). Full accessibility support with reduced motion preferences, keyboard navigation, and screen reader text.
-   **Typography System:** 9 semantic levels with fluid `clamp()` values.
-   **Smooth Scroll System:** `AdvancedScrollReveal` component for scroll-triggered animations with variants, staggered delays, and custom easing.
-   **Mobile Landscape Mode:** CSS media queries for adapting layout in landscape orientation.
-   **Icon Standardization:** Lucide React for generic icons, `react-icons/si` for brand logos.
-   **MVP Development Service Pages:** Two interconnected pages with "Elevated Monochrome Futurism" design, detailing MVP services with process timelines, tech stack marquees, case study carousels, and specific sections targeting software founders. These pages include AI-generated product mockups.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schemas and Zod validation.
-   **SEO Routes:** Server routes for sitemap.xml and robots.txt with programmatic generation.

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