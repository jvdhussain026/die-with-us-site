import { FadeIn } from '../components/FadeIn';
import { appConfig } from '../config/appConfig';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1F1F24]">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <FadeIn>
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href={appConfig.navLinks.home}
              className="text-sm text-[#8A8A95] hover:text-[#E6E6EB] transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href={appConfig.navLinks.privacy}
              className="text-sm text-[#8A8A95] hover:text-[#E6E6EB] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href={appConfig.navLinks.terms}
              className="text-sm text-[#8A8A95] hover:text-[#E6E6EB] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </nav>
        </FadeIn>

        {/* Credits line */}
        <FadeIn delay={0.1}>
          <p className="text-center text-[#8A8A95]/60 text-sm">
            Built with care, curiosity, and respect for users.
          </p>
        </FadeIn>

        {/* Copyright */}
        <FadeIn delay={0.15}>
          <p className="text-center text-[#8A8A95]/40 text-xs mt-4">
            © {new Date().getFullYear()} {appConfig.appName}
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
