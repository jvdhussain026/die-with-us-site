import { motion } from 'framer-motion';
import { AnimatedBattery } from '../components/AnimatedBattery';
import { Button } from '../components/ui/button';
import { ChevronDown } from 'lucide-react';
import { appConfig } from '../config/appConfig';

export function Hero() {
  const scrollToContent = () => {
    document.getElementById('development-status')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Battery indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <AnimatedBattery />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-medium tracking-tight mb-4"
          style={{ letterSpacing: '-0.02em' }}
        >
          {appConfig.appName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-[#8A8A95] mb-6"
        >
          A calm, anonymous chat
          <br />
          for low-battery moments
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-base text-[#8A8A95]/80 mb-10 max-w-md mx-auto"
        >
          When your battery is low, scrolling stops — conversation begins.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href={appConfig.androidDownloadUrl}
            download
          >
            <Button
              size="lg"
              className="bg-[#5CFF7A] text-[#0B0B0D] hover:bg-[#5CFF7A]/90 rounded-full px-8 h-12 font-medium transition-opacity duration-200"
            >
              Download Latest Version
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContent}
            className="border-[#1F1F24] text-[#8A8A95] hover:text-[#E6E6EB] hover:border-[#2A2A30] hover:bg-transparent rounded-full px-8 h-12 font-medium transition-all duration-200"
          >
            What is this?
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#8A8A95]/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
