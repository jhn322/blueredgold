import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Logo and Company Name */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Image
              src="/logo.svg"
              alt="BlueRedGold Logo"
              width={240}
              height={220}
              className="w-48 md:w-64 lg:w-72"
              priority
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-background text-center md:text-left">
              BlueRedGold
            </h1>
          </div>

          {/* Right Column - Content */}
          <div className="max-w-1xl space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-background leading-tight">
              Inspired by nature, <br />
              Evolving for Excellence.
            </h2>
            <p className="text-xl md:text-1xl text-background">
              Cultivating world-class saffron in the heart of Sörmland. Adjacent
              to the historic Gripsholm Castle in Mariefred, BlueRedGold is
              pioneering a state-of-the-art indoor saffron farm.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="relative rounded-full bg-transparent border-2 border-background text-background hover:text-background/80 overflow-hidden group text-md md:text-lg px-5 py-5 mt-6"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-background/10" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
