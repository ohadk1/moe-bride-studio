
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const TermsPage = () => (
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
      <FileText size={28} className="text-brand-gold" />
      <h1 className="text-2xl md:text-3xl font-bold">תנאי שימוש</h1>
    </div>
    <div className="space-y-6 text-foreground/90">
      <p className="font-medium">
        בכניסתך לאתר "סטודיו M.O.E", הנך מסכים/ה לתנאי השימוש הבאים:
      </p>
      
      <ul className="list-disc pr-6 space-y-3">
        <li>
          <strong>זכויות יוצרים:</strong> כל התכנים באתר (תמונות, טקסטים, לוגואים, סרטונים) הם רכוש בלעדי של בעלת האתר ואסורים להעתקה ללא רשות בכתב.
        </li>
        <li>
          <strong>תוכן המידע:</strong> האתר מספק מידע כללי בלבד, ואין לראות בו התחייבות לתוצאה כלשהי.
        </li>
        <li>
          <strong>שינויים בתוכן:</strong> ייתכנו שינויים בתכנים, מחיקות ועדכונים ללא התראה מוקדמת.
        </li>
        <li>
          <strong>קישורים חיצוניים:</strong> באתר קיימים קישורים לאתרים חיצוניים – אין אחריות עליהם או על תוכנם.
        </li>
        <li>
          <strong>חוקים ושיפוט:</strong> כל שימוש באתר כפוף לחוקי מדינת ישראל. סמכות השיפוט תתבצע בבית משפט באזור הדרום או המרכז לפי שיקול דעת בעלת האתר.
        </li>
      </ul>
      
      <div className="pt-6 mt-6 border-t border-brand-gold/30">
        <p className="text-sm text-foreground/60">
          עמוד זה עודכן לאחרונה ב-{new Date().toLocaleDateString("he-IL")}
        </p>
      </div>
    </div>
  </main>
);

export default TermsPage;
