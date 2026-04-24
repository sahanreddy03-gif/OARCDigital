/**
 * Smoke test for archived-URL 308 redirects.
 *
 * Hits every archived locality, every archived industry slug, and a handful
 * of representative sub-paths against the local Next.js server, asserting
 * that each returns HTTP 308 with the expected `Location` header.
 *
 * Usage:
 *   npx tsx scripts/verify-redirects.ts            # default http://localhost:5000
 *   BASE=http://localhost:3000 npx tsx scripts/verify-redirects.ts
 *
 * Exits non-zero if any row fails so it can be wired into CI later.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import {
  ARCHIVED_LOCATION_REDIRECTS,
  INDUSTRY_REDIRECTS,
  ARCHIVED_SERVICE_REDIRECTS,
} from "../lib/seo/redirectMap";
import { SERVICE_ALIASES } from "../lib/seo/seoSets";

const BASE = process.env.BASE ?? "http://localhost:5000";

// Build-time check that previously lived in `lib/seo/redirectMap.ts` — moved
// here because middleware (which imports redirectMap) compiles to the Edge
// Runtime and Edge forbids `node:fs`. Every service-alias destination must
// exist as a real `app/services/<slug>/` directory.
function verifyServiceDirsExistOrExit(): void {
  const targets = new Set<string>([
    ...Object.values(ARCHIVED_SERVICE_REDIRECTS),
    ...Object.values(SERVICE_ALIASES).map((p) => p.replace(/^\/services\//, "")),
  ]);
  const missing: string[] = [];
  for (const slug of targets) {
    const dir = path.join(process.cwd(), "app", "services", slug);
    try {
      if (!fs.statSync(dir).isDirectory()) missing.push(slug);
    } catch {
      missing.push(slug);
    }
  }
  if (missing.length) {
    // eslint-disable-next-line no-console
    console.error(
      "[verify-redirects] Missing app/services/<slug>/ directories for redirect targets:\n  " +
        missing.join("\n  "),
    );
    process.exit(2);
  }
}

type Row = {
  from: string;
  expect: string;
  status?: number;
  location?: string | null;
  ok: boolean;
  note?: string;
};

async function checkOne(from: string, expectedPath: string): Promise<Row> {
  try {
    const res = await fetch(`${BASE}${from}`, {
      redirect: "manual",
      headers: { "user-agent": "verify-redirects-script" },
    });
    const location = res.headers.get("location");
    const ok =
      res.status === 308 &&
      !!location &&
      new URL(location, BASE).pathname === expectedPath;
    return {
      from,
      expect: expectedPath,
      status: res.status,
      location,
      ok,
    };
  } catch (e) {
    return {
      from,
      expect: expectedPath,
      ok: false,
      note: e instanceof Error ? e.message : String(e),
    };
  }
}

async function main() {
  verifyServiceDirsExistOrExit();

  const rows: Row[] = [];

  for (const [from, to] of Object.entries(ARCHIVED_LOCATION_REDIRECTS)) {
    rows.push(await checkOne(`/malta/${from}`, `/malta/${to}`));
    rows.push(
      await checkOne(
        `/malta/${from}/social-media-creative-management`,
        `/malta/${to}/social-media-creative-management`,
      ),
    );
  }

  for (const [from, to] of Object.entries(INDUSTRY_REDIRECTS)) {
    rows.push(await checkOne(`/industries/${from}`, `/industries/${to}`));
  }

  for (const [from, to] of Object.entries(ARCHIVED_SERVICE_REDIRECTS)) {
    rows.push(await checkOne(`/services/${from}`, `/services/${to}`));
  }

  // Duplicate-slug consolidation: every key in SERVICE_ALIASES must 308 to
  // its canonical counterpart so we never advertise two URLs for one offering.
  for (const [from, to] of Object.entries(SERVICE_ALIASES)) {
    rows.push(await checkOne(from, to));
  }

  const failed = rows.filter((r) => !r.ok);
  const passed = rows.length - failed.length;

  // eslint-disable-next-line no-console
  console.log(`\nverify-redirects against ${BASE}`);
  // eslint-disable-next-line no-console
  console.log(`  passed: ${passed}/${rows.length}`);
  if (failed.length) {
    // eslint-disable-next-line no-console
    console.log("\nFAILURES:");
    for (const r of failed) {
      // eslint-disable-next-line no-console
      console.log(
        `  [${r.status ?? "ERR"}] ${r.from}  →  ${r.location ?? r.note ?? "(no Location)"}  (expected ${r.expect})`,
      );
    }
    process.exit(1);
  }
  // eslint-disable-next-line no-console
  console.log("  ✓ all archived URLs redirect with 308 to the expected target");
}

void main();
