// One-shot mutator: injects <RouteSchema /> into every blog & AEO page.tsx.
// Idempotent — skips files that already import RouteSchema.
//
// Run: node scripts/inject-route-schema.mjs

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOTS = [
  { dir: "app/blog", type: "article", datePublished: "2025-12-01" },
  { dir: "app/aeo", type: "article", datePublished: "2026-01-15" },
];

const IMPORT = `import RouteSchema from "@/components/RouteSchema";\n`;

async function listSlugs(rootDir) {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("."))
    .map((e) => e.name);
}

function extract(field, src) {
  // Pull the first quoted string that follows `<field>: "..."` inside the
  // metadata block. Naïve but correct for the existing template.
  const re = new RegExp(`${field}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
  const m = src.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\") : null;
}

function extractCanonical(src) {
  const re = /alternates\s*:\s*\{\s*canonical\s*:\s*"((?:[^"\\]|\\.)*)"/;
  const m = src.match(re);
  return m ? m[1] : null;
}

async function processFile(file, type, datePublished) {
  const src = await fs.readFile(file, "utf8");
  if (src.includes("RouteSchema")) {
    return { file, status: "skip-existing" };
  }
  const title = extract("title", src);
  const description = extract("description", src);
  const canonical = extractCanonical(src);
  if (!title || !description || !canonical) {
    return { file, status: "skip-no-metadata" };
  }
  const pathOnly = canonical.replace(/^https?:\/\/[^/]+/, "");

  // Inject import after the last existing import line.
  const importEnd = src.lastIndexOf("\nimport ");
  const importLineEnd = src.indexOf("\n", importEnd + 1);
  const withImport =
    src.slice(0, importLineEnd + 1) + IMPORT + src.slice(importLineEnd + 1);

  // Replace the simple Page() return with a fragment that includes RouteSchema.
  const replaced = withImport.replace(
    /return\s*<PageContent\s*\/>\s*;?\s*\n/,
    `return (\n    <>\n      <RouteSchema\n        type="${type}"\n        path=${JSON.stringify(pathOnly)}\n        title=${JSON.stringify(title)}\n        description=${JSON.stringify(description)}\n        datePublished="${datePublished}"\n      />\n      <PageContent />\n    </>\n  );\n`,
  );

  if (replaced === withImport) {
    return { file, status: "skip-unmatched-pattern" };
  }
  await fs.writeFile(file, replaced);
  return { file, status: "ok" };
}

const summary = { ok: 0, "skip-existing": 0, "skip-no-metadata": 0, "skip-unmatched-pattern": 0 };
for (const { dir, type, datePublished } of ROOTS) {
  const slugs = await listSlugs(dir);
  for (const slug of slugs) {
    const file = path.join(dir, slug, "page.tsx");
    try {
      const result = await processFile(file, type, datePublished);
      summary[result.status] = (summary[result.status] ?? 0) + 1;
      console.log(`${result.status.padEnd(24)}  ${result.file}`);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
  }
}
console.log("\nSummary:", summary);
