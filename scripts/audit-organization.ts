/* eslint-disable no-console */
// audit-organization — gate:fast static check that the canonical Organization
// JSON-LD knowledge-graph block is wired into the high-authority surfaces
// (home + /about + /contact + /why-us) and that every required Knowledge
// Panel property is present in the builder output.
//
// Static (no HTTP) so it runs in pre-commit. The HTTP-side check that the
// rendered page actually emits the block lives in `audit-schema.ts` via the
// URL_CONTRACT["/"] = ["Organization"] entry — that runs in `gate:full`.
//
// Failure modes detected here:
//   - lib/seo/organizationSchema.ts is missing or doesn't export buildOrganization.
//   - The emitted Organization is missing any of the Knowledge-Panel-critical
//     properties (name, url, logo, address, telephone, email, founder,
//     foundingDate, areaServed, knowsAbout, contactPoint, sameAs).
//   - sameAs is empty (a missing sameAs is the single biggest reason
//     Knowledge Panels never trigger for a small agency).
//   - Any of the 4 required surfaces stops importing from the SSoT (drift).

import fs from "node:fs";
import path from "node:path";
import { buildOrganization } from "../lib/seo/organizationSchema";

type Issue = { surface: string; message: string };
const issues: Issue[] = [];

function fail(surface: string, message: string) {
  issues.push({ surface, message });
}

// ---- 1. Builder output shape ---------------------------------------------
const org = buildOrganization() as Record<string, unknown>;

const REQUIRED_PROPS: readonly string[] = [
  "@context",
  "@type",
  "@id",
  "name",
  "url",
  "logo",
  "description",
  "telephone",
  "email",
  "address",
  "founder",
  "foundingDate",
  "areaServed",
  "knowsAbout",
  "contactPoint",
  "sameAs",
];

for (const prop of REQUIRED_PROPS) {
  if (org[prop] === undefined || org[prop] === null) {
    fail("buildOrganization()", `missing required property: ${prop}`);
  }
}

if (Array.isArray(org.sameAs) && (org.sameAs as unknown[]).length === 0) {
  fail("buildOrganization()", "sameAs is empty — Knowledge Panel will not trigger");
}

// The Knowledge Panel disambiguation signal needs every major platform the
// brand operates on. Missing platforms = Google has no anchor to resolve
// the entity against, and the panel never triggers. The five required
// platforms below match the task brief (LinkedIn / Instagram / Facebook /
// X / YouTube). Each pattern matches the canonical host for that platform.
const REQUIRED_SAMEAS_PLATFORMS: { name: string; pattern: RegExp }[] = [
  { name: "LinkedIn", pattern: /linkedin\.com\// },
  { name: "Instagram", pattern: /instagram\.com\// },
  { name: "Facebook", pattern: /facebook\.com\// },
  { name: "X (Twitter)", pattern: /(^|\/\/)(x\.com|twitter\.com)\// },
  { name: "YouTube", pattern: /youtube\.com\// },
];
const sameAsList = Array.isArray(org.sameAs) ? (org.sameAs as string[]) : [];
for (const platform of REQUIRED_SAMEAS_PLATFORMS) {
  if (!sameAsList.some((u) => platform.pattern.test(u))) {
    fail(
      "buildOrganization()",
      `sameAs missing required platform: ${platform.name} (Knowledge Panel disambiguation degraded)`,
    );
  }
}
if (Array.isArray(org.knowsAbout) && (org.knowsAbout as unknown[]).length < 5) {
  fail("buildOrganization()", "knowsAbout has <5 entries — topic graph too thin");
}
if (Array.isArray(org.contactPoint) && (org.contactPoint as unknown[]).length === 0) {
  fail("buildOrganization()", "contactPoint is empty");
}

// foundingDate must be ISO 8601 (YYYY-MM-DD or longer).
if (typeof org.foundingDate === "string" && !/^\d{4}(-\d{2}(-\d{2})?)?/.test(org.foundingDate)) {
  fail("buildOrganization()", `foundingDate not ISO 8601: ${org.foundingDate}`);
}

// ---- 2. Wiring into the 4 required surfaces ------------------------------
// The home page emits Organization indirectly via RouteSchema type="pillar"
// (see components/RouteSchema.tsx → buildOrganization()). The other three
// surfaces emit it directly. We assert each surface ships a chain of imports
// that lands in the canonical buildOrganization.

type Surface = {
  path: string;
  // A regex that must match somewhere in the file's source. Each surface uses
  // its own emission pattern; we just check that SOMETHING in the file
  // resolves Organization through the canonical builder.
  patterns: RegExp[];
  description: string;
};

const SURFACES: Surface[] = [
  {
    path: "app/page.tsx",
    patterns: [/RouteSchema[\s\S]*type=["']pillar["']/, /path=["']\/["']/],
    description: 'home page must render <RouteSchema type="pillar" path="/"> (emits Organization)',
  },
  {
    path: "app/about/PageContent.tsx",
    patterns: [/buildOrganization\s*\(/],
    description: "/about must call buildOrganization()",
  },
  {
    path: "app/contact/PageContent.tsx",
    patterns: [/buildContactShellGraph\s*\(|buildOrganization\s*\(/],
    description: "/contact must emit Organization (directly or via buildContactShellGraph)",
  },
  {
    path: "app/why-us/PageContent.tsx",
    patterns: [/buildOrganization\s*\(/],
    description: "/why-us must call buildOrganization()",
  },
];

for (const s of SURFACES) {
  const abs = path.join(process.cwd(), s.path);
  if (!fs.existsSync(abs)) {
    fail(s.path, `file does not exist — ${s.description}`);
    continue;
  }
  const src = fs.readFileSync(abs, "utf8");
  for (const re of s.patterns) {
    if (!re.test(src)) {
      fail(s.path, `${s.description} (pattern not matched: ${re})`);
    }
  }
}

// ---- 3. SSoT enforcement -------------------------------------------------
// `lib/schema/index.ts` MUST re-export from the SSoT, not redefine the
// builder. Catch the regression where someone copy-pastes a divergent
// Organization back into lib/schema/index.ts.
const schemaIndex = fs.readFileSync(
  path.join(process.cwd(), "lib/schema/index.ts"),
  "utf8",
);
if (!/from\s+["']@\/lib\/seo\/organizationSchema["']/.test(schemaIndex)) {
  fail("lib/schema/index.ts", "must import buildOrganization from @/lib/seo/organizationSchema (SSoT)");
}

// ---- Report --------------------------------------------------------------
if (issues.length === 0) {
  console.log(`audit-organization: OK — ${REQUIRED_PROPS.length} props present, ${SURFACES.length} surfaces wired`);
  process.exit(0);
}

console.error("audit-organization: FAIL");
for (const i of issues) {
  console.error(`  [${i.surface}] ${i.message}`);
}
process.exit(1);
