import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';
import { appConfig } from '../config/appConfig';

export function DownloadCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">
            {appConfig.appName}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-[#8A8A95] mb-4">
            {appConfig.releaseStatus}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-sm text-[#8A8A95]/70 mb-10 font-mono">
            Version {appConfig.latestVersion}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={appConfig.androidDownloadUrl}
              download
            >
              <Button
                size="lg"
                className="bg-[#5CFF7A] text-[#0B0B0D] hover:bg-[#5CFF7A]/90 rounded-full px-10 h-14 font-medium text-lg transition-opacity duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Latest Version
              </Button>
            </a>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-6 text-sm text-[#8A8A95]">
            The app will continue to evolve — expect updates.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
