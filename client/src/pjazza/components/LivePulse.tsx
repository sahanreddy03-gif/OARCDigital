interface LivePulseProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function LivePulse({ size = 8, color = '#E05A3A', className = '' }: LivePulseProps) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          animation: 'pj-pulse-ring 1.5s ease-out infinite',
        }}
      />
      <span
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          background: color,
        }}
      />
    </span>
  );
}
