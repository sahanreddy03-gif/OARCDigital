import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
  description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  alternates: { canonical: "https://oarcdigital.com/services/immersive-3d-ar" },
  openGraph: {
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
    url: "https://oarcdigital.com/services/immersive-3d-ar",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D & AR Experiences | Immersive Design | OARC Digital Malta",
    description: "Cutting-edge 3D and augmented reality experiences from OARC Digital. Create immersive brand experiences that engage audiences in innovative ways.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["immersive-3d-ar"];
    return (
      <>
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
  