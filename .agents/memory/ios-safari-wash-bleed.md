---
name: iOS Safari wash bleed-through
description: scaleY(0) on an absolutely-positioned element with a background colour leaks visually on iOS Safari due to GPU compositing — must add opacity:0 to truly hide it.
---

# iOS Safari wash bleed-through

## The rule
Any "wash" overlay (position:absolute; inset:0; transform:scaleY(0)) that has a visible background colour MUST also have `opacity:0` in its resting state. Without it, iOS Safari's GPU compositing leaks the background through the collapsed element.

**Why:** iOS Safari promotes absolutely-positioned transformed elements to their own GPU layers. A scaleY(0) layer still paints its fill colour before compositing, causing the colour to bleed through onto the parent even though the element appears collapsed.

**How to apply:** Whenever a wash/reveal overlay is hidden via transform only, add `opacity:0` to the base state and `opacity:1` to the revealed state. Include `opacity` in the transition list.

```css
.di-wash {
  transform: scaleY(0);
  opacity: 0;                                           /* ← required for iOS Safari */
  transition: transform 540ms var(--e), opacity 540ms var(--e);
}
.di-cell.di-on .di-wash {
  transform: scaleY(1);
  opacity: 1;
}
```

## Cascading !important trap
When a variant card uses `color: white !important` in its REST rule (to guarantee contrast on a dark background), the `di-on` (active/hover) state that wants to flip text to dark MUST ALSO use `!important` — otherwise the base `!important` beats the active rule regardless of specificity.

```css
.di-cell.di-cell-dark { color: #F5F5F3 !important; }          /* rest */
.di-cell.di-cell-dark.di-on { color: #0E0D0C !important; }    /* active — must also be !important */
```
