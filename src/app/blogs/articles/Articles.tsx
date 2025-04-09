'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  description: string;
  date: Date;
  imageUrl: string;
  slug: string;
  category: string;
}

// Temporary mock data until Sanity is implemented
const mockArticles: Article[] = [
  {
    id: '1',
    title:
      "(SWE) Press release: Pioneering the future of Saffron as Sweden's next major export",
    description:
      'Dive deeper into the innovative world of BlueRedGold with our latest press release. Uncover the details of our groundbreaking saffron cultivation project in Sweden and learn about our ambitious goals for the future.',
    date: new Date('2024-01-05'),
    imageUrl: '/blogs/articles/press-1.webp',
    slug: 'pioneering-saffron-future',
    category: 'Press Release',
  },
  {
    id: '2',
    title: 'Revolutionizing Saffron Cultivation with Cutting-Edge Technology',
    description:
      'Highlighted in an insightful interview on Sveriges Radio P4 Sörmland, BlueRedGold is charting a new course in the world of spice cultivation. Our ambitious goal? To grow metric tons of saffron right here in Sweden.',
    date: new Date('2023-12-15'),
    imageUrl: '/blogs/articles/press-2.webp',
    slug: 'revolutionizing-saffron-cultivation',
    category: 'Interview',
  },
  {
    id: '3',
    title: "The Future of Sustainable Farming: BlueRedGold's Vision",
    description:
      'Explore how our innovative approach to saffron cultivation is setting new standards in sustainable agriculture and what this means for the future of farming.',
    date: new Date('2023-11-30'),
    imageUrl: '/blogs/articles/press-3.webp',
    slug: 'sustainable-farming-vision',
    category: 'Innovation',
  },
  {
    id: '4',
    title: 'From Traditional to High-Tech: The Evolution of Saffron Production',
    description:
      'A deep dive into how technology is transforming traditional saffron cultivation methods and why this matters for global food security.',
    date: new Date('2023-11-15'),
    imageUrl: '/blogs/articles/press-4.webp',
    slug: 'saffron-production-evolution',
    category: 'Technology',
  },
  {
    id: '5',
    title:
      'The Science Behind Saffron: Understanding the Magic of the Red Gold',
    description:
      "An in-depth exploration of the scientific properties that make saffron one of the most valuable spices in the world, and how we're optimizing these properties in our Swedish cultivation.",
    date: new Date('2023-10-20'),
    imageUrl: '/blogs/articles/press-5.webp',
    slug: 'saffron-science',
    category: 'Research',
  },
  {
    id: '6',
    title: 'Local Impact: How BlueRedGold is Transforming Swedish Agriculture',
    description:
      'Discover how our innovative saffron cultivation project is creating new opportunities for Swedish farmers and contributing to the local economy.',
    date: new Date('2023-10-05'),
    imageUrl: '/blogs/articles/press-6.webp',
    slug: 'local-impact',
    category: 'Local Development',
  },
  {
    id: '7',
    title: 'The Art of Saffron Harvesting: A Day in the Life',
    description:
      'Follow our team through a typical day during the saffron harvesting season, from dawn to dusk, as we carefully collect and process the precious threads.',
    date: new Date('2023-09-25'),
    imageUrl: '/blogs/articles/press-7.webp',
    slug: 'saffron-harvesting',
    category: 'Behind the Scenes',
  },
  {
    id: '8',
    title: 'Climate-Smart Agriculture: Our Commitment to Sustainability',
    description:
      'Learn about our innovative farming practices that minimize environmental impact while maximizing saffron quality and yield.',
    date: new Date('2023-09-15'),
    imageUrl: '/blogs/articles/press-8.webp',
    slug: 'climate-smart-agriculture',
    category: 'Sustainability',
  },
  {
    id: '9',
    title: 'The Global Saffron Market: Opportunities and Challenges',
    description:
      'An analysis of the current state of the global saffron market and how BlueRedGold is positioning itself to meet growing demand sustainably.',
    date: new Date('2023-09-01'),
    imageUrl: '/blogs/articles/press-9.webp',
    slug: 'global-saffron-market',
    category: 'Market Analysis',
  },
  {
    id: '10',
    title: 'Innovation in Agriculture: The Role of AI in Saffron Cultivation',
    description:
      'Explore how artificial intelligence and machine learning are revolutionizing our approach to saffron farming and quality control.',
    date: new Date('2023-08-20'),
    imageUrl: '/blogs/articles/press-10.webp',
    slug: 'ai-saffron-cultivation',
    category: 'Technology',
  },
  {
    id: '11',
    title: 'The Health Benefits of Premium Swedish Saffron',
    description:
      'A comprehensive look at the health benefits of saffron and how our Swedish-grown variety compares to traditional sources.',
    date: new Date('2023-08-10'),
    imageUrl: '/blogs/articles/press-11.webp',
    slug: 'health-benefits-saffron',
    category: 'Health',
  },
  {
    id: '12',
    title: 'Building a Sustainable Future: Our 5-Year Vision',
    description:
      "An overview of BlueRedGold's strategic plans for the next five years, including expansion goals and sustainability initiatives.",
    date: new Date('2023-08-01'),
    imageUrl: '/blogs/articles/press-12.webp',
    slug: '5-year-vision',
    category: 'Strategy',
  },
];

export default function ArticlesPage() {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const articlesPerPage = 6;

  useEffect(() => {
    setDisplayedArticles(mockArticles.slice(0, articlesPerPage));
    setIsExpanded(false);
  }, []);

  const handleToggleArticles = () => {
    if (isExpanded) {
      // Show less
      setDisplayedArticles(mockArticles.slice(0, articlesPerPage));
      setIsExpanded(false);
    } else {
      // Show more
      const currentLength = displayedArticles.length;
      const nextArticles = mockArticles.slice(
        currentLength,
        currentLength + articlesPerPage
      );
      setDisplayedArticles([...displayedArticles, ...nextArticles]);
      setIsExpanded(currentLength + articlesPerPage >= mockArticles.length);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-48 pb-16">
        <div className="container max-w-7xl">
          <FadeIn>
            <Link
              href="/about-us/press"
              className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 mb-6 px-4 py-2 rounded-full hover:bg-primary/5"
            >
              <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Press
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display">
                Articles
              </h1>
              <p className="text-muted-foreground">
                Showing {displayedArticles.length} of {mockArticles.length}{' '}
                articles
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedArticles.map((article, index) => (
              <FadeIn key={article.id} delay={index * 50}>
                <Link
                  href={`/blogs/articles/${article.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border border-primary/10 bg-muted/20 transition-all duration-300 hover:bg-muted/80">
                    <CardContent className="p-0">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <time className="text-sm text-muted-foreground">
                          {format(article.date, 'MMMM d, yyyy')}
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
            ))}
          </div>

          {displayedArticles.length > 0 && (
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
