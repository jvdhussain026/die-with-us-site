import { motion } from 'framer-motion';
import { appConfig } from '../config/appConfig';

export function AnimatedBattery() {
  const { minLevel, maxLevel, duration } = appConfig.batteryAnimation;
  
  // Calculate widths for animation
  const minWidth = `${minLevel * 4}%`; // 1% = 4% width
  const maxWidth = `${maxLevel * 4}%`; // 20% = 80% width
  
  return (
    <div className="relative w-20 h-9 border-2 border-[#E6E6EB]/40 rounded-lg flex items-center px-1.5 bg-[#0B0B0D]">
      {/* Battery terminal */}
      <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-2 h-4 bg-[#E6E6EB]/40 rounded-r-md" />
      
      {/* Battery fill - animates from low to slightly higher (realistic charging) */}
      <motion.div
        className="h-6 rounded-md"
        initial={{
          width: minWidth,
          backgroundColor: '#FF6B6B',
        }}
        animate={{
          width: [minWidth, maxWidth, minWidth],
          backgroundColor: ['#FF6B6B', '#FFD75C', '#FF6B6B'],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Low percentage - red state */}
        <motion.span
          className="text-sm font-mono font-bold absolute"
          style={{ color: '#FFFFFF' }}
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.5, 1],
          }}
        >
          {minLevel}%
        </motion.span>
        
        {/* Higher percentage - yellow state */}
        <motion.span
          className="text-sm font-mono font-bold absolute"
          style={{ color: '#0B0B0D' }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.5, 1],
          }}
        >
          {maxLevel}%
        </motion.span>
      </div>
    </div>
  );
}
