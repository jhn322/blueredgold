'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { FadeIn } from '@/components/ui/fade-in';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

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
  image?: string;
}

interface CircleRevealCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  className?: string;
  onPauseChange?: (isPaused: boolean) => void;
}

export const CircleRevealCarousel = ({
  items,
  autoPlayInterval = 5000,
  className,
  onPauseChange,
}: CircleRevealCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const { elementRef, isVisible } = useIntersectionObserver();
  const windowWidth = useWindowSize();

  // Animation progress tracking
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const startTime = Date.now();
    const duration = autoPlayInterval;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimationProgress(progress);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isPaused, autoPlayInterval, currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setAnimationProgress(0);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isVisible, items.length, autoPlayInterval, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setAnimationProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setAnimationProgress(0);
  };

  const handlePauseToggle = () => {
    setIsPaused((prev) => {
      const newPausedState = !prev;
      onPauseChange?.(newPausedState);
      return newPausedState;
    });
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
      {/* Background Image */}
      {items[currentIndex].image && (
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.2 }}
              animate={{
                scale: 1.2 - 0.2 * animationProgress,
                transition: {
                  duration: 0.1,
                  ease: 'linear',
                },
              }}
              className="absolute inset-0"
            >
              <Image
                src={items[currentIndex].image}
                alt={`${items[currentIndex].title} background`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-foreground/30" />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Half Circle Animation */}
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
      <FadeIn delay={400}>
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
              className="rounded-full backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handlePauseToggle}
              className="rounded-full backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
            >
              {isPaused ? (
                <Play className="h-6 w-6" />
              ) : (
                <Pause className="h-6 w-6" />
              )}
            </button>

            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    index === currentIndex
                      ? 'bg-primary w-4'
                      : 'bg-foreground/30 hover:bg-foreground/50 w-2'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="rounded-full backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
