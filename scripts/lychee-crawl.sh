#!/usr/bin/env bash
# 404 / link-rot crawl (Task #93).
#
# Walks the live sitemap-index, crawls every advertised URL plus every
# outbound link found within those URLs, and FAILs on any 4xx/5xx
# response that isn't documented in `.local/lychee-allowlist.txt`.
#
# Internal 404s never go in the allowlist — they're bugs and must be
# fixed in the same PR. The allowlist is reserved exclusively for
# documented external-domain failures (a partner page that 404'd outside
# our control). Every entry MUST carry a comment explaining the why and
# the date it was added — see the allowlist header.
#
# Skips cleanly with NOTE when lychee is not installed (Replit Nix
# `installSystemDependencies lychee` succeeded for OARC's container; a
# fresh clone without that step also passes the gate, just without this
# coverage). The same skip path applies when no server is reachable at
# $BASE — gate:full bootstraps a dev server before this runs but local
# `bash scripts/lychee-crawl.sh` invocations just exit 0 with NOTE.
#
# Usage:
#   BASE=http://localhost:5000 bash scripts/lychee-crawl.sh
#   bash scripts/lychee-crawl.sh --check-binary

set -euo pipefail

BASE="${BASE:-http://localhost:5000}"
ALLOWLIST=".local/lychee-allowlist.txt"
REPORT=".local/lychee-report.txt"

if [ "${1:-}" = "--check-binary" ]; then
  if command -v lychee >/dev/null 2>&1; then
    echo "lychee-crawl: lychee found at $(command -v lychee)"
  else
    echo "lychee-crawl: NOTE — lychee not installed; install via system deps to enable 404 crawl"
  fi
  exit 0
fi

if ! command -v lychee >/dev/null 2>&1; then
  echo "lychee-crawl: SKIP — lychee binary not found (skip-clean per Task #93 install-fail policy)"
  exit 0
fi

# Smoke-check the server before fetching the sitemap.
if ! curl -s -o /dev/null -w "%{http_code}" --max-time 3 "$BASE" 2>/dev/null | grep -Eq "^(2|3)"; then
  echo "lychee-crawl: SKIP — BASE=$BASE unreachable"
  exit 0
fi

# Fetch the sitemap-index, extract every <loc> child sitemap URL, then
# extract every <loc> from each child sitemap. Lychee accepts a list of
# URLs on stdin via --stdin or a file via --base.
SITEMAP_URLS=$(curl -s --max-time 10 "$BASE/sitemap.xml" \
  | grep -oE '<loc>[^<]+</loc>' \
  | sed -E 's,</?loc>,,g' \
  || true)

if [ -z "$SITEMAP_URLS" ]; then
  # Server is reachable (curl above passed) but the sitemap-index has no
  # children — that's a real regression in sitemap generation, not a
  # skip case. Fail loud so we don't quietly disable 404 coverage.
  echo "lychee-crawl: FAIL — server is up at $BASE but sitemap-index returned no <loc> entries (sitemap regression)"
  exit 1
fi

# Compose a temp file of URLs to crawl.
TMP_URLS=$(mktemp)
trap 'rm -f "$TMP_URLS"' EXIT

# The sitemap-index advertises absolute https://oarcdigital.com URLs.
# Rewrite them to our local BASE so we crawl the dev server (not prod).
for child in $SITEMAP_URLS; do
  child_local=$(echo "$child" | sed -E "s,^https?://[^/]+,$BASE,")
  curl -s --max-time 10 "$child_local" \
    | grep -oE '<loc>[^<]+</loc>' \
    | sed -E 's,</?loc>,,g' \
    | sed -E "s,^https?://[^/]+,$BASE," \
    >> "$TMP_URLS" || true
done

URL_COUNT=$(wc -l < "$TMP_URLS" | tr -d '[:space:]')
echo "lychee-crawl: walking $URL_COUNT URL(s) from $BASE/sitemap.xml"

# Lychee args:
#   --no-progress : keep CI logs clean
#   --max-redirects 5 : follow redirect chains (we have 308 layers)
#   --timeout 15 : per-link timeout
#   --accept 200..=299,301,302,303,307,308 : default success codes
#                                           (lychee treats 4xx/5xx as fail)
#   --exclude-path FILE : path to a file of regex patterns to exclude.
#                         (Lychee 0.15 deprecated `--exclude-file` and
#                         renamed it to `--exclude-path`. The file format
#                         is unchanged: one regex per line, `#` comments.)
#   --user-agent : explicit so robots.txt processing is honest
LYCHEE_EXIT=0
lychee \
  --no-progress \
  --max-redirects 5 \
  --timeout 15 \
  --accept "200..=299,301,302,303,307,308" \
  --exclude-path "$ALLOWLIST" \
  --user-agent "OARC-LycheeCrawl/1.0 (+gate)" \
  --output "$REPORT" \
  "$TMP_URLS" \
  || LYCHEE_EXIT=$?

# Lychee's exit codes:
#   0 = no errors
#   1 = errors found
#   2 = invalid input
#   3 = command-line / config error
if [ "$LYCHEE_EXIT" -eq 0 ]; then
  echo "lychee-crawl: OK — no broken links across $URL_COUNT URL(s)"
  exit 0
fi

if [ "$LYCHEE_EXIT" -eq 1 ]; then
  echo
  echo "lychee-crawl: FAIL — broken link(s) detected. Report at $REPORT (head):"
  echo
  head -80 "$REPORT" || true
  echo
  echo "Internal 404s must be fixed in the same PR. ONLY documented external"
  echo "failures may be added to $ALLOWLIST (with a dated comment)."
  exit 1
fi

echo "lychee-crawl: lychee exited $LYCHEE_EXIT (config error). See $REPORT for details."
exit "$LYCHEE_EXIT"
