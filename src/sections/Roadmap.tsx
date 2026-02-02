import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

const roadmapItems = [
  'Private circles',
  'Better moderation tools',
  'Performance improvements',
  'Session-based features',
];

export function Roadmap() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight text-center">
            What's Coming Next
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="space-y-4 mb-10">
          {roadmapItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(92, 255, 122, 0.1)',
                }}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#1F1F24] bg-[#131316]/50 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#5CFF7A]" />
                <span className="text-[#E6E6EB]">{item}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <p className="text-center text-[#8A8A95] text-sm">
            Nothing will be added if it breaks the core philosophy.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
