'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Leaf,
  Star,
  Cpu,
  BookOpen,
  Building2,
  Sprout,
  TestTube2,
  Database,
  FileText,
  Newspaper,
  UtensilsCrossed,
  Microscope,
  Users,
  Mail,
  LineChart,
  Newspaper as Press,
  Recycle,
} from 'lucide-react';

interface NavItemChild {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface NavItemWithChildren {
  name: string;
  path?: string;
  icon: React.ReactNode;
  children?: (NavItemChild | NavItemWithChildren)[];
}

type NavItem = NavItemChild | NavItemWithChildren;

const navItems: NavItem[] = [
  {
    name: 'Growing Saffron',
    path: '/',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    name: 'Premium Saffron',
    icon: <Star className="w-5 h-5" />,
    children: [
      {
        name: 'Food & Beverages',
        path: '/food-beverages',
        icon: <UtensilsCrossed className="w-4 h-4" />,
      },
      {
        name: 'Medical & Cosmetics',
        path: '/medical-cosmetics',
        icon: <TestTube2 className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'Technology',
    icon: <Cpu className="w-5 h-5" />,
    children: [
      {
        name: 'Growing',
        path: '/technology/growing',
        icon: <Sprout className="w-4 h-4" />,
      },
      {
        name: 'Harvesting',
        path: '/technology/harvesting',
        icon: <Leaf className="w-4 h-4" />,
      },
      {
        name: 'Data',
        icon: <Database className="w-4 h-4" />,
        children: [
          {
            name: 'Batches',
            path: '/technology/data/batches',
            icon: <FileText className="w-4 h-4" />,
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      {
        name: 'Updates',
        path: '/blog/updates',
        icon: <FileText className="w-4 h-4" />,
      },
      {
        name: 'In the news',
        path: '/blog/news',
        icon: <Newspaper className="w-4 h-4" />,
      },
      {
        name: 'Recipes',
        path: '/blog/recipes',
        icon: <UtensilsCrossed className="w-4 h-4" />,
      },
      {
        name: 'Science',
        path: '/blog/science',
        icon: <Microscope className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'About',
    icon: <Building2 className="w-5 h-5" />,
    children: [
      { name: 'Career', path: '/career', icon: <Users className="w-4 h-4" /> },
      { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
      {
        name: 'Investor Relations',
        path: '/investor-relations',
        icon: <LineChart className="w-4 h-4" />,
      },
      { name: 'Press', path: '/press', icon: <Press className="w-4 h-4" /> },
      {
        name: 'Sustainability',
        icon: <Recycle className="w-4 h-4" />,
        children: [
          {
            name: 'ESG',
            path: '/sustainability/esg',
            icon: <Recycle className="w-4 h-4" />,
          },
        ],
      },
    ],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/blueredgoldab/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.044.976.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.044 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.044-.976-.207-1.504-.344-1.857-.182-.466-.398-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.353-.137-.881-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/people/Blueredgold/100087048124977/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/blueredgold-ab/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const threshold = 100;

      if (position < threshold) {
        setOpacity(1 - position / threshold);
        setIsAtTop(true);
      } else {
        setOpacity(1);
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({
    item,
    className = '',
    isNested = false,
  }: {
    item: NavItem;
    className?: string;
    isNested?: boolean;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`relative group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.path ? (
          <Link
            href={item.path}
            className={`flex items-center gap-2 px-4 py-2 ${
              className || 'text-secondary hover:text-accent'
            } transition-colors`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ) : (
          <div
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
              className || 'text-secondary hover:text-accent'
            } transition-colors`}
          >
            {item.icon}
            <span>{item.name}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isNested ? '-rotate-90' : ''
              } ${
                isHovered ? (isNested ? 'rotate-[-90deg]' : 'rotate-180') : ''
              }`}
            />
          </div>
        )}

        {'children' in item && item.children && isHovered && (
          <div
            className={`absolute ${
              isNested
                ? 'left-[calc(100%-1px)] top-[-0.5rem]'
                : 'left-0 top-[calc(100%-1px)]'
            } bg-secondary shadow-lg py-2 min-w-[200px] z-50 rounded-xl
            }`}
          >
            {item.children.map((child) => (
              <NavLink
                key={child.name}
                item={{
                  ...child,
                  path: child.path,
                  icon: child.icon,
                  name: child.name,
                }}
                className="text-primary hover:font-bold"
                isNested={true}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className={`flex items-center justify-between px-4 md:px-8 py-3 transition-all duration-300 ${
            isAtTop ? 'bg-transparent' : 'bg-primary shadow-md'
          }`}
        >
          {/* Logo */}
          <div
            className="transition-opacity duration-300"
            style={{ opacity: isAtTop ? opacity : 1 }}
          >
            <Link href="/" className="block relative w-[120px] h-[70px]">
              <Image
                src="/logo.svg"
                alt="BlueRedGold Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-4">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Menu Icon */}
          <button
            className="flex items-center justify-center focus:outline-none text-secondary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            tabIndex={0}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-40"
            onClick={toggleMenu}
          >
            <motion.div
              className="absolute top-0 right-0 h-full bg-secondary w-full md:w-[40%]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4 md:p-8 border-b border-primary/10">
                <button
                  className="flex items-center justify-center focus:outline-none text-primary"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  tabIndex={0}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col h-[calc(100%-5rem)]">
                {/* Navigation Items */}
                <ul className="flex flex-col items-center justify-center flex-1 py-8">
                  {navItems.map((item) => (
                    <li key={item.path} className="w-full max-w-xs">
                      <Link
                        href={item.path || '#'}
                        className={`relative group flex items-center py-3 px-4 text-3xl hover:font-bold text-primary ${
                          pathname === item.path ? 'font-bold' : ''
                        }`}
                        onClick={toggleMenu}
                      >
                        <div className="absolute left-0 flex items-center justify-center w-8 h-8">
                          <Image
                            src="/saffron.svg"
                            alt=""
                            width={32}
                            height={32}
                            className={
                              pathname === item.path
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                            }
                          />
                        </div>
                        <span className="ml-10">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 py-8 border-t border-primary/10 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors"
                      aria-label={social.name}
                      tabIndex={0}
                    >
                      <div className="w-6 h-6">{social.icon}</div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
