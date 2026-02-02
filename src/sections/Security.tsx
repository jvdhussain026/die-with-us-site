import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

const securityPoints = [
  'Strong backend security rules',
  'No ghost users',
  'No UID spoofing',
  'Append-only chat',
  'No message editing or deletion',
];

export function Security() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-tight text-center font-mono">
            &gt; Security-First Architecture
          </h2>
        </FadeIn>

        {/* Terminal-style container */}
        <FadeIn delay={0.1}>
          <div className="bg-[#0D0D0F] border border-[#1F1F24] rounded-xl p-6 font-mono text-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1F1F24]">
              <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
              <div className="w-3 h-3 rounded-full bg-[#FFD75C]" />
              <div className="w-3 h-3 rounded-full bg-[#5CFF7A]" />
              <span className="ml-4 text-[#8A8A95] text-xs">security.log</span>
            </div>

            {/* Security points */}
            <StaggerContainer staggerDelay={0.1} className="space-y-3">
              {securityPoints.map((point, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <span className="text-[#5CFF7A]">$</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="text-[#8A8A95]"
                    >
                      {point}
                    </motion.span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Blinking cursor */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-[#5CFF7A]">$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-[#5CFF7A]"
              />
            </div>
          </div>
        </FadeIn>

        {/* Quote */}
        <FadeIn delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-[#E6E6EB] font-mono text-sm">
              "Assume the APK is public. Security must still hold."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
