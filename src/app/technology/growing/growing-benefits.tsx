'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const benefits = [
  'Low water requirements - perfect for drought-prone areas',
  'Grows in zones 6-9 with cold winters and dry summers',
  'Requires minimal space - ideal for small gardens',
  'Perennial crop that produces for 4-6 years',
  'High value crop with excellent return on investment',
  'Pest resistant and requires few inputs',
  'Can be grown organically with ease',
  'Flowers in fall when other crops are finished',
];

export default function GrowingBenefits() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn delay={0.5}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Grow Saffron?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/80">
                Saffron is not only the world&apos;s most valuable spice by
                weight, but it&apos;s also one of the most rewarding crops to
                grow. Here&apos;s why cultivators around the world are turning
                to this golden treasure.
              </p>

              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-secondary rounded-full p-1 mt-0.5 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <p>{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent z-10" />
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url('/placeholder.svg?height=1000&width=800')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 20,
                  ease: 'linear',
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
