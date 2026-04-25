import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";

const pillarMeta = PILLAR_SCHEMAS["/creative"];

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  keywords: "creative agency Malta, social media agency Malta, branding agency Malta, web design Malta, video production Malta, marketing agency Malta, brand strategy Malta, social media management Malta, content creation Malta, graphic design Malta, paid advertising Malta, Google Ads Malta, Meta Ads Malta, Instagram marketing Malta, digital marketing Malta, social media Malta",
  alternates: { canonical: "https://oarcdigital.com/creative" },
  openGraph: {
    title: pillarMeta.title,
    description: pillarMeta.description,
    url: "https://oarcdigital.com/creative",
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
  const pillar = PILLAR_SCHEMAS["/creative"];
  return (
    <>
      <RouteSchema
        type="pillar"
        path="/creative"
        title={pillar.title}
        description={pillar.description}
        faqs={pillar.faqs}
      />
      <PageContent />
    </>
  );
}
