import { useEffect, useState, useMemo } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight, Bot, Palette, Grid3X3, Sparkles } from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { motion } from "framer-motion";
import heroBgImage from "@assets/IMG_8144_1765567236984.jpeg";

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
  { id: 'creative', label: 'Creative & Marketing', icon: Palette },
  { id: 'ai', label: 'AI & Automation', icon: Bot },
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

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.ourWork.title}
        description={supportingPagesSEO.ourWork.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.ourWork.path}`}
        ogType={supportingPagesSEO.ourWork.ogType}
      />
      
      {/* Premium Hero Section with Full Background */}
      <section className="relative min-h-[60vh] pt-24 pb-16 md:min-h-[70vh] md:pt-32 md:pb-20 flex items-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBgImage} 
            alt="Creative bokeh background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Elegant Label */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-8 h-[2px] bg-[#ff914d]" />
              <span className="text-sm font-medium text-white/80 tracking-widest uppercase">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Work That</span>
              <br />
              <span className="text-white">Defines </span>
              <span className="text-[#ff914d]">Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              Award-winning campaigns, AI transformations, and creative strategies that set the standard for premium brands worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs - Clean Professional Design */}
      <section className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {filterCategories.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#ff914d] text-zinc-900' 
                      : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white/90 border border-white/5'
                  }`}
                  data-testid={`filter-${filter.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-900' : ''}`} />
                  {filter.label}
                  {filter.id !== 'all' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-zinc-900/20' : 'bg-white/10'}`}>
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

      {/* Case Studies Grid - Premium Clean Aesthetic */}
      <section className="relative py-16 md:py-24 bg-zinc-950 overflow-hidden min-h-screen">
        {/* Refined Dot Matrix Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="grid grid-cols-12 gap-5 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 }
              }
            }}
          >
            {filteredStudies.map((study, index) => {
              const isAI = isAICategory(study.category);
              const isLarge = index === 0 || (index % 7 === 0);
              const isMedium = index === 1 || index === 2 || (index % 5 === 0 && !isLarge);
              
              const colSpan = isLarge 
                ? 'col-span-12 md:col-span-8' 
                : isMedium 
                  ? 'col-span-12 md:col-span-6' 
                  : 'col-span-12 md:col-span-4';
              
              const height = isLarge ? 'h-[480px] md:h-[540px]' : isMedium ? 'h-[400px] md:h-[460px]' : 'h-[360px] md:h-[420px]';

              return (
                <motion.div
                  key={study.slug}
                  className={colSpan}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  <Link href={`/case-studies/${study.slug}`}>
                    <div
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${height} bg-zinc-900 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 border border-white/5 hover:border-white/10`}
                      data-testid={`card-case-study-${study.slug}`}
                    >
                      {/* Image */}
                      <div className="absolute inset-0">
                        <img
                          src={study.thumbnailImage}
                          alt={study.brand}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Clean Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                        {/* Top - Category Badge */}
                        <div className="flex justify-between items-start">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-md rounded-full text-xs font-medium uppercase tracking-wider ${
                            isAI ? 'bg-[#ff914d]/20 text-[#ff914d] border border-[#ff914d]/30' : 'bg-white/10 text-white/70 border border-white/10'
                          }`}>
                            {isAI ? <Bot className="w-3 h-3" /> : <Palette className="w-3 h-3" />}
                            {study.category}
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Bottom - Brand Info */}
                        <div>
                          <h3 className={`font-bold text-white mb-2 leading-tight ${isLarge ? 'text-2xl md:text-3xl' : isMedium ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                            {study.brand}
                          </h3>
                          <p className="text-sm text-white/50 line-clamp-2">
                            {study.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Accent Gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#ff914d]/5 to-transparent rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Create Something
              <br />
              <span className="text-[#ff914d]">Extraordinary?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              Whether you need breakthrough creative campaigns or AI-powered transformation—let's discuss how we can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="group inline-flex items-center justify-center gap-3 bg-[#ff914d] hover:bg-[#ffa366] text-zinc-900 font-bold px-10 py-5 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-cta-contact"
                >
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-medium px-10 py-5 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-view-services"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
