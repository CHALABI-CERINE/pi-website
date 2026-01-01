import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  CheckCircle,
  Loader2,
  MessageSquare,
  Users,
  Handshake,
  HelpCircle
} from 'lucide-react';

// TikTok Icon
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3. 45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88. 13V9.4a6.84 6.84 0 00-1-. 05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-. 1z"/>
  </svg>
);

// Subject options
const subjectOptions = [
  { value: 'collaboration', label: 'Collaboration', icon: Users },
  { value:  'partnership', label: 'Devenir Partenaire', icon: Handshake },
  { value:  'question', label: 'Question Générale', icon: HelpCircle },
  { value: 'other', label: 'Autre', icon: MessageSquare },
];

export const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - Replace with actual Google Sheets API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject:  'collaboration', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'USTHB, Chem. d\'Alia, Bab Ezzouar',
      href: 'https://maps.google.com/? q=P56G+PH7,+Chem.+d\'Alia,+Bab+Ezzouar'
    },
    {
      icon:  Mail,
      label: 'Email',
      value: 'projectinitiativeclub@gmail.com',
      href: 'mailto:projectinitiativeclub@gmail.com'
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/project.initiative.usthb/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/projectinitiativeclub/', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon:  Linkedin, href: 'https://www.linkedin.com/company/project-initiative-club/', label:  'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@projectinitiative.usthb', label: 'TikTok', color: 'hover:bg-black', isCustom: true },
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ?  { opacity: 1, y:  0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 mb-6"
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
              <span 
                className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Contact
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Construisons <br />
              <span className="text-[#FF6B00]">Ensemble. </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/60 mb-10 max-w-md leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Que vous souhaitiez proposer une collaboration, devenir partenaire, 
              ou simplement poser une question, nous sommes à un message de vous.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#FF6B00]/20 flex items-center justify-center transition-colors">
                    <item.icon className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <span 
                      className="block text-xs text-white/40 mb-0.5"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {item.label}
                    </span>
                    <span 
                      className="text-sm text-white/80 group-hover:text-white transition-colors"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {item.value}
                    </span>
                  </div>
                </motion. a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p 
                className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Suivez-nous
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion. a
                    key={social. label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white ${social.color} transition-all`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.isCustom ? (
                      <social.icon className="w-5 h-5" />
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion. div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Success Overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity:  1 }}
                  className="absolute inset-0 rounded-3xl bg-[#0f172a]/95 backdrop-blur-sm flex flex-col items-center justify-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale:  1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h4 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Message Envoyé ! 
                  </h4>
                  <p className="text-white/60 text-sm">
                    Nous vous répondrons bientôt. 
                  </p>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all text-sm"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData. email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all text-sm"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Sujet
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {subjectOptions.map((option) => {
                      const Icon = option. icon;
                      const isSelected = formData.subject === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: option.value })}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-sm ${
                            isSelected
                              ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-[#FF6B00]'
                              : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                          }`}
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-xs font-semibold">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2"
                    style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-all resize-none text-sm"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  />
                </div>

                {/* Submit Button */}
                <motion. button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF6B00] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};