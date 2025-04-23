import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const showScrolledStyle = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showScrolledStyle ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={showScrolledStyle ? '/logo-dark.webp' : '/logo-light.webp'}
            alt="M.O.E bride studio"
            className="h-10 md:h-12 transition-all"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            to="/"
            className={`transition-colors font-medium ${
              showScrolledStyle ? 'text-foreground' : 'text-white'
            }`}
          >
            בית
          </Link>
          <Link
            to="/services"
            className={`transition-colors font-medium ${
              showScrolledStyle ? 'text-foreground' : 'text-white'
            }`}
          >
            שירותים
          </Link>
          <Link
            to="/gallery"
            className={`transition-colors font-medium ${
              showScrolledStyle ? 'text-foreground' : 'text-white'
            }`}
          >
            גלריה
          </Link>
          <Link
            to="/contact"
            className={`transition-colors font-medium ${
              showScrolledStyle ? 'text-foreground' : 'text-white'
            }`}
          >
            צור קשר
          </Link>
        </nav>

        {/* Call to Action */}
        <Button
          asChild
          className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white text-sm md:text-base px-5 py-2 ml-4"
        >
          <a href="tel:+9721234567" className="flex items-center gap-2">
            <Phone size={16} />
            <span>התקשר עכשיו</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;