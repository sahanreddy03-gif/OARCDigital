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

# Optional step — runs the command iff the gate-level prerequisite check
# passes. The check is a shell expression supplied as the first arg
# (e.g. `command -v chromium`). When it fails, we PRINT a SKIP note and
# RETURN 0 so the gate stays green. This is the contract from Task #93:
# Playwright + Lighthouse + lychee are optional-but-preferred — they run
# locally for OARC's container, skip cleanly on a fresh clone, and never
# block the gate just because the binary isn't present. The skip note
# is always loud (printed to stdout, no `2>/dev/null`) so a missing
# tool is visible in the CI output and never silently disabled.
run_step_optional() {
  local name="$1"; shift
  local prereq="$1"; shift
  echo
  echo "==> $name (optional)"
  if ! eval "$prereq" >/dev/null 2>&1; then
    echo "    SKIP — prereq not met: $prereq"
    return 0
  fi
  if "$@"; then
    echo "    OK"
  else
    echo "    FAIL — $name"
    exit 1
  fi
}

# Parallel-optional fan-out for the Task #93 baseline trio.
#
# Plays the same role as `run_step_optional` (skip-when-prereq-missing,
# fail-the-gate-when-the-tool-itself-fails) but runs N steps in
# parallel, each with its own log file under /tmp/seo-gate-parallel/.
# After every step has joined we replay the logs in declaration order
# so the gate's stdout reads as if the steps had run sequentially —
# critical for grep-based CI log inspection.
#
# Why parallel? Per Task #93's validator brief: visual-diff (Playwright,
# ~2-3min on the 40-snapshot corpus), lighthouse-baseline (median-of-3
# across 30 routes, ~3-5min), and lychee (sitemap walk, ~30s) are
# I/O-bound on the dev server and CPU-bound on chromium — they overlap
# cleanly. Sequential = 6-9min wall time; parallel = ~3-5min.
#
# Format of each task arg:  "name|prereq|cmd args..."
# Pipe is fine because no name/prereq we use contains it.
run_optional_parallel() {
  local pdir="/tmp/seo-gate-parallel-$$"
  rm -rf "$pdir"; mkdir -p "$pdir"
  local pids=() names=() i=0
  echo
  echo "==> running ${#@} optional steps in parallel"
  for spec in "$@"; do
    local name="${spec%%|*}"
    local rest="${spec#*|}"
    local prereq="${rest%%|*}"
    local cmd="${rest#*|}"
    names[$i]="$name"
    if ! eval "$prereq" >/dev/null 2>&1; then
      echo "SKIP — $name (prereq not met: $prereq)" > "$pdir/$i.log"
      echo "0" > "$pdir/$i.exit"
      pids[$i]="-1"
    else
      ( eval "$cmd" > "$pdir/$i.log" 2>&1; echo $? > "$pdir/$i.exit" ) &
      pids[$i]="$!"
      echo "    spawned [$i] $name (pid=${pids[$i]})"
    fi
    i=$((i + 1))
  done
  # Join.
  for j in "${!pids[@]}"; do
    if [ "${pids[$j]}" != "-1" ]; then
      wait "${pids[$j]}" 2>/dev/null || true
    fi
  done
  # Replay in declaration order.
  local fail=0
  for j in "${!names[@]}"; do
    echo
    echo "==> ${names[$j]} (parallel slot $j)"
    cat "$pdir/$j.log"
    local rc="$(cat "$pdir/$j.exit" 2>/dev/null || echo 1)"
    if [ "$rc" != "0" ]; then
      echo "    FAIL — ${names[$j]} (rc=$rc)"
      fail=1
    else
      echo "    OK"
    fi
  done
  rm -rf "$pdir"
  [ "$fail" = "0" ] || exit 1
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
run_step "audit-no-foreign-nap"       npx tsx scripts/audit-no-foreign-nap.ts
run_step "audit-schema (self-test)"   npx tsx scripts/audit-schema.ts --self-test
run_step "verify-redirects (static)"  npx tsx scripts/verify-redirects.ts --static
run_step "AUTOGEN parity (llms.txt)"  npx tsx scripts/generate-llms-txt-facts.ts --check
run_step "AUTOGEN parity (llms-full.txt)" npx tsx scripts/generate-llms-full-txt.ts --check
run_step "audit-alts"                 npx tsx scripts/audit-alts.ts

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
run_step "audit-discovery (HTTP)"   env BASE="$BASE" npx tsx scripts/audit-discovery.ts
run_step "audit-similarity (HTTP)"  env BASE="$BASE" AUDIT_FULL=1 npx tsx scripts/audit-similarity.ts
run_step "audit-broken-links (HTTP)" env BASE="$BASE" npx tsx scripts/audit-broken-links.ts

# --- Optional baselines (Task #93) -----------------------------------------
# Three optional gates that ship as part of the audit set when their
# binaries are present and skip cleanly otherwise. The trio is bundled
# at the END of gate:full because they are the slowest single steps —
# putting them last means a fast-failing audit upstream still saves the
# operator the perf/visual/crawl wall-time. Per Task #93, the gate:full
# total still targets <5min on the OARC container; on a fresh clone
# without chromium/lychee these steps print SKIP and contribute 0s.
#
# Lighthouse note: by default lighthouse-baseline.ts runs against the
# dev server bootstrapped above (`$BASE`). Set `LIGHTHOUSE_PROD_BUILD=1`
# (and run `npm run build && PORT=$port npm start &` BEFORE invoking
# the gate) to capture against a production build instead — the
# script just consumes whatever URL `$BASE` points at, so the prod
# server bootstrap is the operator's responsibility. The committed
# baselines in `.local/lighthouse-baseline/` were captured against
# the dev server at HEAD; re-baselining against prod requires an
# `--update` re-run with the prod server up.
#
# These three run IN PARALLEL via run_optional_parallel — see helper
# above for rationale (6-9min sequential → ~3-5min parallel). Logs
# are buffered per-step and replayed in declaration order so CI
# output is unchanged.
run_optional_parallel \
  "visual-diff (Playwright)|command -v chromium && [ -x node_modules/.bin/playwright ]|env PLAYWRIGHT_BASE_URL=\"$BASE\" npx playwright test tests/visual/visual.spec.ts --reporter=list" \
  "lighthouse-baseline|command -v chromium && [ -d node_modules/lighthouse ]|env BASE=\"$BASE\" npx tsx scripts/lighthouse-baseline.ts" \
  "lychee-crawl|command -v lychee|env BASE=\"$BASE\" bash scripts/lychee-crawl.sh"

echo
echo "seo-gate: all audits passed ($MODE)"
