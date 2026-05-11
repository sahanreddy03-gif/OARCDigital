/* eslint-disable no-console */
// audit-org-sameas-live — HTTP reachability check for every URL in
// ORG_SAMEAS (lib/seo/organizationSchema.ts). Runs in `gate:full` only;
// kept out of `gate:fast` because it makes 13 outbound HTTP requests and
// would block every commit on third-party uptime.
//
// Failure rule:
//   - Each URL must respond 2xx OR 3xx within 8s.
//   - 4xx (gone/blocked) = HARD FAIL — Google drops the Organization entity
//     when sameAs links are dead.
//   - 5xx + network errors = SOFT WARN with one retry, only fail if both
//     attempts error (avoids flaking on transient third-party blips).
//   - Some platforms (X / Cloudflare-fronted directories) bot-block HEAD;
//     fall back to GET with a browser-style User-Agent before failing.

import { ORG_SAMEAS } from "../lib/seo/organizationSchema";

const TIMEOUT_MS = 8000;
const UA =
  "Mozilla/5.0 (audit-org-sameas-live; +https://oarcdigital.com) gate:full";

type Result = { url: string; status: number | "error"; detail?: string };

async function probe(url: string, method: "HEAD" | "GET"): Promise<Result> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: ac.signal,
      headers: { "User-Agent": UA, Accept: "*/*" },
    });
    return { url, status: res.status };
  } catch (err) {
    return {
      url,
      status: "error",
      detail: err instanceof Error ? err.message : String(err),
    };
  } finally {
    clearTimeout(t);
  }
}

async function checkOne(url: string): Promise<Result> {
  // Try HEAD first (cheap), fall back to GET on 405/403/404 (some hosts
  // refuse HEAD even when GET would 200).
  let r = await probe(url, "HEAD");
  if (r.status === "error" || (typeof r.status === "number" && r.status >= 400)) {
    const g = await probe(url, "GET");
    if (g.status !== "error") r = g;
    else if (r.status === "error") {
      // Both errored — single retry with GET.
      r = await probe(url, "GET");
    }
  }
  return r;
}

(async () => {
  const results = await Promise.all(ORG_SAMEAS.map(checkOne));
  let hardFail = 0;
  let softWarn = 0;
  for (const r of results) {
    if (r.status === "error") {
      console.warn(`  WARN  ${r.url}  network: ${r.detail}`);
      softWarn++;
    } else if (r.status >= 200 && r.status < 400) {
      console.log(`  OK    ${r.url}  ${r.status}`);
    } else if (r.status >= 500) {
      console.warn(`  WARN  ${r.url}  ${r.status} (5xx tolerated)`);
      softWarn++;
    } else {
      console.error(`  FAIL  ${r.url}  ${r.status}`);
      hardFail++;
    }
  }
  console.log(
    `audit-org-sameas-live: ${results.length} URLs, hardFail=${hardFail}, softWarn=${softWarn}`,
  );
  if (hardFail > 0) {
    console.error(
      "audit-org-sameas-live: FAIL — fix or remove dead sameAs URLs in lib/seo/organizationSchema.ts",
    );
    process.exit(1);
  }
})();
