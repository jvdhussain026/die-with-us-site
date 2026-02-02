import { FadeIn } from '../components/FadeIn';
import { Footer } from '../sections/Footer';
import { GrainOverlay } from '../components/GrainOverlay';
import { FloatingParticles } from '../components/FloatingParticles';
import { appConfig } from '../config/appConfig';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
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
                Terms of Service
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[#8A8A95] mb-12">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </FadeIn>

            {/* How the App Works */}
            <FadeIn delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  How the App Works
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    {appConfig.appName} is an anonymous, session-based chat app. Here's what that means:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>Messages are sent and received in real-time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>Sessions end when your battery dies or you close the app</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>Messages cannot be edited or deleted by users once sent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF7A] mt-2 flex-shrink-0" />
                      <span>No accounts, no passwords, no recovery options</span>
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* User Responsibilities */}
            <FadeIn delay={0.2}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    By using {appConfig.appName}, you agree to:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Not harass, abuse, or threaten other users</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Not spam or flood the chat with repetitive messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Not attempt to break, exploit, or reverse-engineer the system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>Not share illegal content or promote harmful activities</span>
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Ban System */}
            <FadeIn delay={0.25}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Ban System
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    Violations of these terms may result in temporary or permanent bans. 
                    Here's how it works:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] mt-2 flex-shrink-0" />
                      <span>Bans are enforced instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] mt-2 flex-shrink-0" />
                      <span>Banned users cannot read or send messages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] mt-2 flex-shrink-0" />
                      <span>Ban evasion is not allowed and may result in permanent exclusion</span>
                    </li>
                  </ul>
                  <p className="text-[#E6E6EB] mt-4">
                    Anonymous does not mean unaccountable.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* No Ads Promise */}
            <FadeIn delay={0.3}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  No Ads. Always.
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p className="text-[#E6E6EB]">
                    {appConfig.appName} will always be ad-free.
                  </p>
                  <p>
                    We refuse to monetize attention or conversations. This is a promise 
                    we intend to keep for as long as the app exists.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Limitation of Liability */}
            <FadeIn delay={0.35}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-[#8A8A95] leading-relaxed">
                  <p>
                    {appConfig.appName} is provided "as is" without warranties of any kind.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>We do not guarantee uninterrupted availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>The app may evolve, change, or discontinue features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A8A95] mt-2 flex-shrink-0" />
                      <span>We are not liable for user-generated content</span>
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            {/* Changes */}
            <FadeIn delay={0.4}>
              <section className="mb-12">
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Changes to These Terms
                </h2>
                <p className="text-[#8A8A95] leading-relaxed">
                  We may update these terms as the app evolves. Significant changes will be 
                  communicated through the app or website. Continued use of {appConfig.appName} 
                  after changes constitutes acceptance of the updated terms.
                </p>
              </section>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.45}>
              <section>
                <h2 className="text-2xl font-medium mb-6 text-[#E6E6EB]">
                  Questions?
                </h2>
                <p className="text-[#8A8A95] leading-relaxed">
                  If you have questions about these terms, you can reach us at{' '}
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
