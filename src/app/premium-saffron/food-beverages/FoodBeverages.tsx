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
import { ParallaxHero } from '@/components/ui/parallax-hero';

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const shimmerAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: [0, 1, 0],
    x: ['-100%', '100%', '300%'],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatDelay: 2,
    },
  },
};

export default function FoodBeveragesPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/food-beverages/food-hero.webp"
        imageAlt="Premium saffron being used in culinary applications"
        title="Food & Beverages"
        subtitle="Premium Saffron"
        buttons={[
          {
            text: 'Explore Our Recipes',
            href: '#recipes',
            variant: 'default',
            smoothScroll: true,
          },
        ]}
      />

      {/* Recipes Section */}
      <section id="recipes" className="py-24">
        <div className="container max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                New Saffron Recipes
              </h2>
              <Link href="/blogs/saffron-recipes" className="hidden md:block">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {mockFoodBeveragesRecipes.map((recipe, index) => (
              <FadeIn key={recipe.id} delay={index * 200}>
                <Link
                  href={`/blogs/saffron-recipes/${recipe.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                    <CardContent className="p-0 relative">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={recipe.imageUrl}
                          alt={recipe.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Hover effect - zoom line */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>

                      <div className="p-6 bg-background relative">
                        <motion.div
                          className="absolute -top-6 right-4 px-3 py-1 bg-primary text-white text-sm font-medium rounded-full"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {format(recipe.date, 'MMM d, yyyy')}
                        </motion.div>

                        <h3 className="text-lg font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                          {recipe.title}
                        </h3>

                        <div className="mt-4 flex items-center text-primary/80 text-sm font-medium">
                          <span>Read recipe</span>
                          <motion.div
                            variants={infiniteXAnimation}
                            animate="animate"
                            className="ml-2"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="flex justify-center md:hidden">
              <Link href="/blogs/saffron-recipes">
                <Button variant="outline" className="group bg-background/50">
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

      {/* Culinary Roots Section */}
      <section className="bg-background py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                  Our Culinary Roots: Where Flavor Meets Innovation
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  At BlueRedGold, our passion for exceptional cuisine is only
                  rivaled by our commitment to pioneering sustainable production
                  methods. We&apos;re on a quest to bring you unforgettable
                  flavors while shaping the future of ethical farming.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/food-beverages/food-1.webp"
                  alt="Premium saffron cooking"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"
                  variants={shimmerAnimation}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Winter in Sweden Section*/}
      <section className="h-[60vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/food-beverages/food-2.webp"
            alt="Traditional Lussekatter saffron buns"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="max-w-lg">
            <FadeIn>
              <div className="space-y-6">
                <span className="text-sm font-medium text-white tracking-wider bg-primary/80 px-3 py-1 rounded-full">
                  Winter in Sweden
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  The Christmas Season: Time for Lussekatter
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  During the Christmas season, kitchens across Sweden fill with
                  the warm, inviting aroma of Lussekatter, the traditional
                  saffron-infused buns. Add an extra layer of authenticity and
                  flavor to your holiday treats with BlueRedGold's premium
                  saffron.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative flex justify-center items-center">
                <Image
                  src="/food-beverages/food-globe.png"
                  alt="Golden saffron global supply"
                  width={500}
                  height={500}
                  className="object-contain"
                />

                {/* Animated orbit */}
                <motion.div
                  className="absolute inset-0 w-full h-full border-2 border-dashed border-primary/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 120,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6">
                <blockquote className="text-lg md:text-xl lg:text-2xl italic text-foreground leading-relaxed">
                  <span className="text-primary font-semibold">
                    "By setting the standards for the highest quality
                  </span>
                  , sustainably and ethically produced saffron, BlueRedGold will
                  build a{' '}
                  <span className="text-primary font-semibold">
                    globally recognized and trusted brand
                  </span>{' '}
                  supplying consumers, retail, food services and the consumer
                  packaged food industry worldwide{' '}
                  <span className="text-primary font-semibold">
                    with saffron and innovative saffron products"
                  </span>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Autumn in Sweden Section*/}
      <section className="h-[60vh] relative flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/food-beverages/food-3.webp"
            alt="Outdoor cooking with saffron"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="max-w-lg ml-auto">
            <FadeIn>
              <div className="space-y-6">
                <span className="text-sm font-medium text-white tracking-wider bg-primary/80 px-3 py-1 rounded-full">
                  Autumn in Sweden
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  The Season of Outdoor Cooking
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  In Sweden, autumn is synonymous with the joys of outdoor
                  cooking. And what's a paella without the golden touch of
                  premium saffron?
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/70 rounded-full z-10"
          animate={{
            y: [0, -30, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary/60 rounded-full z-10"
          animate={{
            y: [0, -40, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/80 rounded-full z-10"
          animate={{
            y: [0, -35, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 sm:order-1">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium tracking-wider text-primary">
                    Cook Along
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                  Let's Collaborate
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Whether you're crafting dishes steeped in traditional French
                  cuisine or blazing new trails in the culinary world,
                  BlueRedGold wants to be a part of your journey. We are
                  actively seeking to collaborate with chefs and foodies.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Reach out to us and let's make something extraordinary
                  together.
                </p>
                <div className="pt-6">
                  <Button
                    className="group relative overflow-hidden text-black"
                    size="lg"
                    asChild
                  >
                    <Link href="/about-us/about">
                      <span className="relative z-10">Get in Touch</span>
                      <div className="absolute inset-0 bg-secondary" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(transparent_270deg,#FFF2D7,transparent)] animate-[spin_2s_linear_infinite]" />
                        <div className="absolute inset-[2px] rounded-md bg-secondary" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="order-1 md:order-2">
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] max-w-xl mx-auto">
                <div className="relative w-full h-full">
                  {/* Back image */}
                  <div className="absolute right-0 top-0 w-[85%] h-[80%] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/food-beverages/food-4.webp"
                      alt="Saffron flowers"
                      fill
                      className="object-cover transition-transform"
                    />
                  </div>
                  {/* Front image */}
                  <div className="absolute left-[-20%] bottom-[-15%] w-[100%] h-[100%] rounded-xl overflow-hidden">
                    <Image
                      src="/food-beverages/food-5.webp"
                      alt="Saffron cooking"
                      fill
                      className="object-contain transition-transform"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Explore section */}
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
