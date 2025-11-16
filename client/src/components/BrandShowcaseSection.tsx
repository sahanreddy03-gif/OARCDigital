import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudiesArray } from "@/data/caseStudies";

export default function BrandShowcaseSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header - Elite Typography */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-3" data-testid="text-showcase-eyebrow">
            Our Impact
          </p>
          <h2 className="font-bold text-zinc-900 mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
            From global giants to innovative startups, we deliver measurable results
          </p>
        </div>

        {/* Asymmetric Grid - Superside Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:gap-5 mb-10">
          {caseStudiesArray.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} asChild>
              <div
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer ${study.gridClass}`}
                data-testid={`card-case-study-${index}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={study.thumbnailImage}
                    alt={study.brand}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-5 md:p-7 flex flex-col justify-between">
                  {/* Top - Category & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className="inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/10">
                      {study.category}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom - Brand & Metric */}
                  <div>
                    <div className="mb-3 md:mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ letterSpacing: '-0.02em' }}>
                        {study.brand}
                      </h3>
                      <p className="text-sm md:text-base text-white/80 font-medium">
                        {study.description}
                      </p>
                    </div>
                    
                    {/* Metric Badge with KPI Glow - Elite Typography */}
                    <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-4 py-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                      <div className="text-xl md:text-2xl font-bold leading-none" style={{ letterSpacing: '-0.02em' }}>{study.metrics.value}</div>
                      <div className="text-xs font-semibold mt-0.5">{study.metrics.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/our-work">
            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-900 text-white rounded-full font-bold text-base hover-elevate active-elevate-2 transition-all duration-300"
              data-testid="button-view-all-case-studies"
            >
              View All Case Studies
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
