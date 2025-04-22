
const AccessibilityPage = () => (
  <main id="main-content" className="container mx-auto p-8 max-w-3xl text-right">
    <h1 className="text-2xl md:text-3xl font-bold mb-5">הצהרת נגישות</h1>
    <p className="mb-4">
      סטודיו M.O.E רואה חשיבות עליונה בהנגשת האתר לכלל הציבור, כולל אנשים עם מוגבלות. האתר תוכנן לעמוד בתקן WCAG 2.1 לרמת AA.
    </p>
    <ul className="list-disc pr-6 mb-4">
      <li>ניווט מלא באמצעות מקלדת</li>
      <li>אפשרות הגדלת טקסט וחלופה לפונט קריא</li>
      <li>שינוי ניגודיות (קונטרסט גבוה, גווני אפור)</li>
      <li>הפחתת הנפשות אנימציה/מעברים</li>
      <li>מעבר מהיר לתוכן (skip to content)</li>
      <li>תמיכה בקוראי מסך</li>
      <li>הדגשת פוקוס במעברים עפ"י דרישות התקן</li>
      <li>תפריט נגישות לעזרי נגישות דינמיים</li>
    </ul>
    <p className="mb-4">
      אם נתקלתם בבעיה או קושי בשימוש באתר, נשמח לשמוע על כך. פניות בנושא נגישות ניתן לשלוח לכתובת info@moebride.com ונטפל בהן בהקדם.
    </p>
    <p className="mb-2 font-bold">תאריך עדכון אחרון: {new Date().toLocaleDateString("he-IL")}</p>
  </main>
);

export default AccessibilityPage;
