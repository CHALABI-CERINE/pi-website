import React from 'react';
import { Button } from '../common/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-title text-5xl md:text-7xl uppercase mb-8 leading-none">
              Let's build <br /> <span className="text-accent">together.</span>
            </h2>
            <p className="font-body text-white/60 mb-12 max-w-md">
              Whether you want to propose a collaboration, become a partner, or just ask a question, we're one message away.
            </p>
            <div className="space-y-4">
              <p className="font-text text-xs tracking-widest uppercase">📍 USTHB, Bab Ezzouar, Algiers</p>
              <p className="font-text text-xs tracking-widest uppercase">📧 contact@project-initiative.com</p>
            </div>
          </div>

          <form className="space-y-6 bg-white/5 p-10 rounded-sm backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="NAME" className="bg-transparent border-b border-white/20 py-4 font-text text-[10px] focus:border-accent outline-none" />
              <input type="email" placeholder="EMAIL" className="bg-transparent border-b border-white/20 py-4 font-text text-[10px] focus:border-accent outline-none" />
            </div>
            <select className="w-full bg-transparent border-b border-white/20 py-4 font-text text-[10px] focus:border-accent outline-none text-white/40">
              <option>COLLABORATION</option>
              <option>BECOME A PARTNER</option>
              <option>GENERAL INQUIRY</option>
            </select>
            <textarea placeholder="MESSAGE" rows="4" className="w-full bg-transparent border-b border-white/20 py-4 font-text text-[10px] focus:border-accent outline-none"></textarea>
            <Button variant="primary" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};