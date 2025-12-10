import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import ContactForm from "@/components/contact/ContactForm";

export default function Resources() {
  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.resources.title}
        description={supportingPagesSEO.resources.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.resources.path}`}
        ogType={supportingPagesSEO.resources.ogType}
      />
      <div className="min-h-screen bg-[#050505] py-20 px-4 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-10">

          {/* Left Column: Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Scale with AI?</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              OARC Digital is currently accepting new enterprise partners for Q3 2025.
              Fill out the form to request a consultation with our AI Servicing team.
            </p>

            {/* Trust Badges Sim */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-50">
              <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
              <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
              <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </Layout>
  );
}
