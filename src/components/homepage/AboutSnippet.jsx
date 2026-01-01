import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useSiteContent } from '../../hooks/useSiteContent';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AboutSnippet = () => {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { siteContent } = useSiteContent();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="grid grid-cols-1 md: grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } :  {}}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              {t.aboutTitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.footerAbout}
            </p>
            <p className="text-gray-500 text-base mb-8">
              Founded in {siteContent?.founder_year}, we've been building a community of innovators, thinkers, and changemakers.  Our mission is to create spaces where ideas flourish and impact happens.
            </p>
            <Link to="/about">
              <Button variant="primary" size="lg">
                {t. aboutCTA}
              </Button>
            </Link>
          </motion. div>
        </div>
      </div>
    </section>
  );
};