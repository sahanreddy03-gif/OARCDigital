import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Customer Support Malta | 24/7 Answers | OARC",
  description: "AI support specialists that answer FAQs, log tickets, and escalate—so Malta customers get help without waiting on a slow queue.",
  alternates: getHreflangAlternates("/services/ai-support-specialist"),
  openGraph: {
    images: ogImageEntry({ title: "AI Customer Support Malta | 24/7 Answers | OARC", subtitle: "AI support specialists that answer FAQs, log tickets, and escalate—so Malta customers get help without waiting on a slow queue." }),
    title: "AI Customer Support Malta | 24/7 Answers | OARC",
    description: "AI support specialists that answer FAQs, log tickets, and escalate—so Malta customers get help without waiting on a slow queue.",
    url: "https://oarcdigital.com/services/ai-support-specialist",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Customer Support Malta | 24/7 Answers | OARC", subtitle: "AI support specialists that answer FAQs, log tickets, and escalate—so Malta customers get help without waiting on a slow queue." })],
    card: "summary_large_image",
    title: "AI Customer Support Malta | 24/7 Answers | OARC",
    description: "AI support specialists that answer FAQs, log tickets, and escalate—so Malta customers get help without waiting on a slow queue.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-support-specialist"];
    return (
      <>
        <SpeakableJsonLd path="/services/ai-support-specialist" />
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
  