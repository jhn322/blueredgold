import { notFound } from 'next/navigation';
import { ChevronLeft, CalendarDays, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from '@portabletext/react';
import type { Metadata } from 'next';
import type { PortableTextBlock } from '@portabletext/types';
import { format } from 'date-fns';
import { ShareButton } from './ShareButton';

// Define interfaces for Sanity types
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Definiera portaltext-komponenter
const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<SanityImage>) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Recipe image'}
            width={800}
            height={600}
            className="rounded-md object-cover"
          />
          {value.alt && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps) => {
      const rel = !value?.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-primary mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-primary mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-primary mt-5 mb-2">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 mb-6 list-disc pl-6 text-black marker:text-secondary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 mb-6 list-decimal pl-6 text-black">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
    number: ({ children }) => <li className="mt-2">{children}</li>,
  },
};

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

type Props = {
  params: { slug: string | Promise<string> };
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
  const slug =
    typeof params.slug === 'string' ? params.slug : await params.slug;
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
  const slug =
    typeof params.slug === 'string' ? params.slug : await params.slug;
  const requestedSlug = slug; // Spara ursprunglig slug
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

        {isShowingFallback && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
            <p>
              <strong>Note:</strong> The recipe you were looking for could not
              be found. We&apos;re showing you one of our popular recipes
              instead.
            </p>
          </div>
        )}

        <article itemScope itemType="https://schema.org/Recipe">
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

          <Separator className="my-8" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_250px]">
            <div className="recipe-content">
              <figure className="mb-8">
                <Image
                  src={urlFor(recipe.mainImage).width(1200).height(800).url()}
                  alt={recipe.title}
                  width={1200}
                  height={800}
                  className="rounded-lg object-cover w-full"
                  priority
                />
              </figure>

              <div
                className="prose prose-lg max-w-none text-black"
                itemProp="recipeInstructions"
              >
                <div className="mb-8 bg-muted/20 p-6 rounded-lg border border-primary/20">
                  <h2 className="text-primary text-xl font-medium mb-4">
                    Overview
                  </h2>
                  <p className="text-foreground/90">{recipe.description}</p>
                </div>
                <PortableText
                  value={recipe.body}
                  components={portableTextComponents}
                />
              </div>

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
                        <p className="font-semibold">{recipe.author.name}</p>
                      </div>
                    </div>
                  )}

                  <ShareButton
                    title={recipe.title}
                    description={recipe.description}
                  />
                </div>
              </footer>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <aside aria-label="Related content" className="mt-6">
                  <section className="rounded-lg border border-primary bg-muted/20 p-4 shadow-sm">
                    <h2 className="mb-4 font-medium text-primary">
                      Related Recipes
                    </h2>
                    {relatedRecipes.length > 0 ? (
                      <div className="space-y-4">
                        {relatedRecipes.map((relatedRecipe: RelatedRecipe) => (
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
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No related recipes found.
                      </p>
                    )}
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
