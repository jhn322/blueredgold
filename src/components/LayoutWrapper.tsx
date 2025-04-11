'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith('/studio');
  return (
    <>
      {!isStudioRoute && (
        <header>
          <Navbar />
        </header>
      )}
      <main>{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  );
}
