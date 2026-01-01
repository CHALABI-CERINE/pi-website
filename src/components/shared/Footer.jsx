import React from 'react';
import { Instagram, Linkedin, MessageSquare, Music2, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '../ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Layout Principal: 3 colonnes sur Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
         {/* Column 1 - Club Info */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <img 
    src="https://lh3.googleusercontent.com/d/1DQCfO0RmKNbSTb5toyzH4hDwtulNkD-o" 
    alt="Project Initiative Logo" 
    className="h-20 w-auto mb-6 object-contain"
  />
  <h3 className="font-display text-4xl uppercase tracking-tight mb-2">Project Initiative</h3>
  <p className="font-poppins text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
    Driving innovation at USTHB
  </p>
  <p className="font-montserrat text-xs text-background/40">
    Founded year: 2016
  </p>
</div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-poppins text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4 font-poppins text-[10px] font-bold uppercase tracking-widest text-background/60">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="/alumni" className="hover:text-primary transition-colors">Alumni</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact & Follow */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="font-poppins text-xs font-bold uppercase tracking-[0.3em] mb-8 text-primary">Connect</h4>
            <div className="space-y-4 w-full">
              <a href="tel:+213123456789" className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="font-montserrat text-sm text-background/70 group-hover:text-white transition-colors">+213 (0) 5XX XX XX XX</span>
              </a>
              <a href="mailto:contact@pi-usthb.com" className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span className="font-montserrat text-sm text-background/70 group-hover:text-white transition-colors">contact@pi-usthb.com</span>
              </a>
              <a href="https://maps.app.goo.gl/usthb" target="_blank" className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="font-montserrat text-sm text-background/70 group-hover:text-white transition-colors">USTHB, Bab Ezzouar, Algiers</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:text-foreground transition-all"><MessageSquare size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:text-foreground transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:text-foreground transition-all"><Music2 size={16} /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-primary hover:text-foreground transition-all"><Linkedin size={16} /></a>
            </div>
          </div>
        </div>

        {/* Bottom of Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 font-poppins text-[9px] uppercase tracking-widest text-background/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Code of Conduct</a>
          </div>
          
          <div className="text-center space-y-2">
            <p className="font-poppins text-[9px] uppercase tracking-[0.3em] text-background/20">
              © {currentYear} Project Initiative. All rights reserved.
            </p>
            <p className="font-poppins text-[10px] uppercase tracking-widest text-background/60 flex items-center justify-center gap-2">
              Made with <Heart size={12} className="text-primary fill-primary" /> by Project Initiative Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};