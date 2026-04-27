/* eslint-disable no-console */
// Image alt-text audit. Walks every <img> and <Image> JSX usage in
// app/, components/, lib/ and asserts:
//   - an `alt` attribute is present (or the image is explicitly decorative
//     via `aria-hidden="true"` / `role="presentation"`)
//   - the alt is not an empty literal
//   - the alt is not a known-generic literal (image-1, screenshot, etc.)
//
// Dynamic alt values (alt={someVar}, alt={`${product.name}`}) are
// ACCEPTED because the variable might resolve correctly at runtime.
// Empty literals and generic literals are FAILED hard.
//
// Usage:
//   npx tsx scripts/audit-alts.ts
//   npx tsx scripts/audit-alts.ts --json > .local/alt-audit.json
//
// Exit codes: 0 = clean, 1 = failures found.

import fs from "node:fs";
import path from "node:path";
import * as ts from "typescript";

type Severity = "error" | "warn";

type Finding = {
  file: string;
  line: number;
  col: number;
  tag: string;
  severity: Severity;
  reason: string;
  snippet: string;
};

const ROOTS = ["app", "components", "lib"];
const EXTENSIONS = new Set([".tsx"]);
const TARGET_TAGS = new Set(["img", "Image"]);

// Generic alt values that read as filename leftovers — these never describe
// the image to a screen reader or to image search.
const GENERIC_ALT_PATTERNS: RegExp[] = [
  /^image[-_\s]?\d*$/i,
  /^img[-_\s]?\d*$/i,
  /^screenshot[-_\s]?\d*$/i,
  /^untitled/i,
  /^download/i,
  /^dsc[-_]?\d+/i,
  /^photo[-_]?\d+/i,
  /^picture[-_\s]?\d*$/i,
  /^icon$/i,
  /^image$/i,
  /^photo$/i,
  /^logo$/i,
  /^placeholder/i,
  /^[0-9a-f]{8,}$/i,
  /^\d+$/,
];

async function* walk(dir: string): AsyncGenerator<string> {
  let entries: fs.Dirent[];
  try {
    entries = await fs.promises.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(path.extname(e.name))) yield full;
  }
}

function getAttr(
  attrs: ts.JsxAttributes,
  name: string,
): ts.JsxAttribute | null {
  for (const a of attrs.properties) {
    if (ts.isJsxAttribute(a) && a.name.getText() === name) return a;
  }
  return null;
}

function attrLiteralValue(attr: ts.JsxAttribute): string | null {
  const init = attr.initializer;
  if (!init) return ""; // bare attribute (alt) — treat as empty literal
  if (ts.isStringLiteral(init)) return init.text;
  if (ts.isJsxExpression(init) && init.expression) {
    const expr = init.expression;
    if (ts.isStringLiteral(expr)) return expr.text;
    if (ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
  }
  return null; // dynamic — cannot statically inspect
}

function isDecorativeOptOut(attrs: ts.JsxAttributes): boolean {
  const ariaHidden = getAttr(attrs, "aria-hidden");
  if (ariaHidden && attrLiteralValue(ariaHidden) === "true") return true;
  const role = getAttr(attrs, "role");
  if (role && attrLiteralValue(role) === "presentation") return true;
  // role="none" is the modern equivalent of role="presentation" per WAI-ARIA 1.2.
  if (role && attrLiteralValue(role) === "none") return true;
  return false;
}

function tagNameOf(node: ts.JsxOpeningLikeElement): string {
  const t = node.tagName;
  if (ts.isIdentifier(t)) return t.text;
  if (ts.isPropertyAccessExpression(t)) return t.name.text;
  return t.getText();
}

function checkElement(
  node: ts.JsxOpeningLikeElement,
  source: ts.SourceFile,
  file: string,
  findings: Finding[],
) {
  const tag = tagNameOf(node);
  if (!TARGET_TAGS.has(tag)) return;

  const attrs = node.attributes;
  const altAttr = getAttr(attrs, "alt");
  const decorative = isDecorativeOptOut(attrs);
  const start = node.getStart(source);
  const { line, character } = source.getLineAndCharacterOfPosition(start);
  const snippet = source.getFullText().slice(start, Math.min(start + 140, node.getEnd())).replace(/\s+/g, " ");

  if (!altAttr) {
    if (decorative) return; // opt-out covers the missing alt — accessible per WAI-ARIA.
    findings.push({
      file,
      line: line + 1,
      col: character + 1,
      tag,
      severity: "error",
      reason: `<${tag}> missing alt prop (use alt="..." or mark decorative with aria-hidden="true" / role="presentation")`,
      snippet,
    });
    return;
  }

  const literal = attrLiteralValue(altAttr);
  if (literal === null) {
    // dynamic — accepted
    return;
  }

  const trimmed = literal.trim();
  if (trimmed.length === 0) {
    if (decorative) return; // empty alt + decorative opt-out is fine
    // Empty alt is technically valid HTML for decorative images, but without
    // an explicit decorative opt-out it is almost always an oversight. Fail.
    findings.push({
      file,
      line: line + 1,
      col: character + 1,
      tag,
      severity: "error",
      reason: `<${tag}> alt="" without aria-hidden="true"/role="presentation" — decorative images must opt out explicitly`,
      snippet,
    });
    return;
  }

  if (GENERIC_ALT_PATTERNS.some((re) => re.test(trimmed))) {
    findings.push({
      file,
      line: line + 1,
      col: character + 1,
      tag,
      severity: "error",
      reason: `<${tag}> alt="${trimmed}" is a generic placeholder — replace with a descriptive sentence`,
      snippet,
    });
    return;
  }

  // Heuristic: alt that is just the filename (`marketing-hero.jpg`) is also
  // generic. Catch any literal that ends in a known image extension.
  if (/\.(png|jpe?g|webp|avif|gif|svg)$/i.test(trimmed)) {
    findings.push({
      file,
      line: line + 1,
      col: character + 1,
      tag,
      severity: "error",
      reason: `<${tag}> alt="${trimmed}" looks like a filename — replace with a descriptive sentence`,
      snippet,
    });
  }
}

function visit(node: ts.Node, source: ts.SourceFile, file: string, findings: Finding[]) {
  if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
    checkElement(node, source, file, findings);
  }
  ts.forEachChild(node, (c) => visit(c, source, file, findings));
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const json = args.has("--json");

  const findings: Finding[] = [];
  let scanned = 0;

  for (const root of ROOTS) {
    if (!fs.existsSync(root)) continue;
    for await (const file of walk(root)) {
      const src = await fs.promises.readFile(file, "utf-8");
      // Quick prefilter so we don't TS-parse files with no img/Image tags.
      if (!/<\s*(img|Image)\b/.test(src)) continue;
      scanned++;
      const source = ts.createSourceFile(
        file,
        src,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX,
      );
      visit(source, source, file, findings);
    }
  }

  if (json) {
    process.stdout.write(JSON.stringify({ scanned, findings }, null, 2));
    return;
  }

  console.log(`audit-alts: scanned ${scanned} TSX files containing <img>/<Image>`);
  if (findings.length === 0) {
    console.log(`  OK — every <img>/<Image> has a valid alt or explicit decorative opt-out`);
    process.exit(0);
  }

  // Group by file
  const byFile = new Map<string, Finding[]>();
  for (const f of findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file)!.push(f);
  }

  console.log(`  FAIL — ${findings.length} alt-text issue(s) across ${byFile.size} file(s):\n`);
  for (const [file, list] of byFile) {
    console.log(`  ${file}`);
    for (const f of list) {
      console.log(`    ${f.line}:${f.col}  ${f.reason}`);
      console.log(`        ${f.snippet}`);
    }
    console.log("");
  }
  process.exit(1);
}

main().catch((err) => {
  console.error("audit-alts crashed:", err);
  process.exit(2);
});
