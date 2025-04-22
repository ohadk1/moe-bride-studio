
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "עיצוב ותפירת שמלות כלה",
    description: "עיצוב וייצור שמלות המותאמות בדיוק למידות ולטעם האישי שלך, מהחומרים הטובים ביותר.",
    icon: "/images/icons/wedding-dress.svg",
  },
  {
    id: 2,
    title: "שמלות ערב",
    description: "קולקציה מגוונת של שמלות ערב אלגנטיות לכל אירוע, עם אפשרויות לשינויים והתאמות.",
    icon: "/images/icons/evening-dress.svg",
  },
  {
    id: 3,
    title: "איפור מקצועי",
    description: "איפור מקצועי לכלות, אירועים, וקונספטים מיוחדים ע״י מאפרות בעלות ניסיון רב.",
    icon: "/images/icons/makeup.svg",
  },
  {
    id: 4,
    title: "תסרוקות מעוצבות",
    description: "תסרוקות מורכבות ועיצובי שיער ייחודיים המותאמים לסגנון האישי שלך ולאירוע.",
    icon: "/images/icons/hairstyle.svg",
  },
  {
    id: 5,
    title: "תפירת תחפושות לפורים",
    description: "תחפושות מרהיבות ואיכותיות לפורים בהתאמה אישית, לכל גיל ולכל רעיון.",
    icon: "/images/icons/costume.svg",
  },
];

// Placeholder SVG icons for use if the actual icons aren't available
const placeholderIcons = {
  "wedding-dress": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 14V2M7 14V2M12 2V14M14 2H10M19 14V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V14M5 14H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  "evening-dress": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V14M14 2H10M19 14V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V14M7 14V2M17 14V2M5 14H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  "makeup": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4V12M8 4V12M12 12V21M21 12H3M19 8H16M8 8H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  "hairstyle": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9M8 9V21M8 9H11M16 3C17.6569 3 19 4.34315 19 6C19 7.65685 17.6569 9 16 9M16 9V21M16 9H13M13 3V9M13 9H11M11 9V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  "costume": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9M12 3L12 5M12 5C8.68629 5 6 7.68629 6 11V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V11C18 7.68629 15.3137 5 12 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

const ServiceIcon = ({ type }: { type: string }) => {
  const iconType = type.split('/').pop()?.replace('.svg', '') || 'wedding-dress';
  
  return (
    <div className="w-16 h-16 mx-auto mb-4 text-brand-turquoise" dangerouslySetInnerHTML={{
      __html: placeholderIcons[iconType as keyof typeof placeholderIcons] || placeholderIcons["wedding-dress"]
    }} />
  );
};

const Services = () => {
  return (
    <section className="py-20 silk-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">השירותים שלנו</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-gold/20 -z-0"></span>
          </h2>
          <p className="text-lg text-foreground/80">
            יצירת שמלת החלומות שלך בהתאמה אישית לגופך ולסגנונך האישי – 
            שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg flex flex-col h-full animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ServiceIcon type={service.icon} />
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-foreground/70 mb-6 text-center flex-grow">{service.description}</p>
              <Button asChild variant="outline" className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white mt-auto mx-auto">
                <Link to="/services">פרטים נוספים</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
            <Link to="/services">לכל השירותים</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
