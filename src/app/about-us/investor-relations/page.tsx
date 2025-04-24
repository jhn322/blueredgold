import type { Metadata } from 'next';
import InvestorRelationsContent from './InvestorRelations';

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Investor Relations',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function InvestorRelationsPage() {
  return <InvestorRelationsContent />;
}
