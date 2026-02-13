import { useEffect, useRef, useCallback } from 'react';
import { lerp, clamp } from '../utils/math';

export default function useParallax({ speed = 0.2, from = 0, to = 1 } = {}) {
  const target = useRef(0);
  const current = useRef(0);
  const rafId = useRef(null);
  const isRunning = useRef(false);

  useEffect(() => {
    function onScroll() {
      target.current = clamp((window.scrollY || window.pageYOffset) * speed, from, to);
      if (!isRunning.current) {
        isRunning.current = true;
        rafId.current = requestAnimationFrame(loop);
      }
    }

    function loop() {
      current.current = lerp(current.current, target.current, 0.12);
      // Stop looping when close enough to target
      if (Math.abs(current.current - target.current) > 0.001) {
        rafId.current = requestAnimationFrame(loop);
      } else {
        isRunning.current = false;
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed, from, to]);

  return current;
}