#!/usr/bin/env bash
set -euo pipefail

npx tsx scripts/validate-historical-programmatic.ts
npx tsx scripts/guard-approved-historical-urls.ts
next build

if [[ "${VERCEL_ENV:-}" == "production" ]]; then
  npx tsx scripts/index-now-ping.ts --delta
  npx tsx scripts/verify-indexnow.ts
else
  echo "[deploy] VERCEL_ENV=${VERCEL_ENV:-unset} — skipping IndexNow ping (production-only)"
fi