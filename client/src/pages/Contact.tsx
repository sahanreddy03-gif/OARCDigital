import Layout from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact & Book a Demo (Phase 1 Skeleton)</h1>
          <p className="text-xl text-gray-600 mb-8">Contact form and demo booking functionality will be implemented in Phase 2/3.</p>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">For now, reach us at:</p>
            <a href="mailto:hello@oarcdigital.com" className="text-[#ea580c] font-semibold text-xl hover:underline">
              hello@oarcdigital.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
