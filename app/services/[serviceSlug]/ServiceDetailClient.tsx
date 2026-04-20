"use client";

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
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
  };
  benefits: Array<{ text: string }>;
  metrics: Array<{ value: string; label: string; description?: string }>;
  included: string[];
  howItWorks: Array<{ step: number; title: string; description: string }>;
  caseStudies: Array<{ client: string; problem: string; solution: string; result: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export default function ServiceDetailClient({ service, content }: { service: string; content: ServiceContent }) {
  const heroBackgroundImage = serviceImagesBySlug[service];

  return (
    <Layout>
      <Hero
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCTA={content.hero.primaryCTA}
        secondaryCTA={content.hero.secondaryCTA}
        backgroundImage={heroBackgroundImage}
      />

      <section className="py-16 px-4 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-benefits-title">
            Core Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover-lift glass-lime"
                data-testid={`benefit-${index}`}
              >
                <p className="font-medium text-gray-900">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="relative z-10">
          <MetricCounters metrics={content.metrics} />
        </div>
      </section>

      <section className="bg-surface-lime text-gray-900 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#c4ff4d]/15 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="relative z-10">
          <ServiceGrid items={content.included} title="Comprehensive Deliverables" />
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <HowItWorks steps={content.howItWorks} />
      </section>

      <CaseStudyGrid caseStudies={content.caseStudies} />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <FAQ items={content.faq} />
      </section>

      <section className="py-20 px-4 bg-[#c4ff4d] text-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400/30 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to elevate your results?</h2>
          <p className="text-xl mb-8 text-gray-800">
            Connect with our specialists to explore how {content.title.toLowerCase()} drives measurable growth.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors btn-shimmer"
            data-testid="button-final-cta"
          >
            Schedule Your Strategy Session
          </a>
        </div>
      </section>
    </Layout>
  );
}
