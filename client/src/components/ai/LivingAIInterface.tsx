import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LivingAIInterface() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
        { role: 'ai', text: "Systems online. OARC Neural Interface initialized. How can I accelerate your revenue today?" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInputValue("");
        setIsTyping(true);

        // --- 1. SIMULATION MODE (Default) ---
        // This provides an immediate "alive" feel without server costs.
        setTimeout(() => {
            setIsTyping(false);
            const responses = [
                `Analysis complete. I've flagged "${userMsg}" for priority review by our Strategy Unit.`,
                "OARC Core has received your input. Pattern matching against our revenue models... Done. A human expert will reach out shortly.",
                "Input received. Initializing preliminary audit based on your query. Stand by for contact within 24 hours.",
                `Acknowledged. I'm routing your request regarding "${userMsg}" to the relevant sector specialist.`
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setMessages(prev => [...prev, { role: 'ai', text: randomResponse }]);
        }, 1500);

        // --- 2. REAL AI MODE (Uncomment in Replit) ---
        /*
        try {
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              message: userMsg,
              // SYSTEM PROMPT: This is what makes it "Not Generic"
              systemPrompt: "You are OARC Core, an advanced AI marketing nexus. You are NOT a generic assistant. You speak with precision, using slightly futuristic/technical terminology (e.g., 'Optimizing', 'Deploying', 'Calculating'). Your goal is to capture lead intent and impress them with efficiency. Keep responses under 40 words."
            })
          });
          
          const data = await response.json();
          if (data.reply) {
             setIsTyping(false);
             setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
          }
        } catch (error) {
          console.error("Neural Link disrupted:", error);
          setIsTyping(false);
          setMessages(prev => [...prev, { role: 'ai', text: "Neural Link unstable. Request logged locally for manual review." }]);
        }
        */
    };

    return (
        <>
            {/* Floating Trigger - "Living" Orb */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
                        onClick={() => setIsOpen(true)}
                    >
                        {/* Pulsing Rings */}
                        <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20 duration-1000"></div>
                        <div className="absolute inset-[-4px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>

                        {/* Core */}
                        <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-purple-900/40" />
                            <Cpu className="w-6 h-6 text-cyan-400 animate-pulse relative z-10" />

                            {/* Digital Noise Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                        </div>

                        {/* Label Tooltip */}
                        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur border border-white/10 rounded-lg text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Initialize OARC Core
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expanded Neural Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide">OARC <span className="text-cyan-400">CORE</span></h3>
                                    <p className="text-[10px] text-zinc-500 font-mono uppercase">Neural Link Active</p>
                                </div>
                            </div>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-400 hover:text-white" onClick={() => setIsOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent" ref={scrollRef}>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: msg.role === 'ai' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-100 rounded-br-none'
                                            : 'bg-zinc-800/50 border border-white/10 text-zinc-300 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-zinc-800/50 border border-white/10 px-4 py-3 rounded-lg rounded-bl-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/40">
                            <div className="relative flex items-center gap-2">
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask OARC Core..."
                                    className="bg-zinc-900/50 border-zinc-800 focus:border-cyan-500/50 text-white placeholder:text-zinc-600 rounded-full pl-4 pr-12"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="absolute right-1 w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                    disabled={!inputValue.trim() || isTyping}
                                >
                                    <Send className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                        </form>

                        <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl ring-1 ring-inset ring-white/5"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
