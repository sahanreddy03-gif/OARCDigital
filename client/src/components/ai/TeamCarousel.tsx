import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { aiTeamMembers, AITeamMember } from './aiAgentsData';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TeamCarouselProps {
  onAgentSelect?: (agent: AITeamMember) => void;
  selectedAgentId?: string;
}

export function TeamCarousel({ onAgentSelect, selectedAgentId }: TeamCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const cardWidth = isMobile ? Math.min(280, window.innerWidth - 48) : 320;
  const gap = isMobile ? 16 : 24;
  const totalCards = aiTeamMembers.length;
  
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    let newIndex = activeIndex;
    
    if (offset < -threshold || velocity < -500) {
      newIndex = Math.min(activeIndex + 1, totalCards - 1);
    } else if (offset > threshold || velocity > 500) {
      newIndex = Math.max(activeIndex - 1, 0);
    }
    
    setActiveIndex(newIndex);
    animate(x, -newIndex * (cardWidth + gap), { type: 'spring', stiffness: 300, damping: 30 });
  };
  
  const goTo = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, totalCards - 1));
    setActiveIndex(clampedIndex);
    animate(x, -clampedIndex * (cardWidth + gap), { type: 'spring', stiffness: 300, damping: 30 });
  };
  
  return (
    <div className="relative">
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 text-[#c4ff4d]" />
          <span className="text-sm text-[#c4ff4d]">Your AI Workforce</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Meet Your <span className="text-[#c4ff4d]">AI Team</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Five specialized agents, each trained to excel in their domain. Swipe to explore.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex justify-center px-4 md:px-0"
        >
          <motion.div
            className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ 
              left: -(totalCards - 1) * (cardWidth + gap), 
              right: 0 
            }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {aiTeamMembers.map((agent, idx) => {
              const isActive = idx === activeIndex;
              const isSelected = agent.id === selectedAgentId;
              const Icon = agent.icon;
              
              return (
                <motion.div
                  key={agent.id}
                  className="flex-shrink-0 w-[280px] md:w-[320px]"
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.6
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    goTo(idx);
                    onAgentSelect?.(agent);
                  }}
                  data-testid={`card-agent-${agent.id}`}
                  aria-selected={isSelected}
                >
                  <GlassCard 
                    className={`p-6 h-full transition-all duration-300 ${isSelected ? 'border-[#c4ff4d] ring-2 ring-[#c4ff4d]/30 shadow-lg shadow-[#c4ff4d]/20' : ''}`}
                    liftOnHover={false}
                  >
                    <div className="relative mb-6">
                      <div className="aspect-square w-full max-w-[200px] mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-dashed border-[#c4ff4d]/30 flex items-center justify-center overflow-hidden">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#c4ff4d]/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-[#c4ff4d]" />
                          </div>
                          <p className="text-xs text-white/40">Avatar placeholder</p>
                          <p className="text-[10px] text-white/30 mt-1">User will provide</p>
                        </div>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          className="absolute -inset-1 rounded-2xl border-2 border-[#c4ff4d]/40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          layoutId="activeRing"
                        />
                      )}
                    </div>
                    
                    <div className="text-center">
                      <span className="text-[10px] uppercase tracking-wider text-[#c4ff4d]/60 mb-1 block">
                        {agent.pillar}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
                      <p className="text-sm text-white/60 mb-3">{agent.role}</p>
                      <p className="text-sm text-white/80 mb-4">{agent.description}</p>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c4ff4d]/10 rounded-full">
                        <span className="text-sm font-semibold text-[#c4ff4d]">{agent.metric}</span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {agent.capabilities.slice(0, 3).map((cap, i) => (
                            <span 
                              key={i}
                              className="text-[10px] px-2 py-1 bg-white/5 rounded-full text-white/50"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none hidden md:block" />
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {aiTeamMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === activeIndex 
                  ? 'bg-[#c4ff4d] w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              data-testid={`button-carousel-dot-${idx}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === totalCards - 1}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TeamCarousel;
