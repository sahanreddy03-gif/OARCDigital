#!/usr/bin/env bash
# SEO gate orchestrator. Three modes:
#   gate:fast  — pre-commit (Husky). Cheap, server-free.
#                tsc + audit-framework + verify-redirects (static) +
#                AUTOGEN parity (llms.txt).
#   gate       — local CI / manual. Adds the slower server-free audits.
#                gate:fast + audit-core-57 + audit-images +
#                audit-sitemap (static).
#   gate:full  — Vercel build / pre-push. Adds the HTTP smoke tests on
#                top. If no server is reachable on $BASE the gate boots
#                its own `npm run dev` instance, waits up to 90s for the
#                first 200, runs the HTTP audits against it, and tears
#                the process down on exit. Bootstrap failure (server
#                never comes up) FAILs the gate — no skip path.
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
run_step "audit-schema (self-test)"   npx tsx scripts/audit-schema.ts --self-test
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
# `AUDIT_FULL=1` forces audit-nap and audit-schema to walk every URL the
# live sitemap-index advertises (instead of the default ~60-URL sample).
# `gate:full` is the right place for that — it is the long pre-deploy run
# (manual or CI), and missing a regression on a non-sampled URL would only
# be caught at the next batch publish. Inner-loop iteration uses the
# faster sample mode by invoking the scripts directly without this flag.
SPAWNED_SERVER_PID=""
cleanup_spawned_server() {
  if [ -n "$SPAWNED_SERVER_PID" ] && kill -0 "$SPAWNED_SERVER_PID" 2>/dev/null; then
    echo "seo-gate: stopping spawned dev server (pid=$SPAWNED_SERVER_PID)"
    kill -TERM "$SPAWNED_SERVER_PID" 2>/dev/null || true
    # Give Next.js a moment to teardown gracefully before SIGKILL.
    sleep 2
    kill -KILL "$SPAWNED_SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup_spawned_server EXIT

bootstrap_server() {
  echo "seo-gate: no server at $BASE — booting 'npm run dev' ourselves"
  # Strip the protocol+host so we can compute the bind port. Default 5000.
  local port="${BASE##*:}"
  port="${port%%/*}"
  : "${port:=5000}"
  # Run in background, redirect logs so they don't pollute the gate output.
  ( PORT="$port" npm run dev > /tmp/seo-gate-server.log 2>&1 ) &
  SPAWNED_SERVER_PID=$!
  echo "seo-gate: spawned server pid=$SPAWNED_SERVER_PID — waiting up to 90s for first 200"
  local attempt=0
  while [ $attempt -lt 90 ]; do
    if server_up; then
      echo "seo-gate: server ready after ${attempt}s"
      return 0
    fi
    if ! kill -0 "$SPAWNED_SERVER_PID" 2>/dev/null; then
      echo "seo-gate: ERROR — spawned server (pid=$SPAWNED_SERVER_PID) died before responding"
      tail -40 /tmp/seo-gate-server.log || true
      return 1
    fi
    sleep 1
    attempt=$((attempt + 1))
  done
  echo "seo-gate: ERROR — server did not respond at $BASE within 90s"
  tail -40 /tmp/seo-gate-server.log || true
  return 1
}

if ! server_up; then
  if ! bootstrap_server; then
    echo
    echo "seo-gate: FAIL — gate:full requires a reachable server (auto-boot failed)"
    exit 1
  fi
fi

run_step "verify-redirects (HTTP)"  env BASE="$BASE" npx tsx scripts/verify-redirects.ts
run_step "audit-sitemap (HTTP)"     env BASE="$BASE" npx tsx scripts/audit-sitemap.ts --http
run_step "audit-nap (HTTP)"         env BASE="$BASE" AUDIT_FULL=1 npx tsx scripts/audit-nap.ts
run_step "audit-schema (HTTP)"      env BASE="$BASE" AUDIT_FULL=1 npx tsx scripts/audit-schema.ts

echo
echo "seo-gate: all audits passed ($MODE)"
