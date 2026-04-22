import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "CRM & Automation Malta | Business Systems Integration | OARC Digital",
  description: "CRM integration and business automation for Malta businesses. OARC Digital connects your tools, automates your workflows, and eliminates manual data entry.",
  alternates: { canonical: "https://oarcdigital.com/aeo/crm-automation-malta" },
  openGraph: {
    title: "CRM & Automation Malta | Business Systems Integration | OARC Digital",
    description: "CRM integration and business automation for Malta businesses. OARC Digital connects your tools, automates your workflows, and eliminates manual data entry.",
    url: "https://oarcdigital.com/aeo/crm-automation-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM & Automation Malta | Business Systems Integration | OARC Digital",
    description: "CRM integration and business automation for Malta businesses. OARC Digital connects your tools, automates your workflows, and eliminates manual data entry.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/crm-automation-malta"
        title="CRM & Automation Malta | Business Systems Integration | OARC Digital"
        description="CRM integration and business automation for Malta businesses. OARC Digital connects your tools, automates your workflows, and eliminates manual data entry."
      />
      <PageContent />
    </>
  );
}
