import type { Metadata } from 'next';
import AboutUsContent from './AboutUs';

export const metadata: Metadata = {
  title: 'About BlueRedGold | Premium Saffron Production',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'About BlueRedGold | Premium Saffron Production',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'BlueRedGold Saffron',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutUsContent />;
}
