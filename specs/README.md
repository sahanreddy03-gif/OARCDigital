# OARC Digital - Full Site Build Specification

**Branch:** `oarc/blueprint`  
**Project:** OARC Digital (AI-powered creative & revenue automation agency)

## Overview
This document contains specifications for the full OARC Digital website buildout, including service landing pages, case studies, and supporting pages.

## Environment Variables

### Required Secrets (set in Replit Secrets or .env)
```bash
# Session Management
SESSION_SECRET=<already configured>

# Analytics & Tracking (placeholder - to be provided by client)
VITE_GA_TRACKING_ID=<pending>
VITE_GTM_ID=<pending>

# CRM/Email Integration (placeholder - to be provided by client)
VITE_HUBSPOT_PORTAL_ID=<pending>
VITE_HUBSPOT_FORM_ID=<pending>

# Deployment
REPLIT_DOMAIN=<auto-configured>
```

### Optional Variables
```bash
# Feature Flags
VITE_ENABLE_ANIMATIONS=true
VITE_ENABLE_VIDEO_LOOPS=true

# Performance
VITE_IMAGE_QUALITY=70
VITE_LAZY_LOAD_OFFSET=300
```

## Site Structure

### Pages (All Routes)

**Main Navigation:**
- `/` - Home (preserved, existing homepage)
- `/services` - Services category landing
- `/our-work` - Portfolio index
- `/why-us` - Team/process/AI excellence
- `/resources` - Guides & resources
- `/pricing` - Pricing plans
- `/enterprise` - Enterprise solutions
- `/contact` - Contact & book demo

**Service Landing Pages:** (`/services/:slug`)
1. `hire-ai-employees` - Hire AI Employees (OARC)
2. `revenue-automation` - Revenue Automation & Growth (OARC)
3. `web-design` - Web Design & Landing Pages
4. `ad-creative` - Ad Creative
5. `social-media-creative` - Social Media Creative
6. `branding-identity` - Branding & Identity
7. `presentation-pitch` - Presentation & Pitch
8. `illustration` - Illustration
9. `print-packaging` - Print & Packaging
10. `video-production` - Video Production
11. `motion-design` - Motion Design
12. `immersive-3d-ar` - Immersive / 3D / AR
13. `email-creative` - Email Creative
14. `design-systems` - Design Systems
15. `ai-powered-creative` - AI-Powered Creative
16. `ai-consulting` - AI Consulting
17. `growth-marketing` - Growth & Performance Marketing
18. `paid-media` - Paid Media & AdOps
19. `organic-social` - Organic Social Strategy

**Case Studies:** (`/our-work/:slug`)
- To be populated in Phase 3

**Resources:** (`/resources/:slug`)
- To be populated in Phase 3

## Component Architecture

### Reusable Components (Skeleton Created in Phase 1)

**Layout Components:**
- `Layout` - Main layout wrapper with nav/footer
- `Navigation` - Top navigation with mega-menu
- `Footer` - Footer with links and CTA

**Page Components:**
- `Hero` - Full-bleed hero with video/image support
- `ServiceGrid` - Grid of service cards
- `FeatureCard` - Feature/benefit card
- `CaseGrid` - Case study gallery grid
- `TrustedLogos` - Brand logo carousel
- `TestimonialCarousel` - Testimonial slider
- `MetricCounters` - Animated counter tiles
- `PinnedScrollStory` - GSAP ScrollTrigger pinned sequence
- `FooterCTA` - Closing CTA block

## PR Checklist (Required for All PRs)

### Phase 1: Skeleton & Routes
- [ ] All page routes exist in `App.tsx`
- [ ] Navigation component with all links implemented
- [ ] Homepage preserved exactly (no visual changes)
- [ ] Skeleton components created
- [ ] `specs/README.md` created
- [ ] `design-assets/manifest.json` created
- [ ] `scripts/generate-assets.js` created
- [ ] First 5 service content JSONs created
- [ ] All routes accessible (no 404s)
- [ ] Preview URL provided
- [ ] Desktop screenshot attached
- [ ] Mobile screenshot attached

### Phase 2: First 5 Service Pages
- [ ] Content matches blueprint specifications
- [ ] Placeholder hero assets created (marked `-placeholder`)
- [ ] All sections implemented per page template
- [ ] SEO meta tags added (title, description, OG tags)
- [ ] Accessibility: alt text, heading hierarchy, keyboard nav
- [ ] Responsive design (mobile/tablet/desktop tested)
- [ ] Basic animations functional (CSS/Framer Motion)
- [ ] manifest.json updated with placeholder entries
- [ ] Image pipeline script functional
- [ ] Preview URL provided
- [ ] Screenshots: Desktop + Mobile for each page

### Phase 3: Complete Site
- [ ] All remaining service pages
- [ ] Case study pages (minimum 8)
- [ ] Supporting pages (Why Us, Resources, etc.)
- [ ] GSAP ScrollTrigger animations
- [ ] Lottie micro-interactions
- [ ] Real assets swapped (if provided)
- [ ] Performance audit: Lighthouse ≥90
- [ ] Accessibility audit: WCAG AA compliance
- [ ] Cross-browser testing
- [ ] Final QA checklist

## Asset Pipeline

### Image Processing Workflow
1. Place 8K masters in `/design-assets/masters/{page-slug}/`
2. Run `npm run generate-assets` to create web-optimized variants
3. Output to `/design-assets/web/{page-slug}/` in multiple sizes
4. `manifest.json` auto-updated with srcset strings

### Video Loop Workflow
1. Place master .mov (ProRes/H.264) in `/design-assets/masters/{page-slug}/`
2. Run `npm run generate-video` to create MP4 + WebM variants
3. Poster frames auto-extracted
4. Manifest updated with video references

### Required Asset Sizes (Per Image)
- 3840×2160 (4K) - AVIF + WebP
- 2048×1152 - AVIF + WebP
- 1600×900 - WebP
- 1200×675 - WebP
- 800×450 - WebP
- 480×270 - WebP (mobile)
- LQIP: 20px blurred placeholder

## Animation Specifications

### Timing Guidelines
- **Section entrances:** 180-220ms ease-out
- **CTA hover:** 150-180ms scale/glow
- **Carousel transitions:** 400-500ms ease-in-out
- **Counter animations:** 800-1200ms on scroll into view

### OARC Pinned Scroll Story (Specific Requirement)
Four scroll states that pin, then unlock:
1. "Optimised..." (fade in)
2. "AI-Driven..." (cross-fade)
3. "Revenue..." (cross-fade)
4. "Creative..." (cross-fade + unlock to CTA)

## Performance Budget

### Target Metrics (Lighthouse)
- **Performance:** ≥90
- **Accessibility:** ≥90
- **Best Practices:** ≥90
- **SEO:** 100

### File Size Limits
- Hero image (largest size): ≤300KB (AVIF/WebP)
- Hero video loop: ≤3-5MB (1080p MP4+WebM combined)
- Page weight (initial load): ≤2MB
- Time to Interactive: ≤3.5s (3G)

## Accessibility Requirements

### WCAG AA Compliance
- [ ] Alt text for all images
- [ ] Semantic HTML (proper heading hierarchy)
- [ ] Keyboard navigation functional
- [ ] Focus visible for interactive elements
- [ ] ARIA labels for carousels/dynamic content
- [ ] Color contrast ≥4.5:1 for text
- [ ] Skip links for navigation
- [ ] Screen reader tested

## Preview & Deployment

### Staging Preview URL
Each PR must include a Replit preview URL:
```
https://<replit-id>.repl.co
```

### Production Deployment
- Final deployment: client will provide DNS/hosting details
- Current build target: Replit deployment ready

## Review Contact

**Point of Contact:** To be provided by client  
**Email:** TBD  
**Approval required for:**
- Phase 1 skeleton (before Phase 2)
- First 5 service pages (before remaining pages)
- Asset replacements (placeholder → production)
- Major design deviations from blueprint

## Asset Licensing

All third-party assets must be documented in:
```
/design-assets/licenses/
```

Include:
- Source URL
- License type
- Attribution requirements
- Date acquired

## Development Commands

```bash
# Start development server
npm run dev

# Generate web assets from masters
npm run generate-assets

# Generate video variants
npm run generate-video

# Build for production
npm run build

# Preview production build
npm run preview
```

## Phase 1 Status

**Created:** Branch `oarc/blueprint`  
**Status:** In Progress  
**Awaiting:** Client review of skeleton structure

---

*Last updated: Phase 1 initialization*
