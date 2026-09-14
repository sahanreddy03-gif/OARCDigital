// IndexNow submitter. Pings Bing/Yandex/DuckDuckGo so newly published pages
// are crawled in minutes instead of days. Verification file is served at
// `/<KEY>.txt` from the public/ directory.
//
// IndexNow keys are intentionally public verification tokens, not credentials.
// Keep the deployed bootstrap file as the fallback; an environment override can
// rotate it without a code change.

const HOST = "oarcdigital.com";
const BOOTSTRAP_KEY = "oarcdigital7971179946174617";

export function getIndexNowKey(): string {
  const fromEnv = process.env.INDEXNOW_KEY;
  if (fromEnv && fromEnv.trim()) return fromEnv.trim();
  return BOOTSTRAP_KEY;
}

export function getKeyLocation(): string {
  return `https://${HOST}/${getIndexNowKey()}.txt`;
}

const ENDPOINTS = [
  "https://api.indexnow.org/IndexNow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

export type IndexNowResult = {
  endpoint: string;
  ok: boolean;
  status: number;
  error?: string;
};

// Submit a single URL or up to 10,000 URLs in one call.
export async function submitToIndexNow(
  urls: string | string[],
): Promise<IndexNowResult[]> {
  // A direct local invocation must never notify search engines. The explicit
  // post-publish script is the supported caller and runs with Vercel's
  // production environment explicitly set.
  if (process.env.VERCEL_ENV !== "production") return [];
  const key = getIndexNowKey();
  const list = Array.isArray(urls) ? urls : [urls];
  if (list.length === 0) return [];
  if (list.length > 10000) {
    throw new Error("IndexNow accepts at most 10,000 URLs per request");
  }
  const body = JSON.stringify({
    host: HOST,
    key,
    keyLocation: getKeyLocation(),
    urlList: list,
  });

  const results = await Promise.all(
    ENDPOINTS.map(async (endpoint): Promise<IndexNowResult> => {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body,
        });
        // 200 = accepted, 202 = accepted (queued). Anything 4xx is a config
        // problem (bad key, host mismatch, etc).
        return { endpoint, ok: res.ok, status: res.status };
      } catch (err) {
        return {
          endpoint,
          ok: false,
          status: 0,
          error: err instanceof Error ? err.message : String(err),
        };
      }
    }),
  );

  return results;
}

// Convenience helper for a deploy hook: submits the sitemap index plus an
// optional explicit URL list (e.g. the diff of newly added pages).
export async function pingSitemapAndUrls(
  extraUrls: string[] = [],
): Promise<IndexNowResult[]> {
  const urls = [
    `https://${HOST}/sitemap.xml`,
    `https://${HOST}/`,
    ...extraUrls,
  ];
  return submitToIndexNow(urls);
}
