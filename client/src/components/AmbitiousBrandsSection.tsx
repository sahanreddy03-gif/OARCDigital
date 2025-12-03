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

export default function AmbitiousBrandsSection() {
  const duplicatedBrands = [...socialCreativeBrands, ...socialCreativeBrands];

  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f0fff4 0%, #e8f5e9 50%, #f0fff4 100%)' 
      }}
      data-testid="ambitious-brands-section"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <h2 
            className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-zinc-900 leading-[1.15] tracking-tight mb-4 md:mb-5"
            data-testid="ambitious-brands-heading"
          >
            We grow ambitious brands with{" "}
            <br className="hidden sm:block" />
            <span className="text-zinc-800">Social, Paid, Creative</span>{" "}
            <span className="text-zinc-600">and</span>{" "}
            <span className="text-zinc-800">Influencer</span>
          </h2>
          
          <p 
            className="text-base md:text-lg text-zinc-500 font-medium tracking-wide uppercase"
            data-testid="ambitious-brands-subheading"
          >
            Brands that trust us
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f0fff4, rgba(240,255,244,0.8), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f0fff4, rgba(240,255,244,0.8), transparent)' }} />
          
          <div 
            className="flex animate-ambitious-scroll gap-10 md:gap-14 lg:gap-16 whitespace-nowrap py-4"
            data-testid="ambitious-brands-carousel"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                data-testid={`ambitious-brand-${index}`}
              >
                <brand.icon
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-zinc-400 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-zinc-700 transition-all duration-300 group-hover:scale-110"
                  aria-label={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ambitious-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ambitious-scroll {
          animation: ambitious-scroll 30s linear infinite;
        }
        
        .animate-ambitious-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
