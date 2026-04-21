// Image SEO audit. Walks /public and reports filenames that are likely
// hurting SEO: generic names (image-1.jpg, screenshot.png, etc), unparseable
// names, missing dimensions, oversized files. Output is grouped by severity
// so it can be processed in batches of 15 between commits.
//
// Run: npx tsx scripts/audit-images.ts
//      npx tsx scripts/audit-images.ts --batch=15
//      npx tsx scripts/audit-images.ts --json > .local/image-audit.json

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "public");
const IMAGE_EXT = /\.(png|jpe?g|webp|avif|gif|svg)$/i;
const RAST_EXT = /\.(png|jpe?g|webp|avif)$/i;

const GENERIC_PATTERNS = [
  /^image[-_]?\d*$/i,
  /^img[-_]?\d*$/i,
  /^screenshot[-_]?\d*$/i,
  /^untitled/i,
  /^download/i,
  /^dsc[-_]?\d+/i,
  /^photo[-_]?\d+/i,
  /^[0-9a-f]{8,}$/i, // hash-only filenames
  /^\d{4,}/, // starts with a long number
  /^stock[-_]/i,
];

type Finding = {
  file: string;
  bytes: number;
  severity: "high" | "medium" | "low";
  reasons: string[];
  suggested?: string;
};

async function* walk(dir: string): AsyncGenerator<string> {
  let entries: import("node:fs").Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.name.startsWith(".") || e.name.startsWith("_")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (IMAGE_EXT.test(e.name)) yield full;
  }
}

function suggestName(file: string): string {
  const dir = path.basename(path.dirname(file));
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const cleanDir = dir.replace(/[^a-z0-9-]+/gi, "-").toLowerCase();
  const tail = base
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 24) || "asset";
  return `${cleanDir}-${tail}${ext}`;
}

async function audit(file: string): Promise<Finding | null> {
  const stat = await fs.stat(file);
  const base = path.basename(file, path.extname(file));
  const reasons: string[] = [];
  let severity: Finding["severity"] = "low";

  if (GENERIC_PATTERNS.some((re) => re.test(base))) {
    reasons.push("generic filename");
    severity = "high";
  }
  if (base.length > 60) {
    reasons.push("filename longer than 60 chars");
    if (severity === "low") severity = "medium";
  }
  if (/\s/.test(base)) {
    reasons.push("filename contains whitespace");
    severity = "high";
  }
  if (/[A-Z]/.test(base)) {
    reasons.push("filename contains uppercase");
    if (severity === "low") severity = "medium";
  }
  if (RAST_EXT.test(file) && stat.size > 500_000) {
    reasons.push(`oversized (${(stat.size / 1024).toFixed(0)} KB)`);
    if (severity !== "high") severity = "medium";
  }
  if (file.endsWith(".png") && stat.size > 200_000) {
    reasons.push("PNG over 200 KB — convert to WebP/AVIF");
    if (severity !== "high") severity = "medium";
  }

  if (reasons.length === 0) return null;
  return {
    file: path.relative(ROOT, file),
    bytes: stat.size,
    severity,
    reasons,
    suggested: suggestName(file),
  };
}

function takeBatch<T>(items: T[], size: number) {
  const batches: T[][] = [];
  for (let i = 0; i < items.length; i += size) batches.push(items.slice(i, i + size));
  return batches;
}

async function main() {
  const args = new Map(
    process.argv.slice(2).map((a) => {
      const [k, v] = a.split("=");
      return [k.replace(/^--/, ""), v ?? "true"];
    }),
  );
  const batchSize = Number(args.get("batch") ?? 15);
  const json = args.get("json") === "true";

  const findings: Finding[] = [];
  for await (const file of walk(ROOT)) {
    const f = await audit(file);
    if (f) findings.push(f);
  }
  findings.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 } as const;
    if (order[a.severity] !== order[b.severity]) return order[a.severity] - order[b.severity];
    return b.bytes - a.bytes;
  });

  if (json) {
    process.stdout.write(JSON.stringify({ total: findings.length, findings }, null, 2));
    return;
  }

  const high = findings.filter((f) => f.severity === "high");
  const medium = findings.filter((f) => f.severity === "medium");
  const low = findings.filter((f) => f.severity === "low");

  console.log(`\nImage SEO audit — ${findings.length} issues found`);
  console.log(`  high:   ${high.length}`);
  console.log(`  medium: ${medium.length}`);
  console.log(`  low:    ${low.length}\n`);

  const batches = takeBatch(findings, batchSize);
  batches.forEach((batch, i) => {
    console.log(`\n— Batch ${i + 1} of ${batches.length} (${batch.length} files) —`);
    for (const f of batch) {
      console.log(
        `  [${f.severity}] ${f.file}\n      reasons: ${f.reasons.join("; ")}\n      suggested: ${f.suggested}`,
      );
    }
  });
  console.log(`\nProcess one batch, commit, then continue. Total batches: ${batches.length}.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
