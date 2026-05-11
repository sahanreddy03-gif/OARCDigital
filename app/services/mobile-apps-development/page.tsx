import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Mobile App Development | iOS & Android | OARC Digital",
  description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
  alternates: getHreflangAlternates("/services/mobile-apps-development"),
  openGraph: {
    images: ogImageEntry({ title: "Mobile App Development | iOS & Android | OARC Digital", subtitle: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users." }),
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
    url: "https://oarcdigital.com/services/mobile-apps-development",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Mobile App Development | iOS & Android | OARC Digital", subtitle: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users." })],
    card: "summary_large_image",
    title: "Mobile App Development | iOS & Android | OARC Digital",
    description: "Build apps people love. Native iOS, Android, and cross-platform development. From MVP to millions of users.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["mobile-apps-development"];
    return (
      <>
        <SpeakableJsonLd path="/services/mobile-apps-development" />
        <RouteSchema
          type="service"
          path="/services/mobile-apps-development"
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
  