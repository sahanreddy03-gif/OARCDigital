#!/usr/bin/env node
/**
 * One-shot asset compressor.
 * Walks attached_assets/, finds raster images larger than the threshold,
 * resizes the long edge to MAX_DIM, re-encodes at QUALITY, and overwrites
 * in place. Originals are backed up to attached_assets/_originals/<name>
 * the first time each file is touched.
 *
 * Usage:
 *   node scripts/optimize-assets.mjs               # default: > 3 MB
 *   THRESHOLD_MB=1 node scripts/optimize-assets.mjs
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('attached_assets');
const BACKUP = path.join(ROOT, '_originals');
const THRESHOLD_BYTES = (Number(process.env.THRESHOLD_MB) || 3) * 1024 * 1024;
const MAX_DIM = 2400;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 60;

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

const isImage = (name) => /\.(png|jpe?g|webp|avif)$/i.test(name);

async function processOne(file) {
  const stat = await fs.stat(file);
  if (stat.size < THRESHOLD_BYTES) return null;

  const rel = path.relative(ROOT, file);
  const backupPath = path.join(BACKUP, rel);
  await fs.mkdir(path.dirname(backupPath), { recursive: true });
  try {
    await fs.access(backupPath);
  } catch {
    await fs.copyFile(file, backupPath);
  }

  const ext = path.extname(file).toLowerCase();
  const buf = await fs.readFile(backupPath);
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

  let out;
  if (ext === '.jpg' || ext === '.jpeg') {
    out = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  } else if (ext === '.png') {
    out = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer();
  } else if (ext === '.webp') {
    out = await pipeline.webp({ quality: WEBP_QUALITY, effort: 5 }).toBuffer();
  } else if (ext === '.avif') {
    out = await pipeline.avif({ quality: AVIF_QUALITY, effort: 4 }).toBuffer();
  } else {
    return null;
  }

  if (out.length >= stat.size) {
    return { file, before: stat.size, after: stat.size, skipped: true };
  }

  await fs.writeFile(file, out);
  return { file, before: stat.size, after: out.length, skipped: false };
}

async function main() {
  await fs.mkdir(BACKUP, { recursive: true });
  let touched = 0;
  let saved = 0;
  let scanned = 0;
  const failures = [];
  for await (const file of walk(ROOT)) {
    if (!isImage(file)) continue;
    scanned++;
    try {
      const r = await processOne(file);
      if (!r) continue;
      if (!r.skipped) {
        touched++;
        saved += r.before - r.after;
        if (touched % 20 === 0) {
          console.log(`  ${touched} files compressed, saved ${(saved / 1024 / 1024).toFixed(1)} MB so far`);
        }
      }
    } catch (e) {
      failures.push({ file, err: e.message });
    }
  }
  console.log(`\nScanned ${scanned} images, compressed ${touched}, saved ${(saved / 1024 / 1024).toFixed(1)} MB.`);
  if (failures.length) {
    console.log(`\n${failures.length} failures:`);
    for (const f of failures.slice(0, 10)) console.log(`  ${f.file}: ${f.err}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
