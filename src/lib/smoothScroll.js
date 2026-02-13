// Native scroll only — no Lenis
let instance = null;

export async function initSmoothScroll() {
  if (instance) return instance;
  if (typeof window === 'undefined') return null;

  instance = {
    raf: () => {},
    scrollTo: (target, opts = {}) => {
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    },
    destroy: () => {},
  };
  return instance;
}

export function getSmoothScroll() {
  return instance;
}