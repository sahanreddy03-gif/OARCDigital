import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { featuredCaseStudies } from "@/data/caseStudies";

export default function BrandShowcaseSection() {
  const heroStudy = featuredCaseStudies[0]; // AI Data Engine NLP - Hero
  const mediumStudies = featuredCaseStudies.slice(1, 3); // FitnessPro, Digital Finance
  const smallStudies = featuredCaseStudies.slice(3, 6); // HealthPath, GamingTech, Luxe Essence
  
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#f0fff4' }} data-testid="section-brand-showcase">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-6 md:mb-10">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-2" data-testid="text-showcase-eyebrow">
            Our Impact
          </p>
          <h2 className="font-bold text-zinc-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: '1.15' }}>
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-sm md:text-base text-zinc-600 max-w-xl">
            From global giants to innovative startups, we deliver measurable results
          </p>
        </div>

        {/* Asymmetric Mosaic Grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-6 md:mb-8">
          
          {/* HERO - Large Left Card (spans 7 cols, 2 rows) */}
          <div className="col-span-12 md:col-span-7 md:row-span-2">
            <Link href={`/case-studies/${heroStudy.slug}`} asChild>
              <div
                className="group relative overflow-hidden rounded-xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer h-[280px] md:h-full"
                data-testid="card-case-study-hero"
              >
                <div className="absolute inset-0">
                  <img
                    src={heroStudy.thumbnailImage}
                    alt={heroStudy.brand}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>
                <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/10">
                      {heroStudy.category}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2" style={{ letterSpacing: '-0.02em' }}>
                      {heroStudy.brand}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-medium leading-snug max-w-md">
                      {heroStudy.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* MEDIUM Cards - Right Column (stacked) */}
          {mediumStudies.map((study, index) => (
            <div key={index} className="col-span-6 md:col-span-5">
              <Link href={`/case-studies/${study.slug}`} asChild>
                <div
                  className="group relative overflow-hidden rounded-xl bg-zinc-900 hover-elevate hover:-translate-y-0.5 transition-all duration-400 cursor-pointer h-[180px] md:h-[160px]"
                  data-testid={`card-case-study-medium-${index}`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={study.thumbnailImage}
                      alt={study.brand}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                  </div>
                  <div className="relative h-full p-3 md:p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="px-2 py-0.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-[10px] font-semibold border border-white/10">
                        {study.category}
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.01em' }}>
                        {study.brand}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* SMALL Cards - Bottom Row (3 compact cards) */}
          {smallStudies.map((study, index) => (
            <div key={index} className="col-span-4">
              <Link href={`/case-studies/${study.slug}`} asChild>
                <div
                  className="group relative overflow-hidden rounded-lg bg-zinc-900 hover-elevate hover:-translate-y-0.5 transition-all duration-400 cursor-pointer h-[140px] md:h-[130px]"
                  data-testid={`card-case-study-small-${index}`}
                >
                  <div className="absolute inset-0">
                    <img
                      src={study.thumbnailImage}
                      alt={study.brand}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-full p-2.5 md:p-3 flex flex-col justify-end">
                    <h3 className="text-xs md:text-sm font-bold text-white leading-tight" style={{ letterSpacing: '-0.01em' }}>
                      {study.brand}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/our-work">
            <button
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full font-bold text-sm hover-elevate active-elevate-2 transition-all duration-300"
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
