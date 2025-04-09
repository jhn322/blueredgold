'use client';

import React from 'react';
import { ParallaxHero } from '@/components/ui/parallax-hero';
import { FadeIn } from '@/components/ui/fade-in';
import { ImageCarousel, CarouselItem } from '@/components/ui/image-carousel';
import Image from 'next/image';

// Compounds data
const compounds = [
  {
    id: 'crocin',
    name: 'Crocin',
    description:
      'Nerve diseases e.g. ALS, MS, anti-inflammatory, brain serotonin levels',
    imageSrc: '/medical-cosmetics/medical-1.webp',
  },
  {
    id: 'safranal',
    name: 'Safranal',
    description: 'ADHD, mood, memory, stress, learning',
    imageSrc: '/medical-cosmetics/medical-2.webp',
  },
  {
    id: 'picrocrocin',
    name: 'Picrocrocin',
    description: 'Inhibiting cancer cells, digestion, anti-inflammatory',
    imageSrc: '/medical-cosmetics/medical-3.webp',
  },
  {
    id: 'crocetin',
    name: 'Crocetin',
    description: 'Coronary heart disease and neurodegenerative disease',
    imageSrc: '/medical-cosmetics/medical-4.webp',
  },
];

// Carousel items
const carouselItems: CarouselItem[] = [
  {
    image: '/medical-cosmetics/medical-carousel-1.webp',
    title: 'Summery of many studies',
    subtitle:
      'A review of therapeutic impacts of saffron (Crocus Sativus L.) and its constituents',
    buttonText: 'Research article',
    link: 'https://physoc.onlinelibrary.wiley.com/doi/full/10.14814/phy2.15785',
  },
  {
    image: '/medical-cosmetics/medical-carousel-2.webp',
    title: 'Medical Applications',
    subtitle:
      'Research on saffron compounds for treatment of neurodegenerative diseases',
    buttonText: 'Research article',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/ptr.6351',
  },
];

const MedicalCosmetics = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/medical-cosmetics/medical-hero.webp"
        imageAlt="Medical and cosmetics applications of saffron"
        title="Medical & Cosmetics"
        subtitle="It's not only food - Saffron has exquisite health effects"
        buttons={[
          {
            text: 'Explore Health Benefits',
            href: '#compounds',
            variant: 'default',
            smoothScroll: true,
          },
        ]}
      />

      {/* Separator with description */}
      <section className="bg-foreground/5 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Medicine</span>
            </div>
            <p className="text-xl md:text-2xl text-center text-foreground/80 leading-relaxed">
              Saffron&apos;s active substances are increasingly used in medicine
              and supplements - both for nutrition and treatment of serious
              diseases
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Compounds Section */}
      <section id="compounds" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Key Saffron Compounds & Their Benefits
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {compounds.map((compound, index) => (
              <FadeIn key={compound.id} delay={index * 100}>
                <div className="relative overflow-hidden rounded-lg group h-[320px]">
                  {/* Background Image */}
                  <Image
                    src={compound.imageSrc}
                    alt={compound.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {compound.name}
                      </h3>
                      <p className="text-white/90">{compound.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Carousel */}
      <section className="py-20 bg-foreground/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Research & Studies
              </h2>
              <p className="text-lg text-foreground/80">
                Explore the latest research on saffron&apos;s therapeutic
                properties and health benefits
              </p>
            </div>
          </FadeIn>

          {/* Image Carousel */}
          <FadeIn delay={200}>
            <div className="max-w-5xl mx-auto">
              <ImageCarousel
                items={carouselItems}
                autoSwitch={true}
                autoSwitchInterval={6000}
                className="h-[500px] md:h-[600px] shadow-xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default MedicalCosmetics;
