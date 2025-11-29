import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

import leadGenImage from '@assets/stock_images/lead_generation_qual_b9d50c93.jpg';
import customerAcquisitionImage from '@assets/stock_images/customer_acquisition_38bd9c1d.jpg';
import funnelOptimizationImage from '@assets/stock_images/sales_funnel_optimiz_42aebf8c.jpg';
import marketingAutomationImage from '@assets/stock_images/marketing_automation_630ae165.jpg';
import ideaValidationImage from '@assets/stock_images/startup_idea_validat_9b100223.jpg';

const services = [
  {
    title: "Lead Generation Engine",
    metric: "3x qualified leads",
    description: "AI-powered lead identification, qualification, and nurturing at scale.",
    image: leadGenImage,
    slug: "lead-generation-engine"
  },
  {
    title: "Customer Acquisition Accelerator",
    metric: "40% lower CAC",
    description: "Optimize every stage of acquisition from ad creative to conversion.",
    image: customerAcquisitionImage,
    slug: "customer-acquisition-accelerator"
  },
  {
    title: "Funnel Optimization Agent",
    metric: "2.5x conversion rate",
    description: "Continuous AI analysis and optimization of your entire funnel.",
    image: funnelOptimizationImage,
    slug: "funnel-optimization-agent"
  },
  {
    title: "Marketing Automation Suite",
    metric: "85% time saved",
    description: "Unified platform for email, social, ads, and analytics automation.",
    image: marketingAutomationImage,
    slug: "marketing-automation-suite"
  },
  {
    title: "Idea Validation Engine",
    metric: "10x faster testing",
    description: "Test market demand before building with AI-powered research.",
    image: ideaValidationImage,
    slug: "idea-validation-engine"
  },
];

export default function RevenueHub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black to-black" />
        
        <div className="relative max-w-7xl mx-auto z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">
                Revenue Engine
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Growth systems that run while you sleep
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
            >
              End-to-end automation engines that optimize pipelines, acquire customers, and validate ideas on autopilot.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    data-testid={`service-card-${service.slug}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">{service.metric}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">{service.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Results That Speak
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto">
                What our revenue automation delivers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {[
                { value: '3x', label: 'Lead Volume' },
                { value: '40%', label: 'Lower CAC' },
                { value: '2.5x', label: 'Conversion' },
                { value: '85%', label: 'Time Saved' },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-950 p-8 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-[0.2em]">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to accelerate growth?
            </h2>
            <p className="text-zinc-500 mb-10 max-w-xl mx-auto">
              Deploy your revenue engine in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group px-10 py-4 bg-white text-black font-medium inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300" data-testid="button-get-started">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300" data-testid="button-all-services">
                  All Services
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
