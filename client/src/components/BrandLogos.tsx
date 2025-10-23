const brands = [
  "Pen Hotels",
  "Andis",
  "Neptune",
  "Corston",
  "UNIQLO",
  "BEYBLADE",
  "Arla",
  "Fiverr",
  "Passenger",
  "Bark",
];

export default function BrandLogos() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-6">
          Brands that trust us
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-fast">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-6 py-2"
              >
                <div className="text-lg md:text-xl font-semibold text-foreground/30 hover:text-foreground/50 transition-colors whitespace-nowrap">
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
