import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useSiteContent } from '../../hooks/useSiteContent';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

export const Footer = () => {
  const { t } = useLanguage();
  const { siteContent } = useSiteContent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">{siteContent?. club_name || 'Organization'}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t. footerAbout}
            </p>
            <p className="text-gray-400 text-xs mt-4">Founded in {siteContent?.founder_year}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">{t.footerQuickLinks}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">{t.navAbout}</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-primary transition-colors">{t.navEvents}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">{t.navProjects}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">{t.navContact}</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">{t. footerFollowUs}</h4>
            <div className="flex gap-4 mb-6">
              {siteContent?.discord_url && (
                <a 
                  href={siteContent. discord_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-primary transition-colors text-2xl"
                  title="Discord"
                >
                  <FaDiscord />
                </a>
              )}
              {siteContent?.instagram_url && (
                <a 
                  href={siteContent.instagram_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-primary transition-colors text-2xl"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
              {siteContent?.tiktok_url && (
                <a 
                  href={siteContent.tiktok_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-primary transition-colors text-2xl"
                  title="TikTok"
                >
                  <FaTwitter /> {/* Or use a TikTok icon if available */}
                </a>
              )}
              {siteContent?.linkedin_url && (
                <a 
                  href={siteContent.linkedin_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-primary transition-colors text-2xl"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
            <p className="text-gray-400 text-sm">
              📧 {siteContent?.club_email}<br/>
              📞 {siteContent?.club_phone}
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} {siteContent?.club_name}. {t.footerAllRights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{t.footerTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};