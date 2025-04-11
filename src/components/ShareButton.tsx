'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import ClientOnly from '@/components/ClientOnly';
import { toast } from 'sonner';

interface ShareButtonProps {
  title: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function ShareButton({
  title,
  description,
  buttonText = 'Share',
  variant = 'outline',
  size = 'sm',
  className = '',
}: ShareButtonProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('Failed to share content');
    }
  };

  return (
    <ClientOnly>
      <FadeIn delay={100} translateY={1}>
        <Button
          variant={variant}
          size={size}
          className={`gap-2 group transition-all duration-300 ${className}`}
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-1 transition-transform duration-300 group-hover:scale-110" />
          {buttonText}
        </Button>
      </FadeIn>
    </ClientOnly>
  );
}
