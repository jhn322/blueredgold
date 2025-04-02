'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { SaffronProcessAnimation } from '@/components/animations/SaffronProcessAnimation';

export const IntroductionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">
                Our Vision
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              BlueRedGold,{' '}
              <span className="text-primary">Evolving for Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
              Cultivating world-class saffron in the heart of Sörmland
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Adjacent to the historic Gripsholm Castle in Mariefred,
              BlueRedGold is pioneering a state-of-the-art indoor saffron farm.
            </p>
          </div>
        </FadeIn>

        {/* Animation */}
        <div>
          <SaffronProcessAnimation />
        </div>
      </div>
    </section>
  );
};
