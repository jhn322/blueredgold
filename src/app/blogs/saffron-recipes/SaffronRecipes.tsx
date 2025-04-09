'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Recipes {
  id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  slug: string;
  category: string;
}

// Temporary mock data until Sanity is implemented
const mockRecipes: Recipes[] = [
  {
    id: '1',
    title: 'Swedish Saffron Pancakes: A Gotland specialty',
    description:
      'Discover the traditional Swedish saffron pancakes from Gotland, featuring our premium BlueRedGold saffron. Learn the authentic recipe and techniques to create this delightful breakfast or dessert dish.',
    date: new Date('2023-12-25'),
    imageUrl: '/blogs/saffron-recipes/saffron-1.webp',
    slug: 'swedish-saffron-pancakes',
    category: 'Traditional',
  },
  {
    id: '2',
    title: "Johan Heibert's Lussekatter Recipe with BlueRedGold Saffron",
    description:
      'Master baker Johan Heibert shares his special recipe for Lussekatter (Swedish saffron buns) using BlueRedGold saffron. These S-shaped buns are a Christmas tradition in Sweden and feature our high-quality saffron.',
    date: new Date('2023-12-13'),
    imageUrl: '/blogs/saffron-recipes/saffron-2.webp',
    slug: 'johan-heiberts-lussekatter',
    category: 'Holiday',
  },
  {
    id: '3',
    title: 'Saffron Kladdkaka: A Modern Twist on a Classic Favorite',
    description:
      'Give the traditional Swedish chocolate sticky cake (kladdkaka) a luxurious upgrade with our premium saffron. This fusion dessert combines the best of both worlds for a unique and indulgent treat.',
    date: new Date('2023-01-12'),
    imageUrl: '/blogs/saffron-recipes/saffron-3.webp',
    slug: 'saffron-kladdkaka',
    category: 'Fusion',
  },
  {
    id: '4',
    title: 'Creamy Saffron Risotto with Swedish Mushrooms',
    description:
      'Learn how to make a velvety saffron risotto featuring locally foraged Swedish mushrooms. Our step-by-step guide ensures perfect results with the distinctive aroma and flavor of BlueRedGold saffron.',
    date: new Date('2022-11-15'),
    imageUrl: '/blogs/saffron-recipes/saffron-4.webp',
    slug: 'saffron-risotto-swedish-mushrooms',
    category: 'Main Course',
  },
  {
    id: '5',
    title: 'Saffron Infused Ice Cream with Cardamom and Honey',
    description:
      'Create a luxurious dessert with our recipe for saffron ice cream enhanced with cardamom and Swedish wildflower honey. A perfect balance of flavors that showcases the unique qualities of BlueRedGold saffron.',
    date: new Date('2022-10-20'),
    imageUrl: '/blogs/saffron-recipes/saffron-5.webp',
    slug: 'saffron-ice-cream',
    category: 'Dessert',
  },
  {
    id: '6',
    title: 'Saffron and Dill Cured Salmon (Gravlax)',
    description:
      'Elevate the traditional Swedish gravlax with the addition of BlueRedGold saffron. This elegant appetizer combines two premium ingredients - fresh salmon and high-quality saffron - for a spectacular dish.',
    date: new Date('2022-10-05'),
    imageUrl: '/blogs/saffron-recipes/saffron-6.webp',
    slug: 'saffron-dill-gravlax',
    category: 'Appetizer',
  },
  {
    id: '7',
    title: 'Persian Saffron Rice (Tahdig) with Nordic Berries',
    description:
      'A fusion recipe that brings together the best of Persian and Nordic cuisines. Learn how to make perfect crispy-bottomed saffron rice topped with seasonal Swedish berries for a unique side dish.',
    date: new Date('2022-09-25'),
    imageUrl: '/blogs/saffron-recipes/saffron-7.webp',
    slug: 'persian-saffron-rice-nordic-berries',
    category: 'Fusion',
  },
  {
    id: '8',
    title: 'Saffron Infused Aquavit: A Swedish Twist',
    description:
      'Create your own saffron-infused aquavit with this simple recipe. Our premium BlueRedGold saffron adds a unique flavor and golden hue to this traditional Scandinavian spirit - perfect for special occasions.',
    date: new Date('2022-09-15'),
    imageUrl: '/blogs/saffron-recipes/saffron-8.webp',
    slug: 'saffron-infused-aquavit',
    category: 'Beverages',
  },
  {
    id: '9',
    title: 'Saffron Braised Lamb Shanks with Root Vegetables',
    description:
      'A hearty winter dish featuring slow-cooked lamb shanks in a rich saffron broth with traditional Swedish root vegetables. The perfect comfort food showcasing our premium BlueRedGold saffron.',
    date: new Date('2022-09-01'),
    imageUrl: '/blogs/saffron-recipes/saffron-9.webp',
    slug: 'saffron-lamb-shanks',
    category: 'Main Course',
  },
  {
    id: '10',
    title: 'Modern Saffron Waffles with Lingonberry Compote',
    description:
      'Upgrade your breakfast with these golden saffron waffles served with a tart lingonberry compote. A contemporary twist on classic Swedish flavors using our high-quality BlueRedGold saffron.',
    date: new Date('2022-08-20'),
    imageUrl: '/blogs/saffron-recipes/saffron-10.webp',
    slug: 'saffron-waffles-lingonberry',
    category: 'Breakfast',
  },
  {
    id: '11',
    title: 'Healthy Saffron Smoothie Bowl with Nordic Superfoods',
    description:
      'Start your day with this nutritious saffron smoothie bowl featuring Swedish berries and superfoods. Learn how a pinch of our premium saffron can transform your morning routine with its flavor and health benefits.',
    date: new Date('2022-08-10'),
    imageUrl: '/blogs/saffron-recipes/saffron-11.webp',
    slug: 'saffron-smoothie-bowl',
    category: 'Health',
  },
  {
    id: '12',
    title: 'Ultimate Saffron Seafood Stew (Swedish Bouillabaisse)',
    description:
      'A Swedish take on the classic Provençal dish, featuring the bounty of the Nordic seas enhanced with BlueRedGold saffron. This hearty seafood stew is perfect for entertaining or special family dinners.',
    date: new Date('2022-08-01'),
    imageUrl: '/blogs/saffron-recipes/saffron-12.webp',
    slug: 'saffron-seafood-stew',
    category: 'Main Course',
  },
];

export default function SaffronRecipesPage() {
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipes[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const recipesPerPage = 6;

  useEffect(() => {
    setDisplayedRecipes(mockRecipes.slice(0, recipesPerPage));
    setIsExpanded(false);
  }, []);

  const handleToggleRecipes = () => {
    if (isExpanded) {
      // Show less
      setDisplayedRecipes(mockRecipes.slice(0, recipesPerPage));
      setIsExpanded(false);
    } else {
      // Show more
      const currentLength = displayedRecipes.length;
      const nextRecipes = mockRecipes.slice(
        currentLength,
        currentLength + recipesPerPage
      );
      setDisplayedRecipes([...displayedRecipes, ...nextRecipes]);
      setIsExpanded(currentLength + recipesPerPage >= mockRecipes.length);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <Link
              href="/premium-saffron/food-beverages"
              className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 mb-6 px-4 py-2 rounded-full hover:bg-primary/5"
            >
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Food & Beverages
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                Recipes
              </h1>
              <p className="text-muted-foreground">
                Showing {displayedRecipes.length} of {mockRecipes.length}{' '}
                recipes
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedRecipes.map((recipe, index) => (
              <FadeIn key={recipe.id} delay={index * 50}>
                <Link
                  href={`/blogs/saffron-recipes/${recipe.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={recipe.imageUrl}
                          alt={recipe.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                            {recipe.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <time className="text-sm text-muted-foreground">
                          {format(recipe.date, 'MMMM d, yyyy')}
                        </time>
                        <h2 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {recipe.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3">
                          {recipe.description}
                        </p>
                        <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors border border-primary/20 rounded-full px-4 py-1.5 group-hover:border-primary/40">
                          Continue reading
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

          {displayedRecipes.length > 0 && (
            <FadeIn delay={300}>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="group transition-all duration-300"
                  onClick={handleToggleRecipes}
                >
                  {isExpanded ? 'Show less recipes' : 'Show more recipes'}
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </main>
  );
}
