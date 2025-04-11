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

// Interface for articles from Sanity
interface Article {
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

// GROQ query to fetch all articles
const allArticlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  description,
  publishedAt,
  slug,
  mainImage,
  category->{ title }
}`;

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.fetch<Article[]>(allArticlesQuery);
        setArticles(data);
        setDisplayedArticles(data.slice(0, articlesPerPage));
        setIsExpanded(data.length <= articlesPerPage);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleToggleArticles = () => {
    if (isExpanded) {
      // Show less
      setDisplayedArticles(articles.slice(0, articlesPerPage));
      setIsExpanded(false);
    } else {
      // Show more
      const currentLength = displayedArticles.length;
      const nextArticles = articles.slice(
        currentLength,
        currentLength + articlesPerPage
      );
      setDisplayedArticles([...displayedArticles, ...nextArticles]);
      setIsExpanded(currentLength + articlesPerPage >= articles.length);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <Link
              href="/about-us/press"
              className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 mb-6 px-4 py-1.5 rounded-full border border-primary hover:border-primary/40 hover:bg-primary/5"
            >
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Press
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                Articles
              </h1>
              {!isLoading && (
                <p className="text-muted-foreground">
                  Showing {displayedArticles.length} of {articles.length}{' '}
                  articles
                </p>
              )}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <FadeIn key={`skeleton-${index}`} delay={index * 50}>
                  <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] bg-muted animate-pulse"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-4 w-24 bg-muted animate-pulse rounded-full"></div>
                        <div className="h-6 w-3/4 bg-muted animate-pulse rounded-full"></div>
                        <div className="space-y-2">
                          <div className="h-4 w-full bg-muted animate-pulse rounded-full"></div>
                          <div className="h-4 w-full bg-muted animate-pulse rounded-full"></div>
                          <div className="h-4 w-2/3 bg-muted animate-pulse rounded-full"></div>
                        </div>
                        <div className="h-8 w-36 bg-muted animate-pulse rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))
            ) : displayedArticles.length > 0 ? (
              displayedArticles.map((article, index) => (
                <FadeIn key={article._id} delay={index * 50}>
                  <Link
                    href={`/blogs/articles/${article.slug.current}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                      <CardContent className="p-0">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={urlFor(article.mainImage).url()}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                              {article.category.title}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <time className="text-sm text-muted-foreground">
                            {format(
                              new Date(article.publishedAt),
                              'MMMM d, yyyy'
                            )}
                          </time>
                          <h2 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-muted-foreground line-clamp-3">
                            {article.description}
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
                  No articles found. Check back soon for new content!
                </p>
              </div>
            )}
          </div>

          {!isLoading && articles.length > articlesPerPage && (
            <FadeIn delay={300}>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="group transition-all duration-300"
                  onClick={handleToggleArticles}
                >
                  {isExpanded ? 'Show less articles' : 'Show more articles'}
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
