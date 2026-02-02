import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import { appConfig } from '../config/appConfig';

export function Credits() {
  const { team } = appConfig;

  return (
    <section className="py-24 px-6 border-t border-[#1F1F24]">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight">
            Made with love and intention
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[#8A8A95] leading-relaxed mb-8 max-w-lg mx-auto">
            {appConfig.appName} is built with care, patience,
            and a deep respect for human presence.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[#8A8A95] leading-relaxed mb-10 max-w-lg mx-auto">
            This project is created by a small group of people
            who believe technology should feel calm — not addictive.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-sm text-[#8A8A95]/60 mb-4 uppercase tracking-wider">
            Team
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="flex flex-wrap justify-center gap-3">
          {/* Javed - clickable */}
          <StaggerItem>
            <a
              href={team.javed.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#1F1F24] text-[#E6E6EB] text-sm hover:bg-[#2A2A30] hover:text-[#5CFF7A] transition-colors duration-200"
            >
              {team.javed.name}
            </a>
          </StaggerItem>

          {/* Other team members */}
          {team.members.map((member, index) => (
            <StaggerItem key={index}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1F1F24] text-[#8A8A95] text-sm">
                {member}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
