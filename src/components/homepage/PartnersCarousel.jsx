import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useGoogleSheets } from '../../hooks/useGoogleSheets';
import { getPartners } from '../../services/googleSheetsAPI';
import { motion } from 'framer-motion';

export const PartnersCarousel = () => {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { data: partnersData } = useGoogleSheets(getPartners);

  const partners = partnersData. map(row => ({
    id: row[0],
    name: row[1],
    logo: row[2],
    website: row[3],
  })) || [];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
          {t.partnersTitle}
        </h2>

        {/* Carousel */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex overflow-x-auto gap-8 pb-4">
            {partners. length > 0 ? (
              partners.map((partner, index) => (
                <motion.a
                  key={partner.id}
                  href={partner. website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 h-24 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner. name}
                    className="h-20 object-contain hover:opacity-80 transition-opacity"
                  />
                </motion. a>
              ))
            ) : (
              <p className="text-gray-500">No partners available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};