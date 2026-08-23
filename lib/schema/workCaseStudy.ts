import { buildBreadcrumb, buildOrganization } from "@/lib/schema";
import { workEvidenceLedger } from "@/data/workEvidence";

const SITE_BASE = "https://oarcdigital.com";
const CASE_STUDY_URL = `${SITE_BASE}/case-studies/pjazza`;

export function buildPjazzaCaseStudyGraph() {
  const evidence = workEvidenceLedger.pjazza;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CASE_STUDY_URL}#webpage`,
        url: CASE_STUDY_URL,
        name: "PJAZZA — Malta's Live Shopping Marketplace | OARC Digital",
        description:
          "PJAZZA is OARC Digital's own product: Malta's live shopping marketplace, with 24+ businesses, 12 sectors, and escrow protection.",
        isPartOf: { "@id": `${SITE_BASE}/#website` },
        inLanguage: "en-MT",
        mainEntity: { "@id": `${CASE_STUDY_URL}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${CASE_STUDY_URL}#project`,
        name: evidence.publicName,
        description: evidence.shortDescription,
        url: evidence.officialUrl,
        sameAs: evidence.officialUrl,
        image: `${SITE_BASE}/attached_assets/IMG_0605_1775068068190.jpeg`,
        creator: { "@id": `${SITE_BASE}/#organization` },
      },
      buildOrganization(),
      buildBreadcrumb([
        { name: "Home", url: `${SITE_BASE}/` },
        { name: "Our Work", url: `${SITE_BASE}/our-work` },
        { name: "PJAZZA", url: CASE_STUDY_URL },
      ]),
    ],
  };
}