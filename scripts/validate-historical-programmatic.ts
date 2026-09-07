/* eslint-disable no-console */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { buildEntries as buildMaltaEntries } from "../app/sitemap-malta.xml/route";
import { buildEntries as buildMatrixEntries } from "../app/sitemap-malta-matrix.xml/route";
import { getLocationProfile } from "../lib/seo/locationData";
import {
  buildLocationIndustryServiceContent,
  getIndustryProfile,
  getServiceProfile,
} from "../lib/seo/generateUniquePageContent";
import {
  KEEP_LOCATION_IND_SVC_COMBOS,
  KEPT_INDUSTRIES,
  KEPT_LOCATIONS,
  KEPT_LOCATION_SERVICES,
  LOCATION_IND_SVC_GLOBAL_KEEP,
  LOCATION_SERVICE_ALIASES,
  isKeptLocationIndustryServicePath,
  isKeptLocationServicePath,
} from "../lib/seo/seoSets";
import { SITE_BASE } from "../lib/seo/sitemapHelpers";
import {
  currentAdditionalLocationServices,
  currentAdditionalLocationServiceLocations,
  HISTORICAL_RESTORATION_LASTMOD,
  historicalIndustries,
  historicalMatrixLocations,
  historicalMatrixPaths,
  historicalParentLocations,
  historicalParentLocationServicePaths,
  historicalProgrammaticExpected,
  historicalServices,
} from "../shared/historicalProgrammaticInventory";
import { maltaIndustries, maltaLocations } from "../shared/seoConfig";

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function unique(values: readonly string[], label: string): Set<string> {
  const result = new Set(values);
  invariant(
    result.size === values.length,
    `${label}: found ${values.length - result.size} duplicate value(s)`,
  );
  return result;
}

function setEqual(actual: Set<string>, expected: Set<string>, label: string): void {
  const missing = [...expected].filter((value) => !actual.has(value));
  const extra = [...actual].filter((value) => !expected.has(value));
  invariant(
    missing.length === 0 && extra.length === 0,
    `${label}: set mismatch\nmissing=${missing.slice(0, 20).join(",")}\nextra=${extra
      .slice(0, 20)
      .join(",")}`,
  );
}

function hashPaths(paths: readonly string[]): string {
  return createHash("sha256")
    .update([...paths].sort().join("\n") + "\n")
    .digest("hex");
}

function sitemapPaths(entries: ReturnType<typeof buildMatrixEntries>): string[] {
  return entries.map(({ loc }) => new URL(loc).pathname);
}

function assertContentCoverage(matrixPaths: readonly string[]): void {
  for (const location of historicalMatrixLocations) {
    invariant(getLocationProfile(location), `missing location profile: ${location}`);
  }
  for (const industry of historicalIndustries) {
    invariant(getIndustryProfile(industry), `missing industry profile: ${industry}`);
  }
  for (const service of [...historicalServices, ...currentAdditionalLocationServices]) {
    invariant(getServiceProfile(service), `missing service profile: ${service}`);
  }

  for (const path of matrixPaths) {
    const [, , location, industry, service] = path.split("/");
    const content = buildLocationIndustryServiceContent(location, industry, service);
    invariant(content, `content builder returned empty for ${path}`);
    invariant(content.canonical === `${SITE_BASE}${path}`, `canonical mismatch for ${path}`);
    invariant(content.title.length >= 35, `title too short for ${path}`);
    invariant(content.description.length >= 100, `description too short for ${path}`);
    invariant(content.faqs.length >= 5, `insufficient FAQs for ${path}`);

    const expanded = content as typeof content & {
      serviceBenefits?: unknown[];
      process?: unknown[];
      localChallenges?: unknown[];
      localOpportunities?: unknown[];
      locationIntro?: string;
    };
    invariant((expanded.serviceBenefits?.length ?? 0) >= 4, `insufficient benefits for ${path}`);
    invariant((expanded.process?.length ?? 0) >= 4, `insufficient process depth for ${path}`);
    invariant((expanded.localChallenges?.length ?? 0) >= 2, `insufficient local challenges for ${path}`);
    invariant(
      (expanded.localOpportunities?.length ?? 0) >= 2,
      `insufficient local opportunities for ${path}`,
    );
    invariant((expanded.locationIntro?.length ?? 0) >= 120, `location intro too short for ${path}`);
  }
}

function main(): void {
  invariant(
    existsSync("app/malta/[location]/[slug]/[service]/page.tsx"),
    "matrix route file is missing",
  );
  invariant(
    existsSync("app/malta/[location]/[slug]/page.tsx"),
    "parent location-service route file is missing",
  );

  unique(historicalMatrixLocations, "matrix locations");
  unique(historicalParentLocations, "parent locations");
  unique(historicalIndustries, "historical industries");
  unique(historicalServices, "historical services");
  unique(currentAdditionalLocationServices, "current additional services");
  unique(currentAdditionalLocationServiceLocations, "current additional service locations");

  invariant(
    historicalParentLocations.every((location) =>
      historicalMatrixLocations.includes(location),
    ),
    "parent location set is not a subset of the matrix location set",
  );

  setEqual(new Set(maltaLocations), new Set(historicalMatrixLocations), "route location allow-list");
  setEqual(new Set(maltaIndustries), new Set(historicalIndustries), "route industry allow-list");

  for (const location of historicalMatrixLocations) {
    invariant(KEPT_LOCATIONS.has(location), `middleware rejects historical location: ${location}`);
  }
  for (const industry of historicalIndustries) {
    invariant(KEPT_INDUSTRIES.has(industry), `middleware rejects historical industry: ${industry}`);
  }
  for (const service of historicalServices) {
    invariant(
      KEPT_LOCATION_SERVICES.has(service),
      `middleware rejects historical location service: ${service}`,
    );
    invariant(
      LOCATION_SERVICE_ALIASES[service] === undefined,
      `historical location service is still redirected: ${service}`,
    );
  }
  for (const location of historicalParentLocations) {
    for (const service of historicalServices) {
      invariant(
        isKeptLocationServicePath(location, service),
        `middleware rejects historical parent tuple: ${location}/${service}`,
      );
    }
  }
  for (const location of currentAdditionalLocationServiceLocations) {
    for (const service of currentAdditionalLocationServices) {
      invariant(
        isKeptLocationServicePath(location, service),
        `middleware rejects retained current tuple: ${location}/${service}`,
      );
    }
  }
  invariant(
    LOCATION_IND_SVC_GLOBAL_KEEP,
    "historical matrix would emit noindex because LOCATION_IND_SVC_GLOBAL_KEEP is false",
  );
  invariant(
    KEEP_LOCATION_IND_SVC_COMBOS.size === 0,
    "selective matrix exceptions remain; historical restoration must be governed by the full manifest",
  );

  const restoredServices = [...historicalServices, ...currentAdditionalLocationServices];
  let allowedParentTupleCount = 0;
  let allowedMatrixTupleCount = 0;
  for (const location of historicalMatrixLocations) {
    for (const service of restoredServices) {
      if (isKeptLocationServicePath(location, service)) allowedParentTupleCount++;
    }
    for (const industry of historicalIndustries) {
      for (const service of restoredServices) {
        if (isKeptLocationIndustryServicePath(location, industry, service)) {
          allowedMatrixTupleCount++;
        }
      }
    }
  }
  invariant(
    allowedParentTupleCount ===
      historicalProgrammaticExpected.parentLocationServiceUrlCount +
        currentAdditionalLocationServiceLocations.length *
          currentAdditionalLocationServices.length,
    `middleware admits ${allowedParentTupleCount} parent tuples instead of 290`,
  );
  invariant(
    allowedMatrixTupleCount === historicalProgrammaticExpected.matrixUrlCount,
    `middleware admits ${allowedMatrixTupleCount} matrix tuples instead of ${historicalProgrammaticExpected.matrixUrlCount}`,
  );
  invariant(
    !isKeptLocationServicePath("cospicua", "digital-marketing"),
    "non-ledger parent tuple is accidentally admitted",
  );
  invariant(
    !isKeptLocationServicePath("cospicua", "seo-services"),
    "non-ledger current parent tuple is accidentally admitted",
  );
  invariant(
    !isKeptLocationIndustryServicePath("valletta", "restaurant", "seo-services"),
    "non-historical matrix service is accidentally admitted",
  );

  const matrixPaths = [...historicalMatrixPaths()];
  const parentPaths = [...historicalParentLocationServicePaths()];
  invariant(
    matrixPaths.length === historicalProgrammaticExpected.matrixUrlCount,
    `matrix count ${matrixPaths.length} != ${historicalProgrammaticExpected.matrixUrlCount}`,
  );
  invariant(
    parentPaths.length === historicalProgrammaticExpected.parentLocationServiceUrlCount,
    `parent count ${parentPaths.length} != ${historicalProgrammaticExpected.parentLocationServiceUrlCount}`,
  );
  invariant(
    hashPaths(matrixPaths) === historicalProgrammaticExpected.matrixPathSha256,
    "matrix path fingerprint differs from the checked-in historical ledger",
  );
  invariant(
    hashPaths(parentPaths) === historicalProgrammaticExpected.parentLocationServicePathSha256,
    "parent path fingerprint differs from the checked-in historical ledger",
  );

  const matrixExpected = unique(matrixPaths, "generated matrix paths");
  const parentExpected = unique(parentPaths, "generated parent paths");
  const matrixSitemap = sitemapPaths(buildMatrixEntries());
  const maltaSitemap = sitemapPaths(buildMaltaEntries());
  const matrixSitemapEntries = buildMatrixEntries();
  const maltaSitemapEntries = buildMaltaEntries();
  const matrixSitemapSet = unique(matrixSitemap, "matrix sitemap");
  const maltaSitemapSet = unique(maltaSitemap, "Malta sitemap");

  setEqual(matrixSitemapSet, matrixExpected, "matrix sitemap parity");
  invariant(matrixSitemap.length === 7350, `matrix sitemap count is ${matrixSitemap.length}`);
  invariant(maltaSitemap.length === 340, `Malta sitemap count is ${maltaSitemap.length}`);
  invariant(
    matrixSitemapEntries.every(({ lastmod }) => lastmod === HISTORICAL_RESTORATION_LASTMOD),
    "matrix sitemap contains a stale or mixed lastmod",
  );
  invariant(
    maltaSitemapEntries.every(({ lastmod }) => lastmod === HISTORICAL_RESTORATION_LASTMOD),
    "Malta sitemap contains a stale or mixed lastmod",
  );
  for (const path of parentExpected) {
    invariant(maltaSitemapSet.has(path), `historical parent path missing from sitemap: ${path}`);
  }
  invariant(maltaSitemapSet.has("/malta"), "Malta collection page missing from sitemap");
  for (const location of historicalMatrixLocations) {
    invariant(
      maltaSitemapSet.has(`/malta/${location}`),
      `historical locality hub missing from sitemap: ${location}`,
    );
  }
  for (const location of currentAdditionalLocationServiceLocations) {
    for (const service of currentAdditionalLocationServices) {
      invariant(
        maltaSitemapSet.has(`/malta/${location}/${service}`),
        `retained current path missing from sitemap: ${location}/${service}`,
      );
    }
  }
  for (const path of matrixSitemapSet) {
    invariant(!maltaSitemapSet.has(path), `path appears in two Malta sitemaps: ${path}`);
  }

  assertContentCoverage(matrixPaths);

  console.log(
    `historical-programmatic: PASS ${matrixPaths.length} matrix + ${parentPaths.length} parent URLs`,
  );
  console.log(
    `historical-programmatic: fingerprints ${historicalProgrammaticExpected.matrixPathSha256.slice(
      0,
      12,
    )} / ${historicalProgrammaticExpected.parentLocationServicePathSha256.slice(0, 12)}`,
  );
  console.log(
    `historical-programmatic: sitemaps ${matrixSitemap.length} matrix + ${maltaSitemap.length} Malta discovery URLs`,
  );
}

try {
  main();
} catch (error) {
  console.error(
    `historical-programmatic: FAIL ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exitCode = 1;
}