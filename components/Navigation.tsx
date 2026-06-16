"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, ChevronDown, ArrowRight, X } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';
const greenLogo = "/attached_assets/image_1767660951950.png";

export default function Navigation() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const creativeDesignPreview = getPreviewServices('creativeDesign');
  const aiAgentsPreview = getPreviewServices('aiAgents');
  const growthPreview = getPreviewServices('growthAutomation');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textShadow = '0 1px 3px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <img 
              src={greenLogo} 
              alt="OARC Digital logo" 
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain"
              data-testid="img-logo"
            />
            <div 
              className="flex flex-col items-center leading-none"
              style={{ fontFamily: 'var(--font-heatrobox)' }}
            >
              <span className="text-white text-xl md:text-2xl tracking-[0.2em]">OARC</span>
              <span className="text-[0.45rem] md:text-[0.5rem] tracking-[0.35em]" style={{ color: 'rgba(196, 255, 77, 0.6)' }}>DIGITAL</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex landscape-nav-desktop items-center space-x-6 xl:space-x-8">
            <Link 
              href="/" 
              className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-home"
            >
              Home
            </Link>
            <Link 
              href="/why-us" 
              className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-why-us"
            >
              Why Us
            </Link>
            <Link 
              href="/creative" 
              className="text-xs xl:text-sm font-medium text-[#c4ff4d] hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-creative"
            >
              Creative
            </Link>
            <Link 
              href="/ai-agents" 
              className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-ai-agents"
            >
              AI Agents
            </Link>
            
            {/* Services Mega Menu */}
            <div
              className="relative pb-2"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button 
                className="flex items-center gap-1 text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
                style={{ textShadow }}
                data-testid="button-services"
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Mega Menu Dropdown - Dark Premium Style */}
              {showServicesMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 z-50">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Creative & Design */}
                    <div>
                      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                        {servicesCatalog.creativeDesign?.title || 'Creative & Design'}
                      </h3>
                      <div className="space-y-2">
                        {creativeDesignPreview.map((service) => (
                          <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                            <div className="text-sm text-zinc-400 hover:text-[#c4ff4d] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full font-medium">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* AI Agents */}
                    <div>
                      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                        {servicesCatalog.aiAgents?.title || 'AI Agents'}
                      </h3>
                      <div className="space-y-2">
                        {aiAgentsPreview.map((service) => (
                          <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                            <div className="text-sm text-zinc-400 hover:text-[#23AACA] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full font-medium">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Growth Automation */}
                    <div>
                      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                        {servicesCatalog.growthAutomation?.title || 'Growth & Automation'}
                      </h3>
                      <div className="space-y-2">
                        {growthPreview.map((service) => (
                          <Link key={service.slug} href={`/services/${service.route || service.slug}`} data-testid={`link-mega-${service.slug}`}>
                            <div className="text-sm text-zinc-400 hover:text-[#4ade80] transition-colors py-1 cursor-pointer flex items-center justify-between group">
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full font-medium">
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
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-center gap-2 text-[#c4ff4d] font-semibold hover:gap-3 transition-all cursor-pointer">
                        Browse all services
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/h360" 
              className="text-xs xl:text-sm font-medium text-[#4ade80] hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-h360"
            >
              H360
            </Link>
            <Link 
              href="/our-work" 
              className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-our-work"
            >
              Our Work
            </Link>
            <Link 
              href="/contact" 
              className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" 
              style={{ textShadow }}
              data-testid="link-contact"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <Link href="/contact">
              <Button 
                size="sm" 
                className="rounded-full text-[10px] md:text-xs px-4 md:px-5 font-semibold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] border-0 shadow-lg" 
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
            <button 
              className="lg:hidden landscape-nav-mobile-hidden p-2 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors" 
              data-testid="button-menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dark Premium Glassmorphic Style */}
      {showMobileMenu && (
        <div className="lg:hidden landscape-nav-mobile-hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-6 space-y-1">
            <Link href="/" data-testid="link-mobile-home" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3 border-b border-white/5">
                Home
              </div>
            </Link>
            <Link href="/why-us" data-testid="link-mobile-why-us" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3 border-b border-white/5">
                Why Us
              </div>
            </Link>
            <Link href="/creative" data-testid="link-mobile-creative" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-[#c4ff4d] py-3 border-b border-white/5">
                Creative
              </div>
            </Link>
            <Link href="/ai-agents" data-testid="link-mobile-ai-agents" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3 border-b border-white/5">
                AI Agents
              </div>
            </Link>
            <Link href="/services" data-testid="link-mobile-all-services" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3 flex items-center gap-2 border-b border-white/5">
                All Services
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
            <Link href="/h360" data-testid="link-mobile-h360" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-[#4ade80] py-3 border-b border-white/5">
                H360 — Restaurants
              </div>
            </Link>
            <Link href="/our-work" data-testid="link-mobile-our-work" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3 border-b border-white/5">
                Our Work
              </div>
            </Link>
            <Link href="/contact" data-testid="link-mobile-contact" onClick={() => setShowMobileMenu(false)}>
              <div className="text-base font-medium text-white py-3">
                Contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
