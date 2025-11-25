import { useEffect, useRef, useState } from "react";
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
  { name: "Uniqlo", icon: null },
  { name: "easyJet", icon: null },
  { name: "Premier Inn", icon: null },
  { name: "NaturalCare", icon: null },
  { name: "Deliveroo", icon: null },
  { name: "LVMH", icon: null },
  { name: "Pfizer", icon: null },
];

export default function Section3() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Triple the brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20" data-testid="section-3">
      <div className="container mx-auto px-4">
        {/* Heading - animates from center when scrolling */}
        <h2
          ref={headingRef}
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-5 lg:mb-6 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[-50%]"
          }`}
          data-testid="section-3-heading"
        >
          We grow ambitious brands with Social, Paid, Creative and Influencer
        </h2>

        {/* Brands that trust us subheading */}
        <p
          className="text-center text-sm md:text-base font-semibold text-gray-500 mb-6 md:mb-7 lg:mb-8"
          data-testid="brands-subheading"
        >
          Brands that trust us
        </p>

        {/* Brand logo carousel - slides right to left */}
        <div className="w-full overflow-hidden" data-testid="brand-carousel">
          <div className="flex animate-scroll-reverse gap-8 md:gap-12 lg:gap-16 whitespace-nowrap">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center flex-shrink-0"
                data-testid={`brand-logo-${index}`}
              >
                {brand.icon ? (
                  <brand.icon
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label={brand.name}
                  />
                ) : (
                  <div className="flex items-center justify-center px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 bg-gray-100 rounded-lg min-w-[120px] md:min-w-[140px] lg:min-w-[160px]">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700">
                      {brand.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
