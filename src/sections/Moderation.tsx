import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { ShieldIcon } from '../components/ShieldIcon';

export function Moderation() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Shield icon */}
        <FadeIn>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20">
              <ShieldIcon className="w-full h-full" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
            Moderation & Safety
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-[#E6E6EB] mb-8">
            This is not an unmoderated chaos app.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="space-y-4 mb-8">
          {[
            'Messages are actively moderated.',
            'Spam and abuse are handled quickly.',
            'Moderation happens in real time.',
          ].map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5CFF7A]" />
                <span className="text-[#8A8A95]">{item}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <p className="text-[#E6E6EB] leading-relaxed">
            This keeps the space safer, calmer, and more human.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
