'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ExternalLink, Images } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export interface CarouselItem {
  image: string;
  category?: string;
  buttonText?: string;
  title?: string;
  subtitle?: string;
  link?: string;
}

interface ImageCarouselProps {
  className?: string;
  items?: CarouselItem[];
  autoSwitch?: boolean;
  autoSwitchInterval?: number;
}

const defaultCarouselItems: CarouselItem[] = [
  {
    image: '/press/image-carousel/production.webp',
    category: 'Production',
    buttonText: 'Explore Production Gallery',
  },
  {
    image: '/press/image-carousel/technology.webp',
    category: 'Technology',
    buttonText: 'View Technology Collection',
  },
  {
    image: '/press/image-carousel/product.webp',
    category: 'Product',
    buttonText: 'Browse Product Images',
  },
  {
    image: '/press/image-carousel/food-beverages.webp',
    category: 'Food & Beverages',
    buttonText: 'See Food & Beverages',
  },
  {
    image: '/press/image-carousel/saffron.webp',
    category: 'Saffron',
    buttonText: 'Discover Saffron Gallery',
  },
];

export const ImageCarousel = ({
  className,
  items = defaultCarouselItems,
  autoSwitch = false,
  autoSwitchInterval = 6000,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [isAnimating, items.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [isAnimating, items.length]);

  // Auto-switch functionality
  useEffect(() => {
    if (!autoSwitch) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, autoSwitchInterval);

    return () => clearInterval(intervalId);
  }, [autoSwitch, autoSwitchInterval, handleNext]);

  // Animation variants with better timing and transitions
  const slideVariants = {
    enterFromLeft: {
      x: '-100%',
      opacity: 1,
    },
    enterFromRight: {
      x: '100%',
      opacity: 1,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 150, damping: 25, mass: 1.2 },
        duration: 0.6,
      },
    },
    exitToLeft: {
      x: '-100%',
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 150, damping: 25, mass: 1.2 },
        duration: 0.6,
      },
    },
    exitToRight: {
      x: '100%',
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 150, damping: 25, mass: 1.2 },
        duration: 0.6,
      },
    },
  };

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;

    const nextImage = new window.Image();
    nextImage.src = items[nextIndex].image;

    const prevImage = new window.Image();
    prevImage.src = items[prevIndex].image;
  }, [currentIndex, items]);

  return (
    <div className="space-y-4">
      {/* Carousel Container */}
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl',
          'aspect-[4/5] sm:aspect-[16/9]',
          className
        )}
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <AnimatePresence
            mode="sync"
            custom={slideDirection}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              custom={slideDirection}
              variants={slideVariants}
              initial={slideDirection > 0 ? 'enterFromRight' : 'enterFromLeft'}
              animate="center"
              exit={slideDirection > 0 ? 'exitToLeft' : 'exitToRight'}
              className="absolute inset-0 z-10"
            >
              <div className="absolute inset-0">
                <Image
                  src={items[currentIndex].image}
                  alt={
                    items[currentIndex].title ||
                    items[currentIndex].category ||
                    'Carousel image'
                  }
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Layer */}
        <div className="absolute inset-0 flex flex-col justify-end z-20">
          {/* Content */}
          <div className="p-6 relative">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  {items[currentIndex].category && (
                    <h3 className="text-white text-lg sm:text-2xl font-semibold select-text">
                      PRESS IMAGES: {items[currentIndex].category.toUpperCase()}
                    </h3>
                  )}

                  {items[currentIndex].title && (
                    <h3 className="text-white text-xl sm:text-3xl font-bold select-text">
                      {items[currentIndex].title}
                    </h3>
                  )}

                  {items[currentIndex].subtitle && (
                    <p className="text-white/90 text-sm sm:text-base">
                      {items[currentIndex].subtitle}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`button-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="hidden sm:block"
                >
                  {items[currentIndex].link ? (
                    <Link
                      href={items[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" className="group">
                        <span>
                          {items[currentIndex].buttonText || 'Learn More'}
                        </span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="secondary"
                      onClick={() =>
                        window.open(
                          'https://lightroom.adobe.com/shares/f39de67076da4f21ad523e558d3a3ae6',
                          '_blank'
                        )
                      }
                      className="group"
                    >
                      <span>
                        {items[currentIndex].buttonText || 'View Gallery'}
                      </span>
                      <Images className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none hidden sm:block z-30">
            <div className="relative h-full flex items-center justify-between px-4">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-black/60 transition-colors disabled:opacity-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-black/60 transition-colors disabled:opacity-50"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Dots - Desktop */}
          <div className="absolute bottom-0 right-0 gap-2 p-4 hidden sm:flex z-30">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setSlideDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                disabled={isAnimating}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/30 hover:bg-white/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Controls - Outside Carousel */}
      <div className="sm:hidden">
        {/* Mobile Navigation Container */}
        <div className="bg-muted/30 rounded-full p-2 mt-12 mx-auto w-fit flex items-center justify-between shadow-sm">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="rounded-full bg-black/5 hover:bg-black/10 w-10 h-10 flex items-center justify-center transition-colors disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>

          {/* Mobile Dots */}
          <div className="flex gap-2 mx-3">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setSlideDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                disabled={isAnimating}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'bg-black w-4'
                    : 'bg-black/30 hover:bg-black/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="rounded-full bg-black/5 hover:bg-black/10 w-10 h-10 flex items-center justify-center transition-colors disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Mobile Button */}
        <div className="mt-8">
          {items[currentIndex].link ? (
            <Link
              href={items[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="secondary"
                className="w-full shadow-sm hover:shadow-md transition-shadow group"
              >
                <span>{items[currentIndex].buttonText || 'Learn More'}</span>
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Button
              variant="secondary"
              className="w-full shadow-sm hover:shadow-md transition-shadow group"
              onClick={() =>
                window.open(
                  'https://lightroom.adobe.com/shares/f39de67076da4f21ad523e558d3a3ae6',
                  '_blank'
                )
              }
            >
              <span>{items[currentIndex].buttonText || 'View Gallery'}</span>
              <Images className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
