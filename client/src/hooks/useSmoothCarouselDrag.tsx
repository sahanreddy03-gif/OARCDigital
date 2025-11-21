import { useRef, useEffect } from 'react';

interface UseSmoothCarouselDragOptions {
  enableAutoScroll?: boolean;
  dragMultiplier?: number;
  momentumDamping?: number;
}

export function useSmoothCarouselDrag({
  enableAutoScroll = false,
  dragMultiplier = 1.2,
  momentumDamping = 0.95
}: UseSmoothCarouselDragOptions = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);
  const velocityRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const animationIdRef = useRef<number>();
  const autoScrollIdRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Get single set width for boundary wrapping
    const getSingleSetWidth = () => track.scrollWidth / 3;

    // Wrap position to stay within bounds (tripled content)
    const wrapPosition = (position: number) => {
      const singleSetWidth = getSingleSetWidth();
      
      // Wrap to middle set
      if (position > 0) {
        return -singleSetWidth;
      } else if (position < -singleSetWidth) {
        return 0;
      }
      return position;
    };

    // Auto-scroll animation (for revenue section) - Enhanced for speed and smoothness
    const autoScroll = () => {
      if (!isDraggingRef.current && enableAutoScroll) {
        // Increased speed from 0.5 to 1.8 for faster, more dynamic scrolling
        currentTranslateRef.current -= 1.8;
        
        // Wrap position
        currentTranslateRef.current = wrapPosition(currentTranslateRef.current);
        
        track.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
      autoScrollIdRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll if enabled
    if (enableAutoScroll) {
      autoScroll();
    }

    // Momentum animation
    const applyMomentum = () => {
      if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.1) {
        velocityRef.current *= momentumDamping;
        currentTranslateRef.current += velocityRef.current;
        
        // Wrap position
        currentTranslateRef.current = wrapPosition(currentTranslateRef.current);
        
        if (track) {
          track.style.transform = `translateX(${currentTranslateRef.current}px)`;
        }
        
        animationIdRef.current = requestAnimationFrame(applyMomentum);
      } else if (!isDraggingRef.current) {
        // Momentum ended - wrap position if needed
        currentTranslateRef.current = wrapPosition(currentTranslateRef.current);
        if (track) {
          track.style.transform = `translateX(${currentTranslateRef.current}px)`;
        }
        velocityRef.current = 0;
      }
    };

    // Pointer/Mouse events
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      
      // Get current transform value to continue from there
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrix(computedStyle.transform);
      currentTranslateRef.current = matrix.m41;
      
      startPosRef.current = e.clientX;
      prevTranslateRef.current = currentTranslateRef.current;
      velocityRef.current = 0;
      lastMoveTimeRef.current = Date.now();
      lastMoveXRef.current = e.clientX;
      
      track.classList.add('dragging');
      track.style.cursor = 'grabbing';
      
      // Cancel momentum
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      
      e.preventDefault();
      const currentPosition = e.clientX;
      const deltaX = currentPosition - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + (deltaX * dragMultiplier);
      
      // Calculate velocity for momentum
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTimeRef.current;
      if (timeDelta > 0) {
        velocityRef.current = ((currentPosition - lastMoveXRef.current) / timeDelta) * 16; // 60fps
      }
      
      lastMoveTimeRef.current = currentTime;
      lastMoveXRef.current = currentPosition;
      
      if (track) {
        track.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      
      isDraggingRef.current = false;
      track.classList.remove('dragging');
      track.style.cursor = 'grab';
      
      // Wrap position immediately if needed
      currentTranslateRef.current = wrapPosition(currentTranslateRef.current);
      track.style.transform = `translateX(${currentTranslateRef.current}px)`;
      
      // Apply momentum for non-auto-scroll sections if velocity is high enough
      if (!enableAutoScroll && Math.abs(velocityRef.current) > 0.5) {
        velocityRef.current *= dragMultiplier;
        applyMomentum();
      } else {
        // For auto-scroll or low velocity, just reset velocity
        velocityRef.current = 0;
      }
    };

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      
      // Get current transform value to continue from there
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrix(computedStyle.transform);
      currentTranslateRef.current = matrix.m41;
      
      startPosRef.current = e.touches[0].clientX;
      prevTranslateRef.current = currentTranslateRef.current;
      velocityRef.current = 0;
      lastMoveTimeRef.current = Date.now();
      lastMoveXRef.current = e.touches[0].clientX;
      
      track.classList.add('dragging');
      
      // Cancel momentum
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      
      const currentPosition = e.touches[0].clientX;
      const deltaX = currentPosition - startPosRef.current;
      currentTranslateRef.current = prevTranslateRef.current + (deltaX * dragMultiplier);
      
      // Calculate velocity for momentum
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTimeRef.current;
      if (timeDelta > 0) {
        velocityRef.current = ((currentPosition - lastMoveXRef.current) / timeDelta) * 16; // 60fps
      }
      
      lastMoveTimeRef.current = currentTime;
      lastMoveXRef.current = currentPosition;
      
      if (track) {
        track.style.transform = `translateX(${currentTranslateRef.current}px)`;
      }
    };

    const handleTouchEnd = () => {
      if (!isDraggingRef.current) return;
      
      isDraggingRef.current = false;
      track.classList.remove('dragging');
      
      // Wrap position immediately if needed
      currentTranslateRef.current = wrapPosition(currentTranslateRef.current);
      track.style.transform = `translateX(${currentTranslateRef.current}px)`;
      
      // Apply momentum for non-auto-scroll sections if velocity is high enough
      if (!enableAutoScroll && Math.abs(velocityRef.current) > 0.5) {
        velocityRef.current *= dragMultiplier;
        applyMomentum();
      } else {
        // For auto-scroll or low velocity, just reset velocity
        velocityRef.current = 0;
      }
    };

    // Add event listeners
    track.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);
    
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchmove', handleTouchMove, { passive: true });
    track.addEventListener('touchend', handleTouchEnd);
    track.addEventListener('touchcancel', handleTouchEnd);

    // Cleanup
    return () => {
      track.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
      
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
      track.removeEventListener('touchcancel', handleTouchEnd);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (autoScrollIdRef.current) {
        cancelAnimationFrame(autoScrollIdRef.current);
      }
      
      // Reset state
      isDraggingRef.current = false;
      currentTranslateRef.current = 0;
      prevTranslateRef.current = 0;
      velocityRef.current = 0;
      track.style.transform = '';
      track.classList.remove('dragging');
    };
  }, [enableAutoScroll, dragMultiplier, momentumDamping]);

  return trackRef;
}
