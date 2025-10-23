# OARC Digital - Marketing Agency Platform

## Overview

OARC Digital (Optimised AI Revenue Creativity) is a modern marketing agency website built with React and Express. The platform showcases AI-powered creative services, AI employees, and revenue automation solutions. The application features a premium, high-end aesthetic with sophisticated animations, following design inspiration from industry-leading agencies like Superside and The Social Shepherd.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Path aliases configured for clean imports (`@/` for client code, `@shared/` for shared types)

**UI Component System**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants

**Styling Architecture**
- Custom color palette defined via CSS variables in HSL format for theme flexibility
- Design system with specific typography scale (Inter for body, Space Grotesk for display text)
- Hover and active states managed through custom CSS classes (`hover-elevate`, `active-elevate-2`)
- CSS animations for carousels and scrolling elements

**Routing & State**
- Wouter for lightweight client-side routing (not React Router)
- TanStack Query (React Query) for server state management with custom query client configuration
- React Hook Form with Zod validation for form handling

**Component Organization**
- Page components in `client/src/pages/` (Home, ServiceDetail, NotFound)
- Reusable UI components in `client/src/components/`
- Shadcn UI components in `client/src/components/ui/`
- Example components for development/testing in `client/src/components/examples/`

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom middleware for request logging and JSON response capture
- Development mode integrates with Vite middleware for HMR

**Storage Layer**
- Abstract storage interface (`IStorage`) for CRUD operations
- In-memory storage implementation (`MemStorage`) as default
- Drizzle ORM configured for PostgreSQL (via Neon serverless) with schema in `shared/schema.ts`
- Session management via `connect-pg-simple` (PostgreSQL session store)

**API Design**
- RESTful API structure with routes prefixed with `/api`
- Shared schema types between frontend and backend via TypeScript
- Zod schemas for runtime validation using `drizzle-zod`

### Data Storage

**Database Architecture**
- PostgreSQL as the primary database (configured for Neon serverless platform)
- Drizzle ORM for type-safe database queries and migrations
- Schema defined with UUID primary keys using `gen_random_uuid()`
- Migrations managed in `/migrations` directory via drizzle-kit

**Current Schema**
- Users table with username/password authentication (basic setup)
- Extensible schema design ready for additional tables

### Design System

**Color Palette Strategy**
- Primary brand colors: Deep charcoal (6 15% 8%) and vibrant blue (240 80% 60%)
- Supporting purple accent (280 70% 55%) used sparingly
- Alternating light/dark sections for visual rhythm
- WCAG AAA contrast ratios maintained where possible

**Typography System**
- Responsive type scale from mobile to desktop
- Display headings use bold tracking-tight style
- Body text uses relaxed leading for readability
- Font weights range from normal (400) to black (900)

**Animation Approach**
- Smooth carousel animations via CSS keyframes
- Intersection Observer API for scroll-triggered counter animations
- Transform and opacity transitions for hover states
- Performance-conscious animations that don't block rendering

## External Dependencies

### Third-Party UI Libraries
- Radix UI component primitives (accordion, dialog, dropdown, tooltip, etc.)
- Embla Carousel for carousel functionality
- Lucide React for icon system
- CMDK for command palette interface

### Development Tools
- Replit-specific plugins for development environment integration
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing

### Database & Infrastructure
- Neon Database (PostgreSQL serverless platform)
- Connection managed via `@neondatabase/serverless` driver
- Environment variable `DATABASE_URL` required for database connection

### Form & Validation
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for integrating Zod with React Hook Form

### Utility Libraries
- clsx and tailwind-merge for conditional className composition
- date-fns for date formatting and manipulation
- nanoid for generating unique IDs

### Asset Management
- Image assets stored in `attached_assets/` directory
- Static assets served via Vite in development
- Design reference documents and client notes preserved in attached_assets

## Homepage Sections - Current Implementation

### Section 1 - Hero Section
- Custom user background image (AVIF) positioned at 35% center (desktop) and 60% center (mobile)
- Green CTA button: #c4ff4d ("Start Talking")
- FloatingChipCarousel with 14 service chips
- Dark gradient overlays to ensure text readability

### Section 2 - Social First Agency
- Hand-drawn SVG phone mockup with cycling gradient backgrounds
- 6 social media icons (Facebook, Instagram, LinkedIn, X, YouTube, Spotify)
- Animated text "We blend creative and performance" with turquoise (#5ce1e6) highlights
- White background section

### Section 3 - Brand Carousel
- Centered heading "We grow ambitious brands with Social, Paid, Creative and Influencer" (all black text)
- Continuous right-to-left carousel with 18 brand logos
- White background section

### Section 5 - Our Difference
- **Background**: Black-based gradients matching hero section color palette for cohesive website flow
  - Multiple layered gradients: pure black, zinc-950, zinc-900
  - Subtle warm orange glow on right side (12% opacity)
  - Radial gradients for depth
- **Heading**: "Our Difference" with "Difference" in exact green (#c4ff4d) matching hero CTA button
- **Images**: Three custom AVIF images
  - AI Excellence: 739d30f2ecb844e9c1186e62ca63efbda518ff4a-1050x1200_1761257258076.avif
  - Our Creative Strategy: db64abcfab31dccdde04f1fb8be45337dfb692e9-1392x1392_1761257777037.avif  
  - Revenue Centered: 07c35cf0cbddd33390e2f878e287f38703ae7b26-1040x904_1761258187346.avif
- **Layout**: 3-column grid (desktop), vertical stack (mobile)
- **Interactions**: Descriptions appear on hover (desktop only), always visible (mobile)

## Brand Color Scheme
- **Primary Green**: #c4ff4d (used for CTAs and accent highlights)
- **Turquoise Accent**: #5ce1e6 (used for content highlights on white backgrounds)
- **Black/Dark**: Black, zinc-950, zinc-900 (primary dark colors)
- **Warm Tones**: Subtle orange/amber accents for depth and visual interest