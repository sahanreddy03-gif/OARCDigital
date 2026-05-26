"use client";

import { useRef, useEffect, useState } from 'react';
import { m, useInView } from 'framer-motion';
import { statsRailData } from './aiAgentsData';
import { Clock, Zap, CheckCircle2, Globe } from 'lucide-react';

const iconMap: Record<string, any> = {
  'Deployment': Clock,
  'Response': Zap,
  'Resolution': CheckCircle2,
  'Availability': Globe
};

function AnimatedStat({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      const numericMatch = value.match(/[\d.]+/);
      if (!numericMatch) {
        setDisplayValue(value);
        return;
      }
      
      const numericValue = parseFloat(numericMatch[0]);
      const prefix = value.replace(/[\d.]+.*/, '');
      const suffix = value.replace(/.*[\d.]+/, '');
      
      const duration = 1200;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        if (value.includes('.')) {
          const current = (numericValue * eased).toFixed(0);
          setDisplayValue(`${prefix}${current}${suffix}`);
        } else {
          const current = Math.floor(numericValue * eased);
          setDisplayValue(`${prefix}${current}${suffix}`);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);
  
  return <span ref={ref}>{displayValue}</span>;
}

export function StatsRail() {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#c4ff4d]/5 to-black" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {statsRailData.map((stat, idx) => {
            const Icon = iconMap[stat.label] || Clock;
            
            return (
              <m.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute inset-0 bg-[#c4ff4d]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div 
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center hover:border-[#c4ff4d]/30 transition-colors"
                  data-testid={`stat-tile-${stat.label.toLowerCase()}`}
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-[#c4ff4d]/10 border border-[#c4ff4d]/20">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#c4ff4d]" />
                  </div>
                  
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    <AnimatedStat value={stat.value} delay={idx * 100} />
                  </div>
                  
                  <p className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-1 hidden sm:block">{stat.sublabel}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default StatsRail;
