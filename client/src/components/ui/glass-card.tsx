import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  borderPulse?: boolean;
  liftOnHover?: boolean;
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = true,
  borderPulse = false,
  liftOnHover = true,
  ...props 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative group',
        'bg-white/[0.02] backdrop-blur-sm',
        'border border-white/[0.05]',
        'transition-all duration-500',
        glowOnHover && 'hover:border-white/[0.15] hover:bg-white/[0.04]',
        liftOnHover && 'hover:-translate-y-2',
        className
      )}
      whileHover={liftOnHover ? { y: -8 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {/* Glow Effect on Hover */}
      {glowOnHover && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
        </div>
      )}
      
      {/* Border Pulse Animation */}
      {borderPulse && (
        <motion.div
          className="absolute inset-0 border border-white/10 pointer-events-none motion-reduce:hidden"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;
