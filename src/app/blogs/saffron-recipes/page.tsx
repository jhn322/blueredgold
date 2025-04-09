import type { Metadata } from 'next';
import SaffronRecipesContent from './SaffronRecipes';

export const metadata: Metadata = {
  title: 'Saffron Recipes',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Saffron Recipes',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function SaffronRecipesPage() {
  return <SaffronRecipesContent />;
}
