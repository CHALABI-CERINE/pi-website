import { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useGoogleSheets } from '../../hooks/useGoogleSheets';
import { getQABoard } from '../../services/googleSheetsAPI';
import { motion } from 'framer-motion';

export const FAQ = () => {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { data: qaData } = useGoogleSheets(getQABoard);
  const [expanded, setExpanded] = useState(null);
  const [displayCount, setDisplayCount] = useState(5);

  const faqs = useMemo(() => {
    return qaData
      .filter(row => row[3] === 'answered')
      .map(row => ({
        id: row[0],
        question: row[1],
        answer: row[5],
        category: row[2],
      }));
  }, [qaData]);

  const displayedFaqs = faqs.slice(0, displayCount);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:  px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
          {t. faqTitle}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <motion. div
              key={faq. id}
              initial={{ opacity:  0, y: 10 }}
              animate={inView ?  { opacity: 1, y:  0 } :  {}}
              transition={{ delay:  index * 0.05 }}
              className="border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === faq.id ? null :   faq.id)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-dark text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: expanded === faq.id ?  180 : 0 }}
                  className="text-primary flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
              </button>

              {expanded === faq.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height:   'auto' }}
                  className="bg-gray-50 p-6 text-gray-700 border-t-2 border-gray-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {displayCount < faqs. length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setDisplayCount(prev => prev + 5)}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              {t. faqLoadMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};