import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AIIconProps {
  className?: string;
  size?: number;
  glowColor?: string;
  animated?: boolean;
}

const iconWrapper = (Icon: React.FC<AIIconProps>) => {
  return ({ className, size = 96, glowColor = 'rgba(255,255,255,0.3)', animated = true }: AIIconProps) => (
    <motion.div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      whileHover={animated ? { scale: 1.1 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl motion-reduce:hidden"
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: 0.6
        }}
      />
      <Icon size={size} className={className} glowColor={glowColor} animated={animated} />
    </motion.div>
  );
};

export const NeuralBrain = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
      </linearGradient>
    </defs>
    {/* Brain outline */}
    <path 
      d="M48 16C32 16 24 28 24 40C24 48 28 56 32 60C28 64 24 72 24 80C40 80 48 72 48 72C48 72 56 80 72 80C72 72 68 64 64 60C68 56 72 48 72 40C72 28 64 16 48 16Z"
      stroke="url(#brainGlow)"
      strokeWidth="2"
      fill="none"
    />
    {/* Neural connections */}
    <circle cx="36" cy="36" r="4" fill="white" opacity="0.8" />
    <circle cx="60" cy="36" r="4" fill="white" opacity="0.8" />
    <circle cx="48" cy="48" r="5" fill="white" opacity="0.9" />
    <circle cx="40" cy="60" r="3" fill="white" opacity="0.7" />
    <circle cx="56" cy="60" r="3" fill="white" opacity="0.7" />
    {/* Connection lines */}
    <line x1="36" y1="36" x2="48" y2="48" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="60" y1="36" x2="48" y2="48" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="48" y1="48" x2="40" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="48" y1="48" x2="56" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
    {/* Pulse rings */}
    <circle cx="48" cy="48" r="20" stroke="white" strokeWidth="0.5" opacity="0.3" fill="none" />
    <circle cx="48" cy="48" r="30" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
  </svg>
);

export const DataFlow = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Input nodes */}
    <circle cx="20" cy="24" r="6" fill="white" opacity="0.8" />
    <circle cx="20" cy="48" r="6" fill="white" opacity="0.8" />
    <circle cx="20" cy="72" r="6" fill="white" opacity="0.8" />
    {/* Processing node */}
    <rect x="40" y="38" width="16" height="20" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.9" />
    <circle cx="48" cy="48" r="4" fill="white" opacity="0.7" />
    {/* Output node */}
    <circle cx="76" cy="48" r="8" stroke="white" strokeWidth="2" fill="none" opacity="0.9" />
    <circle cx="76" cy="48" r="4" fill="white" opacity="0.6" />
    {/* Flow lines */}
    <path d="M26 24 L40 42" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M26 48 L40 48" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M26 72 L40 54" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M56 48 L68 48" stroke="white" strokeWidth="1.5" opacity="0.5" />
    {/* Arrows */}
    <path d="M64 44 L68 48 L64 52" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
  </svg>
);

export const LightningBolt = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="boltGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
      </linearGradient>
    </defs>
    {/* Lightning bolt */}
    <path 
      d="M52 16L28 52H44L40 80L68 40H52L56 16H52Z"
      fill="url(#boltGlow)"
      opacity="0.9"
    />
    {/* Glow rings */}
    <circle cx="48" cy="48" r="36" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
    <circle cx="48" cy="48" r="28" stroke="white" strokeWidth="0.5" opacity="0.15" fill="none" />
  </svg>
);

export const NetworkHub = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central hub */}
    <circle cx="48" cy="48" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.9" />
    <circle cx="48" cy="48" r="6" fill="white" opacity="0.8" />
    {/* Outer nodes */}
    <circle cx="48" cy="16" r="6" fill="white" opacity="0.7" />
    <circle cx="76" cy="32" r="6" fill="white" opacity="0.7" />
    <circle cx="76" cy="64" r="6" fill="white" opacity="0.7" />
    <circle cx="48" cy="80" r="6" fill="white" opacity="0.7" />
    <circle cx="20" cy="64" r="6" fill="white" opacity="0.7" />
    <circle cx="20" cy="32" r="6" fill="white" opacity="0.7" />
    {/* Connection lines */}
    <line x1="48" y1="22" x2="48" y2="36" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="70" y1="34" x2="58" y2="42" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="70" y1="62" x2="58" y2="54" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="48" y1="74" x2="48" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="26" y1="62" x2="38" y2="54" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <line x1="26" y1="34" x2="38" y2="42" stroke="white" strokeWidth="1.5" opacity="0.4" />
    {/* Outer ring */}
    <circle cx="48" cy="48" r="40" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" strokeDasharray="4 4" />
  </svg>
);

export const ShieldCheck = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path 
      d="M48 12L20 24V48C20 64 32 78 48 84C64 78 76 64 76 48V24L48 12Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
      opacity="0.9"
    />
    {/* Checkmark */}
    <path 
      d="M36 48L44 56L60 40"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.9"
    />
    {/* Inner glow circle */}
    <circle cx="48" cy="48" r="20" stroke="white" strokeWidth="0.5" opacity="0.2" fill="none" />
  </svg>
);

export const ClockSpeed = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clock circle */}
    <circle cx="48" cy="48" r="32" stroke="white" strokeWidth="2" fill="none" opacity="0.9" />
    {/* Clock hands */}
    <line x1="48" y1="48" x2="48" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
    <line x1="48" y1="48" x2="64" y2="48" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    {/* Center dot */}
    <circle cx="48" cy="48" r="4" fill="white" opacity="0.9" />
    {/* Speed lines */}
    <path d="M16 48 L8 48" stroke="white" strokeWidth="2" opacity="0.4" />
    <path d="M12 36 L6 32" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <path d="M12 60 L6 64" stroke="white" strokeWidth="1.5" opacity="0.3" />
    {/* Tick marks */}
    <circle cx="48" cy="20" r="2" fill="white" opacity="0.5" />
    <circle cx="76" cy="48" r="2" fill="white" opacity="0.5" />
    <circle cx="48" cy="76" r="2" fill="white" opacity="0.5" />
    <circle cx="20" cy="48" r="2" fill="white" opacity="0.5" />
  </svg>
);

export const ChatBubbles = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main chat bubble */}
    <path 
      d="M16 24H64C68 24 72 28 72 32V56C72 60 68 64 64 64H32L20 76V64H16C12 64 8 60 8 56V32C8 28 12 24 16 24Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
      opacity="0.9"
    />
    {/* Secondary bubble */}
    <path 
      d="M80 40H84C86 40 88 42 88 44V60C88 62 86 64 84 64H82V72L76 64H72"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    {/* Dots inside */}
    <circle cx="28" cy="44" r="3" fill="white" opacity="0.7" />
    <circle cx="40" cy="44" r="3" fill="white" opacity="0.7" />
    <circle cx="52" cy="44" r="3" fill="white" opacity="0.7" />
  </svg>
);

export const BarChart = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Axis */}
    <line x1="20" y1="76" x2="76" y2="76" stroke="white" strokeWidth="2" opacity="0.6" />
    <line x1="20" y1="20" x2="20" y2="76" stroke="white" strokeWidth="2" opacity="0.6" />
    {/* Bars */}
    <rect x="28" y="52" width="10" height="24" fill="white" opacity="0.7" rx="2" />
    <rect x="44" y="36" width="10" height="40" fill="white" opacity="0.8" rx="2" />
    <rect x="60" y="28" width="10" height="48" fill="white" opacity="0.9" rx="2" />
    {/* Trend line */}
    <path d="M33 48 L49 32 L65 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none" />
    {/* Data points */}
    <circle cx="33" cy="48" r="3" fill="white" opacity="0.6" />
    <circle cx="49" cy="32" r="3" fill="white" opacity="0.6" />
    <circle cx="65" cy="24" r="3" fill="white" opacity="0.6" />
  </svg>
);

export const BrainCircuit = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brain left */}
    <path 
      d="M32 28C24 28 20 36 20 44C20 52 24 56 28 60C28 68 32 72 40 72C44 72 48 68 48 68"
      stroke="white"
      strokeWidth="2"
      fill="none"
      opacity="0.8"
    />
    {/* Brain right */}
    <path 
      d="M64 28C72 28 76 36 76 44C76 52 72 56 68 60C68 68 64 72 56 72C52 72 48 68 48 68"
      stroke="white"
      strokeWidth="2"
      fill="none"
      opacity="0.8"
    />
    {/* Circuit nodes */}
    <circle cx="48" cy="40" r="6" stroke="white" strokeWidth="2" fill="none" opacity="0.9" />
    <circle cx="48" cy="40" r="2" fill="white" opacity="0.8" />
    <circle cx="32" cy="48" r="4" fill="white" opacity="0.6" />
    <circle cx="64" cy="48" r="4" fill="white" opacity="0.6" />
    <circle cx="40" cy="60" r="3" fill="white" opacity="0.5" />
    <circle cx="56" cy="60" r="3" fill="white" opacity="0.5" />
    {/* Connections */}
    <line x1="48" y1="46" x2="48" y2="68" stroke="white" strokeWidth="1" opacity="0.4" />
    <line x1="36" y1="48" x2="44" y2="42" stroke="white" strokeWidth="1" opacity="0.4" />
    <line x1="60" y1="48" x2="52" y2="42" stroke="white" strokeWidth="1" opacity="0.4" />
    {/* Outer circuit ring */}
    <circle cx="48" cy="48" r="36" stroke="white" strokeWidth="0.5" opacity="0.15" strokeDasharray="8 4" fill="none" />
  </svg>
);

export const SignalWave = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wave pattern */}
    <path 
      d="M12 48 Q24 24 36 48 Q48 72 60 48 Q72 24 84 48"
      stroke="white"
      strokeWidth="2.5"
      fill="none"
      opacity="0.9"
      strokeLinecap="round"
    />
    {/* Secondary waves */}
    <path 
      d="M12 36 Q24 20 36 36 Q48 52 60 36 Q72 20 84 36"
      stroke="white"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
      strokeLinecap="round"
    />
    <path 
      d="M12 60 Q24 76 36 60 Q48 44 60 60 Q72 76 84 60"
      stroke="white"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
      strokeLinecap="round"
    />
    {/* Signal points */}
    <circle cx="36" cy="48" r="4" fill="white" opacity="0.7" />
    <circle cx="60" cy="48" r="4" fill="white" opacity="0.7" />
  </svg>
);

export const TargetLock = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="48" cy="48" r="36" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
    {/* Middle ring */}
    <circle cx="48" cy="48" r="24" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7" />
    {/* Inner ring */}
    <circle cx="48" cy="48" r="12" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
    {/* Center dot */}
    <circle cx="48" cy="48" r="4" fill="white" opacity="0.9" />
    {/* Crosshairs */}
    <line x1="48" y1="8" x2="48" y2="24" stroke="white" strokeWidth="2" opacity="0.5" />
    <line x1="48" y1="72" x2="48" y2="88" stroke="white" strokeWidth="2" opacity="0.5" />
    <line x1="8" y1="48" x2="24" y2="48" stroke="white" strokeWidth="2" opacity="0.5" />
    <line x1="72" y1="48" x2="88" y2="48" stroke="white" strokeWidth="2" opacity="0.5" />
  </svg>
);

export const GlobeNetwork = ({ size = 96 }: AIIconProps) => (
  <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe outline */}
    <circle cx="48" cy="48" r="32" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
    {/* Horizontal lines */}
    <ellipse cx="48" cy="48" rx="32" ry="12" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
    <ellipse cx="48" cy="36" rx="28" ry="8" stroke="white" strokeWidth="0.75" fill="none" opacity="0.3" />
    <ellipse cx="48" cy="60" rx="28" ry="8" stroke="white" strokeWidth="0.75" fill="none" opacity="0.3" />
    {/* Vertical arc */}
    <ellipse cx="48" cy="48" rx="12" ry="32" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
    {/* Network nodes */}
    <circle cx="32" cy="40" r="3" fill="white" opacity="0.7" />
    <circle cx="64" cy="56" r="3" fill="white" opacity="0.7" />
    <circle cx="48" cy="24" r="3" fill="white" opacity="0.7" />
    <circle cx="48" cy="72" r="3" fill="white" opacity="0.7" />
    {/* Connection lines */}
    <line x1="32" y1="40" x2="48" y2="24" stroke="white" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    <line x1="64" y1="56" x2="48" y2="72" stroke="white" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
  </svg>
);

export const AIIconWithGlow = ({ 
  icon: Icon, 
  size = 96, 
  className 
}: { 
  icon: React.FC<AIIconProps>; 
  size?: number; 
  className?: string;
}) => {
  return (
    <motion.div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Outer glow */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl motion-reduce:hidden"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
        }}
      />
      {/* Inner glow */}
      <div 
        className="absolute inset-4 rounded-full blur-xl motion-reduce:hidden"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />
      <Icon size={size} />
    </motion.div>
  );
};

export default {
  NeuralBrain,
  DataFlow,
  LightningBolt,
  NetworkHub,
  ShieldCheck,
  ClockSpeed,
  ChatBubbles,
  BarChart,
  BrainCircuit,
  SignalWave,
  TargetLock,
  GlobeNetwork,
  AIIconWithGlow
};
