import { Link } from "wouter";
import { ArrowRight, Mail, Sparkles, Zap, TrendingUp, Award, Globe } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';
import companyLogo from "@assets/final 2_1762907995368.png";

export default function Footer() {
  // Show first 5 items from each category for footer
  const aiCreativePreview = getPreviewServices('aiCreative').slice(0, 5);
  const aiEmployeesPreview = getPreviewServices('aiEmployees').slice(0, 5);
  const revenuePreview = getPreviewServices('revenue').slice(0, 5);

  return (
    <footer className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Top CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">Let's Build Together</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-2">Ready to Dominate Your Market?</h3>
              <p className="text-zinc-400 text-lg">AI-powered creativity, automation, and growth systems built for you.</p>
            </div>
            <Link href="#contact">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-bold text-white shadow-xl hover-elevate active-elevate-2 transition-all duration-300">
                <div className="absolute inset-0 bg-orange-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Brand & Stats */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={companyLogo} 
                  alt="OARC Digital logo" 
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                  data-testid="img-footer-logo"
                />
                <div className="font-display font-black text-4xl">
                  <span className="text-white">OARC </span>
                  <span className="text-[#FF5A00]">Digital</span>
                </div>
              </div>
              <p className="text-zinc-400 text-lg font-medium max-w-md">
                Where Creativity Meets Intelligence. AI-powered marketing that drives real results.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover-elevate hover:border-orange-500/30 transition-all duration-300">
                <div className="text-base sm:text-lg font-black bg-gradient-to-br from-orange-400 to-rose-400 bg-clip-text text-transparent mb-1">65+</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider group-hover:text-orange-400 transition-colors">Campaigns</div>
              </div>
              <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover-elevate hover:border-orange-500/30 transition-all duration-300">
                <div className="text-base sm:text-lg font-black bg-gradient-to-br from-orange-400 to-rose-400 bg-clip-text text-transparent mb-1">68%</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider group-hover:text-orange-400 transition-colors">Avg ROI</div>
              </div>
              <div className="group text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover-elevate hover:border-orange-500/30 transition-all duration-300">
                <div className="text-base sm:text-lg font-black bg-gradient-to-br from-orange-400 to-rose-400 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider group-hover:text-orange-400 transition-colors">AI Systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12" data-testid="footer-services">

          {/* AI Creative Services */}
          <div className="group">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-black text-lg text-white">{servicesCatalog.aiCreative.title}</h4>
            </div>
            <ul className="space-y-3 text-sm">
              {aiCreativePreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all inline-flex items-center gap-2 group/link" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover/link:bg-orange-500"></div>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Employees */}
          <div className="group">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-black text-lg text-white">{servicesCatalog.aiEmployees.title}</h4>
            </div>
            <ul className="space-y-3 text-sm">
              {aiEmployeesPreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all inline-flex items-center gap-2 group/link" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover/link:bg-orange-500"></div>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue Automation */}
          <div className="group">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-black text-lg text-white">{servicesCatalog.revenue.title}</h4>
            </div>
            <ul className="space-y-3 text-sm">
              {revenuePreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="text-zinc-400 hover:text-orange-500 hover:translate-x-1 transition-all inline-flex items-center gap-2 group/link" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover/link:bg-orange-500"></div>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="group">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-black text-lg text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2" data-testid="link-footer-home"><div className="w-1 h-1 rounded-full bg-zinc-500"></div>Home</Link></li>
              <li><Link href="/why-us" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2" data-testid="link-footer-why-us"><div className="w-1 h-1 rounded-full bg-zinc-500"></div>Why Us</Link></li>
              <li><Link href="/roadmap" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2" data-testid="link-footer-roadmap"><div className="w-1 h-1 rounded-full bg-zinc-500"></div>Road Map 2026</Link></li>
              <li><Link href="#our-work" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2" data-testid="link-footer-our-work"><div className="w-1 h-1 rounded-full bg-zinc-500"></div>Our Work</Link></li>
              <li><Link href="/pdf" className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2" data-testid="link-footer-pdf"><div className="w-1 h-1 rounded-full bg-zinc-500"></div>Client PDFs</Link></li>
              <li>
                <Link href="/services" className="group/all inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all mt-2" data-testid="link-footer-browse-all">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">Browse All Services</span>
                  <ArrowRight className="w-4 h-4 text-orange-500 group-hover/all:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <span>© 2025 OARC Digital</span>
              <span className="hidden md:inline text-zinc-600">|</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="mailto:hello@oarcdigital.com" className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">hello@oarcdigital.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
