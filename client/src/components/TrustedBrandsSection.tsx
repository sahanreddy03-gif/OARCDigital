import { 
  SiFigma,
  SiNotion,
  SiWebflow,
  SiMailchimp,
  SiHubspot,
  SiZapier,
  SiAirtable,
  SiIntercom,
  SiAsana,
  SiMiro,
  SiCalendly,
  SiLoom
} from "react-icons/si";

const brands = [
  { name: "Figma", icon: SiFigma },
  { name: "Notion", icon: SiNotion },
  { name: "Webflow", icon: SiWebflow },
  { name: "Mailchimp", icon: SiMailchimp },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Zapier", icon: SiZapier },
  { name: "Airtable", icon: SiAirtable },
  { name: "Intercom", icon: SiIntercom },
  { name: "Asana", icon: SiAsana },
  { name: "Miro", icon: SiMiro },
  { name: "Calendly", icon: SiCalendly },
  { name: "Loom", icon: SiLoom },
];

export default function TrustedBrandsSection() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section 
      className="relative bg-zinc-50 py-6 md:py-8 overflow-hidden" 
      data-testid="trusted-brands-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Left: Heading - Compact */}
          <div className="flex-shrink-0 mb-4 lg:mb-0 lg:w-[240px]">
            <h2 
              className="text-xl md:text-2xl font-semibold text-zinc-800 leading-tight tracking-tight"
              data-testid="trusted-brands-heading"
            >
              Trusted by the world's top brands
            </h2>
          </div>

          {/* Right: Logo Marquee */}
          <div className="flex-1 overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling logos */}
            <div 
              className="flex animate-trusted-scroll gap-6 md:gap-8 whitespace-nowrap py-2"
              data-testid="trusted-brands-carousel"
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                  data-testid={`trusted-brand-${index}`}
                >
                  {brand.icon ? (
                    <brand.icon
                      className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-zinc-600 transition-all duration-300"
                      aria-label={brand.name}
                    />
                  ) : (
                    <span 
                      className="text-sm md:text-base font-medium text-zinc-400 opacity-70 group-hover:opacity-100 group-hover:text-zinc-600 transition-all duration-300 whitespace-nowrap"
                    >
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trusted-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .animate-trusted-scroll {
          animation: trusted-scroll 15s linear infinite;
        }
        
        .animate-trusted-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
