interface GradientTransitionProps {
  from: 'dark' | 'light' | 'darkGreen' | 'sage';
  to: 'dark' | 'light' | 'darkGreen' | 'sage';
  height?: string;
  blur?: boolean;
}

export function GradientTransition({ from, to, height = '120px', blur = false }: GradientTransitionProps) {
  const colors = {
    dark: '#0a0a0a',
    light: '#f8faf5',
    darkGreen: '#0A2818',
    sage: '#C5D5A3'
  };
  
  const fromColor = colors[from];
  const toColor = colors[to];
  
  return (
    <div 
      className="w-full relative"
      style={{ 
        height,
        background: `linear-gradient(180deg, ${fromColor} 0%, ${fromColor} 10%, ${toColor} 90%, ${toColor} 100%)`
      }}
      data-testid={`gradient-transition-${from}-to-${to}`}
    >
      {blur && (
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        />
      )}
    </div>
  );
}

export default GradientTransition;
