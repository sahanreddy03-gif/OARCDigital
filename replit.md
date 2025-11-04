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

### Recent Changes
**November 4, 2025:**
-   **Three Pillars Micro-Taglines:** Added descriptive taglines below each category button in the Services page "Choose Your Path" section:
    -   **AI Creative Services:** "Content, media, and branding that captivate."
    -   **Revenue Automation:** "Automate growth. Amplify profit. Accelerate success."
    -   **Hire AI Employees:** "Your 24/7 digital workforce — smarter, faster, scalable."
-   **Typography Implementation:**
    -   Mobile: 12px (text-xs) with 2-line max truncation
    -   Desktop: 14px (text-sm/md:text-sm)
    -   Line-height: 1.3, font-weight: 500
    -   Color: rgba(255,255,255,0.85) for optimal contrast on dark background
-   **Layout & Spacing:**
    -   Each category now renders as flex column: button → tagline (gap-3 md:gap-2.5)
    -   Container gap increased from gap-4 to gap-8 for better visual breathing room
    -   Max-width: 220px to align with button width
-   **Accessibility Features:**
    -   Added `aria-describedby` linking buttons to taglines for screen readers
    -   Unique IDs for each tagline (tagline-aiCreative, tagline-revenue, tagline-aiEmployees)
    -   Proper semantic HTML structure
-   **Animation:** Subtle fade-in on scroll (opacity 0→0.85, 0.5s duration with 0.2s delay)
-   **Overflow Protection:** Line-clamp-2 with overflow-hidden for mobile text truncation
-   **Testing:** Architect-reviewed (Pass ✓) and E2E tested across desktop/mobile viewports - all specifications met

-   **Website-Wide Typography Rationalization:** Conducted comprehensive typography audit and refinement across entire platform for improved visual hierarchy, mobile responsiveness, and professional polish:
    -   **Services Hero:** Reduced from text-8xl to text-7xl (desktop), added high-quality layered gradient background image with dark wash overlay for better text contrast
    -   **Stats Counters:** Reduced from text-7xl to text-6xl for better proportion
    -   **Homepage "This is OARC" Section:** Reduced from text-8xl to text-6xl
    -   **"Our Difference" Section:** Reduced from text-7xl to text-5xl
    -   **ServiceGrid Component:** Hero reduced from text-7xl to text-6xl
    -   **AI Creative Services Section:** Headings reduced from text-6xl to text-5xl
    -   **Hire AI Employees Section:** Headings reduced from text-6xl to text-5xl  
    -   **Revenue Automation Section:** Headings reduced from text-6xl to text-5xl
    -   **Category Tabs:** Reduced from text-lg to text-base
    -   **All CTA Buttons:** Standardized to text-base with py-4 padding (previously mixed py-5/py-6)
    -   **Icon Sizes:** Reduced ArrowRight icons from h-6 w-6 to h-5 w-5 for better proportion
    -   **Mobile Typography:** All headings now cap at text-3xl or text-4xl on mobile, eliminating oversized text on small screens
-   **Typography Scale Standards Established:**
    -   Maximum hero text: lg:text-7xl (Services page only)
    -   Section headings: lg:text-5xl to lg:text-6xl
    -   Subsection headings: lg:text-3xl to lg:text-4xl
    -   Body text: text-base to text-lg
    -   Mobile starts at text-3xl/4xl and scales down proportionally
-   **Visual Improvements:**
    -   Better text hierarchy throughout platform
    -   Improved scan-ability and legibility
    -   More balanced spacing and proportions
    -   Enhanced mobile readability with no text overflow
    -   Consistent button styling across all pages
-   **Testing:** All changes architect-reviewed (Pass ✓) and E2E tested - typography now appropriately sized, clear visual hierarchy established, mobile responsiveness excellent, no functional issues