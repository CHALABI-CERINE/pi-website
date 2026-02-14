import React, { useState, useEffect } from 'react';



const HERO_IMAGES = [
  '/assets/hero/hero-1.jpg',
  '/assets/hero/hero-2.jpg',
  '/assets/hero/hero-4.jpg',
];


export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [activityVisible, setActivityVisible] = useState(true);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivityVisible(false);
      setTimeout(() => {
       
        setActivityVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === currentImage ? 1 : 0,
              transform: i === currentImage ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.2s ease-in-out, transform 1.2s ease-in-out',
            }}
          />
        ))}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,23,42,0.65)' }} />
      </div>

      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto hero-content">

         

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 font-heading">
            Construire. Pas attendre.
          </h1>

          <div className="mb-10">
            {/* <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
             
              <span
                className="text-sm font-bold text-white font-heading"
                style={{
                  opacity: activityVisible ? 1 : 0,
                  transform: activityVisible ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.3s, transform 0.3s',
                }}
              >
              
              </span>
            </div> */}
          </div>

          <p
            className="text-sm md:text-base max-w-lg mb-10 font-body"
            style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8 }}
          >
            Le premier club d'entrepreneuriat de l'USTHB.
            Depuis 2022, on transforme les idées en actions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white text-sm font-bold rounded-full font-heading hover:opacity-90 transition-opacity"
              style={{ color: '#0f172a' }}
            >
              Découvrir PI
            </a>
            <a
              href="https://www.instagram.com/project.initiative.usthb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-bold rounded-full font-heading transition-opacity hover:opacity-80"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Nous suivre →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex gap-2" style={{ transform: 'translateX(-50%)' }}>
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            style={{
              height: 4,
              width: i === currentImage ? 32 : 8,
              borderRadius: 9999,
              backgroundColor: i === currentImage ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
              transition: 'all 0.5s',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero-content > * {
          opacity: 0;
          transform: translateY(20px);
          animation: heroFadeIn 0.6s ease-out forwards;
        }
        .hero-content > *:nth-child(1) { animation-delay: 0s; }
        .hero-content > *:nth-child(2) { animation-delay: 0.1s; }
        .hero-content > *:nth-child(3) { animation-delay: 0.2s; }
        .hero-content > *:nth-child(4) { animation-delay: 0.3s; }
        .hero-content > *:nth-child(5) { animation-delay: 0.4s; }
        @keyframes heroFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};