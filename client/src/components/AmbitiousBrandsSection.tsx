import { 
  SiSpotify,
  SiSlack, 
  SiNotion,
  SiZoom,
  SiDropbox,
  SiStripe,
  SiShopify,
  SiHubspot,
  SiAsana,
  SiAirtable,
  SiLinear,
  SiIntercom,
  SiMongodb,
  SiVercel,
  SiGithub,
  SiFigma
} from "react-icons/si";

const techBrands = [
  { name: "Spotify", icon: SiSpotify },
  { name: "Slack", icon: SiSlack },
  { name: "Notion", icon: SiNotion },
  { name: "Zoom", icon: SiZoom },
  { name: "Dropbox", icon: SiDropbox },
  { name: "Stripe", icon: SiStripe },
  { name: "Shopify", icon: SiShopify },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Asana", icon: SiAsana },
  { name: "Airtable", icon: SiAirtable },
  { name: "Linear", icon: SiLinear },
  { name: "Intercom", icon: SiIntercom },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];

export default function AmbitiousBrandsSection() {
  const duplicatedBrands = [...techBrands, ...techBrands];

  return (
    <section 
      className="relative py-14 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50"
      data-testid="ambitious-brands-section"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c4ff4d]/3 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 md:mb-10">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight tracking-tight mb-3"
            data-testid="ambitious-brands-heading"
          >
            We power ambitious tech brands with{" "}
            <br className="hidden sm:block" />
            <span className="text-zinc-700">AI, Automation</span>{" "}
            <span className="text-zinc-500">and</span>{" "}
            <span className="text-zinc-700">Creative</span>
          </h2>
          
          <p 
            className="text-sm md:text-base text-zinc-400 font-medium tracking-wide uppercase"
            data-testid="ambitious-brands-subheading"
          >
            Trusted by industry leaders
          </p>
        </div>

        {/* Brand Carousel */}
        <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm py-6 md:py-8">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex animate-tech-scroll gap-10 md:gap-14 whitespace-nowrap"
            data-testid="ambitious-brands-carousel"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                data-testid={`ambitious-brand-${index}`}
              >
                <brand.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-zinc-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-zinc-600 transition-all duration-300 group-hover:scale-110"
                  aria-label={brand.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tech-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-tech-scroll {
          animation: tech-scroll 25s linear infinite;
        }
        
        .animate-tech-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
