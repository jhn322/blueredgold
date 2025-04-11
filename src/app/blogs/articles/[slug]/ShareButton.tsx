'use client';

import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <Button
      variant="outline"
      className="group transition-all duration-300"
      onClick={handleShare}
    >
      Share article
      <Share className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
    </Button>
  );
}
