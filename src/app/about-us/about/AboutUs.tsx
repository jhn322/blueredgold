'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Linkedin } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { motion } from 'framer-motion';

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
                variant="default"
                size="lg"
                className="relative rounded-full overflow-hidden group text-md md:text-lg text-black"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  });
                }}
              >
                <span className="relative z-10 flex items-center">
                  Discover Our Mission{' '}
                  <motion.span
                    className="inline-flex ml-2"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-secondary" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(transparent_270deg,#FFF2D7,transparent)] animate-[spin_2s_linear_infinite]" />
                  <div className="absolute inset-[2px] rounded-full bg-secondary" />
                </div>
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
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <FadeIn>
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">
                  About Us
                </span>
              </div>
              <h2
                id="journey-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                Our Journey
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-foreground/80 leading-relaxed text-left">
                Established in the heart of Stockholm in 2021, BlueRedGold AB is
                the culmination of years of rigorous research and meticulous
                production trials.
                <br />
                <br />
                In 2022, we achieved a groundbreaking milestone: the launch of
                the first-ever, industrial-grade, controlled indoor cultivation
                and year-round saffron production in Åkers Styckebruk, Sweden.
                This achievement was swiftly followed by our foray into the
                realms of robotics and automation, underscoring our commitment
                to innovation and precision.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <Separator className="my-10 bg-secondary/30 h-0.5" />
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
              <Link href="/technology/growing">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-full"
                >
                  Explore Our Technology
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section
        className="bg-background py-20"
        aria-labelledby="advisory-heading"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Main Content */}
            <div className="space-y-12">
              <FadeIn>
                <div className="space-y-2">
                  <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-medium text-primary">
                      Our Offerings
                    </span>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Presently, we delight in offering our exquisite saffron to a
                    diverse range of clients worldwide. From esteemed
                    establishments in the restaurant and food industries to
                    partnerships with local entrepreneurs and gourmet
                    connoisseurs, our saffron finds its way to discerning tables
                    across the globe. Moreover, our commitment extends to
                    nutraceuticals, supplements, and nutricosmetics, where we
                    collaborate with experts to deliver premium products that
                    cater to the health and wellness needs of our clientele.
                  </p>
                </div>
              </FadeIn>

              <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex-1 space-y-6">
                  <FadeIn delay={200}>
                    <h2
                      id="advisory-heading"
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
                    >
                      Introducing the Industry Advisory Team
                    </h2>
                    <p className="text-lg text-foreground/80 mt-6 leading-relaxed">
                      At the heart of BlueRedGold&apos;s success is a formidable
                      assembly of experts and visionaries, each bringing a
                      wealth of knowledge and passion to our mission.
                    </p>
                    <p className="text-lg text-foreground/80 mt-4 leading-relaxed">
                      With decades of combined experience, our advisors help us
                      navigate challenges, identify opportunities, and maintain
                      our commitment to quality and sustainability in everything
                      we do.
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={300}>
                  <div className="md:w-[400px] flex flex-col md:justify-center h-full md:min-h-[300px]">
                    <div className="flex items-center gap-6">
                      <Image
                        src="/logo.svg"
                        alt="BlueRedGold symbol"
                        width={80}
                        height={80}
                        className="w-20 h-20"
                      />
                      <span className="text-4xl md:text-5xl font-bold text-foreground">
                        BlueRedGold
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={400}>
              <Separator className="my-2 bg-secondary/30 h-0.5" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-8" aria-labelledby="team-heading">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-16">
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
                Housing unparalleled expertise, our operations team boasts
                world-class knowledge in indoor saffron farming, a journey of
                innovation that began in 2017. Through their tireless efforts,
                we&apos;ve transitioned from a Proof of Concept to the
                successful establishment of our inaugural commercial farm,
                marking the triumphant realization of our first harvest.
                <br />
                <br />
                This dedicated team stands as the backbone of BlueRedGold,
                ensuring that every grain of saffron we produce is of the
                highest calibre.
              </p>
            </FadeIn>
          </div>

          {/* First 3 profiles */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <FadeIn key={index} delay={300 + index * 100}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>

          {/* Next 2 profiles */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {teamMembers.slice(3, 5).map((member, index) => (
              <FadeIn key={index} delay={300 + index * 100}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>

          {/* Food and Plant Division */}
          <div className="mt-16 mb-8 max-w-4xl mx-auto">
            <FadeIn>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Food and Plant Division
              </h3>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Anchored by specialists in Food Technology and Plant Research,
                this team is dedicated to ensuring the premium quality and
                sustainability of our saffron.
              </p>
            </FadeIn>
          </div>

          {/* Next 3 profiles */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(5, 8).map((member, index) => (
              <FadeIn key={index} delay={300 + index * 100}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>

          {/* Executive Board */}
          <div className="mt-16 mb-8 max-w-4xl mx-auto">
            <FadeIn>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Executive Board
              </h3>
              <p className="text-lg text-foreground/80 max-w-3xl">
                A dynamic ensemble of seasoned strategists, brand architects,
                and sales mavens, they steer the company with a forward-thinking
                approach and an unwavering commitment to excellence.
              </p>
            </FadeIn>
          </div>

          {/* Next 4 profiles in 2x2 grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.slice(8, 12).map((member, index) => (
              <FadeIn key={index} delay={300 + index * 100}>
                <TeamMemberCard {...member} />
              </FadeIn>
            ))}
          </div>

          {/* AI and Robotics Unit */}
          <div className="mt-16 mb-8 max-w-4xl mx-auto">
            <FadeIn>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                AI and Robotics Unit
              </h3>
              <p className="text-lg text-foreground/80 max-w-3xl">
                Our future-driven AI and Robotics team brings cutting-edge
                automation and intelligence to our processes, ensuring
                precision, efficiency, and innovation at every turn.
              </p>
            </FadeIn>
          </div>

          {/* Last 2 profiles */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.slice(12).map((member, index) => (
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
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn>
              <h2
                id="partners-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 text-left"
              >
                Associates & Supporting Partners
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-foreground/80 text-left">
                We collaborate with industry leaders and innovative
                organizations to advance our mission and create sustainable
                impact in the agricultural sector.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partnerLogos.map((logo, index) => (
              <FadeIn key={index} delay={300 + index * 50}>
                <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center h-32">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={60}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Swedish Board of Agriculture Grant Section */}
      <section className="bg-background py-20" aria-labelledby="grant-heading">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            <FadeIn>
              <h2
                id="grant-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                BlueRedGold AB has been granted 8.3 MSEK in support from the
                Swedish Board of Agriculture.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  BlueRedGold AB (BRG) is developing a method in controlled
                  environment agriculture for the production of saffron. Our
                  vision is to develop a precision-automated, efficient, and
                  environmentally optimized hydroponic cultivation system. All
                  automation components are developed independently of each
                  other, allowing BRG, through our tech partner Dyno Robotics,
                  to license the entire system or individual parts to other
                  outdoor and indoor growers.
                </p>

                <p>
                  Today, several manual processes are required to grow saffron.
                  Automation facilitates tasks such as sorting the bulbs and
                  separating the saffron stigmas from the other parts of the
                  flower. The main benefit lies in resource savings. For indoor
                  growers, the advantage is that they can easily implement all
                  or parts of the system into their existing operations or
                  facilities to cultivate a new, profitable crop. The most
                  resource-intensive processes when cultivating saffron at scale
                  are picking and sorting the saffron flowers, and then
                  separating the petals, pollen, and other plant parts from the
                  stigmas. It takes approximately 150 flowers to produce 1 gram
                  of saffron, and this project aims to streamline several of
                  those processes for both BlueRedGold and other growers.
                </p>

                <p>
                  Through this project, Sweden will be able to compete with
                  Iran&apos;s currently near-monopoly on saffron cultivation. We
                  will reduce the need for saffron imports, while giving Sweden
                  a real opportunity to become a credible saffron exporter on
                  the global market.
                </p>

                <p>
                  We have been granted 8.3 million SEK from the Swedish Board of
                  Agriculture as support to finalize and demonstrate proof of
                  concept for our highly automated indoor saffron cultivation
                  system and to offer the technology to other growers. The
                  result could be that Sweden becomes self-sufficient in saffron
                  and even a major exporter on the world market. We have defined
                  five work packages, which follow the three climate zones that
                  saffron corms go through during the annual growth phase, as
                  well as automation for quality control, monitoring, and lab
                  analysis required to demonstrate proof of concept for indoor
                  cultivation.
                </p>

                <p className="font-medium">
                  The project is carried out in five distinct work packages.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Exit Headline */}
      <section
        className="bg-primary text-white py-20"
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <FadeIn>
                  <div className="inline-block px-4 py-1 bg-white/10 rounded-full mb-2">
                    <span className="text-sm font-medium text-white/90">
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
                  <p className="text-xl text-white/80">
                    From food & beverages to medical & cosmetics, discover how
                    our innovative saffron technology is transforming
                    industries.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/food-beverages">
                      <Button
                        size="lg"
                        className="bg-secondary hover:bg-secondary/90 text-black font-medium rounded-full"
                      >
                        Food & Beverages
                      </Button>
                    </Link>
                    <Link href="/medical-cosmetics">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-black hover:bg-white/10 rounded-full"
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
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-secondary"
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
                          <p className="text-white/70">
                            Environmental & social impact
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/blog/updates">
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-secondary"
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
                          <p className="text-white/70">
                            Latest updates & recipes
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/about-us/contact">
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-secondary"
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
                          <p className="text-white/70">Get in touch with us</p>
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
    </main>
  );
}

interface TeamMember {
  name: string;
  title: string;
  description?: string;
  role: string;
  image: string;
  linkedIn?: string;
}

function TeamMemberCard({
  name,
  title,
  description,
  role,
  image,
  linkedIn,
}: TeamMember) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow rounded-xl h-full flex flex-col">
      <CardContent className="p-0 flex-1 flex flex-col">
        {/* Image container with responsive height handling */}
        <div className="relative w-full aspect-[4/3] lg:h-[270px] lg:aspect-auto overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/5">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        {/* Content container with responsive padding */}
        <div className="p-4 lg:p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg lg:text-xl font-bold text-primary mb-1">
              {name}
            </h3>
            <p className="text-foreground/70 mb-3 line-clamp-2 min-h-[2.5rem]">
              {title}
            </p>
            {description && (
              <p className="text-sm text-foreground/60 mb-3 line-clamp-2">
                {description}
              </p>
            )}
            <p className="text-sm text-foreground/60 line-clamp-4">{role}</p>
          </div>
          {linkedIn && (
            <div className="mt-4 pt-3 border-t border-secondary/10">
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}'s LinkedIn profile`}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full text-sm"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mikael Öhman',
    title: 'Founder and Head of production',
    description: 'Mikael is the founder and visionary behind our mission.',
    role: 'Pioneer, Entrepreneur, Operations Expert, Ag Tech Developer.',
    image: '/about/team/mikael.webp',
    linkedIn: 'https://www.linkedin.com/in/mikael-ohman/',
  },
  {
    name: 'Nastaran Baleng-Soultani',
    title: 'CEO and Head of marketing & sales',
    role: 'The Absolut Company, Unilever, SPACE, RadCap',
    image: '/about/team/nastaran.webp',
    linkedIn: 'https://www.linkedin.com/in/nastaran-baleng-soultani/',
  },
  {
    name: 'Andrei Boulescu',
    title: 'CTO and Head of Production & Automation',
    role: 'Huawei, Airbus, Innotek',
    image: '/about/team/andrei.webp',
    linkedIn: 'https://www.linkedin.com/in/andreiboulescu/',
  },
  {
    name: 'Christopher Lindqvist',
    title: 'Technical engineering',
    role: 'Farm developer with focus on technical engineering.',
    image: '/about/team/christopher.webp',
    linkedIn: 'https://www.linkedin.com/in/criss-lindqvist-3713912a0/',
  },
  {
    name: 'Fahimeh Shabani',
    title: 'Food & Beverage',
    role: 'Market researcher and digital content creator with insights and experience in food and beverage markets.',
    image: '/about/team/fahimeh.webp',
    linkedIn: 'https://www.linkedin.com/in/fahimeh-shabani-12209b208/',
  },
  {
    name: 'Sandra Flodström',
    title: 'Sustainability, quality & food safety',
    role: '30+ years in the food industry CSR, audits, sustainability and quality, food science, food legislation and corporate communication.',
    image: '/about/team/sandra.webp',
    linkedIn: 'https://www.linkedin.com/in/sandra-flodstr%C3%B6m-97500725/',
  },
  {
    name: 'Arca Kromwijk',
    title: 'Wageningen Plant Research',
    role: '30+ years experience of research in plant physiology with a focus on bulb crops. Research on indoor saffron production.',
    image: '/about/team/arca.webp',
    linkedIn: 'https://www.linkedin.com/in/arca-kromwijk-26951971/',
  },
  {
    name: 'Filip Van Noort',
    title: 'Wageningen Plant Research',
    role: '30+ years experience as crop specialist; indoor farming, crop production with a focus on tropical crops and saffron.',
    image: '/about/team/filip.webp',
    linkedIn: 'https://www.linkedin.com/in/filip-van-noort-6b2207122/',
  },
  {
    name: 'Björn Öste',
    title: 'Serial entrepreneur.',
    role: 'Co-founder of Oatly & Good Idea. Food tech investor. Member o.t. board Vertical Harvest Inc. Global brand building & biz within food tech, CEA, and metabolic health.',
    image: '/about/team/bjorn.webp',
    linkedIn: 'https://www.linkedin.com/in/bj%C3%B6rn-%C3%B6ste-b185551/',
  },
  {
    name: 'Karin Ljunggren',
    title: 'Board member and investor.',
    role: 'Business advisor with 15+ years of experience from supporting mgmt teams in their strategic and biz development work.',
    image: '/about/team/karin.webp',
    linkedIn: 'https://www.linkedin.com/in/karinljungren/',
  },
  {
    name: 'Jonas L. Gadd',
    title: 'Chairman of the board and investor.',
    role: 'Business advisor with 15+ years experience from supporting mgmt teams in their strategic and operational work',
    image: '/about/team/jonas.webp',
    linkedIn: 'https://www.linkedin.com/in/jonasgadd/',
  },
  {
    name: 'Jan Enhager',
    title: 'Board member and investor.',
    role: 'Serial entrepreneur and founder of e.g. Vitamin Well and Nocco. Business advisor and food industry marketing expert.',
    image: '/about/team/jan.webp',
    linkedIn: 'https://www.linkedin.com/in/jan-enhager-186ab110/',
  },
  {
    name: 'Robert Luciani',
    title: 'AI expert and cofounder.',
    role: 'Advisor in High Performance Computing and AI.',
    image: '/about/team/robert.webp',
    linkedIn: 'https://www.linkedin.com/in/r3tex/',
  },
  {
    name: 'Tommy G Klein',
    title: 'Advisor Robotics and investor.',
    role: '30+ years experience in senior positions within ABB, SKF, etc. with a focus on robotics and automation.',
    image: '/about/team/tommy.webp',
    linkedIn: 'https://www.linkedin.com/in/arca-kromwijk-26951971/', // TODO: Not the correct linkedin profile
  },
];

const partnerLogos = [
  { src: '/about/company/aventure.svg', alt: 'Aventure' },
  { src: '/about/company/almi.svg', alt: 'Almi' },
  { src: '/about/company/connect.svg', alt: 'Connect Sverige' },
  { src: '/about/company/create.svg', alt: 'Create' },
  { src: '/about/company/dyno-robotics.svg', alt: 'Dyno Robotics' },
  { src: '/about/company/johan-heibert.svg', alt: 'Johan Heibert' },
  { src: '/about/company/jordbruksfonden.avif', alt: 'Jordbruksfonden' },
  {
    src: '/about/company/sormlands-matkluster.avif',
    alt: 'Sörmlands Matkluster',
  },
  { src: '/about/company/europeiska-unionen.avif', alt: 'Europeiska Unionen' },
];
