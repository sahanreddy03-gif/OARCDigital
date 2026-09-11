import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Mobile App Development Malta | iOS & Android | OARC",
  description: "Mobile app development for Malta and beyond—iOS and Android products scoped to real user jobs, not feature bloat.",
  alternates: getHreflangAlternates("/services/mobile-apps-development"),
  openGraph: {
    images: ogImageEntry({ title: "Mobile App Development Malta | iOS & Android | OARC", subtitle: "Mobile app development for Malta and beyond—iOS and Android products scoped to real user jobs, not feature bloat." }),
    title: "Mobile App Development Malta | iOS & Android | OARC",
    description: "Mobile app development for Malta and beyond—iOS and Android products scoped to real user jobs, not feature bloat.",
    url: "https://oarcdigital.com/services/mobile-apps-development",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Mobile App Development Malta | iOS & Android | OARC", subtitle: "Mobile app development for Malta and beyond—iOS and Android products scoped to real user jobs, not feature bloat." })],
    card: "summary_large_image",
    title: "Mobile App Development Malta | iOS & Android | OARC",
    description: "Mobile app development for Malta and beyond—iOS and Android products scoped to real user jobs, not feature bloat.",
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
  