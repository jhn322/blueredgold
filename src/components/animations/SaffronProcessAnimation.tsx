'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';

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

  useEffect(() => {
    const startAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      for (let i = 0; i < processSteps.length; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
      setIsAnimationComplete(true);
    };
    startAnimation();
  }, []);

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

  return (
    <div
      ref={scope}
      className="relative w-full max-w-6xl mx-auto h-[800px] flex items-center justify-center px-8"
    >
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
              scale: isAnimationComplete ? 1 : index === currentStep ? 1.05 : 1,
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
                    index <= currentStep ? 'stroke-primary' : 'stroke-muted/50'
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
              animate={{
                scaleY: index <= currentStep ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              style={{ transformOrigin: 'top' }}
            />

            {/* Label and description */}
            <motion.div
              className="text-center w-full max-w-[220px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0,
                y: index <= currentStep ? 0 : 20,
              }}
              transition={{ delay: 0.7, duration: 0.5 }}
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
  );
};
