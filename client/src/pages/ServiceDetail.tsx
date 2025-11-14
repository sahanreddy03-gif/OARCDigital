import { useRoute } from "wouter";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/reusable/Hero";
import MetricCounters from "@/components/reusable/MetricCounters";
import ServiceGrid from "@/components/reusable/ServiceGrid";
import HowItWorks from "@/components/reusable/HowItWorks";
import FAQ from "@/components/reusable/FAQ";
import CaseStudyGrid from "@/components/reusable/CaseStudyGrid";
import { serviceImagesBySlug } from "@/assets/serviceImages";

interface ServiceContent {
  slug: string;
  title: string;
  category: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: {
      text: string;
      href: string;
    };
    secondaryCTA?: {
      text: string;
      href: string;
    };
  };
  benefits: Array<{ text: string }>;
  metrics: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  included: string[];
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  caseStudies: Array<{
    client: string;
    problem: string;
    solution: string;
    result: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:service");
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      if (!params?.service) return;
      
      try {
        setLoading(true);
        const response = await fetch(`/content/services/${params.service}.json`);
        
        if (!response.ok) {
          throw new Error(`Service content not found for ${params.service}`);
        }
        
        const data = await response.json();
        setContent(data);
        
        // Update meta tags
        document.title = data.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', data.meta.description);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load service content');
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [params?.service]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4ff4d] mx-auto mb-4"></div>
            <p className="text-gray-400">Loading service...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !content) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-400 mb-8">{error || 'This service page is not yet available.'}</p>
            <a
              href="/services"
              className="inline-block bg-[#c4ff4d] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-[#b3e842] transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  // Get the hero background image based on the service slug
  const heroBackgroundImage = params?.service ? serviceImagesBySlug[params.service] : undefined;

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCTA={content.hero.primaryCTA}
        secondaryCTA={content.hero.secondaryCTA}
        backgroundImage={heroBackgroundImage}
      />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-benefits-title">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-50 border border-gray-200"
                data-testid={`benefit-${index}`}
              >
                <p className="font-medium text-gray-900">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <MetricCounters metrics={content.metrics} />
      </section>

      {/* What's Included */}
      <section className="bg-white text-gray-900">
        <ServiceGrid items={content.included} title="What's Included" />
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <HowItWorks steps={content.howItWorks} />
      </section>

      {/* Case Studies */}
      <CaseStudyGrid caseStudies={content.caseStudies} />

      {/* FAQ */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <FAQ items={content.faq} />
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#c4ff4d] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 text-gray-800">
            Let's discuss how {content.title.toLowerCase()} can transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
            data-testid="button-final-cta"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
}
