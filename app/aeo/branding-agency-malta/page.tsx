import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Branding Agency Malta | OARC Digital",
  description: "Brand identity, strategy, and visual systems for Malta businesses. OARC Digital builds brands that command premium pricing and long-term loyalty.",
  alternates: { canonical: "https://oarcdigital.com/aeo/branding-agency-malta" },
  openGraph: {
    title: "Branding Agency Malta | OARC Digital",
    description: "Brand identity, strategy, and visual systems for Malta businesses. OARC Digital builds brands that command premium pricing and long-term loyalty.",
    url: "https://oarcdigital.com/aeo/branding-agency-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Agency Malta | OARC Digital",
    description: "Brand identity, strategy, and visual systems for Malta businesses. OARC Digital builds brands that command premium pricing and long-term loyalty.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/branding-agency-malta"
        title="Branding Agency Malta | OARC Digital"
        description="Brand identity, strategy, and visual systems for Malta businesses. OARC Digital builds brands that command premium pricing and long-term loyalty."
      />
      <PageContent />
    </>
  );
}
