interface BrandLogoProps {
  className?: string;
  variant?: 'white' | 'dark';
}

export default function BrandLogo({ className = '', variant = 'white' }: BrandLogoProps) {
  const oarcColor = variant === 'white' ? 'white' : '#1C1C22';
  const digitalColor = '#FF5A00';

  return (
    <svg
      viewBox="0 0 280 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMid meet"
      style={{ height: '1em', width: 'auto' }}
    >
      <defs>
        <style>
          {`
            .logo-text {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
              font-weight: 700;
              font-size: 32px;
              letter-spacing: 0.02em;
            }
          `}
        </style>
      </defs>
      
      {/* OARC - with custom triangle A */}
      <text x="0" y="30" fill={oarcColor} className="logo-text">O</text>
      
      {/* Custom Triangle A (NO crossbar) */}
      <g transform="translate(24, 0)">
        <line x1="0" y1="30" x2="9" y2="6" stroke={oarcColor} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="6" x2="18" y2="30" stroke={oarcColor} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      <text x="44" y="30" fill={oarcColor} className="logo-text">RC</text>
      
      {/* DIGITAL */}
      <text x="105" y="30" fill={digitalColor} className="logo-text">DIGITAL</text>
    </svg>
  );
}
