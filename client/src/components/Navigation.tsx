import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <div className="font-display font-bold text-lg md:text-xl lg:text-2xl">
              <span className="text-white">OARC</span>
              <span className="text-[#c4ff4d]"> Digital</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-home">
              Home
            </Link>
            <Link href="#why-us" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-why-us">
              Why Us
            </Link>
            <Link href="#services" className="text-xs xl:text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="link-services">
              Services
            </Link>
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
              className="rounded-full text-[10px] md:text-xs px-3 md:px-5 font-bold bg-[#c4ff4d] text-black hover:bg-[#b5ef3d] border-0" 
              data-testid="button-contact"
            >
              Contact Us
            </Button>
            <button className="lg:hidden p-1.5 rounded-md text-white" data-testid="button-menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
