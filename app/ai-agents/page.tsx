import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { PILLAR_SCHEMAS } from "@/lib/seo/pillarSchemaConfig";

const pillarMeta = PILLAR_SCHEMAS["/ai-agents"];

export const metadata: Metadata = {
  title: pillarMeta.title,
  description: pillarMeta.description,
  keywords: "AI agents Malta, AI employees Malta, AI workforce, AI sales agent, AI customer support, AI booking agent, chatbot Malta, business automation Malta, AI virtual assistant Malta, AI receptionist Malta, AI lead generation Malta, automated customer service Malta",
  alternates: { canonical: "https://oarcdigital.com/ai-agents" },
  openGraph: {
    title: pillarMeta.title,
    description: pillarMeta.description,
    url: "https://oarcdigital.com/ai-agents",
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
  const pillar = PILLAR_SCHEMAS["/ai-agents"];
  return (
    <>
      <RouteSchema
        type="pillar"
        path="/ai-agents"
        title={pillar.title}
        description={pillar.description}
        faqs={pillar.faqs}
      />
      <PageContent />
    </>
  );
}
