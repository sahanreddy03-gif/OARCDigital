"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, ArrowLeft, Send, Phone, Flame, TrendingDown, Users, MousePointerClick, Swords } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARCMessage } from './ARCMessage';
import { ARCTypingIndicator } from './ARCTypingIndicator';
import { getRandomGreeting, checkInstantResponse } from '@/lib/instantResponses';
import { NAP } from "@/lib/seo/nap";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  isStreaming?: boolean;
  showPricingCTA?: boolean;
}

interface ARCChatProps {
  onClose: () => void;
  isMobile: boolean;
  initialPrompt?: string | null;
}

const EMAIL_RE = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const PHONE_RE = /(\+?\d[\d\s().-]{6,}\d)/;
function extractContact(text: string): string | null {
  const e = text.match(EMAIL_RE);
  if (e) return e[0];
  const p = text.match(PHONE_RE);
  if (p) return p[0].trim();
  return null;
}

const MALTA_PHONE = NAP.phoneE164;
const MALTA_EMAIL = NAP.email;

const QUICK_ACTIONS = [
  { id: 'solve-problem', label: 'Solve My Problem Today', icon: Flame, type: 'prompt' as const, prompt: 'I have a problem I need solved today' },
  { id: 'more-customers', label: 'I Need More Customers', icon: Users, type: 'prompt' as const, prompt: 'I need more customers for my business' },
  { id: 'social-not-working', label: "Social Media Isn't Working", icon: TrendingDown, type: 'prompt' as const, prompt: "My social media isn't working" },
  { id: 'competitors', label: 'Competitors Are Beating Me', icon: Swords, type: 'prompt' as const, prompt: 'My competitors are doing better than me' },
  { id: 'roast', label: 'Roast My Business', icon: MousePointerClick, type: 'prompt' as const, prompt: 'Give me an honest assessment of my business and what needs to change' },
  { id: 'talk', label: 'Talk to a Human Now', icon: Phone, type: 'phone' as const },
];

export function ARCChat({ onClose, isMobile, initialPrompt }: ARCChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [followups, setFollowups] = useState<string[]>([]);
  const [showPrompts, setShowPrompts] = useState(true);
  const [proactiveLeadSent, setProactiveLeadSent] = useState(false);
  const initialPromptSentRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, isStreaming, scrollToBottom]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      const t = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([{ id: 'greeting', content: getRandomGreeting(), isUser: false }]);
        }, 800);
      }, 300);
      return () => clearTimeout(t);
    }
  }, []);

  // Auto-send initialPrompt once greeting loads
  useEffect(() => {
    if (!initialPrompt || initialPromptSentRef.current) return;
    if (messages.length === 0 || isTyping) return;
    initialPromptSentRef.current = true;
    const t = setTimeout(() => sendMessage(initialPrompt), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrompt, messages.length, isTyping]);

  const sendMessage = async (messageText: string, buttonId?: string) => {
    if (!messageText.trim() || isStreaming) return;

    // Cancel any in-flight stream
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const userMessage: Message = { id: Date.now().toString(), content: messageText, isUser: true };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setShowPrompts(false);
    setFollowups([]);

    // Proactive contact capture — if user drops email/phone in any message
    const contact = extractContact(messageText);
    if (contact && !proactiveLeadSent) {
      setProactiveLeadSent(true);
      void fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Website visitor',
          contact,
          service: 'ARC Chat',
          source: 'ARC Chat — proactive',
          transcript: newMessages.map(m => `${m.isUser ? 'USER' : 'ARC'}: ${m.content}`).join('\n\n'),
        }),
      }).catch(() => {});
    }

    // Fast path: local instant response (returns {response, showPricingCTA} or null)
    const instant = checkInstantResponse(messageText);
    if (instant) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          content: instant.response,
          isUser: false,
          showPricingCTA: instant.showPricingCTA,
        }]);
      }, 400);
      return;
    }

    // Create a placeholder streaming message
    const streamId = (Date.now() + 1).toString();
    setIsStreaming(true);
    setMessages(prev => [...prev, { id: streamId, content: '', isUser: false, isStreaming: true }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortRef.current.signal,
        body: JSON.stringify({
          message: messageText,
          history: newMessages.map(m => ({ role: m.isUser ? 'user' : 'assistant', content: m.content })),
          buttonId: buttonId ?? null,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buf += decoder.decode(value, { stream: true });
        const parts = buf.split('\n\n');
        buf = parts.pop() ?? '';

        for (const part of parts) {
          if (!part.trim()) continue;

          let eventType = '';
          let eventData = '';

          for (const line of part.split('\n')) {
            if (line.startsWith('event: ')) eventType = line.slice(7).trim();
            else if (line.startsWith('data: ')) eventData = line.slice(6).trim();
          }

          if (!eventData) continue;

          try {
            const parsed = JSON.parse(eventData);

            if (eventType === 'content' && parsed.content) {
              accumulated += parsed.content;
              setMessages(prev => prev.map(m =>
                m.id === streamId ? { ...m, content: accumulated, isStreaming: true } : m
              ));
            }

            if (eventType === 'followups' && Array.isArray(parsed.followups)) {
              setFollowups(parsed.followups.slice(0, 3));
            }

            if (eventType === 'done') {
              setMessages(prev => prev.map(m =>
                m.id === streamId ? { ...m, isStreaming: false } : m
              ));
            }
          } catch {
            // malformed chunk — skip
          }
        }
      }

      // Finalize
      setMessages(prev => prev.map(m =>
        m.id === streamId ? { ...m, isStreaming: false } : m
      ));

    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;

      // Fallback message on error
      setMessages(prev => prev.map(m =>
        m.id === streamId
          ? { ...m, content: `Connection dropped. Email ${MALTA_EMAIL} or call ${NAP.phoneDisplay}.`, isStreaming: false }
          : m
      ));
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: typeof QUICK_ACTIONS[0]) => {
    if (action.type === 'phone') {
      window.open(`tel:${MALTA_PHONE}`, '_self');
    } else if (action.type === 'prompt' && 'prompt' in action) {
      sendMessage(action.prompt, action.id);
    }
  };

  const handleFollowup = (q: string) => {
    setFollowups([]);
    sendMessage(q);
  };

  const isBusy = isTyping || isStreaming;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`fixed z-[9999] flex flex-col ${isMobile ? 'inset-0' : 'bottom-6 right-6 w-[380px] h-[560px] rounded-2xl'}`}
      style={{
        backgroundColor: '#0a0a0f',
        border: isMobile ? 'none' : '1px solid #1a1a24',
        boxShadow: isMobile ? 'none' : '0 12px 50px rgba(0, 0, 0, 0.5)',
      }}
      data-testid="arc-chat-window"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 h-[60px] shrink-0"
        style={{
          backgroundColor: '#0f0f14',
          borderBottom: '1px solid #1a1a24',
          borderRadius: isMobile ? '0' : '16px 16px 0 0',
        }}
      >
        <div className="flex items-center gap-3">
          {isMobile && (
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" data-testid="button-back">
              <ArrowLeft size={20} />
            </button>
          )}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
          >
            A
          </div>
          <div>
            <div className="text-white font-semibold text-[15px]">ARC</div>
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: isStreaming ? '#facc15' : '#22c55e' }}
              />
              <span className="text-[11px]" style={{ color: isStreaming ? '#facc15' : '#22c55e' }}>
                {isStreaming ? 'Thinking...' : 'Online'}
              </span>
            </div>
          </div>
        </div>
        {!isMobile && (
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors" data-testid="button-close-chat">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: '#0a0a0f' }}>
        {messages.map(message => (
          <div key={message.id}>
            <ARCMessage
              content={message.content}
              isUser={message.isUser}
              isStreaming={message.isStreaming}
            />
            {message.showPricingCTA && (
              <div className="mt-3 mb-4">
                <a
                  href="/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white' }}
                >
                  Get Custom Pricing
                </a>
              </div>
            )}
          </div>
        ))}

        {isTyping && <ARCTypingIndicator />}

        {/* Quick action chips — only after first greeting */}
        {showPrompts && messages.length === 1 && !isTyping && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center gap-2 px-3 py-2.5 text-[12px] font-medium rounded-lg border transition-all"
                  style={{ borderColor: '#333', color: '#999', backgroundColor: 'transparent' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#22c55e';
                    e.currentTarget.style.color = '#22c55e';
                    e.currentTarget.style.backgroundColor = 'rgba(34,197,94,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#333';
                    e.currentTarget.style.color = '#999';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  data-testid={`button-action-${action.id}`}
                >
                  <Icon size={14} />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Follow-up suggestions */}
        {followups.length > 0 && !isBusy && (
          <div className="mt-3 flex flex-col gap-1.5">
            {followups.map((q, i) => (
              <button
                key={i}
                onClick={() => handleFollowup(q)}
                className="w-full text-left px-3 py-2 text-[12px] rounded-lg border transition-all"
                style={{ borderColor: '#1e2a1e', color: '#6ee7a0', backgroundColor: 'rgba(34,197,94,0.06)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#22c55e';
                  e.currentTarget.style.backgroundColor = 'rgba(34,197,94,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e2a1e';
                  e.currentTarget.style.backgroundColor = 'rgba(34,197,94,0.06)';
                }}
                data-testid={`button-followup-${i}`}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2.5 px-4 h-[70px] shrink-0"
        style={{ backgroundColor: '#0a0a0f', borderTop: '1px solid #1a1a24' }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={isBusy ? 'ARC is thinking...' : 'Type a message...'}
          disabled={isBusy}
          className="flex-1 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none disabled:opacity-50"
          style={{ backgroundColor: '#1a1a24', border: '1px solid #252530', borderRadius: '12px' }}
          onFocus={e => { e.currentTarget.style.borderColor = '#22c55e'; }}
          onBlur={e => { e.currentTarget.style.borderColor = '#252530'; }}
          data-testid="input-message"
        />
        <button
          type="submit"
          disabled={!input.trim() || isBusy}
          className="w-11 h-11 flex items-center justify-center text-black transition-all"
          style={{
            backgroundColor: input.trim() && !isBusy ? '#22c55e' : 'rgba(34,197,94,0.3)',
            borderRadius: '12px',
            cursor: input.trim() && !isBusy ? 'pointer' : 'not-allowed',
          }}
          data-testid="button-send"
        >
          <Send size={18} />
        </button>
      </form>
    </motion.div>
  );
}

export default ARCChat;
