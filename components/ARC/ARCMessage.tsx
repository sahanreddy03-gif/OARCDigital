"use client";

import { m } from 'framer-motion';

interface ARCMessageProps {
  content: string;
  isUser: boolean;
  isStreaming?: boolean;
}

// Converts raw ARC text → readable React nodes
function renderContent(text: string): React.ReactNode[] {
  if (!text) return [];

  const TOKEN_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)|\*\*([^*]+)\*\*|\n/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  const pushPlain = (str: string, keyPrefix: string) => {
    if (!str) return;
    str.split('\n').forEach((line, i) => {
      if (i > 0) nodes.push(<br key={`br-${keyPrefix}-${i}`} />);
      if (line) nodes.push(<span key={`p-${keyPrefix}-${i}`}>{line}</span>);
    });
  };

  while ((match = TOKEN_RE.exec(text)) !== null) {
    const [full] = match;
    const before = text.slice(last, match.index);
    if (before) pushPlain(before, `pre-${match.index}`);

    if (full === '\n') {
      nodes.push(<br key={`nl-${match.index}`} />);
    } else if (full.startsWith('[')) {
      nodes.push(
        <a
          key={`a-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
          style={{ color: '#007aff' }}
        >
          {match[1]}
        </a>
      );
    } else if (full.startsWith('**')) {
      nodes.push(
        <span key={`b-${match.index}`} style={{ color: '#1c1c1e', fontWeight: 600 }}>
          {match[3]}
        </span>
      );
    }

    last = match.index + full.length;
  }

  const tail = text.slice(last);
  if (tail) pushPlain(tail, 'tail');

  return nodes;
}

export function ARCMessage({ content, isUser, isStreaming }: ARCMessageProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      <div
        className={`px-4 py-3 max-w-[82%] text-[14px] leading-[1.65] ${
          isUser ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
        }`}
        style={
          isUser
            ? { backgroundColor: '#1c1c1e', color: '#ffffff' }
            : { backgroundColor: '#ffffff', color: '#1c1c1e', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }
        }
        data-testid={isUser ? 'message-user' : 'message-arc'}
      >
        {isUser ? content : renderContent(content)}
        {isStreaming && !isUser && (
          <span
            className="inline-block ml-0.5 w-[2px] h-[13px] align-middle animate-pulse"
            style={{ backgroundColor: '#8e8e93', verticalAlign: 'middle' }}
            aria-hidden="true"
          />
        )}
      </div>
    </m.div>
  );
}
