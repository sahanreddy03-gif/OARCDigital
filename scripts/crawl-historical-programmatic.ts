/* eslint-disable no-console */
import { writeFile } from "node:fs/promises";
import { buildEntries as buildMaltaEntries } from "../app/sitemap-malta.xml/route";
import { buildEntries as buildMatrixEntries } from "../app/sitemap-malta-matrix.xml/route";
import { SITE_BASE } from "../lib/seo/sitemapHelpers";
import { historicalServices } from "../shared/historicalProgrammaticInventory";

const BASE = (process.env.BASE ?? "http://127.0.0.1:3100").replace(/\/+$/, "");
const CONCURRENCY = Math.max(1, Number(process.env.CONCURRENCY ?? 16));
const LIMIT = Math.max(0, Number(process.env.LIMIT ?? 0));
const REPORT = process.env.REPORT;
const ALLOW_PREVIEW_NOINDEX_HEADER = process.env.ALLOW_PREVIEW_NOINDEX_HEADER === "1";
const MIN_MATRIX_WORDS = Number(process.env.MIN_MATRIX_WORDS ?? 1000);
const MIN_PARENT_WORDS = Number(process.env.MIN_PARENT_WORDS ?? 800);
const MIN_HUB_WORDS = Number(process.env.MIN_HUB_WORDS ?? 600);
const REQUEST_TIMEOUT_MS = Number(process.env.REQUEST_TIMEOUT_MS ?? 30000);

const NEGATIVE_CONTROLS = [
  { path: "/malta/cospicua/digital-marketing", status: 410 },
  { path: "/malta/cospicua/seo-services", status: 410 },
  { path: "/malta/san-lawrenz/seo-services", status: 410 },
  {
    path: "/malta/valletta/restaurant/seo-services",
    status: 308,
    location: "/malta/valletta/seo-services",
  },
] as const;

type Failure = {
  path: string;
  status?: number;
  reason: string;
  canonical?: string;
  robots?: string;
  words?: number;
};

function htmlText(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|amp|quot|apos|#39|#x27);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attrContent(html: string, element: string, name: string, value: string, attr: string): string {
  const tags = html.match(new RegExp(`<${element}\\b[^>]*>`, "gi")) ?? [];
  for (const tag of tags) {
    const marker = tag.match(new RegExp(`${name}=[\"']([^\"']+)[\"']`, "i"))?.[1];
    if (marker?.toLowerCase() !== value.toLowerCase()) continue;
    return tag.match(new RegExp(`${attr}=[\"']([^\"']+)[\"']`, "i"))?.[1] ?? "";
  }
  return "";
}

function uniqueInternalLinks(html: string): Set<string> {
  return new Set(
    [...html.matchAll(/<a\b[^>]+href=["']([^"'#?]+)(?:[?#][^"']*)?["']/gi)]
      .map((match) => match[1])
      .filter((href) => href.startsWith("/")),
  );
}

function classify(path: string): "root" | "hub" | "parent" | "matrix" {
  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return "root";
  if (depth === 2) return "hub";
  if (depth === 3) return "parent";
  return "matrix";
}

function linkFailure(path: string, kind: ReturnType<typeof classify>, links: Set<string>): string | null {
  const parts = path.split("/").filter(Boolean);
  if (kind === "root") {
    const localityLinks = [...links].filter((href) => /^\/malta\/[^/]+$/.test(href));
    return localityLinks.length >= 49 ? null : `only ${localityLinks.length}/49 locality hub links`;
  }
  if (kind === "hub") {
    const prefix = `/malta/${parts[1]}/`;
    const matrixLinks = [...links].filter(
      (href) => href.startsWith(prefix) && href.split("/").filter(Boolean).length === 4,
    );
    return matrixLinks.length >= 150 ? null : `only ${matrixLinks.length}/150 matrix links`;
  }
  if (kind === "parent") {
    const prefix = `/malta/${parts[1]}/`;
    const service = parts[2];
    if (!historicalServices.includes(service)) {
      return links.has(`/malta/${parts[1]}`) ? null : "missing locality hub link";
    }
    const matrixLinks = [...links].filter((href) => {
      const linkParts = href.split("/").filter(Boolean);
      return href.startsWith(prefix) && linkParts.length === 4 && linkParts[3] === service;
    });
    return matrixLinks.length >= 15 ? null : `only ${matrixLinks.length}/15 industry links`;
  }
  const relatedPrefix = `/malta/${parts[1]}/${parts[2]}/`;
  const relatedLinks = [...links].filter(
    (href) => href.startsWith(relatedPrefix) && href !== path,
  );
  if (!links.has(`/malta/${parts[1]}`)) return "missing locality hub link";
  return relatedLinks.length >= 9 ? null : `only ${relatedLinks.length}/9 related service links`;
}

async function inspect(path: string): Promise<Failure[]> {
  const failures: Failure[] = [];
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response: Response;
  let html: string;
  try {
    response = await fetch(`${BASE}${path}`, {
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "OARC-Historical-Recovery-Validator/1.0" },
    });
    html = await response.text();
  } catch (error) {
    clearTimeout(timer);
    return [{ path, reason: `request failed: ${error instanceof Error ? error.message : String(error)}` }];
  }
  clearTimeout(timer);

  if (response.status !== 200) {
    return [{ path, status: response.status, reason: "expected HTTP 200" }];
  }

  const canonical = attrContent(html, "link", "rel", "canonical", "href");
  const expectedCanonical = `${SITE_BASE}${path}`;
  if (canonical !== expectedCanonical) {
    failures.push({ path, status: response.status, reason: "canonical mismatch", canonical });
  }

  const sourceRobots = attrContent(html, "meta", "name", "robots", "content");
  if (/\bnoindex\b/i.test(sourceRobots)) {
    failures.push({
      path,
      status: response.status,
      reason: "source emits noindex",
      robots: sourceRobots,
    });
  }
  const headerRobots = response.headers.get("x-robots-tag") ?? "";
  if (/\bnoindex\b/i.test(headerRobots) && !ALLOW_PREVIEW_NOINDEX_HEADER) {
    failures.push({
      path,
      status: response.status,
      reason: "response header emits noindex",
      robots: headerRobots,
    });
  }

  const kind = classify(path);
  const words = htmlText(html).split(/\s+/).filter(Boolean).length;
  const minimum =
    kind === "matrix"
      ? MIN_MATRIX_WORDS
      : kind === "parent"
        ? MIN_PARENT_WORDS
        : kind === "hub"
          ? MIN_HUB_WORDS
          : MIN_HUB_WORDS;
  if (words < minimum) {
    failures.push({
      path,
      status: response.status,
      reason: `rendered text below ${minimum}-word threshold`,
      words,
    });
  }

  const links = uniqueInternalLinks(html);
  const clusterFailure = linkFailure(path, kind, links);
  if (clusterFailure) {
    failures.push({
      path,
      status: response.status,
      reason: clusterFailure,
      words,
    });
  }
  return failures;
}

async function inspectNegativeControl(control: (typeof NEGATIVE_CONTROLS)[number]): Promise<Failure[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response: Response;
  let html: string;
  try {
    response = await fetch(`${BASE}${control.path}`, {
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "OARC-Historical-Recovery-Validator/1.0" },
    });
    html = await response.text();
  } catch (error) {
    clearTimeout(timer);
    return [
      {
        path: control.path,
        reason: `negative control request failed: ${
          error instanceof Error ? error.message : String(error)
        }`,
      },
    ];
  }
  clearTimeout(timer);

  if (response.status !== control.status) {
    return [
      {
        path: control.path,
        status: response.status,
        reason: `negative control expected HTTP ${control.status}`,
      },
    ];
  }

  if ("location" in control) {
    const location = response.headers.get("location") ?? "";
    let locationPath = location;
    try {
      locationPath = new URL(location, BASE).pathname;
    } catch {
      // Preserve the raw value for the failure message below.
    }
    return locationPath === control.location
      ? []
      : [
          {
            path: control.path,
            status: response.status,
            reason: `negative control redirect mismatch: ${location || "(missing)"}`,
          },
        ];
  }

  const sourceRobots = attrContent(html, "meta", "name", "robots", "content");
  const headerRobots = response.headers.get("x-robots-tag") ?? "";
  return /\bnoindex\b/i.test(sourceRobots) || /\bnoindex\b/i.test(headerRobots)
    ? []
    : [
        {
          path: control.path,
          status: response.status,
          reason: "410 negative control is missing noindex",
        },
      ];
}

async function main(): Promise<void> {
  const advertised = [
    ...buildMaltaEntries().map(({ loc }) => new URL(loc).pathname),
    ...buildMatrixEntries().map(({ loc }) => new URL(loc).pathname),
  ];
  const uniquePaths = [...new Set(advertised)];
  if (uniquePaths.length !== advertised.length) {
    throw new Error(`advertised Malta URL duplication: ${advertised.length - uniquePaths.length}`);
  }
  const paths = LIMIT > 0 ? uniquePaths.slice(0, LIMIT) : uniquePaths;
  const failures: Failure[] = [];
  let cursor = 0;
  let completed = 0;
  const startedAt = new Date().toISOString();
  const started = Date.now();

  console.log(
    `historical-crawl: ${paths.length}/${uniquePaths.length} URLs base=${BASE} concurrency=${CONCURRENCY}`,
  );

  async function worker(): Promise<void> {
    while (true) {
      const index = cursor++;
      if (index >= paths.length) return;
      failures.push(...(await inspect(paths[index])));
      completed++;
      if (completed % 250 === 0 || completed === paths.length) {
        console.log(
          `historical-crawl: ${completed}/${paths.length} checked; ${failures.length} failure(s)`,
        );
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  const negativeFailures = (
    await Promise.all(NEGATIVE_CONTROLS.map((control) => inspectNegativeControl(control)))
  ).flat();
  failures.push(...negativeFailures);
  console.log(
    `historical-crawl: ${NEGATIVE_CONTROLS.length} negative controls; ${negativeFailures.length} failure(s)`,
  );

  const advertisedPathSet = new Set(paths);
  const advertisedFailed = new Set(
    failures.filter(({ path }) => advertisedPathSet.has(path)).map(({ path }) => path),
  );
  const report = {
    base: BASE,
    startedAt,
    finishedAt: new Date().toISOString(),
    durationSeconds: Math.round((Date.now() - started) / 1000),
    advertisedUrlCount: uniquePaths.length,
    checkedUrlCount: paths.length,
    passedUrlCount: paths.length - advertisedFailed.size,
    negativeControlCount: NEGATIVE_CONTROLS.length,
    passedNegativeControlCount: NEGATIVE_CONTROLS.length - negativeFailures.length,
    failureCount: failures.length,
    allowPreviewNoindexHeader: ALLOW_PREVIEW_NOINDEX_HEADER,
    thresholds: {
      matrixWords: MIN_MATRIX_WORDS,
      parentWords: MIN_PARENT_WORDS,
      hubWords: MIN_HUB_WORDS,
    },
    failures,
  };

  if (REPORT) {
    await writeFile(REPORT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
    console.log(`historical-crawl: report ${REPORT}`);
  }
  if (failures.length > 0) {
    console.error(JSON.stringify(failures.slice(0, 30), null, 2));
    throw new Error(`${failures.length} validation failure(s)`);
  }
  console.log(
    `historical-crawl: PASS ${paths.length} URLs in ${report.durationSeconds}s`,
  );
}

main().catch((error) => {
  console.error(`historical-crawl: FAIL ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});