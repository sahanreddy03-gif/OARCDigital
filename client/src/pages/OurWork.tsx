import { useEffect, useState, useMemo, useRef } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight, Sparkles, Bot, Palette, Zap, Grid3X3, Play, Star, Award, TrendingUp, Heart } from "lucide-react";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
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
  { id: 'all', label: 'All Work', icon: Grid3X3, gradient: 'from-purple-500 to-pink-500' },
  { id: 'creative', label: 'Creative & Marketing', icon: Palette, gradient: 'from-pink-500 to-orange-500' },
  { id: 'ai', label: 'AI & Automation', icon: Bot, gradient: 'from-cyan-500 to-emerald-500' },
  { id: 'featured', label: 'Featured', icon: Sparkles, gradient: 'from-amber-500 to-rose-500' }
];

const featuredSlugs = [
  'nexgen-retail-ai-transformation',
  'national-distributor-nlp',
  'cricketpulse-india',
  'fitnesspro-network',
  'digital-finance-solutions',
  'luxe-essence'
];

function FloatingParticle({ delay, duration, size, left, top, color }: { 
  delay: number; 
  duration: number; 
  size: number;
  left: string;
  top: string;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full motion-reduce:hidden pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [-15, 15, -15],
        x: [-8, 8, -8],
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

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
        badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        metric: 'bg-gradient-to-r from-cyan-500 to-emerald-400 text-white',
        cardBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
        glow: 'group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]',
        overlay: 'from-slate-900/95 via-slate-900/70 to-transparent'
      };
    }
    return {
      badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      metric: 'bg-gradient-to-r from-pink-500 to-orange-400 text-white',
      cardBg: 'bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-orange-900/30',
      glow: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]',
      overlay: 'from-purple-900/90 via-pink-900/60 to-transparent'
    };
  };

  const particles = useMemo(() => {
    if (prefersReducedMotion) return [];
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      size: 4 + Math.random() * 8,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: ['#ec4899', '#f97316', '#a855f7', '#06b6d4', '#22c55e'][Math.floor(Math.random() * 5)]
    }));
  }, [prefersReducedMotion]);

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.ourWork.title}
        description={supportingPagesSEO.ourWork.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.ourWork.path}`}
        ogType={supportingPagesSEO.ourWork.ogType}
      />
      
      {/* Vibrant Creative Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Vibrant Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />
        
        {/* Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(p => (
            <FloatingParticle key={p.id} {...p} />
          ))}
        </div>
        
        {/* Radial Light Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] motion-reduce:animate-none animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-[100px] motion-reduce:animate-none animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Creative Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-bold text-white tracking-wide">Creative Excellence</span>
              <Play className="w-3 h-3 text-white/80" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05]">
              <span className="text-white drop-shadow-lg">Creative Work That</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-pink-200 drop-shadow-lg">
                Inspires & Converts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium">
              Award-winning campaigns, AI transformations, and creative strategies that drive extraordinary results for brands worldwide.
            </p>
            
            {/* Stats Row with Vibrant Design */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-12">
              <motion.div 
                className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-black text-white">
                  <AnimatedCounter value={allCaseStudies.length} suffix="+" />
                </div>
                <div className="text-sm text-white/80 font-medium mt-1">Success Stories</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-black text-yellow-200">
                  <AnimatedCounter value={340} suffix="%" />
                </div>
                <div className="text-sm text-white/80 font-medium mt-1">Average ROI</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-black text-pink-200">
                  <AnimatedCounter value={200} suffix="+" />
                </div>
                <div className="text-sm text-white/80 font-medium mt-1">Brands Served</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter Tabs - Colorful Pastel Pills */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
            {filterCategories.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg shadow-pink-500/25` 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  data-testid={`filter-${filter.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                  {filter.id !== 'all' && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-200'}`}>
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

      {/* Case Studies Grid - Light & Vibrant */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden min-h-screen">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Decorative Blobs */}
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-[350px] h-[350px] bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-full blur-[80px] pointer-events-none" />
        
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
              
              const height = isLarge ? 'h-[480px] md:h-[520px]' : isMedium ? 'h-[400px] md:h-[440px]' : 'h-[360px] md:h-[400px]';

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
                      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${height} transition-all duration-500 ${styles.glow} ${
                        isAI ? 'bg-slate-900' : 'bg-white border border-gray-100 shadow-xl shadow-pink-500/5'
                      }`}
                      data-testid={`card-case-study-${study.slug}`}
                    >
                      {/* Image */}
                      <div className="absolute inset-0">
                        <img
                          src={study.thumbnailImage}
                          alt={study.brand}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Gradient Overlay - Different for AI vs Creative */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${styles.overlay} opacity-90 group-hover:opacity-95 transition-opacity duration-500`} />
                        {!isAI && (
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/30 mix-blend-overlay" />
                        )}
                      </div>

                      {/* Creative Accent Line */}
                      {!isAI && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      )}
                      
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
                            className={`w-11 h-11 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-500 ${
                              isAI 
                                ? 'bg-white/10 border-white/20 group-hover:bg-cyan-500/30' 
                                : 'bg-white/20 border-white/30 group-hover:bg-pink-500/30'
                            }`}
                            whileHover={{ rotate: 45 }}
                          >
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>

                        {/* Bottom - Brand & Metric */}
                        <div className="space-y-5">
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className={`font-black text-white mb-3 leading-tight ${isLarge ? 'text-3xl md:text-4xl' : isMedium ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                              {study.brand}
                            </h3>
                            <p className="text-base text-white/80 font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                              {study.description}
                            </p>
                          </div>
                          
                          {/* Metric Badge */}
                          <div className="flex items-end justify-between">
                            <motion.div 
                              className={`inline-flex flex-col px-5 py-3 rounded-2xl ${styles.metric} shadow-lg`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className={`font-black leading-none ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                                {study.metrics.value}
                              </div>
                              <div className="text-xs font-bold mt-1 opacity-90">
                                {study.metrics.label}
                              </div>
                            </motion.div>
                            
                            {/* Secondary Metrics - Only on large cards */}
                            {isLarge && study.secondaryMetrics && (
                              <div className="hidden md:flex items-center gap-4">
                                {study.secondaryMetrics.slice(0, 2).map((metric, idx) => (
                                  <div key={idx} className="text-right bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                                    <div className="text-lg font-bold text-white">{metric.value}</div>
                                    <div className="text-xs text-white/60">{metric.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-500 pointer-events-none ${
                        isAI ? 'group-hover:border-cyan-500/40' : 'group-hover:border-pink-500/40'
                      }`} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar - Vibrant Gradient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50, suffix: 'M+', prefix: '€', label: 'Revenue Generated', icon: TrendingUp },
              { value: 200, suffix: '+', prefix: '', label: 'Brands Transformed', icon: Heart },
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
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-white/80 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Creative & Vibrant */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/60 to-purple-200/60 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-gradient-to-br from-orange-200/60 to-yellow-200/60 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200 mb-8">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-bold text-purple-700">Ready to Create Something Amazing?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Become Our Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500"> Success Story</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you need breakthrough creative campaigns or AI-powered transformation—let's discuss how we can drive exceptional results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-cta-contact"
                >
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-bold px-8 py-4 rounded-full hover:border-purple-300 hover:text-purple-700 transition-colors"
                  whileHover={{ scale: 1.03 }}
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
