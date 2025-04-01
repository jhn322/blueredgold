import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Hero from './Hero';

export default function VanillaVidaLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />

      {/* Technology Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Harnessing the power of technology
            </h2>
            <p className="text-lg text-foreground/80">
              To create a stable supply of top-quality natural vanilla
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Vertically integrated operation',
                icon: (
                  <div className="h-32 w-20 mx-auto border-2 border-foreground rounded-full flex items-center justify-center">
                    <div className="h-16 w-1 bg-foreground rounded-full"></div>
                  </div>
                ),
              },
              {
                title: 'Location independent',
                icon: (
                  <div className="h-32 w-20 mx-auto border-2 border-foreground rounded-full flex items-center justify-center">
                    <div className="h-16 w-12 bg-muted rounded-md relative">
                      <div className="absolute top-2 left-2 w-1 h-12 bg-secondary rounded-full"></div>
                      <div className="absolute top-4 right-2 w-1 h-10 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                ),
              },
              {
                title: 'Sustainable production',
                icon: (
                  <div className="h-32 w-20 mx-auto border-2 border-foreground rounded-full flex items-center justify-center">
                    <div className="h-16 w-1 bg-foreground rounded-full relative">
                      <div className="absolute -left-3 top-2 w-7 h-1 bg-secondary rounded-full"></div>
                      <div className="absolute -left-5 top-6 w-10 h-1 bg-secondary rounded-full"></div>
                      <div className="absolute -left-3 top-10 w-7 h-1 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                ),
              },
              {
                title: 'Expanding the use of natural ingredients',
                icon: (
                  <div className="h-32 w-20 mx-auto border-2 border-foreground rounded-full flex items-center justify-center">
                    <div className="h-16 w-1 bg-foreground rounded-full"></div>
                  </div>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="mt-6 font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Reading Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Plants growing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center bg-background/80 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What if you could read a plant like an open book?
            </h2>
            <p className="mb-6 text-foreground/80">
              We&apos;ve developed a proprietary technology using plant science
              and machine learning to understand what plants need at every
              moment. This approach enables precise cultivation, optimizing
              growth conditions for each plant and maximizing vanilla bean
              production in a sustainable way.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              See how we do it
            </Button>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Efficient beyond market standards
            </h2>
          </div>

          <div className="space-y-24">
            {/* First metric */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">3-4 times</h3>
                <p className="text-xl">more vanillin</p>
                <p>content</p>
              </div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* Second metric */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">x250 times</h3>
                <p className="text-xl">more yield</p>
              </div>
            </div>

            {/* Third metric */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">Tailor-made</h3>
                <p className="text-xl">aromas</p>
              </div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-secondary rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* Fourth metric */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-1/3"></div>
              <div className="md:w-1/6 flex justify-center">
                <div className="h-32 w-20 border-2 border-foreground rounded-full flex items-center justify-center">
                  <div className="h-16 w-1 bg-foreground rounded-full"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold">
                  Maximizing each bean&apos;s
                </h3>
                <p className="text-xl">full potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vanilla Choice Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your vanilla of choice
              </h2>
              <p className="mb-6 text-foreground/80">
                Our technology allows us to create vanilla with specific
                properties and notes. Whether you want to emphasize the floral,
                woody, or spicy characteristics of vanilla, our controlled
                growing conditions and processing methods can deliver exactly
                what you need.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Discover Your Vanilla
              </Button>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=100"
                  alt="Vanilla bean"
                  width={100}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-secondary">
                  Vanilla Floral
                </h3>
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-secondary/30 rounded-full"></div>
                    <div className="w-36 h-36 border-2 border-secondary/50 rounded-full"></div>
                    <div className="w-24 h-24 border-2 border-secondary/70 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0">
                    {/* Radar chart would go here - simplified with lines */}
                    <div className="h-full w-full flex items-center justify-center">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <div
                          key={i}
                          className="absolute h-1 bg-secondary/40"
                          style={{
                            width: '50%',
                            transformOrigin: 'left center',
                            transform: `rotate(${angle}deg)`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
