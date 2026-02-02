import { FadeIn } from '../components/FadeIn';
import { Footer } from '../sections/Footer';
import { GrainOverlay } from '../components/GrainOverlay';
import { FloatingParticles } from '../components/FloatingParticles';
import { appConfig } from '../config/appConfig';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#E6E6EB] overflow-x-hidden">
      <GrainOverlay />
      <FloatingParticles count={10} />
      
      <main className="relative z-10">
        {/* Header */}
        <header className="py-8 px-6 border-b border-[#1F1F24]">
          <div className="max-w-3xl mx-auto">
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-[#8A8A95] hover:text-[#E6E6EB] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </a>
          </div>
        </header>

        {/* Content */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
                Privacy Policy
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[#8A8A95] mb-12">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </FadeIn>

            {/* Core Principles */}
            <FadeIn delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Core Principles
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    {appConfig.appName} is anonymous by design. We don't want your personal information. 
                    We don't need it. And we won't ask for it.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>No accounts required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>No phone numbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>No email addresses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>No ads, no trackers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>We will never sell your data</span>
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Data Handling */}
            <FadeIn delay={0.2}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Data Handling
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    Messages in {appConfig.appName} are temporary by design. When your session ends 
                    — whether your battery dies or you close the app — the conversation moves on.
                  </p>
                  <p>
                    We do not maintain long-term chat histories. We do not build profiles about you. 
                    We don't know who you are, and we prefer it that way.
                  </p>
                  <p>
                    We do keep minimal technical logs for:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Abuse prevention and moderation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Security and system stability</span>
                    </li>
                  </ul>
                  <p>
                    These logs contain no personally identifiable information.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Moderation */}
            <FadeIn delay={0.25}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Moderation
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    To keep {appConfig.appName} safe and calm, messages may be reviewed for safety 
                    violations. This includes spam, abuse, harassment, or any content that makes the 
                    space feel unsafe.
                  </p>
                  <p>
                    Users who violate our community standards may receive temporary or permanent bans. 
                    Banned users cannot read or send messages.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* No Ads */}
            <FadeIn delay={0.3}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  No Ads. Ever.
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p className="text-[#E6E6EB]">
                    We will never show ads.
                  </p>
                  <p>
                    We don't believe ads belong in a chat app. If a product needs ads to survive, 
                    it usually stops caring about people.
                  </p>
                  <p>
                    {appConfig.appName} is funded by people who believe in it — not by advertisers 
                    who want your attention.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Platform Scope */}
            <FadeIn delay={0.35}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Platform Scope
                </h2>
                <p className="text-[#8A8A95] leading-relaxed">
                  This privacy policy applies to the {appConfig.appName} website, Android app, 
                  and any future official clients we may release.
                </p>
              </section>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Questions?
                </h2>
                <p className="text-[#8A8A95] leading-relaxed">
                  If you have questions about this privacy policy, you can reach us at{' '}
                  <a 
                    href={`mailto:${appConfig.supportEmail}`}
                    className="text-[#5CFF7A] hover:underline"
                  >
                    {appConfig.supportEmail}
                  </a>
                </p>
              </section>
            </FadeIn>
          </div>
        </article>

        <Footer />
      </main>
    </div>
  );
}
