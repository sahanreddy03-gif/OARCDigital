# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a modern marketing agency website built with React and Express. The platform showcases AI-powered creative services, AI employees, and revenue automation solutions. It features a premium, high-end aesthetic with sophisticated animations, drawing inspiration from leading agencies. The project aims to provide a robust, scalable platform for AI-powered marketing solutions.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture

**Frontend:**
- **Framework:** React 18+ with TypeScript, Vite for fast HMR and optimized builds.
- **UI:** Shadcn/ui (New York style) built on Radix UI primitives, Tailwind CSS for styling, Class Variance Authority (CVA) for component variants.
- **Styling:** Custom HSL-based color palette, Inter and Space Grotesk typography, CSS animations for carousels and scroll effects.
- **Routing & State:** Wouter for routing, TanStack Query for server state management, React Hook Form with Zod for form validation.
- **Component Organization:** Pages, reusable UI components, and Shadcn UI components are logically separated.

**Backend:**
- **Framework:** Express.js with TypeScript.
- **Storage:** Abstract `IStorage` interface, default in-memory storage, Drizzle ORM for PostgreSQL.
- **API:** RESTful API with shared TypeScript schema and Zod validation.

**Data Storage:**
- **Database:** PostgreSQL (Neon serverless) with Drizzle ORM for type-safe queries.
- **Schema:** UUID primary keys, extensible design for user authentication and future tables.

**Design System:**
- **Color Palette:** Two-palette system with primary green (#c4ff4d) for dark sections, orange-600 (#ea580c) for white section accents, and alternating dark/light sections using deep charcoals and warm orange gradients. WCAG AA contrast maintained (3.55:1 for large text on white).
- **Typography:** Responsive scale using Inter for body and Space Grotesk for display text.
- **Animation:** Smooth CSS keyframe carousels, Intersection Observer for scroll-triggered letter reveals, and performance-conscious transitions.

**Key Features:**
- **Homepage Sections:** Hero, Social First Agency, Brand Carousel, Our Difference, Let's Talk OARC, AI Creative Services, Hire AI Employees, Let's Talk Revenue, Performance Metrics, CTA Sections, Brand Showcase, Testimonials. Each section has a distinct visual style with sophisticated two-palette alternating system (black/orange and white backgrounds).
- **Carousel Functionality:** Fixed animation glitch by changing from 3x to 2x duplication (matches -50% translation). Includes 17 services: Paid Advertising, Media Buying, Website Design, Influencer Marketing, and more. Premium 8K stock images with enhanced animations (scale-105 hover, shadow-2xl, ring highlights with green accent, 500ms image zoom transitions).
- **Social First Agency Section:** Reduced heading size (text-3xl/4xl/5xl for 3-line display), subtitle "We grow ambitious brands with Social, Paid, Creative and Influencer", phone content cycles through 3 messages with larger font (text-xl/2xl/3xl).
- **Section Headings:** Reduced font sizes across AI Creative, Hire AI Employees, and Let's Talk Revenue sections from text-5xl-8xl to text-4xl-6xl for better readability and visual balance.
- **Let's Talk OARC Section:** Compact, single-section design with 2x2 grid layout (desktop) and vertical stack (mobile). Features giant decorative letters (10-14rem) in orange-600/10, condensed copy, and scroll-triggered animations. Uses orange-600 (#ea580c) for titles with WCAG-compliant 3.55:1 contrast ratio on white background. Total height: ~100vh (vs previous 400vh+ design) for optimal user experience without excessive scrolling.
- **Brand Showcase Section:** Superside-inspired asymmetric grid with varying card sizes (Nike 2x2 large, Mercedes 2x1 wide, others 1x1 small). Features real brands: Nike, Apple, Coca-Cola, Starbucks, Mercedes-Benz, Amazon with 8K stock images. Includes hover effects (scale, overlay, arrow rotation), metric badges, creative non-uniform layout on desktop (auto-rows-[280px] grid), responsive stacking on mobile. "View All Case Studies" CTA button.
- **Testimonials Redesign:** Compact, smart format with smaller professional headshots (200px/240px width sidebar, not full half). Featured testimonial with quote, metric badge integrated with author info, navigation controls (prev/next buttons + counter) in same row. Removed thumbnail grid below for tighter layout. 4 testimonials with smooth state-managed transitions. Fully responsive with vertical stacking on mobile.

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI (accordion, dialog, dropdown, tooltip, etc.)
- Embla Carousel
- Lucide React (icons)
- CMDK (command palette)

**Development Tools:**
- Replit-specific plugins
- ESBuild (production server bundling)
- PostCSS with Autoprefixer

**Database & Infrastructure:**
- Neon Database (PostgreSQL serverless)
- `@neondatabase/serverless` driver

**Form & Validation:**
- React Hook Form
- Zod
- `@hookform/resolvers`

**Utility Libraries:**
- clsx, tailwind-merge
- date-fns
- nanoid

**Asset Management:**
- Image assets in `attached_assets/`