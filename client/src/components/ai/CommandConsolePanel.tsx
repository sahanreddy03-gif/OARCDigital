import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { commandExamples, CommandExample, aiTeamMembers } from './aiAgentsData';
import { Terminal, Play, ChevronRight, Zap } from 'lucide-react';

interface CommandConsolePanelProps {
  autoPlay?: boolean;
  selectedAgentId?: string;
}

export function CommandConsolePanel({ autoPlay = false, selectedAgentId }: CommandConsolePanelProps) {
  const [activeCommandIdx, setActiveCommandIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showAction, setShowAction] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const filteredCommands = selectedAgentId 
    ? commandExamples.filter(cmd => cmd.agentId === selectedAgentId)
    : commandExamples;
  
  useEffect(() => {
    if (activeCommandIdx >= filteredCommands.length) {
      setActiveCommandIdx(0);
    }
  }, [filteredCommands.length, activeCommandIdx]);
    
  const safeIndex = Math.min(activeCommandIdx, filteredCommands.length - 1);
  const activeCommand = filteredCommands[safeIndex] || commandExamples[0];
  const agent = aiTeamMembers.find(a => a.id === activeCommand.agentId);
  
  const typeCommand = (command: CommandExample) => {
    setIsTyping(true);
    setTypedText('');
    setShowAction(false);
    
    const text = command.prompt;
    let i = 0;
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => setShowAction(true), 300);
      }
    }, 40);
    
    return () => clearInterval(typeInterval);
  };
  
  useEffect(() => {
    if (isPlaying) {
      const cleanup = typeCommand(activeCommand);
      
      intervalRef.current = setTimeout(() => {
        setActiveCommandIdx(prev => (prev + 1) % filteredCommands.length);
      }, 5000);
      
      return () => {
        cleanup();
        if (intervalRef.current) clearTimeout(intervalRef.current);
      };
    }
  }, [isPlaying, activeCommandIdx, filteredCommands.length]);
  
  const handleCommandClick = (idx: number) => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    setActiveCommandIdx(idx);
    typeCommand(filteredCommands[idx]);
  };
  
  return (
    <div className="relative">
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4ff4d]/10 border border-[#c4ff4d]/20 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Terminal className="w-4 h-4 text-[#c4ff4d]" />
          <span className="text-sm text-[#c4ff4d]">Command Console</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Natural Language <span className="text-[#c4ff4d]">Control</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Just tell your AI team what to do. They understand context and take action instantly.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-white/40 ml-2 font-mono">oarc-console</span>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-auto p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
              data-testid="button-console-play"
            >
              <Play className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#c4ff4d]' : 'text-white/40'}`} />
            </button>
          </div>
          
          <div className="p-6 min-h-[300px]">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#c4ff4d]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <ChevronRight className="w-4 h-4 text-[#c4ff4d]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/40 mb-2 font-mono">COMMAND</p>
                <p className="text-lg text-white font-mono">
                  {typedText}
                  {isTyping && (
                    <motion.span
                      className="inline-block w-2 h-5 bg-[#c4ff4d] ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </p>
              </div>
            </div>
            
            <AnimatePresence>
              {showAction && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      {agent && <agent.icon className="w-4 h-4 text-[#c4ff4d]" />}
                    </div>
                    <div>
                      <p className="text-xs text-[#c4ff4d]/60 font-mono">{agent?.name || 'Agent'} responding...</p>
                      <p className="text-sm text-white/80">{activeCommand.action}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#c4ff4d]" />
                      <span className="text-xs text-white/60">Connected: {activeCommand.system}</span>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs px-2 py-1 bg-[#c4ff4d]/10 text-[#c4ff4d] rounded-full">
                        {activeCommand.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-white/40 mb-4">Try these commands:</p>
          {filteredCommands.map((cmd, idx) => {
            const cmdAgent = aiTeamMembers.find(a => a.id === cmd.agentId);
            const isActive = idx === safeIndex;
            
            return (
              <motion.button
                key={cmd.id}
                onClick={() => handleCommandClick(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isActive 
                    ? 'bg-[#c4ff4d]/10 border-[#c4ff4d]/30' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ x: 4 }}
                data-testid={`button-command-${idx}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-[#c4ff4d]/20' : 'bg-white/10'
                  }`}>
                    {cmdAgent && <cmdAgent.icon className={`w-4 h-4 ${isActive ? 'text-[#c4ff4d]' : 'text-white/60'}`} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-mono truncate ${isActive ? 'text-white' : 'text-white/70'}`}>
                      {cmd.prompt}
                    </p>
                    <p className="text-xs text-white/40">{cmdAgent?.role}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#c4ff4d]' : 'text-white/30'}`} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CommandConsolePanel;
