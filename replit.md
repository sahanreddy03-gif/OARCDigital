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
- **Homepage Sections:** Hero, Social First Agency, Brand Carousel, Our Difference, Let's Talk OARC, AI Creative Services, Hire AI Employees, Let's Talk Revenue. Each section has a distinct visual style with sophisticated two-palette alternating system (black/orange and white backgrounds).
- **Carousel Functionality:** Interactive snap-to-card functionality with auto-scrolling, momentum physics for quick flicks, and auto-resume after user interaction.
- **Homepage FloatingChipCarousel:** Premium 8K stock images with enhanced animations (scale-105 hover, shadow-2xl, ring highlights with green accent, 500ms image zoom transitions)
- **Let's Talk OARC Section:** Cinematic scroll-triggered letter reveals with 6 vertically scrolling sections. Features giant decorative letters (12-24rem) in orange-600/10, condensed copy, and smooth IntersectionObserver animations. Uses orange-600 (#ea580c) for titles with WCAG-compliant 3.55:1 contrast ratio on white background.

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