'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function SciencePage() {
  const [loading, setLoading] = useState(true);

  const title = 'Coming Soon';
  const subtitle = "We're working on something amazing";
  const message =
    'This page is under construction. Please check back later for updates.';
  const estimatedTime = 'when it is ready.';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center"
          >
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-foreground">Loading...</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full max-w-4xl flex-col items-center"
          >
            <Card className="w-full overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex flex-col-reverse items-center justify-between gap-8 p-6 md:flex-row md:p-8">
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h1 className="font-display text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
                        {title}
                      </h1>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <p className="text-xl text-primary/80">{subtitle}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <p className="text-foreground/70">{message}</p>
                      <p className="mt-2 text-foreground/70">
                        Expected completion:{' '}
                        <span className="font-medium text-secondary">
                          {estimatedTime}
                        </span>
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Button asChild>
                        <Link href="/">Back to Home</Link>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.7,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className="relative h-64 w-64 md:h-80 md:w-80"
                  >
                    <div className="relative h-full w-full">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 3,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src="/illustration/flower/flower8.webp"
                          alt="Purple Crocus Flower"
                          fill
                          className="object-contain"
                          priority
                        />
                      </motion.div>

                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0.7,
                            x: Math.random() * 60 - 30,
                            y: Math.random() * 60 - 30,
                            scale: Math.random() * 0.4 + 0.1,
                          }}
                          animate={{
                            opacity: [0.7, 0.3, 0.7],
                            y: [0, -100, -200],
                            x: [
                              0,
                              Math.random() * 40 - 20,
                              Math.random() * 80 - 40,
                            ],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: Math.random() * 5 + 5,
                            delay: Math.random() * 5,
                            ease: 'easeOut',
                          }}
                          className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-secondary/30 blur-sm"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 text-center text-sm text-foreground/60"
            >
              <p>
                © {new Date().getFullYear()} BlueRedGold. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
