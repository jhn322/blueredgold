'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageCarousel } from '@/components/ui/image-carousel';
import { ExploreSolution } from '@/components/ui/explore-solution';

// Temporary mock data until Sanity is implemented
interface FoodBeveragesRecipe {
  id: string;
  title: string;
  date: Date;
  imageUrl: string;
  slug: string;
}

const mockFoodBeveragesRecipes: FoodBeveragesRecipe[] = [
  {
    id: '1',
    title:
      "(SWE) Press release: Pioneering the future of Saffron as Sweden's next major export",
    date: new Date('2024-01-05'),
    imageUrl: '/blogs/articles/press-1.webp',
    slug: 'pioneering-saffron-future',
  },
  {
    id: '2',
    title: 'Revolutionizing Saffron Cultivation with Cutting-Edge Technology',
    date: new Date('2023-12-15'),
    imageUrl: '/blogs/articles/press-2.webp',
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

export default function FoodBeveragesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Food & Beverages Recipes Section */}
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12 font-display">
              Recipes
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mockFoodBeveragesRecipes.map((recipe, index) => (
              <FadeIn key={recipe.id} delay={index * 200}>
                <Link href={`/blogs/articles/${recipe.slug}`} className="group">
                  <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={recipe.imageUrl}
                          alt={recipe.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <time className="text-sm text-muted-foreground">
                          {format(recipe.date, 'MMMM d, yyyy')}
                        </time>
                        <h2 className="text-xl font-semibold mt-2 text-foreground group-hover:text-primary transition-colors">
                          {recipe.title}
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
              <Link href="/blogs/saffron-recipes">
                <Button variant="outline" className="group">
                  View all recipes
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

      <ExploreSolution
        primaryButton={{
          text: 'Growing Saffron',
          href: '/premium-saffron/growing-saffron',
        }}
        secondaryButton={{
          text: 'Medical & Cosmetics',
          href: '/premium-saffron/medical-cosmetics',
        }}
      />
    </main>
  );
}
