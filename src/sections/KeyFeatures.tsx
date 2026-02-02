import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { GlowCard } from '../components/GlowCard';
import { Eye, Battery, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Anonymous by Design',
    description: 'No profiles. No history. Just moments.',
    color: '#5CFF7A',
  },
  {
    icon: Battery,
    title: 'Battery-Aware Experience',
    description: 'The lower your battery, the more it matters.',
    color: '#5CFFEA',
  },
  {
    icon: Palette,
    title: 'Unique Message Colors',
    description: 'Every person gets a color. No names needed.',
    color: '#FFD75C',
  },
  {
    icon: Zap,
    title: 'Real-Time Chat',
    description: 'Instant connection. No delays.',
    color: '#FF5C9A',
  },
];

export function KeyFeatures() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight text-center">
            Key Features
          </h2>
        </FadeIn>

        <StaggerContainer 
          staggerDelay={0.1}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <GlowCard glowColor={feature.color}>
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    className="flex-shrink-0"
                  >
                    <feature.icon 
                      className="w-6 h-6" 
                      style={{ color: feature.color }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-medium text-[#E6E6EB] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#8A8A95] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
