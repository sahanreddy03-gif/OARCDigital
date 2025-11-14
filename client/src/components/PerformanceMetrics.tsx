import { useEffect, useState, useRef } from "react";

const metrics = [
  { value: 68, suffix: "%", label: "Average ROI", prefix: "" },
  { value: 420, suffix: "K", label: "Efficiency Created", prefix: "$" },
  { value: 74, suffix: "%", label: "Customer Retention", prefix: "" },
  { value: 48, suffix: "%", label: "Brand Recognition Growth", prefix: "" },
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
    <div ref={ref} className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-br from-white via-orange-100 to-rose-100 bg-clip-text text-transparent">
      {prefix}{count.toFixed(suffix === "M" || suffix === "K" ? 0 : 0)}{suffix}
    </div>
  );
}

export default function PerformanceMetrics() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-rose-500/10 opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <p className="text-xs uppercase tracking-wider font-bold text-orange-500">
              Measurable Success
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            The proof is in the <span className="italic font-black bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">results</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="relative group" data-testid={`metric-${index}`}>
              {/* Card with glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center space-y-2 hover-elevate transition-all duration-300 group-hover:border-orange-500/30">
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-rose-500/0 group-hover:from-orange-500/10 group-hover:to-rose-500/10 rounded-2xl transition-all duration-300 -z-10 blur-xl"></div>
                
                <Counter 
                  end={metric.value} 
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
                <p className="text-xs md:text-sm uppercase tracking-wide font-semibold text-zinc-400 group-hover:text-orange-400 transition-colors">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
