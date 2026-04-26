/* eslint-disable no-console */
// Generates `public/llms-full.txt` — the full reference document for AI
// answer engines (ChatGPT, Claude, Gemini, Perplexity, Copilot, You.com,
// Brave Leo). Distinct from `public/llms.txt`:
//   - llms.txt is the LIGHT index (URLs + cite-able fact bullets).
//   - llms-full.txt is the FULL reference: every page's TITLE, DESCRIPTION,
//     framework UVP, all FAQs (Q+A), and every llmCitableFact with source URL.
//
// The entire file is auto-generated. AUTOGEN markers wrap the content so
// `scripts/audit-framework.ts` can regenerate in-memory and parity-check on
// every commit. Hand-editing the body fails the gate — re-run this script
// after every edit to SERVICE_SCHEMAS or PILLAR_SCHEMAS.
//
// Usage:
//   npx tsx scripts/generate-llms-full-txt.ts          # regenerate
//   npx tsx scripts/generate-llms-full-txt.ts --check  # parity check, exits 1 on drift

import fs from "node:fs";
import path from "node:path";
import { buildLlmsFullFile, LLMS_FULL_PATH } from "../lib/seo/llmsFullBuilder";
import { SERVICE_SCHEMAS } from "../lib/seo/serviceSchemaConfig";
import { PILLAR_SCHEMAS } from "../lib/seo/pillarSchemaConfig";

function main() {
  const checkOnly = process.argv.includes("--check");
  const expected = buildLlmsFullFile();
  const fullPath = path.join(process.cwd(), LLMS_FULL_PATH);

  if (checkOnly) {
    if (!fs.existsSync(fullPath)) {
      console.error(
        `[generate-llms-full-txt] AUTOGEN parity FAILED — ${LLMS_FULL_PATH} does not exist.\n` +
          "  Run: npx tsx scripts/generate-llms-full-txt.ts",
      );
      process.exit(1);
    }
    const current = fs.readFileSync(fullPath, "utf-8");
    if (current !== expected) {
      console.error(
        `[generate-llms-full-txt] AUTOGEN parity FAILED — ${LLMS_FULL_PATH} is out of date.\n` +
          "  Run: npx tsx scripts/generate-llms-full-txt.ts\n" +
          "  Then commit the regenerated file.",
      );
      process.exit(1);
    }
    console.log(`AUTOGEN parity ok — ${LLMS_FULL_PATH} matches generator output`);
    return;
  }

  fs.writeFileSync(fullPath, expected);
  const services = Object.keys(SERVICE_SCHEMAS).length;
  const pillars = Object.keys(PILLAR_SCHEMAS).length;
  console.log(
    `wrote ${LLMS_FULL_PATH} — ${pillars} pillars + ${services} services (${expected.length} bytes)`,
  );
}

main();
