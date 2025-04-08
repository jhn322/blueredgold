'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CarouselItem {
  image: string;
  category: string;
  buttonText: string;
}

interface ImageCarouselProps {
  className?: string;
}

const carouselItems: CarouselItem[] = [
  {
    image: '/image-carousel/production.webp',
    category: 'Production',
    buttonText: 'Explore Production Gallery',
  },
  {
    image: '/image-carousel/technology.webp',
    category: 'Technology',
    buttonText: 'View Technology Collection',
  },
  {
    image: '/image-carousel/product.webp',
    category: 'Product',
    buttonText: 'Browse Product Images',
  },
  {
    image: '/image-carousel/food-beverages.webp',
    category: 'Food & Beverages',
    buttonText: 'See Food & Beverages',
  },
  {
    image: '/image-carousel/saffron.webp',
    category: 'Saffron',
    buttonText: 'Discover Saffron Gallery',
  },
];

export const ImageCarousel = ({ className }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

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
        <div className="absolute inset-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={carouselItems[currentIndex].image}
                alt={`${carouselItems[currentIndex].category} background`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Interactive Layer */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Content */}
          <div className="p-6 relative">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-md sm:text-2xl font-semibold select-text"
                >
                  PRESS IMAGES:{' '}
                  {carouselItems[currentIndex].category.toUpperCase()}
                </motion.h3>
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
                  <Button
                    variant="secondary"
                    className="rounded-full"
                    onClick={() =>
                      window.open(
                        'https://lightroom.adobe.com/shares/f39de67076da4f21ad523e558d3a3ae6',
                        '_blank'
                      )
                    }
                  >
                    {carouselItems[currentIndex].buttonText}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none hidden sm:block">
            <div className="relative h-full flex items-center justify-between px-4">
              <button
                onClick={handlePrev}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-sm w-12 h-12 p-0 flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Dots - Desktop */}
          <div className="absolute bottom-0 right-0 gap-2 p-4 hidden sm:flex">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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
        <div className="bg-muted rounded-full p-2 -mt-6 mx-4 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="rounded-full bg-black/10 hover:bg-black/20 w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>

          {/* Mobile Dots */}
          <div className="flex gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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
            className="rounded-full bg-black/10 hover:bg-black/20 w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Mobile Button */}
        <div className="px-4 mt-8 mb-12">
          <Button
            variant="secondary"
            className="rounded-full w-full shadow-sm hover:shadow-md transition-shadow"
            onClick={() =>
              window.open(
                'https://lightroom.adobe.com/shares/f39de67076da4f21ad523e558d3a3ae6',
                '_blank'
              )
            }
          >
            {carouselItems[currentIndex].buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
