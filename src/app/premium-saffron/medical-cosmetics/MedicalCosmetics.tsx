'use client';

import { useRef } from 'react';
import { ParallaxHero } from '@/components/ui/parallax-hero';
import { FadeIn } from '@/components/ui/fade-in';
import { ImageCarousel, CarouselItem } from '@/components/ui/image-carousel';
import Image from 'next/image';
import { useInView } from 'framer-motion';

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

const CompoundCard = ({
  compound,
  index,
  isLastItem,
}: {
  compound: (typeof compounds)[0];
  index: number;
  isLastItem: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isLineInView = useInView(lineRef, { once: true, amount: 0.1 });

  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={cardRef}
        className={`w-full max-w-5xl mx-auto px-6 py-16 flex flex-col ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-center justify-between gap-8`}
      >
        {/* Image container */}
        <div
          className={`w-full md:w-[400px] lg:w-[1400px] h-[300px] md:h-[350px] lg:h-[400px] bg-[#ffffff] rounded-xl overflow-hidden transform transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={compound.imageSrc}
              alt={compound.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 500px"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Text container */}
        <div
          className={`w-full md:w-[400px] lg:w-[500px] transform transition-all duration-700 delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            {compound.name}
          </h3>
          <p className="text-foreground/80 text-lg">{compound.description}</p>
        </div>
      </div>

      {!isLastItem && (
        <div
          ref={lineRef}
          className="h-48 md:h-64 w-0.5 bg-foreground/10 relative overflow-hidden"
        >
          <div
            className={`absolute top-0 left-0 right-0 bg-foreground w-full transition-all duration-3000 ease-out ${
              isLineInView ? 'h-full' : 'h-0'
            }`}
            style={{ transitionDuration: '3s' }}
          ></div>
        </div>
      )}
    </div>
  );
};

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

          <div className="flex flex-col items-center">
            {compounds.map((compound, index) => (
              <CompoundCard
                key={compound.id}
                compound={compound}
                index={index}
                isLastItem={index === compounds.length - 1}
              />
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
