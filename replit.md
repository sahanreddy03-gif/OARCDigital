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

**ScrollableCards Implementation & Bug Fixes:**
-   Created `ScrollableCards` component using Embla Carousel for horizontal card scrolling across service pages
-   Component features: navigation arrows, drag-free scrolling, auto-hide controls, smooth animations
-   Fixed JSX closing tag errors across 13 service pages with nested map structures:
    -   AIConsulting, AICopywriting, CustomerAcquisition, DesignSystems, DigitalMarketing
    -   EmailCreative, FunnelAutomation, HireAIEmployees, Illustration, Immersive3DAR
    -   LeadGeneration, MotionDesign, PaidAdvertising, PresentationPitch, PrintPackaging
    -   RapidIdeaTesting, RevenueAutomation
-   Resolved horizontal overflow issues on service pages
-   All service pages now properly implement ScrollableCards for feature/service card displays
-   Verified functionality through end-to-end testing on multiple service pages