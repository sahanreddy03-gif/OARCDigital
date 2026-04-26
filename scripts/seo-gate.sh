#!/usr/bin/env bash
# Pre-deploy SEO gate. Runs every audit before a build is allowed to ship.
#
# Subcommands:
#   gate:fast   — server-free audits only (Husky pre-commit, Vercel pre-build)
#                 tsc, audit-framework
#   gate        — fast + filesystem-only audits (audit-core-57, audit-images,
#                 verify-redirects map static check)
#   gate:full   — gate + server-dependent audits (verify-redirects HTTP smoke,
#                 audit-sitemap). Requires `npm run dev` (or `next start`)
#                 listening on $BASE (default http://localhost:5000).
#
# Bypass policy (use sparingly, justify in the PR description):
#   HUSKY=0           — skip the Husky pre-commit hook entirely.
#   SKIP_SEO_GATE=1   — skip this script's body. CI overrides this.

set -euo pipefail

if [ "${SKIP_SEO_GATE:-0}" = "1" ] && [ "${CI:-0}" != "1" ]; then
  echo "seo-gate: SKIP_SEO_GATE=1 set — bypassing audits (NOT allowed in CI)"
  exit 0
fi

MODE="${1:-gate}"
BASE="${BASE:-http://localhost:5000}"

run_step() {
  local label="$1"
  shift
  echo
  echo "==> $label"
  if "$@"; then
    echo "    OK"
  else
    echo "    FAIL"
    exit 1
  fi
}

server_up() {
  curl -s -o /dev/null -w "%{http_code}" --max-time 2 "$BASE" 2>/dev/null | grep -q "^2\|^3"
}

run_step "tsc --noEmit"               npx tsc --noEmit
run_step "audit-framework"            npx tsx scripts/audit-framework.ts

if [ "$MODE" = "gate:fast" ]; then
  echo
  echo "seo-gate: fast mode complete — server-free audits passed"
  exit 0
fi

run_step "audit-core-57"              npx tsx scripts/audit-core-57.ts
run_step "audit-images"               npx tsx scripts/audit-images.ts
run_step "audit-sitemap (static)"     npx tsx scripts/audit-sitemap.ts

if [ "$MODE" = "gate:full" ]; then
  if ! server_up; then
    echo
    echo "seo-gate: ERROR — gate:full requires the dev server at $BASE."
    echo "         Start it (npm run dev) or override BASE=, then retry."
    exit 1
  fi
  run_step "verify-redirects (HTTP)"  env BASE="$BASE" npx tsx scripts/verify-redirects.ts
  run_step "audit-sitemap (HTTP)"     env BASE="$BASE" npx tsx scripts/audit-sitemap.ts --http
fi

echo
echo "seo-gate: all audits passed ($MODE)"
