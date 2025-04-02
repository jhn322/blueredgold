'use client';

import { CircleRevealCarousel } from '@/components/animations/CircleRevealCarousel';
import Image from 'next/image';

const PROCESS_ITEMS = [
  {
    title: 'GROWTH ZONE',
    description:
      'Where we grow our new corms. We have a special mix of nutriants and our own uniq spectrum of LED-lights, among other things.',
    image: '/carousel/carousel1-1.webp',
  },
  {
    title: 'DORMANT ZONE',
    description:
      'Heatroom where our corms are during the dormant period, until they are ready to produce flowers.',
    image: '/carousel/carousel1-2.webp',
  },
  {
    title: 'FLOWERING ZONE',
    description:
      'This is where we trigger the corms to start to flower and then harvest the flowers and the saffron.',
    image: '/carousel/carousel1-3.webp',
  },
];

export const ProcessSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={PROCESS_ITEMS[0].image}
          alt="Process background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Carousel */}
      <CircleRevealCarousel items={PROCESS_ITEMS} className="relative z-10" />
    </section>
  );
};
