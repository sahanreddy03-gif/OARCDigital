import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

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
  'lead-generation-engine': leadGenImage,
  'customer-acquisition-accelerator': customerAcquisitionImage,
  'funnel-optimization-agent': funnelOptimizationImage,
  'marketing-automation-suite': marketingAutomationImage,
  'idea-validation-engine': ideaValidationImage,
};

export default function RevenueService() {
  const [location] = useLocation();
  const slug = location.split('/').filter(Boolean).pop() || '';
  const [content, setContent] = useState<ServiceContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/content/services/${slug}.json`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        // Silent fail
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadContent();
    } else {
      setLoading(false);
    }
  }, [slug, location]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="text-zinc-500 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Service Not Found</h1>
          <Link href="/services">
            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-white/90 transition-colors" data-testid="button-view-all-services-notfound">
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
        
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
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
                  Revenue Engine
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                {content.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 font-light leading-relaxed"
              >
                {content.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-zinc-500 leading-relaxed max-w-xl"
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
                  <button className="group px-8 py-4 bg-white text-black font-medium inline-flex items-center gap-2 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-hero">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300" data-testid="button-view-all-services-hero">
                    All Services
                  </button>
                </Link>
              </motion.div>
            </ScrollReveal>

            {/* Right: Hero Image */}
            {heroImage && (
              <ScrollReveal delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={heroImage}
                      alt={content.title}
                      className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                      data-testid="hero-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {[
                { label: 'Efficiency', value: content.metrics.efficiency },
                { label: 'Speed', value: content.metrics.speed },
                { label: 'Cost Impact', value: content.metrics.cost },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black p-10 text-center"
                  data-testid={`metric-${index}`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-[0.2em]">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Accelerate growth with intelligent automation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  data-testid={`benefit-${index}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-zinc-500 leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Features
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Everything you need to drive growth
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => {
              const IconComponent = (Icons as any)[feature.icon] || Sparkles;
              
              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                    data-testid={`feature-${index}`}
                  >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                Proven strategies that drive results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.useCases.map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  data-testid={`usecase-${index}`}
                >
                  <div className="w-10 h-10 bg-white flex items-center justify-center mb-5 text-black font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{useCase.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-zinc-500 mb-12 max-w-xl mx-auto">
              Works with the tools you already use
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {content.integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-5 py-2.5 bg-white/[0.03] border border-white/5 text-xs font-medium text-zinc-400 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                  data-testid={`integration-${index}`}
                >
                  {integration}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Who This Service Is For */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Who This Is For</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built for growth-focused teams
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Startups",
                description: "Validate faster and acquire customers without burning through runway.",
                items: ["Fast validation", "Lean operations", "Scalable systems"]
              },
              {
                title: "Growth Teams",
                description: "Optimize every channel and funnel stage with data-driven automation.",
                items: ["Multi-channel", "A/B testing", "Attribution"]
              },
              {
                title: "Marketing Leaders",
                description: "Build predictable pipelines and prove ROI with clear metrics.",
                items: ["Pipeline visibility", "ROI tracking", "Forecasting"]
              },
              {
                title: "Sales Organizations",
                description: "Fill your pipeline with qualified leads that are ready to buy.",
                items: ["Lead scoring", "Intent data", "Automated nurturing"]
              },
              {
                title: "E-Commerce",
                description: "Acquire customers profitably and increase lifetime value.",
                items: ["CAC optimization", "LTV growth", "Retention"]
              },
              {
                title: "SaaS Companies",
                description: "Drive trial signups and convert free users to paid.",
                items: ["Product-led growth", "Activation", "Expansion revenue"]
              }
            ].map((useCase, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  data-testid={`who-for-${index}`}
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-zinc-500 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                        <div className="w-1 h-1 bg-white/40 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to accelerate growth?
            </h2>
            <p className="text-zinc-500 mb-10 max-w-xl mx-auto">
              Deploy your revenue engine in days, not months. Start growing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group px-10 py-4 bg-white text-black font-medium inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started-footer">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300" data-testid="button-view-services-footer">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
