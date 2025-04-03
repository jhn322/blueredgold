'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Linkedin } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

export default function AboutUsContent() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-2.webp" />
            <Image
              src="/about/hero-about.webp"
              alt="Saffron flower close-up showing purple petals and red stigmas"
              fill
              priority
              className="object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={100}>
              <h1
                id="hero-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Elevating Saffron Production to New Heights
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                With Swedish Precision Automation
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black font-medium rounded-full"
              >
                Discover Our Mission <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Separator with Brief Description */}
      <section
        className="bg-background py-16"
        aria-labelledby="journey-heading"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2
                id="journey-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                Our Journey
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded on a vision of innovation and sustainability,
                BlueRedGold has been at the forefront of transforming the
                saffron industry. We combine traditional knowledge with
                cutting-edge technology to create premium saffron products while
                maintaining the highest environmental standards.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <Separator className="my-10 bg-secondary/30 h-0.5" />
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-lg text-foreground/80 italic">
                In 2018, we embarked on a revolutionary journey to modernize the
                harvest of this rare spice, creating a sustainable model that
                preserves its quality while reducing environmental impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Second Full Image Background */}
      <section
        className="relative w-full min-h-[70vh] flex items-center bg-dark"
        aria-labelledby="technology-heading"
      >
        <Image
          src="/about/hydrophonic.webp"
          alt="Automated hydroponic system with robotic arm for saffron cultivation"
          fill
          className="object-cover opacity-90"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h2
                id="technology-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Environmentally-friendly premium saffron using automated
                hydroponic vertical indoor growing systems.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
              >
                Explore Our Technology
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Second Section with Text and Logo */}
      <section
        className="bg-background py-20"
        aria-labelledby="advisory-heading"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2
                  id="advisory-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
                >
                  Introducing the Industry Advisory Board
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Our advisory board brings together experts from across the
                  agricultural technology sector, sustainable farming practices,
                  and business innovation. Their collective expertise guides our
                  strategic direction and ensures we remain at the cutting edge
                  of industry developments.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  With decades of combined experience, our advisors help us
                  navigate challenges, identify opportunities, and maintain our
                  commitment to quality and sustainability in everything we do.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={400}>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src="/logo-text.svg"
                    alt="BlueRedGold logo"
                    width={400}
                    height={111}
                    className="w-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-20" aria-labelledby="team-heading">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2
                id="team-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                BlueRedGold Team Overview
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-foreground/80">
                Our diverse team brings together expertise from agriculture,
                technology, business development, and sustainability. Each
                member contributes unique skills and perspectives that drive our
                mission forward.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={300 + index * 100}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        className="bg-background py-20"
        aria-labelledby="partners-heading"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2
                id="partners-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                Trusted Partners & Supporting Members
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-foreground/80">
                We collaborate with industry leaders and innovative
                organizations to advance our mission and create sustainable
                impact in the agricultural sector.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Array.from({ length: 9 }).map((_, index) => (
              <FadeIn key={index} delay={300 + index * 50}>
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center h-32">
                  {index < 2 ? (
                    <Image
                      src={index === 0 ? '/aventure.svg' : '/almi.svg'}
                      alt={`Partner logo ${index + 1}`}
                      width={180}
                      height={60}
                      className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200/50 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 font-medium">
                        Partner {index + 1}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Headline */}
      <section
        className="bg-primary text-white py-20"
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Cultivate the Future With Us
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl mb-10 text-white/80">
                Join us in revolutionizing sustainable agriculture and bringing
                premium saffron to the world through innovation, technology, and
                environmental stewardship.
              </p>
            </FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FadeIn delay={300}>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-black font-medium rounded-full"
                >
                  Join Our Journey
                </Button>
              </FadeIn>
              <FadeIn delay={400}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full"
                >
                  Contact Us
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface TeamMember {
  name: string;
  title: string;
  company: string;
  image: string;
  linkedIn?: string;
}

function TeamMemberCard({ name, title, company, image, linkedIn }: TeamMember) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow rounded-xl">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/5 rounded-t-xl">
          {image === 'andrei.webp' || image === 'arca.webp' ? (
            <Image
              src={`/${image}`}
              alt={`Portrait of ${name}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary/80 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {name.charAt(0)}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-primary">{name}</h3>
          <p className="text-foreground/70 mb-2">{title}</p>
          <p className="text-sm text-foreground/60 mb-4">{company}</p>
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s LinkedIn profile`}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrei Petersen',
    title: 'Chief Executive Officer',
    company: 'BlueRedGold AB',
    image: 'andrei.webp',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Victoria Ballerup',
    title: 'Operations Director',
    company: 'BlueRedGold AB',
    image: 'arca.webp',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Anders Broderson',
    title: 'Chief Technology Officer',
    company: 'BlueRedGold AB',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Christopher Lindgren',
    title: 'Head Engineer',
    company: 'BlueRedGold AB',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Johanna Thulman',
    title: 'Sustainability Director',
    company: 'BlueRedGold AB',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Food and Plant Division',
    title: '',
    company: '',
    image: '',
  },
  {
    name: 'Sandra Pettersson',
    title: 'Plant Biologist',
    company: 'BlueRedGold Research',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Sara Bengtsson',
    title: 'Agricultural Specialist',
    company: 'BlueRedGold Research',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Filip Van Noort',
    title: 'Food Scientist',
    company: 'BlueRedGold Labs',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Executive Board',
    title: '',
    company: '',
    image: '',
  },
  {
    name: 'Björn Lund',
    title: 'Board Chairman',
    company: 'BlueRedGold AB',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Karen Jorgensen',
    title: 'Board Member',
    company: 'Venture Capital Partners',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'James L. Gould',
    title: 'Board Member',
    company: 'Agricultural Innovation Fund',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
  {
    name: 'Jan Eriksson',
    title: 'Board Member',
    company: 'Sustainable Tech Ventures',
    image: '',
    linkedIn: 'https://linkedin.com/in/username',
  },
];
