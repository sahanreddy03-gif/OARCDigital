#!/usr/bin/env node
/**
 * Sibling asset optimizer.
 * Walks attached_assets/, finds raster images larger than the threshold,
 * and writes optimized .webp + .avif siblings next to the original.
 * Originals are NEVER modified. Components opt in by importing the
 * sibling extension explicitly (e.g. `@assets/foo.webp`).
 *
 * Usage:
 *   node scripts/optimize-assets.mjs               # default: > 300 KB
 *   THRESHOLD_KB=100 node scripts/optimize-assets.mjs
 *   FORMATS=webp     node scripts/optimize-assets.mjs   # only webp
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('attached_assets');
const THRESHOLD_BYTES = (Number(process.env.THRESHOLD_KB) || 300) * 1024;
const MAX_DIM = 2400;
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 60;
const FORMATS = (process.env.FORMATS || 'webp,avif').split(',').map((s) => s.trim());

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('_')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

const isSourceImage = (name) => /\.(png|jpe?g)$/i.test(name);

async function siblingUpToDate(siblingPath, sourceMtime) {
  try {
    const stat = await fs.stat(siblingPath);
    return stat.mtimeMs >= sourceMtime;
  } catch {
    return false;
  }
}

async function processOne(file) {
  const stat = await fs.stat(file);
  if (stat.size < THRESHOLD_BYTES) return null;

  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const buf = await fs.readFile(file);
  let pipeline = sharp(buf, { failOn: 'none' }).rotate();
  const meta = await pipeline.metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);
  if (longest > MAX_DIM) {
    pipeline = pipeline.resize({
      width: (meta.width || 0) >= (meta.height || 0) ? MAX_DIM : undefined,
      height: (meta.height || 0) > (meta.width || 0) ? MAX_DIM : undefined,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  const results = {};
  for (const fmt of FORMATS) {
    const out = path.join(dir, `${base}.${fmt}`);
    if (await siblingUpToDate(out, stat.mtimeMs)) {
      results[fmt] = { skipped: 'up-to-date' };
      continue;
    }
    let outBuf;
    if (fmt === 'webp') {
      outBuf = await pipeline.clone().webp({ quality: WEBP_QUALITY, effort: 5 }).toBuffer();
    } else if (fmt === 'avif') {
      outBuf = await pipeline.clone().avif({ quality: AVIF_QUALITY, effort: 4 }).toBuffer();
    } else {
      continue;
    }
    if (outBuf.length >= stat.size) {
      results[fmt] = { skipped: 'larger' };
      continue;
    }
    await fs.writeFile(out, outBuf);
    results[fmt] = { before: stat.size, after: outBuf.length };
  }
  return results;
}

async function main() {
  let touched = 0;
  let saved = 0;
  let scanned = 0;
  const failures = [];
  for await (const file of walk(ROOT)) {
    if (!isSourceImage(file)) continue;
    scanned++;
    try {
      const r = await processOne(file);
      if (!r) continue;
      for (const fmt of Object.keys(r)) {
        const info = r[fmt];
        if (info.skipped) continue;
        touched++;
        saved += info.before - info.after;
      }
      if (touched && touched % 40 === 0) {
        console.log(`  ${touched} siblings written, ${(saved / 1024 / 1024).toFixed(1)} MB potential savings`);
      }
    } catch (e) {
      failures.push({ file, err: e.message });
    }
  }
  console.log(`\nScanned ${scanned} source images, wrote ${touched} optimized siblings; potential payload reduction ${(saved / 1024 / 1024).toFixed(1)} MB.`);
  if (failures.length) {
    console.log(`\n${failures.length} failures:`);
    for (const f of failures.slice(0, 10)) console.log(`  ${f.file}: ${f.err}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
