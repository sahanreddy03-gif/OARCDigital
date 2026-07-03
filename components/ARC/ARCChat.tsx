"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, ArrowLeft, ArrowUpRight, Send, Phone, Flame, TrendingDown, Users, MousePointerClick, Swords, ChevronLeft } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { ARCMessage } from './ARCMessage';
import { ARCTypingIndicator } from './ARCTypingIndicator';
import { checkInstantResponse } from '@/lib/instantResponses';
import { getRandomGreeting, H360_SUGGESTIONS } from '@/lib/arcSystemPrompt';
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
  contextMode?: 'default' | 'h360';
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

const SUGGESTIONS = [
  "What services does OARC offer?",
  "How do you integrate AI into my business?",
  "Why OARC for growth — what makes you different?",
  "How do you combine strategy with creative?",
  "How do you get more customers fast?",
  "Can you build an AI agent for my business?",
  "How does the 90-day guarantee work?",
  "Talk to a human now",
];

const QUICK_ACTIONS = [
  { id: 'solve-problem',      label: 'Solve My Problem Today',      icon: Flame,            type: 'prompt' as const, prompt: 'I have a problem I need solved today' },
  { id: 'more-customers',     label: 'I Need More Customers',       icon: Users,            type: 'prompt' as const, prompt: 'I need more customers for my business' },
  { id: 'social-not-working', label: "Social Media Isn't Working",  icon: TrendingDown,     type: 'prompt' as const, prompt: "My social media isn't working" },
  { id: 'competitors',        label: 'Competitors Are Beating Me',  icon: Swords,           type: 'prompt' as const, prompt: 'My competitors are doing better than me' },
  { id: 'roast',              label: 'Roast My Business',           icon: MousePointerClick, type: 'prompt' as const, prompt: 'Give me an honest assessment of my business' },
  { id: 'talk',               label: 'Talk to a Human Now',         icon: Phone,            type: 'phone' as const },
];

export function ARCChat({ onClose, isMobile, initialPrompt, contextMode = 'default' }: ARCChatProps) {
  const [messages, setMessages]           = useState<Message[]>([]);
  const [input, setInput]                 = useState('');
  const [isTyping, setIsTyping]           = useState(false);
  const [isStreaming, setIsStreaming]     = useState(false);
  const [followups, setFollowups]         = useState<string[]>([]);
  const [hasStarted, setHasStarted]       = useState(false);
  const [proactiveLeadSent, setProactiveLeadSent] = useState(false);

  const initialPromptSentRef = useRef(false);
  const messagesEndRef        = useRef<HTMLDivElement>(null);
  const inputRef              = useRef<HTMLInputElement>(null);
  const abortRef              = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, isStreaming, scrollToBottom]);

  // Initial greeting loads in background — shown once chat starts
  const greetingRef = useRef<string | null>(null);
  useEffect(() => {
    greetingRef.current = getRandomGreeting(contextMode);
  }, [contextMode]);

  // Auto-send initialPrompt once provided
  useEffect(() => {
    if (!initialPrompt || initialPromptSentRef.current) return;
    initialPromptSentRef.current = true;
    startChat(initialPrompt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPrompt]);

  const startChat = (text: string) => {
    setHasStarted(true);
    // Show greeting first, then send message
    const greeting = greetingRef.current ?? "What's the problem you're trying to solve?";
    setMessages([{ id: 'greeting', content: greeting, isUser: false }]);
    setTimeout(() => sendMessage(text, undefined, [{ id: 'greeting', content: greeting, isUser: false }]), 300);
  };

  const sendMessage = async (
    messageText: string,
    buttonId?: string,
    existingMessages?: Message[],
  ) => {
    if (!messageText.trim() || isStreaming) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const base = existingMessages ?? messages;
    const userMessage: Message = { id: Date.now().toString(), content: messageText, isUser: true };
    const newMessages = [...base, userMessage];
    setMessages(newMessages);
    setInput('');
    setFollowups([]);

    // Proactive contact capture
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

    // Fast path: local instant response
    const instant = checkInstantResponse(messageText);
    if (instant) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          content: instant.response,
          isUser: false,
          showPricingCTA: instant.showPricingCTA,
        }]);
      }, 350);
      return;
    }

    // Streaming placeholder
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
          contextMode,
        }),
      });

      if (!response.ok || !response.body) throw new Error(`HTTP ${response.status}`);

      const reader  = response.body.getReader();
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
          let eventType = '', eventData = '';
          for (const line of part.split('\n')) {
            if (line.startsWith('event: ')) eventType = line.slice(7).trim();
            else if (line.startsWith('data: '))  eventData = line.slice(6).trim();
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
          } catch { /* malformed chunk */ }
        }
      }

      setMessages(prev => prev.map(m =>
        m.id === streamId ? { ...m, isStreaming: false } : m
      ));

    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setMessages(prev => prev.map(m =>
        m.id === streamId
          ? { ...m, content: `Connection dropped. Email ${NAP.email} or call ${NAP.phoneDisplay}.`, isStreaming: false }
          : m
      ));
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!hasStarted) { startChat(input); } else { sendMessage(input); }
  };

  const handleSuggestion = (text: string) => {
    if (text === 'Talk to a human now') {
      window.open(`tel:${MALTA_PHONE}`, '_self');
      return;
    }
    if (!hasStarted) { startChat(text); } else { sendMessage(text); }
  };

  const handleFollowup = (q: string) => {
    setFollowups([]);
    sendMessage(q);
  };

  const isBusy = isTyping || isStreaming;
  const idleSuggestions = contextMode === 'h360' ? H360_SUGGESTIONS : SUGGESTIONS;
  const idlePlaceholder = contextMode === 'h360' ? 'Your restaurant name or biggest headache…' : 'What Can We Help You Achieve?';

  // ─── Panel wrapper ───────────────────────────────────────────────────────────
  const panelClass = isMobile ? 'fixed inset-0 z-[9999]' : 'fixed bottom-6 right-6 z-[9999] w-[420px] h-[600px] rounded-[28px] overflow-hidden';

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={panelClass}
      style={{ boxShadow: isMobile ? 'none' : '0 24px 80px rgba(0,0,0,0.35)' }}
      data-lenis-prevent
      data-testid="arc-chat-window"
    >
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          /* ──────────── IDLE SCREEN ──────────── */
          <m.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="w-full h-full flex flex-col relative overflow-hidden"
            style={{ backgroundColor: '#e8e8ec' }}
          >
            {/* Apple-style blobs — larger, softer, more organic */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <div className="absolute top-[5%] left-[60%] w-96 h-96 rounded-full"
                style={{ background: 'radial-gradient(circle, #d8d8de 0%, transparent 65%)', transform: 'translate(-50%,-50%)' }} />
              <div className="absolute top-[50%] left-[20%] w-80 h-80 rounded-full"
                style={{ background: 'radial-gradient(circle, #c8c8d4 0%, transparent 65%)', transform: 'translate(-50%,-50%)' }} />
              <div className="absolute bottom-[0%] right-[-5%] w-80 h-80 rounded-full"
                style={{ background: 'radial-gradient(circle, #d4d4dc 0%, transparent 65%)' }} />
            </div>

            {/* Close button */}
            <div className="relative z-10 flex justify-between items-center px-5 pt-5">
              <span className="text-[13px] font-semibold tracking-widest text-zinc-400 uppercase">ARC</span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}
                data-testid="button-close-idle"
              >
                <X size={15} className="text-zinc-600" />
              </button>
            </div>

            {/* Main input pill */}
            <form onSubmit={handleSubmit} className="relative z-10 px-5 mt-6">
              <div
                className="flex items-center gap-3 pl-5 pr-2 py-2 rounded-full"
                style={{ backgroundColor: '#111113' }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={idlePlaceholder}
                  className="flex-1 bg-transparent text-white text-[15px] font-medium outline-none placeholder-zinc-400"
                  data-testid="input-idle"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-opacity"
                  style={{
                    backgroundColor: '#ffffff',
                    opacity: input.trim() ? 1 : 0.6,
                    cursor: input.trim() ? 'pointer' : 'default',
                  }}
                  data-testid="button-idle-submit"
                >
                  <ArrowUpRight size={18} className="text-zinc-900" strokeWidth={2.5} />
                </button>
              </div>
            </form>

            {/* Suggestion pills — Apple style */}
            <div className="relative z-10 flex flex-col gap-2 px-5 mt-6 overflow-y-auto pb-6" data-lenis-prevent>
              {idleSuggestions.map((s, i) => (
                <m.button
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.2 }}
                  onClick={() => handleSuggestion(s)}
                  className="w-full text-center px-5 py-3.5 rounded-full text-[14px] font-normal transition-colors"
                  style={{
                    backgroundColor: '#f0f0f3',
                    color: '#1c1c1e',
                    border: '1px solid #e0e0e8',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e8e8ef'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#f0f0f3'; }}
                  data-testid={`button-suggestion-${i}`}
                >
                  {s}
                </m.button>
              ))}
            </div>
          </m.div>
        ) : (
          /* ──────────── CHAT SCREEN — Apple light theme ──────────── */
          <m.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full flex flex-col"
            style={{ backgroundColor: '#f2f2f7' }}
          >
            {/* Chat header — white, clean */}
            <div
              className="flex items-center justify-between px-4 h-[60px] shrink-0"
              style={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #e5e5ea',
                borderRadius: isMobile ? 0 : '28px 28px 0 0',
              }}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setHasStarted(false); setMessages([]); setFollowups([]); greetingRef.current = getRandomGreeting(contextMode); }}
                  className="transition-colors mr-1"
                  style={{ color: '#8e8e93' }}
                  data-testid="button-back-to-idle"
                >
                  <ChevronLeft size={20} />
                </button>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: '#1c1c1e', color: '#ffffff' }}
                >
                  A
                </div>
                <div>
                  <div className="font-semibold text-[14px]" style={{ color: '#1c1c1e' }}>ARC</div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: isStreaming ? '#ff9500' : '#34c759' }}
                    />
                    <span className="text-[10px]" style={{ color: isStreaming ? '#ff9500' : '#34c759' }}>
                      {isStreaming ? 'Thinking...' : 'Online'}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="transition-colors"
                style={{ color: '#8e8e93' }}
                data-testid="button-close-chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: '#f2f2f7' }} data-lenis-prevent>
              {messages.filter(msg => !(msg.isStreaming && !msg.content)).map(msg => (
                <div key={msg.id}>
                  <ARCMessage content={msg.content} isUser={msg.isUser} isStreaming={msg.isStreaming} />
                  {msg.showPricingCTA && (
                    <div className="mt-2 mb-4">
                      <a
                        href="/pricing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl"
                        style={{ backgroundColor: '#1c1c1e', color: '#ffffff' }}
                      >
                        Get Custom Pricing
                      </a>
                    </div>
                  )}
                </div>
              ))}

              {isStreaming && messages.some(m => m.isStreaming && !m.content) && <ARCTypingIndicator />}

              {/* Follow-up suggestions — Apple blue links */}
              {followups.length > 0 && !isBusy && (
                <div className="mt-3 flex flex-col gap-1.5">
                  {followups.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleFollowup(q)}
                      className="w-full text-left px-3 py-2.5 text-[13px] rounded-xl transition-colors"
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e5ea',
                        color: '#007aff',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f2f2f7'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                      data-testid={`button-followup-${i}`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input bar — white bar, light pill */}
            <form
              onSubmit={e => { e.preventDefault(); sendMessage(input); }}
              className="shrink-0 px-3 pb-3 pt-2"
              style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e5ea' }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: '#f2f2f7', border: '1px solid #e5e5ea' }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={isBusy ? 'ARC is thinking...' : 'Ask anything...'}
                  disabled={isBusy}
                  className="flex-1 bg-transparent text-sm outline-none disabled:opacity-40"
                  style={{ color: '#1c1c1e' }}
                  onFocus={e => { (e.currentTarget.parentElement as HTMLElement).style.borderColor = '#1c1c1e40'; }}
                  onBlur={e => { (e.currentTarget.parentElement as HTMLElement).style.borderColor = '#e5e5ea'; }}
                  data-testid="input-message"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isBusy}
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-opacity"
                  style={{
                    backgroundColor: input.trim() && !isBusy ? '#1c1c1e' : 'rgba(28,28,30,0.2)',
                    cursor: input.trim() && !isBusy ? 'pointer' : 'not-allowed',
                  }}
                  data-testid="button-send"
                >
                  <Send size={14} className="text-white" strokeWidth={2.5} />
                </button>
              </div>
            </form>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default ARCChat;
