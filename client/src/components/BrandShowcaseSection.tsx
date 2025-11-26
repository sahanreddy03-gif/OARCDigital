import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { caseStudiesArray } from "@/data/caseStudies";

export default function BrandShowcaseSection() {
  const featuredStudy = caseStudiesArray[0]; // FitnessPro Network - the big one
  const smallStudies = caseStudiesArray.slice(1, 3); // Luxe Essence, NaturalCare Beauty
  const thirdRowStudy = caseStudiesArray[3]; // HomeCraft Innovations
  const wideStudy = caseStudiesArray[4]; // GamingTech Elite
  const bottomStudy = caseStudiesArray[5]; // ProGamer Network
  
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

        {/* Featured Big Card - Full Width */}
        <div className="mb-4 md:mb-5">
          <Link href={`/case-studies/${featuredStudy.slug}`} asChild>
            <div
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9]"
              data-testid="card-case-study-featured"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={featuredStudy.thumbnailImage}
                  alt={featuredStudy.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-5 md:p-8 lg:p-10 flex flex-col justify-between">
                {/* Top - Category & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold border border-white/10">
                    {featuredStudy.category}
                  </div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>

                {/* Bottom - Brand & Metric */}
                <div>
                  <div className="mb-3 md:mb-5">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {featuredStudy.brand}
                    </h3>
                    <p className="text-sm md:text-lg text-white/80 font-medium leading-snug mt-1 md:mt-2">
                      {featuredStudy.description}
                    </p>
                  </div>
                  
                  {/* Metric Badge - Larger */}
                  <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-4 py-2 md:px-6 md:py-3 rounded-xl group-hover:shadow-[0_0_30px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                    <div className="text-xl md:text-3xl font-bold leading-none">{featuredStudy.metrics.value}</div>
                    <div className="text-xs md:text-sm font-semibold mt-0.5">{featuredStudy.metrics.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Two Medium Cards Side by Side */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 mb-4 md:mb-5">
          {smallStudies.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} asChild>
              <div
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[3/4] md:aspect-[4/5]"
                data-testid={`card-case-study-${index + 1}`}
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
          ))}
        </div>

        {/* Third Row - One Medium Card + Wide Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-4 md:mb-5">
          {/* Medium Card */}
          <Link href={`/case-studies/${thirdRowStudy.slug}`} asChild>
            <div
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[4/5] md:aspect-[3/4]"
              data-testid="card-case-study-3"
            >
              <div className="absolute inset-0">
                <img
                  src={thirdRowStudy.thumbnailImage}
                  alt={thirdRowStudy.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              </div>
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-[11px] md:text-xs font-semibold border border-white/10">
                    {thirdRowStudy.category}
                  </div>
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {thirdRowStudy.brand}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 font-medium leading-snug mt-0.5 line-clamp-2">
                      {thirdRowStudy.description}
                    </p>
                  </div>
                  <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-3 py-1.5 md:px-4 md:py-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                    <div className="text-base md:text-xl font-bold leading-none">{thirdRowStudy.metrics.value}</div>
                    <div className="text-[9px] md:text-xs font-semibold mt-0.5">{thirdRowStudy.metrics.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Wide Card - Spans 2 columns */}
          <div className="md:col-span-2">
            <Link href={`/case-studies/${wideStudy.slug}`} asChild>
              <div
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[16/10] md:aspect-[16/9]"
                data-testid="card-case-study-4"
              >
              <div className="absolute inset-0">
                <img
                  src={wideStudy.thumbnailImage}
                  alt={wideStudy.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              </div>
              <div className="relative h-full p-5 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold border border-white/10">
                    {wideStudy.category}
                  </div>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {wideStudy.brand}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 font-medium leading-snug mt-1">
                      {wideStudy.description}
                    </p>
                  </div>
                  <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-4 py-2 md:px-5 md:py-2.5 rounded-xl group-hover:shadow-[0_0_25px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                    <div className="text-lg md:text-2xl font-bold leading-none">{wideStudy.metrics.value}</div>
                    <div className="text-xs md:text-sm font-semibold mt-0.5">{wideStudy.metrics.label}</div>
                  </div>
                </div>
              </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Row - Medium Card */}
        <div className="mb-8 md:mb-10">
          <Link href={`/case-studies/${bottomStudy.slug}`} asChild>
            <div
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[4/5] md:aspect-[3/4] max-w-sm mx-auto md:mx-0"
              data-testid="card-case-study-5"
            >
              <div className="absolute inset-0">
                <img
                  src={bottomStudy.thumbnailImage}
                  alt={bottomStudy.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              </div>
              <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-[11px] md:text-xs font-semibold border border-white/10">
                    {bottomStudy.category}
                  </div>
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {bottomStudy.brand}
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 font-medium leading-snug mt-0.5 line-clamp-2">
                      {bottomStudy.description}
                    </p>
                  </div>
                  <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-3 py-1.5 md:px-4 md:py-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(196,255,77,0.6)] transition-shadow duration-500">
                    <div className="text-base md:text-xl font-bold leading-none">{bottomStudy.metrics.value}</div>
                    <div className="text-[9px] md:text-xs font-semibold mt-0.5">{bottomStudy.metrics.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
