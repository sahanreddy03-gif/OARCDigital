import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { getPreviewServices, servicesCatalog } from '@/config/servicesConfig';

export default function Footer() {
  // Show first 5 items from each category for footer
  const aiCreativePreview = getPreviewServices('aiCreative').slice(0, 5);
  const aiEmployeesPreview = getPreviewServices('aiEmployees').slice(0, 5);
  const revenuePreview = getPreviewServices('revenue').slice(0, 5);

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-4">
              <span className="text-background">OARC</span>
              <span className="text-primary"> Digital</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Where Creativity Meets Revenue
            </p>
          </div>

          {/* AI Creative Services */}
          <div>
            <h4 className="font-semibold mb-4">{servicesCatalog.aiCreative.title}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {aiCreativePreview.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.route || service.slug}`} className="hover:text-background transition-colors" data-testid={`link-footer-${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Employees */}
          <div>
            <h4 className="font-semibold mb-4">{servicesCatalog.aiEmployees.title}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {aiEmployeesPreview.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.route || service.slug}`} className="hover:text-background transition-colors" data-testid={`link-footer-${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue Automation */}
          <div>
            <h4 className="font-semibold mb-4">{servicesCatalog.revenue.title}</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {revenuePreview.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.route || service.slug}`} className="hover:text-background transition-colors" data-testid={`link-footer-${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-background transition-colors" data-testid="link-footer-why-us">Why Us</Link></li>
              <li><Link href="/roadmap" className="hover:text-background transition-colors" data-testid="link-footer-roadmap">Road Map 2026</Link></li>
              <li><Link href="#our-work" className="hover:text-background transition-colors" data-testid="link-footer-our-work">Our Work</Link></li>
              <li><Link href="#resources" className="hover:text-background transition-colors" data-testid="link-footer-resources">Resources</Link></li>
              <li><Link href="#contact" className="hover:text-background transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              <li>
                <Link href="/services" className="hover:text-background transition-colors flex items-center gap-1 text-primary font-semibold" data-testid="link-footer-browse-all">
                  Browse all services
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/40">
            © 2025 OARC Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
