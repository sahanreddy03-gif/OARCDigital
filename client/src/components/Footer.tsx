import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';
import companyLogo from "@assets/final 2_1762907995368.png";

export default function Footer() {
  // Show first 8 items from each category for footer
  const aiCreativePreview = getPreviewServices('aiCreative').slice(0, 8);
  const aiEmployeesPreview = getPreviewServices('aiEmployees').slice(0, 8);
  const revenuePreview = getPreviewServices('revenue').slice(0, 8);

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Superside-inspired CTA Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          {/* Massive Bold Heading - Superside Style */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter" style={{ letterSpacing: '-0.04em' }}>
            GET IN<br />TOUCH
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            We'll show you how to start powerful conversations, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
          </p>
          
          {/* Pink CTA Button - Superside Style */}
          <Link href="#contact">
            <button className="group relative px-10 py-5 bg-[#FF006B] hover:bg-[#E6005F] rounded-xl font-bold text-white text-lg shadow-2xl transition-all duration-300 hover:scale-105" data-testid="button-footer-cta">
              <div className="relative flex items-center gap-3">
                <span>WORK WITH US</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Services Grid - Superside Inspired */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12" data-testid="footer-services">
          {/* AI Creative Services */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.aiCreative.title} ↗</h4>
            <ul className="space-y-3.5">
              {aiCreativePreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Employees */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.aiEmployees.title} ↗</h4>
            <ul className="space-y-3.5">
              {aiEmployeesPreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue Automation */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.revenue.title} ↗</h4>
            <ul className="space-y-3.5">
              {revenuePreview.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.route || service.slug}`} 
                    className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" 
                    data-testid={`link-footer-${service.slug}`}
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">Main</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-home">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-services">
                  <span>Our Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-why-us">
                  <span>Why Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-roadmap">
                  <span>Road Map 2026</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#our-work" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-our-work">
                  <span>Our Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/pdf" className="group inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-pdf">
                  <span>Client PDFs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand & Bottom Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={companyLogo} 
              alt="OARC Digital logo" 
              className="h-10 w-10 object-contain"
              data-testid="img-footer-logo"
            />
            <div className="font-display font-black text-3xl">
              <span className="text-white">OARC </span>
              <span className="text-[#FF5A00]">Digital</span>
            </div>
          </div>

          {/* Copyright & Email */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="text-zinc-500 text-sm">
              © 2025 OARC Digital. All rights reserved.
            </div>
            <Link href="mailto:hello@oarcdigital.com" className="text-zinc-400 hover:text-white transition-colors text-sm font-normal" data-testid="link-footer-email">
              hello@oarcdigital.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
