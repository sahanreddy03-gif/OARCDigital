import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";

export default function Enterprise() {
  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.enterprise.title}
        description={supportingPagesSEO.enterprise.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.enterprise.path}`}
        ogType={supportingPagesSEO.enterprise.ogType}
      />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Solutions (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600">Enterprise offerings and custom solutions coming in Phase 3.</p>
        </div>
      </div>
    </Layout>
  );
}
