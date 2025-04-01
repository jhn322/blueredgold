import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col gap-8">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white-DEFAULT mb-2">
            VANIllA VIDA
          </h1>
          <p className="text-lg text-white-DEFAULT/80">Growing Possibilities</p>
        </div>
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white-DEFAULT">
            Inspired by nature.
            <br />
            Driven by technology.
          </h2>
          <p className="text-white-DEFAULT/90">
            We harness cutting-edge natural vanilla production with the most
            advanced technology on the market. With Vanilla Vida&apos;s
            innovative approach, we&apos;re revolutionizing the vanilla
            industry.
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-white-DEFAULT text-white-DEFAULT hover:bg-white-DEFAULT/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
