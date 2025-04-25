'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  type?: 'standard' | 'info';
  width?: 'normal' | 'wide';
  aspect?: 'portrait' | 'landscape' | 'square';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'The Art of Saffron Cultivation',
    image: '/technology/growing/growing-1.webp',
    type: 'info',
    aspect: 'portrait',
  },
  {
    id: 2,
    title: '1. Rich Soil Preparation',
    image: '/technology/growing/growing-3.webp',
    aspect: 'portrait',
  },
  {
    id: 3,
    title: '2. Hand Planting Techniques',
    image: '/technology/growing/growing-7.webp',
    aspect: 'portrait',
  },
  {
    id: 4,
    title: 'Optimal Growing Conditions',
    image: '/technology/growing/growing-5.webp',
    type: 'info',
    aspect: 'portrait',
  },
  {
    id: 5,
    title: '3. First Purple Blooms',
    image: '/technology/growing/growing-2.webp',
    aspect: 'portrait',
  },
  {
    id: 6,
    title: '4. Field in Full Bloom',
    image: '/technology/growing/growing-6.webp',
    aspect: 'portrait',
  },
  {
    id: 7,
    title: 'Seasonal Care',
    image: '/technology/growing/growing-11.webp',
    type: 'info',
    aspect: 'portrait',
  },
  {
    id: 8,
    title: '5. Irrigation Management',
    image: '/technology/growing/growing-10.webp',
    aspect: 'portrait',
  },
  {
    id: 9,
    title: '6. Organic Cultivation',
    image: '/technology/growing/growing-12.webp',
    aspect: 'portrait',
  },
  {
    id: 10,
    title: 'Disease Prevention',
    image: '/technology/growing/growing-13.webp',
    type: 'info',
    aspect: 'portrait',
  },
  {
    id: 11,
    title: '7. The Red Gold Appears',
    image: '/technology/growing/growing-4.webp',
    aspect: 'portrait',
  },
  {
    id: 12,
    title: '8. Grading and Selection',
    image: '/technology/growing/growing-8.webp',
    aspect: 'portrait',
  },
  {
    id: 13,
    title: 'Quality Standards',
    image: '/technology/growing/growing-9.webp',
    type: 'info',
    aspect: 'portrait',
  },
  {
    id: 14,
    title: '9. Premium Packaging',
    image: '/technology/growing/growing-14.webp',
    aspect: 'portrait',
  },
  {
    id: 15,
    title: '10. Storage and Preservation',
    image: '/technology/growing/growing-15.webp',
    aspect: 'portrait',
  },
];

export default function GrowingGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Group items into three columns to create the staggered effect
  const distributeItems = () => {
    const leftColumn: GalleryItem[] = [];
    const middleColumn: GalleryItem[] = [];
    const rightColumn: GalleryItem[] = [];

    galleryItems.forEach((item, index) => {
      const column = index % 3;

      if (column === 0) {
        leftColumn.push(item);
      } else if (column === 1) {
        middleColumn.push(item);
      } else {
        rightColumn.push(item);
      }
    });

    return { leftColumn, middleColumn, rightColumn };
  };

  const { leftColumn, middleColumn, rightColumn } = distributeItems();

  const renderColumn = (items: GalleryItem[], startOffset: number = 0) => (
    <div
      className="flex flex-col gap-6"
      style={{ marginTop: `${startOffset}px` }}
    >
      {items.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
          isHovered={hoveredItem === item.id}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        />
      ))}
    </div>
  );

  return (
    <div className="px-4 py-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {renderColumn(leftColumn, 150)}
          {renderColumn(middleColumn)}
          {renderColumn(rightColumn, 250)}
        </div>

        {/* Mobile and tablet layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {galleryItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              isHovered={hoveredItem === item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const GalleryCard = ({
  item,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: GalleryCardProps) => {
  const aspectRatioClass =
    item.aspect === 'landscape'
      ? 'pt-[56.25%]'
      : item.aspect === 'square'
        ? 'pt-[100%]'
        : 'pt-[120%]';

  // Function to get a different icon based on item id
  const getIcon = (id: number) => {
    const icons = [
      // Flower/plant icons
      <svg
        key="flower"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a9.96 9.96 0 0 0-7.071 2.929c-3.905 3.905-3.905 10.237 0 14.142A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 7.071-2.929c3.905-3.905 3.905-10.237 0-14.142A9.96 9.96 0 0 0 12 2z"></path>
        <path d="M8 21V3"></path>
        <path d="M16 21V3"></path>
        <path d="M3 16h18"></path>
        <path d="M3 8h18"></path>
      </svg>,

      // Seed/growth icon
      <svg
        key="seed"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c4.97 0 9-7.163 9-12 0-2.76-1.12-5.26-2.93-7.07L12 9 6.93 2.93C5.12 4.74 4 7.24 4 10c0 4.837 4.03 12 8 12z"></path>
      </svg>,

      // Water/irrigation icon
      <svg
        key="water"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"></path>
      </svg>,

      // Sun/climate icon
      <svg
        key="sun"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>,

      // Harvest/scissors icon
      <svg
        key="harvest"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>,
    ];

    return icons[id % icons.length];
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`relative w-full ${aspectRatioClass}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0">
          <div
            className={`${item.type === 'info' ? 'bg-secondary/70' : 'bg-primary/70'} rounded-t-xl py-6 px-4 text-white`}
          >
            <div className="flex justify-center mb-2">{getIcon(item.id)}</div>
            <h3 className="text-center text-lg font-medium">{item.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
