import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info, Utensils } from 'lucide-react';
import { CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'Sorry, we could not find the page you were looking for. Please check the URL or return to the home page.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-[#FFF5E8] overflow-hidden">
      <div className="text-center space-y-6 max-w-[600px] px-4 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="
              absolute left-1/2 -translate-x-1/2 
              w-[280px] h-[400px] top-[-100px]
              sm:w-[400px] sm:h-[600px] sm:top-[-150px]
              md:w-[400px] md:h-[600px] md:top-[-150px]
            "
          >
            <div className="relative w-full h-full">
              <Image
                src="/not-found.webp"
                alt="404 illustration"
                fill
                className="object-contain"
                priority
              />
              <div
                className="
                  absolute bottom-0 left-0 right-0 
                  h-[150px]
                  sm:h-[150px]
                  md:h-[150px]
                  bg-gradient-to-t from-[#FFF5E8] via-[#FFF5E8]/95 to-transparent
                "
              />
            </div>
          </div>
          <div
            className="
              absolute left-1/2 -translate-x-1/2 
              w-[2px] h-[60px] top-[30px]
              sm:h-[80px] sm:top-[40px]
              md:h-[80px] md:top-[40px]
              bg-gradient-to-b from-[#4CAF50] to-[#8BC34A]
            "
          />
        </div>

        <div
          className="
            space-y-2 relative z-10
            mt-[200px] sm:mt-[300px] md:mt-[300px]
          "
        >
          <div className="inline-block px-6 py-2 backdrop-blur-sm bg-white/70 rounded-xl">
            <CardTitle
              className="text-card-foreground text-4xl font-bold sm:text-6xl"
              aria-label="404"
            >
              404
            </CardTitle>
            <CardTitle className="text-muted-foreground text-xl sm:text-2xl font-semibold">
              Page Not Found
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-muted-foreground text-base sm:text-lg relative z-10 max-w-sm mx-auto">
          <span className="inline-block px-4 py-2 backdrop-blur-sm bg-white/70 rounded-xl">
            Sorry, we could not find the page you were looking for. Please check
            the URL or return to the home page.
          </span>
        </CardDescription>

        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 px-4">
          <Button
            asChild
            variant="default"
            className=" w-full sm:w-auto"
            aria-label="Return to home page"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="hover:bg-primary/90 backdrop-blur-sm bg-white/70 w-full sm:w-auto"
              aria-label="Visit About page"
            >
              <Link href="/about-us/about">
                <Info className="mr-2 h-4 w-4" aria-hidden="true" />
                About Us
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hover:bg-primary/90 backdrop-blur-sm bg-white/70 w-full sm:w-auto"
              aria-label="Visit Food & Beverages page"
            >
              <Link href="/food-beverages">
                <Utensils className="mr-2 h-4 w-4" aria-hidden="true" />
                Food & Beverages
              </Link>
            </Button>
          </div>
        </div>

        <CardContent className="pt-8 relative z-10">
          <div
            className="h-2 w-32 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            aria-hidden="true"
            role="presentation"
          />
        </CardContent>
      </div>
    </main>
  );
}
