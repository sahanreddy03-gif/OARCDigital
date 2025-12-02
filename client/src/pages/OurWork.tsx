import { useEffect, useState, useMemo } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight, Sparkles, Bot, Palette, Zap, Filter, Grid3X3, LayoutGrid } from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { motion } from "framer-motion";

const AI_CATEGORIES = [
  'AI Solutions',
  'AI Employees', 
  'AI Revenue Automation',
  'Healthcare Technology',
  'Banking & FinTech',
  'Lead Generation',
  'Sports Entertainment',
  'Food & Agriculture',
  'Staffing & Recruitment',
  'Software & Tech',
  'Luxury Retail',
  'AI Data Engineering',
  'Full AI Transformation'
];

const isAICategory = (category: string) => {
  return AI_CATEGORIES.some(aiCat => 
    category.toLowerCase().includes(aiCat.toLowerCase()) ||
    category.toLowerCase().includes('ai') ||
    category.toLowerCase().includes('automation') ||
    category.toLowerCase().includes('fintech') ||
    category.toLowerCase().includes('healthcare') ||
    category.toLowerCase().includes('transformation')
  );
};

const filterCategories = [
  { id: 'all', label: 'All Work', icon: Grid3X3 },
  { id: 'ai', label: 'AI & Automation', icon: Bot },
  { id: 'creative', label: 'Creative & Marketing', icon: Palette },
  { id: 'featured', label: 'Featured', icon: Sparkles }
];

const featuredSlugs = [
  'nexgen-retail-ai-transformation',
  'national-distributor-nlp',
  'cricketpulse-india',
  'fitnesspro-network',
  'digital-finance-solutions',
  'luxe-essence'
];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCaseStudies = useMemo(() => Object.values(caseStudies), []);

  const filteredStudies = useMemo(() => {
    switch (activeFilter) {
      case 'ai':
        return allCaseStudies.filter(study => isAICategory(study.category));
      case 'creative':
        return allCaseStudies.filter(study => !isAICategory(study.category));
      case 'featured':
        return allCaseStudies.filter(study => featuredSlugs.includes(study.slug));
      default:
        return allCaseStudies;
    }
  }, [activeFilter, allCaseStudies]);

  const getCategoryStyle = (category: string) => {
    if (isAICategory(category)) {
      return {
        badge: 'bg-[#23AACA]/20 text-[#23AACA] border-[#23AACA]/30',
        metric: 'bg-gradient-to-r from-[#23AACA] to-[#4ade80] text-black',
        glow: 'group-hover:shadow-[0_0_30px_rgba(35,170,202,0.5)]'
      };
    }
    return {
      badge: 'bg-[#c4ff4d]/20 text-[#c4ff4d] border-[#c4ff4d]/30',
      metric: 'bg-[#c4ff4d] text-zinc-900',
      glow: 'group-hover:shadow-[0_0_30px_rgba(196,255,77,0.5)]'
    };
  };

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.ourWork.title}
        description={supportingPagesSEO.ourWork.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.ourWork.path}`}
        ogType={supportingPagesSEO.ourWork.ogType}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#23AACA]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c4ff4d]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-[#c4ff4d] to-[#23AACA]" />
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-white/60" data-testid="text-eyebrow">
                Our Work
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]">
              <span className="text-white">Case Studies That</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4ff4d] via-[#23AACA] to-[#c4ff4d]">
                Drive Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
              From AI transformations to viral creative campaigns—explore how we've helped brands achieve extraordinary outcomes.
            </p>
            
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-black text-white">{allCaseStudies.length}+</div>
                <div className="text-sm text-white/50 mt-1">Case Studies</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#c4ff4d]">340%</div>
                <div className="text-sm text-white/50 mt-1">Avg. ROI</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#23AACA]">6</div>
                <div className="text-sm text-white/50 mt-1">Industries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {filterCategories.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                  data-testid={`filter-${filter.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                  {filter.id !== 'all' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-black/10' : 'bg-white/10'}`}>
                      {filter.id === 'ai' && allCaseStudies.filter(s => isAICategory(s.category)).length}
                      {filter.id === 'creative' && allCaseStudies.filter(s => !isAICategory(s.category)).length}
                      {filter.id === 'featured' && featuredSlugs.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento Grid Case Studies */}
      <section className="relative py-16 md:py-24 bg-zinc-950 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="grid grid-cols-12 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
          >
            {filteredStudies.map((study, index) => {
              const styles = getCategoryStyle(study.category);
              const isLarge = index === 0 || (index % 7 === 0);
              const isMedium = index === 1 || index === 2 || (index % 5 === 0 && !isLarge);
              
              const colSpan = isLarge 
                ? 'col-span-12 md:col-span-8' 
                : isMedium 
                  ? 'col-span-12 md:col-span-6' 
                  : 'col-span-12 md:col-span-4';
              
              const height = isLarge ? 'h-[500px] md:h-[550px]' : isMedium ? 'h-[400px] md:h-[450px]' : 'h-[380px] md:h-[420px]';

              return (
                <motion.div
                  key={study.slug}
                  className={colSpan}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  <Link href={`/case-studies/${study.slug}`}>
                    <div
                      className={`group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer ${height} transition-all duration-700 ${styles.glow}`}
                      data-testid={`card-case-study-${study.slug}`}
                    >
                      {/* Image */}
                      <div className="absolute inset-0">
                        <img
                          src={study.thumbnailImage}
                          alt={study.brand}
                          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                        {/* Top - Category & Arrow */}
                        <div className="flex justify-between items-start">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border ${styles.badge}`}>
                            {isAICategory(study.category) ? (
                              <Bot className="w-3 h-3" />
                            ) : (
                              <Palette className="w-3 h-3" />
                            )}
                            {study.category}
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform rotate-0 group-hover:rotate-45 group-hover:bg-white/20 transition-all duration-500">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Bottom - Brand & Metric */}
                        <div className="space-y-6">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className={`font-black text-white mb-3 leading-tight ${isLarge ? 'text-3xl md:text-4xl' : isMedium ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                              {study.brand}
                            </h3>
                            <p className="text-base text-white/70 font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {study.description}
                            </p>
                          </div>
                          
                          {/* Metric Badge */}
                          <div className="flex items-end justify-between">
                            <div className={`inline-flex flex-col px-5 py-3 rounded-xl ${styles.metric} transition-all duration-500 transform group-hover:scale-105`}>
                              <div className={`font-black leading-none ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
                                {study.metrics.value}
                              </div>
                              <div className="text-xs font-bold mt-1 opacity-80">
                                {study.metrics.label}
                              </div>
                            </div>
                            
                            {/* Secondary Metrics - Only on large cards */}
                            {isLarge && study.secondaryMetrics && (
                              <div className="hidden md:flex items-center gap-4">
                                {study.secondaryMetrics.slice(0, 2).map((metric, idx) => (
                                  <div key={idx} className="text-right">
                                    <div className="text-xl font-bold text-white">{metric.value}</div>
                                    <div className="text-xs text-white/50">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '€50M+', label: 'Revenue Generated', color: 'text-[#c4ff4d]' },
              { value: '200+', label: 'Brands Transformed', color: 'text-[#23AACA]' },
              { value: '340%', label: 'Average ROI', color: 'text-white' },
              { value: '6', label: 'Industries Served', color: 'text-[#c4ff4d]' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-4xl md:text-5xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-white/50 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-zinc-900 to-black py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Whether you need AI transformation, creative campaigns, or revenue automation—let's discuss how we can drive exceptional results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 bg-[#c4ff4d] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#d4ff6d] transition-colors" data-testid="button-cta-contact">
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services">
              <button className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/5 transition-colors" data-testid="button-view-services">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
