#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOTS = ['app', 'components', 'lib', 'data', 'shared', 'hooks', 'types', 'scripts'];
const EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']);

async function* walk(dir) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next' || e.name === 'dist') continue;
      yield* walk(full);
    } else if (EXTS.has(path.extname(e.name))) {
      yield full;
    }
  }
}

const importRe = /import\s+([A-Za-z_$][\w$]*)\s+from\s+(['"])@assets\/([^'"]+)\2\s*;?/g;
const dynamicRe = /import\((['"])@assets\/([^'"]+)\1\)/g;
const stringRe = /(['"])@assets\/([^'"]+)\1/g;

let totalFiles = 0;
let totalChanges = 0;

for (const root of ROOTS) {
  for await (const file of walk(root)) {
    let src;
    try { src = await fs.readFile(file, 'utf8'); } catch { continue; }
    if (!src.includes('@assets/')) continue;
    let changed = src;
    let count = 0;
    changed = changed.replace(importRe, (_, name, _q, p) => {
      count++;
      return `const ${name} = "/attached_assets/${p}";`;
    });
    changed = changed.replace(dynamicRe, (_, _q, p) => {
      count++;
      return `Promise.resolve({ default: "/attached_assets/${p}" })`;
    });
    changed = changed.replace(stringRe, (_, q, p) => {
      count++;
      return `${q}/attached_assets/${p}${q}`;
    });
    if (count > 0) {
      await fs.writeFile(file, changed);
      totalFiles++;
      totalChanges += count;
      console.log(`  ${file}: ${count}`);
    }
  }
}
console.log(`\nDone: ${totalChanges} replacements across ${totalFiles} files`);
