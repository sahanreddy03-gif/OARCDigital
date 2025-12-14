import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Cookie } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiLinkedin } from "react-icons/si";
import { servicesCatalog } from '@/config/servicesConfig';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import companyLogo from "@assets/IMG_9004_1765747003784.png";

const socialLinks = [
  { name: 'Instagram', icon: SiInstagram, href: 'https://instagram.com/oarcdigital' },
  { name: 'Facebook', icon: SiFacebook, href: 'https://facebook.com/oarcdigital' },
  { name: 'X', icon: SiX, href: 'https://x.com/oarcdigital' },
  { name: 'LinkedIn', icon: SiLinkedin, href: 'https://linkedin.com/company/oarcdigital' },
];

export default function Footer() {
  const { openPreferences } = useCookieConsent();
  
  const creativeDesignPreview = servicesCatalog.creativeDesign.items.slice(0, 8);
  const aiAgentsPreview = servicesCatalog.aiAgents.items.slice(0, 6);
  const growthAutomationPreview = servicesCatalog.growthAutomation.items.slice(0, 7);
  const developmentPreview = servicesCatalog.development.items.slice(0, 5);

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <h2 className="font-bold text-white mb-8 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 8rem)', letterSpacing: '-0.04em' }}>
            GET IN<br />TOUCH
          </h2>
          
          <div className="flex flex-col gap-3 max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-normal">
              Ready to 10x your revenue? Let's make it happen.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-normal">
              Your growth is our obsession. Let's talk strategy.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-normal">
              AI-powered results. Human-crafted relationships.
            </p>
          </div>
          
          <Link href="#contact">
            <button className="group relative px-10 py-5 bg-[#c4ff4d] hover:bg-[#b0e845] rounded-xl font-bold text-black text-lg shadow-2xl transition-all duration-300 hover:scale-105" data-testid="button-footer-cta">
              <div className="relative flex items-center gap-3">
                <span>WORK WITH US</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12" data-testid="footer-services">
          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.creativeDesign.title}</h4>
            <ul className="space-y-3.5">
              {creativeDesignPreview.map((service) => (
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

          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.aiAgents.title}</h4>
            <ul className="space-y-3.5">
              {aiAgentsPreview.map((service) => (
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

          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.growthAutomation.title}</h4>
            <ul className="space-y-3.5">
              {growthAutomationPreview.map((service) => (
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

          <div>
            <h4 className="text-white text-base font-bold mb-6 tracking-tight">{servicesCatalog.development.title}</h4>
            <ul className="space-y-3.5">
              {developmentPreview.map((service) => (
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

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-10 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Malta</h5>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              Seaside Spirit,<br />
              Triq ix-Xatt, Ta' Xbiex<br />
              XBX 1020, Malta
            </address>
            <a href="tel:+35679711799" className="text-zinc-500 hover:text-zinc-300 text-xs mt-2 inline-block transition-colors" data-testid="link-phone-malta">
              +356 7971 1799
            </a>
          </div>

          <div>
            <h5 className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">India — Chennai</h5>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              OARC Digital,<br />
              Olympia Tech Park, SIDCO Industrial Estate,<br />
              Guindy, Chennai 600032, India
            </address>
            <a href="tel:+919900555588" className="text-zinc-500 hover:text-zinc-300 text-xs mt-2 inline-block transition-colors" data-testid="link-phone-chennai">
              +91 99005 55588
            </a>
          </div>

          <div>
            <h5 className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Dubai — JLT</h5>
            <address className="text-zinc-400 text-sm not-italic leading-relaxed">
              OARC Digital,<br />
              Cluster F, Jumeirah Lake Towers,<br />
              Dubai, United Arab Emirates
            </address>
            <a href="tel:+971526472981" className="text-zinc-500 hover:text-zinc-300 text-xs mt-2 inline-block transition-colors" data-testid="link-phone-dubai">
              +971 52 647 2981
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors text-sm" data-testid="link-footer-privacy">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-zinc-400 hover:text-white transition-colors text-sm" data-testid="link-footer-cookies">
              Cookie Policy
            </Link>
            <Link href="/terms-conditions" className="text-zinc-400 hover:text-white transition-colors text-sm" data-testid="link-footer-terms">
              Terms & Conditions
            </Link>
            <button
              onClick={openPreferences}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
              data-testid="button-cookie-settings"
            >
              <Cookie className="w-3.5 h-3.5" />
              Cookie Settings
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-xs">GDPR Compliant</span>
            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
            <span className="text-zinc-500 text-xs">Malta IDPC Registered</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img 
              src={companyLogo} 
              alt="Oarc Digital logo" 
              className="h-14 w-14 md:h-16 md:w-16 object-contain"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))' }}
              data-testid="img-footer-logo"
            />
            <span 
              className="font-logo text-white text-xl md:text-2xl lg:text-3xl tracking-[0.02em] font-bold"
              data-testid="text-footer-logo-name"
            >
              <span className="text-white text-2xl md:text-3xl lg:text-4xl">O</span>
              <span>arc</span>
              <span className="ml-1.5 text-[#ff914d]">D</span>
              <span className="text-[#ff914d]">igital</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            <div className="text-zinc-500 text-sm">
              © 2025 Oarc Digital. All rights reserved.
            </div>
            <div className="text-zinc-600 text-xs">
              Registered in Malta, EU
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
