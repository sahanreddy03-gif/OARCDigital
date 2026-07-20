"use client";

import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';
import Link from "next/link";
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
    title: "Website design",
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
  const trackRef = useSmoothCarouselDrag({
    enableAutoScroll: true,
    dragMultiplier: 1.2,
    momentumDamping: 0.95
  });

  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const isDraggingLeftRef = useRef(false);
  const isDraggingRightRef = useRef(false);
  const startYLeftRef = useRef(0);
  const startYRightRef = useRef(0);
  const scrollTopLeftRef = useRef(0);
  const scrollTopRightRef = useRef(0);
  const animationIdRef = useRef<number | undefined>(undefined);
  const cleanupHandlersRef = useRef<(() => void) | null>(null);

  const duplicatedServices = [...services, ...services, ...services];
  const leftColumnServices = [...services.slice(0, 9), ...services.slice(0, 9)];
  const rightColumnServices = [...services.slice(9), ...services.slice(9)];

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const isDesktop = mq.matches;

    if (isDesktop) {
      if (leftColumnRef.current) leftColumnRef.current.style.transform = '';
      if (rightColumnRef.current) rightColumnRef.current.style.transform = '';
      return;
    }

    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    if (!leftColumn || !rightColumn) return;

    let animationStarted = false;

    const tryStartAnimation = () => {
      if (animationStarted) return;
      const leftHeight = leftColumn.scrollHeight / 2;
      const rightHeight = rightColumn.scrollHeight / 2;
      if (leftHeight > 0 && rightHeight > 0) {
        animationStarted = true;
        startAnimation(leftHeight, rightHeight);
      }
    };

    requestAnimationFrame(tryStartAnimation);

    const observer = new ResizeObserver(() => { tryStartAnimation(); });
    observer.observe(leftColumn);
    observer.observe(rightColumn);

    const startAnimation = (leftHeight: number, rightHeight: number) => {
      let leftScrollPosition = 0;
      let rightScrollPosition = 0;
      const scrollSpeed = 1.2;

      const animate = () => {
        if (!isDraggingLeftRef.current) {
          leftScrollPosition += scrollSpeed;
          const normalizedLeft = ((leftScrollPosition % leftHeight) + leftHeight) % leftHeight;
          leftColumn.style.transform = `translateY(${normalizedLeft - leftHeight}px)`;
        }
        if (!isDraggingRightRef.current) {
          rightScrollPosition += scrollSpeed;
          const normalizedRight = ((rightScrollPosition % rightHeight) + rightHeight) % rightHeight;
          rightColumn.style.transform = `translateY(-${normalizedRight}px)`;
        }
        animationIdRef.current = requestAnimationFrame(animate);
      };

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
        const normalizedPosition = ((currentPosition % leftHeight) + leftHeight) % leftHeight;
        leftColumn.style.transform = `translateY(${normalizedPosition - leftHeight}px)`;
      };
      const handleLeftPointerUp = (e: PointerEvent) => {
        if (isDraggingLeftRef.current) {
          const deltaY = e.clientY - startYLeftRef.current;
          const rawPosition = scrollTopLeftRef.current + deltaY;
          leftScrollPosition = ((rawPosition % leftHeight) + leftHeight) % leftHeight;
        }
        isDraggingLeftRef.current = false;
        leftColumn.style.cursor = 'grab';
      };
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
        const normalizedPosition = ((currentPosition % rightHeight) + rightHeight) % rightHeight;
        rightColumn.style.transform = `translateY(-${normalizedPosition}px)`;
      };
      const handleRightPointerUp = (e: PointerEvent) => {
        if (isDraggingRightRef.current) {
          const deltaY = e.clientY - startYRightRef.current;
          const rawPosition = scrollTopRightRef.current - deltaY;
          rightScrollPosition = ((rawPosition % rightHeight) + rightHeight) % rightHeight;
        }
        isDraggingRightRef.current = false;
        rightColumn.style.cursor = 'grab';
      };

      leftColumn.addEventListener('pointerdown', handleLeftPointerDown);
      document.addEventListener('pointermove', handleLeftPointerMove);
      document.addEventListener('pointerup', handleLeftPointerUp);
      document.addEventListener('pointercancel', handleLeftPointerUp);
      rightColumn.addEventListener('pointerdown', handleRightPointerDown);
      document.addEventListener('pointermove', handleRightPointerMove);
      document.addEventListener('pointerup', handleRightPointerUp);
      document.addEventListener('pointercancel', handleRightPointerUp);

      cleanupHandlersRef.current = () => {
        leftColumn.removeEventListener('pointerdown', handleLeftPointerDown);
        document.removeEventListener('pointermove', handleLeftPointerMove);
        document.removeEventListener('pointerup', handleLeftPointerUp);
        document.removeEventListener('pointercancel', handleLeftPointerUp);
        rightColumn.removeEventListener('pointerdown', handleRightPointerDown);
        document.removeEventListener('pointermove', handleRightPointerMove);
        document.removeEventListener('pointerup', handleRightPointerUp);
        document.removeEventListener('pointercancel', handleRightPointerUp);
      };

      animate();
    };

    const handleResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
        if (cleanupHandlersRef.current) { cleanupHandlersRef.current(); cleanupHandlersRef.current = null; }
        if (leftColumn) { leftColumn.style.transform = ''; leftColumn.style.cursor = ''; }
        if (rightColumn) { rightColumn.style.transform = ''; rightColumn.style.cursor = ''; }
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (cleanupHandlersRef.current) { cleanupHandlersRef.current(); cleanupHandlersRef.current = null; }
      isDraggingLeftRef.current = false;
      isDraggingRightRef.current = false;
      if (leftColumn) { leftColumn.style.transform = ''; leftColumn.style.cursor = ''; }
      if (rightColumn) { rightColumn.style.transform = ''; rightColumn.style.cursor = ''; }
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#f0fff4' }} data-testid="section-ai-creative">

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-8">
        <div className="text-center">
          <h2 className="font-heading font-bold text-zinc-900 mb-3" data-testid="text-ai-creative-heading" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Every type of creative work
          </h2>
          <p className="font-heading font-bold text-zinc-900" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            you'll ever need
            <span className="italic text-[#16a34a]"> and more</span>
          </p>
        </div>
      </div>

      {/* Desktop: Horizontal Auto-Scrolling Carousel — hidden on mobile via CSS */}
      <div className="hidden lg:block relative w-full" data-testid="ai-creative-desktop-carousel">
        <div className="flex gap-4 md:gap-6 lg:gap-8 cursor-grab active:cursor-grabbing" data-testid="carousel-track" data-cursor="Drag" ref={trackRef} style={{ willChange: 'transform' }}>
          {duplicatedServices.map((service, index) => (
            <Link
              href="/services"
              key={index}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] group block"
            >
              <div
                className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg"
                data-testid={`service-card-${index}`}
              >
                <img
                  src={service.image}
                  alt={`${service.title} - AI-powered creative service in Malta`}
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-115"
                  data-testid={`carousel-image-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  loading="lazy"
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
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile: Dual-Column Opposite Direction Infinite Scroll — hidden on desktop via CSS */}
      <div className="lg:hidden relative flex gap-3 px-4 h-[520px] overflow-hidden" data-testid="ai-creative-mobile-carousel">
        {/* Left Column - Top to Bottom */}
        <div className="flex-1 relative h-full overflow-hidden">
          <div
            ref={leftColumnRef}
            className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing"
            style={{ willChange: 'transform' }}
            data-testid="mobile-left-column"
          >
            {leftColumnServices.map((service, index) => (
              <Link href="/services" key={`left-${index}`} className="flex-shrink-0 group block">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg" data-testid={`service-card-left-${index}`}>
                  <img src={service.image} alt={`${service.title} - Premium creative work`} className="w-full h-full object-cover scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">{service.badge}</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Bottom to Top */}
        <div className="flex-1 relative h-full overflow-hidden">
          <div
            ref={rightColumnRef}
            className="absolute top-0 left-0 right-0 flex flex-col gap-3 cursor-grab active:cursor-grabbing"
            style={{ willChange: 'transform' }}
            data-testid="mobile-right-column"
          >
            {rightColumnServices.map((service, index) => (
              <Link href="/services" key={`right-${index}`} className="flex-shrink-0 group block">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg" data-testid={`service-card-right-${index}`}>
                  <img src={service.image} alt={`${service.title} - Premium creative work`} className="w-full h-full object-cover scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-[#c4ff4d] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">{service.badge}</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
