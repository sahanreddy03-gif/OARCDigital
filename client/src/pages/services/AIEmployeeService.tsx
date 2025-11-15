import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import aiSDRImage from '@assets/1_1763228440276.avif';
import aiSupportImage from '@assets/2_1763228440277.jpg';
import aiMarketingImage from '@assets/4_1763228440279.avif';
import aiWriterImage from '@assets/7_1763228440280.avif';
import aiAnalystImage from '@assets/8_1763228440280.avif';
import aiFinancialImage from '@assets/12_1763228440282.jpg';
import aiAdminImage from '@assets/3_1763228440278.jpg';

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
  }>;
  integrations: string[];
  metrics: {
    efficiency: string;
    speed: string;
    cost: string;
  };
}

const HERO_IMAGES: Record<string, string> = {
  'ai-sdr': aiSDRImage,
  'ai-support': aiSupportImage,
  'ai-marketing': aiMarketingImage,
  'ai-writer': aiWriterImage,
  'ai-analyst': aiAnalystImage,
  'ai-financial-analyst': aiFinancialImage,
  'ai-admin': aiAdminImage,
};

export default function AIEmployeeService() {
  const [location] = useLocation();
  // Handle trailing slashes - filter out empty strings
  const slug = location.split('/').filter(Boolean).pop() || '';
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        console.log('[AIEmployeeService] Loading content for slug:', slug);
        const response = await fetch(`/content/services/${slug}.json`);
        console.log('[AIEmployeeService] Fetch response:', response.status, response.ok);
        if (response.ok) {
          const data = await response.json();
          console.log('[AIEmployeeService] Content loaded successfully:', data.title);
          setContent(data);
        } else {
          console.error('[AIEmployeeService] Failed to load content:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('[AIEmployeeService] Error loading service content:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadContent();
    } else {
      console.error('[AIEmployeeService] No slug extracted from location:', location);
      setLoading(false);
    }
  }, [slug, location]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-purple-500/30 border-t-purple-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-zinc-400 text-sm font-medium">Loading your AI employee...</div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
          <Link href="/services">
            <button className="px-6 py-3 bg-gradient-to-r from-[#00FF9C] to-green-500 rounded-full font-bold text-black hover:scale-105 transition-transform" data-testid="button-view-all-services-notfound">
              View All Services
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImage = HERO_IMAGES[slug];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Floating Gradient Orbs - make.com style with performance optimization */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden motion-reduce:hidden">
        <motion.div
          className="absolute top-20 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-transparent blur-3xl [will-change:transform,opacity]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-transparent blur-3xl [will-change:transform,opacity]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-fuchsia-500/15 via-pink-500/15 to-transparent blur-3xl [will-change:transform,opacity]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black/50 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <ScrollReveal className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/50 rounded-full text-xs font-bold text-fuchsia-300 backdrop-blur-md uppercase tracking-wider shadow-lg shadow-purple-500/20">
                  <Zap className="inline-block w-3.5 h-3.5 mr-2" />
                  AI Employee
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed"
              >
                {content.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-zinc-400 leading-relaxed max-w-xl"
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <Link href="/contact">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#00FF9C] to-green-500 rounded-full font-bold text-base text-black inline-flex items-center gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300" data-testid="button-get-started-hero">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 bg-white/5 border border-purple-400/30 rounded-full font-bold text-base text-white hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300" data-testid="button-view-all-services-hero">
                    View All Services
                  </button>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Right: Hero Image */}
            {heroImage && (
              <ScrollReveal delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl transform scale-105"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-purple-400/30 shadow-2xl shadow-purple-500/20 aspect-[4/3]">
                    <img
                      src={heroImage}
                      alt={content.title}
                      className="w-full h-full object-cover object-center"
                      data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-950/50 to-black relative">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Efficiency Gain', value: content.metrics.efficiency, gradient: 'from-purple-400 to-fuchsia-400' },
                { label: 'Speed Improvement', value: content.metrics.speed, gradient: 'from-fuchsia-400 to-pink-400' },
                { label: 'Cost Savings', value: content.metrics.cost, gradient: 'from-violet-400 to-purple-400' },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative text-center p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-purple-400/20 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                  data-testid={`metric-${index}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`relative text-4xl md:text-5xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-4`}>
                    {metric.value}
                  </div>
                  <div className="relative text-sm text-zinc-300 font-semibold uppercase tracking-wide">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                  Key Benefits
                </span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Transform your workflow with AI-powered automation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
                  data-testid={`benefit-${index}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                  Core Features
                </span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Everything you need to automate and scale
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Sparkles;
              
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                    data-testid={`feature-${index}`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                  Real-World Applications
                </span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                See how leading companies use AI employees
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
                  data-testid={`usecase-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-5 text-white font-black text-xl group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{useCase.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 bg-black">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
              Works perfectly with the tools you already use
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {content.integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-zinc-300 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-default"
                  data-testid={`integration-${index}`}
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-b from-zinc-950/50 via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent">
                Ready to Transform Your Workflow?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Deploy your AI employee in minutes and start automating today. Join thousands of teams already scaling with AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full font-bold text-lg text-white inline-flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300" data-testid="button-get-started-footer">
                  Get Started Today
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link href="/our-work">
                <button className="px-10 py-5 bg-white/5 border border-purple-400/30 rounded-full font-bold text-lg text-white hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300" data-testid="button-view-case-studies-cta">
                  View Case Studies
                </button>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
