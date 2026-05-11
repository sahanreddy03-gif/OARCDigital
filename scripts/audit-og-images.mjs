// Audit: assert every Next.js page that exports `metadata` (or
// `generateMetadata`) and includes an `openGraph` block also configures
// `images:` for that block. Fails the build if any page is missing.
//
// Wired into the SEO gate (`scripts/seo-gate.sh`).

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "app";
const failures = [];

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && entry.name.endsWith(".tsx")) yield full;
  }
}

function endOfBlock(src, start) {
  let depth = 0;
  for (let i = start; i < src.length; i += 1) {
    const ch = src[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

let checked = 0;
for await (const file of walk(ROOT)) {
  const src = await fs.readFile(file, "utf8");
  const ogIdx = src.search(/openGraph\s*:\s*\{/);
  if (ogIdx < 0) continue;
  checked += 1;
  const blockStart = src.indexOf("{", ogIdx);
  const blockEnd = endOfBlock(src, blockStart);
  if (blockEnd < 0) continue;
  const block = src.slice(blockStart, blockEnd + 1);
  if (!/(^|[\s,])images\s*:/.test(block)) {
    failures.push(file);
  }
}

if (failures.length > 0) {
  console.error(`\nOG-image audit FAILED — ${failures.length} page(s) missing openGraph.images:`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error(`\nFix: import { ogImageEntry } from "@/lib/seo/ogImageUrl" and add\n  images: ogImageEntry({ title, subtitle }),\nto the openGraph block.`);
  process.exit(1);
}

console.log(`OG-image audit OK — ${checked} pages with openGraph all configure images.`);
