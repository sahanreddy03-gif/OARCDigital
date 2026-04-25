/* eslint-disable no-console */
// Regenerates the "Cite-Able Service Facts" section of public/llms.txt from
// SERVICE_SCHEMAS in lib/seo/serviceSchemaConfig.ts so the AI-discovery surface
// stays in lockstep with the typed source of truth.
//
// The section sits between the markers:
//   <!-- AUTOGEN:CITABLE-FACTS:START -->
//   <!-- AUTOGEN:CITABLE-FACTS:END -->
//
// On first run, if the markers are absent, this script inserts them around the
// existing "## Cite-Able Service Facts" heading so subsequent runs are idempotent.
//
// Usage:  npx tsx scripts/generate-llms-txt-facts.ts

import fs from "node:fs";
import path from "node:path";
import { SERVICE_SCHEMAS, type ServiceSchemaEntry } from "../lib/seo/serviceSchemaConfig";
import { PILLAR_SCHEMAS, type PillarSchemaEntry } from "../lib/seo/pillarSchemaConfig";

const LLMS = path.join(process.cwd(), "public", "llms.txt");
const START = "<!-- AUTOGEN:CITABLE-FACTS:START -->";
const END = "<!-- AUTOGEN:CITABLE-FACTS:END -->";

function buildSection(): string {
  const lines: string[] = [];
  lines.push(START);
  lines.push("");
  lines.push("## Cite-Able Service Facts (for AI answer engines)");
  lines.push("");
  lines.push(
    "Auto-generated from lib/seo/serviceSchemaConfig.ts + lib/seo/pillarSchemaConfig.ts by scripts/generate-llms-txt-facts.ts. Do not hand-edit between the AUTOGEN markers — re-run the generator instead.",
  );
  lines.push("");

  for (const [slug, entry] of Object.entries(SERVICE_SCHEMAS) as [string, ServiceSchemaEntry][]) {
    const fw = entry.framework;
    if (!fw) continue;
    const canonical = `https://oarcdigital.com/services/${slug}`;
    lines.push(`### ${entry.title.replace(/\s*\|.*$/, "").trim()}`);
    lines.push(`Canonical: ${canonical}`);
    lines.push(`Value: ${fw.uniqueValueProp}`);
    for (const f of fw.llmCitableFacts) {
      lines.push(`- ${f.claim}`);
    }
    lines.push("");
  }

  lines.push("## Cite-Able Pillar Facts (for AI answer engines)");
  lines.push("");

  for (const [pPath, entry] of Object.entries(PILLAR_SCHEMAS) as [string, PillarSchemaEntry][]) {
    const fw = entry.framework;
    if (!fw) continue;
    const canonical = `https://oarcdigital.com${pPath === "/" ? "" : pPath}`;
    lines.push(`### ${entry.title.replace(/\s*\|.*$/, "").trim()}`);
    lines.push(`Canonical: ${canonical || "https://oarcdigital.com/"}`);
    lines.push(`Value: ${fw.uniqueValueProp}`);
    for (const f of fw.llmCitableFacts) {
      lines.push(`- ${f.claim}`);
    }
    lines.push("");
  }

  lines.push(END);
  return lines.join("\n");
}

function main() {
  let txt = fs.readFileSync(LLMS, "utf-8");
  const startIdx = txt.indexOf(START);
  const endIdx = txt.indexOf(END);
  const section = buildSection();

  if (startIdx >= 0 && endIdx > startIdx) {
    // Replace existing autogen block (inclusive of markers)
    const before = txt.slice(0, startIdx);
    const after = txt.slice(endIdx + END.length);
    txt = before + section + after;
  } else {
    // First run: replace the legacy "## Cite-Able Service Facts" section in
    // place. Find the heading and the next "---" delimiter that separates it
    // from "## Search Surfaces" so we don't gobble unrelated content.
    const headingPat = /## Cite-Able Service Facts[\s\S]*?(?=\n---\n)/;
    if (headingPat.test(txt)) {
      txt = txt.replace(headingPat, section + "\n");
    } else {
      // Append at end as a last resort.
      txt = txt.trimEnd() + "\n\n" + section + "\n";
    }
  }

  fs.writeFileSync(LLMS, txt);
  console.log(`generated cite-able facts section for ${Object.keys(SERVICE_SCHEMAS).length} services`);
}

main();
