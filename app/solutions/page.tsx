import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";

const pillarMeta = PILLAR_SCHEMAS["/automation"];

export const metadata: Metadata = {
  title: "Business Automation & Revenue Solutions — Malta's First | OARC Digital",
  description: "Automate your Malta business with OARC Digital. Workflow automation, CRM integration, API connections, lead funnels, email sequences & custom software development. Eliminate manual processes, reduce costs by 60%, and scale operations. Malta's premier automation partner.",
  keywords: "business automation Malta, workflow automation Malta, CRM Malta, custom software Malta, digital transformation Malta, API integration Malta, lead generation Malta, email marketing Malta, marketing automation Malta, process automation Malta, Zapier Malta, HubSpot Malta, sales automation Malta",
  alternates: getHreflangAlternates("/solutions", { canonical: "https://oarcdigital.com/automation" }),
  openGraph: {
    title: "Business Automation & Revenue Solutions — Malta's First | OARC Digital",
    description: "Automate your Malta business. Workflow automation, CRM integration, lead funnels, email sequences & custom software. Reduce costs by 60%.",
    url: "https://oarcdigital.com/automation",
    type: "website",
    images: [{ url: "https://oarcdigital.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Automation Malta | OARC Digital",
    description: "Workflow automation, CRM, lead funnels & custom software for Malta businesses. Reduce costs by 60%.",
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <SpeakableJsonLd path="/solutions" />
      <RouteSchema
        type="pillar"
        path="/solutions"
        title={pillarMeta.title}
        description={pillarMeta.description}
        faqs={pillarMeta.faqs}
      />
      <PageContent />
    </>
  );
}
