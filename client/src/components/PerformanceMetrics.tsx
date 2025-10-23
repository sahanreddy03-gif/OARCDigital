import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 320, suffix: "%", label: "Average ROI", prefix: "" },
  { value: 2.4, suffix: "M", label: "Cost Saved", prefix: "$" },
  { value: 94, suffix: "%", label: "Customer Retention", prefix: "" },
  { value: 180, suffix: "%", label: "Brand Recognition Growth", prefix: "" },
];

function Counter({ end, prefix = "", suffix = "", duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
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
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-display text-primary">
      {prefix}{count.toFixed(suffix === "M" ? 1 : 0)}{suffix}
    </div>
  );
}

export default function PerformanceMetrics() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide font-semibold text-background/60 mb-4">
            Measurable Success
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            The proof is in the <span className="italic">results</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-3" data-testid={`metric-${index}`}>
              <Counter 
                end={metric.value} 
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
              <p className="text-sm uppercase tracking-wide font-medium text-background/70">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
