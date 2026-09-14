#!/usr/bin/env bash
set -euo pipefail

npx tsx scripts/validate-historical-programmatic.ts
npx tsx scripts/guard-approved-historical-urls.ts
next build

# A successful build is not proof that this revision was published. IndexNow
# is an explicit post-publish action; run it only after the live deployment
# succeeds, for example:
#   VERCEL_ENV=production npx tsx scripts/index-now-ping.ts --delta
echo "[build] build complete; IndexNow remains an explicit post-publish command"