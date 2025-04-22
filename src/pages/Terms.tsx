
const TermsPage = () => (
  <main id="main-content" className="container mx-auto p-8 max-w-3xl text-right">
    <h1 className="text-2xl md:text-3xl font-bold mb-5">תנאי שימוש</h1>
    <p className="mb-4">
      בכניסתך לאתר/שימוש בשירות סטודיו M.O.E, הנך מקבל את התנאים המפורטים להלן:
    </p>
    <ul className="list-disc pr-6 mb-4">
      <li>האתר מיועד לקבלת מידע אודות שירותי הסטודיו ותיאום פניות בלבד.</li>
      <li>כל הזכויות על התכנים, המותג והתמונות שמורות לסטודיו M.O.E.</li>
      <li>השימוש באתר כפוף לכל דין, ללא כוונת פגיעה בזכויות צד שלישי.</li>
      <li>הזנת פרטים כוזבים אסורה.</li>
      <li>השימוש באתר מהווה הסכמה למדיניות פרטיות זו ולשימוש בעוגיות כמתואר במדיניות.</li>
      <li>השארת פרטים מהווה הסכמה לקבלת יצירת קשר מהסטודיו בלבד.</li>
      <li>האתר מאפשר פנייה להסרת מידע/עדכון פרטים בטופס 'צור קשר' או במייל info@moebride.com.</li>
    </ul>
    <p className="mt-4">לשאלות – ניתן לפנות אלינו בכל עת.</p>
    <p className="mt-6 font-bold">עדכון תנאי שימוש: {new Date().toLocaleDateString("he-IL")}</p>
  </main>
);

export default TermsPage;
