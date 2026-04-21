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
import {
  ARCHIVED_LOCATION_REDIRECTS,
  INDUSTRY_REDIRECTS,
  ARCHIVED_SERVICE_REDIRECTS,
} from "../lib/seo/redirectMap";

const BASE = process.env.BASE ?? "http://localhost:5000";

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
