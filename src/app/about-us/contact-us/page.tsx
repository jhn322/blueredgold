import type { Metadata } from 'next';
import ContactUsContent from './ContactUs';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Learn about BlueRedGold's innovative approach to saffron production using Swedish precision automation and hydroponic vertical indoor growing systems.",
  openGraph: {
    title: 'Contact Us',
    description:
      "Discover how we're revolutionizing saffron production with sustainable hydroponic systems and Swedish precision automation.",
  },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}
