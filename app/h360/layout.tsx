import type { ReactNode } from 'react';
import H360SmoothScroll from './_components/H360SmoothScroll';

export default function H360Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: '"Inter", system-ui, -apple-system, Arial, sans-serif',
        background: '#ffffff',
        color: '#1a1a1a',
        minHeight: '100vh',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .h360-root * { box-sizing: border-box; }
        .h360-root a { color: inherit; text-decoration: none; }
        .h360-root button { font-family: inherit; }
        .h360-root input { font-family: inherit; }
      `}</style>
      <H360SmoothScroll>
        <div className="h360-root">{children}</div>
      </H360SmoothScroll>
    </div>
  );
}
