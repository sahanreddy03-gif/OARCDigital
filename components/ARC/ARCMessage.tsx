"use client";

import { motion } from 'framer-motion';

interface ARCMessageProps {
  content: string;
  isUser: boolean;
  isStreaming?: boolean;
}

// Converts raw ARC text → readable React nodes:
//   **bold** → <strong> (no asterisks shown)
//   [text](url) → <a>
//   \n → <br />
//   Bullet lines (• or - at start) → slight left indent
function renderContent(text: string): React.ReactNode[] {
  if (!text) return [];

  // Tokenise into segments: links, bold, plain text, newlines
  const TOKEN_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\n/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let lineKey = 0;
  let match: RegExpExecArray | null;

  const pushPlain = (str: string, keyPrefix: string) => {
    if (!str) return;
    str.split('\n').forEach((line, i, arr) => {
      if (i > 0) nodes.push(<br key={`br-${keyPrefix}-${i}`} />);
      if (line) nodes.push(<span key={`p-${keyPrefix}-${i}`}>{line}</span>);
    });
  };

  while ((match = TOKEN_RE.exec(text)) !== null) {
    const [full] = match;

    // Push plain text before this match
    const before = text.slice(last, match.index);
    if (before) pushPlain(before, `pre-${match.index}`);

    if (full === '\n') {
      nodes.push(<br key={`nl-${match.index}`} />);
    } else if (full.startsWith('[')) {
      // Markdown link
      const label = match[1];
      const url   = match[2];
      nodes.push(
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
    } else if (full.startsWith('**')) {
      // Bold — render as slightly brighter span, no asterisks
      const inner = match[3];
      nodes.push(
        <span key={`b-${match.index}`} style={{ color: '#ffffff', fontWeight: 600 }}>
          {inner}
        </span>
      );
    }

    last = match.index + full.length;
  }

  // Remaining tail
  const tail = text.slice(last);
  if (tail) pushPlain(tail, 'tail');

  return nodes;
}

export function ARCMessage({ content, isUser, isStreaming }: ARCMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`px-4 py-3 max-w-[82%] text-[14px] leading-[1.65] ${
          isUser ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
        }`}
        style={{
          backgroundColor: isUser ? '#22c55e' : '#181820',
          color: isUser ? '#000' : '#d4d4d8',
        }}
        data-testid={isUser ? 'message-user' : 'message-arc'}
      >
        {isUser ? content : renderContent(content)}
        {isStreaming && !isUser && (
          <span
            className="inline-block ml-0.5 w-[2px] h-[13px] align-middle animate-pulse"
            style={{ backgroundColor: '#22c55e', verticalAlign: 'middle' }}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.div>
  );
}
