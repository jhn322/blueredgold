import type { Metadata } from 'next';
import ArticlesContent from './Articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Articles',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
