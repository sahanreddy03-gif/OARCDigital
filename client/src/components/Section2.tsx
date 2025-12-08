import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { 
  SiTiktok, 
  SiPinterest, 
  SiDiscord, 
  SiTwitch, 
  SiLinkedin, 
  SiReddit, 
  SiSnapchat, 
  SiYoutube, 
  SiSlack, 
  SiFigma, 
  SiCanva, 
  SiSquarespace,
  SiAdobe,
  SiNotion,
  SiBehance,
  SiDribbble
} from "react-icons/si";
import companyLogo from "@assets/IMG_8813_(1)_1764796694787.png";

const socialCreativeBrands = [
  { name: "TikTok", icon: SiTiktok },
  { name: "YouTube", icon: SiYoutube },
  { name: "Pinterest", icon: SiPinterest },
  { name: "LinkedIn", icon: SiLinkedin },
  { name: "Discord", icon: SiDiscord },
  { name: "Twitch", icon: SiTwitch },
  { name: "Reddit", icon: SiReddit },
  { name: "Snapchat", icon: SiSnapchat },
  { name: "Slack", icon: SiSlack },
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
  { name: "Squarespace", icon: SiSquarespace },
  { name: "Adobe", icon: SiAdobe },
  { name: "Notion", icon: SiNotion },
  { name: "Behance", icon: SiBehance },
  { name: "Dribbble", icon: SiDribbble },
];

export default function Section2() {
  const duplicatedBrands = [...socialCreativeBrands, ...socialCreativeBrands];

  return (
    <section 
      className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-white"
      data-testid="section-phone-brands"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-[#23AACA]/30" />
      <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-[#23AACA]/20" />
      <div className="absolute top-40 right-[15%] w-4 h-1 bg-[#23AACA]/40 rotate-45" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Main content row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Small label */}
            <p 
              className="text-sm font-medium text-zinc-500 mb-4 tracking-wide"
              data-testid="text-company-label"
            >
              OARC Digital
            </p>
            
            {/* Main headline */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.1] mb-6"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              data-testid="text-social-first"
            >
              The revenue-driven<br />
              <span className="text-[#23AACA]">Social first</span> partner<br />
              you've been looking for
            </h2>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link href="/services">
                <Button 
                  className="bg-black hover:bg-zinc-800 text-white rounded-full px-6 py-5 h-auto text-sm font-semibold flex items-center gap-2"
                  data-testid="button-browse-services"
                >
                  Browse Our Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              <Link href="/why-us">
                <span 
                  className="text-sm font-medium text-zinc-700 hover:text-black flex items-center gap-1 transition-colors cursor-pointer"
                  data-testid="link-meet-team"
                >
                  Meet The Team
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Smaller Tilted Phone Mockup */}
          <div className="relative flex-shrink-0">
            {/* Phone container with tilt - REDUCED SIZE */}
            <div 
              className="relative w-[140px] md:w-[160px] lg:w-[180px]"
              style={{ 
                transform: 'rotate(6deg)',
                transformOrigin: 'center center'
              }}
            >
              {/* Phone frame */}
              <div className="relative bg-zinc-900 rounded-[2rem] p-1.5 shadow-xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-900 rounded-b-xl z-20" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[1.5rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Status bar */}
                    <div className="h-5 bg-zinc-100 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-zinc-300 rounded-full" />
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-2 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-white">
                      {/* Sample content card */}
                      <div className="w-full bg-white rounded-lg shadow-md p-2 border border-zinc-100">
                        {/* Header with logo */}
                        <div className="flex items-center gap-1.5 mb-2">
                          <img 
                            src={companyLogo} 
                            alt="OARC Digital" 
                            className="w-5 h-5 object-contain"
                          />
                          <div>
                            <p className="text-[7px] font-bold text-zinc-800">OARC Digital</p>
                            <p className="text-[5px] text-zinc-400">Sponsored</p>
                          </div>
                        </div>
                        
                        {/* Sample image placeholder */}
                        <div className="w-full aspect-square rounded-md bg-gradient-to-br from-[#23AACA] via-[#c4ff4d] to-[#ff914d] mb-2 flex items-center justify-center">
                          <span className="text-white text-[6px] font-bold text-center px-1">
                            Revenue Driven
                          </span>
                        </div>
                        
                        {/* Engagement row */}
                        <div className="flex items-center gap-2 text-zinc-400">
                          <div className="flex items-center gap-0.5">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="text-[5px]">2.4k</span>
                          </div>
                          <span className="text-[5px]">128 comments</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom navigation */}
                    <div className="h-8 bg-white border-t border-zinc-100 flex items-center justify-around px-3">
                      <div className="w-3 h-3 rounded-full bg-zinc-200" />
                      <div className="w-3 h-3 rounded-full bg-zinc-200" />
                      <div className="w-3 h-3 rounded-full bg-[#23AACA]" />
                      <div className="w-3 h-3 rounded-full bg-zinc-200" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements around phone */}
              <div className="absolute -top-3 -right-3">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 10 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="absolute -bottom-3 -left-3">
                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15 Q15 20 25 15" stroke="#23AACA" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom: Brands Section */}
        <div className="text-center">
          <h3 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-[1.15] tracking-tight mb-3"
            data-testid="ambitious-brands-heading"
          >
            We grow ambitious brands with{" "}
            <br className="hidden sm:block" />
            <span className="text-zinc-800">Social, Paid, Creative</span>{" "}
            <span className="text-zinc-500">and</span>{" "}
            <span className="text-zinc-800">Influencer</span>
          </h3>
          
          <p 
            className="text-sm md:text-base text-zinc-500 font-medium tracking-wide uppercase mb-8"
            data-testid="ambitious-brands-subheading"
          >
            Brands that trust us
          </p>
        </div>

        {/* Brand logos carousel - faster animation */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
          
          <div 
            className="flex animate-fast-scroll gap-8 md:gap-12 lg:gap-14 whitespace-nowrap py-4"
            data-testid="ambitious-brands-carousel"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                data-testid={`ambitious-brand-${index}`}
              >
                <brand.icon
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-zinc-400 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-zinc-700 transition-all duration-300 group-hover:scale-110"
                  aria-label={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fast-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-fast-scroll {
          animation: fast-scroll 15s linear infinite;
        }
        
        .animate-fast-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
