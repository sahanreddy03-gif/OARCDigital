import type { Metadata } from "next";
import ServiceClient from "@/components/services/AIEmployeeServiceClient";
import DeepContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";
import { SERVICE_SCHEMA_EXTRAS } from "@/lib/seo/serviceSchemaExtras";

export const metadata: Metadata = {
  title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
  description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-appointment-booker" },
  openGraph: {
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
    url: "https://oarcdigital.com/services/ai-appointment-booker",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  },
};

export default function Page() {
    const schema = SERVICE_SCHEMA_EXTRAS["ai-appointment-booker"];
    return (
      <>
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
  