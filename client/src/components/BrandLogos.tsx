const brands = [
  "6sense",
  "Amazon",
  "Booking.com",
  "Colgate Palmolive",
  "CRITEO",
  "Datastacks",
  "Figma",
  "grammarly",
];

export default function BrandLogos() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-10 md:py-12 bg-[#f5f1eb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-foreground/60 mb-8">
          Trusted by 500+ of the world's top brands
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-fast items-center gap-8 md:gap-12">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
              >
                <div className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors whitespace-nowrap">
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
