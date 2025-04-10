'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

export function ShareButton({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={() => {
        if (navigator.share) {
          navigator.share({
            title,
            text: description,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      }}
    >
      <Share2 className="h-4 w-4 mr-1" />
      Share Recipe
    </Button>
  );
}
