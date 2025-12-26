import { motion } from 'framer-motion';

interface ARCMessageProps {
  content: string;
  isUser: boolean;
}

export function ARCMessage({ content, isUser }: ARCMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
          isUser 
            ? 'rounded-2xl rounded-br-sm' 
            : 'rounded-2xl rounded-bl-sm'
        }`}
        style={{
          backgroundColor: isUser ? '#22c55e' : '#1a1a24',
          color: isUser ? '#000' : '#e5e5e5',
        }}
        data-testid={isUser ? 'message-user' : 'message-arc'}
      >
        {content}
      </div>
    </motion.div>
  );
}