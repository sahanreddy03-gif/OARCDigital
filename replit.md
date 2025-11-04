# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a marketing agency platform designed to deliver AI-powered creative services, AI employees, and revenue automation solutions to a premium market. Built with React and Express, the platform emphasizes a high-end aesthetic, sophisticated animations, and a multi-page architecture supporting 25 distinct service offerings and 6 supporting pages.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform features a React frontend and an Express.js backend, leveraging a modern web stack for performance and scalability.

**Frontend:**
-   **Framework & Language:** React 18+ with TypeScript, using Vite.
-   **UI/Styling:** Utilizes Shadcn/ui (New York style) based on Radix UI, Tailwind CSS with a custom HSL-based color palette, Inter and Space Grotesk typography, and extensive CSS animations, including Framer Motion for scroll effects.
-   **State Management & Routing:** Wouter for client-side routing, TanStack Query for server state management, and React Hook Form with Zod for robust form validation.
-   **Design System:** Incorporates a two-palette color system (primary green, orange-600 accents, with recent additions of teal/turquoise and blue/purple brand colors), responsive typography, and performance-optimized CSS animations. All Shadcn buttons use default variants.
-   **Key Features:** Includes a comprehensive homepage, 25 specialized service pages covering creative, growth, and AI services, consistent component standards, SPA-safe Open Graph tags, and mobile-first responsive design. Service pages feature dynamically loaded content and SEO meta tags.
-   **Navigation:** A master services page (`/services`) with an accordion layout, a desktop hover mega menu, and footer service categories ensure all 25 services are easily accessible.
-   **Interactive Elements:** Enhanced `ScrollableCards` component with mouse drag support, grab/grabbing cursor states. Carousels include navigation dots and arrow buttons appearing on hover.
-   **Page Design Philosophy:** Inspired by leading agencies like Social Shepherd and Superside, designs feature parallax scroll effects, horizontal scrolling service carousels, interactive 3-category service tabs, platform expertise sections, AI-enhanced sections, stats grids, and case studies with stagger animations. `ScrollReveal` components are used for fade-in and slide-up animations.

**Backend:**
-   **Framework & Language:** Express.js with TypeScript.
-   **API:** Provides a RESTful API with shared TypeScript schemas and Zod validation for data integrity.

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