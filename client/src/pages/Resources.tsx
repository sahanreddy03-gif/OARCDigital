import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";

export default function Resources() {
  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.resources.title}
        description={supportingPagesSEO.resources.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.resources.path}`}
        ogType={supportingPagesSEO.resources.ogType}
      />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources - Guides (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600">Resource guides and content will be added in Phase 3.</p>
        </div>
      </div>
    </Layout>
  );
}
