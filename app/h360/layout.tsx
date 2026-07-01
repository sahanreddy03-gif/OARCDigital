import type { ReactNode } from 'react';
import H360ScrollReset from './_components/H360ScrollReset';

export default function H360Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-inter), system-ui, -apple-system, Arial, sans-serif',
        background: '#ffffff',
        color: '#1a1a1a',
        minHeight: '100vh',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      <style>{`
        .h360-root * { box-sizing: border-box; }
        .h360-root a { color: inherit; text-decoration: none; }
        .h360-root button { font-family: inherit; }
        .h360-root input { font-family: inherit; }
      `}</style>
      <div className="h360-root">{children}</div>
      <H360ScrollReset />
    </div>
  );
}
