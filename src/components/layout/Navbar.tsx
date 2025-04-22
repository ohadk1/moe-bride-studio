
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
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo small={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 ml-6">
            <li>
              <Link to="/" className="text-foreground hover:text-brand-turquoise font-medium transition-colors">
                בית
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-foreground hover:text-brand-turquoise font-medium transition-colors">
                שירותים
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-foreground hover:text-brand-turquoise font-medium transition-colors">
                גלריה
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground hover:text-brand-turquoise font-medium transition-colors">
                צור קשר
              </Link>
            </li>
          </ul>
          <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90 flex items-center gap-2 text-white">
            <a href="tel:+9721234567">
              <Phone size={16} />
              <span>התקשר עכשיו</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        className={`md:hidden absolute top-full right-0 left-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 text-foreground hover:text-brand-turquoise font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                בית
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 text-foreground hover:text-brand-turquoise font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                שירותים
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 text-foreground hover:text-brand-turquoise font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                גלריה
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 text-foreground hover:text-brand-turquoise font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                צור קשר
              </Link>
            </li>
            <li>
              <Button asChild className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 flex items-center justify-center gap-2">
                <a href="tel:+9721234567">
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
