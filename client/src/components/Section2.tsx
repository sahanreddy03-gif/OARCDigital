import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Instagram, TrendingUp, Zap } from "lucide-react";
import GrainOverlay from "./GrainOverlay";
import companyLogo from "@assets/final 2_1762907995368.png";

export default function Section2() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden diagonal-separator-bottom bg-white">
      <GrainOverlay opacity={0.02} />
      
      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left: Large Content Block - Takes 7 columns */}
          <div className="md:col-span-7 space-y-8" data-testid="section2-content">
            {/* Floating Stat Badge */}
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full glow-green-hover">
              <TrendingUp className="w-5 h-5 text-[#00FF9C]" />
              <span className="text-sm font-bold text-zinc-900">Social-First Performance</span>
            </div>

            {/* Massive Headline */}
            <h2 className="space-y-2">
              <span 
                className="block font-bold text-zinc-900 leading-none"
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  letterSpacing: '-0.03em'
                }}
              >
                The results-driven
              </span>
              <span 
                className="block font-bold leading-none"
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #00FF9C 0%, #00D17D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Social First Agency
              </span>
              <span 
                className="block font-bold text-zinc-900 leading-none"
                style={{ 
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  letterSpacing: '-0.03em'
                }}
              >
                you've been looking for
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              We blend creative excellence with performance marketing, mastering the new rules of branding in the social-first era. 
              <span className="font-bold text-zinc-900"> Every post drives revenue.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/social-media-creative-management">
                <Button 
                  size="lg"
                  className="group glass-strong glow-green-hover rounded-xl px-8 py-6 text-base font-bold bg-zinc-900 text-white hover:bg-black transition-all"
                  data-testid="button-explore-social-services"
                >
                  <span className="flex items-center gap-2">
                    Explore Social Services
                    <Zap className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline"
                size="lg"
                className="glass rounded-xl px-8 py-6 text-base font-bold text-zinc-900 border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 transition-all"
                data-testid="button-meet-team"
              >
                Meet The Team →
              </Button>
            </div>
          </div>

          {/* Right: Staggered Visual Cards - Takes 5 columns */}
          <div className="md:col-span-5 relative" data-testid="section2-visual">
            {/* Top Card - Floating Stats */}
            <div className="glass-strong glow-green rounded-2xl p-8 mb-6 hover:-translate-y-2 transition-transform duration-500">
              <Instagram className="w-12 h-12 text-[#00FF9C] mb-4" />
              <div className="text-4xl font-bold text-zinc-900 mb-2">2.4M+</div>
              <div className="text-zinc-600 font-semibold">Social Engagements/Month</div>
            </div>

            {/* Bottom Card - Animated Phone Mockup */}
            <div className="relative glass-strong glow-orange rounded-2xl p-8 ml-8 hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
              <div className="aspect-[9/16] w-full max-w-[200px] mx-auto relative rounded-2xl overflow-hidden">
                {/* Animated Gradient Background */}
                <div 
                  className="absolute inset-0 animate-pulse"
                  style={{
                    background: 'linear-gradient(135deg, #00FF9C 0%, #FF5A00 100%)'
                  }}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6">
                  <img 
                    src={companyLogo} 
                    alt="OARC logo" 
                    className="w-16 h-16 object-contain mb-4"
                  />
                  <p className="text-white font-bold text-center text-sm leading-tight">
                    Mastering the New Rules of Branding
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="text-sm font-bold text-zinc-600">Live on all platforms</div>
              </div>
            </div>

            {/* Floating Accent Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
