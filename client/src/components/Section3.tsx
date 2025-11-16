import { 
  SiAmazon, 
  SiReddit, 
  SiShopify, 
  SiMeta, 
  SiSalesforce, 
  SiCisco,
  SiCoinbase,
  SiPuma,
  SiToyota,
  SiDropbox,
  SiEbay
} from "react-icons/si";
import GrainOverlay from "./GrainOverlay";

const brands = [
  { name: "Amazon", icon: SiAmazon },
  { name: "Reddit", icon: SiReddit },
  { name: "Shopify", icon: SiShopify },
  { name: "Meta", icon: SiMeta },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Cisco", icon: SiCisco },
  { name: "Coinbase", icon: SiCoinbase },
  { name: "PUMA", icon: SiPuma },
  { name: "Toyota", icon: SiToyota },
  { name: "Dropbox", icon: SiDropbox },
  { name: "eBay", icon: SiEbay },
];

export default function Section3() {
  // Triple the brands for seamless marquee
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 diagonal-separator-both" data-testid="section-3">
      <GrainOverlay opacity={0.03} />
      
      <div className="relative container mx-auto px-6 md:px-12">
        {/* Centered Headline with Glow Effect */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-zinc-600 uppercase tracking-wider">Trusted Globally</span>
          </div>
          
          <h2 
            className="font-bold text-zinc-900 max-w-4xl mx-auto"
            style={{ 
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: '1.2'
            }}
            data-testid="section-3-heading"
          >
            We grow ambitious brands with <span className="text-glow-green">Social</span>, <span className="text-glow-orange">Paid</span>, Creative and Influencer
          </h2>
        </div>

        {/* Glowing Marquee Rail */}
        <div className="relative">
          {/* Glow Effect Behind Marquee */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent blur-xl" />
          
          {/* Marquee Container */}
          <div className="relative glass-strong rounded-2xl p-8 overflow-hidden" data-testid="brand-carousel">
            {/* Marquee Track */}
            <div className="flex gap-12 md:gap-16 lg:gap-20 marquee-slow whitespace-nowrap">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center flex-shrink-0 magnetic group"
                  data-testid={`brand-logo-${index}`}
                >
                  {brand.icon && (
                    <brand.icon
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-zinc-400 group-hover:text-zinc-900 transition-all duration-300"
                      aria-label={brand.name}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Edge Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-100 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-100 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
