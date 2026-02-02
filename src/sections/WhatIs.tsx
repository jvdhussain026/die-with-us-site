import { FadeIn } from '../components/FadeIn';
import { ChatMockup } from '../components/ChatMockup';

export function WhatIs() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
                What is Die With Us?
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-lg text-[#8A8A95] leading-relaxed mb-8">
                Die With Us is an anonymous, real-time chat app designed for moments when your phone battery is running low.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 mb-8">
                {[
                  'No scrolling.',
                  'No profiles.',
                  'No algorithms.',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5CFF7A]" />
                    <span className="text-[#E6E6EB]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-[#8A8A95] leading-relaxed">
                Just people sharing a moment — before the battery runs out.
              </p>
            </FadeIn>
          </div>

          {/* Chat mockup */}
          <div className="order-1 md:order-2">
            <FadeIn direction="left" delay={0.2}>
              <ChatMockup />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
