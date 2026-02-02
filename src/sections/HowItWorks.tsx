import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

const steps = [
  'Open the app',
  'Enter when your battery is low',
  'Choose a name and a color',
  'Chat anonymously',
  'Battery ends — moment ends',
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight text-center">
            How It Works
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-3 bottom-12 w-px bg-[#1F1F24]" />

          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-6 mb-8">
                {/* Glowing dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-[#5CFF7A] animate-dot-glow"
                  />
                </div>

                {/* Step text */}
                <div className="pt-0.5">
                  <span className="text-sm text-[#8A8A95] font-mono mr-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#E6E6EB]">{step}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <p className="text-center text-[#8A8A95] mt-8 font-mono text-sm">
            No accounts. No phone numbers. No emails.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
