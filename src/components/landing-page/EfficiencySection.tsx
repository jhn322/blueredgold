'use client';

import { FadeIn } from '@/components/ui/fade-in';

export const EfficiencySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Efficient beyond market standards
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {/* First metric */}
          <FadeIn delay={200}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">3-4 times</h3>
                <p className="text-xl">more vanillin</p>
                <p>content</p>
              </div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          </FadeIn>

          {/* Second metric */}
          <FadeIn delay={400}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">x250 times</h3>
                <p className="text-xl">more yield</p>
              </div>
            </div>
          </FadeIn>

          {/* Third metric */}
          <FadeIn delay={600}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">Tailor-made</h3>
                <p className="text-xl">aromas</p>
              </div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          </FadeIn>

          {/* Fourth metric */}
          <FadeIn delay={800}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-foreground rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-foreground rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">
                  Maximizing each bean&apos;s
                </h3>
                <p className="text-xl">full potential</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
