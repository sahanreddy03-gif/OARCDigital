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

**Social Media Creative & Management Page - Complete Redesign:**
-   Completely redesigned `/services/social-media-creative-management` with premium, elite aesthetic
-   Integrated best content and services from top competitors (Superside, Social Shepherd, Socially Powerful)
-   **16 Comprehensive Services Implemented:**
    1. Organic Social Media Content (daily posting, platform-native formats)
    2. Social Media Video Content (Reels, TikToks, YouTube, livestream)
    3. Social Media Post Design (custom graphics, carousel designs)
    4. Social Media Collateral (profile design, highlight covers)
    5. Social Media Response Guide (brand voice, crisis protocols)
    6. Social Media Concepts (campaign ideation, trend forecasting)
    7. Community Management (daily engagement, 2-hour response time)
    8. Social Media Analytics (performance tracking, competitive analysis)
    9. Social Media Advertising (paid campaigns, audience targeting)
    10. Influencer Marketing (creator partnerships, campaign management)
    11. Social Listening & Monitoring (brand mentions, sentiment analysis)
    12. Crisis Management (24/7 monitoring, reputation management)
    13. Social Commerce (Instagram Shop, TikTok Shop integration)
    14. Content Calendar Management (strategic planning, approval workflows)
    15. UGC Strategy & Management (user-generated content curation)
    16. Social SEO Optimization (profile optimization, search discovery)
-   **8 Major Platform Coverage:**
    -   Instagram (Reels mastery, Story strategies, Shopping tags)
    -   TikTok (viral trends, sound strategy, TikTok Shop)
    -   LinkedIn (thought leadership, B2B targeting, employee advocacy)
    -   Facebook (community groups, Facebook Shops, live video)
    -   YouTube (long-form content, YouTube Shorts, SEO optimization)
    -   Twitter/X (thread creation, trend-jacking, Spaces)
    -   Snapchat (AR lenses, Snap Ads, Spotlight content)
    -   Pinterest (Idea Pins, Shopping Pins, SEO optimization)
-   **Premium Design Features:**
    -   Colorful gradient effects (orange-pink-purple) throughout
    -   Smooth CSS animations and hover effects
    -   Multiple ScrollableCards sections with unique IDs (services, platforms, case-studies)
    -   Hero section with gradient text "competitive edge"
    -   Performance metrics with 4 animated stat cards
    -   AI-Enhanced workflows section with colorful stat grid
    -   6 detailed case studies from multiple industries
    -   5-step process overview with icons
    -   Comprehensive FAQ section with accordion
    -   Premium CTAs with gradient backgrounds
-   **SEO & Metadata:**
    -   Updated title: "Social Media Creative & Management - Your Competitive Edge"
    -   Meta description optimized for search and social sharing
    -   Open Graph tags for social media previews
-   Verified through visual testing - carousel drag and navigation working correctly