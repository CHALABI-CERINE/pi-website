import React, { useEffect, useRef, useState } from 'react';
import { lerp } from '../utils/math';

export default function CursorBlob({ size = 240, color = 'rgba(255,107,0,0.12)' }) {
  const blobRef = useRef({ el: null, x: -9999, y: -9999, tx: -9999, ty: -9999 });
  const [visible, setVisible] = useState(false);

  // disable on touch devices or reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setVisible(false);
  }, []);

  useEffect(() => {
    const state = blobRef.current;
    let rafId = null;
    let moved = false;

    function onMove(e) {
      // show only once when user moves
      if (!moved) {
        setVisible(true);
        moved = true;
      }
      state.tx = e.clientX - size / 2;
      state.ty = e.clientY - size / 2;
    }

    function loop() {
      state.x = lerp(state.x, state.tx, 0.16);
      state.y = lerp(state.y, state.ty, 0.16);
      if (state.el) {
        state.el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [size]);

  const style = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: size + 'px',
    height: size + 'px',
    pointerEvents: 'none',
    borderRadius: '50%',
    background: `radial-gradient(circle at 30% 30%, ${color}, transparent 40%)`,
    mixBlendMode: 'screen',
    transform: 'translate3d(-9999px,-9999px,0)',
    willChange: 'transform, opacity',
    transition: 'opacity 220ms ease',
    zIndex: 999, // réduit pour ne pas tout masquer
    opacity: visible ? 1 : 0,
  };

  return <div ref={el => (blobRef.current.el = el)} style={style} aria-hidden />;
}