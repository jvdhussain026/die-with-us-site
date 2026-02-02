import { motion } from 'framer-motion';

interface Message {
  text: string;
  color: string;
  align: 'left' | 'right';
}

const messages: Message[] = [
  { text: 'anyone else at 3%?', color: '#5CFFEA', align: 'left' },
  { text: '2% here, can\'t sleep', color: '#FF5C9A', align: 'right' },
  { text: 'let\'s talk until our phones die', color: '#5CFF7A', align: 'left' },
  { text: 'what\'s on your mind?', color: '#FFD75C', align: 'right' },
  { text: 'just thinking about life...', color: '#5C9AFF', align: 'left' },
];

export function ChatMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="bg-[#131316] border border-[#1F1F24] rounded-3xl p-4 shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs text-[#8A8A95] font-mono">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 border border-[#8A8A95]/50 rounded-sm relative">
              <div className="absolute inset-0.5 bg-[#5CFF7A] rounded-[1px]" style={{ width: '20%' }} />
            </div>
          </div>
        </div>
        
        {/* Chat header */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#1F1F24] mx-auto mb-2 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#5CFF7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-sm text-[#8A8A95]">Anonymous Chat</p>
          <p className="text-xs text-[#5CFF7A] font-mono mt-1">12 people online</p>
        </div>
        
        {/* Messages */}
        <div className="space-y-3 min-h-[200px]">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.8 + 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex ${message.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0.3, 1] }}
                transition={{
                  duration: 8,
                  delay: index * 0.8 + 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  times: [0, 0.6, 0.8, 1],
                }}
                className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm"
                style={{
                  backgroundColor: `${message.color}15`,
                  color: message.color,
                  borderRadius: message.align === 'right' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                }}
              >
                {message.text}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Input area */}
        <div className="mt-4 pt-4 border-t border-[#1F1F24]">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-[#1F1F24] rounded-full px-4 py-2.5">
              <span className="text-sm text-[#8A8A95]">Type a message...</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#5CFF7A]/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#5CFF7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute -inset-4 bg-gradient-radial from-[#5CFF7A]/5 to-transparent rounded-[40px] -z-10 blur-2xl"
        style={{ transform: 'translateY(10px)' }}
      />
    </div>
  );
}
