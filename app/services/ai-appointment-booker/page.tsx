import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SpeakableJsonLd } from "@/lib/seo/discoveryTags";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";
import { ogImageEntry, ogImageUrl } from "@/lib/seo/ogImageUrl";


export const metadata: Metadata = {
  title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
  description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-appointment-booker" },
  openGraph: {
    images: ogImageEntry({ title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital", subtitle: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically." }),
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
    url: "https://oarcdigital.com/services/ai-appointment-booker",
    type: "article",
  },
  twitter: {
    images: [ogImageUrl({ title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital", subtitle: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically." })],
    card: "summary_large_image",
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
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
  