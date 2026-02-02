import { GrainOverlay } from './components/GrainOverlay';
import { FloatingParticles } from './components/FloatingParticles';
import { Hero } from './sections/Hero';
import { DevelopmentStatus } from './sections/DevelopmentStatus';
import { WhatIs } from './sections/WhatIs';
import { HowItWorks } from './sections/HowItWorks';
import { KeyFeatures } from './sections/KeyFeatures';
import { Moderation } from './sections/Moderation';
import { BanSystem } from './sections/BanSystem';
import { Security } from './sections/Security';
import { Comparison } from './sections/Comparison';
import { EarlyAccess } from './sections/EarlyAccess';
import { Roadmap } from './sections/Roadmap';
import { DownloadCTA } from './sections/DownloadCTA';
import { Credits } from './sections/Credits';
import { Footer } from './sections/Footer';
import { FinalScreen } from './sections/FinalScreen';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#E6E6EB] overflow-x-hidden">
      {/* Background effects */}
      <GrainOverlay />
      <FloatingParticles count={15} />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <DevelopmentStatus />
        <WhatIs />
        <HowItWorks />
        <KeyFeatures />
        <Moderation />
        <BanSystem />
        <Security />
        <Comparison />
        <EarlyAccess />
        <Roadmap />
        <DownloadCTA />
        <Credits />
        <Footer />
        <FinalScreen />
      </main>
    </div>
  );
}

export default App;
