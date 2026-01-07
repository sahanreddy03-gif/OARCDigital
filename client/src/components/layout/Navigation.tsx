import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import greenLogo from "@assets/image_1767660951950.png";

const serviceCategories = [
  {
    title: "Creative design services",
    href: "/services/creative",
    items: [
      { name: "Ad creative", href: "/services/ad-creative" },
      { name: "Social media creative", href: "/services/social-media-creative" },
      { name: "Presentation design", href: "/services/presentation" },
      { name: "Branding services", href: "/services/branding" },
      { name: "Web design", href: "/services/web-design" },
      { name: "Print design", href: "/services/print-packaging" },
    ]
  },
  {
    title: "Specialized production",
    href: "/services",
    items: [
      { name: "Video production", href: "/services/video-production" },
      { name: "Motion design", href: "/services/motion-design" },
      { name: "Email creation", href: "/services/email-marketing" },
      { name: "Web development", href: "/services/web-design" },
      { name: "Copywriting", href: "/services/copywriting" },
    ]
  },
  {
    title: "AI services",
    href: "/services/ai-employees",
    items: [
      { name: "AI-powered creative", href: "/services/ai-creative" },
      { name: "AI consulting", href: "/services/ai-consulting" },
      { name: "AI employees", href: "/services/ai-employees" },
    ]
  },
  {
    title: "Marketing services",
    href: "/services/digital-marketing",
    items: [
      { name: "Social media management", href: "/services/social" },
      { name: "Paid advertising", href: "/services/paid-advertising" },
      { name: "SEO", href: "/services/seo" },
      { name: "Marketing strategy", href: "/services/digital-marketing" },
    ]
  }
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/creative", label: "Creative" },
    { href: "/our-work", label: "Our Work" },
    { href: "/why-us", label: "Why Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/tools", label: "Tools" },
  ];

  const textShadow = '0 1px 3px rgba(0,0,0,0.5), 0 0 15px rgba(0,0,0,0.25)';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
          {/* Logo - Stacked OARC / DIGITAL */}
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <img 
              src={greenLogo} 
              alt="OARC Digital logo" 
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain"
              data-testid="img-logo"
            />
            <div 
              className="flex flex-col items-center leading-none"
              style={{ fontFamily: 'var(--font-punoer)' }}
            >
              <span className="text-white text-xl md:text-2xl tracking-[0.2em]">OARC</span>
              <span className="text-[0.45rem] md:text-[0.5rem] tracking-[0.35em]" style={{ color: 'rgba(196, 255, 77, 0.6)' }}>DIGITAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/creative"
              className={`text-xs lg:text-sm font-medium transition-colors ${
                location === "/creative"
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              style={{ textShadow }}
              data-testid="link-creative"
            >
              Creative
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button 
                className={`flex items-center gap-1 text-xs lg:text-sm font-medium transition-colors ${
                  location.startsWith("/services")
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ textShadow }}
                data-testid="button-services"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Superside-style Mega Menu */}
              <AnimatePresence>
                {showServicesMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-[#F5F5F0] rounded-2xl shadow-2xl border border-zinc-200/50 overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {serviceCategories.map((category, idx) => (
                          <div key={idx}>
                            <Link 
                              href={category.href}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 mb-4 px-3 py-1.5 rounded-full border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-100 transition-all group"
                              data-testid={`link-category-${idx}`}
                            >
                              {category.title}
                              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                            </Link>
                            <ul className="space-y-2 mt-4">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors block py-1"
                                    data-testid={`link-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom row with featured cards like Superside */}
                      <div className="mt-8 pt-6 border-t border-zinc-200">
                        <div className="grid grid-cols-3 gap-6">
                          <Link href="/our-work" className="group" data-testid="link-mega-creative-talent">
                            <div className="aspect-video bg-zinc-200 rounded-xl overflow-hidden mb-3">
                              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-600 group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h4 className="text-sm font-semibold text-zinc-900">Our creative talent</h4>
                            <p className="text-xs text-zinc-500">Meet your dedicated team</p>
                          </Link>
                          <Link href="/services/ai-employees" className="group" data-testid="link-mega-ai-excellence">
                            <div className="aspect-video bg-zinc-200 rounded-xl overflow-hidden mb-3">
                              <div className="w-full h-full bg-gradient-to-br from-violet-400 to-purple-600 group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h4 className="text-sm font-semibold text-zinc-900">AI excellence</h4>
                            <p className="text-xs text-zinc-500">Your shortcut to AI's creative advantage</p>
                          </Link>
                          <Link href="/tools" className="group" data-testid="link-mega-technology">
                            <div className="aspect-video bg-zinc-200 rounded-xl overflow-hidden mb-3">
                              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <h4 className="text-sm font-semibold text-zinc-900">Our technology</h4>
                            <p className="text-xs text-zinc-500">The tech powering your creative edge</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs lg:text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
                style={{ textShadow }}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-5 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/20 transition-all"
              data-testid="button-contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu - Dark Glassmorphic */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                <Link
                  href="/creative"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location === "/creative" ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-creative"
                >
                  Creative
                </Link>
                <Link
                  href="/services"
                  className={`block py-3 text-base font-medium border-b border-white/5 ${
                    location.startsWith("/services") ? "text-white" : "text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-services"
                >
                  Services
                </Link>
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 text-base font-medium border-b border-white/5 ${
                      location === link.href
                        ? "text-white"
                        : "text-white/80"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block mt-4 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white/20 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-contact"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
