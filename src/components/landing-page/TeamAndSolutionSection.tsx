'use client';

import { FadeIn } from '@/components/ui/fade-in';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  Factory,
  LineChart,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Warehouse,
  Leaf,
  TrendingUp,
  Globe2,
  FileWarning,
  Timer,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points?: string[];
  isTraditional?: boolean;
  gradientClass?: string;
}

const ProcessStep = ({
  icon,
  title,
  description,
  points,
  isTraditional,
  gradientClass,
}: ProcessStepProps) => (
  <div
    className={`flex flex-col gap-4 p-6 rounded-xl ${
      gradientClass || (isTraditional ? 'bg-destructive/20' : 'bg-primary/20')
    }`}
  >
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-lg ${
          gradientClass ||
          (isTraditional ? 'bg-destructive/30' : 'bg-primary/30')
        }`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    {points && points.length > 0 && (
      <ul className="space-y-2 pl-12">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-muted-foreground list-disc">
            {point}
          </li>
        ))}
      </ul>
    )}
  </div>
);

interface CollapsibleSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isTraditional?: boolean;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({
  title,
  subtitle,
  children,
  isTraditional,
  defaultOpen = false,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-xl ${
          isTraditional
            ? 'bg-destructive/10'
            : 'bg-gradient-to-r from-blue-600/30 via-red-600/30 to-yellow-600/30'
        } hover:brightness-110 transition-all duration-200`}
      >
        <div className="flex items-center justify-between">
          <div>
            <span
              className={`text-sm font-medium ${
                isTraditional ? 'text-destructive' : 'text-primary'
              }`}
            >
              {title}
            </span>
            <h3 className="text-lg font-medium mt-1">{subtitle}</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <FadeIn>
      <div className="space-y-6">
        <CollapsibleSection
          title="The Supply Problem"
          subtitle="Saffron supply is not sustainable"
          isTraditional
        >
          <ProcessStep
            icon={<Globe2 className="w-6 h-6 text-destructive" />}
            title="Global Production Risk"
            description=">90% of global yield is farmed in Iran"
            points={[
              'High risk with a dominance of world production in one location',
              'Politics, monopoly, stunted growth, logistics challenges',
              'Climate change severely affects the Iran region',
            ]}
            isTraditional
          />
          <ProcessStep
            icon={<Warehouse className="w-6 h-6 text-destructive" />}
            title="Resource Intensive"
            description="Traditional farming requires extensive resources"
            points={[
              'To produce 1 ton of Saffron outdoors, 49 hectares of arable land is needed',
              'Almost all Saffron is grown outdoor with traditional methods',
              'Dependent on weather conditions',
            ]}
            isTraditional
          />
          <ProcessStep
            icon={<FileWarning className="w-6 h-6 text-destructive" />}
            title="Quality Concerns"
            description="Supply chain transparency issues"
            points={[
              'Lack of trust in supply chain',
              'False certificates of origin',
              'Uncertain quality standards',
            ]}
            isTraditional
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="The Market Problem"
          subtitle="Ingredient buyers dilemma"
          isTraditional
        >
          <ProcessStep
            icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
            title="Supply Chain Risks"
            description="Multiple challenges affecting supply reliability"
            points={[
              'Climate change - harvests are shrinking',
              'Dependency on Iran - Geopolitical situation',
              'Fake certificates',
            ]}
            isTraditional
          />
          <ProcessStep
            icon={<Timer className="w-6 h-6 text-destructive" />}
            title="Quality & Delivery Issues"
            description="Inconsistent product quality and delivery"
            points={[
              'Irregular deliveries',
              'Quality decreases when in storage',
              'Fear of pesticides',
            ]}
            isTraditional
          />
          <ProcessStep
            icon={<TrendingUp className="w-6 h-6 text-destructive" />}
            title="Market Pressures"
            description="Increasing demands and costs"
            points={[
              'With decreasing supply and increased demand, prices will soar',
              'Buyers are expected to show sustainability',
            ]}
            isTraditional
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="The BlueRedGold Solution"
          subtitle="Modern, sustainable, and efficient process"
          defaultOpen
        >
          <FadeIn delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProcessStep
                icon={<Factory className="w-6 h-6 text-black" />}
                title="Controlled Environment"
                description="Year-round production in optimized indoor conditions"
                points={[
                  'Climate independent production',
                  'Guaranteed volumes',
                  'Even, year-round supply',
                ]}
                gradientClass="bg-gradient-to-br from-blue-600/30 via-blue-500/30 to-blue-400/30"
              />
              <ProcessStep
                icon={<LineChart className="w-6 h-6 text-black" />}
                title="Automated & Efficient"
                description="Advanced automation for consistent quality"
                points={[
                  'Cost efficiency through automation',
                  'Even production',
                  'Scalable operations',
                ]}
                gradientClass="bg-gradient-to-br from-red-600/30 via-red-500/30 to-red-400/30"
              />
              <ProcessStep
                icon={<ShieldCheck className="w-6 h-6 text-black" />}
                title="Quality Guaranteed"
                description="Full control over the entire process"
                points={[
                  'Traceability / Transparency',
                  'No pesticides',
                  'European production - less CO2 transport',
                ]}
                gradientClass="bg-gradient-to-br from-yellow-600/30 via-yellow-500/30 to-yellow-400/30"
              />
              <ProcessStep
                icon={<Leaf className="w-6 h-6 text-black" />}
                title="Sustainable Production"
                description="Environmentally conscious approach"
                points={[
                  'No land / water footprint',
                  'Energy efficient facilities',
                  'Minimal environmental impact',
                ]}
                gradientClass="bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/20"
              />
              <ProcessStep
                icon={<Scale className="w-6 h-6 text-black" />}
                title="Consistent Quality"
                description="Standardized production process"
                points={[
                  'Guaranteed and even quality',
                  'Modern quality control',
                  'Optimal storage conditions',
                ]}
                gradientClass="bg-gradient-to-br from-red-500/20 via-red-400/20 to-red-300/20"
              />
              <ProcessStep
                icon={<Sprout className="w-6 h-6 text-black" />}
                title="Advanced Breeding"
                description="Scientific approach to improvement"
                points={[
                  'Selective breeding capabilities',
                  'Stigmas/corm yield optimization',
                  'Specific substance concentrations',
                ]}
                gradientClass="bg-gradient-to-br from-yellow-500/20 via-yellow-400/20 to-yellow-300/20"
              />
            </div>
          </FadeIn>
        </CollapsibleSection>
      </div>
    </FadeIn>
  );
};

export const TeamAndSolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container px-4 md:px-6">
        {/* Team Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Pioneers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Welcome to the heart of innovation at BlueRedGold, where a
              dedicated team of visionaries is redefining the world of saffron.
            </p>
          </div>
        </FadeIn>

        {/* Team Images */}
        <FadeIn delay={200}>
          <div className="relative max-w-5xl mx-auto mb-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-red-600/20 to-yellow-600/20 rounded-3xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-red-600/20 to-yellow-600/20 rounded-3xl transform -rotate-3" />
                  <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-primary/20">
                    <Image
                      src="/landing-page/team.webp"
                      alt="BlueRedGold Team"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    At BlueRedGold, we&apos;re revolutionizing saffron
                    cultivation through innovation and sustainability. Our team
                    combines expertise in agriculture, technology, and business
                    to create a better future for this precious spice.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    We&apos;re committed to transforming the saffron industry by
                    making it sustainable, transparent, and accessible. Through
                    our innovative approach, we&apos;re ensuring the future of
                    this precious ingredient.
                  </p>
                </div>
                <Link
                  href="/about-us/about#team-section"
                  className="inline-block"
                >
                  <Button
                    variant="default"
                    size="lg"
                    className="group bg-secondary hover:bg-secondary/90 text-black"
                  >
                    Meet Our Team
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Process Comparison */}
        <div className="mt-24">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionizing Saffron Cultivation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We&apos;re transforming traditional saffron farming into a
                modern, sustainable, and efficient process.
              </p>
            </div>
          </FadeIn>
          <ComparisonSection />
        </div>
      </div>
    </section>
  );
};
