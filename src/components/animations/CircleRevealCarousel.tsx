'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Custom hook for window size
const useWindowSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

interface CarouselItem {
  title: string;
  description: string;
}

interface CircleRevealCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
}

export const CircleRevealCarousel = ({
  items,
  autoPlayInterval = 5000,
  className,
}: CircleRevealCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isVisible } = useIntersectionObserver();
  const windowWidth = useWindowSize();

  // Auto-play functionality
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isVisible, items.length, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getBorderRadius = () => {
    return windowWidth <= 1000
      ? '0 0 100% 100% / 0 0 100% 100%'
      : '0 0 50% 50% / 0 0 100% 100%';
  };

  return (
    <div
      ref={elementRef}
      className={cn('relative w-full min-h-screen overflow-hidden', className)}
    >
      {/* Half Cirle Animation */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={isVisible ? { y: 0 } : { y: '-100%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-x-0 top-0 w-full h-[50vh] origin-top bg-background/80"
        style={{
          borderRadius: getBorderRadius(),
          transform: 'translateY(-50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {items[currentIndex].title}
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl">
              {items[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
