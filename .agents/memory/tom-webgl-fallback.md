---
name: Tom WebGL fallback
description: Tom’s digital-twin hero visual must survive preview browsers and devices without a usable WebGL context
---

Probe for WebGL before constructing a Three.js renderer and keep a designed CSS/CAD fallback in the same component.

**Why:** The Replit preview browser can report no usable GPU context and Three.js throws during renderer construction; without a fallback, the entire industry page becomes an error screen.

**How to apply:** For future Tom visual work, treat WebGL as progressive enhancement. Preserve the DOM HUD and scene meaning when WebGL is unavailable, and verify both the browser console and the fallback screenshot.