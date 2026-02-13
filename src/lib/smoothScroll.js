let lenisInstance = null;

export async function initSmoothScroll() {
  if (lenisInstance) return lenisInstance;
  if (typeof window === 'undefined') return null;

  try {
    const { default: Lenis } = await import('@studio-freight/lenis');
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1 - Math.pow(1 - t, 3)),
      smooth: true,
      direction: 'vertical',
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisInstance = lenis;
    return lenis;
  } catch (err) {
    // Lenis not installed or failed to load — fallback gracefully
    console.warn('Lenis failed to load, falling back to native scrolling.', err);
    lenisInstance = {
      raf: () => {},
      scrollTo: (y, opts = {}) => window.scrollTo({ top: y, behavior: opts.behavior || 'smooth' }),
    };
    return lenisInstance;
  }
}

export function getSmoothScroll() {
  return lenisInstance;
}