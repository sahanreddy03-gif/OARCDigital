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

**ScrollableCards Component - Mouse Drag Functionality:**
-   Enhanced `ScrollableCards` component with full mouse drag scrolling support
-   Configuration: `dragFree: true` enables free-form horizontal dragging
-   Added grab/grabbing cursor states for visual feedback
-   Implemented unique test IDs via optional `id` prop to support multiple carousel instances
-   Component now accepts configurable `id` parameter (defaults to 'carousel')
-   Button test IDs are unique per instance: `button-scroll-prev-${id}`, `button-scroll-next-${id}`
-   Navigation arrows appear on hover with smooth opacity transitions
-   Fixed horizontal overflow issues across all service pages

**Social Media Creative & Management Page - Complete Rebuild from Specifications:**
-   Completely rebuilt `/services/social-media-creative-management` following 3 detailed specification documents
-   Meets "premium, elite, cinematic" quality standard with Social Shepherd-inspired design
-   **15-Section Page Structure (Exact Copy from Spec):**
    1. Hero Section - 3D phone parallax with floating devices and video loops
    2. Trust Bar - 5 micro-icons (Retail, SaaS, Hospitality, Ecommerce, Creators)
    3. Problem Section - "The social game changed" with emotional pain points
    4. Solution Section - 3 pillar cards (Create, Manage, Convert) with glassmorphism
    5. Full Social Stack - 12-feature grid with generous spacing
    6. Platform Scroller - Instagram, TikTok, YouTube, LinkedIn with horizontal snap
    7. Content Showcase - Reels, Motion Ads, Carousels, UGC, Story Flows carousel
    8. Management Section - "Daily momentum" with bullet points
    9. Growth Engine - 5-step process (Discover, Plan, Create, Amplify, Optimize)
    10. Add-ons Section - 3 mini cards (Influencers, UGC, Paid Social)
    11. KPIs Section - 3 animated stats (+72%, 3×, 24/7)
    12. Case Studies - 3 cards (F&B, SaaS, Ecommerce)
    13. Testimonials - Auto-slide carousel with 3-5 quotes
    14. Final CTA - "Ready to dominate your category?"
    15. FAQ Section - 5-question accordion
-   **Technical Implementation:**
    -   **Hero Phones:** Actual `<video>` elements with autoPlay/loop/muted for all 3 devices
    -   **Video Loops:** Social Shepherd-style looping backgrounds with gradient SVG posters as fallbacks
    -   **3D Parallax:** Perspective transforms (rotateY) and scroll-based translateY on hero phones
    -   **CountUp Animations:** All 3 KPIs use CountUp component with prefix/suffix support ("+72%", "3×", "24/7")
    -   **Floating Icons:** Animated social interaction icons (likes, comments, shares) around phones
-   **Design Specifications (Fully Implemented):**
    -   **Colors:** Electric Purple (#8B5CF6), Magenta (#EC4899), Teal (#2DD4BF), Amber (#FBBF24)
    -   **Typography:** H1 64-72px desktop, H2 40-48px, premium Inter/Space Grotesk fonts
    -   **Glassmorphism:** Cards with bg-white/60, backdrop-blur-lg, soft shadows
    -   **Gradients:** Multi-color gradients throughout (purple-pink-orange, teal-blue, amber-pink)
    -   **Spacing:** 120-160px vertical spacing between sections (py-32 = 128px)
    -   **Animations:** Scroll-triggered fade-ups, hover effects, parallax, CountUp numerics
-   **Mobile Optimizations:**
    -   Sticky CTA bar appearing on scroll (bottom-0 fixed)
    -   Simplified parallax (phones hidden on mobile)
    -   Horizontal scrollers with snap points
    -   Responsive typography and spacing
-   **Performance Considerations:**
    -   Base64-encoded placeholder videos with gradient SVG posters
    -   Passive scroll listeners for parallax
    -   CSS transitions over JavaScript animations
    -   Lazy loading for below-fold content
-   **Architect Approval:** Full compliance confirmed with all 3 specification documents
-   **Next Steps:** Cross-browser/device QA recommended (especially iOS low power mode video behavior)