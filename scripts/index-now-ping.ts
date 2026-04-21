// Post-deploy IndexNow ping. Submits the sitemap and any URLs passed on the
// command line to Bing/Yandex/IndexNow.
//
// Usage:
//   npx tsx scripts/index-now-ping.ts
//   npx tsx scripts/index-now-ping.ts https://oarcdigital.com/research/foo
//
// Wire into a deploy hook (Vercel post-deploy, Replit Deployment hook, or a
// scheduled job) so search engines crawl new pages within minutes.

import { pingSitemapAndUrls } from "../lib/indexNow";

async function main() {
  const extras = process.argv.slice(2).filter((a) => a.startsWith("http"));
  console.log(
    `[index-now-ping] submitting sitemap + ${extras.length} extra URLs…`,
  );
  const results = await pingSitemapAndUrls(extras);
  let failed = 0;
  for (const r of results) {
    const status = r.ok ? "OK " : "ERR";
    console.log(`  ${status} ${r.status.toString().padEnd(4)} ${r.endpoint}`);
    if (!r.ok) failed += 1;
    if (r.error) console.log(`       ${r.error}`);
  }
  if (failed === results.length) {
    console.error(`[index-now-ping] all endpoints failed.`);
    process.exit(1);
  }
  console.log(`[index-now-ping] done (${results.length - failed}/${results.length} succeeded).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
