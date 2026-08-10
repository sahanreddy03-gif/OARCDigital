---
name: Department modal rebuild pattern
description: How to port an HTML prototype into a DepartmentDetailModal *Content function — the exact workflow used for Growth and AI Staff modals.
---

## The rule
Take the HTML prototype verbatim. No reinterpretation of colors, content, or structure.

## Steps
1. **Scope CSS** — prefix every rule under `.xyz` (e.g. `.gm`, `.ais`). Rename all `@keyframes` to `xyz-*` to avoid clashes with other modals.
2. **Inject via useEffect** — create a `<style id="xyz-styles">` element and append to `document.head`. Clean up on unmount. This avoids `@layer utilities` breakage in globals.css.
3. **Load extra fonts if needed** — inject a `<link id="xyz-font" rel="stylesheet">` before the style tag. Only needed if prototype uses a font not in the app (e.g. Schibsted Grotesk for AI Staff).
4. **Convert VIZ generators** — prototype JS functions that return SVG strings → TypeScript functions in a `Record<string, () => string>` object. Use IntersectionObserver to add `.live` class to `.viz` elements, triggering animations.
5. **Data arrays** — extract ROLES, TEAM, PARTS etc. as typed TS constants above the component.
6. **dangerouslySetInnerHTML** — use for SVG panels (`.viz`), h2 with `<em>` tags, `.cap` with `<b>` tags, and stat `<b>` elements with `<em>` units.
7. **Roster entrance** — use a ref + setTimeout to add `.go` class after ~200ms, triggering card transitions.

## Color swap pattern (for OARC brand compliance)
Replace prototype accent colors with the correct OARC world color.
- AI / machine modals → Graphite world: `#0B0C0D` bg, `#F5F5F3` white accent, no color.
- Replace all `rgba(R,G,B,.x)` glow/fill values proportionally.

## Why inject via document.head (not globals.css)
CSS inside `@layer utilities` in globals.css breaks `@keyframes` animations — the layer's cascade priority swallows them silently. Self-contained injection sidesteps this entirely.

## Common pitfalls
- Old SVG constants that reference deleted token objects cause `ReferenceError` at module evaluation — delete ALL old constants when replacing, not just the first one.
- `position:sticky` inside the modal scroll container works fine (overflow-y:auto is the scroll root).
- `:first-of-type` works on element type (tag), not class — `div.phase:first-of-type` matches the first `div` in its parent, which is correct when all siblings are also `div.phase`.
