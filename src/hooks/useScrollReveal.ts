import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const rootEl = containerRef.current;
    if (!rootEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    // If container itself has reveal class
    if (rootEl.classList.contains('reveal-on-scroll') || rootEl.classList.contains('reveal-scale')) {
      observer.observe(rootEl);
    }

    // Find all children with reveal classes
    const elements = rootEl.querySelectorAll('.reveal-on-scroll, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return containerRef;
};
