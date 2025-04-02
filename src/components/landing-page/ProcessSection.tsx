'use client';

import { CircleRevealCarousel } from '@/components/animations/CircleRevealCarousel';

const PROCESS_ITEMS = [
  {
    title: 'GROWTH ZONE',
    description:
      'Where we grow our new corms. We have a special mix of nutriants and our own uniq spectrum of LED-lights, among other things.',
  },
  {
    title: 'DORMANT ZONE',
    description:
      'Heatroom where our corms are during the dormant period, until they are ready to produce flowers.',
  },
  {
    title: 'FLOWERING ZONE',
    description:
      'This is where we trigger the corms to start to flower and then harvest the flowers and the saffron.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landing-page/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Carousel */}
      <CircleRevealCarousel items={PROCESS_ITEMS} className="relative z-10" />
    </section>
  );
};
