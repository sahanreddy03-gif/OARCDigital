interface GradientTransitionProps {
  from: 'dark' | 'light' | 'darkGreen';
  to: 'dark' | 'light' | 'darkGreen';
  height?: string;
}

export function GradientTransition({ from, to, height = '60px' }: GradientTransitionProps) {
  const colors = {
    dark: '#0a0a0a',
    light: '#f0fff4',
    darkGreen: '#0A2818'
  };
  
  const fromColor = colors[from];
  const toColor = colors[to];
  
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
