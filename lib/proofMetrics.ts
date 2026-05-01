// Single source of truth for OARC proof metrics shown on the homepage.
//
// Provenance: these are the agency's canonical operational track-record
// figures. PROOF_PROJECTS_DELIVERED is the count of completed Malta client
// engagements. PROOF_SATISFACTION_RATING is the average rating across those
// engagements. Both numbers were the values previously hard-coded in
// components/SuccessInNumbers.tsx (the canonical "Success In Numbers"
// section); they were extracted here so that MostPopularServices.tsx can
// reuse the same source without drift.
//
// When these numbers change, update them here and both consuming components
// will pick up the new values automatically.

export const PROOF_PROJECTS_DELIVERED = "47+";
export const PROOF_SATISFACTION_RATING = "4.9/5";
