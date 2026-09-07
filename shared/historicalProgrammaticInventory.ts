import inventory from "@/seo-manifest/historical-programmatic.json";

export const HISTORICAL_SOURCE_COMMIT = inventory.sourceCommit;
export const HISTORICAL_RESTORATION_LASTMOD = inventory.restorationLastmod;
export const HISTORICAL_ORIGINAL_MATRIX_LASTMOD = inventory.matrixPublishedLastmod;
export const HISTORICAL_PARENT_ORIGINAL_LASTMOD = inventory.originalParentLastmod;
export const HISTORICAL_PARENT_EXPANDED_LASTMOD = inventory.expandedParentLastmod;

export const historicalMatrixLocations: readonly string[] = inventory.matrixLocations;
export const historicalParentLocations: readonly string[] = inventory.parentLocations;
export const historicalIndustries: readonly string[] = inventory.industries;
export const historicalServices: readonly string[] = inventory.historicalServices;
export const currentAdditionalLocationServices: readonly string[] =
  inventory.currentAdditionalServices;
export const currentAdditionalLocationServiceLocations: readonly string[] =
  inventory.currentAdditionalServiceLocations;

export const restoredLocationServices: readonly string[] = Array.from(
  new Set([...historicalServices, ...currentAdditionalLocationServices]),
);

export const historicalProgrammaticExpected = inventory.expected;

export function matrixPath(location: string, industry: string, service: string): string {
  return `/malta/${location}/${industry}/${service}`;
}

export function parentLocationServicePath(location: string, service: string): string {
  return `/malta/${location}/${service}`;
}

export function* historicalMatrixPaths(): Generator<string> {
  for (const location of historicalMatrixLocations) {
    for (const industry of historicalIndustries) {
      for (const service of historicalServices) {
        yield matrixPath(location, industry, service);
      }
    }
  }
}

export function* historicalParentLocationServicePaths(): Generator<string> {
  for (const location of historicalParentLocations) {
    for (const service of historicalServices) {
      yield parentLocationServicePath(location, service);
    }
  }
}

export function historicalParentLastmod(location: string, service: string): string {
  void location;
  void service;
  return HISTORICAL_RESTORATION_LASTMOD;
}