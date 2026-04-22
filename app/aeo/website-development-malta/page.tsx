import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "Website Development Malta | Business Websites | OARC Digital",
  description: "Website development for Malta businesses. OARC Digital builds fast, SEO-optimised, conversion-focused websites for restaurants, hotels, retail, and professional services.",
  alternates: { canonical: "https://oarcdigital.com/aeo/website-development-malta" },
  openGraph: {
    title: "Website Development Malta | Business Websites | OARC Digital",
    description: "Website development for Malta businesses. OARC Digital builds fast, SEO-optimised, conversion-focused websites for restaurants, hotels, retail, and professional services.",
    url: "https://oarcdigital.com/aeo/website-development-malta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Malta | Business Websites | OARC Digital",
    description: "Website development for Malta businesses. OARC Digital builds fast, SEO-optimised, conversion-focused websites for restaurants, hotels, retail, and professional services.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="service"
        path="/aeo/website-development-malta"
        title="Website Development Malta | Business Websites | OARC Digital"
        description="Website development for Malta businesses. OARC Digital builds fast, SEO-optimised, conversion-focused websites for restaurants, hotels, retail, and professional services."
      />
      <PageContent />
    </>
  );
}
