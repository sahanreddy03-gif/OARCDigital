import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { getAllCategories } from '@/config/servicesConfig';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import socialMediaImg from '@assets/stock_images/social_media_creativ_8b2d8cae.jpg';
import aiEmployeesImg from '@assets/stock_images/professional_sales_r_664f92e1.jpg';
import revenueImg from '@assets/stock_images/revenue_analytics_bu_e60e556f.jpg';

const featuredImages: Record<string, string> = {
  'social-media-management': socialMediaImg,
  'hire-ai-employees': aiEmployeesImg,
  'revenue-automation': revenueImg,
};

export default function Services() {
  const categories = getAllCategories();
  const [expandedCategory, setExpandedCategory] = useState('aiCreative');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? '' : categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <header className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white py-20 px-6 mt-14 md:mt-16 lg:mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to creative excellence—discover how we transform businesses through innovation and results.
          </p>
        </div>
      </header>

      {/* Services Accordion */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {categories.map((category, index) => {
            const isExpanded = expandedCategory === category.id;
            const Icon = category.featured.icon;

            return (
              <div
                key={category.id}
                className="border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-300"
                data-testid={`category-${category.id}`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors"
                  data-testid={`button-toggle-${category.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c4ff4d]/10 flex items-center justify-center">
                      {Icon && <Icon className="w-6 h-6 text-[#ea580c]" />}
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
                        {category.title}
                      </h2>
                      <p className="text-sm md:text-base text-zinc-600 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-zinc-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Category Content */}
                {isExpanded && (
                  <div className="p-8 bg-zinc-50 border-t border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Featured Service Tile */}
                    <Link href={`/services/${category.featured.route || category.featured.slug}`} data-testid={`link-featured-${category.featured.slug}`}>
                      <div
                        className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 hover:border-[#c4ff4d] transition-all duration-300 hover:shadow-xl cursor-pointer mb-8"
                      >
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative h-64 md:h-auto overflow-hidden">
                            <img
                              src={featuredImages[category.featured.slug]}
                              alt={category.featured.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                            {category.featured.badge && (
                              <div className="absolute top-6 left-6 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-4 py-2 rounded-full">
                                {category.featured.badge}
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 group-hover:text-[#ea580c] transition-colors">
                              {category.featured.title}
                            </h3>
                            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
                              Our most popular service with proven results
                            </p>
                            <div className="flex items-center gap-2 text-[#ea580c] font-semibold text-lg">
                              View Service
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* All Services List */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4 px-2">
                        All {category.title}
                      </h4>
                      <div className="grid gap-2">
                        {category.items.map((service) => {
                          const ServiceIcon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.route || service.slug}`}
                              data-testid={`link-service-${service.slug}`}
                            >
                              <div
                                className="group flex items-center justify-between px-6 py-4 bg-white rounded-xl border border-zinc-200 hover:border-[#c4ff4d] hover:shadow-md transition-all duration-200 cursor-pointer"
                              >
                                <div className="flex items-center gap-4">
                                  {ServiceIcon && (
                                    <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-[#c4ff4d]/10 transition-colors">
                                      <ServiceIcon className="w-5 h-5 text-zinc-600 group-hover:text-[#ea580c] transition-colors" />
                                    </div>
                                  )}
                                  <div className="flex items-center gap-3">
                                    <span className="text-base md:text-lg font-semibold text-zinc-900 group-hover:text-[#ea580c] transition-colors">
                                      {service.title}
                                    </span>
                                    {service.badge && (
                                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                        service.badge === 'Popular'
                                          ? 'bg-[#c4ff4d] text-zinc-900'
                                          : 'bg-zinc-200 text-zinc-700'
                                      }`}>
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-[#ea580c] group-hover:translate-x-1 transition-all" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Let's talk about your goals and find the perfect solution.
          </p>
          <Link href="/contact">
            <button
              className="inline-block bg-[#c4ff4d] text-zinc-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#b3e842] transition-colors"
              data-testid="button-contact-cta"
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
