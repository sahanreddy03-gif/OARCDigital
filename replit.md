# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform built with React and Express. It aims to provide AI-powered creative services, AI employees, and revenue automation solutions to a premium market. The platform features a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform utilizes a React frontend and an Express.js backend.

**Frontend:**
-   **Framework:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Inter and Space Grotesk typography, and CSS animations (including Framer Motion for scroll animations).
-   **State Management & Routing:** Wouter for routing, TanStack Query for server state, React Hook Form with Zod for form validation.
-   **Design System:** Features a two-palette color system (primary green, orange-600 accents, with recent designs incorporating teal/turquoise and blue/purple brand colors), responsive typography, and performance-conscious CSS animations. All Shadcn buttons use default variants.
-   **Key Features:** Comprehensive homepage, 25 distinct service pages covering creative, growth, and AI services, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design. Service pages include dynamically loaded content and SEO meta tags.
-   **Navigation:** Superside-inspired master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories, ensuring all 25 service pages are accessible.
-   **Interactive Elements:** Enhanced `ScrollableCards` component with mouse drag support, grab/grabbing cursor states, and unique test IDs for multiple instances. Carousels feature navigation dots and arrow buttons appearing on hover.
-   **Page Design Examples (Social Shepherd and Superside inspired):**
    -   Sections include hero, award recognition, platform partner logos, strategic approach content, full-service carousels, case studies, creative showcases, benefits carousels, and CTA cards.
    -   Specific designs feature exact brand color replication (e.g., Social Shepherd's teal #5FD4C4), font-black headings, rounded-3xl corners on images/cards, black square icons with white symbols, and teal checkmarks.
    -   Superside-inspired pages feature parallax scroll effects, horizontal scrolling service carousels, 3-category service tabs with interactive animations, platform expertise sections, AI-enhanced sections, stats grids, and case studies with stagger animations.
    -   Employs `ScrollReveal` component for fade-in + slide-up animations, hero parallax effects, and 60fps smooth animations with GPU acceleration.

**Backend:**
-   **Framework:** Express.js with TypeScript.
-   **API:** RESTful API with shared TypeScript schema and Zod validation.

**Data Storage:**
-   **Database:** PostgreSQL (Neon serverless) with Drizzle ORM.

### External Dependencies

**Third-Party UI Libraries:**
-   Radix UI
-   Shadcn/ui
-   Embla Carousel
-   Lucide React (icons)
-   CMDK (command palette)
-   Framer Motion (for animations)
-   react-icons (for social media icons)

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

### Recent Changes
**October 29, 2025:**
-   **Alternating Grid Layout Implementation:** Restructured all four service pages (Social, Paid, Creative, Influencer) from stacked vertical sections to alternating left-right horizontal grid layout matching Social Shepherd's exact design:
    -   **Pattern:** Section 1: Text Left + Image Right → Section 2: Image Left + Text Right → Section 3: Text Left + Image Right
    -   **Grid Structure:** All content sections use `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center` for responsive 2-column layout
    -   **Image Specifications:** Standardized all images to `w-full rounded-3xl h-[500px] object-cover` with exact 500px height
    -   **Container Widths:** Grid sections use max-w-6xl, standalone sections use max-w-4xl
    -   **Button Consistency:** All buttons use text-base sizing (changed from text-lg)
    -   **Section Spacing:** Maintained py-14 standardization for vertical rhythm
-   **Paid Page Third Section:** Converted standalone Studio Photo and Reporting sections into unified Text Left + Image Right grid section to complete the alternating pattern
-   **Service Carousel Redesign (3-Card Grid):** Transformed all service carousels from single-card view to 3-card grid layout (`grid-cols-1 md:grid-cols-3`) on Social, Paid, Creative, and Influencer pages
    -   Implemented wraparound logic using `[0, 1, 2].map((offset) => { const actualIdx = (currentService + offset) % services.length; ... })` pattern
    -   Navigation button appears only on the 3rd card
    -   Carousel dots and navigation work seamlessly with the grid layout
-   **Decorative Element Update:** Changed hero section decorative from single line (w-8 h-0.5) to two small hyphens (two w-6 h-0.5 divs with gap-2) for exact Social Shepherd matching across all four service pages
-   **Typography Refinement:** Reduced font sizes across all service pages for better visual hierarchy:
    -   Main headings: text-5xl/6xl/7xl → text-4xl/5xl/6xl
    -   Section headings: text-3xl/4xl/5xl → text-2xl/3xl/4xl
    -   Body text: text-lg → text-base
    -   Carousel card headings: text-2xl/3xl → text-xl/2xl
    -   Carousel descriptions: text-base → text-sm
-   **Testing:** All changes verified with comprehensive E2E tests across all four service pages - all tests passed successfully, confirming correct alternating pattern implementation, grid structure, image styling, and cross-page consistency

**October 28, 2025:**
-   Added decorative line symbol (w-8 h-0.5 bg-black) before hero headings on Social, Paid, Creative, and Influencer service pages for exact Social Shepherd clone consistency
-   Created Creative services page (`/services/creative`) with 14 sections:
    1. Hero section with decorative line + "Delivering outstanding Creative across Video, Design and Motion" heading
    2. Video production behind-the-scenes photo
    3. "We're social creative specialists" content section with CTA
    4. Camera monitor display photo
    5. "Our creatives spans from strategy to delivery" content section with CTA
    6. Design workspace dual monitors photo
    7. "Always-on content and creative campaigns" content section with CTA
    8. "Our full-service Creative offering" single-card carousel (5 services)
    9. "Checkout our latest Campaign Creatives" video showcase section (2 videos)
    10. "Checkout our latest Organic Social Creatives" video showcase section (2 videos)
    11. "Checkout our latest Paid Social Creatives" video showcase section (2 videos)
    12. "Why The Social Shepherd?" benefits carousel (6 benefits)
    13. Final teal CTA card (#5FD4C4) with team photo
    14. Newsletter signup section
-   All CTAs on Creative page link to `/contact`
-   Creative page follows exact Social Shepherd design: teal #5FD4C4, font-black headings, rounded-3xl corners, black square icons with white symbols, teal play buttons and checkmarks
-   Stock images downloaded: video production setup, camera monitor, design workspace
-   Page tested and passed comprehensive E2E tests (39 verification steps)
-   Created Influencer services page (`/services/influencer`) with 13 sections:
    1. Hero section with decorative line + "We deliver brand awareness and direct-response Influencer & Creator campaigns" heading
    2. Flat lay picnic scene photo
    3. "Human-led influencer approach" content section with CTA
    4. Skincare products photo
    5. "End-to-end Campaign Management" content section with CTA
    6. Package delivery photo
    7. "Creators for User-generated Content" content section with CTA
    8. "Our full-service Influencer and Creator offering" single-card carousel (3 services)
    9. "How we've used Influencers to grow our clients" case study carousel (2 case studies: Bio-Oil, Lumene)
    10. "Checkout our latest Influencer content" video showcase section (5 videos in grid)
    11. "Why The Social Shepherd?" benefits carousel (5 benefits)
    12. Final teal CTA card (#5FD4C4) with team photo
    13. Newsletter signup section
-   All CTAs on Influencer page link to `/contact`
-   Stock images downloaded: flat lay picnic, skincare products, package delivery
-   Influencer page tested and passed comprehensive E2E tests (41 verification steps)