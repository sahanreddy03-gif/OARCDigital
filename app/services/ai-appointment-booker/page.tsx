import type { Metadata } from "next";
import PageContent from "@/components/services/AIEmployeeServiceClient";

export const metadata: Metadata = {
  title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
  description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  alternates: { canonical: "https://oarcdigital.com/services/ai-appointment-booker" },
  openGraph: {
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
    url: "https://oarcdigital.com/services/ai-appointment-booker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Booker Agent | AI Scheduling Assistant | OARC Digital",
    description: "Reduce no-shows by 20% with intelligent scheduling. Our AI Appointment Booker handles availability, reminders, and rescheduling automatically.",
  },
};

export default function Page() {
  return <PageContent slug="ai-appointment-booker" />;
}
