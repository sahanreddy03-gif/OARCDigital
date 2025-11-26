import { 
  SiAmazon, 
  SiShopify, 
  SiMeta, 
  SiSalesforce,
  SiSpotify,
  SiDropbox,
  SiRevolut,
  SiKlarna,
  SiWise,
  SiDeliveroo,
  SiTypeform
} from "react-icons/si";

const brands = [
  { name: "Amazon", icon: SiAmazon },
  { name: "Spotify", icon: SiSpotify },
  { name: "Shopify", icon: SiShopify },
  { name: "Meta", icon: SiMeta },
  { name: "Revolut", icon: SiRevolut },
  { name: "Klarna", icon: SiKlarna },
  { name: "Wise", icon: SiWise },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Deliveroo", icon: SiDeliveroo },
  { name: "Typeform", icon: SiTypeform },
  { name: "Dropbox", icon: SiDropbox },
  { name: "Bolt", icon: null },
  { name: "Criteo", icon: null },
  { name: "Pipedrive", icon: null },
  { name: "Deezer", icon: null },
  { name: "Delivery Hero", icon: null },
];

export default function TrustedBrandsSection() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section 
      className="relative bg-white py-8 md:py-10 lg:py-12 overflow-hidden" 
      data-testid="trusted-brands-section"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Heading */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-[280px] xl:w-[320px]">
            <h2 
              className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-zinc-900 leading-tight tracking-tight"
              data-testid="trusted-brands-heading"
            >
              Trusted by 500+{" "}
              <span className="block">of the world's</span>
              <span className="block">top brands</span>
            </h2>
          </div>

          {/* Right: Logo Marquee */}
          <div className="flex-1 overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling logos */}
            <div 
              className="flex animate-trusted-scroll gap-8 md:gap-10 lg:gap-12 whitespace-nowrap"
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
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-gray-400 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-gray-700 transition-all duration-300"
                      aria-label={brand.name}
                    />
                  ) : (
                    <span 
                      className="text-base md:text-lg font-semibold text-gray-400 opacity-60 group-hover:opacity-100 group-hover:text-gray-700 transition-all duration-300 whitespace-nowrap"
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-trusted-scroll {
          animation: trusted-scroll 25s linear infinite;
        }
        
        .animate-trusted-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
