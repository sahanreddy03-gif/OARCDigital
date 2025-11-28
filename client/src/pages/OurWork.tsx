import { useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";

export default function OurWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCaseStudies = Object.values(caseStudies);

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.ourWork.title}
        description={supportingPagesSEO.ourWork.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.ourWork.path}`}
        ogType={supportingPagesSEO.ourWork.ogType}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-zinc-900 to-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4ff4d]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#c4ff4d]/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wider font-bold text-[#c4ff4d] mb-4" data-testid="text-eyebrow">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Real brands. Real results. Explore our portfolio of successful campaigns across industries—from luxury fragrances to fitness giants.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#c4ff4d]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#c4ff4d]/6 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allCaseStudies.map((study, index) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                <div
                  className="group relative overflow-hidden rounded-xl bg-zinc-900 hover-lift hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px]"
                  data-testid={`card-case-study-${index}`}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={study.thumbnailImage}
                      alt={study.brand}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                    {/* Top - Category & Arrow */}
                    <div className="flex justify-between items-start">
                      <div className="inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/10">
                        {study.category}
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center transform rotate-0 group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Bottom - Brand & Metric */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                          {study.brand}
                        </h3>
                        <p className="text-sm md:text-base text-white/80 font-medium">
                          {study.description}
                        </p>
                      </div>
                      
                      {/* Metric Badge with KPI Glow */}
                      <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-4 py-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                        <div className="text-xl md:text-2xl font-black leading-none">{study.metrics.value}</div>
                        <div className="text-xs font-semibold mt-0.5">{study.metrics.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
