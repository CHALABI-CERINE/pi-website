import { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useGoogleSheets } from '../../hooks/useGoogleSheets';
import { getEvents, getProjects } from '../../services/googleSheetsAPI';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const { t, lang } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { data: eventsData } = useGoogleSheets(getEvents);
  const { data: projectsData } = useGoogleSheets(getProjects);
  const [activeTab, setActiveTab] = useState('all');

  const events = useMemo(() => {
    return eventsData. map(row => ({
      id: row[0],
      title: lang === 'en' ? row[1] : row[2],
      date: row[3],
      description: lang === 'en' ?  row[5] : row[6],
      location: row[7],
      status: row[9],
      image: row[11],
      type: 'event',
    })).slice(0, 4);
  }, [eventsData, lang]);

  const projects = useMemo(() => {
    return projectsData.map(row => ({
      id: row[0],
      title: lang === 'en' ? row[1] : row[2],
      description: lang === 'en' ? row[4] : row[5],
      image: row[7],
      impact: row[10],
      type: 'project',
    })).slice(0, 4);
  }, [projectsData, lang]);

  const displayItems = activeTab === 'all'
    ? [... events, ...projects]. slice(0, 4)
    : activeTab === 'events'
    ? events
    : projects;

  return (
    <section ref={ref} className="py-16 md: py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            {t.portfolioTitle}
          </h2>
          <p className="text-xl text-gray-600">{t.portfolioDescription}</p>
        </motion. div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'events', 'projects'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'events' ? t.navEvents : t.navProjects}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, index) => (
            <motion.div
              key={item. id}
              initial={{ opacity:  0, y: 20 }}
              animate={inView ?  { opacity: 1, y:  0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card image={item.image}>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  {item.type === 'event' && item.status === 'open' && (
                    <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                      {t.registrationOpen}
                    </span>
                  )}
                  <Link to={`/${item.type}/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      {t.viewDetails}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <Link to={activeTab === 'events' ? '/events' : activeTab === 'projects' ? '/projects' : '/'}>
            <Button variant="secondary" size="lg">
              {t.viewAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
