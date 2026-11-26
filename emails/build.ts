/**
 * Builds the ready-to-send HTML into emails/html/.
 * Run: npx tsx emails/build.ts
 *
 * Optional, for local previews:
 *   EMAIL_ASSETS=<url or file path>  load the pictures from somewhere else
 *   EMAIL_OUT=<folder>               write somewhere else
 *   EMAIL_DARK=1                     force the dark-mode colours
 *   EMAIL_NAME=<first name>          fill in the greeting
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { renderEmail } from "./template";
import { oarcTheme, OARC_ASSETS } from "./brands/oarc";
import { welcomeOarc } from "./welcome-oarc";

const assets = process.env.EMAIL_ASSETS ?? OARC_ASSETS;
const out = process.env.EMAIL_OUT ?? "emails/html";
const name = process.env.EMAIL_NAME ?? "";

mkdirSync(out, { recursive: true });

const html = renderEmail(oarcTheme(assets), welcomeOarc(assets), {
  forceDark: process.env.EMAIL_DARK === "1",
  vars: name ? { firstName: name } : {},
});

const file = join(out, "welcome-oarc.html");
writeFileSync(file, html);
console.log(`${file}  ${Math.round(html.length / 1024)} KB`);
