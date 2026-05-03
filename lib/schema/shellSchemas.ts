// Shell-page JSON-LD graph builders.
//
// audit-core-57 flagged /services, /our-work, and /contact as `schemaType=none`.
// These are top-level "shell" pages (high inbound, high crawl frequency,
// templated content) where adding a Service or Article node would misrepresent
// what the page IS. Instead each gets a small @graph anchored on a typed
// WebPage / CollectionPage / ContactPage, plus the canonical Organization
// (with the 13-URL ORG_SAMEAS) and a Breadcrumb so the page is connected back
// to the site root for entity-graph traversal by search + AI engines.
//
// Centralised here so:
//   - the canonical SITE_BASE / NAP / ORG_SAMEAS only resolve in one place,
//   - phrasing changes (e.g. page descriptions) are a one-line edit,
//   - audit-schema only has to validate one slot per shell,
//   - future shell pages (/about already covered, /pricing /tools /resources
//     pending Batch B+) plug into the same file.

import { buildOrganization, buildBreadcrumb, buildLocalBusiness } from "./index";
import { NAP } from "@/lib/seo/nap";

// Mirrors lib/seo/sitemapHelpers.SITE_BASE. We can't import from sitemapHelpers
// here because it pulls in node:child_process (git lastmod) which would poison
// the client bundle when this module is imported from a "use client" component.
// audit-no-foreign-nap covers domain drift; keep this in sync if the canonical
// host ever changes.
const SITE_BASE = "https://oarcdigital.com";

function shellGraph(args: {
  url: string;
  type: "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage";
  name: string;
  description: string;
  breadcrumb: { name: string; url: string }[];
  extra?: object;
}) {
  const webNode: Record<string, unknown> = {
    "@type": args.type,
    "@id": `${args.url}#webpage`,
    url: args.url,
    name: args.name,
    description: args.description,
    isPartOf: { "@id": `${SITE_BASE}/#website` },
    inLanguage: "en-MT",
    ...(args.extra ?? {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      webNode,
      buildOrganization(),
      buildBreadcrumb(args.breadcrumb),
    ],
  };
}

export function buildServicesShellGraph() {
  return shellGraph({
    url: `${SITE_BASE}/services`,
    type: "CollectionPage",
    name: "OARC Digital Services — Creative, AI Employees, Revenue Automation",
    description:
      "Catalogue of OARC Digital's Malta-based services across creative production, AI agents and growth automation.",
    breadcrumb: [
      { name: "Home", url: `${SITE_BASE}/` },
      { name: "Services", url: `${SITE_BASE}/services` },
    ],
  });
}

export function buildOurWorkShellGraph() {
  return shellGraph({
    url: `${SITE_BASE}/our-work`,
    type: "CollectionPage",
    name: "Our Work — OARC Digital Case Studies & Campaigns",
    description:
      "Selected OARC Digital projects across Malta and Europe — AI agents in production, brand systems, and revenue automation builds.",
    breadcrumb: [
      { name: "Home", url: `${SITE_BASE}/` },
      { name: "Our Work", url: `${SITE_BASE}/our-work` },
    ],
  });
}

export function buildContactShellGraph() {
  // Contact page also emits LocalBusiness so Google can trigger Local Pack /
  // Knowledge Graph map features (geo + opening hours live on that node).
  const graph = shellGraph({
    url: `${SITE_BASE}/contact`,
    type: "ContactPage",
    name: "Contact OARC Digital — Birkirkara, Malta",
    description: `Reach the OARC Digital studio in ${NAP.addressLocality}, Malta — phone, WhatsApp, email and the project enquiry form.`,
    breadcrumb: [
      { name: "Home", url: `${SITE_BASE}/` },
      { name: "Contact", url: `${SITE_BASE}/contact` },
    ],
    extra: {
      mainEntity: {
        "@type": "LocalBusiness",
        "@id": `${SITE_BASE}/#localbusiness`,
      },
    },
  });
  graph["@graph"].push(buildLocalBusiness());
  return graph;
}
