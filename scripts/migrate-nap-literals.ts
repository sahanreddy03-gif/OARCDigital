#!/usr/bin/env tsx
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const PHONE_E164 = "+35679711799";
const PHONE_DISPLAY = "+356 7971 1799";
const EMAIL = "hello@oarcdigital.com";

const NAP_IMPORT = `import { NAP } from "@/lib/seo/nap";`;

function findFiles(): string[] {
  const out = execSync(
    `rg -l 'tel:\\+35679711799|hello@oarcdigital\\.com|>\\+356 7971 1799<|"\\+356 7971 1799"' app/ components/ -g '*.tsx' -g '*.ts'`,
    { encoding: "utf8" }
  );
  return out.split("\n").filter(Boolean).filter((p) => !p.includes("lib/seo/nap"));
}

function migrate(file: string): { changed: boolean; touched: string[] } {
  const original = readFileSync(file, "utf8");
  let src = original;
  const touched: string[] = [];

  // 1) tel:+35679711799" (string literal in JSX attribute) -> {`tel:${NAP.phoneE164}`}
  if (src.includes(`tel:${PHONE_E164}`)) {
    src = src.replace(
      /href=["']tel:\+35679711799["']/g,
      "href={`tel:${NAP.phoneE164}`}"
    );
    touched.push("tel-href");
  }

  // 2) mailto:hello@oarcdigital.com -> {`mailto:${NAP.email}`}
  if (src.includes(`mailto:${EMAIL}`)) {
    src = src.replace(
      /href=["']mailto:hello@oarcdigital\.com["']/g,
      "href={`mailto:${NAP.email}`}"
    );
    touched.push("mailto-href");
  }

  // 3) JSX text "+356 7971 1799" between tags -> {NAP.phoneDisplay}
  //    Pattern: >+356 7971 1799<  (matches inside JSX children)
  if (src.includes(`>${PHONE_DISPLAY}<`) || src.includes(`> +356 7971 1799<`)) {
    src = src.replace(/>\s*\+356 7971 1799\s*</g, ">{NAP.phoneDisplay}<");
    touched.push("jsx-phone-text");
  }

  // 4) JSX text "hello@oarcdigital.com" between tags -> {NAP.email}
  if (src.includes(`>${EMAIL}<`) || src.includes(`> hello@oarcdigital.com<`)) {
    src = src.replace(/>\s*hello@oarcdigital\.com\s*</g, ">{NAP.email}<");
    touched.push("jsx-email-text");
  }

  // 5) Inline JSX expression literals like " +356 7971 1799" preceded by an icon:
  //    `<Phone /> +356 7971 1819`  - the leading space before the literal is JSX text
  //    Already covered by jsx-phone-text since text node ends at the next <.

  // 6) Skip metadata `description` strings, FAQ answer strings, and SEO data
  //    objects — those are plain TS string literals where canonical drift is
  //    detected by `audit-nap.ts` body check, and rewriting them risks breaking
  //    JSON-LD content. Only JSX-context literals are migrated.

  if (src === original) return { changed: false, touched: [] };

  // Add NAP import if not present
  if (!src.includes(`from "@/lib/seo/nap"`) && !src.includes(`from '@/lib/seo/nap'`)) {
    // Insert after the last existing import
    const importBlockEnd = src.lastIndexOf("\nimport ");
    if (importBlockEnd === -1) {
      src = `${NAP_IMPORT}\n${src}`;
    } else {
      // Find the end of that import line
      const lineEnd = src.indexOf("\n", importBlockEnd + 1);
      const insertAt = lineEnd === -1 ? src.length : lineEnd;
      src = `${src.slice(0, insertAt)}\n${NAP_IMPORT}${src.slice(insertAt)}`;
    }
    touched.push("import");
  }

  writeFileSync(file, src);
  return { changed: true, touched };
}

function main() {
  const files = findFiles();
  console.log(`migrate-nap-literals: ${files.length} candidate files`);
  let changed = 0;
  for (const f of files) {
    const r = migrate(f);
    if (r.changed) {
      changed++;
      console.log(`  ${f}  [${r.touched.join(", ")}]`);
    }
  }
  console.log(`migrate-nap-literals: rewrote ${changed}/${files.length} files`);
}

main();
