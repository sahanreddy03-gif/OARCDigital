import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp, ChevronDown, Bot, Code2, Palette } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { getAllCategories } from '@/config/servicesConfig';
import Layout from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import { supportingPagesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/global-influencer-marketing-agency-socially-powerful_1763048685978.jpg';
import creativeImg from '@assets/837b9d2d4233bb346c214826035215a37160c085-3840x1432_1763049729526.avif';
import growthImg from '@assets/stock_images/business_revenue_gro_c01f15ff.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_3ed7faa2.jpg';

const categoryImages: Record<string, string> = {
  'creativeDesign': creativeImg,
  'aiAgents': aiImg,
  'growthAutomation': growthImg,
  'development': creativeImg,
};

const categoryIcons: Record<string, any> = {
  'creativeDesign': Palette,
  'aiAgents': Bot,
  'growthAutomation': TrendingUp,
  'development': Code2,
};

const categoryColors: Record<string, { gradient: string; accent: string; glow: string }> = {
  'creativeDesign': {
    gradient: 'from-[#c4ff4d] via-lime-400 to-green-400',
    accent: '#c4ff4d',
    glow: 'shadow-[0_0_60px_rgba(196,255,77,0.4)]'
  },
  'aiAgents': {
    gradient: 'from-purple-400 via-violet-500 to-indigo-500',
    accent: '#8b5cf6',
    glow: 'shadow-[0_0_60px_rgba(139,92,246,0.4)]'
  },
  'growthAutomation': {
    gradient: 'from-orange-400 via-orange-500 to-amber-500',
    accent: '#f97316',
    glow: 'shadow-[0_0_60px_rgba(249,115,22,0.4)]'
  },
  'development': {
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    accent: '#06b6d4',
    glow: 'shadow-[0_0_60px_rgba(6,182,212,0.4)]'
  },
};

const categoryTaglines: Record<string, string> = {
  'creativeDesign': 'Content, media, and branding that captivate.',
  'aiAgents': 'Your 24/7 digital workforce — smarter, faster, scalable.',
  'growthAutomation': 'Automate growth. Amplify profit. Accelerate success.',
  'development': 'Build custom AI solutions and software that scales.',
};

function AnimatedCounterInline({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span>{count}{suffix}</span>;
}

export default function Services() {
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState('creativeDesign');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const activeColor = categoryColors[activeCategory] || categoryColors.creativeDesign;
  const activeCategoryData = categories.find(c => c.id === activeCategory);

  const getUniqueServices = (category: typeof categories[0]) => {
    return category.items.filter(item => item.slug !== category.featured.slug);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEOHead
        title={supportingPagesSEO.services.title}
        description={supportingPagesSEO.services.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.services.path}`}
        ogType={supportingPagesSEO.services.ogType}
      />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img 
            src={heroImg}
            alt="Digital Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-zinc-900/70 to-black/95 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-r from-[#c4ff4d]/20 to-lime-500/15 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-r from-orange-500/20 to-amber-500/15 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#c4ff4d]/15 to-green-500/10 rounded-full blur-3xl"
          ></motion.div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-8">
              <span className="px-5 py-2.5 bg-white/5 border border-white/20 rounded-full text-xs font-semibold text-white/70 backdrop-blur-sm uppercase tracking-[0.2em]">
                Full-Service Creative Agency
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display font-black mb-8 tracking-tight"
          >
            <span className="text-white">
              Where Strategy Meets
            </span>
            <br />
            <span className="text-white">
              Creative Excellence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We blend AI-powered innovation with world-class creative to deliver measurable results for ambitious brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white rounded-full font-semibold text-sm overflow-hidden text-zinc-900"
                data-testid="button-start-project"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById('services-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-sm transition-all text-white"
              data-testid="button-explore-services"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: 26, suffix: '+', label: 'Specialized Solutions' },
              { value: 500, suffix: '+', label: 'Successful Campaigns' },
              { value: 98, suffix: '%', label: 'Client Retention' }
            ].map((stat, index) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { once: true });
              
              return (
                <motion.div
                  key={stat.label}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="text-5xl md:text-6xl font-black text-white mb-3">
                    <AnimatedCounterInline value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services-section" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-6">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Services Designed for Growth
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Four core competencies that drive measurable business results
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || Sparkles;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative group px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all ${
                    isActive 
                      ? 'bg-white text-zinc-900' 
                      : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  data-testid={`tab-${category.id}`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    {category.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                <img 
                  src={categoryImages[activeCategory] || creativeImg}
                  alt={activeCategoryData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end">
                  <div className="p-8 md:p-12 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-xs text-white/60 font-semibold mb-3 uppercase tracking-[0.2em]">
                        {categoryTaglines[activeCategory] || 'Transform your business'}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
                        {activeCategoryData.featured.title}
                      </h3>
                      <Link href={`/services/${activeCategoryData.featured.route || activeCategoryData.featured.slug}`}>
                        <button
                          className="px-6 py-3 bg-white rounded-full font-semibold text-sm text-zinc-900 hover:scale-105 transition-transform inline-flex items-center gap-2"
                          data-testid={`button-featured-${activeCategoryData.featured.slug}`}
                        >
                          Discover More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getUniqueServices(activeCategoryData).map((service, index) => {
                  const ServiceIcon = service.icon;
                  const bgImage = categoryImages[activeCategory] || creativeImg;
                  
                  return (
                    <Link key={service.slug} href={`/services/${service.route || service.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative h-full p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer overflow-hidden"
                        data-testid={`card-service-${service.slug}`}
                      >
                        <div 
                          className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
                          style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-zinc-900/95" />
                        
                        <div className="relative z-10">
                          {ServiceIcon && (
                            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                              <ServiceIcon className="w-7 h-7 text-white" />
                            </div>
                          )}
                          
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                              {service.title}
                            </h4>
                            {service.badge && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10 flex-shrink-0">
                                {service.badge}
                              </span>
                            )}
                          </div>

                          {service.description && (
                            <p className="text-sm text-zinc-400 mb-5 line-clamp-2">
                              {service.description}
                            </p>
                          )}
                          
                          <div className="flex items-center gap-2 text-white/60 group-hover:text-white text-sm font-semibold transition-colors">
                            Discover More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
              Connect with our team to explore tailored strategies that drive measurable results.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white rounded-full font-semibold text-sm text-zinc-900 inline-flex items-center gap-2"
                data-testid="button-get-started-footer"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      </div>
    </Layout>
  );
}
