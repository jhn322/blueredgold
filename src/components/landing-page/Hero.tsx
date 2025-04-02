'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { useState, useEffect } from 'react';

// Carousel phrases
const carouselItems = [
  {
    title: 'BlueRedGold',
    subtitle: 'An ingredient supplier',
  },
  {
    title: 'Premium Saffron',
    subtitle:
      'Vertical cultivation with year round harvest through precision automation',
  },
  {
    title: 'Cooking ingredient,',
    subtitle: 'Flavoring agent',
  },
  {
    title: 'Nutraceuticals,',
    subtitle: 'Supplements, Nutricosmetics',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current content
      setOpacity(0);

      // Update content and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        setOpacity(1);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landing-page/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-64 items-center max-w-6xl mx-auto">
          {/* Left Column - Logo and Company Name */}
          <div className="flex flex-col items-center md:items-center gap-6">
            <FadeIn delay={200}>
              <Image
                src="/logo.svg"
                alt="BlueRedGold Logo"
                width={240}
                height={220}
                className="w-48 md:w-64 lg:w-72"
                priority
              />
            </FadeIn>
            <FadeIn delay={400}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background text-center">
                BlueRedGold
              </h1>
            </FadeIn>
          </div>

          {/* Right Column - Content */}
          <div className="max-w-1xl space-y-8 text-center md:text-left">
            <FadeIn delay={600}>
              <div className="h-[120px] md:h-[140px] lg:h-[160px] flex flex-col justify-center relative">
                <div
                  className="absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-in-out"
                  style={{ opacity }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-background leading-tight">
                    {carouselItems[currentIndex].title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-3xl text-background/90 mt-2">
                    {carouselItems[currentIndex].subtitle}
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={1000}>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="relative rounded-full bg-transparent border-2 border-background text-background hover:text-background/80 overflow-hidden group text-md md:text-lg px-5 py-5"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-background/10" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
