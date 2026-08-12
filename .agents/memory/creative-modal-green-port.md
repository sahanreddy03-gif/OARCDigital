---
name: Creative modal faithful-port pattern
description: How the Creative ("Make us worth more") modal was ported and what rules apply to all future modal ports from prototype HTML files
---

# Creative modal faithful-port pattern

## The rule
Every department modal must be a **verbatim port** of its prototype HTML file — not a summary, not a rewrite. The previous Task #311 "port" failed because it approximated sections instead of copying them.

## What went wrong in Task #311
- Wrong colour theme applied (Sales: dark noir instead of white/red)
- Missing entire sections (thesis, proof table, guarantee card, end/CTA steps)
- Wrong fonts (used site's Bricolage Grotesque instead of prototype's Fraunces + Space Grotesk)
- JS-generated content (like the 6 work cards) was simplified to a plain text list
- Animations (sweep, equalizer, count-up) were dropped
- Copy was rewritten from scratch instead of taken verbatim

## Correct porting process (enforced by Task #352 plan)
1. Read the ENTIRE prototype file before writing any code
2. Extract ALL CSS verbatim into a `XY_CSS` constant, scoped under `.xy` root class
3. Rename `@keyframes` with modal prefix (e.g. `cr-sweep`, `cr-eq`) to avoid globals
4. Inject via `<style dangerouslySetInnerHTML={{ __html: XY_CSS }} />` — NEVER `document.head.appendChild`
5. Convert every HTML section to JSX, including JS-generated content (maps/data arrays)
6. Use `dangerouslySetInnerHTML` for HTML strings inside data arrays (art elements, h3 with em tags)
7. Verify every section against prototype line-by-line before finishing

## Creative modal specifics
- Colour swap: `--gold:#D9B26A` → `--mint:#8FD6AE`, `--bg:#100E0A` → `#0E5A3A` (racing ground green)
- `--mintd:#1A6B42` replaces `--goldd:#B98F3E` (dark mint on cream guarantee card)
- Fonts: Fraunces (serif) + Space Grotesk (ui) — loaded via `@import` in CSS string
- Root class: `.cr` — all selectors prefixed `.cr .foo`
- Keyframes: `cr-sweep`, `cr-eq`
- IDs: `cr-v-before`, `cr-v-after` (count-up mechanism)
- Heading changed: "Make us look like a billion" → "Make us worth more"
- End big line: "Make us worth more. / Today."
- Sticky header colour: `DEPT_HDR_BG["Creative"] = "#0E5A3A"`
- 6 work cards rendered from `CR_WORKS` array with `dangerouslySetInnerHTML` for art + h3

**Why:** The user explicitly required dot-for-dot accuracy after previous ports missed ~70% of content.

## Remaining 13 modals
User will send prototype files one at a time (or in batch). Each gets the same treatment:
- Only colour change allowed if user specifies a palette swap
- Heading change if user specifies
- Everything else is verbatim from the prototype file
