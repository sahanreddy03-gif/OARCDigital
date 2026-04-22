import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Web Design Malta | OARC Digital",
  description: "Web design and development for Malta businesses. OARC Digital builds websites that convert visitors to customers, not just websites that look professional.",
  alternates: { canonical: "https://oarcdigital.com/aeo/web-design-malta" },
  openGraph: {
    title: "Web Design Malta | OARC Digital",
    description: "Web design and development for Malta businesses. OARC Digital builds websites that convert visitors to customers, not just websites that look professional.",
    url: "https://oarcdigital.com/aeo/web-design-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Malta | OARC Digital",
    description: "Web design and development for Malta businesses. OARC Digital builds websites that convert visitors to customers, not just websites that look professional.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/web-design-malta"
        title="Web Design Malta | OARC Digital"
        description="Web design and development for Malta businesses. OARC Digital builds websites that convert visitors to customers, not just websites that look professional."
      />
      <PageContent />
    </>
  );
}
