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
- Service content in `client/public/content/services/` (JSON-based)

### Phase 1 Complete (October 26, 2025)

**Site Expansion - Multi-Page Architecture:**
- Successfully converted from single homepage to full multi-page website
- **19 service routes** + **6 supporting page routes** implemented and tested
- Homepage preserved with zero visual regressions

**Component Architecture:**
- **Layout System:** Reusable Layout component with Navigation (desktop + mobile with backdrop blur)
- **Reusable Components:** Hero, ServiceGrid, HowItWorks, FAQ, MetricCounters, CaseStudyGrid
- All components follow design system tokens (background, foreground, primary, muted-foreground, border)

**Service Pages (First 5 Priority Pages Complete):**
1. `/services/hire-ai-employees` - Hire AI Employees
2. `/services/revenue-automation` - Revenue Automation & Growth
3. `/services/web-design` - Web Design & Landing Pages
4. `/services/ad-creative` - Ad Creative
5. `/services/social-media-creative` - Social Media Creative

**Content System:**
- JSON-based content loading from `client/public/content/services/`
- Each service page includes: Hero, Benefits, Metrics, What's Included, How It Works, Case Studies, FAQ, Final CTA
- SEO meta tags (title, description) dynamically updated per page

**Asset Pipeline Foundation:**
- `design-assets/manifest.json` for asset tracking
- `scripts/generate-assets.js` for 8K image processing pipeline (skeleton)
- Documented specifications for 8K masters → WebP/AVIF/MP4/WebM workflow

**Documentation:**
- `specs/README.md` with comprehensive PR checklist, ENV placeholders, development commands
- Asset licensing guidelines and performance budget targets
- Phase 2/3 roadmap defined

**Quality Assurance:**
- End-to-end tests passed successfully (all routes, navigation, mobile responsive, error handling)
- Architect-approved: modular structure, design token usage, TypeScript patterns
- Mobile-first responsive design verified (375px, 768px, 1920px viewports)

### Content Perfection (October 26, 2025)

**Service Page Content Enhancement - All 6 Priority Pages:**

Successfully enhanced all service pages with specific, performance-oriented messaging:

**Creative Services (Superside-inspired):**

1. **Ad Creative** (`/services/ad-creative`):
   - Headline: "Lower your CPA. Increase ROAS. Scale profitably."
   - Key metrics: 43% avg CPA reduction, 2.8x ROAS improvement, 50+ variations tested monthly
   - Specific ad formats: Static Display, Video/Motion, UGC-Style, Dynamic Product, Carousel, Retargeting
   - Volume metrics: $200M+ ad spend managed, 500+ concepts weekly, 2.1x CTR improvement, 72hrs turnaround

2. **Social Media Creative** (`/services/social-media-creative`):
   - Focus: Volume and consistency ("20-50+ pieces per week")
   - Service model: Unlimited content at fixed monthly rate
   - Speed metrics: 100+ posts/month, 24hr first draft delivery, unlimited revisions
   - Platform-specific: Instagram, TikTok, LinkedIn, Twitter/X, Stories, Memes & Trend-Jacking
   - Impact: 500M+ impressions monthly, 1,200+ pieces weekly, 3.4x engagement increase

3. **Web Design** (`/services/web-design`):
   - Headline: "Every page, every pixel, every click—optimized to convert"
   - Conversion focus: 38% avg conversion increase, 2.3s load time, 94% mobile success rate
   - Services: Full Website Design, High-Converting Landing Pages (7-day delivery), E-commerce, Design Systems, CRO, Webflow/Framer
   - Track record: 400+ websites designed, 2.1M+ annual conversions, 7 days avg landing page delivery

4. **Video Production** (`/services/video-production`):
   - Deliverables: Full-Service Commercial, Social Short-Form (15s-60s), Explainer/Product, UGC/Testimonials, Animation/Motion, Post-Production
   - Performance: 1,200% more shares vs static, 86% conversion lift with video, 14 days avg turnaround
   - Use cases: Social platforms, Paid advertising, Website/Landing pages, Internal comms, Events

**AI/Revenue Services (ColdIQ-inspired):**

5. **Hire AI Employees** (`/services/hire-ai-employees`):
   - Value prop: "Deploy in hours, not months. No recruiting, no onboarding, no payroll."
   - Cost efficiency: 10% of traditional employee cost
   - Features: Integrations Ecosystem, Capabilities Matrix, ROI Calculator ($75,000 vs $8,000)

6. **Revenue Automation** (`/services/revenue-automation`):
   - Focus: "Turn manual outreach into automated pipeline"
   - Social proof: $150M+ qualified pipeline generated, 800+ B2B companies
   - Features: Automation Workflows (3 core workflows), Integration tools, Data enrichment

**Content Strategy:**
- Ad Creative: Emphasizes measurable paid performance outcomes (CPA, ROAS, testing volume)
- Social Media: Highlights velocity, volume, platform-specific content, unlimited model
- Web Design: Focuses on conversion optimization with credible stats and defined service tiers
- Video Production: Outlines concrete deliverables with impact metrics and turnaround times
- AI Services: Foreground deployment speed, cost efficiency, and tangible ROI

**Quality Assurance:**
- Architect review: ✅ "Specific, performance-oriented messaging aligned with each offering"
- E2E testing: ✅ All content displays correctly on desktop and mobile (375px)
- Differentiation: ✅ Clear value props distinguish similar services (Ad Creative vs Social Media)
- Metrics: ✅ Realistic, valuable numbers that resonate with B2B decision makers

**Next Phase:**
- **Phase 2:** Full implementation of 5 priority service pages with placeholder hero assets
- **Phase 3:** Remaining 14 service pages + case studies + supporting pages + real assets