import Layout from "@/components/layout/Layout";
import CortexContainer from "@/components/Cortex/CortexContainer";
import SEOHead from "@/components/SEOHead";

export default function DiagnosticPage() {
  return (
    <Layout>
      <SEOHead
        title="Business Diagnostic Tool | OARC Digital"
        description="Discover hidden revenue leaks and strategic opportunities with our AI-powered business diagnostic tool."
      />
      <div className="pt-20">
        <CortexContainer />
      </div>
    </Layout>
  );
}
