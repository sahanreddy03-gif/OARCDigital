export type WorkPublicationStatus = "first-party-product" | "withheld";

export type WorkEvidence = {
  status: WorkPublicationStatus;
  publicName: string;
  officialUrl?: string;
  shortDescription: string;
  verifiedFacts: readonly string[];
  sources: readonly {
    label: string;
    url?: string;
    note: string;
  }[];
};

export const workEvidenceLedger: Record<string, WorkEvidence> = {
  pjazza: {
    status: "first-party-product",
    publicName: "PJAZZA",
    officialUrl: "https://maltaverse.live/pjazza",
    shortDescription: "Malta's live shopping marketplace.",
    verifiedFacts: ["24+ businesses", "12 sectors", "Escrow protected"],
    sources: [
      {
        label: "PJAZZA public product page",
        url: "https://maltaverse.live/pjazza",
        note: "Publicly states the marketplace description and the three listed product facts.",
      },
      {
        label: "OARC-approved project media",
        note: "Project assets supplied in this workspace are approved for the OARC case-study presentation.",
      },
      {
        label: "OARC public portfolio",
        url: "https://oarcdigital.com/our-work",
        note: "Identifies PJAZZA as OARC's own product.",
      },
    ],
  },
};

export const DEFAULT_WITHHELD_EVIDENCE: WorkEvidence = {
  status: "withheld",
  publicName: "",
  shortDescription: "",
  verifiedFacts: [],
  sources: [],
};

export function getWorkEvidence(slug: string): WorkEvidence {
  return workEvidenceLedger[slug] ?? DEFAULT_WITHHELD_EVIDENCE;
}

export function isPublicWork(slug: string): boolean {
  return getWorkEvidence(slug).status !== "withheld";
}