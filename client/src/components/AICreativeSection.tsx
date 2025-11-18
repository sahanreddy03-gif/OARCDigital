import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Import all service images
import { serviceImages } from '@/assets/serviceImages';

const services = [
  {
    title: "Social media creative",
    subtitle: "Engage your audience",
    image: serviceImages.socialMedia,
    category: "Social & Digital"
  },
  {
    title: "Concept creation",
    subtitle: "Big ideas, bigger impact",
    image: serviceImages.concept,
    category: "Creative Strategy"
  },
  {
    title: "Print design",
    subtitle: "Tangible brand experiences",
    image: serviceImages.printDesign,
    category: "Print & Collateral"
  },
  {
    title: "Packaging & merchandise design",
    subtitle: "Products that stand out",
    image: serviceImages.packaging,
    category: "Product Design"
  },
  {
    title: "Video production",
    subtitle: "Stories in motion",
    image: serviceImages.video,
    category: "Video & Animation"
  },
  {
    title: "Motion design",
    subtitle: "Animated visual storytelling",
    image: serviceImages.motion,
    category: "Video & Animation"
  },
  {
    title: "Presentation design",
    subtitle: "Persuasive visual narratives",
    image: serviceImages.presentation,
    category: "Business Content"
  },
  {
    title: "Illustration design",
    subtitle: "Custom visual storytelling",
    image: serviceImages.illustration,
    category: "Illustration & Art"
  },
  {
    title: "Web design",
    subtitle: "Digital experiences that deliver",
    image: serviceImages.webDesign,
    category: "Web & Digital"
  },
  {
    title: "Design Systems",
    subtitle: "Scalable brand frameworks",
    image: serviceImages.designSystems,
    badge: "NEW",
    category: "Systems & Ops"
  },
  {
    title: "Immersive design",
    subtitle: "3D & experiential design",
    image: serviceImages.immersive,
    category: "3D & Immersive"
  },
  {
    title: "Email creation",
    subtitle: "Campaigns that get opened",
    image: serviceImages.email,
    category: "Email Marketing"
  },
  {
    title: "Branding services",
    subtitle: "Identities that inspire",
    image: serviceImages.branding,
    category: "Brand Strategy"
  },
  {
    title: "eBooks & report design",
    subtitle: "Content that educates",
    image: serviceImages.ebook,
    category: "Content Design"
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
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  
  const [leftScroll, setLeftScroll] = useState(0);
  const [rightScroll, setRightScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // Performance optimization: Use refs to avoid rebinding listeners on every scroll update
  const leftScrollRef = useRef(0);
  const rightScrollRef = useRef(0);
  const dragStartRef = useRef({ y: 0, leftScroll: 0, rightScroll: 0 });
  const autoScrollRef = useRef<number | null>(null);

  // Keep refs in sync with state
  useEffect(() => {
    leftScrollRef.current = leftScroll;
    rightScrollRef.current = rightScroll;
  }, [leftScroll, rightScroll]);

  // Auto-scroll logic for MOBILE ONLY
  useEffect(() => {
    // Only run auto-scroll on mobile/tablet, not desktop
    if (!isAutoScrolling || isDesktop) return;

    const animate = () => {
      setLeftScroll(prev => prev + 0.5); // Scroll down
      setRightScroll(prev => prev - 0.5); // Scroll up (opposite)
      autoScrollRef.current = requestAnimationFrame(animate);
    };

    autoScrollRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, isDesktop]);

  // Manual drag controls for MOBILE ONLY (scoped to mobile container)
  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container || isDesktop) return;

    const handlePointerDown = (e: PointerEvent) => {
      setIsDragging(true);
      setIsAutoScrolling(false);
      // Read from refs to get current scroll values
      dragStartRef.current = { 
        y: e.clientY, 
        leftScroll: leftScrollRef.current,
        rightScroll: rightScrollRef.current
      };
      container.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const delta = e.clientY - dragStartRef.current.y;
      setLeftScroll(dragStartRef.current.leftScroll - delta);
      setRightScroll(dragStartRef.current.rightScroll + delta);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging) {
        setIsDragging(false);
        container.releasePointerCapture(e.pointerId);
        setTimeout(() => setIsAutoScrolling(true), 2000);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, isDesktop]);

  // Desktop horizontal carousel
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicatedServices = isDesktop ? [...services, ...services, ...services] : [];
  
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isDesktop) return;

    let isDraggingDesktop = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDraggingDesktop = true;
      startPos = e.pageX;
      animationID = requestAnimationFrame(animation);
      track.classList.add('dragging');
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDraggingDesktop) {
        const currentPosition = e.pageX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    };

    const handlePointerUp = () => {
      isDraggingDesktop = false;
      cancelAnimationFrame(animationID);
      prevTranslate = currentTranslate;
      track.classList.remove('dragging');
      track.style.transform = '';
    };

    function animation() {
      if (isDraggingDesktop) {
        setSliderPosition();
        requestAnimationFrame(animation);
      }
    }

    function setSliderPosition() {
      if (track) track.style.transform = `translateX(${currentTranslate}px)`;
    }

    track.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);

    return () => {
      track.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
      cancelAnimationFrame(animationID);
      prevTranslate = 0;
      currentTranslate = 0;
      track.style.transform = '';
      track.classList.remove('dragging');
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

      {/* MOBILE/TABLET: Dual-Column Opposite Scroll */}
      {!isDesktop && (
        <div ref={mobileContainerRef} className="relative h-[600px] overflow-hidden" style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
          <div className="flex gap-4 h-full px-6 max-w-2xl mx-auto">
            {/* LEFT COLUMN: Scrolls DOWN */}
            <div className="flex-1 relative" style={{ height: '200%' }}>
              <div 
                ref={leftColumnRef}
                className="space-y-4"
                style={{ 
                  transform: `translateY(${-leftScroll % (services.length * 420)}px)`,
                  willChange: 'transform',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              >
                {[...services, ...services].map((service, index) => (
                  <div key={`left-${index}`} className="group">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {service.badge && (
                        <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">
                          {service.badge}
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-heading text-base font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Scrolls UP */}
            <div className="flex-1 relative" style={{ height: '200%' }}>
              <div 
                ref={rightColumnRef}
                className="space-y-4"
                style={{ 
                  transform: `translateY(${-rightScroll % (services.length * 420)}px)`,
                  willChange: 'transform',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              >
                {[...services, ...services].map((service, index) => (
                  <div key={`right-${index}`} className="group">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {service.badge && (
                        <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">
                          {service.badge}
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-heading text-base font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP: Horizontal Auto-Scroll Carousel */}
      {isDesktop && (
        <div className="relative w-full">
          <div className="carousel-track" data-testid="carousel-track" ref={trackRef}>
            {duplicatedServices.map((service, index) => (
              <div
                key={index}
                className="carousel-card group"
                data-testid={`service-card-${index}`}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`carousel-image-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {service.badge && (
                    <div className="absolute top-4 right-4 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full z-10">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interaction hint for mobile */}
      {!isDesktop && (
        <div className="text-center mt-8">
          <p className="text-sm text-white/70 font-medium">
            Drag to explore • Auto-scrolls
          </p>
        </div>
      )}
    </section>
  );
}
