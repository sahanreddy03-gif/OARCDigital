import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  borderPulse?: boolean;
  liftOnHover?: boolean;
  showCornerAccents?: boolean;
  variant?: 'default' | 'strong' | 'subtle';
}

export function GlassCard({ 
  children, 
  className,
  glowOnHover = true,
  borderPulse = false,
  liftOnHover = true,
  showCornerAccents = false,
  variant = 'strong',
  ...props 
}: GlassCardProps) {
  const variants = {
    subtle: {
      bg: 'bg-white/[0.02]',
      bgHover: 'hover:bg-white/[0.04]',
      border: 'border-white/[0.05]',
      borderHover: 'hover:border-white/[0.15]'
    },
    default: {
      bg: 'bg-white/[0.03]',
      bgHover: 'hover:bg-white/[0.06]',
      border: 'border-white/[0.08]',
      borderHover: 'hover:border-white/[0.2]'
    },
    strong: {
      bg: 'bg-white/[0.04]',
      bgHover: 'hover:bg-white/[0.08]',
      border: 'border-white/[0.1]',
      borderHover: 'hover:border-white/[0.25]'
    }
  };

  const v = variants[variant];

  return (
    <motion.div
      className={cn(
        'relative group rounded-xl overflow-visible',
        v.bg, 'backdrop-blur-md',
        'border', v.border,
        'transition-all duration-500 ease-out',
        glowOnHover && [v.bgHover, v.borderHover],
        liftOnHover && 'hover:-translate-y-2',
        className
      )}
      whileHover={liftOnHover ? { y: -8, scale: 1.01 } : undefined}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {/* Outer Glow Effect - Always visible, stronger on hover */}
      <div 
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          filter: 'blur(20px)'
        }}
      />

      {/* Inner Top Highlight - Glassmorphism shine */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Glow Effect on Hover - More prominent */}
      {glowOnHover && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
        </div>
      )}

      {/* Corner Accents - Tech/futuristic feel */}
      {showCornerAccents && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-xl" />
        </>
      )}
      
      {/* Border Pulse Animation - More visible */}
      {borderPulse && (
        <motion.div
          className="absolute inset-0 rounded-xl border border-white/15 pointer-events-none motion-reduce:hidden"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.005, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Scan Line Effect on Hover */}
      {glowOnHover && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 motion-reduce:hidden pointer-events-none"
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
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
