import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react"; 
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détecte le scroll pour changer le style de la barre
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#portfolio" }, // Portfolio gère les events
    { name: "Alumni", href: "/alumni" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-5",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-4" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        
        {/* LOGO : Utilise ta font-display */}
        <a href="/" className="font-display text-3xl md:text-4xl tracking-tighter hover:text-primary transition-colors">
          PROJECT<span className="text-primary">INITIATIVE</span>
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-poppins text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex border-primary/20 hover:border-primary">
            Join Us
          </Button>
          
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={cn(
        "fixed inset-0 bg-background z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-5xl uppercase hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <Button className="mt-8" onClick={() => setMobileMenuOpen(false)}>
          Contact Now
        </Button>
      </div>
    </nav>
  );
};