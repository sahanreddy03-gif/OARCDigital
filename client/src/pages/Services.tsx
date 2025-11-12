import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { getAllCategories } from '@/config/servicesConfig';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const categories = getAllCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Clean Minimal Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200">
              <Sparkles className="w-4 h-4 text-[#4a7000]" />
              <span className="text-sm font-semibold text-zinc-700">25+ Premium Services</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            Build something
            <span className="block text-[#4a7000]">Lovable</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            From AI-powered automation to creative excellence—transform your business with cutting-edge services designed for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact">
              <button
                className="group px-8 py-3.5 bg-black text-white rounded-full font-semibold text-sm hover-elevate active-elevate-2 inline-flex items-center gap-2"
                data-testid="button-start-project"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Categories - Clean Grid Layout */}
      <section className="py-16 md:py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20 last:mb-0">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-base md:text-lg text-zinc-600">
                  {category.id === 'aiCreative' && 'Content, media, and branding that captivate.'}
                  {category.id === 'revenue' && 'Automate growth. Amplify profit. Accelerate success.'}
                  {category.id === 'aiEmployees' && 'Your 24/7 digital workforce — smarter, faster, scalable.'}
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((service, index) => {
                  const ServiceIcon = service.icon;
                  
                  return (
                    <Link key={service.slug} href={`/services/${service.route || service.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="group relative p-6 bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        data-testid={`card-service-${service.slug}`}
                      >
                        {/* Icon */}
                        {ServiceIcon && (
                          <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-[#4a7000] transition-colors duration-300">
                            <ServiceIcon className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors duration-300" />
                          </div>
                        )}

                        {/* Title & Badge */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-base font-semibold text-zinc-900 group-hover:text-[#4a7000] transition-colors">
                            {service.title}
                          </h4>
                          {service.badge && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-5 h-5 text-[#4a7000]" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 md:py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let's create something extraordinary together. Start your journey with <span className="text-white">OARC</span> <span className="text-[#c4ff4d]">Digital</span> today.
            </p>
            <Link href="/contact">
              <button
                className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover-elevate active-elevate-2 inline-flex items-center gap-2"
                data-testid="button-get-started-cta"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
