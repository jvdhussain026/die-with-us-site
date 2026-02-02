import { motion } from 'framer-motion';

export function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle glow behind shield - static with pulse */}
      <motion.div 
        className="absolute inset-0 bg-[#5CFF7A]/15 blur-xl rounded-full"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full"
      >
        <path
          d="M32 4L8 14V30C8 44.5 18.8 57.3 32 60C45.2 57.3 56 44.5 56 30V14L32 4Z"
          stroke="#5CFF7A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 32L28 38L42 24"
          stroke="#5CFF7A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
