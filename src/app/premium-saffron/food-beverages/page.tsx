import type { Metadata } from 'next';
import FoodBeveragesContent from './FoodBeverages';

export const metadata: Metadata = {
  title: 'API Dokumentation',
  description:
    'Effektivisera din verksamhet genom att integrera våra tjänster direkt i dina system. Ansök om API-tillgång och skräddarsy lösningen efter dina behov.',
  openGraph: {
    title: 'Offertu | API Dokumentation',
    description:
      'Effektivisera din verksamhet genom att integrera våra tjänster direkt i dina system. Ansök om API-tillgång och skräddarsy lösningen efter dina behov.',
  },
};

export default function FoodBeverages() {
  return <FoodBeveragesContent />;
}
