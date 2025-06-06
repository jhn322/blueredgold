'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import {
  BriefcaseBusiness,
  Code,
  Globe,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxHero } from '@/components/ui/parallax-hero';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ParallaxHero
        imageSrc="/career/career-hero.webp"
        imageAlt="Hero image for career page"
        title="Career at BlueRedGold"
        subtitle="Be part of something extraordinary. We're building the future of sustainable agriculture with robotics and AI."
        buttons={[
          {
            text: 'Contact Us',
            href: 'mailto:career@blueredgold.com',
            icon: <Mail className="h-4 w-4" />,
          },
          {
            text: 'Meet Our Team',
            href: '/about-us/about#team-section',
            variant: 'outline',
          },
        ]}
      />

      {/* Why Join Us Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <FadeIn>
            <section className="text-center">
              <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">
                  Work Environment
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-display">
                Why Join Our Team?
              </h2>
            </section>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: 'Revolutionary Agriculture',
                description:
                  'Be part of the first-ever industrial-grade, controlled indoor cultivation and year-round saffron production in Sweden.',
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: 'Innovation First',
                description:
                  'Join a team pioneering robotics and automation in agriculture, making Sweden competitive in global saffron production.',
              },
              {
                icon: <Rocket className="h-10 w-10 text-primary" />,
                title: 'Sustainable Impact',
                description:
                  'Contribute to reducing saffron imports and help establish Sweden as a credible saffron exporter on the global market.',
              },
              {
                icon: <HeartHandshake className="h-10 w-10 text-primary" />,
                title: 'Work-Life Balance',
                description:
                  'Flexible schedules and policies that respect your time outside of work.',
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: 'Continuous Learning',
                description:
                  'Access to resources, workshops, and mentorship to help you grow professionally.',
              },
              {
                icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
                title: 'Competitive Benefits',
                description:
                  'Comprehensive packages that reward your contributions and support your wellbeing.',
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <Card className="h-full bg-card border-none hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2">{item.icon}</div>
                    <CardTitle className="text-xl text-black">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center font-display">
              Our Values
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center mb-16">
              These core principles guide everything we do and define who we are
              as a company.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="space-y-8">
                {[
                  {
                    title: 'Innovation',
                    description:
                      'We pioneer new technologies in agriculture, from robotics to AI, to revolutionize saffron production.',
                  },
                  {
                    title: 'Sustainability',
                    description:
                      'We are committed to environmentally-friendly premium saffron using automated hydroponic vertical indoor growing systems.',
                  },
                  {
                    title: 'Excellence',
                    description:
                      'We strive for excellence in everything we do, setting high standards in both technology and agriculture.',
                  },
                  {
                    title: 'Collaboration',
                    description:
                      'We believe in the power of teamwork and value diverse perspectives in our mission to transform agriculture.',
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-secondary-foreground font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-foreground/70">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-10"></div>
                <div className="absolute inset-0">
                  <Image
                    src="/career/recruitment.webp"
                    alt="Engineering excellence background"
                    fill
                    className="object-cover opacity-40"
                  />
                </div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white-foreground p-8">
                  <Code className="h-16 w-16 mb-6 text-white" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                    Engineering Excellence
                  </h3>
                  <p className="text-white/90 text-center max-w-md">
                    We pioneer precision-automated, efficient, and
                    environmentally optimized hydroponic cultivation systems.
                    Our engineering team combines robotics and AI to
                    revolutionize sustainable agriculture.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary text-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-primary">
                Ready to Join Our Team?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-black/90 mb-8">
                Join us in shaping the future of sustainable agriculture with
                robotics and AI.
              </p>
              <p className="text-lg text-black/90 mb-8">
                We currently have all positions filled. But feel free to contact
                us at:
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <Link href="mailto:career@blueredgold.com">
                    career@blueredgold.com
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-black/10"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  <Link href="https://www.google.com/maps/search/?api=1&query=Mästarvägen+2,+645+41+Strängnäs">
                    Our Location
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
