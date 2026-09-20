import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


const TITLE = "POS Systems Malta | Square, SumUp, Lightspeed, Toast Integration | OARC Digital";
const DESCRIPTION =
  "A practical guide to POS systems and integrations for Malta restaurants, bars, retail and hospitality teams. Compare operational fit, data flows and technical discovery questions.";
const URL = "https://oarcdigital.com/aeo/pos-systems-malta";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { images: ogImageEntry({ title: TITLE, subtitle: DESCRIPTION }),
 title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  twitter: { images: [ogImageUrl({ title: TITLE, subtitle: DESCRIPTION })],
 card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const faqs = [
  { question: "What should a Malta business compare when choosing a POS?", answer: "Start with the operation, not the logo: service style, number of outlets, offline behaviour, payments, fiscal and tax requirements, menu complexity, stock, permissions and what must reach accounting or reporting. Verify Malta availability and the current API or export surface." },
  { question: "Can a POS connect to a digital menu or online ordering system?", answer: "Often, but the path varies. A connector may use an API, webhooks, scheduled exports or a supported marketplace integration. Map menu ownership, modifiers, allergens, taxes, order status, refunds and stock rules before promising a live sync." },
  { question: "Do you officially partner with named POS vendors?", answer: "No official partnership is implied by this guide. OARC Digital can help with technical discovery around named systems, subject to the vendor's current documentation, account permissions, region and commercial terms. Compatibility is confirmed per project." },
];

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/pos-systems-malta"
        title={TITLE}
        description={DESCRIPTION}
        faqs={faqs}
         serviceType="POS systems and integration discovery"
         audience={["Restaurants", "Bars", "Retail businesses", "Hotels and hospitality teams"]}
         features={[
           { name: "Operational POS selection for Malta venues" },
           { name: "Menu, ordering, reporting and workflow mapping" },
           { name: "API, webhook and export discovery" },
           { name: "POS-to-PMS and reporting flow planning" },
         ]}
      />
      <PageContent faqs={faqs} />
    </>
  );
}
