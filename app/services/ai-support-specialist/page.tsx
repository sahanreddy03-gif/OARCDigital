import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
  description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-support-specialist" },
  openGraph: {
    images: ogImageEntry({ title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital", subtitle: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed." }),
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
    url: "https://oarcdigital.com/services/ai-support-specialist",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital", subtitle: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed." })],
    card: "summary_large_image",
    title: "AI Customer Support Agent | 24/7 Automated Support | OARC Digital",
    description: "Deploy an AI support agent that handles customer inquiries 24/7. Instant responses, ticket resolution, and seamless escalation to human agents when needed.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-support-specialist"];
    return (
      <>
        <RouteSchema
          type="service"
          path="/services/ai-support-specialist"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <PageContent />
      </>
    );
  }
  