import { Navigation } from '../components/shared/Navigation';
import { Footer } from '../components/shared/Footer';
import { Hero } from '../components/homepage/Hero';
import { Stats } from '../components/homepage/Stats';
import { AboutSnippet } from '../components/homepage/AboutSnippet';
import { Portfolio } from '../components/homepage/Portfolio';
import { PartnersCarousel } from '../components/homepage/PartnersCarousel';
import { Testimonials } from '../components/homepage/Testimonials';
import { FAQ } from '../components/homepage/FAQ';

export const Home = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Stats />
      <AboutSnippet />
      <Portfolio />
      <PartnersCarousel />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};