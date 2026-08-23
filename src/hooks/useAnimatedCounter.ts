import { useEffect, useState, useRef } from 'react';

export const useAnimatedCounter = (
  targetNumber: number,
  durationMs: number = 1500,
  startOnIntersect: boolean = true
) => {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el && startOnIntersect) return;

    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // Easing out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * targetNumber));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(targetNumber);
        }
      };
      requestAnimationFrame(step);
    };

    if (!startOnIntersect) {
      startCounting();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          if (el) observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [targetNumber, durationMs, startOnIntersect]);

  return { count, elementRef };
};
