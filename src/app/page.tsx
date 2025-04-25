import Hero from '../components/landing-page/Hero';
import { IntroductionSection } from '../components/landing-page/IntroductionSection';
import { ProcessSection } from '../components/landing-page/ProcessSection';
import { AutomationSection } from '../components/landing-page/AutomationSection';
import { SeparatorSection } from '../components/landing-page/SeparatorSection';
import { TeamAndSolutionSection } from '../components/landing-page/TeamAndSolutionSection';
import type { Metadata } from 'next';
import { ExploreSolution } from '@/components/ui/explore-solution';
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
        <SeparatorSection />
        <AutomationSection />
        <TeamAndSolutionSection />
        <ExploreSolution />
      </div>
    </main>
  );
}
