import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "עיצוב ותפירת שמלות כלה",
    description: "עיצוב וייצור שמלות המותאמות בדיוק למידות ולטעם האישי שלך, מהחומרים הטובים ביותר.",
    icon: "👰",
    featured: true,
  },
  {
    id: 2,
    title: "שמלות ערב",
    description: "קולקציה מגוונת של שמלות ערב אלגנטיות לכל אירוע, עם אפשרויות לשינויים והתאמות.",
    icon: "👗",
    featured: true,
  },
  {
    id: 3,
    title: "איפור מקצועי",
    description: "איפור מקצועי לכלות, אירועים, וקונספטים מיוחדים ע״י מאפרות בעלות ניסיון רב.",
    icon: "💄",
    featured: true,
  },
  {
    id: 4,
    title: "תסרוקות מעוצבות",
    description: "תסרוקות מורכבות ועיצובי שיער ייחודיים המותאמים לסגנון האישי שלך ולאירוע.",
    icon: "💇‍♀️",
    featured: true,
  },
  {
    id: 5,
    title: "תפירת תחפושות לפורים",
    description: "תחפושות מרהיבות ואיכותיות לפורים בהתאמה אישית, לכל גיל ולכל רעיון.",
    icon: "🎭",
    featured: false,
  },
  {
    id: 6,
    title: "שדרוגים ושינויים",
    description: "שירות שדרוג ושינוי שמלות קיימות, התאמת מידות וסגנון לצרכים המשתנים שלך.",
    icon: "✂️",
    featured: false,
  },
];

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices 
    ? services 
    : services.filter(service => service.featured);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#fdf7f3] to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-black mb-6 relative inline-block text-brand-gold tracking-tight">
            <span className="relative z-10 drop-shadow-md">השירותים שלנו</span>
            <span className="absolute bottom-1 left-1 w-full h-4 bg-brand-gold/20 -z-0 rounded-xl"></span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            יצירת שמלת החלומות שלך בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
          </p>
        </div>

        {/* תצוגת מסך גדול - גריד */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedServices.map((service, index) => (
            <div 
              key={service.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col h-full group border border-gray-100">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise text-3xl group-hover:rotate-[8deg] transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center text-brand-turquoise mb-2 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-6">{service.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-auto mx-auto border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white hover:border-transparent rounded-full px-6 py-2 text-sm shadow-sm"
                  onClick={() => window.location.href = `/services/${service.id}`}
                >
                  פרטים נוספים
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center text-gray-400 italic mt-8">
          <p>לצפייה בשירותים נוספים – השתמשו במסך רחב יותר</p>
        </div>

        <div className="text-center mt-20 space-y-6">
          {!showAllServices && services.length > displayedServices.length && (
            <Button 
              onClick={() => setShowAllServices(true)} 
              className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white px-8 py-3 text-lg rounded-full shadow-md"
            >
              הצג את כל השירותים
            </Button>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Button 
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-3 text-lg rounded-full shadow-md"
              onClick={() => window.location.href = "/services"}
            >
              לדף השירותים המלא
            </Button>
            <Button 
              variant="outline" 
              className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white px-8 py-3 text-lg rounded-full"
              onClick={() => window.location.href = "/contact"}
            >
              יצירת קשר
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
