import type { Metadata } from 'next';
import EsgContent from './Esg';

export const metadata: Metadata = {
  title: 'ESG',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'ESG',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function EsgPage() {
  return <EsgContent />;
}
