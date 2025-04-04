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
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow rounded-xl h-auto lg:h-[600px] flex flex-col">
      <CardContent className="p-0 flex-1 flex flex-col">
        {/* Image container with better responsive height handling */}
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
        <div className="p-4 lg:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg lg:text-xl font-bold text-primary truncate">
              {name}
            </h3>
            <p className="text-foreground/70 mb-2 truncate">{title}</p>
            {description && (
              <p className="text-sm text-foreground/60 mb-2 line-clamp-2">
                {description}
              </p>
            )}
            <p className="text-sm text-foreground/60 line-clamp-3 lg:line-clamp-4">
              {role}
            </p>
          </div>
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}'s LinkedIn profile`}
              className="mt-3 lg:mt-4"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full text-sm"
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
