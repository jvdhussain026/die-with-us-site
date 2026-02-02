import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { Sparkles } from 'lucide-react';
import { appConfig } from '../config/appConfig';

export function DevelopmentStatus() {
  return (
    <section id="development-status" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div 
            className="relative rounded-2xl p-8 md:p-10 overflow-hidden"
            style={{
              backgroundColor: '#131316',
              border: '1px solid #2A2A30',
            }}
          >
            {/* Subtle glow effect */}
            <div 
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #5CFF7A 0%, transparent 70%)' }}
            />

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#5CFF7A]/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#5CFF7A]" />
              </div>
              <h2 className="text-xl md:text-2xl font-medium text-[#E6E6EB]">
                {appConfig.releaseStatus}
              </h2>
            </div>

            {/* Content */}
            <p className="text-[#8A8A95] mb-6 leading-relaxed">
              {appConfig.appName} is now available for everyone.
              <br />
              This version is for people who want to:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Experience something different',
                'Connect without profiles or accounts',
                'Share moments before the battery runs out',
                'Be part of a calm, growing community',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-[#E6E6EB]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A]" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <p className="text-[#8A8A95] text-sm">
              The app will continue to evolve responsibly. Your feedback matters.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
