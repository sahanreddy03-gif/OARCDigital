import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, ChevronDown, ArrowRight, X } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';
import companyLogo from "@assets/final 2_1762907995368.png";

export default function Navigation() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const aiCreativePreview = getPreviewServices('aiCreative');
  const aiEmployeesPreview = getPreviewServices('aiEmployees');
  const revenuePreview = getPreviewServices('revenue');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div 
          className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled 
              ? 'glass-strong px-6 py-3 shadow-2xl' 
              : 'bg-transparent px-6 py-3'
          }`}
        >
          <Link href="/" className="flex items-center gap-2 magnetic" data-testid="link-logo-home">
            <img 
              src={companyLogo} 
              alt="OARC Digital logo" 
              className="h-7 w-7 md:h-8 md:w-8 object-contain"
              data-testid="img-logo"
            />
            <div 
              className="font-display font-bold text-lg md:text-xl lg:text-2xl transition-colors duration-300"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className={scrolled ? 'text-zinc-900' : 'text-white'}>OARC</span>
              <span className="text-[#FF5A00]"> Digital</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              href="/" 
              className={`text-xs xl:text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-white/90 hover:text-white'
              }`}
              data-testid="link-home"
            >
              Home
            </Link>
            <Link 
              href="/why-us" 
              className={`text-xs xl:text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-white/90 hover:text-white'
              }`}
              data-testid="link-why-us"
            >
              Why Us
            </Link>
            
            {/* Services Mega Menu */}
            <div
              className="relative pb-2"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button 
                className={`flex items-center gap-1 text-xs xl:text-sm font-bold transition-colors duration-300 ${
                  scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-white/90 hover:text-white'
                }`}
                data-testid="button-services"
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Enhanced Glass Mega Menu */}
              {showServicesMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="glass-strong rounded-2xl shadow-2xl p-8 glow-green">
                    <div className="grid grid-cols-3 gap-8">
                      {/* AI Creative */}
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                          {servicesCatalog.aiCreative.title}
                        </h3>
                        <div className="space-y-2">
                          {aiCreativePreview.map((service) => (
                            <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                              <div className="text-sm text-zinc-600 hover:text-[#00FF9C] transition-all py-1 px-2 rounded hover:bg-zinc-50 cursor-pointer flex items-center justify-between group">
                                <span className="font-medium">{service.title}</span>
                                {service.badge && (
                                  <span className="text-xs glass px-2 py-0.5 rounded-full font-bold text-zinc-900">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* AI Employees */}
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                          {servicesCatalog.aiEmployees.title}
                        </h3>
                        <div className="space-y-2">
                          {aiEmployeesPreview.map((service) => (
                            <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                              <div className="text-sm text-zinc-600 hover:text-[#FF5A00] transition-all py-1 px-2 rounded hover:bg-zinc-50 cursor-pointer flex items-center justify-between group">
                                <span className="font-medium">{service.title}</span>
                                {service.badge && (
                                  <span className="text-xs glass px-2 py-0.5 rounded-full font-bold text-zinc-900">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Revenue */}
                      <div>
                        <h3 className="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                          {servicesCatalog.revenue.title}
                        </h3>
                        <div className="space-y-2">
                          {revenuePreview.map((service) => (
                            <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                              <div className="text-sm text-zinc-600 hover:text-[#00FF9C] transition-all py-1 px-2 rounded hover:bg-zinc-50 cursor-pointer flex items-center justify-between group">
                                <span className="font-medium">{service.title}</span>
                                {service.badge && (
                                  <span className="text-xs glass px-2 py-0.5 rounded-full font-bold text-zinc-900">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Browse All Link */}
                    <Link href="/services" data-testid="link-browse-all-services">
                      <div className="mt-6 pt-6 border-t border-zinc-200">
                        <div className="flex items-center justify-center gap-2 text-[#00FF9C] font-bold hover:gap-3 transition-all cursor-pointer group">
                          Browse all services
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="#our-work" 
              className={`text-xs xl:text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-white/90 hover:text-white'
              }`}
              data-testid="link-our-work"
            >
              Our Work
            </Link>
            <Link 
              href="#resources" 
              className={`text-xs xl:text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-zinc-700 hover:text-zinc-900' : 'text-white/90 hover:text-white'
              }`}
              data-testid="link-resources"
            >
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <Button 
              size="sm" 
              className="glow-green-hover rounded-xl text-[10px] md:text-xs px-3 md:px-5 font-bold bg-[#00FF9C] text-black hover:bg-[#00D17D] border-0 shadow-lg" 
              data-testid="button-contact"
            >
              Contact Us
            </Button>
            <button 
              className={`lg:hidden p-1.5 rounded-md transition-colors ${
                scrolled ? 'text-zinc-900' : 'text-white'
              }`}
              data-testid="button-menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden mt-4 mx-4">
          <div className="glass-strong rounded-2xl shadow-2xl px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <Link href="/" data-testid="link-mobile-home" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-bold text-zinc-900 py-2 hover:text-[#00FF9C] transition-colors">
                Home
              </div>
            </Link>
            <Link href="/why-us" data-testid="link-mobile-why-us" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-bold text-zinc-900 py-2 hover:text-[#00FF9C] transition-colors">
                Why Us
              </div>
            </Link>
            <Link href="/services" data-testid="link-mobile-all-services" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-bold text-[#00FF9C] py-2 flex items-center gap-2 hover:gap-3 transition-all">
                All Services
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="#our-work" data-testid="link-mobile-our-work" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-bold text-zinc-900 py-2 hover:text-[#00FF9C] transition-colors">
                Our Work
              </div>
            </Link>
            <Link href="#resources" data-testid="link-mobile-resources" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-bold text-zinc-900 py-2 hover:text-[#00FF9C] transition-colors">
                Resources
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
