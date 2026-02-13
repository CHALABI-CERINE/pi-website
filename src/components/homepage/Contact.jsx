import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  CheckCircle,
  Loader2,
  Users,
  Handshake,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

const subjectOptions = [
  { value: 'collaboration', label: 'Collaboration', icon: Users },
  { value: 'partnership', label: 'Partenariat', icon: Handshake },
  { value: 'question', label: 'Question', icon: HelpCircle },
  { value: 'other', label: 'Autre', icon: MessageSquare },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'collaboration',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'collaboration', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left */}
          <div>
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 mb-4 block"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Contact
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-[1.2] mb-6"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Une idée ? Un projet ? Écrivez-nous.
            </h2>
            <p
              className="text-sm text-white/30 leading-[1.8] mb-10 max-w-md"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Collaboration, partenariat ou simple question — 
              on est à un message de vous.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:projectinitiativeclub@gmail.com"
                className="block text-[13px] text-white/25 hover:text-white/60 transition-colors"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                projectinitiativeclub@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=USTHB+Bab+Ezzouar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[13px] text-white/25 hover:text-white/60 transition-colors"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                USTHB, Bab Ezzouar — Alger
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            {/* Success */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[#0f172a]/95 flex flex-col items-center justify-center z-10 rounded-2xl"
              >
                <CheckCircle className="w-10 h-10 text-white/20 mb-4" />
                <span
                  className="text-sm font-semibold text-white/50"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Message envoyé. On revient vers vous.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-2"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/15 focus:border-white/25 outline-none transition-colors text-sm"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/15 focus:border-white/25 outline-none transition-colors text-sm"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-2"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Sujet
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {subjectOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = formData.subject === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: option.value })}
                        className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all text-sm ${
                          isSelected
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-white/[0.02] border-white/8 text-white/30 hover:border-white/15'
                        }`}
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-semibold">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-2"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/15 focus:border-white/25 outline-none transition-colors resize-none text-sm"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0f172a] font-bold text-[12px] uppercase tracking-[0.15em] rounded-xl hover:bg-white/90 disabled:opacity-30 transition-all"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};