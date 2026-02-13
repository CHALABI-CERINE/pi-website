import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { lerp } from '../utils/math';

export default function TiltCard({ children, className = '', strength = 12 }) {
  const ref = useRef(null);
  const state = useRef({ rx: 0, ry: 0, tx: 0, ty: 0 });

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * strength * -1;
    const rx = (py - 0.5) * strength;
    state.current.tx = rx;
    state.current.ty = ry;
  }

  function onLeave() {
    state.current.tx = 0;
    state.current.ty = 0;
  }

  // small loop for smoothing transforms
  React.useEffect(() => {
    let mounted = true;
    function loop() {
      if (!mounted) return;
      state.current.rx = lerp(state.current.rx, state.current.tx, 0.15);
      state.current.ry = lerp(state.current.ry, state.current.ty, 0.15);
      if (ref.current) {
        ref.current.style.transform = `perspective(1000px) rotateX(${state.current.rx}deg) rotateY(${state.current.ry}deg) translateZ(0)`;
        ref.current.style.boxShadow = `${-state.current.ry}px ${state.current.rx}px 30px rgba(15,23,42,0.08)`;
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return () => (mounted = false);
  }, []);

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`will-change-transform ${className}`}
      style={{ perspective: 1000 }}
    >
      <div ref={ref} className="rounded-2xl bg-white p-6" style={{ transition: 'box-shadow 200ms' }}>
        {children}
      </div>
    </div>
  );
}