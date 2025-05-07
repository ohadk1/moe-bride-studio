
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowUp, Mail, Clock, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from 'react';

const Footer = () => {
  const isMobile = useIsMobile();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show scroll button only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-cream/50 pt-12 md:pt-16 pb-8" role="contentinfo" aria-label="כותרת תחתונה">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          
          {/* לוגו + תיאור */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/logo-blue.webp" 
              alt="לוגו M.O.E" 
              width={160} 
              height={60} 
              className="h-12 w-auto md:h-16 transition-all duration-300"
            />
            <p className="text-foreground/80 mt-4 text-sm max-w-xs mx-auto md:mx-0 text-center md:text-right">
              סטודיו M.O.E מתמחה בעיצוב והתאמה אישית של שמלות כלה וערב, איפור ותסרוקות לכל אירוע מיוחד.
            </p>
          </div>

          {/* קישורים מהירים */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-gold/30 pb-2 text-center md:text-right w-full">קישורים מהירים</h3>
            <nav aria-label="קישורים מהירים" className="text-center md:text-right w-full">
              <ul className="space-y-2">
                <li><Link to="/" className="text-foreground/80 hover:text-brand-turquoise transition-colors">בית</Link></li>
                <li><Link to="/services" className="text-foreground/80 hover:text-brand-turquoise transition-colors">שירותים</Link></li>
                <li><Link to="/gallery" className="text-foreground/80 hover:text-brand-turquoise transition-colors">גלריה</Link></li>
                <li><Link to="/contact" className="text-foreground/80 hover:text-brand-turquoise transition-colors">צור קשר</Link></li>
              </ul>
            </nav>
          </div>

          {/* פרטי התקשרות */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-gold/30 pb-2 text-center md:text-right w-full">פרטי התקשרות</h3>
            <div className="space-y-3 text-center md:text-right w-full">
              <div className="flex items-center gap-2 text-foreground/80 justify-center md:justify-start">
                <Phone size={16} className="text-brand-turquoise" />
                <a href="tel:053-2484379" className="hover:text-brand-turquoise transition-colors">053-2484379</a>
                <span className="mx-1">/</span>
                <a href="tel:050-9608031" className="hover:text-brand-turquoise transition-colors">050-9608031</a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 justify-center md:justify-start">
                <Mail size={16} className="text-brand-turquoise" />
                <a href="mailto:Moran.beauty90@gmail.com" className="hover:text-brand-turquoise transition-colors">Moran.beauty90@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 justify-center md:justify-start">
                <MapPin size={16} className="text-brand-turquoise" />
                <span>דימונה</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80 justify-center md:justify-start">
                <Clock size={16} className="text-brand-turquoise" />
                <span>א'-ה': 9:00-19:00, שישי-שבת: סגור</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90">
                <a href="tel:053-2484379" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>התקשר עכשיו</span>
                </a>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>וואטסאפ</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* שורה תחתונה */}
        <div className="border-t border-brand-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} M.O.E bride studio. כל הזכויות שמורות.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 text-sm text-foreground/70 items-center justify-center">
            <Link to="/privacy" className="hover:text-brand-turquoise transition-colors underline">מדיניות פרטיות</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-brand-turquoise transition-colors underline">תנאי שימוש</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/accessibility" className="hover:text-brand-turquoise transition-colors underline">נגישות</Link>
          </div>
        </div>

        {/* מידע משפטי */}
        <div className="mt-4 text-xs text-foreground/60 text-center md:text-right" aria-label="מידע נגישות משפטי">
          <span>
            נגישות: האתר תוכנן לעמוד בתקן WCAG 2.1 AA, כולל תמיכה בקורא מסך, ניווט באמצעות מקלדת, אפשרות הגדלת טקסט, שינוי ניגודיות, הפחתת הנפשה, ותפריט נגישות.
          </span>
          <br className="hidden md:block" />
          <span className="block mt-1 md:mt-0">
            לשאלות או בקשות נגישות נוספות, ניתן לפנות למייל Moran.beauty90@gmail.com.
          </span>
        </div>
      </div>

      {/* Mobile floating action buttons - Repositioned to bottom-left corner */}
      {isMobile && (
        <div className="fixed bottom-6 left-4 flex flex-col gap-3 z-50">
          {/* "Book Now" button removed as requested */}
          
          {/* WhatsApp */}
          <Button
            asChild
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-14 w-14"
          >
            <a href="https://wa.me/972532484379" target="_blank" rel="noopener noreferrer" aria-label="שלח הודעת וואטסאפ">
              <MessageCircle size={24} />
            </a>
          </Button>
          
          {/* Phone */}
          <Button
            asChild
            size="icon"
            className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white rounded-full shadow-lg h-14 w-14"
          >
            <a href="tel:053-2484379" aria-label="התקשר עכשיו">
              <Phone size={24} />
            </a>
          </Button>
        </div>
      )}

      {/* חזור למעלה - adjusted position to avoid overlap with mobile buttons */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-24 md:bottom-6 right-6 bg-brand-gold/90 hover:bg-brand-gold text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline focus:outline-brand-turquoise animate-fade-in ${isMobile ? 'z-40' : 'z-30'}`}
          aria-label="חזרה למעלה"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
