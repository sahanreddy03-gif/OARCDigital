"use client";

import { Zap, Users, TrendingUp, Target, Clock, Globe, Cpu, Palette, Database, Rocket, Sparkles } from "lucide-react";
import { companyInfo, aboutText, coreServices, whyChooseUs, processSteps, technologyStack, keyDifferentiators } from "@/data/companyProfile";
import { caseStudiesArray as websiteCases } from "@/data/caseStudies";
import { useEffect } from "react";
const logoImage = "/attached_assets/fdfdfd_1762818183304.png";
import { pdfPagesSEO } from "@/data/seoMetadata";

export default function PageContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      
      <div className="pdf-document bg-white">
        {/* PAGE 1: COVER */}
        <div className="pdf-page pdf-cover flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Dark background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Logo Symbol */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl blur-xl opacity-50"></div>
                <img 
                  src={logoImage} 
                  alt="OARC Digital" 
                  className="relative w-24 h-24 object-contain mix-blend-lighten"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(196, 255, 77, 0.3))' }}
                />
              </div>
            </div>

            {/* Brand */}
            <div className="space-y-4">
              <div className="font-black text-6xl tracking-tight" style={{ fontFamily: 'var(--font-heatrobox)' }}>
                <span className="text-white">OARC</span>
                <span className="text-[#c4ff4d]"> Digital</span>
              </div>
              <p className="text-white/60 text-sm tracking-widest uppercase">
                {companyInfo.fullName}
              </p>
            </div>

            {/* Tagline */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-4">
                Where Creativity Meets<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#00FF9C]">
                  Intelligence
                </span>
              </h1>
              <p className="text-xl text-white/70">
                AI-Powered Creative Services | Automated Revenue Systems | 24/7 AI Employees
              </p>
            </div>

            {/* Evidence-led release markers */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-lg font-black text-[#00FF9C] mb-1">Evidence-led</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Work release</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-lg font-black text-[#FF5A00] mb-1">PJAZZA</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">OARC-owned product</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c4ff4d]/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-lg font-black text-[#c4ff4d] mb-1">Public</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Verification path</div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="pt-12 text-white/40 text-sm">
              <p>Malta | {companyInfo.website} | {companyInfo.email}</p>
            </div>
          </div>
        </div>

        {/* PAGE 2: EXECUTIVE SNAPSHOT */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Executive Snapshot</h2>
            <p>Your AI-Powered Marketing Partner</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Who We Are */}
            <div className="pdf-card">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-[#FF5A00]" />
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {aboutText.main}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4" />
                <span>Based in {companyInfo.location} | Founded {companyInfo.founded}</span>
              </div>
            </div>

            {/* Publication Standard */}
            <div className="pdf-card bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
              <h3 className="text-2xl font-bold mb-6">How We Publish Work</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Public name & ownership</span>
                  <span className="text-sm font-bold text-[#00FF9C]">Required</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Approved project media</span>
                  <span className="text-sm font-bold text-[#FF5A00]">Required</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Direct verification path</span>
                  <span className="text-sm font-bold text-[#c4ff4d]">Required</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Unsupported claims</span>
                  <span className="text-sm font-bold text-white">Withheld</span>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="pdf-card">
            <h3 className="text-lg font-bold mb-4 text-[#FF5A00]">Industries We Serve</h3>
            <div className="grid grid-cols-4 gap-4">
              {['Retail & E-commerce', 'Healthcare', 'Hospitality', 'Technology', 'Gaming & Esports', 'Luxury Brands', 'Professional Services', 'Real Estate'].map((industry) => (
                <div key={industry} className="text-center py-3 px-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-sm font-semibold text-gray-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE 3: WHY OARC */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2><span style={{ fontFamily: 'var(--font-heatrobox)' }}>OARC Digital</span> — Why Us?</h2>
            <p>What Makes Us Different</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {keyDifferentiators.map((diff, index) => {
              const Icon = diff.icon === 'zap' ? Zap : 
                          diff.icon === 'target' ? Target :
                          diff.icon === 'clock' ? Clock :
                          diff.icon === 'globe' ? Globe :
                          diff.icon === 'cpu' ? Cpu :
                          TrendingUp;
              
              return (
                <div key={index} className="pdf-card hover-card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF5A00] to-[#00FF9C] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black mb-2">{diff.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="mt-8 pdf-card bg-gradient-to-r from-[#FF5A00]/5 to-[#00FF9C]/5 border-l-4 border-[#FF5A00]">
            <p className="text-lg leading-relaxed text-gray-800 italic">
              "{aboutText.mission}"
            </p>
          </div>
        </div>

        {/* PAGE 4: SERVICES VISUAL */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Our Services</h2>
            <p>Three Pillars of AI-Powered Growth</p>
          </div>

          <div className="space-y-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon === 'palette' ? Palette :
                          service.icon === 'users' ? Users :
                          TrendingUp;
              const gradient = index === 0 ? 'from-[#FF5A00] to-[#FF7A30]' :
                              index === 1 ? 'from-[#00FF9C] to-[#30FFB0]' :
                              'from-[#c4ff4d] to-[#d4ff6d]';

              return (
                <div key={service.id} className="pdf-card">
                  <div className="flex items-center gap-6 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black">{service.title}</h3>
                      <p className="text-gray-600 text-sm uppercase tracking-wider">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PAGE 5: EVIDENCE-LED PROJECT STORY */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Evidence-Led Project Story</h2>
            <p>Public facts with a direct verification path</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {websiteCases.map((study) => (
              <div key={study.slug} className="pdf-card case-study-card">
                <div className="case-study-badge">{study.category}</div>
                <h3 className="text-2xl font-black mb-2">{study.brand}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="metric-card">
                  <div className="metric-value">{study.metrics.value}</div>
                  <div className="metric-label">{study.metrics.label}</div>
                </div>
                <a
                  href="https://maltaverse.live/pjazza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold text-[#FF5A00] underline"
                >
                  Verify at maltaverse.live/pjazza
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-2xl text-gray-600">
            This release publishes only work with a direct source behind its visible claims.
          </div>
        </div>

        {/* PAGE 7: WORK PUBLICATION STANDARD */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>How We Publish Work</h2>
            <p>Evidence first. Claims second.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              ["01", "Name & ownership", "We publish a project only when its public name and relationship to OARC are clear."],
              ["02", "Media & links", "Each visible image is approved for that story and each public product has a direct verification path."],
              ["03", "Claims & results", "A figure, date, testimonial, or service is held back unless a specific source supports it."],
            ].map(([number, title, detail]) => (
              <div key={number} className="pdf-card">
                <div className="mb-6 text-sm font-black text-[#FF5A00]">{number}</div>
                <h3 className="mb-3 text-xl font-black">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE 8: PROCESS DIAGRAM */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Our 4D Framework</h2>
            <p>Systematic Approach to AI-Powered Growth</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5A00] via-[#00FF9C] to-[#c4ff4d]"></div>

            <div className="grid grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => {
                const colors = ['#FF5A00', '#FF8A40', '#00FF9C', '#c4ff4d'];
                return (
                  <div key={step.number} className="text-center">
                    {/* Number Badge */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-lg"
                      style={{ backgroundColor: colors[index] }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-black mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Details */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="pdf-card bg-gray-50">
              <h3 className="text-lg font-bold mb-3 text-[#FF5A00]">What You Get</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A00]">•</span>
                  <span>Dedicated account manager and creative team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A00]">•</span>
                  <span>Real-time performance dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A00]">•</span>
                  <span>Weekly strategy calls and monthly reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF5A00]">•</span>
                  <span>24/7 AI system monitoring and optimization</span>
                </li>
              </ul>
            </div>

            <div className="pdf-card bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
              <h3 className="text-lg font-bold mb-3 text-[#00FF9C]">Timeline</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Discovery & Strategy</span>
                  <span className="font-bold">Week 1-2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Design & Development</span>
                  <span className="font-bold">Week 3-4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Launch & Deployment</span>
                  <span className="font-bold">Week 5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Optimization & Scaling</span>
                  <span className="font-bold">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 9: TECHNOLOGY STACK */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Technology Stack</h2>
            <p>Cutting-Edge AI & Automation Tools</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* AI Creative Tools */}
            <div className="pdf-card">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-[#FF5A00]" />
                <h3 className="text-xl font-black">AI Creative</h3>
              </div>
              <div className="space-y-2">
                {technologyStack.aiCreative.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Automation Tools */}
            <div className="pdf-card">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#00FF9C]" />
                <h3 className="text-xl font-black">Automation</h3>
              </div>
              <div className="space-y-2">
                {technologyStack.automation.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Tools */}
            <div className="pdf-card">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#c4ff4d]" />
                <h3 className="text-xl font-black">Analytics</h3>
              </div>
              <div className="space-y-2">
                {technologyStack.analytics.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="pdf-card">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#FF8A40]" />
                <h3 className="text-xl font-black">Platforms</h3>
              </div>
              <div className="space-y-2">
                {technologyStack.platforms.map((tech, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 10: PRICING TIERS */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Investment Packages</h2>
            <p>Choose the Perfect Plan for Your Growth</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Starter Package */}
            <div className="pdf-card pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black mb-2">Starter</h3>
                <p className="text-sm text-gray-600 mb-4">Perfect for launching your AI journey</p>
                <div className="price-tag">
                  <span className="text-2xl font-black">Contact Us</span>
                  <span className="text-sm text-gray-500">for pricing</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00FF9C] flex items-center justify-center text-white text-xs">✓</div>
                  <span>AI Content Creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00FF9C] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Social Media Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00FF9C] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Monthly Strategy Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00FF9C] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Performance Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#00FF9C] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Email Support</span>
                </div>
              </div>
            </div>

            {/* Growth Package (Featured) */}
            <div className="pdf-card pricing-card featured-card relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF5A00] text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black mb-2">Growth</h3>
                <p className="text-sm text-gray-600 mb-4">Ideal for scaling businesses</p>
                <div className="price-tag">
                  <span className="text-2xl font-black">Contact Us</span>
                  <span className="text-sm text-gray-500">for pricing</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <span>Everything in Starter, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5A00] flex items-center justify-center text-white text-xs">✓</div>
                  <span>1 AI Employee (Sales/Support)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5A00] flex items-center justify-center text-white text-xs">✓</div>
                  <span>CRM Integration & Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5A00] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Advanced Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5A00] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Weekly Strategy Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FF5A00] flex items-center justify-center text-white text-xs">✓</div>
                  <span>Priority Support</span>
                </div>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="pdf-card pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black mb-2">Enterprise</h3>
                <p className="text-sm text-gray-600 mb-4">Complete AI transformation</p>
                <div className="price-tag">
                  <span className="text-2xl font-black">Contact Us</span>
                  <span className="text-sm text-gray-500">for pricing</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <span>Everything in Growth, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c4ff4d] flex items-center justify-center text-black text-xs">✓</div>
                  <span>3+ AI Employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c4ff4d] flex items-center justify-center text-black text-xs">✓</div>
                  <span>Full Revenue Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c4ff4d] flex items-center justify-center text-black text-xs">✓</div>
                  <span>Custom AI Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c4ff4d] flex items-center justify-center text-black text-xs">✓</div>
                  <span>Daily Check-ins</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c4ff4d] flex items-center justify-center text-black text-xs">✓</div>
                  <span>Dedicated Success Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="pdf-card bg-gray-50">
            <h3 className="text-lg font-bold mb-4 text-center">All Packages Include</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <Zap className="w-8 h-8 text-[#FF5A00] mx-auto mb-2" />
                <p className="text-xs font-semibold">Lightning-Fast Delivery</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-[#00FF9C] mx-auto mb-2" />
                <p className="text-xs font-semibold">Clear Project Reporting</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-[#c4ff4d] mx-auto mb-2" />
                <p className="text-xs font-semibold">Flexible Scaling</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#FF8A40] mx-auto mb-2" />
                <p className="text-xs font-semibold">Expert Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 11: EVIDENCE REVIEW */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Evidence Review</h2>
            <p>What qualifies a project for public proof</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="pdf-card">
              <h3 className="mb-4 text-lg font-bold">Before a project is published</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                <li>• Confirm the preferred public name and OARC&apos;s relationship to the work.</li>
                <li>• Confirm that each image or film is approved for the case study.</li>
                <li>• Add the official verification link where it is publicly available.</li>
              </ul>
            </div>
            <div className="pdf-card">
              <h3 className="mb-4 text-lg font-bold">What stays out</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                <li>• Unsourced performance numbers, launch dates, and outcome claims.</li>
                <li>• Testimonials without a supplied approval and attribution.</li>
                <li>• Generic client proof that cannot be independently inspected.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PAGE 12: NEXT STEPS / CTA */}
        <div className="pdf-page pdf-cover flex flex-col items-center justify-center relative overflow-hidden">
          {/* Dark background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          <div className="relative z-10 max-w-3xl text-center space-y-8">
            <h2 className="text-6xl font-black text-white mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-[#00FF9C]">Dominate</span> Your Market?
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Let's discuss how OARC Digital can transform your marketing, automate your revenue, and deploy AI systems that work 24/7 for your business.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="pdf-card bg-white/10 backdrop-blur border border-white/20 text-white">
                <h3 className="text-lg font-bold mb-4 text-[#c4ff4d]">Schedule a Call</h3>
                <p className="text-sm mb-3">Book a free 30-minute strategy session</p>
                <div className="text-[#00FF9C] font-bold">calendly.com/oarcdigital</div>
              </div>

              <div className="pdf-card bg-white/10 backdrop-blur border border-white/20 text-white">
                <h3 className="text-lg font-bold mb-4 text-[#c4ff4d]">Get in Touch</h3>
                <p className="text-sm mb-1">{companyInfo.email}</p>
                <p className="text-sm mb-1">{companyInfo.phone}</p>
                <p className="text-sm">{companyInfo.website}</p>
              </div>
            </div>

            {/* Evidence-led work release */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-white/60 text-sm">Evidence-led work release</p>
              <p className="mt-3 text-sm text-white/40">
                Explore the PJAZZA product story and its public verification path at oarcdigital.com/our-work.
              </p>
            </div>

            {/* Final Tagline */}
            <div className="pt-8">
              <p className="text-2xl font-bold text-white">
                Where Creativity Meets <span className="text-[#c4ff4d]">Intelligence</span>
              </p>
              <p className="text-white/60 text-sm mt-2">OARC Digital © 2025 | Malta</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
