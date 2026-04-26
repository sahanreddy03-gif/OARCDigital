#!/usr/bin/env bash
# SEO gate orchestrator. Three modes:
#   gate:fast  — pre-commit (Husky). Cheap, server-free.
#                tsc + audit-framework + verify-redirects (static) +
#                AUTOGEN parity (llms.txt).
#   gate       — local CI / manual. Adds the slower server-free audits.
#                gate:fast + audit-core-57 + audit-images +
#                audit-sitemap (static).
#   gate:full  — Vercel build / pre-push. Adds the HTTP smoke tests
#                that need the dev server up. In CI (no server) the HTTP
#                steps are skipped with a NOTE so the build still gates
#                on every server-free audit.
#
# Bypass:
#   HUSKY=0           skips the pre-commit hook itself (Husky-level).
#   SKIP_SEO_GATE=1   skips the body of this script (ignored when CI=1
#                     so Vercel cannot be tricked).
#
# Both bypasses MUST be justified in the PR description with a Sahan ack.
set -euo pipefail

MODE="${1:-gate}"
BASE="${BASE:-http://localhost:5000}"

if [ "${SKIP_SEO_GATE:-0}" = "1" ] && [ "${CI:-0}" != "1" ]; then
  echo "seo-gate: SKIP_SEO_GATE=1 — bypassing all audits (NOT IN CI)"
  exit 0
fi

run_step() {
  local name="$1"; shift
  echo
  echo "==> $name"
  if "$@"; then
    echo "    OK"
  else
    echo "    FAIL — $name"
    exit 1
  fi
}

server_up() {
  curl -s -o /dev/null -w "%{http_code}" --max-time 2 "$BASE" 2>/dev/null \
    | grep -Eq "^(2|3)"
}

case "$MODE" in
  gate:fast|gate|gate:full) ;;
  *)
    echo "seo-gate: unknown mode '$MODE' (expected gate:fast | gate | gate:full)"
    exit 2
    ;;
esac

echo "seo-gate: mode=$MODE base=$BASE"

# --- gate:fast (cheap, server-free) ----------------------------------------
run_step "tsc --noEmit"               npx tsc --noEmit
run_step "audit-framework"            npx tsx scripts/audit-framework.ts
run_step "verify-redirects (static)"  npx tsx scripts/verify-redirects.ts --static
run_step "AUTOGEN parity (llms.txt)"  npx tsx scripts/generate-llms-txt-facts.ts --check

if [ "$MODE" = "gate:fast" ]; then
  echo
  echo "seo-gate: fast mode complete — server-free audits passed"
  exit 0
fi

# --- gate (server-free, slower) --------------------------------------------
run_step "audit-core-57"              npx tsx scripts/audit-core-57.ts
run_step "audit-images"               npx tsx scripts/audit-images.ts
run_step "audit-sitemap (static)"     npx tsx scripts/audit-sitemap.ts

if [ "$MODE" = "gate" ]; then
  echo
  echo "seo-gate: gate complete — all server-free audits passed"
  exit 0
fi

# --- gate:full (HTTP smoke tests on top) -----------------------------------
if server_up; then
  run_step "verify-redirects (HTTP)"  env BASE="$BASE" npx tsx scripts/verify-redirects.ts
  run_step "audit-sitemap (HTTP)"     env BASE="$BASE" npx tsx scripts/audit-sitemap.ts --http
else
  echo
  echo "==> verify-redirects (HTTP)"
  echo "    NOTE skipped — no server at $BASE (CI: $([ "${CI:-0}" = "1" ] && echo yes || echo no))"
  echo "==> audit-sitemap (HTTP)"
  echo "    NOTE skipped — no server at $BASE"
  echo
  echo "seo-gate: HTTP smoke tests skipped (server not reachable). The"
  echo "          server-free static equivalents above already gated the"
  echo "          structural surface, so this is acceptable in CI but you"
  echo "          should run gate:full locally before push."
fi

echo
echo "seo-gate: all audits passed ($MODE)"
