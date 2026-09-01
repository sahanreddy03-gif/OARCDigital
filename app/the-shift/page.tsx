import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import TheShiftLanding from "@/components/TheShiftLanding";
import { getHreflangAlternates } from "@/lib/seo/discoveryTags";

const title = "The Shift — OARC Digital AI Operator | Malta";
const description = "Meet OARC Digital's AI helper: it answers customers, follows up, and helps your team get important jobs done all day.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["AI operator Malta", "AI employee Malta", "business automation Malta", "AI-native agency Malta"],
  alternates: getHreflangAlternates("/the-shift"),
  openGraph: {
    title,
    description,
    url: "https://oarcdigital.com/the-shift",
    type: "website",
    images: [{ url: "https://oarcdigital.com/media/hero/hero-customers-poster-v2.jpg", width: 1280, height: 720, alt: "OARC Digital AI operator" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://oarcdigital.com/media/hero/hero-customers-poster-v2.jpg"],
  },
};

export default function TheShiftPage() {
  return (
    <Layout navTheme="dark" showMobileNav>
      <RouteSchema
        type="service"
        path="/the-shift"
        title={title}
        description={description}
        serviceType="AI operator and business automation"
        audience={["Hospitality", "Sales", "Healthcare", "Finance", "Real estate", "Logistics", "Home services"]}
        includeLocalBusiness
      />
      <TheShiftLanding />
    </Layout>
  );
}