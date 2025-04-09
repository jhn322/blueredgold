import type { Metadata } from 'next';
import FoodBeveragesContent from './FoodBeverages';

export const metadata: Metadata = {
  title: 'Food & Beverages',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Food & Beverages',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function FoodBeveragesPage() {
  return <FoodBeveragesContent />;
}
