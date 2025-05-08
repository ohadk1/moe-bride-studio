
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";

const PrivacyPage = () => (
  <main id="main-content" className="container mx-auto p-8 max-w-3xl text-right animate-fade-in">
    <div className="flex justify-end mb-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand-turquoise text-white font-bold hover:bg-brand-turquoise/80 transition shadow focus:outline focus:outline-brand-gold focus:outline-2"
        aria-label="חזרה לדף הבית"
      >
        <ArrowRight size={20} />
        חזרה לדף הבית
      </Link>
    </div>
    <div className="flex items-center gap-2 mb-5">
      <Shield size={28} className="text-brand-gold" />
      <h1 className="text-2xl md:text-3xl font-bold">מדיניות פרטיות</h1>
    </div>
    
    <div className="space-y-6 text-foreground/90">
      <p>
        הפרטיות שלך חשובה לנו. המדיניות מתארת כיצד אנו אוספים ומשתמשים בנתונים באתר "סטודיו M.O.E".
      </p>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">איזה מידע נאסף?</h2>
        <ul className="list-disc pr-6 space-y-1">
          <li>מידע שמוזן בטופס יצירת הקשר: שם מלא, טלפון, כתובת אימייל ותוכן ההודעה.</li>
          <li>חשוב לציין כי האתר אינו עושה שימוש בפיקסלים, קוקיז או בכל אמצעי מעקב חיצוני.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">שימוש במידע</h2>
        <ul className="list-disc pr-6 space-y-1">
          <li>המידע נאסף רק לצורכי התקשרות ושיפור השירות.</li>
          <li>המידע אינו מועבר לגורמים חיצוניים.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">זכויותיך</h2>
        <p>
          הנך רשאי/ת לבקש גישה, תיקון או מחיקה של המידע שנאסף עליך באמצעות פנייה לכתובת:
          <br />
          <a href="mailto:Moran.beauty90@gmail.com" className="font-bold text-brand-turquoise">Moran.beauty90@gmail.com</a>
        </p>
      </div>
      
      <div className="pt-6 mt-6 border-t border-brand-gold/30">
        <p className="text-sm text-foreground/60">
          עמוד זה עודכן לאחרונה ב-{new Date().toLocaleDateString("he-IL")}
        </p>
      </div>
    </div>
  </main>
);

export default PrivacyPage;
