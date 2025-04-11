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
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useState, useEffect } from 'react';

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

// GROQ query to fetch latest 3 press articles
const pressArticlesQuery = `*[_type == "article"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  publishedAt,
  slug,
  mainImage,
  category->{ title }
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

export default function PressPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.fetch<Article[]>(pressArticlesQuery);
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Press Articles Section */}
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                Press
              </h1>
              <Link href="/blogs/articles" className="hidden md:block">
                <Button variant="outline" className="group bg-muted/20">
                  View all articles
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
            ) : articles.length > 0 ? (
              articles.map((article, index) => (
                <FadeIn key={article._id} delay={index * 200}>
                  <Link
                    href={`/blogs/articles/${article.slug.current}`}
                    className="group"
                  >
                    <Card className="overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                      <CardContent className="p-0 relative">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={urlFor(article.mainImage).url()}
                            alt={article.title}
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
                              new Date(article.publishedAt),
                              'MMM d, yyyy'
                            )}
                          </motion.div>

                          <h3 className="text-lg font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                            {article.title}
                          </h3>

                          <div className="mt-4 flex items-center text-primary/80 text-sm font-medium">
                            <span>Read article</span>
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
                  No articles found. Check back soon!
                </p>
              </div>
            )}
          </div>

          <FadeIn delay={200}>
            <div className="flex justify-center md:hidden">
              <Link href="/blogs/articles">
                <Button variant="outline" className="group bg-background/50">
                  View all articles
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

      {/* Press Images Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Press images
            </h2>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg text-foreground/80 mb-4 max-w-3xl">
              For a comprehensive collection of our latest press images, please
              visit our dedicated Lightroom Gallery. Always current, always
              relevant.
            </p>

            <p className="text-lg text-foreground/80 mb-12 max-w-3xl">
              Below, we&apos;ve curated a select assortment for your
              convenience.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <ImageCarousel className="h-[500px] md:h-[600px] shadow-xl mb-12" />
          </FadeIn>

          <FadeIn delay={400}>
            <div className="relative mt-8 p-6 md:p-8 bg-white rounded-xl border border-primary/10">
              <div className="absolute -top-4 left-4 px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-xs font-medium text-primary">
                  Attribution Guidelines
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed">
                    All images are free to use in publications specifically
                    related to BlueRedGold. When utilizing our images, kindly
                    attribute them with the copyright symbol and our name: ©
                    BlueRedGold
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href="https://drive.google.com/file/d/1RP2KHNoyOsaPa29Xs_bPTd4ywVVpCm30/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download high-res images for print (137mb) from Google Drive"
                  >
                    <Button
                      variant="default"
                      size="lg"
                      className="group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        High-res images for print (137MB)
                      </span>
                      <Download className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ExploreSolution />
    </main>
  );
}
