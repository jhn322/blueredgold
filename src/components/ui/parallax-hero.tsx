'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './fade-in';
import { Button } from './button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { scrollToElement } from '@/lib/scroll-utils';

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  buttons?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'outline';
    smoothScroll?: boolean;
  }[];
}

export function ParallaxHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  buttons,
}: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Transform the background position based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          scale: 1.2,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content - Stays fixed relative to scroll */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <FadeIn delay={100}>
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              {subtitle}
            </p>
          </FadeIn>
          {buttons && (
            <FadeIn delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                {buttons.map((button, index) =>
                  button.smoothScroll ? (
                    <Button
                      key={index}
                      size="lg"
                      variant={button.variant || 'default'}
                      className={`relative overflow-hidden group text-md ${
                        button.variant === 'outline'
                          ? 'border-white text-black hover:bg-white/10'
                          : 'text-black'
                      }`}
                      onClick={() => scrollToElement(button.href)}
                    >
                      <span className="relative z-10 flex items-center">
                        {button.icon && (
                          <span className="mr-2">{button.icon}</span>
                        )}
                        {button.text}
                        {button.variant === 'outline' ? (
                          <motion.span
                            className="inline-block ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.span>
                        ) : (
                          button.smoothScroll && (
                            <motion.span
                              className="inline-flex ml-2"
                              animate={{ y: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ChevronRight className="h-4 w-4 rotate-90" />
                            </motion.span>
                          )
                        )}
                      </span>
                      {button.variant !== 'outline' && (
                        <>
                          <div className="absolute inset-0 bg-secondary" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(transparent_270deg,#FFF2D7,transparent)] animate-[spin_2s_linear_infinite]" />
                            <div className="absolute inset-[2px] rounded-full bg-secondary" />
                          </div>
                        </>
                      )}
                    </Button>
                  ) : (
                    <Link key={index} href={button.href}>
                      <Button
                        size="lg"
                        variant={button.variant || 'default'}
                        className={`relative rounded-full overflow-hidden group text-md ${
                          button.variant === 'outline'
                            ? 'border-white text-black hover:bg-white/10'
                            : 'text-black'
                        }`}
                      >
                        <span className="relative z-10 flex items-center">
                          {button.icon && (
                            <span className="mr-2">{button.icon}</span>
                          )}
                          {button.text}
                          {button.variant === 'outline' ? (
                            <motion.span
                              className="inline-block ml-2"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </motion.span>
                          ) : (
                            button.smoothScroll && (
                              <motion.span
                                className="inline-flex ml-2"
                                animate={{ y: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ChevronRight className="h-4 w-4 rotate-90" />
                              </motion.span>
                            )
                          )}
                        </span>
                        {button.variant !== 'outline' && (
                          <>
                            <div className="absolute inset-0 bg-secondary" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(transparent_270deg,#FFF2D7,transparent)] animate-[spin_2s_linear_infinite]" />
                              <div className="absolute inset-[2px] rounded-full bg-secondary" />
                            </div>
                          </>
                        )}
                      </Button>
                    </Link>
                  )
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
