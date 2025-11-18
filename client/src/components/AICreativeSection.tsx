import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useRef, useEffect } from 'react';
import { serviceImages } from '@/assets/serviceImages';

const services = [
  {
    title: "Ad creative",
    subtitle: "Eye-catching designs that perform",
    image: serviceImages.adCreative,
    category: "Design & Static Creative"
  },
  {
    title: "Social media creative",
    subtitle: "Engaging assets for all platforms",
    image: serviceImages.socialMedia,
    category: "Design & Static Creative"
  },
  {
    title: "Presentation design",
    subtitle: "Captivating slides that tell your story",
    image: serviceImages.presentation,
    category: "Design & Static Creative"
  },
  {
    title: "Illustration design",
    subtitle: "Visual storytelling for your brand",
    image: serviceImages.illustration,
    category: "Design & Static Creative"
  },
  {
    title: "Branding services",
    subtitle: "Expertise & custom design services",
    image: serviceImages.branding,
    category: "Design & Static Creative"
  },
  {
    title: "eBooks & report design",
    subtitle: "Your digital content supercharged",
    image: serviceImages.ebook,
    category: "Design & Static Creative"
  },
  {
    title: "Concept creation",
    subtitle: "Big ideas crafted for maximum impact",
    image: serviceImages.concept,
    category: "Design & Static Creative"
  },
  {
    title: "Print design",
    subtitle: "Tangible designs that leave a lasting impression",
    image: serviceImages.printDesign,
    category: "Design & Static Creative"
  },
  {
    title: "Packaging & merchandise design",
    subtitle: "Bring your brand to life",
    image: serviceImages.packaging,
    category: "Design & Static Creative"
  },
  {
    title: "Video production",
    subtitle: "Effortless video production at scale",
    image: serviceImages.video,
    category: "Motion & Video"
  },
  {
    title: "Motion design",
    subtitle: "For websites, ads, and presentations",
    image: serviceImages.motion,
    category: "Motion & Video"
  },
  {
    title: "Immersive design",
    subtitle: "Innovative solutions for 3D/AR design services",
    image: serviceImages.immersive,
    category: "Motion & Video"
  },
  {
    title: "Email creation",
    subtitle: "Click-worthy emails that drive engagement",
    image: serviceImages.email,
    category: "Digital & Web"
  },
  {
    title: "Web design",
    subtitle: "Stunning websites and landing pages built to engage",
    image: serviceImages.webDesign,
    category: "Digital & Web"
  },
  {
    title: "Design Systems",
    subtitle: "Robust design systems that drive visual consistency",
    image: serviceImages.designSystems,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "Product Design",
    subtitle: "Engaging & intuitive experiences",
    image: serviceImages.productDesign,
    category: "Digital & Web",
    badge: "NEW"
  },
  {
    title: "AI-enhanced creative",
    subtitle: "Human brilliance powered by AI",
    image: serviceImages.aiEnhanced,
    category: "AI-Powered"
  },
  {
    title: "AI consulting",
    subtitle: "Maximize AI with tailored strategies",
    image: serviceImages.aiConsulting,
    category: "AI-Powered"
  },
];

export default function AICreativeSection() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  // Desktop: horizontal carousel with auto-scroll
  const trackRef = useSmoothCarouselDrag({
    enableAutoScroll: true,
    dragMultiplier: 1.2,
    momentumDamping: 0.95
  });

  // Mobile: dual column refs for independent drag
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isDraggingLeftRef = useRef(false);
  const isDraggingRightRef = useRef(false);
  const startYLeftRef = useRef(0);
  const startYRightRef = useRef(0);
  const scrollTopLeftRef = useRef(0);
  const scrollTopRightRef = useRef(0);
  const animationIdRef = useRef<number>();

  // Desktop: triple services for seamless horizontal looping
  const duplicatedServices = [...services, ...services, ...services];

  // Mobile: split services into two halves and double for infinite scroll
  const leftColumnServices = [...services.slice(0, 9), ...services.slice(0, 9)];
  const rightColumnServices = [...services.slice(9), ...services.slice(9)];

  // Mobile: CSS animation for vertical infinite scroll
  useEffect(() => {
    if (isDesktop) {
      // Clear any mobile-specific transforms
      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = '';
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = '';
      }
      return;
    }

    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    if (!leftColumn || !rightColumn) return;

    const leftHeight = leftColumn.scrollHeight / 2;
    const rightHeight = rightColumn.scrollHeight / 2;
    
    let leftScrollPosition = 0;  // Start at 0 for downward scroll  
    let rightScrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      // Left column: downward scroll (container drifts down from -leftHeight to 0)
      if (!isDraggingLeftRef.current) {
        leftScrollPosition += scrollSpeed;
        // Normalize with double-modulo to handle negative values
        const normalizedLeft = ((leftScrollPosition % leftHeight) + leftHeight) % leftHeight;
        leftColumn.style.transform = `translateY(${normalizedLeft - leftHeight}px)`;
      }

      // Right column: upward scroll (container moves up - content flows upward)
      if (!isDraggingRightRef.current) {
        rightScrollPosition += scrollSpeed;
        // Normalize with double-modulo to handle negative values
        const normalizedRight = ((rightScrollPosition % rightHeight) + rightHeight) % rightHeight;
        rightColumn.style.transform = `translateY(-${normalizedRight}px)`;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    // Mobile drag handlers for left column
    const handleLeftPointerDown = (e: PointerEvent) => {
      isDraggingLeftRef.current = true;
      startYLeftRef.current = e.clientY;
      scrollTopLeftRef.current = leftScrollPosition;
      leftColumn.style.cursor = 'grabbing';
    };

    const handleLeftPointerMove = (e: PointerEvent) => {
      if (!isDraggingLeftRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYLeftRef.current;
      const currentPosition = scrollTopLeftRef.current + deltaY;
      // Apply modulo-based wrap for seamless dragging without jumps
      // Ensure positive modulo for negative values
      const normalizedPosition = ((currentPosition % leftHeight) + leftHeight) % leftHeight;
      leftColumn.style.transform = `translateY(${normalizedPosition - leftHeight}px)`;
    };

    const handleLeftPointerUp = (e: PointerEvent) => {
      if (isDraggingLeftRef.current) {
        const deltaY = e.clientY - startYLeftRef.current;
        const rawPosition = scrollTopLeftRef.current + deltaY;
        // Normalize to keep values bounded
        leftScrollPosition = ((rawPosition % leftHeight) + leftHeight) % leftHeight;
      }
      isDraggingLeftRef.current = false;
      leftColumn.style.cursor = 'grab';
    };

    // Mobile drag handlers for right column
    const handleRightPointerDown = (e: PointerEvent) => {
      isDraggingRightRef.current = true;
      startYRightRef.current = e.clientY;
      scrollTopRightRef.current = rightScrollPosition;
      rightColumn.style.cursor = 'grabbing';
    };

    const handleRightPointerMove = (e: PointerEvent) => {
      if (!isDraggingRightRef.current) return;
      e.preventDefault();
      const deltaY = e.clientY - startYRightRef.current;
      const currentPosition = scrollTopRightRef.current - deltaY;
      // Apply modulo-based wrap for seamless dragging
      const normalizedPosition = ((currentPosition % rightHeight) + rightHeight) % rightHeight;
      rightColumn.style.transform = `translateY(-${normalizedPosition}px)`;
    };

    const handleRightPointerUp = (e: PointerEvent) => {
      if (isDraggingRightRef.current) {
        const deltaY = e.clientY - startYRightRef.current;
        const rawPosition = scrollTopRightRef.current - deltaY;
        // Normalize to keep values bounded and handle negatives
        rightScrollPosition = ((rawPosition % rightHeight) + rightHeight) % rightHeight;
      }
      isDraggingRightRef.current = false;
      rightColumn.style.cursor = 'grab';
    };

    // Add event listeners
    leftColumn.addEventListener('pointerdown', handleLeftPointerDown);
    document.addEventListener('pointermove', handleLeftPointerMove);
    document.addEventListener('pointerup', handleLeftPointerUp);
    document.addEventListener('pointercancel', handleLeftPointerUp);

    rightColumn.addEventListener('pointerdown', handleRightPointerDown);
    document.addEventListener('pointermove', handleRightPointerMove);
    document.addEventListener('pointerup', handleRightPointerUp);
    document.addEventListener('pointercancel', handleRightPointerUp);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      leftColumn.removeEventListener('pointerdown', handleLeftPointerDown);
      document.removeEventListener('pointermove', handleLeftPointerMove);
      document.removeEventListener('pointerup', handleLeftPointerUp);
      document.removeEventListener('pointercancel', handleLeftPointerUp);

      rightColumn.removeEventListener('pointerdown', handleRightPointerDown);
      document.removeEventListener('pointermove', handleRightPointerMove);
      document.removeEventListener('pointerup', handleRightPointerUp);
      document.removeEventListener('pointercancel', handleRightPointerUp);

      // Reset state
      isDraggingLeftRef.current = false;
      isDraggingRightRef.current = false;
      leftColumn.style.transform = '';
      leftColumn.style.cursor = '';
      rightColumn.style.transform = '';
      rightColumn.style.cursor = '';
    };
  }, [isDesktop]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" data-testid="section-ai-creative">
      {/* Black/Orange Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-orange-950/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-orange-900/35"></div>
      
      {/* Warm orange glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(251,146,60,0.25),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(234,88,12,0.20),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,0,0,0.7),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(220,38,38,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 to-transparent"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-12 md:mb-16">
        {/* Section Header - Elite Typography */}
        <div className="text-center">
          <h2 className="font-heading font-bold text-white mb-3" data-testid="text-ai-creative-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Every type of creative work
          </h2>
          <p className="font-heading font-bold text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            you'll ever need
            <span className="italic" style={{ color: '#c4ff4d' }}> and more</span>
          </p>
        </div>
      </div>

      {/* Desktop: Horizontal Auto-Scrolling Carousel */}
      {isDesktop && (
        <div className="relative w-full">
          <div className="flex gap-4 md:gap-6 lg:gap-8 cursor-grab active:cursor-grabbing" data-testid="carousel-track" ref={trackRef} style={{ willChange: 'transform' }}>
            {duplicatedServices.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] group"
                data-testid={`service-card-${index}`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`carousel-image-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {service.badge && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full z-10">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="font-heading text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile: Dual-Column Opposite Direction Infinite Scroll */}
      {!isDesktop && (
        <div className="relative flex gap-3 px-4 h-[600px] overflow-hidden">
          {/* Left Column - Top to Bottom */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={leftColumnRef} 
              className="flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
            >
              {leftColumnServices.map((service, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`service-card-left-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">
                        {service.badge}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bottom to Top */}
          <div className="flex-1 relative h-full overflow-hidden">
            <div 
              ref={rightColumnRef} 
              className="flex flex-col gap-3 cursor-grab active:cursor-grabbing" 
              style={{ willChange: 'transform' }}
            >
              {rightColumnServices.map((service, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 group"
                  data-testid={`service-card-right-${index}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">
                        {service.badge}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
