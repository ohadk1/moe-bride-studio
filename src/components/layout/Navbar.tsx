import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showLightStyle = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        showLightStyle ? 'bg-transparent text-white' : 'bg-white text-foreground shadow-md'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center" tabIndex={0} aria-label="לעמוד הבית">
          <img
            src={showLightStyle ? '/logo-light.webp' : '/logo-blue.webp'}
            alt="M.O.E bride studio"
            className="w-36 md:w-40 h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8" aria-label="ניווט ראשי">
          <ul className="flex items-center space-x-6 ml-6">
            <li>
              <Link
                to="/"
                className="hover:text-brand-turquoise font-medium transition-colors px-2"
              >
                בית
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-brand-turquoise font-medium transition-colors px-2"
              >
                שירותים
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-brand-turquoise font-medium transition-colors px-2"
              >
                גלריה
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-brand-turquoise font-medium transition-colors px-2"
              >
                צור קשר
              </Link>
            </li>
          </ul>
          <Button
            asChild
            className="bg-brand-turquoise hover:bg-brand-turquoise/90 flex items-center gap-2 text-white"
            aria-label="התקשר עכשיו"
          >
            <a href="tel:+9721234567">
              <Phone size={16} />
              <span>התקשר עכשיו</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
