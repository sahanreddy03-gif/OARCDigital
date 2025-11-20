import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";

export default function Pricing() {
  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.pricing.title}
        description={supportingPagesSEO.pricing.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.pricing.path}`}
        ogType={supportingPagesSEO.pricing.ogType}
      />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600">Pricing plans and packages will be defined in Phase 3.</p>
        </div>
      </div>
    </Layout>
  );
}
