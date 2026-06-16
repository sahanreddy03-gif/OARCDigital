---
name: H360 page design
description: Design decisions for the /h360 hub page — Sunday-clone dark theme
---

# H360 page design

## Rule
BelowHero.tsx uses Sunday's exact dark design language: bg #0a0a0a, cards #111, white text, horizontal-scroll product cards, tall full-bleed value cards, "Hear from our clients" marquee + quote carousel, dark green loyalty section.

**Why:** User explicitly demanded exact Sunday clone. Sunday's site is fully dark-themed, NOT white. Previous white-themed version was rejected.

**How to apply:**
- Never use white backgrounds in BelowHero or any H360 section below the hero fold
- Hero (Hero.tsx) stays white/light to match Owner.com style — that's intentional contrast
- Hero sticky phone section needs `position: relative` wrapper for greenCard to position correctly
- Month-initial arrays used as React keys must use index, not letter (J/M/A are duplicates)
- BelowHero sections in order: Stats → Problem → ProductCards (horizontal scroll) → TrustLogos → InlineTestimonials → ValueCards (FOR OPERATORS/STAFF/GUESTS) → Ecosystem → QuoteCarousel → Loyalty → SupportStrip → FinalCTA
