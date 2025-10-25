import { ArrowUpRight } from "lucide-react";
import nikeImg from '@assets/stock_images/nike_brand_swoosh_lo_5627eefc.jpg';
import cokeImg from '@assets/stock_images/coca_cola_brand_logo_35554ad9.jpg';
import appleImg from '@assets/stock_images/apple_products_iphon_1cf97eb6.jpg';
import starbucksImg from '@assets/stock_images/starbucks_coffee_cup_0ea47668.jpg';
import amazonImg from '@assets/stock_images/amazon_delivery_box__7334b4f3.jpg';
import mercedesImg from '@assets/stock_images/luxury_mercedes_car__55e812e6.jpg';

const caseStudies = [
  {
    brand: "Nike",
    category: "Sports & Lifestyle",
    description: "Global Social Campaign",
    metric: "+890K",
    metricLabel: "new followers",
    image: nikeImg,
    gridClass: "col-span-2 row-span-2" // Large - 2x2
  },
  {
    brand: "Apple",
    category: "Technology",
    description: "Product Launch",
    metric: "42M",
    metricLabel: "impressions",
    image: appleImg,
    gridClass: "col-span-1 row-span-1" // Small - 1x1
  },
  {
    brand: "Coca-Cola",
    category: "Beverage",
    description: "Brand Awareness",
    metric: "+520%",
    metricLabel: "engagement",
    image: cokeImg,
    gridClass: "col-span-1 row-span-1" // Small - 1x1
  },
  {
    brand: "Starbucks",
    category: "Food & Beverage",
    description: "Seasonal Push",
    metric: "12M",
    metricLabel: "reach",
    image: starbucksImg,
    gridClass: "col-span-1 row-span-1" // Small - 1x1
  },
  {
    brand: "Mercedes-Benz",
    category: "Automotive",
    description: "Luxury Elevation",
    metric: "+340%",
    metricLabel: "conversions",
    image: mercedesImg,
    gridClass: "col-span-2 row-span-1" // Wide - 2x1
  },
  {
    brand: "Amazon",
    category: "E-Commerce",
    description: "Prime Day",
    metric: "$8.2M",
    metricLabel: "revenue",
    image: amazonImg,
    gridClass: "col-span-1 row-span-1" // Small - 1x1
  }
];

export default function BrandShowcaseSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm uppercase tracking-wider font-bold text-orange-600 mb-3" data-testid="text-showcase-eyebrow">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 mb-4">
            See how Top Brands use OARC Digital
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl">
            From global giants to innovative startups, we deliver measurable results
          </p>
        </div>

        {/* Asymmetric Grid - Superside Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:gap-5 mb-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-900 hover-elevate transition-all duration-500 cursor-pointer ${study.gridClass}`}
              data-testid={`card-case-study-${index}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={study.image}
                  alt={study.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-5 md:p-7 flex flex-col justify-between">
                {/* Top - Category & Arrow */}
                <div className="flex justify-between items-start">
                  <div className="inline-block px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/10">
                    {study.category}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 flex items-center justify-center transform rotate-0 group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Bottom - Brand & Metric */}
                <div>
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                      {study.brand}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 font-medium">
                      {study.description}
                    </p>
                  </div>
                  
                  {/* Metric Badge */}
                  <div className="inline-block bg-[#c4ff4d] text-zinc-900 px-4 py-2 rounded-lg">
                    <div className="text-xl md:text-2xl font-black leading-none">{study.metric}</div>
                    <div className="text-xs font-semibold mt-0.5">{study.metricLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-900 text-white rounded-full font-bold text-base hover-elevate active-elevate-2 transition-all duration-300"
            data-testid="button-view-all-case-studies"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
