import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import RouteSchema from "@/components/RouteSchema";
import DepartmentPage from "@/components/department/DepartmentPage";
import { growth } from "@/lib/departments/growth";
import { ogImageEntry } from "@/lib/seo/ogImageUrl";

const CANONICAL = `https://oarcdigital.com${growth.path}`;

export const metadata: Metadata = {
  title: growth.title,
  description: growth.description,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: growth.title,
    description: growth.description,
    url: CANONICAL,
    type: "website",
    siteName: "OARC Digital",
    images: ogImageEntry({ title: growth.title, subtitle: growth.description }),
  },
  twitter: { card: "summary_large_image", title: growth.title, description: growth.description },
  other: { "geo.region": "MT", "geo.placename": "Malta" },
};

export default function Page() {
  return (
    <Layout>
      <RouteSchema
        type="service"
        path={growth.path}
        title={growth.title}
        description={growth.description}
        faqs={growth.faqs}
      />
      <DepartmentPage data={growth} />
    </Layout>
  );
}
