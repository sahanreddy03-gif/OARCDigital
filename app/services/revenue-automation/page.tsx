import type { Metadata } from "next";
import { NAP } from "@/lib/seo/nap";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Revenue Automation Malta | AI Revenue Engine | OARC",
  description: "Revenue automation for Malta businesses—connect acquisition, qualification, and follow-up so revenue motions run with less heroics.",
  alternates: getHreflangAlternates("/services/revenue-automation"),
  openGraph: {
    images: ogImageEntry({ title: "Revenue Automation Malta | AI Revenue Engine | OARC", subtitle: "Revenue automation for Malta businesses—connect acquisition, qualification, and follow-up so revenue motions run with less heroics." }),
    title: "Revenue Automation Malta | AI Revenue Engine | OARC",
    description: "Revenue automation for Malta businesses—connect acquisition, qualification, and follow-up so revenue motions run with less heroics.",
    url: "https://oarcdigital.com/services/revenue-automation",
    type: "website",
  },
  twitter: {
    images: [ogImageUrl({ title: "Revenue Automation Malta | AI Revenue Engine | OARC", subtitle: "Revenue automation for Malta businesses—connect acquisition, qualification, and follow-up so revenue motions run with less heroics." })],
    card: "summary_large_image",
    title: "Revenue Automation Malta | AI Revenue Engine | OARC",
    description: "Revenue automation for Malta businesses—connect acquisition, qualification, and follow-up so revenue motions run with less heroics.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["revenue-automation"];
    return (
      <>
        <SpeakableJsonLd path="/services/revenue-automation" />
        <RouteSchema
          type="service"
          path="/services/revenue-automation"
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
  