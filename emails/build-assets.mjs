// Makes the email-sized copies of site pictures in public/email/.
// Email needs JPG or PNG (Outlook cannot show WebP) at absolute URLs, kept small.
// Run: node emails/build-assets.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/email";
const CARD = { width: 720, height: 480 };
const HERO = { width: 1232, height: 720 };

/** [source in public/, output name, size, crop focus] */
const pictures = [
  ["images/optimized/malta-harbour.webp", "hero-malta.jpg", HERO, "centre"],
  ["hero-cards/invention/white-label.jpg", "card-branding.jpg", CARD, "centre"],
  ["images/services/wordpress-development-hero.png", "card-websites.jpg", CARD, "centre"],
  ["images/services/vintage-map-strategy-desk.webp", "card-seo.jpg", CARD, "centre"],
  ["hero-cards/ai/ai-concierge.jpg", "card-ai.jpg", CARD, "centre"],
  ["images/optimized/homecraft-hero.webp", "card-social.jpg", CARD, "centre"],
  ["images/optimized/video-production-service.webp", "card-film.jpg", CARD, "centre"],
];

await mkdir(OUT, { recursive: true });

for (const [source, name, size, position] of pictures) {
  const info = await sharp(`public/${source}`)
    .resize(size.width, size.height, { fit: "cover", position })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${OUT}/${name}`);
  console.log(`${name}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}

// Logo mark: PNG with a see-through background, 3x the size it is shown at.
const logo = await sharp("public/icon-512.png").resize(132, 132).png({ compressionLevel: 9 }).toFile(`${OUT}/oarc-mark.png`);
console.log(`oarc-mark.png  ${logo.width}x${logo.height}  ${Math.round(logo.size / 1024)} KB`);
