import { useEffect, useRef } from 'react';

interface UseVideoLoadingOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

export const useVideoLoading = (options: UseVideoLoadingOptions = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.warn('Video autoplay failed:', error);
          });
        } else {
          video.pause();
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: options.root,
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    });

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return videoRef;
};
