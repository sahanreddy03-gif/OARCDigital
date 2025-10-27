import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './button';

interface ScrollableCardsProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function ScrollableCards({ children, className = '', id = 'carousel' }: ScrollableCardsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      {canScrollPrev && (
        <Button
          size="icon"
          variant="outline"
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-testid={`button-scroll-prev-${id}`}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}
      
      {canScrollNext && (
        <Button
          size="icon"
          variant="outline"
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-testid={`button-scroll-next-${id}`}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}

      {/* Scrollable Container */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className={`flex gap-6 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
