import { useState, useEffect } from 'react';
import { getSiteContent } from '../services/googleSheetsAPI';

export const useSiteContent = () => {
  const [siteContent, setSiteContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getSiteContent();
        setSiteContent(data);
      } catch (error) {
        console.error('Error fetching site content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { siteContent, loading };
};