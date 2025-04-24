'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';

const steps = [
  {
    title: '1. Flower Collection',
    description:
      "Harvest flowers in the early morning when they're just beginning to open. Gently pick the entire flower by hand.",
    image: '/placeholder.svg?height=600&width=600',
  },
  {
    title: '2. Stigma Extraction',
    description:
      'Carefully open each flower and remove the three red stigmas using tweezers or your fingertips. Leave the yellow stamens behind.',
    image: '/placeholder.svg?height=600&width=600',
  },
  {
    title: '3. Drying Process',
    description:
      'Spread the stigmas in a thin layer on a paper-lined tray in a warm, dark place. Dry for 24-48 hours until they become brittle.',
    image: '/placeholder.svg?height=600&width=600',
  },
  {
    title: '4. Storage',
    description:
      'Once completely dry, store saffron threads in an airtight container away from light, heat, and moisture for up to two years.',
    image: '/placeholder.svg?height=600&width=600',
  },
];

export default function HarvestingSteps() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            The Harvesting Process
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            A step-by-step guide to harvesting and processing saffron
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <FadeIn key={index}>
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div
                  className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
                >
                  <motion.div
                    className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={step.image || '/placeholder.svg'}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div
                  className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-lg text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
