import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// ========== ANIMATION VARIANTS ==========

// Fade up animation
export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease:  [0.22, 1, 0.36, 1]
    }
  }
};

// Fade in from left
export const fadeLeft = {
  hidden: { 
    opacity: 0, 
    x:  -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Fade in from right
export const fadeRight = {
  hidden:  { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity:  1, 
    x: 0,
    transition:  {
      duration:  0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale:  1,
    transition: {
      duration: 0.6,
      ease:  [0.22, 1, 0.36, 1]
    }
  }
};

// Stagger container for children
export const staggerContainer = {
  hidden: { opacity:  0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger children (use inside staggerContainer)
export const staggerChild = {
  hidden: { 
    opacity: 0, 
    y:  30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease:  [0.22, 1, 0.36, 1]
    }
  }
};

// Letter by letter animation
export const letterAnimation = {
  hidden: { 
    y: 100, 
    opacity: 0 
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.04,
      duration:  0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Slide in overlay (for modals/panels)
export const slideOverlay = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition:  { duration: 0.3 }
  },
  exit: { 
    opacity:  0,
    transition: { duration:  0.2 }
  }
};

// Slide up panel
export const slideUp = {
  hidden: { 
    y: "100%" 
  },
  visible: { 
    y: 0,
    transition: {
      duration: 0.5,
      ease:  [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    y:  "100%",
    transition: {
      duration: 0.4,
      ease:  [0.22, 1, 0.36, 1]
    }
  }
};

// ========== CUSTOM HOOKS ==========

// Hook for scroll-triggered animations
export const useScrollReveal = (options = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold:  0.1,
    ...options
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

// ========== TRANSITION CONFIGS ==========

export const springConfig = {
  type: "spring",
  stiffness:  400,
  damping: 30
};

export const smoothConfig = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1]
};

export const bounceConfig = {
  type: "spring",
  stiffness: 300,
  damping:  20
};

// ========== HOVER ANIMATIONS ==========

export const hoverScale = {
  scale: 1.05,
  transition:  springConfig
};

export const hoverLift = {
  y: -8,
  transition:  { duration: 0.3 }
};

export const hoverGlow = {
  boxShadow: "0 20px 40px -10px rgba(255,140,0,0.3)",
  transition: { duration: 0.3 }
};