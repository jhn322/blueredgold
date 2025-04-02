'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

export const VanillaChoiceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <FadeIn>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your vanilla of choice
              </h2>
              <p className="mb-6 text-foreground/80">
                Our technology allows us to create vanilla with specific
                properties and notes. Whether you want to emphasize the floral,
                woody, or spicy characteristics of vanilla, our controlled
                growing conditions and processing methods can deliver exactly
                what you need.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Discover Your Vanilla
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=100"
                  alt="Vanilla bean"
                  width={100}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-secondary">
                  Vanilla Floral
                </h3>
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-secondary/30 rounded-full"></div>
                    <div className="w-36 h-36 border-2 border-secondary/50 rounded-full"></div>
                    <div className="w-24 h-24 border-2 border-secondary/70 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0">
                    {/* Radar chart would go here - simplified with lines */}
                    <div className="h-full w-full flex items-center justify-center">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <div
                          key={i}
                          className="absolute h-1 bg-secondary/40"
                          style={{
                            width: '50%',
                            transformOrigin: 'left center',
                            transform: `rotate(${angle}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
