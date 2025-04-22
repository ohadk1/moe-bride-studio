
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowUp, Mail, Clock, MapPin } from "lucide-react";
import Logo from '../ui/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-cream/50 pt-16 pb-8" role="contentinfo" aria-label="כותרת תחתונה">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="text-foreground/80 mt-4 text-sm">
              סטודיו M.O.E מתמחה בעיצוב והתאמה אישית של שמלות כלה וערב, איפור ותסרוקות לכל אירוע מיוחד.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-gold/30 pb-2">קישורים מהירים</h3>
            <nav aria-label="קישורים מהירים">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-foreground/80 hover:text-brand-turquoise transition-colors">
                    בית
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-foreground/80 hover:text-brand-turquoise transition-colors">
                    שירותים
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-foreground/80 hover:text-brand-turquoise transition-colors">
                    גלריה
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-foreground/80 hover:text-brand-turquoise transition-colors">
                    צור קשר
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b border-brand-gold/30 pb-2">פרטי התקשרות</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground/80">
                <Phone size={16} className="text-brand-turquoise" />
                <a href="tel:+9721234567" className="hover:text-brand-turquoise transition-colors">
                  972-1234567+
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Mail size={16} className="text-brand-turquoise" />
                <a href="mailto:info@moebride.com" className="hover:text-brand-turquoise transition-colors">
                  info@moebride.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin size={16} className="text-brand-turquoise" />
                <span>רחוב הרצל 123, תל אביב</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Clock size={16} className="text-brand-turquoise" />
                <span>א'-ה': 10:00-19:00, ו': 10:00-14:00</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90">
                <a href="tel:+9721234567" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>התקשר עכשיו</span>
                </a>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="https://wa.me/9721234567" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>וואטסאפ</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} M.O.E bride studio. כל הזכויות שמורות.
          </p>
          <div className="flex flex-col gap-1 md:flex-row md:gap-4 text-sm text-foreground/70 items-center">
            <Link to="/privacy" className="hover:text-brand-turquoise transition-colors underline">מדיניות פרטיות</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-brand-turquoise transition-colors underline">תנאי שימוש</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/accessibility" className="hover:text-brand-turquoise transition-colors underline">נגישות</Link>
          </div>
        </div>
        <div className="mt-4 text-xs text-foreground/60" aria-label="מידע נגישות משפטי">
          <span>
            נגישות: האתר תוכנן לעמוד בתקן WCAG 2.1 AA, כולל תמיכה בקורא מסך, ניווט באמצעות מקלדת, אפשרות הגדלת טקסט, שינוי ניגודיות, הפחתת הנפשה, ותפריט נגישות.
            לשאלות או בקשות נגישות נוספות, ניתן לפנות למייל info@moebride.com.
          </span>
          <br />
          <span>
            במדיניות הפרטיות ותנאי השימוש — האתר עושה שימוש ב-cookies לאנליטיקה ושיפור חוויית המשתמש. מידע אישי מהמשתמש נשמר באופן מאובטח ואינו מועבר לגורמים שלישיים, פרט למטרות התחייבות ושיפור השירות.
          </span>
        </div>
      </div>
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-brand-gold/90 hover:bg-brand-gold text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline focus:outline-brand-turquoise"
        aria-label="חזרה למעלה"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
