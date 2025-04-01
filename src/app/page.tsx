import LandingPage from '../components/landing-page/LandingPage';
import Hero from '../components/landing-page/Hero';
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
      <LandingPage />
    </main>
  );
}
