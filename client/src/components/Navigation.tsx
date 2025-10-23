import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center space-x-2 hover-elevate rounded-lg px-2 py-1 -ml-2">
            <div className="font-display font-bold text-xl md:text-2xl">
              <span className="text-foreground">OARC</span>
              <span className="text-primary"> Digital</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-home">
              Home
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-why-us">
              Why Us
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-services">
              Services
            </Link>
            <Link href="#our-work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-our-work">
              Our Work
            </Link>
            <Link href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-resources">
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <Button size="sm" className="rounded-full text-xs md:text-sm px-4 md:px-6" data-testid="button-contact">
              Contact Us
            </Button>
            <button className="md:hidden hover-elevate active-elevate-2 p-2 rounded-md" data-testid="button-menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
