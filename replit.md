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