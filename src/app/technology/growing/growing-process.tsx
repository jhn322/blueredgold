'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  SproutIcon as Seedling,
  Sun,
  Cloud,
  Flower,
  Scissors,
} from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const steps = [
  {
    icon: Calendar,
    title: 'Planning',
    description:
      'Choose the right time to plant saffron corms, typically in late summer or early fall.',
    delay: 0.1,
  },
  {
    icon: Seedling,
    title: 'Planting',
    description:
      'Plant corms 4 inches deep and 6 inches apart in well-draining soil with full sun exposure.',
    delay: 0.2,
  },
  {
    icon: Sun,
    title: 'Growing',
    description:
      'Provide minimal water and ensure good drainage. Saffron thrives in dry, sunny conditions.',
    delay: 0.3,
  },
  {
    icon: Cloud,
    title: 'Dormancy',
    description:
      'During summer, saffron corms go dormant. Reduce watering and let the soil dry out.',
    delay: 0.4,
  },
  {
    icon: Flower,
    title: 'Flowering',
    description:
      'In fall, purple flowers emerge. Each flower contains three valuable red stigmas - the saffron threads.',
    delay: 0.5,
  },
  {
    icon: Scissors,
    title: 'Harvesting',
    description:
      'Carefully harvest the stigmas by hand in the morning when flowers are just opening.',
    delay: 0.6,
  },
];

export default function GrowingProcess() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <FadeIn key={index} delay={step.delay}>
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md h-full"
            whileHover={{
              y: -5,
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
            <p className="text-foreground/70">{step.description}</p>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
}
