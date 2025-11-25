import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudiesArray } from "@/data/caseStudies";

export default function BrandShowcaseSection() {
  const featuredStudies = caseStudiesArray.slice(0, 6);
  
  // Define the exact grid layout pattern from original design
  const getGridClass = (index: number) => {
    switch(index) {
      case 0: return 'col-span-2 row-span-2'; // First card - big hero (full width, tall)
      case 1: return 'col-span-1 row-span-1'; // Second card - left side
      case 2: return 'col-span-1 row-span-1'; // Third card - right side
      case 3: return 'col-span-1 row-span-1'; // Fourth card - half width
      case 4: return 'col-span-2 row-span-1'; // Fifth card - full width
      case 5: return 'col-span-1 row-span-1'; // Sixth card - half width
      default: return 'col-span-1 row-span-1';
    }
  };
  
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 md:mb-14">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-3" data-testid="text-showcase-eyebrow">
            Our Impact
          </p>
          <h2 className="font-bold text-zinc-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-base md:text-xl text-zinc-600 max-w-3xl leading-relaxed">
            From global giants to innovative startups, we deliver measurable results
          </p>
        </div>

        {/* Grid Layout - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[280px] gap-3 md:gap-5 mb-8 md:mb-10">
          {featuredStudies.map((study, index) => {
            const gridClass = getGridClass(index);
            // Apply col-span on all screens, row-span adjusts for mobile
            const mobileAdjustedClass = gridClass
              .replace('row-span-2', 'row-span-2');
            
            return (
              <Link key={index} href={`/case-studies/${study.slug}`} asChild>
                <div
                  className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer ${mobileAdjustedClass}`}
                  data-testid={`card-case-study-${index}`}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={study.thumbnailImage}
                      alt={study.brand}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                    {/* Top - Category & Arrow */}
                    <div className="flex justify-between items-start">
                      <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-[11px] md:text-xs font-semibold border border-white/10">
                        {study.category}
                      </div>
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>

                    {/* Bottom - Brand & Metric */}
                    <div>
                      <div className="mb-2 md:mb-4">
                        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                          {study.brand}
                        </h3>
                        <p className="text-xs md:text-sm text-white/80 font-medium leading-snug mt-0.5 line-clamp-2">
                          {study.description}
                        </p>
                      </div>
                      
                      {/* Metric Badge */}
                      <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-3 py-1.5 md:px-4 md:py-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                        <div className="text-base md:text-xl font-bold leading-none">{study.metrics.value}</div>
                        <div className="text-[9px] md:text-xs font-semibold mt-0.5">{study.metrics.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/our-work">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 bg-zinc-900 text-white rounded-full font-bold text-sm md:text-base hover-elevate active-elevate-2 transition-all duration-300"
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
