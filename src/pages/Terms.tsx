
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <h1 className="text-2xl md:text-3xl font-bold mb-5">תנאי שימוש</h1>
    <p className="mb-4">
      בכניסתך לאתר/שימוש בשירות סטודיו M.O.E, הנך מאשר/ת את התנאים הבאים במלואם:
    </p>
    <ul className="list-disc pr-6 mb-4">
      <li>השימוש באתר מיועד לצפייה, קבלת מידע, ותיאום פנייה לשירותי סטודיו M.O.E בלבד.</li>
      <li>כל התכנים והמידע הינם רכוש בלעדי של סטודיו M.O.E, ואסור להעתיק/לפרסם/להפיץ ללא אישור בכתב.</li>
      <li>מותגי הסטודיו והלוגו מוגנים בזכויות יוצרים.</li>
      <li>אין למסור פרטי קשר פיקטיביים או להשתמש בתכני האתר לא חוקית.</li>
      <li>נתוני משתמש נשמרים בפרטיות ומטופלים על פי <Link to="/privacy" className="text-brand-turquoise underline">מדיניות הפרטיות</Link>.</li>
      <li>השימוש באתר פועל לפי חוקי מדינת ישראל בלבד.</li>
      <li>פניות להסרת מידע/עדכון פרטים יתבצעו בכתובת: <span className="font-bold">info@moebride.com</span>.</li>
      <li>השימוש באתר כרוך בקבלת תנאים אלו — לרבות שימוש בעוגיות (cookies) כמפורט במדיניות.</li>
      <li>הצהרת נגישות המלאה מופיעה בדף <Link to="/accessibility" className="text-brand-turquoise underline">נגישות</Link>.</li>
    </ul>
    <p className="mt-4">
      שאלות או הבהרות — נשמח לעמוד לשירותכם.
    </p>
    <p className="mt-6 font-bold">עדכון תנאי שימוש: {new Date().toLocaleDateString("he-IL")}</p>
  </main>
);

export default TermsPage;
