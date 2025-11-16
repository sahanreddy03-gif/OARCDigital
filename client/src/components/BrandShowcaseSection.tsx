import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { caseStudiesArray } from "@/data/caseStudies";
import GrainOverlay from "./GrainOverlay";
import { useState } from "react";

export default function BrandShowcaseSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white to-zinc-50 diagonal-separator-both overflow-hidden">
      <GrainOverlay opacity={0.03} />
      
      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header - Enhanced */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#FF5A00]" />
            <span className="text-sm font-bold text-zinc-900 uppercase tracking-wider" data-testid="text-showcase-eyebrow">
              Our Impact
            </span>
          </div>
          
          <h2 className="font-bold text-zinc-900 mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            See how <span className="text-glow-green">Top Brands</span> use OARC Digital
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            From global giants to innovative startups, we deliver measurable results that transform businesses
          </p>
          
          {/* Glowing Divider */}
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>
        </div>

        {/* Asymmetric Grid - Enhanced with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6 md:gap-8 mb-16">
          {caseStudiesArray.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} asChild>
              <div
                className={`group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-700 cursor-pointer ${study.gridClass}`}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`card-case-study-${index}`}
              >
                {/* Image with Enhanced Parallax */}
                <div className="absolute inset-0">
                  <img
                    src={study.thumbnailImage}
                    alt={study.brand}
                    className="w-full h-full object-cover transition-transform duration-1000"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                  {/* Grain Overlay on Image */}
                  <GrainOverlay opacity={0.08} />
                  {/* Enhanced Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t transition-all duration-700"
                    style={{
                      background: hoveredIndex === index 
                        ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
                    }}
                  />
                </div>

                {/* Glow Border on Hover */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none"
                  style={{
                    boxShadow: hoveredIndex === index 
                      ? '0 0 0 2px rgba(0, 255, 156, 0.5), 0 0 40px rgba(0, 255, 156, 0.3)'
                      : 'none'
                  }}
                />

                {/* Content with Glass Effect */}
                <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                  {/* Top - Category & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className="glass px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                      {study.category}
                    </div>
                    <div 
                      className="glass-strong w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        transform: hoveredIndex === index ? 'scale(1.1) rotate(45deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom - Brand & Metric */}
                  <div>
                    <div className="mb-4">
                      <h3 
                        className="font-bold text-white mb-2"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.03em' }}
                      >
                        {study.brand}
                      </h3>
                      <p className="text-base text-white/90 font-medium leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    
                    {/* Metric Badge with Enhanced Glow */}
                    <div 
                      className="inline-block glass-strong px-5 py-3 rounded-xl transition-all duration-500"
                      style={{
                        background: hoveredIndex === index 
                          ? 'linear-gradient(135deg, #00FF9C 0%, #00D17D 100%)'
                          : 'rgba(196, 255, 77, 0.95)',
                        boxShadow: hoveredIndex === index 
                          ? '0 0 30px rgba(0, 255, 156, 0.6), 0 0 60px rgba(0, 255, 156, 0.3)'
                          : '0 0 20px rgba(196, 255, 77, 0.4)',
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold leading-none text-black" style={{ letterSpacing: '-0.03em' }}>
                        {study.metrics.value}
                      </div>
                      <div className="text-xs font-bold mt-1 text-black/80 uppercase tracking-wider">
                        {study.metrics.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Glow Orb on Hover */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced CTA with Glass Effect */}
        <div className="text-center">
          <Link href="/our-work">
            <button
              className="group glass-strong glow-green-hover rounded-2xl px-10 py-5 bg-zinc-900 text-white font-bold text-lg inline-flex items-center gap-3 transition-all duration-500 hover:scale-105"
              data-testid="button-view-all-case-studies"
            >
              <span>View All Case Studies</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
