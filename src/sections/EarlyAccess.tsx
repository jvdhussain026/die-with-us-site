import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { appConfig } from '../config/appConfig';

const points = [
  'Experience the first public version',
  'Help us improve with feedback',
  'Shape future features',
];

export function EarlyAccess() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
            Be Part of the Journey
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-[#8A8A95] mb-8">
            {appConfig.appName} is just getting started.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[#E6E6EB] mb-6">
            By downloading {appConfig.appName}, you are:
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="space-y-3 mb-8">
          {points.map((point, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5CFF7A]" />
                <span className="text-[#8A8A95]">{point}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <p className="text-xl text-[#E6E6EB] font-medium">
            Try it.
            <br />
            Share your thoughts.
            <br />
            Tell us what feels right.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
