interface SectionTransitionProps {
  variant?: 'gradient' | 'subtle' | 'none';
  fromColor?: string;
  toColor?: string;
  height?: number;
}

export default function SectionTransition({ 
  variant = 'gradient',
  fromColor = 'transparent',
  toColor = 'transparent',
  height = 120
}: SectionTransitionProps) {
  if (variant === 'none') return null;

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (variant === 'gradient') {
    return (
      <div 
        className="relative w-full pointer-events-none"
        style={{ 
          height: `${height}px`,
          marginTop: `-${height}px`,
          zIndex: 2
        }}
        data-testid="section-transition-gradient"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
            opacity: prefersReducedMotion ? 0.5 : 1,
            transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease'
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-16 pointer-events-none -mt-16"
      style={{ zIndex: 2 }}
      data-testid="section-transition-subtle"
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(to bottom, ${fromColor} 0%, transparent 100%)`,
          transition: prefersReducedMotion ? 'none' : 'opacity 0.6s ease'
        }}
      />
    </div>
  );
}
