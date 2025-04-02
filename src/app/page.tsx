import Hero from '../components/landing-page/Hero';
import { IntroductionSection } from '../components/landing-page/IntroductionSection';
import { ProcessSection } from '../components/landing-page/ProcessSection';
import { EfficiencySection } from '../components/landing-page/EfficiencySection';
import { VanillaChoiceSection } from '../components/landing-page/VanillaChoiceSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // * Metadata ärvs från layout.tsx
  // Lägg till specifik metadata här om det behövs
};

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      <header>
        <Hero />
      </header>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <IntroductionSection />
        <ProcessSection />
        <EfficiencySection />
        <VanillaChoiceSection />
      </div>
    </main>
  );
}
