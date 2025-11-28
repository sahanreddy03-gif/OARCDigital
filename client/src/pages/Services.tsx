import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { getAllCategories } from '@/config/servicesConfig';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { supportingPagesSEO } from '@/data/seoMetadata';
import heroImg from '@assets/global-influencer-marketing-agency-socially-powerful_1763048685978.jpg';
import creativeImg from '@assets/837b9d2d4233bb346c214826035215a37160c085-3840x1432_1763049729526.avif';
import growthImg from '@assets/stock_images/business_revenue_gro_c01f15ff.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_3ed7faa2.jpg';

const categoryImages: Record<string, string> = {
  'aiCreative': creativeImg,
  'revenue': growthImg,
  'aiEmployees': aiImg,
};

const categoryIcons: Record<string, any> = {
  'aiCreative': Sparkles,
  'revenue': TrendingUp,
  'aiEmployees': Users,
};

const categoryColors: Record<string, { gradient: string; accent: string; glow: string }> = {
  'aiCreative': {
    gradient: 'from-[#c4ff4d] via-lime-400 to-green-400',
    accent: '#c4ff4d',
    glow: 'shadow-[0_0_60px_rgba(196,255,77,0.4)]'
  },
  'revenue': {
    gradient: 'from-orange-400 via-orange-500 to-amber-500',
    accent: '#f97316',
    glow: 'shadow-[0_0_60px_rgba(249,115,22,0.4)]'
  },
  'aiEmployees': {
    gradient: 'from-[#c4ff4d] via-green-400 to-emerald-400',
    accent: '#c4ff4d',
    glow: 'shadow-[0_0_60px_rgba(196,255,77,0.3)]'
  },
};

const categoryTaglines: Record<string, string> = {
  'aiCreative': 'Content, media, and branding that captivate.',
  'revenue': 'Automate growth. Amplify profit. Accelerate success.',
  'aiEmployees': 'Your 24/7 digital workforce — smarter, faster, scalable.',
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
  const [activeCategory, setActiveCategory] = useState('aiCreative');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const activeColor = categoryColors[activeCategory];
  const activeCategoryData = categories.find(c => c.id === activeCategory);

  const getUniqueServices = (category: typeof categories[0]) => {
    return category.items.filter(item => item.slug !== category.featured.slug);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <SEOHead
        title={supportingPagesSEO.services.title}
        description={supportingPagesSEO.services.description}
        canonicalUrl={`https://oarcdigital.com${supportingPagesSEO.services.path}`}
        ogType={supportingPagesSEO.services.ogType}
      />
      <Navigation />

      {/* Cinematic Hero with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden mt-14 md:mt-16 lg:mt-20">
        {/* Layered Background with Image */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          {/* Background Image Layer */}
          <img 
            src={heroImg}
            alt="Digital Technology Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Wash with Green Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-zinc-900/70 to-black/95 z-10"></div>
          {/* Additional Depth Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          {/* Animated Green Glow Orbs */}
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

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 bg-gradient-to-r from-[#c4ff4d]/10 to-lime-500/10 border border-[#c4ff4d]/40 rounded-full text-xs font-bold text-[#c4ff4d] backdrop-blur-sm uppercase tracking-wider">
                25+ Premium Services
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c4ff4d] via-lime-400 to-green-400 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body-lg text-zinc-300 max-w-2xl mx-auto mb-10"
          >
            From AI-powered automation to creative excellence—transform your business with cutting-edge services designed for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-[#c4ff4d] to-lime-400 rounded-full font-bold text-sm overflow-hidden text-black"
                data-testid="button-start-project"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('services-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#c4ff4d]/10 hover:bg-[#c4ff4d]/20 backdrop-blur-sm border border-[#c4ff4d]/30 rounded-full font-bold text-base transition-all text-[#c4ff4d]"
              data-testid="button-explore-services"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { value: 25, suffix: '+', label: 'Specialized Solutions', color: 'from-[#c4ff4d] to-lime-400' },
              { value: 500, suffix: '+', label: 'Successful Campaigns', color: 'from-orange-400 to-amber-400' },
              { value: 98, suffix: '%', label: 'Client Retention', color: 'from-[#c4ff4d] to-green-400' }
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
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#c4ff4d]/40 transition-all hover-lift stat-glow"
                  data-testid={`stat-${index}`}
                >
                  <div className={`text-heading-lg font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    <AnimatedCounterInline value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="text-caption text-zinc-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Category Tabs */}
      <section id="services-section" className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#c4ff4d]/8 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-lg font-black mb-5">
              <span className="bg-gradient-to-r from-white via-[#c4ff4d]/80 to-white bg-clip-text text-transparent">
                Select Your Strategy
              </span>
            </h2>
            <p className="text-body text-zinc-400 max-w-2xl mx-auto">
              Discover our three core competencies designed to accelerate your growth
            </p>
          </motion.div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id];
              const colors = categoryColors[category.id];
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group px-8 py-4 rounded-full font-bold text-base transition-all overflow-hidden ${
                    isActive 
                      ? `bg-gradient-to-r ${colors.gradient} text-black ${colors.glow}` 
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:border-white/30'
                  }`}
                  data-testid={`tab-${category.id}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {category.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Category Content */}
          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* Category Hero Image with Featured Service */}
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                <img 
                  src={categoryImages[activeCategory]}
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
                      <p className="text-caption text-[#c4ff4d] font-bold mb-3 uppercase tracking-wider">
                        {categoryTaglines[activeCategory]}
                      </p>
                      <h3 className="text-heading-lg font-black mb-6 text-white">
                        {activeCategoryData.featured.title}
                      </h3>
                      <Link href={`/services/${activeCategoryData.featured.route || activeCategoryData.featured.slug}`}>
                        <button
                          className={`px-6 py-3 bg-gradient-to-r ${activeColor.gradient} rounded-full font-bold text-sm text-black hover:scale-105 transition-transform inline-flex items-center gap-2 btn-shimmer`}
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

              {/* All Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getUniqueServices(activeCategoryData).map((service, index) => {
                  const ServiceIcon = service.icon;
                  
                  return (
                    <Link key={service.slug} href={`/services/${service.route || service.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative h-full p-6 rounded-2xl hover:border-[#c4ff4d]/50 transition-all cursor-pointer hover-lift glass-dark"
                        data-testid={`card-service-${service.slug}`}
                      >
                        {ServiceIcon && (
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeColor.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <ServiceIcon className="w-6 h-6 text-black" />
                          </div>
                        )}
                        
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <h4 className="text-base font-semibold text-white group-hover:text-[#c4ff4d] transition-colors">
                            {service.title}
                          </h4>
                          {service.badge && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#c4ff4d]/10 text-[#c4ff4d] border border-[#c4ff4d]/20 btn-shimmer">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-[#c4ff4d] text-xs font-semibold">
                          Discover More
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        {/* Premium Background Orbs */}
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-[#c4ff4d]/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl motion-reduce:hidden"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading-xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-[#c4ff4d]/80 to-white bg-clip-text text-transparent">
                Ready to Accelerate Your Growth?
              </span>
            </h2>
            <p className="text-body-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
              Connect with our specialists to explore tailored strategies that drive measurable results.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#c4ff4d] to-lime-400 rounded-full font-bold text-base text-black inline-flex items-center gap-2 btn-shimmer glow-lime"
                data-testid="button-get-started-footer"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
