'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimate, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStep {
  id: number;
  icon: string;
  label: string;
  description: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: '/seed/seed.svg',
    label: 'Vertically-integrated operation',
    description: 'Complete control over quality and production',
    color: 'from-emerald-500/20 via-emerald-400/10 to-emerald-500/20',
  },
  {
    id: 2,
    icon: '/flower/flower7.svg',
    label: 'Location independent',
    description: 'Global reach and accessibility',
    color: 'from-blue-500/20 via-blue-400/10 to-blue-500/20',
  },
  {
    id: 3,
    icon: '/flower/flower4.svg',
    label: 'Sustainable production',
    description: 'Environmentally conscious practices',
    color: 'from-purple-500/20 via-purple-400/10 to-purple-500/20',
  },
  {
    id: 4,
    icon: '/saffron/saffron.svg',
    label: 'Expanding natural ingredients',
    description: 'Pure and authentic components',
    color: 'from-rose-500/20 via-rose-400/10 to-rose-500/20',
  },
];

export const SaffronProcessAnimation = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [scope] = useAnimate();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  // Use the intersection observer hook
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px',
  });

  useEffect(() => {
    // Start when the component becomes visible
    if (isVisible && !hasAnimationStarted) {
      setHasAnimationStarted(true);

      const startAnimation = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        for (let i = 0; i < processSteps.length; i++) {
          setCurrentStep(i);
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        setIsAnimationComplete(true);
      };

      startAnimation();
    }
  }, [isVisible, hasAnimationStarted]);

  const handlePrevSlide = () => {
    setSlideDirection(-1);
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1));
  };

  const handleNextSlide = () => {
    setSlideDirection(1);
    setActiveSlide((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0));
  };

  const capsulePathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const slideVariants = {
    enterFromRight: {
      x: '100%',
      opacity: 0,
    },
    enterFromLeft: {
      x: '-100%',
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exitToLeft: {
      x: '-100%',
      opacity: 0,
    },
    exitToRight: {
      x: '100%',
      opacity: 0,
    },
  };

  return (
    <div
      ref={elementRef}
      className="relative w-full max-w-6xl mx-auto h-[800px] md:h-[800px] flex items-center justify-center px-4 md:px-8"
    >
      {/* Mobile Carousel View */}
      <div className="md:hidden w-full">
        <div className="relative flex flex-col items-center">
          <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            <AnimatePresence
              initial={false}
              mode="wait"
              custom={slideDirection}
            >
              <motion.div
                key={activeSlide}
                custom={slideDirection}
                variants={slideVariants}
                initial={
                  slideDirection > 0 ? 'enterFromRight' : 'enterFromLeft'
                }
                animate="center"
                exit={slideDirection > 0 ? 'exitToLeft' : 'exitToRight'}
                transition={{
                  x: { type: 'spring', stiffness: 400, damping: 35 },
                  opacity: { duration: 0.1 },
                }}
                className="absolute w-full flex justify-center"
              >
                <div className="flex flex-col items-center">
                  {/* Capsule container */}
                  <div className="relative w-[160px] h-[280px]">
                    <motion.svg
                      width="160"
                      height="280"
                      viewBox="0 0 160 280"
                      fill="none"
                      className="absolute inset-0"
                    >
                      <motion.path
                        d="M80 0C35.817 0 0 35.817 0 80v120c0 44.183 35.817 80 80 80s80-35.817 80-80V80c0-44.183-35.817-80-80-80z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary"
                        initial="hidden"
                        animate="visible"
                        variants={capsulePathVariants}
                      />
                    </motion.svg>

                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-b ${processSteps[activeSlide].color}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    <motion.div
                      className="relative w-24 h-24 mx-auto mt-[118px]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={processSteps[activeSlide].icon}
                        alt={processSteps[activeSlide].label}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="h-16 w-[2px] my-4 bg-gradient-to-b from-primary/40 via-primary to-primary/40"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  <motion.div
                    className="text-center w-full max-w-[220px] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold text-xl mb-3">
                      {processSteps[activeSlide].label}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {processSteps[activeSlide].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 pointer-events-auto"
              onClick={handlePrevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 pointer-events-auto"
              onClick={handleNextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {processSteps.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === activeSlide
                    ? 'bg-primary w-4'
                    : 'bg-muted-foreground/30'
                )}
                onClick={() => {
                  setSlideDirection(index > activeSlide ? 1 : -1);
                  setActiveSlide(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div ref={scope} className="hidden md:block w-full">
        {/* Horizontal connecting lines */}
        <div className="absolute top-[200px] left-0 right-0 flex justify-between items-center">
          {processSteps.map((_, index) => (
            <React.Fragment key={index}>
              {index < processSteps.length - 1 && (
                <motion.div
                  className="h-[2px] flex-1 mx-8 bg-gradient-to-r from-transparent via-muted/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: index < currentStep ? 1 : 0,
                    background:
                      index < currentStep
                        ? 'linear-gradient(to right, rgba(var(--primary-rgb), 0.4), var(--primary), rgba(var(--primary-rgb), 0.4))'
                        : 'linear-gradient(to right, transparent, rgba(var(--muted), 0.3), transparent)',
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps */}
        <div className="relative flex justify-between w-full">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0,
                scale: isAnimationComplete
                  ? 1
                  : index === currentStep
                  ? 1.05
                  : 1,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Capsule container with SVG path */}
              <div className="relative w-[160px] h-[280px]">
                <motion.svg
                  width="160"
                  height="280"
                  viewBox="0 0 160 280"
                  fill="none"
                  className="absolute inset-0"
                >
                  <motion.path
                    d="M80 0C35.817 0 0 35.817 0 80v120c0 44.183 35.817 80 80 80s80-35.817 80-80V80c0-44.183-35.817-80-80-80z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      index <= currentStep
                        ? 'stroke-primary'
                        : 'stroke-muted/50'
                    }
                    initial="hidden"
                    animate={index <= currentStep ? 'visible' : 'hidden'}
                    variants={capsulePathVariants}
                  />
                </motion.svg>

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-b ${step.color}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0,
                    background:
                      index <= currentStep
                        ? [
                            `linear-gradient(0deg, ${step.color})`,
                            `linear-gradient(120deg, ${step.color})`,
                            `linear-gradient(240deg, ${step.color})`,
                            `linear-gradient(360deg, ${step.color})`,
                          ]
                        : '',
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    background: {
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className="relative w-24 h-24 mx-auto mt-[118px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index <= currentStep ? 1 : 0,
                    scale: index <= currentStep ? 1 : 0.8,
                  }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Image
                    src={step.icon}
                    alt={step.label}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Vertical connecting line */}
              <motion.div
                className="h-16 w-[2px] my-4 bg-gradient-to-b from-primary/40 via-primary to-primary/40"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Label and description */}
              <motion.div
                className="text-center w-full max-w-[220px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0,
                  y: index <= currentStep ? 0 : 20,
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-semibold text-xl mb-3">{step.label}</h3>
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
