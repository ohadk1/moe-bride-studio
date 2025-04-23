import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const bgClass = isHome
    ? isScrolled
      ? 'bg-white shadow-md'
      : 'bg-transparent'
    : 'bg-white shadow-md';

  const textClass = isHome
    ? isScrolled
      ? 'text-foreground'
      : 'text-white'
    : 'text-foreground';

  const logoSrc = isHome && !isScrolled ? '/logo-light.webp' : '/logo-dark.webp';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="M.O.E bride studio" className="h-10 md:h-12" />
        </Link>
        <nav className={`hidden md:flex space-x-6 ${textClass}`}>
          <Link to="/" className="hover:text-brand-turquoise transition">בית</Link>
          <Link to="/services" className="hover:text-brand-turquoise transition">שירותים</Link>
          <Link to="/gallery" className="hover:text-brand-turquoise transition">גלריה</Link>
          <Link to="/contact" className="hover:text-brand-turquoise transition">צור קשר</Link>
        </nav>
        <Button asChild className="bg-brand-turquoise text-white hidden md:flex">
          <a href="tel:+9721234567" className="flex items-center gap-2">
            <Phone size={16} />
            התקשר עכשיו
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
