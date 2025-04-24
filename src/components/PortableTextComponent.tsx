import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

// Define interfaces for Sanity types
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Define the portable text components configuration
export const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<SanityImage>) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Recipe image'}
            width={800}
            height={600}
            className="rounded-md object-cover"
          />
          {value.alt && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps) => {
      const rel = !value?.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: PortableTextMarkComponentProps) => {
      return <strong className="text-primary font-bold">{children}</strong>;
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-primary mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-primary mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-primary mt-5 mb-2">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 mb-6 list-disc pl-6 text-black marker:text-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 mb-6 list-decimal pl-6 text-black marker:text-primary">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
    number: ({ children }) => <li className="mt-2">{children}</li>,
  },
};

interface SanityPortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

const SanityPortableText = ({
  value,
  className = '',
}: SanityPortableTextProps) => {
  return (
    <div className={className}>
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
};

export default SanityPortableText;
