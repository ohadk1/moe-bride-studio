
import { Link } from "react-router-dom";
import { ArrowRight, Copyright } from "lucide-react";

const CopyrightPage = () => (
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
      <Copyright size={28} className="text-brand-gold" />
      <h1 className="text-2xl md:text-3xl font-bold">זכויות יוצרים</h1>
    </div>
    <div className="space-y-4 text-foreground/90">
      <p className="font-bold text-lg">
        כל הזכויות שמורות ל־M.O.E Bride Studio.
      </p>
      <p>
        אין להעתיק, לשכפל, לפרסם או להשתמש בכל תוכן המופיע באתר זה – לרבות תמונות, טקסטים, קבצים או עיצוב גרפי – ללא אישור כתוב מראש מבעלת האתר.
      </p>
      <div className="pt-6 mt-6 border-t border-brand-gold/30">
        <p className="text-sm text-foreground/60">
          עמוד זה עודכן לאחרונה ב-{new Date().toLocaleDateString("he-IL")}
        </p>
      </div>
    </div>
  </main>
);

export default CopyrightPage;
