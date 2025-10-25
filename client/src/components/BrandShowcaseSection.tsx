import luxuryBrand1 from '@assets/stock_images/luxury_brand_marketi_338809a4.jpg';
import luxuryBrand2 from '@assets/stock_images/luxury_brand_marketi_2a6eb5af.jpg';
import luxuryBrand3 from '@assets/stock_images/luxury_brand_marketi_999c861f.jpg';
import techStartup1 from '@assets/stock_images/tech_startup_brand_s_c16b23d6.jpg';
import techStartup2 from '@assets/stock_images/tech_startup_brand_s_500a2a04.jpg';
import techStartup3 from '@assets/stock_images/tech_startup_brand_s_ed4c6cb0.jpg';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    brand: "Premium Fashion",
    project: "Global Brand Launch",
    image: luxuryBrand1,
    category: "Branding & Creative",
    results: "+285% brand awareness"
  },
  {
    brand: "Tech Innovator",
    project: "AI-Powered Campaign",
    image: techStartup1,
    category: "Paid Media",
    results: "12x ROAS achieved"
  },
  {
    brand: "Luxury Retail",
    project: "Social-First Strategy",
    image: luxuryBrand2,
    category: "Social & Influencer",
    results: "+420% engagement"
  },
  {
    brand: "SaaS Platform",
    project: "Revenue Automation",
    image: techStartup2,
    category: "Marketing Tech",
    results: "$2.4M additional ARR"
  },
  {
    brand: "Designer Brand",
    project: "Video Production",
    image: luxuryBrand3,
    category: "Content Creation",
    results: "8M+ video views"
  },
  {
    brand: "Fintech Startup",
    project: "Growth Marketing",
    image: techStartup3,
    category: "Performance Marketing",
    results: "+650% user growth"
  },
];

export default function BrandShowcaseSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6" data-testid="text-brand-showcase-heading">
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl">
            Real results from real brands. Explore our work with ambitious companies driving exponential growth.
          </p>
        </div>

        {/* Grid of Case Studies - Superside-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-zinc-100 hover-elevate cursor-pointer transition-all duration-500"
              data-testid={`case-study-card-${index}`}
              style={{
                aspectRatio: '4/5'
              }}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0">
                <img 
                  src={study.image} 
                  alt={`${study.brand} - ${study.project}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay that lightens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20">
                    {study.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="space-y-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                    {study.brand}
                  </h3>
                  <p className="text-base md:text-lg text-white/80 font-medium">
                    {study.project}
                  </p>
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-lg md:text-xl font-bold text-[#c4ff4d]">
                      {study.results}
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff4d]/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <button 
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold rounded-full hover-elevate active-elevate-2 transition-all duration-300 group"
            data-testid="button-view-all-case-studies"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
