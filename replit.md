# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform built with React and Express, showcasing AI-powered creative services, AI employees, and revenue automation solutions. It targets a premium market with a high-end aesthetic and sophisticated animations, aiming to provide a scalable platform for AI-powered marketing. The project features a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform utilizes a React frontend and an Express.js backend.

**Frontend:**
-   **Framework:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Inter and Space Grotesk typography, and CSS animations.
-   **State Management & Routing:** Wouter for routing, TanStack Query for server state, React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents), responsive typography, and performance-conscious CSS animations.
-   **Key Features:** Includes a comprehensive homepage, 25 distinct service pages covering creative, growth, and AI services, and consistent component standards (e.g., Shadcn Button defaults, SPA-safe Open Graph tags, mobile-first responsive design).
-   **Service Pages:** Dynamically loaded content, SEO meta tags, and consistent content strategy emphasizing performance metrics and differentiation.
-   **Navigation:** Superside-inspired master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories, ensuring all 25 service pages are accessible.

**Backend:**
-   **Framework:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schema and Zod validation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) with Drizzle ORM.

### External Dependencies

**Third-Party UI Libraries:**
-   Radix UI
-   Embla Carousel
-   Lucide React (icons)
-   CMDK (command palette)

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
-   Image assets in `attached_assets/`
-   Service content in `client/public/content/services/` (JSON-based)

### Recent Changes (October 27, 2025)

**Social Media Creative & Management Page - Superside-Inspired Rebuild:**
-   Completely rebuilt `/services/social-media-creative-management` with Superside.com design inspiration
-   Clean, minimalist professional aesthetic with high-end scroll animations
-   **11-Section Page Structure:**
    1. Hero Section - Parallax scroll effects with opacity/scale transforms
    2. Services Carousel - Horizontal scrolling with 6 service cards
    3. Trusted By Section - Brand logos
    4. 3-Category Service Tabs - Social, Paid, Influencer (18 total services)
    5. Platform Expertise - All 8 major platforms (Instagram, TikTok, LinkedIn, Facebook, YouTube, Twitter/X, Snapchat, Pinterest)
    6. AI-Enhanced Section - Parallax sparkles background
    7. Stats Grid - 4 metrics with hover effects
    8. Case Studies - 3 cards with stagger animation
    9. Final CTA - Scale-in animation with rotating background
    10. Scroll Indicator - Animated chevron
    11. SEO Meta Tags
-   **Framer Motion Scroll Animations:**
    -   ScrollReveal component: Fade-in + slide-up on viewport entry (once: true)
    -   Hero parallax: Opacity and scale based on scroll position
    -   Service carousel: Stagger animation (50ms delay per card, x-axis slide)
    -   Service grid: Stagger reveals on tab switch
    -   Platform cards: Individual fade-up + hover lift
    -   Stats: Hover scale effects
    -   Case studies: Stagger with hover lift (-12px translateY)
    -   Final CTA: Scale-in from 0 to 1 on viewport
    -   Background sparkles: 60s continuous rotation
-   **Brand Color Compliance:**
    -   All accent colors use brand blue (#5B7FFF / 240 80% 60%)
    -   Secondary accents use purple (280 70% 55%)
    -   NO orange, green, yellow, red, or pink colors
    -   All gradients use blue-to-purple or blue-to-blue combinations
-   **Shadcn Component Compliance:**
    -   All buttons use default variants (default, outline, secondary)
    -   NO custom hover states or bg-* overrides
    -   Built-in hover-elevate and active-elevate-2 utilities handle interactions
-   **3-Category Service Structure:**
    -   Interactive tabs with smooth animations
    -   Social: 6 services (Organic content, Community management, Calendar, Video, Post design, Analytics)
    -   Paid: 6 services (Advertising, Campaign management, A/B testing, Targeting, Retargeting, Reporting)
    -   Influencer: 6 services (Partnerships, UGC strategy, Creator management, Ambassadors, Tracking, Content rights)
-   **Platform Coverage:**
    -   8 platforms with gradient icon backgrounds and 3 key features each
    -   All using brand-compliant blue/purple gradients
-   **Performance:**
    -   60fps smooth animations with GPU acceleration
    -   Viewport optimization (once: true prevents re-animation)
    -   Passive scroll listeners
    -   Stagger delays prevent animation overload

**ScrollableCards Component - Mouse Drag Functionality:**
-   Enhanced `ScrollableCards` component with full mouse drag scrolling support
-   Configuration: `dragFree: true` enables free-form horizontal dragging
-   Added grab/grabbing cursor states for visual feedback
-   Implemented unique test IDs via optional `id` prop to support multiple carousel instances
-   Component now accepts configurable `id` parameter (defaults to 'carousel')
-   Button test IDs are unique per instance: `button-scroll-prev-${id}`, `button-scroll-next-${id}`
-   Navigation arrows appear on hover with smooth opacity transitions
-   Fixed horizontal overflow issues across all service pages