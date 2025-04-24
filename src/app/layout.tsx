import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import LayoutWrapper from '../components/LayoutWrapper';
import { Toaster } from 'sonner';
import { ToastProvider } from '@/components/ui/use-toast';

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-switzer',
});

// Placeholder-bild från Unsplash (kostnadsfri)
const PLACEHOLDER_OG_IMAGE =
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&h=630&auto=format&fit=crop';

export const metadata: Metadata = {
  title: {
    default:
      'BlueRedGold - Swedish Saffron - Ethically grown - Harvested in Sweden',
    template: '%s | BlueRedGold',
  },
  description:
    'BlueRedGold cultivating world-class saffron in the heart of Sörmland',
  authors: [{ name: 'BlueRedGold Team' }],
  creator: 'BlueRedGold',
  publisher: 'BlueRedGold',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blueredgold.vercel.app'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://BlueRedGold.vercel.app', // Ändra till er faktiska domän
    siteName: 'BlueRedGold',
    title:
      'BlueRedGold - Swedish Saffron - Ethically grown - Harvested in Sweden',
    description:
      'BlueRedGold cultivating world-class saffron in the heart of Sörmland',
    images: [
      {
        url: PLACEHOLDER_OG_IMAGE, // Placeholder från Unsplash
        width: 1200,
        height: 630,
        alt: 'BlueRedGold - Effektiv offerthantering',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${switzer.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <ToastProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ToastProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
