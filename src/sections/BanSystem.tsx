import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const banPoints = [
  'Temporary & permanent bans',
  'Instant enforcement',
  'Banned users cannot read or send messages',
];

export function BanSystem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-tight text-center">
            Ban System
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ban-system" className="border-[#1F1F24]">
              <AccordionTrigger className="text-[#E6E6EB] hover:text-[#E6E6EB] hover:no-underline py-4">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                  How our ban system works
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <StaggerContainer staggerDelay={0.08} className="space-y-3 pt-2 pb-2">
                  {banPoints.map((point, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-center gap-3 pl-5">
                        <span className="w-1 h-1 rounded-full bg-[#8A8A95]" />
                        <span className="text-[#8A8A95]">{point}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-[#E6E6EB] font-mono text-sm">
              "Anonymous does not mean unaccountable."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
