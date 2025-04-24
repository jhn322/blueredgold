'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gridItems = [
  {
    id: 1,
    title: 'Saffron Corms: The Foundation of Growth',
    image: '/placeholder.svg?height=600&width=600',
    size: 'medium',
  },
  {
    id: 2,
    title: 'Purple Blooms: The First Sign of Success',
    image: '/placeholder.svg?height=800&width=600',
    size: 'large',
  },
  {
    id: 3,
    title: 'Rich Soil Preparation for Optimal Growth',
    image: '/placeholder.svg?height=600&width=600',
    size: 'medium',
  },
  {
    id: 4,
    title: 'The Delicate Red Stigmas: Saffron Gold',
    image: '/placeholder.svg?height=600&width=800',
    size: 'large',
  },
  {
    id: 5,
    title: 'Proper Spacing: Room to Flourish',
    image: '/placeholder.svg?height=600&width=600',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Saffron Field in Full Bloom',
    image: '/placeholder.svg?height=800&width=600',
    size: 'large',
  },
  {
    id: 7,
    title: 'Hand Planting: The Start of the Journey',
    image: '/placeholder.svg?height=600&width=600',
    size: 'medium',
  },
  {
    id: 8,
    title: 'The Vibrant Colors of Saffron Harvest',
    image: '/placeholder.svg?height=600&width=800',
    size: 'large',
  },
  {
    id: 9,
    title: 'Dried Saffron: The Final Product',
    image: '/placeholder.svg?height=600&width=600',
    size: 'medium',
  },
];

export default function GrowingGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    >
      {gridItems.map((item) => (
        <motion.div
          key={item.id}
          className={`relative overflow-hidden rounded-xl ${
            item.size === 'large'
              ? 'row-span-2 sm:col-span-2 lg:col-span-1'
              : ''
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={item.image || '/placeholder.svg'}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out"
              style={{
                transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <motion.h3
                className="text-lg md:text-xl font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredItem === item.id ? 0 : 10,
                  opacity: hoveredItem === item.id ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
