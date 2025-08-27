"use client";
import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = { threshold: 0.1, once: false }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!options.once) {
          setIsInView(false);
        }
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}
