
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus in mobile menu if open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const focusableSelectors = 'a,button';
    const menu = document.getElementById('mobile-nav-menu');
    if (!menu) return;
    const focusableEls = menu.querySelectorAll(focusableSelectors);
    if (!focusableEls.length) return;
    const firstEl = focusableEls[0] as HTMLElement;
    const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    menu.addEventListener('keydown', handleKeyDown);
    firstEl.focus();
    return () => menu.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only absolute right-4 top-2 z-50 bg-brand-gold text-white px-2 py-1 rounded"
        tabIndex={0}
      >
        דלג לתוכן ראשי
      </a>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" tabIndex={0} aria-label="לעמוד הבית">
          <Logo small={isScrolled} />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="ניווט ראשי">
          <ul className="flex items-center space-x-6 ml-6">
            <li>
              <Link 
                to="/" 
                className="text-foreground hover:text-brand-turquoise font-medium transition-colors focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2"
                tabIndex={0}
              >
                בית
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-foreground hover:text-brand-turquoise font-medium transition-colors focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2" tabIndex={0}>
                שירותים
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-foreground hover:text-brand-turquoise font-medium transition-colors focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2" tabIndex={0}>
                גלריה
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground hover:text-brand-turquoise font-medium transition-colors focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2" tabIndex={0}>
                צור קשר
              </Link>
            </li>
          </ul>
          <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90 flex items-center gap-2 text-white focus:outline focus:outline-brand-gold focus:outline-2" aria-label="התקשר עכשיו">
            <a href="tel:+9721234567" tabIndex={0}>
              <Phone size={16} />
              <span>התקשר עכשיו</span>
            </a>
          </Button>
        </nav>
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-foreground p-2 focus:outline focus:outline-brand-gold focus:outline-2 rounded"
          aria-label="פתח תפריט ניווט"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div 
        id="mobile-nav-menu"
        className={`md:hidden absolute top-full right-0 left-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
        aria-label="תפריט נייד"
        tabIndex={-1}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 text-foreground hover:text-brand-turquoise font-medium focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2"
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}>
                בית
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 text-foreground hover:text-brand-turquoise font-medium focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2"
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}>
                שירותים
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 text-foreground hover:text-brand-turquoise font-medium focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2"
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}>
                גלריה
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 text-foreground hover:text-brand-turquoise font-medium focus:outline focus:outline-brand-gold focus:outline-2 rounded px-2"
                tabIndex={0}
                onClick={() => setMobileMenuOpen(false)}>
                צור קשר
              </Link>
            </li>
            <li>
              <Button asChild className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 flex items-center justify-center gap-2 focus:outline focus:outline-brand-gold focus:outline-2" aria-label="התקשר עכשיו">
                <a href="tel:+9721234567" tabIndex={0}>
                  <Phone size={16} />
                  <span>התקשר עכשיו</span>
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
