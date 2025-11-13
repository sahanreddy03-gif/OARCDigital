interface BrandLogoProps {
  className?: string;
  variant?: 'white' | 'dark';
  width?: number;
}

export default function BrandLogo({ className = '', variant = 'white', width }: BrandLogoProps) {
  const oarcColor = variant === 'white' ? 'white' : '#1C1C22';
  const digitalColor = '#FF5A00';
  const strokeWidth = 12;

  return (
    <svg
      viewBox="0 0 660 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMid meet"
      style={{ height: '1em', width: width ? `${width}px` : 'auto' }}
    >
      <g stroke={oarcColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* O */}
        <circle cx="40" cy="60" r="32" />
        
        {/* A - Pure Triangle (NO crossbar) */}
        <path d="M 92 100 L 128 20 L 164 100" />
        
        {/* R */}
        <path d="M 184 100 L 184 20 L 220 20 Q 240 20 240 45 Q 240 65 220 65 L 184 65 M 220 65 L 248 100" />
        
        {/* C */}
        <path d="M 310 35 Q 290 20 270 20 Q 250 20 250 40 L 250 80 Q 250 100 270 100 Q 290 100 310 85" />
      </g>
      
      <g stroke={digitalColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {/* D */}
        <path d="M 24 120 L 24 50 L 55 50 Q 75 50 75 85 Q 75 120 55 120 Z" transform="translate(330, 0)" />
        
        {/* I */}
        <path d="M 430 50 L 430 120" />
        
        {/* G */}
        <path d="M 502 65 Q 482 50 462 50 Q 442 50 442 70 L 442 100 Q 442 120 462 120 Q 482 120 502 105 L 502 85 L 480 85" />
        
        {/* I */}
        <path d="M 530 50 L 530 120" />
        
        {/* T */}
        <path d="M 550 50 L 590 50 M 570 50 L 570 120" />
        
        {/* A - Pure Triangle (NO crossbar) */}
        <path d="M 600 120 L 620 50 L 640 120" />
        
        {/* L */}
        <path d="M 660 50 L 660 120 L 690 120" />
      </g>
    </svg>
  );
}
