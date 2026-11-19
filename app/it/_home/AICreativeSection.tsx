"use client";

import { useSmoothCarouselDrag } from '@/hooks/useSmoothCarouselDrag';
import Link from "next/link";
import { useRef, useEffect } from 'react';
import { serviceImages } from '@/assets/serviceImages';

// `en` is the English title. It is only used to build the same data-testid as the English homepage.
const services = [
  {
    title: "Creatività pubblicitaria",
    en: "Ad creative",
    href: "/services/ad-creative",
    subtitle: "Design che catturano lo sguardo e funzionano",
    image: serviceImages.adCreative,
    category: "Design e creatività statica"
  },
  {
    title: "Creatività per i social media",
    en: "Social media creative",
    href: "/services/social-media-creative-management",
    subtitle: "Contenuti coinvolgenti per ogni piattaforma",
    image: serviceImages.socialMedia,
    category: "Design e creatività statica"
  },
  {
    title: "Design di presentazioni",
    en: "Presentation design",
    href: "/services/presentation-pitch",
    subtitle: "Slide accattivanti che raccontano la tua storia",
    image: serviceImages.presentation,
    category: "Design e creatività statica"
  },
  {
    title: "Illustrazioni",
    en: "Illustration design",
    href: "/services/illustration",
    subtitle: "Racconto visivo per il tuo brand",
    image: serviceImages.illustration,
    category: "Design e creatività statica"
  },
  {
    title: "Servizi di branding",
    en: "Branding services",
    href: "/services/branding",
    subtitle: "Competenza e servizi di design su misura",
    image: serviceImages.branding,
    category: "Design e creatività statica"
  },
  {
    title: "Design di eBook e report",
    en: "eBooks & report design",
    href: "/services/content-marketing",
    subtitle: "I tuoi contenuti digitali, potenziati",
    image: serviceImages.ebook,
    category: "Design e creatività statica"
  },
  {
    title: "Ideazione di concept",
    en: "Concept creation",
    href: "/services/creative",
    subtitle: "Grandi idee pensate per il massimo impatto",
    image: serviceImages.concept,
    category: "Design e creatività statica"
  },
  {
    title: "Design per la stampa",
    en: "Print design",
    href: "/services/print-packaging",
    subtitle: "Design tangibili che lasciano il segno",
    image: serviceImages.printDesign,
    category: "Design e creatività statica"
  },
  {
    title: "Design di packaging e merchandising",
    en: "Packaging & merchandise design",
    href: "/services/print-packaging",
    subtitle: "Dai vita al tuo brand",
    image: serviceImages.packaging,
    category: "Design e creatività statica"
  },
  {
    title: "Produzione video",
    en: "Video production",
    href: "/services/video-production",
    subtitle: "Produzione video senza fatica, su larga scala",
    image: serviceImages.video,
    category: "Motion e video"
  },
  {
    title: "Motion design",
    en: "Motion design",
    href: "/services/motion-design",
    subtitle: "Per siti web, annunci e presentazioni",
    image: serviceImages.motion,
    category: "Motion e video"
  },
  {
    title: "Design immersivo",
    en: "Immersive design",
    href: "/services/immersive-3d-ar",
    subtitle: "Soluzioni innovative per il design 3D/AR",
    image: serviceImages.immersive,
    category: "Motion e video"
  },
  {
    title: "Creazione di email",
    en: "Email creation",
    href: "/services/email-creative",
    subtitle: "Email da cliccare che generano coinvolgimento",
    image: serviceImages.email,
    category: "Digitale e web"
  },
  {
    title: "Design di siti web",
    en: "Website design",
    href: "/services/web-design",
    subtitle: "Siti web e landing page straordinari, fatti per coinvolgere",
    image: serviceImages.webDesign,
    category: "Digitale e web"
  },
  {
    title: "Design system",
    en: "Design Systems",
    href: "/services/design-systems",
    subtitle: "Design system solidi che garantiscono coerenza visiva",
    image: serviceImages.designSystems,
    category: "Digitale e web",
    badge: "NOVITÀ"
  },
  {
    title: "Product design",
    en: "Product Design",
    href: "/services/mvp-development",
    subtitle: "Esperienze coinvolgenti e intuitive",
    image: serviceImages.productDesign,
    // Wide banner with the phone on the right: without this the card crops to empty green.
    position: "76% center",
    category: "Digitale e web",
    badge: "NOVITÀ"
  },
  {
    title: "Creatività potenziata dall'AI",
    en: "AI-enhanced creative",
    href: "/services/creative",
    subtitle: "Talento umano potenziato dall'AI",
    image: serviceImages.aiEnhanced,
    category: "Con AI"
  },
  {
    title: "Consulenza AI",
    en: "AI consulting",
    href: "/services/ai-consulting",
    subtitle: "Sfrutta al massimo l'AI con strategie su misura",
    image: serviceImages.aiConsulting,
    category: "Con AI"
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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: 'var(--paper)' }} data-testid="section-ai-creative">

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl mb-8">
        <div className="text-center">
          <h2
            className="font-ds-display font-extrabold mb-0"
            data-testid="text-ai-creative-heading"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)', letterSpacing: '-0.04em', lineHeight: '1.0', color: 'var(--ink)' }}
          >
            Branding, strategia, creatività
            <br />
            {/* Design system v3: on paper the highlight is a black box with the yellow word */}
            <span className="font-ds-flair italic font-normal mt-2 inline-block rounded-md bg-[#0E0E0E] px-3 pb-1 text-[#F9FF84]">&amp; design.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg" style={{ color: 'var(--ink)', opacity: 0.7 }}>
            Annunci, social, video, siti web e stampa, realizzati dal nostro team a Malta.
          </p>
        </div>
      </div>

      {/* Desktop: Horizontal Auto-Scrolling Carousel — hidden on mobile via CSS */}
      <div className="hidden lg:block relative w-full" data-testid="ai-creative-desktop-carousel">
        <div className="flex gap-4 md:gap-6 lg:gap-8 cursor-grab active:cursor-grabbing" data-testid="carousel-track" ref={trackRef} style={{ willChange: 'transform' }}>
          {duplicatedServices.map((service, index) => (
            <Link
              href={service.href}
              hrefLang="en"
              key={index}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] group block"
            >
              <div
                className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg"
                data-testid={`service-card-${index}`}
              >
                <img
                  src={service.image}
                  alt={`${service.title} - servizio creativo con AI a Malta`}
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-115"
                  style={{ objectPosition: "position" in service ? service.position : undefined }}
                  data-testid={`carousel-image-${service.en.toLowerCase().replace(/\s+/g, '-')}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                {service.badge && (
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#F9FF84] text-zinc-900 text-xs font-bold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full z-10">
                    {service.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-ds-display text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>
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
              <Link href={service.href} hrefLang="en" key={`left-${index}`} className="flex-shrink-0 group block">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg" data-testid={`service-card-left-${index}`}>
                  <img src={service.image} alt={`${service.title} - lavoro creativo di alta qualità`} className="w-full h-full object-cover scale-110" style={{ objectPosition: "position" in service ? service.position : undefined }} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-[#F9FF84] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">{service.badge}</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-ds-display text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>{service.title}</h3>
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
              <Link href={service.href} hrefLang="en" key={`right-${index}`} className="flex-shrink-0 group block">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 shadow-lg" data-testid={`service-card-right-${index}`}>
                  <img src={service.image} alt={`${service.title} - lavoro creativo di alta qualità`} className="w-full h-full object-cover scale-110" style={{ objectPosition: "position" in service ? service.position : undefined }} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-[#F9FF84] text-zinc-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">{service.badge}</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-ds-display text-lg font-bold text-white leading-tight" style={{ letterSpacing: '-0.03em' }}>{service.title}</h3>
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
