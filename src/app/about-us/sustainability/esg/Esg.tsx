'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import { Leaf, Factory, Users2, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxHero } from '@/components/ui/parallax-hero';

export default function EsgPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/esg/esg-hero.webp"
        imageAlt="Hero image for ESG page"
        title="ESG"
        subtitle="Our view of sustainability"
      />

      {/* Mission Statement */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">
                Sustainability
              </span>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed text-left">
              At BlueRedGold, we are deeply committed to sustainability in every
              aspect of our saffron production. Our ultimate aim is to have a
              positive impact on society and the environment by implementing
              highly efficient and sustainable farming practices.
            </p>
            <p className="text-lg text-left text-foreground/80 leading-relaxed mt-4">
              We firmly believe that sustainability is not just an option but an
              essential requirement for the future of our planet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Cultivation */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary font-display">
                  Our Cultivation
                </h2>
                <p className="text-foreground/80">
                  To achieve our sustainability goals, we are building a
                  state-of-the-art R&D farm, dedicated to developing effective
                  and eco-friendly farming methods.
                </p>
                <p className="text-foreground/80">
                  We recognize that innovative technology plays a crucial role
                  in minimizing our environmental footprint. Therefore, we are
                  actively working on developing vertical cultivation, robotics,
                  and automation to enhance efficiency and reduce resource
                  consumption.
                </p>
                <p className="text-foreground/80">
                  Looking ahead, we believe indoor cultivation can play a
                  significant role in sustainable farming by freeing up land
                  previously used for traditional agriculture. We even envision
                  the possibility of creating wetlands to further support a more
                  sustainable planet.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] max-w-xl mx-auto">
                <div className="relative w-full h-full">
                  {/* Back image */}
                  <div className="absolute right-0 top-0 w-[70%] h-[85%] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/esg/esg-1.webp"
                      alt="Cultivation image 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Front image */}
                  <div className="absolute left-0 bottom-0 w-[70%] h-[85%] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/esg/esg-2.webp"
                      alt="Cultivation image 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Crops */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] max-w-xl mx-auto">
                <div className="relative w-full h-full">
                  {/* Back image */}
                  <div className="absolute right-0 top-0 w-[60%] h-[85%] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/esg/esg-3.webp"
                      alt="Additional crops image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Front image */}
                  <div className="absolute left-0 bottom-0 w-[60%] h-[85%] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/esg/esg-4.webp"
                      alt="Our crops"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary font-display">
                  Our Crops
                </h2>
                <p className="text-foreground/80">
                  When it comes to irrigation, we are implementing a
                  self-supported and closed system that prevents any leakage of
                  gray water into the environment. Additionally, we strictly
                  adhere to pesticide-free production practices to ensure the
                  purity and integrity of our saffron.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Carbon Footprint & People */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <Card className="border-none h-full shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col h-full">
                  <Factory className="h-12 w-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Carbon Footprint
                  </h3>
                  <p className="text-foreground/80 flex-grow">
                    In our facilities, we continuously work to optimize our
                    energy usage to enable for a more sustainable energy system.
                    While our total energy consumption may be relatively high,
                    we aim to utilize renewable energy sources whenever
                    possible. Furthermore, the majority of our electricity
                    consumption occurs during off-peak hours, reducing our
                    carbon footprint.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-none h-full shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex flex-col h-full">
                  <Users2 className="h-12 w-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    People
                  </h3>
                  <p className="text-foreground/80 flex-grow">
                    At BlueRedGold, diversity and inclusion are core values that
                    guide our actions. We welcome individuals from diverse
                    backgrounds and experiences, fostering a supportive work
                    environment. We value and respect all employees life
                    experiences and beliefs in transparent communication with
                    all stakeholders, including customers, teams, and partners.
                  </p>
                  <Link href="/about-us/about#team-section">
                    <Button
                      variant="default"
                      className="mt-6 rounded-full hover:bg-secondary/90"
                    >
                      About Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* UN Goals */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full max-w-2xl mx-auto mb-12">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src="/esg/esg-circle.webp"
                    alt="Global sustainability goals"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="mb-12 text-left">
                <Target className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                  UN Goals
                </h2>
                <p className="text-foreground/80 mb-8">
                  Our dedication to sustainability is strongly aligned with the
                  United Nations Sustainable Development Goals (SDGs). We
                  actively support several SDGs, including:
                </p>
              </div>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-center gap-2 group">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <Link
                    href="https://sdgs.un.org/goals/goal9"
                    target="_blank"
                    className="relative inline-block"
                  >
                    <span>SDG 9: Industry, Innovation and Infrastructure</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="flex items-center gap-2 group">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <Link
                    href="https://sdgs.un.org/goals/goal13"
                    target="_blank"
                    className="relative inline-block"
                  >
                    <span>SDG 13: Climate Action</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="flex items-center gap-2 group">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <Link
                    href="https://sdgs.un.org/goals/goal12"
                    target="_blank"
                    className="relative inline-block"
                  >
                    <span>SDG 12: Responsible Consumption and Production</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="flex items-center gap-2 group">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <Link
                    href="https://sdgs.un.org/goals/goal15"
                    target="_blank"
                    className="relative inline-block"
                  >
                    <span>SDG 15: Life on Land</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="flex items-center gap-2 group">
                  <Leaf className="h-5 w-5 text-secondary" />
                  <Link
                    href="https://sdgs.un.org/goals/goal8"
                    target="_blank"
                    className="relative inline-block"
                  >
                    <span>SDG 8: Decent Work and Economic Growth</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
              <p className="mt-8 text-foreground/80">
                To ensure progress, we focus on a few specific SDGs at a time.
                We are establishing routines to regularly measure and monitor
                our progress towards these goals, making them an integral part
                of our daily operations. By diligently working on these specific
                SDGs, we aim to make tangible contributions towards a more
                sustainable future.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
