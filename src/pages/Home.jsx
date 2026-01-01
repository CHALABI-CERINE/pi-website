import React from 'react';
import { Hero } from '../components/homepage/Hero';
import { Stats } from '../components/homepage/Stats';
import { AboutSnippet } from '../components/homepage/AboutSnippet';
import { Portfolio } from '../components/homepage/Portfolio';
import { PartnersCarousel } from '../components/homepage/PartnersCarousel';
import { Testimonials } from '../components/homepage/Testimonials';
import { FAQ } from '../components/homepage/FAQ';
import { Contact } from '../components/homepage/Contact';

const Home = () => {
  return (
    <main>
      {/* Section 1: Hero - Compact with logo */}
      <Hero />
      
      {/* Section 2: Stats - Short dark bar */}
      <Stats />
      
      {/* Section 3: About Snippet - Who we are */}
      <AboutSnippet />
      
      {/* Section 4: Portfolio - Projects & Events */}
      <Portfolio />
      
      {/* Section 5: Partners Carousel */}
      <PartnersCarousel />
      
      {/* Section 6: Testimonials */}
      <Testimonials />
      
      {/* Section 7: FAQ */}
      <FAQ />
      
      {/* Section 8: Contact */}
      <Contact />
    </main>
  );
};

export default Home;