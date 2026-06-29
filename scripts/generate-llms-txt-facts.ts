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
import {
  buildCoreIndexSection,
  CORE_INDEX_START,
  CORE_INDEX_END,
} from "../lib/seo/llmsTxtGenerator";
import { spliceH360LlmsSection } from "../lib/seo/h360LlmsGenerator";

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

function applyTransform(txt: string): string {
  const startIdx = txt.indexOf(START);
  const endIdx = txt.indexOf(END);
  const section = buildSection();

  let next: string;
  if (startIdx >= 0 && endIdx > startIdx) {
    // Replace existing autogen block (inclusive of markers)
    const before = txt.slice(0, startIdx);
    const after = txt.slice(endIdx + END.length);
    next = before + section + after;
  } else {
    // First run: replace the legacy "## Cite-Able Service Facts" section in
    // place. Find the heading and the next "---" delimiter that separates it
    // from "## Search Surfaces" so we don't gobble unrelated content.
    const headingPat = /## Cite-Able Service Facts[\s\S]*?(?=\n---\n)/;
    if (headingPat.test(txt)) {
      next = txt.replace(headingPat, section + "\n");
    } else {
      // Append at end as a last resort.
      next = txt.trimEnd() + "\n\n" + section + "\n";
    }
  }

  // Task #135 — also splice in / refresh the AUTOGEN CORE-60-INDEX block.
  // Marker-scoped so it lives next to (not inside) CITABLE-FACTS.
  const coreSection = buildCoreIndexSection();
  const coreStart = next.indexOf(CORE_INDEX_START);
  const coreEnd = next.indexOf(CORE_INDEX_END);
  if (coreStart >= 0 && coreEnd > coreStart) {
    const before = next.slice(0, coreStart);
    const after = next.slice(coreEnd + CORE_INDEX_END.length);
    next = before + coreSection + after;
  } else {
    // Insert just before the existing CITABLE-FACTS block so the core
    // ranked index reads as the headline AEO surface in the document.
    const insertAt = next.indexOf(START);
    if (insertAt >= 0) {
      next = next.slice(0, insertAt) + coreSection + "\n\n" + next.slice(insertAt);
    } else {
      next = next.trimEnd() + "\n\n" + coreSection + "\n";
    }
  }
  next = spliceH360LlmsSection(next);
  return next;
}

function main() {
  // `--check` is the AUTOGEN parity gate used by the SEO pre-commit hook:
  // it computes what the file would be regenerated to and exits non-zero if
  // the on-disk file differs. Use it to catch the case where someone edited
  // serviceSchemaConfig.ts without rerunning the generator.
  const checkOnly = process.argv.includes("--check");

  const current = fs.readFileSync(LLMS, "utf-8");
  const next = applyTransform(current);

  if (checkOnly) {
    if (current !== next) {
      console.error(
        "[generate-llms-txt-facts] AUTOGEN parity FAILED — public/llms.txt is out of date.\n" +
          "  Run: npx tsx scripts/generate-llms-txt-facts.ts\n" +
          "  Then commit the regenerated llms.txt.",
      );
      process.exit(1);
    }
    console.log("AUTOGEN parity ok — public/llms.txt matches generator output");
    return;
  }

  fs.writeFileSync(LLMS, next);
  console.log(`generated cite-able facts section for ${Object.keys(SERVICE_SCHEMAS).length} services`);
}

main();
