import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top on every route change.
 * This fixes SPA navigation issues where:
 * - Scroll position gets stuck mid-page when navigating back
 * - scroll-reveal animations (opacity: 0 → 1) never fire because
 *   elements above the viewport never enter the IntersectionObserver
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll (not smooth) so the user sees the top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
