'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { SaffronProcessAnimation } from '@/components/animations/SaffronProcessAnimation';

export const IntroductionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">
                Our Vision
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-brandGold via-brandRed to-brandBlue inline-block text-transparent bg-clip-text">
              BlueRedGold,{' '}
              <span className="text-transparent bg-clip-text">
                Evolving for Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
              Cultivating world-class saffron in the heart of Sörmland
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Adjacent to the historic Gripsholm Castle in Mariefred,
              BlueRedGold is pioneering a state-of-the-art indoor saffron farm.
            </p>
          </FadeIn>
        </div>

        {/* Animation */}
        <div>
          <SaffronProcessAnimation />
        </div>

        {/* Controlled Climate */}
        <FadeIn delay={200}>
          <section className="relative w-full bg-background">
            <div className="container mx-auto px-4">
              <h4 className="text-4xl md:text-5xl font-bold text-center mb-3 text-primary">
                Controlled Climate
              </h4>
              <div className="flex items-center justify-center space-x-2 text-xl text-center text-foreground/80">
                <span className="bg-primary/10 rounded-full px-4 py-1">
                  3 Climate Zones
                </span>
                <span className="text-primary">•</span>
                <span className="bg-primary/10 rounded-full px-4 py-1">
                  2-4 Cycles/Year
                </span>
              </div>
            </div>
          </section>
        </FadeIn>
      </div>
    </section>
  );
};
