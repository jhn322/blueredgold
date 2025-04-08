import type { Metadata } from 'next';
import PressContent from './Press';

export const metadata: Metadata = {
  title: 'Press',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Press',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function PressPage() {
  return <PressContent />;
}
