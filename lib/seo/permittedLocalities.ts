import { NAP } from "./nap";
import { locationProfiles } from "./locationData";

/**
 * Locality names that may legitimately appear in a JSON-LD address block.
 * Composed at module-load time from the canonical NAP locality plus every
 * Malta town we publish a service-area page for (locationProfiles in
 * locationData.ts).
 *
 * Lives here (not in nap.ts) so nap.ts can stay a pure constants module
 * with zero imports — the canonical NAP boundary is preserved.
 */
export const PERMITTED_NAP_LOCALITIES: readonly string[] = Object.freeze([
  NAP.addressLocality,
  ...Object.values(locationProfiles).map((p) => p.name),
]);
