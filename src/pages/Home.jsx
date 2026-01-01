import React from 'react';
import { Hero } from '../components/homepage/Hero';
import { Stats } from '../components/homepage/Stats';
import { Portfolio } from '../components/homepage/Portfolio';
import { AboutSnippet } from '../components/homepage/AboutSnippet';
import { PartnersCarousel } from '../components/homepage/PartnersCarousel';
import { Testimonials } from '../components/homepage/Testimonials';
import { FAQ } from '../components/homepage/FAQ';
import { Contact } from '../components/homepage/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Portfolio />
      <AboutSnippet />
      <PartnersCarousel />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;