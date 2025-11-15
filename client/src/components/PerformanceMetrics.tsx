import { useEffect, useState, useRef } from "react";
import successBg from '@assets/BACKGROUND IMAGE FOR SUCCESS IN OUR BUSINESS_1763233939151.avif';

const metrics = [
  { value: 68, suffix: "%", label: "Average ROI" },
  { value: 74, suffix: "%", label: "Customer Retention" },
  { value: 48, suffix: "%", label: "Brand Growth" },
  { value: 65, suffix: "+", label: "Campaigns Delivered" },
];

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(end * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-3" style={{ letterSpacing: '-0.03em' }}>
      {count.toFixed(0)}{suffix}
    </div>
  );
}

export default function PerformanceMetrics() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-zinc-900" data-testid="section-metrics">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={successBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Success in Numbers
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal">
            The best return on your investment
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center" data-testid={`metric-${index}`}>
              <Counter 
                end={metric.value} 
                suffix={metric.suffix}
              />
              <p className="text-sm md:text-base text-zinc-400 font-normal">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
