import { Zap, Users, TrendingUp, Target, Clock, Globe, Cpu, Palette, Database, Rocket, Sparkles } from "lucide-react";
import { companyInfo, aboutText, coreServices, whyChooseUs, processSteps, caseStudies as maltaCaseStudies, technologyStack, clientTestimonials, keyDifferentiators } from "@/data/companyProfile";
import { caseStudies as websiteCaseStudies } from "@/data/caseStudies";
import { useEffect } from "react";
import logoImage from "@assets/fdfdfd_1762818183304.png";

export default function PDFCapabilitiesDeck() {
  const websiteCases = Object.values(websiteCaseStudies);

  useEffect(() => {
    document.title = "OARC Digital - Capabilities Deck | AI-Powered Marketing Agency";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
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
              <div className="font-display font-black text-6xl tracking-tight">
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

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-[#00FF9C] mb-1">100+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Campaigns</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-[#FF5A00] mb-1">6</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Major Brands</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c4ff4d]/30 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-[#c4ff4d] mb-1">24/7</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">AI Systems</div>
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

            {/* At a Glance Metrics */}
            <div className="pdf-card bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white">
              <h3 className="text-2xl font-bold mb-6">At a Glance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Total Campaign Reach</span>
                  <span className="text-2xl font-black text-[#00FF9C]">120M+</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Avg. Engagement Boost</span>
                  <span className="text-2xl font-black text-[#FF5A00]">+165%</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70">Client ROI Increase</span>
                  <span className="text-2xl font-black text-[#c4ff4d]">+68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">AI Systems Deployed</span>
                  <span className="text-2xl font-black text-white">50+</span>
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
            <h2>Why OARC Digital?</h2>
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

        {/* PAGE 5-6: CASE STUDIES (Website Cases) */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Global Brand Success Stories</h2>
            <p>Results That Speak Volumes</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Gym Group */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[0].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[0].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[0].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[0].metrics.value}</div>
                <div className="metric-label">{websiteCases[0].metrics.label}</div>
              </div>
            </div>

            {/* Azzaro */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[1].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[1].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[1].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[1].metrics.value}</div>
                <div className="metric-label">{websiteCases[1].metrics.label}</div>
              </div>
            </div>

            {/* Body Shop */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[2].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[2].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[2].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[2].metrics.value}</div>
                <div className="metric-label">{websiteCases[2].metrics.label}</div>
              </div>
            </div>

            {/* Tefal */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[3].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[3].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[3].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[3].metrics.value}</div>
                <div className="metric-label">{websiteCases[3].metrics.label}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>More Success Stories</h2>
            <p>Continued Excellence</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Lenovo Legion */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[4].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[4].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[4].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[4].metrics.value}</div>
                <div className="metric-label">{websiteCases[4].metrics.label}</div>
              </div>
            </div>

            {/* ESL Gaming */}
            <div className="pdf-card case-study-card">
              <div className="case-study-badge">{websiteCases[5].category}</div>
              <h3 className="text-2xl font-black mb-2">{websiteCases[5].brand}</h3>
              <p className="text-gray-600 mb-4">{websiteCases[5].description}</p>
              <div className="metric-card">
                <div className="metric-value">{websiteCases[5].metrics.value}</div>
                <div className="metric-label">{websiteCases[5].metrics.label}</div>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="space-y-4">
            {clientTestimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="pdf-card border-l-4 border-[#00FF9C] bg-gray-50">
                <p className="text-gray-800 italic mb-3">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.position}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE 7: MALTA/EU CASE STUDIES */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Malta & EU Success Stories</h2>
            <p>Local Expertise, Measurable Results</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {maltaCaseStudies.map((study, index) => (
              <div key={index} className="pdf-card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-xs font-bold text-white bg-[#FF5A00] px-3 py-1 rounded-full">
                    {study.industry}
                  </div>
                  <div className="text-xs text-gray-500">{study.location}</div>
                </div>
                <h3 className="text-xl font-black mb-2">{study.client}</h3>
                <p className="text-sm text-gray-600 mb-3"><strong>Challenge:</strong> {study.challenge}</p>
                <p className="text-sm text-gray-700 mb-4">{study.solution}</p>
                
                {/* Results Table */}
                <div className="space-y-2">
                  {study.results.map((result, rIndex) => (
                    <div key={rIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-xs text-gray-600">{result.metric}</span>
                      <div className="text-right">
                        <div className="font-black text-lg text-[#00FF9C]">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.period}</div>
                      </div>
                    </div>
                  ))}
                </div>
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
                  <span className="text-4xl font-black">€2,499</span>
                  <span className="text-sm text-gray-500">/month</span>
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
                  <span className="text-4xl font-black">€4,999</span>
                  <span className="text-sm text-gray-500">/month</span>
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
                  <span className="text-4xl font-black">€9,999</span>
                  <span className="text-sm text-gray-500">/month</span>
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
                <p className="text-xs font-semibold">ROI-Focused Results</p>
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

        {/* PAGE 11: RESULTS DASHBOARD */}
        <div className="pdf-page">
          <div className="pdf-section-header">
            <h2>Aggregate Results Dashboard</h2>
            <p>Real Performance Across All Clients</p>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="pdf-card text-center bg-gradient-to-br from-[#FF5A00] to-[#FF8A40] text-white">
              <div className="text-4xl font-black mb-2">120M+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Total Reach</div>
            </div>
            <div className="pdf-card text-center bg-gradient-to-br from-[#00FF9C] to-[#30FFB0] text-black">
              <div className="text-4xl font-black mb-2">+165%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Avg Engagement</div>
            </div>
            <div className="pdf-card text-center bg-gradient-to-br from-[#c4ff4d] to-[#d4ff6d] text-black">
              <div className="text-4xl font-black mb-2">+68%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Avg ROI</div>
            </div>
            <div className="pdf-card text-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
              <div className="text-4xl font-black mb-2">50+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">AI Systems</div>
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="grid grid-cols-2 gap-6">
            <div className="pdf-card">
              <h3 className="text-lg font-bold mb-4">By Service Category</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">AI Creative Services</span>
                    <span className="text-[#FF5A00] font-bold">45%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF5A00] to-[#FF8A40]" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">AI Employees</span>
                    <span className="text-[#00FF9C] font-bold">30%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#00FF9C] to-[#30FFB0]" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-semibold">Revenue Automation</span>
                    <span className="text-[#c4ff4d] font-bold">25%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#c4ff4d] to-[#d4ff6d]" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pdf-card">
              <h3 className="text-lg font-bold mb-4">Client Satisfaction</h3>
              <div className="space-y-4">
                <div className="text-center py-4 bg-gray-50 rounded-lg">
                  <div className="text-6xl font-black text-[#00FF9C] mb-2">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating (out of 5.0)</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="py-3 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-black text-[#FF5A00]">98%</div>
                    <div className="text-xs text-gray-600">Retention Rate</div>
                  </div>
                  <div className="py-3 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-black text-[#c4ff4d]">95%</div>
                    <div className="text-xs text-gray-600">Referral Rate</div>
                  </div>
                </div>
              </div>
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

            {/* Social Proof */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4">Trusted by Global & Local Brands</p>
              <div className="flex justify-center gap-8 text-white/40 text-sm">
                <span>The Gym Group</span>
                <span>•</span>
                <span>Azzaro</span>
                <span>•</span>
                <span>The Body Shop</span>
                <span>•</span>
                <span>Tefal</span>
                <span>•</span>
                <span>Lenovo</span>
              </div>
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
  );
}
