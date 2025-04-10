'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Interface for recipes from Sanity
interface Recipe {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  mainImage: SanityImageSource;
  slug: {
    current: string;
  };
  category: {
    title: string;
  };
}

// GROQ query to fetch all recipes
const allRecipesQuery = `*[_type == "recipe"] | order(publishedAt desc) {
  _id,
  title,
  description,
  publishedAt,
  slug,
  mainImage,
  category->{ title }
}`;

export default function SaffronRecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const recipesPerPage = 6;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await client.fetch<Recipe[]>(allRecipesQuery);
        setRecipes(data);
        setDisplayedRecipes(data.slice(0, recipesPerPage));
        setIsExpanded(data.length <= recipesPerPage);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleToggleRecipes = () => {
    if (isExpanded) {
      // Show less
      setDisplayedRecipes(recipes.slice(0, recipesPerPage));
      setIsExpanded(false);
    } else {
      // Show more
      const currentLength = displayedRecipes.length;
      const nextRecipes = recipes.slice(
        currentLength,
        currentLength + recipesPerPage
      );
      setDisplayedRecipes([...displayedRecipes, ...nextRecipes]);
      setIsExpanded(currentLength + recipesPerPage >= recipes.length);
    }
  };

  // Loading skeleton
  const RecipeSkeleton = () => (
    <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20">
      <CardContent className="p-0">
        <div className="relative aspect-[16/9] bg-muted animate-pulse"></div>
        <div className="p-6">
          <div className="h-4 w-24 bg-muted animate-pulse rounded-full mb-3"></div>
          <div className="h-6 w-3/4 bg-muted animate-pulse rounded-full mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted animate-pulse rounded-full"></div>
            <div className="h-4 w-full bg-muted animate-pulse rounded-full"></div>
            <div className="h-4 w-2/3 bg-muted animate-pulse rounded-full"></div>
          </div>
          <div className="h-8 w-36 bg-muted animate-pulse rounded-full mt-4"></div>
        </div>
      </CardContent>
    </Card>
  );

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
              {!isLoading && (
                <p className="text-muted-foreground">
                  Showing {displayedRecipes.length} of {recipes.length} recipes
                </p>
              )}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {isLoading ? (
              // Show loading skeletons while fetching data
              Array.from({ length: 6 }).map((_, index) => (
                <FadeIn key={`skeleton-${index}`} delay={index * 50}>
                  <RecipeSkeleton />
                </FadeIn>
              ))
            ) : recipes.length > 0 ? (
              displayedRecipes.map((recipe, index) => (
                <FadeIn key={recipe._id} delay={index * 50}>
                  <Link
                    href={`/blogs/saffron-recipes/${recipe.slug.current}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                      <CardContent className="p-0">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={urlFor(recipe.mainImage).url()}
                            alt={recipe.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                              {recipe.category?.title || 'Recipe'}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <time className="text-sm text-muted-foreground">
                            {format(
                              new Date(recipe.publishedAt),
                              'MMMM d, yyyy'
                            )}
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
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No recipes found. Check back soon for delicious saffron
                  recipes!
                </p>
              </div>
            )}
          </div>

          {!isLoading && recipes.length > recipesPerPage && (
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
