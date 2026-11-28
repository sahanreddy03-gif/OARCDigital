// Makes the email-sized copies of site pictures in public/email/.
// Email needs JPG or PNG (Outlook cannot show WebP) at absolute URLs, kept small.
// Run: node emails/build-assets.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/email";
const ART = "attached_assets/generated_images";
const CARD = { width: 720, height: 540 };
const WIDE = { width: 1232, height: 820 };

/** [source in public/, output name, size]. All from the homepage art set, so the email looks like the site. */
const pictures = [
  [`${ART}/oarc-dept-sales.jpg`, "hero-key.jpg", WIDE],
  [`${ART}/oarc-dept-ship.jpg`, "feature-industry.jpg", WIDE],
  [`${ART}/oarc-dept-brand.jpg`, "card-branding.jpg", CARD],
  [`${ART}/oarc-dept-social.jpg`, "card-social.jpg", CARD],
  [`${ART}/oarc-dept-creative.jpg`, "card-film.jpg", CARD],
  [`${ART}/oarc-dept-clarity.jpg`, "card-websites.jpg", CARD],
  [`${ART}/oarc-growth-card-v2.jpg`, "card-seo.jpg", CARD],
  [`${ART}/oarc-dept-media.jpg`, "card-ads.jpg", CARD],
  [`${ART}/oarc-dept-ai-staff.jpg`, "card-ai-staff.jpg", CARD],
  [`${ART}/oarc-dept-enquiries.jpg`, "card-ai-receptionist.jpg", CARD],
  [`${ART}/oarc-dept-automation.jpg`, "card-automation.jpg", CARD],
  [`${ART}/oarc-dept-transformation.jpg`, "card-software.jpg", CARD],
];

await mkdir(OUT, { recursive: true });

for (const [source, name, size] of pictures) {
  const info = await sharp(`public/${source}`)
    .resize(size.width, size.height, { fit: "cover", position: "centre" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${OUT}/${name}`);
  console.log(`${name}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
}

// Logo mark: PNG with a see-through background, 3x the size it is shown at.
const logo = await sharp("public/icon-512.png").resize(132, 132).png({ compressionLevel: 9 }).toFile(`${OUT}/oarc-mark.png`);
console.log(`oarc-mark.png  ${logo.width}x${logo.height}  ${Math.round(logo.size / 1024)} KB`);
