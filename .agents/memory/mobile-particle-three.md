---
name: Mobile 3D particle field
description: Architecture for the Active Theory-style particle hero background on mobile
---

## Rule
Use Three.js WebGL for the mobile hero particle effect — Canvas 2D cannot produce the "inside the cloud" 3D feel Active Theory uses. User explicitly rejected the flat Canvas 2D version.

## Architecture
- `components/MobileParticleCanvas.tsx` — "use client", dynamic `import("three")` inside useEffect (no SSR issues)
- Camera at origin (0,0,0), 3200 particles in sphere radius 3–45 units around it
- Custom ShaderMaterial (VERT + FRAG inline strings) — per-particle size via `aSize` attribute, `gl_PointSize` = aSize * 300 / -mvZ, clamped 0.5–120px
- Fragment shader: bright core (exp(-r²*9)) + mid glow + wide bloom, AdditiveBlending
- Touch: accumulate deltas → targetY/targetX → LERP 0.042 into currentY/currentX → rotate the Points mesh
- Mouse: position-based offset (not delta) → targetY/X → same LERP
- Auto-rotation: autoY += 0.00018 per frame applied to points.rotation.y
- Replaces ONLY the mobile blurred-poster div in HeroSection.tsx (md:hidden block, formerly lines 376–387)
- three + @types/three installed in main project via npm

**Why:**
Active Theory's effect uses Hydra (proprietary WebGL engine). Canvas 2D parallax looks flat and static; the "inside the cloud" feeling requires genuine 3D camera surrounded by particles in a sphere. User was frustrated by the Canvas 2D attempt.

**Colour palette:**
Weighted toward white/ice-white. Colour is a whisper — ghost mint, dim cobalt, dim violet, barely-warm amber. Near particles get colour, far ones stay white. Restraint is the point.

**How to apply:**
Any future iteration must stay Three.js. For device gyroscope tilt add DeviceOrientationEvent → same targetX/targetY pipeline. For depth-of-field post-processing use EffectComposer from three/examples/jsm.
