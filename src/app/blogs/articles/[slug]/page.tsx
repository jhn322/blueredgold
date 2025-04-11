import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, CalendarDays, Clock, User } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { ShareButton } from '@/components/ShareButton';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ClientOnly from '@/components/ClientOnly';
import SanityPortableText from '@/components/PortableTextComponent';
import type { PortableTextBlock } from '@portabletext/types';

// Interface for article from Sanity
interface Article {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  mainImage: SanityImageSource;
  body: PortableTextBlock[];
  category: {
    title: string;
  };
  slug: {
    current: string;
  };
  estimatedReadingTime: number;
  author?: {
    name: string;
    image: SanityImageSource;
    slug: {
      current: string;
    };
  };
}

// GROQ query to fetch a single article by slug
const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
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

// GROQ query to fetch a random article
const randomArticleQuery = `*[_type == "article"] | order(publishedAt desc)[0]`;

// Define a type for related articles
interface RelatedArticle {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}

// Related articles query
const relatedArticlesQuery = `*[_type == "article" && slug.current != $slug && category->title == $category][0...3]{
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

// Helper function to fetch article based on slug
async function getArticleFromSlug(slug: string): Promise<Article> {
  // Try to fetch the article with the given slug
  const article = await client.fetch<Article>(articleQuery, { slug });

  // If article not found, fetch a random article as fallback
  if (!article) {
    console.log(
      `Article with slug "${slug}" not found. Fetching a random article as fallback.`
    );
    const randomArticle = await client.fetch<Article>(randomArticleQuery);

    // If not even a fallback article can be found, show 404
    if (!randomArticle) {
      notFound();
    }

    return randomArticle;
  }

  return article;
}

// Helper function to fetch related articles
async function getRelatedArticles(slug: string, category: string) {
  const articles = await client.fetch(`${relatedArticlesQuery}`, {
    slug,
    category,
  });
  return articles;
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params before accessing its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = await getArticleFromSlug(slug);

  return {
    title: `${article.title} | BlueRedGold`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: urlFor(article.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author.name] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [urlFor(article.mainImage).width(1200).height(630).url()],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  // Await params before accessing its properties
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const requestedSlug = slug; // Save original slug
  const article = await getArticleFromSlug(slug);
  let relatedArticles = [];

  // Check if we're showing a fallback article
  const isShowingFallback = article.slug.current !== requestedSlug;

  if (article.category) {
    relatedArticles = await getRelatedArticles(
      article.slug.current,
      article.category.title
    );
  }

  const publishDate = article.publishedAt
    ? format(new Date(article.publishedAt), 'MMMM d, yyyy')
    : 'No date';

  // Schema.org article data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: urlFor(article.mainImage).url(),
    datePublished: article.publishedAt,
    author: article.author
      ? {
          '@type': 'Person',
          name: article.author.name,
        }
      : undefined,
    articleSection: article.category ? article.category.title : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="max-w-5xl mx-auto py-8 pt-48 px-4 sm:px-6">
        <ClientOnly>
          <FadeIn>
            <nav aria-label="Back to articles" className="mb-6">
              <Link
                href="/blogs/articles"
                className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 mb-6 px-4 py-1.5 rounded-full border border-primary hover:border-primary/40 hover:bg-primary/5"
              >
                <ChevronLeft
                  className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                Back to Articles
              </Link>
            </nav>
          </FadeIn>
        </ClientOnly>

        {isShowingFallback && (
          <ClientOnly>
            <FadeIn delay={50}>
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-700">
                <p>
                  <strong>Note:</strong> The article you were looking for could
                  not be found. We&apos;re showing you one of our popular
                  articles instead.
                </p>
              </div>
            </FadeIn>
          </ClientOnly>
        )}

        <article itemScope itemType="https://schema.org/Article">
          <ClientOnly>
            <FadeIn delay={100}>
              <header className="mb-8">
                {article.category && (
                  <Badge className="mb-4 bg-primary text-white">
                    {article.category.title}
                  </Badge>
                )}

                <h1
                  itemProp="headline"
                  className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary font-display"
                >
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                  {article.author && (
                    <div
                      className="flex items-center gap-2"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <Avatar className="h-8 w-8">
                        {article.author.image ? (
                          <AvatarImage
                            src={urlFor(article.author.image)
                              .width(96)
                              .height(96)
                              .url()}
                            alt={article.author.name}
                            itemProp="image"
                          />
                        ) : (
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span itemProp="name">{article.author.name}</span>
                    </div>
                  )}
                  <time
                    dateTime={article.publishedAt}
                    itemProp="datePublished"
                    className="flex items-center gap-1"
                  >
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {publishDate}
                  </time>
                  {article.estimatedReadingTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{article.estimatedReadingTime} min read</span>
                    </div>
                  )}
                </div>
              </header>
            </FadeIn>
          </ClientOnly>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_250px]">
            <div className="article-content">
              <ClientOnly>
                <FadeIn delay={200}>
                  <figure className="mb-8">
                    <Image
                      src={urlFor(article.mainImage)
                        .width(1200)
                        .height(800)
                        .url()}
                      alt={article.title}
                      width={1200}
                      height={800}
                      className="rounded-lg object-cover w-full"
                      priority
                    />
                  </figure>
                </FadeIn>
              </ClientOnly>

              <div
                className="prose prose-lg max-w-none text-black"
                itemProp="articleBody"
              >
                <div className="mb-8 bg-muted/20 p-6 rounded-lg border border-primary/20">
                  <h2 className="text-primary text-xl font-medium mb-4">
                    Overview
                  </h2>
                  <p className="text-foreground/90">{article.description}</p>
                </div>
                <SanityPortableText value={article.body} />
              </div>

              <ClientOnly>
                <FadeIn delay={400}>
                  <footer className="mt-10">
                    <div className="flex items-center justify-between">
                      {article.author && (
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            {article.author.image ? (
                              <AvatarImage
                                src={urlFor(article.author.image)
                                  .width(96)
                                  .height(96)
                                  .url()}
                                alt={article.author.name}
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
                              {article.author.name}
                            </p>
                          </div>
                        </div>
                      )}

                      <ShareButton
                        title={article.title}
                        buttonText="Share Article"
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
                      <section className="rounded-lg border border-primary bg-muted/20 p-4 shadow-sm">
                        <h2 className="mb-4 font-medium text-primary">
                          Related Articles
                        </h2>
                        {relatedArticles.length > 0 ? (
                          <div className="space-y-4">
                            {relatedArticles.map(
                              (relatedArticle: RelatedArticle) => (
                                <article
                                  key={relatedArticle._id}
                                  className="space-y-1"
                                >
                                  <Link
                                    href={`/blogs/articles/${relatedArticle.slug.current}`}
                                    className="line-clamp-2 font-medium hover:text-primary transition-colors"
                                  >
                                    {relatedArticle.title}
                                  </Link>
                                  <time
                                    dateTime={relatedArticle.publishedAt}
                                    className="block text-xs text-muted-foreground"
                                  >
                                    {format(
                                      new Date(relatedArticle.publishedAt),
                                      'MMMM d, yyyy'
                                    )}
                                  </time>
                                </article>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            No related articles found.
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
