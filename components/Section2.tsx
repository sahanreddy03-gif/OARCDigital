import Link from "next/link";
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
const greenLogo = "/attached_assets/image_1767660951950.png";

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
              <span className="text-[#65a30d]">Social first</span> partner<br />
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
                <div className="relative bg-black rounded-[1.5rem] overflow-hidden" style={{ aspectRatio: '9/19' }}>
                  {/* Video content */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/phone-video.mp4" type="video/mp4" />
                  </video>
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

      </div>

      {/* Gradient bridge: white → dark, starts mid-section and covers logo strip */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to bottom, transparent, #030305 80%)' }}
      />

      {/* Brands section — sits INSIDE the gradient zone, full-width */}
      <div className="relative z-10 pt-8">
        <div className="text-center mb-6 px-6">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight"
            style={{ color: 'rgba(255,255,255,0.92)' }}
            data-testid="ambitious-brands-heading"
          >
            We grow ambitious brands with{" "}
            <br className="hidden sm:block" />
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>Social, Paid, Creative</span>{" "}
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>and</span>{" "}
            <span style={{ color: 'rgba(255,255,255,0.95)' }}>Influencer</span>
          </h3>
        </div>

        {/* Logo marquee — full-width, no white box */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #030305, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #030305, transparent)' }} />

          <div
            className="flex animate-fast-scroll gap-8 md:gap-12 lg:gap-14 whitespace-nowrap py-5"
            data-testid="ambitious-brands-carousel"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                data-testid={`ambitious-brand-${index}`}
              >
                <brand.icon
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-300 group-hover:scale-110"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  aria-label={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fast-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fast-scroll {
          animation: fast-scroll 15s linear infinite;
        }
        .animate-fast-scroll:hover {
          animation-play-state: paused;
        }
      ` }} />
    </section>
  );
}
