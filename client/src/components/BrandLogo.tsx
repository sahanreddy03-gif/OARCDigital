interface BrandLogoProps {
  className?: string;
  variant?: 'white' | 'dark';
}

export default function BrandLogo({ className = '', variant = 'white' }: BrandLogoProps) {
  const oarcColor = variant === 'white' ? '#FFFFFF' : '#1C1C22';
  const digitalColor = '#FF5A00';

  return (
    <div className={`inline-flex items-baseline gap-0.5 ${className}`}>
      <span 
        className="font-bold tracking-wide"
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 'inherit',
          color: oarcColor,
          letterSpacing: '0.02em',
          lineHeight: 1
        }}
      >
        O
      </span>
      
      {/* A with crossbar removed via clip-path */}
      <span 
        className="font-bold tracking-wide inline-block"
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 'inherit',
          color: oarcColor,
          letterSpacing: '0.02em',
          lineHeight: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 38%, 52% 38%, 43% 50%, 52% 50%, 52% 62%, 0 62%, 0 50%, 48% 50%, 48% 38%, 0 38%)'
        }}
      >
        A
      </span>
      
      <span 
        className="font-bold tracking-wide"
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 'inherit',
          color: oarcColor,
          letterSpacing: '0.02em',
          lineHeight: 1
        }}
      >
        RC
      </span>
      
      <span 
        className="font-bold tracking-wide"
        style={{ 
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: 'inherit',
          color: digitalColor,
          letterSpacing: '0.02em',
          lineHeight: 1,
          marginLeft: '0.15em'
        }}
      >
        Digital
      </span>
    </div>
  );
}
