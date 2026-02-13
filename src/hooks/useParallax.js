import { useEffect, useRef, useState } from 'react';
import { lerp, clamp } from '../utils/math';

export default function useParallax({ speed = 0.2, from = 0, to = 1 } = {}) {
  const target = useRef(0);
  const current = useRef(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      // Map scrollY proportionally (you can customize mapping per component)
      target.current = clamp(scrollY * speed, from, to);
    }

    function loop() {
      current.current = lerp(current.current, target.current, 0.12);
      // trigger re-render where needed by components reading current.current
      setTick(t => t + 1);
      requestAnimationFrame(loop);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [speed, from, to]);

  return current; // consumer reads current.current for transform amount
}