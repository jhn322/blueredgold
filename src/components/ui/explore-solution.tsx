'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

interface ExploreSolutionProps {
  className?: string;
}

export function ExploreSolution({ className = '' }: ExploreSolutionProps) {
  return (
    <section
      className={`bg-secondary text-black py-20 ${className}`}
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <FadeIn>
                <div className="inline-block px-4 py-1 bg-black/10 rounded-full mb-2">
                  <span className="text-sm font-medium text-black/90">
                    Discover More
                  </span>
                </div>
                <h2
                  id="cta-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                  Explore Our Premium Saffron Solutions
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-xl text-black/80">
                  From food & beverages to medical & cosmetics, discover how our
                  innovative saffron technology is transforming industries.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/food-beverages">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full"
                    >
                      Food & Beverages
                    </Button>
                  </Link>
                  <Link href="/medical-cosmetics">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-black hover:bg-black/10 rounded-full"
                    >
                      Medical & Cosmetics
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={400}>
              <div className="flex flex-col gap-2">
                <Link href="/about-us/sustainability/esg">
                  <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-black/20 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Sustainability ESG
                        </h3>
                        <p className="text-black/80">
                          Environmental & social impact
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/blogs/updates">
                  <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-black/20 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Blog</h3>
                        <p className="text-black/80">
                          Latest updates & recipes
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/about-us/contact-us">
                  <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-black/20 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Contact</h3>
                        <p className="text-black/80">Get in touch with us</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
