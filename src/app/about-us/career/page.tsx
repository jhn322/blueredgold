import type { Metadata } from 'next';
import CareerContent from './Career';

export const metadata: Metadata = {
  title: 'Career',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Career',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function AboutPage() {
  return <CareerContent />;
}
