import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { getAllCategories } from '@/config/servicesConfig';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImg from '@assets/stock_images/digital_marketing_st_7e6d835f.jpg';
import creativeImg from '@assets/stock_images/creative_team_workin_34aec086.jpg';
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
    gradient: 'from-[#00FF9C] via-green-400 to-emerald-500',
    accent: '#00FF9C',
    glow: 'shadow-[0_0_60px_rgba(0,255,156,0.5)]'
  },
  'revenue': {
    gradient: 'from-[#c4ff4d] via-lime-400 to-green-400',
    accent: '#c4ff4d',
    glow: 'shadow-[0_0_60px_rgba(196,255,77,0.5)]'
  },
  'aiEmployees': {
    gradient: 'from-green-400 via-emerald-400 to-[#00FF9C]',
    accent: '#00FF9C',
    glow: 'shadow-[0_0_60px_rgba(0,255,156,0.4)]'
  },
};

const categoryTaglines: Record<string, string> = {
  'aiCreative': 'Content, media, and branding that captivate.',
  'revenue': 'Automate growth. Amplify profit. Accelerate success.',
  'aiEmployees': 'Your 24/7 digital workforce — smarter, faster, scalable.',
};

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

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

  return <span ref={ref}>{count}{suffix}</span>;
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

  // Remove duplicates by filtering out featured service from items list
  const getUniqueServices = (category: typeof categories[0]) => {
    return category.items.filter(item => item.slug !== category.featured.slug);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-green-950/30 to-black/90 z-10"></div>
          {/* Additional Depth Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          {/* Animated Green Glow Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00FF9C]/20 to-green-500/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#c4ff4d]/20 to-lime-500/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/15 to-[#00FF9C]/15 rounded-full blur-3xl"
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
              <span className="px-5 py-2.5 bg-gradient-to-r from-[#00FF9C]/10 to-green-500/10 border border-[#00FF9C]/30 rounded-full text-xs font-bold text-[#00FF9C] backdrop-blur-sm uppercase tracking-wider">
                25+ Premium Services
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00FF9C] via-[#c4ff4d] to-green-400 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed"
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
                className="group relative px-7 py-3.5 bg-gradient-to-r from-[#00FF9C] to-green-500 rounded-full font-bold text-sm overflow-hidden text-black"
                data-testid="button-start-project"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c4ff4d] to-lime-400"
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
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full font-bold text-base transition-all"
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
      <section className="py-16 px-6 bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { value: 25, suffix: '+', label: 'Premium Services', color: 'from-[#00FF9C] to-green-400' },
              { value: 500, suffix: '+', label: 'Projects Delivered', color: 'from-[#c4ff4d] to-lime-400' },
              { value: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-green-400 to-[#00FF9C]' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00FF9C]/30 transition-all"
              >
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Category Tabs */}
      <section id="services-section" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-black mb-5">
              <span className="bg-gradient-to-r from-white via-[#00FF9C] to-white bg-clip-text text-transparent">
                Choose Your Path
              </span>
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mx-auto">
              Explore our three pillars of innovation
            </p>
          </motion.div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id];
              const colors = categoryColors[category.id];
              const isActive = activeCategory === category.id;
              const tagline = categoryTaglines[category.id];

              return (
                <div key={category.id} className="flex flex-col items-center gap-3 md:gap-2.5">
                  <motion.button
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-6 py-3 rounded-full font-bold text-base transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-r ${colors.gradient} ${colors.glow}` 
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                    data-testid={`tab-${category.id}`}
                    aria-describedby={`tagline-${category.id}`}
                  >
                    <span className="flex items-center gap-3">
                      {Icon && <Icon className="w-5 h-5" />}
                      {category.title}
                    </span>
                  </motion.button>
                  
                  {/* Micro-tagline */}
                  <motion.p
                    id={`tagline-${category.id}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-white/85 font-medium text-xs md:text-sm leading-[1.3] max-w-[220px] px-2 line-clamp-2 overflow-hidden"
                    data-testid={`tagline-${category.id}`}
                  >
                    {tagline}
                  </motion.p>
                </div>
              );
            })}
          </div>

          {/* Category Content */}
          {activeCategoryData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Service */}
              <Link href={`/services/${activeCategoryData.featured.route || activeCategoryData.featured.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl mb-12 cursor-pointer"
                  data-testid="card-featured-service"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${activeColor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                  ></motion.div>
                  <img
                    src={categoryImages[activeCategory]}
                    alt={activeCategoryData.featured.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 p-12 flex flex-col justify-center">
                    {activeCategoryData.featured.badge && (
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block w-fit px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold mb-6"
                      >
                        {activeCategoryData.featured.badge}
                      </motion.span>
                    )}
                    <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">
                      {activeCategoryData.featured.title}
                    </h3>
                    <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                      Our flagship service delivering exceptional results for businesses worldwide
                    </p>
                    <div className="flex items-center gap-3 text-white font-bold text-base group-hover:gap-5 transition-all">
                      Explore Service
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeColor.gradient} flex items-center justify-center`}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Service Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getUniqueServices(activeCategoryData).map((service, index) => {
                  const ServiceIcon = service.icon;

                  return (
                    <Link key={service.slug} href={`/services/${service.route || service.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
                        data-testid={`card-service-${service.slug}`}
                      >
                        {/* Hover Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${activeColor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></motion.div>

                        <div className="relative z-10">
                          {/* Icon */}
                          {ServiceIcon && (
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeColor.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <ServiceIcon className="w-7 h-7 text-white" />
                            </div>
                          )}

                          {/* Title & Badge */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 group-hover:bg-clip-text transition-all">
                              {service.title}
                            </h4>
                            {service.badge && (
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                service.badge === 'Popular' 
                                  ? 'bg-orange-500/20 text-orange-300' 
                                  : 'bg-blue-500/20 text-blue-300'
                              }`}>
                                {service.badge}
                              </span>
                            )}
                          </div>

                          {/* Arrow */}
                          <div className="flex items-center justify-end">
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center"
                            >
                              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                            </motion.div>
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

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Ready to Transform <br />Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's create something extraordinary together. Start your journey with OARC Digital today.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black rounded-full font-black text-base hover:bg-zinc-100 transition-colors"
                data-testid="button-get-started-cta"
              >
                Get Started Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
