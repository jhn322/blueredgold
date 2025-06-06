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
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// StarFall animation
const StarFall = () => {
  const [stars, setStars] = useState<
    { id: number; x: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 5 + 1,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 15,
      }));
      setStars(newStars);
    };

    generateStars();

    // Regenerate stars every 20 seconds for continuous effect
    const interval = setInterval(generateStars, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-[#FFFFFF] rounded-full opacity-0"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: '-20px',
            filter: `blur(${star.size <= 3 ? 0 : 1}px) brightness(1.5)`,
            boxShadow: `0 0 ${star.size * 2}px ${
              star.size / 2
            }px rgba(255, 215, 0, 0.8)`,
          }}
          animate={{
            y: ['0vh', '120vh'],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: 'linear',
            repeat: Infinity,
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
};

// Interface for recipes from Sanity
interface Recipe {
  _id: string;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  mainImage: SanityImageSource;
}

// GROQ query to fetch recipes
const recipesQuery = `*[_type == "recipe"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  publishedAt,
  slug,
  mainImage
}`;

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

// Subtle animation effects
const subtleParallaxAnimation = {
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const colorShiftAnimation = {
  animate: {
    background: [
      'linear-gradient(45deg, rgba(255, 215, 0, 0.05), rgba(255, 255, 255, 0))',
      'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 255, 255, 0.05))',
      'linear-gradient(45deg, rgba(255, 215, 0, 0.05), rgba(255, 255, 255, 0))',
    ],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const glowPulseAnimation = {
  animate: {
    boxShadow: [
      '0 0 0px rgba(255, 215, 0, 0.3)',
      '0 0 15px rgba(255, 215, 0, 0.5)',
      '0 0 0px rgba(255, 215, 0, 0.3)',
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function FoodBeveragesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await client.fetch<Recipe[]>(recipesQuery);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <FadeIn key={`skeleton-${index}`} delay={index * 200}>
                  <Card className="overflow-hidden border border-primary/10 bg-muted/20">
                    <CardContent className="p-0 relative">
                      <div className="relative aspect-square bg-muted animate-pulse"></div>
                      <div className="p-6 bg-background">
                        <div className="h-6 bg-muted animate-pulse rounded-full w-3/4 mb-4"></div>
                        <div className="h-4 bg-muted animate-pulse rounded-full w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))
            ) : recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <FadeIn key={recipe._id} delay={index * 200}>
                  <Link
                    href={`/blogs/saffron-recipes/${recipe.slug.current}`}
                    className="group"
                  >
                    <Card className="overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                      <CardContent className="p-0 relative">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={urlFor(recipe.mainImage).url()}
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
                            {format(
                              new Date(recipe.publishedAt),
                              'MMM d, yyyy'
                            )}
                          </motion.div>

                          <h3 className="text-lg font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
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
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-lg text-muted-foreground">
                  No recipes found. Check back soon!
                </p>
              </div>
            )}
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
                <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">
                    Our Values
                  </span>
                </div>
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
                <motion.div
                  className="absolute inset-0"
                  variants={subtleParallaxAnimation}
                  animate="animate"
                >
                  <Image
                    src="/food-beverages/food-1.webp"
                    alt="Premium saffron cooking"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Subtle color shift overlay */}
                <motion.div
                  className="absolute inset-0 mix-blend-overlay"
                  variants={colorShiftAnimation}
                  animate="animate"
                />

                {/* Soft glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  variants={glowPulseAnimation}
                  animate="animate"
                />

                {/* Subtle vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
          <StarFall />
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
                  <Link
                    href="/blogs/saffron-recipes/johan-heiberts-lussekatter"
                    className="relative inline-block group ml-1"
                  >
                    <span>saffron-infused buns</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transition-all duration-300"></span>
                  </Link>
                  . Add an extra layer of authenticity and flavor to your
                  holiday treats with BlueRedGold&apos;s premium saffron.
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
                    &quot;By setting the standards for the highest quality
                  </span>
                  , sustainably and ethically produced saffron, BlueRedGold will
                  build a{' '}
                  <span className="text-primary font-semibold">
                    globally recognized and trusted brand
                  </span>{' '}
                  supplying consumers, retail, food services and the consumer
                  packaged food industry worldwide{' '}
                  <span className="text-primary font-semibold">
                    with saffron and innovative saffron products&quot;
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
                  cooking. And what&apos;s a paella without the golden touch of
                  premium saffron?
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
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
                  Let&apos;s Collaborate
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Whether you&apos;re crafting dishes steeped in traditional
                  French cuisine or blazing new trails in the culinary world,
                  BlueRedGold wants to be a part of your journey. We are
                  actively seeking to collaborate with chefs and foodies.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Reach out to us and let&apos;s make something extraordinary
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
          href: '/',
        }}
        secondaryButton={{
          text: 'Medical & Cosmetics',
          href: '/premium-saffron/medical-cosmetics',
        }}
      />
    </main>
  );
}
