
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Improved badge hiding functionality
    const hideBadgeFromUrl = new URLSearchParams(window.location.search).get('forceHideBadge') === 'true';
    const shouldHideBadge = hideBadgeFromUrl || localStorage.getItem('hideLovableBadge') === 'true';
    
    if (shouldHideBadge) {
      // Store setting in localStorage to persist across page loads
      localStorage.setItem('hideLovableBadge', 'true');
      
      // Add style to hide badge immediately
      const style = document.createElement('style');
      style.id = 'badge-hider-style';
      style.innerHTML = `
        .badge-lovable, .lovable-badge, 
        [class*="badge-lovable"], [class*="lovable-badge"],
        div[class*="badge-lovable"], div[class*="lovable-badge"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          position: absolute !important;
          pointer-events: none !important;
          z-index: -9999 !important;
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `;
      document.head.appendChild(style);
      
      // More aggressive approach - remove badges as they appear
      const removeExistingBadges = () => {
        const badgeSelectors = [
          '.badge-lovable', 
          '.lovable-badge', 
          '[class*="badge-lovable"]', 
          '[class*="lovable-badge"]',
          'div[class*="badge-lovable"]', 
          'div[class*="lovable-badge"]'
        ];
        
        badgeSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            if (element instanceof HTMLElement) {
              element.style.display = 'none';
              element.style.visibility = 'hidden';
              element.style.opacity = '0';
              element.style.width = '0';
              element.style.height = '0';
              // Try to remove it completely if possible
              if (element.parentNode) {
                try {
                  element.parentNode.removeChild(element);
                } catch (e) {
                  console.log('Could not remove badge element');
                }
              }
            }
          });
        });
      };
      
      // Run immediately and then observe
      removeExistingBadges();
      
      // Set up an observer to catch any dynamically added badges
      const observer = new MutationObserver((mutations) => {
        removeExistingBadges();
      });
      
      // Observe the entire document for any changes
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      
      // Run the badge removal periodically just to be safe
      const intervalId = setInterval(removeExistingBadges, 1000);
      
      // Clean up function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
        clearInterval(intervalId);
      };
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          <Logo isScrolled={showScrolledStyle} />
        </Link>

        {/* Mobile Navigation */}
        <MobileNav isScrolled={showScrolledStyle} />

        {/* Desktop Navigation */}
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

        {/* Call to Action - Desktop Only */}
        <Button
          asChild
          className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white text-sm md:text-base px-5 py-2 hidden md:flex items-center gap-2"
        >
          <a href="tel:+9721234567">
            <Phone size={16} />
            <span>התקשר עכשיו</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
