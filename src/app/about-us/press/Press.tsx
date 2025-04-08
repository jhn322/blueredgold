'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Temporary mock data until Sanity is implemented
interface PressArticle {
  id: string;
  title: string;
  date: Date;
  imageUrl: string;
  slug: string;
}

const mockPressArticles: PressArticle[] = [
  {
    id: '1',
    title:
      "(SWE) Press release: Pioneering the future of Saffron as Sweden's next major export",
    date: new Date('2024-01-05'),
    imageUrl: '/press/press-1.webp',
    slug: 'pioneering-saffron-future',
  },
  {
    id: '2',
    title: 'Revolutionizing Saffron Cultivation with Cutting-Edge Technology',
    date: new Date('2023-12-15'),
    imageUrl: '/press/press-2.webp',
    slug: 'revolutionizing-saffron-cultivation',
  },
];

const infiniteXAnimation = {
  animate: {
    x: [0, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Press Articles Section */}
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12 font-display">
              Press
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mockPressArticles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 200}>
                <Link
                  href={`/blogs/articles/${article.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <time className="text-sm text-muted-foreground">
                          {format(article.date, 'MMMM d, yyyy')}
                        </time>
                        <h2 className="text-xl font-semibold mt-2 text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="flex justify-center">
              <Link href="/blogs/articles">
                <Button variant="outline" className="rounded-full group">
                  View all articles
                  <motion.div
                    variants={infiniteXAnimation}
                    animate="animate"
                    className="ml-2"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Press Images Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Press images
            </h2>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg text-foreground/80 mb-4 max-w-3xl">
              For a comprehensive collection of our latest press images, please
              visit our dedicated Lightroom Gallery. Always current, always
              relevant.
            </p>

            <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
              Below, we&apos;ve curated a select assortment for your
              convenience.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            {/* Placeholder for future carousel component */}
            <div className="relative aspect-[21/9] mb-12 bg-muted rounded-xl overflow-hidden">
              <Image
                src="/press/food-and-beverages.webp"
                alt="Press images preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  PRESS IMAGES: FOOD & BEVERAGES
                </h3>
                <Button variant="secondary" className="rounded-full">
                  Explore our full gallery
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="space-y-4 text-foreground/80">
              <p>
                All images are free to use in publications specifically related
                to BlueRedGold. When utilizing our images, kindly attribute them
                with the copyright symbol and our name: © BlueRedGold
              </p>
              <div>
                <Link
                  href="https://drive.google.com/file/d/1RP2KHNoyOsaPa29Xs_bPTd4ywVVpCm30/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download high-res images for print (137mb) from Google Drive"
                >
                  <Button variant="default" className="rounded-full">
                    Download high-res images for print (137mb)
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
