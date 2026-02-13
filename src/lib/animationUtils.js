export function animationsAllowed() {
  if (typeof window === 'undefined') return false;
  // Respect user preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  // Disable on touch / coarse input devices (phones/tablets)
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return false;
  // Local override (dev/test)
  try {
    const override = localStorage.getItem('pi_enable_animations');
    if (override === '0') return false;
    if (override === '1') return true;
  } catch (e) {
    // ignore localStorage errors
  }
  return true;
}