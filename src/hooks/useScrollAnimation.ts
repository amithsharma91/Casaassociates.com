import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal hook using IntersectionObserver.
 *
 * Fixes applied:
 * - Checks if element is ALREADY in viewport on mount (handles ScrollToTop + immediate visibility)
 * - Re-evaluates on each mount (handles navigate-back with fresh component tree)
 * - Disconnects observer after element becomes visible (performance)
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already in viewport on mount, mark visible immediately
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * (1 - threshold) &&
      rect.bottom > 0;

    if (alreadyVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
