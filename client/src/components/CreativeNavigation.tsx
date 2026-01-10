import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import greenLogo from "@assets/image_1767660951950.png";

export default function CreativeNavigation() {
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
    { href: "/", label: "Home" },
    { href: "/why-us", label: "Why Us" },
    { href: "/creative", label: "Creative", highlight: true },
    { href: "/ai-agents", label: "AI Agents", highlight: true },
    { href: "/our-work", label: "Our Work" },
  ];

  const serviceCategories = [
    { title: "Creative & Design", items: ["Social Media", "Branding", "Web Design", "Video Production"] },
    { title: "AI Solutions", items: ["AI Chatbots", "AI Employees", "Automation"] },
    { title: "Growth", items: ["Paid Ads", "SEO", "Email Marketing"] },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-zinc-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-logo-home">
            <motion.img 
              src={greenLogo} 
              alt="OARC Digital logo" 
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
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

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  location === link.href
                    ? "text-[#9ed919]"
                    : link.highlight
                      ? "text-[#9ed919] hover:text-[#8bc717]"
                      : "text-zinc-700 hover:text-zinc-900"
                }`}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#9ed919] transition-all duration-200 ${
                  location === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                data-testid="button-services-dropdown"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServicesMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showServicesMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-[420px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200/80 p-6 z-50"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link 
                                  href="/services"
                                  className="text-sm text-zinc-600 hover:text-[#9ed919] transition-colors"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-zinc-200">
                      <Link 
                        href="/services"
                        className="flex items-center justify-center gap-2 text-sm font-semibold text-[#9ed919] hover:gap-3 transition-all"
                        data-testid="link-all-services"
                      >
                        View all services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#c4ff4d] text-zinc-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#c4ff4d]/20 hover:shadow-xl hover:shadow-[#c4ff4d]/30 transition-all"
                data-testid="button-contact"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-zinc-200/80 mb-4 p-4">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-[#c4ff4d]/10 text-[#9ed919]"
                          : link.highlight
                            ? "text-[#9ed919]"
                            : "text-zinc-700 hover:bg-zinc-100"
                      }`}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 rounded-xl text-base font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
                    data-testid="link-mobile-services"
                  >
                    Services
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-[#c4ff4d] text-zinc-900 py-3 rounded-xl font-semibold shadow-lg">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
