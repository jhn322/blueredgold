import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Droplets, Sun, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { ParallaxHero } from '@/components/ui/parallax-hero';
import SaffronGrid from './growing-grid';
import SaffronProcess from './growing-process';
import SaffronBenefits from './growing-benefits';
import SaffronFAQ from './growing-faq';
import { ExploreSolution } from '@/components/ui/explore-solution';

export const metadata: Metadata = {
  title: 'Growing',
  description:
    'Learn everything about growing saffron, from planting corms to cultivation techniques. Discover the secrets to successful saffron production with our comprehensive guide.',
  keywords: [
    'saffron growing',
    'saffron cultivation',
    'how to grow saffron',
    'saffron farming',
    'saffron corms',
    'saffron bulbs',
    'saffron plants',
  ],
  openGraph: {
    title: 'Growing',
    description:
      'Learn everything about growing saffron, from planting corms to cultivation techniques. Discover the secrets to successful saffron production.',
    images: [
      {
        url: '/technology/growing/growing-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Saffron field in bloom',
      },
    ],
  },
};

export default function GrowingSaffronPage() {
  return (
    <main className="min-h-screen bg-background">
      <ParallaxHero
        imageSrc="/technology/growing/growing-hero.jpg"
        imageAlt="Saffron field in bloom"
        videoSrc="/technology/growing/growing-hero.mp4"
        title="Growing Saffron"
        subtitle="The complete guide to cultivating the world's most precious spice"
        buttons={[
          {
            text: 'Harvesting Guide',
            href: '/technology/harvesting',
            variant: 'outline',
          },
        ]}
      />

      <FadeIn>
        <section className="container py-16 md:py-24">
          <div className="space-y-4 text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">
                Cultivation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              The Golden Spice
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
              Saffron, the world&apos;s most precious spice, has been cultivated
              for thousands of years. Learn how to grow this remarkable
              treasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-md transition-shadow h-full flex flex-col">
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Exceptional Value</h3>
                <p className="text-foreground/70">
                  Gram for gram, saffron is more valuable than gold, making it a
                  worthwhile investment for small-scale growers.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-md transition-shadow h-full flex flex-col">
                <Droplets className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Drought Resistant</h3>
                <p className="text-foreground/70">
                  Saffron thrives in dry conditions and requires minimal
                  watering, making it perfect for water-conscious gardeners.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-md transition-shadow h-full flex flex-col">
                <Sun className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Low Maintenance</h3>
                <p className="text-foreground/70">
                  Once established, saffron corms require little attention and
                  can produce for up to 6 years.
                </p>
              </Card>
            </FadeIn>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                The Growing Process
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
                From planting to flowering, discover the journey of cultivating
                the world&apos;s most precious spice
              </p>
            </div>

            <SaffronProcess />

            <div className="mt-12 text-center">
              <Link href="/technology/harvesting">
                <Button size="lg" className="group">
                  Discover Harvesting Techniques
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="container py-16 md:py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Visual Guide to Saffron
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
              Explore the beauty and complexity of saffron cultivation through
              our visual journey
            </p>
          </div>

          <SaffronGrid />
        </section>
      </FadeIn>

      <FadeIn>
        <SaffronBenefits />
      </FadeIn>

      <FadeIn>
        <section className="container py-16 md:py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              Ready to Start Growing?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
              Begin your saffron journey with our comprehensive guide to
              harvesting
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Art of Harvesting Saffron
                </h3>
                <p className="text-foreground/70 mb-6">
                  Harvesting is where the magic happens. Learn the delicate
                  process of collecting and processing saffron threads to
                  maximize their value and potency.
                </p>
                <div>
                  <Link href="/technology/harvesting">
                    <Button size="lg" className="group">
                      Explore Harvesting Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/technology/growing/art-of-harvesting.webp"
                  alt="Harvesting saffron threads from flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <SaffronFAQ />
      </FadeIn>

      {/* Explore section */}
      <ExploreSolution
        primaryButton={{
          text: 'Food & Beverages',
          href: '/premium-saffron/food-beverages',
        }}
        secondaryButton={{
          text: 'Medical & Cosmetics',
          href: '/premium-saffron/medical-cosmetics',
        }}
      />
    </main>
  );
}
