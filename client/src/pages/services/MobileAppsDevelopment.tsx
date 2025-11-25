import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Smartphone, Code, Zap, Users } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEOHead from "@/components/SEOHead";
import { revenueServicesSEO } from "@/data/seoMetadata";
import { createServiceSchema } from "@/utils/structuredData";
import heroImg from '@assets/stock_images/mobile_app_design_us_2b0d5cbd.jpg';
import appImg1 from '@assets/stock_images/mobile_app_design_us_5eb8ced7.jpg';
import appImg2 from '@assets/stock_images/mobile_app_design_us_1ba5497a.jpg';

export default function MobileAppsDevelopment() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Native App Development',
      description: 'Platform-specific excellence',
      items: [
        'iOS Development (Swift/SwiftUI)',
        'Android Development (Kotlin)',
        'Optimized Performance',
        'Native UI/UX',
        'Platform Integration'
      ]
    },
    {
      icon: Code,
      title: 'Cross-Platform Apps',
      description: 'Build once, deploy everywhere',
      items: [
        'React Native',
        'Flutter Development',
        'Shared Codebase',
        'Faster Time-to-Market',
        'Cost-Effective Solutions'
      ]
    },
    {
      icon: Zap,
      title: 'Full-Stack Mobile Solutions',
      description: 'Complete mobile ecosystem',
      items: [
        'Backend API Development',
        'Cloud Infrastructure',
        'Real-Time Sync',
        'Push Notifications',
        'Analytics Integration'
      ]
    },
    {
      icon: Users,
      title: 'App Modernization',
      description: 'Upgrade legacy mobile apps',
      items: [
        'Code Refactoring',
        'UI/UX Redesign',
        'Performance Optimization',
        'Latest OS Support',
        'Security Updates'
      ]
    }
  ];

  const benefits = [
    {
      title: 'User-Centric Design',
      description: 'Beautiful, intuitive interfaces that engage users and drive retention through thoughtful UX design and modern mobile patterns.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for growth from day one with cloud-native infrastructure that handles millions of users without breaking a sweat.'
    },
    {
      title: 'Rapid Development',
      description: 'Accelerated delivery using agile methodologies, modern frameworks, and proven development patterns to get your app to market faster.'
    },
    {
      title: 'App Store Success',
      description: 'From submission to approval, we handle the entire App Store and Play Store process including optimization for discoverability.'
    },
    {
      title: 'Ongoing Support',
      description: 'Post-launch maintenance, updates, feature additions, and performance monitoring to ensure your app stays competitive.'
    }
  ];

  const caseStudies = [
    {
      title: 'SportsAI Interactive: Celebrity AI Chatbot for Tens of Thousands',
      industry: 'Sports Entertainment',
      description: 'Built and scaled custom AI chatbot to tens of thousands of users within hours of launch.',
      image: appImg1,
      slug: 'sportsai-interactive'
    },
    {
      title: 'Enterprise Mobile Platform for Global Workforce',
      industry: 'Enterprise Software',
      description: 'Cross-platform mobile solution enabling field teams across 50+ countries.',
      image: appImg2,
      slug: 'enterprise-mobile'
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  return (
    <Layout>
      <SEOHead
        title={revenueServicesSEO.mobileAppsDevelopment.title}
        description={revenueServicesSEO.mobileAppsDevelopment.description}
        canonicalUrl={`https://oarcdigital.com${revenueServicesSEO.mobileAppsDevelopment.path}`}
        ogType="article"
        structuredData={createServiceSchema(
          "Mobile App Development Services",
          revenueServicesSEO.mobileAppsDevelopment.description,
          "iOS & Android Development"
        )}
        schemaId="service-mobile-apps-development"
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Mobile app development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="heading-mobile-apps">
              Mobile App Development
            </h1>

            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              Build exceptional mobile experiences for iOS and Android
            </h2>

            <p className="text-lg text-white/90 mb-8 max-w-3xl">
              From concept to App Store, we create high-performance native and cross-platform applications that delight users and drive business results. Our expert mobile development teams deliver apps that scale.
            </p>

            <Link href="/contact">
              <button
                className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
                data-testid="button-build-app"
              >
                Build Your App
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Mobile Development <span className="text-[#4a7000]">Services</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Comprehensive mobile solutions for every platform and use case
          </p>

          {/* Carousel Dots */}
          <div className="flex items-center justify-start gap-2 mb-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentService(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentService ? 'w-8 bg-[#4a7000]' : 'w-2 bg-gray-300'
                }`}
                data-testid={`dot-service-${idx}`}
              />
            ))}
          </div>

          {/* Grid of 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[0, 1, 2].map((offset) => {
              const actualIdx = (currentService + offset) % services.length;
              const service = services[actualIdx];
              const Icon = service.icon;
              
              return (
                <div key={actualIdx} className="bg-white border-2 border-gray-100 rounded-3xl p-8" data-testid={`card-service-${actualIdx}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {offset === 2 && (
                      <button
                        onClick={nextService}
                        className="text-gray-400 hover:text-black transition-colors"
                        data-testid="button-next-service"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#4a7000] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Featured <span className="text-[#4a7000]">Case Studies</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Mobile apps that drive real business results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <Link key={idx} href={`/case-study/${study.slug}`}>
                <div className="group bg-white rounded-3xl overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`case-study-${idx}`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-[#4a7000] uppercase tracking-wider mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ea580c] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#ea580c] font-semibold text-sm">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
            Why Choose <span className="text-[#4a7000]">OARC Digital</span>
          </h2>

          <p className="text-base text-gray-700 mb-8">
            Mobile expertise that delivers results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-2xl p-6" data-testid={`benefit-${idx}`}>
                <h3 className="text-lg font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Platform Stats */}
      <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Mobile-First World
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-[#c4ff4d] mb-3">5B+</div>
              <p className="text-base text-zinc-300">Global Mobile Users</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#c4ff4d] mb-3">70%</div>
              <p className="text-base text-zinc-300">Digital Time on Mobile</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#c4ff4d] mb-3">$420B</div>
              <p className="text-base text-zinc-300">App Store Revenue 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Who This Service Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-saas-startups">
              <h3 className="text-2xl font-bold mb-4">SaaS Startups</h3>
              <p className="text-lg text-muted-foreground mb-4">
                B2B and B2C SaaS companies need native mobile apps to increase engagement and enable customers to access their platform anywhere.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Native iOS and Android apps for your web platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time sync with web application data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Push notifications and offline functionality</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-ecommerce">
              <h3 className="text-2xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-lg text-muted-foreground mb-4">
                DTC brands and online retailers need mobile shopping experiences that drive repeat purchases and increase average order value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Seamless shopping with saved payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Personalized product recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Order tracking and push notification updates</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-service-businesses">
              <h3 className="text-2xl font-bold mb-4">Service Businesses</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Healthcare, fitness, beauty, and professional services need booking apps that reduce no-shows and streamline operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Appointment booking and calendar management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Automated reminders and rescheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">In-app payments and membership management</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-fintech">
              <h3 className="text-2xl font-bold mb-4">Fintech Companies</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Financial services, payment platforms, and investment apps require secure, high-performance mobile applications with banking-grade reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Bank-level security and compliance (PCI, SOC 2)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Biometric authentication and fraud detection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time transaction processing</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-food-delivery">
              <h3 className="text-2xl font-bold mb-4">Food & Beverage Delivery</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Restaurants, ghost kitchens, and delivery services need custom ordering apps that reduce commission fees from third-party platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom menu management and ordering system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time order tracking and driver dispatch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Loyalty programs and customer retention features</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-border rounded-xl hover-elevate" data-testid="use-case-social-platforms">
              <h3 className="text-2xl font-bold mb-4">Social & Community Platforms</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Build the next generation of social networks, community platforms, or creator economy tools with engaging mobile-first experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">User-generated content and social feeds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time messaging and notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#16a34a] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Content moderation and community management tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Services That Work Great Together
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/web-design">
              <div className="p-6 bg-zinc-50 border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-web-design">
                <h3 className="text-xl font-bold mb-3">Web Design & Development</h3>
                <p className="text-muted-foreground mb-4">
                  Build a responsive web platform that syncs seamlessly with your mobile apps for a unified experience.
                </p>
                <div className="flex items-center text-black font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/design-systems">
              <div className="p-6 bg-zinc-50 border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-design-systems">
                <h3 className="text-xl font-bold mb-3">Design Systems</h3>
                <p className="text-muted-foreground mb-4">
                  Create a unified design language that ensures consistency across mobile and web platforms.
                </p>
                <div className="flex items-center text-black font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/ai-creative">
              <div className="p-6 bg-zinc-50 border border-border rounded-xl hover-elevate cursor-pointer transition-all" data-testid="related-service-ai-creative">
                <h3 className="text-xl font-bold mb-3">AI Creative Services</h3>
                <p className="text-muted-foreground mb-4">
                  Power your app with AI-generated content, smart recommendations, and personalized experiences.
                </p>
                <div className="flex items-center text-black font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Transform your vision into a powerful mobile experience that users love and your business needs.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-[#c4ff4d] text-black rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-start-project"
            >
              Start Your Project
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-14 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your mobile app vision to life.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-3 bg-black text-white rounded-full pl-10 pr-4 py-4 text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-contact-us"
            >
              Contact Us
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
