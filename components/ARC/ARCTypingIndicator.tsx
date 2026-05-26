"use client";

import { m } from 'framer-motion';

export function ARCTypingIndicator() {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div
        className="flex flex-col gap-2 px-4 py-3 rounded-2xl rounded-bl-sm max-w-[80%]"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}
      >
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <m.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#8e8e93' }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <span className="text-[11px]" style={{ color: '#8e8e93' }}>ARC is typing...</span>
      </div>
    </div>
  );
}
