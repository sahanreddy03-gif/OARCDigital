import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudiesArray } from "@/data/caseStudies";

export default function BrandShowcaseSection() {
  const studies = caseStudiesArray.slice(0, 6);
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-2" data-testid="text-showcase-eyebrow">
            Our Impact
          </p>
          <h2 className="font-bold text-zinc-900 mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-2xl leading-relaxed">
            From global giants to innovative startups, we deliver measurable results
          </p>
        </div>

        {/* Compact 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {studies.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} asChild>
              <div
                className="group relative overflow-hidden rounded-lg md:rounded-xl bg-zinc-900 hover-elevate hover:-translate-y-0.5 transition-all duration-400 cursor-pointer aspect-[3/4]"
                data-testid={`card-case-study-${index}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={study.thumbnailImage}
                    alt={study.brand}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-3 md:p-4 flex flex-col justify-between">
                  {/* Top - Category & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className="px-2 py-0.5 md:px-2.5 md:py-1 bg-white/15 backdrop-blur-sm rounded-full text-white text-[10px] md:text-xs font-semibold border border-white/10 truncate max-w-[70%]">
                      {study.category}
                    </div>
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Bottom - Brand & Metric */}
                  <div>
                    <div className="mb-2">
                      <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white leading-tight line-clamp-2" style={{ letterSpacing: '-0.01em' }}>
                        {study.brand}
                      </h3>
                      <p className="text-[10px] md:text-xs text-white/70 font-medium leading-snug mt-0.5 line-clamp-2 hidden md:block">
                        {study.description}
                      </p>
                    </div>
                    
                    {/* Metric Badge - Compact */}
                    <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-2 py-1 md:px-3 md:py-1.5 rounded-md group-hover:shadow-[0_0_15px_rgba(196,255,77,0.5)] transition-shadow duration-400">
                      <div className="text-sm md:text-base font-bold leading-none">{study.metrics.value}</div>
                      <div className="text-[8px] md:text-[10px] font-semibold mt-0.5 uppercase tracking-wide">{study.metrics.label}</div>
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
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-zinc-900 text-white rounded-full font-bold text-sm hover-elevate active-elevate-2 transition-all duration-300"
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
