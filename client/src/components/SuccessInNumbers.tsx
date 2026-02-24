import { useRef, useEffect, useState } from "react";
import { Briefcase, Star, Clock, Users } from "lucide-react";
import { useInView } from "framer-motion";
import WordReveal from "./WordReveal";

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, decimals = 0 }: { target: number; suffix?: string; prefix?: string; duration?: number; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  const [count, setCount] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      if (prefersReducedMotion) setCount(target);
      return;
    }
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals, prefersReducedMotion]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </div>
  );
}

function StatCard({ icon: Icon, label, target, suffix, prefix, decimals, description, testId, delay }: {
  icon: typeof Briefcase; label: string; target: number; suffix?: string; prefix?: string; decimals?: number; description: string; testId: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
  const visible = isInView || prefersReducedMotion;

  return (
    <div
      ref={ref}
      data-testid={testId}
      className={prefersReducedMotion ? '' : 'transition-all duration-700 ease-out'}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
        <span className="text-xs uppercase tracking-wider text-emerald-400/80 font-medium">{label}</span>
      </div>
      <AnimatedCounter target={target} suffix={suffix} prefix={prefix} decimals={decimals} />
      <p className="text-xs md:text-sm text-white/60 font-light leading-snug">{description}</p>
    </div>
  );
}

export function SuccessInNumbers() {
  return (
    <section className="bg-[#0A2818] py-20 md:py-28 lg:py-32" data-testid="section-success-numbers">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 md:mb-6 font-medium" data-testid="text-success-eyebrow">
            SUCCESS IN NUMBERS
          </p>
          <WordReveal
            text="The best return on your investment"
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight"
            highlightWords={["investment"]}
            highlightClassName="italic font-serif text-emerald-300"
            staggerDelay={0.08}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="md:pt-6">
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md" data-testid="text-success-description">
              Startup, enterprises and mid-market companies trust OARC Digital to deliver pixel-perfect creative, at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-10 md:gap-y-10">
            <StatCard icon={Briefcase} label="Projects" target={47} suffix="+" description="Projects delivered successfully across industries." testId="stat-projects" delay={0} />
            <StatCard icon={Star} label="Satisfaction" target={4.9} suffix="/5" description="Average client satisfaction rating." testId="stat-satisfaction" delay={150} decimals={1} />
            <StatCard icon={Clock} label="Speed" target={72} suffix="h" description="Average turnaround time for deliverables." testId="stat-turnaround" delay={300} />
            <StatCard icon={Users} label="Retention" target={85} suffix="%" description="Client retention rate year over year." testId="stat-retention" delay={450} />
          </div>
        </div>
      </div>
    </section>
  );
}
