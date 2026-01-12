import { useRef, useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { aiTeamMembers, AITeamMember } from './aiAgentsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamCarouselProps {
  onAgentSelect?: (agent: AITeamMember) => void;
  selectedAgentId?: string;
}

export function TeamCarousel({ onAgentSelect, selectedAgentId }: TeamCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 340;
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AI Employees
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Meet your new team. Each agent is specialized to excel in their domain.
        </motion.p>
      </div>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Left Navigation Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'opacity-100 hover:bg-white/10 hover:border-white/20' : 'opacity-30 cursor-not-allowed'}`}
          disabled={!canScrollLeft}
          data-testid="button-carousel-left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        {/* Right Navigation Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'opacity-100 hover:bg-white/10 hover:border-white/20' : 'opacity-30 cursor-not-allowed'}`}
          disabled={!canScrollRight}
          data-testid="button-carousel-right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-8 md:px-16 lg:px-24 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {aiTeamMembers.map((agent, idx) => {
            const isSelected = agent.id === selectedAgentId;
            const Icon = agent.icon;
            
            return (
              <motion.div
                key={agent.id}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] snap-start cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => onAgentSelect?.(agent)}
                data-testid={`card-agent-${agent.id}`}
              >
                {/* Avatar Image Container - Premium Style */}
                <div 
                  className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 transition-all duration-500 ${isSelected ? 'ring-2 ring-[#c4ff4d] ring-offset-2 ring-offset-black' : 'group-hover:border-white/10'}`}
                  role="img"
                  aria-label={agent.avatarAlt}
                >
                  {/* Placeholder with icon - will be replaced with actual avatar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white/60 group-hover:text-[#c4ff4d] transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-white/30 text-center">Avatar coming soon</p>
                  </div>
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Agent Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {agent.name}
                </h3>
                
                {/* Description with BOLD role at start */}
                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  <span className="text-white font-semibold">{agent.role}.</span>{' '}
                  {agent.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
