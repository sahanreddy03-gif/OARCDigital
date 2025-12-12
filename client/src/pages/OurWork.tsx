import { useEffect, useState, useMemo, useRef } from 'react';
import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { ArrowUpRight, Sparkles, Bot, Palette, Grid3X3, Star, Award, TrendingUp, Gem, Crown } from "lucide-react";
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
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      animate={{
        y: [-15, 15, -15],
        x: [-8, 8, -8],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.3, 1],
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
        badge: 'bg-white/10 text-white/80 border-white/20',
        cardBg: 'bg-zinc-900',
        glow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]',
        overlay: 'from-zinc-900/95 via-zinc-900/80 to-transparent',
        accentLine: 'from-white/30 to-white/10'
      };
    }
    return {
      badge: 'bg-white/10 text-white/80 border-white/20',
      cardBg: 'bg-zinc-900',
      glow: 'group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]',
      overlay: 'from-zinc-900/95 via-zinc-900/80 to-transparent',
      accentLine: 'from-white/30 to-white/10'
    };
  };

  const particles = useMemo(() => {
    if (prefersReducedMotion) return [];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
      size: 2 + Math.random() * 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: 'rgba(255, 255, 255, 0.15)'
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
      
      {/* Elite Hero Section - Premium Dark with Brand Accents */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-zinc-950">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-[120px]" />
        
        {/* Floating Brand Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(p => (
            <FloatingParticle key={p.id} {...p} />
          ))}
        </div>
        
        {/* Diagonal Accent Line */}
        <div className="absolute top-0 right-0 w-[1px] h-[300px] bg-gradient-to-b from-white/20 to-transparent transform rotate-[30deg] origin-top-right" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Elite Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-md rounded-full border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Crown className="w-4 h-4 text-white/60" />
              <span className="text-sm font-medium text-white/70 tracking-wide uppercase">Creative Portfolio</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
              <span className="text-white">Work That</span>
              <br />
              <span className="text-white/90">
                Defines Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
              Award-winning campaigns, AI transformations, and creative strategies that set the standard for premium brands worldwide.
            </p>
            
            {/* Premium Stats Row - Professional Neutral */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-14">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl px-7 py-5 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter value={allCaseStudies.length} suffix="+" />
                  </div>
                  <div className="text-sm text-white/40 font-medium mt-1">Case Studies</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl px-7 py-5 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter value={200} suffix="+" />
                  </div>
                  <div className="text-sm text-white/40 font-medium mt-1">Brands Served</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs - Elite Minimal Design */}
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
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-zinc-900' 
                      : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white/90 border border-white/5'
                  }`}
                  data-testid={`filter-${filter.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-900' : ''}`} />
                  {filter.label}
                  {filter.id !== 'all' && (
                    <span className={`text-xs px-2.5 py-1 rounded-full ${isActive ? 'bg-zinc-900/20' : 'bg-white/10'}`}>
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

                        {/* Bottom - Brand & Description */}
                        <div className="space-y-3">
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className={`font-bold text-white mb-2 leading-tight ${isLarge ? 'text-2xl md:text-3xl' : isMedium ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                              {study.brand}
                            </h3>
                            <p className="text-sm text-white/50 font-medium line-clamp-2">
                              {study.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
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

      {/* Stats Bar - Professional Minimal */}
      <section className="relative py-16 overflow-hidden bg-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 50, suffix: 'M+', prefix: '€', label: 'Revenue Generated', icon: TrendingUp },
              { value: 200, suffix: '+', prefix: '', label: 'Brands Served', icon: Gem },
              { value: 340, suffix: '%', prefix: '', label: 'Average ROI', icon: Star },
              { value: 6, suffix: '', prefix: '', label: 'Industries', icon: Award }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white/5 border border-white/5">
                  <stat.icon className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs text-white/40 mt-2 font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto">
              Whether you need breakthrough creative campaigns or AI-powered transformation—let's discuss how we can elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 font-bold px-10 py-5 rounded-xl transition-all duration-300"
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
