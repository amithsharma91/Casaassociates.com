import { useEffect } from 'react';

const SITE_URL = 'https://casaassociates.com';

/**
 * useCanonical — sets the canonical URL, meta description, robots, and OG tags
 * for the current page. Restores the homepage canonical on unmount.
 *
 * @param path  - The page path, e.g. '/about' or '/projects/14'. Must start with '/'.
 * @param opts  - Optional overrides for description, title, ogImage.
 */
export function useCanonical(
  path: string,
  opts?: {
    description?: string;
    ogImage?: string;
  }
) {
  useEffect(() => {
    const pageUrl = `${SITE_URL}${path}`;

    // ── Canonical ──────────────────────────────────────────────────────────
    const canonicalEl = document.getElementById('global-canonical') as HTMLLinkElement | null;
    if (canonicalEl) {
      canonicalEl.href = pageUrl;
    } else {
      // Fallback: create one if somehow missing
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = pageUrl;
      link.id = 'global-canonical';
      document.head.appendChild(link);
    }

    // ── Robots ─────────────────────────────────────────────────────────────
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

    // ── Description ────────────────────────────────────────────────────────
    if (opts?.description) {
      let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.name = 'description';
        document.head.appendChild(descMeta);
      }
      descMeta.content = opts.description.slice(0, 160);
    }

    // ── Open Graph URL ─────────────────────────────────────────────────────
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = pageUrl;

    // ── Open Graph Image ───────────────────────────────────────────────────
    if (opts?.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.content = opts.ogImage;
    }

    // ── Cleanup: restore homepage canonical on unmount ─────────────────────
    return () => {
      const canon = document.getElementById('global-canonical') as HTMLLinkElement | null;
      if (canon) canon.href = `${SITE_URL}/`;

      let ogUrlEl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (ogUrlEl) ogUrlEl.content = `${SITE_URL}/`;
    };
  }, [path, opts?.description, opts?.ogImage]);
}
