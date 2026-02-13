import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { animationsAllowed } from './lib/animationUtils';
import { initSmoothScroll } from './lib/smoothScroll';

// Lazy components (won't break build if modules missing until runtime)
const CursorBlob = React.lazy(() => import('./components/CursorBlob').catch(() => ({ default: () => null })));
const AnimatedLogo = React.lazy(() => import('./components/AnimatedLogo').catch(() => ({ default: () => null })));

function Root() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // initialize smooth scroll only on client
    initSmoothScroll().catch(() => {});
  }, []);

  return (
    <>
      {mounted && animationsAllowed() && (
        <Suspense fallback={null}>
          <CursorBlob />
          <AnimatedLogo />
        </Suspense>
      )}
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);  