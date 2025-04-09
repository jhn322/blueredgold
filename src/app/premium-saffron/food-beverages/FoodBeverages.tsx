'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    title: 'Swedish Saffron Pancakes: A Gotland specialty',
    date: new Date('2023-12-25'),
    imageUrl: '/blogs/saffron-recipes/saffron-1.webp',
    slug: 'swedish-saffron-pancakes',
  },
  {
    id: '2',
    title: "Johan Heibert's Lussekatter Recipe with BlueRedGold Saffron",
    date: new Date('2023-12-13'),
    imageUrl: '/blogs/saffron-recipes/saffron-2.webp',
    slug: 'johan-heiberts-lussekatter',
  },
  {
    id: '3',
    title: 'Saffron Kladdkaka: A Modern Twist on a Classic Favorite',
    date: new Date('2023-01-12'),
    imageUrl: '/blogs/saffron-recipes/saffron-3.webp',
    slug: 'saffron-kladdkaka',
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
                <Link
                  href={`/blogs/saffron-recipes/${recipe.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
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
                <Button variant="outline" className="group bg-muted/20">
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
