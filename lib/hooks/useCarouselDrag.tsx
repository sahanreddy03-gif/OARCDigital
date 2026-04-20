import { useRef, useEffect } from 'react';

export function useCarouselDrag() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationPaused = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let currentTranslateX = 0;
    
    const startAnimation = () => {
      if (!animationPaused.current) {
        const animate = () => {
          currentTranslateX -= 0.5; // Adjust speed here
          carousel.style.transform = `translateX(${currentTranslateX}px)`;
          
          // Reset when scrolled 1/3 of the width
          const trackWidth = carousel.scrollWidth / 3;
          if (Math.abs(currentTranslateX) >= trackWidth) {
            currentTranslateX = 0;
          }
          
          if (!animationPaused.current) {
            animationId = requestAnimationFrame(animate);
          }
        };
        animate();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      carousel.classList.add('dragging');
      startX.current = e.pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;
      animationPaused.current = true;
      carousel.style.animation = 'none';
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      carousel.classList.add('dragging');
      startX.current = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft.current = carousel.scrollLeft;
      animationPaused.current = true;
      carousel.style.animation = 'none';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      currentTranslateX = -scrollLeft.current + walk;
      carousel.style.transform = `translateX(${currentTranslateX}px)`;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX.current) * 2;
      currentTranslateX = -scrollLeft.current + walk;
      carousel.style.transform = `translateX(${currentTranslateX}px)`;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      carousel.classList.remove('dragging');
      // Resume animation after a short delay
      setTimeout(() => {
        animationPaused.current = false;
        carousel.style.animation = '';
        startAnimation();
      }, 100);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      carousel.classList.remove('dragging');
      // Resume animation after a short delay
      setTimeout(() => {
        animationPaused.current = false;
        carousel.style.animation = '';
        startAnimation();
      }, 100);
    };

    // Add event listeners
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('touchend', handleTouchEnd);
    carousel.addEventListener('mouseleave', handleMouseUp);

    // Start the animation
    startAnimation();

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('touchend', handleTouchEnd);
      carousel.removeEventListener('mouseleave', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return carouselRef;
}