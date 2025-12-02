import { useEffect, useState, useMemo, useRef } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight, Bot, Palette, Grid3X3, Star, Award, TrendingUp, Sparkles } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import SEOHead from "@/components/SEOHead";
import { supportingPagesSEO } from "@/data/seoMetadata";
import { motion, useReducedMotion, useInView, useSpring, useMotionValue } from "framer-motion";

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


function AnimatedCounter({ value, suffix = "", prefix = "" }: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      motionValue.set(value);
    } else if (prefersReducedMotion || isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value, motionValue, prefersReducedMotion]);
  
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);
  
  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState('all');
  const prefersReducedMotion = useReducedMotion();
  
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
        badge: 'bg-zinc-800/80 text-zinc-300 border-zinc-700',
        metric: 'bg-zinc-100 text-zinc-900',
        cardBg: 'bg-zinc-900',
        glow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]',
        overlay: 'from-zinc-900/95 via-zinc-900/80 to-transparent',
        accentLine: 'from-zinc-400 to-zinc-600'
      };
    }
    return {
      badge: 'bg-zinc-800/80 text-zinc-300 border-zinc-700',
      metric: 'bg-zinc-100 text-zinc-900',
      cardBg: 'bg-zinc-900',
      glow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]',
      overlay: 'from-zinc-900/95 via-zinc-900/80 to-transparent',
      accentLine: 'from-zinc-400 to-zinc-600'
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
      
      {/* Hero Section - Clean Professional */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-950">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1] tracking-tight">
              <span className="text-zinc-100">Our Work</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Award-winning campaigns, AI transformations, and creative strategies that deliver measurable results for brands worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs - Clean Professional Design */}
      <section className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {filterCategories.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive 
                      ? 'bg-zinc-100 text-zinc-900' 
                      : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-700/50'
                  }`}
                  data-testid={`filter-${filter.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-700' : 'text-zinc-500'}`} />
                  {filter.label}
                  {filter.id !== 'all' && (
                    <span className={`text-xs px-2 py-0.5 rounded ${isActive ? 'bg-zinc-900/10 text-zinc-600' : 'bg-zinc-700/50 text-zinc-400'}`}>
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

      {/* Case Studies Grid - Premium Dark Aesthetic */}
      <section className="relative py-16 md:py-24 bg-zinc-950 overflow-hidden min-h-screen">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c4ff4d]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#23AACA]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="grid grid-cols-12 gap-5 md:gap-6"
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
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  <Link href={`/case-studies/${study.slug}`}>
                    <div
                      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${height} ${styles.cardBg} transition-all duration-700 ${styles.glow} border border-white/5`}
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
                        <div className={`absolute inset-0 bg-gradient-to-t ${styles.overlay} transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-950/60" />
                      </div>

                      {/* Top Accent Line on Hover */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${styles.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                        {/* Top - Category & Arrow */}
                        <div className="flex justify-between items-start">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border ${styles.badge}`}>
                            {isAI ? (
                              <Bot className="w-3.5 h-3.5" />
                            ) : (
                              <Palette className="w-3.5 h-3.5" />
                            )}
                            {study.category}
                          </div>
                          <motion.div 
                            className="w-11 h-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500"
                            whileHover={{ rotate: 45 }}
                          >
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>

                        {/* Bottom - Brand & Metric */}
                        <div className="space-y-5">
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className={`font-semibold text-zinc-100 mb-3 leading-tight ${isLarge ? 'text-2xl md:text-3xl' : isMedium ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                              {study.brand}
                            </h3>
                            <p className="text-sm text-zinc-400 font-normal line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                              {study.description}
                            </p>
                          </div>
                          
                          {/* Metric Badge */}
                          <div className="flex items-end justify-between">
                            <div className={`inline-flex flex-col px-4 py-2.5 rounded-lg ${styles.metric}`}>
                              <div className={`font-semibold leading-none ${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                                {study.metrics.value}
                              </div>
                              <div className="text-xs font-medium mt-1 text-zinc-600">
                                {study.metrics.label}
                              </div>
                            </div>
                            
                            {/* Secondary Metrics - Only on large cards */}
                            {isLarge && study.secondaryMetrics && (
                              <div className="hidden md:flex items-center gap-3">
                                {study.secondaryMetrics.slice(0, 2).map((metric, idx) => (
                                  <div key={idx} className="text-right bg-zinc-800/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-zinc-700/50">
                                    <div className="text-base font-semibold text-zinc-200">{metric.value}</div>
                                    <div className="text-xs text-zinc-500">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-zinc-600/40 transition-colors duration-500 pointer-events-none" />
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

      {/* Stats Bar - Clean Professional */}
      <section className="relative py-16 md:py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 50, suffix: 'M+', prefix: '€', label: 'Revenue Generated', icon: TrendingUp },
              { value: 200, suffix: '+', prefix: '', label: 'Brands Transformed', icon: Award },
              { value: 340, suffix: '%', prefix: '', label: 'Average ROI', icon: Star },
              { value: 6, suffix: '', prefix: '', label: 'Industries Served', icon: Award }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-zinc-800 border border-zinc-700">
                  <stat.icon className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-zinc-100">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-zinc-500 mt-2 font-normal">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean Professional */}
      <section className="relative py-20 md:py-28 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-100 mb-6 leading-tight">
              Ready to start your next project?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-normal">
              Whether you need creative campaigns or AI-powered solutions, let's discuss how we can help grow your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button 
                  className="group inline-flex items-center justify-center gap-2.5 bg-zinc-100 hover:bg-white text-zinc-900 font-medium px-8 py-4 rounded-lg transition-all duration-200"
                  data-testid="button-cta-contact"
                >
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button 
                  className="inline-flex items-center justify-center gap-2.5 border border-zinc-700 text-zinc-300 font-medium px-8 py-4 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200"
                  data-testid="button-view-services"
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
