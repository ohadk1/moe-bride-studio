
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <h1 className="text-2xl md:text-3xl font-bold mb-5">מדיניות פרטיות</h1>
    <p className="mb-4">הפרטיות שלך חשובה לנו. המדיניות מתארת כיצד אנו אוספים ומשתמשים בנתונים באתר "סטודיו M.O.E".</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">איזה מידע נאסף?</h2>
    <ul className="list-disc pr-6 mb-4">
      <li>מידע שמוזן בטפסים: שם, טלפון, מייל ותוכן הודעה.</li>
      <li>נתוני גלישה בסיסיים (IP, מערכת הפעלה, סוג דפדפן), לצורך אנליטיקה ושיפור חוויית משתמש.</li>
      <li>שימוש בעוגיות (Cookies) לאחסון העדפות, אנליטיקה, ולוידוא ביצועים.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">שימוש במידע</h2>
    <ul className="list-disc pr-6 mb-4">
      <li>יצירת קשר במישרין על פי פניה בטופס/מייל בלבד.</li>
      <li>שיפור השירות, התאמת חוויית המשתמש ומענה לצרכים טכניים/תפעוליים של הסטודיו.</li>
      <li>הנתונים לא מועברים לצד ג' למעט שירותי דוא"ל, אחסון וגיבוי בענן, ספקי אנליטיקה (כגון Google Analytics) – בכפוף לדין ולהגנה הולמת.</li>
      <li>האתר אינו סוחר ואינו מאפשר לצדדים שלישיים גישה ישירה או שימוש במידע.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">שמירה ואבטחת מידע</h2>
    <p className="mb-4">
      המידע נשמר במערכות ממוחשבות ומוגן בענן מאובטח, לרבות הצפנה ושימוש בסיסמאות חזקות. ישנה הרשאה מוגבלת למורשים בלבד.
      <br />
      פרטי תשלום/אשראי לא נאספים ולא נשמרים באתר.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">שימוש בעוגיות (Cookies)</h2>
    <p className="mb-4">
      האתר עושה שימוש ב-cookies: למדידת כניסות, תיקונים טכניים, זיהוי שפה ודפדפן, שיפור שירות ולהפעלה תקינה של הפונקציות באתר.
      ניתן לחסום או למחוק cookies בהגדרות הדפדפן האישי, אך יתכן שחלק מהשירותים לא יתפקדו בצורה מיטבית.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">מימוש זכויותיך ויצירת קשר</h2>
    <p>
      באפשרותך לבקש לעיין, לתקן או למחוק את המידע שנשמר אצלנו (בכפוף לחוק).
      פנה/י לכתובת: <span className="font-bold">info@moebride.com</span>
    </p>
    <p className="mt-6 font-bold">עדכון אחרון: {new Date().toLocaleDateString("he-IL")}</p>
  </main>
);

export default PrivacyPage;
