import { useState, useEffect } from 'react';
import { 
  fetchEvents, 
  fetchProjects, 
  fetchTestimonials, 
  fetchFAQ, 
  fetchPartners,
  MOCK_DATA 
} from '../services/googleSheetsAPI';

/**
 * Generic hook for fetching Google Sheets data
 */
const useSheetData = (fetchFn, mockData, sheetName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchFn();
        
        // Use mock data if fetch returns empty (Sheet not configured)
        if (result.length === 0) {
          console.warn(`${sheetName}:  Using mock data (Google Sheet not configured)`);
          setData(mockData);
        } else {
          setData(result);
        }
      } catch (err) {
        console.error(`${sheetName} fetch error:`, err);
        setError(err);
        setData(mockData); // Fallback to mock
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error, refetch: () => loadData() };
};

// ============ SPECIFIC HOOKS ============

export const useEvents = () => useSheetData(fetchEvents, MOCK_DATA.events, 'Events');
export const useProjects = () => useSheetData(fetchProjects, MOCK_DATA.projects, 'Projects');
export const useTestimonials = () => useSheetData(fetchTestimonials, MOCK_DATA.testimonials, 'Testimonials');
export const useFAQ = () => useSheetData(fetchFAQ, MOCK_DATA. faq, 'FAQ');
export const usePartners = () => useSheetData(fetchPartners, MOCK_DATA. partners, 'Partners');