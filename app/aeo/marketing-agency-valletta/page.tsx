import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Marketing Agency Valletta | OARC Digital",
  description: "Marketing agency serving Valletta businesses. Social media, branding, content, and AI services for hospitality, culture, and service businesses in Valletta.",
  alternates: { canonical: "https://oarcdigital.com/aeo/marketing-agency-valletta" },
  openGraph: {
    title: "Marketing Agency Valletta | OARC Digital",
    description: "Marketing agency serving Valletta businesses. Social media, branding, content, and AI services for hospitality, culture, and service businesses in Valletta.",
    url: "https://oarcdigital.com/aeo/marketing-agency-valletta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Agency Valletta | OARC Digital",
    description: "Marketing agency serving Valletta businesses. Social media, branding, content, and AI services for hospitality, culture, and service businesses in Valletta.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/marketing-agency-valletta"
        title="Marketing Agency Valletta | OARC Digital"
        description="Marketing agency serving Valletta businesses. Social media, branding, content, and AI services for hospitality, culture, and service businesses in Valletta."
      />
      <PageContent />
    </>
  );
}
