import { useState, useRef, useEffect } from 'react';
import { X, ArrowLeft, Send, Phone, Flame, TrendingDown, Users, MousePointerClick, Swords } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARCMessage } from './ARCMessage';
import { ARCTypingIndicator } from './ARCTypingIndicator';
import { getRandomGreeting, checkInstantResponse } from '@/lib/instantResponses';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  showPricingCTA?: boolean;
}

interface ARCChatProps {
  onClose: () => void;
  isMobile: boolean;
}

type LeadStage = 'chat' | 'ask_name' | 'ask_contact' | 'captured';

const MALTA_PHONE = '+35679711799';

const QUICK_ACTIONS = [
  {
    id: 'solve-problem',
    label: 'Solve My Problem Today',
    icon: Flame,
    type: 'prompt' as const,
    prompt: 'I have a problem I need solved today'
  },
  {
    id: 'more-customers',
    label: 'I Need More Customers',
    icon: Users,
    type: 'prompt' as const,
    prompt: 'I need more customers for my business'
  },
  {
    id: 'social-not-working',
    label: "Social Media Isn't Working",
    icon: TrendingDown,
    type: 'prompt' as const,
    prompt: "My social media isn't working"
  },
  {
    id: 'competitors',
    label: 'Competitors Are Beating Me',
    icon: Swords,
    type: 'prompt' as const,
    prompt: 'My competitors are doing better than me'
  },
  {
    id: 'roast',
    label: 'Roast My Business',
    icon: MousePointerClick,
    type: 'prompt' as const,
    prompt: 'Give me an honest assessment of my business and what needs to change'
  },
  {
    id: 'talk',
    label: 'Talk to a Human Now',
    icon: Phone,
    type: 'phone' as const
  },
];

// Trigger lead capture after this many AI responses
const LEAD_CAPTURE_AFTER = 2;

function shouldCaptureLead(messages: Message[]): boolean {
  const aiMessages = messages.filter(m => !m.isUser);
  return aiMessages.length >= LEAD_CAPTURE_AFTER;
}

export function ARCChat({ onClose, isMobile }: ARCChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const [leadStage, setLeadStage] = useState<LeadStage>('chat');
  const [leadName, setLeadName] = useState('');
  const [leadService, setLeadService] = useState('Website Chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (messages.length === 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages([{
            id: 'greeting',
            content: getRandomGreeting(),
            isUser: false
          }]);
        }, 800);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const addArcMessage = (content: string, showPricingCTA = false) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content,
      isUser: false,
      showPricingCTA
    }]);
  };

  const triggerLeadCapture = (currentMessages: Message[]) => {
    const fullConvo = currentMessages.map(m => m.content).join(' ').toLowerCase();
    if (fullConvo.includes('restaurant') || fullConvo.includes('food') || fullConvo.includes('hospitality')) {
      setLeadService('Hospitality & Restaurant Marketing');
    } else if (fullConvo.includes('real estate') || fullConvo.includes('property')) {
      setLeadService('Real Estate Marketing');
    } else if (fullConvo.includes('social media') || fullConvo.includes('instagram') || fullConvo.includes('tiktok')) {
      setLeadService('Social Media Management');
    } else if (fullConvo.includes('ai') || fullConvo.includes('automation') || fullConvo.includes('chatbot')) {
      setLeadService('AI & Automation');
    } else if (fullConvo.includes('igaming') || fullConvo.includes('casino')) {
      setLeadService('iGaming Marketing');
    }

    setLeadStage('ask_name');
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addArcMessage(`One more thing before I give you the full picture.\n\n**What's your name?**\n\n(So I know who I'm talking to — not a robot thing, just basic respect.)`);
      }, 600);
    }, 400);
  };

  const handleLeadName = (name: string) => {
    setLeadName(name);
    setLeadStage('ask_contact');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addArcMessage(`Got it, ${name}.\n\n**What's the best number or email to reach you?**\n\nSahan from OARC will follow up personally — not a generic email, not an automated sequence. A real conversation.`);
    }, 700);
  };

  const handleLeadContact = async (contact: string) => {
    setLeadStage('captured');
    setIsTyping(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: leadName, contact, service: leadService })
      });
    } catch (_e) {
      // silent — don't break UX
    }

    setTimeout(() => {
      setIsTyping(false);
      addArcMessage(`Perfect. You're on the list, ${leadName}.\n\n• **Sahan will reach out to you directly** — usually within a few hours\n• **In the meantime** — call anytime: +356 7971 1799\n• **Or email:** hello@oarcdigital.com\n\nAnything else you want me to answer right now?`);
    }, 800);
  };

  const sendMessage = async (messageText: string, buttonId?: string) => {
    if (!messageText.trim()) return;

    // Lead capture flow intercepts input
    if (leadStage === 'ask_name') {
      setMessages(prev => [...prev, { id: Date.now().toString(), content: messageText, isUser: true }]);
      setInput('');
      handleLeadName(messageText.trim());
      return;
    }

    if (leadStage === 'ask_contact') {
      setMessages(prev => [...prev, { id: Date.now().toString(), content: messageText, isUser: true }]);
      setInput('');
      handleLeadContact(messageText.trim());
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      isUser: true
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setShowPrompts(false);
    setIsTyping(true);

    const instantResult = checkInstantResponse(messageText);

    if (instantResult) {
      setTimeout(() => {
        setIsTyping(false);
        const updated = [...newMessages, {
          id: (Date.now() + 1).toString(),
          content: instantResult.response,
          isUser: false,
          showPricingCTA: instantResult.showPricingCTA
        }];
        setMessages(updated);
        if (leadStage === 'chat' && shouldCaptureLead(updated)) {
          triggerLeadCapture(updated);
        }
      }, 500);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages.map(m => ({
            role: m.isUser ? 'user' : 'assistant',
            content: m.content
          })),
          buttonId: buttonId || null
        })
      });

      const data = await response.json();
      setIsTyping(false);

      const arcResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || 'Something went wrong. Try again, or email hello@oarcdigital.com',
        isUser: false
      };
      const updated = [...newMessages, arcResponse];
      setMessages(updated);

      if (leadStage === 'chat' && shouldCaptureLead(updated)) {
        triggerLeadCapture(updated);
      }

    } catch (_error) {
      setIsTyping(false);
      const fallback = checkInstantResponse(messageText) || { response: `Here's my honest take:

• **Most businesses** have the same core issues — wrong audience, inconsistent content, no follow-up system
• **The right fix** depends on your specific situation
• **Fastest path forward** — call Sahan: +356 7971 1799

What industry are you in?`, showPricingCTA: false };
      addArcMessage(fallback.response);
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

  const getInputPlaceholder = () => {
    if (leadStage === 'ask_name') return 'Your name...';
    if (leadStage === 'ask_contact') return 'Phone or email...';
    return 'Type a message...';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`fixed z-[9999] flex flex-col ${isMobile ? 'inset-0' : 'bottom-6 right-6 w-[380px] h-[550px] rounded-2xl'}`}
      style={{
        backgroundColor: '#0a0a0f',
        border: isMobile ? 'none' : '1px solid #1a1a24',
        boxShadow: isMobile ? 'none' : '0 12px 50px rgba(0, 0, 0, 0.5)'
      }}
      data-testid="arc-chat-window"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 h-[60px] shrink-0"
        style={{
          backgroundColor: '#0f0f14',
          borderBottom: '1px solid #1a1a24',
          borderRadius: isMobile ? '0' : '16px 16px 0 0'
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
            <div className="text-[#22c55e] text-[11px]">Online</div>
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
            <ARCMessage content={message.content} isUser={message.isUser} />
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

        {/* Quick actions — only after first greeting */}
        {showPrompts && messages.length === 1 && !isTyping && leadStage === 'chat' && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {QUICK_ACTIONS.map((action) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center gap-2 px-3 py-2.5 text-[12px] font-medium rounded-lg border transition-all"
                  style={{ borderColor: '#333', color: '#999', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e';
                    e.currentTarget.style.color = '#22c55e';
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#333';
                    e.currentTarget.style.color = '#999';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  data-testid={`button-action-${action.id}`}
                >
                  <IconComponent size={14} />
                  <span>{action.label}</span>
                </button>
              );
            })}
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
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getInputPlaceholder()}
          className="flex-1 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
          style={{ backgroundColor: '#1a1a24', border: '1px solid #252530', borderRadius: '12px' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = '#22c55e'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = '#252530'; }}
          data-testid="input-message"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="w-11 h-11 flex items-center justify-center text-black transition-all"
          style={{
            backgroundColor: input.trim() ? '#22c55e' : 'rgba(34, 197, 94, 0.4)',
            borderRadius: '12px',
            cursor: input.trim() ? 'pointer' : 'not-allowed'
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
