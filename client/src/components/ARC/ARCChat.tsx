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
}

interface ARCChatProps {
  onClose: () => void;
  isMobile: boolean;
}

const MALTA_PHONE = '+35679711799';

const QUICK_ACTIONS = [
  { 
    id: 'more-customers', 
    label: 'I Need More Customers', 
    icon: Users,
    type: 'prompt' as const, 
    prompt: 'I need more customers' 
  },
  { 
    id: 'social-not-working', 
    label: 'Social Media Isn\'t Working', 
    icon: TrendingDown,
    type: 'prompt' as const, 
    prompt: 'My social media isn\'t working' 
  },
  { 
    id: 'website-not-converting', 
    label: 'Website Isn\'t Converting', 
    icon: MousePointerClick,
    type: 'prompt' as const, 
    prompt: 'My website isn\'t converting visitors' 
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
    label: 'Roast My Marketing', 
    icon: Flame,
    type: 'prompt' as const, 
    prompt: 'Roast my marketing' 
  },
  { 
    id: 'talk', 
    label: 'Talk to Us Directly', 
    icon: Phone,
    type: 'phone' as const 
  },
];

export function ARCChat({ onClose, isMobile }: ARCChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
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

  const handleQuickAction = (action: typeof QUICK_ACTIONS[0]) => {
    if (action.type === 'phone') {
      window.open(`tel:${MALTA_PHONE}`, '_self');
    } else if (action.type === 'prompt' && 'prompt' in action) {
      sendMessage(action.prompt, action.id);  // Pass the button ID
    }
  };
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowPrompts(false);
    setIsTyping(true);

    const instantResponse = checkInstantResponse(messageText);
    
    if (instantResponse) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          content: instantResponse,
          isUser: false
        }]);
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
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: data.response || "Something went wrong. Try again, or email hello@oarcdigital.com",
        isUser: false
      }]);
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: "Connection issue. Try again, or reach us at hello@oarcdigital.com",
        isUser: false
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt);
  };

  const handleQuickAction = (action: typeof QUICK_ACTIONS[0]) => {
    if (action.type === 'phone') {
      window.open(`tel:${MALTA_PHONE}`, '_self');
    } else if (action.type === 'link' && 'href' in action) {
      window.location.href = action.href;
    } else if (action.type === 'prompt' && 'prompt' in action) {
      sendMessage(action.prompt);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`fixed z-[9999] flex flex-col ${
        isMobile 
          ? 'inset-0' 
          : 'bottom-6 right-6 w-[380px] h-[550px] rounded-2xl'
      }`}
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
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="button-back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div 
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)'
            }}
          >
            A
          </div>
          <div>
            <div className="text-white font-semibold text-[15px]">ARC</div>
            <div className="text-[#22c55e] text-[11px]">Online</div>
          </div>
        </div>
        {!isMobile && (
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors text-xl"
            data-testid="button-close-chat"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div 
        className="flex-1 overflow-y-auto p-4"
        style={{ backgroundColor: '#0a0a0f' }}
      >
        {messages.map(message => (
          <ARCMessage 
            key={message.id} 
            content={message.content} 
            isUser={message.isUser} 
          />
        ))}
        
        {isTyping && <ARCTypingIndicator />}
        
        {/* Quick Action Buttons */}
        {showPrompts && messages.length === 1 && !isTyping && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {QUICK_ACTIONS.map((action) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center gap-2 px-3 py-2.5 text-[12px] font-medium rounded-lg border transition-all"
                  style={{
                    borderColor: action.id === 'call' ? '#22c55e' : '#333',
                    color: action.id === 'call' ? '#22c55e' : '#999',
                    backgroundColor: action.id === 'call' ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e';
                    e.currentTarget.style.color = '#22c55e';
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (action.id === 'call') {
                      e.currentTarget.style.borderColor = '#22c55e';
                      e.currentTarget.style.color = '#22c55e';
                      e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                    } else {
                      e.currentTarget.style.borderColor = '#333';
                      e.currentTarget.style.color = '#999';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
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

      {/* Input Area */}
      <form 
        onSubmit={handleSubmit}
        className="flex items-center gap-2.5 px-4 h-[70px] shrink-0"
        style={{
          backgroundColor: '#0a0a0f',
          borderTop: '1px solid #1a1a24'
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
          style={{
            backgroundColor: '#1a1a24',
            border: '1px solid #252530',
            borderRadius: '12px'
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = '#22c55e'}
          onBlur={(e) => e.currentTarget.style.borderColor = '#252530'}
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