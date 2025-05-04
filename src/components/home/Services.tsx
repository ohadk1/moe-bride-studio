import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Gown, Female, Sparkles, Scissors, Smile, Stethoscope } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    id: 1,
    title: "עיצוב ותפירת שמלות כלה",
    description: "עיצוב וייצור שמלות המותאמות בדיוק למידות ולטעם האישי שלך, מהחומרים הטובים ביותר.",
    icon: <Gown size={36} />,
    featured: true,
  },
  {
    id: 2,
    title: "שמלות ערב",
    description: "קולקציה מגוונת של שמלות ערב אלגנטיות לכל אירוע, עם אפשרויות לשינויים והתאמות.",
    icon: <Female size={36} />,
    featured: true,
  },
  {
    id: 3,
    title: "איפור מקצועי",
    description: "איפור מקצועי לכלות, אירועים, וקונספטים מיוחדים ע״י מאפרות בעלות ניסיון רב.",
    icon: <Sparkles size={36} />,
    featured: true,
  },
  {
    id: 4,
    title: "תסרוקות מעוצבות",
    description: "תסרוקות מורכבות ועיצובי שיער ייחודיים המותאמים לסגנון האישי שלך ולאירוע.",
    icon: <Scissors size={36} />,
    featured: true,
  },
  {
    id: 5,
    title: "תפירת תחפושות לפורים",
    description: "תחפושות מרהיבות ואיכותיות לפורים בהתאמה אישית, לכל גיל ולכל רעיון.",
    icon: <Smile size={36} />,
    featured: false,
  },
  {
    id: 6,
    title: "שדרוגים ושינויים",
    description: "שירות שדרוג ושינוי שמלות קיימות, התאמת מידות וסגנון לצרכים המשתנים שלך.",
    icon: <Stethoscope size={36} />,
    featured: false,
  },
];

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useIsMobile();

  const servicesPerPage = 2;
  const displayedServices = showAllServices ? services : services.filter(service => service.featured);
  const totalPages = Math.ceil(displayedServices.length / servicesPerPage);
  const mobileServices = isMobile
    ? displayedServices.slice(currentPage * servicesPerPage, (currentPage + 1) * servicesPerPage)
    : displayedServices;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-[#fdf7f3] to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-turquoise/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative inline-block text-brand-gold tracking-tight">
            <span className="relative z-10 drop-shadow-md">השירותים שלנו</span>
            <span className="absolute bottom-1 left-1 w-full h-4 bg-brand-gold/20 -z-0 rounded-xl"></span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            יצירת שמלת החלומות שלך בהתאמה אישית לגופך ולסגנונך האישי – שירות מקצועי, מהיר, עם בדים באיכות הגבוהה ביותר.
          </p>
        </div>

        {!isMobile && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col h-full group border border-gray-100"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-brand-turquoise mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-5">{service.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 mx-auto border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white hover:border-transparent rounded-full px-5 py-1 text-sm shadow-sm"
                  onClick={() => window.location.href = `/services/${service.id}`}
                >
                  פרטים נוספים
                </Button>
              </motion.div>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="flex flex-col space-y-6">
            {mobileServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col h-full group border border-gray-100"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-brand-turquoise/10 rounded-full flex items-center justify-center text-brand-turquoise text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-brand-turquoise mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-5">{service.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 mx-auto border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white hover:border-transparent rounded-full px-5 py-1 text-sm shadow-sm"
                  onClick={() => window.location.href = `/services/${service.id}`}
                >
                  פרטים נוספים
                </Button>
              </motion.div>
            ))}

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-6 gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={prevPage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>

                <div className="text-sm text-gray-500">
                  {currentPage + 1} / {totalPages}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={nextPage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-16 md:mt-20 space-y-6">
          {!showAllServices && services.length > displayedServices.length && (
            <Button
              onClick={() => setShowAllServices(true)}
              className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white px-6 py-2 text-base md:text-lg rounded-full shadow-md"
            >
              הצג את כל השירותים
            </Button>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <Button
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-2 text-base md:text-lg rounded-full shadow-md"
              onClick={() => window.location.href = "/services"}
            >
              לדף השירותים המלא
            </Button>
            <Button
              variant="outline"
              className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white px-6 py-2 text-base md:text-lg rounded-full"
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