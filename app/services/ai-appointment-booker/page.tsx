import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { getHreflangAlternates, SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "AI Appointment Booker Malta | Scheduling Agent | OARC",
  description: "AI scheduling assistants that book appointments on your calendar rules—less email tennis, fewer no-shows with reminders.",
  alternates: getHreflangAlternates("/services/ai-appointment-booker"),
  openGraph: {
    images: ogImageEntry({ title: "AI Appointment Booker Malta | Scheduling Agent | OARC", subtitle: "AI scheduling assistants that book appointments on your calendar rules—less email tennis, fewer no-shows with reminders." }),
    title: "AI Appointment Booker Malta | Scheduling Agent | OARC",
    description: "AI scheduling assistants that book appointments on your calendar rules—less email tennis, fewer no-shows with reminders.",
    url: "https://oarcdigital.com/services/ai-appointment-booker",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "AI Appointment Booker Malta | Scheduling Agent | OARC", subtitle: "AI scheduling assistants that book appointments on your calendar rules—less email tennis, fewer no-shows with reminders." })],
    card: "summary_large_image",
    title: "AI Appointment Booker Malta | Scheduling Agent | OARC",
    description: "AI scheduling assistants that book appointments on your calendar rules—less email tennis, fewer no-shows with reminders.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-appointment-booker"];
    return (
      <>
        <SpeakableJsonLd path="/services/ai-appointment-booker" />
        <RouteSchema
          type="service"
          path="/services/ai-appointment-booker"
          title={schema.title}
          description={schema.description}
          features={schema.features}
          offers={schema.offers}
          faqs={schema.faqs}
        />
        <ServiceClient slug="ai-appointment-booker" extraSeoContent={<DeepContent />} />
      </>
    );
  }
  