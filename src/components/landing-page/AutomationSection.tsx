'use client';

import { CircleRevealCarousel } from '@/components/animations/CircleRevealCarousel';

const AUTOMATION_ITEMS = [
  {
    title: 'CORM PREPARATION',
    description:
      'We handle the corms very differently before planting them compared to outdoor growers. There are multiple steps and all of them are being developed for automation',
  },
  {
    title: 'SAFFRON SORTING',
    description:
      'Sorting the saffron is by far the most time-consuming task, so this was the first priority on our list to get automation in place for. We have our own AI that identifies the different parts that needs to be picked up and a robot with our own gripper that then does the sorting at the speed of 1 pick/second',
  },
  {
    title: 'PICKING',
    description:
      'Another time-consuming task is the picking of the flowers. We have developed an AI that identifies how the robot should pick in the most optimal way with a specific gripper.',
  },
  {
    title: 'DRYING + QUALITY CONTROL',
    description:
      'We have multiple routines and processes to verify that the quality is as it should be. The weight is of extra importance due to the price per kg. That means both keeping track of the real weight, but also amount of water in the crop after drying.',
  },
];

export const AutomationSection = () => {
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
      <CircleRevealCarousel
        items={AUTOMATION_ITEMS}
        className="relative z-10"
      />
    </section>
  );
};
