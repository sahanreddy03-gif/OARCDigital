"use client";

import { motion } from 'framer-motion';

interface ARCMessageProps {
  content: string;
  isUser: boolean;
  isStreaming?: boolean;
}

// Parse markdown links [text](url) → real <a> tags. Preserves newlines.
function renderContent(text: string): React.ReactNode[] {
  if (!text) return [];
  const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const output: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_RE.exec(text)) !== null) {
    const [full, label, url] = match;
    const before = text.slice(last, match.index);
    if (before) {
      before.split('\n').forEach((line, i, arr) => {
        if (i > 0) output.push(<br key={`br-${last}-${i}`} />);
        if (line) output.push(<span key={`s-${last}-${i}`}>{line}</span>);
      });
    }
    output.push(
      <a
        key={`a-${match.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        style={{ color: '#4ade80' }}
      >
        {label}
      </a>
    );
    last = match.index + full.length;
  }

  const tail = text.slice(last);
  if (tail) {
    tail.split('\n').forEach((line, i) => {
      if (i > 0) output.push(<br key={`tbr-${i}`} />);
      if (line) output.push(<span key={`ts-${i}`}>{line}</span>);
    });
  }

  return output;
}

export function ARCMessage({ content, isUser, isStreaming }: ARCMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`px-4 py-3 max-w-[82%] text-sm leading-relaxed ${
          isUser ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
        }`}
        style={{
          backgroundColor: isUser ? '#22c55e' : '#1a1a24',
          color: isUser ? '#000' : '#e5e5e5',
        }}
        data-testid={isUser ? 'message-user' : 'message-arc'}
      >
        {isUser ? content : renderContent(content)}
        {isStreaming && !isUser && (
          <span
            className="inline-block ml-0.5 w-[2px] h-[14px] align-middle animate-pulse"
            style={{ backgroundColor: '#22c55e', verticalAlign: 'middle' }}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.div>
  );
}
