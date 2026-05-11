import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
  description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  alternates: getHreflangAlternates("/services/immersive-3d-ar"),
  openGraph: {
    images: ogImageEntry({ title: "3D & AR Experiences | Immersive Design | OARC Digital Malta", subtitle: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways." }),
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
    url: "https://oarcdigital.com/services/immersive-3d-ar",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "3D & AR Experiences | Immersive Design | OARC Digital Malta", subtitle: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways." })],
    card: "summary_large_image",
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["immersive-3d-ar"];
    return (
      <>
        <SpeakableJsonLd path="/services/immersive-3d-ar" />
        <RouteSchema
          type="service"
          path="/services/immersive-3d-ar"
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
  