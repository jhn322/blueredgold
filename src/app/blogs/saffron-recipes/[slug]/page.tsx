import { notFound } from 'next/navigation';
import { ChevronLeft, CalendarDays, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FadeIn } from '@/components/ui/fade-in';
import ClientOnly from '@/components/ClientOnly';
import SanityPortableText from '@/components/PortableTextComponent';
import type { Metadata } from 'next';
import type { PortableTextBlock } from '@portabletext/types';
import { format } from 'date-fns';
import { ShareButton } from '@/components/ShareButton';

// Define interfaces for Sanity types
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Gröq query för att hämta ett recept baserat på slug
const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{
  _id,
  title,
  description,
  publishedAt,
  body,
  mainImage,
  slug,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  category->{ title },
  author->{ 
    name, 
    image,
    slug
  }
}`;

// GROQ query för att hämta ett slumpmässigt recept
const randomRecipeQuery = `*[_type == "recipe"] | order(publishedAt desc)[0]`;

// Interface för recept från Sanity
interface Recipe {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  body: PortableTextBlock[]; // PortableText innehåll
  mainImage: SanityImage;
  slug: {
    current: string;
  };
  estimatedReadingTime: number;
  category: {
    title: string;
  };
  author?: {
    name: string;
    image: SanityImage;
    slug: {
      current: string;
    };
  };
}

// Define a type for related recipes
interface RelatedRecipe {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}

// Relaterade recept query
const relatedRecipesQuery = `*[_type == "recipe" && slug.current != $slug && category->title == $category][0...3]{
  _id,
  title,
  slug,
  publishedAt
}`;

// Define params and searchParams explicitly as Promises to satisfy the PageProps constraint
type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Hjälpfunktion för att hämta recept baserat på slug
async function getRecipeFromSlug(slug: string): Promise<Recipe> {
  // Försök hämta receptet med den angivna slugen
  const recipe = await client.fetch<Recipe>(recipeQuery, { slug });

  // Om receptet inte hittas, hämta ett slumpmässigt recept istället
  if (!recipe) {
    console.log(
      `Recipe with slug "${slug}" not found. Fetching a random recipe as fallback.`
    );
    const randomRecipe = await client.fetch<Recipe>(randomRecipeQuery);

    // Om inte ens ett fallback-recept kan hittas, då visar vi 404
    if (!randomRecipe) {
      notFound();
    }

    return randomRecipe;
  }

  return recipe;
}

// Hjälpfunktion för att hämta relaterade recept
async function getRelatedRecipes(slug: string, category: string) {
  const recipes = await client.fetch(`${relatedRecipesQuery}`, {
    slug,
    category,
  });
  return recipes;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params before accessing its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const recipe = await getRecipeFromSlug(slug);

  return {
    title: `${recipe.title} | BlueRedGold Saffron Recipe`,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [
        {
          url: urlFor(recipe.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      type: 'article',
      publishedTime: recipe.publishedAt,
      authors: recipe.author ? [recipe.author.name] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: recipe.title,
      description: recipe.description,
      images: [urlFor(recipe.mainImage).width(1200).height(630).url()],
    },
  };
}

export default async function RecipePage({ params }: Props) {
  // Await params before accessing its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const requestedSlug = slug; // Save original slug
  const recipe = await getRecipeFromSlug(slug);
  let relatedRecipes = [];

  // Kontrollera om vi visar ett fallback-recept
  const isShowingFallback = recipe.slug.current !== requestedSlug;

  if (recipe.category) {
    relatedRecipes = await getRelatedRecipes(
      recipe.slug.current, // Använd receptets faktiska slug
      recipe.category.title
    );
  }

  const publishDate = recipe.publishedAt
    ? format(new Date(recipe.publishedAt), 'MMMM d, yyyy')
    : 'No date';

  // Schema.org recipe data
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: urlFor(recipe.mainImage).url(),
    datePublished: recipe.publishedAt,
    author: recipe.author
      ? {
          '@type': 'Person',
          name: recipe.author.name,
        }
      : undefined,
    recipeCategory: recipe.category ? recipe.category.title : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
      />
      <main className="max-w-5xl mx-auto py-8 pt-48 px-4 sm:px-6">
        <ClientOnly>
          <FadeIn>
            <nav aria-label="Back to recipes" className="mb-6">
              <Link
                href="/blogs/saffron-recipes"
                className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 mb-6 px-4 py-1.5 rounded-full border border-primary hover:border-primary/40 hover:bg-primary/5"
              >
                <ChevronLeft
                  className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back to Saffron Recipes
              </Link>
            </nav>
          </FadeIn>
        </ClientOnly>

        {isShowingFallback && (
          <ClientOnly>
            <FadeIn delay={50}>
              <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-xl text-purple-700">
                <p>
                  <strong>Note:</strong> The recipe you were looking for could
                  not be found. We&apos;re showing you one of our popular
                  recipes instead.
                </p>
              </div>
            </FadeIn>
          </ClientOnly>
        )}

        <article itemScope itemType="https://schema.org/Recipe">
          <ClientOnly>
            <FadeIn delay={100}>
              <header className="mb-8">
                {recipe.category && (
                  <Badge className="mb-4 bg-primary text-white">
                    {recipe.category.title}
                  </Badge>
                )}

                <h1
                  itemProp="name"
                  className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary font-display"
                >
                  {recipe.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                  {recipe.author && (
                    <div
                      className="flex items-center gap-2"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <Avatar className="h-8 w-8">
                        {recipe.author.image ? (
                          <AvatarImage
                            src={urlFor(recipe.author.image)
                              .width(96)
                              .height(96)
                              .url()}
                            alt={recipe.author.name}
                            itemProp="image"
                          />
                        ) : (
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span itemProp="name">{recipe.author.name}</span>
                    </div>
                  )}
                  <time
                    dateTime={recipe.publishedAt}
                    itemProp="datePublished"
                    className="flex items-center gap-1"
                  >
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {publishDate}
                  </time>
                  {recipe.estimatedReadingTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{recipe.estimatedReadingTime} min read</span>
                    </div>
                  )}
                </div>
              </header>
            </FadeIn>
          </ClientOnly>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_250px]">
            <div className="recipe-content">
              <ClientOnly>
                <FadeIn delay={200}>
                  <figure className="mb-8">
                    <Image
                      src={urlFor(recipe.mainImage)
                        .width(1200)
                        .height(800)
                        .url()}
                      alt={recipe.title}
                      width={1200}
                      height={800}
                      className="rounded-xl object-cover w-full"
                      priority
                    />
                  </figure>
                </FadeIn>
              </ClientOnly>

              <div
                className="prose prose-lg max-w-none text-black"
                itemProp="recipeInstructions"
              >
                <div className="mb-8 bg-muted/20 p-6 rounded-xl border border-primary/20">
                  <h2 className="text-primary text-xl font-medium mb-4">
                    Overview
                  </h2>
                  <p className="text-foreground/90">{recipe.description}</p>
                </div>
                <SanityPortableText value={recipe.body} />
              </div>

              <ClientOnly>
                <FadeIn delay={400}>
                  <footer className="mt-10">
                    <div className="flex items-center justify-between">
                      {recipe.author && (
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            {recipe.author.image ? (
                              <AvatarImage
                                src={urlFor(recipe.author.image)
                                  .width(96)
                                  .height(96)
                                  .url()}
                                alt={recipe.author.name}
                              />
                            ) : (
                              <AvatarFallback>
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Written by</p>
                            <p className="font-semibold">
                              {recipe.author.name}
                            </p>
                          </div>
                        </div>
                      )}

                      <ShareButton
                        title={recipe.title}
                        description={recipe.description}
                        buttonText="Share Recipe"
                      />
                    </div>
                  </footer>
                </FadeIn>
              </ClientOnly>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <ClientOnly>
                  <FadeIn delay={500}>
                    <aside aria-label="Related content" className="mt-6">
                      <section className="rounded-xl border border-primary bg-muted/20 p-4 shadow-sm">
                        <h2 className="mb-4 font-medium text-primary">
                          Related Recipes
                        </h2>
                        {relatedRecipes.length > 0 ? (
                          <div className="space-y-4">
                            {relatedRecipes.map(
                              (relatedRecipe: RelatedRecipe) => (
                                <article
                                  key={relatedRecipe._id}
                                  className="space-y-1"
                                >
                                  <Link
                                    href={`/blogs/saffron-recipes/${relatedRecipe.slug.current}`}
                                    className="line-clamp-2 font-medium hover:text-primary transition-colors"
                                  >
                                    {relatedRecipe.title}
                                  </Link>
                                  <time
                                    dateTime={relatedRecipe.publishedAt}
                                    className="block text-xs text-muted-foreground"
                                  >
                                    {format(
                                      new Date(relatedRecipe.publishedAt),
                                      'MMMM d, yyyy'
                                    )}
                                  </time>
                                </article>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            No related recipes found.
                          </p>
                        )}
                      </section>
                    </aside>
                  </FadeIn>
                </ClientOnly>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
