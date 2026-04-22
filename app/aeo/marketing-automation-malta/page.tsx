import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Marketing Automation Malta | Email, CRM & Lead Funnels | OARC Digital",
  description: "Marketing automation for Malta businesses. OARC Digital sets up email sequences, lead funnels, CRM workflows, and automated follow-ups that generate revenue while you sleep.",
  alternates: { canonical: "https://oarcdigital.com/aeo/marketing-automation-malta" },
  openGraph: {
    title: "Marketing Automation Malta | Email, CRM & Lead Funnels | OARC Digital",
    description: "Marketing automation for Malta businesses. OARC Digital sets up email sequences, lead funnels, CRM workflows, and automated follow-ups that generate revenue while you sleep.",
    url: "https://oarcdigital.com/aeo/marketing-automation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Automation Malta | Email, CRM & Lead Funnels | OARC Digital",
    description: "Marketing automation for Malta businesses. OARC Digital sets up email sequences, lead funnels, CRM workflows, and automated follow-ups that generate revenue while you sleep.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-automation-malta"
        title="Marketing Automation Malta | Email, CRM & Lead Funnels | OARC Digital"
        description="Marketing automation for Malta businesses. OARC Digital sets up email sequences, lead funnels, CRM workflows, and automated follow-ups that generate revenue while you sleep."
      />
      <PageContent />
    </>
  );
}
