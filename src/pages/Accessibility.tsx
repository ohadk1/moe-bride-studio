
import { Link } from 'react-router-dom';
import { Accessibility, ArrowRight } from "lucide-react";

const AccessibilityPage = () => (
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
    <h1 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-2 justify-end">
      <Accessibility size={28} className="text-brand-turquoise" />
      הצהרת נגישות
    </h1>
    <p className="mb-4">
      סטודיו M.O.E רואה חשיבות עליונה בהנגשת האתר לכלל הציבור, כולל אנשים עם מוגבלות.
      האתר עומד בדרישות חוק שוויון זכויות לאנשים עם מוגבלות (תיקון 2005), בתקנות הנגישות, ובתקן הישראלי 5568 (בהתאמה לתקן WCAG 2.1 לרמת AA).
    </p>
    <h2 className="text-xl font-bold mt-5 mb-3">כלי הנגישות באתר:</h2>
    <ul className="list-disc pr-6 mb-5 space-y-1">
      <li>ניווט מלא באמצעות מקלדת בכל אזורי האתר ותפריטים.</li>
      <li>אפשרות הגדלת טקסט עד 150% והצגת גופן קריא.</li>
      <li>שינוי ניגודיות (קונטרסט גבוה/גווני אפור) בלחיצת כפתור.</li>
      <li>תרחיש של הפחתת הנפשות (אנימציות/מעברים), להפחתת עומס קוגניטיבי.</li>
      <li>אפשרות מעבר מהיר לתוכן הראשי ("דלג לתוכן"), גלוי ונתמך בכל הדפדפנים.</li>
      <li>תמיכה מלאה בקוראי מסך (כולל aria-labels, תקינות מבנה כותרות ונגישות שדות וקישורים).</li>
      <li>כל מצב פוקוס באתר מובלט חזותית על פי דרישות התקן (קו זהב, רקע בולט).</li>
      <li>תפריט נגישות ייעודי הניתן לפתיחה מכל עמוד באתר.</li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-3">שימוש בעזרי נגישות ותאימות:</h2>
    <ul className="list-disc pr-6 mb-5 space-y-1">
      <li>תמיכה מלאה בטאץ', עכבר, מקלדת ומסכי מגע.</li>
      <li>ניתן להפעיל את כל תפריט הנגישות באמצעות קיצורי מקשים/מקשי טאב.</li>
      <li>האתר עובר בדיקות תקופתיות לווידוא תאימות והתאמות אישיות לפי פניות.</li>
      <li>התאמה לתוספי נגישות ומעבר מהיר בין אזורים.</li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-3">פידבק וטיפול בפניות נגישות:</h2>
    <p className="mb-4">
      חשוב לנו לשמור על אתר נגיש. במידה ונתקלתם במכשול או קושי טכני/תפקודי — פנו אלינו:
      <br />
      <span className="font-bold">info@moebride.com</span>
      <br />
      נשתדל לתקן במהירות האפשרית, בהתאם לדרישות הנגישות ולשביעות רצונכם.
    </p>
    <p className="mb-2 font-bold">
      תאריך עדכון אחרון: {new Date().toLocaleDateString("he-IL")}
    </p>
  </main>
);

export default AccessibilityPage;
