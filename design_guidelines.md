# OARC Digital - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from industry-leading creative agencies known for sophisticated visual design, smooth animations, and conversion-focused layouts.

**Core Principles**:
- Premium, high-end aesthetic that reflects creative excellence
- Performance-driven layout with clear conversion pathways
- Sophisticated micro-interactions without overwhelming users
- Bold typography paired with generous whitespace
- Revenue-focused messaging hierarchy

---

## Color Palette

### Primary Colors
- **Brand Primary**: 6 15% 8% (Deep charcoal, almost black - use for text, primary backgrounds)
- **Brand Accent**: 240 80% 60% (Vibrant blue - use for CTAs, interactive elements)
- **Brand Secondary**: 280 70% 55% (Purple undertone - use sparingly for highlights)

### Supporting Colors
- **Background Light**: 0 0% 98% (Off-white for light mode sections)
- **Background Dark**: 240 10% 12% (Rich dark for dark sections)
- **Text Primary**: 0 0% 10% (Near black for body text)
- **Text Secondary**: 0 0% 45% (Mid-gray for supporting text)
- **Success Green**: 142 76% 36% (For metrics, positive indicators)
- **Border Subtle**: 0 0% 88% (Light borders, dividers)

### Usage Strategy
- Alternate between light and dark sections for visual rhythm
- Use accent blue strategically for CTAs and key interaction points
- Maintain high contrast ratios (WCAG AAA where possible)
- Dark sections use background-dark with white text
- Light sections use background-light with text-primary

---

## Typography

### Font Families
- **Primary**: 'Inter', system-ui, -apple-system, sans-serif (body, UI elements)
- **Display**: 'Space Grotesk', 'Inter', sans-serif (headlines, hero text)

### Type Scale (Desktop → Mobile)
- **Hero Display**: text-6xl/text-5xl, font-bold, tracking-tight, leading-[1.1]
- **Section Headers**: text-5xl/text-4xl, font-bold, leading-tight
- **Subsection Headers**: text-3xl/text-2xl, font-semibold
- **Body Large**: text-xl/text-lg, font-normal, leading-relaxed
- **Body Regular**: text-base/text-base, leading-relaxed
- **Small/Caption**: text-sm, font-medium

### Typography Rules
- Hero headlines use italicized portions for emphasis (_AI-powered_, _competitive advantages_)
- All headlines in sentence case, not title case
- Maximum line length for body text: max-w-2xl (optimal reading)
- Generous line-height (1.7 for body, 1.2 for headlines)

---

## Layout System

### Spacing Scale
Primary spacing units: **4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96**
- Micro spacing (within components): 4, 8, 12
- Component padding: 16, 24, 32
- Section spacing: 48, 64, 80, 96, 128

### Grid System
- Container max-width: max-w-7xl (1280px)
- Outer padding: px-6 (mobile), px-8 (tablet), px-12 (desktop)
- Column gaps: gap-8 (mobile), gap-12 (desktop)

### Responsive Breakpoints
- Mobile: base (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (1024px+)
- Wide: xl (1280px+)

---

## Component Library

### Navigation
- Fixed top navigation with blur backdrop (backdrop-blur-xl bg-white/90)
- Logo left, navigation center/right
- Smooth shadow on scroll: shadow-sm
- Height: h-20
- CTA button in navigation uses brand-accent color

### Buttons
**Primary CTA**: 
- Background: brand-accent blue
- Padding: px-8 py-4
- Rounded: rounded-full
- Font: text-lg font-semibold
- Hover: slight scale (hover:scale-105) + brightness increase
- Shadow: shadow-lg hover:shadow-xl

**Secondary/Outline**:
- Border: border-2 border-current
- Background: transparent or semi-transparent
- When on images: backdrop-blur-md bg-white/10

### Cards
- Background: bg-white (light sections) or bg-background-dark (dark sections)
- Border: border border-border-subtle or none
- Rounded: rounded-2xl
- Padding: p-8 md:p-12
- Shadow: shadow-md hover:shadow-xl (interactive cards)
- Transition: all 300ms ease

### Floating Chip Carousel
- Continuous horizontal scroll (no pause)
- Chips: rounded-full, px-6 py-3, bg-white/10 backdrop-blur, border border-white/20
- Separator dots between services: • (bullet point)
- Font: text-sm md:text-base font-medium
- Duplicate content to create seamless infinite loop
- Scroll speed: Slow, smooth (20-30s for full loop)

### Phone Mockup (Social Shepherd Style)
- Device frame: Realistic iPhone mockup with rounded corners
- Video background: Loop video with slight zoom/pan animation
- Positioned right side on desktop, centered on mobile
- Size: Approximately 300px width on desktop
- Shadow: Large, dramatic shadow (shadow-2xl)
- Slight tilt: rotate-2 or rotate-3 for visual interest

---

## Section Specifications

### Hero Section (Superside-inspired)
**Layout**: Single section, centered content
**Background**: Clean white or very subtle gradient
**Content Structure**:
1. Tagline above headline (text-sm, uppercase, tracking-wide, brand-accent color)
2. Main headline (text-6xl, bold, multi-line with italic emphasis)
3. Subheadline (text-xl, max-w-3xl, text-secondary)
4. CTA button ("Start Talking")
5. Differentiator bar below CTA (small text, subtle separators)
6. Floating chip carousel below differentiator

**Visual Treatment**:
- Generous top padding: pt-32 md:pt-48
- Centered text alignment
- Floating chip carousel spans full width, subtle overflow

### Split Section with Phone Video (Social Shepherd-inspired)
**Layout**: Two-column on desktop (60/40 split), stacked on mobile
**Left Column**: 
- Section eyebrow text
- Large headline
- Body paragraph (max-w-xl)
- Sufficient spacing between elements (space-y-6)

**Right Column**:
- Phone mockup with looping video background
- Position: Sticky on scroll (desktop only)

**Background**: Alternate light/dark for visual rhythm

### Triangle Service Grid
**Layout**: Three cards in triangular formation
- Desktop: Position manually with absolute/relative positioning or CSS Grid
- Top card: AI Creative (centered)
- Bottom two: Hire AI Employees (left), Revenue Automation (right)
- Mobile: Stack vertically

**AI Creative Card Enhancement**:
- Include mini floating service icons (same style as chip carousel)
- Icons scroll/animate horizontally within card
- Services: Character Design, Voice+Avatar, Social Media, Motion Graphics, etc.

**Card Styling**:
- Large cards: min-h-96
- Gradient backgrounds or solid with subtle textures
- Clickable with hover lift effect
- Icon/emoji at top of each card
- Clear hierarchy: Icon → Title → Description → Link/Arrow

### Performance Metrics
**Layout**: Single row, 4 metrics, equal width columns
**Design Approach**: Animated counter style, not static
- Large number: text-5xl font-bold, brand-accent or success-green
- Label below: text-sm uppercase tracking-wide
- Subtle animation on scroll-into-view (counter rolls up)
- Background: Dark section with light text for contrast

**Metrics to Display**:
- ROI percentage
- Cost saved ($X.XM format)
- Increased customer retention (%)
- Brand recognition growth (%)

### Differentiator Cards
**Layout**: Three cards, equal width columns
**Card Content**:
- Icon/visual element at top
- Bold title (text-2xl)
- Supporting paragraph (text-base)
- Adequate internal padding (p-8)

**Visual Style**:
- Clean, minimal design
- Subtle hover state (slight lift, shadow increase)
- Icons use brand-accent color

### CTA Sections (Roadmap & Early Access)
**Layout**: Side-by-side cards on desktop, stacked on mobile
**Styling**:
- Contrasting backgrounds (one light, one dark)
- Clear headline for each
- Simple form for Early Access: Business name + Email/Phone + Consent checkbox
- Rounded inputs with focus states
- Submit button uses primary CTA style

### Testimonials
**Layout**: Horizontal scroll cards or 2-column grid
**Card Design**:
- Quote text (text-lg)
- Author name + title below
- Company logo (small, subtle)
- Optional: Star rating or metric callout
- Background: Subtle bg different from section background

### FAQ Accordion
**Layout**: Single column, max-w-3xl centered
**Accordion Items**:
- Question: text-lg font-semibold
- Chevron icon (rotates on open)
- Answer: Collapsible, text-base, padding when open
- Border between items: border-b border-border-subtle
- Smooth height transition (200-300ms)

---

## Images

### Hero Section
**No large hero image** - Clean, text-focused design matching Superside aesthetic

### Phone Mockup Video Backgrounds
**Location**: Split section (Social Shepherd-inspired section)
**Description**: Looping social media feed videos, influencer content, or brand campaigns playing within iPhone mockup frame
**Treatment**: Subtle zoom/pan animation, professional quality footage

### Brand Logos (Trusted By)
**Location**: Below hero section
**Description**: Client/partner logos in grayscale or monochrome
**Layout**: Horizontal infinite scroll carousel
**Treatment**: Equal sizing, consistent spacing, subtle opacity

### Service Icons/Illustrations
**Location**: Floating chip carousel, service cards
**Description**: Simple, modern icons or 3D illustrations representing services
**Style**: Consistent icon set (Heroicons, Lucide, or custom minimal icons)

---

## Animations & Interactions

### Animation Principles
- Use sparingly - only where it enhances UX
- Subtle, professional (avoid bouncy/playful)
- Performance-first (GPU-accelerated transforms)
- Respect prefers-reduced-motion

### Key Animations
1. **Floating Chip Carousel**: Continuous horizontal scroll, seamless loop
2. **Phone Mockup**: Subtle 3D tilt on hover (transform: perspective)
3. **Metrics Counters**: Scroll-triggered number count-up
4. **Card Hovers**: Slight lift (translateY(-4px)) + shadow increase
5. **FAQ Accordions**: Smooth height transition + chevron rotation
6. **Page Load**: Subtle fade-in for hero content (stagger children)

### Timing
- Micro-interactions: 150-200ms
- Card hovers: 300ms ease-out
- Accordions: 300ms ease-in-out
- Scroll animations: 600-800ms ease-out

---

## Quality Standards

- Pixel-perfect alignment using 4px grid
- Consistent spacing rhythm throughout
- Smooth scrolling experience (scroll-behavior: smooth on html)
- Accessible color contrasts (minimum WCAG AA)
- Responsive images with proper aspect ratios
- Fast loading (optimize images, lazy load below fold)
- Professional, polished finish rivaling Superside/Social Shepherd quality