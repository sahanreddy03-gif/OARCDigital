---
name: Drive media imports
description: Durable workflow for importing supplied Google Drive media into the project
---

When a user supplies a Google Drive folder of brand media, use the attached Google Drive connection and save only deliberately selected, optimized derivatives inside the project’s public asset boundary. Use project-relative paths for connector sandbox writes; this environment does not expose `process.cwd()` as a callable function there.

**Why:** Raw phone and camera originals can be tens of megabytes each, while a small curated set is enough for a premium portfolio and keeps page loads and checkouts reasonable.

**How to apply:** Inventory folder metadata first, visually review a small sample, select images by editorial role (hero, atmosphere, detail), resize and strip metadata before committing, and never infer an unverified social profile when an official destination is unavailable.