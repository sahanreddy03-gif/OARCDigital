---
name: Vercel lockfile portability
description: Prevent external production builds from depending on Replit-only npm package URLs.
---

The root npm lockfile used by Vercel must not contain `package-firewall.replit.local` in `resolved` package URLs. Keep the locked versions and integrity hashes unchanged, but use public npm registry URLs for externally deployed packages.

**Why:** A production deployment reached Vercel correctly but failed during `npm install` before compilation because Vercel could not resolve Replit's internal package-firewall hostname. The previous successful deployment remained live, which made Git synchronization look unsuccessful.

**How to apply:** Before an external Vercel deployment, scan the deployable root lockfile for Replit-only registry hosts. Only normalize the root lockfile used by the production project; do not treat nested design-preview artifacts as separate production apps.