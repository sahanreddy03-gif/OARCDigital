import type { Metadata } from "next";
import PageContent from "./PageContent";
import RouteSchema from "@/components/RouteSchema";

export const metadata: Metadata = {
  title: "eCommerce Marketing Malta: How to Sell More Online in 2025 | OARC Digital",
  description: "The complete eCommerce marketing guide for Malta businesses — from platform selection and traffic generation to conversion optimisation and customer retention.",
  alternates: { canonical: "https://oarcdigital.com/blog/ecommerce-marketing-malta" },
  openGraph: {
    title: "eCommerce Marketing Malta: How to Sell More Online in 2025 | OARC Digital",
    description: "The complete eCommerce marketing guide for Malta businesses — from platform selection and traffic generation to conversion optimisation and customer retention.",
    url: "https://oarcdigital.com/blog/ecommerce-marketing-malta",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Marketing Malta: How to Sell More Online in 2025 | OARC Digital",
    description: "The complete eCommerce marketing guide for Malta businesses — from platform selection and traffic generation to conversion optimisation and customer retention.",
  },
};

export default function Page() {
  return (
    <>
      <RouteSchema
        type="article"
        path="/blog/ecommerce-marketing-malta"
        title="eCommerce Marketing Malta: How to Sell More Online in 2025 | OARC Digital"
        description="The complete eCommerce marketing guide for Malta businesses — from platform selection and traffic generation to conversion optimisation and customer retention."
        datePublished="2025-12-01"
      />
      <PageContent />
    </>
  );
}
