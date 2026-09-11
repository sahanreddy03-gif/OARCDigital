/* eslint-disable no-console */
/**
 * Indexing quality gate tighten (uniqueness overlays batch1+batch2+batch3+batch4).
 *
 * When seo-manifest/uniqueness-overlay-batch*.json exist, every
 * malta-priority-matrix path must pass:
 *   - uniqueness overlay (if listed), OR
 *   - minimum distinct fields from buildLocationIndustryServiceContent
 *
 * Does NOT flip LOCATION_IND_SVC_GLOBAL_KEEP.
 * Does NOT remove URLs from the live corpus — this is a build assertion.
 */
import {
  assertPriorityMatrixUniquenessGate,
  UNIQUENESS_OVERLAY_BATCH1,
  UNIQUENESS_OVERLAY_BATCH2,
  UNIQUENESS_OVERLAY_BATCH3,
  UNIQUENESS_OVERLAY_BATCH4,
  UNIQUENESS_OVERLAY_ALL_ENTRIES,
} from "../lib/seo/uniquenessOverlay";
import { LOCATION_IND_SVC_GLOBAL_KEEP } from "../lib/seo/seoSets";

function main() {
  console.log(
    `guard-uniqueness-quality-gate: batches=${UNIQUENESS_OVERLAY_BATCH1.batch}+${UNIQUENESS_OVERLAY_BATCH2.batch}+${UNIQUENESS_OVERLAY_BATCH3.batch}+${UNIQUENESS_OVERLAY_BATCH4.batch} overlayEntries=${UNIQUENESS_OVERLAY_ALL_ENTRIES.length} GLOBAL_KEEP=${LOCATION_IND_SVC_GLOBAL_KEEP}`,
  );
  const result = assertPriorityMatrixUniquenessGate();
  console.log(
    `  OK — checked=${result.checked} viaOverlay=${result.overlayPass} viaMinDistinct=${result.minDistinctPass}`,
  );
}

main();
