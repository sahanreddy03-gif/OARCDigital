import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, ChevronDown, ArrowRight, X } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';
import companyLogo from "@assets/IMG_8775_1764722473830.png";

export default function Navigation() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const aiCreativePreview = getPreviewServices('aiCreative');
  const aiEmployeesPreview = getPreviewServices('aiEmployees');
  const revenuePreview = getPreviewServices('revenue');

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5" data-testid="link-logo-home">
            <div className="relative h-8 w-8 md:h-9 md:w-9 rounded-full overflow-hidden">
              <img 
                src={companyLogo} 
                alt="Oarc Digital logo" 
                className="h-full w-full object-cover scale-[1.15]"
                data-testid="img-logo"
              />
            </div>
            <span className="text-white text-base md:text-lg tracking-[0.25em] font-normal" style={{ fontVariant: 'small-caps' }}>
              Oarc Digital
            </span>
          </Link>

          {/* Desktop Menu (also shown in landscape) */}
          <div className="hidden lg:flex landscape-nav-desktop items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-home">
              Home
            </Link>
            <Link href="/why-us" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-why-us">
              Why Us
            </Link>
            
            {/* Services Mega Menu */}
            <div
              className="relative pb-2"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button className="flex items-center gap-1 text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="button-services">
                Services
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Mega Menu Dropdown */}
              {showServicesMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-zinc-200 p-8 z-50">
                  <div className="grid grid-cols-3 gap-8">
                    {/* AI Creative */}
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        {servicesCatalog.aiCreative.title}
                      </h3>
                      <div className="space-y-2">
                        {aiCreativePreview.map((service) => (
                          <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                            <div className="text-sm text-zinc-600 hover:text-[#ea580c] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-medium">
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
                            <div className="text-sm text-zinc-600 hover:text-[#ea580c] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-medium">
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
                            <div className="text-sm text-zinc-600 hover:text-[#ea580c] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-medium">
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
                      <div className="flex items-center justify-center gap-2 text-[#ea580c] font-semibold hover:gap-3 transition-all cursor-pointer">
                        Browse all services
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#our-work" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-our-work">
              Our Work
            </Link>
            <Link href="#resources" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-resources">
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <Button 
              size="sm" 
              className="rounded-full text-[10px] md:text-xs px-3 md:px-5 font-bold bg-white text-black hover:bg-white/90 border-0" 
              data-testid="button-contact"
            >
              Contact Us
            </Button>
            <button 
              className="lg:hidden landscape-nav-mobile-hidden p-1.5 rounded-md text-white" 
              data-testid="button-menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden in landscape) */}
      {showMobileMenu && (
        <div className="lg:hidden landscape-nav-mobile-hidden absolute top-full left-0 right-0 bg-white shadow-xl border-b border-zinc-200 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" data-testid="link-mobile-home" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-semibold text-zinc-900 py-2">
                Home
              </div>
            </Link>
            <Link href="/why-us" data-testid="link-mobile-why-us" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-semibold text-zinc-900 py-2">
                Why Us
              </div>
            </Link>
            <Link href="/services" data-testid="link-mobile-all-services" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-semibold text-[#ea580c] py-2 flex items-center gap-2">
                All Services
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="#our-work" data-testid="link-mobile-our-work" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-semibold text-zinc-900 py-2">
                Our Work
              </div>
            </Link>
            <Link href="#resources" data-testid="link-mobile-resources" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-semibold text-zinc-900 py-2">
                Resources
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
