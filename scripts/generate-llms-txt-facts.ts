/* eslint-disable no-console */
// Regenerates the "Cite-Able Service Facts" section and the generator-owned
// Start here + Actions block of public/llms.txt from the typed SEO sources, so
// the AI-discovery surface stays in lockstep with the source of truth.
//
// The section sits between the markers:
//   <!-- AUTOGEN:CITABLE-FACTS:START -->
//   <!-- AUTOGEN:CITABLE-FACTS:END -->
//
// On first run, if the markers are absent, this script inserts them around the
// existing "## Cite-Able Service Facts" heading so subsequent runs are idempotent.
//
// It also owns the file header (H1, summary, company facts from lib/seo/nap.ts)
// and cleans the ranked key-pages block (see cleanCoreIndexSection). The
// hand-kept sections between the START-HERE block and the key-pages block
// (Offers, Services, Case studies, ...) are left as written, and
// scripts/generate-llms-full-txt.ts copies them into llms-full.txt.
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
  buildStartHereSection,
  START_HERE_START,
  START_HERE_END,
  assertValidDiscoveryProse,
  curateDiscoveryText,
} from "../lib/seo/llmsTxtGenerator";
import { spliceH360LlmsSection } from "../lib/seo/h360LlmsGenerator";
import { NAP } from "../lib/seo/nap";
import { ORG_FOUNDING_DATE } from "../lib/seo/organizationSchema";

const LLMS = path.join(process.cwd(), "public", "llms.txt");
const START = "<!-- AUTOGEN:CITABLE-FACTS:START -->";
const END = "<!-- AUTOGEN:CITABLE-FACTS:END -->";

// ---------------------------------------------------------------------------
// File header (H1 + summary blockquote + company facts).
//
// Owned by this script so the name, address, phone, email and founding year
// always come from lib/seo/nap.ts and lib/seo/organizationSchema.ts. The
// header is everything before the START-HERE marker. scripts/
// generate-llms-full-txt.ts copies it into llms-full.txt, so both files
// open with the same facts. Founding year: 2023 (owner-confirmed).
// ---------------------------------------------------------------------------
function buildHeader(): string {
  const address = `${NAP.streetAddress}, ${NAP.addressLocality} ${NAP.postalCode}, Malta`;
  return [
    `# ${NAP.name}`,
    "",
    `> ${NAP.name} is a marketing agency in ${NAP.addressLocality}, Malta, founded in ${ORG_FOUNDING_DATE}. One in-house team runs the creative studio, SEO and ads, AI agents and automation for Malta businesses.`,
    "",
    `- Founded: ${ORG_FOUNDING_DATE}, in ${NAP.addressLocality}, Malta`,
    `- Address: ${address}`,
    `- Phone and WhatsApp: ${NAP.phoneDisplay}`,
    `- Email: ${NAP.email}`,
    "- Website: https://oarcdigital.com",
    "- Instagram: https://www.instagram.com/oarcdigital",
    "- YouTube: https://www.youtube.com/@oarcdigital",
    "- Pricing: custom pricing, scoped to each business. One campaign offer has its own page (see Offers) and is listed in https://oarcdigital.com/pricing.txt.",
    "",
    "",
  ].join("\n");
}

function applyHeader(txt: string): string {
  const idx = txt.indexOf(START_HERE_START);
  if (idx < 0) return buildHeader() + txt;
  return buildHeader() + txt.slice(idx);
}

// ---------------------------------------------------------------------------
// Clean-up of the ranked key-pages block (AUTOGEN:CORE-60-INDEX).
//
// lib/seo/topPages.ts still lists a few things the AI index must not show:
//   - URLs that now redirect (an AI crawler would hit a 308),
//   - slug-style fallback names where the page title was filtered out,
//   - internal labels ("tier core") and an internal file path.
// The fixes are applied here, on every run, so a regeneration never brings
// them back. Remove an entry from RETIRED_CORE_URLS once topPages.ts drops it.
// ---------------------------------------------------------------------------
const RETIRED_CORE_URLS = new Set<string>([
  // vercel.json redirects /enterprise to /services (308).
  "https://oarcdigital.com/enterprise",
]);

// Used when the page title was filtered out and the generator fell back to
// the slug. Names are the live page titles without the marketing suffix.
const CORE_NAME_OVERRIDES: Record<string, string> = {
  "https://oarcdigital.com/solutions": "Business Systems",
  "https://oarcdigital.com/services/ai-support-specialist": "AI Customer Support Malta",
  "https://oarcdigital.com/services/mvp-development": "MVP Development Services Malta",
};

function cleanCoreIndexSection(section: string): string {
  const out: string[] = [];
  for (const line of section.split("\n")) {
    if (/^## Canonical Core 60/.test(line)) {
      out.push("## Key pages (ranked)");
      continue;
    }
    if (/^Auto-generated from lib\/seo\/topPages\.ts/.test(line)) {
      out.push("OARC Digital's key pages, most important first.");
      continue;
    }
    const m = line.match(/^\d+\.\s+\[(.*)\]\((https:\/\/oarcdigital\.com[^)]*)\)(?:\s+—\s+tier\s+\w+)?\s*$/);
    if (!m) {
      out.push(line);
      continue;
    }
    const [, title, url] = m;
    if (RETIRED_CORE_URLS.has(url)) continue;
    out.push(`- [${CORE_NAME_OVERRIDES[url] ?? title}](${url})`);
  }
  return out.join("\n");
}

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
    lines.push(
      `### ${curateDiscoveryText(entry.title.replace(/\s*\|.*$/, "").trim()) ?? slug.replace(/[-]/g, " ")}`,
    );
    lines.push(`Canonical: ${canonical}`);
    const value = curateDiscoveryText(fw.uniqueValueProp);
    if (value) lines.push(`Value: ${value}`);
    for (const f of fw.llmCitableFacts) {
      const claim = curateDiscoveryText(f.claim);
      if (claim) lines.push(`- ${claim}`);
    }
    lines.push("");
  }

  lines.push("## Cite-Able Pillar Facts (for AI answer engines)");
  lines.push("");

  for (const [pPath, entry] of Object.entries(PILLAR_SCHEMAS) as [string, PillarSchemaEntry][]) {
    const fw = entry.framework;
    if (!fw) continue;
    const canonical = `https://oarcdigital.com${pPath === "/" ? "" : pPath}`;
    lines.push(
      `### ${curateDiscoveryText(entry.title.replace(/\s*\|.*$/, "").trim()) ?? (pPath.slice(1).replace(/[-/]/g, " ") || "OARC Digital")}`,
    );
    lines.push(`Canonical: ${canonical || "https://oarcdigital.com/"}`);
    const value = curateDiscoveryText(fw.uniqueValueProp);
    if (value) lines.push(`Value: ${value}`);
    for (const f of fw.llmCitableFacts) {
      const claim = curateDiscoveryText(f.claim);
      if (claim) lines.push(`- ${claim}`);
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
  const coreSection = cleanCoreIndexSection(buildCoreIndexSection());
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
  const startHere = buildStartHereSection();
  const startHereIdx = next.indexOf(START_HERE_START);
  const endHereIdx = next.indexOf(START_HERE_END);
  if (startHereIdx >= 0 && endHereIdx > startHereIdx) {
    next = next.slice(0, startHereIdx) + startHere + next.slice(endHereIdx + START_HERE_END.length);
  } else {
    const insertAt = next.indexOf("\n---\n");
    next = insertAt >= 0
      ? next.slice(0, insertAt) + "\n\n" + startHere + next.slice(insertAt)
      : startHere + "\n\n" + next;
  }
  return applyHeader(next);
}

function main() {
  // `--check` is the AUTOGEN parity gate used by the SEO pre-commit hook:
  // it computes what the file would be regenerated to and exits non-zero if
  // the on-disk file differs. Use it to catch the case where someone edited
  // serviceSchemaConfig.ts without rerunning the generator.
  const checkOnly = process.argv.includes("--check");

  const current = fs.readFileSync(LLMS, "utf-8");
  const next = applyTransform(current);
  assertValidDiscoveryProse(next, "public/llms.txt");

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
