import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Calendar, Rocket, ArrowRight } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: "Founders Camp 2025",
    category: "Events",
    image: "/assets/portfolio/founders-camp-2025.jpg",
    desc: "Bootcamp intensif de 3 jours : idéation, business model et pitch devant un jury de professionnels.",
    link: "/event/founders-camp-2025",
    date: "2025",
    tags: ["Entrepreneurship", "Bootcamp", "Pitching"]
  },
  {
    id: 2,
    title: "Start Small 2025",
    category: "Events",
    image: "/assets/portfolio/start-small-2025.jpg",
    desc: "Compétition d'entrepreneuriat pour les étudiants qui veulent lancer leur premier projet concret.",
    link: "/event/start-small-2025",
    date: "2025",
    tags: ["Compétition", "Startup", "Innovation"]
  },
  {
    id: 3,
    title: "InnoWeek 2025",
    category: "Events",
    image: "/assets/portfolio/innoweek-2025.jpg",
    desc: "Une semaine complète dédiée à l'innovation, avec workshops, conférences et networking.",
    link: "/event/innoweek-2025",
    date: "2025",
    tags: ["Innovation", "Workshops", "Networking"]
  },
  {
    id: 4,
    title: "GGC 2025",
    category: "Events",
    image: "/assets/portfolio/ggc-2025.jpg",
    desc: "Global Game Competition — créativité, design et développement en un temps record.",
    link: "/event/ggc-2025",
    date: "2025",
    tags: ["Gaming", "Design", "Dev"]
  },
  {
    id: 5,
    title: "Algeria Job Summit",
    category: "Events",
    image: "/assets/portfolio/algeria-job-summit.jpg",
    desc: "Sommet sur l'emploi en Algérie — connecter les étudiants aux opportunités professionnelles.",
    link: "/event/algeria-job-summit",
    date: "2025",
    tags: ["Emploi", "Networking", "Carrière"]
  },
  {
    id: 6,
    title: "Start Small 2024",
    category: "Events",
    image: "/assets/portfolio/start-small-2024.jpg",
    desc: "Deuxième édition de notre compétition phare pour les jeunes entrepreneurs.",
    link: "/event/start-small-2024",
    date: "2024",
    tags: ["Compétition", "Startup"]
  },
  {
    id: 7,
    title: "Khotwa x PI 2024",
    category: "Events",
    image: "/assets/portfolio/khotwa-2024.jpg",
    desc: "Collaboration avec Khotwa pour accompagner les porteurs de projets étudiants.",
    link: "/event/khotwa-2024",
    date: "2024",
    tags: ["Partenariat", "Accompagnement"]
  },
  {
    id: 8,
    title: "InnoWeek 2024",
    category: "Events",
    image: "/assets/portfolio/innoweek-2024.jpg",
    desc: "Workshops, hackathons et talks pendant une semaine d'innovation continue.",
    link: "/event/innoweek-2024",
    date: "2024",
    tags: ["Innovation", "Hackathon"]
  },
  {
    id: 9,
    title: "E-Steps 2024",
    category: "Events",
    image: "/assets/portfolio/e-steps-2024.jpg",
    desc: "Programme de formation par étapes pour structurer son parcours entrepreneurial.",
    link: "/event/e-steps-2024",
    date: "2024",
    tags: ["Formation", "Entrepreneurship"]
  },
  {
    id: 10,
    title: "Start Small 2023",
    category: "Events",
    image: "/assets/portfolio/start-small-2023.jpg",
    desc: "La première édition qui a lancé la tradition — petits projets, gros impact.",
    link: "/event/start-small-2023",
    date: "2023",
    tags: ["Compétition", "Startup"]
  },
  {
    id: 11,
    title: "Khotwa x PI 2023",
    category: "Events",
    image: "/assets/portfolio/khotwa-2023.jpg",
    desc: "Première collaboration avec Khotwa pour rapprocher entrepreneuriat et terrain.",
    link: "/event/khotwa-2023",
    date: "2023",
    tags: ["Partenariat", "Accompagnement"]
  },
  {
    id: 12,
    title: "GraFX 2023",
    category: "Events",
    image: "/assets/portfolio/grafx-2023.jpg",
    desc: "Compétition de design graphique — créativité visuelle et identité de marque.",
    link: "/event/grafx-2023",
    date: "2023",
    tags: ["Design", "Compétition"]
  },
  {
    id: 13,
    title: "E-Steps 2023",
    category: "Events",
    image: "/assets/portfolio/e-steps-2023.jpg",
    desc: "Deuxième édition du programme de formation entrepreneuriale.",
    link: "/event/e-steps-2023",
    date: "2023",
    tags: ["Formation", "Entrepreneurship"]
  },
  {
    id: 14,
    title: "Diplomania 2023",
    category: "Events",
    image: "/assets/portfolio/diplomania-2023.jpg",
    desc: "Événement de célébration et de networking pour les diplômés et la communauté PI.",
    link: "/event/diplomania-2023",
    date: "2023",
    tags: ["Networking", "Célébration"]
  },
  {
    id: 15,
    title: "Aurora Fair 2023",
    category: "Events",
    image: "/assets/portfolio/aurora-fair-2023.jpg",
    desc: "Salon étudiant — exposition de projets, stands et rencontres professionnelles.",
    link: "/event/aurora-fair-2023",
    date: "2023",
    tags: ["Fair", "Exposition"]
  },
  {
    id: 16,
    title: "TEDxUSTHB 2022",
    category: "Events",
    image: "/assets/portfolio/tedx-2022.jpg",
    desc: "Organisation du premier TEDx à l'USTHB — des idées qui méritent d'être partagées.",
    link: "/event/tedx-2022",
    date: "2022",
    tags: ["Conférence", "TEDx"]
  },
  {
    id: 17,
    title: "Startup Weekend",
    category: "Events",
    image: "/assets/portfolio/startup-weekend.jpg",
    desc: "54 heures pour passer d'une idée à un prototype fonctionnel. Intense.",
    link: "/event/startup-weekend",
    date: "2022",
    tags: ["Bootcamp", "Startup"]
  },
  {
    id: 18,
    title: "SE 2022",
    category: "Events",
    image: "/assets/portfolio/se-2022.jpg",
    desc: "Semaine de l'entrepreneuriat — conférences, ateliers et rencontres.",
    link: "/event/se-2022",
    date: "2022",
    tags: ["Semaine", "Entrepreneurship"]
  },
  {
    id: 19,
    title: "E-Steps 2022",
    category: "Events",
    image: "/assets/portfolio/e-steps-2022.jpg",
    desc: "La toute première édition d'E-Steps — là où tout a commencé.",
    link: "/event/e-steps-2022",
    date: "2022",
    tags: ["Formation", "Entrepreneurship"]
  },
];

const HOMEPAGE_LIMIT = 6;

// Image placeholder
const ImagePlaceholder = ({ title }) => (
  <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
    <span
      className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/15 text-center px-4"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {title}
    </span>
  </div>
);

// Filter button
const FilterButton = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-3 font-heading text-[11px] uppercase tracking-[0.2em] transition-colors ${
      isActive ? 'text-accent' : 'text-primary/40 hover:text-primary/70'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    {label}
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </motion.button>
);

// Project Card
const ProjectCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef(null);

  const CategoryIcon = item.category === 'Events' ? Calendar : Rocket;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700">
        <div className="relative aspect-[4/5] overflow-hidden">
          {!imgError ? (
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? 'grayscale(0%)' : 'grayscale(30%)'
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <ImagePlaceholder title={item.title} />
          )}

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute top-4 left-4"
            animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
              <CategoryIcon className="w-3 h-3 text-accent" />
              <span className="font-heading text-[10px] uppercase tracking-widest text-primary">
                {item.category}
              </span>
            </span>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[60%] justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-accent/90 text-white font-heading text-[9px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.span
              className="inline-block font-heading text-[10px] uppercase tracking-widest text-accent mb-3"
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
            >
              {item.date}
            </motion.span>

            <motion.h3
              className="font-display text-2xl md:text-3xl text-white uppercase leading-tight mb-3"
              animate={{ y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className="font-body text-sm text-white/70 leading-relaxed"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
                marginBottom: isHovered ? 16 : 0
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {item.desc}
            </motion.p>

            <motion.a
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white"
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ x: 5 }}
            >
              <span className="font-heading text-xs uppercase tracking-widest">
                Voir Détails
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-4 -right-4 font-display text-8xl text-primary/5 pointer-events-none select-none"
        animate={{ opacity: isHovered ? 0.1 : 0.05 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const filteredItems = filter === 'All'
    ? portfolioData.slice(0, HOMEPAGE_LIMIT)
    : portfolioData.filter(item => item.category === filter);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-surface to-white overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            <motion.span
              className="inline-block px-4 py-2 rounded-full border border-primary/10 font-heading text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.span>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary uppercase tracking-tight leading-none">
              Nos
              <br />
              <span className="text-accent">Réalisations</span>
            </h2>

            <p className="font-body text-primary/50 mt-6 max-w-lg">
              Découvrez nos derniers événements et projets qui façonnent la prochaine génération de leaders.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="flex gap-2 p-1 rounded-full bg-primary/5">
              {['All', 'Projects', 'Events'].map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat === 'All' ? 'Tout' : cat === 'Projects' ? 'Projets' : 'Événements'}
                  isActive={filter === cat}
                  onClick={() => setFilter(cat)}
                />
              ))}
            </div>

            <motion.button
              onClick={() => navigate('/portfolio')}
              className="group flex items-center gap-4 px-8 py-4 border border-primary/10 hover:border-primary/30 rounded-full transition-all"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-heading text-[11px] uppercase tracking-widest text-primary/70 group-hover:text-primary">
                Tout Voir
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <ProjectCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
      </div>
    </section>
  );
};