import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-display font-bold text-2xl mb-4">
              <span className="text-background">OARC</span>
              <span className="text-primary"> Digital</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Where Creativity Meets Revenue
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link href="/services/ai-creative" className="hover:text-background transition-colors">AI Creative</Link></li>
              <li><Link href="/services/ai-employees" className="hover:text-background transition-colors">AI Employees</Link></li>
              <li><Link href="/services/revenue-automation" className="hover:text-background transition-colors">Revenue Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link href="/" className="hover:text-background transition-colors">Home</Link></li>
              <li><Link href="#why-us" className="hover:text-background transition-colors">Why Us</Link></li>
              <li><Link href="#our-work" className="hover:text-background transition-colors">Our Work</Link></li>
              <li><Link href="#resources" className="hover:text-background transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookie Policy</a></li>
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
