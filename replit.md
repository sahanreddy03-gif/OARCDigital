# OARC Digital - Marketing Agency Platform

### Overview
OARC Digital (Optimised AI Revenue Creativity) is a modern marketing agency website built with React and Express. The platform showcases AI-powered creative services, AI employees, and revenue automation solutions. It features a premium, high-end aesthetic with sophisticated animations, drawing inspiration from leading agencies. The project aims to provide a robust, scalable platform for AI-powered marketing solutions, focusing on AI-powered marketing solutions with a multi-page architecture supporting 17 distinct service offerings and 6 supporting pages.

### User Preferences
Preferred communication style: Simple, everyday language.

### System Architecture
The platform is built with a React frontend and an Express.js backend.

**Frontend:**
- **Framework:** React 18+ with TypeScript, utilizing Vite for performance.
- **UI/Styling:** Shadcn/ui (New York style) built on Radix UI, Tailwind CSS for styling with a custom HSL-based color palette, Inter and Space Grotesk typography, and CSS animations.
- **State Management & Routing:** Wouter for routing, TanStack Query for server state, React Hook Form with Zod for form validation.
- **Component Organization:** Follows a modular structure with pages, reusable UI components, and Shadcn UI components.
- **Design System:** Features a two-palette color system (primary green, orange-600 accents), responsive typography, and performance-conscious CSS animations.
- **Key Features:**
    - **Homepage:** Sections include Hero, Social First Agency, Brand Carousel, Our Difference, Let's Talk OARC, AI Creative Services, Hire AI Employees, Let's Talk Revenue, Performance Metrics, CTA Sections, Brand Showcase, Testimonials.
    - **Service Pages:** 17 distinct service pages covering creative, growth, and AI services, each with dynamic content loading, SEO meta tags, and a consistent content strategy emphasizing performance metrics and clear differentiation.
    - **Component Standards:** Consistent use of Shadcn Button defaults, SPA-safe Open Graph tags, and mobile-first responsive design across all components and pages.

**Backend:**
- **Framework:** Express.js with TypeScript.
- **API:** RESTful API with shared TypeScript schema and Zod validation.

**Data Storage:**
- **Database:** PostgreSQL (Neon serverless) with Drizzle ORM for type-safe queries.
- **Schema:** UUID primary keys, extensible design.

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI (various components)
- Embla Carousel
- Lucide React (icons)
- CMDK (command palette)

**Development Tools:**
- Replit-specific plugins
- ESBuild
- PostCSS with Autoprefixer

**Database & Infrastructure:**
- Neon Database (PostgreSQL serverless)
- `@neondatabase/serverless`

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

### Service Pages Catalog (Phase 2 Complete - October 26, 2025)

All 17 service landing pages implemented, tested, and deployed with perfect content, SEO optimization, and mobile-responsive design.

**Creative Services (10 pages):**
1. **Paid Advertising** - `/services/paid-advertising` - Multi-platform campaign management. Metrics: 3.2x ROAS, 47% CPA reduction, $50M+ ad spend. Hero: Purple/pink gradient (hsl(262,83%,58%) to hsl(330,81%,60%)).
2. **Media Buying** - `/services/media-buying` - Strategic media planning and buying. Metrics: 40% cost reduction, $75M+ spend, 2.6x ROI. Hero: Teal/cyan gradient.
3. **Influencer Marketing** - `/services/influencer-marketing` - Creator partnerships and campaigns. Metrics: 500M+ reach, 3,200+ creators, 4.8x engagement. Hero: Pink/rose gradient.
4. **Social Media Management** - `/services/social-media-management` - Full-service social management. Metrics: 1.2M+ posts, 250+ brands, 3.7x engagement. Hero: Purple/blue gradient.
5. **Branding Services** - `/services/branding-services` - Brand strategy and identity. Metrics: 200+ brands, 94% recall increase, $2.5B+ value. Hero: Indigo/violet gradient.
6. **Ad Creative** - `/services/ad-creative` - Performance ad production. Metrics: 43% CPA reduction, 2.8x ROAS, 500+ concepts weekly. Hero: Orange/red gradient.
7. **Social Media Creative** - `/services/social-media-creative` - Unlimited social content. Metrics: 100+ posts/month, 24hr delivery, 3.4x engagement. Hero: Blue/cyan gradient.
8. **Web Design** - `/services/web-design` - Conversion-optimized websites. Metrics: 38% conversion increase, 2.3s load time, 7-day delivery. Hero: Green/teal gradient.
9. **Video Production** - `/services/video-production` - Full-service video/animation. Metrics: 1,200% more shares, 86% conversion lift, 14-day turnaround. Hero: Purple/pink gradient.
10. **AI Copywriting** - `/services/ai-copywriting` - AI-powered copy with human polish. Metrics: 10x speed, 500+ campaigns/month, 2.1x conversion. Hero: Cyan/blue gradient.

**Growth Services (4 pages):**
11. **Lead Generation** - `/services/lead-generation` - Tactical channel-focused lead gen. Metrics: 12,000+ leads/month, 34% conversion, $8/lead. Distinct icons: Mail, Search, UserPlus (execution focus). Hero: Green/emerald gradient.
12. **Customer Acquisition** - `/services/customer-acquisition` - Strategic acquisition frameworks. Metrics: 56% CAC reduction, 3.2x LTV, 850+ customers. Distinct icons: TrendingUp, Target, BarChart (strategy focus). Hero: Blue/indigo gradient.
13. **Funnel Automation** - `/services/funnel-automation` - Automated conversion funnels. Metrics: 47% conversion improvement, 82% time saved, 2.8x revenue/visitor. Hero: Purple/violet gradient.
14. **Rapid Idea Testing** - `/services/rapid-idea-testing` - Fast MVP validation. Metrics: 7-day cycles, 120+ ideas tested, 78% failure avoidance. Hero: Orange/amber gradient.

**AI Services (3 pages):**
15. **Hire AI Employees** - `/services/hire-ai-employees` - Deploy AI agents (sales, support, ops). Metrics: 90% cost reduction, 24/7 availability. ROI calculator: $75k vs $8k. Hero: Teal/cyan gradient.
16. **Revenue Automation** - `/services/revenue-automation` - Automated outreach/pipeline. Metrics: $150M+ pipeline, 800+ companies, 67% reply rate. Hero: Blue/indigo gradient.
17. **Digital Marketing** - `/services/digital-marketing` - Full-stack digital marketing. Metrics: 200+ campaigns, 3.4x ROI, $100M+ revenue generated. Hero: Purple/pink gradient.

**Technical Achievements (Phase 2):**

**Button Component Compliance (Fixed):**
- Removed all custom sizing classes (h-12, px-8, h-14, px-10) from Button components across all 17 pages
- Removed custom hover states (hover:bg-white/90, hover:bg-white/10, hover:bg-black/10)
- Now using shadcn Button defaults with `size="lg"` variant throughout
- All CTAs now follow design system conventions for consistent interactions

**Open Graph SPA-Safe Implementation (Fixed):**
- Changed from conditional creation pattern: `if (!ogMeta) { create + set }` 
- To always-update pattern: `if (!ogMeta) { create }; ogMeta.setAttribute('content', ...)`
- This ensures OG tags (og:title, og:description) update correctly on every SPA route change
- Previously, OG tags would only set once and not update when navigating between service pages
- Now verified: metadata refreshes properly on every navigation

**Content Differentiation (Fixed):**
- Lead Generation vs Customer Acquisition distinction clarified
- Lead Gen uses tactical icons (Mail, Search, UserPlus, Megaphone) focusing on execution channels
- Customer Acquisition uses strategic icons (TrendingUp, Target, BarChart) focusing on optimization frameworks
- Copy tightened to emphasize tactics vs strategy, execution vs optimization

**SEO Implementation:**
- All 17 pages use page-specific `document.title` updates in useEffect
- Meta description tags with compelling, keyword-rich copy
- Open Graph tags (og:title, og:description) that properly update on navigation
- SPA-compatible using querySelector + createElement + setAttribute pattern

**Quality Assurance Results:**
- ✅ Architect Review (3 cycles): All critical issues resolved - Button compliance, OG tags, content differentiation
- ✅ E2E Testing (October 26, 2025): All 17 routes verified on desktop (1920x1080) and mobile (375x667)
- ✅ Navigation: All routes accessible from direct URL and internal navigation
- ✅ Mobile UX: No horizontal overflow, CTAs visible, readable typography at 375px
- ✅ No Console Errors: Clean execution across all pages
- ✅ Content Validation: Paid Advertising updated to 3.2x ROAS per user expectations

**Next Phase Roadmap:**
- **Phase 3a:** Unique design systems per page (currently all share gradient hero pattern - need distinct visual identities per Superside/ColdIQ inspiration)
- **Phase 3b:** 4K/UHD hero imagery (3840x2160) replacing gradient backgrounds
- **Phase 3c:** Advanced animations and interactions (scroll-triggered, parallax, micro-interactions)
- **Phase 3d:** Case study pages with detailed client success stories
- **Phase 3e:** Contact forms and lead capture integration
- **Phase 3f:** Performance optimization (code splitting, lazy loading, image optimization)