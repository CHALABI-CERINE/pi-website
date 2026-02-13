import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AnimatedLogo({ src = '/assets/logo-full.png', size = 110 }) {
  if (typeof window !== 'undefined') {
    // disable on mobiles / reduced motion
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return null;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  }

  const { scrollY } = useScroll();
  // ranges smaller to avoid large off-screen movement
  const x = useTransform(scrollY, [0, 420], ['0%', '-24%']);
  const y = useTransform(scrollY, [0, 420], ['0%', '-18%']);
  const scale = useTransform(scrollY, [0, 420], [1.15, 0.8]);

  const sx = useSpring(x, { stiffness: 160, damping: 24 });
  const sy = useSpring(y, { stiffness: 160, damping: 24 });
  const sScale = useSpring(scale, { stiffness: 140, damping: 20 });

  const style = {
    position: 'fixed',
    left: '50%',
    top: '8vh',
    translate: '-50% -50%',
    zIndex: 40, // plus bas
    pointerEvents: 'none',
    width: size + 'px',
    height: 'auto',
    opacity: 0.98,
  };

  return (
    <motion.div style={{ ...style, x: sx, y: sy, scale: sScale }}>
      <img src={src} alt="logo" width={size} height={size} style={{ display: 'block' }} />
    </motion.div>
  );
}