interface GradientTransitionProps {
  from: 'dark' | 'light';
  to: 'dark' | 'light';
  height?: string;
}

export function GradientTransition({ from, to, height = '60px' }: GradientTransitionProps) {
  const darkColor = '#0a0a0a';
  const lightColor = '#f0fff4';
  
  const fromColor = from === 'dark' ? darkColor : lightColor;
  const toColor = to === 'dark' ? darkColor : lightColor;
  
  return (
    <div 
      className="w-full"
      style={{ 
        height,
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`
      }}
      data-testid={`gradient-transition-${from}-to-${to}`}
    />
  );
}

export default GradientTransition;
