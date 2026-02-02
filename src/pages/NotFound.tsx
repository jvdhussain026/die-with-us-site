import { FadeIn } from '../components/FadeIn';
import { GrainOverlay } from '../components/GrainOverlay';
import { FloatingParticles } from '../components/FloatingParticles';
import { Button } from '../components/ui/button';
import { BatteryWarning } from 'lucide-react';

export function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#E6E6EB] overflow-x-hidden flex flex-col">
      <GrainOverlay />
      <FloatingParticles count={10} />
      
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          {/* Icon */}
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-[#1F1F24] flex items-center justify-center">
                <BatteryWarning className="w-10 h-10 text-[#8A8A95]" />
              </div>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
              Looks like you're lost.
            </h1>
          </FadeIn>

          {/* Message */}
          <FadeIn delay={0.2}>
            <p className="text-lg text-[#8A8A95] mb-10">
              This moment doesn't exist anymore.
            </p>
          </FadeIn>

          {/* Button */}
          <FadeIn delay={0.3}>
            <a href="/">
              <Button
                size="lg"
                className="bg-[#5CFF7A] text-[#0B0B0D] hover:bg-[#5CFF7A]/90 rounded-full px-8 h-12 font-medium transition-opacity duration-200"
              >
                Go to Home
              </Button>
            </a>
          </FadeIn>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-6 px-6 border-t border-[#1F1F24]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#8A8A95]/40 text-xs">
            © {new Date().getFullYear()} Die With Us
          </p>
        </div>
      </footer>
    </div>
  );
}
