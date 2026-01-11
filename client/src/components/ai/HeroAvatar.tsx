import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

interface HeroAvatarProps {
  className?: string;
}

export function HeroAvatar({ className = '' }: HeroAvatarProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px] mx-auto">
        <motion.div
          className="absolute -inset-4 rounded-full bg-[#c4ff4d]/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div 
        className="relative aspect-square rounded-3xl overflow-hidden border-2 border-dashed border-[#c4ff4d]/40 bg-gradient-to-br from-white/5 to-white/[0.02]"
        data-testid="hero-avatar-placeholder"
      >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#c4ff4d]/10 border border-[#c4ff4d]/30 flex items-center justify-center mb-4"
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(196, 255, 77, 0)',
                  '0 0 0 20px rgba(196, 255, 77, 0.1)',
                  '0 0 0 0 rgba(196, 255, 77, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bot className="w-10 h-10 md:w-12 md:h-12 text-[#c4ff4d]" />
            </motion.div>
            
            <p className="text-sm text-white/50 mb-2">Primary Avatar Placeholder</p>
            <p className="text-xs text-white/30">User will provide hero avatar image</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#c4ff4d] animate-pulse" />
              <span className="text-xs text-[#c4ff4d]/80">AI Agent Active</span>
            </div>
          </div>
        </div>
        
        <motion.div
          className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#c4ff4d] flex items-center justify-center"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-5 h-5 text-black" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 -left-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-[#c4ff4d]/30 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-white/80">Online 24/7</span>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 -right-4 md:-right-8 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-[#c4ff4d]/30 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-xs text-white/80">
            <span className="text-[#c4ff4d] font-semibold">&lt;2s</span> response
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroAvatar;
