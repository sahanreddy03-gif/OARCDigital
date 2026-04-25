import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";

const pillarMeta = PILLAR_SCHEMAS["/automation"];

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  keywords: "business automation Malta, workflow automation Malta, CRM Malta, custom software Malta, digital transformation Malta, API integration Malta, lead generation Malta, email marketing Malta, marketing automation Malta, process automation Malta, Zapier Malta, HubSpot Malta, sales automation Malta",
  alternates: { canonical: "https://oarcdigital.com/automation" },
  openGraph: {
    title: pillarMeta.title,
    description: pillarMeta.description,
    url: "https://oarcdigital.com/automation",
    type: "website",
    images: [{ url: "https://oarcdigital.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pillarMeta.title,
    description: pillarMeta.description,
    images: ["https://oarcdigital.com/og-image.png"],
  },
};

export default function Page() {
  const pillar = PILLAR_SCHEMAS["/automation"];
  return (
    <>
      <RouteSchema
        type="pillar"
        path="/automation"
        title={pillar.title}
        description={pillar.description}
        faqs={pillar.faqs}
      />
      <PageContent />
    </>
  );
}
