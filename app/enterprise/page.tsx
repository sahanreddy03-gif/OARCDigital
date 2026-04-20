import type { Metadata } from "next";
import { supportingPagesSEO } from "@/data/seoMetadata";

export const metadata: Metadata = {
  title: supportingPagesSEO.enterprise.title,
  description: supportingPagesSEO.enterprise.description,
  alternates: { canonical: `https://oarcdigital.com${supportingPagesSEO.enterprise.path}` },
  openGraph: {
    title: supportingPagesSEO.enterprise.title,
    description: supportingPagesSEO.enterprise.description,
    url: `https://oarcdigital.com${supportingPagesSEO.enterprise.path}`,
    type: supportingPagesSEO.enterprise.ogType,
  },
  twitter: {
    card: "summary_large_image",
    title: supportingPagesSEO.enterprise.title,
    description: supportingPagesSEO.enterprise.description,
  },
};

import Layout from "@/components/layout/Layout";

export default function Page() {
  return (
    <Layout>
      
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Solutions (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600">Enterprise offerings and custom solutions coming in Phase 3.</p>
        </div>
      </div>
    </Layout>
  );
}
