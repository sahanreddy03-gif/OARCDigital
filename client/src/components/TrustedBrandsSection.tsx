import { useEffect, useRef } from "react";
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
  SiLoom,
  SiClickup,
  SiBuffer,
  SiCanva,
  SiCloudflare,
  SiContentful,
  SiDatadog,
  SiHotjar,
  SiLinear,
  SiAtlassian,
  SiCoda,
  SiDropbox,
  SiFramer,
  SiMixpanel,
  SiMural,
  SiSentry,
  SiVercel,
  SiSupabase,
  SiStripe,
  SiTwilio,
  SiPostman,
} from "react-icons/si";

const brands = [
  { name: "Linear", icon: SiLinear },
  { name: "Vercel", icon: SiVercel },
  { name: "Supabase", icon: SiSupabase },
  { name: "Framer", icon: SiFramer },
  { name: "ClickUp", icon: SiClickup },
  { name: "Mixpanel", icon: SiMixpanel },
  { name: "Figma", icon: SiFigma },
  { name: "Contentful", icon: SiContentful },
  { name: "Sentry", icon: SiSentry },
  { name: "Buffer", icon: SiBuffer },
  { name: "Notion", icon: SiNotion },
  { name: "Datadog", icon: SiDatadog },
  { name: "Coda", icon: SiCoda },
  { name: "Webflow", icon: SiWebflow },
  { name: "Hotjar", icon: SiHotjar },
  { name: "Stripe", icon: SiStripe },
  { name: "Mural", icon: SiMural },
  { name: "Mailchimp", icon: SiMailchimp },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Canva", icon: SiCanva },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Postman", icon: SiPostman },
  { name: "Twilio", icon: SiTwilio },
  { name: "Zapier", icon: SiZapier },
  { name: "Dropbox", icon: SiDropbox },
  { name: "Airtable", icon: SiAirtable },
  { name: "Atlassian", icon: SiAtlassian },
  { name: "Intercom", icon: SiIntercom },
  { name: "Asana", icon: SiAsana },
  { name: "Miro", icon: SiMiro },
  { name: "Calendly", icon: SiCalendly },
  { name: "Loom", icon: SiLoom },
];

export default function TrustedBrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);
  const contentWidthRef = useRef(0);
  
  // Triple brands for seamless looping
  const tripleBrands = [...brands, ...brands, ...brands];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Calculate width of one set of brands
    const children = scrollContainer.children;
    if (children.length > 0) {
      let singleSetWidth = 0;
      for (let i = 0; i < brands.length; i++) {
        const child = children[i] as HTMLElement;
        singleSetWidth += child.offsetWidth + 40; // 40px gap (gap-10)
      }
      contentWidthRef.current = singleSetWidth;
    }
    
    // Speed: pixels per frame (slower animation)
    const speed = 0.6;
    
    const animate = () => {
      positionRef.current += speed;
      
      // When we've scrolled past one full set, reset seamlessly
      if (positionRef.current >= contentWidthRef.current) {
        positionRef.current = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="relative bg-white py-5 md:py-6 overflow-hidden" 
      data-testid="trusted-brands-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
          {/* Left: Heading - Improved Typography */}
          <div className="flex-shrink-0 mb-3 lg:mb-0 lg:w-[200px]">
            <p 
              className="text-base md:text-lg font-medium text-zinc-500 leading-snug tracking-tight"
              data-testid="trusted-brands-heading"
            >
              Trusted by the world's top brands
            </p>
          </div>

          {/* Right: Logo Marquee - JS Animation */}
          <div className="flex-1 overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling logos - JS powered */}
            <div 
              ref={scrollRef}
              className="flex gap-10 whitespace-nowrap py-1"
              style={{ willChange: 'transform' }}
              data-testid="trusted-brands-carousel"
            >
              {tripleBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="inline-flex items-center justify-center flex-shrink-0 group cursor-pointer"
                  data-testid={`trusted-brand-${index}`}
                >
                  <brand.icon
                    className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-zinc-500 transition-colors duration-300"
                    aria-label={brand.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
