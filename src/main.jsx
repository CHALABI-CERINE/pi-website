import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { animationsAllowed } from './lib/animationUtils';

// Lazy components (won't break build if modules missing until runtime)
const CursorBlob = React.lazy(() => import('./components/CursorBlob').catch(() => ({ default: () => null })));
const AnimatedLogo = React.lazy(() => import('./components/AnimatedLogo').catch(() => ({ default: () => null })));

function Root() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
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