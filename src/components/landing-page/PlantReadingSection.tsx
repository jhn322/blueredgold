'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

export const PlantReadingSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Plants growing"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center bg-background/80 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What if you could read a plant like an open book?
            </h2>
            <p className="mb-6 text-foreground/80">
              We&apos;ve developed a proprietary technology using plant science
              and machine learning to understand what plants need at every
              moment. This approach enables precise cultivation, optimizing
              growth conditions for each plant and maximizing vanilla bean
              production in a sustainable way.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              See how we do it
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
