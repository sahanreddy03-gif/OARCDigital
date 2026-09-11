/* eslint-disable no-console */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { buildEntries as buildMaltaEntries } from "../app/sitemap-malta.xml/route";
import { buildEntries as buildMatrixEntries } from "../app/sitemap-malta-matrix.xml/route";
import { buildEntries as buildLocationEntries } from "../app/sitemap-malta-locations.xml/route";
import { buildEntries as buildLocationServiceEntries } from "../app/sitemap-malta-location-services.xml/route";
import { buildEntries as buildPriorityMatrixEntries } from "../app/sitemap-malta-priority-matrix.xml/route";
import { buildEntries as buildExpandedMatrixEntries } from "../app/sitemap-malta-expanded-matrix.xml/route";
import {
  assertMatrixCohortPartition,
  MALTA_PRIORITY_MATRIX_PATHS,
  MALTA_PRIORITY_MATRIX_SHA256,
} from "../lib/seo/maltaMatrixCohorts";
import {
  CHILD_SITEMAPS,
  MATRIX_SITEMAP_PARTITIONS,
} from "../lib/seo/sitemapIndexConfig";
import approvedLedger from "../seo-manifest/approved-historical-urls.json";
import matrixExclusions from "../seo-manifest/sitemap-matrix-exclusions.json";
import { filterSitemapEntries, isSitemapEligible } from "../lib/seo/sitemapHygiene";
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
  HISTORICAL_ORIGINAL_MATRIX_LASTMOD,
  HISTORICAL_PARENT_EXPANDED_LASTMOD,
  HISTORICAL_PARENT_ORIGINAL_LASTMOD,
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

  // --- Cohort sitemaps (indexing strategy) ---
  const cohort = assertMatrixCohortPartition();
  invariant(cohort.priority === 2000, `priority cohort size ${cohort.priority} != 2000`);
  invariant(cohort.expanded === 5350, `expanded cohort size ${cohort.expanded} != 5350`);
  invariant(
    hashPaths([...MALTA_PRIORITY_MATRIX_PATHS]) === MALTA_PRIORITY_MATRIX_SHA256,
    "priority matrix fingerprint differs from seo-manifest/malta-priority-matrix.json",
  );
  invariant(
    hashPaths([...MALTA_PRIORITY_MATRIX_PATHS]) === approvedLedger.fingerprints.priorityMatrixSha256,
    "priority matrix fingerprint differs from approved-historical-urls ledger",
  );
  for (const path of approvedLedger.sahanMaltaPriorityPaths as string[]) {
    invariant(
      MALTA_PRIORITY_MATRIX_PATHS.includes(path),
      `Sahan malta priority URL missing from priority sitemap cohort: ${path}`,
    );
  }
  invariant(
    approvedLedger.locationIndSvcGlobalKeepRequired === true,
    "approved ledger must require LOCATION_IND_SVC_GLOBAL_KEEP",
  );

  const locationSitemap = sitemapPaths(buildLocationEntries());
  const locationServiceSitemap = sitemapPaths(buildLocationServiceEntries());
  const prioritySitemap = sitemapPaths(buildPriorityMatrixEntries());
  const expandedSitemap = sitemapPaths(buildExpandedMatrixEntries());
  const matrixCoverageSitemap = sitemapPaths(buildMatrixEntries()); // priority ∪ expanded (guard helper)
  const maltaSitemap = sitemapPaths(buildMaltaEntries()); // legacy alias = locations+services

  invariant(locationSitemap.length === 50, `locations sitemap count is ${locationSitemap.length}`);
  invariant(
    locationServiceSitemap.length ===
      historicalProgrammaticExpected.parentLocationServiceUrlCount +
        currentAdditionalLocationServiceLocations.length *
          currentAdditionalLocationServices.length,
    `location-services sitemap count is ${locationServiceSitemap.length}`,
  );
  invariant(prioritySitemap.length === 2000, `priority matrix sitemap count is ${prioritySitemap.length}`);
  invariant(expandedSitemap.length === 5350, `expanded matrix sitemap count is ${expandedSitemap.length}`);
  invariant(
    matrixCoverageSitemap.length === historicalProgrammaticExpected.matrixUrlCount,
    `legacy matrix coverage helper count is ${matrixCoverageSitemap.length}`,
  );
  invariant(maltaSitemap.length === 340, `legacy Malta sitemap count is ${maltaSitemap.length}`);

  setEqual(new Set(prioritySitemap), new Set(MALTA_PRIORITY_MATRIX_PATHS), "priority sitemap parity");
  setEqual(
    new Set([...prioritySitemap, ...expandedSitemap]),
    matrixExpected,
    "priority∪expanded must equal full historical matrix",
  );
  for (const path of prioritySitemap) {
    invariant(!new Set(expandedSitemap).has(path), `path in both matrix cohorts: ${path}`);
  }
  setEqual(
    new Set(matrixCoverageSitemap),
    matrixExpected,
    "legacy matrix coverage helper must equal full historical matrix",
  );

  // /sitemap.xml must advertise every matrix partition (priority must not replace inventory)
  for (const part of MATRIX_SITEMAP_PARTITIONS) {
    invariant(
      (CHILD_SITEMAPS as readonly string[]).includes(part),
      `matrix partition missing from CHILD_SITEMAPS index: ${part}`,
    );
  }
  invariant(
    (CHILD_SITEMAPS as readonly string[]).includes("sitemap-malta-priority-matrix.xml"),
    "priority matrix cohort missing from sitemap index",
  );
  invariant(
    (CHILD_SITEMAPS as readonly string[]).includes("sitemap-malta-expanded-matrix.xml"),
    "expanded matrix cohort missing from sitemap index",
  );

  // Indexed matrix coverage must match inventory tuples unless explicitly excluded
  const exclusionPaths = new Set<string>(
    ((matrixExclusions as { paths?: string[] }).paths ?? []).map(String),
  );
  for (const path of exclusionPaths) {
    invariant(matrixExpected.has(path), `exclusion path not in historical matrix ledger: ${path}`);
  }
  const requiredIndexed = new Set(
    [...matrixExpected].filter((path) => !exclusionPaths.has(path)),
  );
  const indexedMatrix = new Set([...prioritySitemap, ...expandedSitemap]);
  const missingFromIndex = [...requiredIndexed].filter((path) => !indexedMatrix.has(path));
  invariant(
    missingFromIndex.length === 0,
    `sitemap matrix coverage below inventory: missing ${missingFromIndex.length} of ${requiredIndexed.size} required paths (expected ${historicalProgrammaticExpected.matrixUrlCount} matrix; exclusions=${exclusionPaths.size}). sample=${missingFromIndex.slice(0, 10).join(",")}`,
  );
  invariant(
    indexedMatrix.size === prioritySitemap.length + expandedSitemap.length,
    "duplicate paths across priority and expanded matrix sitemaps",
  );
  invariant(
    indexedMatrix.size - exclusionPaths.size >=
      historicalProgrammaticExpected.matrixUrlCount - exclusionPaths.size,
    `indexed matrix coverage ${indexedMatrix.size} < expected ${historicalProgrammaticExpected.matrixUrlCount} after exclusions`,
  );

  const locationSitemapEntries = buildLocationEntries();
  const prioritySitemapEntries = buildPriorityMatrixEntries();
  const expandedSitemapEntries = buildExpandedMatrixEntries();
  invariant(
    locationSitemapEntries.every(({ lastmod }) => lastmod === HISTORICAL_ORIGINAL_MATRIX_LASTMOD),
    "locations sitemap lastmod must use stable matrix content date",
  );
  invariant(
    prioritySitemapEntries.every(({ lastmod }) => lastmod === HISTORICAL_ORIGINAL_MATRIX_LASTMOD),
    "priority matrix lastmod must use stable matrix content date",
  );
  invariant(
    expandedSitemapEntries.every(({ lastmod }) => lastmod === HISTORICAL_ORIGINAL_MATRIX_LASTMOD),
    "expanded matrix lastmod must use stable matrix content date",
  );

  const locationServiceEntries = buildLocationServiceEntries();
  const additionalServiceSet = new Set<string>(currentAdditionalLocationServices);
  for (const entry of locationServiceEntries) {
    const path = new URL(entry.loc).pathname;
    const service = path.split("/").filter(Boolean)[2] ?? "";
    if (additionalServiceSet.has(service)) {
      invariant(
        entry.lastmod === HISTORICAL_PARENT_EXPANDED_LASTMOD,
        `expanded parent lastmod wrong for ${path}`,
      );
    } else {
      invariant(
        entry.lastmod === HISTORICAL_PARENT_ORIGINAL_LASTMOD,
        `original parent lastmod wrong for ${path}`,
      );
    }
  }

  for (const path of parentExpected) {
    invariant(
      locationServiceSitemap.includes(path),
      `historical parent path missing from location-services sitemap: ${path}`,
    );
  }
  invariant(locationSitemap.includes("/malta"), "Malta collection page missing from locations sitemap");
  for (const location of historicalMatrixLocations) {
    invariant(
      locationSitemap.includes(`/malta/${location}`),
      `historical locality hub missing from locations sitemap: ${location}`,
    );
  }
  for (const location of currentAdditionalLocationServiceLocations) {
    for (const service of currentAdditionalLocationServices) {
      invariant(
        locationServiceSitemap.includes(`/malta/${location}/${service}`),
        `retained current path missing from location-services sitemap: ${location}/${service}`,
      );
    }
  }

  // No overlap across malta indexing cohorts (locations / parents / full matrix)
  const indexingPaths = new Set([
    ...locationSitemap,
    ...locationServiceSitemap,
    ...prioritySitemap,
    ...expandedSitemap,
  ]);
  invariant(
    indexingPaths.size ===
      locationSitemap.length +
        locationServiceSitemap.length +
        prioritySitemap.length +
        expandedSitemap.length,
    "duplicate paths across malta indexing cohort sitemaps",
  );

  // Hygiene: every indexing sitemap entry must be eligible
  for (const entry of [
    ...locationSitemapEntries,
    ...locationServiceEntries,
    ...prioritySitemapEntries,
    ...expandedSitemapEntries,
  ]) {
    invariant(isSitemapEligible(entry.loc), `hygiene rejected indexing sitemap URL: ${entry.loc}`);
  }
  invariant(
    filterSitemapEntries(prioritySitemapEntries).length === prioritySitemapEntries.length,
    "priority sitemap contains hygiene-rejected URLs",
  );
  invariant(
    filterSitemapEntries(expandedSitemapEntries).length === expandedSitemapEntries.length,
    "expanded sitemap contains hygiene-rejected URLs",
  );

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
    `historical-programmatic: sitemaps locations=${locationSitemap.length} location-services=${locationServiceSitemap.length} priority-matrix=${prioritySitemap.length} expanded-matrix=${expandedSitemap.length} indexed-matrix=${indexedMatrix.size} exclusions=${exclusionPaths.size}`,
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