
const PrivacyPage = () => (
  <main id="main-content" className="container mx-auto p-8 max-w-3xl text-right">
    <h1 className="text-2xl md:text-3xl font-bold mb-5">מדיניות פרטיות</h1>
    <p className="mb-4">ברוכה הבאה לסטודיו M.O.E. אנו מכבדים את פרטיותך ומתחייבים לשמירה על מידע אישי.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">איזה מידע נאסף?</h2>
    <ul className="list-disc pr-6 mb-4">
      <li>מידע שמוזן בטפסים: שם, טלפון, מייל ותוכן הודעה</li>
      <li>נתוני גלישה (כגון כתובת IP ודפדפן) לאנליטיקה בלבד</li>
      <li>שימוש בעוגיות (Cookies) לצורך חוויית משתמש ואנליטיקה</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">שימוש במידע</h2>
    <ul className="list-disc pr-6 mb-4">
      <li>יצירת קשר בנוגע לשירותי הסטודיו בלבד</li>
      <li>שיפור חוויית שימוש ושירות</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">שמירה ואבטחת מידע</h2>
    <p className="mb-4">המידע נשמר בענן מאובטח. לא מועבר לצד ג' למעט לצורך שירות (כמו חברת דוא"ל או אנליטיקה), ורק בהתאם לדין.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">שימוש בעוגיות (Cookies)</h2>
    <p className="mb-4">
      האתר עושה שימוש ב-cookies: לדיווח תקלות, הפעלת פונקציות שימושיות, מדידות אנליטיות, ושיפור השירות. ניתן לחסום cookies בהגדרות הדפדפן.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">צור קשר בנושא פרטיות</h2>
    <p>לכל פנייה, בקשה לעיון, תיקון או מחיקה, יש לפנות לכתובת: info@moebride.com</p>
    <p className="mt-6 font-bold">עדכון אחרון: {new Date().toLocaleDateString("he-IL")}</p>
  </main>
);

export default PrivacyPage;
