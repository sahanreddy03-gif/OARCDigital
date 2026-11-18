/**
 * audit-language-twins: every English page listed in lib/i18n/twins.ts must have an
 * Italian and a Maltese page file, and no translated page may exist without being listed.
 * A missing twin would make the language tags point at a 404.
 *
 * Run: npx tsx scripts/audit-language-twins.ts
 */
import fs from "node:fs";
import path from "node:path";
import { LOCALES, TWINS, localeHref } from "../lib/i18n/twins";

const root = process.cwd();
const fails: string[] = [];

function pageFile(href: string): string {
  return path.join(root, "app", href === "/" ? "" : href, "page.tsx");
}

for (const twin of TWINS) {
  for (const locale of LOCALES) {
    const href = localeHref(locale, twin.path);
    if (!fs.existsSync(pageFile(href))) fails.push(`missing ${href} (app${href}/page.tsx)`);
  }
}

function walk(dir: string, out: string[]): string[] {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

const listed = new Set(TWINS.map((t) => t.path));
for (const locale of LOCALES) {
  const base = path.join(root, "app", locale);
  for (const file of walk(base, [])) {
    const rel = path.relative(base, path.dirname(file)).split(path.sep).join("/");
    const english = rel === "" ? "/" : `/${rel}`;
    if (!listed.has(english)) {
      fails.push(`/${locale}${english === "/" ? "" : english} exists but ${english} is not in TWINS`);
    }
  }
}

if (fails.length > 0) {
  console.error(`audit-language-twins: ${fails.length} problem(s)`);
  for (const f of fails) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log(`audit-language-twins: OK — ${TWINS.length} pages × ${LOCALES.length} languages all present`);
