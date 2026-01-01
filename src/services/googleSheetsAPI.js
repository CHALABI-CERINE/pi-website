import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID;

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

// ============ MOCK DATA ============
const MOCK_SITE_CONTENT = {
  club_name: 'pi',
  club_phone: '574734848',
  club_email: 'info@yih.org',
  club_location: 'usthb algiers algeria',
  maps_url: 'https://maps.google.com/? q=ushthb',
  discord_url: 'https://discord.com/invite/example',
  instagram_url: 'https://instagram.com/youthinnovationhub',
  tiktok_url: 'https://tiktok.com/@youthinnovationhub',
  linkedin_url: 'https://linkedin.com/company/yih',
  founder_year: '2014',
};

const MOCK_STATS = {
  alumni_members: 1250,
  total_events: 45,
  total_projects: 32,
  total_partners: 20,
};

const MOCK_EVENTS = [
  {
    id: '1',
    title_en: 'Tech Conference 2025',
    title_fr: 'Conférence Technologie 2025',
    date:  '2025-01-15',
    time: '18:00',
    description_en: 'Join us for an amazing tech conference with industry leaders discussing the future of innovation.',
    description_fr: 'Rejoignez-nous pour une conférence tech incroyable avec des leaders de l\'industrie.',
    location: 'Casablanca Convention Center',
    capacity: '500',
    status: 'open',
    sponsors: ['Google', 'Microsoft'],
    image_url: 'https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title_en: 'Startup Pitch Night',
    title_fr: 'Soirée Pitch Startup',
    date:  '2025-02-10',
    time: '19:00',
    description_en:  'Meet innovative startups pitching their ideas to investors.',
    description_fr: 'Rencontrez des startups innovantes qui présentent leurs idées aux investisseurs.',
    location: 'Innovation Hub',
    capacity: '300',
    status: 'open',
    sponsors: ['Investor Network'],
    image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title_en:  'Web Development Workshop',
    title_fr: 'Atelier Développement Web',
    date:  '2025-03-05',
    time: '14:00',
    description_en: 'Learn modern web development techniques with React and Tailwind CSS.',
    description_fr: 'Apprenez les techniques modernes de développement web avec React et Tailwind CSS.',
    location: 'Tech Lab',
    capacity: '100',
    status: 'closed',
    sponsors: [],
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  },
];

const MOCK_PROJECTS = [
  {
    id: '1',
    name_en: 'Community Garden Initiative',
    name_fr: 'Initiative Jardin Communautaire',
    type: 'workshop',
    description_en: 'Building sustainable gardens in urban areas to promote environmental awareness.',
    description_fr: 'Construire des jardins durables dans les zones urbaines pour promouvoir la conscience environnementale.',
    year: '2024',
    featured_image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    ],
    video_url: 'https://www.youtube.com/embed/example',
    impact_text: '500+ people benefited from our green initiatives',
  },
  {
    id:  '2',
    name_en: 'Digital Literacy Program',
    name_fr: 'Programme Alphabétisation Numérique',
    type: 'workshop',
    description_en: 'Teaching digital skills to underserved communities.',
    description_fr: 'Enseigner les compétences numériques aux communautés mal desservies.',
    year: '2024',
    featured_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    ],
    video_url: 'https://www.youtube.com/embed/example2',
    impact_text: '1000+ people trained in digital skills',
  },
  {
    id: '3',
    name_en: 'Ramadan Code Challenge',
    name_fr: 'Défi Code Ramadan',
    type: 'competition',
    description_en: 'A month-long coding competition during Ramadan with amazing prizes.',
    description_fr: 'Un concours de codage d\'un mois pendant le Ramadan avec des prix incroyables.',
    year: '2024',
    featured_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97? w=600&h=400&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    ],
    video_url: 'https://www.youtube.com/embed/example3',
    impact_text: '200+ developers participated',
  },
];

const MOCK_PARTNERS = [
  {
    id: '1',
    name:  'Google',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo. svg.png',
    website: 'https://google.com',
    type: 'sponsor',
    description_en: 'Leading tech company supporting innovation',
    description_fr: 'Entreprise technologique de premier plan soutenant l\'innovation',
  },
  {
    id:  '2',
    name: 'Microsoft',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    website: 'https://microsoft.com',
    type: 'sponsor',
    description_en: 'Software company committed to community development',
    description_fr: 'Entreprise logicielle engagée dans le développement communautaire',
  },
  {
    id: '3',
    name: 'Local Bank',
    logo_url: 'https://via.placeholder.com/150? text=Bank',
    website: 'https://bank.example.com',
    type: 'partner',
    description_en: 'Financial partner supporting youth initiatives',
    description_fr:  'Partenaire financier soutenant les initiatives pour les jeunes',
  },
];

const MOCK_TESTIMONIALS = [
  {
    id: '1',
    author_name: 'Ahmed Hassan',
    role: 'Participant',
    quote_en: 'This event completely changed my perspective on entrepreneurship.  The insights from industry leaders were invaluable! ',
    quote_fr: 'Cet événement a complètement changé ma perspective sur l\'entrepreneuriat. Les idées des leaders de l\'industrie étaient inestimables!',
    photo_url: 'https://i.pravatar.cc/150? img=1',
    proof_screenshot: 'https://via.placeholder.com/300x200?text=Certificate',
    event_context: 'Tech Conference 2025',
    date: '2025-01-15',
  },
  {
    id: '2',
    author_name: 'Fatima El-Mansouri',
    role: 'Sponsor',
    quote_en: 'Amazing organization and tremendous impact on the community. We\'re proud to partner with them!',
    quote_fr: 'Organisation incroyable et impact énorme sur la communauté.  Nous sommes fiers de nous associer à eux!',
    photo_url: 'https://i.pravatar.cc/150?img=2',
    proof_screenshot: 'https://via.placeholder.com/300x200?text=Sponsorship',
    event_context: 'Startup Pitch Night',
    date: '2025-02-10',
  },
  {
    id: '3',
    author_name: 'Mohammed Zahra',
    role: 'Administrator',
    quote_en: 'The team\'s dedication and professionalism are exceptional. They truly care about their community.',
    quote_fr: 'Le dévouement et le professionnalisme de l\'équipe sont exceptionnels. Ils se soucient vraiment de leur communauté.',
    photo_url: 'https://i.pravatar.cc/150?img=3',
    proof_screenshot: 'https://via.placeholder.com/300x200?text=Admin',
    event_context: 'Web Development Workshop',
    date: '2025-03-05',
  },
];

const MOCK_QA = [
  {
    id:  '1',
    question: 'How do I register for events?',
    category: 'General',
    status: 'answered',
    date_submitted: '2024-12-01',
    answer: 'You can register directly on each event page using the registration button. Simply fill in your information and you\'ll receive a confirmation email.',
    date_answered: '2024-12-02',
    upvotes: 15,
    moderation_notes:  'Common question - keep pinned',
  },
  {
    id: '2',
    question: 'What are the project requirements?',
    category: 'Projects',
    status: 'answered',
    date_submitted: '2024-12-03',
    answer: 'Projects must have clear goals, a defined timeline, measurable expected impact, and a dedicated team to execute.',
    date_answered: '2024-12-04',
    upvotes: 8,
    moderation_notes:  'FAQ item',
  },
  {
    id: '3',
    question: 'Can I join as a volunteer?',
    category: 'General',
    status: 'answered',
    date_submitted: '2024-12-05',
    answer: 'Absolutely! We welcome volunteers.  Please fill out the volunteer form on our website and we\'ll be in touch soon.',
    date_answered: '2024-12-06',
    upvotes: 12,
    moderation_notes: '',
  },
  {
    id: '4',
    question: 'How do I become a sponsor?',
    category:  'Partnership',
    status: 'answered',
    date_submitted: '2024-12-07',
    answer: 'Contact us at partnerships@yih.org with details about your organization and sponsorship goals.  We\'ll discuss collaboration opportunities.',
    date_answered: '2024-12-08',
    upvotes: 6,
    moderation_notes:  '',
  },
  {
    id: '5',
    question: 'What is the attendance fee?',
    category: 'Events',
    status: 'answered',
    date_submitted: '2024-12-09',
    answer: 'Most of our events are FREE!  Some specialized workshops may have a small fee to cover materials.',
    date_answered: '2024-12-10',
    upvotes: 20,
    moderation_notes:  'Very popular question',
  },
];

/**
 * Generic function to fetch data from Google Sheets
 * @param {string} range - Sheet range (e.g., "Events!A: I")
 * @returns {Promise<Array>} - Array of rows
 */
export const getSheetData = async (range) => {
  try {
    if (!API_KEY || !SHEET_ID) {
      console.warn(`⚠️ Google Sheets not configured. Using mock data for:  ${range}`);
      return null;
    }

    const response = await axios.get(
      `${BASE_URL}/${SHEET_ID}/values/${range}? key=${API_KEY}`
    );

    console.log(`✅ Fetched real data from:  ${range}`);
    return response.data. values || [];
  } catch (error) {
    console.warn(`⚠️ Error fetching ${range} from Google Sheets.  Using mock data: `, error.message);
    return null;
  }
};

// ============ SITE CONTENT ============
export const getSiteContent = async () => {
  const data = await getSheetData('SITE_CONTENT! A:B');
  
  if (!data || data.length === 0) {
    console.log('📋 Using mock SITE_CONTENT');
    return MOCK_SITE_CONTENT;
  }
  
  return {
    club_name: data[1]?.[1] || MOCK_SITE_CONTENT. club_name,
    club_phone: data[2]?.[1] || MOCK_SITE_CONTENT.club_phone,
    club_email: data[3]?.[1] || MOCK_SITE_CONTENT. club_email,
    club_location: data[4]?.[1] || MOCK_SITE_CONTENT.club_location,
    maps_url: data[5]?.[1] || MOCK_SITE_CONTENT. maps_url,
    discord_url: data[6]?.[1] || MOCK_SITE_CONTENT.discord_url,
    instagram_url: data[7]?.[1] || MOCK_SITE_CONTENT. instagram_url,
    tiktok_url: data[8]?.[1] || MOCK_SITE_CONTENT.tiktok_url,
    linkedin_url: data[9]?.[1] || MOCK_SITE_CONTENT.linkedin_url,
    founder_year: data[10]?.[1] || MOCK_SITE_CONTENT. founder_year,
  };
};

// ============ STATS ============
export const getStats = async () => {
  const data = await getSheetData('STATS!A:B');
  
  if (!data || data. length < 2) {
    console.log('📊 Using mock STATS');
    return MOCK_STATS;
  }

  return {
    alumni_members: parseInt(data[1]?.[1]) || MOCK_STATS.alumni_members,
    total_events: parseInt(data[2]?.[1]) || MOCK_STATS.total_events,
    total_projects: parseInt(data[3]?.[1]) || MOCK_STATS.total_projects,
    total_partners: parseInt(data[4]?.[1]) || MOCK_STATS.total_partners,
  };
};

// ============ EVENTS ============
export const getEvents = async () => {
  const data = await getSheetData('EVENTS!A:L');
  
  if (!data || data.length < 2) {
    console.log('📅 Using mock EVENTS');
    return MOCK_EVENTS;
  }

  return data. slice(1).map(row => ({
    id: row[0],
    title_en: row[1] || '',
    title_fr:  row[2] || '',
    date: row[3] || '',
    time: row[4] || '',
    description_en:  row[5] || '',
    description_fr: row[6] || '',
    location: row[7] || '',
    capacity:  row[8] || '',
    status: row[9]?. toLowerCase() === 'open' ? 'open' : 'closed',
    sponsors: row[10] ?  row[10].split(',').map(s => s.trim()) : [],
    image_url: row[11] || '',
  }));
};

// ============ PROJECTS ============
export const getProjects = async () => {
  const data = await getSheetData('PROJECTS!A: K');
  
  if (!data || data.length < 2) {
    console.log('🚀 Using mock PROJECTS');
    return MOCK_PROJECTS;
  }

  return data. slice(1).map(row => ({
    id: row[0],
    name_en: row[1] || '',
    name_fr: row[2] || '',
    type: row[3] || '',
    description_en: row[4] || '',
    description_fr: row[5] || '',
    year: row[6] || '',
    featured_image: row[7] || '',
    gallery_images: row[8] ? row[8]. split(',').map(s => s.trim()) : [],
    video_url: row[9] || '',
    impact_text: row[10] || '',
  }));
};

// ============ ALUMNI ============
export const getAlumni = async () => {
  const data = await getSheetData('ALUMNI!A:H');
  
  if (!data || data.length < 2) {
    console.log('👥 Using mock ALUMNI (empty - add to sheets)');
    return [];
  }

  return data. slice(1).map(row => ({
    id: row[0],
    name:  row[1] || '',
    role: row[2] || '',
    years_active: row[3] || '',
    bio_en: row[4] || '',
    bio_fr: row[5] || '',
    now_doing: row[6] || '',
    linkedin_url: row[7] || '',
    photo_url: row[8] || '',
  }));
};

// ============ PARTNERS/SPONSORS ============
export const getPartners = async () => {
  const data = await getSheetData('PARTNERS!A:G');
  
  if (!data || data.length < 2) {
    console.log('🤝 Using mock PARTNERS');
    return MOCK_PARTNERS;
  }

  return data.slice(1).map(row => ({
    id: row[0],
    name: row[1] || '',
    logo_url: row[2] || '',
    website: row[3] || '',
    type: row[4] || '',
    description_en: row[5] || '',
    description_fr: row[6] || '',
  }));
};

// ============ TESTIMONIALS ============
export const getTestimonials = async () => {
  const data = await getSheetData('TESTIMONIALS!A: I');
  
  if (!data || data.length < 2) {
    console.log('⭐ Using mock TESTIMONIALS');
    return MOCK_TESTIMONIALS;
  }

  return data.slice(1).map(row => ({
    id:  row[0],
    author_name: row[1] || '',
    role: row[2] || '',
    quote_en:  row[3] || '',
    quote_fr: row[4] || '',
    photo_url:  row[5] || '',
    proof_screenshot: row[6] || '',
    event_context: row[7] || '',
    date: row[8] || '',
  }));
};

// ============ Q&A BOARD ============
export const getQABoard = async () => {
  const data = await getSheetData('QA_BOARD!A:I');
  
  if (!data || data.length < 2) {
    console.log('❓ Using mock QA_BOARD');
    return MOCK_QA;
  }

  return data.slice(1).map(row => ({
    id:  row[0],
    question:  row[1] || '',
    category: row[2] || '',
    status: row[3] || 'pending',
    date_submitted: row[4] || '',
    answer:  row[5] || '',
    date_answered: row[6] || '',
    upvotes:  parseInt(row[7]) || 0,
    moderation_notes: row[8] || '',
  }));
};

// ============ CONTACT SUBMISSIONS ============
export const submitContact = async (name, email, subject, message) => {
  try {
    // TODO: Connect to backend API to save submission to CONTACT_SUBMISSIONS sheet
    // For now, just return success
    return {
      success: true,
      message: 'Thank you for your submission! We\'ll get back to you soon.',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
      error: error.message,
    };
  }
};