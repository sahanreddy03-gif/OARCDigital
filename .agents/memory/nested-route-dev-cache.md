---
name: Nested route dev cache
description: Turbopack development can retain a stale route manifest after adding nested App Router routes.
---

If a newly added nested App Router route returns 404 in the development server while `next build` discovers and prerenders it, the route source is likely valid but the generated development route cache is stale. Clear the generated `.next` directory and restart the application workflow before changing route code.

**Why:** During the Tom route build, the production build listed the nested routes correctly but the running Turbopack server returned 404 until its generated cache was cleared.

**How to apply:** Use this only when source/build route discovery agrees and the mismatch is limited to the running development server; do not alter the route structure or add redirects first.