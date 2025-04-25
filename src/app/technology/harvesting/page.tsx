import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Clock, Scissors, Sun, Leaf } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { FadeIn } from '../../../components/ui/fade-in';
import { ParallaxHero } from '@/components/ui/parallax-hero';
import HarvestingSteps from './harvesting-steps';
import HarvestingTips from './harvesting-tips';
import { ExploreSolution } from '@/components/ui/explore-solution';

export const metadata: Metadata = {
  title: 'Harvesting',
  description:
    'Learn the art of harvesting saffron, from picking flowers to drying threads. Discover expert techniques for maximum yield and quality.',
  keywords: [
    'saffron harvesting',
    'how to harvest saffron',
    'drying saffron',
    'saffron threads',
    'saffron stigmas',
    'saffron processing',
  ],
  openGraph: {
    title: 'Harvesting',
    description:
      'Learn the art of harvesting saffron, from picking flowers to drying threads. Discover expert techniques for maximum yield and quality.',
    images: [
      {
        url: '/harvesting-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Harvesting saffron threads',
      },
    ],
  },
};

export default function HarvestingSaffronPage() {
  return (
    <main className="min-h-screen bg-background">
      <ParallaxHero
        imageSrc="/technology/harvesting/harvesting-hero.webp"
        imageAlt="Saffron harvesting process"
        videoSrc="/technology/harvesting/harvesting-hero.mp4"
        title="Harvesting Saffron"
        subtitle="The delicate art of collecting the world's most precious spice"
        buttons={[
          {
            text: 'Learn More',
            href: '#harvesting-saffron',
            icon: <Scissors className="h-4 w-4" />,
            smoothScroll: true,
          },
        ]}
      />

      <FadeIn>
        <section id="harvesting-saffron" className="container py-16 md:py-24">
          <div className="flex items-center mb-12">
            <Link
              href="/technology/growing"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Growing Saffron</span>
            </Link>
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              The Art of Harvesting Saffron
            </h2>
            <p className="text-lg md:text-xl max-w-3xl text-foreground/80">
              Harvesting is the most critical stage in saffron production. Learn
              the techniques to maximize both yield and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground/70 mb-6">
                The harvesting process is where the true value of saffron is
                realized. Each flower contains just three red stigmas, making
                this one of the most labor-intensive crops in the world. But
                with proper technique, you can ensure the highest quality
                product.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Timing is Everything</h3>
                    <p className="text-foreground/70">
                      Harvest in the early morning when flowers are just
                      beginning to open.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <Scissors className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Gentle Handling</h3>
                    <p className="text-foreground/70">
                      Use tweezers or your fingertips to carefully remove the
                      stigmas without damaging them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Proper Drying</h3>
                    <p className="text-foreground/70">
                      Dry stigmas in a warm, dark place to preserve color,
                      flavor, and aroma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Harvesting saffron threads from flowers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <HarvestingSteps />
      </FadeIn>

      <FadeIn>
        <HarvestingTips />
      </FadeIn>

      <FadeIn>
        <section className="container py-16 md:py-24">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Saffron corms ready for planting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Growing?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Now that you understand the harvesting process, learn how to
                  grow your own saffron from the beginning with our
                  comprehensive growing guide.
                </p>
                <div>
                  <Link href="/technology/growing">
                    <Button size="lg" className="group">
                      Explore Saffron Growing
                      <Leaf className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      {/* Explore section */}
      <ExploreSolution
        primaryButton={{
          text: 'Learn More About Us',
          href: '/about-us/about',
        }}
        secondaryButton={{
          text: 'Press Releases',
          href: '/about-us/press',
        }}
      />
    </main>
  );
}
