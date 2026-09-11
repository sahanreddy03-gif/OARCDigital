/* eslint-disable no-console */
/**
 * Indexing quality gate tighten (batch1 uniqueness overlay).
 *
 * When seo-manifest/uniqueness-overlay-batch1.json exists, every
 * malta-priority-matrix path must pass:
 *   - uniqueness overlay (if listed in batch1), OR
 *   - minimum distinct fields from buildLocationIndustryServiceContent
 *
 * Does NOT flip LOCATION_IND_SVC_GLOBAL_KEEP.
 * Does NOT remove URLs from the live corpus — this is a build assertion.
 */
import {
  assertPriorityMatrixUniquenessGate,
  UNIQUENESS_OVERLAY_BATCH1,
} from "../lib/seo/uniquenessOverlay";
import { LOCATION_IND_SVC_GLOBAL_KEEP } from "../lib/seo/seoSets";

function main() {
  console.log(
    `guard-uniqueness-quality-gate: batch=${UNIQUENESS_OVERLAY_BATCH1.batch} overlayEntries=${UNIQUENESS_OVERLAY_BATCH1.entries.length} GLOBAL_KEEP=${LOCATION_IND_SVC_GLOBAL_KEEP}`,
  );
  const result = assertPriorityMatrixUniquenessGate();
  console.log(
    `  OK — checked=${result.checked} viaOverlay=${result.overlayPass} viaMinDistinct=${result.minDistinctPass}`,
  );
}

main();
