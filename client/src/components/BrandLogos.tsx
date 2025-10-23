const brands = [
  "TechCorp",
  "InnovateLabs",
  "FutureVentures",
  "GlobalBrand",
  "NextGen Solutions",
  "CreativeCo",
  "MarketLeaders",
  "VisionTech",
];

export default function BrandLogos() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm uppercase tracking-wide font-semibold text-muted-foreground mb-8">
          Trusted by Leading Brands
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-fast">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 py-4"
              >
                <div className="text-2xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors whitespace-nowrap">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
