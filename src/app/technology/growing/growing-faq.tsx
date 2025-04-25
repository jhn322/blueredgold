'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const faqs = [
  {
    question: 'When is the best time to plant saffron corms?',
    answer:
      'The ideal time to plant saffron corms is in late summer to early fall, typically between July and September. This gives the corms time to establish before they flower in the fall.',
  },
  {
    question: 'How much space do I need to grow saffron?',
    answer:
      'Saffron is quite space-efficient. You can plant corms about 6 inches apart, meaning you can grow approximately 50-60 corms per square meter. A small garden bed can yield a meaningful harvest.',
  },
  {
    question:
      'How many saffron flowers do I need to produce 1 gram of saffron?',
    answer:
      'It takes approximately 150-170 flowers to produce 1 gram of dried saffron threads. Each flower typically contains three red stigmas, which are the valuable saffron threads.',
  },
  {
    question: 'Do saffron corms multiply?',
    answer:
      'Yes, saffron corms multiply naturally. Each mother corm can produce 1-10 daughter corms annually, depending on growing conditions. This means your saffron patch will expand each year.',
  },
  {
    question: 'How long does it take for saffron to grow after planting?',
    answer:
      'Saffron corms typically flower within 6-8 weeks after planting if planted in late summer/early fall. However, for the best results, expect the most abundant flowering in the second and subsequent years.',
  },
  {
    question: 'How do I know when to harvest saffron?',
    answer:
      "Harvest saffron flowers in the morning when they're just opening. The flowers will emerge in fall, typically October to November depending on your climate. Visit our detailed harvesting guide for more information.",
  },
];

export default function GrowingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container py-16 md:py-24">
      <FadeIn>
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Everything you need to know about growing saffron successfully
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 text-foreground/70">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
