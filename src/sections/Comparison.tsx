import { motion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Anonymous', dieWithUs: true, typical: false },
  { feature: 'No accounts', dieWithUs: true, typical: false },
  { feature: 'Battery-aware', dieWithUs: true, typical: false },
  { feature: 'No scrolling', dieWithUs: true, typical: false },
  { feature: 'Real-time', dieWithUs: true, typical: true },
  { feature: 'No ads', dieWithUs: true, typical: false },
];

export function Comparison() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium mb-12 tracking-tight text-center">
            Comparison
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-[#1F1F24] rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-[#1F1F24] hover:bg-transparent">
                  <TableHead className="text-[#8A8A95] font-medium">Feature</TableHead>
                  <TableHead className="text-[#5CFF7A] font-medium text-center">Die With Us</TableHead>
                  <TableHead className="text-[#8A8A95] font-medium text-center">Typical Chat Apps</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="border-[#1F1F24] hover:bg-[#131316]/50 transition-colors"
                  >
                    <TableCell className="text-[#E6E6EB]">{row.feature}</TableCell>
                    <TableCell className="text-center">
                      {row.dieWithUs ? (
                        <Check className="w-5 h-5 text-[#5CFF7A] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[#FF6B6B] mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.typical ? (
                        <Check className="w-5 h-5 text-[#5CFF7A] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-[#FF6B6B] mx-auto" />
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
